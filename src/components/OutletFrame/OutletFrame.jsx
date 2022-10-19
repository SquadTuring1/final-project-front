import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavOutlet, SideOutlet, PlayerOutlet, MainOutlet  } from '../../ui/index'
import MusicPlayer from '../MusicPlayer'
import Navbar from '../Navbar/index'
import { Sidebar } from '../Sidebar/index'





const OutletFrame = () => {
  return (
    <MainOutlet>
      <NavOutlet><Navbar /></NavOutlet>
      <SideOutlet><Sidebar /></SideOutlet>
      <PlayerOutlet><MusicPlayer /></PlayerOutlet>
      <Outlet />
    </MainOutlet>
  )
}

export default OutletFrame