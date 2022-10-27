import React from 'react';
import {
  MainFlex,
  CategoryRow,
  SongsRow,
  PlaylistRow,
  SpecialRow,
} from '../../ui/index';
import SongItem from './SongItem/index';
import SongList from './SongList/SongList';
import Categories from './CategoryItem/CategoryItem';
import { Scrollbars } from 'react-custom-scrollbars-2';
import PlaylistItem from './PlaylistItem';
import PlaylistList from './PlaylistList/PlaylistList';

const Dashboard = () => {
  return (
    <Scrollbars universal>
      <MainFlex>
        <CategoryRow>
          <h2>Genres</h2>
          <Categories />
        </CategoryRow>
        <SongsRow>
        <h2>My Songs</h2>
          <SongList />
        </SongsRow>
        <PlaylistRow>
        My Playlist
          <PlaylistList />
        </PlaylistRow>
        <SpecialRow>
        Recommended Songs
          <SongList />
        </SpecialRow>
        <SpecialRow>
          <SongList />
        </SpecialRow>
        <SpecialRow>
          <SongList />
        </SpecialRow>
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
