/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tier",
        destination: "/#tier",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
