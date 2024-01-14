/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { BsPerson } from 'react-icons/Bs';
import { Navigate, Link } from "react-router-dom";
import { db } from "../../services/firebase/config.js";
import { addDoc, collection, Timestamp, doc, deleteDoc, query, where, getDocs } from "firebase/firestore";

const Profile = ({ cartItems, clearCart, currentUser, logout }) => {

    const saveCartPending = async () => {
        const objCartPending = {
            cartItems,
            date: Timestamp.fromDate(new Date()),
            userId: currentUser.uid,
        };

        try {
            //borro el carrito pendiente anterior si es que existe
            const cartPendingCollection = collection(db, 'cartPending');
            const cartPendingQuery = query(cartPendingCollection, where('userId', '==', currentUser.uid));
            const cartPendingSnapshot = await getDocs(cartPendingQuery);
            const cartPendingList = cartPendingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const cartPending = cartPendingList[0]?.cartItems || [];
            if (cartPending.length >= 0) {
                const cartPendingId = cartPendingList[0]?.id;
                const cartPendingRef = doc(db, 'cartPending', cartPendingId);
                await deleteDoc(cartPendingRef);
            }
            //creo un nuevo carrito pendiente con los items actuales del carrito del usuario logueado
            await addDoc(collection(db, 'cartPending'), objCartPending);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = async () => {
        if (cartItems.length > 0) {
            await saveCartPending();
            clearCart();
        }
        logout();
    };

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Link to="/profile" className="navbar-brand mx-2">
                <Button variant="outline-success">
                    <BsPerson />
                </Button>
            </Link>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </>
    );
};

export default Profile;