import styled from 'styled-components';

export const CategoryDash = styled.section`
  grid-area: categories;
`;

export const SongsDash = styled.section`
  grid-area: yoursongs;
`;

export const PlaylistDash = styled.section`
  grid-area: playlist;
`;

export const RecommendedDash = styled.section`
  grid-area: recommended;
`;

export const GenDashMain = styled.main`
  display: grid;
  grid: 
  'categories'
  'yoursongs'
  'playlist'
  'recommended'
  ;
`;
