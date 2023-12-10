import { Outlet } from "react-router-dom"
import NavbarPage from "../components/Navbar/NavbarPage"
import Footer from "../components/Footer"

const LayOutPublic = () => {
    return (
        <>
            <NavbarPage />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayOutPublic