import{$ as e}from"./axios-19942422.js";/* empty css              *//* empty css              *//* empty css              */import{E as a}from"./el-checkbox-7afeb3e2.js";import{i as l,a as o,p as t}from"./index.esm-5b7e068f.js";/* empty css              */import{R as s,a as i,A as r}from"./index-5ae91fd5.js";/* empty css              */import{d as n,X as d,u,a as m,r as c,z as p,e as v,f as b,g as f,t as h,h as g,q as w,m as x,A as y,D as V,i as j,k as S,F as _,E as k,j as z,p as C,T as U,x as I,y as E,H as N,P as q,J as T,B as A,_ as F}from"../default/default-c5a4686d.js";import{a as O}from"./js.cookie-8253c38e.js";import{i as B}from"./isLogin-1238e493.js";import{s as L}from"./function-call-9c53d612.js";import"./mount-component-2bac1909.js";const $=[{title:"amount",data:[{label:"0-5万",value:5e4},{label:"5-10万",value:1e5},{label:"10-15万",value:15e4},{label:"15-20万",value:2e5}],error:"请选择借款金额",name:"借款金额",type:"radio"},{title:"jod",data:[{label:"上班",value:0},{label:"企业主",value:1},{label:"个体户",value:2},{label:"自由职业",value:3},{label:"事业单位/公务员",value:4}],error:"请选择职业",name:"职业",type:"radio"},{title:"house",data:[{label:"无",value:0},{label:"按揭房",value:1},{label:"全款房不接受抵押",value:2},{label:"全款房接受抵押",value:3}],error:"请选择房产信息",name:"房产信息",type:"radio"},{title:"vehicle",data:[{label:"无",value:0},{label:"按揭车",value:1},{label:"全款车不接受抵押",value:2},{label:"全款车接受抵押",value:3}],error:"请选择车辆信息",name:"车辆信息",type:"radio"},{title:"shebao",data:[{label:"无",value:0},{label:"未满六个月",value:1},{label:"六个月以上",value:2}],error:"请选择社保",name:"社保",type:"radio"},{title:"gongjijin",data:[{label:"无",value:0},{label:"六个月以下",value:1},{label:"六月到十二月",value:2},{label:"十二月以上",value:3}],error:"请选择公积金缴纳",name:"公积金缴纳",type:"radio"},{title:"insurance",data:[{label:"无",value:0},{label:"缴纳未满1年",value:1},{label:"缴纳1年以上",value:2}],error:"请选择保单信息",name:"保单信息",type:"radio"},{title:"zhima",data:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],error:"请选择芝麻分数",name:"芝麻分数",type:"radio"},{title:"jdbaitiao",data:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择京东白条",name:"京东白条",type:"radio"},{title:"huabei",data:[{label:"无支付宝花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择支付宝花呗",name:"支付宝花呗",type:"radio"}],D=e=>(I("data-v-b8b240a8"),e=e(),E(),e),H={class:"third-page"},J={class:"header-circle"},M={class:"circle-text"},P=D((()=>f("div",{class:"line"},null,-1))),R={class:"floor-1 floor"},X=D((()=>f("h3",{class:"floor-title",id:"top"},[j(" 完成个人信息，最高获"),f("em",{class:"red"},"20万"),j("额度 "),f("p",null,"仅用于核验身份及保障您的账户安全，资料将被加密保护")],-1))),G={class:"floor-addr floor"},K={class:"addr-input"},Q=D((()=>f("p",{class:"addr-txt"},"请务必选择您当前长期居住的城市，否则将影响借款结果",-1))),W={class:"select-box floor"},Y=D((()=>f("h3",{class:"floor-title",id:"top"},[f("em",{class:"red"},"填写最后一步"),j("，通过率提升"),f("em",{class:"red"},"95%")],-1))),Z={class:"select-title",id:"zhima"},ee={class:"holder"},ae={class:"footer"},le={key:0},oe=D((()=>f("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),te={class:"check-box"},se={class:"iframe-show"},ie=F(n({__name:"third",setup(n){d((e=>({"19995c11":ne.value,df7092c2:ie.value,"2265086c":re.value})));const I=l(),E=u(),F=m();delete o.county_list;const{isLoginFn:D}=B();D();const ie=c("10%"),re=c("90%"),ne=c("10px"),de=()=>{let e=10;""!=ue.form.age&&""!=ue.form.cnName&&""!=ue.form.sex&&(e+=50),""!=ue.form.city&&(e+=20),ue.tabShow>=10&&(e+=20),re.value=100-e+"%",ie.value=`${e}%`,100==e&&(ne.value="0")},ue=p({form:{cnName:"",sex:"",age:"",city:"",province:""},show:{},addrShow:!1,tabSize:[],tabShow:0,errShow:{}}),me=({selectedOptions:e})=>{ue.addrShow=!1,ue.form.province=e[0].text,ue.form.city=e[1].text,de()},ce=c(!1),pe=()=>{ce.value=!ce.value},ve=c(!1),be=()=>{let e=setInterval((function(){document.documentElement.scrollTop-=10,document.documentElement.scrollTop<=0&&clearInterval(e)}),5)},fe=async()=>{if(!ce.value)return L("请阅读并同意用户条款"),!1;if(""==ue.form.cnName||""==ue.form.age||""==ue.form.sex)return L("请填写完善您的个人信息"),be(),!1;if(""==ue.form.city)return L("请选择您的地址"),be(),!1;let a=F.query.channel,l={...ue.form,channel:a||I.channel,id:O.get("userId")};console.log(l);if(1==(await e("/api/user/updateUserInfo",l)).status){let a="/api/user/match/getAllMatching",l={appType:3,type:7,userId:O.get("userId")},o=await e(a,l);if(console.log(o),o.data&&o.data.length>0)return void E.push({path:"/result",query:{ids:o.data[0].conditionId}});E.push({path:"/goods"})}E.push({path:"/goods"})},he=()=>{document.activeElement.blur()};return ue.tabSize=$.map((e=>(ue.form[e.title]="",ue.show[e.title]="",ue.errShow[e.title]=e.error,e.title))),console.log(ue),(e,l)=>{const n=N,d=s,u=i,m=y,c=r,p=q,I=T,E=A,F=a,O=V;return v(),b("div",H,[f("header",J,[f("div",M,"当前进度"+h(ie.value),1),P]),f("section",R,[X,g(m,{"input-align":"right"},{default:w((()=>[g(n,{"input-align":"right",label:"姓名",modelValue:ue.form.cnName,"onUpdate:modelValue":l[0]||(l[0]=e=>ue.form.cnName=e),onChange:de,placeholder:"请输入真实姓名"},null,8,["modelValue"]),g(n,{"input-align":"right",label:"年龄",modelValue:ue.form.age,"onUpdate:modelValue":l[1]||(l[1]=e=>ue.form.age=e),onChange:de,type:"digit",placeholder:"请输入年龄"},null,8,["modelValue"]),g(n,{"input-align":"right",name:"radio",label:"性别"},{input:w((()=>[g(u,{modelValue:ue.form.sex,"onUpdate:modelValue":l[2]||(l[2]=e=>ue.form.sex=e),onChange:de,direction:"horizontal"},{default:w((()=>[g(d,{name:"1"},{default:w((()=>[j("男")])),_:1}),g(d,{name:"2"},{default:w((()=>[j("女")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})]),f("section",G,[g(m,null,{default:w((()=>[f("div",K,[g(n,{"label-align":"left","input-align":"right",modelValue:ue.form.city,"onUpdate:modelValue":l[3]||(l[3]=e=>ue.form.city=e),name:"area",label:"地区选择",placeholder:"点击选择省市区",onClick:l[4]||(l[4]=e=>ue.addrShow=!0),onFocus:he},null,8,["modelValue"])]),g(p,{show:ue.addrShow,"onUpdate:show":l[6]||(l[6]=e=>ue.addrShow=e),position:"bottom"},{default:w((()=>[g(c,{"area-list":S(o),onConfirm:me,onCancel:l[5]||(l[5]=e=>ue.addrShow=!1)},null,8,["area-list"])])),_:1},8,["show"])])),_:1}),Q]),f("section",W,[Y,g(m,{"input-align":"right"},{default:w((()=>[g(E,{modelValue:ue.tabSize,"onUpdate:modelValue":l[7]||(l[7]=e=>ue.tabSize=e),class:"select-box"},{default:w((()=>[(v(!0),b(_,null,k(S($),((e,a)=>(v(),b("div",{key:e.name},[z(f("div",null,[g(I,{name:e.title},{title:w((()=>[f("h3",Z,[j(h(e.name)+" ",1),f("span",ee,h(ue.show[e.title]),1)])])),default:w((()=>[f("div",null,[g(u,{class:"radio-box",onChange:de,modelValue:ue.form[e.title],"onUpdate:modelValue":a=>ue.form[e.title]=a,direction:"horizontal"},{default:w((()=>[(v(!0),b(_,null,k(e.data,(l=>(v(),U(d,{onClick:o=>{((e,a,l)=>{ue.tabShow=l+1,ue.show[e]=a,console.log(ue.tabSize),console.log(e),console.log(ue.tabSize.indexOf(e)),ue.tabSize.splice(ue.tabSize.indexOf(e),1)})(e.title,l.label,a)},name:l.value},{default:w((()=>[j(h(l.label),1)])),_:2},1032,["onClick","name"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])),_:2},1032,["name"])],512),[[C,ue.tabShow>=a]])])))),128))])),_:1},8,["modelValue"])])),_:1})]),f("footer",ae,[ue.tabShow>=10?(v(),b("div",le,[oe,f("div",te,[g(F,{class:"checked",modelValue:ce.value,"onUpdate:modelValue":l[8]||(l[8]=e=>ce.value=e),size:"large"},null,8,["modelValue"]),f("span",{onClick:pe},"我已阅读同意"),f("span",{class:"pact",onClick:l[9]||(l[9]=e=>{ve.value=!0})},"《贷款知情确认书》")]),f("div",{btn:"",class:"next-btn",onClick:fe},"下 一 步")])):x("",!0)]),g(O,{show:ve.value,"onUpdate:show":l[10]||(l[10]=e=>ve.value=e),title:"",showCancelButton:!1},{default:w((()=>[f("div",se,[g(t)])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-b8b240a8"]]);export{ie as default};
