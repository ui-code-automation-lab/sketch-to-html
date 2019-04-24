var go = require('./index');
var utils = require('./util');
utils.isH5=true;
go('./demo2.sketch',()=>{
    console.log('success');
})