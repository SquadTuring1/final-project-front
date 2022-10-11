import styled from 'styled-components';
import LoginBG from '../assets/images/Login-bg.jpg';
import SignBG from '../assets/images/Sign-bg.jpg';

export const MainApp = styled.main`
  height:100vh;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(10,17,34,1) 100%);
`

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-image: url(${LoginBG});
  background-size: cover;
  background-position: center;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const MainSign = styled(MainHome)`
  justify-content: space-between;
  background-image: url(${SignBG});
`;

export const MainDash = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(10,17,34,1) 100%);
  font-family: 'Source Sans Pro', sans-serif;
`;
