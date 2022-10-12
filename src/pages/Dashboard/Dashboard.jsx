import React from 'react'
import { GridMainContainer, GridMainItem, GridPlayerItem, GridSideItem } from '../../ui/index';


const Dashboard = () => {
  return (
    <GridMainContainer>
      <GridSideItem>Sidebar</GridSideItem>
      <GridMainItem>Dashboard</GridMainItem>
      <GridPlayerItem>Music Player</GridPlayerItem>

    </GridMainContainer>
  )
}

export default Dashboard