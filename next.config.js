/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "cdn.weatherapi.com",
    ],
  },
};

module.exports = nextConfig;
