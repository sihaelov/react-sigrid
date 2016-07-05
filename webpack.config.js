var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
  context: __dirname,
  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/',
    library: 'react-sigrid',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  plugins: [
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {

    preLoaders: [
      { test: /\.js?$/, loaders: ['eslint'], include: /src/ }
    ],

    loaders: [     

      { test: /\.js?$/, loader: 'babel', include: /src/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-2', 'react']
        }
      },

      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },

    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.scss']
  }

}