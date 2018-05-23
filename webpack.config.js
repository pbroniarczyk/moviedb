const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "_build")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "./src/images/",
                    publicPath: "_build/images/"
                }
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        require('autoprefixer'),
        new CleanWebpackPlugin(["./_build"]),
        new MiniCssExtractPlugin({
            filename: "styles.[chunkhash].css"
        }),
        new OptimizeCSSAssetsPlugin({}),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './public/index.html'
        })
    ]
};