import React from 'react'
import { GridMainContainer, GridMainItem, GridPlayerItem, GridSideItem } from '../../ui/index';
import MusicPlayer from '../../components/MusicPlayer/index';

const Dashboard = () => {
  return (
    <GridMainContainer>
      <GridSideItem>Sidebar</GridSideItem>
      <GridMainItem>Dashboard</GridMainItem>
      <GridPlayerItem><MusicPlayer /></GridPlayerItem>

    </GridMainContainer>
  )
}

export default Dashboard