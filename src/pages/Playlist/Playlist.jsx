import { useSelector } from "react-redux";
import { PlaylistColumn, PlaylistContainer, PlaylistTitle, PlaylistInfo, PlaylistCoverSm, PlaylistSong, PlaylistColumnSongs } from "../../ui/index"
import { useState } from 'react'
import { getAuthUser } from "../../features/auth/authSlice";
import { useGetPlaylistsQuery, useGetSinglePlaylistQuery } from "../../features/api/apiSlice";
import Scrollbars from "react-custom-scrollbars-2";
import SongItem from "../Dashboard/SongItem";


const Playlist = () => {
  const userId = useSelector(getAuthUser);
  const songList = useSelector(getSongList)
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
    dispatch(setSongsList({songList: clickedPlaylist, currentSongIndex: 0, currentSongId: clickedPlaylist[0]?._id, currentSongUrl: List[0]?.fileUrl, playing: false}));
    console.log(songList)
    songsContent = 
      clickedPlaylist.playlist.songs.map((song, index) => 
      
      // <SongItem key={_id} /> </SongItem>
        <PlaylistSong key={song._id}>
          <div>{index+1}.  </div>
          <div key={song._id}>{song.title}</div>
        </PlaylistSong>
        )
  }

  return (
    <>  
    <Scrollbars universal>
      <PlaylistContainer>
        <Scrollbars universal>
          <PlaylistColumn>
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