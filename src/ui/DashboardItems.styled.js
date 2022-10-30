import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const CoverSongMain = styled.main`

position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  border-radius: .3rem;
  background-color: #0A101A;
  padding: .5rem .7rem;
  width: 10rem;


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

export const CoverCategoryImg = styled.img`
height: 8rem;
margin: .8rem 1rem;
`;

export const CategorySwiperItem = styled(SwiperSlide)`
  /* width: 16rem; */
`;

export const CoverCategoryMain = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

export const CategorySwiper = styled.main`
display: flex;

&.mySwiper {
  display: flex;
  flex-wrap: wrap;
}
  
`;