import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../crown.svg'
import './header.scss'
import { auth } from '../../firebase/firebase'
import {useSelector} from 'react-redux'
import ShoppingIcon from '../cart-icon/ShopingIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selector'

    
    function Header() {
        const hidden= useSelector(selectCartHidden)
     const currentUser= useSelector(selectCurrentUser)
    return (
        <div className='header'>
            
           <Link className='logo-section' to="/" >
             <Logo className="logo"/>
           </Link>
            <div className="options">
               <Link className='option' to="/shop">SHOP</Link>
               <Link className='option' to="/shop">CONTACT</Link>
               { 
                   currentUser ?
                   <div className="option" onClick={()=>auth.signOut()}>
                       SIGN OUT
                   </div>
                   :

               <Link className='option' to="/signup">SIGN IN</Link>
               }
               <div className="option">
                   <ShoppingIcon/>
               </div>

            </div>
           {    
           hidden?null: <CartDropdown/>
            }
        </div>
    )
}

export default Header