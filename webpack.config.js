const path = require('path');

const config = {
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
    }
};

/**
 * Export pow & co to global
 */
const globalConfig = Object.assign({}, config, {
    output: {
        filename: 'ts-examples.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'global',
        globalObject: 'this',
    },
    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 9000,
    }
});


const commonJsConfig = Object.assign({}, config, {
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/cjs'),
        libraryTarget: "commonjs"
    }
});


module.exports = [globalConfig,commonJsConfig];

