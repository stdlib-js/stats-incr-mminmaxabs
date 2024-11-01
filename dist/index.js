"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(w,u){
var c=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,g=require('@stdlib/assert-is-array-like-object/dist'),l=require('@stdlib/stats-incr-mminmax/dist'),f=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function p(r,e){var a,t,i;if(arguments.length===1)t=[0,0],i=r;else{if(!g(r))throw new TypeError(n('1Ij9a',r));t=r,i=e}if(!c(i))throw new TypeError(n('1Ij9b',i));return a=l(t,i),m;function m(v){return arguments.length===0?a():a(f(v))}}u.exports=p
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
