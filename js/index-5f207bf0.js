import{_ as a,d as s,r as e,a as t,b as l,o as d,c as o,e as c,w as i,f,v as r,g as m,t as n,h as p,i as v,j as u,F as g,l as b,p as h,m as w}from"../default/default-30a082ea.js";import{_,a as k}from"./img-06-f477b5c3.js";import{_ as x,a as y}from"./img-088-e6f31b4d.js";import{p as j}from"./util-e1d6830d.js";const C=(a=>(h("data-v-37dfd6fc"),a=a(),w(),a))((()=>c("div",{class:"black-bg"},[c("img",{src:_,class:"bg",alt:""})],-1))),I={class:"reg-pages"},U={class:"z10"},V=b('<h1 class="title" data-v-37dfd6fc><img class="logo" src="'+k+'" alt="" data-v-37dfd6fc></h1><div class="banner" data-v-37dfd6fc><h3 class="money" data-v-37dfd6fc><em class="icon" data-v-37dfd6fc>￥</em>200,000</h3><p class="info" data-v-37dfd6fc>年化利率7.2%-24% <em data-v-37dfd6fc>/</em> 循环额度 <em data-v-37dfd6fc>/</em> 次日可还</p></div>',2),z={class:"form-box"},E={class:"form-list"},F={class:"form-list form-code"},S={class:"wait-code"},q={class:"pact"},A={class:"img",src:x,alt:""},B={class:"img",src:y,alt:""},D=b('<footer class="footer" data-v-37dfd6fc><p class="footer-p" data-v-37dfd6fc>贷款有风险，借款需谨慎</p><p class="footer-p" data-v-37dfd6fc>综合年化利率7.2%-24%（单利），具体以审批为准</p><p class="footer-p" data-v-37dfd6fc>请根据个人能力合理贷款</p><p class="footer-p" data-v-37dfd6fc>贷款额度、实际年化利率以放款机构审批结果为准</p></footer>',1);var G=a(s({__name:"index",setup(a){const s=e({code:"",mobile:""}),b=t(!1),h=e({timer:60,show:!0}),w=e({msg:"",type:!1});let _="请输入正确的手机号码";const k=()=>{if(!j(s.mobile))return w.type=!0,w.msg=_,!1;w.type=!1,h.show=!1,setInterval((()=>{1===h.timer?(h.timer=60,h.show=!0):h.timer--}),1e3)},x=()=>{b.value=!b.value};return(a,e)=>{const t=l("router-link");return d(),o(g,null,[C,c("div",I,[c("div",U,[V,c("div",z,[c("form",{name:"login",id:"login-form",onSubmit:e[3]||(e[3]=i((()=>{}),["prevent"]))},[c("div",E,[f(c("input",{class:"input",type:"text",maxlength:"11","onUpdate:modelValue":e[0]||(e[0]=a=>s.mobile=a),placeholder:"请输入您的联系电话"},null,512),[[r,s.mobile]])]),c("div",F,[f(c("input",{class:"input code",type:"text",maxlength:"11","onUpdate:modelValue":e[1]||(e[1]=a=>s.code=a),placeholder:"请输入短信验证码"},null,512),[[r,s.code]]),f(c("div",{btn:"",class:"get-code-btn",onClick:k},"获取验证码",512),[[m,h.show]]),f(c("div",S,[c("em",null,n(h.timer)+"s",1),p(" 后重新获取")],512),[[m,!h.show]]),f(c("p",{class:"error"},n(w.msg),513),[[m,w.type]])]),c("button",{class:"form-btn",type:"submit",onClick:e[2]||(e[2]=a=>(()=>{if(!j(s.mobile))return w.type=!0,w.msg=_,!1})())},"登录")],32),c("div",q,[c("span",{class:"checkbox",onClick:x},[f(c("img",A,null,512),[[m,!b.value]]),f(c("img",B,null,512),[[m,b.value]])]),p(" 我已阅读并同意"),v(t,{to:"/"},{default:u((()=>[p("《趣融分期注册协议》")])),_:1})])]),D])])],64)}}}),[["__scopeId","data-v-37dfd6fc"],["__file","E:/other/work/work/work/src/views/login/index.vue"]]);export{G as default};