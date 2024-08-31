import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import authApi from '../features/auth/authApi';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
