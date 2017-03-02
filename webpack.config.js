const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PROD = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },

            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)/,
                loader: "url-loader?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            }
                        },
                    }
                ]
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },

            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"' + process.env.NODE_ENV + '"',
            }
        }),
        new HtmlWebpackPlugin({
            title: "Moloch's blog",
            template: './index.html'
        })
    ].concat(PROD ? [
            new UglifyJSPlugin({
                comments: false,
            }),
        ] : [])
};