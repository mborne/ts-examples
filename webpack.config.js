const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /test/
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // library: 'myLib',
        // libraryTarget: 'umd',
        libraryTarget: 'global',
        globalObject: 'this',
    },
    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 9000,
    },
};