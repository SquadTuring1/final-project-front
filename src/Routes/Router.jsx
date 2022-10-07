import React from 'react'
import Login from '../pages/Login/index'
import Registration from '../pages/Registration/index'
import Home from '../pages/Home/index'
import { Routes, Route } from 'react-router-dom';
// import Navbar from '../components/Navbar/index'

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path='/' element={<Navbar />}> */}
        <Route path='login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />        
      {/* </Route> */}
    </Routes>
  )
}

export default Router