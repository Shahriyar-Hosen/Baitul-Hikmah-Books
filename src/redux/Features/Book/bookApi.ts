import { SerializedError } from "@reduxjs/toolkit";
import { IBook } from "../../../types";
import { IBookErrorResponse, IBookResponse } from "../../../types/Book";
import { IReview } from "../../../types/Common";
import { api } from "../Api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    addBook: builder.mutation<
      IBookResponse | IBookErrorResponse | SerializedError,
      { data: IBook }
    >({
      query: ({ data }: { data: IBook }) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books", "book"],
    }),
    singleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["book"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }: { id: string; data: IBook }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books", "book"],
    }),
    addReview: builder.mutation({
      query: ({ id, data }: { id: string; data: IReview }) => ({
        url: `/review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useSingleBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
} = productApi;
