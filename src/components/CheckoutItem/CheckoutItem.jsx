import React from 'react'

import { connect } from 'react-redux'

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cartActions'

import './style.scss'

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem

    const clear = () => clearItem(cartItem)
    const remove = () => removeItem(cartItem)
    const add = () => addItem(cartItem)
    
    return <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={remove}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={add}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clear}>&#10005;</div>
    </div>
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),    
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem)