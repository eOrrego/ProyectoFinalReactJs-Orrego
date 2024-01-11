import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/FirebaseAuthContext'
import { AlertMessage } from '../../components/AlertMessage/AlertMessage'
import { FiUserPlus } from 'react-icons/fi'

const RegisterPage = () => {
    const navigate = useNavigate();
    const { signup, currentUser } = useAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

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
            <div className="row justify-content-center my-5">
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
                        <div className="text-center mt-4">
                            <Link to="/login" className="btn w-100">
                                <FiUserPlus /> Iniciar sesión
                            </Link>
                        </div>
                    </form>
                    {error && <AlertMessage message={error} />}
                </div>
            </div>
        </div>
    )
}

export default RegisterPage