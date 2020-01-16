import React from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import CustomButton from '../CustomButton'
import CartItem from '../CartItem'

import { selectCartItems } from '../../redux/cart/cartSelectors'

import { createStructuredSelector } from 'reselect'

import './style.scss'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartDropDown = ({ cartItems, history, dispatch }) => {
  const handleClick = () => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
