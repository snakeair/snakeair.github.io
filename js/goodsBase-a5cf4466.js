import{$ as s,a}from"./axios-32f46f82.js";import{N as o}from"./index-62099057.js";import{f as e,h as l,j as t,r as i,o as n,a as r,d as c,c as d,H as p,I as g,u,l as f,x as m,p as h,b as v,_ as I}from"../default/default-37e8d024.js";import{e as x}from"./imgErr-daf816e2.js";import{a as j}from"./js.cookie-8253c38e.js";import{i as y}from"./isLogin-19a155b3.js";const b=s=>(h("data-v-917f26d3"),s=s(),v(),s),w={class:"goodslist-pages"},k={class:"box"},_={class:"show-head"},A={class:"news"},C=b((()=>c("h3",{class:"pages-title"},"预估线上贷款",-1))),E=b((()=>c("h3",{class:"pages-title"},[f("额度最高"),c("span",{class:"white"},"100000元")],-1))),F={class:"goods-list"},L=b((()=>c("h4",{class:"goods-list-title"},"为您推荐我们的精选平台",-1))),T={class:"goods-header"},q={class:"logo-box"},B=["src"],D={class:"goods-info"},H={class:"goods-info-list"},M=b((()=>c("span",{class:"name"},"公司主体",-1))),N={class:"right"},O={class:"goods-info-list"},U=b((()=>c("span",{class:"name"},"产品介绍",-1))),$={class:"right"},z={class:"goods-footer"},G=["onClick"],J=b((()=>c("footer",{class:"pages-footer"},[c("p",null,"投资有风险，借贷需谨慎。"),c("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),K=I(e({__name:"goodsBase",setup(e){const{isLoginFn:h}=y();h();const{errImgFn:v}=x(),I=l(),b=t(),K=i({}),P=i(!0),Q=i([]);let R="";return(async()=>{R=j.get("userId");let a={appType:3,type:7,userId:R},o=await s("/api/user/match/getAllMatching",a);P.value=!1,1==o.status&&(K.value=o.data)})(),(e,l)=>{const t=o;return n(),r("article",w,[c("div",k,[c("header",_,[c("div",A,[d(t,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),C,E])]),c("div",F,[L,(n(!0),r(p,null,g(u(K),((o,e)=>(n(),r("div",{class:"goods-box",key:o.ID},[c("header",T,[c("div",q,[c("img",{class:"logo",src:o.logo,onError:l[0]||(l[0]=(...s)=>u(v)&&u(v)(...s)),alt:""},null,40,B)]),f(" "+m(o.name),1)]),c("div",D,[c("div",H,[M,c("span",N,m(o.platformInfo),1)]),c("div",O,[U,c("span",$,m(o.description),1)])]),c("footer",z,[c("button",{class:"goods-btn",onClick:o=>(async o=>{let e={platformId:K.value[o].id,conditionId:K.value[o].conditionId,flag:4,userId:R,channel:b.query.channel},l=await s("/api/user/platform/insertUserApplication",e);console.log(l),1===l.status?window.location.href=l.data:(-1===Q.value.indexOf(o)&&Q.value.push(o),Q.value.length===K.value.length?(a({type:"error",msg:"申请失败，为您推荐其他产品"}),setTimeout((()=>{I.push({path:"/goods"})}),3e3)):a({type:"error",msg:"申请失败请选择其他产品"}))})(e)},"立即申请",8,G)])])))),128))])]),J])}}}),[["__scopeId","data-v-917f26d3"]]);export{K as default};
