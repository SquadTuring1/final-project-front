import React, { useEffect } from 'react';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery } from '../../../features/api/apiSlice'
import { setCurrentSong, setSongsList } from '../../../features/songs/songsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react'

import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Virtual } from "swiper";


const AllSongs = () => {
  const dispatch = useDispatch();
  const { data: allSongs, isLoading, isSuccess, isError, error} = useGetSongsQuery()

  // sets songs in songs state, if the query for data from getSongs returns a list
  useEffect(() => {
    if (isSuccess) {
    dispatch(setSongsList({songList: allSongs, currentSongIndex: 0, currentSongId: allSongs[0]?._id, currentSongUrl: allSongs[0]?.fileUrl, playing: false}));
    } 
  }, [])

  const handleClick = (_id, index) => {
      dispatch(setSongsList({ songList: allSongs, currentSongIndex: index, currentSongId: allSongs[index]?._id, currentSongUrl: allSongs[index]?.fileUrl, playing: false}));
  }

  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = allSongs?.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, index) =>
      <SwiperSlide key={_id} virtualIndex={_id} onClick={() => handleClick(_id, index)}>
        <SongItem artist={artist} title={title} cover={imageUrl} songId={_id} songIndex={index} fileUrl={fileUrl} likedBY={likedBY} album={album} />  
      </SwiperSlide> 
    )
  } else if (isError) {
    content = <p>{error}</p>
  } 

  return (
    <Swiper
      modules={[ Navigation, Pagination, Virtual]}
      navigation
      spaceBetween={10}
      slidesPerView={9}
      virtual
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "1.5rem"
      }}
    >
      <SongsDash>
        {content}
      </SongsDash>
    </Swiper>
  );
};

export default AllSongs;
