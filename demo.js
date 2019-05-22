var go = require('./index');
var utils = require('./util');
utils.isH5=true;
utils.isReact = false;
utils.minWidthforPC = 1200;
go('./demo.sketch',()=>{
    console.log('success');
})
//2html_Animation