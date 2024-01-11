/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { BsPerson } from 'react-icons/Bs';
import { Navigate, Link } from "react-router-dom";

const Profile = ({ clearCart, currentUser, logout }) => {

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    const handleLogout = () => {
        clearCart();
        logout();
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