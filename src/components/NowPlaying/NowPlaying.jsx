import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentSong } from '../../features/songs/songsSlice'
import {  CurrentSong, CurrentPlaying, CoverSongArtist, CoverSongTitle, SongsH2, CoverSong } from '../../ui/index'
import logoMammoth from '../../assets/images/empty-cover-logo.svg'

const NowPlaying = () => {
  const currentSong = useSelector(getCurrentSong);
  console.log(currentSong)

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
 
  if (currentSong) {
    return (
      <CurrentSong>
          <CurrentPlaying>
          <SongsH2 className='sidebar__desktop--nowplaying'>Now playing</SongsH2>        
          <CoverSong className='sidebar__desktop--cover' src={imageUrl ? imageUrl : logoMammoth} alt="" />        
          <CoverSongTitle className='sidebar__desktop--title'>{title}</CoverSongTitle>
          <CoverSongArtist className='sidebar__desktop--artist'>{artist}</CoverSongArtist>
          </CurrentPlaying>
        </CurrentSong>
      )
  }
    
}

export default NowPlaying