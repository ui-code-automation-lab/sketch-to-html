var go = require('./index');
var utils = require('./util');
utils.isH5=true;
utils.isReact = true;
go('./demo3.sketch',()=>{
    console.log('success');
})