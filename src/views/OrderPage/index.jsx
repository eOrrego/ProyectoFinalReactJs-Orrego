import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/config.js";

const OrderPage = () => {
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    const { orderId } = useParams();

    useEffect(() => {
        const getOrder = async () => {
            const orderDoc = doc(db, "orders", orderId);
            const orderSnapshot = await getDoc(orderDoc);
            const orderData = orderSnapshot.data();
            setOrder({ id: orderSnapshot.id, ...orderData });
            setLoading(false);
        }
        getOrder();
    }, [orderId]);

    if (loading) {
        return (
            <div className="container">
                <h2 className="text-center text-uppercase my-5">Cargando...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="text-center text-uppercase my-5">Detalle de compra</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Compra N° {order.id}</h5>
                    <p className="card-text">Total: ${order.total}</p>
                    <p className="card-text">Fecha: {order.date.toDate().toLocaleDateString()}</p>
                    <p className="card-text">Nombre: {order.buyer.name}</p>
                    <p className="card-text">Email: {order.buyer.email}</p>
                    <p className="card-text">Teléfono: {order.buyer.phone}</p>
                    <p className="card-text">Productos:</p>
                    <ul className="list-group">
                        {order.items.map((item) => (
                            <li className="list-group-item" key={item.id}>
                                {item.name} - ${item.price} - Cantidad: {item.quantity} - Subtotal: ${item.price * item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;