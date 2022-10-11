import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_JSON_SERVER }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users']
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: {
          email: user.id,     
          username: user.username,
          password: user.password,
        },
      }),
      invalidatesTags: ['Users']
    })
  })
})


export const { 
  useGetUsersQuery,
  useAddUserMutation,
} = apiSlice;