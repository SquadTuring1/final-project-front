import React from 'react'
import { GenDashMain, CategoryDash, SongsDash, PlaylistDash, RecommendedDash } from '../../ui/index'


const GeneralDashboard = () => {
  return (
    <GenDashMain>
      <CategoryDash />
      <SongsDash />
      <PlaylistDash />
      <RecommendedDash />
    </GenDashMain>
  )
}

export default GeneralDashboard