import path              from 'path'
import webpack           from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
  js  : path.join(__dirname, 'js'),
  lib : path.join(__dirname, 'js/lib'),
  build : path.join(__dirname, 'build')
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template : path.resolve('.') + '/index.html',
  filename : 'index.html',
  inject   : 'body'
})

const commonPlugins = [HTMLWebpackPluginConfig]
const base = {
  entry : {
    bundle : `${PATHS.js}/Controller.js`
  },
  output: {
    path       : PATHS.build,
    filename   : '[name].js',
    publicPath : '/'
  },
  module : {
    rules : [
      {
        test    : /\.js$/,
        exclude : [/bundle\.js/],
        use     : 'babel-loader'
      },
      {
        test    : /\.tpl$/,
        use     : 'handlebars-loader'
      },
    ]
  },
  resolve : {
    modules    : [path.resolve('.'), 'node_modules'],
    extensions : ['.js'],
    alias      : {
      '$js'    : PATHS.js,
      '$lib'   : PATHS.lib
    }
  },
  devtool   : 'inline-source-map',
  devServer : {
    hot                : true,
    inline             : true,
    compress           : true,
    historyApiFallback : true,
    contentBase        : PATHS.build,
    clientLogLevel     : 'info',
    overlay : {
      errors  :true
    }
  },
  plugins: commonPlugins.concat([new webpack.HotModuleReplacementPlugin()]),
  target : 'web'
}

export default base
