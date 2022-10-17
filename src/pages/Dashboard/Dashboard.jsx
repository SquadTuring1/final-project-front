import React from 'react';
import {
  GridMainContainer,
  GridMainItem,
  GridPlayerItem,
  GridSideItem,
} from '../../ui/index';
import MusicPlayer from '../../components/MusicPlayer/index';
import { Sidebar } from '../../components/Sidebar/index';

const Dashboard = () => {
  return (
    <GridMainContainer>
      <GridSideItem>
        <Sidebar />
      </GridSideItem>
      <GridMainItem>Dashboard</GridMainItem>
      <GridPlayerItem>Music Player</GridPlayerItem>
    </GridMainContainer>
  );
};

export default Dashboard;
