import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token  
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }  
      return headers
    }, }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/api/users',
      providesTags: ['Users']
    }),

    getSingleUser: builder.query({
      query: (uid) => `api/users/${uid}`,
      method: 'GET',
    }),

    addUser: builder.mutation({
      query: (user) => ({
        url: '/api/users',
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