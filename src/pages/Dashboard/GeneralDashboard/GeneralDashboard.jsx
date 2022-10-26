import React from 'react'
import { song_item_test } from '../../../dbtest'
import { GenDashMain, CategoryDash, SongsDash, PlaylistDash, RecommendedDash, SongsH2 } from '../../../ui/index'
import SongItem from '../SongItem/index'
import SongList from '../SongList/SongList'



const GeneralDashboard = () => {
  





  return (
    <GenDashMain>
      <CategoryDash />
      {/* <SongsDash> */}
      <SongList />
      {/* </SongsDash> */}
      <PlaylistDash />
      <RecommendedDash />
    </GenDashMain>
  )
}

export default GeneralDashboard