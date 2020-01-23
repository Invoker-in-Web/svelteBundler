module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })
  ]
}