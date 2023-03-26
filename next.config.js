const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  webpack: (config) => {
    config.experiments = {
      asyncWebAssembly: true,
    }
    return config
  },
})

