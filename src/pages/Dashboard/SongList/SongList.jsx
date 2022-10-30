import React, { useEffect } from 'react';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery } from '../../../features/api/apiSlice'
import { setCurrentSong, setSongsList } from '../../../features/songs/songsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react'

import Swiper, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/bundle";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { A11y, Navigation, Pagination, Scrollbar, Virtual } from "swiper";



const SongList = () => {
  const dispatch = useDispatch();
  const { data: songList, isLoading, isSuccess, isError, error} = useGetSongsQuery()

  // sets songList in songs state, if the query for data from getSongs returns a list
  useEffect(() => {
    if (isSuccess) {
      // console.log(songList)
    dispatch(setSongsList({songList: songList, currentSongIndex: 0, currentSongId: songList[0]?._id, currentSongUrl: songList[0]?.fileUrl, playing: false}));
    } else {
      return;
    }
  }, [songList ])



  // let content;
  // if (isLoading) {
  //   content = <p>Loading...</p>
  // } else if (isSuccess) {
  //   // console.log(songList)
  //   content = songList?.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, songIndex) =>
  //     <SwiperSlide key={_id} virtualIndex={_id}>
  //       <SongItem artist={artist?.artistName} title={title} cover={imageUrl} songId={_id} songIndex={songIndex} fileUrl={fileUrl} likedBY={likedBY} album={album} />  
  //     </SwiperSlide> 
  //   )
  // } else if (isError) {
  //   content = <p>{error}</p>
  // } 
  

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  
  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    // console.log(songList)
    content = songList?.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, songIndex) =>
      <div className='swiper-container' key={_id} virtualIndex={_id}>
        <SongItem artist={artist?.artistName} title={title} cover={imageUrl} songId={_id} songIndex={songIndex} fileUrl={fileUrl} likedBY={likedBY} album={album} />  
      </div> 
    )
  } else if (isError) {
    content = <p>{error}</p>
  } 

  return (
    // <Swiper
    //   modules={[ Navigation, Pagination, Virtual]}
    //   navigation
    //   spaceBetween={10}
    //   slidesPerView={9}
    //   virtual
    //   style={{
    //     "--swiper-navigation-color": "#fff",
    //     "--swiper-navigation-size": "1.5rem"
    //   }}
    // >
    //   <SongsDash>
    //     {content}
    //   </SongsDash>
    // </Swiper>

    <div className="swiper">
      <div className="swiper-wrapper">
        {content}
		  </div>
      <div class="swiper-button-next" style={{backgroundColor: 'white', width: '20px'}}></div>
      <div class="swiper-button-prev" style={{backgroundColor: 'white', width: '20px'}}></div>
	</div>
  );
};

export default SongList;
