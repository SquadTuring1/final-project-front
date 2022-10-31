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

  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    // console.log(songList)
    content = songList?.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, songIndex) =>
      <SwiperSlide key={_id} virtualIndex={_id}>
        <SongItem artist={artist} title={title} cover={imageUrl} songId={_id} songIndex={songIndex} fileUrl={fileUrl} likedBY={likedBY} album={album} />  
      </SwiperSlide> 
    )
    // console.log(songList)
  } else if (isError) {
    content = <p>{error}</p>
  } 

  //Test Media Queries in React
  const [matches, setMatches] = useState('')

  useEffect(() => {
    window
    .matchMedia("(max-width: 500px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const mediaScreen = () => {
    // console.log('matches: ', matches)
    if (window.matchMedia("(max-width: 500px)").matches) {
      // console.log('2')
      return 2;
    }else if (window.matchMedia("(min-width: 500px)").matches) {
      // console.log('3')
      return 8
    }
  }

  

  return (
    <Swiper
      modules={[ Navigation, Pagination, Virtual]}
      navigation
      spaceBetween={10}
      slidesPerView={mediaScreen()}
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

export default SongList;
