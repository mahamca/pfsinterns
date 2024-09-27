import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import SingleProduct from './Components/Products/SingleProduct'
import AddProduct from './Components/Products/AddProduct'
import Addtocart from './Components/Products/Addtocart'
import Buy from './Components/Products/Buy'
import Payment from './Components/Payment'
import Login from './Components/user/Login'
import Register from './Components/user/Register'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/singleproduct/' element={<SingleProduct/>}/>
      <Route path='/addproduct/' element={<AddProduct/>}/>
      <Route path="/addtocart/" element={<Addtocart/>}/>
      <Route path="/products/buynow/:id/" element={<Buy/>}/>
      <Route path="/payments/:id" element={<Payment/>}/>
    
      <Route path="/home/" element={<Home/>}/>
      <Route path="/register/" element={<Register/>}/>
      
    </Routes>


    </div>
  )
}

export default App