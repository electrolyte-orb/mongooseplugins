(function(){function h(o,s,a){function u(r,t){if(!s[r]){if(!o[r]){var e="function"==typeof require&&require;if(!t&&e)return e(r,!0);if(f)return f(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[r]={exports:{}};o[r][0].call(i.exports,function(t){var e=o[r][1][t];return u(e||t)},i,i.exports,h,o,s,a)}return s[r].exports}for(var f="function"==typeof require&&require,t=0;t<a.length;t++)u(a[t]);return u}return h})()({1:[function(t,e,r){"use strict";var a=t("lodash.get");var u=t("superagent");function n(t){var e=new Date(t.date);var r=e.getFullYear();var n=(e.getMonth()<9?"0":"")+(e.getMonth()+1);var i=(e.getDate()<10?"0":"")+e.getDate();return'\n    <li>\n      <h3>\n        <a href="http://www.npmjs.com/package/'+t.name+'">\n          '+t.name+'\n        </a>\n      </h3>\n      <p class="description">\n        '+t.description+'\n      </p>\n      <p class="updated">\n        Latest Version: v'+t.version+'\n      </p>\n      <p class="updated">\n        Updated At: '+r+"-"+n+"-"+i+"\n      </p>\n    </li>\n  "}function i(t){if(t.length===0){return"\n      <h2>No Results</h2>\n    "}return t.map(n).join("\n\n")}function o(r,n,i){var t=0;var e=setTimeout(function(){});var o=false;r.addEventListener("keydown",function(){t=Date.now();clearTimeout(e);e=setTimeout(function(){if(Date.now()-t>=300){t=Date.now();s()}},350)});function s(){if(o){return}var t=r.value;if(!t){return}o=true;var e=encodeURIComponent("mongoose "+t);u.get("https://registry.npmjs.org/-/v1/search?text="+e+"&size=25").end(function(t,e){o=false;if(t){return}var r=a(e,"body.objects",[]).map(function(t){return t.package});console.log(r);n.innerHTML=i(r)})}}o(document.querySelector("#term"),document.querySelector("#result"),i)},{"lodash.get":3,superagent:5}],2:[function(t,e,r){if(typeof e!=="undefined"){e.exports=n}function n(t){if(t)return i(t)}function i(t){for(var e in n.prototype){t[e]=n.prototype[e]}return t}n.prototype.on=n.prototype.addEventListener=function(t,e){this._callbacks=this._callbacks||{};(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e);return this};n.prototype.once=function(t,e){function r(){this.off(t,r);e.apply(this,arguments)}r.fn=e;this.on(t,r);return this};n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length){delete this._callbacks["$"+t];return this}var n;for(var i=0;i<r.length;i++){n=r[i];if(n===e||n.fn===e){r.splice(i,1);break}}return this};n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n){r[n].apply(this,e)}}return this};n.prototype.listeners=function(t){this._callbacks=this._callbacks||{};return this._callbacks["$"+t]||[]};n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],3:[function(t,wt,e){(function(t){var e="Expected a function";var n="__lodash_hash_undefined__";var r=1/0;var i="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]";var a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,f=/^\./,h=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var c=/[\\^$.*+?()[\]{}|]/g;var p=/\\(\\)?/g;var l=/^\[object .+?Constructor\]$/;var d=typeof t=="object"&&t&&t.Object===Object&&t;var y=typeof self=="object"&&self&&self.Object===Object&&self;var _=d||y||Function("return this")();function v(t,e){return t==null?undefined:t[e]}function m(t){var e=false;if(t!=null&&typeof t.toString!="function"){try{e=!!(t+"")}catch(t){}}return e}var b=Array.prototype,w=Function.prototype,g=Object.prototype;var T=_["__core-js_shared__"];var x=function(){var t=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var E=w.toString;var k=g.hasOwnProperty;var O=g.toString;var j=RegExp("^"+E.call(k).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var C=_.Symbol,q=b.splice;var R=it(_,"Map"),D=it(Object,"create");var A=C?C.prototype:undefined,H=A?A.toString:undefined;function P(t){var e=-1,r=t?t.length:0;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}function S(){this.__data__=D?D(null):{}}function L(t){return this.has(t)&&delete this.__data__[t]}function M(t){var e=this.__data__;if(D){var r=e[t];return r===n?undefined:r}return k.call(e,t)?e[t]:undefined}function U(t){var e=this.__data__;return D?e[t]!==undefined:k.call(e,t)}function z(t,e){var r=this.__data__;r[t]=D&&e===undefined?n:e;return this}P.prototype.clear=S;P.prototype["delete"]=L;P.prototype.get=M;P.prototype.has=U;P.prototype.set=z;function $(t){var e=-1,r=t?t.length:0;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}function I(){this.__data__=[]}function N(t){var e=this.__data__,r=Y(e,t);if(r<0){return false}var n=e.length-1;if(r==n){e.pop()}else{q.call(e,r,1)}return true}function X(t){var e=this.__data__,r=Y(e,t);return r<0?undefined:e[r][1]}function F(t){return Y(this.__data__,t)>-1}function B(t,e){var r=this.__data__,n=Y(r,t);if(n<0){r.push([t,e])}else{r[n][1]=e}return this}$.prototype.clear=I;$.prototype["delete"]=N;$.prototype.get=X;$.prototype.has=F;$.prototype.set=B;function G(t){var e=-1,r=t?t.length:0;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}function Q(){this.__data__={hash:new P,map:new(R||$),string:new P}}function J(t){return nt(this,t)["delete"](t)}function K(t){return nt(this,t).get(t)}function W(t){return nt(this,t).has(t)}function V(t,e){nt(this,t).set(t,e);return this}G.prototype.clear=Q;G.prototype["delete"]=J;G.prototype.get=K;G.prototype.has=W;G.prototype.set=V;function Y(t,e){var r=t.length;while(r--){if(pt(t[r][0],e)){return r}}return-1}function Z(t,e){e=ot(e,t)?[e]:rt(e);var r=0,n=e.length;while(t!=null&&r<n){t=t[ft(e[r++])]}return r&&r==n?t:undefined}function tt(t){if(!yt(t)||at(t)){return false}var e=dt(t)||m(t)?j:l;return e.test(ht(t))}function et(t){if(typeof t=="string"){return t}if(vt(t)){return H?H.call(t):""}var e=t+"";return e=="0"&&1/t==-r?"-0":e}function rt(t){return lt(t)?t:ut(t)}function nt(t,e){var r=t.__data__;return st(e)?r[typeof e=="string"?"string":"hash"]:r.map}function it(t,e){var r=v(t,e);return tt(r)?r:undefined}function ot(t,e){if(lt(t)){return false}var r=typeof t;if(r=="number"||r=="symbol"||r=="boolean"||t==null||vt(t)){return true}return u.test(t)||!a.test(t)||e!=null&&t in Object(e)}function st(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function at(t){return!!x&&x in t}var ut=ct(function(t){t=mt(t);var i=[];if(f.test(t)){i.push("")}t.replace(h,function(t,e,r,n){i.push(r?n.replace(p,"$1"):e||t)});return i});function ft(t){if(typeof t=="string"||vt(t)){return t}var e=t+"";return e=="0"&&1/t==-r?"-0":e}function ht(t){if(t!=null){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ct(i,o){if(typeof i!="function"||o&&typeof o!="function"){throw new TypeError(e)}var s=function(){var t=arguments,e=o?o.apply(this,t):t[0],r=s.cache;if(r.has(e)){return r.get(e)}var n=i.apply(this,t);s.cache=r.set(e,n);return n};s.cache=new(ct.Cache||G);return s}ct.Cache=G;function pt(t,e){return t===e||t!==t&&e!==e}var lt=Array.isArray;function dt(t){var e=yt(t)?O.call(t):"";return e==i||e==o}function yt(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function _t(t){return!!t&&typeof t=="object"}function vt(t){return typeof t=="symbol"||_t(t)&&O.call(t)==s}function mt(t){return t==null?"":et(t)}function bt(t,e,r){var n=t==null?undefined:Z(t,e);return n===undefined?r:n}wt.exports=bt}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],4:[function(t,e,r){function n(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(t){n.prototype[t]=function(){this._defaults.push({fn:t,arguments:arguments});return this}});n.prototype._setDefaults=function(e){this._defaults.forEach(function(t){e[t.fn].apply(e,t.arguments)})};e.exports=n},{}],5:[function(t,e,r){var n;if(typeof window!=="undefined"){n=window}else if(typeof self!=="undefined"){n=self}else{console.warn("Using browser-only version of superagent in non-browser environment");n=this}var i=t("component-emitter");var o=t("./request-base");var s=t("./is-object");var a=t("./response-base");var u=t("./agent-base");function f(){}var h=r=e.exports=function(t,e){if("function"==typeof e){return new r.Request("GET",t).end(e)}if(1==arguments.length){return new r.Request("GET",t)}return new r.Request(t,e)};r.Request=m;h.getXHR=function(){if(n.XMLHttpRequest&&(!n.location||"file:"!=n.location.protocol||!n.ActiveXObject)){return new XMLHttpRequest}else{try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}}throw Error("Browser-only version of superagent could not find XHR")};var c="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};function p(t){if(!s(t))return t;var e=[];for(var r in t){l(e,r,t[r])}return e.join("&")}function l(e,r,t){if(t!=null){if(Array.isArray(t)){t.forEach(function(t){l(e,r,t)})}else if(s(t)){for(var n in t){l(e,r+"["+n+"]",t[n])}}else{e.push(encodeURIComponent(r)+"="+encodeURIComponent(t))}}else if(t===null){e.push(encodeURIComponent(r))}}h.serializeObject=p;function d(t){var e={};var r=t.split("&");var n;var i;for(var o=0,s=r.length;o<s;++o){n=r[o];i=n.indexOf("=");if(i==-1){e[decodeURIComponent(n)]=""}else{e[decodeURIComponent(n.slice(0,i))]=decodeURIComponent(n.slice(i+1))}}return e}h.parseString=d;h.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"};h.serialize={"application/x-www-form-urlencoded":p,"application/json":JSON.stringify};h.parse={"application/x-www-form-urlencoded":d,"application/json":JSON.parse};function y(t){var e=t.split(/\r?\n/);var r={};var n;var i;var o;var s;for(var a=0,u=e.length;a<u;++a){i=e[a];n=i.indexOf(":");if(n===-1){continue}o=i.slice(0,n).toLowerCase();s=c(i.slice(n+1));r[o]=s}return r}function _(t){return/[\/+]json($|[^-\w])/.test(t)}function v(t){this.req=t;this.xhr=this.req.xhr;this.text=this.req.method!="HEAD"&&(this.xhr.responseType===""||this.xhr.responseType==="text")||typeof this.xhr.responseType==="undefined"?this.xhr.responseText:null;this.statusText=this.req.xhr.statusText;var e=this.xhr.status;if(e===1223){e=204}this._setStatusProperties(e);this.header=this.headers=y(this.xhr.getAllResponseHeaders());this.header["content-type"]=this.xhr.getResponseHeader("content-type");this._setHeaderProperties(this.header);if(null===this.text&&t._responseType){this.body=this.xhr.response}else{this.body=this.req.method!="HEAD"?this._parseBody(this.text?this.text:this.xhr.response):null}}a(v.prototype);v.prototype._parseBody=function(t){var e=h.parse[this.type];if(this.req._parser){return this.req._parser(this,t)}if(!e&&_(this.type)){e=h.parse["application/json"]}return e&&t&&(t.length||t instanceof Object)?e(t):null};v.prototype.toError=function(){var t=this.req;var e=t.method;var r=t.url;var n="cannot "+e+" "+r+" ("+this.status+")";var i=new Error(n);i.status=this.status;i.method=e;i.url=r;return i};h.Response=v;function m(t,e){var n=this;this._query=this._query||[];this.method=t;this.url=e;this.header={};this._header={};this.on("end",function(){var e=null;var t=null;try{t=new v(n)}catch(t){e=new Error("Parser is unable to parse the response");e.parse=true;e.original=t;if(n.xhr){e.rawResponse=typeof n.xhr.responseType=="undefined"?n.xhr.responseText:n.xhr.response;e.status=n.xhr.status?n.xhr.status:null;e.statusCode=e.status}else{e.rawResponse=null;e.status=null}return n.callback(e)}n.emit("response",t);var r;try{if(!n._isResponseOK(t)){r=new Error(t.statusText||"Unsuccessful HTTP response")}}catch(t){r=t}if(r){r.original=e;r.response=t;r.status=t.status;n.callback(r,t)}else{n.callback(null,t)}})}i(m.prototype);o(m.prototype);m.prototype.type=function(t){this.set("Content-Type",h.types[t]||t);return this};m.prototype.accept=function(t){this.set("Accept",h.types[t]||t);return this};m.prototype.auth=function(t,e,r){if(1===arguments.length)e="";if(typeof e==="object"&&e!==null){r=e;e=""}if(!r){r={type:"function"===typeof btoa?"basic":"auto"}}var n=function(t){if("function"===typeof btoa){return btoa(t)}throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(t,e,r,n)};m.prototype.query=function(t){if("string"!=typeof t)t=p(t);if(t)this._query.push(t);return this};m.prototype.attach=function(t,e,r){if(e){if(this._data){throw Error("superagent can't mix .send() and .attach()")}this._getFormData().append(t,e,r||e.name)}return this};m.prototype._getFormData=function(){if(!this._formData){this._formData=new n.FormData}return this._formData};m.prototype.callback=function(t,e){if(this._shouldRetry(t,e)){return this._retry()}var r=this._callback;this.clearTimeout();if(t){if(this._maxRetries)t.retries=this._retries-1;this.emit("error",t)}r(t,e)};m.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=true;t.status=this.status;t.method=this.method;t.url=this.url;this.callback(t)};m.prototype.buffer=m.prototype.ca=m.prototype.agent=function(){console.warn("This is not supported in browser version of superagent");return this};m.prototype.pipe=m.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")};m.prototype._isHost=function t(e){return e&&"object"===typeof e&&!Array.isArray(e)&&Object.prototype.toString.call(e)!=="[object Object]"};m.prototype.end=function(t){if(this._endCalled){console.warn("Warning: .end() was called twice. This is not supported in superagent")}this._endCalled=true;this._callback=t||f;this._finalizeQueryString();return this._end()};m.prototype._end=function(){var r=this;var n=this.xhr=h.getXHR();var t=this._formData||this._data;this._setTimeouts();n.onreadystatechange=function(){var t=n.readyState;if(t>=2&&r._responseTimeoutTimer){clearTimeout(r._responseTimeoutTimer)}if(4!=t){return}var e;try{e=n.status}catch(t){e=0}if(!e){if(r.timedout||r._aborted)return;return r.crossDomainError()}r.emit("end")};var e=function(t,e){if(e.total>0){e.percent=e.loaded/e.total*100}e.direction=t;r.emit("progress",e)};if(this.hasListeners("progress")){try{n.onprogress=e.bind(null,"download");if(n.upload){n.upload.onprogress=e.bind(null,"upload")}}catch(t){}}try{if(this.username&&this.password){n.open(this.method,this.url,true,this.username,this.password)}else{n.open(this.method,this.url,true)}}catch(t){return this.callback(t)}if(this._withCredentials)n.withCredentials=true;if(!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof t&&!this._isHost(t)){var i=this._header["content-type"];var o=this._serializer||h.serialize[i?i.split(";")[0]:""];if(!o&&_(i)){o=h.serialize["application/json"]}if(o)t=o(t)}for(var s in this.header){if(null==this.header[s])continue;if(this.header.hasOwnProperty(s))n.setRequestHeader(s,this.header[s])}if(this._responseType){n.responseType=this._responseType}this.emit("request",this);n.send(typeof t!=="undefined"?t:null);return this};h.agent=function(){return new u};["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(n){u.prototype[n.toLowerCase()]=function(t,e){var r=new h.Request(n,t);this._setDefaults(r);if(e){r.end(e)}return r}});u.prototype.del=u.prototype["delete"];h.get=function(t,e,r){var n=h("GET",t);if("function"==typeof e)r=e,e=null;if(e)n.query(e);if(r)n.end(r);return n};h.head=function(t,e,r){var n=h("HEAD",t);if("function"==typeof e)r=e,e=null;if(e)n.query(e);if(r)n.end(r);return n};h.options=function(t,e,r){var n=h("OPTIONS",t);if("function"==typeof e)r=e,e=null;if(e)n.send(e);if(r)n.end(r);return n};function b(t,e,r){var n=h("DELETE",t);if("function"==typeof e)r=e,e=null;if(e)n.send(e);if(r)n.end(r);return n}h["del"]=b;h["delete"]=b;h.patch=function(t,e,r){var n=h("PATCH",t);if("function"==typeof e)r=e,e=null;if(e)n.send(e);if(r)n.end(r);return n};h.post=function(t,e,r){var n=h("POST",t);if("function"==typeof e)r=e,e=null;if(e)n.send(e);if(r)n.end(r);return n};h.put=function(t,e,r){var n=h("PUT",t);if("function"==typeof e)r=e,e=null;if(e)n.send(e);if(r)n.end(r);return n}},{"./agent-base":4,"./is-object":6,"./request-base":7,"./response-base":8,"component-emitter":2}],6:[function(t,e,r){"use strict";function n(t){return null!==t&&"object"===typeof t}e.exports=n},{}],7:[function(t,e,r){"use strict";var i=t("./is-object");e.exports=n;function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype){t[e]=n.prototype[e]}return t}n.prototype.clearTimeout=function t(){clearTimeout(this._timer);clearTimeout(this._responseTimeoutTimer);delete this._timer;delete this._responseTimeoutTimer;return this};n.prototype.parse=function t(e){this._parser=e;return this};n.prototype.responseType=function(t){this._responseType=t;return this};n.prototype.serialize=function t(e){this._serializer=e;return this};n.prototype.timeout=function t(e){if(!e||"object"!==typeof e){this._timeout=e;this._responseTimeout=0;return this}for(var r in e){switch(r){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;default:console.warn("Unknown timeout option",r)}}return this};n.prototype.retry=function t(e,r){if(arguments.length===0||e===true)e=1;if(e<=0)e=0;this._maxRetries=e;this._retries=0;this._retryCallback=r;return this};var s=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];n.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries){return false}if(this._retryCallback){try{var r=this._retryCallback(t,e);if(r===true)return true;if(r===false)return false}catch(t){console.error(t)}}if(e&&e.status&&e.status>=500&&e.status!=501)return true;if(t){if(t.code&&~s.indexOf(t.code))return true;if(t.timeout&&t.code=="ECONNABORTED")return true;if(t.crossDomain)return true}return false};n.prototype._retry=function(){this.clearTimeout();if(this.req){this.req=null;this.req=this.request()}this._aborted=false;this.timedout=false;return this._end()};n.prototype.then=function t(e,r){if(!this._fullfilledPromise){var i=this;if(this._endCalled){console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises")}this._fullfilledPromise=new Promise(function(r,n){i.end(function(t,e){if(t)n(t);else r(e)})})}return this._fullfilledPromise.then(e,r)};n.prototype.catch=function(t){return this.then(undefined,t)};n.prototype.use=function t(e){e(this);return this};n.prototype.ok=function(t){if("function"!==typeof t)throw Error("Callback required");this._okCallback=t;return this};n.prototype._isResponseOK=function(t){if(!t){return false}if(this._okCallback){return this._okCallback(t)}return t.status>=200&&t.status<300};n.prototype.get=function(t){return this._header[t.toLowerCase()]};n.prototype.getHeader=n.prototype.get;n.prototype.set=function(t,e){if(i(t)){for(var r in t){this.set(r,t[r])}return this}this._header[t.toLowerCase()]=e;this.header[t]=e;return this};n.prototype.unset=function(t){delete this._header[t.toLowerCase()];delete this.header[t];return this};n.prototype.field=function(t,e){if(null===t||undefined===t){throw new Error(".field(name, val) name can not be empty")}if(this._data){console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()")}if(i(t)){for(var r in t){this.field(r,t[r])}return this}if(Array.isArray(e)){for(var n in e){this.field(t,e[n])}return this}if(null===e||undefined===e){throw new Error(".field(name, val) val can not be empty")}if("boolean"===typeof e){e=""+e}this._getFormData().append(t,e);return this};n.prototype.abort=function(){if(this._aborted){return this}this._aborted=true;this.xhr&&this.xhr.abort();this.req&&this.req.abort();this.clearTimeout();this.emit("abort");return this};n.prototype._auth=function(t,e,r,n){switch(r.type){case"basic":this.set("Authorization","Basic "+n(t+":"+e));break;case"auto":this.username=t;this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t);break}return this};n.prototype.withCredentials=function(t){if(t==undefined)t=true;this._withCredentials=t;return this};n.prototype.redirects=function(t){this._maxRedirects=t;return this};n.prototype.maxResponseSize=function(t){if("number"!==typeof t){throw TypeError("Invalid argument")}this._maxResponseSize=t;return this};n.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}};n.prototype.send=function(t){var e=i(t);var r=this._header["content-type"];if(this._formData){console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()")}if(e&&!this._data){if(Array.isArray(t)){this._data=[]}else if(!this._isHost(t)){this._data={}}}else if(t&&this._data&&this._isHost(this._data)){throw Error("Can't merge these send calls")}if(e&&i(this._data)){for(var n in t){this._data[n]=t[n]}}else if("string"==typeof t){if(!r)this.type("form");r=this._header["content-type"];if("application/x-www-form-urlencoded"==r){this._data=this._data?this._data+"&"+t:t}else{this._data=(this._data||"")+t}}else{this._data=t}if(!e||this._isHost(t)){return this}if(!r)this.type("json");return this};n.prototype.sortQuery=function(t){this._sort=typeof t==="undefined"?true:t;return this};n.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t){this.url+=(this.url.indexOf("?")>=0?"&":"?")+t}this._query.length=0;if(this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");if("function"===typeof this._sort){r.sort(this._sort)}else{r.sort()}this.url=this.url.substring(0,e)+"?"+r.join("&")}}};n.prototype._appendQueryString=function(){console.trace("Unsupported")};n.prototype._timeoutError=function(t,e,r){if(this._aborted){return}var n=new Error(t+e+"ms exceeded");n.timeout=e;n.code="ECONNABORTED";n.errno=r;this.timedout=true;this.abort();this.callback(n)};n.prototype._setTimeouts=function(){var t=this;if(this._timeout&&!this._timer){this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)}if(this._responseTimeout&&!this._responseTimeoutTimer){this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout)}}},{"./is-object":6}],8:[function(t,e,r){"use strict";var i=t("./utils");e.exports=n;function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype){t[e]=n.prototype[e]}return t}n.prototype.get=function(t){return this.header[t.toLowerCase()]};n.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=i.type(e);var r=i.params(e);for(var n in r)this[n]=r[n];this.links={};try{if(t.link){this.links=i.parseLinks(t.link)}}catch(t){}};n.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t;this.statusType=e;this.info=1==e;this.ok=2==e;this.redirect=3==e;this.clientError=4==e;this.serverError=5==e;this.error=4==e||5==e?this.toError():false;this.accepted=202==t;this.noContent=204==t;this.badRequest=400==t;this.unauthorized=401==t;this.notAcceptable=406==t;this.forbidden=403==t;this.notFound=404==t}},{"./utils":9}],9:[function(t,e,r){"use strict";r.type=function(t){return t.split(/ *; */).shift()};r.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */);var n=r.shift();var i=r.shift();if(n&&i)t[n]=i;return t},{})};r.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */);var n=r[0].slice(1,-1);var i=r[1].split(/ *= */)[1].slice(1,-1);t[i]=n;return t},{})};r.cleanHeader=function(t,e){delete t["content-type"];delete t["content-length"];delete t["transfer-encoding"];delete t["host"];if(e){delete t["authorization"];delete t["cookie"]}return t}},{}]},{},[1]);
