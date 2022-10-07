import React from 'react'
import { MainLogin, Btn, Logo, TextAccount, CenterArticle, TextColor } from '../../ui/index'
import mainLogo from '../../assets/images/Logo-home.png'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <MainLogin>
    <Logo src={mainLogo} />
      <CenterArticle>
        <Btn>Login</Btn>
        <TextAccount>Don't have an account? <TextColor><Link to='registration'>Register</Link></TextColor></TextAccount>
      </CenterArticle>
    </MainLogin>
  )
}

export default Home