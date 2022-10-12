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
            email: user.email,
            password: user.password,
            uid: user.uid,
            token: user.token,
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