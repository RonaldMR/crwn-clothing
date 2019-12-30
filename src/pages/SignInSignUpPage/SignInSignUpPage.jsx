import React from 'react'

import './style.scss'

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

const SignInSignUpPage = () => {
    return <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
}

export default SignInSignUpPage