import React from 'react';
import {
  MainFlex,
  CategoryRow,
  SongsRow,
  PlaylistRow,
  TitleH2,
} from '../../ui/index';
import SongItem from './SongItem/index';
// import SongList from './MySongs/MySongs';
import MySongs from './MySongs/MySongs';
import AllSongs from './AllSongs/AllSongs';
import CategoryItem from './CategoryItem/index';
import { Scrollbars } from 'react-custom-scrollbars-2';
import PlaylistItem from './PlaylistItem';
import PlaylistList from './PlaylistList/PlaylistList';

const Dashboard = () => {








  return (
    <Scrollbars universal>
      <MainFlex>
        <CategoryRow>
          <TitleH2 className='genre__dashboard--h2'>Genres</TitleH2>
          <CategoryItem />
        </CategoryRow>
        <SongsRow>
        <TitleH2 className='songs__dashboard--h2'>My Songs</TitleH2>
          <MySongs />
        </SongsRow>
        <PlaylistRow>
        <TitleH2 className='playlist__dashboard--h2'>Playlists</TitleH2>
          <PlaylistList />
        </PlaylistRow>
        <SongsRow>
        <TitleH2 className='songs__dashboard--h2'>All Songs</TitleH2>
          <AllSongs />
        </SongsRow>
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
