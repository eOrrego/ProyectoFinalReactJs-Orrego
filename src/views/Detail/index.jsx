import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/config.js';
import { useAuth } from "../../context/FirebaseAuthContext.jsx";

const PageProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    // aplicar logica para relacionar el carrito con el usuario logueado
    const { currentUser } = useAuth();

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

    return (
        <>
            <div className="container">
                <h2
                    className="text-center text-uppercase my-5"
                >Detalle de producto</h2>
                <ItemDetailContainer
                    product={product}
                    currentUser={currentUser}
                />
            </div>
        </>
    )
}

export default PageProductDetail