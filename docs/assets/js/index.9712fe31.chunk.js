(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(r,t){r.exports=[{group:"Samples",src:"Samples",demos:[{label:"Hello Canvas",src:"HelloCanvas"},{label:"HelloPoint1",src:"HelloPoint1"},{label:"HelloPoint2",src:"HelloPoint2"},{label:"ClickedPoints",src:"ClickedPoints"},{label:"ColoredPoints",src:"ColoredPoints"},{label:"HelloTriangle",src:"HelloTriangle"},{label:"RotatingTriangle",src:"RotatingTriangle"},{label:"MultiAttributeColor",src:"MultiAttributeColor"},{label:"TexturedQuad",src:"TexturedQuad"},{label:"MultiTexture",src:"MultiTexture"},{label:"TransformTexturedQuad",src:"TransformTexturedQuad"},{label:"CubeTexture",src:"CubeTexture"},{label:"Web Worker",src:"WebWorker"}]},{group:"Hilo3d demo",src:"Hilo3d",demos:[{label:"Box",src:"Box"},{label:"Light Box",src:"LightBox"}]}]},286:function(r,t){r.exports={devServer:{port:2333},output:{dir:"docs",publicUrl:".",html:{title:"WebGPU Playground"}},staticFolder:"static",demoList:".demoList.json",name:"WebGPU Playground",version:"v1",homePage:"https://github.com/06wj/WebGPU-Playground",logo:"",boxTheme:"monokai",globalPackages:{js:[],css:[]},editorViewMode:"tab"}},330:function(r,t,n){r.exports=n(426)},407:function(r,t,n){var e={"./Hilo3d/Box/config.js":408,"./Hilo3d/LightBox/config.js":410,"./Samples/ClickedPoints/config.js":411,"./Samples/ColoredPoints/config.js":412,"./Samples/CubeTexture/config.js":413,"./Samples/HelloCanvas/config.js":414,"./Samples/HelloPoint1/config.js":415,"./Samples/HelloPoint2/config.js":416,"./Samples/HelloTriangle/config.js":417,"./Samples/MultiAttributeColor/config.js":418,"./Samples/MultiTexture/config.js":419,"./Samples/RotatingTriangle/config.js":420,"./Samples/TexturedQuad/config.js":421,"./Samples/TransformTexturedQuad/config.js":422,"./Samples/WebWorker/config.js":423};function o(r){var t=a(r);return n(t)}function a(r){if(!n.o(e,r)){var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}return e[r]}o.keys=function(){return Object.keys(e)},o.resolve=a,r.exports=o,o.id=407},408:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(60).then(n.bind(null,478)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},410:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(61).then(n.bind(null,481)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},411:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(62).then(n.bind(null,482)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},412:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(63).then(n.bind(null,483)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},413:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(64).then(n.bind(null,484)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},414:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(65).then(n.bind(null,485)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},415:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(66).then(n.bind(null,486)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},416:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(67).then(n.bind(null,487)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},417:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(68).then(n.bind(null,488)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},418:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(69).then(n.bind(null,489)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},419:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(70).then(n.bind(null,490)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},420:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(71).then(n.bind(null,491)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},421:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(72).then(n.bind(null,492)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},422:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(73).then(n.bind(null,493)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},423:function(r,t,n){"use strict";n.r(t);var e=n(36),o=n.n(e),a=n(52);function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){l(a,e,o,u,i,"next",r)}function i(r){l(a,e,o,u,i,"throw",r)}u(void 0)}))}}t.default=c(o.a.mark((function r(){var t,e,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(74).then(n.bind(null,494)),Object(a.a)()]);case 2:return t=r.sent,e=u(t,2),i=e[0],(l=e[1]).javascript.code=i,r.abrupt("return",l);case 8:case"end":return r.stop()}}),r)})))},52:function(r,t,n){"use strict";n.d(t,"a",(function(){return l}));var e=n(36),o=n.n(e);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(r);!(u=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function i(r,t,n,e,o,a,u){try{var i=r[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(e,o)}var l=function(){var r,t=(r=o.a.mark((function r(){var t,e,u,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(75).then(n.bind(null,479)),n.e(76).then(n.bind(null,480))]);case 2:return t=r.sent,e=a(t,2),u=e[0],i=e[1],r.abrupt("return",{javascript:{code:"",transformer:"javascript",transform:function(r){return"(async ()=>{\n                    ".concat(r,"\n                })();")},visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:i,transformer:"css",visible:!1},foldBoxes:["html"],packages:{js:["./libs/helpers.js","./libs/hilo3d/Hilo3d.js","./libs/gl-matrix/gl-matrix-min.js"]}});case 7:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function u(r){i(a,e,o,u,l,"next",r)}function l(r){i(a,e,o,u,l,"throw",r)}u(void 0)}))});return function(){return t.apply(this,arguments)}}()}},[[330,3,1]]]);