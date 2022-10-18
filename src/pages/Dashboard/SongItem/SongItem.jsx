import React from 'react'
import { CoverSong, CoverSongTitle, CoverSongArtist, CoverSongMain, SongsH2} from '../../../ui/index'


const SongItem = ({ artist, title, cover }) => {
  return (
    <CoverSongMain>
    {/* <SongsH2>Your Songs</SongsH2> */}
      <CoverSong src={cover} alt='cover' />
      <article>
        <CoverSongTitle>{title}</CoverSongTitle>
      </article>
      <article>
        <CoverSongArtist>{artist}</CoverSongArtist>
      </article>
    </CoverSongMain>
  )
}

export default SongItem