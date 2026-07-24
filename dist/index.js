"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=o(function(w,u){
var c=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,g=require('@stdlib/assert-is-array-like-object/dist'),l=require('@stdlib/stats-incr-mminmax/dist'),f=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e,r){var i,t,a;if(arguments.length===1)t=[0,0],a=e;else{if(!g(e))throw new TypeError(n('1Ij9a',e));t=e,a=r}if(!c(a))throw new TypeError(n('1Ij9b',a));return i=l(t,a),m;function m(v){return arguments.length===0?i():i(f(v))}}u.exports=p
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
