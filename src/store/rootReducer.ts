import { combineSlices } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import authApi from '../features/auth/authApi';

export const rootReducer = combineSlices({
  auth : authSlice,
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
