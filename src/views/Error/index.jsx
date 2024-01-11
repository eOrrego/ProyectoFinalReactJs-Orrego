import { useRouteError } from "react-router-dom"
import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer";

const Error404 = () => {

    const error = useRouteError();

    return (
        <>
            <NavbarPage />
            <h1>
                {error.status} - Ops!
            </h1>
            <p>
                {error.data}
            </p>
            <Footer />
        </>
    )
}

export default Error404