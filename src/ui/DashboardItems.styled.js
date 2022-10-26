import styled from "styled-components";

export const CoverSongMain = styled.main`

position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  border-radius: .3rem;
  background-color: #0A101A;
  padding: .5rem .7rem;
  

  &:hover {
    background-color: #0C1525;
  }
`;

/// Playlist component ///

export const CoverPlaylistMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 11rem;
  height: 5rem;
  border-radius: .3rem;
  background-color: #8D0E0E;
  margin: 1rem 1rem 2rem 1rem;
  padding: .4rem 0 .4rem .7rem;


  @media(min-width: 960px) {
    width: 14.35rem;
  }
`;

export const PlaylistTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  @media(min-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const PlaylistInfo = styled(PlaylistTitle)`
    font-size: .8rem;
  font-weight: 400;
  @media(min-width: 960px) {
    font-size: 1rem;
  }
`;

/// Category component ///

export const CoverCategoryMain = styled.main`

  display: flex;
  flex-shrink: 1;
  height: 15vh;
  
 
`;