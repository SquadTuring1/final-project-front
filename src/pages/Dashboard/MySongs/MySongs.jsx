import React, { useEffect } from 'react';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery, useGetSongsByUserQuery } from '../../../features/api/apiSlice'
import { setCurrentSong, setSongsList } from '../../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'


import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Virtual } from "swiper";
import { getAuthUser, getUserId } from '../../../features/auth/authSlice';



const MySongs = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId)
  const { data: mySongs, isLoading, isSuccess, isError, error} = useGetSongsByUserQuery(userId)


  const handleClick = (_id, index) => {
    dispatch(setSongsList({ songList: mySongs, currentSongIndex: index, currentSongId: mySongs[index]?._id, currentSongUrl: mySongs[index]?.fileUrl, playing: false}));
  }


  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(mySongs)
    content = mySongs?.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, index) =>
      <SwiperSlide key={_id} virtualIndex={_id} onClick={() => handleClick(_id, index)}>
        <SongItem artist={artist} title={title} cover={imageUrl} songId={_id} songIndex={index} fileUrl={fileUrl} likedBY={likedBY} album={album}   />  
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

export default MySongs;
