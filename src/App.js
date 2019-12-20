import React from 'react'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

import './App.css'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>      
    </div>
  )
}

export default App
