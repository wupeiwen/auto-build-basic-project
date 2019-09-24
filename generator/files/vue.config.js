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
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8888,
      https: false,
      hotOnly: false,
      proxy: {},
      before: app => {}
    }
  }
  option.devServer.proxy[`${process.env.LOCATION}`] = {
    target: process.env.TARGET,
    changeOrigin: true
  }
  return option
})()
