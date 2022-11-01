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



const SongList = ({ mySongsQuery, allSongsQuery }) => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  
  const { data: songs, isLoading, isSuccess, isError, error } = mySongsQuery ? mySongsQuery : allSongsQuery;

  useEffect(() => {
    if (allSongsQuery) {
      if (isSuccess) {
        dispatch(setSongsList({songList: songs, currentSongIndex: 0, currentSongId: songs[0]?._id, currentSongUrl: songs[0]?.fileUrl, playing: false}));
        } 
    } else {
      return;
    }
  }, [])


  const handleClick = (_id, index) => {
    dispatch(setSongsList({ songList: songs, currentSongIndex: index, currentSongId: songs[index]?._id, currentSongUrl: songs[index]?.fileUrl, playing: false}));
  }


  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = songs?.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, index) =>
      <SwiperSlide key={_id} virtualIndex={_id} onClick={() => handleClick(_id, index)}>
        <SongItem artist={artist} title={title} cover={imageUrl} songId={_id} songIndex={index} fileUrl={fileUrl} likedBY={likedBY} album={album}   />  
      </SwiperSlide> 
    )
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
