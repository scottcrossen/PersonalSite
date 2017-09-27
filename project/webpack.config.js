// Using current version of javascript so 'webpack' macros work.

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=false&timeout=2000&path=/hot',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'source/app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],
    extensions: ['.json', '.jsx', '.js'],
    alias: {
      app: path.resolve(__dirname, 'source/app'),
      styles: path.resolve(__dirname, 'source/styles'),
      assets: path.resolve(__dirname, 'source/assets')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'source'),
        use: 'babel-loader'
      },
      {
        test: /(\.scss|\.css)$/,
        use: ['css-hot-loader'].concat(
          ExtractTextWebpackPlugin.extract({fallback: 'style-loader', use: [
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  'postcss-import',
                ]
              }
            }
          ]})
        )
      },
      {
        exclude: path.resolve(__dirname, 'source', 'assets'),
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /assets[^.]*\.(jpe?g|png|gif|svg)$/i,
        use:
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'source/'
            }
          }
      },
      {
        test: /assets[^.]*\.(json|html)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'source/'
            }
          },
          {
            loader: 'text-replace-file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'source/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'true'
    }),
    new FlowStatusWebpackPlugin({
      restartFlow: true
    })
  ]
}
