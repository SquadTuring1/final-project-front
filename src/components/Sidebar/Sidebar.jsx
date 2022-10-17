import React from 'react'
import { RiPlayListFill, RiStarFill, RiHome5Fill, RiAppsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SidebarMain, SideMenu, UploadBtn, CurrentSong  } from '../../ui/index'


const Sidebar = () => {
  return (
    <SidebarMain>
      <CurrentSong>
        hola
      </CurrentSong>
      <SideMenu>
        <Link>
          <RiHome5Fill />
          <p className="home__link">Home</p>
        </Link>
        <Link>
          <RiPlayListFill />
          <p className="playlist__link">Playlist</p>
        </Link>
        <Link>
          <RiStarFill />
          <p className="favorites__link">Favorites</p>
        </Link>
        <Link>
          <RiAppsFill />
          <p className="caterogies __link">Categories</p>
        </Link>
      </SideMenu>
      <UploadBtn />
    </SidebarMain>
  )
}

export default Sidebar