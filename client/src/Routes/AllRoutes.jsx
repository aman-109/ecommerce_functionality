import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Authentication from '../Pages/Authentication'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Authentication/>}></Route>
        <Route path='/cart' element={<Authentication/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes