const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(
  common,
  {
    module: {
      rules: [
        {
          test: /\.scss/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    require('autoprefixer')
                  ]
                }
              },
              'sass-loader'
            ]
          })
        },
        {
          test: /\.css/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  }
)
