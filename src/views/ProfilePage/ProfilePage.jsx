import { useEffect, useState } from 'react';
import { useAuth } from "../../context/FirebaseAuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/config.js";
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            const getOrders = async () => {
                if (!currentUser) return;
                const ordersRef = collection(db, "orders");
                const ordersSnapshot = await getDocs(query(ordersRef, where("userId", "==", currentUser.uid)));
                const ordersList = ordersSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setOrders(ordersList);
                setLoading(false);
            };
            getOrders();
        } catch (error) {
            console.log(error);
        }
    }, [currentUser]);

    return (
        <div className="container">
            <h1 className="text-center">Mis compras</h1>
            <div className="row">
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">cargando...</span>
                        </div>
                    </div>
                ) : (
                    orders.map((order) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={order.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Compra N° {order.id}</h5>
                                    <p className="card-text">Total: ${order.total}</p>
                                    <p className="card-text">Fecha: {order.date.toDate().toLocaleDateString()}</p>
                                    <Link to={`/order/${order.id}`} className="btn btn-primary">
                                        Ver detalle
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
