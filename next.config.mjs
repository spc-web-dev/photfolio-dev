/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.pravatar.cc",
                protocol:'https',
            }
        ]
    }
};

export default nextConfig;
