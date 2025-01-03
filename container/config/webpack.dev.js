const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        })
    ]

}

module.exports = merge(commonConfig, devConfig)