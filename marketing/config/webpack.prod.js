const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON = require('../package.json')

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name]:[contenthash].js',
        publicPath: '/marketing/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig)