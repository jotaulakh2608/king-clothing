import { CartActionType } from "./cart-types";

export const toggleCartHidden=()=>({
    type: CartActionType.TOGGLE_CART_HIDDEN
})

export const addItem= item=>({
    type:CartActionType.ADD_ITEMS,
    payload: item
})

export const clearItem= item=>({
    type:CartActionType.CLEAR_ITEMS,
    payload: item
})

export const removeItem = item=>({
type:CartActionType.REMOVE_ITEMS,
payload:item
})