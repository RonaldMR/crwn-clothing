import React from 'react'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

import './App.css'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>      
    </div>
  )
}

export default App
