const copy = require('rollup-plugin-copied')

module.exports = {
  babel: {
    configFile: true
  },
  plugins: [
    'vue',

    copy([
      {
        from: './src/style/fonts',
        to: './dist/fonts',
        emitFiles: true
      }
    ])
  ],

  postcss: {
    extract: true,
    minify: true,
    extensions: ['.css', '.scss']
  },

  format: ['cjs-min', 'umd-min', 'es-min'],
  filename: 'index[suffix].js'
}
