import React from 'react';
import {
  CoverSong,
  CoverSongTitle,
  CoverSongArtist,
  CoverSongMain,
} from '../../../ui/index';
import PopoverSongCover from '../../../components/PopoverSongCover/index';
import logoMammoth from '../../../assets/images/empty-cover-logo.svg'


const SongItemSwiper = ({ artist, title, cover }) => {

  const emptyCover = cover !== undefined ? cover : logoMammoth;

  return (
    <CoverSongMain>
      {/* <SongsH2>Your Songs</SongsH2> */}
        <PopoverSongCover />
      <CoverSong src={emptyCover} /> 
      <article>
        <CoverSongTitle>{title}</CoverSongTitle>
      </article>
      <article>
        <CoverSongArtist>{artist}</CoverSongArtist>
      </article>
    </CoverSongMain>
  );
};

export default SongItemSwiper