import{_ as a,d as s,h as e,i as l,k as t,r as o,c as n,a as c,n as i,f as d,t as r,m as p,q as u,E as m,b as g,w as v,$ as f,o as b,p as k,g as h}from"../default/default-f0912ddd.js";import{$ as y}from"./upload-c1e8d1e9.js";const _=a=>(k("data-v-0017f9de"),a=a(),h(),a),w={class:"common-pages que-one"},C=_((()=>c("div",{class:"common-logo"},null,-1))),x=_((()=>c("h3",{class:"page-title"},[c("img",{class:"img",src:"./assets/img-08-23c24dda.png",alt:""})],-1))),F={class:"img-box"},j=["src"],q={class:"reply-box"},z={class:"pic common-btn"},D={class:"pic common-btn"},E={class:"cloud"},L={class:"layer layer-eggs"},R={class:"info"},$={class:"layer layer-submit"},A=_((()=>c("p",null,"确认上传这张最靓的你吗？",-1))),I=_((()=>c("p",null,"照片只有一次上传机会哦～",-1)));var U=a(s({__name:"take",setup(a){const s=e(),{isLoginFn:k}=l();k();const h=t(!1),_=t(!0),U=new FormData,B=t(8),G=t(""),H=a=>{const s=a.target.files[0],e=new FileReader;e.onload=function(a){G.value=a.target.result},e.readAsDataURL(s),U.set("file",s),_.value=!1};let J=t(!1);const K=()=>{U.get("file")&&(J.value=!0)},M=()=>{J.value=!1},N=async()=>{let a=await y("/api.php/puzzle/group-photo",U);0==a.code?a.data.rank&&""!=a.data.rank?(h.value=!0,J.value=!1,B.value=a.data.rank):s.push({path:"/photo/end"}):f({type:"error",msg:a.message})};return(a,s)=>{const e=o("router-link");return b(),n("div",w,[C,x,c("div",F,[c("img",{src:i(G),class:"img",alt:""},null,8,j)]),c("div",q,[c("div",{class:"common-btn",onClick:K,btn:""},"立即上传"),c("label",z,[c("input",{type:"file",onChange:H,accept:"image/*;"},null,32),d("从照片库中选择 ")]),c("label",D,[c("input",{type:"file",onChange:H,accept:"image/*",capture:"camera"},null,32),d(r(i(_)?"立即拍摄":"重新拍摄"),1)])]),p(c("div",E,null,512),[[u,i(h)||i(J)]]),p(c("div",L,[c("p",R,"恭喜您！成为第"+r(i(B))+"位提交的员工，好手气带来好福气，送上隐藏欢乐奖，龙年万事大吉！",1),m(' <p class="info">恭喜您是第41（82、123、164）位提交的员工，与走过41年的泛捷有着不解之缘，特此送上隐藏奖励</p> '),g(e,{to:"/photo/eggs",class:"common-btn"},{default:v((()=>[d("查看奖励")])),_:1}),c("div",{class:"close-btn iconfont icon-close22",onClick:s[0]||(s[0]=a=>{h.value=!1})})],512),[[u,i(h)]]),p(c("div",$,[A,I,c("div",{class:"btn-box"},[c("div",{class:"close-btn",onClick:M},"返回重拍"),c("div",{class:"up-btn",onClick:N},"确认上传")])],512),[[u,i(J)]])])}}}),[["__scopeId","data-v-0017f9de"],["__file","E:/coding/work/newyear/src/views/photo/take.vue"]]);export{U as default};
