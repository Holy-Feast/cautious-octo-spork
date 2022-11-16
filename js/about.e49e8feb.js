(self["webpackChunknew_avatar"]=self["webpackChunknew_avatar"]||[]).push([[443],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(84),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},1702:function(e,t,n){var r=n(4326),i=n(84);e.exports=function(e){if("Function"===r(e))return i(e)}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw m(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},5983:function(e,t,n){"use strict";n.d(t,{tO:function(){return rx},h:function(){return nx}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return R},SDK_VERSION:function(){return bt},_DEFAULT_ENTRY_NAME:function(){return ct},_addComponent:function(){return dt},_addOrOverwriteComponent:function(){return ft},_apps:function(){return lt},_clearComponents:function(){return yt},_components:function(){return ht},_getProvider:function(){return mt},_registerComponent:function(){return pt},_removeServiceInstance:function(){return gt},deleteApp:function(){return St},getApp:function(){return Tt},getApps:function(){return Et},initializeApp:function(){return It},onLog:function(){return At},registerVersion:function(){return kt},setLogLevel:function(){return Ct}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=i(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function m(){return"object"===typeof self&&self.self===self}function g(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}function b(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function I(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=()=>I().__FIREBASE_DEFAULTS__,E=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_STRIPE_PUBLISHABLE_KEY:"pk_test_51M2vhLLLGjo5d30LI5TVoaUSSMUxIVrox0k3LtWDsaUOnguvVqAzLfvXmqg01cqcAJDPBZl7daxCXxoirU2g1xCn00i1WCmc6X",VUE_APP_ADMIN_MAIL_KEY:"YXBpOjg4NWIwMTJmM2Q3MDllZjNmZjI5MTU2MDIyMzE1NmE5LTQ4YzA5MmJhLWY0YzlmOTBh",VUE_APP_FIREBASE_KEY:"AIzaSyBFG6wX7k5jzt2LNZIAj8ZriyOerOht1AM",VUE_APP_ADMIN_LOGIN:"bar",VUE_APP_ADMIN_PASSWORD:"bar",BASE_URL:""}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},S=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},k=()=>{try{return T()||E()||S()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},A=()=>{var e;return null===(e=k())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=k())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function P(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(V(n)&&V(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=$),void 0===r.error&&(r.error=$),void 0===r.complete&&(r.complete=$);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}class W{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new x;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(J(e))try{this.getOrInitializeService({instanceIdentifier:Q})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Q){return this.instances.has(e)}getOptions(e=Q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(pT){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:X(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(pT){}return n||null}normalizeInstanceIdentifier(e=Q){return this.component?this.component.multipleInstances?e:Q:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function X(e){return e===Q?void 0:e}function J(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Y(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee=[];var te;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(te||(te={}));const ne={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},re=te.INFO,ie={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},se=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ie[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class oe{constructor(e){this.name=e,this._logLevel=re,this._logHandler=se,this._userLogHandler=null,ee.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?ne[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function ae(e){ee.forEach((t=>{t.setLogLevel(e)}))}function ce(e,t){for(const n of ee){let r=null;t&&t.level&&(r=ne[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:te[n].toLowerCase(),message:s,args:i,type:t.name})}}}const ue=(e,t)=>t.some((t=>e instanceof t));let le,he;function de(){return le||(le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fe(){return he||(he=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ye=new WeakMap,ve=new WeakMap;function we(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Se(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&pe.set(t,e)})).catch((()=>{})),ve.set(t,e),t}function _e(e){if(me.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));me.set(e,t)}let be={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return me.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ge.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ie(e){be=e(be)}function Te(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?fe().includes(e)?function(...t){return e.apply(ke(this),t),Se(pe.get(this))}:function(...t){return Se(e.apply(ke(this),t))}:function(t,...n){const r=e.call(ke(this),t,...n);return ge.set(r,t.sort?t.sort():[t]),Se(r)}}function Ee(e){return"function"===typeof e?Te(e):(e instanceof IDBTransaction&&_e(e),ue(e,de())?new Proxy(e,be):e)}function Se(e){if(e instanceof IDBRequest)return we(e);if(ye.has(e))return ye.get(e);const t=Ee(e);return t!==e&&(ye.set(e,t),ve.set(t,e)),t}const ke=e=>ve.get(e);function Ae(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Se(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Se(o.result),e.oldVersion,e.newVersion,Se(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Ce=["get","getKey","getAll","getAllKeys","count"],xe=["put","add","delete","clear"],De=new Map;function Ne(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(De.get(t))return De.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=xe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ce.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return De.set(t,s),s}Ie((e=>({...e,get:(t,n,r)=>Ne(t,n)||e.get(t,n,r),has:(t,n)=>!!Ne(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Oe(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Oe(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Pe="@firebase/app",Le="0.8.4",Me=new oe("@firebase/app"),Ue="@firebase/app-compat",Fe="@firebase/analytics-compat",Ve="@firebase/analytics",Be="@firebase/app-check-compat",qe="@firebase/app-check",je="@firebase/auth",Ge="@firebase/auth-compat",ze="@firebase/database",Ke="@firebase/database-compat",$e="@firebase/functions",He="@firebase/functions-compat",We="@firebase/installations",Qe="@firebase/installations-compat",Ye="@firebase/messaging",Xe="@firebase/messaging-compat",Je="@firebase/performance",Ze="@firebase/performance-compat",et="@firebase/remote-config",tt="@firebase/remote-config-compat",nt="@firebase/storage",rt="@firebase/storage-compat",it="@firebase/firestore",st="@firebase/firestore-compat",ot="firebase",at="9.14.0",ct="[DEFAULT]",ut={[Pe]:"fire-core",[Ue]:"fire-core-compat",[Ve]:"fire-analytics",[Fe]:"fire-analytics-compat",[qe]:"fire-app-check",[Be]:"fire-app-check-compat",[je]:"fire-auth",[Ge]:"fire-auth-compat",[ze]:"fire-rtdb",[Ke]:"fire-rtdb-compat",[$e]:"fire-fn",[He]:"fire-fn-compat",[We]:"fire-iid",[Qe]:"fire-iid-compat",[Ye]:"fire-fcm",[Xe]:"fire-fcm-compat",[Je]:"fire-perf",[Ze]:"fire-perf-compat",[et]:"fire-rc",[tt]:"fire-rc-compat",[nt]:"fire-gcs",[rt]:"fire-gcs-compat",[it]:"fire-fst",[st]:"fire-fst-compat","fire-js":"fire-js",[ot]:"fire-js-all"},lt=new Map,ht=new Map;function dt(e,t){try{e.container.addComponent(t)}catch(n){Me.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e,t){e.container.addOrOverwriteComponent(t)}function pt(e){const t=e.name;if(ht.has(t))return Me.debug(`There were multiple attempts to register component ${t}.`),!1;ht.set(t,e);for(const n of lt.values())dt(n,e);return!0}function mt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function gt(e,t,n=ct){mt(e,t).clearInstance(n)}function yt(){ht.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new O("app","Firebase",vt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new W("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=at;function It(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:ct,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!==typeof i||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=A()),!n)throw wt.create("no-options");const s=lt.get(i);if(s){if(F(n,s.options)&&F(r,s.config))return s;throw wt.create("duplicate-app",{appName:i})}const o=new Z(i);for(const c of ht.values())o.addComponent(c);const a=new _t(n,r,o);return lt.set(i,a),a}function Tt(e=ct){const t=lt.get(e);if(!t&&e===ct)return It();if(!t)throw wt.create("no-app",{appName:e});return t}function Et(){return Array.from(lt.values())}async function St(e){const t=e.name;lt.has(t)&&(lt.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function kt(e,t,n){var r;let i=null!==(r=ut[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Me.warn(e.join(" "))}pt(new W(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function At(e,t){if(null!==e&&"function"!==typeof e)throw wt.create("invalid-log-argument");ce(e,t)}function Ct(e){ae(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="firebase-heartbeat-database",Dt=1,Nt="firebase-heartbeat-store";let Rt=null;function Ot(){return Rt||(Rt=Ae(xt,Dt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Nt)}}}).catch((e=>{throw wt.create("idb-open",{originalErrorMessage:e.message})}))),Rt}async function Pt(e){var t;try{const t=await Ot();return t.transaction(Nt).objectStore(Nt).get(Mt(e))}catch(n){if(n instanceof R)Me.warn(n.message);else{const e=wt.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});Me.warn(e.message)}}}async function Lt(e,t){var n;try{const n=await Ot(),r=n.transaction(Nt,"readwrite"),i=r.objectStore(Nt);return await i.put(t,Mt(e)),r.done}catch(r){if(r instanceof R)Me.warn(r.message);else{const e=wt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});Me.warn(e.message)}}}function Mt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=1024,Ft=2592e6;class Vt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Bt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ft})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Bt(),{heartbeatsToSend:t,unsentEntries:n}=qt(this._heartbeatsCache.heartbeats),r=c(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Bt(){const e=new Date;return e.toISOString().substring(0,10)}function qt(e,t=Ut){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Gt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!_()&&b().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Pt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Lt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Lt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Gt(e){return c(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){pt(new W("platform-logger",(e=>new Re(e)),"PRIVATE")),pt(new W("heartbeat",(e=>new Vt(e)),"PRIVATE")),kt(Pe,Le,e),kt(Pe,Le,"esm2017"),kt("fire-js","")}zt("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(e,t){this._delegate=e,this.firebase=t,dt(e,new W("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),St(this._delegate))))}_getService(e,t=ct){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=ct){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){dt(this._delegate,e)}_addOrOverwriteComponent(e){ft(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ht=new O("app-compat","Firebase",$t);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:kt,setLogLevel:Ct,onLog:At,apps:null,SDK_VERSION:bt,INTERNAL:{registerComponent:c,removeApp:i,useAsService:u,modularAPIs:r}};function i(e){delete t[e]}function s(e){if(e=e||ct,!M(t,e))throw Ht.create("no-app",{appName:e});return t[e]}function o(r,i={}){const s=It(r,i);if(M(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,i=r.replace("-compat","");if(pt(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[i])throw Ht.create("invalid-app-argument",{appName:r});return e[i]()};void 0!==t.serviceProps&&l(o,t.serviceProps),n[i]=o,e.prototype[i]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[i]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){const e=Wt(Kt);function t(t){l(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Qt,extendNamespace:t,createSubscribe:G,ErrorFactory:O,deepExtend:l}),e}const Yt=Qt(),Xt=new oe("@firebase/app-compat"),Jt="@firebase/app-compat",Zt="0.1.39";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(e){kt(Jt,Zt,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(m()&&void 0!==self.firebase){Xt.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Xt.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const tn=Yt;en();var nn="firebase",rn="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn.registerVersion(nn,rn,"app-compat");function sn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},an={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function un(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ln=cn,hn=un,dn=new O("auth","Firebase",un()),fn=new oe("@firebase/auth");function pn(e,...t){fn.logLevel<=te.ERROR&&fn.error(`Auth (${bt}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,...t){throw wn(e,...t)}function gn(e,...t){return wn(e,...t)}function yn(e,t,n){const r=Object.assign(Object.assign({},hn()),{[t]:n}),i=new O("auth","Firebase",r);return i.create(t,{appName:e.name})}function vn(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&mn(e,"argument-error"),yn(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wn(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dn.create(e,...t)}function _n(e,t,...n){if(!e)throw wn(t,...n)}function bn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pn(t),new Error(t)}function In(e,t){e||bn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Map;function En(e){In(e instanceof Function,"Expected a class definition");let t=Tn.get(e);return t?(In(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Tn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function An(){return"http:"===Cn()||"https:"===Cn()}function Cn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(An()||g()||"connection"in navigator))||navigator.onLine}function Dn(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=f()||y()}get(){return xn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e,t){In(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Ln=new Nn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Un(e,t,n,r,i={}){return Fn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=B(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),On.fetch()(Bn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Fn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pn),t);try{const t=new qn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw jn(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw jn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw jn(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw jn(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw yn(e,a,o);mn(e,a)}}catch(i){if(i instanceof R)throw i;mn(e,"network-request-failed")}}async function Vn(e,t,n,r,i={}){const s=await Un(e,t,n,r,i);return"mfaPendingCredential"in s&&mn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Rn(e.config,i):`${e.config.apiScheme}://${i}`}class qn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(gn(this.auth,"network-request-failed"))),Ln.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function jn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t){return Un(e,"POST","/v1/accounts:delete",t)}async function zn(e,t){return Un(e,"POST","/v1/accounts:update",t)}async function Kn(e,t){return Un(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t=!1){const n=H(e),r=await n.getIdToken(t),i=Qn(r);_n(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:$n(Wn(i.auth_time)),issuedAtTime:$n(Wn(i.iat)),expirationTime:$n(Wn(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Wn(e){return 1e3*Number(e)}function Qn(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return pn("JWT malformed, contained fewer than 3 sections"),null;try{const e=u(r);return e?JSON.parse(e):(pn("Failed to decode base64 JWT payload"),null)}catch(s){return pn("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function Yn(e){const t=Qn(e);return _n(t,"internal-error"),_n("undefined"!==typeof t.exp,"internal-error"),_n("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof R&&Jn(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Jn({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xn(e,Kn(n,{idToken:r}));_n(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ir(s.providerUserInfo):[],a=rr(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new er(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function nr(e){const t=H(e);await tr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rr(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ir(e){return e.map((e=>{var{providerId:t}=e,n=sn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t){const n=await Fn(e,{},(async()=>{const n=B({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Bn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",On.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_n(e.idToken,"internal-error"),_n("undefined"!==typeof e.idToken,"internal-error"),_n("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Yn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _n(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await sr(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new or;return n&&(_n("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_n("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_n("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return bn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){_n("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class cr{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=sn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new er(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return _n(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hn(this,e)}reload(){return nr(this)}_assign(e){this!==e&&(_n(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_n(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xn(this,Gn(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;_n(v&&I,e,"internal-error");const T=or.fromJSON(this.name,I);_n("string"===typeof v,e,"internal-error"),ar(l,e.name),ar(h,e.name),_n("boolean"===typeof w,e,"internal-error"),_n("boolean"===typeof _,e,"internal-error"),ar(d,e.name),ar(f,e.name),ar(p,e.name),ar(m,e.name),ar(g,e.name),ar(y,e.name);const E=new cr({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new or;r.updateFromServerResponse(t);const i=new cr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await tr(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ur.type="NONE";const lr=ur;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t,n){return`firebase:${e}:${t}:${n}`}class dr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=hr(this.userKey,r.apiKey,i),this.fullPersistenceKey=hr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new dr(En(lr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||En(lr);const s=hr(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=cr._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(pT){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(pT){}}))),new dr(i,e,n)):new dr(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wr(t))return"Blackberry";if(_r(t))return"Webos";if(mr(t))return"Safari";if((t.includes("chrome/")||gr(t))&&!t.includes("edge/"))return"Chrome";if(vr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function pr(e=d()){return/firefox\//i.test(e)}function mr(e=d()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gr(e=d()){return/crios\//i.test(e)}function yr(e=d()){return/iemobile/i.test(e)}function vr(e=d()){return/android/i.test(e)}function wr(e=d()){return/blackberry/i.test(e)}function _r(e=d()){return/webos/i.test(e)}function br(e=d()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ir(e=d()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Tr(e=d()){var t;return br(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Er(){return v()&&10===document.documentMode}function Sr(e=d()){return br(e)||vr(e)||_r(e)||wr(e)||/windows phone/i.test(e)||yr(e)}function kr(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e,t=[]){let n;switch(e){case"Browser":n=fr(d());break;case"Worker":n=`${fr(d())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${bt}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nr(this),this.idTokenSubscription=new Nr(this),this.beforeStateQueue=new Cr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=En(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await dr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _n(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await tr(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?H(e):null;return t&&_n(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_n(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(En(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new O("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&En(e)||this._popupRedirectResolver;_n(t,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[En(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _n(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _n(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ar(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Dr(e){return H(e)}class Nr{constructor(e){this.auth=e,this.observer=null,this.addObserver=G((e=>this.observer=e))}get next(){return _n(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rr(e,t,n){const r=Dr(e);_n(r._canInitEmulator,r,"emulator-config-failed"),_n(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Or(t),{host:o,port:a}=Pr(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Mr()}function Or(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pr(e){const t=Or(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Lr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Lr(t)}}}function Lr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Mr(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,t){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(e,t){return Un(e,"POST","/v1/accounts:resetPassword",Mn(e,t))}async function Vr(e,t){return Un(e,"POST","/v1/accounts:update",t)}async function Br(e,t){return Un(e,"POST","/v1/accounts:update",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t){return Vn(e,"POST","/v1/accounts:signInWithPassword",Mn(e,t))}async function jr(e,t){return Un(e,"POST","/v1/accounts:sendOobCode",Mn(e,t))}async function Gr(e,t){return jr(e,t)}async function zr(e,t){return jr(e,t)}async function Kr(e,t){return jr(e,t)}async function $r(e,t){return jr(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t){return Vn(e,"POST","/v1/accounts:signInWithEmailLink",Mn(e,t))}async function Wr(e,t){return Vn(e,"POST","/v1/accounts:signInWithEmailLink",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ur{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qr(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hr(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Vr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wr(e,{idToken:t,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(e,t){return Vn(e,"POST","/v1/accounts:signInWithIdp",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="http://localhost";class Jr extends Ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=sn(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Jr(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Yr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yr(e,t)}buildRequest(){const e={requestUri:Xr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=B(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t){return Un(e,"POST","/v1/accounts:sendVerificationCode",Mn(e,t))}async function ei(e,t){return Vn(e,"POST","/v1/accounts:signInWithPhoneNumber",Mn(e,t))}async function ti(e,t){const n=await Vn(e,"POST","/v1/accounts:signInWithPhoneNumber",Mn(e,t));if(n.temporaryProof)throw jn(e,"account-exists-with-different-credential",n);return n}const ni={["USER_NOT_FOUND"]:"user-not-found"};async function ri(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Vn(e,"POST","/v1/accounts:signInWithPhoneNumber",Mn(e,n),ni)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ur{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ii({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ii({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ei(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ti(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ri(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ii({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oi(e){const t=q(j(e))["link"],n=t?q(j(t))["deep_link_id"]:null,r=q(j(e))["deep_link_id"],i=r?q(j(r))["link"]:null;return i||r||n||t||e}class ai{constructor(e){var t,n,r,i,s,o;const a=q(j(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=si(null!==(r=a["mode"])&&void 0!==r?r:null);_n(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=oi(e);try{return new ai(t)}catch(pT){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,t){return Qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ai.parseLink(t);return _n(n,"argument-error"),Qr._fromEmailAndCode(e,n.code,n.tenantId)}}ci.PROVIDER_ID="password",ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends ui{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class hi extends li{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return _n("providerId"in t&&"signInMethod"in t,"argument-error"),Jr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _n(e.idToken||e.accessToken,"argument-error"),Jr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return hi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return hi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new hi(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends li{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch(pT){return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com",di.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jr._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return fi.credential(t,n)}catch(pT){return null}}}fi.GOOGLE_SIGN_IN_METHOD="google.com",fi.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi extends li{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch(pT){return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com",pi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mi="http://localhost";class gi extends Ur{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Yr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new gi(n,i):null}static _create(e,t){return new gi(e,t)}buildRequest(){return{requestUri:mi,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="saml.";class vi extends ui{constructor(e){_n(e.startsWith(yi),"argument-error"),super(e)}static credentialFromResult(e){return vi.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vi.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=gi.fromJSON(e);return _n(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return gi._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends li{constructor(){super("twitter.com")}static credential(e,t){return Jr._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wi.credential(t,n)}catch(pT){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _i(e,t){return Vn(e,"POST","/v1/accounts:signUp",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wi.TWITTER_SIGN_IN_METHOD="twitter.com",wi.PROVIDER_ID="twitter.com";class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await cr._fromIdTokenResponse(e,n,r),s=Ii(n),o=new bi({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ii(n);return new bi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ii(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(e){var t;const n=Dr(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new bi({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _i(n,{returnSecureToken:!0}),i=await bi._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends R{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ei.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ei(e,t,n,r)}}function Si(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ei._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e,t){const n=H(e);await xi(!0,n,t);const{providerUserInfo:r}=await zn(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=ki(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ci(e,t,n=!1){const r=await Xn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bi._forOperation(e,"link",r)}async function xi(e,t,n){await tr(t);const r=ki(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";_n(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await Xn(e,Si(i,s,t,e),n);_n(r.idToken,i,"internal-error");const o=Qn(r.idToken);_n(o,i,"internal-error");const{sub:a}=o;return _n(e.uid===a,i,"user-mismatch"),bi._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&mn(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(e,t,n=!1){const r="signIn",i=await Si(e,r,t),s=await bi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ri(e,t){return Ni(Dr(e),t)}async function Oi(e,t){const n=H(e);return await xi(!1,n,t.providerId),Ci(n,t)}async function Pi(e,t){return Di(H(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t){return Vn(e,"POST","/v1/accounts:signInWithCustomToken",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(e,t){const n=Dr(e),r=await Li(n,{token:t,returnSecureToken:!0}),i=await bi._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Fi._fromServerResponse(e,t):mn(e,"internal-error")}}class Fi extends Ui{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Fi(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e,t,n){var r;_n((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_n("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_n(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_n(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e,t,n){const r=H(e),i={requestType:"PASSWORD_RESET",email:t};n&&Vi(r,i,n),await zr(r,i)}async function qi(e,t,n){await Fr(H(e),{oobCode:t,newPassword:n})}async function ji(e,t){await Br(H(e),{oobCode:t})}async function Gi(e,t){const n=H(e),r=await Fr(n,{oobCode:t}),i=r.requestType;switch(_n(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_n(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_n(r.mfaInfo,n,"internal-error");default:_n(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ui._fromServerResponse(Dr(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function zi(e,t){const{data:n}=await Gi(H(e),t);return n.email}async function Ki(e,t,n){const r=Dr(e),i=await _i(r,{returnSecureToken:!0,email:t,password:n}),s=await bi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function $i(e,t,n){return Ri(H(e),ci.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(e,t,n){const r=H(e),i={requestType:"EMAIL_SIGNIN",email:t};_n(n.handleCodeInApp,r,"argument-error"),n&&Vi(r,i,n),await Kr(r,i)}function Wi(e,t){const n=ai.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Qi(e,t,n){const r=H(e),i=ci.credentialWithLink(t,n||kn());return _n(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ri(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(e,t){return Un(e,"POST","/v1/accounts:createAuthUri",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(e,t){const n=An()?kn():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await Yi(H(e),r);return i||[]}async function Ji(e,t){const n=H(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&Vi(n.auth,i,t);const{email:s}=await Gr(n.auth,i);s!==e.email&&await e.reload()}async function Zi(e,t,n){const r=H(e),i=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&Vi(r.auth,s,n);const{email:o}=await $r(r.auth,s);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e,t){return Un(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=H(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},o=await Xn(r,es(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ns(e,t){return is(H(e),t,null)}function rs(e,t){return is(H(e),null,t)}async function is(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Xn(e,Vr(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Qn(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new os(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new cs(s,i);case"github.com":return new us(s,i);case"google.com":return new ls(s,i);case"twitter.com":return new hs(s,i,e.screenName||null);case"custom":case"anonymous":return new os(s,null);default:return new os(s,r,i)}}class os{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class as extends os{constructor(e,t,n,r){super(e,t,n),this.username=r}}class cs extends os{constructor(e,t){super(e,"facebook.com",t)}}class us extends as{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class ls extends os{constructor(e,t){super(e,"google.com",t)}}class hs extends as{constructor(e,t,n){super(e,"twitter.com",t,n)}}function ds(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ss(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new fs("enroll",e,t)}static _fromMfaPendingCredential(e){return new fs("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return fs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return fs._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Dr(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Ui._fromServerResponse(n,e)));_n(r.mfaPendingCredential,n,"internal-error");const s=fs._fromMfaPendingCredential(r.mfaPendingCredential);return new ps(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await bi._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return _n(t.user,n,"internal-error"),bi._forOperation(t.user,t.operationType,o);default:mn(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ms(e,t){var n;const r=H(e),i=t;return _n(t.customData.operationType,r,"argument-error"),_n(null===(n=i.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),ps._fromError(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e,t){return Un(e,"POST","/v2/accounts/mfaEnrollment:start",Mn(e,t))}function ys(e,t){return Un(e,"POST","/v2/accounts/mfaEnrollment:finalize",Mn(e,t))}function vs(e,t){return Un(e,"POST","/v2/accounts/mfaEnrollment:withdraw",Mn(e,t))}class ws{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Ui._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new ws(e)}async getSession(){return fs._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await Xn(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const n="string"===typeof e?e:e.uid,r=await this.user.getIdToken(),i=await Xn(this.user,vs(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==(null===(t=s)||void 0===t?void 0:t.code))throw s}}}const _s=new WeakMap;function bs(e){const t=H(e);return _s.has(t)||_s.set(t,ws._fromUser(t)),_s.get(t)}const Is="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch(pT){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){const e=d();return mr(e)||br(e)}const Ss=1e3,ks=10;class As extends Ts{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Es()&&kr(),this.fallbackToPolling=Sr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Er()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ks):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ss)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}As.type="LOCAL";const Cs=As;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Ts{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xs.type="SESSION";const Ds=xs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Rs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ns(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Os(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs.receivers=[];class Ps{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Os("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){return window}function Ms(e){Ls().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){return"undefined"!==typeof Ls()["WorkerGlobalScope"]&&"function"===typeof Ls()["importScripts"]}async function Fs(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(pT){return null}}function Vs(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Bs(){return Us()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="firebaseLocalStorageDb",js=1,Gs="firebaseLocalStorage",zs="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $s(e,t){return e.transaction([Gs],t?"readwrite":"readonly").objectStore(Gs)}function Hs(){const e=indexedDB.deleteDatabase(qs);return new Ks(e).toPromise()}function Ws(){const e=indexedDB.open(qs,js);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Gs,{keyPath:zs})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Gs)?t(n):(n.close(),await Hs(),t(await Ws()))}))}))}async function Qs(e,t,n){const r=$s(e,!0).put({[zs]:t,value:n});return new Ks(r).toPromise()}async function Ys(e,t){const n=$s(e,!1).get(t),r=await new Ks(n).toPromise();return void 0===r?null:r.value}function Xs(e,t){const n=$s(e,!0).delete(t);return new Ks(n).toPromise()}const Js=800,Zs=3;class eo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ws()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Zs)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Us()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rs._getInstance(Bs()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fs(),!this.activeServiceWorker)return;this.sender=new Ps(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Vs()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(pT){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ws();return await Qs(e,Is,"1"),await Xs(e,Is),!0}catch(pT){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qs(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Ys(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xs(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$s(e,!1).getAll();return new Ks(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Js)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}eo.type="LOCAL";const to=eo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t){return Un(e,"POST","/v2/accounts/mfaSignIn:start",Mn(e,t))}function ro(e,t){return Un(e,"POST","/v2/accounts/mfaSignIn:finalize",Mn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(e){return(await Un(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function oo(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=gn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",so().appendChild(r)}))}function ao(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=500,uo=6e4,lo=1e12;class ho{constructor(e){this.auth=e,this.counter=lo,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new fo(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||lo;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||lo;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||lo;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class fo{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;_n(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=po(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),uo)}),co))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function po(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=ao("rcb"),go=new Nn(3e4,6e4),yo="https://www.google.com/recaptcha/api.js?";class vo{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Ls().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return _n(wo(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Ls().grecaptcha):new Promise(((n,r)=>{const i=Ls().setTimeout((()=>{r(gn(e,"network-request-failed"))}),go.get());Ls()[mo]=()=>{Ls().clearTimeout(i),delete Ls()[mo];const s=Ls().grecaptcha;if(!s)return void r(gn(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};const s=`${yo}?${B({onload:mo,render:"explicit",hl:t})}`;oo(s).catch((()=>{clearTimeout(i),r(gn(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Ls().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wo(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class _o{async load(e){return new ho(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="recaptcha",Io={theme:"light",type:"image"};class To{constructor(e,t=Object.assign({},Io),n){this.parameters=t,this.type=bo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Dr(n),this.isInvisible="invisible"===this.parameters.size,_n("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;_n(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _o:new vo,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){_n(!this.parameters.sitekey,this.auth,"argument-error"),_n(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_n("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Ls()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){_n(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_n(An()&&!Us(),this.auth,"internal-error"),await Eo(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await io(this.auth);_n(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _n(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Eo(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ii._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ko(e,t,n){const r=Dr(e),i=await xo(r,t,H(n));return new So(i,(e=>Ri(r,e)))}async function Ao(e,t,n){const r=H(e);await xi(!1,r,"phone");const i=await xo(r.auth,t,H(n));return new So(i,(e=>Oi(r,e)))}async function Co(e,t,n){const r=H(e),i=await xo(r.auth,t,H(n));return new So(i,(e=>Pi(r,e)))}async function xo(e,t,n){var r;const i=await n.verify();try{let s;if(_n("string"===typeof i,e,"argument-error"),_n(n.type===bo,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_n("enroll"===t.type,e,"internal-error");const n=await gs(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_n("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_n(n,e,"missing-multi-factor-info");const o=await no(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Zr(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Do(e,t){await Ci(H(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.providerId=No.PROVIDER_ID,this.auth=Dr(e)}verifyPhoneNumber(e,t){return xo(this.auth,e,H(t))}static credential(e,t){return ii._fromVerification(e,t)}static credentialFromResult(e){const t=e;return No.credentialFromTaggedObject(t)}static credentialFromError(e){return No.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ii._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(e,t){return t?En(t):(_n(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */No.PROVIDER_ID="phone",No.PHONE_SIGN_IN_METHOD="phone";class Oo extends Ur{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Po(e){return Ni(e.auth,new Oo(e),e.bypassAuthState)}function Lo(e){const{auth:t,user:n}=e;return _n(n,t,"internal-error"),Di(n,new Oo(e),e.bypassAuthState)}async function Mo(e){const{auth:t,user:n}=e;return _n(n,t,"internal-error"),Ci(n,new Oo(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Po;case"linkViaPopup":case"linkViaRedirect":return Mo;case"reauthViaPopup":case"reauthViaRedirect":return Lo;default:mn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Nn(2e3,1e4);async function Vo(e,t,n){const r=Dr(e);vn(e,t,ui);const i=Ro(r,n),s=new jo(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Bo(e,t,n){const r=H(e);vn(r.auth,t,ui);const i=Ro(r.auth,n),s=new jo(r.auth,"reauthViaPopup",t,i,r);return s.executeNotNull()}async function qo(e,t,n){const r=H(e);vn(r.auth,t,ui);const i=Ro(r.auth,n),s=new jo(r.auth,"linkViaPopup",t,i,r);return s.executeNotNull()}class jo extends Uo{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _n(e,this.auth,"internal-error"),e}async onExecution(){In(1===this.filter.length,"Popup operations only handle one event");const e=Os();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(gn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Fo.get())};e()}}jo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Go="pendingRedirect",zo=new Map;class Ko extends Uo{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const t=await $o(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function $o(e,t){const n=Xo(t),r=Yo(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Ho(e,t){return Yo(e)._set(Xo(t),"true")}function Wo(){zo.clear()}function Qo(e,t){zo.set(e._key(),t)}function Yo(e){return En(e._redirectPersistence)}function Xo(e){return hr(Go,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e,t,n){return Zo(e,t,n)}async function Zo(e,t,n){const r=Dr(e);vn(e,t,ui);const i=Ro(r,n);return await Ho(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ea(e,t,n){return ta(e,t,n)}async function ta(e,t,n){const r=H(e);vn(r.auth,t,ui);const i=Ro(r.auth,n);await Ho(i,r.auth);const s=await oa(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}function na(e,t,n){return ra(e,t,n)}async function ra(e,t,n){const r=H(e);vn(r.auth,t,ui);const i=Ro(r.auth,n);await xi(!1,r,t.providerId),await Ho(i,r.auth);const s=await oa(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function ia(e,t){return await Dr(e)._initializationPromise,sa(e,t,!1)}async function sa(e,t,n=!1){const r=Dr(e),i=Ro(r,t),s=new Ko(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function oa(e){const t=Os(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=6e5;class ca{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!ha(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!la(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(gn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aa&&this.cachedEventUids.clear(),this.cachedEventUids.has(ua(e))}saveEventToCache(e){this.cachedEventUids.add(ua(e)),this.lastProcessedEventTime=Date.now()}}function ua(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function la({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ha(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return la(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(e,t={}){return Un(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pa=/^https?/;async function ma(e){if(e.config.emulator)return;const{authorizedDomains:t}=await da(e);for(const n of t)try{if(ga(n))return}catch(pT){}mn(e,"unauthorized-domain")}function ga(e){const t=kn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pa.test(n))return!1;if(fa.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Nn(3e4,6e4);function va(){const e=Ls().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function wa(e){return new Promise(((t,n)=>{var r,i,s;function o(){va(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{va(),n(gn(e,"network-request-failed"))},timeout:ya.get()})}if(null===(i=null===(r=Ls().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ls().gapi)||void 0===s?void 0:s.load)){const t=ao("iframefcb");return Ls()[t]=()=>{gapi.load?o():n(gn(e,"network-request-failed"))},oo(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw _a=null,e}))}let _a=null;function ba(e){return _a=_a||wa(e),_a}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Nn(5e3,15e3),Ta="__/auth/iframe",Ea="emulator/auth/iframe",Sa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ka=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Aa(e){const t=e.config;_n(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rn(t,Ea):`https://${e.config.authDomain}/${Ta}`,r={apiKey:t.apiKey,appName:e.name,v:bt},i=ka.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${B(r).slice(1)}`}async function Ca(e){const t=await ba(e),n=Ls().gapi;return _n(n,e,"internal-error"),t.open({where:document.body,url:Aa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sa,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=gn(e,"network-request-failed"),s=Ls().setTimeout((()=>{r(i)}),Ia.get());function o(){Ls().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Da=500,Na=600,Ra="_blank",Oa="http://localhost";class Pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function La(e,t,n,r=Da,i=Na){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xa),{width:r.toString(),height:i.toString(),top:s,left:o}),u=d().toLowerCase();n&&(a=gr(u)?Ra:n),pr(u)&&(t=t||Oa,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Tr(u)&&"_self"!==a)return Ma(t||"",a),new Pa(null);const h=window.open(t||"",a,l);_n(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Pa(h)}function Ma(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="__/auth/handler",Fa="emulator/auth/handler";function Va(e,t,n,r,i,s){_n(e.config.authDomain,e,"auth-domain-config-required"),_n(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:bt,eventId:i};if(t instanceof ui){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",U(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof li){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${Ba(e)}?${B(a).slice(1)}`}function Ba({config:e}){return e.emulator?Rn(e,Fa):`https://${e.authDomain}/${Ua}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class ja{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ds,this._completeRedirectFn=sa,this._overrideRedirectResult=Qo}async _openPopup(e,t,n,r){var i;In(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Va(e,t,n,kn(),r);return La(e,s,Os())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ms(Va(e,t,n,kn(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(In(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ca(e),n=new ca(e);return t.register("authEvent",(t=>{_n(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(qa,{type:qa},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[qa];void 0!==i&&t(!!i),mn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ma(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sr()||mr()||br()}}const Ga=ja;class za{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return bn("unexpected MultiFactorSessionType")}}}class Ka extends za{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ka(e)}_finalizeEnroll(e,t,n){return ys(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ro(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $a{constructor(){}static assertion(e){return Ka._fromCredential(e)}}$a.FACTOR_ID="phone";var Ha="@firebase/auth",Wa="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_n(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xa(e){pt(new W("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{_n(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),_n(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ar(e)},a=new xr(t,r,i);return Sn(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),pt(new W("auth-internal",(e=>{const t=Dr(e.getProvider("auth").getImmediate());return(e=>new Qa(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Ha,Wa,Ya(e)),kt(Ha,Wa,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=300;C("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Za(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xa("Browser");const ec=2e3;async function tc(e,t,n){var r;const{BuildInfo:i}=Za();In(t.sessionId,"AuthEvent did not contain a session ID");const s=await oc(t.sessionId),o={};return br()?o["ibi"]=i.packageName:vr()?o["apn"]=i.packageName:mn(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Va(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function nc(e){const{BuildInfo:t}=Za(),n={};br()?n.iosBundleId=t.packageName:vr()?n.androidPackageName=t.packageName:mn(e,"operation-not-supported-in-this-environment"),await da(e,n)}function rc(e){const{cordova:t}=Za();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ir()?"_blank":"_system","location=yes"),n(i)}))}))}async function ic(e,t,n){const{cordova:r}=Za();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(gn(e,"redirect-cancelled-by-user"))}),ec))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),vr()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function sc(e){var t,n,r,i,s,o,a,c,u,l;const h=Za();_n("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),_n("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),_n("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_n("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_n("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function oc(e){const t=ac(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function ac(e){if(In(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=20;class uc extends ca{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function lc(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:pc(),postBody:null,tenantId:e.tenantId,error:gn(e,"no-auth-event")}}function hc(e,t){return mc()._set(gc(e),t)}async function dc(e){const t=await mc()._get(gc(e));return t&&await mc()._remove(gc(e)),t}function fc(e,t){var n,r;const i=vc(t);if(i.includes("/__/auth/callback")){const t=wc(i),s=t["firebaseError"]?yc(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?gn(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function pc(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cc;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function mc(){return En(Cs)}function gc(e){return hr("authEvent",e.config.apiKey,e.name)}function yc(e){try{return JSON.parse(e)}catch(t){return null}}function vc(e){const t=wc(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=wc(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=wc(i)["link"];return s||i||r||n||e}function wc(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return q(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=500;class bc{constructor(){this._redirectPersistence=Ds,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sa,this._overrideRedirectResult=Qo}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new uc(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){mn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){sc(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Wo(),await this._originValidation(e);const s=lc(e,n,r);await hc(e,s);const o=await tc(e,s,t),a=await rc(o);return ic(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nc(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Za(),s=setTimeout((async()=>{await dc(e),t.onEvent(Tc())}),_c),o=async n=>{clearTimeout(s);const r=await dc(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=fc(r,n["url"])),t.onEvent(i||Tc())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;Za().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Ic=bc;function Tc(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:gn("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e,t){Dr(e)._logFramework(t)}var Sc="@firebase/auth-compat",kc="0.2.24";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ac=1e3;function Cc(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function xc(){return"http:"===Cc()||"https:"===Cc()}function Dc(e=d()){return!("file:"!==Cc()&&"ionic:"!==Cc()&&"capacitor:"!==Cc()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Nc(){return y()||p()}function Rc(){return v()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Oc(e=d()){return/Edge\/\d+/.test(e)}function Pc(e=d()){return Rc()||Oc(e)}function Lc(){try{const e=self.localStorage,t=Os();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Pc()||_()}catch(e){return Mc()&&_()}return!1}function Mc(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Uc(){return(xc()||g()||Dc())&&!Nc()&&Lc()&&!Mc()}function Fc(){return Dc()&&"undefined"!==typeof document}async function Vc(){return!!Fc()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Ac);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Bc(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc={LOCAL:"local",NONE:"none",SESSION:"session"},jc=_n,Gc="persistence";function zc(e,t){jc(Object.values(qc).includes(t),e,"invalid-persistence-type"),y()?jc(t!==qc.SESSION,e,"unsupported-persistence-type"):p()?jc(t===qc.NONE,e,"unsupported-persistence-type"):Mc()?jc(t===qc.NONE||t===qc.LOCAL&&_(),e,"unsupported-persistence-type"):jc(t===qc.NONE||Lc(),e,"unsupported-persistence-type")}async function Kc(e){await e._initializationPromise;const t=Hc(),n=hr(Gc,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function $c(e,t){const n=Hc();if(!n)return[];const r=hr(Gc,e,t),i=n.getItem(r);switch(i){case qc.NONE:return[lr];case qc.LOCAL:return[to,Ds];case qc.SESSION:return[Ds];default:return[]}}function Hc(){var e;try{return(null===(e=Bc())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=_n;class Qc{constructor(){this.browserResolver=En(Ga),this.cordovaResolver=En(Ic),this.underlyingResolver=null,this._redirectPersistence=Ds,this._completeRedirectFn=sa,this._overrideRedirectResult=Qo}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Fc()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Wc(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Vc();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(e){return e.unwrap()}function Xc(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(e){return eu(e)}function Zc(e,t){var n,r;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){const n=t;n.resolver=new ru(e,ms(e,t))}else if(i){const e=eu(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function eu(e){const{_tokenResponse:t}=e instanceof R?e.customData:e;if(!t)return null;if(!(e instanceof R)&&"temporaryProof"in t&&"phoneNumber"in t)return No.credentialFromResult(e);const n=t.providerId;if(!n||n===on.PASSWORD)return null;let r;switch(n){case on.GOOGLE:r=fi;break;case on.FACEBOOK:r=di;break;case on.GITHUB:r=pi;break;case on.TWITTER:r=wi;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?gi._create(n,o):Jr._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new hi(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof R?r.credentialFromError(e):r.credentialFromResult(e)}function tu(e,t){return t.catch((t=>{throw t instanceof R&&Zc(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:Jc(e),additionalUserInfo:ds(e),user:iu.getOrCreate(n)}}))}async function nu(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>tu(e,n.confirm(t))}}class ru{constructor(e,t){this.resolver=t,this.auth=Xc(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return tu(Yc(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this._delegate=e,this.multiFactor=bs(e)}static getOrCreate(e){return iu.USER_MAP.has(e)||iu.USER_MAP.set(e,new iu(e)),iu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return tu(this.auth,Oi(this._delegate,e))}async linkWithPhoneNumber(e,t){return nu(this.auth,Ao(this._delegate,e,t))}async linkWithPopup(e){return tu(this.auth,qo(this._delegate,e,Qc))}async linkWithRedirect(e){return await Kc(Dr(this.auth)),na(this._delegate,e,Qc)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return tu(this.auth,Pi(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return nu(this.auth,Co(this._delegate,e,t))}reauthenticateWithPopup(e){return tu(this.auth,Bo(this._delegate,e,Qc))}async reauthenticateWithRedirect(e){return await Kc(Dr(this.auth)),ea(this._delegate,e,Qc)}sendEmailVerification(e){return Ji(this._delegate,e)}async unlink(e){return await Ai(this._delegate,e),this}updateEmail(e){return ns(this._delegate,e)}updatePassword(e){return rs(this._delegate,e)}updatePhoneNumber(e){return Do(this._delegate,e)}updateProfile(e){return ts(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Zi(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}iu.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const su=_n;class ou{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;su(n,"invalid-api-key",{appName:e.name}),su(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Qc:void 0;this._delegate=t.initialize({options:{persistence:cu(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(ln),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?iu.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Rr(this._delegate,e,t)}applyActionCode(e){return ji(this._delegate,e)}checkActionCode(e){return Gi(this._delegate,e)}confirmPasswordReset(e,t){return qi(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return tu(this._delegate,Ki(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Xi(this._delegate,e)}isSignInWithEmailLink(e){return Wi(this._delegate,e)}async getRedirectResult(){su(Uc(),this._delegate,"operation-not-supported-in-this-environment");const e=await ia(this._delegate,Qc);return e?tu(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ec(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=au(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=au(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Hi(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Bi(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(zc(this._delegate,e),e){case qc.SESSION:t=Ds;break;case qc.LOCAL:const e=await En(to)._isAvailable();t=e?to:Cs;break;case qc.NONE:t=lr;break;default:return mn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return tu(this._delegate,Ti(this._delegate))}signInWithCredential(e){return tu(this._delegate,Ri(this._delegate,e))}signInWithCustomToken(e){return tu(this._delegate,Mi(this._delegate,e))}signInWithEmailAndPassword(e,t){return tu(this._delegate,$i(this._delegate,e,t))}signInWithEmailLink(e,t){return tu(this._delegate,Qi(this._delegate,e,t))}signInWithPhoneNumber(e,t){return nu(this._delegate,ko(this._delegate,e,t))}async signInWithPopup(e){return su(Uc(),this._delegate,"operation-not-supported-in-this-environment"),tu(this._delegate,Vo(this._delegate,e,Qc))}async signInWithRedirect(e){return su(Uc(),this._delegate,"operation-not-supported-in-this-environment"),await Kc(this._delegate),Jo(this._delegate,e,Qc)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return zi(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function au(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&iu.getOrCreate(e));return{next:s,error:t,complete:n}}function cu(e,t){const n=$c(e,t);if("undefined"===typeof self||n.includes(to)||n.push(to),"undefined"!==typeof window)for(const r of[Cs,Ds])n.includes(r)||n.push(r);return n.includes(lr)||n.push(lr),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ou.Persistence=qc;class uu{constructor(){this.providerId="phone",this._delegate=new No(Yc(tn.auth()))}static credential(e,t){return No.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}uu.PHONE_SIGN_IN_METHOD=No.PHONE_SIGN_IN_METHOD,uu.PROVIDER_ID=No.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lu=_n;class hu{constructor(e,t,n=tn.app()){var r;lu(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new To(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="auth-compat";function fu(e){e.INTERNAL.registerComponent(new W(du,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new ou(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:an.EMAIL_SIGNIN,PASSWORD_RESET:an.PASSWORD_RESET,RECOVER_EMAIL:an.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:an.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:an.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:an.VERIFY_EMAIL}},EmailAuthProvider:ci,FacebookAuthProvider:di,GithubAuthProvider:pi,GoogleAuthProvider:fi,OAuthProvider:hi,SAMLAuthProvider:vi,PhoneAuthProvider:uu,PhoneMultiFactorGenerator:$a,RecaptchaVerifier:hu,TwitterAuthProvider:wi,Auth:ou,AuthCredential:Ur,Error:R}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Sc,kc)}fu(tn);var pu,mu="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},gu={},yu=yu||{},vu=mu||self;function wu(){}function _u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function bu(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function Iu(e){return Object.prototype.hasOwnProperty.call(e,Tu)&&e[Tu]||(e[Tu]=++Eu)}var Tu="closure_uid_"+(1e9*Math.random()>>>0),Eu=0;function Su(e,t,n){return e.call.apply(e.bind,arguments)}function ku(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Au(e,t,n){return Au=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Su:ku,Au.apply(null,arguments)}function Cu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function xu(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Du(){this.s=this.s,this.o=this.o}var Nu=0;Du.prototype.s=!1,Du.prototype.na=function(){this.s||(this.s=!0,this.M(),0==Nu)||Iu(this)},Du.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ru=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ou(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Pu(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(_u(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function Lu(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Lu.prototype.h=function(){this.defaultPrevented=!0};var Mu=function(){if(!vu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{vu.addEventListener("test",wu,t),vu.removeEventListener("test",wu,t)}catch(n){}return e}();function Uu(e){return/^[\s\xa0]*$/.test(e)}var Fu=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Vu(e,t){return e<t?-1:e>t?1:0}function Bu(){var e=vu.navigator;return e&&(e=e.userAgent)?e:""}function qu(e){return-1!=Bu().indexOf(e)}function ju(e){return ju[" "](e),e}function Gu(e){var t=nl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}ju[" "]=wu;var zu,Ku=qu("Opera"),$u=qu("Trident")||qu("MSIE"),Hu=qu("Edge"),Wu=Hu||$u,Qu=qu("Gecko")&&!(-1!=Bu().toLowerCase().indexOf("webkit")&&!qu("Edge"))&&!(qu("Trident")||qu("MSIE"))&&!qu("Edge"),Yu=-1!=Bu().toLowerCase().indexOf("webkit")&&!qu("Edge");function Xu(){var e=vu.document;return e?e.documentMode:void 0}e:{var Ju="",Zu=function(){var e=Bu();return Qu?/rv:([^\);]+)(\)|;)/.exec(e):Hu?/Edge\/([\d\.]+)/.exec(e):$u?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Yu?/WebKit\/(\S+)/.exec(e):Ku?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Zu&&(Ju=Zu?Zu[1]:""),$u){var el=Xu();if(null!=el&&el>parseFloat(Ju)){zu=String(el);break e}}zu=Ju}var tl,nl={};function rl(){return Gu((function(){let e=0;const t=Fu(String(zu)).split("."),n=Fu("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Vu(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Vu(0==i[2].length,0==s[2].length)||Vu(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(vu.document&&$u){var il=Xu();tl=il||(parseInt(zu,10)||void 0)}else tl=void 0;var sl=tl;function ol(e,t){if(Lu.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Qu){e:{try{ju(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:al[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ol.X.h.call(this)}}xu(ol,Lu);var al={2:"touch",3:"pen",4:"mouse"};ol.prototype.h=function(){ol.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var cl="closure_listenable_"+(1e6*Math.random()|0),ul=0;function ll(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ul,this.ba=this.ea=!1}function hl(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function dl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function fl(e){const t={};for(const n in e)t[n]=e[n];return t}const pl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ml(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<pl.length;t++)n=pl[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function gl(e){this.src=e,this.g={},this.h=0}function yl(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Ru(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(hl(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function vl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}gl.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=vl(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ll(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var wl="closure_lm_"+(1e6*Math.random()|0),_l={};function bl(e,t,n,r,i){if(r&&r.once)return El(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)bl(e,t[s],n,r,i);return null}return n=Nl(n),e&&e[cl]?e.N(t,n,bu(r)?!!r.capture:!!r,i):Il(e,t,n,!1,r,i)}function Il(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=bu(i)?!!i.capture:!!i,a=xl(e);if(a||(e[wl]=a=new gl(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Tl(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Mu||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Al(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Tl(){function e(n){return t.call(e.src,e.listener,n)}const t=Cl;return e}function El(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)El(e,t[s],n,r,i);return null}return n=Nl(n),e&&e[cl]?e.O(t,n,bu(r)?!!r.capture:!!r,i):Il(e,t,n,!0,r,i)}function Sl(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Sl(e,t[s],n,r,i);else r=bu(r)?!!r.capture:!!r,n=Nl(n),e&&e[cl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=vl(s,n,r,i),-1<n&&(hl(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=xl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=vl(t,n,r,i)),(n=-1<e?t[e]:null)&&kl(n))}function kl(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[cl])yl(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Al(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=xl(t))?(yl(n,e),0==n.h&&(n.src=null,t[wl]=null)):hl(e)}}}function Al(e){return e in _l?_l[e]:_l[e]="on"+e}function Cl(e,t){if(e.ba)e=!0;else{t=new ol(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&kl(e),e=n.call(r,t)}return e}function xl(e){return e=e[wl],e instanceof gl?e:null}var Dl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nl(e){return"function"===typeof e?e:(e[Dl]||(e[Dl]=function(t){return e.handleEvent(t)}),e[Dl])}function Rl(){Du.call(this),this.i=new gl(this),this.P=this,this.I=null}function Ol(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new Lu(t,e);else if(t instanceof Lu)t.target=t.target||e;else{var i=t;t=new Lu(r,e),ml(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pl(o,r,!0,t)&&i}if(o=t.g=e,i=Pl(o,r,!0,t)&&i,i=Pl(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Pl(o,r,!1,t)&&i}function Pl(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&yl(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}xu(Rl,Du),Rl.prototype[cl]=!0,Rl.prototype.removeEventListener=function(e,t,n,r){Sl(this,e,t,n,r)},Rl.prototype.M=function(){if(Rl.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hl(n[r]);delete t.g[e],t.h--}}this.I=null},Rl.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Rl.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ll=vu.JSON.stringify;function Ml(){var e=Kl;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ul{constructor(){this.h=this.g=null}add(e,t){const n=Vl.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fl,Vl=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Bl),(e=>e.reset()));class Bl{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ql(e){vu.setTimeout((()=>{throw e}),0)}function jl(e,t){Fl||Gl(),zl||(Fl(),zl=!0),Kl.add(e,t)}function Gl(){var e=vu.Promise.resolve(void 0);Fl=function(){e.then($l)}}var zl=!1,Kl=new Ul;function $l(){for(var e;e=Ml();){try{e.h.call(e.g)}catch(n){ql(n)}var t=Vl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}zl=!1}function Hl(e,t){Rl.call(this),this.h=e||1,this.g=t||vu,this.j=Au(this.lb,this),this.l=Date.now()}function Wl(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ql(e,t,n){if("function"===typeof e)n&&(e=Au(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Au(e.handleEvent,e)}return 2147483647<Number(t)?-1:vu.setTimeout(e,t||0)}function Yl(e){e.g=Ql((()=>{e.g=null,e.i&&(e.i=!1,Yl(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}xu(Hl,Rl),pu=Hl.prototype,pu.ca=!1,pu.R=null,pu.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ol(this,"tick"),this.ca&&(Wl(this),this.start()))}},pu.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},pu.M=function(){Hl.X.M.call(this),Wl(this),delete this.g};class Xl extends Du{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yl(this)}M(){super.M(),this.g&&(vu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jl(e){Du.call(this),this.h=e,this.g={}}xu(Jl,Du);var Zl=[];function eh(e,t,n,r){Array.isArray(n)||(n&&(Zl[0]=n.toString()),n=Zl);for(var i=0;i<n.length;i++){var s=bl(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function th(e){dl(e.g,(function(e,t){this.g.hasOwnProperty(t)&&kl(e)}),e),e.g={}}function nh(){this.g=!0}function rh(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function ih(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function sh(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ah(e,n)+(r?" "+r:"")}))}function oh(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ah(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ll(n)}catch(a){return t}}Jl.prototype.M=function(){Jl.X.M.call(this),th(this)},Jl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},nh.prototype.Aa=function(){this.g=!1},nh.prototype.info=function(){};var ch={},uh=null;function lh(){return uh=uh||new Rl}function hh(e){Lu.call(this,ch.Pa,e)}function dh(e){const t=lh();Ol(t,new hh(t))}function fh(e,t){Lu.call(this,ch.STAT_EVENT,e),this.stat=t}function ph(e){const t=lh();Ol(t,new fh(t,e))}function mh(e,t){Lu.call(this,ch.Qa,e),this.size=t}function gh(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return vu.setTimeout((function(){e()}),t)}ch.Pa="serverreachability",xu(hh,Lu),ch.STAT_EVENT="statevent",xu(fh,Lu),ch.Qa="timingevent",xu(mh,Lu);var yh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},vh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wh(){}function _h(e){return e.h||(e.h=e.i())}function bh(){}wh.prototype.h=null;var Ih,Th={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Eh(){Lu.call(this,"d")}function Sh(){Lu.call(this,"c")}function kh(){}function Ah(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Jl(this),this.O=xh,e=Wu?125:void 0,this.T=new Hl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ch}function Ch(){this.i=null,this.g="",this.h=!1}xu(Eh,Lu),xu(Sh,Lu),xu(kh,wh),kh.prototype.g=function(){return new XMLHttpRequest},kh.prototype.i=function(){return{}},Ih=new kh;var xh=45e3,Dh={},Nh={};function Rh(e,t,n){e.K=1,e.v=ed(Qh(t)),e.s=n,e.P=!0,Oh(e,null)}function Oh(e,t){e.F=Date.now(),Uh(e),e.A=Qh(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),fd(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Ch,e.g=vf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Xl(Au(e.La,e,e.g),e.N)),eh(e.S,e.g,"readystatechange",e.ib),t=e.H?fl(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),dh(),rh(e.j,e.u,e.A,e.m,e.U,e.s)}function Ph(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Lh(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Mh(e,n),r==Nh){4==t&&(e.o=4,ph(14),i=!1),sh(e.j,e.m,null,"[Incomplete Response]");break}if(r==Dh){e.o=4,ph(15),sh(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}sh(e.j,e.m,r,null),jh(e,r)}Ph(e)&&r!=Nh&&r!=Dh&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ph(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lf(t),t.K=!0,ph(11))):(sh(e.j,e.m,n,"[Invalid Chunked Response]"),qh(e),Bh(e))}function Mh(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Nh:(n=Number(t.substring(n,r)),isNaN(n)?Dh:(r+=1,r+n>t.length?Nh:(t=t.substr(r,n),e.C=r+n,t)))}function Uh(e){e.V=Date.now()+e.O,Fh(e,e.O)}function Fh(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=gh(Au(e.gb,e),t)}function Vh(e){e.B&&(vu.clearTimeout(e.B),e.B=null)}function Bh(e){0==e.l.G||e.I||ff(e.l,e)}function qh(e){Vh(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Wl(e.T),th(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jh(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||bd(n.h,e)))if(!e.J&&bd(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;df(n),ef(n)}uf(n),ph(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=gh(Au(n.cb,n),6e3));if(1>=_d(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else mf(n,11)}else if((e.J||n.g==e)&&df(n),!Uu(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Id(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Zh(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=yf(r,r.H?r.ka:null,r.V),o.J){Td(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Vh(a),Uh(a)),r.g=o}else cf(r);0<n.i.length&&nf(n)}else"stop"!=u[0]&&"close"!=u[0]||mf(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mf(n,7):Zd(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}dh(4)}catch(u){}}function Gh(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(_u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function zh(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(_u(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Kh(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(_u(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=zh(e),r=Gh(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}pu=Ah.prototype,pu.setTimeout=function(e){this.O=e},pu.ib=function(e){e=e.target;const t=this.L;t&&3==Hd(e)?t.l():this.La(e)},pu.La=function(e){try{if(e==this.g)e:{const l=Hd(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(3!=l||Wu||this.g&&(this.h.h||this.g.fa()||Wd(this.g)))){this.I||4!=l||7==t||dh(8==t||0>=h?3:2),Vh(this);var n=this.g.aa();this.Y=n;t:if(Ph(this)){var r=Wd(this.g);e="";var i=r.length,s=4==Hd(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){qh(this),Bh(this);var o="";break t}this.h.i=new vu.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,ih(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uu(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ph(12),qh(this),Bh(this);break e}sh(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jh(this,n)}this.P?(Lh(this,l,o),Wu&&this.i&&3==l&&(eh(this.S,this.T,"tick",this.hb),this.T.start())):(sh(this.j,this.m,o,null),jh(this,o)),4==l&&qh(this),this.i&&!this.I&&(4==l?ff(this.l,this):(this.i=!1,Uh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ph(12)):(this.o=0,ph(13)),qh(this),Bh(this)}}}catch(l){}},pu.hb=function(){if(this.g){var e=Hd(this.g),t=this.g.fa();this.C<t.length&&(Vh(this),Lh(this,e,t),this.i&&4!=e&&Uh(this))}},pu.cancel=function(){this.I=!0,qh(this)},pu.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(oh(this.j,this.A),2!=this.K&&(dh(),ph(17)),qh(this),this.o=2,Bh(this)):Fh(this,this.V-e)};var $h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wh(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wh){this.h=void 0!==t?t:e.h,Yh(this,e.j),this.s=e.s,this.g=e.g,Xh(this,e.m),this.l=e.l,t=e.i;var n=new ud;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Jh(this,n),this.o=e.o}else e&&(n=String(e).match($h))?(this.h=!!t,Yh(this,n[1]||"",!0),this.s=td(n[2]||""),this.g=td(n[3]||"",!0),Xh(this,n[4]),this.l=td(n[5]||"",!0),Jh(this,n[6]||"",!0),this.o=td(n[7]||"")):(this.h=!!t,this.i=new ud(null,this.h))}function Qh(e){return new Wh(e)}function Yh(e,t,n){e.j=n?td(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xh(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Jh(e,t,n){t instanceof ud?(e.i=t,md(e.i,e.h)):(n||(t=nd(t,ad)),e.i=new ud(t,e.h))}function Zh(e,t,n){e.i.set(t,n)}function ed(e){return Zh(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function td(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nd(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,rd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Wh.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nd(t,id,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(nd(t,id,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(nd(n,"/"==n.charAt(0)?od:sd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nd(n,cd)),e.join("")};var id=/[#\/\?@]/g,sd=/[#\?:]/g,od=/[#\?]/g,ad=/[#\?@]/g,cd=/#/g;function ud(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ld(e){e.g||(e.g=new Map,e.h=0,e.i&&Hh(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hd(e,t){ld(e),t=pd(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function dd(e,t){return ld(e),t=pd(e,t),e.g.has(t)}function fd(e,t,n){hd(e,t),0<n.length&&(e.i=null,e.g.set(pd(e,t),Ou(n)),e.h+=n.length)}function pd(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function md(e,t){t&&!e.j&&(ld(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hd(this,t),fd(this,n,e))}),e)),e.j=t}pu=ud.prototype,pu.add=function(e,t){ld(this),this.i=null,e=pd(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},pu.forEach=function(e,t){ld(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},pu.oa=function(){ld(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},pu.W=function(e){ld(this);let t=[];if("string"===typeof e)dd(this,e)&&(t=t.concat(this.g.get(pd(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},pu.set=function(e,t){return ld(this),this.i=null,e=pd(this,e),dd(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},pu.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},pu.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var gd=class{constructor(e,t){this.h=e,this.g=t}};function yd(e){this.l=e||vd,vu.PerformanceNavigationTiming?(e=vu.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(vu.g&&vu.g.Ga&&vu.g.Ga()&&vu.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vd=10;function wd(e){return!!e.h||!!e.g&&e.g.size>=e.j}function _d(e){return e.h?1:e.g?e.g.size:0}function bd(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Id(e,t){e.g?e.g.add(t):e.h=t}function Td(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ed(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ou(e.i)}function Sd(){}function kd(){this.g=new Sd}function Ad(e,t,n){const r=n||"";try{Kh(e,(function(e,n){let i=e;bu(e)&&(i=Ll(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cd(e,t){const n=new nh;if(vu.Image){const r=new Image;r.onload=Cu(xd,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Cu(xd,n,r,"TestLoadImage: error",!1,t),r.onabort=Cu(xd,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Cu(xd,n,r,"TestLoadImage: timeout",!1,t),vu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function xd(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Dd(e){this.l=e.ac||null,this.j=e.jb||!1}function Nd(e,t){Rl.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Rd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yd.prototype.cancel=function(){if(this.i=Ed(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Sd.prototype.stringify=function(e){return vu.JSON.stringify(e,void 0)},Sd.prototype.parse=function(e){return vu.JSON.parse(e,void 0)},xu(Dd,wh),Dd.prototype.g=function(){return new Nd(this.l,this.j)},Dd.prototype.i=function(e){return function(){return e}}({}),xu(Nd,Rl);var Rd=0;function Od(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Pd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ld(e)}function Ld(e){e.onreadystatechange&&e.onreadystatechange.call(e)}pu=Nd.prototype,pu.open=function(e,t){if(this.readyState!=Rd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ld(this)},pu.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||vu).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},pu.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pd(this)),this.readyState=Rd},pu.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ld(this)),this.g&&(this.readyState=3,Ld(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof vu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Od(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},pu.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pd(this):Ld(this),3==this.readyState&&Od(this)}},pu.Va=function(e){this.g&&(this.response=this.responseText=e,Pd(this))},pu.Ua=function(e){this.g&&(this.response=e,Pd(this))},pu.ga=function(){this.g&&Pd(this)},pu.setRequestHeader=function(e,t){this.v.append(e,t)},pu.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},pu.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Md=vu.JSON.parse;function Ud(e){Rl.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fd,this.K=this.L=!1}xu(Ud,Rl);var Fd="",Vd=/^https?$/i,Bd=["POST","PUT"];function qd(e){return $u&&rl()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function jd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gd(e),Kd(e)}function Gd(e){e.D||(e.D=!0,Ol(e,"complete"),Ol(e,"error"))}function zd(e){if(e.h&&"undefined"!=typeof yu&&(!e.C[1]||4!=Hd(e)||2!=e.aa()))if(e.v&&4==Hd(e))Ql(e.Ha,0,e);else if(Ol(e,"readystatechange"),4==Hd(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match($h)[1]||null;if(!i&&vu.self&&vu.self.location){var s=vu.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vd.test(i?i.toLowerCase():"")}n=r}if(n)Ol(e,"complete"),Ol(e,"success");else{e.m=6;try{var o=2<Hd(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Gd(e)}}finally{Kd(e)}}}function Kd(e,t){if(e.g){$d(e);const r=e.g,i=e.C[0]?wu:null;e.g=null,e.C=null,t||Ol(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function $d(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(vu.clearTimeout(e.A),e.A=null)}function Hd(e){return e.g?e.g.readyState:0}function Wd(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Pf){return null}}function Qd(e){let t="";return dl(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Yd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Qd(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Zh(e,t,n))}function Xd(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Jd(e){this.Ca=0,this.i=[],this.j=new nh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xd("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xd("baseRetryDelayMs",5e3,e),this.bb=Xd("retryDelaySeedMs",1e4,e),this.$a=Xd("forwardChannelMaxRetries",2,e),this.ta=Xd("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new yd(e&&e.concurrentRequestLimit),this.Fa=new kd,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Zd(e){if(tf(e),3==e.G){var t=e.U++,n=Qh(e.F);Zh(n,"SID",e.I),Zh(n,"RID",t),Zh(n,"TYPE","terminate"),of(e,n),t=new Ah(e,e.j,t,void 0),t.K=2,t.v=ed(Qh(n)),n=!1,vu.navigator&&vu.navigator.sendBeacon&&(n=vu.navigator.sendBeacon(t.v.toString(),"")),!n&&vu.Image&&((new Image).src=t.v,n=!0),n||(t.g=vf(t.l,null),t.g.da(t.v)),t.F=Date.now(),Uh(t)}gf(e)}function ef(e){e.g&&(lf(e),e.g.cancel(),e.g=null)}function tf(e){ef(e),e.u&&(vu.clearTimeout(e.u),e.u=null),df(e),e.h.cancel(),e.m&&("number"===typeof e.m&&vu.clearTimeout(e.m),e.m=null)}function nf(e){wd(e.h)||e.m||(e.m=!0,jl(e.Ja,e),e.C=0)}function rf(e,t){return!(_d(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=gh(Au(e.Ja,e,t),pf(e,e.C)),e.C++,!0))}function sf(e,t){var n;n=t?t.m:e.U++;const r=Qh(e.F);Zh(r,"SID",e.I),Zh(r,"RID",n),Zh(r,"AID",e.T),of(e,r),e.o&&e.s&&Yd(r,e.o,e.s),n=new Ah(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=af(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Id(e.h,n),Rh(n,r,t)}function of(e,t){e.ia&&dl(e.ia,(function(e,n){Zh(t,n,e)})),e.l&&Kh({},(function(e,n){Zh(t,n,e)}))}function af(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Au(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Ad(a,e,"req"+n+"_")}catch($f){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function cf(e){e.g||e.u||(e.Z=1,jl(e.Ia,e),e.A=0)}function uf(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=gh(Au(e.Ia,e),pf(e,e.A)),e.A++,!0)}function lf(e){null!=e.B&&(vu.clearTimeout(e.B),e.B=null)}function hf(e){e.g=new Ah(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Qh(e.sa);Zh(t,"RID","rpc"),Zh(t,"SID",e.I),Zh(t,"CI",e.L?"0":"1"),Zh(t,"AID",e.T),Zh(t,"TYPE","xmlhttp"),of(e,t),e.o&&e.s&&Yd(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ed(Qh(t)),n.s=null,n.P=!0,Oh(n,e)}function df(e){null!=e.v&&(vu.clearTimeout(e.v),e.v=null)}function ff(e,t){var n=null;if(e.g==t){df(e),lf(e),e.g=null;var r=2}else{if(!bd(e.h,t))return;n=t.D,Td(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=lh(),Ol(r,new mh(r,n)),nf(e)}else cf(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&rf(e,t)||2==r&&uf(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:mf(e,5);break;case 4:mf(e,10);break;case 3:mf(e,6);break;default:mf(e,2)}}function pf(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function mf(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=Au(e.kb,e);n||(n=new Wh("//www.google.com/images/cleardot.gif"),vu.location&&"http"==vu.location.protocol||Yh(n,"https"),ed(n)),Cd(n.toString(),r)}else ph(2);e.G=0,e.l&&e.l.va(t),gf(e),tf(e)}function gf(e){if(e.G=0,e.la=[],e.l){const t=Ed(e.h);0==t.length&&0==e.i.length||(Pu(e.la,t),Pu(e.la,e.i),e.h.i.length=0,Ou(e.i),e.i.length=0),e.l.ua()}}function yf(e,t,n){var r=n instanceof Wh?Qh(n):new Wh(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Xh(r,r.m);else{var i=vu.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Wh(null,void 0);r&&Yh(s,r),t&&(s.g=t),i&&Xh(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Zh(r,n,t),Zh(r,"VER",e.ma),of(e,r),r}function vf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Ud(new Dd({jb:!0})):new Ud(e.ra),t.Ka(e.H),t}function wf(){}function _f(){if($u&&!(10<=Number(sl)))throw Error("Environmental error: no available transport.")}function bf(e,t){Rl.call(this),this.g=new Jd(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Uu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Uu(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ef(this)}function If(e){Eh.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Tf(){Sh.call(this),this.status=1}function Ef(e){this.g=e}pu=Ud.prototype,pu.Ka=function(e){this.L=e},pu.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ih.g(),this.C=this.u?_h(this.u):_h(Ih),this.g.onreadystatechange=Au(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void jd(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=vu.FormData&&e instanceof vu.FormData,!(0<=Ru(Bd,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$d(this),0<this.B&&((this.K=qd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Au(this.qa,this)):this.A=Ql(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){jd(this,s)}},pu.qa=function(){"undefined"!=typeof yu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ol(this,"timeout"),this.abort(8))},pu.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ol(this,"complete"),Ol(this,"abort"),Kd(this))},pu.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kd(this,!0)),Ud.X.M.call(this)},pu.Ha=function(){this.s||(this.F||this.v||this.l?zd(this):this.fb())},pu.fb=function(){zd(this)},pu.aa=function(){try{return 2<Hd(this)?this.g.status:-1}catch(e){return-1}},pu.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},pu.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Md(t)}},pu.Ea=function(){return this.m},pu.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},pu=Jd.prototype,pu.ma=8,pu.G=1,pu.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ah(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=fl(s),ml(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=af(this,i,t),n=Qh(this.F),Zh(n,"RID",e),Zh(n,"CVER",22),this.D&&Zh(n,"X-HTTP-Session-Id",this.D),of(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Qd(s)))+"&"+t:this.o&&Yd(n,this.o,s)),Id(this.h,i),this.Ya&&Zh(n,"TYPE","init"),this.O?(Zh(n,"$req",t),Zh(n,"SID","null"),i.Z=!0,Rh(i,n,null)):Rh(i,n,t),this.G=2}}else 3==this.G&&(e?sf(this,e):0==this.i.length||wd(this.h)||sf(this))},pu.Ia=function(){if(this.u=null,hf(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=gh(Au(this.eb,this),e)}},pu.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ph(10),ef(this),hf(this))},pu.cb=function(){null!=this.v&&(this.v=null,ef(this),uf(this),ph(19))},pu.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ph(2)):(this.j.info("Failed to ping google.com"),ph(1))},pu=wf.prototype,pu.xa=function(){},pu.wa=function(){},pu.va=function(){},pu.ua=function(){},pu.Ra=function(){},_f.prototype.g=function(e,t){return new bf(e,t)},xu(bf,Rl),bf.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ph(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=yf(e,null,e.V),nf(e)},bf.prototype.close=function(){Zd(this.g)},bf.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ll(e),e=n);t.i.push(new gd(t.ab++,e)),3==t.G&&nf(t)},bf.prototype.M=function(){this.g.l=null,delete this.j,Zd(this.g),delete this.g,bf.X.M.call(this)},xu(If,Eh),xu(Tf,Sh),xu(Ef,wf),Ef.prototype.xa=function(){Ol(this.g,"a")},Ef.prototype.wa=function(e){Ol(this.g,new If(e))},Ef.prototype.va=function(e){Ol(this.g,new Tf)},Ef.prototype.ua=function(){Ol(this.g,"b")},_f.prototype.createWebChannel=_f.prototype.g,bf.prototype.send=bf.prototype.u,bf.prototype.open=bf.prototype.m,bf.prototype.close=bf.prototype.close,yh.NO_ERROR=0,yh.TIMEOUT=8,yh.HTTP_ERROR=6,vh.COMPLETE="complete",bh.EventType=Th,Th.OPEN="a",Th.CLOSE="b",Th.ERROR="c",Th.MESSAGE="d",Rl.prototype.listen=Rl.prototype.N,Ud.prototype.listenOnce=Ud.prototype.O,Ud.prototype.getLastError=Ud.prototype.Oa,Ud.prototype.getLastErrorCode=Ud.prototype.Ea,Ud.prototype.getStatus=Ud.prototype.aa,Ud.prototype.getResponseJson=Ud.prototype.Sa,Ud.prototype.getResponseText=Ud.prototype.fa,Ud.prototype.send=Ud.prototype.da,Ud.prototype.setWithCredentials=Ud.prototype.Ka;var Sf=gu.createWebChannelTransport=function(){return new _f},kf=gu.getStatEventTarget=function(){return lh()},Af=gu.ErrorCode=yh,Cf=gu.EventType=vh,xf=gu.Event=ch,Df=gu.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Nf=gu.FetchXmlHttpFactory=Dd,Rf=gu.WebChannel=bh,Of=gu.XhrIo=Ud;const Pf="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lf.UNAUTHENTICATED=new Lf(null),Lf.GOOGLE_CREDENTIALS=new Lf("google-credentials-uid"),Lf.FIRST_PARTY=new Lf("first-party-uid"),Lf.MOCK_USER=new Lf("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Mf="9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new oe("@firebase/firestore");function Ff(){return Uf.logLevel}function Vf(e){Uf.setLogLevel(e)}function Bf(e,...t){if(Uf.logLevel<=te.DEBUG){const n=t.map(Gf);Uf.debug(`Firestore (${Mf}): ${e}`,...n)}}function qf(e,...t){if(Uf.logLevel<=te.ERROR){const n=t.map(Gf);Uf.error(`Firestore (${Mf}): ${e}`,...n)}}function jf(e,...t){if(Uf.logLevel<=te.WARN){const n=t.map(Gf);Uf.warn(`Firestore (${Mf}): ${e}`,...n)}}function Gf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(e="Unexpected state"){const t=`FIRESTORE (${Mf}) INTERNAL ASSERTION FAILED: `+e;throw qf(t),new Error(t)}function Kf(e,t){e||zf()}function $f(e,t){e||zf()}function Hf(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qf extends R{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lf.UNAUTHENTICATED)))}shutdown(){}}class Zf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ep{constructor(e){this.t=e,this.currentUser=Lf.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Yf;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yf,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Bf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Bf("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yf)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Bf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Kf("string"==typeof t.accessToken),new Xf(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Kf(null===e||"string"==typeof e),new Lf(e)}}class tp{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Lf.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Kf(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class np{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new tp(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Lf.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ip{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Bf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Bf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Bf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Bf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Kf("string"==typeof e.token),this.A=e.token,new rp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sp(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=sp(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ap(e,t){return e<t?-1:e>t?1:0}function cp(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function up(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Qf(Wf.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Qf(Wf.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Qf(Wf.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Qf(Wf.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lp.fromMillis(Date.now())}static fromDate(e){return lp.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new lp(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ap(this.nanoseconds,e.nanoseconds):ap(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.timestamp=e}static fromTimestamp(e){return new hp(e)}static min(){return new hp(new lp(0,0))}static max(){return new hp(new lp(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,n){void 0===t?t=0:t>e.length&&zf(),void 0===n?n=e.length-t:n>e.length-t&&zf(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===dp.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dp?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fp extends dp{construct(e,t,n){return new fp(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new fp(t)}static emptyPath(){return new fp([])}}const pp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mp extends dp{construct(e,t,n){return new mp(e,t,n)}static isValidIdentifier(e){return pp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mp.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mp(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Qf(Wf.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Qf(Wf.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Qf(Wf.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mp(t)}static emptyPath(){return new mp([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.path=e}static fromPath(e){return new gp(fp.fromString(e))}static fromName(e){return new gp(fp.fromString(e).popFirst(5))}static empty(){return new gp(fp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===fp.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return fp.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new gp(new fp(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function vp(e){return e.fields.find((e=>2===e.kind))}function wp(e){return e.fields.filter((e=>2!==e.kind))}yp.UNKNOWN_ID=-1;class _p{constructor(e,t){this.fieldPath=e,this.kind=t}}class bp{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new bp(0,Ep.min())}}function Ip(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=hp.fromTimestamp(1e9===r?new lp(n+1,0):new lp(n,r));return new Ep(i,gp.empty(),t)}function Tp(e){return new Ep(e.readTime,e.key,-1)}class Ep{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ep(hp.min(),gp.empty(),-1)}static max(){return new Ep(hp.max(),gp.empty(),-1)}}function Sp(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=gp.comparator(e.documentKey,t.documentKey),0!==n?n:ap(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ap{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(e){if(e.code!==Wf.FAILED_PRECONDITION||e.message!==kp)throw e;Bf("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&zf(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new xp(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof xp?t:xp.resolve(t)}catch(e){return xp.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):xp.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):xp.reject(t)}static resolve(e){return new xp(((t,n)=>{t(e)}))}static reject(e){return new xp(((t,n)=>{n(e)}))}static waitFor(e){return new xp(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=xp.resolve(!1);for(const n of e)t=t.next((e=>e?xp.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new xp(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new xp(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Yf,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Op(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=Fp(t.target.error);this.P.reject(new Op(e,n))}}static open(e,t,n,r){try{return new Dp(t,e.transaction(r,n))}catch(e){throw new Op(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(Bf("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Lp(t)}}class Np{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Np.D(d())&&qf("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Bf("SimpleDb","Removing database:",e),Mp(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!_())return!1;if(Np.N())return!0;const e=d(),t=Np.D(e),n=0<t&&t<10,r=Np.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",VUE_APP_STRIPE_PUBLISHABLE_KEY:"pk_test_51M2vhLLLGjo5d30LI5TVoaUSSMUxIVrox0k3LtWDsaUOnguvVqAzLfvXmqg01cqcAJDPBZl7daxCXxoirU2g1xCn00i1WCmc6X",VUE_APP_ADMIN_MAIL_KEY:"YXBpOjg4NWIwMTJmM2Q3MDllZjNmZjI5MTU2MDIyMzE1NmE5LTQ4YzA5MmJhLWY0YzlmOTBh",VUE_APP_FIREBASE_KEY:"AIzaSyBFG6wX7k5jzt2LNZIAj8ZriyOerOht1AM",VUE_APP_ADMIN_LOGIN:"bar",VUE_APP_ADMIN_PASSWORD:"bar",BASE_URL:""})||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(Bf("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Op(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Qf(Wf.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Qf(Wf.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Op(e,r))},r.onupgradeneeded=e=>{Bf("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next((()=>{Bf("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=Dp.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),xp.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Bf("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Rp{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Mp(this.U.delete())}}class Op extends Qf{constructor(e,t){super(Wf.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Pp(e){return"IndexedDbTransactionError"===e.name}class Lp{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Bf("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Bf("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Mp(n)}add(e){return Bf("SimpleDb","ADD",this.store.name,e,e),Mp(this.store.add(e))}get(e){return Mp(this.store.get(e)).next((t=>(void 0===t&&(t=null),Bf("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Bf("SimpleDb","DELETE",this.store.name,e),Mp(this.store.delete(e))}count(){return Bf("SimpleDb","COUNT",this.store.name),Mp(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new xp(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new xp(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){Bf("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new xp(((n,r)=>{t.onerror=e=>{const t=Fp(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}H(e,t){const n=[];return new xp(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Rp(i),o=t(i.primaryKey,i.value,s);if(o instanceof xp){const e=o.catch((e=>(s.done(),xp.reject(e))));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}})).next((()=>xp.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Mp(e){return new xp(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Fp(e.target.error);n(t)}}))}let Up=!1;function Fp(e){const t=Np.D(d());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Qf("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Up||(Up=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Vp{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){Bf("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Bf("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){Pp(e)?Bf("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Cp(e)}await this.nt(6e4)}))}}class Bp{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const n=new Set;let r=t,i=!0;return xp.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Bf("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.ot(r,n))).next((n=>(Bf("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}ot(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Tp(t);Sp(r,n)>0&&(n=r)})),new Ep(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Gp(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function zp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qp.at=-1;class Kp{constructor(e,t){this.comparator=e,this.root=t||Hp.EMPTY}insert(e,t){return new Kp(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Hp.BLACK,null,null))}remove(e){return new Kp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hp.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $p(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $p(this.root,e,this.comparator,!1)}getReverseIterator(){return new $p(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $p(this.root,e,this.comparator,!0)}}class $p{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Hp{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Hp.RED,this.left=null!=r?r:Hp.EMPTY,this.right=null!=i?i:Hp.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Hp(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Hp.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Hp.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hp.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hp.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw zf();if(this.right.isRed())throw zf();const e=this.left.check();if(e!==this.right.check())throw zf();return e+(this.isRed()?0:1)}}Hp.EMPTY=null,Hp.RED=!0,Hp.BLACK=!1,Hp.EMPTY=new class{constructor(){this.size=0}get key(){throw zf()}get value(){throw zf()}get color(){throw zf()}get left(){throw zf()}get right(){throw zf()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Hp(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wp{constructor(e){this.comparator=e,this.data=new Kp(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qp(this.data.getIterator())}getIteratorFrom(e){return new Qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Wp))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wp(this.comparator);return t.data=e,t}}class Qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Yp(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.fields=e,e.sort(mp.comparator)}static empty(){return new Xp([])}unionWith(e){let t=new Wp(mp.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Xp(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cp(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Zp(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Zp(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ap(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zp.EMPTY_BYTE_STRING=new Zp("");const em=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tm(e){if(Kf(!!e),"string"==typeof e){let t=0;const n=em.exec(e);if(Kf(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nm(e.seconds),nanos:nm(e.nanos)}}function nm(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rm(e){return"string"==typeof e?Zp.fromBase64String(e):Zp.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function sm(e){const t=e.mapValue.fields.__previous_value__;return im(t)?sm(t):t}function om(e){const t=tm(e.mapValue.fields.__local_write_time__.timestampValue);return new lp(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class cm{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cm("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof cm&&e.projectId===this.projectId&&e.database===this.database}}function um(e){return null==e}function lm(e){return 0===e&&1/e==-1/0}function hm(e){return"number"==typeof e&&Number.isInteger(e)&&!lm(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},fm={nullValue:"NULL_VALUE"};function pm(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?im(e)?4:Cm(e)?9007199254740991:10:zf()}function mm(e,t){if(e===t)return!0;const n=pm(e);if(n!==pm(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return om(e).isEqual(om(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=tm(e.timestampValue),r=tm(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return rm(e.bytesValue).isEqual(rm(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return nm(e.geoPointValue.latitude)===nm(t.geoPointValue.latitude)&&nm(e.geoPointValue.longitude)===nm(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nm(e.integerValue)===nm(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=nm(e.doubleValue),r=nm(t.doubleValue);return n===r?lm(n)===lm(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return cp(e.arrayValue.values||[],t.arrayValue.values||[],mm);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(jp(n)!==jp(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!mm(n[i],r[i])))return!1;return!0}(e,t);default:return zf()}}function gm(e,t){return void 0!==(e.values||[]).find((e=>mm(e,t)))}function ym(e,t){if(e===t)return 0;const n=pm(e),r=pm(t);if(n!==r)return ap(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ap(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=nm(e.integerValue||e.doubleValue),r=nm(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return vm(e.timestampValue,t.timestampValue);case 4:return vm(om(e),om(t));case 5:return ap(e.stringValue,t.stringValue);case 6:return function(e,t){const n=rm(e),r=rm(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ap(n[i],r[i]);if(0!==e)return e}return ap(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ap(nm(e.latitude),nm(t.latitude));return 0!==n?n:ap(nm(e.longitude),nm(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ym(n[i],r[i]);if(e)return e}return ap(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===dm.mapValue&&t===dm.mapValue)return 0;if(e===dm.mapValue)return 1;if(t===dm.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ap(r[o],s[o]);if(0!==e)return e;const t=ym(n[r[o]],i[s[o]]);if(0!==t)return t}return ap(r.length,s.length)}(e.mapValue,t.mapValue);default:throw zf()}}function vm(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ap(e,t);const n=tm(e),r=tm(t),i=ap(n.seconds,r.seconds);return 0!==i?i:ap(n.nanos,r.nanos)}function wm(e){return _m(e)}function _m(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=tm(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rm(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,gp.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=_m(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${_m(e.fields[i])}`;return n+"}"}(e.mapValue):zf();var t,n}function bm(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Im(e){return!!e&&"integerValue"in e}function Tm(e){return!!e&&"arrayValue"in e}function Em(e){return!!e&&"nullValue"in e}function Sm(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function km(e){return!!e&&"mapValue"in e}function Am(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Gp(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Am(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Am(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Cm(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function xm(e){return"nullValue"in e?fm:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?bm(cm.empty(),gp.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:zf()}function Dm(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?bm(cm.empty(),gp.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?dm:zf()}function Nm(e,t){const n=ym(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Rm(e,t){const n=ym(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.value=e}static empty(){return new Om({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!km(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Am(t)}setAll(e){let t=mp.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Am(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());km(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mm(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];km(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Gp(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Om(Am(this.value))}}function Pm(e){const t=[];return Gp(e.fields,((e,n)=>{const r=new mp([e]);if(km(n)){const e=Pm(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Xp(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lm{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Lm(e,0,hp.min(),hp.min(),Om.empty(),0)}static newFoundDocument(e,t,n){return new Lm(e,1,t,hp.min(),n,0)}static newNoDocument(e,t){return new Lm(e,2,t,hp.min(),Om.empty(),0)}static newUnknownDocument(e,t){return new Lm(e,3,t,hp.min(),Om.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Om.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Om.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=hp.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Lm&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lm(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function Um(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Mm(e,t,n,r,i,s,o)}function Fm(e){const t=Hf(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+wm(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),um(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>wm(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>wm(e))).join(",")),t.ht=e}return t.ht}function Vm(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${wm(t.value)}`;var t})).join(", ")}]`),um(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>wm(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>wm(e))).join(",")),`Target(${t})`}function Bm(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ng(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!mm(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ig(e.startAt,t.startAt)&&ig(e.endAt,t.endAt)}function qm(e){return gp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function jm(e,t){return e.filters.filter((e=>e instanceof Km&&e.field.isEqual(t)))}function Gm(e,t,n){let r=fm,i=!0;for(const s of jm(e,t)){let e=fm,t=!0;switch(s.op){case"<":case"<=":e=xm(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=fm}Nm({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Nm({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function zm(e,t,n){let r=dm,i=!0;for(const s of jm(e,t)){let e=dm,t=!0;switch(s.op){case">=":case">":e=Dm(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=dm}Rm({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Rm({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class Km extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new $m(e,t,n):"array-contains"===t?new Ym(e,n):"in"===t?new Xm(e,n):"not-in"===t?new Jm(e,n):"array-contains-any"===t?new Zm(e,n):new Km(e,t,n)}static lt(e,t,n){return"in"===t?new Hm(e,n):new Wm(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(ym(t,this.value)):null!==t&&pm(this.value)===pm(t)&&this.ft(ym(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return zf()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class $m extends Km{constructor(e,t,n){super(e,t,n),this.key=gp.fromName(n.referenceValue)}matches(e){const t=gp.comparator(e.key,this.key);return this.ft(t)}}class Hm extends Km{constructor(e,t){super(e,"in",t),this.keys=Qm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Wm extends Km{constructor(e,t){super(e,"not-in",t),this.keys=Qm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qm(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>gp.fromName(e.referenceValue)))}class Ym extends Km{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tm(t)&&gm(t.arrayValue,this.value)}}class Xm extends Km{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&gm(this.value.arrayValue,t)}}class Jm extends Km{constructor(e,t){super(e,"not-in",t)}matches(e){if(gm(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!gm(this.value.arrayValue,t)}}class Zm extends Km{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tm(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>gm(this.value.arrayValue,e)))}}class eg{constructor(e,t){this.position=e,this.inclusive=t}}class tg{constructor(e,t="asc"){this.field=e,this.dir=t}}function ng(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function rg(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?gp.comparator(gp.fromName(o.referenceValue),n.key):ym(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ig(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!mm(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function og(e,t,n,r,i,s,o,a){return new sg(e,t,n,r,i,s,o,a)}function ag(e){return new sg(e)}function cg(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ug(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function lg(e){for(const t of e.filters)if(t.dt())return t.field;return null}function hg(e){return null!==e.collectionGroup}function dg(e){const t=Hf(e);if(null===t._t){t._t=[];const e=lg(t),n=ug(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new tg(e)),t._t.push(new tg(mp.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new tg(mp.keyField(),e))}}}return t._t}function fg(e){const t=Hf(e);if(!t.wt)if("F"===t.limitType)t.wt=Um(t.path,t.collectionGroup,dg(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of dg(t)){const t="desc"===i.dir?"asc":"desc";e.push(new tg(i.field,t))}const n=t.endAt?new eg(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eg(t.startAt.position,t.startAt.inclusive):null;t.wt=Um(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function pg(e,t,n){return new sg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function mg(e,t){return Bm(fg(e),fg(t))&&e.limitType===t.limitType}function gg(e){return`${Fm(fg(e))}|lt:${e.limitType}`}function yg(e){return`Query(target=${Vm(fg(e))}; limitType=${e.limitType})`}function vg(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):gp.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=rg(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,dg(e),t))&&!(e.endAt&&!function(e,t,n){const r=rg(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,dg(e),t))}(e,t)}function wg(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function _g(e){return(t,n)=>{let r=!1;for(const i of dg(e)){const e=bg(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function bg(e,t,n){const r=e.field.isKeyField()?gp.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ym(r,i):zf()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return zf()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lm(t)?"-0":t}}function Tg(e){return{integerValue:""+e}}function Eg(e,t){return hm(t)?Tg(t):Ig(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this._=void 0}}function kg(e,t,n){return e instanceof xg?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Dg?Ng(e,t):e instanceof Rg?Og(e,t):function(e,t){const n=Cg(e,t),r=Lg(n)+Lg(e.yt);return Im(n)&&Im(e.yt)?Tg(r):Ig(e.It,r)}(e,t)}function Ag(e,t,n){return e instanceof Dg?Ng(e,t):e instanceof Rg?Og(e,t):n}function Cg(e,t){return e instanceof Pg?Im(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class xg extends Sg{}class Dg extends Sg{constructor(e){super(),this.elements=e}}function Ng(e,t){const n=Mg(t);for(const r of e.elements)n.some((e=>mm(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Rg extends Sg{constructor(e){super(),this.elements=e}}function Og(e,t){let n=Mg(t);for(const r of e.elements)n=n.filter((e=>!mm(e,r)));return{arrayValue:{values:n}}}class Pg extends Sg{constructor(e,t){super(),this.It=e,this.yt=t}}function Lg(e){return nm(e.integerValue||e.doubleValue)}function Mg(e){return Tm(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t){this.field=e,this.transform=t}}function Fg(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Dg&&t instanceof Dg||e instanceof Rg&&t instanceof Rg?cp(e.elements,t.elements,mm):e instanceof Pg&&t instanceof Pg?mm(e.yt,t.yt):e instanceof xg&&t instanceof xg}(e.transform,t.transform)}class Vg{constructor(e,t){this.version=e,this.transformResults=t}}class Bg{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bg}static exists(e){return new Bg(void 0,e)}static updateTime(e){return new Bg(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qg(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class jg{}function Gg(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Zg(e.key,Bg.none()):new Wg(e.key,e.data,Bg.none());{const n=e.data,r=Om.empty();let i=new Wp(mp.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Qg(e.key,r,new Xp(i.toArray()),Bg.none())}}function zg(e,t,n){e instanceof Wg?function(e,t,n){const r=e.value.clone(),i=Xg(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Qg?function(e,t,n){if(!qg(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Xg(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Yg(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Kg(e,t,n,r){return e instanceof Wg?function(e,t,n,r){if(!qg(e.precondition,t))return n;const i=e.value.clone(),s=Jg(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qg?function(e,t,n,r){if(!qg(e.precondition,t))return n;const i=Jg(e.fieldTransforms,r,t),s=t.data;return s.setAll(Yg(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return qg(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function $g(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Cg(r.transform,e||null);null!=i&&(null===n&&(n=Om.empty()),n.set(r.field,i))}return n||null}function Hg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&cp(e,t,((e,t)=>Fg(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Wg extends jg{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qg extends jg{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yg(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Xg(e,t,n){const r=new Map;Kf(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ag(o,a,n[i]))}return r}function Jg(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,kg(e,s,t))}return r}class Zg extends jg{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ey extends jg{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ny,ry;function iy(e){switch(e){default:return zf();case Wf.CANCELLED:case Wf.UNKNOWN:case Wf.DEADLINE_EXCEEDED:case Wf.RESOURCE_EXHAUSTED:case Wf.INTERNAL:case Wf.UNAVAILABLE:case Wf.UNAUTHENTICATED:return!1;case Wf.INVALID_ARGUMENT:case Wf.NOT_FOUND:case Wf.ALREADY_EXISTS:case Wf.PERMISSION_DENIED:case Wf.FAILED_PRECONDITION:case Wf.ABORTED:case Wf.OUT_OF_RANGE:case Wf.UNIMPLEMENTED:case Wf.DATA_LOSS:return!0}}function sy(e){if(void 0===e)return qf("GRPC error has no .code"),Wf.UNKNOWN;switch(e){case ny.OK:return Wf.OK;case ny.CANCELLED:return Wf.CANCELLED;case ny.UNKNOWN:return Wf.UNKNOWN;case ny.DEADLINE_EXCEEDED:return Wf.DEADLINE_EXCEEDED;case ny.RESOURCE_EXHAUSTED:return Wf.RESOURCE_EXHAUSTED;case ny.INTERNAL:return Wf.INTERNAL;case ny.UNAVAILABLE:return Wf.UNAVAILABLE;case ny.UNAUTHENTICATED:return Wf.UNAUTHENTICATED;case ny.INVALID_ARGUMENT:return Wf.INVALID_ARGUMENT;case ny.NOT_FOUND:return Wf.NOT_FOUND;case ny.ALREADY_EXISTS:return Wf.ALREADY_EXISTS;case ny.PERMISSION_DENIED:return Wf.PERMISSION_DENIED;case ny.FAILED_PRECONDITION:return Wf.FAILED_PRECONDITION;case ny.ABORTED:return Wf.ABORTED;case ny.OUT_OF_RANGE:return Wf.OUT_OF_RANGE;case ny.UNIMPLEMENTED:return Wf.UNIMPLEMENTED;case ny.DATA_LOSS:return Wf.DATA_LOSS;default:return zf()}}(ry=ny||(ny={}))[ry.OK=0]="OK",ry[ry.CANCELLED=1]="CANCELLED",ry[ry.UNKNOWN=2]="UNKNOWN",ry[ry.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ry[ry.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ry[ry.NOT_FOUND=5]="NOT_FOUND",ry[ry.ALREADY_EXISTS=6]="ALREADY_EXISTS",ry[ry.PERMISSION_DENIED=7]="PERMISSION_DENIED",ry[ry.UNAUTHENTICATED=16]="UNAUTHENTICATED",ry[ry.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ry[ry.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ry[ry.ABORTED=10]="ABORTED",ry[ry.OUT_OF_RANGE=11]="OUT_OF_RANGE",ry[ry.UNIMPLEMENTED=12]="UNIMPLEMENTED",ry[ry.INTERNAL=13]="INTERNAL",ry[ry.UNAVAILABLE=14]="UNAVAILABLE",ry[ry.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oy{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gp(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return zp(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Kp(gp.comparator);function cy(){return ay}const uy=new Kp(gp.comparator);function ly(...e){let t=uy;for(const n of e)t=t.insert(n.key,n);return t}function hy(e){let t=uy;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function dy(){return py()}function fy(){return py()}function py(){return new oy((e=>e.toString()),((e,t)=>e.isEqual(t)))}const my=new Kp(gp.comparator),gy=new Wp(gp.comparator);function yy(...e){let t=gy;for(const n of e)t=t.add(n);return t}const vy=new Wp(ap);function wy(){return vy}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,by.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new _y(hp.min(),r,wy(),cy(),yy())}}class by{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new by(n,t,yy(),yy(),yy())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class Ty{constructor(e,t){this.targetId=e,this.At=t}}class Ey{constructor(e,t,n=Zp.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Sy{constructor(){this.Rt=0,this.bt=Cy(),this.Pt=Zp.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=yy(),t=yy(),n=yy();return this.bt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:zf()}})),new by(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=Cy()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ky{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=cy(),this.qt=Ay(),this.Kt=new Wp(ap)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:zf()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(qm(e))if(0===n){const n=new gp(e.path);this.jt(t,n,Lm.newNoDocument(n,hp.min()))}else Kf(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&qm(i.target)){const t=new gp(i.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,Lm.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=yy();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new _y(e,t,this.Kt,this.Ut,n);return this.Ut=cy(),this.qt=Ay(),this.Kt=new Wp(ap),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Sy,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Wp(ap),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Bf("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Sy),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Ay(){return new Kp(gp.comparator)}function Cy(){return new Kp(gp.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Dy=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Ny{constructor(e,t){this.databaseId=e,this.gt=t}}function Ry(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Oy(e,t){return e.gt?t.toBase64():t.toUint8Array()}function Py(e,t){return Ry(e,t.toTimestamp())}function Ly(e){return Kf(!!e),hp.fromTimestamp(function(e){const t=tm(e);return new lp(t.seconds,t.nanos)}(e))}function My(e,t){return function(e){return new fp(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Uy(e){const t=fp.fromString(e);return Kf(uv(t)),t}function Fy(e,t){return My(e.databaseId,t.path)}function Vy(e,t){const n=Uy(t);if(n.get(1)!==e.databaseId.projectId)throw new Qf(Wf.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Qf(Wf.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new gp(Gy(n))}function By(e,t){return My(e.databaseId,t)}function qy(e){const t=Uy(e);return 4===t.length?fp.emptyPath():Gy(t)}function jy(e){return new fp(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Gy(e){return Kf(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function zy(e,t,n){return{name:Fy(e,t),fields:n.value.mapValue.fields}}function Ky(e,t,n){const r=Vy(e,t.name),i=Ly(t.updateTime),s=new Om({mapValue:{fields:t.fields}}),o=Lm.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function $y(e,t){return"found"in t?function(e,t){Kf(!!t.found),t.found.name,t.found.updateTime;const n=Vy(e,t.found.name),r=Ly(t.found.updateTime),i=new Om({mapValue:{fields:t.found.fields}});return Lm.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Kf(!!t.missing),Kf(!!t.readTime);const n=Vy(e,t.missing),r=Ly(t.readTime);return Lm.newNoDocument(n,r)}(e,t):zf()}function Hy(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:zf()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.gt?(Kf(void 0===t||"string"==typeof t),Zp.fromBase64String(t||"")):(Kf(void 0===t||t instanceof Uint8Array),Zp.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Wf.UNKNOWN:sy(e.code);return new Qf(t,e.message||"")}(o);n=new Ey(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vy(e,r.document.name),s=Ly(r.document.updateTime),o=new Om({mapValue:{fields:r.document.fields}}),a=Lm.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Iy(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Vy(e,r.document),s=r.readTime?Ly(r.readTime):hp.min(),o=Lm.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Iy([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Vy(e,r.document),s=r.removedTargetIds||[];n=new Iy([],s,i,null)}else{if(!("filter"in t))return zf();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new ty(r),s=e.targetId;n=new Ty(s,i)}}return n}function Wy(e,t){let n;if(t instanceof Wg)n={update:zy(e,t.key,t.value)};else if(t instanceof Zg)n={delete:Fy(e,t.key)};else if(t instanceof Qg)n={update:zy(e,t.key,t.data),updateMask:cv(t.fieldMask)};else{if(!(t instanceof ey))return zf();n={verify:Fy(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof xg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Dg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Rg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Pg)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw zf()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Py(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:zf()}(e,t.precondition)),n}function Qy(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Bg.updateTime(Ly(e.updateTime)):void 0!==e.exists?Bg.exists(e.exists):Bg.none()}(t.currentDocument):Bg.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Kf("REQUEST_TIME"===t.setToServerValue),n=new xg;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Dg(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Rg(e)}else"increment"in t?n=new Pg(e,t.increment):zf();const r=mp.fromServerFormat(t.fieldPath);return new Ug(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Vy(e,t.update.name),s=new Om({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Xp(t.map((e=>mp.fromServerFormat(e))))}(t.updateMask);return new Qg(i,s,e,n,r)}return new Wg(i,s,n,r)}if(t.delete){const r=Vy(e,t.delete);return new Zg(r,n)}if(t.verify){const r=Vy(e,t.verify);return new ey(r,n)}return zf()}function Yy(e,t){return e&&e.length>0?(Kf(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ly(e.updateTime):Ly(t);return n.isEqual(hp.min())&&(n=Ly(t)),new Vg(n,e.transformResults||[])}(e,t)))):[]}function Xy(e,t){return{documents:[By(e,t.path)]}}function Jy(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=By(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=By(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Sm(e.value))return{unaryFilter:{field:iv(e.field),op:"IS_NAN"}};if(Em(e.value))return{unaryFilter:{field:iv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Sm(e.value))return{unaryFilter:{field:iv(e.field),op:"IS_NOT_NAN"}};if(Em(e.value))return{unaryFilter:{field:iv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iv(e.field),op:rv(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:iv(e.field),direction:nv(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.gt||um(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Zy(e){let t=qy(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Kf(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=tv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new tg(sv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,um(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new eg(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new eg(n,t)}(n.endAt)),og(t,i,o,s,a,"F",c,u)}function ev(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return zf()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function tv(e){return e?void 0!==e.unaryFilter?[av(e)]:void 0!==e.fieldFilter?[ov(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>tv(e))).reduce(((e,t)=>e.concat(t))):zf():[]}function nv(e){return xy[e]}function rv(e){return Dy[e]}function iv(e){return{fieldPath:e.canonicalString()}}function sv(e){return mp.fromServerFormat(e.fieldPath)}function ov(e){return Km.create(sv(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return zf()}}(e.fieldFilter.op),e.fieldFilter.value)}function av(e){switch(e.unaryFilter.op){case"IS_NAN":const t=sv(e.unaryFilter.field);return Km.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=sv(e.unaryFilter.field);return Km.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=sv(e.unaryFilter.field);return Km.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=sv(e.unaryFilter.field);return Km.create(i,"!=",{nullValue:"NULL_VALUE"});default:return zf()}}function cv(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function uv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=dv(t)),t=hv(e.get(n),t);return dv(t)}function hv(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function dv(e){return e+""}function fv(e){const t=e.length;if(Kf(t>=2),2===t)return Kf(""===e.charAt(0)&&""===e.charAt(1)),fp.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&zf(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:zf()}s=t+2}return new fp(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(e,t){return[e,lv(t)]}function gv(e,t,n){return[e,lv(t),n]}const yv={},vv=["prefixPath","collectionGroup","readTime","documentId"],wv=["prefixPath","collectionGroup","documentId"],_v=["collectionGroup","readTime","prefixPath","documentId"],bv=["canonicalId","targetId"],Iv=["targetId","path"],Tv=["path","targetId"],Ev=["collectionId","parent"],Sv=["indexId","uid"],kv=["uid","sequenceNumber"],Av=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cv=["indexId","uid","orderedDocumentKey"],xv=["userId","collectionPath","documentId"],Dv=["userId","collectionPath","largestBatchId"],Nv=["userId","collectionGroup","largestBatchId"],Rv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ov=[...Rv,"documentOverlays"],Pv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Lv=Pv,Mv=[...Lv,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv extends Ap{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function Fv(e,t){const n=Hf(e);return Np.M(n.ie,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&zg(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Kg(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Kg(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=fy();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Gg(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(hp.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),yy())}isEqual(e){return this.batchId===e.batchId&&cp(this.mutations,e.mutations,((e,t)=>Hg(e,t)))&&cp(this.baseMutations,e.baseMutations,((e,t)=>Hg(e,t)))}}class Bv{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Kf(e.mutations.length===n.length);let r=my;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Bv(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t,n,r,i=hp.min(),s=hp.min(),o=Zp.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new jv(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new jv(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jv(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.re=e}}function zv(e,t){let n;if(t.document)n=Ky(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=gp.fromSegments(t.noDocument.path),r=Wv(t.noDocument.readTime);n=Lm.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return zf();{const e=gp.fromSegments(t.unknownDocument.path),r=Wv(t.unknownDocument.version);n=Lm.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new lp(e[0],e[1]);return hp.fromTimestamp(t)}(t.readTime)),n}function Kv(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:$v(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Fy(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ry(e,t.version.toTimestamp())}}(e.re,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Hv(t.version)};else{if(!t.isUnknownDocument())return zf();r.unknownDocument={path:n.path.toArray(),version:Hv(t.version)}}return r}function $v(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Hv(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Wv(e){const t=new lp(e.seconds,e.nanoseconds);return hp.fromTimestamp(t)}function Qv(e,t){const n=(t.baseMutations||[]).map((t=>Qy(e.re,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Qy(e.re,t))),i=lp.fromMillis(t.localWriteTimeMs);return new Vv(t.batchId,i,n,r)}function Yv(e){const t=Wv(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Wv(e.lastLimboFreeSnapshotVersion):hp.min();let r;var i;return void 0!==e.query.documents?(Kf(1===(i=e.query).documents.length),r=fg(ag(qy(i.documents[0])))):r=function(e){return fg(Zy(e))}(e.query),new jv(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Zp.fromBase64String(e.resumeToken))}function Xv(e,t){const n=Hv(t.snapshotVersion),r=Hv(t.lastLimboFreeSnapshotVersion);let i;i=qm(t.target)?Xy(e.re,t.target):Jy(e.re,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Fm(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Jv(e){const t=Zy({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?pg(t,t.limit,"L"):t}function Zv(e,t){return new qv(t.largestBatchId,Qy(e.re,t.overlayMutation))}function ew(e,t){const n=t.path.lastSegment();return[e,lv(t.path.popLast()),n]}function tw(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Hv(r.readTime),documentKey:lv(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{getBundleMetadata(e,t){return rw(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Wv(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return rw(e).put({bundleId:(n=t).id,createTime:Hv(Ly(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return iw(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Jv(t.bundledQuery),readTime:Wv(t.readTime)};var t}))}saveNamedQuery(e,t){return iw(e).put(function(e){return{name:e.name,readTime:Hv(Ly(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function rw(e){return Fv(e,"bundles")}function iw(e){return Fv(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const n=t.uid||"";return new sw(e,n)}getOverlay(e,t){return ow(e).get(ew(this.userId,t)).next((e=>e?Zv(this.It,e):null))}getOverlays(e,t){const n=dy();return xp.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new qv(t,i);r.push(this.ue(e,s))})),xp.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(lv(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ow(e).Y("collectionPathOverlayIndex",r))})),xp.waitFor(i)}getOverlaysForCollection(e,t,n){const r=dy(),i=lv(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ow(e).W("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Zv(this.It,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=dy();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ow(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Zv(this.It,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ue(e,t){return ow(e).put(function(e,t,n){const[r,i,s]=ew(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Wy(e.re,n.mutation)}}(this.It,this.userId,t))}}function ow(e){return Fv(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(nm(e.integerValue));else if("doubleValue"in e){const n=nm(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),lm(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(rm(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?Cm(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):zf()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const r of Object.keys(n))this._e(r,t),this.ae(n[r],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const r of n)this.ae(r,t)}ge(e,t){this.le(t,37),gp.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}function cw(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function uw(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=cw(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}aw.Te=new aw;class lw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}Se(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Pe(e);else if(e<2048)this.Pe(960|e>>>6),this.Pe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e);else{const e=t.codePointAt(0);this.Pe(240|e>>>18),this.Pe(128|63&e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e)}}this.ve()}De(e){const t=this.Ce(e),n=uw(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){const t=this.Ce(e),n=uw(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ae(e){const t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class hw{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class dw{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class fw{constructor(){this.Be=new lw,this.Le=new hw(this.Be),this.Ue=new dw(this.Be)}seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new pw(this.indexId,this.documentKey,this.arrayValue,n)}}function mw(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=gw(e.arrayValue,t.arrayValue),0!==n?n:(n=gw(e.directionalValue,t.directionalValue),0!==n?n:gp.comparator(e.documentKey,t.documentKey)))}function gw(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const e=t;e.dt()?this.je=e:this.Qe.push(e)}}We(e){const t=vp(e);if(void 0!==t&&!this.ze(t))return!1;const n=wp(e);let r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.je){const e=n[r];if(!this.He(this.je,e)||!this.Je(this.Ge[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],e))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.Ye=new ww}addToCollectionParentIndex(e,t){return this.Ye.add(t),xp.resolve()}getCollectionParents(e,t){return xp.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return xp.resolve()}deleteFieldIndex(e,t){return xp.resolve()}getDocumentsMatchingTarget(e,t){return xp.resolve(null)}getIndexType(e,t){return xp.resolve(0)}getFieldIndexes(e,t){return xp.resolve([])}getNextCollectionGroupToUpdate(e){return xp.resolve(null)}getMinOffset(e,t){return xp.resolve(Ep.min())}getMinOffsetFromCollectionGroup(e,t){return xp.resolve(Ep.min())}updateCollectionGroup(e,t,n){return xp.resolve()}updateIndexEntries(e,t){return xp.resolve()}}class ww{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Wp(fp.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Wp(fp.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new Uint8Array(0);class bw{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new ww,this.Ze=new oy((e=>Fm(e)),((e,t)=>Bm(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Xe.add(t)}));const i={collectionId:n,parent:lv(r)};return Iw(e).put(i)}return xp.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[up(t),""],!1,!0);return Iw(e).W(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(fv(r.parent))}return n}))}addFieldIndex(e,t){const n=Ew(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=Sw(e);return i.next((e=>{n.put(tw(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Ew(e),r=Sw(e),i=Tw(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Tw(e);let r=!0;const i=new Map;return xp.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=yy();const r=[];return xp.forEach(i,((i,s)=>{var o;Bf("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Fm(t)}`);const a=function(e,t){const n=vp(t);if(void 0===n)return null;for(const r of jm(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of wp(t))for(const t of jm(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of wp(t)){const t=0===i.kind?Gm(e,i.fieldPath,e.startAt):zm(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new eg(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of wp(t)){const t=0===i.kind?zm(e,i.fieldPath,e.endAt):Gm(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new eg(n,r)}(s,i),h=this.nn(i,s,u),d=this.nn(i,s,l),f=this.sn(i,s,c),p=this.rn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return xp.forEach(p,(i=>n.J(i,t.limit).next((t=>{t.forEach((t=>{const n=gp.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return xp.resolve(null)}))}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.on(t[l/c]):_w,h=this.un(e,a,n[l%c],r),d=this.cn(e,a,i[l%c],s),f=o.map((t=>this.un(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}un(e,t,n,r){const i=new pw(e,gp.empty(),t,n);return r?i:i.Ke()}cn(e,t,n,r){const i=new pw(e,gp.empty(),t,n);return r?i.Ke():i}en(e,t){const n=new yw(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.We(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return xp.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Wp(mp.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}an(e,t){const n=new fw;for(const r of wp(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);aw.Te.ce(e,i)}return n.$e()}on(e){const t=new fw;return aw.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const n=new fw;return aw.Te.ce(bm(this.databaseId,t),n.qe(function(e){const t=wp(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let r=[];r.push(new fw);let i=0;for(const s of wp(e)){const e=n[i++];for(const n of r)if(this.ln(t,s.fieldPath)&&Tm(e))r=this.fn(r,s,e);else{const t=n.qe(s.kind);aw.Te.ce(e,t)}}return this.dn(r)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new fw;n.seed(e.$e()),aw.Te.ce(s,n.qe(t.kind)),i.push(n)}return i}ln(e,t){return!!e.filters.find((e=>e instanceof Km&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Ew(e),r=Sw(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return xp.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new bp(t.sequenceNumber,new Ep(Wv(t.readTime),new gp(fv(t.documentKey)),t.largestBatchId)):bp.empty(),r=e.fields.map((([e,t])=>new _p(mp.fromServerFormat(e),t)));return new yp(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ap(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Ew(e),i=Sw(e);return this._n(e).next((e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>xp.forEach(t,(t=>i.put(tw(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return xp.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?xp.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),xp.forEach(i,(n=>this.wn(e,t,n).next((t=>{const i=this.mn(r,n);return t.isEqual(i)?xp.resolve():this.gn(e,r,n,t,i)})))))))}))}yn(e,t,n,r){return Tw(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,r){return Tw(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const r=Tw(e);let i=new Wp(mw);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},((e,r)=>{i=i.add(new pw(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}mn(e,t){let n=new Wp(mw);const r=this.an(t,e);if(null==r)return n;const i=vp(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Tm(s))for(const i of s.arrayValue.values||[])n=n.add(new pw(t.indexId,e.key,this.on(i),r))}else n=n.add(new pw(t.indexId,e.key,_w,r));return n}gn(e,t,n,r,i){Bf("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Yp(s),c=Yp(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Yp(o)):t?(i(a),a=Yp(s)):(a=Yp(s),c=Yp(o))}}(r,i,mw,(r=>{s.push(this.yn(e,t,n,r))}),(r=>{s.push(this.pn(e,t,n,r))})),xp.waitFor(s)}_n(e){let t=1;return Sw(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>mw(e,t))).filter(((e,t,n)=>!t||0!==mw(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=mw(s,e),i=mw(s,t);if(0===n)r[0]=e.Ke();else if(n>0&&i<0)r.push(s),r.push(s.Ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,_w,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,_w,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kw)}getMinOffset(e,t){return xp.mapArray(this.tn(t),(t=>this.en(e,t).next((e=>e||zf())))).next(kw)}}function Iw(e){return Fv(e,"collectionParents")}function Tw(e){return Fv(e,"indexEntries")}function Ew(e){return Fv(e,"indexConfiguration")}function Sw(e){return Fv(e,"indexState")}function kw(e){Kf(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Sp(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ep(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Cw{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Cw(e,Cw.DEFAULT_COLLECTION_PERCENTILE,Cw.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Kf(1===a)})));const u=[];for(const l of n.mutations){const e=gv(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return xp.waitFor(s).next((()=>u))}function Dw(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw zf();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cw.DEFAULT_COLLECTION_PERCENTILE=10,Cw.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cw.DEFAULT=new Cw(41943040,Cw.DEFAULT_COLLECTION_PERCENTILE,Cw.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cw.DISABLED=new Cw(-1,0,0);class Nw{constructor(e,t,n,r){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static oe(e,t,n,r){Kf(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Nw(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ow(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Pw(e),s=Ow(e);return s.add({}).next((o=>{Kf("number"==typeof o);const a=new Vv(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Wy(e.re,t))),i=n.mutations.map((t=>Wy(e.re,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.It,this.userId,a),u=[];let l=new Wp(((e,t)=>ap(e.canonicalString(),t.canonicalString())));for(const e of r){const t=gv(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,yv))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[o]=a.keys()})),xp.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Ow(e).get(t).next((e=>e?(Kf(e.userId===this.userId),Qv(this.It,e)):null))}Tn(e,t){return this.In[t]?xp.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ow(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Kf(t.batchId>=n),i=Qv(this.It,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ow(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ow(e).W("userMutationsIndex",t).next((e=>e.map((e=>Qv(this.It,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=mv(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Pw(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=fv(a);if(o===this.userId&&t.path.isEqual(u))return Ow(e).get(c).next((e=>{if(!e)throw zf();Kf(e.userId===this.userId),i.push(Qv(this.It,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Wp(ap);const r=[];return t.forEach((t=>{const i=mv(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Pw(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=fv(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),xp.waitFor(r).next((()=>this.En(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=mv(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Wp(ap);return Pw(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=fv(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.En(e,o)))}En(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Ow(e).get(t).next((e=>{if(null===e)throw zf();Kf(e.userId===this.userId),n.push(Qv(this.It,e))})))})),xp.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return xw(e.ie,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),xp.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return xp.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Pw(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=fv(e[1]);r.push(t)}else n.done()})).next((()=>{Kf(0===r.length)}))}))}containsKey(e,t){return Rw(e,this.userId,t)}Rn(e){return Lw(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Rw(e,t,n){const r=mv(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Pw(e).Z({range:s,X:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Ow(e){return Fv(e,"mutations")}function Pw(e){return Fv(e,"documentMutations")}function Lw(e){return Fv(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Mw(0)}static vn(){return new Mw(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next((t=>{const n=new Mw(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>hp.fromTimestamp(new lp(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Vn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Fw(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(Kf(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Fw(e).Z(((s,o)=>{const a=Yv(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>xp.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Fw(e).Z(((e,n)=>{const r=Yv(n);t(r)}))}Vn(e){return Vw(e).get("targetGlobalKey").next((e=>(Kf(null!==e),e)))}Sn(e,t){return Vw(e).put("targetGlobalKey",t)}Dn(e,t){return Fw(e).put(Xv(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Fm(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Fw(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Yv(n);Bm(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Bw(e);return t.forEach((t=>{const s=lv(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),xp.waitFor(r)}removeMatchingKeys(e,t,n){const r=Bw(e);return xp.forEach(t,(t=>{const i=lv(t.path);return xp.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Bw(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Bw(e);let i=yy();return r.Z({range:n,X:!0},((e,t,n)=>{const r=fv(e[1]),s=new gp(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=lv(t.path),r=IDBKeyRange.bound([n],[up(n)],!1,!0);let i=0;return Bw(e).Z({index:"documentTargetsIndex",X:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}se(e,t){return Fw(e).get(t).next((e=>e?Yv(e):null))}}function Fw(e){return Fv(e,"targets")}function Vw(e){return Fv(e,"targetGlobal")}function Bw(e){return Fv(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw([e,t],[n,r]){const i=ap(e,n);return 0===i?ap(t,r):i}class jw{constructor(e){this.xn=e,this.buffer=new Wp(qw),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();qw(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){Bf("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Pp(e)?Bf("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Cp(e)}await this.Fn(3e5)}))}}class zw{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return xp.resolve(qp.at);const n=new jw(t);return this.$n.forEachTarget(e,(e=>n.On(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>n.On(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Bf("LruGarbageCollector","Garbage collection skipped; disabled"),xp.resolve(Aw)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Bf("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Aw):this.Un(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Bf("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Ff()<=te.DEBUG&&Bf("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),xp.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new zw(e,t)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}qn(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,n)=>t(n)))}addReference(e,t,n){return $w(e,n)}removeReference(e,t,n){return $w(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return $w(e,t)}Gn(e,t){return function(e,t){let n=!1;return Lw(e).tt((r=>Rw(e,r,t).next((e=>(e&&(n=!0),xp.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,((s,o)=>{if(o<=t){const t=this.Gn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,hp.min()),Bw(e).delete([0,lv(s.path)]))))}));r.push(t)}})).next((()=>xp.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return $w(e,t)}Kn(e,t){const n=Bw(e);let r,i=qp.at;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==qp.at&&t(new gp(fv(r)),i),i=o,r=s):i=qp.at})).next((()=>{i!==qp.at&&t(new gp(fv(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $w(e,t){return Bw(e).put(function(e,t){return{targetId:0,path:lv(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.changes=new oy((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Lm.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?xp.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Jw(e).put(n)}removeEntry(e,t,n){return Jw(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],$v(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Qn(e,n))))}getEntry(e,t){let n=Lm.newInvalidDocument(t);return Jw(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Zw(t))},((e,r)=>{n=this.jn(t,r)})).next((()=>n))}Wn(e,t){let n={size:0,document:Lm.newInvalidDocument(t)};return Jw(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Zw(t))},((e,r)=>{n={document:this.jn(t,r),size:Dw(r)}})).next((()=>n))}getEntries(e,t){let n=cy();return this.zn(e,t,((e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)})).next((()=>n))}Hn(e,t){let n=cy(),r=new Kp(gp.comparator);return this.zn(e,t,((e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,Dw(t))})).next((()=>({documents:n,Jn:r})))}zn(e,t,n){if(t.isEmpty())return xp.resolve();let r=new Wp(t_);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Zw(r.first()),Zw(r.last())),s=r.getIterator();let o=s.getNext();return Jw(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=gp.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&t_(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(Zw(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),$v(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Jw(e).W(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=cy();for(const n of e){const e=this.jn(gp.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=cy();const s=e_(t,n),o=e_(t,Ep.max());return Jw(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.jn(gp.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Yw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Xw(e).get("remoteDocumentGlobalKey").next((e=>(Kf(!!e),e)))}Qn(e,t){return Xw(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=zv(this.It,t);if(!e.isNoDocument()||!e.version.isEqual(hp.min()))return e}return Lm.newInvalidDocument(e)}}function Qw(e){return new Ww(e)}class Yw extends Hw{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new oy((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Wp(((e,t)=>ap(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Kv(this.Yn.It,s);r=r.add(i.path.popLast());const c=Dw(a);n+=c-o.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Kv(this.Yn.It,s.convertToNoDocument(hp.min()));t.push(this.Yn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Yn.updateMetadata(e,n)),xp.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Xw(e){return Fv(e,"remoteDocumentGlobal")}function Jw(e){return Fv(e,"remoteDocumentsV14")}function Zw(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function e_(e,t){const n=t.documentKey.path.toArray();return[e,$v(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function t_(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ap(n[s],r[s]),i)return i;return i=ap(n.length,r.length),i||(i=ap(n[n.length-2],r[r.length-2]),i||ap(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class n_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Kg(n.mutation,e,Xp.empty(),lp.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,yy()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=yy()){const r=dy();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ly();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=dy();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,yy())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=cy();const s=py(),o=py();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Qg)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Kg(o.mutation,t,o.mutation.getFieldMask(),lp.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new n_(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=py();let r=new Kp(((e,t)=>e-t)),i=yy();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Xp.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||yy()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=fy();c.forEach((e=>{if(!i.has(e)){const r=Gg(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return xp.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return gp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):xp.resolve(dy());let o=-1,a=i;return s.next((t=>xp.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?xp.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,yy()))).next((e=>({batchId:o,changes:hy(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new gp(t)).next((e=>{let t=ly();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ly();return this.indexManager.getCollectionParents(e,r).next((s=>xp.forEach(s,(s=>{const o=function(e,t){return new sg(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Lm.newInvalidDocument(n)))}));let n=ly();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&Kg(s.mutation,i,Xp.empty(),lp.now()),vg(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):xp.resolve(Lm.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return xp.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ly(n.createTime)}),xp.resolve()}getNamedQuery(e,t){return xp.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Jv(e.bundledQuery),readTime:Ly(e.readTime)}}(t)),xp.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.overlays=new Kp(gp.comparator),this.es=new Map}getOverlay(e,t){return xp.resolve(this.overlays.get(t))}getOverlays(e,t){const n=dy();return xp.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),xp.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),xp.resolve()}getOverlaysForCollection(e,t,n){const r=dy(),i=t.length+1,s=new gp(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return xp.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Kp(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=dy(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=dy(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return xp.resolve(o)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new qv(t,n));let i=this.es.get(t);void 0===i&&(i=yy(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.ns=new Wp(a_.ss),this.rs=new Wp(a_.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new a_(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new a_(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new gp(new fp([])),n=new a_(t,e),r=new a_(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new gp(new fp([])),n=new a_(t,e),r=new a_(t,e+1);let i=yy();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new a_(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class a_{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return gp.comparator(e.key,t.key)||ap(e._s,t._s)}static os(e,t){return ap(e._s,t._s)||gp.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Wp(a_.ss)}checkEmpty(e){return xp.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Vv(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new a_(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return xp.resolve(s)}lookupMutationBatch(e,t){return xp.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return xp.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return xp.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return xp.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new a_(t,0),r=new a_(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),xp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Wp(ap);return t.forEach((e=>{const t=new a_(e,0),r=new a_(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),xp.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;gp.isDocumentKey(i)||(i=i.child(""));const s=new a_(new gp(i),0);let o=new Wp(ap);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),xp.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Kf(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return xp.forEach(t.mutations,(r=>{const i=new a_(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new a_(t,0),r=this.gs.firstAfterOrEqual(n);return xp.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,xp.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.Es=e,this.docs=new Kp(gp.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return xp.resolve(n?n.document.mutableCopy():Lm.newInvalidDocument(t))}getEntries(e,t){let n=cy();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Lm.newInvalidDocument(e))})),xp.resolve(n)}getAllFromCollection(e,t,n){let r=cy();const i=new gp(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Sp(Tp(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return xp.resolve(r)}getAllFromCollectionGroup(e,t,n,r){zf()}As(e,t){return xp.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new l_(this)}getSize(e){return xp.resolve(this.size)}}class l_ extends Hw{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),xp.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.persistence=e,this.Rs=new oy((e=>Fm(e)),Bm),this.lastRemoteSnapshotVersion=hp.min(),this.highestTargetId=0,this.bs=0,this.Ps=new o_,this.targetCount=0,this.vs=Mw.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),xp.resolve()}getLastRemoteSnapshotVersion(e){return xp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return xp.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),xp.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),xp.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Mw(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,xp.resolve()}updateTargetData(e,t){return this.Dn(t),xp.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,xp.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),xp.waitFor(i).next((()=>r))}getTargetCount(e){return xp.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return xp.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),xp.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),xp.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),xp.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return xp.resolve(n)}containsKey(e,t){return xp.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new qp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new h_(this),this.indexManager=new vw,this.remoteDocumentCache=function(e){return new u_(e)}((e=>this.referenceDelegate.xs(e))),this.It=new Gv(t),this.Ns=new i_(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new c_(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Bf("MemoryPersistence","Starting transaction:",e);const r=new f_(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return xp.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class f_ extends Ap{constructor(e){super(),this.currentSequenceNumber=e}}class p_{constructor(e){this.persistence=e,this.Fs=new o_,this.$s=null}static Bs(e){return new p_(e)}get Ls(){if(this.$s)return this.$s;throw zf()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),xp.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),xp.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),xp.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xp.forEach(this.Ls,(n=>{const r=gp.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,hp.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return xp.or([()=>xp.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.It=e}$(e,t,n,r){const i=new Dp("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pv,{unique:!0}),e.createObjectStore("documentMutations")}(e),g_(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=xp.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),g_(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:hp.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").W().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pv,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return xp.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.qs(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i))))),n<7&&r>=7&&(s=s.next((()=>this.Gs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.js(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:xv});t.createIndex("collectionPathOverlayIndex",Dv,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Nv,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:vv});t.createIndex("documentKeyIndex",wv),t.createIndex("collectionGroupIndex",_v)}(e))).next((()=>this.Ws(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.zs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Sv}).createIndex("sequenceNumberIndex",kv,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Av}).createIndex("documentKeyIndex",Cv,{unique:!1})}(e)))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=Dw(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>xp.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>xp.forEach(n,(n=>{Kf(n.userId===t.userId);const r=Qv(this.It,n);return xw(e,t.userId,r).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new fp(n),o=function(e){return[0,lv(e)]}(s);r.push(t.get(o).next((n=>n?xp.resolve():(n=>t.put({targetId:0,path:lv(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>xp.waitFor(r)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:Ev});const n=t.store("collectionParents"),r=new ww,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:lv(r)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const n=new fp(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,n],r)=>{const s=fv(t);return i(s.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=Yv(n),i=Xv(this.It,r);return t.put(i)}))}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new gp(fp.fromString(o.document.name).popFirst(5)):o.noDocument?gp.fromSegments(o.noDocument.path):o.unknownDocument?gp.fromSegments(o.unknownDocument.path):zf()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>xp.waitFor(r)))}zs(e,t){const n=t.store("mutations"),r=Qw(this.It),i=new d_(p_.Bs,this.It.re);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:yy();Qv(this.It,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),xp.forEach(n,((e,n)=>{const s=new Lf(n),o=sw.oe(this.It,s),a=i.getIndexManager(s),c=Nw.oe(s,this.It,a,i.referenceDelegate);return new r_(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Uv(t,qp.at),e).next()}))}))}}function g_(e){e.createObjectStore("targetDocuments",{keyPath:Iv}).createIndex("documentTargetsIndex",Tv,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",bv,{unique:!0}),e.createObjectStore("targetGlobal")}const y_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class v_{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=c,this.Ys=u,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!v_.C())throw new Qf(Wf.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Kw(this,r),this.ii=t+"main",this.It=new Gv(a),this.ri=new Np(this.ii,this.Xs,new m_(this.It)),this.Cs=new Uw(this.referenceDelegate,this.It),this.remoteDocumentCache=Qw(this.It),this.Ns=new nw,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&qf("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Qf(Wf.FAILED_PRECONDITION,y_);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new qp(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>__(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(Pp(e))return Bf("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Bf("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return w_(e).get("owner").next((e=>xp.resolve(this.mi(e))))}gi(e){return __(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Fv(e,"clientMetadata");return t.W().next((e=>{const n=this.Ii(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return xp.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?xp.resolve(!0):w_(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new Qf(Wf.FAILED_PRECONDITION,y_);return!1}}return!(!this.networkEnabled||!this.inForeground)||__(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Bf("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Uv(e,qp.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>__(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return Nw.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new bw(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return sw.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){Bf("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Xs)?Mv:14===s?Lv:13===s?Pv:12===s?Ov:11===s?Rv:void zf();var s;let o;return this.ri.runTransaction(e,r,i,(r=>(o=new Uv(r,this.Ss?this.Ss.next():qp.at),"readwrite-primary"===t?this.fi(o).next((e=>!!e||this.di(o))).next((t=>{if(!t)throw qf(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new Qf(Wf.FAILED_PRECONDITION,kp);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Vi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Vi(e){return w_(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Qf(Wf.FAILED_PRECONDITION,y_)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return w_(e).put("owner",t)}static C(){return Np.C()}_i(e){const t=w_(e);return t.get("owner").next((e=>this.mi(e)?(Bf("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):xp.resolve()))}pi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(qf(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),w()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return Bf("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return qf("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(xu){qf("Failed to set zombie client id.",xu)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(xu){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function w_(e){return Fv(e,"owner")}function __(e){return Fv(e,"clientMetadata")}function b_(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class I_{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=yy(),r=yy();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new I_(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(cg(t))return xp.resolve(null);let n=fg(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=pg(t,null,"F"),n=fg(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=yy(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,pg(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return cg(t)||r.isEqual(hp.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(Ff()<=te.DEBUG&&Bf("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yg(t)),this.Bi(e,s,t,Ip(r,-1)))}))}Fi(e,t){let n=new Wp(_g(e));return t.forEach(((t,r)=>{vg(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Ff()<=te.DEBUG&&Bf("QueryEngine","Using full collection scan to execute query:",yg(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ep.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new Kp(ap),this.qi=new oy((e=>Fm(e)),Bm),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r_(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function S_(e,t,n,r){return new E_(e,t,n,r)}async function k_(e,t){const n=Hf(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=yy();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function A_(e,t){const n=Hf(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=xp.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Kf(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=yy();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function C_(e){const t=Hf(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function x_(e,t){const n=Hf(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Zp.EMPTY_BYTE_STRING,hp.min()).withLastLimboFreeSnapshotVersion(hp.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=cy(),c=yy();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(D_(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(hp.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return xp.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ui=i,e)))}function D_(e,t,n){let r=yy(),i=yy();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=cy();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(hp.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Bf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function N_(e,t){const n=Hf(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function R_(e,t){const n=Hf(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,xp.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new jv(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function O_(e,t,n){const r=Hf(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Pp(e))throw e;Bf("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function P_(e,t,n){const r=Hf(e);let i=hp.min(),s=yy();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Hf(e),i=r.qi.get(n);return void 0!==i?xp.resolve(r.Ui.get(i)):r.Cs.getTargetData(t,n)}(r,e,fg(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:hp.min(),n?s:yy()))).next((e=>(U_(r,wg(t),e),{documents:e,Hi:s})))))}function L_(e,t){const n=Hf(e),r=Hf(n.Cs),i=n.Ui.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.se(e,t).next((e=>e?e.target:null))))}function M_(e,t){const n=Hf(e),r=n.Ki.get(t)||hp.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Gi.getAllFromCollectionGroup(e,t,Ip(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(U_(n,t,e),e)))}function U_(e,t,n){let r=e.Ki.get(t)||hp.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}async function F_(e,t,n,r){const i=Hf(e);let s=yy(),o=cy();for(const u of n){const e=t.Ji(u.metadata.name);u.document&&(s=s.add(e));const n=t.Yi(u);n.setReadTime(t.Xi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await R_(i,function(e){return fg(ag(fp.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>D_(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Cs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Cs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}async function V_(e,t,n=yy()){const r=await R_(e,fg(Jv(t.bundledQuery))),i=Hf(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Ly(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);const o=r.withResumeToken(Zp.EMPTY_BYTE_STRING,s);return i.Ui=i.Ui.insert(o.targetId,o),i.Cs.updateTargetData(e,o).next((()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Cs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ns.saveNamedQuery(e,t)))}))}function B_(e,t){return`firestore_clients_${e}_${t}`}function q_(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function j_(e,t){return`firestore_targets_${e}_${t}`}class G_{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new Qf(r.error.code,r.error.message))),s?new G_(e,t,r.state,i):(qf("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class z_{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new Qf(n.error.code,n.error.message))),i?new z_(e,n.state,r):(qf("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class K_{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=wy();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=hm(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new K_(e,i):(qf("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $_{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new $_(t.clientId,t.onlineState):(qf("SharedClientState",`Failed to parse online state: ${e}`),null)}}class H_{constructor(){this.activeTargetIds=wy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W_{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Kp(ap),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=B_(this.persistenceKey,this.sr),this.hr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new H_),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const n of e){if(n===this.sr)continue;const e=this.getItem(B_(this.persistenceKey,n));if(e){const t=K_.Zi(n,e);t&&(this.ur=this.ur.insert(t.clientId,t))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const n of this.cr)this.rr(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(j_(this.persistenceKey,e));if(n){const r=z_.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(j_(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Er(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Bf("SharedClientState","READ",e,t),t}setItem(e,t){Bf("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Bf("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(Bf("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void qf("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=qp.at;if(null!=e)try{const n=JSON.parse(e);Kf("number"==typeof n),t=n}catch(e){qf("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==qp.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Mr(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new G_(this.currentUser,e,t,n),i=q_(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=q_(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=j_(this.persistenceKey,e),i=new z_(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return K_.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return G_.Zi(new Lf(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return z_.Zi(r,t)}yr(e){return $_.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);Bf("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Br(s,o).then((()=>{this.ur=n}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=wy();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Q_{constructor(){this.Lr=new H_,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new H_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Bf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Bf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Bf("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Bf("RestConnection","Received: ",e),e)),(t=>{throw jf("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mf,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=J_[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Of;o.setWithCredentials(!0),o.listenOnce(Cf.COMPLETE,(()=>{var t;try{switch(o.getLastErrorCode()){case Af.NO_ERROR:const n=o.getResponseJson();Bf("Connection","XHR received:",JSON.stringify(n)),i(n);break;case Af.TIMEOUT:Bf("Connection",'RPC "'+e+'" timed out'),s(new Qf(Wf.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const r=o.getStatus();if(Bf("Connection",'RPC "'+e+'" failed with status:',r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const n=null===(t=e)||void 0===t?void 0:t.error;if(n&&n.status&&n.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Wf).indexOf(t)>=0?t:Wf.UNKNOWN}(n.status);s(new Qf(e,n.message))}else s(new Qf(Wf.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Qf(Wf.UNAVAILABLE,"Connection failed."));break;default:zf()}}finally{Bf("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Sf(),s=kf(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Nf({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Bf("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new Z_({Hr:e=>{l?Bf("Connection","Not sending because WebChannel is closed:",e):(u||(Bf("Connection","Opening WebChannel transport."),c.open(),u=!0),Bf("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Rf.EventType.OPEN,(()=>{l||Bf("Connection","WebChannel transport opened.")})),d(c,Rf.EventType.CLOSE,(()=>{l||(l=!0,Bf("Connection","WebChannel transport closed"),h.io())})),d(c,Rf.EventType.ERROR,(e=>{l||(l=!0,jf("Connection","WebChannel transport errored:",e),h.io(new Qf(Wf.UNAVAILABLE,"The operation could not be completed")))})),d(c,Rf.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Kf(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Bf("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=ny[e];if(void 0!==t)return sy(t)}(e),n=i.message;void 0===t&&(t=Wf.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.io(new Qf(t,n)),c.close()}else Bf("Connection","WebChannel received:",n),h.ro(n)}})),d(s,xf.STAT_EVENT,(e=>{e.stat===Df.PROXY?Bf("Connection","Detected buffering proxy"):e.stat===Df.NOPROXY&&Bf("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(){return"undefined"!=typeof window?window:null}function nb(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(e){return new Ny(e,!0)}class ib{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Bf("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ib(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Wf.RESOURCE_EXHAUSTED?(qf(t.toString()),qf("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Wf.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Qf(Wf.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Bf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Bf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ob extends sb{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Hy(this.It,e),n=function(e){if(!("targetChange"in e))return hp.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?hp.min():t.readTime?Ly(t.readTime):hp.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=jy(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=qm(r)?{documents:Xy(e,r)}:{query:Jy(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Oy(e,t.resumeToken):t.snapshotVersion.compareTo(hp.min())>0&&(n.readTime=Ry(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=ev(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=jy(this.It),t.removeTarget=e,this.Bo(t)}}class ab extends sb{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Kf(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=Yy(e.writeResults,e.commitTime),n=Ly(e.commitTime);return this.listener.Zo(n,t)}return Kf(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=jy(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Wy(this.It,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Qf(Wf.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Wf.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qf(Wf.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Wf.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qf(Wf.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class ub{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(qf(t),this.ou=!1):Bf("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((e=>{n.enqueueAndForget((async()=>{wb(this)&&(Bf("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Hf(e);t._u.add(4),await db(t),t.gu.set("Unknown"),t._u.delete(4),await hb(t)}(this))}))})),this.gu=new ub(n,r)}}async function hb(e){if(wb(e))for(const t of e.wu)await t(!0)}async function db(e){for(const t of e.wu)await t(!1)}function fb(e,t){const n=Hf(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),vb(n)?yb(n):Ub(n).ko()&&mb(n,t))}function pb(e,t){const n=Hf(e),r=Ub(n);n.du.delete(t),r.ko()&&gb(n,t),0===n.du.size&&(r.ko()?r.Fo():wb(n)&&n.gu.set("Unknown"))}function mb(e,t){e.yu.Mt(t.targetId),Ub(e).zo(t)}function gb(e,t){e.yu.Mt(t),Ub(e).Ho(t)}function yb(e){e.yu=new ky({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),Ub(e).start(),e.gu.uu()}function vb(e){return wb(e)&&!Ub(e).No()&&e.du.size>0}function wb(e){return 0===Hf(e)._u.size}function _b(e){e.yu=void 0}async function bb(e){e.du.forEach(((t,n)=>{mb(e,t)}))}async function Ib(e,t){_b(e),vb(e)?(e.gu.hu(t),yb(e)):e.gu.set("Unknown")}async function Tb(e,t,n){if(e.gu.set("Online"),t instanceof Ey&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Bf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Eb(e,n)}else if(t instanceof Iy?e.yu.Gt(t):t instanceof Ty?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(hp.min()))try{const t=await C_(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Zp.EMPTY_BYTE_STRING,n.snapshotVersion)),gb(e,t);const r=new jv(n.target,t,1,n.sequenceNumber);mb(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Bf("RemoteStore","Failed to raise snapshot:",t),await Eb(e,t)}}async function Eb(e,t,n){if(!Pp(t))throw t;e._u.add(1),await db(e),e.gu.set("Offline"),n||(n=()=>C_(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Bf("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await hb(e)}))}function Sb(e,t){return t().catch((n=>Eb(e,n,t)))}async function kb(e){const t=Hf(e),n=Fb(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Ab(t);)try{const e=await N_(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Cb(t,e)}catch(e){await Eb(t,e)}xb(t)&&Db(t)}function Ab(e){return wb(e)&&e.fu.length<10}function Cb(e,t){e.fu.push(t);const n=Fb(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function xb(e){return wb(e)&&!Fb(e).No()&&e.fu.length>0}function Db(e){Fb(e).start()}async function Nb(e){Fb(e).eu()}async function Rb(e){const t=Fb(e);for(const n of e.fu)t.Xo(n.mutations)}async function Ob(e,t,n){const r=e.fu.shift(),i=Bv.from(r,t,n);await Sb(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await kb(e)}async function Pb(e,t){t&&Fb(e).Yo&&await async function(e,t){if(n=t.code,iy(n)&&n!==Wf.ABORTED){const n=e.fu.shift();Fb(e).Mo(),await Sb(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await kb(e)}var n}(e,t),xb(e)&&Db(e)}async function Lb(e,t){const n=Hf(e);n.asyncQueue.verifyOperationInProgress(),Bf("RemoteStore","RemoteStore received new credentials");const r=wb(n);n._u.add(3),await db(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await hb(n)}async function Mb(e,t){const n=Hf(e);t?(n._u.delete(2),await hb(n)):t||(n._u.add(2),await db(n),n.gu.set("Unknown"))}function Ub(e){return e.pu||(e.pu=function(e,t,n){const r=Hf(e);return r.su(),new ob(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:bb.bind(null,e),Zr:Ib.bind(null,e),Wo:Tb.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),vb(e)?yb(e):e.gu.set("Unknown")):(await e.pu.stop(),_b(e))}))),e.pu}function Fb(e){return e.Iu||(e.Iu=function(e,t,n){const r=Hf(e);return r.su(),new ab(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:Nb.bind(null,e),Zr:Pb.bind(null,e),tu:Rb.bind(null,e),Zo:Ob.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await kb(e)):(await e.Iu.stop(),e.fu.length>0&&(Bf("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vb{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Yf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Vb(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qf(Wf.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bb(e,t){if(qf("AsyncQueue",`${t}: ${e}`),Pp(e))return new Qf(Wf.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.comparator=e?(t,n)=>e(t,n)||gp.comparator(t.key,n.key):(e,t)=>gp.comparator(e.key,t.key),this.keyedMap=ly(),this.sortedSet=new Kp(this.comparator)}static emptySet(e){return new qb(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qb))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new qb;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Tu=new Kp(gp.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):zf():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Gb{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Gb(e,t,qb.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mg(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.Au=void 0,this.listeners=[]}}class Kb{constructor(){this.queries=new oy((e=>gg(e)),mg),this.onlineState="Unknown",this.Ru=new Set}}async function $b(e,t){const n=Hf(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zb),i)try{s.Au=await n.onListen(r)}catch(e){const n=Bb(e,`Initialization of query '${yg(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Yb(n)}async function Hb(e,t){const n=Hf(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Wb(e,t){const n=Hf(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&Yb(n)}function Qb(e,t,n){const r=Hf(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Yb(e){e.Ru.forEach((e=>{e.next()}))}class Xb{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Gb(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=Gb.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.It=e}Ji(e){return Vy(this.It,e)}Yi(e){return e.metadata.exists?Ky(this.It,e.document,!1):Lm.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ly(e)}}class eI{constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=tI(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const n=fp.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new Zb(this.It);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||yy()).add(e);t.set(n,r)}}return t}async complete(){const e=await F_(this.localStore,new Zb(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const n of this.queries)await V_(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function tI(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.key=e}}class rI{constructor(e){this.key=e}}class iI{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=yy(),this.mutatedKeys=yy(),this.Gu=_g(e),this.Qu=new qb(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new jb,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=vg(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return zf()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Gb(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new jb,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=yy(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new rI(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new nI(n))})),t}tc(e){this.Uu=e.Hi,this.Ku=yy();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Gb.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class sI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oI{constructor(e){this.key=e,this.nc=!1}}class aI{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new oy((e=>gg(e)),mg),this.rc=new Map,this.oc=new Set,this.uc=new Kp(gp.comparator),this.cc=new Map,this.ac=new o_,this.hc={},this.lc=new Map,this.fc=Mw.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function cI(e,t){const n=UI(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await R_(n.localStore,fg(t));n.isPrimaryClient&&fb(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await uI(n,t,r,"current"===s,e.resumeToken)}return i}async function uI(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await P_(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return II(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await P_(e.localStore,t,!0),o=new iI(t,s.Hi),a=o.Wu(s.documents),c=by.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);II(e,n,u.Xu);const l=new sI(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function lI(e,t){const n=Hf(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!mg(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await O_(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),pb(n.remoteStore,r.targetId),_I(n,r.targetId)})).catch(Cp)):(_I(n,r.targetId),await O_(n.localStore,r.targetId,!0))}async function hI(e,t,n){const r=FI(e);try{const e=await function(e,t){const n=Hf(e),r=lp.now(),i=t.reduce(((e,t)=>e.add(t.key)),yy());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=cy(),c=yy();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=$g(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Qg(e.key,t,Pm(t.value.mapValue),Bg.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:hy(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new Kp(ap)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await SI(r,e.changes),await kb(r.remoteStore)}catch(e){const t=Bb(e,"Failed to persist write");n.reject(t)}}async function dI(e,t){const n=Hf(e);try{const e=await x_(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Kf(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Kf(r.nc):e.removedDocuments.size>0&&(Kf(r.nc),r.nc=!1))})),await SI(n,e,t)}catch(e){await Cp(e)}}function fI(e,t,n){const r=Hf(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Hf(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&Yb(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pI(e,t,n){const r=Hf(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new Kp(gp.comparator);e=e.insert(s,Lm.newNoDocument(s,hp.min()));const n=yy().add(s),i=new _y(hp.min(),new Map,new Wp(ap),e,n);await dI(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),EI(r)}else await O_(r.localStore,t,!1).then((()=>_I(r,t,n))).catch(Cp)}async function mI(e,t){const n=Hf(e),r=t.batch.batchId;try{const e=await A_(n.localStore,t);wI(n,r,null),vI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await SI(n,e)}catch(e){await Cp(e)}}async function gI(e,t,n){const r=Hf(e);try{const e=await function(e,t){const n=Hf(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Kf(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);wI(r,t,n),vI(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await SI(r,e)}catch(n){await Cp(n)}}async function yI(e,t){const n=Hf(e);wb(n.remoteStore)||Bf("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Hf(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.lc.get(e)||[];r.push(t),n.lc.set(e,r)}catch(e){const n=Bb(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function vI(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function wI(e,t,n){const r=Hf(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function _I(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||bI(e,t)}))}function bI(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(pb(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),EI(e))}function II(e,t,n){for(const r of n)r instanceof nI?(e.ac.addReference(r.key,t),TI(e,r)):r instanceof rI?(Bf("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||bI(e,r.key)):zf()}function TI(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Bf("SyncEngine","New document in limbo: "+n),e.oc.add(r),EI(e))}function EI(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new gp(fp.fromString(t)),r=e.fc.next();e.cc.set(r,new oI(n)),e.uc=e.uc.insert(n,r),fb(e.remoteStore,new jv(fg(ag(n.path)),r,2,qp.at))}}async function SI(e,t,n){const r=Hf(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=I_.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=Hf(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>xp.forEach(t,(t=>xp.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>xp.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Pp(e))throw e;Bf("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,s))}async function kI(e,t){const n=Hf(e);if(!n.currentUser.isEqual(t)){Bf("SyncEngine","User change. New user:",t.toKey());const e=await k_(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Qf(Wf.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await SI(n,e.ji)}}function AI(e,t){const n=Hf(e),r=n.cc.get(t);if(r&&r.nc)return yy().add(r.key);{let e=yy();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}async function CI(e,t){const n=Hf(e),r=await P_(n.localStore,t.query,!0),i=t.view.tc(r);return n.isPrimaryClient&&II(n,t.targetId,i.Xu),i}async function xI(e,t){const n=Hf(e);return M_(n.localStore,t).then((e=>SI(n,e)))}async function DI(e,t,n,r){const i=Hf(e),s=await function(e,t){const n=Hf(e),r=Hf(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Tn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):xp.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await kb(i.remoteStore):"acknowledged"===n||"rejected"===n?(wI(i,t,r||null),vI(i,t),function(e,t){Hf(Hf(e).mutationQueue).An(t)}(i.localStore,t)):zf(),await SI(i,s)):Bf("SyncEngine","Cannot apply mutation batch with id: "+t)}async function NI(e,t){const n=Hf(e);if(UI(n),FI(n),!0===t&&!0!==n.dc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await RI(n,e.toArray());n.dc=!0,await Mb(n.remoteStore,!0);for(const r of t)fb(n.remoteStore,r)}else if(!1===t&&!1!==n.dc){const e=[];let t=Promise.resolve();n.rc.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(_I(n,i),O_(n.localStore,i,!0)))),pb(n.remoteStore,i)})),await t,await RI(n,e),function(e){const t=Hf(e);t.cc.forEach(((e,n)=>{pb(t.remoteStore,n)})),t.ac.fs(),t.cc=new Map,t.uc=new Kp(gp.comparator)}(n),n.dc=!1,await Mb(n.remoteStore,!1)}}async function RI(e,t,n){const r=Hf(e),i=[],s=[];for(const o of t){let e;const t=r.rc.get(o);if(t&&0!==t.length){e=await R_(r.localStore,fg(t[0]));for(const e of t){const t=r.ic.get(e),n=await CI(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await L_(r.localStore,o);e=await R_(r.localStore,t),await uI(r,OI(t),o,!1,e.resumeToken)}i.push(e)}return r.sc.Wo(s),i}function OI(e){return og(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function PI(e){const t=Hf(e);return Hf(Hf(t.localStore).persistence).vi()}async function LI(e,t,n,r){const i=Hf(e);if(i.dc)return void Bf("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await M_(i.localStore,wg(s[0])),r=_y.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Zp.EMPTY_BYTE_STRING);await SI(i,e,r);break}case"rejected":await O_(i.localStore,t,!0),_I(i,t,r);break;default:zf()}}async function MI(e,t,n){const r=UI(e);if(r.dc){for(const e of t){if(r.rc.has(e)){Bf("SyncEngine","Adding an already active target "+e);continue}const t=await L_(r.localStore,e),n=await R_(r.localStore,t);await uI(r,OI(t),n.targetId,!1,n.resumeToken),fb(r.remoteStore,n)}for(const e of n)r.rc.has(e)&&await O_(r.localStore,e,!1).then((()=>{pb(r.remoteStore,e),_I(r,e)})).catch(Cp)}}function UI(e){const t=Hf(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=dI.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=AI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pI.bind(null,t),t.sc.Wo=Wb.bind(null,t.eventManager),t.sc.wc=Qb.bind(null,t.eventManager),t}function FI(e){const t=Hf(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gI.bind(null,t),t}function VI(e,t,n){const r=Hf(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Hf(e),r=Ly(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(tI(r));const i=new eI(r,e.localStore,t.It);let s=await t.mc();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.mc()}const o=await i.complete();return await SI(e,o.Lu,void 0),await function(e,t){const n=Hf(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ns.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return jf("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class BI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=rb(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return S_(this.persistence,new T_,e.initialUser,this.It)}yc(e){return new d_(p_.Bs,this.It)}gc(e){return new Q_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qI extends BI{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await FI(this.Ac.syncEngine),await kb(this.Ac.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ic(e){return S_(this.persistence,new T_,e.initialUser,this.It)}Tc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Gw(n,e.asyncQueue,t)}Ec(e,t){const n=new Bp(t,this.persistence);return new Vp(e.asyncQueue,n)}yc(e){const t=b_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Cw.withCacheSize(this.cacheSizeBytes):Cw.DEFAULT;return new v_(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,tb(),nb(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Q_}}class jI extends qI{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof W_&&(this.sharedClientState.syncEngine={Fr:DI.bind(null,t),$r:LI.bind(null,t),Br:MI.bind(null,t),vi:PI.bind(null,t),Mr:xI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await NI(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}gc(e){const t=tb();if(!W_.C(t))throw new Qf(Wf.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=b_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new W_(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class GI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>fI(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=kI.bind(null,this.syncEngine),await Mb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Kb}createDatastore(e){const t=rb(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new eb(r));var r;return function(e,t,n,r){return new cb(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>fI(this.syncEngine,e,0),s=X_.C()?new X_:new Y_,new lb(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new aI(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Hf(e);Bf("RemoteStore","RemoteStore shutting down."),t._u.add(5),await db(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(e,t,n){if(!n)throw new Qf(Wf.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function KI(e,t,n,r){if(!0===t&&!0===r)throw new Qf(Wf.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $I(e){if(!gp.isDocumentKey(e))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function HI(e){if(gp.isDocumentKey(e))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function WI(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":zf()}function QI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Qf(Wf.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=WI(e);throw new Qf(Wf.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function YI(e,t){if(t<=0)throw new Qf(Wf.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Map;class JI{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Qf(Wf.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Qf(Wf.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Qf(Wf.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Qf(Wf.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JI(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Jf;switch(e.type){case"gapi":const t=e.client;return new np(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Qf(Wf.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=XI.get(e);t&&(Bf("ComponentProvider","Removing Datastore"),XI.delete(e),t.terminate())}(this),Promise.resolve()}}function eT(e,t,n,r={}){var i;const s=(e=QI(e,ZI))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&jf("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Lf.MOCK_USER;else{t=D(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Qf(Wf.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Lf(s)}e._authCredentials=new Zf(new Xf(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rT(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tT(this.firestore,e,this._key)}}class nT{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nT(this.firestore,e,this._query)}}class rT extends nT{constructor(e,t,n){super(e,t,ag(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tT(this.firestore,null,new gp(e))}withConverter(e){return new rT(this.firestore,e,this._path)}}function iT(e,t,...n){if(e=H(e),zI("collection","path",t),e instanceof ZI){const r=fp.fromString(t,...n);return HI(r),new rT(e,null,r)}{if(!(e instanceof tT||e instanceof rT))throw new Qf(Wf.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(fp.fromString(t,...n));return HI(r),new rT(e.firestore,null,r)}}function sT(e,t){if(e=QI(e,ZI),zI("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nT(e,null,function(e){return new sg(fp.emptyPath(),e)}(t))}function oT(e,t,...n){if(e=H(e),1===arguments.length&&(t=op.R()),zI("doc","path",t),e instanceof ZI){const r=fp.fromString(t,...n);return $I(r),new tT(e,null,new gp(r))}{if(!(e instanceof tT||e instanceof rT))throw new Qf(Wf.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(fp.fromString(t,...n));return $I(r),new tT(e.firestore,e instanceof rT?e.converter:null,new gp(r))}}function aT(e,t){return e=H(e),t=H(t),(e instanceof tT||e instanceof rT)&&(t instanceof tT||t instanceof rT)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function cT(e,t){return e=H(e),t=H(t),e instanceof nT&&t instanceof nT&&e.firestore===t.firestore&&mg(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function uT(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):qf("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new Yf,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then((e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.ku)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(n);return new Jb(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Sc(){for(;this.xc()<0;)if(await this.Nc())break;if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Qf(Wf.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Hf(e),r=jy(n.It)+"/documents",i={documents:t.map((e=>Fy(n.It,e)))},s=await n._o("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=$y(n.It,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Kf(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Zg(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=gp.fromPath(t);this.mutations.push(new ey(n,this.precondition(n)))})),await async function(e,t){const n=Hf(e),r=jy(n.It)+"/documents",i={writes:t.map((e=>Wy(n.It,e)))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw zf();t=hp.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Qf(Wf.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(hp.min())?Bg.exists(!1):Bg.updateTime(t):Bg.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(hp.min()))throw new Qf(Wf.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Bg.updateTime(t)}return Bg.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new ib(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro((async()=>{const e=new dT(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Fc(e)}))))})).catch((e=>{this.Fc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!um(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Oc(),Promise.resolve())))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!iy(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Lf.UNAUTHENTICATED,this.clientId=op.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Bf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Bf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qf(Wf.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Bb(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function mT(e,t){e.asyncQueue.verifyOperationInProgress(),Bf("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await k_(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function gT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yT(e);Bf("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Lb(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Lb(t.remoteStore,n))),e.onlineComponents=t}async function yT(e){return e.offlineComponents||(Bf("FirestoreClient","Using default OfflineComponentProvider"),await mT(e,new BI)),e.offlineComponents}async function vT(e){return e.onlineComponents||(Bf("FirestoreClient","Using default OnlineComponentProvider"),await gT(e,new GI)),e.onlineComponents}function wT(e){return yT(e).then((e=>e.persistence))}function _T(e){return yT(e).then((e=>e.localStore))}function bT(e){return vT(e).then((e=>e.remoteStore))}function IT(e){return vT(e).then((e=>e.syncEngine))}function TT(e){return vT(e).then((e=>e.datastore))}async function ET(e){const t=await vT(e),n=t.eventManager;return n.onListen=cI.bind(null,t.syncEngine),n.onUnlisten=lI.bind(null,t.syncEngine),n}function ST(e){return e.asyncQueue.enqueue((async()=>{const t=await wT(e),n=await bT(e);return t.setNetworkEnabled(!0),function(e){const t=Hf(e);return t._u.delete(0),hb(t)}(n)}))}function kT(e){return e.asyncQueue.enqueue((async()=>{const t=await wT(e),n=await bT(e);return t.setNetworkEnabled(!1),async function(e){const t=Hf(e);t._u.add(0),await db(t),t.gu.set("Offline")}(n)}))}function AT(e,t){const n=new Yf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Hf(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Qf(Wf.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Bb(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await _T(e),t,n))),n.promise}function CT(e,t,n={}){const r=new Yf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new lT({next:s=>{t.enqueueAndForget((()=>Hb(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Qf(Wf.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Qf(Wf.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Xb(ag(n.path),s,{includeMetadataChanges:!0,Nu:!0});return $b(e,o)}(await ET(e),e.asyncQueue,t,n,r))),r.promise}function xT(e,t){const n=new Yf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await P_(e,t,!0),i=new iI(t,r.Hi),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Bb(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await _T(e),t,n))),n.promise}function DT(e,t,n={}){const r=new Yf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new lT({next:n=>{t.enqueueAndForget((()=>Hb(e,o))),n.fromCache&&"server"===r.source?i.reject(new Qf(Wf.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Xb(n,s,{includeMetadataChanges:!0,Nu:!0});return $b(e,o)}(await ET(e),e.asyncQueue,t,n,r))),r.promise}function NT(e,t){const n=new lT(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Hf(e).Ru.add(t),t.next()}(await ET(e),n))),()=>{n.bc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Hf(e).Ru.delete(t)}(await ET(e),n)))}}function RT(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new hT(e,t)}(function(e,t){if(e instanceof Uint8Array)return uT(e,t);if(e instanceof ArrayBuffer)return uT(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,rb(t));e.asyncQueue.enqueueAndForget((async()=>{VI(await IT(e),i,r)}))}function OT(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Hf(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ns.getNamedQuery(e,t)))}(await _T(e),t)))}class PT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ib(this,"async_queue_retry"),this.Wc=()=>{const e=nb();e&&Bf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=nb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=nb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise((()=>{}));const t=new Yf;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(xu){if(!Pp(xu))throw xu;Bf("AsyncQueue","Operation failed with retryable error: "+xu)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw qf("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=Vb.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.qc.push(r),r}zc(){this.Kc&&zf()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.qc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function LT(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class MT{constructor(){this._progressObserver={},this._taskCompletionResolver=new Yf,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=-1;class FT extends ZI{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new PT,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BT(this),this._firestoreClient.terminate()}}function VT(e){return e._firestoreClient||BT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function BT(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new am(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new pT(e._authCredentials,e._appCheckCredentials,e._queue,r)}function qT(e,t){YT(e=QI(e,FT));const n=VT(e),r=e._freezeSettings(),i=new GI;return GT(n,i,new qI(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function jT(e){YT(e=QI(e,FT));const t=VT(e),n=e._freezeSettings(),r=new GI;return GT(t,r,new jI(r,n.cacheSizeBytes))}function GT(e,t,n){const r=new Yf;return e.asyncQueue.enqueue((async()=>{try{await mT(e,n),await gT(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===Wf.FAILED_PRECONDITION||e.code===Wf.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;jf("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function zT(e){if(e._initialized&&!e._terminated)throw new Qf(Wf.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Yf;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Np.C())return Promise.resolve();const t=e+"main";await Np.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(b_(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function KT(e){return function(e){const t=new Yf;return e.asyncQueue.enqueueAndForget((async()=>yI(await IT(e),t))),t.promise}(VT(e=QI(e,FT)))}function $T(e){return ST(VT(e=QI(e,FT)))}function HT(e){return kT(VT(e=QI(e,FT)))}function WT(e,t){const n=VT(e=QI(e,FT)),r=new MT;return RT(n,e._databaseId,t,r),r}function QT(e,t){return OT(VT(e=QI(e,FT)),t).then((t=>t?new nT(e,null,t.query):null))}function YT(e){if(e._initialized||e._terminated)throw new Qf(Wf.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this._byteString=e}static fromBase64String(e){try{return new XT(Zp.fromBase64String(e))}catch(e){throw new Qf(Wf.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new XT(Zp.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Qf(Wf.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mp(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ZT{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Qf(Wf.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Qf(Wf.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ap(this._lat,e._lat)||ap(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=/^__.*__$/;class nE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Qg(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wg(e,this.data,t,this.fieldTransforms)}}class rE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Qg(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw zf()}}class sE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new sE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return SE(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(iE(this.sa)&&tE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class oE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||rb(e)}da(e,t,n,r=!1){return new sE({sa:e,methodName:t,fa:n,path:mp.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function aE(e){const t=e._freezeSettings(),n=rb(e._databaseId);return new oE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function cE(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);bE("Data must be an object, but it was:",o,r);const a=wE(r,o);let c,u;if(s.merge)c=new Xp(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=IE(t,r,n);if(!o.contains(i))throw new Qf(Wf.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);kE(e,i)||e.push(i)}c=new Xp(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new nE(new Om(a),c,u)}class uE extends ZT{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uE}}function lE(e,t,n){return new sE({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class hE extends ZT{_toFieldTransform(e){return new Ug(e.path,new xg)}isEqual(e){return e instanceof hE}}class dE extends ZT{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=lE(this,e,!0),n=this._a.map((e=>vE(e,t))),r=new Dg(n);return new Ug(e.path,r)}isEqual(e){return this===e}}class fE extends ZT{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=lE(this,e,!0),n=this._a.map((e=>vE(e,t))),r=new Rg(n);return new Ug(e.path,r)}isEqual(e){return this===e}}class pE extends ZT{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Pg(e.It,Eg(e.It,this.wa));return new Ug(e.path,t)}isEqual(e){return this===e}}function mE(e,t,n,r){const i=e.da(1,t,n);bE("Data must be an object, but it was:",i,r);const s=[],o=Om.empty();Gp(r,((e,r)=>{const a=EE(t,e,n);r=H(r);const c=i.ca(a);if(r instanceof uE)s.push(a);else{const e=vE(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Xp(s);return new rE(o,a,i.fieldTransforms)}function gE(e,t,n,r,i,s){const o=e.da(1,t,n),a=[IE(t,r,n)],c=[i];if(s.length%2!=0)throw new Qf(Wf.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(IE(t,s[d])),c.push(s[d+1]);const u=[],l=Om.empty();for(let d=a.length-1;d>=0;--d)if(!kE(u,a[d])){const e=a[d];let t=c[d];t=H(t);const n=o.ca(e);if(t instanceof uE)u.push(e);else{const r=vE(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new Xp(u);return new rE(l,h,o.fieldTransforms)}function yE(e,t,n,r=!1){return vE(n,e.da(r?4:3,t))}function vE(e,t){if(_E(e=H(e)))return bE("Unsupported field value:",t,e),wE(e,t);if(e instanceof ZT)return function(e,t){if(!iE(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=vE(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=H(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Eg(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=lp.fromDate(e);return{timestampValue:Ry(t.It,n)}}if(e instanceof lp){const n=new lp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ry(t.It,n)}}if(e instanceof eE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof XT)return{bytesValue:Oy(t.It,e._byteString)};if(e instanceof tT){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:My(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${WI(e)}`)}(e,t)}function wE(e,t){const n={};return zp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gp(e,((e,r)=>{const i=vE(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function _E(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof lp||e instanceof eE||e instanceof XT||e instanceof tT||e instanceof ZT)}function bE(e,t,n){if(!_E(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=WI(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function IE(e,t,n){if((t=H(t))instanceof JT)return t._internalPath;if("string"==typeof t)return EE(e,t);throw SE("Field path arguments must be of type string or ",e,!1,void 0,n)}const TE=new RegExp("[~\\*/\\[\\]]");function EE(e,t,n){if(t.search(TE)>=0)throw SE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new JT(...t.split("."))._internalPath}catch(r){throw SE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function SE(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Qf(Wf.INVALID_ARGUMENT,a+e+c)}function kE(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new CE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xE("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class CE extends AE{data(){return super.data()}}function xE(e,t){return"string"==typeof t?EE(e,t):t instanceof JT?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Qf(Wf.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NE{}function RE(e,...t){for(const n of t)e=n._apply(e);return e}class OE extends NE{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){const t=aE(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){WE(o,s);const t=[];for(const n of o)t.push(HE(r,e,n));a={arrayValue:{values:t}}}else a=HE(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||WE(o,s),a=yE(n,t,o,"in"===s||"not-in"===s);const c=Km.create(i,s,a);return function(e,t){if(t.dt()){const n=lg(e);if(null!==n&&!n.isEqual(t.field))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=ug(e);null!==r&&QE(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Qf(Wf.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Qf(Wf.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new nT(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new sg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function PE(e,t,n){const r=t,i=xE("where",e);return new OE(i,r,n)}class LE extends NE{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Qf(Wf.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Qf(Wf.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new tg(t,n);return function(e,t){if(null===ug(e)){const n=lg(e);null!==n&&QE(e,n,t.field)}}(e,r),r}(e._query,this.ma,this.pa);return new nT(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new sg(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ME(e,t="asc"){const n=t,r=xE("orderBy",e);return new LE(r,n)}class UE extends NE{constructor(e,t,n){super(),this.type=e,this.Ia=t,this.Ta=n}_apply(e){return new nT(e.firestore,e.converter,pg(e._query,this.Ia,this.Ta))}}function FE(e){return YI("limit",e),new UE("limit",e,"F")}function VE(e){return YI("limitToLast",e),new UE("limitToLast",e,"L")}class BE extends NE{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){const t=$E(e,this.type,this.Ea,this.Aa);return new nT(e.firestore,e.converter,function(e,t){return new sg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function qE(...e){return new BE("startAt",e,!0)}function jE(...e){return new BE("startAfter",e,!1)}class GE extends NE{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){const t=$E(e,this.type,this.Ea,this.Aa);return new nT(e.firestore,e.converter,function(e,t){return new sg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function zE(...e){return new GE("endBefore",e,!1)}function KE(...e){return new GE("endAt",e,!0)}function $E(e,t,n,r){if(n[0]=H(n[0]),n[0]instanceof AE)return function(e,t,n,r,i){if(!r)throw new Qf(Wf.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of dg(e))if(o.field.isKeyField())s.push(bm(t,r.key));else{const e=r.data.field(o.field);if(im(e))throw new Qf(Wf.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new eg(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=aE(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new Qf(Wf.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!hg(e)&&-1!==s.indexOf("/"))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(fp.fromString(s));if(!gp.isDocumentKey(n))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new gp(n);a.push(bm(t,i))}else{const e=yE(n,r,s);a.push(e)}}return new eg(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function HE(e,t,n){if("string"==typeof(n=H(n))){if(""===n)throw new Qf(Wf.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hg(t)&&-1!==n.indexOf("/"))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(fp.fromString(n));if(!gp.isDocumentKey(r))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bm(e,new gp(r))}if(n instanceof tT)return bm(e,n._key);throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${WI(n)}.`)}function WE(e,t){if(!Array.isArray(e)||0===e.length)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Qf(Wf.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function QE(e,t,n){if(!n.isEqual(t))throw new Qf(Wf.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{convertValue(e,t="none"){switch(pm(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nm(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rm(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw zf()}}convertObject(e,t){const n={};return Gp(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new eE(nm(e.latitude),nm(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=sm(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(om(e));default:return null}}convertTimestamp(e){const t=tm(e);return new lp(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=fp.fromString(e);Kf(uv(n));const r=new cm(n.get(1),n.get(3)),i=new gp(n.popFirst(5));return r.isEqual(t)||qf(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class JE extends YE{constructor(e){super(),this.firestore=e}convertBytes(e){return new XT(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tT(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eS extends AE{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(xE("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class tS extends eS{data(e={}){return super.data(e)}}class nS{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ZE(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new tS(this._firestore,this._userDataWriter,n.key,n,new ZE(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Qf(Wf.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new tS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ZE(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new tS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ZE(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:rS(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return zf()}}function iS(e,t){return e instanceof eS&&t instanceof eS?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof nS&&t instanceof nS&&e._firestore===t._firestore&&cT(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e){e=QI(e,tT);const t=QI(e.firestore,FT);return CT(VT(t),e._key).then((n=>wS(t,e,n)))}class oS extends YE{constructor(e){super(),this.firestore=e}convertBytes(e){return new XT(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tT(this.firestore,null,t)}}function aS(e){e=QI(e,tT);const t=QI(e.firestore,FT),n=VT(t),r=new oS(t);return AT(n,e._key).then((n=>new eS(t,r,e._key,n,new ZE(null!==n&&n.hasLocalMutations,!0),e.converter)))}function cS(e){e=QI(e,tT);const t=QI(e.firestore,FT);return CT(VT(t),e._key,{source:"server"}).then((n=>wS(t,e,n)))}function uS(e){e=QI(e,nT);const t=QI(e.firestore,FT),n=VT(t),r=new oS(t);return DE(e._query),DT(n,e._query).then((n=>new nS(t,r,e,n)))}function lS(e){e=QI(e,nT);const t=QI(e.firestore,FT),n=VT(t),r=new oS(t);return xT(n,e._query).then((n=>new nS(t,r,e,n)))}function hS(e){e=QI(e,nT);const t=QI(e.firestore,FT),n=VT(t),r=new oS(t);return DT(n,e._query,{source:"server"}).then((n=>new nS(t,r,e,n)))}function dS(e,t,n){e=QI(e,tT);const r=QI(e.firestore,FT),i=XE(e.converter,t,n);return vS(r,[cE(aE(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Bg.none())])}function fS(e,t,n,...r){e=QI(e,tT);const i=QI(e.firestore,FT),s=aE(i);let o;return o="string"==typeof(t=H(t))||t instanceof JT?gE(s,"updateDoc",e._key,t,n,r):mE(s,"updateDoc",e._key,t),vS(i,[o.toMutation(e._key,Bg.exists(!0))])}function pS(e){return vS(QI(e.firestore,FT),[new Zg(e._key,Bg.none())])}function mS(e,t){const n=QI(e.firestore,FT),r=oT(e),i=XE(e.converter,t);return vS(n,[cE(aE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Bg.exists(!1))]).then((()=>r))}function gS(e,...t){var n,r,i;e=H(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||LT(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(LT(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof tT)u=QI(e.firestore,FT),l=ag(e._key.path),c={next:n=>{t[o]&&t[o](wS(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=QI(e,nT);u=QI(n.firestore,FT),l=n._query;const r=new oS(u);c={next:e=>{t[o]&&t[o](new nS(u,r,n,e))},error:t[o+1],complete:t[o+2]},DE(e._query)}return function(e,t,n,r){const i=new lT(r),s=new Xb(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>$b(await ET(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>Hb(await ET(e),s)))}}(VT(u),l,a,c)}function yS(e,t){return NT(VT(e=QI(e,FT)),LT(t)?t:{next:t})}function vS(e,t){return function(e,t){const n=new Yf;return e.asyncQueue.enqueueAndForget((async()=>hI(await IT(e),t,n))),n.promise}(VT(e),t)}function wS(e,t,n){const r=n.docs.get(t._key),i=new oS(e);return new eS(e,i,t._key,r,new ZE(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _S={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=aE(e)}set(e,t,n){this._verifyNotCommitted();const r=IS(e,this._firestore),i=XE(r.converter,t,n),s=cE(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Bg.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=IS(e,this._firestore);let s;return s="string"==typeof(t=H(t))||t instanceof JT?gE(this._dataReader,"WriteBatch.update",i._key,t,n,r):mE(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Bg.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=IS(e,this._firestore);return this._mutations=this._mutations.concat(new Zg(t._key,Bg.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Qf(Wf.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function IS(e,t){if((e=H(e)).firestore!==t)throw new Qf(Wf.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=aE(e)}get(e){const t=IS(e,this._firestore),n=new JE(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return zf();const r=e[0];if(r.isFoundDocument())return new AE(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new AE(this._firestore,n,t._key,null,t.converter);throw zf()}))}set(e,t,n){const r=IS(e,this._firestore),i=XE(r.converter,t,n),s=cE(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=IS(e,this._firestore);let s;return s="string"==typeof(t=H(t))||t instanceof JT?gE(this._dataReader,"Transaction.update",i._key,t,n,r):mE(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=IS(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=IS(e,this._firestore),n=new oS(this._firestore);return super.get(e).then((e=>new eS(this._firestore,n,t._key,e._document,new ZE(!1,!1),t.converter)))}}function ES(e,t,n){e=QI(e,FT);const r=Object.assign(Object.assign({},_S),n);return function(e){if(e.maxAttempts<1)throw new Qf(Wf.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new Yf;return e.asyncQueue.enqueueAndForget((async()=>{const i=await TT(e);new fT(e.asyncQueue,i,n,t,r).run()})),r.promise}(VT(e),(n=>t(new TS(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return new uE("deleteField")}function kS(){return new hE("serverTimestamp")}function AS(...e){return new dE("arrayUnion",e)}function CS(...e){return new fE("arrayRemove",e)}function xS(e){return new pE("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Mf=e}(bt),pt(new W("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new FT(new ep(e.getProvider("auth-internal")),new ip(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Qf(Wf.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cm(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),kt(Pf,"3.7.3",e),kt(Pf,"3.7.3","esm2017")}();const DS="@firebase/firestore-compat",NS="0.2.3";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function RS(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Qf("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){if("undefined"===typeof Uint8Array)throw new Qf("unimplemented","Uint8Arrays are not available in this environment.")}function PS(){if(!Jp())throw new Qf("unimplemented","Blobs are unavailable in Firestore in this environment.")}class LS{constructor(e){this._delegate=e}static fromBase64String(e){return PS(),new LS(XT.fromBase64String(e))}static fromUint8Array(e){return OS(),new LS(XT.fromUint8Array(e))}toBase64(){return PS(),this._delegate.toBase64()}toUint8Array(){return OS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(e){return US(e,["next","error","complete"])}function US(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{enableIndexedDbPersistence(e,t){return qT(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return jT(e._delegate)}clearIndexedDbPersistence(e){return zT(e._delegate)}}class VS{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof cm||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||jf("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){eT(this._delegate,e,t,n)}enableNetwork(){return $T(this._delegate)}disableNetwork(){return HT(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,KI("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return KT(this._delegate)}onSnapshotsInSync(e){return yS(this._delegate,e)}get app(){if(!this._appCompat)throw new Qf("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ek(this,iT(this._delegate,e))}catch(t){throw $S(t,"collection()","Firestore.collection()")}}doc(e){try{return new KS(this,oT(this._delegate,e))}catch(t){throw $S(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new XS(this,sT(this._delegate,e))}catch(t){throw $S(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ES(this._delegate,(t=>e(new jS(this,t))))}batch(){return VT(this._delegate),new GS(new bS(this._delegate,(e=>vS(this._delegate,e))))}loadBundle(e){return WT(this._delegate,e)}namedQuery(e){return QT(this._delegate,e).then((e=>e?new XS(this,e):null))}}class BS extends YE{constructor(e){super(),this.firestore=e}convertBytes(e){return new LS(new XT(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return KS.forKey(t,this.firestore,null)}}function qS(e){Vf(e)}class jS{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new BS(e)}get(e){const t=tk(e);return this._delegate.get(t).then((e=>new QS(this._firestore,new eS(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=tk(e);return n?(RS("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=tk(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=tk(e);return this._delegate.delete(t),this}}class GS{constructor(e){this._delegate=e}set(e,t,n){const r=tk(e);return n?(RS("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=tk(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=tk(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class zS{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new tS(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new YS(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=zS.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new zS(e,new BS(e),t),r.set(t,i)),i}}zS.INSTANCES=new WeakMap;class KS{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new BS(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Qf("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new KS(t,new tT(t._delegate,n,new gp(e)))}static forKey(e,t,n){return new KS(t,new tT(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ek(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ek(this.firestore,iT(this._delegate,e))}catch(t){throw $S(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof tT&&aT(this._delegate,e)}set(e,t){t=RS("DocumentReference.set",t);try{return t?dS(this._delegate,e,t):dS(this._delegate,e)}catch(n){throw $S(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?fS(this._delegate,e):fS(this._delegate,e,t,...n)}catch(r){throw $S(r,"updateDoc()","DocumentReference.update()")}}delete(){return pS(this._delegate)}onSnapshot(...e){const t=HS(e),n=WS(e,(e=>new QS(this.firestore,new eS(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return gS(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?aS(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?cS(this._delegate):sS(this._delegate),t.then((e=>new QS(this.firestore,new eS(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new KS(this.firestore,e?this._delegate.withConverter(zS.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $S(e,t,n){return e.message=e.message.replace(t,n),e}function HS(e){for(const t of e)if("object"===typeof t&&!MS(t))return t;return{}}function WS(e,t){var n,r;let i;return i=MS(e[0])?e[0]:MS(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class QS{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new KS(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return iS(this._delegate,e._delegate)}}class YS extends QS{data(e){const t=this._delegate.data(e);return $f(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class XS{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new BS(e)}where(e,t,n){try{return new XS(this.firestore,RE(this._delegate,PE(e,t,n)))}catch(r){throw $S(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new XS(this.firestore,RE(this._delegate,ME(e,t)))}catch(n){throw $S(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new XS(this.firestore,RE(this._delegate,FE(e)))}catch(t){throw $S(t,"limit()","Query.limit()")}}limitToLast(e){try{return new XS(this.firestore,RE(this._delegate,VE(e)))}catch(t){throw $S(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new XS(this.firestore,RE(this._delegate,qE(...e)))}catch(t){throw $S(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new XS(this.firestore,RE(this._delegate,jE(...e)))}catch(t){throw $S(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new XS(this.firestore,RE(this._delegate,zE(...e)))}catch(t){throw $S(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new XS(this.firestore,RE(this._delegate,KE(...e)))}catch(t){throw $S(t,"endAt()","Query.endAt()")}}isEqual(e){return cT(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?lS(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?hS(this._delegate):uS(this._delegate),t.then((e=>new ZS(this.firestore,new nS(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=HS(e),n=WS(e,(e=>new ZS(this.firestore,new nS(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return gS(this._delegate,t,n)}withConverter(e){return new XS(this.firestore,e?this._delegate.withConverter(zS.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class JS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new YS(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ZS{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new XS(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new YS(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new JS(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new YS(this._firestore,n))}))}isEqual(e){return iS(this._delegate,e._delegate)}}class ek extends XS{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new KS(this.firestore,e):null}doc(e){try{return new KS(this.firestore,void 0===e?oT(this._delegate):oT(this._delegate,e))}catch(t){throw $S(t,"doc()","CollectionReference.doc()")}}add(e){return mS(this._delegate,e).then((e=>new KS(this.firestore,e)))}isEqual(e){return aT(this._delegate,e._delegate)}withConverter(e){return new ek(this.firestore,e?this._delegate.withConverter(zS.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function tk(e){return QI(e,tT)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(...e){this._delegate=new JT(...e)}static documentId(){return new nk(mp.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof JT&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this._delegate=e}static serverTimestamp(){const e=kS();return e._methodName="FieldValue.serverTimestamp",new rk(e)}static delete(){const e=SS();return e._methodName="FieldValue.delete",new rk(e)}static arrayUnion(...e){const t=AS(...e);return t._methodName="FieldValue.arrayUnion",new rk(t)}static arrayRemove(...e){const t=CS(...e);return t._methodName="FieldValue.arrayRemove",new rk(t)}static increment(e){const t=xS(e);return t._methodName="FieldValue.increment",new rk(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={Firestore:VS,GeoPoint:eE,Timestamp:lp,Blob:LS,Transaction:jS,WriteBatch:GS,DocumentReference:KS,DocumentSnapshot:QS,Query:XS,QueryDocumentSnapshot:YS,QuerySnapshot:ZS,CollectionReference:ek,FieldPath:nk,FieldValue:rk,setLogLevel:qS,CACHE_SIZE_UNLIMITED:UT};function sk(e,t){e.INTERNAL.registerComponent(new W("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},ik)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(e){sk(e,((e,t)=>new VS(e,t,new FS))),e.registerVersion(DS,NS)}ok(tn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ak="firebasestorage.googleapis.com",ck="storageBucket",uk=12e4,lk=6e5,hk=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dk extends R{constructor(e,t,n=0){super(fk(e),`Firebase Storage: ${t} (${fk(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dk.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fk(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function fk(e){return"storage/"+e}function pk(){const e="An unknown error occurred, please check the error payload for server response.";return new dk("unknown",e)}function mk(e){return new dk("object-not-found","Object '"+e+"' does not exist.")}function gk(e){return new dk("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yk(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new dk("unauthenticated",e)}function vk(){return new dk("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function wk(e){return new dk("unauthorized","User does not have permission to access '"+e+"'.")}function _k(){return new dk("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function bk(){return new dk("canceled","User canceled the upload/download.")}function Ik(e){return new dk("invalid-url","Invalid URL '"+e+"'.")}function Tk(e){return new dk("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function Ek(){return new dk("no-default-bucket","No default bucket found. Did you set the '"+ck+"' property when initializing the app?")}function Sk(){return new dk("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function kk(){return new dk("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function Ak(){return new dk("no-download-url","The given file does not have any download URLs.")}function Ck(e){return new dk("unsupported-environment",`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xk(e){return new dk("invalid-argument",e)}function Dk(){return new dk("app-deleted","The Firebase app was deleted.")}function Nk(e){return new dk("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rk(e,t){return new dk("invalid-format","String does not match format '"+e+"': "+t)}function Ok(e){throw new dk("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Pk.makeFromUrl(e,t)}catch(r){return new Pk(e,"")}if(""===n.path)return n;throw Tk(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),a={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",l=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${l}/${u}/b/${r}/o${h}`,"i"),f={bucket:1,path:3},p=t===ak?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",g=new RegExp(`^https?://${p}/${r}/${m}`,"i"),y={bucket:1,path:2},v=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:c},{regex:g,indices:y,postModify:c}];for(let w=0;w<v.length;w++){const t=v[w],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new Pk(e,i),t.postModify(n);break}}if(null==n)throw Ik(e);return n}}class Lk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function Uk(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(e){return void 0!==e}function Vk(e){return"function"===typeof e}function Bk(e){return"object"===typeof e&&!Array.isArray(e)}function qk(e){return"string"===typeof e||e instanceof String}function jk(e){return Gk()&&e instanceof Blob}function Gk(){return"undefined"!==typeof Blob&&!p()}function zk(e,t,n,r){if(r<t)throw xk(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw xk(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function $k(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hk;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wk(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(Hk||(Hk={}));class Qk{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new Yk(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Hk.NO_ERROR,i=n.getStatus();if((!t||Wk(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===Hk.ABORT;return void e(!1,new Yk(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Yk(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());Fk(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=pk();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?Dk():bk();r(e)}else{const e=_k();r(e)}};this.canceled_?t(!1,new Yk(!1,null,!0)):this.backoffId_=Mk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Uk(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Yk{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Xk(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Jk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Zk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function eA(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function tA(e,t,n,r,i,s,o=!0){const a=$k(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return Zk(u,t),Xk(u,n),Jk(u,s),eA(u,r),new Qk(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function rA(...e){const t=nA();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Gk())return new Blob(e);throw new dk("unsupported-environment","This browser doesn't seem to support creating Blobs")}function iA(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(e){if("undefined"===typeof atob)throw Ck("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class aA{constructor(e,t){this.data=e,this.contentType=t||null}}function cA(e,t){switch(e){case oA.RAW:return new aA(uA(t));case oA.BASE64:case oA.BASE64URL:return new aA(hA(e,t));case oA.DATA_URL:return new aA(fA(t),pA(t))}throw pk()}function uA(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function lA(e){let t;try{t=decodeURIComponent(e)}catch(n){throw Rk(oA.DATA_URL,"Malformed data URL.")}return uA(t)}function hA(e,t){switch(e){case oA.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw Rk(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case oA.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw Rk(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sA(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw Rk(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class dA{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Rk(oA.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=mA(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function fA(e){const t=new dA(e);return t.base64?hA(oA.BASE64,t.rest):lA(t.rest)}function pA(e){const t=new dA(e);return t.contentType}function mA(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){let n=0,r="";jk(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(jk(this.data_)){const n=this.data_,r=iA(n,e,t);return null===r?null:new gA(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new gA(n,!0)}}static getBlob(...e){if(Gk()){const t=e.map((e=>e instanceof gA?e.data_:e));return new gA(rA.apply(null,t))}{const t=e.map((e=>qk(e)?cA(oA.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new gA(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(e){let t;try{t=JSON.parse(e)}catch(n){return null}return Bk(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function wA(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function _A(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(e,t){return t}class IA{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||bA}}let TA=null;function EA(e){return!qk(e)||e.length<2?e:_A(e)}function SA(){if(TA)return TA;const e=[];function t(e,t){return EA(t)}e.push(new IA("bucket")),e.push(new IA("generation")),e.push(new IA("metageneration")),e.push(new IA("name","fullPath",!0));const n=new IA("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new IA("size");return i.xform=r,e.push(i),e.push(new IA("timeCreated")),e.push(new IA("updated")),e.push(new IA("md5Hash",null,!0)),e.push(new IA("cacheControl",null,!0)),e.push(new IA("contentDisposition",null,!0)),e.push(new IA("contentEncoding",null,!0)),e.push(new IA("contentLanguage",null,!0)),e.push(new IA("contentType",null,!0)),e.push(new IA("metadata","customMetadata",!0)),TA=e,TA}function kA(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new Pk(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function AA(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return kA(r,e),r}function CA(e,t,n){const r=yA(t);if(null===r)return null;const i=r;return AA(e,i,n)}function xA(e,t,n,r){const i=yA(t);if(null===i)return null;if(!qk(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=Kk(a,n,r),u=$k({alt:"media",token:t});return c+u}));return c[0]}function DA(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="prefixes",RA="items";function OA(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[NA])for(const i of n[NA]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new Pk(t,n));r.prefixes.push(s)}if(n[RA])for(const i of n[RA]){const n=e._makeStorageReference(new Pk(t,i["name"]));r.items.push(n)}return r}function PA(e,t,n){const r=yA(n);if(null===r)return null;const i=r;return OA(e,t,i)}class LA{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(e){if(!e)throw pk()}function UA(e,t){function n(n,r){const i=CA(e,r,t);return MA(null!==i),i}return n}function FA(e,t){function n(n,r){const i=PA(e,t,r);return MA(null!==i),i}return n}function VA(e,t){function n(n,r){const i=CA(e,r,t);return MA(null!==i),xA(i,r,e.host,e._protocol)}return n}function BA(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?vk():yk():402===t.getStatus()?gk(e.bucket):403===t.getStatus()?wk(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function qA(e){const t=BA(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=mk(e.path)),i.serverResponse=r.serverResponse,i}return n}function jA(e,t,n){const r=t.fullServerUrl(),i=Kk(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new LA(i,s,UA(e,n),o);return a.errorHandler=qA(t),a}function GA(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=Kk(o,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new LA(a,c,FA(e,t.bucket),u);return l.urlParams=s,l.errorHandler=BA(t),l}function zA(e,t,n){const r=t.fullServerUrl(),i=Kk(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new LA(i,s,VA(e,n),o);return a.errorHandler=qA(t),a}function KA(e,t,n,r){const i=t.fullServerUrl(),s=Kk(i,e.host,e._protocol),o="PATCH",a=DA(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new LA(s,o,UA(e,r),u);return l.headers=c,l.body=a,l.errorHandler=qA(t),l}function $A(e,t){const n=t.fullServerUrl(),r=Kk(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new LA(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=qA(t),a}function HA(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function WA(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=HA(null,t)),r}function QA(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=WA(t,r,i),l=DA(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=gA.getBlob(h,r,d);if(null===f)throw Sk();const p={name:u["fullPath"]},m=Kk(s,e.host,e._protocol),g="POST",y=e.maxUploadRetryTime,v=new LA(m,g,UA(e,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=BA(t),v}class YA{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function XA(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){MA(!1)}const r=t||["active"];return MA(!!n&&-1!==r.indexOf(n)),n}function JA(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=WA(t,r,i),a={name:o["fullPath"]},c=Kk(s,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=DA(o,n),d=e.maxUploadRetryTime;function f(e){let t;XA(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){MA(!1)}return MA(qk(t)),t}const p=new LA(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=BA(t),p}function ZA(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=XA(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){MA(!1)}n||MA(!1);const i=Number(n);return MA(!isNaN(i)),new YA(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new LA(n,o,s,a);return c.headers=i,c.errorHandler=BA(t),c}const eC=262144;function tC(e,t,n,r,i,s,o,a){const c=new YA(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw kk();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,d);if(null===m)throw Sk();function g(e,n){const i=XA(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?UA(t,s)(e,n):null,new YA(o,a,"final"===i,u)}const y="POST",v=t.maxUploadRetryTime,w=new LA(n,y,g,v);return w.headers=p,w.body=m.uploadData(),w.progressCallback=a||null,w.errorHandler=BA(e),w}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={STATE_CHANGED:"state_changed"},rC={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function iC(e){switch(e){case"running":case"pausing":case"canceling":return rC.RUNNING;case"paused":return rC.PAUSED;case"success":return rC.SUCCESS;case"canceled":return rC.CANCELED;case"error":return rC.ERROR;default:return rC.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,n){const r=Vk(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aC=null;class cC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hk.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Hk.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Hk.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw Ok("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ok("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ok("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ok("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ok("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class uC extends cC{initXhr(){this.xhr_.responseType="text"}}function lC(){return aC?aC():new uC}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hC{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=SA(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(Wk(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,hk),this._needToFetchStatus=!0,void this.completeTransitions_();e=_k()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=JA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,lC,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=ZA(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,lC,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=eC*this._chunkMultiplier,t=new YA(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=tC(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,lC,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=eC*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=jA(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,lC,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=QA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,lC,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=bk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=iC(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new sC(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(iC(this._state)){case rC.SUCCESS:oC(this._resolve.bind(null,this.snapshot))();break;case rC.CANCELED:case rC.ERROR:const t=this._reject;oC(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=iC(this._state);switch(t){case rC.RUNNING:case rC.PAUSED:e.next&&oC(e.next.bind(e,this.snapshot))();break;case rC.SUCCESS:e.complete&&oC(e.complete.bind(e))();break;case rC.CANCELED:case rC.ERROR:e.error&&oC(e.error.bind(e,this._error))();break;default:e.error&&oC(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,t){this._service=e,this._location=t instanceof Pk?t:Pk.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new dC(e,t)}get root(){const e=new Pk(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _A(this._location.path)}get storage(){return this._service}get parent(){const e=vA(this._location.path);if(null===e)return null;const t=new Pk(this._location.bucket,e);return new dC(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw Nk(e)}}function fC(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new hC(e,new gA(t),n)}function pC(e){const t={prefixes:[],items:[]};return mC(e,t).then((()=>t))}async function mC(e,t,n){const r={pageToken:n},i=await gC(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await mC(e,t,i.nextPageToken)}function gC(e,t){null!=t&&"number"===typeof t.maxResults&&zk("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=GA(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,lC)}function yC(e){e._throwIfRoot("getMetadata");const t=jA(e.storage,e._location,SA());return e.storage.makeRequestWithTokens(t,lC)}function vC(e,t){e._throwIfRoot("updateMetadata");const n=KA(e.storage,e._location,t,SA());return e.storage.makeRequestWithTokens(n,lC)}function wC(e){e._throwIfRoot("getDownloadURL");const t=zA(e.storage,e._location,SA());return e.storage.makeRequestWithTokens(t,lC).then((e=>{if(null===e)throw Ak();return e}))}function _C(e){e._throwIfRoot("deleteObject");const t=$A(e.storage,e._location);return e.storage.makeRequestWithTokens(t,lC)}function bC(e,t){const n=wA(e._location.path,t),r=new Pk(e._location.bucket,n);return new dC(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(e){return/^[A-Za-z]+:\/\//.test(e)}function TC(e,t){return new dC(e,t)}function EC(e,t){if(e instanceof CC){const n=e;if(null==n._bucket)throw Ek();const r=new dC(n,n._bucket);return null!=t?EC(r,t):r}return void 0!==t?bC(e,t):e}function SC(e,t){if(t&&IC(t)){if(e instanceof CC)return TC(e,t);throw xk("To use ref(service, url), the first argument must be a Storage instance.")}return EC(e,t)}function kC(e,t){const n=null===t||void 0===t?void 0:t[ck];return null==n?null:Pk.makeFromBucketSpec(n,e)}function AC(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:D(i,e.app.options.projectId))}class CC{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ak,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uk,this._maxUploadRetryTime=lk,this._requests=new Set,this._bucket=null!=r?Pk.makeFromBucketSpec(r,this._host):kC(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Pk.makeFromBucketSpec(this._url,e):this._bucket=kC(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dC(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new Lk(Dk());{const s=tA(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const xC="@firebase/storage",DC="0.9.14",NC="storage";function RC(e,t,n){return e=H(e),fC(e,t,n)}function OC(e){return e=H(e),yC(e)}function PC(e,t){return e=H(e),vC(e,t)}function LC(e,t){return e=H(e),gC(e,t)}function MC(e){return e=H(e),pC(e)}function UC(e){return e=H(e),wC(e)}function FC(e){return e=H(e),_C(e)}function VC(e,t){return e=H(e),SC(e,t)}function BC(e,t){return bC(e,t)}function qC(e,t,n,r={}){AC(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new CC(n,r,i,t,bt)}function GC(){pt(new W(NC,jC,"PUBLIC").setMultipleInstances(!0)),kt(xC,DC,""),kt(xC,DC,"esm2017")}GC();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zC{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new zC(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new zC(t,this,this._ref))}),t)}on(e,t,n,r){let i;return t&&(i="function"===typeof t?e=>t(new zC(e,this,this._ref)):{next:t.next?e=>t.next(new zC(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class $C{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new HC(e,this._service)))}get items(){return this._delegate.items.map((e=>new HC(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=BC(this._delegate,e);return new HC(t,this.storage)}get root(){return new HC(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new HC(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new KC(RC(this._delegate,e,t),this)}putString(e,t=oA.RAW,n){this._throwIfRoot("putString");const r=cA(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new KC(new hC(this._delegate,new gA(r.data,!0),i),this)}listAll(){return MC(this._delegate).then((e=>new $C(e,this.storage)))}list(e){return LC(this._delegate,e||void 0).then((e=>new $C(e,this.storage)))}getMetadata(){return OC(this._delegate)}updateMetadata(e){return PC(this._delegate,e)}getDownloadURL(){return UC(this._delegate)}delete(){return this._throwIfRoot("delete"),FC(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw Nk(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(QC(e))throw xk("ref() expected a child path but got a URL, use refFromURL instead.");return new HC(VC(this._delegate,e),this)}refFromURL(e){if(!QC(e))throw xk("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Pk.makeFromUrl(e,this._delegate.host)}catch(t){throw xk("refFromUrl() expected a valid full URL but got an invalid one.")}return new HC(VC(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){qC(this._delegate,e,t,n)}}function QC(e){return/^[A-Za-z]+:\/\//.test(e)}const YC="@firebase/storage-compat",XC="0.1.22",JC="storage-compat";function ZC(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new WC(n,r);return i}function ex(e){const t={TaskState:rC,TaskEvent:nC,StringFormat:oA,Storage:WC,Reference:HC};e.INTERNAL.registerComponent(new W(JC,ZC,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(YC,XC)}ex(tn);const tx={apiKey:"AIzaSyBFG6wX7k5jzt2LNZIAj8ZriyOerOht1AM",authDomain:"new-avatar-ai.firebaseapp.com",projectId:"new-avatar-ai",storageBucket:"new-avatar-ai.appspot.com",messagingSenderId:"183677337163",appId:"1:183677337163:web:4036f37c6e9bb5dc5557ce",measurementId:"G-BKGQT36TV9"};tn.initializeApp(tx);let nx=tn.firestore(),rx=tn.storage();const{TimeStamp:ix,GeoPoint:sx}=tn.firestore},319:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(6252);function i(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("h1",null,"Oops, something went wrong")}var s={name:"ErrorComponent.vue"},o=n(3744);const a=(0,o.Z)(s,[["render",i]]);var c=a},9058:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(6252),i=n(9963),s=n(3577);const o=e=>((0,r.dD)("data-v-06a664a7"),e=e(),(0,r.Cn)(),e),a={class:"content-container"},c={class:"form-container"},u=o((()=>(0,r._)("h1",null,"Fill your contact info here and upload files",-1))),l=o((()=>(0,r._)("br",null,null,-1))),h=o((()=>(0,r._)("br",null,null,-1))),d=o((()=>(0,r._)("span",{class:"subtitle"},"Email:",-1))),f=o((()=>(0,r._)("br",null,null,-1))),p=o((()=>(0,r._)("br",null,null,-1))),m=o((()=>(0,r._)("span",{class:"subtitle"},"Files:",-1))),g=o((()=>(0,r._)("br",null,null,-1))),y=o((()=>(0,r._)("br",null,null,-1))),v=o((()=>(0,r._)("br",null,null,-1))),w=o((()=>(0,r._)("input",{type:"submit",value:"Send us files",class:"submit-btn"},null,-1))),_={key:1},b=o((()=>(0,r._)("br",null,null,-1))),I=o((()=>(0,r._)("p",null,[(0,r.Uk)(" if something went wrong, contact us: "),(0,r._)("br"),(0,r.Uk)(" email.com ")],-1)));function T(e,t,n,o,T,E){return(0,r.wg)(),(0,r.iD)("div",{class:"flex-container form",onSubmit:t[3]||(t[3]=(0,i.iM)((()=>{}),["prevent"]))},[(0,r._)("div",a,[(0,r._)("div",c,[T.formEmpty?((0,r.wg)(),(0,r.iD)("form",{key:0,ref:"form",onSubmit:t[2]||(t[2]=(0,i.iM)(((...e)=>E.create&&E.create(...e)),["prevent"]))},[u,l,h,d,f,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>T.email=e),type:"email",name:"email",id:"",required:""},null,512),[[i.nr,T.email]]),p,m,g,(0,r._)("input",{onChange:t[1]||(t[1]=(...e)=>E.onFileChange&&E.onFileChange(...e)),type:"file",name:"filefield",multiple:"",required:""},null,32),y,v,w],544)):((0,r.wg)(),(0,r.iD)("h1",_,[(0,r.Uk)(" Thanks! we will send you avatars to "+(0,s.zw)(T.email)+" in 2 hours ",1),b]))]),I])],32)}n(7658);var E=n(5983),S={name:"SuccessComponent",data(){return{email:"",images:[],imagesUrl:[],formEmpty:!0}},methods:{postmail(){var e=new Headers;e.append("Authorization","Basic YXBpOjg4NWIwMTJmM2Q3MDllZjNmZjI5MTU2MDIyMzE1NmE5LTQ4YzA5MmJhLWY0YzlmOTBh");var t=new FormData;t.append("from","Mailgun Sandbox <postmaster@sandbox993e747b50614293bf05bc935282c7d0.mailgun.org>"),t.append("to","Alexander Shelofastov <shelofasstov@gmail.com>"),t.append("subject","Hello Alexander Shelofastov"),t.append("template","new_order"),t.append("h:X-Mailgun-Variables",'{"test": "test"}');var n={method:"POST",headers:e,body:t,redirect:"follow"};fetch("https://api.mailgun.net/v3/sandbox993e747b50614293bf05bc935282c7d0.mailgun.org/messages",n).then((e=>e.text())).then((e=>console.log(e))).catch((e=>console.log("error",e)))},create(){const e={photos:this.imagesUrl,date:`${new Date}`,email:this.email,status:"pending",type:this.$route.query.orderType??""};E.h.collection("orders").add(e).then((e=>{console.log(e)})).catch((e=>{console.log(e)})),this.postmail(),this.formEmpty=!1},onUpload(e){const t=E.tO.ref(`orders/${this.email}/${e.name}`).put(e);t.on("state_changed",(e=>{this.uploadValue=e.bytesTransferred/e.totalBytes*100}),(e=>{console.log(e.message)}),(()=>{this.uploadValue=100,t.snapshot.ref.getDownloadURL().then((e=>{this.imagesUrl.push(e)}))}))},onFileChange(e){const t=e.target.files;t.length&&(this.images=Array.from(t),this.images.forEach((e=>this.onUpload(e))))}}},k=n(3744);const A=(0,k.Z)(S,[["render",T],["__scopeId","data-v-06a664a7"]]);var C=A},3740:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(6252),i=n(3577),s=n(9963);const o=e=>((0,r.dD)("data-v-03502a96"),e=e(),(0,r.Cn)(),e),a={class:"secure"},c=o((()=>(0,r._)("h1",null,"Hello Admin!",-1))),u=o((()=>(0,r._)("h3",{class:"h3-text"},"Orders",-1))),l={class:"white-bg"},h=o((()=>(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{class:"text-center"},"Email"),(0,r._)("th",{class:"text-left"},"Status"),(0,r._)("th",{class:"text-left"},"Type"),(0,r._)("th",{class:"text-left"},"Date")])],-1))),d=["onClick"],f={class:"text-center"},p={key:0,class:"text-center hide-container"},m={key:0,style:{display:"grid","grid-template-columns":"1fr 1fr"}},g=["href"],y=["onChange"],v=o((()=>(0,r._)("br",null,null,-1))),w=o((()=>(0,r._)("br",null,null,-1))),_=["onClick"];function b(e,t,n,o,b,I){return(0,r.wg)(),(0,r.iD)("div",a,[c,u,(0,r._)("table",l,[h,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.orders,(e=>((0,r.wg)(),(0,r.iD)("tbody",{class:"rows-table",key:e.email},[(0,r._)("tr",{onClick:t=>e.displayItem=!e.displayItem},[(0,r._)("td",f,(0,i.zw)(e.email),1),(0,r._)("td",null,(0,i.zw)(e.status),1),(0,r._)("td",null,(0,i.zw)(e.type),1),(0,r._)("td",null,(0,i.zw)(e.date),1)],8,d),e.displayItem?((0,r.wg)(),(0,r.iD)("tr",p,[e.photos?((0,r.wg)(),(0,r.iD)("td",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.photos,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r._)("a",{href:e},"Download Photo "+(0,i.zw)(t+1),9,g)])))),128))])):(0,r.kq)("",!0),(0,r._)("td",null,[(0,r._)("form",{onSubmit:t[0]||(t[0]=(0,s.iM)((()=>{}),["prevent"]))},[(0,r._)("input",{onChange:t=>I.onFileChange(e),ref_for:!0,ref:"files",type:"file",name:"filefield",multiple:"",required:""},null,40,y),v,w,(0,r._)("input",{onClick:t=>I.send(e),type:"submit",value:"Send files to user",class:"submit-btn"},null,8,_)],32)])])):(0,r.kq)("",!0)])))),128))])])}n(7658);var I=n(5983),T={name:"SecureView",props:["auth"],data(){return{authenticated:localStorage.getItem("authenticated"),orders:[],imagesUrl:[],images:[]}},mounted(){this.authenticated||this.$router.push({path:"/"}),I.h.collection("orders").get().then((e=>{e.docs.map((e=>this.orders.push({...e.data(),id:e.id,date:this.timeSince(new Date(e.data().date)),displayItem:!1})))}))},methods:{postmail(e){var t=new Headers;t.append("Authorization","Basic YXBpOjg4NWIwMTJmM2Q3MDllZjNmZjI5MTU2MDIyMzE1NmE5LTQ4YzA5MmJhLWY0YzlmOTBh"),console.log(e.email);var n=new FormData;n.append("from","Mailgun Sandbox <postmaster@sandbox993e747b50614293bf05bc935282c7d0.mailgun.org>"),n.append("to","Alexander Shelofastov <shelofasstov@gmail.com>"),n.append("subject","Hello"),n.append("template","send_images"),n.append("h:X-Mailgun-Variables",'{"test": "test"}'),this.images.forEach((e=>n.append("attachment",e,e.name)));var r={method:"POST",headers:t,body:n,redirect:"follow"};fetch("https://api.mailgun.net/v3/sandbox993e747b50614293bf05bc935282c7d0.mailgun.org/messages",r).then((e=>e.text())).then((e=>console.log(e))).catch((e=>console.log("error",e)))},send(e){this.postmail(e),I.h.collection("orders").doc(e.id).update({status:"done"}).then((()=>{console.log("user updated!")})),e.status="done"},onUpload(e,t){const n=I.tO.ref(`ordersDone/${t.email}/${e.name}`).put(e);n.on("state_changed",(e=>{this.uploadValue=e.bytesTransferred/e.totalBytes*100}),(e=>{console.log(e.message)}),(()=>{this.uploadValue=100,n.snapshot.ref.getDownloadURL().then((e=>{this.imagesUrl.push(e)}))}))},onFileChange(e){const t=this.$refs.files[0].files;t.length&&(this.images=Array.from(t),this.images.forEach((t=>this.onUpload(t,e))))},timeSince(e){var t=Math.floor((new Date-e)/1e3),n=t/31536e3;return n>1?Math.floor(n)+" years":(n=t/2592e3,n>1?Math.floor(n)+" months":(n=t/86400,n>1?Math.floor(n)+" days":(n=t/3600,n>1?Math.floor(n)+" hours":(n=t/60,n>1?Math.floor(n)+" minutes":Math.floor(t)+" seconds"))))}}},E=n(3744);const S=(0,E.Z)(T,[["render",b],["__scopeId","data-v-03502a96"]]);var k=S},4602:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(6252),i=n(9963);const s={id:"login"},o=(0,r._)("h1",null,"Login",-1),a={class:"form-inputs"},c=(0,r._)("label",{for:"username"},"Username",-1),u={class:"form-inputs"},l=(0,r._)("label",{for:"password"},"Password",-1);function h(e,t,n,h,d,f){return(0,r.wg)(),(0,r.iD)("div",s,[o,(0,r._)("div",a,[c,(0,r.wy)((0,r._)("input",{type:"text",id:"username",name:"username","onUpdate:modelValue":t[0]||(t[0]=e=>d.input.username=e),placeholder:"Username"},null,512),[[i.nr,d.input.username]])]),(0,r._)("div",u,[l,(0,r.wy)((0,r._)("input",{type:"password",id:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>d.input.password=e),placeholder:"Password"},null,512),[[i.nr,d.input.password]])]),(0,r._)("button",{type:"button",onClick:t[2]||(t[2]=e=>f.login())},"Login")])}n(7658);var d={name:"LoginCms",data(){return{input:{username:"",password:""}}},mounted(){localStorage.getItem("authenticated")&&this.$router.push({path:"/cms-page"})},methods:{login(){""!=this.input.username&&""!=this.input.password?"bar"==this.input.username&&"bar"==this.input.password?(localStorage.setItem("authenticated",!0),this.$router.push({path:"/cms-page"})):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}},f=n(3744);const p=(0,f.Z)(d,[["render",h]]);var m=p}}]);
//# sourceMappingURL=about.e49e8feb.js.map