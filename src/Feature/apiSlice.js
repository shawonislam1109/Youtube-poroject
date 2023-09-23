import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/playlistItems?key=",
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
