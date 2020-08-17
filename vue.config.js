module.exports = {
  // publicPath: './',
  outputDir: 'vue_dist',
  devServer: {
    proxy: {
      '/foo': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite:{
          '^/foo': ''
        }
      },
    }
  }
}