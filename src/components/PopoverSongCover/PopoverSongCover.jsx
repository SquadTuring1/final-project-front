import React, { useState } from 'react';
import {
  RiArrowDropDownFill,
  RiStarSFill,
  RiEditBoxLine,
  RiDeleteBinLine,
  RiMore2Fill,
  RiMore2Line
} from 'react-icons/ri';
import { useNavigate, Link } from 'react-router-dom';
import { Popover } from 'react-tiny-popover';
import {
  CoverMenuIcon,
  PopMenu,
  PopCoverItems,
  PopItems,
  Button,
} from '../../ui/index';
import PopoverNavbar from '../PopoverNavbar';
import ReactModal from 'react-modal';


// Styles for add to playlist Modal
const customStyles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30%',
    border: 'none',
    fontFamily: 'Source Sans Pro, sans-serif',
    color: 'white',
    backgroundColor: '#040810',
    top: '50%',
    left: '50%',
    // right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // overflow: hidden
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
};

const PopoverSongCover = () => {
  const [isPopOpen, setIsPopOpen] = useState(false);
  const navigate = useNavigate();

  

  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  const handlePopOver = () => {
    setModalOpen(false)
      }

const handleDelete = () => {
  console.log("sdjksjdkjsd")
  setIsPopOpen(false)
  openModal()
}
  return (
    <Popover
    onclick={handlePopOver}
      isOpen={isPopOpen}
      onClickOutside={() => setIsPopOpen(false)}
      positions={['bottom']} // preferred positions by priority
      content={
        <PopMenu>
          <PopCoverItems>
            <PopItems>
              <RiStarSFill /> Favorite
            </PopItems>
            <PopItems>
              <RiEditBoxLine /> Edit
            </PopItems>
            <PopItems onClick={handleDelete}>             
              
             <RiDeleteBinLine  />Delete 
            </PopItems>
            <PopItems onClick={openModal}>+ Add to playlist</PopItems>
            <ReactModal style={customStyles} isOpen={modalOpen} onRequestClose={closeModal}>  
            <p>Jose</p>        
              <PopItems>Add to Playlist</PopItems>
              <PopItems>Create Playlist</PopItems>
              <PopItems onClick={closeModal}>Close</PopItems>
              
            </ReactModal>
            {/* <Button onClick={openModal}>+ Add to playlist</Button> */}
          </PopCoverItems>
        </PopMenu>
      }
    >
      <CoverMenuIcon onClick={() => setIsPopOpen(!isPopOpen)}>
        <RiMore2Line />
      </CoverMenuIcon>
    </Popover>
  );
};

export default PopoverSongCover;
