import { useState } from 'react'
import { useAuth } from '../../context/FirebaseAuthContext'
import { Navigate } from 'react-router-dom';
const LoginPage = () => {
    const { login, loginWithGoogle, currentUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (currentUser) {
        return <Navigate to="/" />
    }


    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        loginWithGoogle();
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={handleEmailChange} />
                <input type="password" placeholder="Password" onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </>
    )
}

export default LoginPage