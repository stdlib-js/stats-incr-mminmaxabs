// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,w,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var k=String.fromCharCode,j=isNaN,S=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,l,s,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,j(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function O(e){var r,t,n;if(!A(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,R=N.__lookupGetter__,W=N.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return L&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",B=M()?function(e){var r,t,n,i,a;if(null==e)return U.call(e);t=e[q],a=q,r=null!=(i=e)&&X.call(i,a);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},D=Number,H=D.prototype.toString,J=M();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return z(e)||K(e)}Z(Q,"isPrimitive",z),Z(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,te=Math.floor;function ne(e){return te(e)===e}function ie(e){return e<ee&&e>re&&ne(e)}function ae(e){return z(e)&&ie(e)}function oe(e){return K(e)&&ie(e.valueOf())}function ce(e){return ae(e)||oe(e)}function ue(e){return ae(e)&&e>0}function le(e){return oe(e)&&e.valueOf()>0}function se(e){return ue(e)||le(e)}function fe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ne(e.length)&&e.length>=0&&e.length<=4294967295}function pe(e){return 0===e&&1/e===ee}function ge(e){return 0===e&&1/e===re}function de(e){return e!=e}Z(ce,"isPrimitive",ae),Z(ce,"isObject",oe),Z(se,"isPrimitive",ue),Z(se,"isObject",le);var he="function"==typeof Float64Array,be="function"==typeof Float64Array?Float64Array:null,ye="function"==typeof Float64Array?Float64Array:void 0,we=function(){var e,r,t;if("function"!=typeof be)return!1;try{r=new be([1,3.14,-3.14,NaN]),t=r,e=(he&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ye:function(){throw new Error("not implemented")};function me(e,r){var t,n,i,a,o,c,u;if(1===arguments.length)t=[0,0],o=e;else{if(!fe(e))throw new TypeError(O("invalid argument. Output argument must be an array-like object. Value: `%s`.",e));t=e,o=r}if(!ue(o))throw new TypeError(O("invalid argument. Window size must be a positive integer. Value: `%s`.",o));return n=new we(o),i=ee,a=re,u=-1,c=0,l;function l(e){var r,l,s;if(0===arguments.length)return 0===c?null:t;if(u=(u+1)%o,de(e))c=o,i=e,a=e;else if(c<o)c+=1,(e<i||e===i&&ge(e))&&(i=e),(e>a||e===a&&pe(e))&&(a=e);else if(n[u]===i&&e>i||n[u]===a&&e<a||de(n[u])){for(i=e,a=e,s=0;s<o;s++)if(s!==u){if(de(l=n[s])){i=l,a=l;break}(l<i||l===i&&ge(l))&&(i=l),(l>a||l===a&&pe(l))&&(a=l)}}else if(e<i)i=e;else if(e>a)a=e;else if(0===e){if(r=ge(e),e===i)if(n[u]===i&&ge(n[u])&&!1===r){for(i=e,s=0;s<o;s++)if(s!==u&&ge(n[s])){i=n[s];break}}else r&&(i=e);if(e===a)if(n[u]===a&&pe(n[u])&&r){for(a=e,s=0;s<o;s++)if(s!==u&&pe(n[s])){a=n[s];break}}else!1===r&&(a=e)}return n[u]=e,t[0]=i,t[1]=a,t}}function ve(e){return Math.abs(e)}return function(e,r){var t,n,i;if(1===arguments.length)n=[0,0],i=e;else{if(!fe(e))throw new TypeError(O("invalid argument. Output argument must be an array-like object. Value: `%s`.",e));n=e,i=r}if(!ue(i))throw new TypeError(O("invalid argument. Window size must be a positive integer. Value: `%s`.",i));return t=me(n,i),a;function a(e){return 0===arguments.length?t():t(ve(e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmminmaxabs=r();
//# sourceMappingURL=browser.js.map
