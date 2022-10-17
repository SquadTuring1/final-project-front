import styled from 'styled-components';

export const CurrentSong = styled.article`
  display: none;
  grid-area: currentsong;
  border: 1px dotted #fff;
  color: #fff;

  @media (min-width: 960px) {
    display: block;
  }
`;

export const SideMenu = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  grid-area: sidemenu;
  border: 1px dotted #fff;
  color: #fff;

  @media(min-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const SideMenuItems = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 960px) {
    flex-direction: row;
    margin: .5rem 0;
  }
`

export const UploadBtn = styled.article`
  display: none;
  grid-area: upload;
  border: 1px dotted #fff;
  color: #fff;

  @media (min-width: 960px) {
    display: block;
  }
`;

export const SidebarMain = styled.main`
  height: 100%;
  display: grid;
  grid: 'sidemenu';

  @media (min-width: 960px) {
    grid:
      'currentsong' auto
      'sidemenu' 18rem
      'upload' 7rem;
  }
`;
