import { createSlice } from "@reduxjs/toolkit";

const initialState = {};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {    
    userSignedIn: {
      reducer(state, action) {
        return {...state, ...action.payload};
        // return action.payload;
      },
      prepare(user) {
        return {
          payload: {
            uid: user.uid,
            token: user.token,
            email: user.email,
            followedBy: user.followedBy,
            following: user.following,
            likedPlaylists: user.likedPlaylists,
            likedSongs: user.likedSongs,
            ownPlaylists: user.ownPlaylists,
            _id: user._id,
          }
        }
      }
    },
    userSignedOut: {
      reducer(state, action) {
        return initialState;
      }
    },
  },
})



export const getAuthUser = (state) => state.auth;

export const { userSignedIn, userSignedOut } = authSlice.actions;

export default authSlice.reducer;