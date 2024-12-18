const { getDefaultConfig } = require('expo/metro-config');
module.exports = {
    ...getDefaultConfig(__dirname),
    transformer: {
        ...getDefaultConfig(__dirname).transformer,
        sourceMaps: true,
        experimentalImportSupport: false,
        inlineRequires: true,
    },
    resolver: {
        ...getDefaultConfig(__dirname).resolver,
        sourceMaps: true,
        minifierConfig: {
            mangle: false,
            keep_fnames: true,
        },
    },
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
    presets: ['babel-preset-expo'],

};
