import { BsCart3 } from 'react-icons/Bs';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

// eslint-disable-next-line react/prop-types
const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return (
        <>
            <div
                className={getQuantity() > 0 ? 'd-block' : 'd-none'}
            >
                <i className='fs-2 ms-2 mb-2'>
                    <BsCart3 />
                </i>
                <span>
                    <Badge pill bg="success">
                        {getQuantity()}
                    </Badge>
                </span>
            </div>
        </>
    );
};

export default CartWidget;