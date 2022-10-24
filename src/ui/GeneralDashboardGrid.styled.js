import styled from 'styled-components';

export const CategoryDash = styled.section`
  /* grid-area: categories; */
  /* border: 1px dotted yellow; */

  @media(min-width: 960px){

  }
`;

export const SongsDash = styled.section`
display: flex;
  /* grid-area: yoursongs; */
  /* border: 1px dotted yellow; */

  @media(min-width: 960px){

  }
`;

export const PlaylistDash = styled.section`
display: flex;
  /* grid-area: playlist; */
  /* border: 1px dotted yellow; */

  @media(min-width: 960px){

  }
`;

export const RecommendedDash = styled.section`
  /* grid-area: recommended; */
  /* border: 1px dotted yellow; */

  @media(min-width: 960px){

  }
`;

export const GenDashMain = styled.main`
height: 100%;
display: grid;
grid: 
  'categories' 
  'yoursongs' 
  'playlist' 
  'recommended' 
  ;


  @media(min-width: 960px) {
    display: grid;
  grid: 
  'categories' 28%
  'yoursongs' 26%
  'playlist' 20%
  'recommended' 26%
  ;
  }
`;
