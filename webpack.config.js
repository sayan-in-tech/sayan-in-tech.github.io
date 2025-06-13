const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production', // Set the mode to 'development' or 'production'
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};