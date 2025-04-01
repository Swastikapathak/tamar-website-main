/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dl2j4ebmj/**",  
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", 
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com", 
      },
      {
        protocol: "https",
        hostname: "unsplash.com",  
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // ✅ Add this line
      },
    ],
  },
};

export default nextConfig;
