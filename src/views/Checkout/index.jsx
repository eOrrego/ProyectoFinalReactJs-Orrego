import { useContext, useState } from "react";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/config.js";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "@firebase/firestore";
import { useAuth } from "../../context/FirebaseAuthContext.jsx";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [cartItemsCopy, setCartItemsCopy] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);

    // aplicar logica de autenticacion con AuthContext
    const { currentUser } = useAuth();

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cartItems,
                total: getTotalPrice(),
                date: Timestamp.fromDate(new Date()),
                userId: currentUser.uid,
            };

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cartItems.map((item) => item.id);

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach((doc) => {
                const product = doc.data();
                const stockDb = product.stock;

                const productAddedToCart = cartItems.find((item) => item.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ ...product, id: doc.id });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const docRef = await addDoc(collection(db, "orders"), objOrder);
                setOrderId(docRef.id);
                setCartItemsCopy(cartItems);
                setTotalPrice(getTotalPrice());
                clearCart();
            } else {
                console.log("Productos sin stock");
                throw new Error("Productos sin stock");
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (orderId) {
        return (
            <div>
                <h1>Compra finalizada</h1>
                {
                    cartItemsCopy.map((item) => (
                        <div key={item.id}>
                            <p>Producto: {item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio: ${item.price}</p>
                        </div>
                    ))
                }
                <p>Total: ${totalPrice}</p>
                <p>Tu número de orden es {orderId}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout