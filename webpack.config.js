const HtmlWebpackPlugin = require('html-webpack-plugin');      // const reference to webpack's html plugin
const path = require('path');                                  // const convenience reference to the local filepath

module.exports = {

    //                                                  set export mode
    // mode: 'production',
    mode: 'development',

    entry: { //                                         entry: place to begin generating webpage from
        index: './src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            //                                          webpage title here
            // title: 'New Website',
            template: './src/index.html'
        }),
    ],

    // enable inline source mapping, so we can see lines/error info in browser console output
    devtool: 'inline-source-map', // see: https://webpack.js.org/guides/development/#using-source-maps

    // enable webpack dev server so we can locally test 
    // run: npm install webpack-dev-server --save
    // remember to also add check "optimization" at bottom
    // see: https://webpack.js.org/guides/development/#using-webpack-dev-server
    devServer: {
        static: './dist',
        watchFiles: ['src/*.html', 'src/*.js'],
    },

    module: {
        rules: [
            //                                          module rules (with some presets)

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            // Images asset loading
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            // Fonts asset loading
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
};

