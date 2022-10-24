import React, { useState } from 'react';
import {
  CoverSong,
  CoverSongTitle,
  CoverSongArtist,
  CoverSongMain,
  CoverMenuIcon,
  SongsH2,
} from '../../../ui/index';
import Modal from 'react-modal';
import PopoverSongCover from '../../../components/PopoverSongCover/index';
import logoMammoth from '../../../assets/images/empty-cover-logo.svg'


const SongItem = ({ artist, title, cover }) => {

  const emptyCover = () => {
    if (cover !== undefined) {
      return cover
    }else{
      return logoMammoth
    }
  }

  return (
    <CoverSongMain>
      {/* <SongsH2>Your Songs</SongsH2> */}
        <PopoverSongCover />
      <CoverSong src={emptyCover()} /> 
      <article>
        <CoverSongTitle>{title}</CoverSongTitle>
      </article>
      <article>
        <CoverSongArtist>{artist}</CoverSongArtist>
      </article>
    </CoverSongMain>
  );
};

export default SongItem;
