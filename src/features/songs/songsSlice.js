import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentSongId: 0,
    currentSongIndex: 0,
    currentSongUrl: '',
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
        return {...state, ...action.payload}
      }
    },
    setCurrentSong: {
        reducer(state, action) {
            return {
                ...state, 
                currentSongId: action.payload._id, 
                currentSongUrl: action.payload.fileUrl,
                currentSongIndex: action.payload.currentSongIndex,
                // playing: true
            }
        }
    },
    playPreviousSong: {
      reducer(state, action) {
        let previous;
        let oldIndex;
        let newIndex;
        if (state.currentSongIndex === 0 ) { 
          newIndex = state.songList.length - 1;
          previous = { currentSongIndex: newIndex, currentSongId: state.songList[newIndex]._id, currentSongUrl: state.songList[newIndex].fileUrl  }
        } else {
          newIndex = state.currentSongIndex - 1;
          previous = { currentSongIndex: newIndex, currentSongId: state.songList[newIndex]._id, currentSongUrl: state.songList[newIndex].fileUrl }      // if it's NOT the first song
        }
        return { ...state, ...previous };
      }
    },
    playNextSong: {
      reducer(state, action) {
        let next;
        let oldIndex = state.currentSongIndex
        let newIndex;
        if (oldIndex === state.songList.length - 1) {
          newIndex = 0;
          next = { currentSongIndex: newIndex, currentSongId: state.songList[newIndex]._id, currentSongUrl: state.songList[newIndex].fileUrl }
        } else {
          newIndex = state.currentSongIndex + 1;
          next = { currentSongIndex: newIndex, currentSongId: state.songList[newIndex]._id, currentSongUrl: state.songList[newIndex].fileUrl }
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
    
    setSongDuration: {
      reducer(state, action) {
        return { ...state, songDuration: action.payload }
      }
    },
    setCurrentSongTime: {
      reducer(state, action) {
        return { ...state, currentSongTime: action.payload }
      }
    }
  }
})


export const getSongState = (state) => state.songs
export const getCurrentSong = (state) => state.songs.songList[state.songs.currentSongIndex];
export const getCurrentSongId = (state) => state.songs.currentSongId;

export const getCurrentSongIndex = (state) => state.songs.currentSongIndex;
export const getCurrentSongUrl = (state) => state.songs.currentSongUrl;
export const getSongList = (state) => state.songs.songList;
export const getSongDuration = (state) => state.songs.songDuration;
export const getCurrentSongTime = (state) => state.songs.currentSongTime;
export const getPlaying = (state) => state.songs.playing;
export const getShuffle = (state) => state.songs.shuffle;
export const getRepeat = (state) => state.songs.repeat;

export const {
  setSongsList,
  setCurrentSong,
  playPreviousSong,
  playNextSong,
  toggleShuffle,
  playRandomSong,
  toggleRepeat,
  togglePlaying,  
  setSongDuration,
  setCurrentSongTime
} = songsSlice.actions



export default songsSlice.reducer
