/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**.co",
        pathname: "**",
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;
