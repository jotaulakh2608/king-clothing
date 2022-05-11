import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../button/CustomButton'
import CartItem from '../cart-item/CartItem'
import './cart-dropdown.scss'

import { selectCartItem } from '../../redux/cart/cart.selector'
import { useHistory } from 'react-router'
import { toggleCartHidden } from '../../redux/cart/cart.action'


const CartDropdown =()=>{
    const dispatch = useDispatch()
    const history= useHistory()
    const cartItems = useSelector(selectCartItem)

return(
    <div className='cart-dropdown'>
    <div className="items">
    { 
        cartItems.length?
        cartItems.map(cartItem  =>  ( <CartItem key={cartItem.id} item={cartItem} />)):
        <span className="empty-msg">
            Your cart is empty
        </span>
    }
    </div>
    <CustomButton onClick={()=> {history.push('/checkout');
    dispatch(toggleCartHidden())}} >
    GO TO CHECKOUT
    </CustomButton>
            
    </div>

)
}


export default  CartDropdown