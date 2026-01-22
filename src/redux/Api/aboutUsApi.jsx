import baseApi from "./baseApi";



const aboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAboutUs: builder.query({
            query: () => ({
                url: '/about-us',
                method: 'GET'
            }),
            providesTags: ['aboutUs'],
        }),

   
    

  }),
});


export const 
 { 
    useGetAboutUsQuery,
    
  } = aboutUsApi;