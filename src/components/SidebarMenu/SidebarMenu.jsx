import React from 'react'
import { Link } from 'react-router-dom'
import { IconHome, IconFavorites, IconPlaylist, IconCategories, SideMenu, SideMenuItems, IconUpload, UploadButton } from '../../ui/index'
import ReactModal from 'react-modal'

const SidebarMenu = () => {
  return (
    <SideMenu>
    <SideMenuItems as={Link} to='/dashboard'>
      <IconHome/>
      <p className="home__link">Home</p>
    </SideMenuItems>
    <SideMenuItems as={Link} to='/playlist'>
      <IconPlaylist />
      <p className="playlist__link">Playlist</p>
    </SideMenuItems>
    <SideMenuItems as={Link} to='/favorites'>
      <IconFavorites />
      <p className="favorites__link">Favorites</p>
    </SideMenuItems>
    <SideMenuItems as={Link} to='/categories'>
      <IconCategories  />
      <p className="categories__link">Categories</p>
    </SideMenuItems>
      <SideMenuItems>
        <UploadButton>
          <IconUpload  />
          <p className="categories__link">Upload</p>
        </UploadButton>
    </SideMenuItems>
  </SideMenu>
  )
}

export default SidebarMenu