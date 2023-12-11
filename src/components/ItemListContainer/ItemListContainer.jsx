/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { getProducts } from '../../data/asyncMock';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const asyncFuction = async () => {
            try {
                const result = await getProducts();
                setProducts(result);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        asyncFuction();
    }, []);

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
            <h1>{greeting}</h1>
            <CardProduct products={products} />
        </div>
    );
};

export default ItemListContainer;