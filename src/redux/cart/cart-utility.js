export const addItemToCart =( cartItems, CartItemToAdd)=>{

    const existingCartItem = cartItems.find(
     cartItem=>   cartItem.id === CartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map( cartItem=>
            cartItem.id === CartItemToAdd.id ? {...cartItem , quantity: cartItem.quantity + 1}
             : cartItem
        )
    }


return [...cartItems, { ...CartItemToAdd, quantity: 1 }];
};

export const removeItem =(cartItems, cartItemsToRemove)=>{

    const existingCartItem = cartItems.find(
        cartItem=> cartItem.id ===cartItemsToRemove.id
    )

    if (existingCartItem.quantity===1){
    
   return cartItems.filter(
        cartItem=> cartItem.id !== cartItemsToRemove.id
    )
    }
 
    return cartItems.map(
        cartItem=> cartItem.id=== cartItemsToRemove.id ?{...cartItem, quantity: cartItem.quantity - 1}:cartItem
    )

}



  