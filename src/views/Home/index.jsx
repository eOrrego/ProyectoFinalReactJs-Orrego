import NavbarPage from "../../components/Navbar/NavbarPage";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <>
            <NavbarPage />
            <ItemListContainer greeting={"Bienvenido a Club de beneficios"} />
        </>
    )
}

export default Home