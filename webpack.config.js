const path              = require('path')
const sveltePreprocess  = require('svelte-preprocess')

const mode  = process.env.NODE_ENV
const dev   = mode === 'development'

module.exports = {
  entry: './src/index.ts',
  output: {
    filename  : 'program.js',
    path      : path.resolve(__dirname, 'public')
  },
  mode,
  devServer: {
    port: 1100,
    contentBase: './public'
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess({sourceMap: dev})
          },
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ]
  }
}
