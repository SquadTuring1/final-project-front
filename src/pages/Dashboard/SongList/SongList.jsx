import React, { useEffect } from 'react';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery } from '../../../features/api/apiSlice'
import { getCurrentSong, setCurrentSong, setSongsList } from '../../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'



const SongList = () => {
  const dispatch = useDispatch();
  const { data: songList, isLoading, isSuccess, isError, error} = useGetSongsQuery()
  const [ song, setSong ] = useState();

  // sets songList in songs state, if the query for data from getSongs returns a list
  useEffect(() => {
    if (isSuccess) {
    dispatch(setSongsList(songList));
    }
  }, [songList])
  
  const handleSongClick = (songIndex, _id) => {
    dispatch(setCurrentSong({songIndex, _id}))
  }

  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess){    
      content = songList.map(({ _id, imageUrl, artist, title,}, songIndex) => {
      return (
        <div key={_id} onClick={() => handleSongClick(songIndex, _id) }>
          <SongItem artist={artist} title={title} cover={imageUrl} />
        </div>
      )
    })
  } else if (isError) {
    content = <p>Error</p>
  }

  return (
    <SongsDash>
      {content}
    </SongsDash>
  );
};

export default SongList;
