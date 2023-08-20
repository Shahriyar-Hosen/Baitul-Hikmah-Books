import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishlist: builder.mutation({
      query: (data) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wishlist"],
    }),
    getWishlists: builder.query({
      query: (email: string) => `wishlist/${email}`,
      providesTags: ["Wishlist"],
    }),
    removeFromWishlists: builder.mutation({
      query: ({ email, bookId }) => ({
        url: `/wishlist/${email}/book/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useGetWishlistsQuery,
  useRemoveFromWishlistsMutation,
} = wishlistApi;
