/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  //2024-11-12 추가 start
  basePath: '/simple_board_frontend', // GitHub Pages에서 사용할 경로
  images: {
    unoptimized: true, // 이미지 최적화 비활성화 (정적 사이트에서 필요)
  },
  //2024-11-12 추가 end
};

module.exports = nextConfig;
