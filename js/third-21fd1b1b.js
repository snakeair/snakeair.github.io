import{d as e,X as a,a as l,u as t,r as o,b as s,e as i,f as n,g as r,x as d,h as u,w as c,l as m,n as p,$ as v,C as b,E as f,D as h,s as g,j as w,F as y,y as x,i as V,v as S,S as _,A as C,B as j,G as z,P as k,I as U,q as I,_ as N}from"../default/default-0acc75c5.js";import{i as E,a as q,p as A}from"./index.esm-c8c4a52d.js";/* empty css              */import{s as F,R as O,a as T,A as B}from"./index-5df0916d.js";/* empty css              */import{i as L}from"./isLogin-acb36c9b.js";import"./mount-component-e7c80737.js";const $=[{title:"amount",data:[{label:"0-5万",value:5e4},{label:"5-10万",value:1e5},{label:"10-15万",value:15e4},{label:"15-20万",value:2e5}],error:"请选择借款金额",name:"借款金额",type:"radio"},{title:"jod",data:[{label:"上班",value:0},{label:"企业主",value:1},{label:"个体户",value:2},{label:"自由职业",value:3},{label:"事业单位/公务员",value:4}],error:"请选择职业",name:"职业",type:"radio"},{title:"house",data:[{label:"无",value:0},{label:"按揭房",value:1},{label:"全款房不接受抵押",value:2},{label:"全款房接受抵押",value:3}],error:"请选择房产信息",name:"房产信息",type:"radio"},{title:"vehicle",data:[{label:"无",value:0},{label:"按揭车",value:1},{label:"全款车不接受抵押",value:2},{label:"全款车接受抵押",value:3}],error:"请选择车辆信息",name:"车辆信息",type:"radio"},{title:"shebao",data:[{label:"无",value:0},{label:"未满六个月",value:1},{label:"六个月以上",value:2}],error:"请选择社保",name:"社保",type:"radio"},{title:"gongjijin",data:[{label:"无",value:0},{label:"六个月以下",value:1},{label:"六月到十二月",value:2},{label:"十二月以上",value:3}],error:"请选择公积金缴纳",name:"公积金缴纳",type:"radio"},{title:"insurance",data:[{label:"无",value:0},{label:"缴纳未满1年",value:1},{label:"缴纳1年以上",value:2}],error:"请选择保单信息",name:"保单信息",type:"radio"},{title:"zhima",data:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],error:"请选择芝麻分数",name:"芝麻分数",type:"radio"},{title:"jdbaitiao",data:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择京东白条",name:"京东白条",type:"radio"},{title:"huabei",data:[{label:"无支付宝花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择京东白条",name:"支付宝花呗",type:"radio"}],D=e=>(C("data-v-5e0f8fc7"),e=e(),j(),e),G={class:"third-page"},M={class:"header-circle"},P={class:"circle-text"},R=D((()=>r("div",{class:"line"},null,-1))),X={class:"floor-1 floor"},H=D((()=>r("h3",{class:"floor-title",id:"top"},[g(" 完成个人信息，最高获"),r("em",{class:"red"},"20万"),g("额度 "),r("p",null,"仅用于核验身份及保障您的账户安全，资料将被加密保护")],-1))),J={class:"floor-addr floor"},K={class:"addr-input"},Q=D((()=>r("p",{class:"addr-txt"},"请务必选择您当前长期居住的城市，否则将影响借款结果",-1))),W={class:"select-box floor"},Y=D((()=>r("h3",{class:"floor-title",id:"top"},[r("em",{class:"red"},"填写最后一步"),g("，通过率提升"),r("em",{class:"red"},"95%")],-1))),Z={class:"select-title",id:"zhima"},ee={class:"holder"},ae={class:"footer"},le={key:0},te=D((()=>r("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),oe={class:"check-box"},se={class:"iframe-show"},ie=N(e({__name:"third",setup(e){a((e=>({"52358f40":re.value,"3986ba2e":ie.value,"4649ac7b":ne.value})));const C=E(),j=l(),N=t();delete q.county_list;const{isLoginFn:D}=L();D();const ie=o("10%"),ne=o("90%"),re=o("10px"),de=()=>{let e=10;""!=ue.form.age&&""!=ue.form.cnName&&""!=ue.form.sex&&(e+=50),""!=ue.form.city&&(e+=20),ue.tabShow>=10&&(e+=20),ne.value=100-e+"%",ie.value=`${e}%`,100==e&&(re.value="0")},ue=s({form:{cnName:"",sex:"",age:"",city:"",province:""},show:{},addrShow:!1,tabSize:[],tabShow:0}),ce=({selectedOptions:e})=>{ue.addrShow=!1,ue.form.province=e[0].text,ue.form.city=e[1].text,de()},me=o(!1),pe=()=>{me.value=!me.value},ve=o(!1),be=()=>{let e=setInterval((function(){document.documentElement.scrollTop-=10,document.documentElement.scrollTop<=0&&clearInterval(e)}),5)},fe=async()=>{if(!me.value)return F("请阅读并同意用户条款"),!1;if(""==ue.form.cnName||""==ue.form.age||""==ue.form.sex)return F("请填写完善您的个人信息"),be(),!1;if(""==ue.form.city)return F("请选择您的地址"),be(),!1;let e=N.query.channel,a={...ue.form,channel:e||C.channel,id:p.get("userId")};console.log(a);if(1==(await v("/api/user/updateUserInfo",a)).status){let e="/api/user/match/getAllMatching",a={appType:3,type:7,userId:p.get("userId")},l=await v(e,a);if(console.log(l),l.data&&l.data.length>0)return void j.push({path:"result",query:{ids:l.data[0].conditionId}});j.push({path:"/goods"})}j.push({path:"/goods"})},he=()=>{document.activeElement.blur()};return ue.tabSize=$.map((e=>(ue.form[e.title]="",ue.show[e.title]="",e.title))),console.log(ue),(e,a)=>{const l=z,t=O,o=T,s=b,p=B,v=k,C=U,j=I,N=f,E=h;return i(),n("div",G,[r("header",M,[r("div",P,"当前进度"+d(ie.value),1),R]),r("section",X,[H,u(s,{"input-align":"right"},{default:c((()=>[u(l,{"input-align":"right",label:"姓名",modelValue:ue.form.cnName,"onUpdate:modelValue":a[0]||(a[0]=e=>ue.form.cnName=e),onChange:de,placeholder:"请输入真实姓名"},null,8,["modelValue"]),u(l,{"input-align":"right",label:"年龄",modelValue:ue.form.age,"onUpdate:modelValue":a[1]||(a[1]=e=>ue.form.age=e),onChange:de,type:"digit",placeholder:"请输入年龄"},null,8,["modelValue"]),u(l,{"input-align":"right",name:"radio",label:"性别"},{input:c((()=>[u(o,{modelValue:ue.form.sex,"onUpdate:modelValue":a[2]||(a[2]=e=>ue.form.sex=e),onChange:de,direction:"horizontal"},{default:c((()=>[u(t,{name:"1"},{default:c((()=>[g("男")])),_:1}),u(t,{name:"2"},{default:c((()=>[g("女")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})]),r("section",J,[u(s,null,{default:c((()=>[r("div",K,[u(l,{"label-align":"left","input-align":"right",modelValue:ue.form.city,"onUpdate:modelValue":a[3]||(a[3]=e=>ue.form.city=e),name:"area",label:"地区选择",placeholder:"点击选择省市区",onClick:a[4]||(a[4]=e=>ue.addrShow=!0),onFocus:he},null,8,["modelValue"])]),u(v,{show:ue.addrShow,"onUpdate:show":a[6]||(a[6]=e=>ue.addrShow=e),position:"bottom"},{default:c((()=>[u(p,{"area-list":w(q),onConfirm:ce,onCancel:a[5]||(a[5]=e=>ue.addrShow=!1)},null,8,["area-list"])])),_:1},8,["show"])])),_:1}),Q]),r("section",W,[Y,u(s,{"input-align":"right"},{default:c((()=>[u(j,{modelValue:ue.tabSize,"onUpdate:modelValue":a[7]||(a[7]=e=>ue.tabSize=e),class:"select-box"},{default:c((()=>[(i(!0),n(y,null,x(w($),((e,a)=>(i(),n("div",{key:e.name},[V(r("div",null,[u(C,{name:e.title},{title:c((()=>[r("h3",Z,[g(d(e.name)+" ",1),r("span",ee,d(ue.show[e.title]),1)])])),default:c((()=>[r("div",null,[u(o,{class:"radio-box",onChange:de,modelValue:ue.form[e.title],"onUpdate:modelValue":a=>ue.form[e.title]=a,direction:"horizontal"},{default:c((()=>[(i(!0),n(y,null,x(e.data,(l=>(i(),_(t,{onClick:t=>{((e,a,l)=>{ue.tabShow=l+1,ue.show[e]=a,console.log(ue.tabSize),console.log(e),console.log(ue.tabSize.indexOf(e)),ue.tabSize.splice(ue.tabSize.indexOf(e),1)})(e.title,l.label,a)},name:l.value},{default:c((()=>[g(d(l.label),1)])),_:2},1032,["onClick","name"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])),_:2},1032,["name"])],512),[[S,ue.tabShow>=a]])])))),128))])),_:1},8,["modelValue"])])),_:1})]),r("footer",ae,[ue.tabShow>=10?(i(),n("div",le,[te,r("div",oe,[u(N,{class:"checked",modelValue:me.value,"onUpdate:modelValue":a[8]||(a[8]=e=>me.value=e),size:"large"},null,8,["modelValue"]),r("span",{onClick:pe},"我已阅读同意"),r("span",{class:"pact",onClick:a[9]||(a[9]=e=>{ve.value=!0})},"《贷款知情确认书》")]),r("div",{btn:"",class:"next-btn",onClick:fe},"下 一 步")])):m("",!0)]),u(E,{show:ve.value,"onUpdate:show":a[10]||(a[10]=e=>ve.value=e),title:"",showCancelButton:!1},{default:c((()=>[r("div",se,[u(A)])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-5e0f8fc7"]]);export{ie as default};
