module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.module
        .rule("/\\.(jpg|JPG|png|gif|svg|pdf)$/")
        .test(/\.pdf$/)
        .use("file-loader")
        .loader("file-loader")
        .options({
          name: '[name].[ext]'
        })
  }
}
