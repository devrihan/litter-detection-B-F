/** @type {import('next').NextConfig} */
export const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['thrash-bin.s3.eu-north-1.amazonaws.com'],
    },
};

export default nextConfig;
