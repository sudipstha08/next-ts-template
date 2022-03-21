module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~/src': './src',
          '~/public': './public',
          '~/components': './src/components',
          '~/services': './src/services',
          '~/utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
