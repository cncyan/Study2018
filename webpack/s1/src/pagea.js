require.include('./mudolea')

var page='subpagea'
if(page==='subpagea'){
    //魔法注释指定chunkname  /*webpackChunkName:'subpagea'*/
    import(/*webpackChunkName:'subpagea'*/'./subpagea').then((subpagea)=>{
        console.log(subpagea)
    })
}else if(page==='subpageb'){
    import(/*webpackChunkName:'subpageb'*/'./subpageb').then((subpageb)=>{
        console.log(subpageb)
    })
}

require.ensure(['lodash'],()=>{
    var _=require('lodash')
    _.join(['1','2'],'3')
},'vendor')

export default 'pagea'
