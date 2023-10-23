import{N as e,a1 as t,e as o,a2 as l,f as n,R as a,a3 as i,a4 as s,r as u,a5 as c,a6 as r,a7 as d,Q as m,a8 as p,a9 as v,c as f,U as h,aa as g,ab as b,S as y,ac as x,O,ad as V,w as k,ae as w,af as S,ag as H,ah as T,m as C,ai as N,V as I,aj as B,ak as j,al as D,am as M,i as $,an as P,ao as E}from"../default/default-001f12f7.js";import{m as A,u as L}from"./mount-component-31d4681c.js";const[U,_,z]=e("picker"),F=e=>e.find((e=>!e.disabled))||e[0];function R(e,t){for(let o=t=l(t,0,e.length);o<e.length;o++)if(!e[o].disabled)return o;for(let o=t-1;o>=0;o--)if(!e[o].disabled)return o;return 0}const Q=(e,t,o)=>void 0!==t&&!!e.find((e=>e[o.value]===t));function Y(e,t,o){const l=e.findIndex((e=>e[o.value]===t));return e[R(e,l)]}const[q,G]=e("picker-column"),J=Symbol(q);var K=n({name:q,props:{value:a,fields:i(Object),options:s(),readonly:Boolean,allowHtml:Boolean,optionHeight:i(Number),swipeDuration:i(a),visibleOptionNum:i(a)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:o}){let n,a,i,s,g;const b=u(),y=u(),x=u(0),O=u(0),V=c(),k=()=>e.options.length,w=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,S=o=>{let l=R(e.options,o);const a=-l*e.optionHeight,i=()=>{l>k()-1&&(l=R(e.options,o));const n=e.options[l][e.fields.value];n!==e.value&&t("change",n)};n&&a!==x.value?g=i:i(),x.value=a},H=()=>e.readonly||!e.options.length,T=t=>l(Math.round(-t/e.optionHeight),0,k()-1),C=r((()=>T(x.value))),N=()=>{n=!1,O.value=0,g&&(g(),g=null)},I=e=>{if(!H()){if(V.start(e),n){const e=function(e){const{transform:t}=window.getComputedStyle(e),o=t.slice(7,t.length-1).split(", ")[5];return Number(o)}(y.value);x.value=Math.min(0,e-w())}O.value=0,a=x.value,i=Date.now(),s=a,g=null}},B=()=>{if(H())return;const t=x.value-s,o=Date.now()-i;if(o<300&&Math.abs(t)>15)return void((t,o)=>{const l=Math.abs(t/o);t=x.value+l/.003*(t<0?-1:1);const n=T(t);O.value=+e.swipeDuration,S(n)})(t,o);const l=T(x.value);O.value=200,S(l),setTimeout((()=>{n=!1}),0)},j=()=>{const l={height:`${e.optionHeight}px`};return e.options.map(((a,i)=>{const s=a[e.fields.text],{disabled:u}=a,c=a[e.fields.value],r={role:"button",style:l,tabindex:u?-1:0,class:[G("item",{disabled:u,selected:c===e.value}),a.className],onClick:()=>(o=>{n||H()||(g=null,O.value=200,S(o),t("clickOption",e.options[o]))})(i)},d={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return f("li",r,[o.option?o.option(a,i):f("div",d,null)])}))};return d(J),m({stopMomentum:N}),p((()=>{const t=n?Math.floor(-x.value/e.optionHeight):e.options.findIndex((t=>t[e.fields.value]===e.value)),o=R(e.options,t),l=-o*e.optionHeight;n&&o<t&&N(),x.value=l})),v("touchmove",(o=>{if(H())return;V.move(o),V.isVertical()&&(n=!0,h(o,!0));const u=l(a+V.deltaY.value,-k()*e.optionHeight,e.optionHeight),c=T(u);c!==C.value&&t("scrollInto",e.options[c]),x.value=u;const r=Date.now();r-i>300&&(i=r,s=u)}),{target:b}),()=>f("div",{ref:b,class:G(),onTouchstartPassive:I,onTouchend:B,onTouchcancel:B},[f("ul",{ref:y,style:{transform:`translate3d(0, ${x.value+w()}px, 0)`,transitionDuration:`${O.value}ms`,transitionProperty:O.value?"all":"none"},class:G("wrapper"),onTransitionend:N},[j()])])}});const[W]=e("picker-toolbar"),X={title:String,cancelButtonText:String,confirmButtonText:String},Z=["cancel","confirm","title","toolbar"],ee=Object.keys(X);var te=n({name:W,props:X,emits:["confirm","cancel"],setup(e,{emit:t,slots:o}){const l=()=>t("cancel"),n=()=>t("confirm"),a=()=>{const t=e.cancelButtonText||z("cancel");return f("button",{type:"button",class:[_("cancel"),g],onClick:l},[o.cancel?o.cancel():t])},i=()=>{const t=e.confirmButtonText||z("confirm");return f("button",{type:"button",class:[_("confirm"),g],onClick:n},[o.confirm?o.confirm():t])};return()=>f("div",{class:_("toolbar")},[o.toolbar?o.toolbar():[a(),o.title?o.title():e.title?f("div",{class:[_("title"),"van-ellipsis"]},[e.title]):void 0,i()]])}});const[oe,le]=e("picker-group"),ne=Symbol(oe);o({tabs:s(),activeTab:b(0),nextStepText:String},X);const ae=o({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:b(44),showToolbar:y,swipeDuration:b(1e3),visibleOptionNum:b(6)},X);var ie=n({name:U,props:o({},ae,{columns:s(),modelValue:s(),toolbarPosition:x("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:l,slots:n}){const a=u(),i=u(e.modelValue.slice(0)),{parent:s}=d(ne),{children:c,linkChildren:p}=O(J);p();const g=r((()=>function(e){return o({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),b=r((()=>V(e.optionHeight))),y=r((()=>function(e,t){const o=e[0];if(o){if(Array.isArray(o))return"multiple";if(t.children in o)return"cascade"}return"default"}(e.columns,g.value))),x=r((()=>{const{columns:o}=e;switch(y.value){case"multiple":return o;case"cascade":return function(e,o,l){const n=[];let a={[o.children]:e},i=0;for(;a&&a[o.children];){const e=a[o.children],s=l.value[i];a=t(s)?Y(e,s,o):void 0,!a&&e.length&&(a=Y(e,F(e)[o.value],o)),i++,n.push(e)}return n}(o,g.value,i);default:return[o]}})),I=r((()=>x.value.some((e=>e.length)))),B=r((()=>x.value.map(((e,t)=>Y(e,i.value[t],g.value))))),j=r((()=>x.value.map(((e,t)=>e.findIndex((e=>e[g.value.value]===i.value[t])))))),D=(e,t)=>{if(i.value[e]!==t){const o=i.value.slice(0);o[e]=t,i.value=o}},M=()=>({selectedValues:i.value.slice(0),selectedOptions:B.value,selectedIndexes:j.value}),$=()=>{c.forEach((e=>e.stopMomentum()));const e=M();return H((()=>{l("confirm",e)})),e},P=()=>l("cancel",M()),E=()=>x.value.map(((t,a)=>f(K,{value:i.value[a],fields:g.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:b.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,t)=>{D(t,e),"cascade"===y.value&&i.value.forEach(((e,t)=>{const o=x.value[t];Q(o,e,g.value)||D(t,o.length?o[0][g.value.value]:void 0)})),H((()=>{l("change",o({columnIndex:t},M()))}))})(e,a),onClickOption:e=>((e,t)=>{const n={columnIndex:t,currentOption:e};l("clickOption",o(M(),n)),l("scrollInto",n)})(e,a),onScrollInto:e=>{l("scrollInto",{currentOption:e,columnIndex:a})}},{option:n.option}))),A=e=>{if(I.value){const t={height:`${b.value}px`},o={backgroundSize:`100% ${(e-b.value)/2}px`};return[f("div",{class:_("mask"),style:o},null),f("div",{class:[N,_("frame")],style:t},null)]}},L=()=>{const t=b.value*+e.visibleOptionNum,o={height:`${t}px`};return f("div",{ref:a,class:_("columns"),style:o},[E(),A(t)])},U=()=>{if(e.showToolbar&&!s)return f(te,C(T(e,ee),{onConfirm:$,onCancel:P}),T(n,Z))};let z;k(x,(e=>{e.forEach(((e,t)=>{e.length&&!Q(e,i.value[t],g.value)&&D(t,F(e)[g.value.value])}))}),{immediate:!0}),k((()=>e.modelValue),(e=>{w(e,i.value)||w(e,z)||(i.value=e.slice(0),z=e.slice(0))}),{deep:!0}),k(i,(t=>{w(t,e.modelValue)||(z=t.slice(0),l("update:modelValue",z))}),{immediate:!0}),v("touchmove",h,{target:a});return m({confirm:$,getSelectedOptions:()=>B.value}),()=>{var t,o;return f("div",{class:_()},["top"===e.toolbarPosition?U():null,e.loading?f(S,{class:_("loading")},null):null,null==(t=n["columns-top"])?void 0:t.call(n),L(),null==(o=n["columns-bottom"])?void 0:o.call(n),"bottom"===e.toolbarPosition?U():null])}}});const se="000000",ue=["title","cancel","confirm","toolbar","columns-top","columns-bottom"],ce=["title","loading","readonly","optionHeight","swipeDuration","visibleOptionNum","cancelButtonText","confirmButtonText"],re=(e="",t=se,o=void 0)=>({text:e,value:t,children:o});function de({areaList:e,columnsNum:t,columnsPlaceholder:o}){const{city_list:l={},county_list:n={},province_list:a={}}=e,i=+t>1,s=+t>2,u=new Map;Object.keys(a).forEach((e=>{u.set(e.slice(0,2),re(a[e],e,(()=>{if(i)return o.length?[re(o[0],se,s?[]:void 0)]:[]})()))}));const c=new Map;if(i){const e=()=>{if(s)return o.length?[re(o[1])]:[]};Object.keys(l).forEach((t=>{const o=re(l[t],t,e());c.set(t.slice(0,4),o);const n=u.get(t.slice(0,2));n&&n.children.push(o)}))}s&&Object.keys(n).forEach((e=>{const t=c.get(e.slice(0,4));t&&t.children.push(re(n[e],e))}));const r=Array.from(u.values());if(o.length){const e=s?[re(o[2])]:void 0,t=i?[re(o[1],se,e)]:void 0;r.unshift(re(o[0],se,t))}return r}const me=I(ie),[pe,ve]=e("area");const fe=I(n({name:pe,props:o({},T(ae,ce),{modelValue:String,columnsNum:b(3),columnsPlaceholder:s(),areaList:{type:Object,default:()=>({})}}),emits:["change","confirm","cancel","update:modelValue"],setup(e,{emit:t,slots:o}){const l=u([]),n=u(),a=r((()=>de(e))),i=(...e)=>t("change",...e),s=(...e)=>t("cancel",...e),c=(...e)=>t("confirm",...e);return k(l,(o=>{const l=o.length?o[o.length-1]:"";l&&l!==e.modelValue&&t("update:modelValue",l)}),{deep:!0}),k((()=>e.modelValue),(t=>{if(t){t!==(l.value.length?l.value[l.value.length-1]:"")&&(l.value=[`${t.slice(0,2)}0000`,`${t.slice(0,4)}00`,t].slice(0,+e.columnsNum))}else l.value=[]}),{immediate:!0}),m({confirm:()=>{var e;return null==(e=n.value)?void 0:e.confirm()},getSelectedOptions:()=>{var e;return(null==(e=n.value)?void 0:e.getSelectedOptions())||[]}}),()=>f(me,C({ref:n,modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,class:ve(),columns:a.value,onChange:i,onCancel:s,onConfirm:c},T(e,ce)),T(o,ue))}})),[he,ge]=e("radio-group"),be={disabled:Boolean,iconSize:a,direction:String,modelValue:j,checkedColor:String},ye=Symbol(he);const xe=I(n({name:he,props:be,emits:["change","update:modelValue"],setup(e,{emit:t,slots:o}){const{linkChildren:l}=O(ye);return k((()=>e.modelValue),(e=>t("change",e))),l({props:e,updateValue:e=>t("update:modelValue",e)}),B((()=>e.modelValue)),()=>{var t;return f("div",{class:ge([e.direction]),role:"radiogroup"},[null==(t=o.default)?void 0:t.call(o)])}}})),[Oe,Ve]=e("radio");const ke=I(n({name:Oe,props:D,emits:["update:modelValue"],setup(e,{emit:t,slots:o}){const{parent:l}=d(ye),n=()=>{l?l.updateValue(e.name):t("update:modelValue",e.name)};return()=>f(M,C({bem:Ve,role:"radio",parent:l,checked:(l?l.props.modelValue:e.modelValue)===e.name,onToggle:n},e),T(o,["default","icon"]))}}));let we,Se;let He={type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0};const Te=()=>{Se&&Se.toggle(!1)};function Ce(e){var t;if($)return Se||({instance:Se}=A({setup(){const{state:e,toggle:t}=L();return()=>f(E,C(e,{"onUpdate:show":t}),null)}})),e=o({},He,P(t=e)?t:{message:t}),Se.open(e),clearTimeout(we),e.duration>0&&(we=setTimeout(Te,e.duration)),Se}export{fe as A,ke as R,xe as a,Ce as s};
