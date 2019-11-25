const { resolve } = require('path')

module.exports = (options, ctx) => ({
  define () {
    const { style, type } = options
    const { pages, themeConfig, siteConfig } = ctx
    return {
      define_border_radius: style.borderRadius,
      define_z_index: style.zIndex,
      define_colors: style.colors,
      define_r_min: style.r.min,
      define_r_max: style.r.max,
      define_dx_min: style.dx.min,
      define_dx_max: style.dx.max,
      define_dy_min: style.dy.min,
      define_dy_max: style.dy.max,
      define_type: type
    }
  },
  name: '@vuepress-ikangxu/vuepress-plugin-mouse-effects',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'MouseEffects'
})