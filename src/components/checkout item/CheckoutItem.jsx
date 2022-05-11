import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.scss'
import {clearItem} from '../../redux/cart/cart.action'
import {addItem} from '../../redux/cart/cart.action'
import {removeItem} from '../../redux/cart/cart.action'

 function CheckoutItem({cartItem, clearItem, addItem, removeItem}) {

  const  {imageUrl, name, quantity, price}= cartItem
  return (
  <div className='checkout-item'>
  <div className="img">
<img src={imageUrl} alt="img" />
  </div>

  <span className="name">
{name}
  </span>
  <span className="quantity">
  <div className="arrow-left arrow" onClick={()=>removeItem(cartItem)}> 	
&#10147;</div>
<span className="value">{quantity}</span>
  <div className="arrow" onClick={()=>addItem(cartItem)}>

 	
&#10147;</div>
  </span>

  <span className="price">
${price}
  </span>

  <span className="remove" onClick={()=> clearItem(cartItem)}>
  &#10005;
  </span>
  </div>
  )
}

const mapDispatchToProsps = dispatch =>({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
    
})

export default connect(null,mapDispatchToProsps)(CheckoutItem)