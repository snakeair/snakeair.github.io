import{$ as e}from"./axios-2019ead7.js";/* empty css              *//* empty css              *//* empty css              */import{i as a,a as l,p as o}from"./index.esm-772e1e3d.js";import{s,R as n,a as t,A as r}from"./index-0800a133.js";import{E as i}from"./el-checkbox-9d34166c.js";/* empty css              *//* empty css              */import{a as d}from"./js.cookie-d59fc71c.js";import{i as u}from"./isLogin-c4066e86.js";import{N as m,f as c,O as p,Q as h,c as f,R as b,S as v,T as g,U as j,V as k,h as y,j as V,B as w,r as x,o as _,a as S,d as U,z,P as B,D as I,H as E,I as N,W as C,X as T,k as P,t as q,u as A,p as F,b as M,K as O,F as $,Y as G,Z as L,$ as R,_ as W}from"../default/default-001f12f7.js";import"./mount-component-31d4681c.js";const[D,H]=m("form");const K=k(c({name:D,props:{colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:b,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:v,showErrorMessage:v,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}},emits:["submit","failed"],setup(e,{emit:a,slots:l}){const{children:o,linkChildren:s}=p(g),n=e=>e?o.filter((a=>e.includes(a.name))):o,t=a=>{return"string"==typeof a?(e=>{const a=o.find((a=>a.name===e));return a?new Promise(((e,l)=>{a.validate().then((a=>{a?l(a):e()}))})):Promise.reject()})(a):e.validateFirst?(l=a,new Promise(((e,a)=>{const o=[];n(l).reduce(((e,a)=>e.then((()=>{if(!o.length)return a.validate().then((e=>{e&&o.push(e)}))}))),Promise.resolve()).then((()=>{o.length?a(o):e()}))}))):(e=>new Promise(((a,l)=>{const o=n(e);Promise.all(o.map((e=>e.validate()))).then((e=>{(e=e.filter(Boolean)).length?l(e):a()}))})))(a);var l},r=(e,a)=>{o.some((l=>l.name===e&&(l.$el.scrollIntoView(a),!0)))},i=()=>o.reduce(((e,a)=>(void 0!==a.name&&(e[a.name]=a.formValue.value),e)),{}),d=()=>{const l=i();t().then((()=>a("submit",l))).catch((o=>{a("failed",{values:l,errors:o}),e.scrollToError&&o[0].name&&r(o[0].name)}))},u=e=>{j(e),d()};return s({props:e}),h({submit:d,validate:t,getValues:i,scrollToField:r,resetValidation:e=>{"string"==typeof e&&(e=[e]);n(e).forEach((e=>{e.resetValidation()}))},getValidationStatus:()=>o.reduce(((e,a)=>(e[a.name]=a.getValidationStatus(),e)),{})}),()=>{var e;return f("form",{class:H(),onSubmit:u},[null==(e=l.default)?void 0:e.call(l)])}}})),Q={zhima:{data:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],error:"请选择芝麻分数",name:"芝麻分数",type:"radio"},jdbaitiao:{data:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择京东白条",name:"京东白条",type:"radio"},huabei:{data:[{label:"无支付宝花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择花呗白条",name:"支付宝花呗",type:"radio"},zichan:{data:[{label:"是企业主",value:"job"},{label:"有公积金",value:"gongjijin"},{label:"有房",value:"house"},{label:"有车",value:"vehicle"},{label:"有社保",value:"shebao"},{label:"有保单",value:"insurance"},{label:"有逾期",value:"overdue"}],error:"请选择个人资产",name:"个人资产(多选)",type:"checkboxGroup"}},X={class:"aptitude-page"},Y={class:"header-form"},Z={class:"form-main"},J={style:{margin:"20px 20px 0 20px"}},ee={class:"footer"},ae={class:"check-box"},le=(e=>(F("data-v-5fe7daa4"),e=e(),M(),e))((()=>U("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),oe={class:"iframe-show"},se=W(c({__name:"second",setup(m){const c=a(),{isLoginFn:p}=u();p();const h=y(),b=V(),v=w({form:{cnName:"",idNumber:""},address:"",zichan:[],checked:!1,addrShow:!1}),g=x(!1),j=()=>{v.checked=!v.checked},k=({selectedOptions:e})=>{v.addrShow=!1,v.address=e.map((e=>e.text)).join("/")},F=()=>{let e=setInterval((function(){document.documentElement.scrollTop-=10,document.documentElement.scrollTop<=0&&clearInterval(e)}),5)},M=async()=>{if(!v.checked)return s("请阅读并同意用户条款"),!1;if(""==v.form.cnName||""==v.form.idNumber)return s("请填写完善您的个人信息"),F(),!1;if(""==v.address)return s("请选择您的地址"),F(),!1;let a=b.query.channel;console.log(v.address);let l={job:0,gongjijin:0,house:0,vehicle:0,shebao:0,insurance:0,overdue:3},o={job:1,gongjijin:2,house:3,vehicle:3,shebao:2,insurance:2,overdue:0},[n,t,r]=v.address.split("/");for(let e in o)v.zichan.includes(e)&&(l[e]=o[e]);console.log(l);let i={...v.form,...l,province:n,city:t,area:r,channel:a||c.channel,id:d.get("userId")};if(1==(await e("/api/user/updateUserInfo",i)).status){let a="/api/user/match/getAllMatching",l={appType:3,type:7,userId:d.get("userId")},o=await e(a,l);if(console.log(o),o.data&&o.data.length>0)return void h.push({path:"/result",query:{ids:o.data[0].conditionId}});h.push({path:"/goods"})}h.push({path:"/goods"})};return(e,a)=>{const s=O,d=$,u=K,m=n,c=t,p=G,h=L,b=R,y=i,V=r,w=B,x=I;return _(),S("article",X,[U("header",Y,[f(u,{"input-align":"right"},{default:z((()=>[f(d,{inset:""},{default:z((()=>[f(s,{name:"姓名",label:"姓名",placeholder:"姓名","model-value":v.form.cnName,"onUpdate:modelValue":a[0]||(a[0]=e=>v.form.cnName=e),rules:[{required:!0,message:"请填写姓名"}]},null,8,["model-value"]),f(s,{name:"身份证号码",label:"身份证号码",placeholder:"身份证号码","model-value":v.form.idNumber,"onUpdate:modelValue":a[1]||(a[1]=e=>v.form.idNumber=e),rules:[{required:!0,message:"请填写身份证号码"}]},null,8,["model-value"])])),_:1})])),_:1})]),U("section",Z,[f(u,{"label-align":"top","input-align":"center"},{default:z((()=>[f(d,{inset:"",class:"addr-box"},{default:z((()=>[f(s,{"label-align":"left","input-align":"right",modelValue:v.address,"onUpdate:modelValue":a[2]||(a[2]=e=>v.address=e),"is-link":"",name:"area",label:"地区选择",placeholder:"点击选择省市区",onClick:a[3]||(a[3]=e=>v.addrShow=!0),disabled:!0},null,8,["modelValue"]),(_(!0),S(E,null,N(A(Q),((e,l)=>(_(),C(s,{name:e.type,label:e.name,"input-align":"center"},T({_:2},["radio"==e.type?{name:"input",fn:z((()=>[f(c,{class:"radio-box",modelValue:v.form[l],"onUpdate:modelValue":e=>v.form[l]=e,direction:"horizontal"},{default:z((()=>[(_(!0),S(E,null,N(e.data,(e=>(_(),C(m,{name:e.value},{default:z((()=>[P(q(e.label),1)])),_:2},1032,["name"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),key:"0"}:void 0,"checkboxGroup"==e.type?{name:"input",fn:z((()=>[f(h,{class:"radio-box",modelValue:v.zichan,"onUpdate:modelValue":a[4]||(a[4]=e=>v.zichan=e),direction:"horizontal"},{default:z((()=>[(_(!0),S(E,null,N(e.data,(e=>(_(),C(p,{name:e.value,shape:"square"},{default:z((()=>[P(q(e.label),1)])),_:2},1032,["name"])))),256))])),_:2},1032,["modelValue"])])),key:"1"}:void 0]),1032,["name","label"])))),256))])),_:1}),U("div",J,[f(b,{round:"",block:"",type:"primary",class:"form-btn",onClick:M},{default:z((()=>[P(" 提交 ")])),_:1})])])),_:1}),U("footer",ee,[U("div",ae,[f(y,{class:"checked",modelValue:v.checked,"onUpdate:modelValue":a[5]||(a[5]=e=>v.checked=e),size:"large"},null,8,["modelValue"]),U("span",{onClick:j},"我已阅读同意"),U("span",{class:"pact",onClick:a[6]||(a[6]=e=>{g.value=!0})},"《贷款知情确认书》")]),le])]),f(w,{show:v.addrShow,"onUpdate:show":a[8]||(a[8]=e=>v.addrShow=e),position:"bottom"},{default:z((()=>[f(V,{"area-list":A(l),onConfirm:k,onCancel:a[7]||(a[7]=e=>v.addrShow=!1)},null,8,["area-list"])])),_:1},8,["show"]),f(x,{show:g.value,"onUpdate:show":a[9]||(a[9]=e=>g.value=e),title:"",showCancelButton:!1},{default:z((()=>[U("div",oe,[f(o)])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-5fe7daa4"]]);export{se as default};
