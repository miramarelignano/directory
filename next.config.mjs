/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Applico basePath SOLO in produzione
  basePath: isProd ? '/test' : '',
  // trailingSlash serve all’export statico
  trailingSlash: true,
  // abilita l’export statico se usi App Router
  output: 'export',
  images: {
    loader: 'default',
    // path dinamico in base all’ambiente
    path: `${isProd ? '/test' : ''}/_next/image`,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
