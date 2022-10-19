import styled from 'styled-components';

export const CoverSongTitle = styled.p`
  width: 7.5rem;
  margin: 0 0 0.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &.sidebar__desktop--title {
    font-size:1.4rem;
    font-weight: 600;
    margin: 0 0 .3rem 0;
  }
`;

export const CoverSongArtist = styled(CoverSongTitle)`
  font-size: 0.85rem;
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

  &.sidebar__desktop--nowplaying {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 .5rem;
  }
`;

export const SongTimer = styled.p`
  font-size:.85rem;
`;
