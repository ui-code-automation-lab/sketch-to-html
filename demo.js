var go = require('./index');
var utils = require('./util');
utils.isH5=false;
go('./demo.sketch',()=>{
    console.log('success');
})