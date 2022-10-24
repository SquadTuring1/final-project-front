import React from 'react'
import { CoverSong, CoverSongTitle, CoverSongArtist, CoverSongMain, SongsH2} from '../../../ui/index'
import TestLikes from '../../../components/TestLikes'
import LikedSong from '../../../components/LikedSong'


const SongItem = ({ artist, title, cover, songId }) => {

  return (
    <div key={songId} >
    <CoverSongMain>
    {/* <SongsH2>Your Songs</SongsH2> */}
      <CoverSong src={cover} alt='cover' />
      <article>
        <CoverSongTitle>{title}</CoverSongTitle>
      </article>
      <article>
        <CoverSongArtist>{artist}</CoverSongArtist>
      </article>
      {/* <TestLikes artist={artist} title={title} cover={cover} songId={songId} /> */}
      <LikedSong songId={songId} />      
    </CoverSongMain>    
    </div>
  )
}

export default SongItem