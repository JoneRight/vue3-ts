/* eslint-disable no-dupe-keys */
const path = require('path')
// 动态主题
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'), //antd包位置
  styleDir: path.join(__dirname, './src/common/styles/theme.less'), //主题文件所在的文件夹
  varFile: path.join(__dirname, './src/common/styles/variables.less'), //自定义默认的主题色
  mainLessFile: path.join(__dirname, './src/styles/theme/index.less'), // 项目中其余自定义的样式（若是不须要动态修改其余样式，该文件能够为空）
  outputFilePath: path.join(__dirname, './public/color.less'), //提取的less文件输出到什么地方
  themeVariables: ['@primary-color'], //要改变的主题变量
  indexFileName: './public/index.html', // index.html所在位置
  generateOnce: false, // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
}
const themePlugin = new AntDesignThemePlugin(options)
module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 存放less变量文件的路径
        path.resolve(__dirname, './src/assets/less/parameter.less'),
      ],
    },
  },
  lintOnSave: true, // 设置是否在开发环境下每次保存代码时都启用 eslint验证
  runtimeCompiler: true, // 是否使用带有浏览器内编译器的完整构建版本
  configureWebpack: {
    // 别名配置
    resolve: {
      alias: {
        src: '@', // 默认已配置
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        api: '@/api',
        views: '@/views',
        plugins: '@/plugins',
        utils: '@/utils',
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 不是很推荐
          //在此处设置，也可以设置直角、边框色、字体大小等
          //   'primary-color': '#7546C9', // 全局主色
          //   'link-color': '#7546C9', // 链接色
          //   'success-color': '#10ef2a', // 成功色
          //   'warning-color': '#fadb14', // 警告色
          //   'error-color': '#f407b1', // 错误色
          //   'font-size-base': '14px', // 主字号
          //   'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
          //   'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
          //   'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
          //   'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
          //   'border-radius-base': '4px', // 组件/浮层圆角
          //   'border-color-base': '#d9d9d9', // 边框色
          //   'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [themePlugin],
}
