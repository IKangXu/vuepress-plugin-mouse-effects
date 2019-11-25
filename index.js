const { resolve } = require('path')

module.exports = (options, ctx) => ({
  define () {
    const { data } = options
    const { pages, themeConfig, siteConfig } = ctx
    return {
      IKX_CUSTOM_STYLE: "sdfsfwowo我是一个测试",
      PAGES_DATA: "sdfsfwowo我是一个测试"
    }
  },
  name: '@vuepress-ikangxu/vuepress-plugin-mouse-effects',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'MouseEffects'
})