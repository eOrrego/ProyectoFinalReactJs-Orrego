import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/config.js';

// buscador de productos por name o category

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { queryId } = useParams();

    useEffect(() => {
        const getProductsFirebase = async () => {
            const productsCollection = collection(db, 'products');
            const q = query(productsCollection, where('name', '==', queryId));
            const productsSnapshot = await getDocs(q);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
            setLoading(false);
        };
        getProductsFirebase();
    }, [queryId]);

    if (loading) {
        return (
            <div className="container">
                <h2 className='text-center text-uppercase my-5'>Cargando...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="
            text-center 
            text-uppercase 
            my-5
            "
                style={{
                    color: "#000",
                    fontWeight: "bold",
                }}
            >Busqueda {query}</h2>
            <CardProduct products={products} />
        </div>
    )
}

export default SearchPage