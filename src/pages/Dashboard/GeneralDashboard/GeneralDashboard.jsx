import React from 'react'
import { song_item_test } from '../../../dbtest'
import { GenDashMain, CategoryDash, SongsDash, PlaylistDash, RecommendedDash } from '../../../ui/index'
import SongItem from '../SongItem/index'



const GeneralDashboard = () => {
  return (
    <GenDashMain>
      <CategoryDash />
      <SongsDash>
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </SongsDash>
      <PlaylistDash />
      <RecommendedDash />
    </GenDashMain>
  )
}

export default GeneralDashboard