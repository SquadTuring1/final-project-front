import React from 'react';
import {
  MainLogin,
  Btn,
  Logo,
  TextAccount,
  CenterArticle,
  TextColor,
} from '../../ui/index';
import mainLogo from '../../assets/images/Logo-home.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainLogin>
      <Logo src={mainLogo} />
      <CenterArticle>
        <Link to="login">
          <Btn>Login</Btn>
        </Link>
        <TextAccount>
          Don't have an account?{' '}
          <Link to="registration">
            <TextColor>Register</TextColor>
          </Link>
        </TextAccount>
      </CenterArticle>
    </MainLogin>
  );
};

export default Home;
