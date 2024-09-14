/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tier",
        destination: "/#free-tier",
        permanent: true
      }
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  async rewrites() {
    return [
      {
        source: "/blog/",
        destination: "https://demogpt.com/"
      },
      {
        source: "/blog/:path*",
        destination: "https://demogpt.com/:path*"
      }
    ];
  }
};

export default nextConfig;
