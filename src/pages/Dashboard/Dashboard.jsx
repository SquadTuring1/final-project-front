import React from 'react';
import {
MainFlex,  CategoryRow, 
SongsRow, 
PlaylistRow, 
SpecialRow
} from '../../ui/index';
import SongItem from './SongItem/index';
import SongList from './SongList/SongList';
import { Scrollbars } from 'react-custom-scrollbars-2';


const Dashboard = () => {
  return (
    <Scrollbars universal>
      <MainFlex>
        <CategoryRow>
        <SongList />
        </CategoryRow>
        <SongsRow><SongList /></SongsRow>
        <PlaylistRow><SongList /></PlaylistRow>
        <SpecialRow><SongList /></SpecialRow>
        <SpecialRow><SongList /></SpecialRow>
        <SpecialRow><SongList /></SpecialRow>
      </MainFlex>
    </Scrollbars>
  );
};

export default Dashboard;


    // <GridMainContainer>
    //   <GridSideItem>
    //     <Sidebar />
    //   </GridSideItem>
    //   <GridMainItem><GeneralDashboard /></GridMainItem>
    //   <GridPlayerItem>
    //     <MusicPlayer />
    //   </GridPlayerItem>
    // </GridMainContainer>