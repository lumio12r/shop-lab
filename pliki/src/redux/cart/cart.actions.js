import CartActionTypes from "./cart.types";

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addToCart = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const deleteItemFromCart = item => ({
    type: CartActionTypes.DELETE_ITEM_FROM_CART,
    payload: item
})