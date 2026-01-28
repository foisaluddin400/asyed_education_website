import baseApi from "./baseApi";


const legalApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPrivacyPolicy: builder.query({
            query: () => ({
                url: '/privacy-policy',
                method: 'GET'
            }),
            providesTags: ['legal']
        }),

        getTermsAndConditions: builder.query({
            query: () => ({
                url: '/terms-and-conditions',
                method: 'GET'
            }),
            providesTags: ['legal']
        }),

        getAllFaq: builder.query({
            query: () => {
                return {
                    url: "/faq",
                    method: "GET",
                };
            },
            providesTags: ["legal"],
        }),


    }),
});


export const
    {
        useGetPrivacyPolicyQuery,
        useGetTermsAndConditionsQuery,
        useGetAllFaqQuery
    } = legalApi;