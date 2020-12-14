/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-12-10 11:02:58
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-12-14 09:39:42
 */
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (() => {
  let option = {
    publicPath: '/',
    outputDir: './docker/dist',
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,
    configureWebpack: {
      plugins: [
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$/,
          threshold: 10240,
          minRatio: 0.8
        })
      ]
    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "~@/assets/style/global.scss";`
        }
      }
    },
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8888,
      https: false,
      hotOnly: false,
      proxy: {}
    }
  }
  option.devServer.proxy[`${process.env.LOCATION}`] = {
    target: process.env.TARGET,
    changeOrigin: true
  }
  return option
})()
