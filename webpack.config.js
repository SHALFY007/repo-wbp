const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = {
    entry: resolve(__dirname, 'index.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false
                            }
                        }
                    }
                ]
            },

            {
                test: /\.mp3$/i,
                use: [

                    'file-loader'

                ]
            },
            {
                test: /\.mp4$/i,
                use: [

                    'file-loader'

                ]
            }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        port: 3000
    }
}