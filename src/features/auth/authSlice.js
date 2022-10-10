import { createSlice } from "@reduxjs/toolkit";

const initialState = {loggedIn: false};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {    
    userSignedIn: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(email, username) {
        return {
          payload: {
            email: email,
            loggedIn: true,
          }
        }
      }
    },
    userSignedOut: {
      reducer(state, action) {
        state = initialState;
      }
    },
  },
})



export const getAuthUser = (state) => state.auth;

export const { userSignedIn, userSignedOut } = authSlice.actions;

export default authSlice.reducer;