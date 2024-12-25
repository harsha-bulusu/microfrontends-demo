const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')
const { merge } = require('webpack-merge')

const domain = process.env.DOMAIN_NAME

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig)