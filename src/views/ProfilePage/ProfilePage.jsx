import { useEffect, useState } from 'react';
import { useAuth } from "../../context/FirebaseAuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/config.js";

const ProfilePage = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            if (currentUser) {
                const ordersRef = collection(db, "orders");
                const snapshot = await getDocs(query(ordersRef, where("userId", "==", currentUser.uid)));
                const ordersData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setOrders(ordersData);
            }
        };
        fetchOrders();
    }, [currentUser]);

    console.log(orders);

    return (
        <div>
            <h1>Ordenes del usuario</h1>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>{order.id}</li>
                    ))}
                </ul>
            ) : (
                <p>No tiene compras realizadas</p>
            )}
        </div>
    );
};

export default ProfilePage;
