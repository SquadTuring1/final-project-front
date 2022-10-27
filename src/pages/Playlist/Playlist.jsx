import { useSelector } from "react-redux";
import { PlaylistColumn, PlaylistContainer, PlaylistTitle, PlaylistInfo, PlaylistCoverSm, PlaylistSong, PlaylistColumnSongs, CoverSong, CoverSongTitle } from "../../ui/index"
import { useState } from 'react'
import { getAuthUser } from "../../features/auth/authSlice";
import { useGetPlaylistsQuery, useGetSinglePlaylistQuery } from "../../features/api/apiSlice";
import Scrollbars from "react-custom-scrollbars-2";
import SongItem from '../Dashboard/SongItem/index'
import PopoverSongCover from "../../components/PopoverSongCover";


const Playlist = () => {
  const userId = useSelector(getAuthUser)
  const [ selectedPlaylistId,  setSelectedPlaylistId ] = useState(null);

  const { data: playlistsData, isLoading: isPlaylistsLoading, isFetching: isPlaylistsFetching, isSuccess: isPlaylistsSuccess, isError: isPlaylistsError, error: playlistsError } = useGetPlaylistsQuery();

  const { data: clickedPlaylist, isLoading: isClickedLoading, isFetching: isClickedFetching, isSuccess: isClickedSuccess, isError: isClickedError, error: clickedError } = useGetSinglePlaylistQuery(selectedPlaylistId && selectedPlaylistId)
  
  
  const handleClick = (playlistId) => {
    setSelectedPlaylistId(current => playlistId)
  }
  
  let playlistsContent;
  if (isPlaylistsFetching || isPlaylistsLoading) {
    playlistsContent = 
        <div>Playlists are being loaded...</div>
  } else if (isPlaylistsSuccess) {
    console.log(playlistsData)
    playlistsContent = 
      <>
      {playlistsData.playlists.map(playlist =>
        <PlaylistCoverSm key={playlist._id} onClick={() => handleClick(playlist._id)}>
          <PlaylistTitle >{playlist.title}</PlaylistTitle>
          <PlaylistInfo>{playlist.songs.length}</PlaylistInfo>         
        </PlaylistCoverSm>
      )}
      </>
  }

  let songsContent;
  if (isClickedLoading) {
    songsContent = <div>No playlist selected</div>
  } else if (isClickedSuccess) {
    console.log(clickedPlaylist)
    // clickedPlaylist.playlists.songs.map(song => console.log(song))
    songsContent = 
      clickedPlaylist.playlist.songs.map(({ imageUrl, genre, title, artist, likedBy, _id}, index) => 
        <PlaylistSong key={_id}>
          <CoverSongTitle className="index__song--playlist">{index+1}</CoverSongTitle>
          <CoverSong className="cover__song--playlist" src={imageUrl} />
          <CoverSongTitle className="title__song--playlist playlist__info--row">{title}</CoverSongTitle>
          <CoverSongTitle className="artist__song--playlist playlist__info--row">{artist}</CoverSongTitle>
          <CoverSongTitle className="genre__song--playlist playlist__info--row">{genre.title}</CoverSongTitle>
        </PlaylistSong>
        )
  }

  return (
    <>  
    <Scrollbars universal>
      <PlaylistContainer>
        <Scrollbars universal>
          <PlaylistColumn className="playlist__covers">
    {/* <h1>My Playlist</h1> */}
            {playlistsContent}
          </PlaylistColumn>
        </Scrollbars>
        <Scrollbars>
          <PlaylistColumnSongs className="playlist__songs">
            {songsContent}
            {/* {playlistsContent} */}
          </PlaylistColumnSongs>
        </Scrollbars>
      </PlaylistContainer>
    </Scrollbars>
    </>
  )
}

export default Playlist