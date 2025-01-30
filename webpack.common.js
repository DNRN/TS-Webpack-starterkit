/* Configure HTMLWebpack plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    chunks: ['index']
});


/* Configure Copy */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin({
    patterns: [
        { from: "src/assets", to: "dest" },
      ],
});

/* Configure ProgressBar */
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ProgressBarPluginConfig = new ProgressBarPlugin();

/* configure client environment vars */
const webpack = require('webpack');

/* Export configuration */
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    resolve: { extensions: ['.web.ts', '.web.js', '.ts', '.js'] },
    plugins: [
        HTMLWebpackPluginConfig,
        CopyWebpackPluginConfig,
        ProgressBarPluginConfig,
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ],
};