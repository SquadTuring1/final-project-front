import { useState } from 'react';
import { RiMore2Line } from 'react-icons/ri';

// import { MenuItem, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import {
  useGetPlaylistsQuery,
  useAddSongToPlaylistMutation,
  useGetSinglePlaylistQuery,
} from '../../features/api/apiSlice';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const PopoverSongCover = ({ songId }) => {  
  const { data, isLoading, isSuccess, isError, error } = useGetPlaylistsQuery();  
  // console.log(data.playlists)
  const [ addSongToPlaylist ] = useAddSongToPlaylistMutation() 

  const handleAddSong = (playlistId) => {    
    // console.log('playlistId', playlistId)
    // console.log('songId',songId)
    addSongToPlaylist({playlistId, songId})
    console.log('Song added to playlist!')
    console.log({playlistId, songId})
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
    // handleClose();
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
        <Button
          id="resources-button"
          onClick={handleClick}
          aria-control={open ? 'resources-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <RiMore2Line />
        </Button>
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
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Favorite</MenuItem>
        <MenuItem onClick={openPlaylists}>
          <Button onClick={handleOpenModal}>Add song to playlist</Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <button>Create playlist</button>
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
