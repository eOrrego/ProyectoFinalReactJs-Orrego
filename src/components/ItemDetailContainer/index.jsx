
const ItemDetailContainer = (
    {
        // eslint-disable-next-line react/prop-types
        product = {
            category: "category",
            name: "name",
            price: "price",
            images: "images"
        }
    }
) => {
    return (
        <div className="card">
            <h5>{product.category}</h5>
            <img src={product.images} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
            </div>
        </div>
    )
}

export default ItemDetailContainer