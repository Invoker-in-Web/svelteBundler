const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
// const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: [".mjs", ".ts", ".tsx", ".js", ".json", ".svelte"],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      // { не транспилирует даже в отдельном правиле
      //   test: /\.(svelte)$/,
      //   use: {
      //     loader: 'babel-loader',
      //   }
      // },
      {
        test: /\.(mjs|ts|js)$/,
        include: [/svelte/], // не помогает
        use: ['babel-loader'],
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              hotReload: true,
              hydratable: true, //позволяет динамически менять html
              preprocess: require('svelte-preprocess')({
                transformers: {
                  // postcss: true,
                  postcss: {
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
                },
                typescript: {
                  tsconfigFile: './tsconfig.json',
                  compilerOptions: {
                    outDir: "/public",
                    noImplicitAny: true,
                    module: "es6",
                    target: "es5",
                    jsx: "react",
                    allowJs: true,
                    sourceMap: true,
                  },
                  transpileOnly: true,
                }
              })
            }
          }]
      },
      {
        test: /\.(css|sass|scss|pcss)$/,
        use: [
          "style-loader",  // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // Translates CSS into CommonJS
            options: {
              exportOnlyLocals: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: { config: { path: './src/postcss.config.js' } }
          },
          "sass-loader" // Compiles Sass to CSS
        ]
      },
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: 'inline-source-map'
};
