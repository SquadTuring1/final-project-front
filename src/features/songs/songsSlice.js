import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSong: 0,
    songsList : [],
    repeat: false,
    random: false,
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
                return {...state, currentSong: action.payload, playing: true}
            }
        },
        setRandom: {
            reducer(state, action) {
                return {...state, random: action.payload}
            }
        },
        toggleRepeat: {
            reducer(state, action) {
                return {...state, repeat: action.payload}
            }
        },
        togglePlaying: {
            reducer(state, action) {
                return {...state, playing: action.payload}
            }
        }
    }
})


export const getSongs = (state) => state.songs
export const getCurrentSong = (state) => state.songs.currentSong;

export const { setSongsList, setCurrentSong, setRandom, toggleRepeat, togglePlaying } = songsSlice.actions



export default songsSlice.reducer
