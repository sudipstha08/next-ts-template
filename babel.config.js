module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@public': './public',
          '@components': './src/components',
          '@services': './src/services',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@store': './src/store',
          '@src': './src',
        },
        cwd: 'babelrc',
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    ],
  ],
}
