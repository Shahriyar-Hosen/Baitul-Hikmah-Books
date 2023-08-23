import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baitul-hikmah-books-server.vercel.app/",
  }),
  tagTypes: ["Books", "Book", "Reviews", "Wishlist", "Booklist"],
  endpoints: () => ({}),
});
