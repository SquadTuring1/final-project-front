import styled from 'styled-components';
import LoginBG from '../assets/images/Login-bg.jpg'
import SignBG from '../assets/images/Sign-bg.jpg'

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height:100vh;
  background-image: url(${LoginBG});
  background-size: cover;
  background-position: center;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const MainSign = styled(MainHome)`
  justify-content: space-between;
  background-image: url(${SignBG});
`