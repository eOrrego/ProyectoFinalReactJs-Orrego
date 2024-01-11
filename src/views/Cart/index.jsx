import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartItems, removeFromCart, clearCart, getQuantity, getTotalPrice } = useContext(CartContext);

    if (getQuantity() === 0) {
        return (
            <div className="
            container
            ">
                <div className="
                row
                ">
                    <div className="
                    col-12 
                    text-center
                    ">
                        <h2 className="
                        display-3
                        ">Carrito</h2>
                        <h3 className="
                        display-5
                        mb-5
                        ">Tu carrito está vacío</h3>
                        <Link to="/" className="
                        btn 
                        btn-outline-primary
                        ">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="display-3">Carrito</h2>
                    <h3 className="display-5">Total: ${getTotalPrice()}</h3>
                    <Link to="/" className="btn btn-outline-primary btn-sm mx-2">Volver al inicio</Link>
                    <button className="btn btn-outline-danger btn-sm mx-2" onClick={clearCart}>Vaciar carrito</button>
                </div>
            </div>
            <div className="row">
                <div className="
                col-11
                my-5
                mx-auto
                ">
                    <table className="
                    table 
                    table-striped
                    table-hover
                    table-bordered
                    text-black
                    ">
                        <thead>
                            <tr>
                                <th scope="col"></th>
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
                                    <td><img src={item.images} alt={item.name} width="50" /></td>
                                    <td className="
                                    align-middle
                                    ">{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price * item.quantity}</td>
                                    <td><button className="
                                    btn 
                                    btn-outline-danger
                                    btn-sm
                                    " onClick={() => removeFromCart(item.id)}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <Link to="/checkout" className="
            btn btn-outline-success btn-lg
            ">Finalizar compra</Link>
        </div>

    )
}

export default Cart