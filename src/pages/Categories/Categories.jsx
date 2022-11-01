import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CoverCategoryMain, PlaylistColumn, PlaylistColumnSongs, PlaylistContainer, PlaylistSong, CoverSongTitle, CoverSong, PlaylistBigHeader, PlaylistHeader, PlaylistArticle } from '../../ui/index';
import Scrollbars from 'react-custom-scrollbars-2';
import CategoryItem from '../Dashboard/CategoryItem/index';
import { getSongList, setSongsList, setCurrentSong } from '../../features/songs/songsSlice';
import { useLazyGetGenreByIdQuery } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import PopoverSongCover from '../../components/PopoverSongCover/PopoverSongCover';
import { useLocation } from 'react-router-dom';


const Categories = () => {
  const songList = useSelector(getSongList);
  const dispatch = useDispatch();
  const location = useLocation();
  
  const [ getGenryById, {data: songsByGenre, isLoading, isSuccess, isUninitialized, isError: error } ] = useLazyGetGenreByIdQuery();

  useEffect(() => {
      getGenryById(location?.state?.genreId)
  }, [location?.state?.genreId])

  useEffect(() => {
    if (isSuccess) {
      dispatch(setSongsList({ songList: songsByGenre?.songs, currentSongIndex: 0, currentSongId: songsByGenre?.songs[0]?._id, currentSongUrl: songsByGenre?.songs[0]?.fileUrl, playing: false})); 
    }
  }, [songsByGenre])

  const handleGenreClick = async (genreId) => {
    await getGenryById(genreId);
    if (isSuccess) {
      dispatch(setSongsList({ songList: songsByGenre?.songs, currentSongIndex: 0, currentSongId: songsByGenre?.songs[0]?._id, currentSongUrl: songsByGenre?.songs[0]?.fileUrl, playing: false})); 
    }
  }

  const handleSongClick = (songId, index) => {  
    dispatch(setCurrentSong({ currentSongIndex: index, _id: songId, fileUrl: songList[index].fileUrl })) 
  }

  



  let playlistContent;
  if (isUninitialized || isLoading) {
    playlistContent = 
      <h2>Select a genre</h2>
  } else if (isSuccess) {    
    playlistContent = 
      songList?.map(({ imageUrl, genre, title, artist, likedBy, _id, album}, index) =>      
        <PlaylistSong className='playlist__category' key={_id} onClick={() => handleSongClick(_id, index)}>
          <CoverSongTitle className="index__song--playlist">{index+1}</CoverSongTitle>
          <CoverSong className="cover__song--playlist" src={imageUrl} />
          <PlaylistArticle>
            <CoverSongTitle className="title__song--playlist playlist__info--row">{title}</CoverSongTitle>
            <CoverSongTitle className="artist__song--playlist playlist__info--row">{artist}</CoverSongTitle>
            <CoverSongTitle className="genre__song--playlist playlist__info--row">{genre?.title}</CoverSongTitle>
          </PlaylistArticle>
          <PopoverSongCover songId={_id} title={title} artist={artist} album={album} />
        </PlaylistSong>
      )
  }


  return (
    <>
    <PlaylistContainer className="category__container">
    <PlaylistBigHeader>Categories</PlaylistBigHeader>
      <div>
        <CategoryItem handleGenreClick={handleGenreClick}/>
      </div>
      <Scrollbars universal>
        <PlaylistColumnSongs className="playlist__songs">
          <PlaylistHeader className='playlist__category--header'>
            <CoverSongTitle className="category__header">Title</CoverSongTitle>
            <CoverSongTitle className="category__header">Artist</CoverSongTitle>
            <CoverSongTitle className="category__header">Genre</CoverSongTitle>
          </PlaylistHeader>
          {playlistContent }
        </PlaylistColumnSongs>
      </Scrollbars>
    </PlaylistContainer>
    </>
  );
};

export default Categories;
