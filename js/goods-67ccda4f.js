import{d as s,a,u as o,r as l,o as t,b as e,h as d,c,x as i,g as n,H as r,I as u,k as g,t as p,p as f,f as m,aH as h,af as v,_ as y}from"../default/default-f4e8d8aa.js";import{$ as x}from"./axios-378eabc4.js";import{N as _}from"./index-90381674.js";/* empty css              */import{a as b}from"./js.cookie-8253c38e.js";import{i as j}from"./isLogin-8785dab7.js";const k=s=>(f("data-v-dc775f6e"),s=s(),m(),s),w={class:"goodslist-pages"},I={key:0,class:"cloud"},E={class:"box"},L={class:"show-head"},A={class:"news"},q=k((()=>n("h3",{class:"pages-title"},"预估线上贷款",-1))),C=k((()=>n("h3",{class:"pages-title"},[g("额度最高"),n("span",{class:"white"},"100000元")],-1))),D={class:"goods-list"},H=k((()=>n("h4",{class:"goods-list-title"},"为您推荐以下线上快速下款产品",-1))),P={class:"goods-header"},T={class:"logo-box"},F=["src"],M={class:"goods-info"},N={class:"info"},O=k((()=>n("dd",{class:"gay"},"贷款金额",-1))),R={class:"info"},S=k((()=>n("dd",{class:"gay"},"利率",-1))),V=["onClick"],$={class:"gay"},z=k((()=>n("footer",{class:"pages-footer"},[n("p",null,"投资有风险，借贷需谨慎。"),n("p",null,"请根据个人能力合理借款、避免逾期。")],-1))),B=y(s({__name:"goods",setup(s){const{isLoginFn:f}=j();f();const m=a();o();const y=l(!0);let k="";const B=l([]),G=async s=>{let a=await h((()=>import("./img-13-68b6256e.js")),[],import.meta.url);console.log(a.default),s.target.setAttribute("src",a.default)};return(async()=>{k=b.get("userId"),console.log(k);let s={appType:3,type:3,userId:k},a=await x("/api/user/platform/getAllPlatforms",s);y.value=!1,1==a.status&&(B.value=a.data)})(),(s,a)=>{const o=v,l=_;return t(),e("article",w,[d(y)?(t(),e("div",I,[c(o,{color:"#fc719b"})])):i("",!0),n("div",E,[n("header",L,[n("div",A,[c(l,{background:"#fff",class:"slogn","left-icon":"volume-o",text:"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息"}),q,C])]),n("div",D,[H,(t(!0),e(r,null,u(d(B),((s,a)=>(t(),e("div",{class:"goods-box",key:s.ID},[n("header",P,[n("div",T,[n("img",{class:"logo",src:s.logo,onError:G,alt:""},null,40,F)]),g(" "+p(s.name),1)]),n("div",M,[n("dl",null,[n("dt",N,p(s.quotaMax)+"元",1),O]),n("dl",null,[n("dt",R,p(s.rateLow)+"%",1),S]),n("dl",null,[n("dt",null,[n("button",{class:"goods-btn",onClick:s=>(async s=>{m.push({path:"/pact",query:{ids:B.value[s].id}})})(a)},"立即申请",8,V)]),n("dd",$,p(s.monthStart)+"~"+p(s.monthEnd)+"个月",1)])])])))),128))])]),z])}}}),[["__scopeId","data-v-dc775f6e"]]);export{B as default};
