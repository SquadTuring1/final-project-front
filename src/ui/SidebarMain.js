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
  grid-area: sidemenu;
  border: 1px dotted #fff;
  color: #fff;
`;

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
