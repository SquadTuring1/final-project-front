import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 
}

const songSlice = createSlice({
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

export const { setSongsList } = songSlice.actions

export const getSongs = (state) => state.songs

export default songSlice.reducer
