
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardProduct = ({ products }) => {
    return (
        <div className="
        row
        g-4
        my-5
        ">
            {products.map((product) => {
                return (
                    <div className="
                    col-md-4
                    d-flex
                    justify-content-center
                    align-items-center
                    " key={`product-${product.id}`} >
                        <div
                            className="
                        card
                        text-center
                        text-black
                        bg-light
                        mb-3"
                            style={{
                                width: "20rem",
                                height: "30rem",
                            }}
                        >
                            <h6
                                className="
                                card-header
                                text-uppercase
                                font-weight-bold
                                "
                            >{product.category}</h6>
                            <img
                                src={product.images}
                                className="
                                card-img-top
                                border-bottom
                                border-secondary
                                "
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: "50%",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="
                            card-body
                            d-flex
                            flex-column
                            justify-content-between
                            ">
                                <h5 className="
                                card-title
                                font-weight-bold
                                ">{product.name}</h5>
                                <p className="
                                card-text
                                font-weight-bold
                                fs-4
                                ">${product.price}</p>
                                <Link to={`/product/${product.id}`} className="
                                btn btn-outline-secondary
                                btn-sm
                                ">Ver detalle</Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default CardProduct