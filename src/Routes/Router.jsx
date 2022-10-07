import React from 'react'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='registration' element={<Registration />} />
      <Route path='/' element={<Navbar />}>
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default Router