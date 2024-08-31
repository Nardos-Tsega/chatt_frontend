import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '../store/rootReducer';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api',
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;
    if(token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    // Set Content-Type header to JSON
    headers.set('Content-Type', 'application/json');
    // Set Accept header to JSON to specify the expected response format
    headers.set('Accept', 'application/json');
    return headers;
  },
});

