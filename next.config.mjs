/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/technology#shipped", permanent: true },
      { source: "/portfolio", destination: "/technology#shipped", permanent: true },
      { source: "/portfolio/tech", destination: "/technology#shipped", permanent: true },
      { source: "/team", destination: "/execution#team", permanent: true },
      { source: "/ai", destination: "/technology", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/services", destination: "/execution", permanent: true },
      { source: "/newsletters", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
