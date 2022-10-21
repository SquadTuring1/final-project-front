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


const SongItem = ({ artist, title, cover }) => {
  return (
    <CoverSongMain>
      {/* <SongsH2>Your Songs</SongsH2> */}
        <PopoverSongCover />
      <CoverSong src={cover} alt="cover" />
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
