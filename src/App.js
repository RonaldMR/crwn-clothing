import React, { useEffect } from 'react'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInSignUpPage from './pages/SignInSignUpPage'
import CheckoutPage from './pages/CheckoutPage'

import './App.css'

import { Switch, Redirect, Route } from 'react-router-dom'

import Header from './components/Header'

import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/userSelectors'
import { checkUserSession } from './redux/user/userActions'

import { createStructuredSelector } from 'reselect'

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        ></Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
