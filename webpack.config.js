const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'lab1/assets/'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          }),
        },
        {
          test: /\.svg$/,
          use: ['svg-loader']
        },
        { 
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "url-loader?limit=10000&minetype=application/font-woff" 
        },
        { 
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "file-loader"
        },
        {
          test: /\.scss$/, //Sass
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
      ]
    },
    optimization: { //Разделение
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new ExtractTextPlugin('style.css')
     ]
  }