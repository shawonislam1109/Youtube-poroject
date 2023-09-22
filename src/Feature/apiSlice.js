import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),

  endpoints: (builder) => ({
    getYouData: builder.query({
      query: () => ({
        url: "/",
        method: " GET",
      }),
    }),
  }),
});

export const { useGetYouDataQuery } = apiSlice;
export default apiSlice;
