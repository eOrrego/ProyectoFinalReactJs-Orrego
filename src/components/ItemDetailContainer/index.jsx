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
            images: product.images,
        };

        addToCart(item, quantity);
    }

    return (
        <>
            <div
                className="
                card
                border-0
                shadow
                mb-5
                bg-white
                rounded
                col-sm-8
                mx-auto
                ">
                <div
                    className="
                    card
                    border-2
                    border-dark
                    ">
                    <div
                        className="
                        position-relative
                        ">
                        <span
                            className="
                            ms-2
                            mt-2
                            position-absolute
                            top-0
                            start-0
                            px-2
                            py-1
                            bg-dark
                            text-white
                            text-uppercase
                            font-weight-bold
                            rounded
                            ">{product.category}</span>
                        <img src={product.images}
                            className="
                            card-img-top
                            my-4
                            px-2
                            "
                            style={{
                                height: "400px",
                                objectFit: "cover",
                            }}
                            alt={product.name} />
                    </div>
                    <div
                        className="
                        card-body
                        ">
                        <div
                            className="
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                            gap-2
                            ">
                            <h5
                                className="
                                text-uppercase
                                font-weight-bold
                                ">{product.name}</h5>
                            <span
                                className="
                                font-weight-bold
                                text-uppercase
                                "
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                }}
                            >
                                Precio
                            </span>
                            <div className="
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                            gap-2
                            border-top
                            border-bottom
                            py-2
                            w-100
                            bg-light
                            ">
                                <span
                                    className="
                                font-weight-bold
                                "
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "bold",
                                    }}
                                >$ {product.price}
                                </span>
                            </div>
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