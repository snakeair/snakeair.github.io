import{J as e,a7 as a,d as o,r as s,y as t,aM as l,aN as r,a5 as n,L as i,w as c,i as d,m as f,g as u,aK as p,aO as m,aP as b,aQ as g,X as w,R as h}from"../default/default-2a422f75.js";const[v,y]=e("notice-bar");const k=h(o({name:v,props:{text:String,mode:String,color:String,delay:a(1),speed:a(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}},emits:["close","replay"],setup(e,{emit:a,slots:o}){let h,v=0,k=0;const x=s(),S=s(),I=t({show:!0,offset:0,duration:0}),T=o=>{"closeable"===e.mode&&(I.show=!1,a("close",o))},B=()=>{if(o["right-icon"])return o["right-icon"]();const a="closeable"===e.mode?"cross":"link"===e.mode?"arrow":void 0;return a?u(p,{name:a,class:y("right-icon"),onClick:T},null):void 0},N=()=>{I.offset=v,I.duration=0,g((()=>{b((()=>{I.offset=-k,I.duration=(k+v)/+e.speed,a("replay")}))}))},X=()=>{const a=!1===e.scrollable&&!e.wrapable,s={transform:I.offset?`translateX(${I.offset}px)`:"",transitionDuration:`${I.duration}s`};return u("div",{ref:x,role:"marquee",class:y("wrap")},[u("div",{ref:S,style:s,class:[y("content"),{"van-ellipsis":a}],onTransitionend:N},[o.default?o.default():e.text])])},$=()=>{const{delay:a,speed:o,scrollable:s}=e,t=w(a)?1e3*+a:0;v=0,k=0,I.offset=0,I.duration=0,clearTimeout(h),h=setTimeout((()=>{if(!x.value||!S.value||!1===s)return;const e=m(x).width,a=m(S).width;(s||a>e)&&b((()=>{v=e,k=a,I.offset=-k,I.duration=k/+o}))}),t)};return l($),r($),n("pageshow",$),i({reset:$}),c((()=>[e.text,e.scrollable]),$),()=>{const{color:a,wrapable:s,background:t}=e;return d(u("div",{role:"alert",class:y({wrapable:s}),style:{color:a,background:t}},[o["left-icon"]?o["left-icon"]():e.leftIcon?u(p,{class:y("left-icon"),name:e.leftIcon},null):void 0,X(),B()]),[[f,I.show]])}}}));export{k as N};