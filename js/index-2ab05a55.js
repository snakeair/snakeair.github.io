import{J as e,Y as t,Z as l,a0 as o,d as n,M as a,a1 as i,a2 as s,r as u,a3 as c,a4 as r,a5 as d,L as m,a6 as p,a7 as v,h as f,Q as h,a8 as g,a9 as b,N as y,aa as x,K as k,ab as O,ac as V,ad as w,ae as S,af as T,ag as H,ah as C,ai as N,R as I,aj as B,ak as D,al as M,am as j,an as $,ao as P,ap as E,aq as A,ar as L}from"../default/default-59b2d1c4.js";const[_,z,F]=e("picker"),R=e=>e.find((e=>!e.disabled))||e[0];function U(e,t){for(let l=t=o(t,0,e.length);l<e.length;l++)if(!e[l].disabled)return l;for(let l=t-1;l>=0;l--)if(!e[l].disabled)return l;return 0}const Y=(e,t,l)=>void 0!==t&&!!e.find((e=>e[l.value]===t));function q(e,t,l){const o=e.findIndex((e=>e[l.value]===t));return e[U(e,o)]}const[J,K]=e("picker-column"),Q=Symbol(J);var Z=n({name:J,props:{value:a,fields:i(Object),options:s(),readonly:Boolean,allowHtml:Boolean,optionHeight:i(Number),swipeDuration:i(a),visibleOptionNum:i(a)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:l}){let n,a,i,s,g;const b=u(),y=u(),x=u(0),k=u(0),O=c(),V=()=>e.options.length,w=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,S=l=>{const o=U(e.options,l),a=-o*e.optionHeight,i=()=>{const l=e.options[o][e.fields.value];l!==e.value&&t("change",l)};n&&a!==x.value?g=i:i(),x.value=a},T=()=>e.readonly||!e.options.length,H=t=>o(Math.round(-t/e.optionHeight),0,V()-1),C=r((()=>H(x.value))),N=()=>{n=!1,k.value=0,g&&(g(),g=null)},I=e=>{if(!T()){if(O.start(e),n){const e=function(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}(y.value);x.value=Math.min(0,e-w())}k.value=0,a=x.value,i=Date.now(),s=a,g=null}},B=()=>{if(T())return;const t=x.value-s,l=Date.now()-i;if(l<300&&Math.abs(t)>15)return void((t,l)=>{const o=Math.abs(t/l);t=x.value+o/.003*(t<0?-1:1);const n=H(t);k.value=+e.swipeDuration,S(n)})(t,l);const o=H(x.value);k.value=200,S(o),setTimeout((()=>{n=!1}),0)},D=()=>{const o={height:`${e.optionHeight}px`};return e.options.map(((a,i)=>{const s=a[e.fields.text],{disabled:u}=a,c=a[e.fields.value],r={role:"button",style:o,tabindex:u?-1:0,class:[K("item",{disabled:u,selected:c===e.value}),a.className],onClick:()=>(l=>{n||T()||(g=null,k.value=200,S(l),t("clickOption",e.options[l]))})(i)},d={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return f("li",r,[l.option?l.option(a,i):f("div",d,null)])}))};return d(Q),m({stopMomentum:N}),p((()=>{const t=e.options.findIndex((t=>t[e.fields.value]===e.value)),l=-U(e.options,t)*e.optionHeight;x.value=l})),v("touchmove",(l=>{if(T())return;O.move(l),O.isVertical()&&(n=!0,h(l,!0));const u=o(a+O.deltaY.value,-V()*e.optionHeight,e.optionHeight),c=H(u);c!==C.value&&t("scrollInto",e.options[c]),x.value=u;const r=Date.now();r-i>300&&(i=r,s=u)}),{target:b}),()=>f("div",{ref:b,class:K(),onTouchstartPassive:I,onTouchend:B,onTouchcancel:B},[f("ul",{ref:y,style:{transform:`translate3d(0, ${x.value+w()}px, 0)`,transitionDuration:`${k.value}ms`,transitionProperty:k.value?"all":"none"},class:K("wrapper"),onTransitionend:N},[D()])])}});const[G]=e("picker-toolbar"),W={title:String,cancelButtonText:String,confirmButtonText:String},X=["cancel","confirm","title","toolbar"],ee=Object.keys(W);var te=n({name:G,props:W,emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const o=()=>t("cancel"),n=()=>t("confirm"),a=()=>{const t=e.cancelButtonText||F("cancel");return f("button",{type:"button",class:[z("cancel"),g],onClick:o},[l.cancel?l.cancel():t])},i=()=>{const t=e.confirmButtonText||F("confirm");return f("button",{type:"button",class:[z("confirm"),g],onClick:n},[l.confirm?l.confirm():t])};return()=>f("div",{class:z("toolbar")},[l.toolbar?l.toolbar():[a(),l.title?l.title():e.title?f("div",{class:[z("title"),"van-ellipsis"]},[e.title]):void 0,i()]])}});const[le,oe]=e("picker-group"),ne=Symbol(le);l({tabs:s(),activeTab:b(0),nextStepText:String},W);const ae=l({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:b(44),showToolbar:y,swipeDuration:b(1e3),visibleOptionNum:b(6)},W);var ie=n({name:_,props:l({},ae,{columns:s(),modelValue:s(),toolbarPosition:x("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const a=u(),i=u(e.modelValue.slice(0)),{parent:s}=d(ne),{children:c,linkChildren:p}=k(Q);p();const g=r((()=>function(e){return l({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),b=r((()=>O(e.optionHeight))),y=r((()=>function(e,t){const l=e[0];if(l){if(Array.isArray(l))return"multiple";if(t.children in l)return"cascade"}return"default"}(e.columns,g.value))),x=r((()=>{const{columns:l}=e;switch(y.value){case"multiple":return l;case"cascade":return function(e,l,o){const n=[];let a={[l.children]:e},i=0;for(;a&&a[l.children];){const e=a[l.children],s=o.value[i];a=t(s)?q(e,s,l):void 0,!a&&e.length&&(a=q(e,R(e)[l.value],l)),i++,n.push(e)}return n}(l,g.value,i);default:return[l]}})),I=r((()=>x.value.some((e=>e.length)))),B=r((()=>x.value.map(((e,t)=>q(e,i.value[t],g.value))))),D=r((()=>x.value.map(((e,t)=>e.findIndex((e=>e[g.value.value]===i.value[t])))))),M=(e,t)=>{if(i.value[e]!==t){const l=i.value.slice(0);l[e]=t,i.value=l}},j=()=>({selectedValues:i.value.slice(0),selectedOptions:B.value,selectedIndexes:D.value}),$=()=>{c.forEach((e=>e.stopMomentum()));const e=j();return T((()=>{o("confirm",e)})),e},P=()=>o("cancel",j()),E=()=>x.value.map(((t,a)=>f(Z,{value:i.value[a],fields:g.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:b.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,t)=>{M(t,e),"cascade"===y.value&&i.value.forEach(((e,t)=>{const l=x.value[t];Y(l,e,g.value)||M(t,l.length?l[0][g.value.value]:void 0)})),T((()=>{o("change",l({columnIndex:t},j()))}))})(e,a),onClickOption:e=>((e,t)=>{const n={columnIndex:t,currentOption:e};o("clickOption",l(j(),n)),o("scrollInto",n)})(e,a),onScrollInto:e=>{o("scrollInto",{currentOption:e,columnIndex:a})}},{option:n.option}))),A=e=>{if(I.value){const t={height:`${b.value}px`},l={backgroundSize:`100% ${(e-b.value)/2}px`};return[f("div",{class:z("mask"),style:l},null),f("div",{class:[N,z("frame")],style:t},null)]}},L=()=>{const t=b.value*+e.visibleOptionNum,l={height:`${t}px`};return f("div",{ref:a,class:z("columns"),style:l},[E(),A(t)])},_=()=>{if(e.showToolbar&&!s)return f(te,C(H(e,ee),{onConfirm:$,onCancel:P}),H(n,X))};let F;V(x,(e=>{e.forEach(((e,t)=>{e.length&&!Y(e,i.value[t],g.value)&&M(t,R(e)[g.value.value])}))}),{immediate:!0}),V((()=>e.modelValue),(e=>{w(e,i.value)||w(e,F)||(i.value=e.slice(0),F=e.slice(0))}),{deep:!0}),V(i,(t=>{w(t,e.modelValue)||(F=t.slice(0),o("update:modelValue",F))}),{immediate:!0}),v("touchmove",h,{target:a});return m({confirm:$,getSelectedOptions:()=>B.value}),()=>{var t,l;return f("div",{class:z()},["top"===e.toolbarPosition?_():null,e.loading?f(S,{class:z("loading")},null):null,null==(t=n["columns-top"])?void 0:t.call(n),L(),null==(l=n["columns-bottom"])?void 0:l.call(n),"bottom"===e.toolbarPosition?_():null])}}});const se="000000",ue=["title","cancel","confirm","toolbar","columns-top","columns-bottom"],ce=["title","loading","readonly","optionHeight","swipeDuration","visibleOptionNum","cancelButtonText","confirmButtonText"],re=(e="",t=se,l=void 0)=>({text:e,value:t,children:l});function de({areaList:e,columnsNum:t,columnsPlaceholder:l}){const{city_list:o={},county_list:n={},province_list:a={}}=e,i=+t>1,s=+t>2,u=new Map;Object.keys(a).forEach((e=>{u.set(e.slice(0,2),re(a[e],e,(()=>{if(i)return l.length?[re(l[0],se,s?[]:void 0)]:[]})()))}));const c=new Map;if(i){const e=()=>{if(s)return l.length?[re(l[1])]:[]};Object.keys(o).forEach((t=>{const l=re(o[t],t,e());c.set(t.slice(0,4),l);const n=u.get(t.slice(0,2));n&&n.children.push(l)}))}s&&Object.keys(n).forEach((e=>{const t=c.get(e.slice(0,4));t&&t.children.push(re(n[e],e))}));const r=Array.from(u.values());if(l.length){const e=s?[re(l[2])]:void 0,t=i?[re(l[1],se,e)]:void 0;r.unshift(re(l[0],se,t))}return r}const me=I(ie),[pe,ve]=e("area");const fe=I(n({name:pe,props:l({},H(ae,ce),{modelValue:String,columnsNum:b(3),columnsPlaceholder:s(),areaList:{type:Object,default:()=>({})}}),emits:["change","confirm","cancel","update:modelValue"],setup(e,{emit:t,slots:l}){const o=u([]),n=u(),a=r((()=>de(e))),i=(...e)=>t("change",...e),s=(...e)=>t("cancel",...e),c=(...e)=>t("confirm",...e);return V(o,(l=>{const o=l.length?l[l.length-1]:"";o&&o!==e.modelValue&&t("update:modelValue",o)}),{deep:!0}),V((()=>e.modelValue),(t=>{if(t){t!==(o.value.length?o.value[o.value.length-1]:"")&&(o.value=[`${t.slice(0,2)}0000`,`${t.slice(0,4)}00`,t].slice(0,+e.columnsNum))}else o.value=[]}),{immediate:!0}),m({confirm:()=>{var e;return null==(e=n.value)?void 0:e.confirm()},getSelectedOptions:()=>{var e;return(null==(e=n.value)?void 0:e.getSelectedOptions())||[]}}),()=>f(me,C({ref:n,modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:ve(),columns:a.value,onChange:i,onCancel:s,onConfirm:c},H(e,ce)),H(l,ue))}})),[he,ge]=e("radio-group"),be={disabled:Boolean,iconSize:a,direction:String,modelValue:D,checkedColor:String},ye=Symbol(he);const xe=I(n({name:he,props:be,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{linkChildren:o}=k(ye);return V((()=>e.modelValue),(e=>t("change",e))),o({props:e,updateValue:e=>t("update:modelValue",e)}),B((()=>e.modelValue)),()=>{var t;return f("div",{class:ge([e.direction]),role:"radiogroup"},[null==(t=l.default)?void 0:t.call(l)])}}})),[ke,Oe]=e("radio");const Ve=I(n({name:ke,props:M,emits:["update:modelValue"],setup(e,{emit:t,slots:l}){const{parent:o}=d(ye),n=()=>{o?o.updateValue(e.name):t("update:modelValue",e.name)};return()=>f(j,C({bem:Oe,role:"radio",parent:o,checked:(o?o.props.modelValue:e.modelValue)===e.name,onToggle:n},e),H(l,["default","icon"]))}}));let we,Se;let Te={type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0};const He=()=>{Se&&Se.toggle(!1)};function Ce(e){var t;if($)return Se||({instance:Se}=E({setup(){const{state:e,toggle:t}=A();return()=>f(L,C(e,{"onUpdate:show":t}),null)}})),e=l({},Te,P(t=e)?t:{message:t}),Se.open(e),clearTimeout(we),e.duration>0&&(we=setTimeout(He,e.duration)),Se}export{fe as A,Ve as R,xe as a,Ce as s};
