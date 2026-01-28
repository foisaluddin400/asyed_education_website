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
    getAllTestimonials: builder.query({
      query: () => {
        return {
          url: `/testimonials`,
          method: "GET",
        };
      },
      providesTags: ['Blogs'],
    }),
    getSingleBlog: builder.query({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "GET",
        };
      },
      providesTags: ['Blogs'],
    }),
    
  getContact: builder.query({
      query: () => {
        return {
          url: `/contact/business-info`,
          method: "GET",
        };
      },
      providesTags: ["Blogs"],
    }),
  }),
});

export const { 
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useGetContactQuery,
  useGetAllTestimonialsQuery
} = blogApi;
