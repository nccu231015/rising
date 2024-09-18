import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()(BuilderDevTools()(BuilderDevTools()({
    images: {
      domains: ['cdn.builder.io'],
    },
  })))
);

export default nextConfig;
