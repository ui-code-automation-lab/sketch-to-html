var go = require('./index');
var utils = require('./util');
utils.isH5=true;
utils.isReact = false;
go('./demo.sketch',()=>{
    console.log('success');
})