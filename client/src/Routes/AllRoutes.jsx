import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAddProduct from '../Components/AdminAddProduct'
import UserDetails from '../Components/UserDetails'
import Admin from '../Pages/Admin'
import Authentication from '../Pages/Authentication'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'
import Payment from '../Pages/Payment'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Authentication/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/admin/createproduct' element={<AdminAddProduct/>}></Route>
        <Route path='/admin/dashboard' element={<UserDetails/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes