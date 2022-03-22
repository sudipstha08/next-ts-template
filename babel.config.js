module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
          '@public': './public',
          '@components': './src/components',
          '@services': './src/services',
          '@utils': './src/utils',
        },
        cwd: 'babelrc',
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    ],
  ],
}
