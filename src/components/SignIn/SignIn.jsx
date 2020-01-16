import React from 'react'

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

import { auth, signInWithGoogle } from '../../firebase/utils'

import './style.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
