import baseApi from "./baseApi";

const authenticationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    // registerActivation: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/auth/activate-account",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),

    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
     
    }),

    // feedback: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/feedback/post-feedback",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),


    //  resendOtp: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/auth/verify-email",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),

    // getProfile: builder.query({
    //   query: () => {
    //     return {
    //       url: "/user/user-detail",
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["updateProfile"],
    // }),

    forgotPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/send-otp",
          method: "POST",
          body: email,
        };
      },
    }),

    // verifyEmail: builder.mutation({
    //   query: ({ data }) => {
    //     return {
    //       url: "/auth/verify-email-check-otp",
    //       method: "PATCH",
    //       body: data,
    //     };
    //   },
    // }),

    verifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data,
        };
      },
    }),

    // updateProfile: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/user/update-profile",
    //       method: "PATCH",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["updateProfile"],
    // }),
    // changePassword: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/auth/change-password",
    //       method: "PATCH",
    //       body: data,
    //     };
    //   },
    // }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useForgotPasswordMutation, useResetPasswordMutation, useVerifyOtpMutation } = authenticationApi;
