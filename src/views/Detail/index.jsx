import { getProductById } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer";

const PageProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { productId } = useParams();

    useEffect(() => {
        const asyncFuction = async () => {
            try {
                const result = await getProductById(productId);
                setProduct(result);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        asyncFuction();
    }, [productId]);

    if (loading) {
        return (
            <div className="container">
                <h2 className='text-center text-uppercase my-5'>Cargando...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <h2 className='text-center text-uppercase my-5'>Hubo un error</h2>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <h2
                    className="text-center text-uppercase my-5"
                >Detalle de producto</h2>
                <ItemDetailContainer product={product} />
            </div>
        </>
    )
}

export default PageProductDetail