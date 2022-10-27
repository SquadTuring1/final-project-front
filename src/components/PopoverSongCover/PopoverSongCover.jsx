import { useState } from 'react';
import { getUserId } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { RiMore2Line } from 'react-icons/ri';

// import { MenuItem, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { CoverMenuIcon } from '../../ui/DashboardImg.styled';

import {
  useGetPlaylistsQuery,
  useAddSongToPlaylistMutation,
  // useGetSinglePlaylistQuery,
  useAddPlaylistMutation
} from '../../features/api/apiSlice';
import { autocompleteClasses } from '@mui/material';
import { CoverSongTitle } from '../../ui';
import { async } from '@firebase/util';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const randomPlaylistTitle = () => {
  const randomNumber = Math.floor(100000 + Math.random() * 900000)
  return `playlist_${randomNumber}`
}

const PopoverSongCover = ({ songId }) => {  
  const userId = useSelector(getUserId);
  const navigate = useNavigate()
  // console.log(userId)
  const { data, isLoading, isSuccess, isError } = useGetPlaylistsQuery();  
  const [ addSongToPlaylist ] = useAddSongToPlaylistMutation() 
  const [ addPlaylist, {isLoading: newPlaylist} ] = useAddPlaylistMutation()
  
  const handleAddSong = (playlistId) => {        
    addSongToPlaylist({playlistId, songId})
    console.log('Song added to playlist!')    
    console.log({playlistId, songId})
  }

  // const canSave = [userObj.token, userObj.uid, userObj.email, userObj.username].every(Boolean) && !isLoadingSignup;
 
  const handleCreatePlaylist = async() => {
    // const playListObj = {
    //   title:randomPlaylistTitle(),
    //   description: "",
    //   isPrivate: false,
    //   userId: userId,
    //   songs: songId 
    // }
    // const canSave = [playListObj.title, playListObj.description, playListObj.isPrivate, playListObj.userId, playListObj.songs].every(Boolean)  && !newPlaylist;
    // if (canSave){
    //   console.log("works11")
    //   try{       
    //     await addPlaylist(playListObj).unwrap()
    //     // console.log(result.status)
    //     // if (result) navigate("/playlist")
    //     // if (newPlaylist) navigate("/playlist")
    //     console.log("works")
    //   }catch (error){
    //     console.log(error)
    //   }      
    // }        
    
    

    addPlaylist({
      title:randomPlaylistTitle(),
      description: "",
      isPrivate: false,
      userId: userId,
      songs: songId })
    console.log(`${randomPlaylistTitle()} created`)
    console.log('previous')
    navigate("/playlist")
    console.log('jksjdjsdljsljdlkjs')
  }


  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {    
    content = data.playlists.map((playlist) => {
      const { _id, title, description, thumbnail } = playlist;
      return (
        <article key={_id}>
          <p>{title}
          <button onClick={() => handleAddSong(_id)}>
            Add song to playlist
          </button>
          </p>
        </article>
      );
    });    
  } else if (isError) {
    content = <p>Error...</p>;
  }
  

  // MUI pop over
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPlaylists = () => {
    console.log('Playlist openened!');    
  };
  // end MUI pop over

  // MUI Modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  // ends MUI modal

  return (
    <div>
      <article>
        <CoverMenuIcon as={Button}
          id="resources-button"
          onClick={handleClick}
          // aria-control={open ? 'resources-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <RiMore2Line />
        </CoverMenuIcon>
      </article>
      <Menu
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'resources-button',
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Delete song</MenuItem>
        <MenuItem onClick={handleClose}>Edit song</MenuItem>
        <MenuItem onClick={openPlaylists}>
          <Button onClick={handleOpenModal}>Add song to playlist</Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <button onClick={handleCreatePlaylist}>Create playlist</button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {content}                
              </Typography>              
            </Box>
          </Modal>
          
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PopoverSongCover;
