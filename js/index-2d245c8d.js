import{_ as e,d as t,u as a,q as s,s as i,a as l,x as o,r,c as n,e as c,w as d,f as p,v as m,g as u,t as f,h as v,l as g,p as h,$ as y,y as b,z as x,A as k,o as w}from"../default/default-a67c6826.js";import{_}from"./img-06-c327b133.js";const q={class:"reg-pages"},C={class:"z10"},I=g('<h1 class="title" data-v-37dfd6fc><img class="logo" src="'+_+'" alt="" data-v-37dfd6fc></h1><div class="banner" data-v-37dfd6fc><h3 class="money" data-v-37dfd6fc><em class="icon" data-v-37dfd6fc>￥</em>200,000</h3><p class="info" data-v-37dfd6fc>年化利率7.2%-24% <em data-v-37dfd6fc>/</em> 循环额度 <em data-v-37dfd6fc>/</em> 次日可还</p></div>',2),O={class:"form-box"},T={class:"form-list"},V={class:"form-list form-code"},A={class:"wait-code"};var D=e(t({__name:"index",setup(e){const t=a(),g=s(),_=i(),D=l(null),M=e=>{D.value.click(),window.openTocamera()},j=e=>{};o((()=>{var e=navigator.userAgent.toLowerCase(),t=-1!=e.indexOf("iphone")||-1!=e.indexOf("ipad");if(e.indexOf("mqqbrowser")>-1&&e.indexOf(" qq")<0||t){var a=document.querySelector("#file");a&&a.removeAttribute("capture")}}));const z=r({msg:"",type:!1}),S=r({code:"",mobile:""}),U=r({timer:60,show:!0});let $="请输入正确的手机号码";const E=()=>{if(!h(S.mobile))return z.type=!0,z.msg=$,!1;z.type=!1;let e=`/api.php/core/tool/getcode?client=h5&package=pc&ver=v1.1&Mobile=${S.mobile}&type=3`;y(e,{}).then((e=>{U.show=!1,setInterval((()=>{1===U.timer?(U.timer=60,U.show=!0):U.timer--}),1e3)}))},L=l({Time:"",Val:"",ID:""}),R=()=>{y("/api.php/core/tool/timestamp?client=pc&package=h5&ver=v1.1",{}).then((e=>{1==e.result&&(L.value=e.data,B())}))},B=()=>{let e={ticksid:L.value.ID,client:"h5",package:"pc",ver:"v1.1",ticks:L.value.Val,mobile:S.mobile,code:S.code,loginType:1};y("/api.php/center/member/login",e).then((e=>{1==e.result?(x.set("token",e.data.Token,{expires:.04}),x.set("id",e.data.ID,{expires:.04}),x.set("info",e.data.is_info,{expires:.04}),G(),g.push({path:"/address"})):k({type:"error",msg:e.message})}))},F=l(!1);(()=>{let e=t.query.source,a={puser:e||_.puser};b("/api.php/center/register/channel",a).then((e=>{}))})();const G=()=>{x.get("token")&&g.push({path:"/"})};return G(),(e,a)=>(w(),n("div",null,[c("div",q,[c("div",C,[I,c("div",O,[c("form",{name:"login",id:"login-form",onSubmit:a[3]||(a[3]=d((()=>{}),["prevent"]))},[c("div",T,[p(c("input",{class:"input",type:"text",maxlength:"11","onUpdate:modelValue":a[0]||(a[0]=e=>S.mobile=e),placeholder:"请输入您的联系电话"},null,512),[[m,S.mobile]])]),c("div",V,[p(c("input",{class:"input code",type:"text",maxlength:"11","onUpdate:modelValue":a[1]||(a[1]=e=>S.code=e),placeholder:"请输入短信验证码"},null,512),[[m,S.code]]),p(c("div",{btn:"",class:"get-code-btn",onClick:E},"获取验证码",512),[[u,U.show]]),p(c("div",A,[c("em",null,f(U.timer)+"s",1),v(" 后重新获取")],512),[[u,!U.show]]),p(c("p",{class:"error"},f(z.msg),513),[[u,z.type]])]),c("button",{class:"form-btn",type:"submit",onClick:a[2]||(a[2]=e=>(()=>{if(!h(S.mobile))return z.type=!0,z.msg=$,!1;if(z.type=!1,!F.value)return z.type=!0,z.msg="请同意注册协议",!1;z.type=!1;let e=t.query.source,a={Mobile:S.mobile,Code:S.code,puser:e||_.puser,client:"pc"};b("/api.php/center/Register/reg",a).then((e=>{1===e.result||3===e.result?R():(z.type=!0,z.msg=e.message)}))})())},"登录")],32)]),c("section",{class:"file-item add-content",onClick:M},[v(" upimg "),(w(),n("input",{ref_key:"fileInput",ref:D,key:Math.random(),onChange:j,id:"front",type:"file",multiple:"",style:{display:"none"},accept:"image/*"},null,32))])])])]))}}),[["__scopeId","data-v-37dfd6fc"],["__file","E:/other/vue/vitets/src/views/login/index.vue"]]);export{D as default};
