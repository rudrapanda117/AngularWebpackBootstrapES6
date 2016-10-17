var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var extractAppCss = new ExtractTextPlugin('appStyle.css', {
    allChunks: false
});
var extractBootStrapCss = new ExtractTextPlugin('vendorStyle.css', {
    allChunks: false
});

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: path.join(__dirname, '/web/app/client/app.js')
    },
    output: {
        path: path.join(__dirname, '/web/app/dist/'),
        filename: '[name].js',
        publicPath: ""
    },
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loaders: ['ng-annotate', 'babel-loader?presets[]=es2015&presets[]=stage-0']
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /[\/\\]bootstrap[\/\\]*\.css$/,
            loader: /*"style!css"*/ extractBootStrapCss.extract('style-loader', 'css-loader')

        }, {
            test: /\.scss$/,
            loader: /*"style!css!sass"*/ extractAppCss.extract('style-loader', 'css-loader', 'sass-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loaders: ['file-loader?name=/img/[name].[ext]']
        }]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'web/app/client/index.html',
            inject: 'body',
            hash: true,
            filename: 'index.html'
        }),
        extractAppCss,
        extractBootStrapCss,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),

        /*  new webpack.NoErrorsPlugin(),
          new webpack.optimize.DedupePlugin(),*/
        new CopyWebpackPlugin([{
            from: 'web/app/client/error.html'
        }, {
            from: 'web/app/client/img/favicon.ico',
            to: './img/favicon.ico'
        },
        {
            from: 'web/app/client/hometemplate.html',
            to: 'hometemplate.html'
        },
        {
            from: 'web/app/client/module2',
            to: './module2'
        }]),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'web')) === -1;
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
