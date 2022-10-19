import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSongId: 0,
    currentSongIndex: 0,
    songList : [],
    repeat: false,
    shuffle: false,
    playing: false,
    songDuration: 0,
    currentSongTime: 0,
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
    playPreviousSong: {
      reducer(state, action) {
        let previous;
        if (state.currentSongIndex === 0 ) {
          previous = { currentSongIndex: state.songList.length - 1, currentSongId: state.songList[state.songList.length - 1]._id }
        } else {
          previous = { currentSongIndex: state.currentSongIndex - 1, currentSongId: state.songList[state.currentSongIndex - 1]._id }
        }
        return { ...state, ...previous };
      }
    },
    playNextSong: {
      reducer(state, action) {
        let next;
        if (state.currentSongIndex === state.songList.length - 1) {
          next = { currentSongIndex: 0, currentSongId: state.songList[0]._id }
        } else {
          next = { currentSongIndex: state.currentSongIndex + 1, currentSongId: state.songList[state.currentSongIndex + 1]._id }
        }
        return { ...state, ...next };
      }
    },
    playRandomSong: {
      reducer(state, action) {
        const randomSongIndex = Math.floor(Math.random() * state.songList.length);
        const randomSong = { currentSongIndex: randomSongIndex, currentSongId: state.songList[randomSongIndex]._id }
        return { ...state, ...randomSong }
      }
    },
    toggleShuffle: {
      reducer(state, action) {          
        return { ...state, shuffle: !state.shuffle, repeat: false };
      }
    },
    toggleRepeat: {
      reducer(state, action) {
        return { ...state, repeat: !state.repeat, shuffle: false };
      }
    },
    togglePlaying: {
      reducer(state, action) {
        return { ...state, playing: !state.playing };
      }
    },
    handleEndOfSong: {
      reducer(state, action) {
        if (state.random) {
          playRandomSong();
        } 
        if (state.repeat) {
          playNextSong();
          return;
        }
        if (state.currentSongIndex === state.songList.length - 1) {   // if last song, don't play anything else
          return;
        } else {          // if error, play next song
          playNextSong();
        }
        
      }
    },
    setSongDuration: {
      reducer(state, action) {
        return { ...state, songDuration: action. payload }
      }
    },
    setCurrentSongTime: {
      reducer(state, action) {
        return { ...state, currentSongTime: action. payload }
      }
    }
  }
})


export const getSongState = (state) => state.songs
export const getCurrentSong = (state) => state.songs.currentSongId;
export const getCurrentSongIndex = (state) => state.songs.currentSongIndex;
export const getSongList = (state) => state.songs.songList;
export const getVolume = (state) => state.songs.volume;
export const getSongDuration = (state) => state.songs.songDuration;
export const getCurrentSongTime = (state) => state.songs.currentSongTime 
export const getSongPlaying = (state) => state.songs.playing

export const { 
  setSongsList, 
  setCurrentSong, 
  playPreviousSong, 
  playNextSong, 
  toggleShuffle, 
  toggleRepeat, 
  togglePlaying,
  handleEndOfSong,
  setVolume,
  setSongDuration,
  setCurrentSongTime
} = songsSlice.actions



export default songsSlice.reducer
