import React from 'react'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInSignUpPage from './pages/SignInSignUpPage'

import './App.css'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'

import { auth } from './firebase/utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage}></Route>
        </Switch>      
      </div>
    )
  }
}

export default App
