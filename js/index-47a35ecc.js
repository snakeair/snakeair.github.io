import{$ as l,a as e}from"./axios-eab5ca38.js";/* empty css              *//* empty css              *//* empty css              */import{E as a}from"./el-checkbox-86af0708.js";import{i as s,u as o,p as n}from"./index.esm-6754e37a.js";/* empty css              */import{_ as t}from"./new-img-10-a0029fcd.js";import{d as u,a as i,u as c,r as d,y as r,b as v,e as b,f as m,g as p,p as h,i as y,m as f,j,k as g,l as x,q as I,z as k,A as V,D as w,h as _,n as U,t as C,F,B as z,E as P,s as T,x as q,G as $,H as E,P as D,I as N,_ as A}from"../default/default-15d123b2.js";import{a as B}from"./js.cookie-d59fc71c.js";import{i as L}from"./isLogin-ecd1d128.js";const S={education:[{label:"小学",value:0},{label:"初中",value:1},{label:"高中",value:2},{label:"中专",value:3},{label:"大专",value:4},{label:"本科及以上",value:5},{label:"博士研究生",value:6}],job:[{label:"上班",value:0},{label:"企业主",value:1},{label:"个体户",value:2},{label:"自由职业",value:3},{label:"事业单位/公务员",value:4}],salaryPay:[{label:"银行代发",value:0},{label:"现金发放",value:1},{label:"转账工资",value:2}],loanFor:[{label:"日常消费",value:0},{label:"医疗借款",value:1},{label:"装修借款",value:2},{label:"购车",value:3},{label:"购房",value:4},{label:"结婚借款",value:5},{label:"旅游借款",value:6}],loanTime:[{label:"3个月",value:0},{label:"6个月",value:1},{label:"12个月",value:2},{label:"24个月",value:3},{label:"36个月",value:4},{label:"60个月",value:4}],overdue:[{label:"信用卡或贷款存在当前逾期",value:0},{label:"1年内有逾期",value:1},{label:"1年内无逾期",value:2},{label:"信用良好无逾期",value:3}],creditCard:[{label:"无",value:0},{label:"3千-5千",value:1},{label:"5千-1万",value:2},{label:"1万-2万",value:3},{label:"2万-3万",value:4},{label:"3万以上",value:5}],shebao:[{label:"无",value:0},{label:"未满六个月",value:1},{label:"六个月以上",value:2}],gongjijin:[{label:"无",value:0},{label:"六个月以下",value:1},{label:"六月到十二月",value:2},{label:"十二月以上",value:3}],house:[{label:"无",value:0},{label:"按揭房",value:1},{label:"全款房不接受抵押",value:2},{label:"全款房接受抵押",value:3}],vehicle:[{label:"无",value:0},{label:"按揭车",value:1},{label:"全款车不接受抵押",value:2},{label:"全款车接受抵押",value:3}],insurance:[{label:"无",value:0},{label:"缴纳未满1年",value:1},{label:"缴纳1年以上",value:2}],zhima:[{label:"无",value:0},{label:"600分以下",value:1},{label:"600-650分",value:2},{label:"650-700分",value:3},{label:"700分以上",value:4}],jdbaitiao:[{label:"无京东白条",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}],huabei:[{label:"无花呗",value:0},{label:"5000以下",value:1},{label:"5000以上",value:2}]},G={house:"请选择",gongjijin:"请选择",vehicle:"请选择",shebao:"请选择",salaryPay:"请选择",insurance:"请选择",overdue:"请选择",education:"请选择",job:"请选择",loanFor:"请选择",loanTime:"请选择",creditCard:"请选择",zhima:"请选择",amount:"请选择",monthlyIncome:"",jdbaitiao:"请选择",huabei:"请选择"},H={house:"请选择房产信息",gongjijin:"请选择本地公积金信息",vehicle:"请选择车辆信息",shebao:"请选择社保信息",salaryPay:"请选择工资发放形式",insurance:"请选择保单信息",overdue:"请选择信用情况",education:"请选择教育程度",job:"请选择职业",loanFor:"请选择贷款用途",loanTime:"请选择贷款期限",creditCard:"请选择信用卡",zhima:"请选择芝麻信用",jdbaitiao:"请选择白条信息",huabei:"请选择花呗信息",amount:"请选择申请金额",monthlyIncome:"请输入您的大概月收入"},M=l=>(T("data-v-fb28d069"),l=l(),q(),l),O={class:"question-pages"},J={class:"floor-1 floor"},K=M((()=>m("h3",{class:"floor-title",id:"top"},[_("填写"),m("em",{class:"red"},"真实信息"),_("，已有"),m("em",{class:"red"},"56.3"),_("万人成功下款")],-1))),Q={class:"floor-1 floor"},R=M((()=>m("h3",{class:"floor-title"},[_("完善"),m("em",{class:"red"},"相关信息"),_("，通过率提升"),m("em",{class:"red"},"85%")],-1))),W={class:"select-box"},X={class:"select-title",id:"zhima"},Y={class:"select-list"},Z=["value","onInput"],ll={class:"label"},el={class:"select-title",id:"huabei"},al={class:"select-list"},sl=["value","onInput"],ol={class:"label"},nl={class:"select-title",id:"jdbaitiao"},tl={class:"select-list"},ul=["value","onInput"],il={class:"label"},cl={class:"select-title",id:"creditCard"},dl={class:"select-list"},rl=["value","onInput"],vl={class:"label"},bl={class:"select-title",id:"gongjijin"},ml={class:"select-list"},pl=["value","onInput"],hl={class:"label"},yl={class:"select-title",id:"loanFor"},fl={class:"select-list"},jl=["value","onInput"],gl={class:"label"},xl={class:"select-title",id:"loanTime"},Il={class:"select-list"},kl=["value","onInput"],Vl={class:"label"},wl={class:"select-title",id:"overdue"},_l={class:"select-list"},Ul=["value","onInput"],Cl={class:"label"},Fl={class:"floor-1 floor"},zl=M((()=>m("h3",{class:"floor-title"},[_("请填写"),m("em",{class:"red"},"真实资产"),_("有助于快速下款")],-1))),Pl={class:"select-box"},Tl={class:"select-title",id:"house"},ql={class:"select-list"},$l=["value","onInput"],El={class:"label"},Dl={class:"select-title",id:"vehicle"},Nl={class:"select-list"},Al=["value","onInput"],Bl={class:"label"},Ll={class:"select-title",id:"shebao"},Sl={class:"select-list"},Gl=["value","onInput"],Hl={class:"label"},Ml={class:"select-title",id:"insurance"},Ol={class:"select-list"},Jl=["value","onInput"],Kl={class:"label"},Ql={class:"floor-1 floor"},Rl=M((()=>m("h3",{class:"floor-title"},[_("恭喜您已经完成"),m("em",{class:"red"},"95%"),_("的认证步骤")],-1))),Wl={class:"select-box"},Xl={class:"select-title",id:"amount"},Yl={class:"select-list"},Zl={class:"select-title",id:"education"},le={class:"select-list"},ee=["value","onInput"],ae={class:"label"},se={class:"select-title",id:"job"},oe={class:"select-list"},ne=["value","onInput"],te={class:"label"},ue={class:"select-title",id:"monthlyIncome"},ie={class:"select-list"},ce={class:"select-title",id:"salaryPay"},de={class:"select-list"},re=["value","onInput"],ve={class:"label"},be={class:"footer"},me=M((()=>m("p",{class:"info"},"国家级数据加密，仅用于贷款审核",-1))),pe={class:"check-box"},he={class:"cloud"},ye={class:"layer layer-stop"},fe={class:"show-main"},je=I('<div class="img-box" data-v-fb28d069><img src="'+t+'" alt="" data-v-fb28d069></div><h3 class="title" data-v-fb28d069>极速下载</h3><p class="info" data-v-fb28d069>根据您当前的资料信息预估可借</p><p class="num" data-v-fb28d069>1万额度</p>',4),ge={class:"iframe-show"},xe={key:0,class:"layer-out"},Ie=M((()=>m("header",{class:"layer-header"},[m("div",null,[m("h3",{class:"one-title"},"恭喜您的资质已经匹配成功"),m("h3",{class:"two-title"},"即将为您跳转到好会推平台")])],-1))),ke=M((()=>m("p",{class:"info one"},"立即提交前，您已同意并知晓跳转到好会推平台；确认提交后，即代表您已经同意进入好会推平台至为您提供贷款咨询服务的机构。",-1))),Ve=A(u({__name:"index",setup(t){const{isLoginFn:u}=L();u();const I=i(),T=c(),q=s(),A=d(!1),M=d(!1),Ve=d(""),we=d(""),_e=o(),Ue=({selectedOptions:l})=>{M.value=!1,Ve.value=l.map((l=>l.text)).join(","),++Ae.value},Ce=d(""),Fe=d(""),ze=d(G),Pe=d(H),Te=r({house:"",gongjijin:"",vehicle:"",shebao:"",salaryPay:"",insurance:"",overdue:"",education:"",job:"",loanFor:"",loanTime:"",creditCard:"",zhima:"",amount:"",monthlyIncome:"",mobile:"",name:"",idNumber:"",city:"",jdbaitiao:"",huabei:""}),qe=d(["1","2","3","5","6","7","8","9"]),$e=d(["1","2","3","4"]),Ee=d(["1","2","3","4","6"]),De=d(!1),Ne=()=>{De.value=!De.value},Ae=d(0),Be=(l,e,a)=>{Ge.value="",ze.value[l]=e,console.log(qe.value),qe.value.splice(qe.value.findIndex((l=>l==`${a}`)),1)},Le=(l,e,a)=>{Ge.value="",ze.value[l]=e,console.log($e.value),$e.value.splice($e.value.findIndex((l=>l==`${a}`)),1)},Se=(l,e,a)=>{Ge.value="",ze.value[l]=e,console.log(Ee.value),Ee.value.splice(Ee.value.findIndex((l=>l==`${a}`)),1)},Ge=d(""),He=()=>{if(""==Ce.value)return Qe("请输入您的姓名"),void Xe("top");if(""===Fe.value)return Qe("请输入身份证号码"),void Xe("top");if(""===Ve.value)return Qe("请选择地址"),void Xe("top");Me(["zhima","huabei","jdbaitiao","creditCard","gongjijin","loanFor","loanTime","overdue","house","vehicle","shebao","insurance","amount","education","job","monthlyIncome","salaryPay"])&&Je()},Me=l=>{try{return l.forEach((l=>{if(""===Te[l])throw new Error(l)})),!0}catch(e){Xe(e.message);let l=Pe.value[e.message];return Ge.value=e.message,Qe(l),!1}},Oe=d(""),Je=async()=>{if(!De.value)return Qe("请阅读并同意用户条款"),!1;let e=I.query.channel,[a,s,o]=Ve.value.split(","),n={...Te,cnName:Ce.value,idNumber:Fe.value,mobile:B.get("mobile"),channel:e||q.channel,province:a,city:s,area:o,age:"",Sex:1,id:B.get("userId")};console.log(n);if(1==(await l("/api/user/updateUserInfo",n)).status){let e="/api/user/match/getAllMatching",a={appType:3,type:7,userId:B.get("userId")},s=await l(e,a);if(console.log(s),s.data&&s.data.length>0)return void T.push({path:"/result",query:{ids:s.data[0].conditionId}});T.push({path:"/goods"})}T.push({path:"/goods"})},Ke=()=>{window.location.href=Oe.value},Qe=l=>{e({type:"error",msg:l})},Re=d(!1),We=d(!1),Xe=l=>{document.querySelector(`#${l}`).scrollIntoView({behavior:"smooth",block:"center"})},Ye=d(S);return(l,e)=>{const s=$,o=E,t=D,u=k,i=N,c=V,d=a,r=w;return v(),b("div",O,[m("section",J,[K,p(u,null,{default:h((()=>[p(s,{label:"真实姓名",modelValue:j(Ce),"onUpdate:modelValue":e[0]||(e[0]=l=>g(Ce)?Ce.value=l:null),placeholder:"请输入真实姓名"},null,8,["modelValue"]),p(s,{label:"身份证",modelValue:j(Fe),"onUpdate:modelValue":e[1]||(e[1]=l=>g(Fe)?Fe.value=l:null),placeholder:"请输入身份证号码"},null,8,["modelValue"]),p(s,{modelValue:j(Ve),"onUpdate:modelValue":e[2]||(e[2]=l=>g(Ve)?Ve.value=l:null),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:e[3]||(e[3]=l=>M.value=!0)},null,8,["modelValue"]),p(t,{show:j(M),"onUpdate:show":e[6]||(e[6]=l=>g(M)?M.value=l:null),round:"",position:"bottom"},{default:h((()=>[p(o,{modelValue:j(we),"onUpdate:modelValue":e[4]||(e[4]=l=>g(we)?we.value=l:null),title:"请选择所在地区",options:j(_e),onClose:e[5]||(e[5]=l=>M.value=!1),onFinish:Ue},null,8,["modelValue","options"])])),_:1},8,["show"])])),_:1})]),y(m("section",Q,[R,m("div",W,[p(c,{modelValue:j(qe),"onUpdate:modelValue":e[15]||(e[15]=l=>g(qe)?qe.value=l:null)},{default:h((()=>[p(i,{name:"1"},{title:h((()=>[m("h3",X,[_("芝麻分 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).zhima},{error:"zhima"==j(Ge)}]])},C(j(ze).zhima),3)])])),default:h((()=>[m("div",Y,[(v(!0),b(F,null,z(j(Ye).zhima,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[7]||(e[7]=l=>j(Te).zhima=l),type:"radio",class:"input",name:"zhima",value:l.value,onInput:e=>Be("zhima",l.label,1)},null,40,Z),[[P,j(Te).zhima]]),m("span",ll,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"8"},{title:h((()=>[m("h3",el,[_("花呗 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).huabei},{error:"huabei"==j(Ge)}]])},C(j(ze).huabei),3)])])),default:h((()=>[m("div",al,[(v(!0),b(F,null,z(j(Ye).huabei,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[8]||(e[8]=l=>j(Te).huabei=l),type:"radio",class:"input",name:"huabei",value:l.value,onInput:e=>Be("huabei",l.label,8)},null,40,sl),[[P,j(Te).huabei]]),m("span",ol,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"9"},{title:h((()=>[m("h3",nl,[_("白条 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).jdbaitiao},{error:"jdbaitiao"==j(Ge)}]])},C(j(ze).jdbaitiao),3)])])),default:h((()=>[m("div",tl,[(v(!0),b(F,null,z(j(Ye).jdbaitiao,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>j(Te).jdbaitiao=l),type:"radio",class:"input",name:"jdbaitiao",value:l.value,onInput:e=>Be("jdbaitiao",l.label,9)},null,40,ul),[[P,j(Te).jdbaitiao]]),m("span",il,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"2"},{title:h((()=>[m("h3",cl,[_("信用卡 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).creditCard},{error:"creditCard"==j(Ge)}]])},C(j(ze).creditCard),3)])])),default:h((()=>[m("div",dl,[(v(!0),b(F,null,z(j(Ye).creditCard,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[10]||(e[10]=l=>j(Te).creditCard=l),type:"radio",class:"input",name:"creditCard",value:l.value,onInput:e=>Be("creditCard",l.label,2)},null,40,rl),[[P,j(Te).creditCard]]),m("span",vl,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"3"},{title:h((()=>[m("h3",bl,[_("公积金 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).gongjijin},{error:"gongjijin"==j(Ge)}]])},C(j(ze).gongjijin),3)])])),default:h((()=>[m("div",ml,[(v(!0),b(F,null,z(j(Ye).gongjijin,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[11]||(e[11]=l=>j(Te).gongjijin=l),type:"radio",class:"input",name:"gongjijin",value:l.value,onInput:e=>Be("gongjijin",l.label,3)},null,40,pl),[[P,j(Te).gongjijin]]),m("span",hl,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"5"},{title:h((()=>[m("h3",yl,[_("贷款用途 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).loanFor},{error:"loanFor"==j(Ge)}]])},C(j(ze).loanFor),3)])])),default:h((()=>[m("div",fl,[(v(!0),b(F,null,z(j(Ye).loanFor,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[12]||(e[12]=l=>j(Te).loanFor=l),type:"radio",class:"input",name:"loanFor",value:l.value,onInput:e=>Be("loanFor",l.label,5)},null,40,jl),[[P,j(Te).loanFor]]),m("span",gl,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"6"},{title:h((()=>[m("h3",xl,[_("贷款期限 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).loanTime},{error:"loanTime"==j(Ge)}]])},C(j(ze).loanTime),3)])])),default:h((()=>[m("div",Il,[(v(!0),b(F,null,z(j(Ye).loanTime,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[13]||(e[13]=l=>j(Te).loanTime=l),type:"radio",class:"input",name:"loanTime",value:l.value,onInput:e=>Be("loanTime",l.label,6)},null,40,kl),[[P,j(Te).loanTime]]),m("span",Vl,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"7"},{title:h((()=>[m("h3",wl,[_("信用情况 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).overdue},{error:"overdue"==j(Ge)}]])},C(j(ze).overdue),3)])])),default:h((()=>[m("div",_l,[(v(!0),b(F,null,z(j(Ye).overdue,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[14]||(e[14]=l=>j(Te).overdue=l),type:"radio",class:"input",name:"overdue",value:l.value,onInput:e=>{var a;a=l.label,++Ae.value,ze.value.overdue=a,Ge.value="",qe.value.splice(qe.value.length-1,1)}},null,40,Ul),[[P,j(Te).overdue]]),m("span",Cl,C(l.label),1)])))),128))])])),_:1})])),_:1},8,["modelValue"])])],512),[[f,j(Ae)>0]]),y(m("section",Fl,[zl,m("div",Pl,[p(c,{modelValue:j($e),"onUpdate:modelValue":e[20]||(e[20]=l=>g($e)?$e.value=l:null)},{default:h((()=>[p(i,{name:"1"},{title:h((()=>[m("h3",Tl,[_("房产情况 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).house},{error:"house"==j(Ge)}]])},C(j(ze).house),3)])])),default:h((()=>[m("div",ql,[(v(!0),b(F,null,z(j(Ye).house,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[16]||(e[16]=l=>j(Te).house=l),type:"radio",class:"input",name:"house",value:l.value,onInput:e=>Le("house",l.label,1)},null,40,$l),[[P,j(Te).house]]),m("span",El,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"2"},{title:h((()=>[m("h3",Dl,[_("车辆情况 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).vehicle},{error:"vehicle"==j(Ge)}]])},C(j(ze).vehicle),3)])])),default:h((()=>[m("div",Nl,[(v(!0),b(F,null,z(j(Ye).vehicle,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[17]||(e[17]=l=>j(Te).vehicle=l),type:"radio",class:"input",name:"vehicle",value:l.value,onInput:e=>Le("vehicle",l.label,2)},null,40,Al),[[P,j(Te).vehicle]]),m("span",Bl,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"3"},{title:h((()=>[m("h3",Ll,[_("社保缴纳 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).shebao},{error:"shebao"==j(Ge)}]])},C(j(ze).shebao),3)])])),default:h((()=>[m("div",Sl,[(v(!0),b(F,null,z(j(Ye).shebao,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[18]||(e[18]=l=>j(Te).shebao=l),type:"radio",class:"input",name:"shebao",value:l.value,onInput:e=>Le("shebao",l.label,3)},null,40,Gl),[[P,j(Te).shebao]]),m("span",Hl,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"4"},{title:h((()=>[m("h3",Ml,[_("保险保单 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).insurance},{error:"insurance"==j(Ge)}]])},C(j(ze).insurance),3)])])),default:h((()=>[m("div",Ol,[(v(!0),b(F,null,z(j(Ye).insurance,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[19]||(e[19]=l=>j(Te).insurance=l),type:"radio",class:"input",name:"insurance",value:l.value,onInput:e=>{return a=l.label,ze.value.insurance=a,++Ae.value,Ge.value="",void $e.value.splice($e.value.length-1,1);var a}},null,40,Jl),[[P,j(Te).insurance]]),m("span",Kl,C(l.label),1)])))),128))])])),_:1})])),_:1},8,["modelValue"])])],512),[[f,j(Ae)>1]]),y(m("section",Ql,[Rl,m("div",Wl,[p(c,{modelValue:j(Ee),"onUpdate:modelValue":e[28]||(e[28]=l=>g(Ee)?Ee.value=l:null)},{default:h((()=>[p(i,{name:"1"},{title:h((()=>[m("h3",Xl,[_("申请金额"),m("span",{class:U(["holder",[{show:"请填写申请金额"!==j(Te).amount},{error:"amount"==j(Ge)}]])},C(j(Te).amount),3)])])),default:h((()=>[m("div",Yl,[p(s,{modelValue:j(Te).amount,"onUpdate:modelValue":e[21]||(e[21]=l=>j(Te).amount=l),onFocus:e[22]||(e[22]=l=>Ge.value=""),label:"申请金额",placeholder:"您想申请的金额（元）"},null,8,["modelValue"])])])),_:1}),p(i,{name:"6"},{title:h((()=>[m("h3",Zl,[_("教育程度 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).education},{error:"education"==j(Ge)}]])},C(j(ze).education),3)])])),default:h((()=>[m("div",le,[(v(!0),b(F,null,z(j(Ye).education,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[23]||(e[23]=l=>j(Te).education=l),type:"radio",class:"input",name:"education",value:l.value,onInput:e=>Se("education",l.label,6)},null,40,ee),[[P,j(Te).education]]),m("span",ae,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"2"},{title:h((()=>[m("h3",se,[_("职业 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).job},{error:"job"==j(Ge)}]])},C(j(ze).job),3)])])),default:h((()=>[m("div",oe,[(v(!0),b(F,null,z(j(Ye).job,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[24]||(e[24]=l=>j(Te).job=l),type:"radio",class:"input",name:"job",value:l.value,onInput:e=>Se("job",l.label,2)},null,40,ne),[[P,j(Te).job]]),m("span",te,C(l.label),1)])))),128))])])),_:1}),p(i,{name:"3"},{title:h((()=>[m("h3",ue,[_("月收入（元） "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).monthlyIncome},{error:"monthlyIncome"==j(Ge)}]])},C(""==j(Te).monthlyIncome?"您大概的月收入":j(Te).monthlyIncome),3)])])),default:h((()=>[m("div",ie,[p(s,{modelValue:j(Te).monthlyIncome,"onUpdate:modelValue":e[25]||(e[25]=l=>j(Te).monthlyIncome=l),onFocus:e[26]||(e[26]=l=>Ge.value=""),label:"月收入",placeholder:"您大概的月收入（元）"},null,8,["modelValue"])])])),_:1}),p(i,{name:"4"},{title:h((()=>[m("h3",ce,[_("工资发放形式 "),m("span",{class:U(["holder",[{show:"请选择"!==j(ze).salaryPay},{error:"salaryPay"==j(Ge)}]])},C(j(ze).salaryPay),3)])])),default:h((()=>[m("div",de,[(v(!0),b(F,null,z(j(Ye).salaryPay,((l,a)=>(v(),b("label",{class:"common-checkbox-txt",key:a},[y(m("input",{"onUpdate:modelValue":e[27]||(e[27]=l=>j(Te).salaryPay=l),type:"radio",class:"input",name:"salaryPay",value:l.value,onInput:e=>Se("salaryPay",l.label,4)},null,40,re),[[P,j(Te).salaryPay]]),m("span",ve,C(l.label),1)])))),128))])])),_:1})])),_:1},8,["modelValue"])])],512),[[f,j(Ae)>2]]),m("footer",be,[me,m("div",pe,[p(d,{class:"checked",modelValue:j(De),"onUpdate:modelValue":e[29]||(e[29]=l=>g(De)?De.value=l:null),size:"large"},null,8,["modelValue"]),m("span",{onClick:Ne},"我已阅读同意"),m("span",{class:"pact",onClick:e[30]||(e[30]=l=>{A.value=!0})},"《贷款知情确认书》")]),m("div",{btn:"",class:"next-btn",onClick:He},"下 一 步")]),y(m("div",he,null,512),[[f,j(Re)||j(We)]]),y(m("div",ye,[m("section",fe,[je,m("div",{class:"down-btn",onClick:e[31]||(e[31]=(...e)=>l.toDownFn&&l.toDownFn(...e))},"立即前往提现"),m("p",{class:"stop",onClick:e[32]||(e[32]=l=>{Re.value=!1})},"继续填写资料申请(高额)")])],512),[[f,j(Re)]]),p(r,{show:j(A),"onUpdate:show":e[33]||(e[33]=l=>g(A)?A.value=l:null),title:"",showCancelButton:!1},{default:h((()=>[m("div",ge,[p(n)])])),_:1},8,["show"]),j(We)?(v(),b("div",xe,[m("div",{class:"box"},[Ie,ke,m("footer",{class:"layer-footer"},[m("div",{class:"footer-btn",onClick:Ke},"确认提交")])])])):x("",!0)])}}}),[["__scopeId","data-v-fb28d069"]]);export{Ve as default};
