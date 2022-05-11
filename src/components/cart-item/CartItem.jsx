import React from 'react'
import './cart-item.scss'

export default function CartItem({item:{imageUrl, name, price, quantity}}) {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="item" />
            <span className="name">
                {name}
            </span>
            <span className="item-details">
                {quantity} X {price}
            </span>
        </div>
    )
}
