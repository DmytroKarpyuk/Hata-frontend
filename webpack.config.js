/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    // Building mode
    mode: 'development',
    // Entry point of the application
    entry: '../Hata-frontend/Photos/PhotosMain.ts',
    // Target application
    output: {
        path: path.resolve(__dirname, './Photos/dist'),
        filename: 'PhotoAlbums.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true
    }
};