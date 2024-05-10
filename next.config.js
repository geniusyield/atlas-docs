const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
      // https://github.com/vercel/next.js/issues/29362#issuecomment-971377869
      unoptimized: true,
    }
  };

module.exports = withNextra(nextConfig)

