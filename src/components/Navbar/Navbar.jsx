import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logoSM from '../../assets/images/Logo-sign.png';
import {
  Avatar,
  ButtonAvatar,
  GreenDot,
  Logo,
  MainNav,
  NavContent,
  PopMenu,
  AvatarContent,
} from '../../ui/index';
import avatar from '../../assets/images/user-avatar.jpg';
import { Popover } from 'react-tiny-popover';

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <MainNav>
      <NavContent>
        <Logo className="logo_profile" src={logoSM} alt="logotipe" />
        <Popover
          isOpen={isPopoverOpen}
          positions={['bottom']} // preferred positions by priority
          content={
            <PopMenu>
              <article>Profile</article>
              <article>Sign out</article>
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
      </NavContent>
      <Outlet />
    </MainNav>
  );
};

export default Navbar;