import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions'

import './style.scss'

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = userCredentials
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        ></FormInput>
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        ></FormInput>
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
