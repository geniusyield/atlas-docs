// const withNextra = require('nextra')({
//     theme: 'nextra-theme-docs',
//     themeConfig: './theme.config.jsx',
//   })
   
//   module.exports = withNextra()
   
//   // If you have other Next.js configurations, you can pass them as the parameter:
//   // module.exports = withNextra({ /* other next.js config */ })

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'atlas-docs' : '',
  images: {
    unoptimized: true,
  },
}