import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/Bs';
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/FirebaseAuthContext";

const NavbarPage = () => {
    const { currentUser } = useAuth();

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
                            <NavDropdown title="OFERTAS" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action1">
                                    Cyber Club
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action2">
                                    Ofertas IMPERDIBLES
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Combos y Cajas
                                </NavDropdown.Item>
                            </NavDropdown>

                            {currentUser ? (
                                <div className="nav-link text-uppercase text-black">
                                    {currentUser.email}
                                </div>
                            )
                                : (
                                    <Link to="/login" className="nav-link text-uppercase">
                                        Login
                                    </Link>
                                )}

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar Productos"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">
                                <i>
                                    <BsSearch />
                                </i>
                            </Button>
                        </Form>
                        <Profile />
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavbarPage;