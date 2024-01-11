import { BsCart3 } from 'react-icons/Bs';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CartWidget = ({ getQuantity }) => {

    return (
        <>
            <div
                className={getQuantity() > 0 ? 'd-block' : 'd-none'}
            >
                <Link to='/cart'
                    className='text-decoration-none text-dark'
                >
                    <i className='fs-2 ms-2 mb-2'>
                        <BsCart3 />
                    </i>
                </Link>
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