import { getProductsByCategory } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";

const PageProductCategory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFuction = async () => {
            try {
                const result = await getProductsByCategory(categoryId);
                setProducts(result);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        asyncFuction();
    }, [categoryId]);

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
        <div className="container">
            <h2 className="text-center text-uppercase my-5">{categoryId}</h2>
            <CardProduct products={products} />
        </div>
    )
}

export default PageProductCategory