import React from 'react'
import {  CurrentSong, CurrentPlaying, CoverSongArtist, CoverSongTitle, SongsH2, CoverSong } from '../../ui/index'

const NowPlaying = () => {
  return (
    <CurrentSong>
        <CurrentPlaying>
        <SongsH2 className='sidebar__desktop--nowplaying'>Now playing</SongsH2>
        <CoverSong className='sidebar__desktop--cover' src="https://freemusicarchive.org/image/?file=images%2Falbums%2FJack_Skuller_-_Live_at_WFMU_on_Minor_Music_June_18th_2012_-_20120626114609467.jpg&width=290&height=290&type=album" alt="" />
        <CoverSongTitle className='sidebar__desktop--title'>Don't wait</CoverSongTitle>
        <CoverSongArtist className='sidebar__desktop--artist'>Jack Skuller</CoverSongArtist>
        </CurrentPlaying>
      </CurrentSong>
  )
}

export default NowPlaying