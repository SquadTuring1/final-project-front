import { Outlet, useNavigate } from 'react-router-dom';
import logoSM from '../../assets/images/Logo-sign.png';
import {
  Logo,
  MainNav,
  NavContent,
} from '../../ui/index';

import PopoverNavbar from '../PopoverNavbar/PopoverNavbar';


const Navbar = () => {

  const navigate = useNavigate()

  return (
    <MainNav>
      <NavContent>
        <Logo onClick={() => navigate('/dashboard')} className="logo_profile" src={logoSM} alt="logotipe" />
          <PopoverNavbar />
      </NavContent>
    </MainNav>     
  );
};

export default Navbar;