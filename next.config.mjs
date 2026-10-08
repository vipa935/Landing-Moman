/** @type {import('next').NextConfig} */
const nextConfig = {
  // This landing page is fully static, so Cloudflare Pages can serve the
  // generated files directly from `out/` without a Next.js server runtime.
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
