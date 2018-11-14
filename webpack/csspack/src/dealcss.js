module.exports= function(css){
    if(window.innerWidth<968){
        return css.replace('red','blue')
    }else{
        return css.replace('red','green')
    }
}