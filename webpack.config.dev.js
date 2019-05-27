import path from 'path';

export default {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}