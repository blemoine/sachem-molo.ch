const path = require('path');

module.exports = {
    entry: { app: './src/app.ts' },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.common.js' //Temporary, must precompile templates
        }
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
};