/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useAuth } from '../context/FirebaseAuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebase/config.js';

// Crea el contexto del carrito
const CartContext = createContext(
    {
        cartItems: [],
    }
);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    const { currentUser } = useAuth();

    // funcion para obtener el carrito del usuario
    const getCart = async () => {
        const cartRef = doc(db, 'carts', currentUser.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
            setCartItems(cartSnap.data().items);
        } else {
            setCartItems([]);
        }
    };

    // funcion para actualizar el carrito del usuario
    const updateCart = async () => {
        const cartRef = doc(db, 'carts', currentUser.uid);
        await setDoc(cartRef, { items: cartItems });
        // guarda cartItems en localStorage para que persista al recargar la pagina
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    // actualiza el carrito cuando se loguea o desloguea el usuario
    useEffect(() => {
        if (currentUser) {
            getCart();
        }
    }, [currentUser]);

    // actualiza el carrito cuando se agrega o remueve un item
    useEffect(() => {
        if (currentUser) {
            updateCart();
        }
    }, [cartItems]);

    // funcion para agregar un item al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    // funcion para remover un item del carrito
    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);
    };

    // funcion para limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    // funcion para obtener el precio total del carrito sabiendo el precio de cada item y su cantidad
    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    // funcion para devolver la cantidad de items en el carrito
    const getQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    // funcion para saber si un item esta en el carrito
    const isInCart = (id) => {
        return cartItems.some((item) => item.id === id);
    };

    //funcion para obtener un item del carrito
    const getItem = (id) => {
        return cartItems.find((item) => item.id === id);
    };

    // retornamos el provider del contexto
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalPrice,
                getQuantity,
                isInCart,
                getItem,
                setCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };   
