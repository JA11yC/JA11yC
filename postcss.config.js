module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')({ grid: true }),
    require('css-mqpacker')({ sort: true }),
    require('csswring')()
  ]
}
