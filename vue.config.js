const path = require('path');

const resolve = dir => path.join(__dirname, dir);
const dev = process.env.NODE_ENV === 'development';
module.exports = {
  configureWebpack: {
    output: {
      filename: `[name].${process.env.npm_package_version}.js`,
      chunkFilename: `[name].${process.env.npm_package_version}.js`,
    },
  },
  baseUrl: dev ? '' : `/${process.env.npm_package_version}`,
  outputDir: `./dist/${process.env.npm_package_version}`,
  assetsDir: './static',
  filenameHashing: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('src/config'));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  lintOnSave: 'error',
  devServer: {
    open: true,
    port: 8083,
    hotOnly: true,
    proxy: {
      '/index': {
        target: 'http://192.168.200.246:8987/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    sourceMap: true,
  },
};
