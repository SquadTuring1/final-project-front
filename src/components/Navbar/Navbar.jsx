import React from 'react'
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

    <div>Navbar</div>
    <Outlet />
    </>
  )
}

export default Navbar