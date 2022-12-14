import styled from 'styled-components';

export const MainFlex = styled.main`
  display:flex;
  flex-direction: column;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const CategoryRow = styled.section`
margin: 0 0 0 0;
  /* border: 1px dashed #fff; */
`;

export const SongsRow = styled.section`
margin: 0 0 1rem 0;  
`;

export const PlaylistRow = styled.section`
  /* border: 1px dashed #fff; */
`;



// export const GridSideItem = styled.aside`
//   grid-area: sidebar;
//   /* border: 1px dashed #fff; */
//   color: #fff;
// `;

// export const GridMainItem = styled.section`
//   grid-area: dashboard;
//   border: 1px dashed #fff;
//   color: #fff;
// `;

// export const GridPlayerItem = styled.footer`
//   grid-area: musicPlayer;
//   border: 1px dashed #fff;
//   color: #fff;
// `;

// export const GridMainContainer = styled.main`
//   height: 91.5vh;
//   background: linear-gradient(
//     180deg,
//     rgba(0, 0, 0, 1) 0%,
//     rgba(10, 17, 34, 1) 100%
//   );
//   font-family: 'Source Sans Pro', sans-serif;
//   display: grid;
//   grid:
//     'dashboard' auto
//     'musicPlayer' 3.86rem
//     'sidebar' 4.75rem;

//   @media (min-width: 960px) {
//     grid:
//       'sidebar dashboard' auto
//       'sidebar musicPlayer' 7rem /
//       20rem auto;
//   }
// `;
