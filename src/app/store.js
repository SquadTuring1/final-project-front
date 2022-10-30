import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import songsReducer from '../features/songs/songsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from '../features/api/apiSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  blacklist: ['songs', 'api'],
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  // users: usersReducer,
  songs: songsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware,
    ),
});

// enable refetchOnFocus / refetchOnReConnect
// setupListeners(store.dispatch)
