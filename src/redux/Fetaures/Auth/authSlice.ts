import { IProfileResponse } from "../../../types/Auth";
import { IUser } from "../../../types/Common";
import { api } from "../Api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ data }: { data: IUser }) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: ({ data }: { data: Partial<IUser> }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["token"],
    }),
    getProfile: builder.query<IProfileResponse, string>({
      query: (token: string) => ({
        url: "/users/my-profile",
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["token"],
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useGetProfileQuery } =
  authApi;
