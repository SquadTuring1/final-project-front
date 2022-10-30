import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconHome,
  IconFavorites,
  IconPlaylist,
  IconCategories,
  SideMenu,
  SideMenuItems,
  IconUpload,
  UploadButton,
  MainModal,
  Button,
} from '../../ui/index';
import ReactModal from 'react-modal';
import UploadModal from '../UploadModal';
import { RiStarFill } from 'react-icons/ri';


const customStyles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30%',
    border: 'none',
    fontFamily: 'Source Sans Pro, sans-serif',
    backgroundColor: '#040810',
    top: '50%',
    left: '50%',
    // right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: '1',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const SidebarMenu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <SideMenu>
      <SideMenuItems as={Link} to="/dashboard">
        <IconHome />
        <p className="home__link">Home</p>
      </SideMenuItems>
      <SideMenuItems as={Link} to="/playlist">
        <IconPlaylist />
        <p className="playlist__link">Playlist</p>
      </SideMenuItems>
      <SideMenuItems as={Link} to="/favorites">
        <IconFavorites as={RiStarFill} />
        <p className="favorites__link">Favorites</p>
      </SideMenuItems>
      <SideMenuItems as={Link} to="/categories">
        <IconCategories />
        <p className="categories__link">Categories</p>
      </SideMenuItems>
      <SideMenuItems>
        <UploadButton onClick={openModal}>
          <IconUpload />
          <p className="categories__link">Upload</p>
        </UploadButton>
        <ReactModal
          style={customStyles}
          isOpen={modalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <UploadModal />
        </ReactModal>
      </SideMenuItems>
    </SideMenu>
  );
};

export default SidebarMenu;
