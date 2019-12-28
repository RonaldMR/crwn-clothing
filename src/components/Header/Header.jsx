import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/utils'

import './style.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'

import CartIcon from '../CartIcon'

import CartDropDown from '../CartDropDown'

const Header = ({currentUser, hidden}) => {
    return <div className='header'>
        <Link to="/" className='logoContainer'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { hidden && <CartDropDown /> }
    </div>
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser: currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)