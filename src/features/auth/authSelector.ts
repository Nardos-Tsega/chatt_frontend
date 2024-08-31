import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/rootReducer';

const selectAuth = (state:RootState) => state.auth;

export const selectAuthState = createSelector(
  [selectAuth],
  (auth) => ({
    user : auth.user,
    isAuthenticated : auth.isAuthenticated,
    token : auth.token,
  })
);
