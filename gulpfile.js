const gulp = require('gulp');
const browser = require('browser-sync').create();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const historyApiFallback = require('connect-history-api-fallback')
const webpackConfig = require('./webpack.config')()
require('dotenv').config();

const bundler = webpack(webpackConfig)

async function server() {

  browser.init({
    watch: true,
    server: {
      baseDir: './',
      // routes: {
      //   "/assets": "./static/assets",
      // },
      middleware: [
        require('serve-static')('public'),
        historyApiFallback(),
        webpackDevMiddleware(bundler, {
          path: webpackConfig.output.path,
          publicPath: webpackConfig.output.publicPath,
        }),
        webpackHotMiddleware(bundler, { log: () => { }, })
      ],
    },
    stream: true,
    watchOptions: {
      ignoreInitial: true
    }
  })
  gulp.watch('src/*').on('change', () => browser.reload())
}

gulp.task(
  'dev',
  gulp.series(server)
);