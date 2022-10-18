import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSongId: 0,
    currentSongIndex: 0,
    songList : [],
    repeat: false,
    shuffle: false,
    playing: false,
}

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
      setSongsList: {
        reducer(state, action){
          return {...state, songList: action.payload}
        }
      },
      setCurrentSong: {
          reducer(state, action) {
              return {
                  ...state, 
                  currentSongId: action.payload._id, 
                  currentSongIndex: action.payload.songIndex,
                  playing: true
              }
          }
      },
      toggleShuffle: {
          reducer(state, action) {
              return {...state, ...action.payload};
          }
      },
      toggleRepeat: {
        reducer(state, action) {
          return {...state, ...action.payload};
        }
      },
      togglePlaying: {
        reducer(state, action) {
          return {...state, ...action.payload};
        }
      },
      playPreviousSong: {
        reducer(state, action) {
          let previous;
          if (state.songs.currentSongIndex === 0) {
            previous = { currentSongIndex: state.songs.songList.length - 1, _id: state.songs.songList[state.songs.songList.length - 1] }
          } else {
            previous = { songIndex: state.songs.currentSongIndex - 1, _id: state.songs.songList[state.songs.currentSongIndex - 1]._id }
          }
          return { ...state, ...previous };

        }
      }
  }
})


export const getSongState = (state) => state.songs
export const getCurrentSong = (state) => state.songs.currentSongId;
export const getCurrentSongIndex = (state) => state.songs.currentSongIndex;
export const getSongList = (state) => state.songs.songList;

export const { setSongsList, setCurrentSong, toggleShuffle, toggleRepeat, togglePlaying, playPreviousSong } = songsSlice.actions



export default songsSlice.reducer
