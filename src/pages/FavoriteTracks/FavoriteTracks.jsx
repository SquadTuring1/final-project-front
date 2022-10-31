import React, { useState } from 'react';
import {
  CoverSong,
  CoverSongTitle,
  CoverSongArtist,
  CoverSongMain,
  CoverMenuIcon,
  SongsH2,
} from '../../ui';
import Modal from 'react-modal';
import PopoverSongCover from '../../components/PopoverSongCover/index';
import logoMammoth from '../../assets/images/empty-cover-logo.svg'
import LikedSong from '../../components/LikedSong'
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../features/auth/authSlice';
import { getSongList, setCurrentSong } from '../../features/songs/songsSlice';

const FavoriteTracks = ({ artist, title, cover, songId, likedBY, album }) => {
  const dispatch = useDispatch()
  const userId = useSelector(getUserId)
  const songList = useSelector(getSongList)

  const emptyCover = cover !== undefined ? cover : logoMammoth

  const handleClick = () => {
    const index = songList.findIndex(song => song._id === songId);
    dispatch(setCurrentSong({ currentSongIndex: index, _id: songId, fileUrl: songList[index].fileUrl }))
  }
//display: flex
//flex-wrap: wrap
  
  return (
    <div key={songId} >
    <CoverSongMain>
      {/* <SongsH2>Your Songs</SongsH2> */}
        <PopoverSongCover songId={songId} title={title} artist={artist} album={album}/>
      <CoverSong cover={cover} src={emptyCover} 
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

export default FavoriteTracks