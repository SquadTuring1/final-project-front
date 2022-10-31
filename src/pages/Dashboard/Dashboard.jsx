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
import CategoryItem from './CategoryItem/index';
import { Scrollbars } from 'react-custom-scrollbars-2';
import PlaylistItem from './PlaylistItem';
import PlaylistList from './PlaylistList/PlaylistList';
import SongList from './SongList/SongList';
import { useGetSongsByUserQuery, useGetSongsQuery } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';
import { getUserId } from '../../features/auth/authSlice';



const Dashboard = () => {
  const userId = useSelector(getUserId)
  
  const mySongsQuery = useGetSongsByUserQuery(userId);
  const allSongsQuery = useGetSongsQuery();




  return (
    <Scrollbars universal>
      <MainFlex>
        <CategoryRow>
          <TitleH2 className='genre__dashboard--h2'>Genres</TitleH2>
          <CategoryItem />
        </CategoryRow>
        <SongsRow>
        <TitleH2 className='songs__dashboard--h2'>My Songs</TitleH2>
          <SongList mySongsQuery={mySongsQuery} />
        </SongsRow>
        <PlaylistRow>
        <TitleH2 className='playlist__dashboard--h2'>Playlists</TitleH2>
          <PlaylistList />
        </PlaylistRow>
        <SongsRow>
        <TitleH2 className='songs__dashboard--h2'>All Songs</TitleH2>
          <SongList allSongsQuery={allSongsQuery} />
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
