import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice';
import { apiSlice } from '../features/api/apiSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});