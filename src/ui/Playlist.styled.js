import styled from 'styled-components';
import { PlaylistTitle, PlaylistInfo,  } from './DashboardItems.styled';
import { CoverPlaylistMain } from './DashboardItems.styled';

export const PlaylistContainer = styled.div`
  display: flex;
  height: 70vh;
`

export const PlaylistColumn = styled.section `
  /* height: 60vh; */
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 1rem;  
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: -1rem;
  padding-right: 1rem;

  &.playlist__songs {
    gap: 0.1rem;
    margin: 0;
    padding: 0;
  }
`


export const PlaylistCoverSm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 5rem;
  border-radius: .3rem;
  background-color: #8D0E0E;
  margin: 0 0 .5rem 0rem;
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