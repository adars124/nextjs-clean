/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add a rule to handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader', // Ensure you have node-loader installed
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**', // Allow all paths from this hostname
      },
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
