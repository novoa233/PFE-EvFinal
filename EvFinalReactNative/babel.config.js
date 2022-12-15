module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
        'babel-plugin-root-import',
        {
            paths: [
                {
                    rootPathSuffix: './src/screens',
                    rootPathPrefix: 'src',
                },
                {
                    rootPathSuffix: './src/navigation',
                    rootPathPrefix: 'navigation',
                },
            ]
        },
    ],
],
};


