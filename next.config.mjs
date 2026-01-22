/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.20.22",
        port: "4000",
        pathname: "/api/v1/public/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
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
