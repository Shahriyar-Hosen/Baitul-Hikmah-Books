import { api } from "../../api/apiSlice";

const booklistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToBooklist: builder.mutation({
      query: (data) => ({
        url: "/readinglist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booklist"],
    }),
    getBooklists: builder.query({
      query: (email: string) => `readinglist/${email}`,
      providesTags: ["Booklist"],
    }),
    updateBooklists: builder.mutation({
      query: ({ email, bookId }) => ({
        url: `/readinglist/${email}/book/${bookId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Booklist"],
    }),
  }),
});

export const {
  useAddToBooklistMutation,
  useGetBooklistsQuery,
  useUpdateBooklistsMutation,
} = booklistApi;
