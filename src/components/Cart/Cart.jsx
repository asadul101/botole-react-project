import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart,handleRemoceClick}) => {
    return (
        <div>
            <h5>Count: {cart.length}</h5>
            <div className='cart-contianer'>
            {
                cart.map(cartimg=><div className='container' key={cartimg.id}>
                    <img src={cartimg.img}></img>
                    <button onClick={()=> handleRemoceClick(cartimg.id)}>Remove</button>
                </div>)
            }
            </div>
        </div>
    );
};
Cart.propTypes ={
    cart: PropTypes.array.isRequired
}
export default Cart;