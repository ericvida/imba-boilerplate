// Config File build with help from 
// https://scotch.io/tutorials/setting-up-webpack-for-any-project

const HtmlWebpackPlugin = require('html-webpack-plugin') // Require  html-webpack-plugin plugin
const DashboardPlugin = require('webpack-dashboard/plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// require('dotenv').config()

module.exports = {
  entry: __dirname + "/src/app/index.imba", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [ 
      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      }),
      // new ExtractTextPlugin("styles.css"),
      // new HtmlWebpackPlugin.DefinePlugin({
      //   API_KEY: JSON.stringify(process.env.API_KEY)
      // }),
      new DashboardPlugin()
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',  //source of static assets
      port: 1234, // port to run dev-server
  },
  module: {
    rules: [
        {
          test: /\.imba$/,
          use: 'imba-loader'
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }
    ]
  }
};
