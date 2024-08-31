import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../api/baseApi';

const authApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<{token:string; user:object}, {email:string; password:string}>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<{token:string; user:object}, {email:string; password:string}>({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    //TODO - ENDPOINTS
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export default authApi;
