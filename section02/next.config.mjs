/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // ✅ 빌드할 때 ESLint 에러 무시
  },
};

export default nextConfig;
