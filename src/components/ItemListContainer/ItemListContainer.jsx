import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import data from '../../data/products.json';

const { data: { items } } = data;

const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 0);
    });
}
// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getItems().then((result) => {
            setProducts(result);
            setLoading(false);
            setError(false);
        });
    }, []);

    if (loading) {
        return <h3>Cargando...</h3>;
    }

    if (error) {
        return <h3>Hubo un error</h3>;
    }

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <CardProduct products={products} />
        </div>
    );
};

export default ItemListContainer;