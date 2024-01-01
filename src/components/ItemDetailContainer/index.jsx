import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = (
    {
        // eslint-disable-next-line react/prop-types
        product = {
            category: "category",
            name: "name",
            price: "price",
            images: "images",
            stock: "stock",
        }
    }
) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
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
                    quantityAdded === 0
                        ?
                        <ItemCount
                            stock={product.stock}
                            handleOnAdd={handleOnAdd}
                        />
                        :
                        <div
                            className="card-body"
                        >
                            <span
                                className="card-text fw-bold text-uppercase text-muted m-2 d-block text-center bg-light p-2 rounded-pill mx-auto shadow-sm border border-1 border-secondary"
                            >
                                Cantidad
                            </span>
                            <span
                                className="card-text fw-bold"
                            >{quantityAdded}
                            </span>
                        </div>
                }
            </div>
        </>
    )
}

export default ItemDetailContainer