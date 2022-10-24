import React from 'react'
import { useSelector } from 'react-redux';
import { useGetPlaylistsQuery } from '../../features/api/apiSlice'
import { getAuthUser, getUserId } from '../../features/auth/authSlice';
import PlaylistItem from '../Dashboard/PlaylistItem/PlaylistItem';
import { PlaylistColumn } from '../../ui';

const Playlist = () => {
  const userId = useSelector(getAuthUser)
  const { data, isLoading, isFetching, isSuccess, isError, error } = useGetPlaylistsQuery();


  let content;
  if (isFetching || isLoading) {
    content = 
        <div>Playlists are being loaded...</div>
  } else if (isSuccess) {
    content = 
      <PlaylistColumn className='vertical'>
      {data.playlists.map(playlist => 
      <PlaylistItem key={playlist._id} title={playlist.title} />
      )}
      </PlaylistColumn>
  }


  return (
    <>  
    <div>{content}</div>
    </>
  )
}

export default Playlist