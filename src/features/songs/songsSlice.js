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
                currentSongIndex: action.payload.songIndex,
                playing: true
            }
        }
    },
    playPreviousSong: {
      reducer(state, action) {
        let previous;
        let index;
        if (state.currentSongIndex === 0 ) { 
          index = state.songList.length - 1;
          previous = { currentSongIndex: index, currentSongId: state.songList[index]._id, currentSongUrl: state.songList[index].fileUrl  }
        } else {
          index = state.currentSongIndex - 1;
          previous = { currentSongIndex: index, currentSongId: state.songList[index]._id, currentSongUrl: state.songList[index].fileUrl }      // if it's NOT the first song
        }
        return { ...state, ...previous };
      }
    },
    playNextSong: {
      reducer(state, action) {
        let next;
        let index;
        if (state.currentSongIndex === state.songList.length - 1) {
          index = 0;
          next = { currentSongIndex: index, currentSongId: state.songList[index]._id, currentSongUrl: state.songList[index].fileUrl }
        } else {
          index = state.currentSongIndex + 1;
          next = { currentSongIndex:index, currentSongId: state.songList[index]._id, currentSongUrl: state.songList[index].fileUrl }
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
        if (state.shuffle) {
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
export const getCurrentSongId = (state) => state.songs.currentSongId;
export const getCurrentSongIndex = (state) => state.songs.currentSongIndex;
export const getCurrentSongUrl = (state) => state.songs.currentSongUrl;
export const getSongList = (state) => state.songs.songList;
export const getSongDuration = (state) => state.songs.songDuration;
export const getCurrentSongTime = (state) => state.songs.currentSongTime;
export const getPlaying = (state) => state.songs.playing;

export const {
  setSongsList,
  setCurrentSong,
  playPreviousSong,
  playNextSong,
  toggleShuffle,
  toggleRepeat,
  togglePlaying,
  handleEndOfSong,  
  setSongDuration,
  setCurrentSongTime
} = songsSlice.actions



export default songsSlice.reducer
