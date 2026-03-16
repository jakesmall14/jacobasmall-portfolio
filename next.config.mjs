/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the /me.png portrait to load without next/image optimization
  // (since it's a local file placed directly in /public)
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
