/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "production" ? "/personal-finance-app" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/personal-finance-app/" : "",
};

export default nextConfig;
