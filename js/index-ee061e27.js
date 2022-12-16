import{_ as t,o as e,c as n,f as r,g as i,r as s,a as o,b as a,u,j as c,v as f,w as l,d as h,p as d,e as p}from"../default/default-f3a1b80f.js";import{a as v,t as m}from"./js.cookie-dfddfb0d.js";var g=t({props:{width:{type:Number,default:800},height:{type:Number,default:300},lineWidth:{type:Number,default:4},lineColor:{type:String,default:"#000000"},bgColor:{type:String,default:""},isCrop:{type:Boolean,default:!1},isClearBgColor:{type:Boolean,default:!0},format:{type:String,default:"image/png"},quality:{type:Number,default:1}},data:()=>({hasDrew:!1,resultImg:"",points:[],canvasTxt:null,startX:0,startY:0,isDrawing:!1,sratio:1}),computed:{ratio(){return this.height/this.width},stageInfo(){return this.$refs.canvas.getBoundingClientRect()},myBg(){return this.bgColor?this.bgColor:"rgba(255, 255, 255, 0)"}},watch:{myBg:function(t){this.$refs.canvas.style.background=t}},beforeMount(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.$_resizeHandler)},mounted(){const t=this.$refs.canvas;t.height=this.height,t.width=this.width,t.style.background=this.myBg,this.$_resizeHandler(),document.onmouseup=()=>{this.isDrawing=!1}},methods:{$_resizeHandler(){const t=this.$refs.canvas;t.style.width=this.width+"px";const e=parseFloat(window.getComputedStyle(t).width);t.style.height=this.ratio*e+"px",this.canvasTxt=t.getContext("2d"),this.canvasTxt.scale(1*this.sratio,1*this.sratio),this.sratio=e/this.width,this.canvasTxt.scale(1/this.sratio,1/this.sratio)},mouseDown(t){(t=t||event).preventDefault(),this.isDrawing=!0,this.hasDrew=!0;let e={x:t.offsetX,y:t.offsetY};this.drawStart(e)},mouseMove(t){if((t=t||event).preventDefault(),this.isDrawing){let e={x:t.offsetX,y:t.offsetY};this.drawMove(e)}},mouseUp(t){(t=t||event).preventDefault();let e={x:t.offsetX,y:t.offsetY};this.drawEnd(e),this.isDrawing=!1},touchStart(t){if((t=t||event).preventDefault(),this.hasDrew=!0,1===t.touches.length){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawStart(e)}},touchMove(t){if((t=t||event).preventDefault(),1===t.touches.length){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawMove(e)}},touchEnd(t){if((t=t||event).preventDefault(),1===t.touches.length){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawEnd(e)}},drawStart(t){this.startX=t.x,this.startY=t.y,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.lineWidth=this.lineWidth*this.sratio,this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(t)},drawMove(t){this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.strokeStyle=this.lineColor,this.canvasTxt.lineWidth=this.lineWidth*this.sratio,this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.startY=t.y,this.startX=t.x,this.points.push(t)},drawEnd(t){this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(t),this.points.push({x:-1,y:-1})},generate(t){let e=t&&t.format?t.format:this.format,n=t&&t.quality?t.quality:this.quality;return new Promise(((t,r)=>{if(this.hasDrew){var i=this.canvasTxt.getImageData(0,0,this.$refs.canvas.width,this.$refs.canvas.height);this.canvasTxt.globalCompositeOperation="destination-over",this.canvasTxt.fillStyle=this.myBg,this.canvasTxt.fillRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.resultImg=this.$refs.canvas.toDataURL(e,n);var s=this.resultImg;if(this.canvasTxt.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.canvasTxt.putImageData(i,0,0),this.canvasTxt.globalCompositeOperation="source-over",this.isCrop){const t=this.getCropArea(i.data);var o=document.createElement("canvas");const r=o.getContext("2d");o.width=t[2]-t[0],o.height=t[3]-t[1];const a=this.canvasTxt.getImageData(...t);r.globalCompositeOperation="destination-over",r.putImageData(a,0,0),r.fillStyle=this.myBg,r.fillRect(0,0,o.width,o.height),s=o.toDataURL(e,n),o=null}t(s)}else r("Warning: Not Signned!")}))},reset(){this.canvasTxt.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.isClearBgColor&&(this.$emit("update:bgColor",""),this.$refs.canvas.style.background="rgba(255, 255, 255, 0)"),this.points=[],this.hasDrew=!1,this.resultImg=""},getCropArea(t){for(var e=this.$refs.canvas.width,n=0,r=this.$refs.canvas.height,i=0,s=0;s<this.$refs.canvas.width;s++)for(var o=0;o<this.$refs.canvas.height;o++){var a=4*(s+this.$refs.canvas.width*o);(t[a]>0||t[a+1]>0||t[a+2]||t[a+3]>0)&&(i=Math.max(o,i),n=Math.max(s,n),r=Math.min(o,r),e=Math.min(s,e))}return[++e,++r,++n,++i]}}},[["render",function(t,r,i,s,o,a){return e(),n("canvas",{ref:"canvas",onMousedown:r[0]||(r[0]=(...t)=>a.mouseDown&&a.mouseDown(...t)),onMousemove:r[1]||(r[1]=(...t)=>a.mouseMove&&a.mouseMove(...t)),onMouseup:r[2]||(r[2]=(...t)=>a.mouseUp&&a.mouseUp(...t)),onTouchstart:r[3]||(r[3]=(...t)=>a.touchStart&&a.touchStart(...t)),onTouchmove:r[4]||(r[4]=(...t)=>a.touchMove&&a.touchMove(...t)),onTouchend:r[5]||(r[5]=(...t)=>a.touchEnd&&a.touchEnd(...t))},null,544)}],["__scopeId","data-v-7d9055bc"],["__file","E:/other/work/work/work/node_modules/vue-esign/src/index.vue"]]);g.install=function(t){this.installed||(this.installed=!0,t.component("vueEsign",g))};var y,w={exports:{}},b=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}},E=b,x=Object.prototype.toString,T=(y=Object.create(null),function(t){var e=x.call(t);return y[e]||(y[e]=e.slice(8,-1).toLowerCase())});function R(t){return t=t.toLowerCase(),function(e){return T(e)===t}}function C(t){return Array.isArray(t)}function O(t){return void 0===t}var S=R("ArrayBuffer");function _(t){return null!==t&&"object"==typeof t}function A(t){if("object"!==T(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var D=R("Date"),N=R("File"),j=R("Blob"),B=R("FileList");function P(t){return"[object Function]"===x.call(t)}var k=R("URLSearchParams");function U(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),C(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}var L,$=(L="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(t){return L&&t instanceof L}),I={isArray:C,isArrayBuffer:S,isBuffer:function(t){return null!==t&&!O(t)&&null!==t.constructor&&!O(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){var e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||x.call(t)===e||P(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&S(t.buffer)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:_,isPlainObject:A,isUndefined:O,isDate:D,isFile:N,isBlob:j,isFunction:P,isStream:function(t){return _(t)&&P(t.pipe)},isURLSearchParams:k,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:U,merge:function t(){var e={};function n(n,r){A(e[r])&&A(n)?e[r]=t(e[r],n):A(n)?e[r]=t({},n):C(n)?e[r]=n.slice():e[r]=n}for(var r=0,i=arguments.length;r<i;r++)U(arguments[r],n);return e},extend:function(t,e,n){return U(e,(function(e,r){t[r]=n&&"function"==typeof e?E(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)},toFlatObject:function(t,e,n){var r,i,s,o={};e=e||{};do{for(i=(r=Object.getOwnPropertyNames(t)).length;i-- >0;)o[s=r[i]]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:T,kindOfTest:R,endsWith:function(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return-1!==r&&r===n},toArray:function(t){if(!t)return null;var e=t.length;if(O(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n},isTypedArray:$,isFileList:B},M=I;function F(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var q=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(M.isURLSearchParams(e))r=e.toString();else{var i=[];M.forEach(e,(function(t,e){null!=t&&(M.isArray(t)?e+="[]":t=[t],M.forEach(t,(function(t){M.isDate(t)?t=t.toISOString():M.isObject(t)&&(t=JSON.stringify(t)),i.push(F(e)+"="+F(t))})))})),r=i.join("&")}if(r){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t},X=I;function W(){this.handlers=[]}W.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},W.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},W.prototype.forEach=function(t){X.forEach(this.handlers,(function(e){null!==e&&t(e)}))};var z=W,J=I,H=I;function Y(t,e,n,r,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}H.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var V=Y.prototype,K={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){K[t]={value:t}})),Object.defineProperties(Y,K),Object.defineProperty(V,"isAxiosError",{value:!0}),Y.from=function(t,e,n,r,i,s){var o=Object.create(V);return H.toFlatObject(t,o,(function(t){return t!==Error.prototype})),Y.call(o,t.message,e,n,r,i),o.name=t.name,s&&Object.assign(o,s),o};var Q=Y,G={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Z=I;var tt=function(t,e){e=e||new FormData;var n=[];function r(t){return null===t?"":Z.isDate(t)?t.toISOString():Z.isArrayBuffer(t)||Z.isTypedArray(t)?"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}return function t(i,s){if(Z.isPlainObject(i)||Z.isArray(i)){if(-1!==n.indexOf(i))throw Error("Circular reference detected in "+s);n.push(i),Z.forEach(i,(function(n,i){if(!Z.isUndefined(n)){var o,a=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(Z.endsWith(i,"{}"))n=JSON.stringify(n);else if(Z.endsWith(i,"[]")&&(o=Z.toArray(n)))return void o.forEach((function(t){!Z.isUndefined(t)&&e.append(a,r(t))}));t(n,a)}})),n.pop()}else e.append(s,r(i))}(t),e},et=Q,nt=I,rt=nt.isStandardBrowserEnv()?{write:function(t,e,n,r,i,s){var o=[];o.push(t+"="+encodeURIComponent(e)),nt.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),nt.isString(r)&&o.push("path="+r),nt.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},it=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},st=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t},ot=function(t,e){return t&&!it(e)?st(t,e):e},at=I,ut=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ct=I,ft=ct.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=ct.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},lt=Q;function ht(t){lt.call(this,null==t?"canceled":t,lt.ERR_CANCELED),this.name="CanceledError"}I.inherits(ht,lt,{__CANCEL__:!0});var dt=ht,pt=I,vt=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new et("Request failed with status code "+n.status,[et.ERR_BAD_REQUEST,et.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)},mt=rt,gt=q,yt=ot,wt=function(t){var e,n,r,i={};return t?(at.forEach(t.split("\n"),(function(t){if(r=t.indexOf(":"),e=at.trim(t.substr(0,r)).toLowerCase(),n=at.trim(t.substr(r+1)),e){if(i[e]&&ut.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}})),i):i},bt=ft,Et=G,xt=Q,Tt=dt,Rt=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""},Ct=function(t){return new Promise((function(e,n){var r,i=t.data,s=t.headers,o=t.responseType;function a(){t.cancelToken&&t.cancelToken.unsubscribe(r),t.signal&&t.signal.removeEventListener("abort",r)}pt.isFormData(i)&&pt.isStandardBrowserEnv()&&delete s["Content-Type"];var u=new XMLHttpRequest;if(t.auth){var c=t.auth.username||"",f=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.Authorization="Basic "+btoa(c+":"+f)}var l=yt(t.baseURL,t.url);function h(){if(u){var r="getAllResponseHeaders"in u?wt(u.getAllResponseHeaders()):null,i={data:o&&"text"!==o&&"json"!==o?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:t,request:u};vt((function(t){e(t),a()}),(function(t){n(t),a()}),i),u=null}}if(u.open(t.method.toUpperCase(),gt(l,t.params,t.paramsSerializer),!0),u.timeout=t.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(h)},u.onabort=function(){u&&(n(new xt("Request aborted",xt.ECONNABORTED,t,u)),u=null)},u.onerror=function(){n(new xt("Network Error",xt.ERR_NETWORK,t,u,u)),u=null},u.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||Et;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new xt(e,r.clarifyTimeoutError?xt.ETIMEDOUT:xt.ECONNABORTED,t,u)),u=null},pt.isStandardBrowserEnv()){var d=(t.withCredentials||bt(l))&&t.xsrfCookieName?mt.read(t.xsrfCookieName):void 0;d&&(s[t.xsrfHeaderName]=d)}"setRequestHeader"in u&&pt.forEach(s,(function(t,e){void 0===i&&"content-type"===e.toLowerCase()?delete s[e]:u.setRequestHeader(e,t)})),pt.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&"json"!==o&&(u.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(r=function(t){u&&(n(!t||t&&t.type?new Tt:t),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(r),t.signal&&(t.signal.aborted?r():t.signal.addEventListener("abort",r))),i||(i=null);var p=Rt(l);p&&-1===["http","https","file"].indexOf(p)?n(new xt("Unsupported protocol "+p+":",xt.ERR_BAD_REQUEST,t)):u.send(i)}))},Ot=I,St=function(t,e){J.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))},_t=Q,At=tt,Dt={"Content-Type":"application/x-www-form-urlencoded"};function Nt(t,e){!Ot.isUndefined(t)&&Ot.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var jt,Bt={transitional:G,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(jt=Ct),jt),transformRequest:[function(t,e){if(St(e,"Accept"),St(e,"Content-Type"),Ot.isFormData(t)||Ot.isArrayBuffer(t)||Ot.isBuffer(t)||Ot.isStream(t)||Ot.isFile(t)||Ot.isBlob(t))return t;if(Ot.isArrayBufferView(t))return t.buffer;if(Ot.isURLSearchParams(t))return Nt(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,r=Ot.isObject(t),i=e&&e["Content-Type"];if((n=Ot.isFileList(t))||r&&"multipart/form-data"===i){var s=this.env&&this.env.FormData;return At(n?{"files[]":t}:t,s&&new s)}return r||"application/json"===i?(Nt(e,"application/json"),function(t,e,n){if(Ot.isString(t))try{return(e||JSON.parse)(t),Ot.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||Bt.transitional,n=e&&e.silentJSONParsing,r=e&&e.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||r&&Ot.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(i){if("SyntaxError"===s.name)throw _t.from(s,_t.ERR_BAD_RESPONSE,this,null,this.response);throw s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ot.forEach(["delete","get","head"],(function(t){Bt.headers[t]={}})),Ot.forEach(["post","put","patch"],(function(t){Bt.headers[t]=Ot.merge(Dt)}));var Pt=Bt,kt=I,Ut=Pt,Lt=function(t){return!(!t||!t.__CANCEL__)},$t=I,It=function(t,e,n){var r=this||Ut;return kt.forEach(n,(function(n){t=n.call(r,t,e)})),t},Mt=Lt,Ft=Pt,qt=dt;function Xt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new qt}var Wt=I,zt=function(t,e){e=e||{};var n={};function r(t,e){return Wt.isPlainObject(t)&&Wt.isPlainObject(e)?Wt.merge(t,e):Wt.isPlainObject(e)?Wt.merge({},e):Wt.isArray(e)?e.slice():e}function i(n){return Wt.isUndefined(e[n])?Wt.isUndefined(t[n])?void 0:r(void 0,t[n]):r(t[n],e[n])}function s(t){if(!Wt.isUndefined(e[t]))return r(void 0,e[t])}function o(n){return Wt.isUndefined(e[n])?Wt.isUndefined(t[n])?void 0:r(void 0,t[n]):r(void 0,e[n])}function a(n){return n in e?r(t[n],e[n]):n in t?r(void 0,t[n]):void 0}var u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return Wt.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||i,r=e(t);Wt.isUndefined(r)&&e!==a||(n[t]=r)})),n},Jt="0.27.2",Ht=Jt,Yt=Q,Vt={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){Vt[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var Kt={};Vt.transitional=function(t,e,n){return function(r,i,s){if(!1===t)throw new Yt(function(t,e){return"[Axios v"+Ht+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}(i," has been removed"+(e?" in "+e:"")),Yt.ERR_DEPRECATED);return e&&!Kt[i]&&(Kt[i]=!0),!t||t(r,i,s)}};var Qt=I,Gt=q,Zt=z,te=function(t){return Xt(t),t.headers=t.headers||{},t.data=It.call(t,t.data,t.headers,t.transformRequest),t.headers=$t.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),$t.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||Ft.adapter)(t).then((function(e){return Xt(t),e.data=It.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return Mt(e)||(Xt(t),e&&e.response&&(e.response.data=It.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))},ee=zt,ne=ot,re={assertOptions:function(t,e,n){if("object"!=typeof t)throw new Yt("options must be an object",Yt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),i=r.length;i-- >0;){var s=r[i],o=e[s];if(o){var a=t[s],u=void 0===a||o(a,s,t);if(!0!==u)throw new Yt("option "+s+" must be "+u,Yt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Yt("Unknown option "+s,Yt.ERR_BAD_OPTION)}},validators:Vt},ie=re.validators;function se(t){this.defaults=t,this.interceptors={request:new Zt,response:new Zt}}se.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=ee(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&re.assertOptions(n,{silentJSONParsing:ie.transitional(ie.boolean),forcedJSONParsing:ie.transitional(ie.boolean),clarifyTimeoutError:ie.transitional(ie.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,o=[];if(this.interceptors.response.forEach((function(t){o.push(t.fulfilled,t.rejected)})),!i){var a=[te,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(o),s=Promise.resolve(e);a.length;)s=s.then(a.shift(),a.shift());return s}for(var u=e;r.length;){var c=r.shift(),f=r.shift();try{u=c(u)}catch(l){f(l);break}}try{s=te(u)}catch(l){return Promise.reject(l)}for(;o.length;)s=s.then(o.shift(),o.shift());return s},se.prototype.getUri=function(t){t=ee(this.defaults,t);var e=ne(t.baseURL,t.url);return Gt(e,t.params,t.paramsSerializer)},Qt.forEach(["delete","get","head","options"],(function(t){se.prototype[t]=function(e,n){return this.request(ee(n||{},{method:t,url:e,data:(n||{}).data}))}})),Qt.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(ee(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}se.prototype[t]=e(),se.prototype[t+"Form"]=e(!0)}));var oe=se,ae=dt;function ue(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new ae(t),e(n.reason))}))}ue.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ue.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},ue.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},ue.source=function(){var t;return{token:new ue((function(e){t=e})),cancel:t}};var ce=ue,fe=I,le=I,he=b,de=oe,pe=zt;var ve=function t(e){var n=new de(e),r=he(de.prototype.request,n);return le.extend(r,de.prototype,n),le.extend(r,n),r.create=function(n){return t(pe(e,n))},r}(Pt);ve.Axios=de,ve.CanceledError=dt,ve.CancelToken=ce,ve.isCancel=Lt,ve.VERSION=Jt,ve.toFormData=tt,ve.AxiosError=Q,ve.Cancel=ve.CanceledError,ve.all=function(t){return Promise.all(t)},ve.spread=function(t){return function(e){return t.apply(null,e)}},ve.isAxiosError=function(t){return fe.isObject(t)&&!0===t.isAxiosError},w.exports=ve,w.exports.default=ve;var me=w.exports;const ge=t=>(d("data-v-1e61eea8"),t=t(),p(),t),ye={class:"common-pages"},we={class:"xie-box"},be={class:"rotate-box"},Ee={class:"esign-box"},xe={class:"cloud"},Te={class:"layer layer-ok"},Re=ge((()=>o("div",{class:"iconfont icon-dui3"},null,-1))),Ce=ge((()=>o("div",{class:"title"},"上传成功",-1)));var Oe=t(r({__name:"index",setup(t){const r=i("#333"),d=i(10),p=i(!1),y=i(""),w=i(null),b=()=>{w.value.reset()},E=()=>{w.value.generate().then((t=>{let e=m(t),n=new FormData;var r,i;n.append("file",e),(r="fanjie.xf/api.php/puzzle/lucky-create",i=n,new Promise(((t,e)=>{me.post(`http://kong.d.gbicom.com/patent_market/${r}`,i,{headers:{"Content-Type":"multipart/form-data","X-Token":v.get("token")}}).then((e=>{t(e)}))}))).then((t=>{})),x.value=!0})).catch((t=>{}))},x=i(!1);return(t,i)=>{const v=s("router-link");return e(),n("div",ye,[o("div",we,[o("div",be,[o("div",Ee,[a(u(g),{ref_key:"esign",ref:w,width:1e3,height:1e3,isCrop:p.value,lineWidth:d.value,lineColor:r.value,bgColor:y.value,"onUpdate:bgColor":i[0]||(i[0]=t=>y.value=t)},null,8,["isCrop","lineWidth","lineColor","bgColor"])])])]),o("div",{class:"btn-box"},[o("div",{class:"reset-btn",btn:"",onClick:b},"重写"),o("div",{class:"up-btn",btn:"",onClick:E},"上传")]),c(o("div",xe,null,512),[[f,x.value]]),c(o("div",Te,[Re,Ce,a(v,{to:"/speech",class:"btn layer-btn"},{default:l((()=>[h("开始活动")])),_:1})],512),[[f,x.value]])])}}}),[["__scopeId","data-v-1e61eea8"],["__file","E:/other/work/work/work/src/views/fu/index.vue"]]);export{Oe as default};
