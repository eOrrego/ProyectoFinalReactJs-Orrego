// import { getProductById } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer";

//reemplazar asyncMock por firebase para obtener un producto por id
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/config.js';

const PageProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    const { productId } = useParams();

    // useEffect(() => {
    //     const asyncFuction = async () => {
    //         try {
    //             const result = await getProductById(productId);
    //             setProduct(result);
    //         } catch (error) {
    //             setError(true);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     asyncFuction();
    // }, [productId]);

    useEffect(() => {
        const getProductFirebase = async () => {
            const productDoc = doc(db, 'products', productId);
            const productSnapshot = await getDoc(productDoc);
            const productData = productSnapshot.data();
            setProduct({ id: productSnapshot.id, ...productData });
            setLoading(false);
        };
        getProductFirebase();
    }, [productId]);

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