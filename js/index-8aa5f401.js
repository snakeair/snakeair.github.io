import{J as e,a9 as a,d as o,r as s,b as t,ax as l,ay as r,a7 as n,L as i,ac as c,i as d,v as f,h as u,av as p,az as b,aA as m,aB as g,Y as w,R as v}from"../default/default-59b2d1c4.js";const[h,y]=e("notice-bar");const x=v(o({name:h,props:{text:String,mode:String,color:String,delay:a(1),speed:a(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}},emits:["close","replay"],setup(e,{emit:a,slots:o}){let v,h=0,x=0;const k=s(),S=s(),B=t({show:!0,offset:0,duration:0}),I=o=>{"closeable"===e.mode&&(B.show=!1,a("close",o))},T=()=>{if(o["right-icon"])return o["right-icon"]();const a="closeable"===e.mode?"cross":"link"===e.mode?"arrow":void 0;return a?u(p,{name:a,class:y("right-icon"),onClick:I},null):void 0},$=()=>{B.offset=h,B.duration=0,g((()=>{m((()=>{B.offset=-x,B.duration=(x+h)/+e.speed,a("replay")}))}))},j=()=>{const a=!1===e.scrollable&&!e.wrapable,s={transform:B.offset?`translateX(${B.offset}px)`:"",transitionDuration:`${B.duration}s`};return u("div",{ref:k,role:"marquee",class:y("wrap")},[u("div",{ref:S,style:s,class:[y("content"),{"van-ellipsis":a}],onTransitionend:$},[o.default?o.default():e.text])])},q=()=>{const{delay:a,speed:o,scrollable:s}=e,t=w(a)?1e3*+a:0;h=0,x=0,B.offset=0,B.duration=0,clearTimeout(v),v=setTimeout((()=>{if(!k.value||!S.value||!1===s)return;const e=b(k).width,a=b(S).width;(s||a>e)&&m((()=>{h=e,x=a,B.offset=-x,B.duration=x/+o}))}),t)};return l(q),r(q),n("pageshow",q),i({reset:q}),c((()=>[e.text,e.scrollable]),q),()=>{const{color:a,wrapable:s,background:t}=e;return d(u("div",{role:"alert",class:y({wrapable:s}),style:{color:a,background:t}},[o["left-icon"]?o["left-icon"]():e.leftIcon?u(p,{class:y("left-icon"),name:e.leftIcon},null):void 0,j(),T()]),[[f,B.show]])}}}));export{x as N};
