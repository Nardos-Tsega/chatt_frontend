import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: null | object;
  token: null | string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials : (state, action: PayloadAction<{user:object; token:string}>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setCredentials, clearCredentials} = authSlice.actions;
export default authSlice.reducer;
