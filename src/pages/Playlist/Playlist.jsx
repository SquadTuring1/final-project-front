import React from 'react'
import { useSelector } from 'react-redux';
import { useGetPlaylistsQuery } from '../../features/api/apiSlice'
import { getAuthUser, getUserId } from '../../features/auth/authSlice';

const Playlist = () => {
  const userId = useSelector(getAuthUser)
  const { data, isLoading, isFetching, isSuccess, isError, error } = useGetPlaylistsQuery();


  let content;
  if (isFetching || isLoading) {
    content = 
        <div>Playlists are being loaded...</div>
  } else if (isSuccess) {
    data.playlists.map(playlist => console.log(playlist.title))
    console.log(data.playlists)
    content = data.playlists.map(playlist => (
<div key={playlist._id}>playlist.title</div>
    )
      
    )
  }



  return (
    <>  
    <div>Playlist</div>
    <div>{content}</div>
    </>
  )
}

export default Playlist