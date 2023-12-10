import { useParams } from "react-router-dom";
import data from '../../data/products.json';
import ItemDetailContainer from "../../components/ItemDetailContainer";
import { Link } from "react-router-dom";

const { data: { items } } = data;

const PageProductDetail = () => {

    const { productId } = useParams();

    const product = items.find((item) => item.id === productId);

    return (
        <>
            <div className="container">
                <h2>Detalle de producto</h2>
                <button type="button" className="btn btn-success">
                    <Link to="/" className="text-white">Volver</Link>
                </button>
                <ItemDetailContainer product={product} />
            </div>
        </>
    )
}

export default PageProductDetail