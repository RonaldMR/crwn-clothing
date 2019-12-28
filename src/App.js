import React from 'react'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInSignUpPage from './pages/SignInSignUpPage'

import './App.css'

import { Switch, Redirect, Route } from 'react-router-dom'

import Header from './components/Header'

import { auth, createUserProfileDocument } from './firebase/utils'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/userActions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }   

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />) }></Route>
        </Switch>      
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
