import { IWhitelist, IWhitelistResponse } from "../../../types/Common";
import { api } from "../Api/apiSlice";

const whitelistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWhiteList: builder.query<IWhitelistResponse, undefined>({
      query: () => "/whitelist",
      providesTags: ["whitelist"],
    }),
    addWhiteList: builder.mutation({
      query: ({ data }: { data: IWhitelist }) => ({
        url: "/whitelist/add-whitelist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["whitelist"],
    }),
  }),
});

export const { useGetWhiteListQuery, useAddWhiteListMutation } = whitelistApi;
