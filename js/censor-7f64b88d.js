import{_ as s,d as a,i as t,k as l,j as e,r as n,X as o,m as c,n as i,c as p,a as r,H as u,q as d,E as m,b as v,w as g,Y as y,G as h,o as f,f as k,p as b,g as _}from"../default/default-f0912ddd.js";const w=s=>(b("data-v-0600bc3e"),s=s(),_(),s),x={key:0,class:"common-pages que-one"},z=w((()=>r("div",{class:"common-logo"},null,-1))),j=w((()=>r("h3",{class:"page-title"},[r("img",{class:"img",src:"./assets/img-09-61f6dce5.png",alt:""})],-1))),q={key:1,class:"wait-text"},E=[w((()=>r("p",{class:"big"},"审核中…",-1))),w((()=>r("p",null,"(您的照片正在审核中",-1))),w((()=>r("p",null,"请稍后回来查看结果)",-1)))],C=["src"],F={class:"reply-box"};var G=s(a({__name:"censor",setup(s){const{isLoginFn:a}=t();a();const b=l(!0),_=e(),w=()=>{"thanks"==_.prize.prize_name?y.push({path:"/lottery/thanks"}):y.push({path:"/lottery/end"})},G=l(0),H=l(null);return(async()=>{let s=await h("/api.php/puzzle/my-photo");H.value=s.data,G.value=s.data.status,2==G.value&&y.push({path:"/lottery/sorry"}),b.value=!1})(),(s,a)=>{const t=n("router-link"),l=o("load");return c((f(),p("div",null,[i(b)?m("v-if",!0):(f(),p("div",x,[z,j,r("div",{class:u(["img-box",{wait:0==i(G)}])},[0!=i(G)?(f(),p("div",{key:0,class:u(["type",{ok:1==i(G),error:2==i(G)}])},[c(r("span",null,"审核成功",512),[[d,1==i(G)]]),c(r("span",null,"审核失败",512),[[d,2==i(G)]])],2)):(f(),p("div",q,[...E])),0!=i(G)?(f(),p("img",{key:2,src:i(H).picture,class:"img",alt:""},null,8,C)):m("v-if",!0)],2),r("div",F,[r("div",{onClick:w,class:"pic common-btn"},"查看我的抽奖结果"),v(t,{to:"/",class:"up-btn common-btn",btn:""},{default:g((()=>[k("返回首页")])),_:1})])]))])),[[l,i(b)]])}}}),[["__scopeId","data-v-0600bc3e"],["__file","E:/coding/work/newyear/src/views/photo/censor.vue"]]);export{G as default};