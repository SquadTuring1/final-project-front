import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentSong, getSongList } from '../../features/songs/songsSlice'
import {  CurrentSong, CurrentPlaying, CoverSongArtist, CoverSongTitle, SongsH2, CoverSong } from '../../ui/index'
import logoMammoth from '../../assets/images/empty-cover-logo.svg'
import { apiSlice } from '../../features/api/apiSlice'

const NowPlaying = () => {
  const currentSong = useSelector(getCurrentSong && getCurrentSong);
  

  let imageUrl;
  let title;
  let artist;
  if (currentSong) {
    imageUrl = currentSong.imageUrl;
    title = currentSong.title;
    artist = currentSong.artist;
  } else {
    imageUrl = logoMammoth;
    title = 'Loading title...'
    artist = 'Loading artist...'
  }
 
  
  return (
    <CurrentSong>
      <CurrentPlaying>
      <SongsH2 className='sidebar__desktop--nowplaying'>Now playing</SongsH2>        
      <CoverSong className='sidebar__desktop--cover' src={imageUrl} alt="" />        
      <CoverSongTitle className='sidebar__desktop--title'>{title}</CoverSongTitle>
      <CoverSongArtist className='sidebar__desktop--artist'>{artist}</CoverSongArtist>
      </CurrentPlaying>
    </CurrentSong>
    )

    
}

export default NowPlaying