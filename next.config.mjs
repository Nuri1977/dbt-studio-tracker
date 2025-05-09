/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['prisma']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This helps avoid file system related issues in edge environments
      config.externals = [...config.externals, '@prisma/client']
    }
    return config
  }
};

export default nextConfig;
