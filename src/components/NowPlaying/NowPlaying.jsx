import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentSong } from '../../features/songs/songsSlice'
import {  CurrentSong, CurrentPlaying, CoverSongArtist, CoverSongTitle, SongsH2, CoverSong } from '../../ui/index'
import logoMammoth from '../../assets/images/empty-cover-logo.svg'

const NowPlaying = () => {
  const currentSong = useSelector(getCurrentSong)
 

    return (
    <CurrentSong>
        <CurrentPlaying>
        <SongsH2 className='sidebar__desktop--nowplaying'>Now playing</SongsH2>        
        <CoverSong className='sidebar__desktop--cover' src={currentSong.imageUrl ? currentSong.imageUrl : logoMammoth} alt="" />        
        <CoverSongTitle className='sidebar__desktop--title'>{currentSong && currentSong.title}</CoverSongTitle>
        <CoverSongArtist className='sidebar__desktop--artist'>{currentSong && currentSong.artist}</CoverSongArtist>
        </CurrentPlaying>
      </CurrentSong>
    )
}

export default NowPlaying