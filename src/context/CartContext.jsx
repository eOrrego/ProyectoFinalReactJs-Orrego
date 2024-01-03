/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const CartContext = createContext(
    {
        cartItems: [],
    }
);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    console.log(cartItems);

    // funcion para agregar un item al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const updateCart = [...cartItems];
            updateCart.forEach((element) => {
                if (element.id === item.id) {
                    element.quantity += quantity;
                }
            });
            setCartItems(updateCart);
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    // funcion para remover un item del carrito
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
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
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };   
