import{d as s,a,u as l,r as o,e as t,f as e,j as d,h as c,l as n,g as i,F as r,y as u,n as g,$ as p,ae as f,s as m,x as h,A as v,B as y,ar as _,_ as b}from"../default/default-0acc75c5.js";import{N as x}from"./index-df201d78.js";import{i as w}from"./isLogin-acb36c9b.js";const j=s=>(v("data-v-dc775f6e"),s=s(),y(),s),k={class:"goodslist-pages"},I={key:0,class:"cloud"},A={class:"box"},E={class:"show-head"},L={class:"news"},q=j((()=>i("h3",{class:"pages-title"},"预估线上贷款",-1))),C=j((()=>i("h3",{class:"pages-title"},[m("额度最高"),i("span",{class:"white"},"100000元")],-1))),D={class:"goods-list"},F=j((()=>i("h4",{class:"goods-list-title"},"为您推荐以下线上快速下款产品",-1))),P={class:"goods-header"},T={class:"logo-box"},B=["src"],M={class:"goods-info"},N={class:"info"},O=j((()=>i("dd",{class:"gay"},"贷款金额",-1))),R={class:"info"},S=j((()=>i("dd",{class:"gay"},"利率",-1))),V=["onClick"],$={class:"gay"},z=j((()=>i("footer",{class:"pages-footer"},[i("p",null,"投资有风险，借贷需谨慎。"),i("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),G=b(s({__name:"goods",setup(s){const{isLoginFn:v}=w();v();const y=a();l();const b=o(!0);let j="";const G=o([]),H=async s=>{let a=await _((()=>import("./img-13-68b6256e.js")),[],import.meta.url);console.log(a.default),s.target.setAttribute("src",a.default)};return(async()=>{j=g.get("userId"),console.log(j);let s={appType:3,type:3,userId:j},a=await p("/api/user/platform/getAllPlatforms",s);b.value=!1,1==a.status&&(G.value=a.data)})(),(s,a)=>{const l=f,o=x;return t(),e("article",k,[d(b)?(t(),e("div",I,[c(l,{color:"#fc719b"})])):n("",!0),i("div",A,[i("header",E,[i("div",L,[c(o,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),q,C])]),i("div",D,[F,(t(!0),e(r,null,u(d(G),((s,a)=>(t(),e("div",{class:"goods-box",key:s.ID},[i("header",P,[i("div",T,[i("img",{class:"logo",src:s.logo,onError:H,alt:""},null,40,B)]),m(" "+h(s.name),1)]),i("div",M,[i("dl",null,[i("dt",N,h(s.quotaMax)+"元",1),O]),i("dl",null,[i("dt",R,h(s.rateLow)+"%",1),S]),i("dl",null,[i("dt",null,[i("button",{class:"goods-btn",onClick:s=>(async s=>{y.push({path:"/pact",query:{ids:G.value[s].id}})})(a)},"立即申请",8,V)]),i("dd",$,h(s.monthStart)+"~"+h(s.monthEnd)+"个月",1)])])])))),128))])]),z])}}}),[["__scopeId","data-v-dc775f6e"]]);export{G as default};
