const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('public'),
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
  },
  devServer: {
    // contentBase: Tell the server where to serve content from.
    // This is only necessary if you want to serve static files.
    // The public/ is where index.html resides.
    contentBase: path.join(__dirname, 'public/'),
    port: 8003,
    compress: true
  }
}
