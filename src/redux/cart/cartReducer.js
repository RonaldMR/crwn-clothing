import CartActionTypes from './cartActionTypes'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer