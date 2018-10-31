var go = require('./index');
var utils = require('./util');
utils.isH5=false;
go('./2.sketch',()=>{
    console.log('success');
})