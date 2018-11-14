var webpack=require('webpack')
var path=require('path')

module.exports={
    entry:{
        'pagea':"./src/pagea"
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    // plugins:[
    //     new webpack.optimize.SplitChunksPlugin({
    //         cacheGroups:{
    //              pagea:{
    //                  minChunks:2,
    //                  name:'vendor'
    //              },
    //             commons:{
    //                 name:'common',
    //                 minChunks:2
    //             }
    //         }
    //     })
    // ]
}