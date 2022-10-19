import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  ButtonAvatar,
  GreenDot,
  PopMenu,
  AvatarContent,
} from '../../ui/index';
import avatar from '../../assets/images/user-avatar.jpg';
import { Popover } from 'react-tiny-popover';
import { useDispatch } from 'react-redux';
import { userSignedOut } from '../../features/auth/authSlice';

import auth from '../../utils/firebase/firebaseConfig.js';


const PopoverNavbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(userSignedOut())
    auth.signOut();       // sign out from firebase
    navigate('', {replace: true})
    
  }

  return (
    <>
        <Popover
          isOpen={isPopoverOpen}
          positions={['bottom']} // preferred positions by priority
          content={
            <PopMenu>
              <button onClick={() => navigate('profile')}>Profile</button>
              <button onClick={signOut}>Sign out</button>
            </PopMenu>
          }
        >
          <ButtonAvatar onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            <AvatarContent>
              <Avatar src={avatar} alt="avatar" />
              <GreenDot></GreenDot>
            </AvatarContent>
          </ButtonAvatar>
        </Popover>
    </>
  )
}

export default PopoverNavbar