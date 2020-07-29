!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("regenerator-runtime/runtime"),require("axios")):"function"==typeof define&&define.amd?define(["regenerator-runtime/runtime","axios"],t):(e=e||self).caasy=t(null,e.axios)}(this,(function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,u,"next",e)}function u(e){n(a,o,i,s,u,"throw",e)}s(void 0)}))}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var s,u=(s={siteId:"",mode:"prod",isInitialized:!1},{set:function(e){if(!e.siteId||"string"!=typeof e.siteId||24!==e.siteId.length)throw new Error("[CAASY]: the provided site ID is missing or invalid");s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s,{},e,{isInitialized:!0})},get:function(){if(!s.isInitialized)throw new Error('[CAASY]: before you use the Caasy SDK you need to initialize it by calling the "init()" function and provide the "siteId"');return s}}),c=function(e,t,r){if(!e||!Array.isArray(e))throw new Error("[CAASY]: you need to provide an array of Caasy elements");if(!t||"string"!=typeof t)throw new Error("[CAASY]: you need to provide an element ID of type string");for(var n=0;n<e.length;n++)if(e[n][r]===t)return e[n];return null},p=function(e,t,r){if(!e||!Array.isArray(e))throw new Error("[CAASY]: you need to provide an array of Caasy elements");if(!t||"string"!=typeof t)throw new Error("[CAASY]: you need to provide a "+r+" of type string");for(var n=[],o=0;o<e.length;o++)e[o][r]===t&&n.push(e[o]);return n},f={filterElementsById:function(e,t){return p(e,t,"id")},filterElementsByCustomId:function(e,t){return p(e,t,"customId")},getElementById:function(e,t){return c(e,t,"id")},getElementByCustomId:function(e,t){return c(e,t,"customId")}},g=function e(t){if(!t)return[];for(var r=0;r<t.length;r++)"image"!==t[r].type&&"card"!==t[r].type||!t[r].imageName||(t[r].imageUrls={original:"https://storage.googleapis.com/caasy-media/"+(n=t[r].imageName),large:"https://storage.googleapis.com/caasy-media-thumbnails/1500x1500_"+n,larger:"https://storage.googleapis.com/caasy-media-thumbnails/1200x1200_"+n,medium:"https://storage.googleapis.com/caasy-media-thumbnails/800x800_"+n,smaller:"https://storage.googleapis.com/caasy-media-thumbnails/400x400_"+n}),"container"===t[r].type&&(t[r].elements=e(t[r].elements));var n;return t},l=function(e){if("string"!=typeof e&&"number"!=typeof e)throw new Error("[CAASY]: the provided page must either be of type string or number but received: "+r(e))},m={endpoint:{dev:"http://localhost:2800/api",prod:"https://api.caasy.io/api"}},d={get:function(){var e=o(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.endpoint[u.get().mode],e.next=3,t(n+r);case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return{posts:{getAll:function(){var e=o(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,l(t),e.next=4,d.get("/"+u.get().siteId+"/posts?page="+t);case 4:if(!("ok"in(r=e.sent))||r.ok){e.next=7;break}throw new Error("[CAASY]: "+r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getById:function(){var e=o(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/"+u.get().siteId+"/posts/"+t);case 2:if(!("ok"in(r=e.sent))||r.ok){e.next=5;break}throw new Error("[CAASY]: "+r.message);case 5:return r.elements=g(r.elements),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllIds:function(){var e=o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/"+u.get().siteId+"/post-ids");case 2:if(!("ok"in(t=e.sent))||t.ok){e.next=5;break}throw new Error("[CAASY]: "+t.message);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllAuthors:function(){var e=o(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,l(t),e.next=4,d.get("/"+u.get().siteId+"/authors?page="+t);case 4:if(!("ok"in(r=e.sent))||r.ok){e.next=7;break}throw new Error("[CAASY]: "+r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllByAuthor:function(){var e=o(regeneratorRuntime.mark((function e(t){var r,n,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.length>1&&void 0!==o[1]?o[1]:1,l(r),t&&"string"==typeof t){e.next=4;break}throw new Error("[CAASY]: the provided author ID is mandatory but was not provided or is not of type string");case 4:return e.next=6,d.get("/"+u.get().siteId+"/posts-by-author/"+t+"?page="+r);case 6:if(!("ok"in(n=e.sent))||n.ok){e.next=9;break}throw new Error("[CAASY]: "+n.message);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pages:{getAll:function(){var e=o(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,l(t),e.next=4,d.get("/"+u.get().siteId+"/pages?page="+t);case 4:if(!("ok"in(r=e.sent))||r.ok){e.next=7;break}throw new Error("[CAASY]: "+r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getById:function(){var e=o(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/"+u.get().siteId+"/pages/"+t);case 2:if(!("ok"in(r=e.sent))||r.ok){e.next=5;break}throw new Error("[CAASY]: "+r.message);case 5:return r.elements=g(r.elements),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},helpers:f,init:u.set}}));
