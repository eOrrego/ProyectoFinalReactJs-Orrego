import { Button } from "react-bootstrap";
import { BsPerson } from 'react-icons/Bs';
import { useAuth } from "../../context/FirebaseAuthContext";
import { Navigate, Link } from "react-router-dom";

const Profile = () => {

    const { currentUser, logout } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    const handleLogout = () => {
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