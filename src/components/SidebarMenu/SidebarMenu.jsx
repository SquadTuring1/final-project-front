import React from 'react'
import { RiPlayListFill, RiStarFill, RiHome5Fill, RiAppsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SideMenu, SideMenuItems } from '../../ui/index'

const SidebarMenu = () => {
  return (
    <SideMenu>
    <SideMenuItems as={Link} to='/dashboard'>
      <RiHome5Fill />
      <p className="home__link">Home</p>
    </SideMenuItems>
    <SideMenuItems as={Link} to='/playlist'>
      <RiPlayListFill />
      <p className="playlist__link">Playlist</p>
    </SideMenuItems>
    <SideMenuItems as={Link} to='/favorites'>
      <RiStarFill />
      <p className="favorites__link">Favorites</p>
    </SideMenuItems>
    <SideMenuItems as={Link} to='/categories'>
      <RiAppsFill  />
      <p className="categories__link">Categories</p>
    </SideMenuItems>
  </SideMenu>
  )
}

export default SidebarMenu