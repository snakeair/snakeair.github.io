import{d as a,a as s,u as t,r as c,e as l,f as e,g as o,x as i,h as d,w as n,i as r,v,l as p,t as f,m,$ as u,p as g,ar as h,n as b,U as x,W as y,s as _,A as w,B as I,_ as k}from"../default/default-0acc75c5.js";/* empty css              *//* empty css              */import{_ as j,a as A,b as U,c as C}from"./img040-a47a2f98.js";import{p as T}from"./pactThree-8d88bee0.js";const V=""+new URL("../assets/img-14-f663de6c.png",import.meta.url).href,E=a=>(w("data-v-4a7cf8a8"),a=a(),I(),a),P={class:"bg"},q=E((()=>o("header",{class:"pages-header"},[o("h3",{class:"title"},"根据您的意向和资质情况"),o("p",{class:"title-two"},"为您精选的贷款机构或产品")],-1))),B={class:"goods-list-main"},L=E((()=>o("div",{class:"tags"},"推荐机构",-1))),O={class:"goods-box"},R={class:"goods-box-header"},D={class:"img-box"},M=["src"],S={class:"name"},W=E((()=>o("p",{class:"goods-info"},[_("可借额度"),o("span",{class:"red"},"10000-51万"),_("可借额度"),o("span",{class:"black"},"96.6%")],-1))),X=m('<section class="banner" data-v-4a7cf8a8><div class="icon-list" data-v-4a7cf8a8><div class="img-box" data-v-4a7cf8a8><img src="'+j+'" class="icon" alt="" data-v-4a7cf8a8></div><p class="icon-title" data-v-4a7cf8a8>在线申请</p></div><div class="icon-list" data-v-4a7cf8a8><div class="img-box" data-v-4a7cf8a8><img src="'+A+'" class="icon" alt="" data-v-4a7cf8a8></div><p class="icon-title" data-v-4a7cf8a8>电话初审</p></div><div class="icon-list" data-v-4a7cf8a8><div class="img-box" data-v-4a7cf8a8><img src="'+U+'" class="icon" alt="" data-v-4a7cf8a8></div><p class="icon-title" data-v-4a7cf8a8>线下签约</p></div><div class="icon-list" data-v-4a7cf8a8><div class="img-box" data-v-4a7cf8a8><img src="'+C+'" class="icon" alt="" data-v-4a7cf8a8></div><p class="icon-title" data-v-4a7cf8a8>审批放款</p></div></section><section class="slogn" data-v-4a7cf8a8></section>',2),$={class:"pact-show-main"},z=E((()=>o("p",{class:"info"},[_("本平台会根据您的资质，为您匹配专业的贷款咨询服务机构(包含:等)，请查阅"),o("span",{class:"red"},"《个人信息共享授权书》")],-1))),F=E((()=>o("p",{class:"info red"},"所有贷款申请在未成功贷款前绝不收取任何费用，为了保障您的资金安全，请不要相信任何要求您支付费用的信息，邮件，电话等不实信息",-1))),G={class:"show-box"},H={class:"pages-footer"},J={key:0,class:"layer-box"},K=m('<header class="layer-header" data-v-4a7cf8a8><div class="img-box" data-v-4a7cf8a8><img src="'+V+'" class="img" alt="" data-v-4a7cf8a8></div><div data-v-4a7cf8a8><h3 class="one-title" data-v-4a7cf8a8>一个订单咨询成功</h3><h3 class="two-title" data-v-4a7cf8a8>请留意审核人员来电</h3></div></header><p class="info one" data-v-4a7cf8a8>稍后您的手机号码将收到贷款咨询机构工作人员电话，请保持手机畅通并核实对方信息</p><p class="info two" data-v-4a7cf8a8>我们不会以任何名义向您收取费用，更不会要求您进行转账、提供银行密码、缴纳保证金等，请您注意识别，谨防伪冒诈骗行为</p>',3),N=k(a({__name:"index",setup(a){const m=s(),w=t(),I=c(!0),k=c(!1);let j=null;const A=()=>{k.value=!0;let a={platformId:E.value.id,conditionId:E.value.conditionId,flag:4,type:2,userId:N,channel:w.query.channel};u("/api/user/platform/insertUserApplication",a).then((a=>{1==a.status?(g({msg:"申请成功"}),setTimeout((()=>{let s=a.data;console.log(s),s&&""!==s?window.location.href=s:m.push({path:"/goods"})}),2e3)):g({type:"error",msg:a.msg})})),j=setTimeout((()=>{m.push({path:"/goods"})}),3e3)},U=()=>{clearInterval(j),j=null,m.push({path:"/goods"})},C=async a=>{let s=await h((()=>import("./img-13-68b6256e.js")),[],import.meta.url);console.log(s.default),a.target.setAttribute("src",s.default)},V=c(!1),E=c({});let N="";return(async()=>{N=b.get("userId");let a=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);V.value=a;const s=w.query.ids;let t={userId:N,conditionId:s},c=await u("/api/user/match/selectPlatformAndConditionById",t);1==c.status?E.value=c.data:g({msg:c.msg,type:"error"})})(),(a,s)=>{const t=x,c=y;return l(),e("div",{class:f(["goods-pages",{ios:V.value}])},[o("div",P,[q,o("section",B,[L,o("div",O,[o("header",R,[o("div",D,[o("img",{src:"https://storebase.hnyiye.com/"+E.value.img,onError:C,class:"img",alt:""},null,40,M)]),o("span",S,i(E.value.name),1),d(t,{class:"checkbox",modelValue:I.value,"onUpdate:modelValue":s[0]||(s[0]=a=>I.value=a),"checked-color":"#f34638"},null,8,["modelValue"])]),W])]),X,o("section",$,[z,F,o("div",G,[d(T)])]),o("footer",H,[d(c,{type:"primary",color:"#fc719b",block:"",onClick:A},{default:n((()=>[_("同意授权并咨询")])),_:1})])]),r(o("div",{class:"cloud",onClick:U},null,512),[[v,k.value]]),k.value?(l(),e("div",J,[o("div",{class:"box"},[K,o("footer",{class:"layer-footer"},[o("div",{class:"footer-btn",onClick:U},"确定")])])])):p("",!0)],2)}}}),[["__scopeId","data-v-4a7cf8a8"]]);export{N as default};
