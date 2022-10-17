import React from 'react'
import { RiPlayListFill, RiStarFill, RiHome5Fill, RiAppsFill } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'
import { SidebarMain, SideMenu, UploadBtn, CurrentSong, SideMenuItems  } from '../../ui/index'


const Sidebar = () => {
  return (
    <>
    <SidebarMain>
      <CurrentSong>
        hola
      </CurrentSong>
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
          <RiAppsFill />
          <p className="caterogies __link">Categories</p>
        </SideMenuItems>
      </SideMenu>
      <UploadBtn />
    </SidebarMain>
    <section>
      <Outlet />
    </section>
    </>
  )
}

export default Sidebar