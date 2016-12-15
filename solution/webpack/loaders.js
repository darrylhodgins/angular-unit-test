module.exports = [
  {
    test: /\.ts$/,
    loader: 'awesome-typescript-loader', 
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loaders: ['to-string-loader', 'css-loader'], 
    exclude: /node_modules/
  },
  {
    test: /\.html$/,
    loader: 'raw-loader',
    exclude: /node_modules/
  }
];
