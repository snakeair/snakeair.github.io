import{d as a,a as s,u as e,r as t,o as l,e as o,f as b,g as i,x as c,h as d,w as n,i as r,v,l as p,t as m,m as u,$ as g,p as h,ap as f,n as x,V as y,X as w,s as _,A as I,B as k,_ as j}from"../default/default-10ae9c6f.js";/* empty css              *//* empty css              */import{_ as A,a as C,b as U,c as V}from"./img040-a47a2f98.js";import{p as E}from"./pactThree-953ac966.js";const T=""+new URL("../assets/img-14-f663de6c.png",import.meta.url).href,L=a=>(I("data-v-ebb5b51b"),a=a(),k(),a),P={class:"bg"},q=L((()=>i("header",{class:"pages-header"},[i("h3",{class:"title"},"根据您的意向和资质情况"),i("p",{class:"title-two"},"为您精选的贷款机构或产品")],-1))),B={class:"goods-list-main"},O=L((()=>i("div",{class:"tags"},"推荐机构",-1))),R={class:"goods-box"},X={class:"goods-box-header"},D={class:"img-box"},M=["src"],S={class:"name"},$=L((()=>i("p",{class:"goods-info"},[_("可借额度"),i("span",{class:"red"},"10000-51万"),_("可借额度"),i("span",{class:"black"},"96.6%")],-1))),z=u('<section class="banner" data-v-ebb5b51b><div class="icon-list" data-v-ebb5b51b><div class="img-box" data-v-ebb5b51b><img src="'+A+'" class="icon" alt="" data-v-ebb5b51b></div><p class="icon-title" data-v-ebb5b51b>在线申请</p></div><div class="icon-list" data-v-ebb5b51b><div class="img-box" data-v-ebb5b51b><img src="'+C+'" class="icon" alt="" data-v-ebb5b51b></div><p class="icon-title" data-v-ebb5b51b>电话初审</p></div><div class="icon-list" data-v-ebb5b51b><div class="img-box" data-v-ebb5b51b><img src="'+U+'" class="icon" alt="" data-v-ebb5b51b></div><p class="icon-title" data-v-ebb5b51b>线下签约</p></div><div class="icon-list" data-v-ebb5b51b><div class="img-box" data-v-ebb5b51b><img src="'+V+'" class="icon" alt="" data-v-ebb5b51b></div><p class="icon-title" data-v-ebb5b51b>审批放款</p></div></section><section class="slogn" data-v-ebb5b51b></section>',2),F={class:"pact-show-main"},G=L((()=>i("p",{class:"info"},[_("本平台会根据您的资质，为您匹配专业的贷款咨询服务机构(包含:等)，请查阅"),i("span",{class:"red"},"《个人信息共享授权书》")],-1))),H=L((()=>i("p",{class:"info red"},"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息",-1))),J={class:"show-box"},K={class:"pages-footer"},N={key:0,class:"layer-box"},Q=u('<header class="layer-header" data-v-ebb5b51b><div class="img-box" data-v-ebb5b51b><img src="'+T+'" class="img" alt="" data-v-ebb5b51b></div><div data-v-ebb5b51b><h3 class="one-title" data-v-ebb5b51b>一个订单咨询成功</h3><h3 class="two-title" data-v-ebb5b51b>请留意审核人员来电</h3></div></header><p class="info one" data-v-ebb5b51b>稍后您的手机号码将收到贷款咨询机构工作人员电话，请保持手机畅通并核实对方信息</p><p class="info two" data-v-ebb5b51b>我们不会以任何名义向您收取费用，更不会要求您进行转账、提供银行密码、缴纳保证金等，请您注意识别，谨防伪冒诈骗行为</p>',3),W=j(a({__name:"index",setup(a){const u=s(),I=e(),k=t(!0),j=t(!1);let A=null;const C=()=>{j.value=!0;let a={platformId:L.value.id,conditionId:L.value.conditionId,flag:4,type:2,userId:W,channel:I.query.channel};g("/api/user/platform/insertUserApplication",a).then((a=>{1==a.status?(h({msg:"申请成功"}),setTimeout((()=>{let s=a.data;console.log(s),s&&""!==s?window.location.href=s:u.push({path:"/goods"})}),2e3)):h({type:"error",msg:a.msg})})),A=setTimeout((()=>{u.push({path:"/goods"})}),3e3)},U=()=>{clearInterval(A),A=null,u.push({path:"/goods"})},V=async a=>{let s=await f((()=>import("./img-13-68b6256e.js")),[],import.meta.url);console.log(s.default),a.target.setAttribute("src",s.default)},T=t(!1),L=t({});let W="";return(async()=>{W=x.get("userId");let a=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);T.value=a;const s=I.query.ids;let e={userId:W,conditionId:s},t=await g("/api/user/match/selectPlatformAndConditionById",e);1==t.status?L.value=t.data:h({msg:t.msg,type:"error"})})(),l((()=>{window.addEventListener("popstate",(a=>{console.log("back"),j.value=!0}),!1)})),(a,s)=>{const e=y,t=w;return o(),b("div",{class:m(["goods-pages",{ios:T.value}])},[i("div",P,[q,i("section",B,[O,i("div",R,[i("header",X,[i("div",D,[i("img",{src:"https://storebase.hnyiye.com/"+L.value.img,onError:V,class:"img",alt:""},null,40,M)]),i("span",S,c(L.value.name),1),d(e,{class:"checkbox",modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=a=>k.value=a),"checked-color":"#f34638"},null,8,["modelValue"])]),$])]),z,i("section",F,[G,H,i("div",J,[d(E)])]),i("footer",K,[d(t,{type:"primary",color:"#fc719b",block:"",onClick:C},{default:n((()=>[_("同意授权并咨询")])),_:1})])]),r(i("div",{class:"cloud",onClick:U},null,512),[[v,j.value]]),j.value?(o(),b("div",N,[i("div",{class:"box"},[Q,i("footer",{class:"layer-footer"},[i("div",{class:"footer-btn",onClick:U},"确定")])])])):p("",!0)],2)}}}),[["__scopeId","data-v-ebb5b51b"]]);export{W as default};