import {CartActionType} from './cart-types'
import { addItemToCart, removeItem } from './cart-utility'

const INITIAL_STATE = 
{
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN :
            
        return{
            ...state,
            hidden: !state.hidden
        }
        case CartActionType.ADD_ITEMS:
            return{
      ...state,
            cartItems:addItemToCart(state.cartItems, action.payload)

            }

        case CartActionType.REMOVE_ITEMS:
            return{

                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }

        case CartActionType.CLEAR_ITEMS:
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    cartItem=> cartItem.id !== action.payload.id 
                )
            }
    
        default:
            return state
    }

}

export default cartReducer;