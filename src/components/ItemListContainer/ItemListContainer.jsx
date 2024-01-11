/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebase/config.js';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProductsFirebase = async () => {
            const productsCollection = collection(db, 'products');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
            setLoading(false);
        };
        getProductsFirebase();
    }, []);

    if (loading) {
        return (
            <div className="container">
                <h2 className='text-center text-uppercase my-5'>Cargando...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className='text-center my-5'>{greeting}</h1>
            <CardProduct products={products} />
        </div>
    );
};

export default ItemListContainer;