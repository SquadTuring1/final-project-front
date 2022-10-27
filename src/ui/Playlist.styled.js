import styled from 'styled-components';
import { PlaylistTitle, PlaylistInfo,  } from './DashboardItems.styled';
import { CoverPlaylistMain } from './DashboardItems.styled';

// export const PlaylistContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 70vh;
//   width: 100%;
// `

// export const  = styled.`
  
// `;

export const PlaylistColumn = styled.section `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: playlist;
  margin: 0 0 0 1rem;
  
  /* height: 60vh;
  width: 50%;
  align-items: center;
  justify-content: flex-start; 
  gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: -1rem;
  padding-right: 1rem;

  &.playlist__songs {
    gap: 0.1rem;
    margin: 0;
    padding: 0;
  } */
`
export const PlaylistColumnSongs = styled.section`
grid-area: songs;
  margin: 0 1rem 0 0;
`;


export const PlaylistContainer = styled.main`
height: 100%;
  display: grid;
  grid: 
  'playlist songs' 100%/
    35%     auto
  ;
  gap: 1rem;

  /* display: flex;
  justify-content: space-between;
  height: 70vh;
  width: 100%; */
`


export const PlaylistCoverSm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 4rem;
  border-radius: .3rem;
  background-color: #8D0E0E;
  margin: 0 0 1rem 1rem;
  padding: .5rem .5rem ;
  font-size: .8rem;
  cursor: pointer;
  
  ${PlaylistTitle} {
    font-size: 1.4rem;
    color: white;
  }

  ${PlaylistInfo} {
    font-size: 1rem;
    color: white;
  }


`

export const PlaylistSong = styled.div`
  height: 2rem;
  width: 90%;
  display: flex;
  
  align-items: center;
  color: hsla(0, 0%, 0%, 0.1);
  background-color: lightgrey;
  color: black;
  font-size: 1.2rem;
  padding: 0.4rem;
`