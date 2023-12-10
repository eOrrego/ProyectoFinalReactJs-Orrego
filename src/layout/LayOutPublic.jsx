import { Outlet } from "react-router-dom"
import NavbarPage from "../components/Navbar/NavbarPage"

const LayOutPublic = () => {
    return (
        <>
            <NavbarPage />
            <Outlet />
            <div>
                <h1>Footer</h1>
            </div>
        </>
    )
}

export default LayOutPublic