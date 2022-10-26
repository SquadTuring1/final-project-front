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

import { useGetPlaylistsQuery } from "../../features/api/apiSlice"
import { useAddSongToPlaylistMutation } from "../../features/api/apiSlice"
import { setSongsList, setCurrentSong } from '../../features/songs/songsSlice'
import { useSelector } from 'react-redux';

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

const PopoverSongCover = ({songId}) => {
  
  // console.log("songId",songId)
  const { data, isLoading, isSuccess, isError, error } = useGetPlaylistsQuery()
  const [ addSongToPlaylist ] = useAddSongToPlaylistMutation()
  // console.log(data)  
  

  const playListArr = data.playlists  
  console.log(playListArr)

  const addToPlaylist = (_id) => {
    console.log("works")
    
  }




  const [isPopOpen, setIsPopOpen] = useState(false);  
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
            {playListArr.map(({_id, title, isPrivate, songs, followers}) => {              
              return (                
                <article key={_id}>
                  
                  {title}
                  <button onClick={()=>addToPlaylist(_id)}>Add</button>            

                </article>


              )
              
            })}      
              
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
