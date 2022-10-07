import styled from 'styled-components';
import LoginBG from '../assets/images/Login-bg.jpg'

export const MainLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height:100vh;
  background-image: url(${LoginBG});
  background-size: cover;
  background-position: center;
`;