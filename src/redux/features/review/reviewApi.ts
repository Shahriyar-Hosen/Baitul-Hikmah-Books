import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReviews: builder.query({
      query: (id: string) => `review/${id}`,
      providesTags: ["Reviews"],
    }),
    updateReview: builder.mutation({
      query: ({ id, email, review }) => ({
        url: `/review/${id}/user/${email}`,
        method: "PATCH",
        body: { review },
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReview: builder.mutation({
      query: ({ id, email }) => ({
        url: `/review/${id}/user/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
