import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/FirebaseAuthContext'
import { AlertMessage } from '../../components/AlertMessage/AlertMessage'

const RegisterPage = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <h1>Registrarse</h1>
                    <form onSubmit={handleSumit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={user.email}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                value={user.password}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Registrarse
                        </button>
                        <div className="d-flex justify-content-between mt-3">
                            <Link to="/login">Iniciar sesión</Link>
                            <Link to="/reset-password">Olvidé mi contraseña</Link>
                        </div>
                    </form>
                    {error && <AlertMessage message={error} />}
                </div>
            </div>
        </div>
    )
}

export default RegisterPage