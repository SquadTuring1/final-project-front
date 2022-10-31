import { useSelector, useDispatch } from "react-redux";
import { PlaylistBigHeader, PlaylistColumn, PlaylistContainer, PlaylistTitle, PlaylistInfo, PlaylistCoverSm, PlaylistSong, PlaylistColumnSongs, CoverSong, CoverSongTitle, PlaylistArticle, PopoverPlaylistStyled, PlaylistHeader } from "../../ui/index"
import { useEffect, useState } from 'react'
import { getAuthUser } from "../../features/auth/authSlice";
import { useGetPlaylistsQuery, useLazyGetSinglePlaylistQuery } from "../../features/api/apiSlice";
import { getSongList, setSongsList, setCurrentSong } from "../../features/songs/songsSlice";
import Scrollbars from "react-custom-scrollbars-2";
import SongItem from '../Dashboard/SongItem/index'
import PopoverSongCover from "../../components/PopoverSongCover";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd/'
import { nanoid } from '@reduxjs/toolkit'
import LikedSong from "../../components/LikedSong/index";
import { StarButton } from "../../ui/Icons.styled";
import PopoverPlaylist from "../../components/PopoverPlaylist/PopoverPlaylist";

import { RiMore2Line } from 'react-icons/ri';


const Playlist = () => {
  const dispatch = useDispatch();
  const songList = useSelector(getSongList)
  

  const { data: playlistsData, isLoading: isPlaylistsLoading, isSuccess: isPlaylistsSuccess, isError: isPlaylistsError, error: playlistsError } = useGetPlaylistsQuery();
  const [ getSinglePlaylist, {
    data: clickedPlaylist, 
    isFetching: isClickedFetching,
    isLoading: isClickedLoading, 
    isSuccess: isClickedSuccess, 
    isError: isClickedError, 
    error: clickedError,
  }]  = useLazyGetSinglePlaylistQuery()

    useEffect(() => {
    if (isClickedSuccess) {
      const selectedPlaylist = clickedPlaylist.playlist.songs;
      dispatch(setSongsList({ songList: selectedPlaylist, currentSongIndex: 0, currentSongId: selectedPlaylist[0]?._id, currentSongUrl: selectedPlaylist[0]?.fileUrl, playing: false}));
    }
  }, [clickedPlaylist])

  const handlePlaylistClick = async (playlistId) => {
    await getSinglePlaylist(playlistId);
    console.log('playlist loaded')
    console.log(clickedPlaylist)
    
  }

  const handleSongClick = (songId, index) => {  
      dispatch(setCurrentSong({ currentSongIndex: index, _id: songId, fileUrl: songList[index].fileUrl })) 
  }

  const draggableStyles = {
    userSelect: 'none',
  //   padding: 16,
  //   margin: '0 0 8px 0',
  //   minHeight: '50px',
  //   color: 'white',
  }
  
  const handleOnDragEnd = (result) => {
    const { source, destination, draggableId } = result;    
    if (!destination) return;    
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }    
    if (isClickedSuccess) {  
      const songsArray = Array.from(songList);
      const [ reorderedItem ] = songsArray.splice(result.source.index, 1);
      songsArray.splice(result.destination.index, 0, reorderedItem)
      dispatch(setSongsList({ songList: songsArray, }));
      
    }
  }
 
  // console.log("playlistdata", playlistsData)

  let playlistsContent;
  if (isPlaylistsLoading) {
    playlistsContent = 
        <div>Playlists are being loaded...</div>
  } else if (isPlaylistsSuccess) {
    // console.log(playlistsData)
    playlistsContent = 
      <>
      {playlistsData?.playlists?.map(playlist =>       

        <article key={playlist._id}>
          <PopoverPlaylist playlistId={playlist._id} playlistTitle={playlist.title}></PopoverPlaylist>
          <PlaylistCoverSm  onClick={() => handlePlaylistClick(playlist._id)}>
            <PlaylistTitle >{playlist.title}</PlaylistTitle>
            <PlaylistInfo>{playlist.songs.length}</PlaylistInfo>         
          </PlaylistCoverSm>
        </article>
        
      )}
      </>
  } else if (isPlaylistsError) {
    playlistsContent = 
      <div>No playlists are available...</div>
  }

  let songsContent;
  if (isClickedLoading || isClickedFetching) {
    songsContent = <div>No playlist selected</div>
  } else if (isClickedSuccess) {        
    if (songList) {
      if (!songList[0]) {
        songsContent = <div>No songs in this playlist
        </div>
      } else {
        songsContent =  
        songList?.map(({ imageUrl, genre, title, artist, likedBy, _id, album}, index) =>    
        <Draggable key={_id} draggableId={_id} index={index}>
          {(provided, snapshot) => {
            return (
              <PlaylistSong 
                {...provided.draggableProps} 
                ref={provided.innerRef}
                {...provided.dragHandleProps} 
                style={{...draggableStyles, backgroundColor: snapshot.isDragging && '#456C86', ...provided.draggableProps.style}}
                onClick={() => handleSongClick(_id, index)}
                >
                <CoverSongTitle className="index__song--playlist">{index+1}</CoverSongTitle>
                {console.log(index)}
                <CoverSong className="cover__song--playlist" src={imageUrl} />

                <PlaylistArticle>
                  <CoverSongTitle className="title__song--playlist playlist__info--row">{title}</CoverSongTitle>
                  <CoverSongTitle className="artist__song--playlist playlist__info--row">{artist}</CoverSongTitle>
                  <CoverSongTitle className="genre__song--playlist playlist__info--row">{genre?.title}</CoverSongTitle>
                  <PopoverSongCover className='popoverPlaylist' songId={_id} title={title} artist={artist} album={album} />
                  <StarButton  />
                </PlaylistArticle>
              </PlaylistSong>
            )
          }}
        </Draggable>
        )
      }
      
    }     
      
  }
  
  return (
    <>  
      <PlaylistContainer>
      <PlaylistBigHeader>Playlist</PlaylistBigHeader>
   
        <Scrollbars universal>
          <PlaylistColumn className="playlist__covers">
            {playlistsContent}
          </PlaylistColumn>
        </Scrollbars>
          {/* separation columns */}
        <Scrollbars>
            <PlaylistHeader>
                    <CoverSongTitle className="playlist__header">Title</CoverSongTitle>
                    <CoverSongTitle className="playlist__header">Artist</CoverSongTitle>
                    <CoverSongTitle className="playlist__header">Genre</CoverSongTitle>
                  </PlaylistHeader>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='tracks' key={nanoid()}>
              {(provided, snapshot) => (
                  <PlaylistColumnSongs className="playlist__songs"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  >   
                    {songsContent }
                    {provided.placeholder}  
                  </PlaylistColumnSongs>
                )
              }
            </Droppable>
          </DragDropContext>
        </Scrollbars>
      </PlaylistContainer>
    
    </>
  )
}

export default Playlist