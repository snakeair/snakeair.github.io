import{_ as a,d as e,i as s,l as t,r as l,c as n,a as o,u as c,f as i,b as u,w as r,n as p,q as d,G as m,$ as f,o as g,p as v,g as b}from"../default/default-64517220.js";import{$ as y}from"./upload-908e3d6d.js";const _=a=>(v("data-v-59882952"),a=a(),b(),a),w={class:"common-pages que-one"},k=_((()=>o("h3",{class:"page-title"},"第一题",-1))),z=["innerHTML"],h={class:"img-box"},q=["src"],L={key:1,src:"./assets/img-26-f7b5c552.png",class:"img-default",alt:""},j={class:"reply-box"},x={class:"pic common-btn"},C={class:"pic common-btn"},F={class:"cloud"},I={class:"layer layer-up"},$=_((()=>o("div",{class:"iconfont icon-dui3"},null,-1))),D=_((()=>o("p",{class:"info"},"上传成功",-1)));var H=a(e({__name:"one",setup(a){const{isLoginFn:e}=s();e();const v=t(""),b=t("");let _=0,H=null;(async()=>{let a=await m("/api.php/puzzle/subject",{});b.value=a.data.title,H=setInterval((function(){_++}),1e3)})();let M=new FormData;const R=async()=>{if(!M.get("file"))return!1;clearInterval(H),H=null,M.set("use_seconds",`${_}`),M.set("puzzle_id","1");let a=await y("/api.php/puzzle/first",M);0==a.code?v.value="up":f({type:"error",msg:a.message})};let T=t("");const A=a=>{const e=a.target.files[0],s=new FileReader;s.onload=function(a){T.value=a.target.result},s.readAsDataURL(e),M.set("file",e)};return(a,e)=>{const s=l("router-link");return g(),n("div",w,[k,o("p",{class:"page-take",innerHTML:c(b)},null,8,z),o("div",h,[""!=c(T)?(g(),n("img",{key:0,src:c(T),class:"img",alt:""},null,8,q)):(g(),n("img",L))]),o("div",j,[o("label",x,[o("input",{type:"file",onChange:A,accept:"image/*",capture:"camera"},null,32),i("立即拍照 ")]),o("label",C,[o("input",{type:"file",onChange:A,accept:"image/*;"},null,32),i("从照片库中选择 ")]),o("div",{class:"up-btn common-btn",onClick:R,btn:""},"立即提交")]),u(s,{class:"to-rank",to:"/question/rank"},{default:r((()=>[i("查看入围选手名单")])),_:1}),p(o("div",F,null,512),[[d,""!==c(v)]]),p(o("div",I,[$,D,u(s,{to:"/question/two",class:"close-btn common-btn",btn:""},{default:r((()=>[i("下一题")])),_:1})],512),[[d,"up"==c(v)]])])}}}),[["__scopeId","data-v-59882952"],["__file","E:/coding/work/newyear/src/views/question/one.vue"]]);export{H as default};