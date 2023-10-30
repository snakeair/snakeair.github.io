import{K as e,Y as t,Z as l,$ as o,d as n,N as a,a0 as i,a1 as s,r as u,a2 as c,a3 as r,a4 as d,M as m,a5 as p,a6 as v,h,R as f,a7 as g,a8 as b,O as y,a9 as x,L as O,aa as V,w as k,ab as w,ac as S,ad as H,ae as T,af as N,ag as C,S as I,ah as B,ai as M,aj as D,ak as j}from"../default/default-c5a4686d.js";const[$,P,E]=e("picker"),A=e=>e.find((e=>!e.disabled))||e[0];function L(e,t){for(let l=t=o(t,0,e.length);l<e.length;l++)if(!e[l].disabled)return l;for(let l=t-1;l>=0;l--)if(!e[l].disabled)return l;return 0}const _=(e,t,l)=>void 0!==t&&!!e.find((e=>e[l.value]===t));function z(e,t,l){const o=e.findIndex((e=>e[l.value]===t));return e[L(e,o)]}const[F,R]=e("picker-column"),Y=Symbol(F);var K=n({name:F,props:{value:a,fields:i(Object),options:s(),readonly:Boolean,allowHtml:Boolean,optionHeight:i(Number),swipeDuration:i(a),visibleOptionNum:i(a)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:l}){let n,a,i,s,g;const b=u(),y=u(),x=u(0),O=u(0),V=c(),k=()=>e.options.length,w=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,S=l=>{let o=L(e.options,l);const a=-o*e.optionHeight,i=()=>{o>k()-1&&(o=L(e.options,l));const n=e.options[o][e.fields.value];n!==e.value&&t("change",n)};n&&a!==x.value?g=i:i(),x.value=a},H=()=>e.readonly||!e.options.length,T=t=>o(Math.round(-t/e.optionHeight),0,k()-1),N=r((()=>T(x.value))),C=()=>{n=!1,O.value=0,g&&(g(),g=null)},I=e=>{if(!H()){if(V.start(e),n){const e=function(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}(y.value);x.value=Math.min(0,e-w())}O.value=0,a=x.value,i=Date.now(),s=a,g=null}},B=()=>{if(H())return;const t=x.value-s,l=Date.now()-i;if(l<300&&Math.abs(t)>15)return void((t,l)=>{const o=Math.abs(t/l);t=x.value+o/.003*(t<0?-1:1);const n=T(t);O.value=+e.swipeDuration,S(n)})(t,l);const o=T(x.value);O.value=200,S(o),setTimeout((()=>{n=!1}),0)},M=()=>{const o={height:`${e.optionHeight}px`};return e.options.map(((a,i)=>{const s=a[e.fields.text],{disabled:u}=a,c=a[e.fields.value],r={role:"button",style:o,tabindex:u?-1:0,class:[R("item",{disabled:u,selected:c===e.value}),a.className],onClick:()=>(l=>{n||H()||(g=null,O.value=200,S(l),t("clickOption",e.options[l]))})(i)},d={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return h("li",r,[l.option?l.option(a,i):h("div",d,null)])}))};return d(Y),m({stopMomentum:C}),p((()=>{const t=n?Math.floor(-x.value/e.optionHeight):e.options.findIndex((t=>t[e.fields.value]===e.value)),l=L(e.options,t),o=-l*e.optionHeight;n&&l<t&&C(),x.value=o})),v("touchmove",(l=>{if(H())return;V.move(l),V.isVertical()&&(n=!0,f(l,!0));const u=o(a+V.deltaY.value,-k()*e.optionHeight,e.optionHeight),c=T(u);c!==N.value&&t("scrollInto",e.options[c]),x.value=u;const r=Date.now();r-i>300&&(i=r,s=u)}),{target:b}),()=>h("div",{ref:b,class:R(),onTouchstartPassive:I,onTouchend:B,onTouchcancel:B},[h("ul",{ref:y,style:{transform:`translate3d(0, ${x.value+w()}px, 0)`,transitionDuration:`${O.value}ms`,transitionProperty:O.value?"all":"none"},class:R("wrapper"),onTransitionend:C},[M()])])}});const[U]=e("picker-toolbar"),Z={title:String,cancelButtonText:String,confirmButtonText:String},q=["cancel","confirm","title","toolbar"],G=Object.keys(Z);var J=n({name:U,props:Z,emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const o=()=>t("cancel"),n=()=>t("confirm"),a=()=>{const t=e.cancelButtonText||E("cancel");return h("button",{type:"button",class:[P("cancel"),g],onClick:o},[l.cancel?l.cancel():t])},i=()=>{const t=e.confirmButtonText||E("confirm");return h("button",{type:"button",class:[P("confirm"),g],onClick:n},[l.confirm?l.confirm():t])};return()=>h("div",{class:P("toolbar")},[l.toolbar?l.toolbar():[a(),l.title?l.title():e.title?h("div",{class:[P("title"),"van-ellipsis"]},[e.title]):void 0,i()]])}});const[Q,W]=e("picker-group"),X=Symbol(Q);l({tabs:s(),activeTab:b(0),nextStepText:String},Z);const ee=l({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:b(44),showToolbar:y,swipeDuration:b(1e3),visibleOptionNum:b(6)},Z);var te=n({name:$,props:l({},ee,{columns:s(),modelValue:s(),toolbarPosition:x("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const a=u(),i=u(e.modelValue.slice(0)),{parent:s}=d(X),{children:c,linkChildren:p}=O(Y);p();const g=r((()=>function(e){return l({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),b=r((()=>V(e.optionHeight))),y=r((()=>function(e,t){const l=e[0];if(l){if(Array.isArray(l))return"multiple";if(t.children in l)return"cascade"}return"default"}(e.columns,g.value))),x=r((()=>{const{columns:l}=e;switch(y.value){case"multiple":return l;case"cascade":return function(e,l,o){const n=[];let a={[l.children]:e},i=0;for(;a&&a[l.children];){const e=a[l.children],s=o.value[i];a=t(s)?z(e,s,l):void 0,!a&&e.length&&(a=z(e,A(e)[l.value],l)),i++,n.push(e)}return n}(l,g.value,i);default:return[l]}})),I=r((()=>x.value.some((e=>e.length)))),B=r((()=>x.value.map(((e,t)=>z(e,i.value[t],g.value))))),M=r((()=>x.value.map(((e,t)=>e.findIndex((e=>e[g.value.value]===i.value[t])))))),D=(e,t)=>{if(i.value[e]!==t){const l=i.value.slice(0);l[e]=t,i.value=l}},j=()=>({selectedValues:i.value.slice(0),selectedOptions:B.value,selectedIndexes:M.value}),$=()=>{c.forEach((e=>e.stopMomentum()));const e=j();return H((()=>{o("confirm",e)})),e},E=()=>o("cancel",j()),L=()=>x.value.map(((t,a)=>h(K,{value:i.value[a],fields:g.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:b.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,t)=>{D(t,e),"cascade"===y.value&&i.value.forEach(((e,t)=>{const l=x.value[t];_(l,e,g.value)||D(t,l.length?l[0][g.value.value]:void 0)})),H((()=>{o("change",l({columnIndex:t},j()))}))})(e,a),onClickOption:e=>((e,t)=>{const n={columnIndex:t,currentOption:e};o("clickOption",l(j(),n)),o("scrollInto",n)})(e,a),onScrollInto:e=>{o("scrollInto",{currentOption:e,columnIndex:a})}},{option:n.option}))),F=e=>{if(I.value){const t={height:`${b.value}px`},l={backgroundSize:`100% ${(e-b.value)/2}px`};return[h("div",{class:P("mask"),style:l},null),h("div",{class:[C,P("frame")],style:t},null)]}},R=()=>{const t=b.value*+e.visibleOptionNum,l={height:`${t}px`};return h("div",{ref:a,class:P("columns"),style:l},[L(),F(t)])},U=()=>{if(e.showToolbar&&!s)return h(J,N(T(e,G),{onConfirm:$,onCancel:E}),T(n,q))};let Z;k(x,(e=>{e.forEach(((e,t)=>{e.length&&!_(e,i.value[t],g.value)&&D(t,A(e)[g.value.value])}))}),{immediate:!0}),k((()=>e.modelValue),(e=>{w(e,i.value)||w(e,Z)||(i.value=e.slice(0),Z=e.slice(0))}),{deep:!0}),k(i,(t=>{w(t,e.modelValue)||(Z=t.slice(0),o("update:modelValue",Z))}),{immediate:!0}),v("touchmove",f,{target:a});return m({confirm:$,getSelectedOptions:()=>B.value}),()=>{var t,l;return h("div",{class:P()},["top"===e.toolbarPosition?U():null,e.loading?h(S,{class:P("loading")},null):null,null==(t=n["columns-top"])?void 0:t.call(n),R(),null==(l=n["columns-bottom"])?void 0:l.call(n),"bottom"===e.toolbarPosition?U():null])}}});const le="000000",oe=["title","cancel","confirm","toolbar","columns-top","columns-bottom"],ne=["title","loading","readonly","optionHeight","swipeDuration","visibleOptionNum","cancelButtonText","confirmButtonText"],ae=(e="",t=le,l=void 0)=>({text:e,value:t,children:l});function ie({areaList:e,columnsNum:t,columnsPlaceholder:l}){const{city_list:o={},county_list:n={},province_list:a={}}=e,i=+t>1,s=+t>2,u=new Map;Object.keys(a).forEach((e=>{u.set(e.slice(0,2),ae(a[e],e,(()=>{if(i)return l.length?[ae(l[0],le,s?[]:void 0)]:[]})()))}));const c=new Map;if(i){const e=()=>{if(s)return l.length?[ae(l[1])]:[]};Object.keys(o).forEach((t=>{const l=ae(o[t],t,e());c.set(t.slice(0,4),l);const n=u.get(t.slice(0,2));n&&n.children.push(l)}))}s&&Object.keys(n).forEach((e=>{const t=c.get(e.slice(0,4));t&&t.children.push(ae(n[e],e))}));const r=Array.from(u.values());if(l.length){const e=s?[ae(l[2])]:void 0,t=i?[ae(l[1],le,e)]:void 0;r.unshift(ae(l[0],le,t))}return r}const se=I(te),[ue,ce]=e("area");const re=I(n({name:ue,props:l({},T(ee,ne),{modelValue:String,columnsNum:b(3),columnsPlaceholder:s(),areaList:{type:Object,default:()=>({})}}),emits:["change","confirm","cancel","update:modelValue"],setup(e,{emit:t,slots:l}){const o=u([]),n=u(),a=r((()=>ie(e))),i=(...e)=>t("change",...e),s=(...e)=>t("cancel",...e),c=(...e)=>t("confirm",...e);return k(o,(l=>{const o=l.length?l[l.length-1]:"";o&&o!==e.modelValue&&t("update:modelValue",o)}),{deep:!0}),k((()=>e.modelValue),(t=>{if(t){t!==(o.value.length?o.value[o.value.length-1]:"")&&(o.value=[`${t.slice(0,2)}0000`,`${t.slice(0,4)}00`,t].slice(0,+e.columnsNum))}else o.value=[]}),{immediate:!0}),m({confirm:()=>{var e;return null==(e=n.value)?void 0:e.confirm()},getSelectedOptions:()=>{var e;return(null==(e=n.value)?void 0:e.getSelectedOptions())||[]}}),()=>h(se,N({ref:n,modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:ce(),columns:a.value,onChange:i,onCancel:s,onConfirm:c},T(e,ne)),T(l,oe))}})),[de,me]=e("radio-group"),pe={shape:String,disabled:Boolean,iconSize:a,direction:String,modelValue:M,checkedColor:String},ve=Symbol(de);const he=I(n({name:de,props:pe,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{linkChildren:o}=O(ve);return k((()=>e.modelValue),(e=>t("change",e))),o({props:e,updateValue:e=>t("update:modelValue",e)}),B((()=>e.modelValue)),()=>{var t;return h("div",{class:me([e.direction]),role:"radiogroup"},[null==(t=l.default)?void 0:t.call(l)])}}})),fe=l({},D,{shape:String}),[ge,be]=e("radio");const ye=I(n({name:ge,props:fe,emits:["update:modelValue"],setup(e,{emit:t,slots:l}){const{parent:o}=d(ve),n=()=>{o?o.updateValue(e.name):t("update:modelValue",e.name)};return()=>h(j,N({bem:be,role:"radio",parent:o,checked:(o?o.props.modelValue:e.modelValue)===e.name,onToggle:n},e),T(l,["default","icon"]))}}));export{re as A,ye as R,he as a};
