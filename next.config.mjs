/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/ai", destination: "/technology#philosophy", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/services", destination: "/execution", permanent: true },
      { source: "/newsletters", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
