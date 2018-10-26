const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractSASS = new ExtractTextPlugin('stylesheets/[name]-[hash].css'); // 把css文件单独出来而不是用style标签放在head里

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/js/index.jsx'), // 指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    // vendors: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 输出的路径
    filename: '[name].js' // 打包后文件
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        // use: [{
        //   loader: 'css-loader', // translates CSS into CommonJS
        // }, {
        //   loader: 'sass-loader', // Compile to css
        //   options: {
        //     sourceMap: true,
        //   },
        // }],
        // fallback: {
        //   loader: 'style-loader', // creates style nodes from JS strings
        // }
        use: extractSASS.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          limit: '10000',
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          limit: '10000',
          mimetype: 'application/svg+xml'
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        query: {
          limit: 8192
        }
      },
    ]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      images: 'assets/images',
      api: 'js/api',
      components: 'js/components',
      config: 'js/config',
      lang: 'js/lang',
      layouts: 'js/layouts',
      pages: 'js/pages',
      utils: 'js/utils',
      ducks: 'js/ducks',
      data: 'js/data'
    },
    extensions: ['.js', '.jsx', '.css', '.scss', '.json', '.html', '.ico']
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.template.html'),
      inject: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/data', to: 'data' },
      { from: 'src/assets', to: 'assets' },
    ]),
    extractSASS,
  ],
  // externals: { // Global libs doesn't need to bundle in every bundle
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // }
  optimization: {
    // now the node_modules js is an extra file, which will not change if we didn't change the dependency,
    // then user don't need to reload these resources after we push new codes every time.
    // https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching
    // https://webpack.js.org/guides/code-splitting/#prevent-duplication
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all', // Bundle libs to vendor file instead of main output file
    },
    // minimizer: [new UglifyJsPlugin()], // Tree shaking using UglifyJsPlugin by default
  }
};
