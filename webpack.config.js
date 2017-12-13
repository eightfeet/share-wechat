module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'index.js',
    path: __dirname
  },
  module: {
    rules: [
      { 
        test: /\.js$/,    
        exclude: /node_modules/,    
        loader: 'babel-loader'   
      }
    ]
  }
};