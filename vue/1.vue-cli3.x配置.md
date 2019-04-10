### @vue/cli 3.x配置
@vue/cli 3.x b版本对webpack配置进行了隐藏，如果我们想查看其配置执行`npm run inspect`命令即可。但是如果我们需要修改或者增加自己的一些配置，需要在`vue.config.js`中进行配置。常用的配置如下：
```
let path = require('path');
module.exports = {
  outputDir: 'myDist', // 输出目录，默认是dist
  assetsDir: 'assets', // 放置生成静态资源的的目录， 默认没有
  pubilcPath: process.env.NODE_ENV === 'production' ? '/my-app' : '/', // 部署应用包时的基本url，默认是'/'
  productionSourceMap: false, // 设置为false表示生产环境下不使用source map，可以加速构建
  chainWebpack: config => { // 允许对webpack的内部配置进行更改
    config.resolve.alias.set('@', './src'); // 配置别名
  },
  configureWebpack: { // 可以是一个对象或者一个函数，如果是对象会通过webpack-merge合并到最终的配置中
    plugins: [] // 新增插件
  },
  devServer: { // 所有 webpack-dev-server 的选项都支持,可以配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  pluginOptions: { // 用来传递任何第三方插件选项
    'style-resources-loader': { // 比如全局注册
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixins.styl')
      ]
    }
  }
}
```