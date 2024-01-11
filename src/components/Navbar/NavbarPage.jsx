import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/Bs';
import Profile from "../Profile/Profile";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/FirebaseAuthContext";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const NavbarPage = () => {
    const { cartItems, getQuantity, clearCart } = useContext(CartContext);
    const { currentUser, logout } = useAuth();
    const [queryId, setQueryId] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${queryId}`);
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to="/" className="navbar-brand">
                        <Navbar.Brand>
                            <img
                                src="https://clubdebeneficios.com/static/version1696956463/frontend/ClubDeBeneficios/default/es_AR/images/logo.svg"
                                alt="Club de Beneficios"
                                width="120"
                                height="45"
                                className="d-inline-block align-text-top"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="CATEGORÍAS" id="navbarScrollingDropdown">
                                <Link to="/category/combos" className="dropdown-item">
                                    <img
                                        src="https://clubdebeneficios.com/media/catalog/category/combos_.png"
                                        alt="Club de Beneficios"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="ms-2">
                                        Combos
                                    </span>
                                </Link>
                                <Link to="/category/almacen" className="dropdown-item">
                                    <img
                                        src="https://clubdebeneficios.com/media/catalog/category/almacen_1_.png"
                                        alt="Club de Beneficios"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="ms-2">
                                        Almacén
                                    </span>
                                </Link>
                                <Link to="/category/bebidas" className="dropdown-item">
                                    <img
                                        src="https://clubdebeneficios.com/media/catalog/category/Bebidas_A.png"
                                        alt="Club de Beneficios"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="ms-2">
                                        Bebidas
                                    </span>
                                </Link>
                                <Link to="/category/jabon-ropa" className="dropdown-item">
                                    <img
                                        src="https://clubdebeneficios.com/media/catalog/category/cuiado_de_la_ropa_.png"
                                        alt="Club de Beneficios"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="ms-2">
                                        Cuidado de la Ropa
                                    </span>
                                </Link>
                                <Link to="/category/limpieza" className="dropdown-item">
                                    <img
                                        src="https://clubdebeneficios.com/media/catalog/category/limpieza.png"
                                        alt="Club de Beneficios"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="ms-2">
                                        Limpieza
                                    </span>
                                </Link>
                                <Link to="/category/perfumeria" className="dropdown-item">
                                    <img
                                        src="https://clubdebeneficios.com/media/catalog/category/Perfumeria_1_.png"
                                        alt="Club de Beneficios"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="ms-2">
                                        Perfumería
                                    </span>
                                </Link>
                            </NavDropdown>
                            {currentUser ? (
                                <div className="
                                border
                                border-2
                                border-success
                                rounded-pill
                                text-center
                                text-success
                                fw-bold
                                px-2
                                py-1
                                ms-3
                                ">
                                    {currentUser.email}
                                </div>
                            )
                                : (
                                    <Link to="/login" className="
                                    btn btn-outline-success
                                    btn-block
                                    text-uppercase
                                    ms-3
                                    ">
                                        Ingresar
                                    </Link>
                                )}
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSearch}>
                            <Form.Control
                                type="search"
                                placeholder="Buscar Productos"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => setQueryId(e.target.value)}
                            />
                            {
                                queryId ?
                                    <Button variant="outline-success" type="submit">
                                        <BsSearch />
                                    </Button>
                                    :
                                    <Button variant="outline-success" type="submit" disabled>
                                        <BsSearch />
                                    </Button>
                            }
                        </Form>
                        <Profile
                            cartItems={cartItems}
                            clearCart={clearCart}
                            currentUser={currentUser}
                            logout={logout}
                        />
                        <CartWidget
                            getQuantity={getQuantity}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavbarPage;