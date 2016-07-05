var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
  context: __dirname,
  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/',
  },

  plugins: [
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin("style.css", {allChunks: true}),
  ],

  module: {

    preLoaders: [
      { test: /\.js?$/, loaders: ['eslint'], include: /src/ }
    ],

    loaders: [     

      { test: /\.js?$/, loader: 'babel', include: /src/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },

      { test: /\.scss$/, loader: ExtractTextPlugin.extract("sass", "css-loader!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css", "css-loader") }

    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.scss', 'css']
  }

}