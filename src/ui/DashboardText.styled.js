import styled from 'styled-components';

export const CoverSongTitle = styled.p`
  width: 7.5rem;
  margin: 0 0 0.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CoverSongArtist = styled(CoverSongTitle)`
  font-size: 0.85rem;
  font-weight: 200;
`;

export const SongsH2 = styled.h2`
display: flex;
flex-direction: column;
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
