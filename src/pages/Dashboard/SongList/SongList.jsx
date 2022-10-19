import React, { useEffect } from 'react';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery } from '../../../features/api/apiSlice'
import { setCurrentSong, setSongsList } from '../../../features/songs/songsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react'



const SongList = () => {
  const dispatch = useDispatch();
  const { data: songList, isLoading, isSuccess, isError, error} = useGetSongsQuery()

  // sets songList in songs state, if the query for data from getSongs returns a list
  useEffect(() => {
    if (isSuccess) {
    dispatch(setSongsList({songList: songList, songIndex: 0, currentSongId: songList[0]._id, currentSongUrl: songList[0].fileUrl, playing: false}));
    }
  }, [songList])

  const handleSongClick = (songIndex, _id, fileUrl) => {
    dispatch(setCurrentSong({songIndex, _id, fileUrl}))
  }

  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
      content = songList.map(({ _id, imageUrl, artist, title, fileUrl }, songIndex) => {
      return (
        <div key={_id} onClick={() => handleSongClick(songIndex, _id, fileUrl) }>
          <SongItem artist={artist && artist.artistName} title={title} cover={imageUrl} />
        </div>
      )
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <SongsDash>
      {content}
    </SongsDash>
  );
};

export default SongList;
