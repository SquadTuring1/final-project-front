import { useSelector } from "react-redux";
import { PlaylistColumn, PlaylistContainer, PlaylistTitle, PlaylistInfo, PlaylistCoverSm, PlaylistSong, PlaylistColumnSongs, CoverSong, CoverSongTitle } from "../../ui/index"
import { useEffect, useState } from 'react'
import { getAuthUser } from "../../features/auth/authSlice";
import { useGetPlaylistsQuery, useLazyGetSinglePlaylistQuery } from "../../features/api/apiSlice";
import Scrollbars from "react-custom-scrollbars-2";
import SongItem from '../Dashboard/SongItem/index'
import PopoverSongCover from "../../components/PopoverSongCover";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd/'
import { nanoid } from '@reduxjs/toolkit'


const Playlist = () => {
  const userId = useSelector(getAuthUser);
  const [ itemList, updateItemList ] = useState(null);
  

  const { data: playlistsData, isLoading: isPlaylistsLoading, isSuccess: isPlaylistsSuccess, isError: isPlaylistsError, error: playlistsError } = useGetPlaylistsQuery();
  const [ getSinglePlaylist, {
    data: clickedPlaylist, 
    isFetching: isClickedFetching,
    isLoading: isClickedLoading, 
    isSuccess: isClickedSuccess, 
    isError: isClickedError, 
    error: clickedError,
  }]  = useLazyGetSinglePlaylistQuery()

  const handleClick = async (playlistId) => {
    await getSinglePlaylist(playlistId);
    if (isClickedLoading) {
      console.log('playlist loading')
    } else if (isClickedSuccess) {
      updateItemList(clickedPlaylist?.playlist.songs)
    }
  }

  useEffect(() => {
    updateItemList(clickedPlaylist?.playlist.songs)
  }, [clickedPlaylist])


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
      const songsArray = Array.from(clickedPlaylist.playlist.songs);
      const [ reorderedItem ] = songsArray.splice(result.source.index, 1);
      songsArray.splice(result.destination.index, 0, reorderedItem)
      updateItemList(songsArray)
    }
  }
  
  let playlistsContent;
  if (isPlaylistsLoading) {
    playlistsContent = 
        <div>Playlists are being loaded...</div>
  } else if (isPlaylistsSuccess) {

    playlistsContent = 
      <>
      {playlistsData?.playlists?.map(playlist =>
        <PlaylistCoverSm key={playlist._id} onClick={() => handleClick(playlist._id)}>
          <PlaylistTitle >{playlist.title}</PlaylistTitle>
          <PlaylistInfo>{playlist.songs.length}</PlaylistInfo>         
        </PlaylistCoverSm>
      )}
      </>
  }

  let songsContent;
  if (isClickedLoading || isClickedFetching) {
    songsContent = <div>No playlist selected</div>
  } else if (isClickedSuccess) {
    
    // todo: update new order in back
    
    songsContent =       
      itemList?.map(({ imageUrl, genre, title, artist, likedBy, _id}, index) =>    
        <Draggable key={_id} draggableId={_id} index={index}>
          {(provided, snapshot) => {
            return (
              <PlaylistSong 
                {...provided.draggableProps} 
                ref={provided.innerRef}
                {...provided.dragHandleProps} 
                style={{...draggableStyles, backgroundColor: snapshot.isDragging && '#456C86', ...provided.draggableProps.style}} 
                >
                <CoverSongTitle className="index__song--playlist">{index+1}</CoverSongTitle>
                <CoverSong className="cover__song--playlist" src={imageUrl} />
                <CoverSongTitle className="title__song--playlist playlist__info--row">{title}</CoverSongTitle>
                <CoverSongTitle className="artist__song--playlist playlist__info--row">{artist}</CoverSongTitle>
                <CoverSongTitle className="genre__song--playlist playlist__info--row">{genre.title}</CoverSongTitle>
              </PlaylistSong>
            )
          }}
        </Draggable>
        )
  }
  
  return (
    <>  
      <PlaylistContainer>
        <Scrollbars universal>
          <PlaylistColumn className="playlist__covers">
            {playlistsContent}
          </PlaylistColumn>
        </Scrollbars>
        <Scrollbars>
          {/* separation columns */}
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