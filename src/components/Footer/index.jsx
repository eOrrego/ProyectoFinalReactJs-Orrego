import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div>
                <Container fluid
                    className="d-flex justify-content-center align-items-center bg-body-tertiary mt-5"
                    style={{ height: '150px' }}
                >
                    <Link to="/">
                        <img
                            src="https://clubdebeneficios.com/static/version1696956463/frontend/ClubDeBeneficios/default/es_AR/images/logo.svg"
                            alt="Club de Beneficios"
                            width="120"
                            height="45"
                            className="d-inline-block align-text-top"
                        />
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default Footer