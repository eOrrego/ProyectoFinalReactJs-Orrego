import { BsCart3 } from 'react-icons/Bs';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

// eslint-disable-next-line react/prop-types
const CartWidget = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <>
            <i className='fs-2 ms-2 mb-2'>
                <BsCart3 />
            </i>
            <span>
                <Badge pill bg="success">
                    {cartItems.length}
                </Badge>
            </span>
        </>
    );
};

export default CartWidget;