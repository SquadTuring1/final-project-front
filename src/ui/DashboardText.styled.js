import styled from 'styled-components';
import Button from '@mui/material/Button';
import { TiStarFullOutline } from 'react-icons/ti'

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
    width:14rem;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 0.3rem 0;
  }

  &.index__song--playlist {
    width: 2rem;
    font-size: 1rem;
    font-weight: 200;
    text-align: right;
  }

  &.title__song--playlist {
    width: 20rem;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0 .5rem
  }
  &.artist__song--playlist {
    width: 20rem;
    font-size: 1.1rem;
    font-weight: 300;
  }
  &.genre__song--playlist {
    width: 15rem;
    font-size: 1.1rem;
    font-weight: 300;
  }

  &.playlist__info--row {
    /* border-bottom: 1px solid #fff;*/
    padding: 1.9rem 0 1.25rem 0;

    /* &:hover {
      background-color: #00365c;
    } */
  }

  &.playlist__header,
  &.category__header {
    font-size: 1rem;
    margin: 0 0 0 .2rem;

    &:nth-child(2) {
      margin: 0 0 0 12.5rem;
    }
    &:nth-child(3) {
      margin: 0 0 0 12rem;
    }
  }

  /* &.category__header {
    font-size: 1rem;
    margin: 0 0 0 .2rem;

    &:nth-child(2) {
      margin: 0 0 0 12.5rem;
    }
    &:nth-child(3) {
      margin: 0 0 0 12rem;
    } */
  
`;


export const CoverSongArtist = styled(CoverSongTitle)`
  font-size: 0.8rem;
  font-weight: 300;

  &.sidebar__desktop--artist {
    font-size: 1.1rem;
    width:14rem;
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
    margin: 0 0 0.5rem;
  }
`;

export const PopoverArticle = styled.article`
  position: absolute;
  top: 8.2rem;
  left:6.8rem;
  min-width: 29px;
  background-color: transparent;
`;


export const SongTimer = styled.p`
  font-size: 0.85rem;
  color: #fff;
`;
