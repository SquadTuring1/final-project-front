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
      prepare(email) {
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
        return initialState;
      }
    },
  },
})



export const getAuthState = (state) => state.auth;

export const { userSignedIn, userSignedOut } = authSlice.actions;

export default authSlice.reducer;