const { resolve } = require('path')

module.exports = (options, ctx) => ({
  name: '@vuepress-ikangxu/vuepress-plugin-mouse-effects',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'MouseEffects'
})