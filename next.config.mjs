/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Default Vercel domain → canonical custom domain (exact host match,
      // so preview deployment URLs are unaffected).
      {
        source: "/:path*",
        has: [{ type: "host", value: "gpsl-technology.vercel.app" }],
        destination: "https://gpsl-ubo.com/:path*",
        permanent: true,
      },
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
