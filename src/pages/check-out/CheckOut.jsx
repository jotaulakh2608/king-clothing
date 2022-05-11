import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout item/CheckoutItem';
import StripeButton from '../../components/Stripe Button/StripeButton';
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selector';
import './check-out.scss'


 function CheckOut() {
  
    const cartItems= useSelector(selectCartItem)
    const total = useSelector(selectCartTotal)
    return (
        <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                Product
                
            </div>
            <div className="header-block">
                Description
                
            </div>
            <div className="header-block">
                Quantity
                
            </div>
            <div className="header-block">
                Price
                
            </div>
            <div className="header-block">
                Remove
                
            </div>
        </div>
    
        {cartItems.map(
            cartItem=> <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )}
  
    
        <div className="total">
          Total: ${total}
        </div>
        <StripeButton price={total}/>
        </div>
    )
}



export default CheckOut