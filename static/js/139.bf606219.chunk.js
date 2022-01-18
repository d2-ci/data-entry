/*! For license information please see 139.bf606219.chunk.js.LICENSE.txt */
(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[139],{675:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return C}));var r=n(19),o=n(0),a=n.n(o),i=(n(1),n(6)),c=n(680),u=(n(681),n(677));function s(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function f(t,e,n,r){var o;"string"===typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var a=e.indexOf("?");return-1!==a&&(n=e.substr(a),e=e.substr(0,a)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t),o.state=e):(void 0===(o=Object(i.a)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(a){throw a instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):a}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=Object(c.a)(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function l(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var a="function"===typeof t?t(e,n):t;"string"===typeof a?"function"===typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}"undefined"===typeof window||!window.document||window.document.createElement;function p(t,e,n){return Math.min(Math.max(t,e),n)}function d(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,o=void 0===r?["/"]:r,a=e.initialIndex,c=void 0===a?0:a,u=e.keyLength,d=void 0===u?6:u,h=l();function v(t){Object(i.a)(O,t),O.length=O.entries.length,h.notifyListeners(O.location,O.action)}function y(){return Math.random().toString(36).substr(2,d)}var m=p(c,0,o.length-1),g=o.map((function(t){return f(t,void 0,"string"===typeof t?y():t.key||y())})),b=s;function w(t){var e=p(O.index+t,0,O.entries.length-1),r=O.entries[e];h.confirmTransitionTo(r,"POP",n,(function(t){t?v({action:"POP",location:r,index:e}):v()}))}var O={length:g.length,action:"POP",location:g[m],index:m,entries:g,createHref:b,push:function(t,e){var r="PUSH",o=f(t,e,y(),O.location);h.confirmTransitionTo(o,r,n,(function(t){if(t){var e=O.index+1,n=O.entries.slice(0);n.length>e?n.splice(e,n.length-e,o):n.push(o),v({action:r,location:o,index:e,entries:n})}}))},replace:function(t,e){var r="REPLACE",o=f(t,e,y(),O.location);h.confirmTransitionTo(o,r,n,(function(t){t&&(O.entries[O.index]=o,v({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(t){var e=O.index+t;return e>=0&&e<O.entries.length},block:function(t){return void 0===t&&(t=!1),h.setPrompt(t)},listen:function(t){return h.appendListener(t)}};return O}var h=n(696),v=n(697),y=n.n(v),m=(n(682),n(679)),g=(n(700),function(t){var e=Object(h.a)();return e.displayName=t,e}),b=g("Router-History"),w=g("Router"),O=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(r.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return a.a.createElement(w.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a.a.createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},e}(a.a.Component);a.a.Component;a.a.Component;var x={},j=0;function C(t,e){void 0===e&&(e={}),("string"===typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=x[n]||(x[n]={});if(r[t])return r[t];var o=[],a={regexp:y()(t,o,e),keys:o};return j<1e4&&(r[t]=a,j++),a}(n,{end:a,strict:c,sensitive:s}),o=r.regexp,i=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],l=u.slice(1),p=t===f;return a&&!p?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:p,params:i.reduce((function(t,e,n){return t[e.name]=l[n],t}),{})}}),null)}var E=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return a.a.createElement(w.Consumer,null,(function(e){e||Object(u.a)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?C(n.pathname,t.props):e.match,o=Object(i.a)({},e,{location:n,match:r}),c=t.props,s=c.children,f=c.component,l=c.render;return Array.isArray(s)&&function(t){return 0===a.a.Children.count(t)}(s)&&(s=null),a.a.createElement(w.Provider,{value:o},o.match?s?"function"===typeof s?s(o):s:f?a.a.createElement(f,o):l?l(o):null:"function"===typeof s?s(o):null)}))},e}(a.a.Component);function k(t){return"/"===t.charAt(0)?t:"/"+t}function S(t,e){if(!t)return e;var n=k(t);return 0!==e.pathname.indexOf(n)?e:Object(i.a)({},e,{pathname:e.pathname.substr(n.length)})}function A(t){return"string"===typeof t?t:s(t)}function P(t){return function(){Object(u.a)(!1)}}function R(){}a.a.Component;a.a.Component;a.a.useContext},677:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r="Invariant failed";function o(t,e){if(!t)throw new Error(r)}},678:function(t,e,n){"use strict";const r=n(684),o=n(685),a=n(686),i=n(687),c=Symbol("encodeFragmentIdentifier");function u(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function f(t,e){return e.decode?o(t):t}function l(t){return Array.isArray(t)?t.sort():"object"===typeof t?l(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function p(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function d(t){const e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){u((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":case"separator":return(e,n,r)=>{const o="string"===typeof n&&n.includes(t.arrayFormatSeparator),a="string"===typeof n&&!o&&f(n,t).includes(t.arrayFormatSeparator);n=a?f(n,t):n;const i=o||a?n.split(t.arrayFormatSeparator).map((e=>f(e,t))):null===n?n:f(n,t);r[e]=i};case"bracket-separator":return(e,n,r)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(r[e]=n?f(n,t):n);const a=null===n?[]:n.split(t.arrayFormatSeparator).map((e=>f(e,t)));void 0!==r[e]?r[e]=[].concat(r[e],a):r[e]=a};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e),r=Object.create(null);if("string"!==typeof t)return r;if(!(t=t.trim().replace(/^[?#&]/,"")))return r;for(const o of t.split("&")){if(""===o)continue;let[t,i]=a(e.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?i:f(i,e),n(f(t,e),i,r)}for(const o of Object.keys(r)){const t=r[o];if("object"===typeof t&&null!==t)for(const n of Object.keys(t))t[n]=h(t[n],e);else r[o]=h(t,e)}return!1===e.sort?r:(!0===e.sort?Object.keys(r).sort():Object.keys(r).sort(e.sort)).reduce(((t,e)=>{const n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=l(n):t[e]=n,t}),Object.create(null))}e.extract=d,e.parse=v,e.stringify=(t,e)=>{if(!t)return"";u((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const n=n=>{return e.skipNull&&(null===(r=t[n])||void 0===r)||e.skipEmptyString&&""===t[n];var r},r=function(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const o=n.length;return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[s(e,t),"[",o,"]"].join("")]:[...n,[s(e,t),"[",s(o,t),"]=",s(r,t)].join("")]};case"bracket":return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[s(e,t),"[]"].join("")]:[...n,[s(e,t),"[]=",s(r,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===t.arrayFormat?"[]=":"=";return n=>(r,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?r:(o=null===o?"":o,0===r.length?[[s(n,t),e,s(o,t)].join("")]:[[r,s(o,t)].join(t.arrayFormatSeparator)])}default:return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,s(e,t)]:[...n,[s(e,t),"=",s(r,t)].join("")]}}(e),o={};for(const i of Object.keys(t))n(i)||(o[i]=t[i]);const a=Object.keys(o);return!1!==e.sort&&a.sort(e.sort),a.map((n=>{const o=t[n];return void 0===o?"":null===o?s(n,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?s(n,e)+"[]":o.reduce(r(n),[]).join("&"):s(n,e)+"="+s(o,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[n,r]=a(t,"#");return Object.assign({url:n.split("?")[0]||"",query:v(d(t),e)},e&&e.parseFragmentIdentifier&&r?{fragmentIdentifier:f(r,e)}:{})},e.stringifyUrl=(t,n)=>{n=Object.assign({encode:!0,strict:!0,[c]:!0},n);const r=p(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,t.query);let u=e.stringify(i,n);u&&(u="?".concat(u));let f=function(t){let e="";const n=t.indexOf("#");return-1!==n&&(e=t.slice(n)),e}(t.url);return t.fragmentIdentifier&&(f="#".concat(n[c]?s(t.fragmentIdentifier,n):t.fragmentIdentifier)),"".concat(r).concat(u).concat(f)},e.pick=(t,n,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[c]:!1},r);const{url:o,query:a,fragmentIdentifier:u}=e.parseUrl(t,r);return e.stringifyUrl({url:o,query:i(a,n),fragmentIdentifier:u},r)},e.exclude=(t,n,r)=>{const o=Array.isArray(n)?t=>!n.includes(t):(t,e)=>!n(t,e);return e.pick(t,o,r)}},679:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},680:function(t,e,n){"use strict";function r(t){return"/"===t.charAt(0)}function o(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}e.a=function(t,e){void 0===e&&(e="");var n,a=t&&t.split("/")||[],i=e&&e.split("/")||[],c=t&&r(t),u=e&&r(e),s=c||u;if(t&&r(t)?i=a:a.length&&(i.pop(),i=i.concat(a)),!i.length)return"/";if(i.length){var f=i[i.length-1];n="."===f||".."===f||""===f}else n=!1;for(var l=0,p=i.length;p>=0;p--){var d=i[p];"."===d?o(i,p):".."===d?(o(i,p),l++):l&&(o(i,p),l--)}if(!s)for(;l--;l)i.unshift("..");!s||""===i[0]||i[0]&&r(i[0])||i.unshift("");var h=i.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h}},681:function(t,e,n){"use strict";function r(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}e.a=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"===typeof e||"object"===typeof n){var o=r(e),a=r(n);return o!==e||a!==n?t(o,a):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1}},682:function(t,e,n){"use strict";t.exports=n(699)},683:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return S})),n.d(e,"e",(function(){return P})),n.d(e,"b",(function(){return M}));var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function o(t,e,n){void 0===n&&(n=!0);return r(r({},t),{decode:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var a=t.decode.apply(t,r);return void 0===a||n&&null===a?e:a}})}function a(t,e){if(null==t)return t;if(0===t.length&&(!e||e&&""!==t))return null;var n=t instanceof Array?t[0]:t;return null==n||e||""!==n?n:null}function i(t){return null==t?t:String(t)}function c(t){var e=a(t,!0);return null==e?e:String(e)}function u(t){var e=function(t){return null==t||t instanceof Array?t:""===t?[]:[t]}(t);return e}var s={encode:i,decode:c},f={encode:function(t){return t},decode:u},l=n(678),p=function(){return p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},p.apply(this,arguments)};'{}[],":'.split("").map((function(t){return[t,encodeURIComponent(t)]}));function d(t,e,n){var r=Object(l.stringify)(t,n);n&&n.transformSearchString&&(r=n.transformSearchString(r));var o=r.length?"?"+r:"",a=Object(l.parseUrl)(e.href||"").url+o;return p(p({},e),{key:""+Date.now(),href:a,search:o,query:t})}function h(t,e){for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var a=o[r],i=e[a];t[a]?n[a]=t[a].encode(e[a]):n[a]=null==i?i:String(i)}return n}var v=n(0),y=Object.prototype.hasOwnProperty;function m(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t&&e!==e}function g(t,e,n){var r,o;if(m(t,e))return!0;if("object"!==typeof t||null===t||"object"!==typeof e||null===e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var c=0;c<a.length;c++){var u=null!==(o=null===(r=null===n||void 0===n?void 0:n[a[c]])||void 0===r?void 0:r.equals)&&void 0!==o?o:m;if(!y.call(e,a[c])||!u(t[a[c]],e[a[c]]))return!1}return!0}function b(t,e,n){void 0===n&&(n=g);var r=(null==t.current||null==e)&&t.current===e||!n(t.current,e);v.useEffect((function(){r&&(t.current=e)}),[t,e,r])}function w(t){return"object"===typeof t?"undefined"!==typeof window?t.search:Object(l.extract)(""+t.pathname+(t.search?t.search:"")):""}function O(t,e,n,r){switch(void 0===n&&(n="pushIn"),n){case"replace":case"push":return d(t,e,r);default:return function(t,e,n){var r=Object(l.parse)(e.search,{parseNumbers:!1});return d(p(p({},r),t),e,n)}(t,e,r)}}var x=v.createContext({location:{},getLocation:function(){return{}},setLocation:function(){}});function j(){return v.useContext(x)}function C(t){var e=t.history,n=t.location,r=t.children,o=t.stringifyOptions,a=v.useRef(n);v.useEffect((function(){a.current=n}),[n]);var i=v.useCallback((function(){return a.current}),[a]),c=v.useCallback((function(t,n){a.current=O(t,null==e||null==e.location?a.current:e.location,n,o),e&&function(t,e,n){switch(void 0===n&&(n="pushIn"),n){case"pushIn":case"push":t.push(e);break;default:t.replace(e)}}(e,a.current,n)}),[e,o]);return v.createElement(x.Provider,{value:{location:n,getLocation:i,setLocation:c}},r)}var E=function(t){var e=t,n=Object(l.parse)(e||"");return function(t){return e!==t&&(e=t,n=Object(l.parse)(e)),n}}();function k(t,e,n,r,o,a){var i,c=!g(r.current,n),u=null!==(i=n.equals)&&void 0!==i?i:g,s=E(w(t)),f=!g(o.current,s[e]),l=f?s[e]:o.current;if(!f&&!c&&void 0!==a.current)return a.current;var p=n.decode(l);return(null==a.current||null==p)&&a.current===p||!u(a.current,p)?p:a.current}var S=function(t,e){void 0===e&&(e=s);var n=j(),r=n.location,o=n.getLocation,a=n.setLocation,i=E(w(r)),c=v.useRef(),u=v.useRef(e),f=v.useRef(),l=k(r,t,e,u,c,f);b(c,i[t]),b(u,e),b(f,l,e.equals);var p={paramConfig:e,name:t,setLocation:a,getLocation:o},d=v.useRef(p);d.current=p;var h=v.useCallback((function(t,e){var n,r,o=d.current;if("function"===typeof t){var a=k(o.getLocation(),o.name,o.paramConfig,u,c,f);f.current=a,r=o.paramConfig.encode(t(a))}else r=o.paramConfig.encode(t);o.setLocation(((n={})[o.name]=r,n),e)}),[]);return[l,h]};function A(t,e,n,r,o,a){var i=!g(n.current,e),c=E(w(t));if(!(r.current!==c)&&!i&&void 0!==o.current)return{encodedValues:o.current,decodedValues:a.current};for(var u=o.current||{},s=a.current||{},f={},l={},p=0,d=Object.keys(e);p<d.length;p++){var h=d[p],v=e[h],y=void 0,m=void 0;!g(u[h],c[h])||void 0===u[h]&&void 0===s[h]?(y=c[h],m=v.decode(y)):(y=u[h],m=s[h]),f[h]=y,l[h]=m}return{encodedValues:f,decodedValues:!g(a.current,l,e)?l:a.current}}var P=function(t){var e=j(),n=e.location,r=e.getLocation,o=e.setLocation,a=E(w(n)),i=v.useRef(t),c=v.useRef(a),u=v.useRef(void 0),s=v.useRef({}),f=A(n,t=g(t,i.current)?i.current:t,i,c,u,s),l=f.encodedValues,p=f.decodedValues;b(c,a),b(i,t),b(u,l),b(s,p,(function(e,n){return g(e,n,t)}));var d={paramConfigMap:t,setLocation:o,getLocation:r},y=v.useRef(d);return y.current=d,[p,v.useCallback((function(t,e){var n,r=y.current;if("function"===typeof t){var o=A(r.getLocation(),r.paramConfigMap,i,c,u,s).decodedValues;s.current=o,n=h(r.paramConfigMap,t(o))}else n=h(r.paramConfigMap,t);r.setLocation(n,e)}),[])]};var R,L,T,$,F=function(){return F=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},F.apply(this,arguments)};function U(t){if(t===T&&null!=$)return $;var e={replace:function(e){t.navigate(e.protocol+"//"+e.host+e.pathname+e.search,{replace:!0})},push:function(e){t.navigate(e.protocol+"//"+e.host+e.pathname+e.search,{replace:!1})},get location(){return t.location}};return T=t,$=e,e}function I(t){var e=void 0===t?{}:t,n=e.history,r=e.location;if("undefined"!==typeof window&&(n||(n=function(t){if(t===R&&null!=L)return L;var e={replace:function(e){t.replaceState(e.state,"",e.protocol+"//"+e.host+e.pathname+e.search)},push:function(e){t.pushState(e.state,"",e.protocol+"//"+e.host+e.pathname+e.search)},get location(){return window.location}};return R=t,L=e,e}(window.history)),r||(r=window.location)),!r)throw new Error("\n        Could not read the location. Is the router wired up correctly?\n      ");return{history:n,location:r}}function M(t){var e=t.children,n=t.ReactRouterRoute,r=t.reachHistory,o=t.history,a=t.location,i=t.stringifyOptions,c=v.useRef(i),u=!g(c.current,i)?i:c.current;return v.useEffect((function(){c.current=u}),[u]),n?v.createElement(n,null,(function(t){return v.createElement(C,F({stringifyOptions:u},I(t)),e)})):r?v.createElement(C,F({stringifyOptions:u},I({history:U(r),location:a})),e):v.createElement(C,F({stringifyOptions:u},I({history:o,location:a})),e)}},684:function(t,e,n){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>"%".concat(t.charCodeAt(0).toString(16).toUpperCase())))},685:function(t,e,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp(r,"gi"),a=new RegExp("("+r+")+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],i(n),i(r))}function c(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(o),n=1;n<e.length;n++)e=(t=i(e,n).join("")).match(o);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(e){var o=c(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(t)}n["%C2"]="\ufffd";for(var i=Object.keys(n),u=0;u<i.length;u++){var s=i[u];t=t.replace(new RegExp(s,"g"),n[s])}return t}(t)}}},686:function(t,e,n){"use strict";t.exports=(t,e)=>{if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},687:function(t,e,n){"use strict";t.exports=function(t,e){for(var n={},r=Object.keys(t),o=Array.isArray(e),a=0;a<r.length;a++){var i=r[a],c=t[i];(o?-1!==e.indexOf(i):e(i,c,t))&&(n[i]=c)}return n}},696:function(t,e,n){"use strict";(function(t){var r=n(0),o=n.n(r),a=n(19),i=n(1),c=n.n(i),u=1073741823,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{};function f(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var l=o.a.createContext||function(t,e){var n,o,i="__create-react-context-"+function(){var t="__global_unique_id__";return s[t]=(s[t]||0)+1}()+"__",l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=f(e.props.value),e}Object(a.a)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((a=r)===(i=o)?0!==a||1/a===1/i:a!==a&&i!==i)?n=0:(n="function"===typeof e?e(r,o):u,0!==(n|=0)&&this.emitter.set(t.value,n))}var a,i},r.render=function(){return this.props.children},n}(r.Component);l.childContextTypes=((n={})[i]=c.a.object.isRequired,n);var p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!==((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(a.a)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=void 0===e||null===e?u:e},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?u:t},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return p.contextTypes=((o={})[i]=c.a.object,o),{Provider:l,Consumer:p}};e.a=l}).call(this,n(55))},697:function(t,e,n){var r=n(698);t.exports=d,t.exports.parse=a,t.exports.compile=function(t,e){return c(a(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t,e){for(var n,r=[],a=0,i=0,c="",f=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],p=n[1],d=n.index;if(c+=t.slice(i,d),i=d+l.length,p)c+=p[1];else{var h=t[i],v=n[2],y=n[3],m=n[4],g=n[5],b=n[6],w=n[7];c&&(r.push(c),c="");var O=null!=v&&null!=h&&h!==v,x="+"===b||"*"===b,j="?"===b||"*"===b,C=n[2]||f,E=m||g;r.push({name:y||a++,prefix:v||"",delimiter:C,optional:j,repeat:x,partial:O,asterisk:!!w,pattern:E?s(E):w?".*":"[^"+u(C)+"]+?"})}}return i<t.length&&(c+=t.substr(i)),c&&r.push(c),r}function i(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var a="",c=e||{},u=(o||{}).pretty?i:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!==typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!n[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");a+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');a+=f.prefix+l}}else a+=f}return a}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<t.length;c++){var s=t[c];if("string"===typeof s)i+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";e.push(s),s.repeat&&(d+="(?:"+p+d+")*"),i+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(n.delimiter||"/"),v=i.slice(-h.length)===h;return o||(i=(v?i.slice(0,-h.length):i)+"(?:"+h+"(?=$))?"),i+=a?"$":o&&v?"":"(?="+h+"|$)",f(new RegExp("^"+i,l(n)),e)}function d(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(d(t[o],e,n).source);return f(new RegExp("(?:"+r.join("|")+")",l(n)),e)}(t,e,n):function(t,e,n){return p(a(t,n),e,n)}(t,e,n)}},698:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},699:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function x(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case i:case u:case c:case h:return t;default:switch(t=t&&t.$$typeof){case f:case d:case m:case y:case s:return t;default:return e}}case a:return e}}}function j(t){return x(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=d,e.Fragment=i,e.Lazy=m,e.Memo=y,e.Portal=a,e.Profiler=u,e.StrictMode=c,e.Suspense=h,e.isAsyncMode=function(t){return j(t)||x(t)===l},e.isConcurrentMode=j,e.isContextConsumer=function(t){return x(t)===f},e.isContextProvider=function(t){return x(t)===s},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return x(t)===d},e.isFragment=function(t){return x(t)===i},e.isLazy=function(t){return x(t)===m},e.isMemo=function(t){return x(t)===y},e.isPortal=function(t){return x(t)===a},e.isProfiler=function(t){return x(t)===u},e.isStrictMode=function(t){return x(t)===c},e.isSuspense=function(t){return x(t)===h},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===i||t===p||t===u||t===c||t===h||t===v||"object"===typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===y||t.$$typeof===s||t.$$typeof===f||t.$$typeof===d||t.$$typeof===b||t.$$typeof===w||t.$$typeof===O||t.$$typeof===g)},e.typeOf=x},700:function(t,e,n){"use strict";var r=n(682),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?i:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(h){var o=d(n);o&&o!==h&&t(e,o,r)}var i=f(n);l&&(i=i.concat(l(n)));for(var c=u(e),v=u(n),y=0;y<i.length;++y){var m=i[y];if(!a[m]&&(!r||!r[m])&&(!v||!v[m])&&(!c||!c[m])){var g=p(n,m);try{s(e,m,g)}catch(b){}}}}return e}},701:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var r=n(675),o=n(19),a=n(0),i=n.n(a),c=n(6),u=n(680),s=(n(681),n(677));function f(t){return"/"===t.charAt(0)?t:"/"+t}function l(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function d(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function v(t,e,n,r){var o;"string"===typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var a=e.indexOf("?");return-1!==a&&(n=e.substr(a),e=e.substr(0,a)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t),o.state=e):(void 0===(o=Object(c.a)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(a){throw a instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):a}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=Object(u.a)(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function y(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var a="function"===typeof t?t(e,n):t;"string"===typeof a?"function"===typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(t,e){e(window.confirm(t))}var b="popstate",w="hashchange";function O(){try{return window.history.state||{}}catch(t){return{}}}function x(t){void 0===t&&(t={}),m||Object(s.a)(!1);var e=window.history,n=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),r=!(-1===window.navigator.userAgent.indexOf("Trident")),o=t,a=o.forceRefresh,i=void 0!==a&&a,u=o.getUserConfirmation,l=void 0===u?g:u,x=o.keyLength,j=void 0===x?6:x,C=t.basename?d(f(t.basename)):"";function E(t){var e=t||{},n=e.key,r=e.state,o=window.location,a=o.pathname+o.search+o.hash;return C&&(a=p(a,C)),v(a,r,n)}function k(){return Math.random().toString(36).substr(2,j)}var S=y();function A(t){Object(c.a)(q,t),q.length=e.length,S.notifyListeners(q.location,q.action)}function P(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||T(E(t.state))}function R(){T(E(O()))}var L=!1;function T(t){if(L)L=!1,A();else{S.confirmTransitionTo(t,"POP",l,(function(e){e?A({action:"POP",location:t}):function(t){var e=q.location,n=F.indexOf(e.key);-1===n&&(n=0);var r=F.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(L=!0,I(o))}(t)}))}}var $=E(O()),F=[$.key];function U(t){return C+h(t)}function I(t){e.go(t)}var M=0;function N(t){1===(M+=t)&&1===t?(window.addEventListener(b,P),r&&window.addEventListener(w,R)):0===M&&(window.removeEventListener(b,P),r&&window.removeEventListener(w,R))}var _=!1;var q={length:e.length,action:"POP",location:$,createHref:U,push:function(t,r){var o="PUSH",a=v(t,r,k(),q.location);S.confirmTransitionTo(a,o,l,(function(t){if(t){var r=U(a),c=a.key,u=a.state;if(n)if(e.pushState({key:c,state:u},null,r),i)window.location.href=r;else{var s=F.indexOf(q.location.key),f=F.slice(0,s+1);f.push(a.key),F=f,A({action:o,location:a})}else window.location.href=r}}))},replace:function(t,r){var o="REPLACE",a=v(t,r,k(),q.location);S.confirmTransitionTo(a,o,l,(function(t){if(t){var r=U(a),c=a.key,u=a.state;if(n)if(e.replaceState({key:c,state:u},null,r),i)window.location.replace(r);else{var s=F.indexOf(q.location.key);-1!==s&&(F[s]=a.key),A({action:o,location:a})}else window.location.replace(r)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var e=S.setPrompt(t);return _||(N(1),_=!0),function(){return _&&(_=!1,N(-1)),e()}},listen:function(t){var e=S.appendListener(t);return N(1),function(){N(-1),e()}}};return q}var j="hashchange",C={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+l(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:l,decodePath:f},slash:{encodePath:f,decodePath:f}};function E(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function k(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function S(t){window.location.replace(E(window.location.href)+"#"+t)}function A(t){void 0===t&&(t={}),m||Object(s.a)(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),r=n.getUserConfirmation,o=void 0===r?g:r,a=n.hashType,i=void 0===a?"slash":a,u=t.basename?d(f(t.basename)):"",l=C[i],b=l.encodePath,w=l.decodePath;function O(){var t=w(k());return u&&(t=p(t,u)),v(t)}var x=y();function A(t){Object(c.a)(q,t),q.length=e.length,x.notifyListeners(q.location,q.action)}var P=!1,R=null;function L(){var t,e,n=k(),r=b(n);if(n!==r)S(r);else{var a=O(),i=q.location;if(!P&&(e=a,(t=i).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(R===h(a))return;R=null,function(t){if(P)P=!1,A();else{var e="POP";x.confirmTransitionTo(t,e,o,(function(n){n?A({action:e,location:t}):function(t){var e=q.location,n=U.lastIndexOf(h(e));-1===n&&(n=0);var r=U.lastIndexOf(h(t));-1===r&&(r=0);var o=n-r;o&&(P=!0,I(o))}(t)}))}}(a)}}var T=k(),$=b(T);T!==$&&S($);var F=O(),U=[h(F)];function I(t){e.go(t)}var M=0;function N(t){1===(M+=t)&&1===t?window.addEventListener(j,L):0===M&&window.removeEventListener(j,L)}var _=!1;var q={length:e.length,action:"POP",location:F,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=E(window.location.href)),n+"#"+b(u+h(t))},push:function(t,e){var n="PUSH",r=v(t,void 0,void 0,q.location);x.confirmTransitionTo(r,n,o,(function(t){if(t){var e=h(r),o=b(u+e);if(k()!==o){R=e,function(t){window.location.hash=t}(o);var a=U.lastIndexOf(h(q.location)),i=U.slice(0,a+1);i.push(e),U=i,A({action:n,location:r})}else A()}}))},replace:function(t,e){var n="REPLACE",r=v(t,void 0,void 0,q.location);x.confirmTransitionTo(r,n,o,(function(t){if(t){var e=h(r),o=b(u+e);k()!==o&&(R=e,S(o));var a=U.indexOf(h(q.location));-1!==a&&(U[a]=e),A({action:n,location:r})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var e=x.setPrompt(t);return _||(N(1),_=!0),function(){return _&&(_=!1,N(-1)),e()}},listen:function(t){var e=x.appendListener(t);return N(1),function(){N(-1),e()}}};return q}n(1);var P=n(679);i.a.Component;var R=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=A(e.props),e}return Object(o.a)(e,t),e.prototype.render=function(){return i.a.createElement(r.b,{history:this.history,children:this.props.children})},e}(i.a.Component);var L=function(t,e){return"function"===typeof t?t(e):t},T=function(t,e){return"string"===typeof t?v(t,null,null,e):t},$=function(t){return t},F=i.a.forwardRef;"undefined"===typeof F&&(F=$);var U=F((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,a=Object(P.a)(t,["innerRef","navigate","onClick"]),u=a.target,s=Object(c.a)({},a,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=$!==F&&e||n,i.a.createElement("a",s)}));var I=F((function(t,e){var n=t.component,o=void 0===n?U:n,a=t.replace,u=t.to,f=t.innerRef,l=Object(P.a)(t,["component","replace","to","innerRef"]);return i.a.createElement(r.c.Consumer,null,(function(t){t||Object(s.a)(!1);var n=t.history,r=T(L(u,t.location),t.location),p=r?n.createHref(r):"",d=Object(c.a)({},l,{href:p,navigate:function(){var e=L(u,t.location),r=h(t.location)===h(T(e));(a||r?n.replace:n.push)(e)}});return $!==F?d.ref=e||f:d.innerRef=f,i.a.createElement(o,d)}))})),M=function(t){return t},N=i.a.forwardRef;"undefined"===typeof N&&(N=M);N((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,a=t.activeClassName,u=void 0===a?"active":a,f=t.activeStyle,l=t.className,p=t.exact,d=t.isActive,h=t.location,v=t.sensitive,y=t.strict,m=t.style,g=t.to,b=t.innerRef,w=Object(P.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(r.c.Consumer,null,(function(t){t||Object(s.a)(!1);var n=h||t.location,a=T(L(g,n),n),O=a.pathname,x=O&&O.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=x?Object(r.d)(n.pathname,{path:x,exact:p,sensitive:v,strict:y}):null,C=!!(d?d(j,n):j),E="function"===typeof l?l(C):l,k="function"===typeof m?m(C):m;C&&(E=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(E,u),k=Object(c.a)({},k,f));var S=Object(c.a)({"aria-current":C&&o||null,className:E,style:k,to:a},w);return M!==N?S.ref=e||b:S.innerRef=b,i.a.createElement(I,S)}))}))}}]);
//# sourceMappingURL=139.bf606219.chunk.js.map