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
  tagTypes: ['User', 'Songs'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/api/users',
      providesTags: ['User']
    }),

    getSingleUser: builder.query({
      query: (uid) => `api/users/${uid}`,
      method: 'GET',
      
    }),

    signUpUser: builder.mutation({        // TODO: can this be merged with addUser in front and back?
      query: (user) => ({
        url: '/signup',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['User']
    }),

<<<<<<< HEAD
    // addUser: builder.mutation({
    //   query: (user) => ({
    //     url: '/api/users',
    //     method: 'POST',
    //     body: user
    //   }),
    //   invalidatesTags: ['Users']
    // }),
    
// Songs

    getSongs: builder.query({
      query: () => '/songs',
      transformResponse: res => Object.entries(res)[0][1],
      providesTags: ['Songs']
    }),


=======
    addUser: builder.mutation({
      query: (user) => ({
        url: '/api/users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: (userObj) => ({
        url: `/api/users/${userObj.uid}`,
        method: 'PATCH',
        body: {
          firstName: userObj.firstName,
          lastName: userObj.lastName,
        }
      }),
      invalidatesTags: ['Users']
    })
>>>>>>> develop
  })
})


export const { 
  useGetUsersQuery,
  useGetSingleUserQuery,  
  useAddUserMutation,
  useUpdateUserMutation,
  useSignUpUserMutation,
  useGetSongsQuery
} = apiSlice;