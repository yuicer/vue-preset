const PUBLIC_PATH = ''

// config env variable
process.env.VUE_APP_PREFIX_PATH = ''
process.env.VUE_APP_DOMAIN = ''

const vueConfig = {}

if (process.env.NODE_ENV === 'production') {
  Object.assign(vueConfig, {
    baseUrl: PUBLIC_PATH,
    outputDir: 'public',
    pages: {
      index: {
        entry: 'src/main.js',
        template: 'index.html',
        filename: 'html/index.html'
      }
    },
    productionSourceMap: false
  })
} else if (process.env.NODE_ENV === 'development') {
  Object.assign(vueConfig, {
    pages: {
      index: {
        entry: 'src/main.js',
        template: 'index.html'
      }
    }
  })
}

module.exports = vueConfig
