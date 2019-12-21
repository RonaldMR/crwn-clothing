import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
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
        </div>
    </div>
}

export default Header