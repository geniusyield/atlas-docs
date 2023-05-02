const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

// https://github.com/vercel/next.js/issues/29362#issuecomment-971377869
module.exports = withNextra({
  images: {
    unoptimized: true,
  },
})

