// import { getProductsByCategory } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";

//reemplazar asyncMock por firebase
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/config.js';

const PageProductCategory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    const { categoryId } = useParams();

    // useEffect(() => {
    //     const asyncFuction = async () => {
    //         try {
    //             const result = await getProductsByCategory(categoryId);
    //             setProducts(result);
    //         } catch (error) {
    //             setError(true);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     asyncFuction();
    // }, [categoryId]);

    useEffect(() => {
        const getProductsFirebase = async () => {
            const productsCollection = collection(db, 'products');
            const q = query(productsCollection, where('category', '==', categoryId));
            const productsSnapshot = await getDocs(q);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
            setLoading(false);
        };
        getProductsFirebase();
    }, [categoryId]);

    if (loading) {
        return (
            <div className="container">
                <h2 className='text-center text-uppercase my-5'>Cargando...</h2>
            </div>
        );
    }

    // if (error) {
    //     return (
    //         <div className="container">
    //             <h2 className='text-center text-uppercase my-5'>Hubo un error</h2>
    //         </div>
    //     );
    // }

    return (
        <div className="container">
            <h2 className="text-center text-uppercase my-5">Categoria {categoryId}</h2>
            <CardProduct products={products} />
        </div>
    )
}

export default PageProductCategory