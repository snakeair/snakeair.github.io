import{d as s,a,u as o,r as e,e as l,f as t,g as i,h as n,F as r,y as d,j as c,n as g,$ as p,s as u,x as f,A as m,B as h,p as v,_ as I}from"../default/default-f6fed1ff.js";import{N as y}from"./index-751d2099.js";import{e as x}from"./imgErr-07c13f18.js";import{i as w}from"./isLogin-86fd6d9b.js";const b=s=>(m("data-v-917f26d3"),s=s(),h(),s),j={class:"goodslist-pages"},_={class:"box"},k={class:"show-head"},A={class:"news"},F=b((()=>i("h3",{class:"pages-title"},"预估线上贷款",-1))),q=b((()=>i("h3",{class:"pages-title"},[u("额度最高"),i("span",{class:"white"},"100000元")],-1))),B={class:"goods-list"},C=b((()=>i("h4",{class:"goods-list-title"},"为您推荐我们的精选平台",-1))),E={class:"goods-header"},L={class:"logo-box"},T=["src"],D={class:"goods-info"},M={class:"goods-info-list"},N=b((()=>i("span",{class:"name"},"公司主体",-1))),O={class:"right"},U={class:"goods-info-list"},$=b((()=>i("span",{class:"name"},"产品介绍",-1))),z={class:"right"},G={class:"goods-footer"},H=["onClick"],J=b((()=>i("footer",{class:"pages-footer"},[i("p",null,"投资有风险，借贷需谨慎。"),i("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),K=I(s({__name:"goodsBase",setup(s){const{isLoginFn:m}=w();m();const{errImgFn:h}=x(),I=a(),b=o(),K=e({}),P=e(!0),Q=e([]);let R="";return(async()=>{R=g.get("userId");let s={appType:3,type:7,userId:R},a=await p("/api/user/match/getAllMatching",s);P.value=!1,1==a.status&&(K.value=a.data)})(),(s,a)=>{const o=y;return l(),t("article",j,[i("div",_,[i("header",k,[i("div",A,[n(o,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),F,q])]),i("div",B,[C,(l(!0),t(r,null,d(c(K),((s,o)=>(l(),t("div",{class:"goods-box",key:s.ID},[i("header",E,[i("div",L,[i("img",{class:"logo",src:s.logo,onError:a[0]||(a[0]=(...s)=>c(h)&&c(h)(...s)),alt:""},null,40,T)]),u(" "+f(s.name),1)]),i("div",D,[i("div",M,[N,i("span",O,f(s.platformInfo),1)]),i("div",U,[$,i("span",z,f(s.description),1)])]),i("footer",G,[i("button",{class:"goods-btn",onClick:s=>(async s=>{let a={platformId:K.value[s].id,conditionId:K.value[s].conditionId,flag:4,userId:R,channel:b.query.channel},o=await p("/api/user/platform/insertUserApplication",a);1===o.status?window.location.href=o.data:(-1===Q.value.indexOf(s)&&Q.value.push(s),Q.value.length===K.value.length?(v({type:"error",msg:"申请失败，为您推荐其他产品"}),setTimeout((()=>{I.push({path:"/goods"})}),3e3)):v({type:"error",msg:"申请失败请选择其他产品"}))})(o)},"立即申请",8,H)])])))),128))])]),J])}}}),[["__scopeId","data-v-917f26d3"]]);export{K as default};
