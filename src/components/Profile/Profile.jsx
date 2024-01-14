/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { BsPerson } from 'react-icons/Bs';
import { Navigate, Link } from "react-router-dom";
// import { db } from "../../services/firebase/config.js";
// import { addDoc, collection, Timestamp } from "@firebase/firestore";

const Profile = ({ cartItems, clearCart, currentUser, logout }) => {

    // const saveCartPending = async () => {
    //     const objCartPending = {
    //         cartItems,
    //         date: Timestamp.fromDate(new Date()),
    //         userId: currentUser.uid,
    //     };

    //     try {
    //         const cartPendingRef = collection(db, "cartPending");
    //         await addDoc(cartPendingRef, objCartPending);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleLogout = async () => {
        await logout();
        if (cartItems.length > 0) {
            // await saveCartPending();
            clearCart();
        }
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