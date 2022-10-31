import React, { useState, useEffect } from 'react';
import {ContainerFavSong, PlaylistBigHeader, PlaylistContainer} from '../../ui/index'
import SongItem from '../Dashboard/SongItem';
import { useSelector } from 'react-redux'
import { getUserId } from '../../features/auth/authSlice';
import Scrollbars from 'react-custom-scrollbars-2';

const FavoriteTracks = () => {
  const [likedSongs, setlikedSongs] = useState([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const userId = useSelector(getUserId);

  useEffect(() => {
    fetch(baseUrl + `me/${userId}/songs`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.myLikedSongs)
        setlikedSongs(data.myLikedSongs);
      });
  }, []);

  const songs = likedSongs.map(({ _id, imageUrl, artist, title, fileUrl, likedBY, album }, songIndex) =>
      <div key={_id} virtualIndex={_id}>
        <SongItem artist={artist} title={title} cover={imageUrl} songId={_id}  likedBY={likedBY} songIndex={songIndex} fileUrl={fileUrl} album={album} />  
      </div> 
  )

  return (
      <Scrollbars universal>
        <PlaylistContainer className="favorites__container">
          <PlaylistBigHeader>My favorites</PlaylistBigHeader>
          <ContainerFavSong>
            {songs}
          </ContainerFavSong>
        </PlaylistContainer>
      </Scrollbars>
    
  );
}

export default FavoriteTracks