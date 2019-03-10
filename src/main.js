import $ from 'jquery'
import './css/index.css'
//要处理css文件，需要安装 npm i style-loader css-loader -D
//在webpack.config.js配置中新增module节点，他是一个对象，在这个module对象上，
//有个rules数组属性，数组中存放所有第三方文件的匹配和处理规则
$(function(){
    $('li:odd').css('backgroundColor','cyan')
    $('li:even').css('backgroundColor','green')
})