(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(r,t){r.exports=[{group:"Samples",src:"Samples",demos:[{label:"Hello Canvas",src:"HelloCanvas"},{label:"HelloPoint1",src:"HelloPoint1"},{label:"HelloPoint2",src:"HelloPoint2"},{label:"ClickedPoints",src:"ClickedPoints"},{label:"ColoredPoints",src:"ColoredPoints"},{label:"HelloTriangle",src:"HelloTriangle"},{label:"RotatingTriangle",src:"RotatingTriangle"},{label:"MultiAttributeColor",src:"MultiAttributeColor"},{label:"TexturedQuad",src:"TexturedQuad"},{label:"MultiTexture",src:"MultiTexture"},{label:"TransformTexturedQuad",src:"TransformTexturedQuad"},{label:"CubeTexture",src:"CubeTexture"}]},{group:"Hilo3d demo",src:"Hilo3d",demos:[{label:"Box",src:"Box"},{label:"Light Box",src:"LightBox"}]}]},286:function(r,t){r.exports={devServer:{port:2333},output:{dir:"docs",publicUrl:".",html:{title:"WebGPU Playground"}},staticFolder:"static",demoList:".demoList.json",name:"WebGPU Playground",version:"v1",homePage:"https://github.com/06wj/WebGPU-Playground",logo:"",boxTheme:"monokai",globalPackages:{js:[],css:[]},editorViewMode:"tab"}},330:function(r,t,n){r.exports=n(425)},408:function(r,t,n){var e={"./Hilo3d/Box/config.js":409,"./Hilo3d/LightBox/config.js":410,"./Samples/ClickedPoints/config.js":411,"./Samples/ColoredPoints/config.js":412,"./Samples/CubeTexture/config.js":413,"./Samples/HelloCanvas/config.js":414,"./Samples/HelloPoint1/config.js":415,"./Samples/HelloPoint2/config.js":416,"./Samples/HelloTriangle/config.js":417,"./Samples/MultiAttributeColor/config.js":418,"./Samples/MultiTexture/config.js":419,"./Samples/RotatingTriangle/config.js":420,"./Samples/TexturedQuad/config.js":421,"./Samples/TransformTexturedQuad/config.js":422};function o(r){var t=a(r);return n(t)}function a(r){if(!n.o(e,r)){var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}return e[r]}o.keys=function(){return Object.keys(e)},o.resolve=a,r.exports=o,o.id=408},409:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(60).then(n.bind(null,477)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},410:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(61).then(n.bind(null,480)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},411:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(62).then(n.bind(null,481)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},412:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(63).then(n.bind(null,482)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},413:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(64).then(n.bind(null,483)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},414:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(65).then(n.bind(null,484)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},415:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(66).then(n.bind(null,485)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},416:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(67).then(n.bind(null,486)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},417:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(68).then(n.bind(null,487)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},418:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(69).then(n.bind(null,488)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},419:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(70).then(n.bind(null,489)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},420:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(71).then(n.bind(null,490)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},421:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(72).then(n.bind(null,491)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},422:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),a=n(56);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function l(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))}}t.default=l(o.a.mark((function r(){var t,e,u,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(73).then(n.bind(null,492)),Object(a.a)()]);case 2:return t=r.sent,e=i(t,2),u=e[0],(c=e[1]).javascript.code=u,r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))},56:function(r,t,n){"use strict";n.d(t,"a",(function(){return c}));var e=n(25),o=n.n(e);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function u(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}var c=function(){var r,t=(r=o.a.mark((function r(){var t,e,i,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(74).then(n.bind(null,478)),n.e(75).then(n.bind(null,479))]);case 2:return t=r.sent,e=a(t,2),i=e[0],u=e[1],r.abrupt("return",{javascript:{code:"",transformer:"javascript",transform:function(r){return"(async ()=>{\n                    ".concat(r,"\n                })();")},visible:!0},html:{code:i,transformer:"html",visible:!0},css:{code:u,transformer:"css",visible:!1},foldBoxes:["html"],packages:{js:["./libs/helpers.js","./libs/hilo3d/Hilo3d.js","./libs/gl-matrix/gl-matrix-min.js"]}});case 7:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){u(a,e,o,i,c,"next",r)}function c(r){u(a,e,o,i,c,"throw",r)}i(void 0)}))});return function(){return t.apply(this,arguments)}}()}},[[330,3,1]]]);