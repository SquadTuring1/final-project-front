import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {    
    userSignedIn: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(user) {
        return {
          payload: {
            id: user.id,
            email: user.email,
            avatar: user.avatar,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            loggedIn: true,
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