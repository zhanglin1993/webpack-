 var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
 module.exports = {
   entry: path.resolve(__dirname, './src/js/index.js'),
   output: {
     path: path.resolve(__dirname, './dist'),
     filename: 'js/bundle-[hash].js'
 },
   plugins:[
     new htmlWebpackPlugin({
       template:'./index.html',
       filename:'./index.html'
     }),
     new cleanWebpackPlugin(
       ['dist'],
       {
          root:__dirname,
         verbose:true,
         dry:false
     })
   ],
   module:{
     rules:[{
       test:/\.css$/,
       use:[
         {loader:'style-loader'},
         {loader:'css-loader',options:{importLoaders:1}},
         {loader:'postcss-loader'}
       ],
       exclude:/node_modules/
       },
       {
         test:/\.scss$/,
         use:[
           {loader:'style-loader'},
           {loader:'css-loader',options:{importLoaders:1}},
           {loader:'postcss-loader'},
           {loader:'sass-loader'}
         ]
       }
 ]

   }
 }
