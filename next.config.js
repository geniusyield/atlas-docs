const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    assetPrefix: isProd ? 'atlas-docs' : '',
    images: {
      unoptimized: true,
    },
  })
   
  module.exports = withNextra()
