import ReactModal from 'react-modal';
import styled from 'styled-components';
import LoginBG from '../assets/images/login-bg-desktop-dark.jpg';
import LoginMobileBG from '../assets/images/login-bg-mobile-dark.jpg';
import SignBG from '../assets/images/Sign-bg.jpg';


export const MainApp = styled.main`
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(10, 17, 34, 1) 100%
  );
`;

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height:100vh;
  background-image: url(${LoginMobileBG});
  background-size: cover;
  background-position: center;
  font-family: 'Source Sans Pro', sans-serif;

  @media(min-width: 960px) {
    background-image: url(${LoginBG});
    justify-content: center;
    align-items: flex-start;
  padding: 0 0 0 8rem;
  }
`;

export const MainSign = styled(MainHome)`
  justify-content: space-between;
  height: 'auto';
  background-image: url(${LoginMobileBG});


  @media (min-width: 960px) {
    justify-content: center;
    align-items: center;
    background-image: url(${LoginBG});
  }
`;

export const MainDash = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88vh;
  margin: 3rem 0 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(10, 17, 34, 1) 100%
  );
  font-family: 'Source Sans Pro', sans-serif;
`;

export const MainReset = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const MainModal = styled(ReactModal)`

`;
