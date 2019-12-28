import React from 'react'

import CustomButton from '../CustomButton'

import './style.scss'

const CartDropDown = () => {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
}

export default CartDropDown