import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import Cart from './components/Cart'
import Home from './components/Home'
import Menu from './components/Menu'
import Pnf from './components/Pnf'
import Product from './components/Product'


function App() {
  return (
   <Router>
    <Menu/>
    <ToastContainer autoClose={4000} position={'top-center'}/>
    <Routes>
      <Route path={`/`} element={<Home/>} />
      <Route path={`/product/:id`} element={<Product/>} />
      <Route path={`/cart`} element={<Cart/>} />
      <Route path={`/*`} element={<Pnf/>} />
    </Routes>
   </Router>
  )
}

export default App