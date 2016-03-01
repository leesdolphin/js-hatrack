const path = require('path')

// const PATHS = {
//   app: path.join(__dirname, 'app'),
//   build: path.join(__dirname, 'build')
// };
// module.exports = {
//   entry: PATHS.app,
//   output: {
//     path: PATHS.build,
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new HtmlwebpackPlugin({
//       title: 'My app'
//     })
//   ]
// };
// node_modules/oauthio-web/dist/oauth.min.js

const config = {
  entry: {
    'index': [path.resolve(__dirname, 'src/index.jsx')],
    'hatrack': [path.resolve(__dirname, 'src/lib/hatrack.js')]
  },
  output: {
    path: __dirname,
    filename: 'build/[name].js',
    libraryTarget: 'umd',
    library: '[name]',
    umdNamedDefine: true
  },
  externals: [
    {
      'oauth-web': 'umd oauth-web',
      'jquery': 'umd oauth-web',
      'radium': 'umd radium',
      'react': 'umd react',
      'react-dom': 'umd react-dom'
    }
  ],
  devtool: 'source-map',
  devServer: {
    hot: false,
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: 'errors-only',
    port: process.env.PORT,
    host: process.env.HOST
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}
module.exports = config
