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
    devtool: 'source-map',
    entry: {
        webpackhmr: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?'
        ],
        app: path.join(__dirname, '/web/app/client/app.js'),
        vendor: ['jquery', 'angular', 'angular-ui-router', 'oclazyloads', 'bootstrapJS']
    },
    output: {
        path: path.join(__dirname, '/web/app/dist/'),
        filename: '[name].js',
        publicPath: "",
        chunkFilename: '[name]-[id]-[hash]-[chunkhash].js'
            /*
            [named] is replaced by the name of the chunk set at require.ensure

            [id] is replaced by the id of the chunk.

            [hash] is replaced by the hash of the compilation.

            [chunkhash] is replaced by the hash of the chunk.

            */
    },
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"],
        alias: {
            jquery: __dirname + "/node_modules/jquery/dist/jquery.js",
            bootstrapJS: __dirname + "/node_modules/bootstrap/dist/js/bootstrap.js",
            bootstrapCSS: __dirname + "/node_modules/bootstrap/dist/css/bootstrap.css",
            oclazyloads: __dirname + "/node_modules/oclazyload/dist/ocLazyLoad.js",
        }
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
          /*test: /[\/\\]bootstrap[\/\\]\.css$/,*/
            test: /\.css$/,
            loader: /*"style!css"*/ extractBootStrapCss.extract('style-loader', 'css-loader')

        }, {
            test: /\.scss$/,
            loader: /*"style!css!sass"*/ extractAppCss.extract('style-loader', ['css-loader', 'sass-loader'])
        }, {
            test: /\.(png)$/,
            loaders: ['file-loader?name=/img/png/[name].[ext]']
        }, {
            test: /\.(svg|woff|woff2|ttf|eot)$/,
            loaders: ['file-loader?name=/img/[name].[ext]']
        }, {
            test: /\.(jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'web/app/client/index.html',
            inject: 'body',
            hash: true,
            filename: 'index.html',
            chunksSortMode:'none'
        }),

        extractBootStrapCss,
        extractAppCss,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.NoErrorsPlugin(),
		    /*avoid using DedupePlugin in dev */
        /*new webpack.optimize.DedupePlugin(),*/
        new CopyWebpackPlugin([{
            from: 'web/app/client/error.html'
        }, {
            from: 'web/app/client/img/favicon.ico',
            to: './img/favicon.ico'
        }, {
            from: 'web/app/client/hometemplate.html',
            to: 'hometemplate.html'
        }, {
            from: 'web/app/client/module2',
            to: './module2'
        }, {
            from: 'web/app/client/core',
            to: './core'
        }, {
            from: 'web/app/client/foo',
            to: './foo'
        }, {
            from: 'web/app/client/bar',
            to: './bar'
        }]),
        //Manual vendor separation
        //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        /*  new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              minChunks: function(module, count) {
                console.log(module.resource);
                  return module.resource && module.resource.indexOf(path.resolve(__dirname, 'web')) === -1;
              }
          }),*/
        new webpack.optimize.CommonsChunkPlugin({
            // The order of this array matters
            names: ["common", "vendor"],
            minChunks: 2
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery":"jquery"
        })
    ]
};
