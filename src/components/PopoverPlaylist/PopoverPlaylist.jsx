
import React from 'react'
import { useState, useEffect } from 'react'

import { RiMore2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'

import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import { useDeletePlaylistMutation, useRenamePlaylistMutation } from '../../features/api/apiSlice'

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

function PopoverPlaylist({ playlistId, playlistTitle }) {

  // console.log(playlistTitle)
const { register, handleSubmit, watch, formState: { errors } } = useForm()

const [ deletePlaylist ] = useDeletePlaylistMutation()
const [ renamePlaylist ] = useRenamePlaylistMutation()

const handleDeletePlaylist = (playlistId) => {    
    console.log(playlistId)
    deletePlaylist({playlistId})
    toast.success(`Playlist deleted!`, { 
      position: "top-center",
      autoClose: 1000 
    })
    console.log(`Playlist with Id ${playlistId} deleted!`) 
}
const customId = "custom-id-yes";
const handleRenamePlaylist = (data) => {
    // console.log(data)
    const { title: playlistTitle } = data
    // console.log('playlistId',playlistId)
    // console.log('playlistTitle',playlistTitle)
    
    // console.log(openModalRenamePlaylist)
    
    renamePlaylist({playlistId, playlistTitle})
    
    
     toast.success(`Playlist renamed!`, { 
        position: "top-center",
        autoClose: 1000,
        toastId: customId,          
      })
    

    
    

    

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
const [openModalRenamePlaylist, setOpenModalRenamePlaylist] = useState(false);
const handleOpenModalRenamePlaylist = () => setOpenModalRenamePlaylist(true);
const handleCloseModalRenamePlaylist = () => setOpenModalRenamePlaylist(false);
// ends MUI modal



  return (
    <div>        
        <article>
        <Button
          id="resources-button"
          onClick={handleClick}
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
        <MenuItem onClick={()=>handleDeletePlaylist(playlistId)}>Delete playlist</MenuItem>
        <MenuItem onClick={()=>handleRenamePlaylist(playlistId)}>
        
        <Button onClick={handleOpenModalRenamePlaylist}>Rename playlist</Button>
        <Modal
          open={openModalRenamePlaylist}
          onClose={handleCloseModalRenamePlaylist}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(handleRenamePlaylist)}>
            <div>
                <label>Title </label>
                <input {...register("title")} />
              </div>
              <input type="submit" />
            </form>

          </Box>
          </Modal>
          
        
        
        </MenuItem>
        </Menu>
    </div>
  )
}

export default PopoverPlaylist