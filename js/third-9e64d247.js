import{$ as e}from"./index-8023e38e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{E as a}from"./el-checkbox-feb29e38.js";import{a as l,p as o}from"./index.esm-a2769b6f.js";/* empty css              */import{R as t,a as i,A as s}from"./index-79c6ae9c.js";/* empty css              */import{d as r,Y as n,u as d,a as u,r as m,A as c,e as p,f as v,g as b,t as f,h,q as g,m as x,B as w,D as y,i as j,k as V,F as S,G as _,j as z,p as k,z as C,x as U,y as I,I as E,P as N,K as q,E as A,_ as F}from"../default/default-eb6300d2.js";import{a as O}from"./js.cookie-d59fc71c.js";import{i as T}from"./index-5755dce8.js";import{i as B}from"./isLogin-07da427d.js";import{s as L}from"./function-call-f50558c8.js";import"./mount-component-a70c2a22.js";const $=[{title:"amount",data:[{label:"0-5万",value:5e4},{label:"5-10万",value:1e5},{label:"10-15万",value:15e4},{label:"15-20万",value:2e5}],error:"请选择借款金额",name:"借款金额",type:"radio"},{title:"jod",data:[{label:"上班",value:0},{label:"企业主",value:1},{label:"个体户",value:2},{label:"自由职业",value:3},{label:"事业单位/公务员",value:4}],error:"请选择职业",name:"职业",type:"radio"},{title:"house",data:[{label:"无",value:0},{label:"按揭房",value:1},{label:"全款房不接受抵押",value:2},{label:"全款房接受抵押",value:3}],error:"请选择房产信息",name:"房产信息",type:"radio"},{title:"vehicle",data:[{label:"无",value:0},{label:"按揭车",value:1},{label:"全款车不接受抵押",value:2},{label:"全款车接受抵押",value:3}],error:"请选择车辆信息",name:"车辆信息",type:"radio"},{title:"shebao",data:[{label:"无",value:0},{label:"未满六个月",value:1},{label:"六个月以上",value:2}],error:"请选择社保",name:"社保",type:"radio"},{title:"gongjijin",data:[{label:"无",value:0},{label:"六个月以下",value:1},{label:"六月到十二月",value:2},{label:"十二月以上",value:3}],error:"请选择公积金缴纳",name:"公积金缴纳",type:"radio"},{title:"insurance",data:[{label:"无",value:0},{label:"缴纳未满1年",value:1},{label:"缴纳1年以上",value:2}],error:"请选择保单信息",name:"保单信息",type:"radio"},{title:"zhima",data:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],error:"请选择芝麻分数",name:"芝麻分数",type:"radio"},{title:"jdbaitiao",data:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择京东白条",name:"京东白条",type:"radio"},{title:"huabei",data:[{label:"无支付宝花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],error:"请选择支付宝花呗",name:"支付宝花呗",type:"radio"}],D=e=>(U("data-v-b8b240a8"),e=e(),I(),e),G={class:"third-page"},K={class:"header-circle"},M={class:"circle-text"},P=D((()=>b("div",{class:"line"},null,-1))),R={class:"floor-1 floor"},Y=D((()=>b("h3",{class:"floor-title",id:"top"},[j(" 完成个人信息，最高获"),b("em",{class:"red"},"20万"),j("额度 "),b("p",null,"仅用于核验身份及保障您的账户安全，资料将被加密保护")],-1))),H={class:"floor-addr floor"},J={class:"addr-input"},Q=D((()=>b("p",{class:"addr-txt"},"请务必选择您当前长期居住的城市，否则将影响借款结果",-1))),W={class:"select-box floor"},X=D((()=>b("h3",{class:"floor-title",id:"top"},[b("em",{class:"red"},"填写最后一步"),j("，通过率提升"),b("em",{class:"red"},"95%")],-1))),Z={class:"select-title",id:"zhima"},ee={class:"holder"},ae={class:"footer"},le={key:0},oe=D((()=>b("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),te={class:"check-box"},ie={class:"iframe-show"},se=F(r({__name:"third",setup(r){n((e=>({"19995c11":ne.value,df7092c2:se.value,"2265086c":re.value})));const U=T(),I=d(),F=u();delete l.county_list;const{isLoginFn:D}=B();D();const se=m("10%"),re=m("90%"),ne=m("10px"),de=()=>{let e=10;""!=ue.form.age&&""!=ue.form.cnName&&""!=ue.form.sex&&(e+=50),""!=ue.form.city&&(e+=20),ue.tabShow>=10&&(e+=20),re.value=100-e+"%",se.value=`${e}%`,100==e&&(ne.value="0")},ue=c({form:{cnName:"",sex:"",age:"",city:"",province:""},show:{},addrShow:!1,tabSize:[],tabShow:0,errShow:{}}),me=({selectedOptions:e})=>{ue.addrShow=!1,ue.form.province=e[0].text,ue.form.city=e[1].text,de()},ce=m(!1),pe=()=>{ce.value=!ce.value},ve=m(!1),be=()=>{let e=setInterval((function(){document.documentElement.scrollTop-=10,document.documentElement.scrollTop<=0&&clearInterval(e)}),5)},fe=async()=>{if(!ce.value)return L("请阅读并同意用户条款"),!1;if(""==ue.form.cnName||""==ue.form.age||""==ue.form.sex)return L("请填写完善您的个人信息"),be(),!1;if(""==ue.form.city)return L("请选择您的地址"),be(),!1;let a=F.query.channel,l={...ue.form,channel:a||U.channel,id:O.get("userId")};console.log(l);if(1==(await e("/api/user/updateUserInfo",l)).status){let a="/api/user/match/getAllMatching",l={appType:3,type:7,userId:O.get("userId")},o=await e(a,l);if(console.log(o),o.data&&o.data.length>0)return void I.push({path:"/result",query:{ids:o.data[0].conditionId}});I.push({path:"/goods"})}I.push({path:"/goods"})},he=()=>{document.activeElement.blur()};return ue.tabSize=$.map((e=>(ue.form[e.title]="",ue.show[e.title]="",ue.errShow[e.title]=e.error,e.title))),console.log(ue),(e,r)=>{const n=E,d=t,u=i,m=w,c=s,U=N,I=q,F=A,O=a,T=y;return p(),v("div",G,[b("header",K,[b("div",M,"当前进度"+f(se.value),1),P]),b("section",R,[Y,h(m,{"input-align":"right"},{default:g((()=>[h(n,{"input-align":"right",label:"姓名",modelValue:ue.form.cnName,"onUpdate:modelValue":r[0]||(r[0]=e=>ue.form.cnName=e),onChange:de,placeholder:"请输入真实姓名"},null,8,["modelValue"]),h(n,{"input-align":"right",label:"年龄",modelValue:ue.form.age,"onUpdate:modelValue":r[1]||(r[1]=e=>ue.form.age=e),onChange:de,type:"digit",placeholder:"请输入年龄"},null,8,["modelValue"]),h(n,{"input-align":"right",name:"radio",label:"性别"},{input:g((()=>[h(u,{modelValue:ue.form.sex,"onUpdate:modelValue":r[2]||(r[2]=e=>ue.form.sex=e),onChange:de,direction:"horizontal"},{default:g((()=>[h(d,{name:"1"},{default:g((()=>[j("男")])),_:1}),h(d,{name:"2"},{default:g((()=>[j("女")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})]),b("section",H,[h(m,null,{default:g((()=>[b("div",J,[h(n,{"label-align":"left","input-align":"right",modelValue:ue.form.city,"onUpdate:modelValue":r[3]||(r[3]=e=>ue.form.city=e),name:"area",label:"地区选择",placeholder:"点击选择省市区",onClick:r[4]||(r[4]=e=>ue.addrShow=!0),onFocus:he},null,8,["modelValue"])]),h(U,{show:ue.addrShow,"onUpdate:show":r[6]||(r[6]=e=>ue.addrShow=e),position:"bottom"},{default:g((()=>[h(c,{"area-list":V(l),onConfirm:me,onCancel:r[5]||(r[5]=e=>ue.addrShow=!1)},null,8,["area-list"])])),_:1},8,["show"])])),_:1}),Q]),b("section",W,[X,h(m,{"input-align":"right"},{default:g((()=>[h(F,{modelValue:ue.tabSize,"onUpdate:modelValue":r[7]||(r[7]=e=>ue.tabSize=e),class:"select-box"},{default:g((()=>[(p(!0),v(S,null,_(V($),((e,a)=>(p(),v("div",{key:e.name},[z(b("div",null,[h(I,{name:e.title},{title:g((()=>[b("h3",Z,[j(f(e.name)+" ",1),b("span",ee,f(ue.show[e.title]),1)])])),default:g((()=>[b("div",null,[h(u,{class:"radio-box",onChange:de,modelValue:ue.form[e.title],"onUpdate:modelValue":a=>ue.form[e.title]=a,direction:"horizontal"},{default:g((()=>[(p(!0),v(S,null,_(e.data,(l=>(p(),C(d,{onClick:o=>{((e,a,l)=>{ue.tabShow=l+1,ue.show[e]=a,console.log(ue.tabSize),console.log(e),console.log(ue.tabSize.indexOf(e)),ue.tabSize.splice(ue.tabSize.indexOf(e),1)})(e.title,l.label,a)},name:l.value},{default:g((()=>[j(f(l.label),1)])),_:2},1032,["onClick","name"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])),_:2},1032,["name"])],512),[[k,ue.tabShow>=a]])])))),128))])),_:1},8,["modelValue"])])),_:1})]),b("footer",ae,[ue.tabShow>=10?(p(),v("div",le,[oe,b("div",te,[h(O,{class:"checked",modelValue:ce.value,"onUpdate:modelValue":r[8]||(r[8]=e=>ce.value=e),size:"large"},null,8,["modelValue"]),b("span",{onClick:pe},"我已阅读同意"),b("span",{class:"pact",onClick:r[9]||(r[9]=e=>{ve.value=!0})},"《贷款知情确认书》")]),b("div",{btn:"",class:"next-btn",onClick:fe},"下 一 步")])):x("",!0)]),h(T,{show:ve.value,"onUpdate:show":r[10]||(r[10]=e=>ve.value=e),title:"",showCancelButton:!1},{default:g((()=>[b("div",ie,[h(o)])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-b8b240a8"]]);export{se as default};
