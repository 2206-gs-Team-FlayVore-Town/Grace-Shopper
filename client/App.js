import React from 'react'
import { Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Routes from './Routes'
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Route path="/shoppingCart" component={Cart} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
  )
};

export default App
