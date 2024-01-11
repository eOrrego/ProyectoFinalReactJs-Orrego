/* eslint-disable react/prop-types */
import { useState } from 'react';

const ItemCount = ({ stock, handleOnAdd, itemInCart }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (itemInCart) {
            if (count < stock - itemInCart.quantity) {
                setCount(count + 1);
            }
        } else {
            if (count < stock) {
                setCount(count + 1);
            }
        }
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0 && count <= stock) {
            handleOnAdd(count);
        }
    };

    return (
        <div
            className="
            d-flex 
            justify-content-center 
            align-items-center 
            my-3
            ">
            {
                stock == itemInCart?.quantity
                    ? <span className="
                    badge 
                    bg-danger
                    ">No hay stock</span>
                    : <div className="
                    d-flex 
                    justify-content-center 
                    align-items-center
                    ">
                        <button
                            className="btn 
                            btn-outline-secondary 
                            mx-2
                            "
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className="
                        mx-2
                        font-weight-bold
                        text-uppercase
                        ">{count}</span>
                        <button
                            className="
                            btn 
                            btn-outline-secondary 
                            mx-2
                            "
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                        <button
                            className="
                            btn 
                            btn-outline-secondary 
                            mx-2
                            "
                            onClick={handleAddToCart}
                        >
                            Agregar al carrito
                        </button>
                    </div>
            }
        </div>
    );
};

export default ItemCount;
