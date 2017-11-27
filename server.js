const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
const express = require('express')
const path = require('path')

const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/www')))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}))

app.listen(port, () => {
  console.log('Local app running on http://localhost:' + port)
})
