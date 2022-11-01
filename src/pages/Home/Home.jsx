import React from 'react';
import {
  MainHome,
  Button,
  Logo,
  TextAccount,
  CenterArticle,
  TextColor,
} from '../../ui/index';
import turingLogo from '../../assets/images/logo-mammoth2-vertical.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <MainHome>
      <Logo className='logo__home' src={turingLogo} />
      <CenterArticle>
          <Button as={Link} to="login">Login</Button>
        <TextAccount>
          Don't have an account?{' '}
            <TextColor to="registration">Register</TextColor>
        </TextAccount>
      </CenterArticle>
    </MainHome>
  );
};

export default Home;