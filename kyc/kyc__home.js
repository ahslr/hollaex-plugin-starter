!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=102)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("hollaex-web-lib")},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(29)("wks"),o=n(28),i=n(4).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},,function(t,e,n){t.exports=!n(16)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(69);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(70),o=n(71);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return N})),n.d(e,"a",(function(){return v}));var r=n(0),o=n.n(r),i=(n(24),n(25),n(26),n(31),n(23)),a=n.n(i),c=n(9),u=n.n(c),f=n(10),l=n.n(f),s=n(11),E=n.n(s),I=n(12),p=n.n(I),O=n(2),_=n.n(O);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var o=_()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var m=function(t){E()(n,t);var e=R(n);function n(){return u()(this,n),e.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=a()(t,["children"]);return o.a.createElement(v.Provider,{value:n},e)}}]),n}(r.Component),d=n(22),T=n.n(d),N=function(t){return function(e){return function(n){return o.a.createElement(v.Consumer,null,(function(r){return o.a.createElement(e,T()({},n,t(r,n)))}))}}},v=Object(r.createContext)()},function(t,e,n){var r=n(4),o=n(30),i=n(18),a=n(17),c=n(42),u=function(t,e,n){var f,l,s,E,I=t&u.F,p=t&u.G,O=t&u.S,_=t&u.P,R=t&u.B,m=p?r:O?r[e]||(r[e]={}):(r[e]||{}).prototype,d=p?o:o[e]||(o[e]={}),T=d.prototype||(d.prototype={});for(f in p&&(n=e),n)s=((l=!I&&m&&void 0!==m[f])?m:n)[f],E=R&&l?c(s,r):_&&"function"==typeof s?c(Function.call,s):s,m&&a(m,f,s,t&u.U),d[f]!=s&&i(d,f,E),_&&T[f]!=s&&(T[f]=s)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=require("redux-form")},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(4),o=n(18),i=n(27),a=n(28)("src"),c=n(60),u=(""+c).split("toString");n(30).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var f="function"==typeof n;f&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(f&&(i(n,a)||o(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||c.call(this)}))},function(t,e,n){var r=n(20),o=n(50);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=require("moment")},function(t,e,n){var r=n(8),o=n(58),i=n(59),a=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},function(t,e,n){var r=n(68);t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},function(t,e,n){"use strict";n(57);var r=n(8),o=n(41),i=n(6),a=/./.toString,c=function(t){n(17)(RegExp.prototype,"toString",t,!0)};n(16)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=a.name&&c((function(){return a.call(this)}))},function(t,e,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(17)(r,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},function(t,e,n){"use strict";var r=n(61),o={};o[n(3)("toStringTag")]="z",o+""!="[object z]"&&n(17)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(30),o=n(4),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(51)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(14),o=n(52),i=n(32),a=n(8),c=n(7),u=n(16),f=n(66),l=(n(4).Reflect||{}).construct,s=u((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),E=!u((function(){l((function(){}))}));r(r.S+r.F*(s||E),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(E&&!s)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(f.apply(t,r))}var u=n.prototype,I=o(c(u)?u:Object.prototype),p=Function.apply.call(t,I,e);return c(p)?p:I}})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(44),o=n(34);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=require("react-redux")},function(t,e,n){var r=n(81),o=n(82),i=n(83),a=n(85);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t,e){t.exports=require("redux")},function(t,e){t.exports=require("antd")},function(t,e,n){var r=n(29)("keys"),o=n(28);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(7),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";var r=n(8);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(32);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(63),o=n(48);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(33),o=n(46),i=n(64);t.exports=function(t){return function(e,n,a){var c,u=r(e),f=o(u.length),l=i(a,f);if(t&&n!=n){for(;f>l;)if((c=u[l++])!=c)return!0}else for(;f>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(47),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";var r=n(37),o=n(15),i=Object(r.combineReducers)({form:o.reducer});e.a=Object(r.createStore)(i)},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(8),o=n(62),i=n(48),a=n(39)("IE_PROTO"),c=function(){},u=function(){var t,e=n(40)("iframe"),r=i.length;for(e.style.display="none",n(65).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(42),o=n(44),i=n(54),a=n(46),c=n(73);t.exports=function(t,e){var n=1==t,u=2==t,f=3==t,l=4==t,s=6==t,E=5==t||s,I=e||c;return function(e,c,p){for(var O,_,R=i(e),m=o(R),d=r(c,p,3),T=a(m.length),N=0,v=n?I(e,T):u?I(e,0):void 0;T>N;N++)if((E||N in m)&&(_=d(O=m[N],N,R),t))if(n)v[N]=_;else if(_)switch(t){case 3:return!0;case 5:return O;case 6:return N;case 2:v.push(O)}else if(l)return!1;return s?-1:f||l?l:v}}},function(t,e,n){var r=n(34);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(16);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var r=n(3)("unscopables"),o=Array.prototype;null==o[r]&&n(18)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e,n){n(6)&&"g"!=/./g.flags&&n(20).f(RegExp.prototype,"flags",{configurable:!0,get:n(41)})},function(t,e,n){t.exports=!n(6)&&!n(16)((function(){return 7!=Object.defineProperty(n(40)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(29)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(21),o=n(3)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(20),o=n(8),i=n(43);t.exports=n(6)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),c=a.length,u=0;c>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(27),o=n(33),i=n(45)(!1),a=n(39)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,f=[];for(n in c)n!=a&&r(c,n)&&f.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(47),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){"use strict";var r=n(32),o=n(7),i=n(67),a=[].slice,c={},u=function(t,e,n){if(!(e in c)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";c[e]=Function("F,a","return new F("+r.join(",")+")")}return c[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=a.call(arguments,1),c=function(){var r=n.concat(a.call(arguments));return this instanceof c?u(e,r.length,r):i(e,r,t)};return o(e.prototype)&&(c.prototype=e.prototype),c}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";var r=n(14),o=n(53)(1);r(r.P+r.F*!n(55)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,e,n){var r=n(74);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(7),o=n(75),i=n(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(21);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(14),o=n(45)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(56)("includes")},function(t,e,n){"use strict";var r=n(14),o=n(78);r(r.P+r.F*n(80)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(79),o=n(34);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},function(t,e,n){var r=n(7),o=n(21),i=n(3)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},function(t,e,n){var r=n(84);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,,,function(t,e){t.exports=require("classnames")},function(t,e,n){var r=n(20).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(6)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));n(24),n(25),n(26),n(31);var r=n(22),o=n.n(r),i=n(23),a=n.n(i),c=n(9),u=n.n(c),f=n(10),l=n.n(f),s=n(11),E=n.n(s),I=n(12),p=n.n(I),O=n(2),_=n.n(O),R=n(0),m=n.n(R),d=n(35),T=n(49),N=(n(72),n(76),n(77),n(36)),v=n.n(N),S=n(38),y=n(13),F=(n(91),n(1)),A={en:"DD, MMMM, YYYY",fa:"jDD, jMMMM, jYYYY"},b=function(t){var e=t.user,n=t.activeLanguage,r=t.setActivePageContent,o=t.handleBack,i=t.strings,a=t.getCountry,c=t.getFormatTimestamp,u=e.address,f=e.id_data;return u.country?m.a.createElement("div",null,m.a.createElement("div",{className:"font-weight-bold text-lowercase"},i.formatString(i["USER_VERIFICATION.BANK_VERIFICATION_HELP_TEXT"],m.a.createElement("span",{className:"verification_link pointer",onClick:function(t){return o("kyc",t)}},i["USER_VERIFICATION.DOCUMENT_SUBMISSION"])),m.a.createElement(F.Editable,{stringId:"USER_VERIFICATION.BANK_VERIFICATION_HELP_TEXT,USER_VERIFICATION.DOCUMENT_SUBMISSION"})),m.a.createElement("div",{className:"my-3"},m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.FULL_NAME_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.FULL_NAME_LABEL"],information:e.full_name,className:"title-font",disable:!0}),m.a.createElement("div",{className:"d-flex"},m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.GENDER_LABEL,USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.GENDER_OPTIONS.MAN,USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.GENDER_OPTIONS.WOMAN",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.GENDER_LABEL"],information:!1===e.gender?i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.GENDER_OPTIONS.MAN"]:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.GENDER_OPTIONS.WOMAN"],className:"title-font divider",disable:!0}),m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.DOB_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.DOB_LABEL"],information:c(e.dob,A[n]),className:"title-font",disable:!0})),m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.NATIONALITY_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.NATIONALITY_LABEL"],information:a(e.nationality).name,className:"title-font",disable:!0}),m.a.createElement("div",{className:"d-flex"},m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.COUNTRY_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.COUNTRY_LABEL"],information:a(u.country).name,className:"title-font divider",disable:!0}),m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.CITY_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.CITY_LABEL"],information:u.city,className:"title-font",disable:!0})),m.a.createElement("div",{className:"d-flex"},m.a.createElement("div",{className:"w-75"},m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.ADDRESS_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.ADDRESS_LABEL"],information:u.address,className:"title-font divider",disable:!0})),m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.POSTAL_CODE_LABEL",label:i["USER_VERIFICATION.USER_DOCUMENTATION_FORM.FORM_FIELDS.POSTAL_CODE_LABEL"],information:u.postal_code,className:"title-font",disable:!0}))),3===f.status?null:m.a.createElement("div",{className:"btn-wrapper"},m.a.createElement("div",{className:"holla-verification-button static pt-4"},m.a.createElement(F.Editable,{stringId:"USER_VERIFICATION.REVIEW_IDENTITY_VERIFICATION"}),m.a.createElement(F.Button,{label:i["USER_VERIFICATION.REVIEW_IDENTITY_VERIFICATION"],onClick:function(){return r("kyc")}})))):m.a.createElement("div",{className:"btn-wrapper"},m.a.createElement("div",{className:"holla-verification-button static pt-4"},m.a.createElement(F.Editable,{stringId:"USER_VERIFICATION.START_IDENTITY_VERIFICATION"}),m.a.createElement(F.Button,{label:i["USER_VERIFICATION.START_IDENTITY_VERIFICATION"],onClick:function(){return r("kyc")}})))},g=n(19),M=n.n(g),C=n(90),U=n.n(C),h=function(t){var e=t.user,n=t.setActivePageContent,r=t.icons,o=t.strings,i=e.id_data,a="";return a=1===i.status?o["USER_VERIFICATION.DOCUMENT_PENDING_NOTE"]:2===i.status?i.note:o["USER_VERIFICATION.DOCUMENT_VERIFIED_NOTE"],m.a.createElement("div",null,0!==i.status&&m.a.createElement("div",{className:"d-flex my-3"},m.a.createElement("div",{className:U()("mr-2","d-flex","justify-content-center","align-items-center"),title:o["USER_VERIFICATION.NOTE_FROM_VERIFICATION_DEPARTMENT"]},m.a.createElement(F.Image,{icon:r.NOTE_KYC,iconId:"NOTE_KYC",stringId:"USER_VERIFICATION.NOTE_FROM_VERIFICATION_DEPARTMENT",wrapperClassName:"document-note-icon"})),m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.CUSTOMER_SUPPORT_MESSAGE,USER_VERIFICATION.DOCUMENT_PENDING_NOTE,USER_VERIFICATION.DOCUMENT_VERIFIED_NOTE",label:o["USER_VERIFICATION.CUSTOMER_SUPPORT_MESSAGE"],information:a,className:"title-font",disable:!0})),1===i.status&&m.a.createElement("div",{className:"my-3"},m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.ID_DOCUMENTS_FORM.FORM_FIELDS.ID_NUMBER_LABEL",label:o["USER_VERIFICATION.ID_DOCUMENTS_FORM.FORM_FIELDS.ID_NUMBER_LABEL"],information:i.number,className:"title-font",disable:!0}),m.a.createElement("div",{className:"d-flex"},m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.ID_DOCUMENTS_FORM.FORM_FIELDS.ISSUED_DATE_LABEL",label:o["USER_VERIFICATION.ID_DOCUMENTS_FORM.FORM_FIELDS.ISSUED_DATE_LABEL"],information:M()(i.issued_date).format("DD, MMMM, YYYY"),className:"title-font mr-2",disable:!0}),m.a.createElement(F.PanelInformationRow,{stringId:"USER_VERIFICATION.ID_DOCUMENTS_FORM.FORM_FIELDS.EXPIRATION_DATE_LABEL",label:o["USER_VERIFICATION.ID_DOCUMENTS_FORM.FORM_FIELDS.EXPIRATION_DATE_LABEL"],information:M()(i.expiration_date).format("DD, MMMM, YYYY"),className:"title-font",disable:!0}))),3!==i.status&&m.a.createElement("div",{className:"my-2 btn-wrapper"},m.a.createElement("div",{className:"holla-verification-button static pt-4"},m.a.createElement(F.Editable,{stringId:"USER_VERIFICATION.START_DOCUMENTATION_SUBMISSION,USER_VERIFICATION.START_DOCUMENTATION_RESUBMISSION"}),m.a.createElement(F.Button,{label:0===i.status?o["USER_VERIFICATION.START_DOCUMENTATION_SUBMISSION"]:o["USER_VERIFICATION.START_DOCUMENTATION_RESUBMISSION"],onClick:function(){return n("kyc")}}))))},D=S.Tabs.TabPane,x=Object(y.c)((function(t){return{strings:t.strings,setActivePageContent:t.setActivePageContent,handleBack:t.handleBack,activeLanguage:t.activeLanguage,user:t.user,getCountry:t.getCountry,getFormatTimestamp:t.getFormatTimestamp,icons:t.icons}}))((function(t){var e=t.strings,n=t.setActivePageContent,r=t.handleBack,o=t.activeLanguage,i=t.user,a=t.getCountry,c=t.getFormatTimestamp,u=t.icons,f=[{key:"identity",title:e["USER_VERIFICATION.TITLE_IDENTITY"]},{key:"documents",title:e["USER_VERIFICATION.TITLE_ID_DOCUMENTS"]}],l=Object(R.useState)("identity"),s=v()(l,2),E=s[0],I=s[1];Object(R.useEffect)((function(){var t=localStorage.getItem("initial_kyc_tab");t&&f.map((function(t){return t.key})).includes(t)&&I(t)}),[]);var p=function(t){return function(e){localStorage.setItem("initial_kyc_tab",t),n(e)}};return m.a.createElement("div",null,m.a.createElement(S.Tabs,{activeKey:E,onTabClick:I},f.map((function(t){var n=t.key,f=t.title;return m.a.createElement(D,{tab:f,key:n},function(t,n,o){switch(t){case"identity":return m.a.createElement(b,{activeLanguage:o,user:n,handleBack:r,setActivePageContent:p(t),getFormatTimestamp:c,getCountry:a,strings:e});case"documents":return m.a.createElement(h,{user:n,setActivePageContent:p(t),icons:u,strings:e});default:return m.a.createElement("div",null,"No content")}}(n,i,o))}))))}));function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var o=_()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var P=function(t){E()(n,t);var e=L(n);function n(){return u()(this,n),e.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=a()(t,["children"]);return m.a.createElement(d.Provider,{store:T.a},m.a.createElement(y.b,o()({},n,{defaultView:e}),m.a.createElement(x,null)))}}]),n}(R.Component)}]));