import ShopTypes from "./shop.types";

export const ShopAction =(collectionMap)=> ({
    type:ShopTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})