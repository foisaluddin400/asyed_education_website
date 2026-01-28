/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.20.22",
        port: "4000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "theseedsoflearning.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.theseedsoflearning.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
























// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',
//         port: '',
//         pathname: '**',
//       },
//     ],
//   },
// };

// export default nextConfig;
