import{aq as e,ar as t,as as n,at as a,a6 as l,au as r,r as o,av as i,u,C as s,w as c,aw as d,E as v,ax as f,ag as b,ay as p,az as h,f as m,aA as y,o as g,W as _,z as x,d as k,q as C,l as I,a as S,n as w,aB as $,aC as O,H as j,k as L,t as z,x as B,aD as E,aE as F,aF as V,aG as A}from"../default/default-001f12f7.js";const N="object"==typeof global&&global&&global.Object===Object&&global;var P="object"==typeof self&&self&&self.Object===Object&&self;const D=N||P||Function("return this")();const G=D.Symbol;var M=Object.prototype,R=M.hasOwnProperty,q=M.toString,U=G?G.toStringTag:void 0;var K=Object.prototype.toString;var T="[object Null]",J="[object Undefined]",H=G?G.toStringTag:void 0;function W(e){return null==e?void 0===e?J:T:H&&H in Object(e)?function(e){var t=R.call(e,U),n=e[U];try{e[U]=void 0;var a=!0}catch(r){}var l=q.call(e);return a&&(t?e[U]=n:delete e[U]),l}(e):function(e){return K.call(e)}(e)}function Q(e){return null!=e&&"object"==typeof e}var X="[object Symbol]";function Y(e){return"symbol"==typeof e||Q(e)&&W(e)==X}const Z=Array.isArray;var ee=1/0,te=G?G.prototype:void 0,ne=te?te.toString:void 0;function ae(e){if("string"==typeof e)return e;if(Z(e))return function(e,t){for(var n=-1,a=null==e?0:e.length,l=Array(a);++n<a;)l[n]=t(e[n],n,e);return l}(e,ae)+"";if(Y(e))return ne?ne.call(e):"";var t=e+"";return"0"==t&&1/e==-ee?"-0":t}function le(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var re="[object AsyncFunction]",oe="[object Function]",ie="[object GeneratorFunction]",ue="[object Proxy]";const se=D["__core-js_shared__"];var ce,de=(ce=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"";var ve=Function.prototype.toString;var fe=/^\[object .+?Constructor\]$/,be=Function.prototype,pe=Object.prototype,he=be.toString,me=pe.hasOwnProperty,ye=RegExp("^"+he.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ge(e){if(!le(e)||(t=e,de&&de in t))return!1;var t,n=function(e){if(!le(e))return!1;var t=W(e);return t==oe||t==ie||t==re||t==ue}(e)?ye:fe;return n.test(function(e){if(null!=e){try{return ve.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e))}function _e(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return ge(n)?n:void 0}var xe=Date.now;var ke=function(){try{var e=_e(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();const Ce=ke;var Ie=Ce?function(e,t){return Ce(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:function(e){return e};var Se,we,$e;const Oe=(Se=Ie,we=0,$e=0,function(){var e=xe(),t=16-(e-$e);if($e=e,t>0){if(++we>=800)return arguments[0]}else we=0;return Se.apply(void 0,arguments)});var je=9007199254740991,Le=/^(?:0|[1-9]\d*)$/;function ze(e,t){var n=typeof e;return!!(t=null==t?je:t)&&("number"==n||"symbol"!=n&&Le.test(e))&&e>-1&&e%1==0&&e<t}function Be(e,t){return e===t||e!=e&&t!=t}var Ee=Object.prototype.hasOwnProperty;function Fe(e,t,n){var a=e[t];Ee.call(e,t)&&Be(a,n)&&(void 0!==n||t in e)||function(e,t,n){"__proto__"==t&&Ce?Ce(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}(e,t,n)}var Ve=Math.max;var Ae=9007199254740991;function Ne(e){return Q(e)&&"[object Arguments]"==W(e)}var Pe=Object.prototype,De=Pe.hasOwnProperty,Ge=Pe.propertyIsEnumerable;const Me=Ne(function(){return arguments}())?Ne:function(e){return Q(e)&&De.call(e,"callee")&&!Ge.call(e,"callee")};var Re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qe=/^\w*$/;const Ue=_e(Object,"create");var Ke=Object.prototype.hasOwnProperty;var Te=Object.prototype.hasOwnProperty;function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function He(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1}Je.prototype.clear=function(){this.__data__=Ue?Ue(null):{},this.size=0},Je.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Je.prototype.get=function(e){var t=this.__data__;if(Ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ke.call(t,e)?t[e]:void 0},Je.prototype.has=function(e){var t=this.__data__;return Ue?void 0!==t[e]:Te.call(t,e)},Je.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ue&&void 0===t?"__lodash_hash_undefined__":t,this};var We=Array.prototype.splice;function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Qe.prototype.clear=function(){this.__data__=[],this.size=0},Qe.prototype.delete=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():We.call(t,n,1),--this.size,!0)},Qe.prototype.get=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Qe.prototype.has=function(e){return He(this.__data__,e)>-1},Qe.prototype.set=function(e,t){var n=this.__data__,a=He(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};const Xe=_e(D,"Map");function Ye(e,t){var n,a,l=e.__data__;return("string"==(a=typeof(n=t))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==n:null===n)?l["string"==typeof t?"string":"hash"]:l.map}function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ze.prototype.clear=function(){this.size=0,this.__data__={hash:new Je,map:new(Xe||Qe),string:new Je}},Ze.prototype.delete=function(e){var t=Ye(this,e).delete(e);return this.size-=t?1:0,t},Ze.prototype.get=function(e){return Ye(this,e).get(e)},Ze.prototype.has=function(e){return Ye(this,e).has(e)},Ze.prototype.set=function(e,t){var n=Ye(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};var et="Expected a function";function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(et);var n=function(){var a=arguments,l=t?t.apply(this,a):a[0],r=n.cache;if(r.has(l))return r.get(l);var o=e.apply(this,a);return n.cache=r.set(l,o)||r,o};return n.cache=new(tt.Cache||Ze),n}tt.Cache=Ze;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,lt=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,a,l){t.push(a?l.replace(at,"$1"):n||e)})),t}));const rt=lt;function ot(e,t){return Z(e)?e:function(e,t){if(Z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Y(e))||qe.test(e)||!Re.test(e)||null!=t&&e in Object(t)}(e,t)?[e]:rt(function(e){return null==e?"":ae(e)}(e))}var it=1/0;function ut(e){if("string"==typeof e||Y(e))return e;var t=e+"";return"0"==t&&1/e==-it?"-0":t}function st(e,t){for(var n=0,a=(t=ot(t,e)).length;null!=e&&n<a;)e=e[ut(t[n++])];return n&&n==a?e:void 0}function ct(e,t){for(var n=-1,a=t.length,l=e.length;++n<a;)e[l+n]=t[n];return e}var dt=G?G.isConcatSpreadable:void 0;function vt(e){return Z(e)||Me(e)||!!(dt&&e&&e[dt])}function ft(e,t,n,a,l){var r=-1,o=e.length;for(n||(n=vt),l||(l=[]);++r<o;){var i=e[r];t>0&&n(i)?t>1?ft(i,t-1,n,a,l):ct(l,i):a||(l[l.length]=i)}return l}function bt(e){return(null==e?0:e.length)?ft(e,1):[]}function pt(e,t){return null!=e&&t in Object(e)}function ht(e,t,n){for(var a,l=-1,r=(t=ot(t,e)).length,o=!1;++l<r;){var i=ut(t[l]);if(!(o=null!=e&&n(e,i)))break;e=e[i]}return o||++l!=r?o:!!(r=null==e?0:e.length)&&("number"==typeof(a=r)&&a>-1&&a%1==0&&a<=Ae)&&ze(i,r)&&(Z(e)||Me(e))}function mt(e,t,n,a){if(!le(e))return e;for(var l=-1,r=(t=ot(t,e)).length,o=r-1,i=e;null!=i&&++l<r;){var u=ut(t[l]),s=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(l!=o){var c=i[u];void 0===(s=a?a(c,u,i):void 0)&&(s=le(c)?c:ze(t[l+1])?[]:{})}Fe(i,u,s),i=i[u]}return e}function yt(e,t){return function(e,t,n){for(var a=-1,l=t.length,r={};++a<l;){var o=t[a],i=st(e,o);n(i,o)&&mt(r,ot(o,e),i)}return r}(e,t,(function(t,n){return function(e,t){return null!=e&&ht(e,t,pt)}(e,n)}))}var gt=function(e){return Oe(function(e,t,n){return t=Ve(void 0===t?e.length-1:t,0),function(){for(var a=arguments,l=-1,r=Ve(a.length-t,0),o=Array(r);++l<r;)o[l]=a[t+l];l=-1;for(var i=Array(t+1);++l<t;)i[l]=a[l];return i[t]=n(o),function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}(e,this,i)}}(e,void 0,bt),e+"")}((function(e,t){return null==e?{}:yt(e,t)}));const _t=gt;var xt;const kt="undefined"!=typeof window,Ct=e=>"boolean"==typeof e,It=e=>"number"==typeof e;kt&&(null==(xt=null==window?void 0:window.navigator)?void 0:xt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const St=e=>void 0===e;const wt="__epPropKey",$t=(a,l)=>{if(!e(a)||e(r=a)&&r[wt])return a;var r;const{values:o,required:i,default:u,type:s,validator:c}=a,d=o||c?e=>{let r=!1,i=[];if(o&&(i=Array.from(o),t(a,"default")&&i.push(u),r||(r=i.includes(e))),c&&(r||(r=c(e))),!r&&i.length>0){const t=[...new Set(i)].map((e=>JSON.stringify(e))).join(", ");n(`Invalid prop: validation failed${l?` for prop "${l}"`:""}. Expected one of [${t}], got value ${JSON.stringify(e)}.`)}return r}:void 0,v={type:s,required:!!i,validator:d,[wt]:!0};return t(a,"default")&&(v.default=u),v},Ot=e=>(e.install=a,e),jt="update:modelValue",Lt=Symbol("checkboxGroupContextKey"),zt=Symbol(),Bt=Symbol("formContextKey"),Et=Symbol("formItemContextKey"),Ft=e=>{const t=r();return l((()=>{var n,a;return null!=(a=(null==(n=t.proxy)?void 0:n.$props)[e])?a:void 0}))},Vt=o();function At(e,t=void 0){const n=r()?i(zt,Vt):Vt;return e?l((()=>{var a,l;return null!=(l=null==(a=n.value)?void 0:a[e])?l:t})):n}const Nt=$t({type:String,values:["","default","small","large"],required:!1}),Pt=(e,t={})=>{const n=o(void 0),a=t.prop?n:Ft("size"),r=t.global?n:At("size"),s=t.form?{size:void 0}:i(Bt,void 0),c=t.formItem?{size:void 0}:i(Et,void 0);return l((()=>a.value||u(e)||(null==c?void 0:c.size)||(null==s?void 0:s.size)||r.value||""))},Dt=(e,t,n,a,l)=>{let r=`${e}-${t}`;return n&&(r+=`-${n}`),a&&(r+=`__${a}`),l&&(r+=`--${l}`),r},Gt=e=>{const t=At("namespace","el");return{namespace:t,b:(n="")=>Dt(t.value,e,n,"",""),e:n=>n?Dt(t.value,e,"",n,""):"",m:n=>n?Dt(t.value,e,"","",n):"",be:(n,a)=>n&&a?Dt(t.value,e,n,a,""):"",em:(n,a)=>n&&a?Dt(t.value,e,"",n,a):"",bm:(n,a)=>n&&a?Dt(t.value,e,n,"",a):"",bem:(n,a,l)=>n&&a&&l?Dt(t.value,e,n,a,l):"",is:(e,...t)=>{const n=!(t.length>=1)||t[0];return e&&n?`is-${e}`:""},cssVar:e=>{const n={};for(const a in e)e[a]&&(n[`--${t.value}-${a}`]=e[a]);return n},cssVarName:e=>`--${t.value}-${e}`,cssVarBlock:n=>{const a={};for(const l in n)n[l]&&(a[`--${t.value}-${e}-${l}`]=n[l]);return a},cssVarBlockName:n=>`--${t.value}-${e}-${n}`}},Mt={prefix:Math.floor(1e4*Math.random()),current:0},Rt=Symbol("elIdInjection"),qt=()=>({form:i(Bt,void 0),formItem:i(Et,void 0)}),Ut=(e,{formItemContext:t,disableIdGeneration:n,disableIdManagement:a})=>{n||(n=o(!1)),a||(a=o(!1));const r=o();let f;const b=l((()=>{var n;return!!(!e.label&&t&&t.inputIds&&(null==(n=t.inputIds)?void 0:n.length)<=1)}));return s((()=>{f=c([d(e,"id"),n],(([e,n])=>{const o=null!=e?e:n?void 0:(e=>{const t=i(Rt,Mt),n=At("namespace","el");return l((()=>u(e)||`${n.value}-id-${t.prefix}-${t.current++}`))})().value;o!==r.value&&((null==t?void 0:t.removeInputId)&&(r.value&&t.removeInputId(r.value),(null==a?void 0:a.value)||n||!o||t.addInputId(o)),r.value=o)}),{immediate:!0})})),v((()=>{f&&f(),(null==t?void 0:t.removeInputId)&&r.value&&t.removeInputId(r.value)})),{isLabeledByFormItem:b,inputId:r}};var Kt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,l]of t)n[a]=l;return n};const Tt={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Nt,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},Jt={[jt]:e=>f(e)||It(e)||Ct(e),change:e=>f(e)||It(e)||Ct(e)},Ht=({model:e,isChecked:t})=>{const n=i(Lt,void 0),a=l((()=>{var a,l;const r=null==(a=null==n?void 0:n.max)?void 0:a.value,o=null==(l=null==n?void 0:n.min)?void 0:l.value;return!St(r)&&e.value.length>=r&&!t.value||!St(o)&&e.value.length<=o&&t.value}));return{isDisabled:(e=>{const t=Ft("disabled"),n=i(Bt,void 0);return l((()=>t.value||u(e)||(null==n?void 0:n.disabled)||!1))})(l((()=>(null==n?void 0:n.disabled.value)||a.value))),isLimitDisabled:a}},Wt=(e,{model:t,isLimitExceeded:n,hasOwnLabel:a,isDisabled:o,isLabeledByFormItem:u})=>{const s=i(Lt,void 0),{formItem:d}=qt(),{emit:v}=r();function f(t){var n,a;return t===e.trueLabel||!0===t?null==(n=e.trueLabel)||n:null!=(a=e.falseLabel)&&a}const p=l((()=>(null==s?void 0:s.validateEvent)||e.validateEvent));return c((()=>e.modelValue),(()=>{p.value&&(null==d||d.validate("change").catch((e=>{})))})),{handleChange:function(e){if(n.value)return;const t=e.target;v("change",f(t.checked),e)},onClickRoot:async function(l){if(!n.value&&!a.value&&!o.value&&u.value){l.composedPath().some((e=>"LABEL"===e.tagName))||(t.value=f([!1,e.falseLabel].includes(t.value)),await b(),function(e,t){v("change",f(e),t)}(t.value,l))}}}},Qt=(e,t)=>{const{formItem:n}=qt(),{model:a,isGroup:u,isLimitExceeded:s}=(e=>{const t=o(!1),{emit:n}=r(),a=i(Lt,void 0),u=l((()=>!1===St(a))),s=o(!1);return{model:l({get(){var n,l;return u.value?null==(n=null==a?void 0:a.modelValue)?void 0:n.value:null!=(l=e.modelValue)?l:t.value},set(e){var l,r;u.value&&p(e)?(s.value=void 0!==(null==(l=null==a?void 0:a.max)?void 0:l.value)&&e.length>(null==a?void 0:a.max.value),!1===s.value&&(null==(r=null==a?void 0:a.changeEvent)||r.call(a,e))):(n(jt,e),t.value=e)}}),isGroup:u,isLimitExceeded:s}})(e),{isFocused:c,isChecked:d,checkboxButtonSize:v,checkboxSize:f,hasOwnLabel:b}=((e,t,{model:n})=>{const a=i(Lt,void 0),r=o(!1),u=l((()=>{const t=n.value;return Ct(t)?t:p(t)?t.map(h).includes(e.label):null!=t?t===e.trueLabel:!!t}));return{checkboxButtonSize:Pt(l((()=>{var e;return null==(e=null==a?void 0:a.size)?void 0:e.value})),{prop:!0}),isChecked:u,isFocused:r,checkboxSize:Pt(l((()=>{var e;return null==(e=null==a?void 0:a.size)?void 0:e.value}))),hasOwnLabel:l((()=>!(!t.default&&!e.label)))}})(e,t,{model:a}),{isDisabled:m}=Ht({model:a,isChecked:d}),{inputId:y,isLabeledByFormItem:g}=Ut(e,{formItemContext:n,disableIdGeneration:b,disableIdManagement:u}),{handleChange:_,onClickRoot:x}=Wt(e,{model:a,isLimitExceeded:s,hasOwnLabel:b,isDisabled:m,isLabeledByFormItem:g});return((e,{model:t})=>{e.checked&&(p(t.value)&&!t.value.includes(e.label)?t.value.push(e.label):t.value=e.trueLabel||!0)})(e,{model:a}),{inputId:y,isLabeledByFormItem:g,isChecked:d,isDisabled:m,isFocused:c,checkboxButtonSize:v,checkboxSize:f,hasOwnLabel:b,model:a,handleChange:_,onClickRoot:x}},Xt=["tabindex","role","aria-checked"],Yt=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Zt=["id","aria-hidden","disabled","value","name","tabindex"],en=m({name:"ElCheckbox"}),tn=m({...en,props:Tt,emits:Jt,setup(e){const t=e,n=y(),{inputId:a,isLabeledByFormItem:l,isChecked:r,isDisabled:o,isFocused:i,checkboxSize:s,hasOwnLabel:c,model:d,handleChange:v,onClickRoot:f}=Qt(t,n),b=Gt("checkbox");return(e,t)=>(g(),_(E(!u(c)&&u(l)?"span":"label"),{class:C([u(b).b(),u(b).m(u(s)),u(b).is("disabled",u(o)),u(b).is("bordered",e.border),u(b).is("checked",u(r))]),"aria-controls":e.indeterminate?e.controls:null,onClick:u(f)},{default:x((()=>[k("span",{class:C([u(b).e("input"),u(b).is("disabled",u(o)),u(b).is("checked",u(r)),u(b).is("indeterminate",e.indeterminate),u(b).is("focus",u(i))]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?I((g(),S("input",{key:0,id:u(a),"onUpdate:modelValue":t[0]||(t[0]=e=>w(d)?d.value=e:null),class:C(u(b).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:u(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:t[1]||(t[1]=(...e)=>u(v)&&u(v)(...e)),onFocus:t[2]||(t[2]=e=>i.value=!0),onBlur:t[3]||(t[3]=e=>i.value=!1)},null,42,Yt)),[[$,u(d)]]):I((g(),S("input",{key:1,id:u(a),"onUpdate:modelValue":t[4]||(t[4]=e=>w(d)?d.value=e:null),class:C(u(b).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:u(o),value:e.label,name:e.name,tabindex:e.tabindex,onChange:t[5]||(t[5]=(...e)=>u(v)&&u(v)(...e)),onFocus:t[6]||(t[6]=e=>i.value=!0),onBlur:t[7]||(t[7]=e=>i.value=!1)},null,42,Zt)),[[$,u(d)]]),k("span",{class:C(u(b).e("inner"))},null,2)],10,Xt),u(c)?(g(),S("span",{key:0,class:C(u(b).e("label"))},[O(e.$slots,"default"),e.$slots.default?B("v-if",!0):(g(),S(j,{key:0},[L(z(e.label),1)],64))],2)):B("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}});var nn=Kt(tn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const an=["name","tabindex","disabled","true-value","false-value"],ln=["name","tabindex","disabled","value"],rn=m({name:"ElCheckboxButton"}),on=m({...rn,props:Tt,emits:Jt,setup(e){const t=e,n=y(),{isFocused:a,isChecked:r,isDisabled:o,checkboxButtonSize:s,model:c,handleChange:d}=Qt(t,n),v=i(Lt,void 0),f=Gt("checkbox"),b=l((()=>{var e,t,n,a;const l=null!=(t=null==(e=null==v?void 0:v.fill)?void 0:e.value)?t:"";return{backgroundColor:l,borderColor:l,color:null!=(a=null==(n=null==v?void 0:v.textColor)?void 0:n.value)?a:"",boxShadow:l?`-1px 0 0 0 ${l}`:void 0}}));return(e,t)=>(g(),S("label",{class:C([u(f).b("button"),u(f).bm("button",u(s)),u(f).is("disabled",u(o)),u(f).is("checked",u(r)),u(f).is("focus",u(a))])},[e.trueLabel||e.falseLabel?I((g(),S("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=e=>w(c)?c.value=e:null),class:C(u(f).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:u(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:t[1]||(t[1]=(...e)=>u(d)&&u(d)(...e)),onFocus:t[2]||(t[2]=e=>a.value=!0),onBlur:t[3]||(t[3]=e=>a.value=!1)},null,42,an)),[[$,u(c)]]):I((g(),S("input",{key:1,"onUpdate:modelValue":t[4]||(t[4]=e=>w(c)?c.value=e:null),class:C(u(f).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:u(o),value:e.label,onChange:t[5]||(t[5]=(...e)=>u(d)&&u(d)(...e)),onFocus:t[6]||(t[6]=e=>a.value=!0),onBlur:t[7]||(t[7]=e=>a.value=!1)},null,42,ln)),[[$,u(c)]]),e.$slots.default||e.label?(g(),S("span",{key:2,class:C(u(f).be("button","inner")),style:F(u(r)?u(b):void 0)},[O(e.$slots,"default",{},(()=>[L(z(e.label),1)]))],6)):B("v-if",!0)],2))}});var un=Kt(on,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const sn=(cn={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Nt,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}},function(e){for(var t=-1,n=null==e?0:e.length,a={};++t<n;){var l=e[t];a[l[0]]=l[1]}return a}(Object.entries(cn).map((([e,t])=>[e,$t(t,e)]))));var cn;const dn={[jt]:e=>p(e),change:e=>p(e)},vn=m({name:"ElCheckboxGroup"}),fn=m({...vn,props:sn,emits:dn,setup(e,{emit:t}){const n=e,a=Gt("checkbox"),{formItem:r}=qt(),{inputId:o,isLabeledByFormItem:i}=Ut(n,{formItemContext:r}),s=async e=>{t(jt,e),await b(),t("change",e)},d=l({get:()=>n.modelValue,set(e){s(e)}});return V(Lt,{..._t(A(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:s}),c((()=>n.modelValue),(()=>{n.validateEvent&&(null==r||r.validate("change").catch((e=>{})))})),(e,t)=>{var n;return g(),_(E(e.tag),{id:u(o),class:C(u(a).b("group")),role:"group","aria-label":u(i)?void 0:e.label||"checkbox-group","aria-labelledby":u(i)?null==(n=u(r))?void 0:n.labelId:void 0},{default:x((()=>[O(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var bn=Kt(fn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const pn=((e,t)=>{if(e.install=n=>{for(const a of[e,...Object.values(null!=t?t:{})])n.component(a.name,a)},t)for(const[n,a]of Object.entries(t))e[n]=a;return e})(nn,{CheckboxButton:un,CheckboxGroup:bn});Ot(un),Ot(bn);export{pn as E};
