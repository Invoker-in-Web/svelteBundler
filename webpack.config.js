const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte', ".ts", ".tsx", ".json"],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|ts)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              hotReload: true,
              preprocess: require('svelte-preprocess')({
                transformers: {
                  postcss: true,
                },
                typescript: {
                  tsconfigFile: './tsconfig.json',
                  transpileOnly: true,
                }
              })
            }
          },
          'babel-loader'
        ]
      },
      {
        test: /\.(css|sass|scss|pcss)$/,
        use: [
          prod ? MiniCssExtractPlugin.loader :
            "style-loader",  // Creates `style` nodes from JS strings
          {
            loader: 'css-loader', // Translates CSS into CommonJS
            options: {
              exportOnlyLocals: false,
            }
          },
          {
            loader: 'postcss-loader',
            // options: { config: { path: './src/postcss.config.js' } }
          },
          "sass-loader" // Compiles Sass to CSS
        ]
      },
      {
        test: /\.html?/,
        use: [{
          loader: "svelte-loader",
          options: {
            hydratable: true
          },
        }],
      },
      {
        test: /\.(js|ts)$/,
        use: [{
          loader: 'ts-loader',
        }],
      },
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: prod ? false : 'source-map',
};
