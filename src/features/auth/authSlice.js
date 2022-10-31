import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSignedIn: {
      reducer(state, action) {
        return { ...state, ...action.payload };
        // return action.payload;
      },
      prepare(user) {
        return {
          payload: {
            uid: user.uid,
            token: user.token,
            email: user.email,
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            avatar: user.avatar,
            followedBy: user.followedBy,
            following: user.following,
            likedPlaylists: user.likedPlaylists,
            likedSongs: user.likedSongs,
            ownPlaylists: user.ownPlaylists,
          },
        };
      },
    },
    userSignedOut: {
      reducer(state, action) {
        return initialState;
      },
    },
  },
});

export const getAuthUser = (state) => state.auth;
export const getUserId = (state) => state.auth._id;

export const { userSignedIn, userSignedOut } = authSlice.actions;

export default authSlice.reducer;
