import React from 'react';
import {
  GridMainContainer,
  GridMainItem,
  GridPlayerItem,
  GridSideItem,
} from '../../ui/index';
import MusicPlayer from '../../components/MusicPlayer/index';
import { Sidebar } from '../../components/Sidebar/index';
import GeneralDashboard from './GeneralDashboard/index';



const Dashboard = () => {
  return (
    <GridMainContainer>
      <GridSideItem>
        <Sidebar />
      </GridSideItem>
      <GridMainItem><GeneralDashboard /></GridMainItem>
      <GridPlayerItem>
        <MusicPlayer />
      </GridPlayerItem>
    </GridMainContainer>
  );
};

export default Dashboard;
