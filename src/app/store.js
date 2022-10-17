import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import songsReducer from '../features/songs/songsSlice';
import { apiSlice } from '../features/api/apiSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    // users: usersReducer,
    songs: songsReducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});