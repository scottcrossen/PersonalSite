const atImport = require('postcss-import')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'node_modules/react-grid-layout/css/styles.css'),
    path.resolve(__dirname, 'source/app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: 'https://s3.amazonaws.com/scott-dev-bucket/'
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.json', '.jsx', '.js'],
    alias: {
      app: path.resolve(__dirname, 'source/app'),
      styles: path.resolve(__dirname, 'source/styles')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'source'),
        loader: 'babel'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextWebpackPlugin.extract(
          "style",
          "css!sass!postcss"
        )
      },
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      },
    ],
    postcss: [
      atImport({
        path: ['node_modules', './source',]
      })
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('app.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'true'
    })
  ]
}
