
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Module) {
  Module = Module || {};

var d;d||(d=typeof Module !== 'undefined' ? Module : {});
d.compileGLSLZeroCopy=function(a,b,c,e){c=!!c;switch(b){case "vertex":var g=0;break;case "fragment":g=4;break;case "compute":g=5;break;default:throw Error("shader_stage must be 'vertex', 'fragment', or 'compute'.");}switch(e||"1.0"){case "1.0":var f=65536;break;case "1.1":f=65792;break;case "1.2":f=66048;break;case "1.3":f=66304;break;case "1.4":f=66560;break;case "1.5":f=66816;break;default:throw Error("spirv_version must be '1.0' ~ '1.5'.");}e=d._malloc(4);b=d._malloc(4);var h=aa([a,g,c,f,e,b]);
c=k(e);a=k(b);d._free(e);d._free(b);if(0===h)throw Error("GLSL compilation failed");e={};c/=4;e.data=d.HEAPU32.subarray(c,c+a);e.free=function(){d._destroy_output_buffer(h)};return e};d.compileGLSL=function(a,b,c,e){a=d.compileGLSLZeroCopy(a,b,c,e);b=a.data.slice();a.free();return b};var p={},q;for(q in d)d.hasOwnProperty(q)&&(p[q]=d[q]);var r="./this.program",t="",u,v,w,x;t=__dirname+"/";u=function(a){w||(w=require("fs"));x||(x=require("path"));a=x.normalize(a);return w.readFileSync(a,null)};
v=function(a){a=u(a);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(r=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",z);d.inspect=function(){return"[Emscripten Module object]"};var A=d.print||console.log.bind(console),B=d.printErr||console.warn.bind(console);for(q in p)p.hasOwnProperty(q)&&(d[q]=p[q]);p=null;d.thisProgram&&(r=d.thisProgram);
var D;d.wasmBinary&&(D=d.wasmBinary);"object"!==typeof WebAssembly&&B("no native wasm support detected");function k(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return E[a>>0];case "i8":return E[a>>0];case "i16":return ba[a>>1];case "i32":return F[a>>2];case "i64":return F[a>>2];case "float":return ca[a>>2];case "double":return da[a>>3];default:z("invalid type for getValue: "+b)}return null}
var G,ea=new WebAssembly.Table({initial:859,maximum:859,element:"anyfunc"}),fa=!1;function ha(){var a=d._convert_glsl_to_spirv;a||z("Assertion failed: Cannot call unknown function convert_glsl_to_spirv, make sure it is exported");return a}
function aa(a){var b="string number boolean number number number".split(" "),c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ia(c);ja(a,H,b,c)}return b},array:function(a){var b=ia(a.length);E.set(a,b);return b}},e=ha(),g=[],f=0;if(a)for(var h=0;h<a.length;h++){var n=c[b[h]];n?(0===f&&(f=ka()),g[h]=n(a[h])):g[h]=a[h]}a=e.apply(null,g);0!==f&&la(f);return a}var ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function I(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ma)return ma.decode(a.subarray(b,c));for(e="";b<c;){var g=a[b++];if(g&128){var f=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|f);else{var h=a[b++]&63;g=224==(g&240)?(g&15)<<12|f<<6|h:(g&7)<<18|f<<12|h<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e}
function ja(a,b,c,e){if(0<e){e=c+e-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var h=a.charCodeAt(++g);f=65536+((f&1023)<<10)|h&1023}if(127>=f){if(c>=e)break;b[c++]=f}else{if(2047>=f){if(c+1>=e)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=e)break;b[c++]=224|f>>12}else{if(c+3>=e)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,E,H,ba,F,ca,da;
function na(a){buffer=a;d.HEAP8=E=new Int8Array(a);d.HEAP16=ba=new Int16Array(a);d.HEAP32=F=new Int32Array(a);d.HEAPU8=H=new Uint8Array(a);d.HEAPU16=new Uint16Array(a);d.HEAPU32=new Uint32Array(a);d.HEAPF32=ca=new Float32Array(a);d.HEAPF64=da=new Float64Array(a)}var oa=d.TOTAL_MEMORY||16777216;d.wasmMemory?G=d.wasmMemory:G=new WebAssembly.Memory({initial:oa/65536});G&&(buffer=G.buffer);oa=buffer.byteLength;na(buffer);F[84916]=5582704;
function J(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.J;"number"===typeof c?void 0===b.H?d.dynCall_v(c):d.dynCall_vi(c,b.H):c(void 0===b.H?null:b.H)}}}var pa=[],qa=[],sa=[],ta=[];function ua(){var a=d.preRun.shift();pa.unshift(a)}var K=0,L=null,M=null;d.preloadedImages={};d.preloadedAudios={};function z(a){if(d.onAbort)d.onAbort(a);A(a);B(a);fa=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}var N="glslang.wasm";
if(String.prototype.startsWith?!N.startsWith("data:application/octet-stream;base64,"):0!==N.indexOf("data:application/octet-stream;base64,")){var va=N;N=d.locateFile?d.locateFile(va,t):t+va}qa.push({J:function(){wa()}});var xa=[null,[],[]],O=0;function ya(){O+=4;return F[O-4>>2]}var P={},za={};
function Aa(){if(!Q){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:r},b;for(b in za)a[b]=za[b];var c=[];for(b in a)c.push(b+"="+a[b]);Q=c}return Q}var Q;function R(a){return 0===a%4&&(0!==a%100||0===a%400)}function S(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}var T=[31,29,31,30,31,30,31,31,30,31,30,31],U=[31,28,31,30,31,30,31,31,30,31,30,31];
function W(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(R(a.getFullYear())?T:U)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Ba(a,b,c,e){function g(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function f(a,b){return g(a,b,"0")}function h(a,b){function V(a){return 0>a?-1:0<a?1:0}var c;0===(c=V(a.getFullYear()-b.getFullYear()))&&0===(c=V(a.getMonth()-b.getMonth()))&&(c=V(a.getDate()-b.getDate()));return c}function n(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function y(a){a=W(new Date(a.A+1900,0,1),a.G);var b=n(new Date(a.getFullYear()+1,0,4));return 0>=h(n(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var m=F[e+40>>2];e={N:F[e>>2],M:F[e+4>>2],D:F[e+8>>2],C:F[e+12>>2],B:F[e+16>>2],A:F[e+20>>2],F:F[e+24>>2],G:F[e+28>>2],W:F[e+32>>2],L:F[e+36>>2],O:m?m?I(H,m,void 0):
"":""};c=c?I(H,c,void 0):"";m={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var l in m)c=c.replace(new RegExp(l,"g"),m[l]);var C="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ra="January February March April May June July August September October November December".split(" ");m={"%a":function(a){return C[a.F].substring(0,3)},"%A":function(a){return C[a.F]},"%b":function(a){return ra[a.B].substring(0,3)},"%B":function(a){return ra[a.B]},"%C":function(a){return f((a.A+1900)/100|0,2)},"%d":function(a){return f(a.C,2)},"%e":function(a){return g(a.C,2," ")},"%g":function(a){return y(a).toString().substring(2)},"%G":function(a){return y(a)},"%H":function(a){return f(a.D,2)},
"%I":function(a){a=a.D;0==a?a=12:12<a&&(a-=12);return f(a,2)},"%j":function(a){return f(a.C+S(R(a.A+1900)?T:U,a.B-1),3)},"%m":function(a){return f(a.B+1,2)},"%M":function(a){return f(a.M,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.D&&12>a.D?"AM":"PM"},"%S":function(a){return f(a.N,2)},"%t":function(){return"\t"},"%u":function(a){return a.F||7},"%U":function(a){var b=new Date(a.A+1900,0,1),c=0===b.getDay()?b:W(b,7-b.getDay());a=new Date(a.A+1900,a.B,a.C);return 0>h(c,a)?f(Math.ceil((31-
c.getDate()+(S(R(a.getFullYear())?T:U,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=n(new Date(a.A+1900,0,4)),c=n(new Date(a.A+1901,0,4)),e=W(new Date(a.A+1900,0,1),a.G);return 0>h(e,b)?"53":0>=h(c,e)?"01":f(Math.ceil((b.getFullYear()<a.A+1900?a.G+32-b.getDate():a.G+1-b.getDate())/7),2)},"%w":function(a){return a.F},"%W":function(a){var b=new Date(a.A,0,1),c=1===b.getDay()?b:W(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.A+1900,a.B,a.C);return 0>h(c,a)?f(Math.ceil((31-
c.getDate()+(S(R(a.getFullYear())?T:U,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.A+1900).toString().substring(2)},"%Y":function(a){return a.A+1900},"%z":function(a){a=a.L;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.O},"%%":function(){return"%"}};for(l in m)0<=c.indexOf(l)&&(c=c.replace(new RegExp(l,"g"),m[l](e)));l=Ca(c);if(l.length>b)return 0;E.set(l,a);return l.length-1}
function Ca(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}b=Array(b+1);ja(a,b,0,b.length);return b}
var Ea={f:function(){},c:function(){d.___errno_location&&(F[d.___errno_location()>>2]=63);return-1},n:function(a,b){O=b;try{var c=ya();var e=ya();if(-1===c||0===e)var g=-28;else{var f=P.K[c];if(f&&e===f.T){var h=(void 0).S(f.fd);P.R(c,h,e,f.flags,f.offset);(void 0).V(h);P.K[c]=null;f.P&&Da(f.U)}g=0}return g}catch(n){return z(n),-n.I}},a:function(){},b:function(){z()},k:function(a,b,c){H.set(H.subarray(b,b+c),a)},l:function(a){var b=E.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var e=b*
(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%65536&&(e+=65536-e%65536);a:{try{G.grow(Math.min(2147418112,e)-buffer.byteLength+65535>>16);na(G.buffer);var g=1;break a}catch(f){}g=void 0}if(g)return!0}return!1},d:function(a,b){var c=0;Aa().forEach(function(e,g){var f=b+c;g=F[a+4*g>>2]=f;for(f=0;f<e.length;++f)E[g++>>0]=e.charCodeAt(f);E[g>>0]=0;c+=e.length+1});return 0},e:function(a,b){var c=Aa();F[a>>2]=c.length;var e=0;c.forEach(function(a){e+=a.length+1});F[b>>2]=e;return 0},h:function(){return 0},
j:function(){return 0},g:function(a,b,c,e){try{for(var g=0,f=0;f<c;f++){for(var h=F[b+8*f>>2],n=F[b+(8*f+4)>>2],y=0;y<n;y++){var m=H[h+y],l=xa[a];0===m||10===m?((1===a?A:B)(I(l,0)),l.length=0):l.push(m)}g+=n}F[e>>2]=g;return 0}catch(C){return z(C),C.I}},memory:G,o:function(){},i:function(){},m:function(a,b,c,e){return Ba(a,b,c,e)},table:ea},X=function(){function a(a){d.asm=a.exports;K--;d.monitorRunDependencies&&d.monitorRunDependencies(K);0==K&&(null!==L&&(clearInterval(L),L=null),M&&(a=M,M=null,
a()))}var b={env:Ea,wasi_snapshot_preview1:Ea};K++;d.monitorRunDependencies&&d.monitorRunDependencies(K);if(d.instantiateWasm)try{return d.instantiateWasm(b,a)}catch(c){return B("Module.instantiateWasm callback failed with error: "+c),!1}(function(){try{a:{try{if(D){var c=new Uint8Array(D);break a}if(v){c=v(N);break a}throw"sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";}catch(f){z(f)}c=void 0}var e=
new WebAssembly.Module(c);var g=new WebAssembly.Instance(e,b)}catch(f){throw g=f.toString(),B("failed to compile wasm module: "+g),(0<=g.indexOf("imported Memory")||0<=g.indexOf("memory import"))&&B("Memory size incompatibility issues may be due to changing TOTAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set TOTAL_MEMORY at runtime to something smaller than it was at compile time)."),f;}a(g,e)})();return d.asm}(),wa=d.___wasm_call_ctors=
X.p;d._convert_glsl_to_spirv=X.q;d._destroy_output_buffer=X.r;d._malloc=X.s;var Da=d._free=X.t,ka=d.stackSave=X.u,ia=d.stackAlloc=X.v,la=d.stackRestore=X.w;d.dynCall_vi=X.x;d.dynCall_v=X.y;d.asm=X;var Y;d.then=function(a){if(Y)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};M=function Fa(){Y||Z();Y||(M=Fa)};
function Z(){function a(){if(!Y&&(Y=!0,!fa)){J(qa);J(sa);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();ta.unshift(a)}J(ta)}}if(!(0<K)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)ua();J(pa);0<K||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a())}}d.run=Z;
if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();Z();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    