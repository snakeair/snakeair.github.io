import{$ as l,a as e}from"./axios-bc9cb07d.js";/* empty css              *//* empty css              *//* empty css              */import{E as a}from"./el-checkbox-c4a29697.js";import{i as s,u as o,p as n}from"./index.esm-9ce20964.js";/* empty css              */import{f as t,j as u,h as i,r as c,B as d,C as r,E as v,o as b,a as m,d as p,c as h,z as y,l as j,y as f,u as g,n as x,x as I,A as w,F as k,G as V,D as U,k as _,q as C,t as F,H as z,I as P,J as T,p as L,b as E,K as q,L as $,P as S,M as N,_ as A}from"../default/default-1c397e08.js";import{a as B}from"./js.cookie-d59fc71c.js";import{i as M}from"./isLogin-a20d58e7.js";const R=""+new URL("../assets/new-img-10-32d4ab9b.png",import.meta.url).href,D={education:[{label:"小学",value:0},{label:"初中",value:1},{label:"高中",value:2},{label:"中专",value:3},{label:"大专",value:4},{label:"本科及以上",value:5},{label:"博士研究生",value:6}],job:[{label:"上班",value:0},{label:"企业主",value:1},{label:"个体户",value:2},{label:"自由职业",value:3},{label:"事业单位/公务员",value:4}],salaryPay:[{label:"银行代发",value:0},{label:"现金发放",value:1},{label:"转账工资",value:2}],loanFor:[{label:"日常消费",value:0},{label:"医疗借款",value:1},{label:"装修借款",value:2},{label:"购车",value:3},{label:"购房",value:4},{label:"结婚借款",value:5},{label:"旅游借款",value:6}],loanTime:[{label:"3个月",value:0},{label:"6个月",value:1},{label:"12个月",value:2},{label:"24个月",value:3},{label:"36个月",value:4},{label:"60个月",value:4}],overdue:[{label:"信用卡或贷款存在当前逾期",value:0},{label:"1年内有逾期",value:1},{label:"1年内无逾期",value:2},{label:"信用良好无逾期",value:3}],creditCard:[{label:"无",value:0},{label:"3千-5千",value:1},{label:"5千-1万",value:2},{label:"1万-2万",value:3},{label:"2万-3万",value:4},{label:"3万以上",value:5}],shebao:[{label:"无",value:0},{label:"未满六个月",value:1},{label:"六个月以上",value:2}],gongjijin:[{label:"无",value:0},{label:"六个月以下",value:1},{label:"六月到十二月",value:2},{label:"十二月以上",value:3}],house:[{label:"无",value:0},{label:"按揭房",value:1},{label:"全款房不接受抵押",value:2},{label:"全款房接受抵押",value:3}],vehicle:[{label:"无",value:0},{label:"按揭车",value:1},{label:"全款车不接受抵押",value:2},{label:"全款车接受抵押",value:3}],insurance:[{label:"无",value:0},{label:"缴纳未满1年",value:1},{label:"缴纳1年以上",value:2}],zhima:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],jdbaitiao:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],huabei:[{label:"无花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}]},G={house:"请选择",gongjijin:"请选择",vehicle:"请选择",shebao:"请选择",salaryPay:"请选择",insurance:"请选择",overdue:"请选择",education:"请选择",job:"请选择",loanFor:"请选择",loanTime:"请选择",creditCard:"请选择",zhima:"请选择",amount:"请选择",monthlyIncome:"",jdbaitiao:"请选择",huabei:"请选择"},H={house:"请选择房产信息",gongjijin:"请选择本地公积金信息",vehicle:"请选择车辆信息",shebao:"请选择社保信息",salaryPay:"请选择工资发放形式",insurance:"请选择保单信息",overdue:"请选择信用情况",education:"请选择教育程度",job:"请选择职业",loanFor:"请选择贷款用途",loanTime:"请选择贷款期限",creditCard:"请选择信用卡",zhima:"请选择芝麻信用",jdbaitiao:"请选择白条信息",huabei:"请选择花呗信息",amount:"请选择申请金额",monthlyIncome:"请输入您的大概月收入"},J=l=>(L("data-v-5046a3e6"),l=l(),E(),l),K={class:"question-pages"},O={class:"floor-1 floor"},Q=J((()=>p("h3",{class:"floor-title",id:"top"},[_("填写"),p("em",{class:"red"},"真实信息"),_("，已有"),p("em",{class:"red"},"56.3"),_("万人成功下款")],-1))),W={class:"floor-1 floor"},X=J((()=>p("h3",{class:"floor-title"},[_("完善"),p("em",{class:"red"},"相关信息"),_("，通过率提升"),p("em",{class:"red"},"85%")],-1))),Y={class:"select-box"},Z={class:"select-title",id:"zhima"},ll={class:"select-list"},el=["value","onInput"],al={class:"label"},sl={class:"select-title",id:"huabei"},ol={class:"select-list"},nl=["value","onInput"],tl={class:"label"},ul={class:"select-title",id:"jdbaitiao"},il={class:"select-list"},cl=["value","onInput"],dl={class:"label"},rl={class:"select-title",id:"creditCard"},vl={class:"select-list"},bl=["value","onInput"],ml={class:"label"},pl={class:"select-title",id:"gongjijin"},hl={class:"select-list"},yl=["value","onInput"],jl={class:"label"},fl={class:"select-title",id:"loanFor"},gl={class:"select-list"},xl=["value","onInput"],Il={class:"label"},wl={class:"select-title",id:"loanTime"},kl={class:"select-list"},Vl=["value","onInput"],Ul={class:"label"},_l={class:"select-title",id:"overdue"},Cl={class:"select-list"},Fl=["value","onInput"],zl={class:"label"},Pl={class:"floor-1 floor"},Tl=J((()=>p("h3",{class:"floor-title"},[_("请填写"),p("em",{class:"red"},"真实资产"),_("有助于快速下款")],-1))),Ll={class:"select-box"},El={class:"select-title",id:"house"},ql={class:"select-list"},$l=["value","onInput"],Sl={class:"label"},Nl={class:"select-title",id:"vehicle"},Al={class:"select-list"},Bl=["value","onInput"],Ml={class:"label"},Rl={class:"select-title",id:"shebao"},Dl={class:"select-list"},Gl=["value","onInput"],Hl={class:"label"},Jl={class:"select-title",id:"insurance"},Kl={class:"select-list"},Ol=["value","onInput"],Ql={class:"label"},Wl={class:"floor-1 floor"},Xl=J((()=>p("h3",{class:"floor-title"},[_("恭喜您已经完成"),p("em",{class:"red"},"95%"),_("的认证步骤")],-1))),Yl={class:"select-box"},Zl={class:"select-title",id:"amount"},le={class:"select-list"},ee={class:"select-title",id:"education"},ae={class:"select-list"},se=["value","onInput"],oe={class:"label"},ne={class:"select-title",id:"job"},te={class:"select-list"},ue=["value","onInput"],ie={class:"label"},ce={class:"select-title",id:"monthlyIncome"},de={class:"select-list"},re={class:"select-title",id:"salaryPay"},ve={class:"select-list"},be=["value","onInput"],me={class:"label"},pe={class:"footer"},he=J((()=>p("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),ye={class:"check-box"},je={class:"cloud"},fe={class:"layer layer-stop"},ge={class:"show-main"},xe=w('<div class="img-box" data-v-5046a3e6><img src="'+R+'" alt="" data-v-5046a3e6></div><h3 class="title" data-v-5046a3e6>极速下载</h3><p class="info" data-v-5046a3e6>根据您当前的资料信息预估可借</p><p class="num" data-v-5046a3e6>1万额度</p>',4),Ie={class:"iframe-show"},we={key:0,class:"layer-out"},ke=J((()=>p("header",{class:"layer-header"},[p("div",null,[p("h3",{class:"one-title"},"恭喜您的资质已经匹配成功"),p("h3",{class:"two-title"},"即将为您跳转到好会推平台")])],-1))),Ve=J((()=>p("p",{class:"info one"},"立即提交前，您已同意并知晓跳转到好会推平台；确认提交后，即代表您已经同意进入好会推平台至为您提供贷款咨询服务的机构。",-1))),Ue=A(t({__name:"index",setup(t){const{isLoginFn:w}=M();w();const L=u(),E=i(),A=s(),R=c(!1),J=c(!1),Ue=c(""),_e=c(""),Ce=o(),Fe=({selectedOptions:l})=>{J.value=!1,Ue.value=l.map((l=>l.text)).join(","),++Be.value},ze=c(""),Pe=c(""),Te=c(G),Le=c(H),Ee=d({house:"",gongjijin:"",vehicle:"",shebao:"",salaryPay:"",insurance:"",overdue:"",education:"",job:"",loanFor:"",loanTime:"",creditCard:"",zhima:"",amount:"",monthlyIncome:"",mobile:"",name:"",idNumber:"",city:"",jdbaitiao:"",huabei:""}),qe=c(["1","2","3","5","6","7","8","9"]),$e=c(["1","2","3","4"]),Se=c(["1","2","3","4","6"]),Ne=c(!1),Ae=()=>{Ne.value=!Ne.value},Be=c(0),Me=(l,e,a)=>{Ge.value="",Te.value[l]=e,console.log(qe.value),qe.value.splice(qe.value.findIndex((l=>l==`${a}`)),1)},Re=(l,e,a)=>{Ge.value="",Te.value[l]=e,console.log($e.value),$e.value.splice($e.value.findIndex((l=>l==`${a}`)),1)},De=(l,e,a)=>{Ge.value="",Te.value[l]=e,console.log(Se.value),Se.value.splice(Se.value.findIndex((l=>l==`${a}`)),1)},Ge=c(""),He=()=>{if(""==ze.value)return We("请输入您的姓名"),void la("top");if(""===Pe.value)return We("请输入身份证号码"),void la("top");if(""===Ue.value)return We("请选择地址"),void la("top");Je(["zhima","huabei","jdbaitiao","creditCard","gongjijin","loanFor","loanTime","overdue","house","vehicle","shebao","insurance","amount","education","job","monthlyIncome","salaryPay"])&&Oe()},Je=l=>{try{return l.forEach((l=>{if(""===Ee[l])throw new Error(l)})),!0}catch(e){la(e.message);let l=Le.value[e.message];return Ge.value=e.message,We(l),!1}},Ke=c(""),Oe=async()=>{if(!Ne.value)return We("请阅读并同意用户条款"),!1;let e=L.query.channel,[a,s,o]=Ue.value.split(","),n={...Ee,cnName:ze.value,idNumber:Pe.value,mobile:B.get("mobile"),channel:e||A.channel,province:a,city:s,area:o,age:"",Sex:1,id:B.get("userId")};console.log(n);if(1==(await l("/api/user/updateUserInfo",n)).status){let e="/api/user/match/getAllMatching",a={appType:3,type:7,userId:B.get("userId")},s=await l(e,a);if(console.log(s),s.data&&s.data.length>0)return void E.push({path:"/result",query:{ids:s.data[0].conditionId}});E.push({path:"/goods"})}E.push({path:"/goods"})},Qe=()=>{window.location.href=Ke.value},We=l=>{e({type:"error",msg:l})},Xe=c(!1),Ye=()=>{Xe.value=!Xe.value},Ze=c(!1),la=l=>{document.querySelector(`#${l}`).scrollIntoView({block:"center"})},ea=()=>{E.push({path:"/down"}),window.removeEventListener("popstate",Ye,!1)};r((()=>{window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",Ye,!1))})),v((()=>{window.removeEventListener("popstate",Ye,!1)}));const aa=c(D);return(l,e)=>{const s=q,o=$,t=S,u=k,i=N,c=V,d=a,r=U;return b(),m("div",K,[p("section",O,[Q,h(u,null,{default:y((()=>[h(s,{label:"真实姓名",modelValue:g(ze),"onUpdate:modelValue":e[0]||(e[0]=l=>x(ze)?ze.value=l:null),placeholder:"请输入真实姓名"},null,8,["modelValue"]),h(s,{label:"身份证",modelValue:g(Pe),"onUpdate:modelValue":e[1]||(e[1]=l=>x(Pe)?Pe.value=l:null),placeholder:"请输入身份证号码"},null,8,["modelValue"]),h(s,{modelValue:g(Ue),"onUpdate:modelValue":e[2]||(e[2]=l=>x(Ue)?Ue.value=l:null),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:e[3]||(e[3]=l=>J.value=!0)},null,8,["modelValue"]),h(t,{show:g(J),"onUpdate:show":e[6]||(e[6]=l=>x(J)?J.value=l:null),round:"",position:"bottom"},{default:y((()=>[h(o,{modelValue:g(_e),"onUpdate:modelValue":e[4]||(e[4]=l=>x(_e)?_e.value=l:null),title:"请选择所在地区",options:g(Ce),onClose:e[5]||(e[5]=l=>J.value=!1),onFinish:Fe},null,8,["modelValue","options"])])),_:1},8,["show"])])),_:1})]),j(p("section",W,[X,p("div",Y,[h(c,{modelValue:g(qe),"onUpdate:modelValue":e[15]||(e[15]=l=>x(qe)?qe.value=l:null)},{default:y((()=>[h(i,{name:"1"},{title:y((()=>[p("h3",Z,[_("芝麻分 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).zhima},{error:"zhima"==g(Ge)}]])},F(g(Te).zhima),3)])])),default:y((()=>[p("div",ll,[(b(!0),m(z,null,P(g(aa).zhima,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[7]||(e[7]=l=>g(Ee).zhima=l),type:"radio",class:"input",name:"zhima",value:l.value,onInput:e=>Me("zhima",l.label,1)},null,40,el),[[T,g(Ee).zhima]]),p("span",al,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"8"},{title:y((()=>[p("h3",sl,[_("花呗 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).huabei},{error:"huabei"==g(Ge)}]])},F(g(Te).huabei),3)])])),default:y((()=>[p("div",ol,[(b(!0),m(z,null,P(g(aa).huabei,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[8]||(e[8]=l=>g(Ee).huabei=l),type:"radio",class:"input",name:"huabei",value:l.value,onInput:e=>Me("huabei",l.label,8)},null,40,nl),[[T,g(Ee).huabei]]),p("span",tl,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"9"},{title:y((()=>[p("h3",ul,[_("白条 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).jdbaitiao},{error:"jdbaitiao"==g(Ge)}]])},F(g(Te).jdbaitiao),3)])])),default:y((()=>[p("div",il,[(b(!0),m(z,null,P(g(aa).jdbaitiao,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>g(Ee).jdbaitiao=l),type:"radio",class:"input",name:"jdbaitiao",value:l.value,onInput:e=>Me("jdbaitiao",l.label,9)},null,40,cl),[[T,g(Ee).jdbaitiao]]),p("span",dl,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"2"},{title:y((()=>[p("h3",rl,[_("信用卡 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).creditCard},{error:"creditCard"==g(Ge)}]])},F(g(Te).creditCard),3)])])),default:y((()=>[p("div",vl,[(b(!0),m(z,null,P(g(aa).creditCard,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[10]||(e[10]=l=>g(Ee).creditCard=l),type:"radio",class:"input",name:"creditCard",value:l.value,onInput:e=>Me("creditCard",l.label,2)},null,40,bl),[[T,g(Ee).creditCard]]),p("span",ml,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"3"},{title:y((()=>[p("h3",pl,[_("公积金 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).gongjijin},{error:"gongjijin"==g(Ge)}]])},F(g(Te).gongjijin),3)])])),default:y((()=>[p("div",hl,[(b(!0),m(z,null,P(g(aa).gongjijin,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[11]||(e[11]=l=>g(Ee).gongjijin=l),type:"radio",class:"input",name:"gongjijin",value:l.value,onInput:e=>Me("gongjijin",l.label,3)},null,40,yl),[[T,g(Ee).gongjijin]]),p("span",jl,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"5"},{title:y((()=>[p("h3",fl,[_("贷款用途 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).loanFor},{error:"loanFor"==g(Ge)}]])},F(g(Te).loanFor),3)])])),default:y((()=>[p("div",gl,[(b(!0),m(z,null,P(g(aa).loanFor,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[12]||(e[12]=l=>g(Ee).loanFor=l),type:"radio",class:"input",name:"loanFor",value:l.value,onInput:e=>Me("loanFor",l.label,5)},null,40,xl),[[T,g(Ee).loanFor]]),p("span",Il,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"6"},{title:y((()=>[p("h3",wl,[_("贷款期限 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).loanTime},{error:"loanTime"==g(Ge)}]])},F(g(Te).loanTime),3)])])),default:y((()=>[p("div",kl,[(b(!0),m(z,null,P(g(aa).loanTime,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[13]||(e[13]=l=>g(Ee).loanTime=l),type:"radio",class:"input",name:"loanTime",value:l.value,onInput:e=>Me("loanTime",l.label,6)},null,40,Vl),[[T,g(Ee).loanTime]]),p("span",Ul,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"7"},{title:y((()=>[p("h3",_l,[_("信用情况 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).overdue},{error:"overdue"==g(Ge)}]])},F(g(Te).overdue),3)])])),default:y((()=>[p("div",Cl,[(b(!0),m(z,null,P(g(aa).overdue,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[14]||(e[14]=l=>g(Ee).overdue=l),type:"radio",class:"input",name:"overdue",value:l.value,onInput:e=>{var a;a=l.label,++Be.value,Te.value.overdue=a,Ge.value="",qe.value.splice(qe.value.length-1,1)}},null,40,Fl),[[T,g(Ee).overdue]]),p("span",zl,F(l.label),1)])))),128))])])),_:1})])),_:1},8,["modelValue"])])],512),[[f,g(Be)>0]]),j(p("section",Pl,[Tl,p("div",Ll,[h(c,{modelValue:g($e),"onUpdate:modelValue":e[20]||(e[20]=l=>x($e)?$e.value=l:null)},{default:y((()=>[h(i,{name:"1"},{title:y((()=>[p("h3",El,[_("房产情况 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).house},{error:"house"==g(Ge)}]])},F(g(Te).house),3)])])),default:y((()=>[p("div",ql,[(b(!0),m(z,null,P(g(aa).house,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[16]||(e[16]=l=>g(Ee).house=l),type:"radio",class:"input",name:"house",value:l.value,onInput:e=>Re("house",l.label,1)},null,40,$l),[[T,g(Ee).house]]),p("span",Sl,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"2"},{title:y((()=>[p("h3",Nl,[_("车辆情况 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).vehicle},{error:"vehicle"==g(Ge)}]])},F(g(Te).vehicle),3)])])),default:y((()=>[p("div",Al,[(b(!0),m(z,null,P(g(aa).vehicle,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[17]||(e[17]=l=>g(Ee).vehicle=l),type:"radio",class:"input",name:"vehicle",value:l.value,onInput:e=>Re("vehicle",l.label,2)},null,40,Bl),[[T,g(Ee).vehicle]]),p("span",Ml,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"3"},{title:y((()=>[p("h3",Rl,[_("社保缴纳 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).shebao},{error:"shebao"==g(Ge)}]])},F(g(Te).shebao),3)])])),default:y((()=>[p("div",Dl,[(b(!0),m(z,null,P(g(aa).shebao,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[18]||(e[18]=l=>g(Ee).shebao=l),type:"radio",class:"input",name:"shebao",value:l.value,onInput:e=>Re("shebao",l.label,3)},null,40,Gl),[[T,g(Ee).shebao]]),p("span",Hl,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"4"},{title:y((()=>[p("h3",Jl,[_("保险保单 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).insurance},{error:"insurance"==g(Ge)}]])},F(g(Te).insurance),3)])])),default:y((()=>[p("div",Kl,[(b(!0),m(z,null,P(g(aa).insurance,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[19]||(e[19]=l=>g(Ee).insurance=l),type:"radio",class:"input",name:"insurance",value:l.value,onInput:e=>{return a=l.label,Te.value.insurance=a,++Be.value,Ge.value="",void $e.value.splice($e.value.length-1,1);var a}},null,40,Ol),[[T,g(Ee).insurance]]),p("span",Ql,F(l.label),1)])))),128))])])),_:1})])),_:1},8,["modelValue"])])],512),[[f,g(Be)>1]]),j(p("section",Wl,[Xl,p("div",Yl,[h(c,{modelValue:g(Se),"onUpdate:modelValue":e[28]||(e[28]=l=>x(Se)?Se.value=l:null)},{default:y((()=>[h(i,{name:"1"},{title:y((()=>[p("h3",Zl,[_("申请金额"),p("span",{class:C(["holder",[{show:"请填写申请金额"!==g(Ee).amount},{error:"amount"==g(Ge)}]])},F(g(Ee).amount),3)])])),default:y((()=>[p("div",le,[h(s,{modelValue:g(Ee).amount,"onUpdate:modelValue":e[21]||(e[21]=l=>g(Ee).amount=l),onFocus:e[22]||(e[22]=l=>Ge.value=""),label:"申请金额",placeholder:"您想申请的金额（元）"},null,8,["modelValue"])])])),_:1}),h(i,{name:"6"},{title:y((()=>[p("h3",ee,[_("教育程度 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).education},{error:"education"==g(Ge)}]])},F(g(Te).education),3)])])),default:y((()=>[p("div",ae,[(b(!0),m(z,null,P(g(aa).education,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[23]||(e[23]=l=>g(Ee).education=l),type:"radio",class:"input",name:"education",value:l.value,onInput:e=>De("education",l.label,6)},null,40,se),[[T,g(Ee).education]]),p("span",oe,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"2"},{title:y((()=>[p("h3",ne,[_("职业 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).job},{error:"job"==g(Ge)}]])},F(g(Te).job),3)])])),default:y((()=>[p("div",te,[(b(!0),m(z,null,P(g(aa).job,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[24]||(e[24]=l=>g(Ee).job=l),type:"radio",class:"input",name:"job",value:l.value,onInput:e=>De("job",l.label,2)},null,40,ue),[[T,g(Ee).job]]),p("span",ie,F(l.label),1)])))),128))])])),_:1}),h(i,{name:"3"},{title:y((()=>[p("h3",ce,[_("月收入（元） "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).monthlyIncome},{error:"monthlyIncome"==g(Ge)}]])},F(""==g(Ee).monthlyIncome?"您大概的月收入":g(Ee).monthlyIncome),3)])])),default:y((()=>[p("div",de,[h(s,{modelValue:g(Ee).monthlyIncome,"onUpdate:modelValue":e[25]||(e[25]=l=>g(Ee).monthlyIncome=l),onFocus:e[26]||(e[26]=l=>Ge.value=""),label:"月收入",placeholder:"您大概的月收入（元）"},null,8,["modelValue"])])])),_:1}),h(i,{name:"4"},{title:y((()=>[p("h3",re,[_("工资发放形式 "),p("span",{class:C(["holder",[{show:"请选择"!==g(Te).salaryPay},{error:"salaryPay"==g(Ge)}]])},F(g(Te).salaryPay),3)])])),default:y((()=>[p("div",ve,[(b(!0),m(z,null,P(g(aa).salaryPay,((l,a)=>(b(),m("label",{class:"common-checkbox-txt",key:a},[j(p("input",{"onUpdate:modelValue":e[27]||(e[27]=l=>g(Ee).salaryPay=l),type:"radio",class:"input",name:"salaryPay",value:l.value,onInput:e=>De("salaryPay",l.label,4)},null,40,be),[[T,g(Ee).salaryPay]]),p("span",me,F(l.label),1)])))),128))])])),_:1})])),_:1},8,["modelValue"])])],512),[[f,g(Be)>2]]),p("footer",pe,[he,p("div",ye,[h(d,{class:"checked",modelValue:g(Ne),"onUpdate:modelValue":e[29]||(e[29]=l=>x(Ne)?Ne.value=l:null),size:"large"},null,8,["modelValue"]),p("span",{onClick:Ae},"我已阅读同意"),p("span",{class:"pact",onClick:e[30]||(e[30]=l=>{R.value=!0})},"《贷款知情确认书》")]),p("div",{btn:"",class:"next-btn",onClick:He},"下 一 步")]),j(p("div",je,null,512),[[f,g(Xe)||g(Ze)]]),j(p("div",fe,[p("section",ge,[xe,p("div",{class:"down-btn",onClick:ea},"立即前往提现"),p("p",{class:"stop",onClick:e[31]||(e[31]=l=>{Xe.value=!1})},"继续填写资料申请(高额)")])],512),[[f,g(Xe)]]),h(r,{show:g(R),"onUpdate:show":e[32]||(e[32]=l=>x(R)?R.value=l:null),title:"",showCancelButton:!1},{default:y((()=>[p("div",Ie,[h(n)])])),_:1},8,["show"]),g(Ze)?(b(),m("div",we,[p("div",{class:"box"},[ke,Ve,p("footer",{class:"layer-footer"},[p("div",{class:"footer-btn",onClick:Qe},"确认提交")])])])):I("",!0)])}}}),[["__scopeId","data-v-5046a3e6"]]);export{Ue as default};
