/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Link',
            value: '<public/images/favicon.ico>; rel="icon"',
          },
        ],
      },
    ];
  },
};

export default nextConfig; 