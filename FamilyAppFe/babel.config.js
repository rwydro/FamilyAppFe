module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: false,
                    helpers: true,
                    regenerator: true,
                    useESModules: true,
                },
            ],
        ],
    };
};
