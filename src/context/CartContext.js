/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // funcion para agregar un item al carrito
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // funcion para remover un item del carrito
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    // funcion para limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    // funcion para obtener el precio total del carrito
    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0);
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
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
