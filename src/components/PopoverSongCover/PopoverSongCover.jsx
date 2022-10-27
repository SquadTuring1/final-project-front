import React, { useState } from 'react';
import { RiMore2Line } from 'react-icons/ri';

import { MenuItem, Menu, Button } from '@mui/material';

const PopoverSongCover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Favorite</MenuItem>
      </Menu>
    </div>
  );
};

export default PopoverSongCover;
