module.exports = {

  presets: [
    [
      // doc: https://babeljs.io/docs/en/babel-preset-env
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: 'ie 11'
      },
    ],
  ],
};
