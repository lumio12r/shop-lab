export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const deleteItemFromCart = (cartItems, cartItemToremove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToremove.id
    );

    if(existingCartItem === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToremove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToremove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
};