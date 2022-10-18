import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 
}

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongsList: {
            reducer(state, action){
                return {...state, ...action.payload}
            }
        }
    }
})

export const { setSongsList } = songsSlice.actions

export const getSongs = (state) => state.songs

export default songsSlice.reducer
