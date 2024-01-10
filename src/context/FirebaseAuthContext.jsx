/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../services/firebase/config.js";

// Crea el contexto de autenticación
const AuthContext = createContext();

// Hook para acceder al contexto de autenticación desde cualquier componente
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
    }
    return context;
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Función para registrar un usuario con email y contraseña
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Función para iniciar sesión con email y contraseña
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Función para iniciar sesión con Google
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Función para iniciar sesión con Facebook
    const loginWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Función para cerrar sesión
    const logout = () => {
        return signOut(auth);
    };

    // Función para restablecer contraseña
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // Efecto para establecer el usuario actual
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Objeto de contexto
    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        loginWithFacebook,
    };

    // Renderiza el proveedor de contexto
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};