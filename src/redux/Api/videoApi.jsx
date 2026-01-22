import baseApi from "./baseApi";



const videoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllVideos: builder.query({
      query: () => {
        return {
          url: `/video`,
          method: "GET",
        };
      },
      providesTags: ['Videos'],
    }),



  
  }),
});

export const { 
    useGetAllVideosQuery
} = videoApi;
