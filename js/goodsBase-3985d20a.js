import{$ as s,a}from"./index-98da8735.js";import{N as o}from"./index-7ce44d1c.js";import{d as e,u as l,a as t,r as i,e as n,f as r,g as d,h as c,F as g,G as p,k as u,i as f,t as m,x as h,y as v,_ as I}from"../default/default-728f3c5e.js";import{e as x}from"./imgErr-97c99c2b.js";import{a as y}from"./js.cookie-d59fc71c.js";import{i as j}from"./isLogin-03e1f710.js";const w=s=>(h("data-v-917f26d3"),s=s(),v(),s),b={class:"goodslist-pages"},k={class:"box"},_={class:"show-head"},C={class:"news"},E=w((()=>d("h3",{class:"pages-title"},"预估线上贷款",-1))),F=w((()=>d("h3",{class:"pages-title"},[f("额度最高"),d("span",{class:"white"},"100000元")],-1))),A={class:"goods-list"},L=w((()=>d("h4",{class:"goods-list-title"},"为您推荐我们的精选平台",-1))),T={class:"goods-header"},q={class:"logo-box"},B=["src"],D={class:"goods-info"},G={class:"goods-info-list"},M=w((()=>d("span",{class:"name"},"公司主体",-1))),N={class:"right"},O={class:"goods-info-list"},U=w((()=>d("span",{class:"name"},"产品介绍",-1))),$={class:"right"},z={class:"goods-footer"},H=["onClick"],J=w((()=>d("footer",{class:"pages-footer"},[d("p",null,"投资有风险，借贷需谨慎。"),d("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),K=I(e({__name:"goodsBase",setup(e){const{isLoginFn:h}=j();h();const{errImgFn:v}=x(),I=l(),w=t(),K=i({}),P=i(!0),Q=i([]);let R="";return(async()=>{R=y.get("userId");let a={appType:3,type:7,userId:R},o=await s("/api/user/match/getAllMatching",a);P.value=!1,1==o.status&&(K.value=o.data)})(),(e,l)=>{const t=o;return n(),r("article",b,[d("div",k,[d("header",_,[d("div",C,[c(t,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),E,F])]),d("div",A,[L,(n(!0),r(g,null,p(u(K),((o,e)=>(n(),r("div",{class:"goods-box",key:o.ID},[d("header",T,[d("div",q,[d("img",{class:"logo",src:o.logo,onError:l[0]||(l[0]=(...s)=>u(v)&&u(v)(...s)),alt:""},null,40,B)]),f(" "+m(o.name),1)]),d("div",D,[d("div",G,[M,d("span",N,m(o.platformInfo),1)]),d("div",O,[U,d("span",$,m(o.description),1)])]),d("footer",z,[d("button",{class:"goods-btn",onClick:o=>(async o=>{let e={platformId:K.value[o].id,conditionId:K.value[o].conditionId,flag:4,userId:R,channel:w.query.channel},l=await s("/api/user/platform/insertUserApplication",e);console.log(l),1===l.status?window.location.href=l.data:(-1===Q.value.indexOf(o)&&Q.value.push(o),Q.value.length===K.value.length?(a({type:"error",msg:"申请失败，为您推荐其他产品"}),setTimeout((()=>{I.push({path:"/goods"})}),3e3)):a({type:"error",msg:"申请失败请选择其他产品"}))})(e)},"立即申请",8,H)])])))),128))])]),J])}}}),[["__scopeId","data-v-917f26d3"]]);export{K as default};
