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
import LikedSong from '../../../components/LikedSong'
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../../features/auth/authSlice';
import { getSongList, setCurrentSong } from '../../../features/songs/songsSlice';

const SongItem = ({ artist, title, cover, songId, likedBY, album }) => {  
  const userId = useSelector(getUserId)

  const emptyCover = () => {
    if (cover !== undefined) {
      return cover;
    }else{
      return logoMammoth;
    }
  }


  return (
    <div key={songId} >
    <CoverSongMain>
        <PopoverSongCover songId={songId} title={title} artist={artist} album={album}/>
      <CoverSong cover={cover} src={emptyCover()} 
      /> 
      <article>
        <CoverSongTitle>{title}</CoverSongTitle>
      </article>
      <article>
        <CoverSongArtist>{artist}</CoverSongArtist>
      </article>
      <LikedSong songId={songId} likedBY={likedBY} />      
    </CoverSongMain>
    </div>
  )
}

export default SongItem;
