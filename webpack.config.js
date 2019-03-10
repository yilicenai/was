const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,'./src/main'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板页面
            filename:'index.html'
        })
    ],
    module:{//这个节点配置所有 第三方模块 加载器
        rules:[//所有第三方模块的 匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//匹配css处理
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},//匹配图片处理
        ]
    }
}