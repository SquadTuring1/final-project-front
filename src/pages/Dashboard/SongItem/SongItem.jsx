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
  console.log(artist)
  const dispatch = useDispatch();
  const userId = useSelector(getUserId)
  const songList = useSelector(getSongList)

  const emptyCover = () => {
    if (cover !== undefined) {
      return cover;
    }else{
      return logoMammoth;
    }
  }

  const handleClick = () => {
    const index = songList.findIndex(song => song._id === songId);
    dispatch(setCurrentSong({ currentSongIndex: index, _id: songId, fileUrl: songList[index].fileUrl }))
  }

  return (
    <div key={songId} >
    <CoverSongMain>
        <PopoverSongCover songId={songId} title={title} artist={artist} album={album}/>
      <CoverSong cover={cover} src={emptyCover()} 
      onClick={handleClick} 
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
