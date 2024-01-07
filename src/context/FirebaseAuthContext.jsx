/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { auth, signInWithGoogle, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "../services/firebase/config.js";

// Crea el contexto de autenticación
const AuthContext = createContext();

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Función para registrar un usuario con email y contraseña
    const signup = async (email, password) => {
        try {
            const respuesta = await createUserWithEmailAndPassword(auth, email, password);
            const user = respuesta.user;
            setCurrentUser(user);
        } catch (error) {
            console.log("Error en el registro", error);
        }
    }

    // Función para iniciar sesión con email y contraseña
    const login = async (email, password) => {
        try {
            const respuesta = await signInWithEmailAndPassword(auth, email, password);
            const user = respuesta.user;
            setCurrentUser(user);
        } catch (error) {
            console.log("Error en el login", error);
        }
    }

    // Función para iniciar sesión con Google
    const loginWithGoogle = async () => {
        try {
            const respuesta = await signInWithGoogle(auth);
            const user = respuesta.user;
            setCurrentUser(user);
        } catch (error) {
            console.log("Error en el login con Google", error);
        }
    }

    // Función para cerrar sesión
    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
        } catch (error) {
            console.log("Error en el logout", error);
        }
    }

    // Efecto para establecer el usuario actual
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // Objeto de contexto
    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};