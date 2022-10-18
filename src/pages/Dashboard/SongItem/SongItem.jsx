import React from 'react'
import { song_item_test } from '../../../dbtest'
import { CoverSong, CoverSongTitle, CoverSongArtist, CoverSongMain, SongsH2} from '../../../ui/index'



const SongItem = () => {
  return (
    <CoverSongMain>
    {/* <SongsH2>Your Songs</SongsH2> */}
      <CoverSong src="https://freemusicarchive.org/image/?file=images%2Falbums%2FThe_New_Lines_-_Live_on_WFMUs_This_Is_The_Modern_World_with_Trouble_-_May_27_2014_-_20150326132350886.jpg&width=290&height=290&type=album" alt="" />
      <CoverSongTitle>Wild Heart</CoverSongTitle>
      <CoverSongArtist>Bryan Mathys</CoverSongArtist>
    </CoverSongMain>
  )
}

export default SongItem