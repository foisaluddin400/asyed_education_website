// src/Redux/baseApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://api.kidsknowrights.com";  
export const baseUrl = "http://10.10.20.22:4000/api/v1";
export const fileBaseurl = "http://10.10.20.22:4000"
// Helper function to get the token
const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    // Client-side logic
    return localStorage.getItem("accessToken");
  }
};
//24.144.126.228
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", ` ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["profile", "event", "videos", "aboutUs", "Blogs", "Videos", "legal"],
  endpoints: () => ({}),
});

export const fetchServerData = async (endpoint) => {
  const token = getToken();

  const baseQuery = fetchBaseQuery({ baseUrl });

  const result = await baseQuery(
    {
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      signal: new AbortController().signal,
      dispatch: () => { },
      getState: () => ({}),
      endpoint: "",
      abort: () => { },
      type: "query",
      extra: undefined,
    },
    {}
  );

  if (result.error) {
    throw new Error(result.error.data?.toString() || "Failed to fetch data");
  }

  return result.data;
};

export default baseApi;
