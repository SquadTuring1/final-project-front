import { useSelector } from "react-redux";
import { PlaylistColumn, PlaylistContainer, PlaylistTitle, PlaylistInfo, PlaylistCoverSm, PlaylistSong } from "../../ui/index"
import { useState } from 'react'
import { getAuthUser } from "../../features/auth/authSlice";
import { useGetPlaylistsQuery, useGetSinglePlaylistQuery } from "../../features/api/apiSlice";



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
    songsContent = 
      clickedPlaylist.playlist.songs.map((song, index) => 
        <PlaylistSong >
          <div>{index+1}.  </div>
          <div key={song._id}>{song.title}</div>
        </PlaylistSong>
        )
  }

  return (
    <>  
    
    <PlaylistContainer>
      <PlaylistColumn>
        {playlistsContent}
      </PlaylistColumn>
      <PlaylistColumn className="playlist__songs">
        {songsContent}
      </PlaylistColumn>
    </PlaylistContainer>
    </>
  )
}

export default Playlist