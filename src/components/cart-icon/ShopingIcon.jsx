import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {ReactComponent as CartIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemCount } from '../../redux/cart/cart.selector'



 function ShoppingIcon() {

    const itemCount= useSelector(selectCartItemCount)

    const dispatch = useDispatch()
    const toggleCartHiddenItem = (()=>dispatch(toggleCartHidden()))
    return (
        <div className='shopping-icon'>
        <CartIcon className='icon' onClick={toggleCartHiddenItem}/>
        <span className='item-count' >{itemCount}</span>
        </div>
    )
}

export default ShoppingIcon