/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    BASE_URL: "http://ec2-52-87-173-128.compute-1.amazonaws.com:8080",
  },
};

module.exports = nextConfig;
