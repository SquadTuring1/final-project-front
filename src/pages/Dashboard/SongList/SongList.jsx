import React from 'react';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery } from '../../../features/api/apiSlice'
import { getCurrentSong, setCurrentSong } from '../../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'



const SongList = () => {
  const dispatch = useDispatch();
  const { data: songList, isLoading, isSuccess, isError, error} = useGetSongsQuery()
  const [ song, setSong ] = useState();
  
  song && dispatch(setCurrentSong(song))

  let content;
  if (isLoading){
    content = <p>Loading...</p>
  } else if (isSuccess){
    content = songList.map(({ _id, imageUrl, artistName, title,}) => {
        
        return (
          <div key={_id} onClick={() => setSong(_id)}>
            <SongItem artist={artistName} title={title} cover={imageUrl}  />  
          </div>
          
          
        )
    })
  } else if (isError) {
    content = <p>Error</p>
  }


  return (
    <SongsDash>
      {'Songs'}
      {content}
    </SongsDash>
  );
};

export default SongList;
