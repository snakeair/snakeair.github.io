import{N as e,ab as a,d as o,r as s,B as t,aL as l,aM as r,a9 as n,Q as i,w as c,l as d,y as f,c as u,aJ as p,aN as b,aO as m,aP as w,a1 as g,V as h}from"../default/default-f4e8d8aa.js";const[v,y]=e("notice-bar");const k=h(o({name:v,props:{text:String,mode:String,color:String,delay:a(1),speed:a(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}},emits:["close","replay"],setup(e,{emit:a,slots:o}){let h,v=0,k=0;const x=s(),S=s(),B=t({show:!0,offset:0,duration:0}),I=o=>{"closeable"===e.mode&&(B.show=!1,a("close",o))},N=()=>{if(o["right-icon"])return o["right-icon"]();const a="closeable"===e.mode?"cross":"link"===e.mode?"arrow":void 0;return a?u(p,{name:a,class:y("right-icon"),onClick:I},null):void 0},T=()=>{B.offset=v,B.duration=0,w((()=>{m((()=>{B.offset=-k,B.duration=(k+v)/+e.speed,a("replay")}))}))},$=()=>{const a=!1===e.scrollable&&!e.wrapable,s={transform:B.offset?`translateX(${B.offset}px)`:"",transitionDuration:`${B.duration}s`};return u("div",{ref:x,role:"marquee",class:y("wrap")},[u("div",{ref:S,style:s,class:[y("content"),{"van-ellipsis":a}],onTransitionend:T},[o.default?o.default():e.text])])},j=()=>{const{delay:a,speed:o,scrollable:s}=e,t=g(a)?1e3*+a:0;v=0,k=0,B.offset=0,B.duration=0,clearTimeout(h),h=setTimeout((()=>{if(!x.value||!S.value||!1===s)return;const e=b(x).width,a=b(S).width;(s||a>e)&&m((()=>{v=e,k=a,B.offset=-k,B.duration=k/+o}))}),t)};return l(j),r(j),n("pageshow",j),i({reset:j}),c((()=>[e.text,e.scrollable]),j),()=>{const{color:a,wrapable:s,background:t}=e;return d(u("div",{role:"alert",class:y({wrapable:s}),style:{color:a,background:t}},[o["left-icon"]?o["left-icon"]():e.leftIcon?u(p,{class:y("left-icon"),name:e.leftIcon},null):void 0,$(),N()]),[[f,B.show]])}}}));export{k as N};