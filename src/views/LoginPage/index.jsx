import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/FirebaseAuthContext";
import { AlertMessage } from "../../components/AlertMessage/AlertMessage";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";


const LoginPage = () => {
    const navigate = useNavigate();
    const { login, loginWithGoogle, resetPassword, currentUser, loginWithFacebook } = useAuth();
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
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
            await loginWithFacebook();
            navigate("/");
        }
        catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) {
            setError("Debe ingresar un email válido");
            return;
        }
        try {
            await resetPassword(user.email);
            setError("Se ha enviado un email para restablecer la contraseña");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) => {
        setUser({
            ...user,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1 className="text-center my-5">Iniciar sesión</h1>
                    {error && <AlertMessage message={error} />}
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
                                value={user.email}
                                onChange={handleChange}
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
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to="/register" className="btn w-100">
                            <FiUserPlus /> Crear una cuenta
                        </Link>
                    </div>
                    <div className="text-center mt-3">
                        <button
                            className="btn w-100"
                            onClick={handleGoogleSignIn}
                        >
                            <FcGoogle /> Iniciar sesión con Google
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <button
                            className="btn w-100"
                            onClick={handleFacebookSignIn}
                        >
                            <FaFacebook /> Iniciar sesión con Facebook
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <button
                            className="btn w-100"
                            onClick={handleResetPassword}
                        >
                            <FaUnlock /> Restablecer contraseña
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

