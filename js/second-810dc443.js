import{J as e,d as a,K as l,L as o,h as n,M as s,N as t,O as r,Q as i,R as d,a as u,u as c,b as m,r as p,e as h,f,g as v,w as b,E as g,P as y,D as w,F as V,y as j,S as k,T as _,s as x,x as S,j as U,A as B,B as E,n as z,$ as C,G as I,C as N,U as T,V as A,W as P,_ as F}from"../default/default-6ef38c5b.js";import{i as q,a as M,p as G}from"./index.esm-6e06d335.js";import{s as L,R as O,a as R,A as W}from"./index-b83225e1.js";/* empty css              *//* empty css              */import{i as $}from"./isLogin-82cb80a3.js";import"./mount-component-151e52c0.js";const[D,J]=e("form");const K=d(a({name:D,props:{colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:s,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:t,showErrorMessage:t,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}},emits:["submit","failed"],setup(e,{emit:a,slots:s}){const{children:t,linkChildren:d}=l(r),u=e=>e?t.filter((a=>e.includes(a.name))):t,c=a=>{return"string"==typeof a?(e=>{const a=t.find((a=>a.name===e));return a?new Promise(((e,l)=>{a.validate().then((a=>{a?l(a):e()}))})):Promise.reject()})(a):e.validateFirst?(l=a,new Promise(((e,a)=>{const o=[];u(l).reduce(((e,a)=>e.then((()=>{if(!o.length)return a.validate().then((e=>{e&&o.push(e)}))}))),Promise.resolve()).then((()=>{o.length?a(o):e()}))}))):(e=>new Promise(((a,l)=>{const o=u(e);Promise.all(o.map((e=>e.validate()))).then((e=>{(e=e.filter(Boolean)).length?l(e):a()}))})))(a);var l},m=(e,a)=>{t.some((l=>l.name===e&&(l.$el.scrollIntoView(a),!0)))},p=()=>t.reduce(((e,a)=>(void 0!==a.name&&(e[a.name]=a.formValue.value),e)),{}),h=()=>{const l=p();c().then((()=>a("submit",l))).catch((o=>{a("failed",{values:l,errors:o}),e.scrollToError&&o[0].name&&m(o[0].name)}))},f=e=>{i(e),h()};return d({props:e}),o({submit:h,validate:c,getValues:p,scrollToField:m,resetValidation:e=>{"string"==typeof e&&(e=[e]);u(e).forEach((e=>{e.resetValidation()}))},getValidationStatus:()=>t.reduce(((e,a)=>(e[a.name]=a.getValidationStatus(),e)),{})}),()=>{var e;return n("form",{class:J(),onSubmit:f},[null==(e=s.default)?void 0:e.call(s)])}}})),Q={zhima:{data:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],error:"请选择芝麻分数",name:"芝麻分数",type:"radio"},jdbaitiao:{data:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择京东白条",name:"京东白条",type:"radio"},huabei:{data:[{label:"无支付宝花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择花呗白条",name:"支付宝花呗",type:"radio"},zichan:{data:[{label:"是企业主",value:"job"},{label:"有公积金",value:"gongjijin"},{label:"有房",value:"house"},{label:"有车",value:"vehicle"},{label:"有社保",value:"shebao"},{label:"有保单",value:"insurance"},{label:"有逾期",value:"overdue"}],error:"请选择个人资产",name:"个人资产(多选)",type:"checkboxGroup"}},H={class:"aptitude-page"},X={class:"header-form"},Y={class:"form-main"},Z={style:{margin:"20px 20px 0 20px"}},ee={class:"footer"},ae={class:"check-box"},le=(e=>(B("data-v-fa795cd1"),e=e(),E(),e))((()=>v("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),oe={class:"iframe-show"},ne=F(a({__name:"second",setup(e){const a=q(),{isLoginFn:l}=$();l();const o=u(),s=c(),t=m({form:{cnName:"",idNumber:""},address:"",zichan:[],checked:!1,addrShow:!1}),r=p(!1),i=()=>{t.checked=!t.checked},d=({selectedOptions:e})=>{t.addrShow=!1,t.address=e.map((e=>e.text)).join("/")},B=()=>{let e=setInterval((function(){document.documentElement.scrollTop-=10,document.documentElement.scrollTop<=0&&clearInterval(e)}),5)},E=async()=>{if(!t.checked)return L("请阅读并同意用户条款"),!1;if(""==t.form.cnName||""==t.form.idNumber)return L("请填写完善您的个人信息"),B(),!1;if(""==t.address)return L("请选择您的地址"),B(),!1;let e=s.query.channel,l={job:0,gongjijin:0,house:0,vehicle:0,shebao:0,insurance:0,overdue:3},n={job:1,gongjijin:2,house:3,vehicle:3,shebao:2,insurance:2,overdue:0},[r,i,d]=t.address.split("/");for(let a in n)t.zichan.includes(a)&&(l[a]=n[a]);let u={...t.form,...l,province:r,city:i,area:d,channel:e||a.channel,id:z.get("userId")};if(1==(await C("/api/user/updateUserInfo",u)).status){let e="/api/user/match/getAllMatching",a={appType:3,type:7,userId:z.get("userId")},l=await C(e,a);if(l.data&&l.data.length>0)return void o.push({path:"result",query:{ids:l.data[0].conditionId}});o.push({path:"/goods"})}o.push({path:"/goods"})},F=()=>{document.activeElement.blur()};return(e,a)=>{const l=I,o=N,s=K,u=O,c=R,m=T,p=A,B=P,z=g,C=W,q=y,L=w;return h(),f("article",H,[v("header",X,[n(s,{"input-align":"right"},{default:b((()=>[n(o,{inset:""},{default:b((()=>[n(l,{name:"姓名",label:"姓名",placeholder:"姓名","model-value":t.form.cnName,"onUpdate:modelValue":a[0]||(a[0]=e=>t.form.cnName=e),rules:[{required:!0,message:"请填写姓名"}]},null,8,["model-value"]),n(l,{name:"身份证号码",label:"身份证号码",placeholder:"身份证号码","model-value":t.form.idNumber,"onUpdate:modelValue":a[1]||(a[1]=e=>t.form.idNumber=e),rules:[{required:!0,message:"请填写身份证号码"}]},null,8,["model-value"])])),_:1})])),_:1})]),v("section",Y,[n(s,{"label-align":"top","input-align":"center"},{default:b((()=>[n(o,{inset:"",class:"addr-box"},{default:b((()=>[n(l,{"label-align":"left","input-align":"right",modelValue:t.address,"onUpdate:modelValue":a[2]||(a[2]=e=>t.address=e),"is-link":"",name:"area",label:"地区选择",placeholder:"点击选择省市区",onClick:a[3]||(a[3]=e=>t.addrShow=!0),onFocus:F},null,8,["modelValue"]),(h(!0),f(V,null,j(U(Q),((e,o)=>(h(),k(l,{name:e.type,label:e.name,"input-align":"center"},_({_:2},["radio"==e.type?{name:"input",fn:b((()=>[n(c,{class:"radio-box",modelValue:t.form[o],"onUpdate:modelValue":e=>t.form[o]=e,direction:"horizontal"},{default:b((()=>[(h(!0),f(V,null,j(e.data,(e=>(h(),k(u,{name:e.value},{default:b((()=>[x(S(e.label),1)])),_:2},1032,["name"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),key:"0"}:void 0,"checkboxGroup"==e.type?{name:"input",fn:b((()=>[n(p,{class:"radio-box",modelValue:t.zichan,"onUpdate:modelValue":a[4]||(a[4]=e=>t.zichan=e),direction:"horizontal"},{default:b((()=>[(h(!0),f(V,null,j(e.data,(e=>(h(),k(m,{name:e.value,shape:"square"},{default:b((()=>[x(S(e.label),1)])),_:2},1032,["name"])))),256))])),_:2},1032,["modelValue"])])),key:"1"}:void 0]),1032,["name","label"])))),256))])),_:1}),v("div",Z,[n(B,{round:"",block:"",type:"primary",class:"form-btn",onClick:E},{default:b((()=>[x(" 提交 ")])),_:1})])])),_:1}),v("footer",ee,[v("div",ae,[n(z,{class:"checked",modelValue:t.checked,"onUpdate:modelValue":a[5]||(a[5]=e=>t.checked=e),size:"large"},null,8,["modelValue"]),v("span",{onClick:i},"我已阅读同意"),v("span",{class:"pact",onClick:a[6]||(a[6]=e=>{r.value=!0})},"《贷款知情确认书》")]),le])]),n(q,{show:t.addrShow,"onUpdate:show":a[8]||(a[8]=e=>t.addrShow=e),position:"bottom"},{default:b((()=>[n(C,{"area-list":U(M),onConfirm:d,onCancel:a[7]||(a[7]=e=>t.addrShow=!1)},null,8,["area-list"])])),_:1},8,["show"]),n(L,{show:r.value,"onUpdate:show":a[9]||(a[9]=e=>r.value=e),title:"",showCancelButton:!1},{default:b((()=>[v("div",oe,[n(G)])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-fa795cd1"]]);export{ne as default};