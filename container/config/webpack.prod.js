const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');
const { merge } = require('webpack-merge');
const domain = process.env.DOMAIN_NAME;

console.log(domain);

// Ensure there are no trailing slashes in the domain variable
const sanitizedDomain = domain.replace(/\/$/, ''); 

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                marketing: `marketing@${sanitizedDomain}/marketing/latest/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, productionConfig);
