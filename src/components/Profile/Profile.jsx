import { Button } from "react-bootstrap";
import { BsPerson } from 'react-icons/Bs';

const Profile = () => {
    return (
        <>
            <Button variant="outline-dark" className="ms-5 me-2">
                <i className="fs-5 me-2">
                    <BsPerson />
                </i>
                <span>
                    {name}
                </span>
            </Button>
        </>
    );
};

export default Profile;