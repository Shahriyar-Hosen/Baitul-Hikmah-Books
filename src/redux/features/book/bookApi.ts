import { IFilterOptions } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({
        page = 1,
        limit = 10,
        sortBy = "createdAt",
        sortOrder = -1,
        searchTerm = "",
        genre,
        publicationDate,
      }: IFilterOptions) =>
        `books?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&searchTerm=${searchTerm}${
          genre ? `&genre=${genre}` : ""
        }${publicationDate ? `&publicationDate=${publicationDate}` : ""}`,
      providesTags: ["Books"],
    }),

    getBook: builder.query({
      query: (id: string) => `book/${id}`,
      providesTags: ["Book"],
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    updateBook: builder.mutation({
      query: ({ data, id }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "Book"],
    }),

    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookQuery,
  usePostBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
