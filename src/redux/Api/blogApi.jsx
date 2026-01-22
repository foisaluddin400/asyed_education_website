import baseApi from "./baseApi";


const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: `/blog`,
          method: "GET",
        };
      },
      providesTags: ['Blogs'],
    }),
  
  }),
});

export const { 
  useGetAllBlogsQuery
} = blogApi;
