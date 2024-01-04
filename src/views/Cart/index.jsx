import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartItems, removeFromCart, clearCart, getQuantity, getTotalPrice } = useContext(CartContext);

    if (getQuantity() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-1">Carrito</h1>
                        <h2 className="display-4">Tu carrito está vacío</h2>
                        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-1">Carrito</h1>
                    <h2 className="display-4">Total: ${getTotalPrice()}</h2>
                    <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                    <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio unitario</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price * item.quantity}</td>
                                    <td><button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Cart