import{d as s,f as a,g as l,r as o,o as t,c as e,u as d,j as c,q as i,b as n,F as r,E as u,k as p,t as g,p as f,a as m,aH as h,ad as v,_ as y}from"../default/default-d68f298c.js";import{$ as j}from"./axios-e512ad6e.js";import{N as I}from"./index-416acb7f.js";/* empty css              */import{a as _}from"./js.cookie-d59fc71c.js";import{i as b}from"./isLogin-2ef23ea6.js";const x=s=>(f("data-v-8cd8c6ca"),s=s(),m(),s),k={class:"goodslist-pages"},w={key:0,class:"cloud"},q={class:"box"},E={class:"show-head"},A={class:"news"},L=x((()=>n("h3",{class:"pages-title"},"预估线上贷款",-1))),T=x((()=>n("h3",{class:"pages-title"},[p("额度最高"),n("span",{class:"white"},"100000元")],-1))),C={class:"goods-list"},D=x((()=>n("h4",{class:"goods-list-title"},"为您推荐以下线上快速下款产品",-1))),F={class:"goods-header"},P={class:"logo-box"},S=["src"],H={class:"goods-info"},M={class:"info"},N=x((()=>n("dd",{class:"gay"},"贷款金额",-1))),O={class:"info"},R=x((()=>n("dd",{class:"gay"},"利率",-1))),U=["onClick"],V={class:"gay"},$=x((()=>n("footer",{class:"pages-footer"},[n("p",null,"投资有风险，借贷需谨慎。"),n("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),z=y(s({__name:"goods",setup(s){const{isLoginFn:f}=b();f();const m=a(),y=l(),x=o(!0);let z="";const B=o([]),G=async s=>{let a=await h((()=>import("./img-13-68b6256e.js")),[],import.meta.url);console.log(a.default),s.target.setAttribute("src",a.default)};return(async()=>{z=_.get("userId");let s={appType:3,type:3,userId:z,channel:y.query.channel},a=await j("/api/user/platform/getAllPlatforms",s);x.value=!1,1==a.status&&(B.value=a.data)})(),(s,a)=>{const l=v,o=I;return t(),e("article",k,[d(x)?(t(),e("div",w,[c(l,{color:"#fc719b"})])):i("",!0),n("div",q,[n("header",E,[n("div",A,[c(o,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),L,T])]),n("div",C,[D,(t(!0),e(r,null,u(d(B),((s,a)=>(t(),e("div",{class:"goods-box",key:s.ID},[n("header",F,[n("div",P,[n("img",{class:"logo",src:s.logo,onError:G,alt:""},null,40,S)]),p(" "+g(s.name),1)]),n("div",H,[n("dl",null,[n("dt",M,g(s.quotaMax)+"元",1),N]),n("dl",null,[n("dt",O,g(s.rateLow)+"%",1),R]),n("dl",null,[n("dt",null,[n("button",{class:"goods-btn",onClick:s=>(async s=>{if(1==B.value[s].jumpStatus){let a="/api/user/platform/insertUserApplication",l={platformId:B.value[s].id,conditionId:B.value[s].conditionId,flag:4,type:1,userId:_.get("userId"),channel:y.query.channel};j(a,l),setTimeout((()=>{window.location.href=B.value[s].url}),500)}else m.push({path:"/pact",query:{ids:B.value[s].id}})})(a)},"立即申请",8,U)]),n("dd",V,g(s.monthStart)+"~"+g(s.monthEnd)+"个月",1)])])])))),128))])]),$])}}}),[["__scopeId","data-v-8cd8c6ca"]]);export{z as default};
