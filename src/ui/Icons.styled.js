import styled from 'styled-components';
import {
  RiPlayListFill,
  RiStarFill,
  RiHome5Fill,
  RiAppsFill,
  RiUpload2Fill,
} from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';
import LikedSong from '../components/LikedSong';

export const IconHome = styled(RiHome5Fill)`
  color: #ef5656;
  /* color: #fff; */
  /* margin: 0 1.2rem; */
  font-size: 2rem;

  @media (min-width: 960px) {
    margin: 0 0.5rem;
    font-size: 1.3rem;
  }
`;

export const IconPlaylist = styled(RiPlayListFill)`
  /* margin: 0 1.2rem; */
  font-size: 2rem;

  @media (min-width: 960px) {
    margin: 0 0.5rem;
    font-size: 1.3rem;
  }
`;

export const IconFavorites = styled.div`
  margin: 0 1.2rem;
  font-size: 2rem;
  color: white;

  @media (min-width: 960px) {
    margin: 0 0.5rem;
    font-size: 1.3rem;
  }

  &.star__song--item {
    /* display: flex;
        justify-content: flex-end; */
    /* background-color: red; */
    position: absolute;
    top: 9.5rem;
    left: 7.29rem;
    font-size: 0.9rem;
    width: 0.8rem;
    padding: 0;
    margin: 0.2rem 0 0 0;
  }
`;
export const StarButton = styled(LikedSong)`
    position: absolute;
`;

export const IconCategories = styled(RiAppsFill)`
  /* margin: 0 1.2rem; */
  font-size: 2rem;

  @media (min-width: 960px) {
    margin: 0 0.5rem;
    font-size: 1.3rem;
  }
`;

export const IconUpload = styled(RiUpload2Fill)`
  color: #56c1ef;
  font-size: 2rem;

  @media (min-width: 960px) {
    margin: 0 10px 0 0;
    color: white;
    font-size: 1.3rem;
  }
`;
