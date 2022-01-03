const path = require('path')

module.exports = {
  entry: ['./js/signIn.js', './js/configure.js','./js/signOut.js','./js/signUp.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
