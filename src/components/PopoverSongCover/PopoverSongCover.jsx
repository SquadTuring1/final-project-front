import { useState } from 'react';
import { getUserId } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RiMore2Line } from 'react-icons/ri';
import { useForm } from "react-hook-form";


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
  // useGetSinglePlaylistQuery,
  useAddPlaylistMutation,
  useDeleteSongMutation,
  useUpdateSongMutation
} from '../../features/api/apiSlice';
import { autocompleteClasses, IconButton } from '@mui/material';
import { CoverSongTitle, PopoverArticle } from '../../ui/index';
import { async } from '@firebase/util';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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

const PopoverSongCover = ({ songId, title, artist, album }) => {  
  // console.log(album[0].title)
  // console.log(artist)
  const userId = useSelector(getUserId);
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // console.log(userId)

  const { data, isLoading, isSuccess, isError } = useGetPlaylistsQuery();  
  const [ addSongToPlaylist ] = useAddSongToPlaylistMutation() 
  const [ addPlaylist, {isLoading: newPlaylist} ] = useAddPlaylistMutation()
  const [ deleteSong ]= useDeleteSongMutation()
  const [ updateSong ] = useUpdateSongMutation()
  
  
  const handleAddSong = (playlistId) => {        
    addSongToPlaylist({playlistId, songId})
    toast.success(`Song added to playlist!`, { position: toast.POSITION.TOP_CENTER } )
    console.log('Song added to playlist!')    
    console.log({playlistId, songId})
  }
 
  const handleCreatePlaylist = async() => {        
    addPlaylist({
      title:randomPlaylistTitle(),
      description: "",
      isPrivate: false,
      userId: userId,
      songs: songId })
    toast.success(`New playlist created!`, { 
      position: "top-center",
      autoClose: 1000
    } )
    console.log(`${randomPlaylistTitle()} created`)    
    navigate("/playlist")    
  }

  const hadndleDeleteSong = () => {
    deleteSong({songId})
    toast.success(`Song deleted!`, { 
      position: "top-center",
      autoClose: 1000 
    } )
    console.log(`Song ${songId} deleted!`)    
  }
  
  const handleEditSong = (data) => {
    console.log('songId',songId)
    console.log(data)
    updateSong({
      songId: songId,
      title: data.title,   
      album: data.album,
      artist: data.artist  
    })
    toast.success(`Song updated!`, {
      position: "top-center",
      autoClose: 1000 
    })
    // console.log("Song edited!")
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
  // end MUI pop over

  // MUI Modal
  const [openModalAddSong, setOpenModalAddSong] = useState(false);
  const handleOpenModalAddSong = () => setOpenModalAddSong(true);
  const handleCloseModalAddSong = () => setOpenModalAddSong(false);

  const [openModalEditSong, setOpenModalEditSong] = useState(false);
  const handleOpenModalEditSong = () => setOpenModalEditSong(true);
  const handleCloseModalEditSong = () => setOpenModalEditSong(false);
  // ends MUI modal

  return (
    <div>
      <PopoverArticle>
        <Button
          id="resources-button"
          onClick={handleClick}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <RiMore2Line />
        </Button>
      </PopoverArticle>
      <Menu
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'resources-button',
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={hadndleDeleteSong}>Delete song</MenuItem>
        <MenuItem onClick={handleEditSong}>
        
        <Button onClick={handleOpenModalEditSong}>Edit song</Button>
        <Modal
          open={openModalEditSong}
          onClose={handleCloseModalEditSong}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(handleEditSong)}>
              <div>
                <label>Title</label>
                <input defaultValue={title} {...register("title")} />
              </div>
              <div>
                <label>Artist</label>
                <input defaultValue={album && album[0]?.artist} {...register("artist")} />
              </div>
              {/* Not using album */}
              {/* <div>
                <label>Album</label>
                <input defaultValue={(album[0].title)} {...register("album")} />
              </div>             */}
            <input type="submit" />
            </form>
          </Box>
        </Modal>      
        </MenuItem>              

        <MenuItem>
          <Button onClick={handleOpenModalAddSong}>Add song to playlist</Button>
          <Modal
            open={openModalAddSong}
            onClose={handleCloseModalAddSong}
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
