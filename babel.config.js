module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@schemas': './src/schemas',
          '@models': './src/models',
        },
      },
    ],
  ],
};
