import { Outlet } from "react-router-dom"
import NavbarPage from "../components/Navbar/NavbarPage"
import Footer from "../components/Footer"
import { useAuth } from "../context/FirebaseAuthContext";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase/config.js";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

const LayOutPublic = () => {
    const { currentUser } = useAuth();
    const { setCartItems } = useContext(CartContext);

    // trae los items del carrito del usuario logueado desde firebase y los guarda en el contexto del carrito para que esten disponibles en toda la app
    useEffect(() => {
        const getCartItemsFirebase = async () => {
            if (currentUser) {
                const cartItemsCollection = collection(db, 'cartPending');
                const cartItemsQuery = query(cartItemsCollection, where('userId', '==', currentUser.uid));
                const cartItemsSnapshot = await getDocs(cartItemsQuery);
                const cartItemsList = cartItemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const cartItems = cartItemsList[0]?.cartItems || [];
                setCartItems(cartItems);
            }
        };
        getCartItemsFirebase();
    }, [currentUser, setCartItems]);

    // borrar el documento del carrito pendiente del usuario logueado en firebase para que no quede guardado en la base de datos
    useEffect(() => {
        const deleteCartPendingFirebase = async () => {
            if (currentUser) {
                const cartPendingCollection = collection(db, 'cartPending');
                const cartPendingQuery = query(cartPendingCollection, where('userId', '==', currentUser.uid));
                const cartPendingSnapshot = await getDocs(cartPendingQuery);
                const cartPendingList = cartPendingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const cartPending = cartPendingList[0]?.cartItems || [];
                if (cartPending.length > 0) {
                    const cartPendingId = cartPendingList[0]?.id;
                    const cartPendingRef = doc(db, 'cartPending', cartPendingId);
                    await deleteDoc(cartPendingRef);
                }
            }
        };
        deleteCartPendingFirebase();
    }, [currentUser]);

    return (
        <>
            <NavbarPage />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayOutPublic