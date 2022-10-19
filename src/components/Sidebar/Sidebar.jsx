import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SidebarMain, SideMenu, UploadBtn, SideMenuItems } from '../../ui/index'
import NowPlaying from '../NowPlaying/index'
import SidebarMenu from '../SidebarMenu/index'




const Sidebar = () => {
  return (
    <>
    <SidebarMain>
      <NowPlaying />
      <SidebarMenu />
      <UploadBtn />
    </SidebarMain>
    </>
  )
}

export default Sidebar