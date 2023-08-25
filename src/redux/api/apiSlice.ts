import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // https://baitul-hikmah-books-server.vercel.app/
    baseUrl: "http://localhost:1002/",
  }),
  tagTypes: ["Books", "Book", "Reviews", "Wishlist", "Booklist"],
  endpoints: () => ({}),
});
