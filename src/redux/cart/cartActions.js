import UserActionTypes from './cartActionTypes'

export const toggleCartHidden = () => ({
    type: UserActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: UserActionTypes.ADD_ITEM,
    payload: item
})