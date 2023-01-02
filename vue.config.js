const { defineConfig } = require('@vue/cli-service');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_button.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '/api/': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  outputDir: '../express-books/public',
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
  productionSourceMap: false,
})