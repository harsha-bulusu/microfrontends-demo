const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common')
const domain = process.env.DOMAIN_NAME
const packageJSON = require('../package.json')
const { merge } = require('webpack-merge')

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins:[
        new ModuleFederationPlugin({
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig)