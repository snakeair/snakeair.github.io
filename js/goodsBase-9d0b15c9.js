import{d as s,a,u as o,r as e,e as l,f as t,g as n,h as i,F as r,y as d,j as c,n as g,$ as p,s as u,x as f,A as m,B as h,p as v,_ as I}from"../default/default-dc4c2df8.js";import{N as y}from"./index-7c57129d.js";import{e as x}from"./imgErr-923b5654.js";import{i as w}from"./isLogin-16cbd27a.js";const b=s=>(m("data-v-917f26d3"),s=s(),h(),s),j={class:"goodslist-pages"},_={class:"box"},k={class:"show-head"},A={class:"news"},F=b((()=>n("h3",{class:"pages-title"},"预估线上贷款",-1))),q=b((()=>n("h3",{class:"pages-title"},[u("额度最高"),n("span",{class:"white"},"100000元")],-1))),B={class:"goods-list"},C=b((()=>n("h4",{class:"goods-list-title"},"为您推荐我们的精选平台",-1))),E={class:"goods-header"},L={class:"logo-box"},T=["src"],D={class:"goods-info"},M={class:"goods-info-list"},N=b((()=>n("span",{class:"name"},"公司主体",-1))),O={class:"right"},U={class:"goods-info-list"},$=b((()=>n("span",{class:"name"},"产品介绍",-1))),z={class:"right"},G={class:"goods-footer"},H=["onClick"],J=b((()=>n("footer",{class:"pages-footer"},[n("p",null,"投资有风险，借贷需谨慎。"),n("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),K=I(s({__name:"goodsBase",setup(s){const{isLoginFn:m}=w();m();const{errImgFn:h}=x(),I=a(),b=o(),K=e({}),P=e(!0),Q=e([]);let R="";return(async()=>{R=g.get("userId");let s={appType:3,type:7,userId:R},a=await p("/api/user/match/getAllMatching",s);P.value=!1,1==a.status&&(K.value=a.data)})(),(s,a)=>{const o=y;return l(),t("article",j,[n("div",_,[n("header",k,[n("div",A,[i(o,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),F,q])]),n("div",B,[C,(l(!0),t(r,null,d(c(K),((s,o)=>(l(),t("div",{class:"goods-box",key:s.ID},[n("header",E,[n("div",L,[n("img",{class:"logo",src:s.logo,onError:a[0]||(a[0]=(...s)=>c(h)&&c(h)(...s)),alt:""},null,40,T)]),u(" "+f(s.name),1)]),n("div",D,[n("div",M,[N,n("span",O,f(s.platformInfo),1)]),n("div",U,[$,n("span",z,f(s.description),1)])]),n("footer",G,[n("button",{class:"goods-btn",onClick:s=>(async s=>{let a={platformId:K.value[s].id,conditionId:K.value[s].conditionId,flag:4,userId:R,channel:b.query.channel},o=await p("/api/user/platform/insertUserApplication",a);console.log(o),1===o.status?window.location.href=o.data:(-1===Q.value.indexOf(s)&&Q.value.push(s),Q.value.length===K.value.length?(v({type:"error",msg:"申请失败，为您推荐其他产品"}),setTimeout((()=>{I.push({path:"/goods"})}),3e3)):v({type:"error",msg:"申请失败请选择其他产品"}))})(o)},"立即申请",8,H)])])))),128))])]),J])}}}),[["__scopeId","data-v-917f26d3"]]);export{K as default};