/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip API routes during static export
  exportPathMap: async (defaultPathMap) => {
    const pathMap = {}
    for (const path in defaultPathMap) {
      // Exclude all API routes from static export
      if (!path.startsWith("/api/")) {
        pathMap[path] = defaultPathMap[path]
      }
    }
    return pathMap
  },
}

module.exports = nextConfig
