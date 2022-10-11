import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useId } from 'react';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_JSON_SERVER }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users']
    }),

    getSingleUser: builder.query({
      query: email => `/users/${email}`
    }),

    addUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['Users']
    })
  })
})


export const { 
  useGetUsersQuery,
  useGetSingleUserQuery,
  useAddUserMutation,
} = apiSlice;