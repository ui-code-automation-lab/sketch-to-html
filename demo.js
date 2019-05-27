var go = require('./index');
var utils = require('./util');
utils.isH5=false;
utils.isReact = true;
utils.minWidthforPC = 1200;
go('./首页.sketch',()=>{
    console.log('success');
})
//2html_Animation