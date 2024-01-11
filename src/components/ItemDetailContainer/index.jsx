/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetailContainer = (
    {
        product = {
            category: "category",
            name: "name",
            price: "price",
            images: "images",
            stock: "stock",
        },
        currentUser,
    }
) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addToCart, getItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
        };

        addToCart(item, quantity);
    }

    return (
        <>
            <div
                className="card mb-3 w-75 mx-auto mt-2 mb-3 shadow-sm border border-1 border-secondary rounded-3 text-truncate text-break text-wrap text-center text-nowrap"
            >
                <div
                    className="row g-0"
                >
                    <div
                        className="col-md-4"
                    >
                        <span
                            className="card-text text-uppercase fw-bold text-muted m-2 d-block text-center bg-light p-2 rounded-pill mx-auto shadow-sm border border-1 border-secondary"
                        >{product.category}</span>
                        <img src={product.images}
                            className="img-fluid rounded-start"
                            alt={product.name} />
                    </div>
                    <div
                        className="col-md-8"
                    >
                        <div
                            className="card-body"
                        >
                            <h5
                                className="card-title"
                            >{product.name}</h5>
                            <span
                                className="card-text fw-bold text-uppercase text-muted m-2 d-block text-center bg-light p-2 rounded-pill mx-auto shadow-sm border border-1 border-secondary"
                            >
                                Precio
                            </span>
                            <span
                                className="card-text fw-bold"
                            >$ {product.price}
                            </span>
                        </div>
                    </div>
                </div>
                {
                    quantityAdded === 0 && currentUser
                        ?
                        <ItemCount
                            stock={product.stock}
                            handleOnAdd={handleOnAdd}
                            itemInCart={getItem(product.id)}
                        />
                        :
                        <div
                            className="card-body"
                        >
                            {
                                !currentUser
                                    ?
                                    <Link
                                        to="/login"
                                        className="btn btn-outline-primary w-50 btn-sm"
                                    >
                                        Iniciar sesión para comprar
                                    </Link>
                                    :
                                    <div className="
                                        d-flex
                                        flex-column
                                        justify-content-center
                                        align-items-center
                                        gap-2
                                    ">
                                        <Link
                                            to="/cart"
                                            className="btn btn-outline-success w-50 btn-sm"
                                        >
                                            Ir al carrito
                                        </Link>
                                        <Link
                                            to="/"
                                            className="btn btn-outline-primary w-50 btn-sm"
                                        >
                                            Volver al inicio
                                        </Link>
                                    </div>
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default ItemDetailContainer