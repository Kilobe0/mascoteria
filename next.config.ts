// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione esta configuração de imagens
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Você pode opcionalmente especificar a porta e o caminho, mas isso não é necessário aqui
        // port: '', 
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;