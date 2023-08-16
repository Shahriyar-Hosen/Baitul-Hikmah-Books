import { userInfoFromLocalstorage } from '@/utils/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'book',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1002/',
    prepareHeaders: (headers) => {
      const user: { accessToken: string; email: string } | null =
        userInfoFromLocalstorage ? userInfoFromLocalstorage : null;

      // Add the authorization header to the existing headers
      if (user) {
        const token = user?.accessToken;
        headers.set('authorization', `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({ searchTerm, genre, publicationYear }) =>
        `/api/v1/book/?${searchTerm && `searchTerm=${searchTerm}&`}${
          genre && `genre=${genre}&`
        }${publicationYear && genre && `&publicationYear=${publicationYear}`}`,
      providesTags: ['Books'],
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/book/${id}`,
      providesTags: ['Books'],
    }),
    getFeaturedBook: builder.query({
      query: () => `/api/v1/book/featuredBook`,
      providesTags: ['Books'],
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `/api/v1/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    updateBookInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/v1/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
    addBookReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/book/add-review/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    getPublishedYears: builder.query({
      query: (genre) =>
        `/api/v1/book/publishedYears${genre && `?genre=${genre}`}`,
      providesTags: ['Books'],
    }),
    getBookWishlist: builder.query({
      query: () => `/api/v1/wishlist`,
      providesTags: ['Books'],
    }),
    addBookWishlist: builder.mutation({
      query: (data) => ({
        url: `/api/v1/wishlist/add-wishlist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    addPlanToReadBook: builder.mutation({
      query: (data) => ({
        url: `/api/v1/plan-to-read/add-planToRead`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    getPlanToReadBooks: builder.query({
      query: () => `/api/v1/plan-to-read`,
      providesTags: ['Books'],
    }),
    addFinishedBook: builder.mutation({
      query: (data) => ({
        url: `/api/v1/finished-book/add-finished-book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    getFinishedBooks: builder.query({
      query: () => `/api/v1/finished-book`,
      providesTags: ['Books'],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useUpdateBookInfoMutation,
  useDeleteBookMutation,
  useGetFeaturedBookQuery,
  useAddBookReviewMutation,
  useGetBookWishlistQuery,
  useAddBookWishlistMutation,
  useAddPlanToReadBookMutation,
  useGetPlanToReadBooksQuery,
  useAddFinishedBookMutation,
  useGetFinishedBooksQuery,
  useGetPublishedYearsQuery,
} = bookApi;
