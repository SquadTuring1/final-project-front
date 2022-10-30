import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CoverCategoryMain, PlaylistColumn, PlaylistColumnSongs, PlaylistContainer, PlaylistSong, CoverSongTitle, CoverSong } from '../../ui/index';
import Scrollbars from 'react-custom-scrollbars-2';
import CategoryItem from '../Dashboard/CategoryItem/index';
import { getSongList, setSongsList, setCurrentSong } from '../../features/songs/songsSlice';
import { useLazyGetGenreByIdQuery } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import PopoverSongCover from '../../components/PopoverSongCover/PopoverSongCover';



const Categories = () => {
  const songList = useSelector(getSongList);
  const dispatch = useDispatch();

  const [ getGenryById, {data: songsByGenre, isLoading, isSuccess, isUninitialized, isError: error } ] = useLazyGetGenreByIdQuery();


  useEffect(() => {
    if (isSuccess) {
      dispatch(setSongsList({ songList: songsByGenre?.songs, currentSongIndex: 0, currentSongId: songsByGenre?.songs[0]?._id, currentSongUrl: songsByGenre?.songs[0]?.fileUrl, playing: false}));
    }
  }, [songsByGenre])

  const handleGenreClick = async (genreId) => {
    await getGenryById(genreId);
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
        <PlaylistSong key={_id} onClick={() => handleSongClick(_id, index)}>
          <CoverSongTitle className="index__song--playlist">{index+1}</CoverSongTitle>
          <CoverSong className="cover__song--playlist" src={imageUrl} />
          <CoverSongTitle className="title__song--playlist playlist__info--row">{title}</CoverSongTitle>
          <CoverSongTitle className="artist__song--playlist playlist__info--row">{artist}</CoverSongTitle>
          <CoverSongTitle className="genre__song--playlist playlist__info--row">{genre?.title}</CoverSongTitle>
          <PopoverSongCover songId={_id} title={title} artist={artist} album={album} />
        </PlaylistSong>
      )
  }


  return (
    <PlaylistContainer className="category__container">
      <div>
        <CategoryItem handleGenreClick={handleGenreClick}/>
      </div>
      {/* <Scrollbars universal> */}
        <PlaylistColumnSongs className="playlist__songs">
          {playlistContent }
        </PlaylistColumnSongs>
      {/* </Scrollbars> */}
    </PlaylistContainer>
  );
};

export default Categories;
