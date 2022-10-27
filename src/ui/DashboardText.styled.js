import styled from 'styled-components';

export const CoverSongTitle = styled.p`
  width: 6.5rem;
  margin: 0 0 0.2rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'Source Sans Pro', sans-serif;

  &.sidebar__desktop--title {
    font-size:1.4rem;
    font-weight: 600;
    margin: 0 0 .3rem 0;
  }

  &.index__song--playlist{
    width: 2rem;
    font-size:1rem;
    font-weight: 200;
    text-align: right;
  }

  &.title__song--playlist {
    width: 20rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  &.artist__song--playlist {
    width: 20rem;
    font-size: 1.1rem;
    font-weight: 300;
  }
  &.genre__song--playlist{
    width: 15rem;
    font-size: 1.1rem;
    font-weight: 300;
  }

  &.playlist__info--row {
    border-bottom: 1px solid #fff;
    padding: 1.5rem 0 1.5rem 0;

    &:hover {
      background-color: #00365C;
    }
  }
`;

export const CoverSongArtist = styled(CoverSongTitle)`
  font-size: 0.65rem;
  font-weight: 200;

  &.sidebar__desktop--artist {
    font-size:1.1rem;
  }
`;

export const SongsH2 = styled.h2`
display: flex;
flex-direction: column;
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;

  &.sidebar__desktop--nowplaying {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 .5rem;
  }
`;

export const SongTimer = styled.p`
  font-size:.85rem;
  color: #fff;
`;
