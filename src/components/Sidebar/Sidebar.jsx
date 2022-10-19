import React from 'react'
import { RiPlayListFill, RiStarFill, RiHome5Fill, RiAppsFill } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'
import { SidebarMain, SideMenu, UploadBtn, CurrentSong, SideMenuItems, CurrentPlaying, CoverSongArtist, CoverSongTitle, SongsH2, CoverSong } from '../../ui/index'


const Sidebar = () => {
  return (
    <>
    <SidebarMain>
      <CurrentSong>
        <CurrentPlaying>
        <SongsH2 className='sidebar__desktop--nowplaying'>Now playing</SongsH2>
        <CoverSong className='sidebar__desktop--cover' src="https://freemusicarchive.org/image/?file=images%2Falbums%2FJack_Skuller_-_Live_at_WFMU_on_Minor_Music_June_18th_2012_-_20120626114609467.jpg&width=290&height=290&type=album" alt="" />
        <CoverSongTitle className='sidebar__desktop--title'>Don't wait</CoverSongTitle>
        <CoverSongArtist className='sidebar__desktop--artist'>Jack Skuller</CoverSongArtist>
        </CurrentPlaying>
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