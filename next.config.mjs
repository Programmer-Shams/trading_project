/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"]  // <-- and this
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
