/**
 * @author arielmzg@163.com
 * @date  2018-2-19
 * @webpack 配置文件
 */
var webpack=require('webpack');
var path=require('path');

module.exports={
    entry:{
        'view/main/index':path.join(__dirname,'client/static/js/view/main/index.js')
    },
    output:{
        path:path.join(__dirname,'client/static/output/js/'),
        filename:'[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json'],
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]        
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]

};