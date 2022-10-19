import { Outlet } from 'react-router-dom';
import logoSM from '../../assets/images/Logo-sign.png';
import {
  Logo,
  MainNav,
  NavContent,
} from '../../ui/index';

import PopoverNavbar from '../PopoverNavbar/PopoverNavbar';





const Navbar = () => {


  return (
    <MainNav>
      <NavContent>
        <Logo className="logo_profile" src={logoSM} alt="logotipe" />
          <PopoverNavbar />
      </NavContent>
      <Outlet />
    </MainNav>     
  );
};

export default Navbar;