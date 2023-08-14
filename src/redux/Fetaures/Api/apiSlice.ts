import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://bookory-server-gamma.vercel.app/api/v1",
  }),
  tagTypes: ["books", "book", "token", "whitelist"],
  endpoints: () => ({}),
});
