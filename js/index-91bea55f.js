import{r as e,_ as t,d as n,i as o,a,o as r,c as s,b as i,w as l,e as c,v as u,f as d,t as p,u as m,p as f,g as v,h as g,j as b}from"../default/default-c7e8e363.js";
/*! js-cookie v3.0.1 | MIT */
function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}var x=function e(t,n){function o(e,o,a){if("undefined"!=typeof document){"number"==typeof(a=h({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var s in a)a[s]&&(r+="; "+s,!0!==a[s]&&(r+="="+a[s].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+r}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},a=0;a<n.length;a++){var r=n[a].split("="),s=r.slice(1).join("=");try{var i=decodeURIComponent(r[0]);if(o[i]=t.read(s,i),e===i)break}catch(l){}}return e?o[e]:o}},remove:function(e,t){o(e,"",h({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,h({},this.attributes,t))},withConverter:function(t){return e(h({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const y=e=>(f("data-v-07ee3f18"),e=e(),v(),e),C={class:"reg-pages"},U={class:"z10"},I=y((()=>i("h1",{class:"title"},null,-1))),w={class:"form-box"},k={class:"form-list"},j={class:"form-list"},R={class:"form-list"},F=y((()=>i("a",{href:"/src/assets/images/20213870747788.png",download:"pic.png"},"img",-1))),_=y((()=>i("br",null,null,-1)));var B=t(n({__name:"index",setup(t){e(10).value++,g();const n=b();o();const{code:f,codeFn:v}=function(t,n=0,o=1e3){const a=e(t);return{code:a,codeFn:()=>{let e=setInterval((()=>{a.value>n?a.value--:(a.value=t,clearInterval(e))}),o)}}}(10),h=a({msg:"",type:!1}),y=a({name:"",mobile:"",id:""});return x.get("token")&&n.push({path:"/"}),(e,t)=>(r(),s("div",null,[i("div",C,[i("div",U,[I,i("div",w,[i("form",{name:"login",id:"login-form",onSubmit:t[4]||(t[4]=l((()=>{}),["prevent"]))},[i("div",k,[c(i("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>y.name=e),placeholder:"请输入您的姓名"},null,512),[[u,y.name]])]),i("div",j,[c(i("input",{class:"input",type:"text",maxlength:"11","onUpdate:modelValue":t[1]||(t[1]=e=>y.mobile=e),placeholder:"请输入您的联系电话"},null,512),[[u,y.mobile]])]),i("div",R,[c(i("input",{class:"input",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>y.id=e),placeholder:"请输入您的员工号"},null,512),[[u,y.id]]),c(i("p",{class:"error"},p(h.msg),513),[[d,h.type]])]),i("button",{class:"form-btn",type:"submit",onClick:t[3]||(t[3]=e=>{return""==y.name?(h.type=!0,h.msg="请输入姓名",!1):(t=y.mobile,/^(1[3|4|5|6|7|8|9])[\d]{9}$/g.test(t)?""==y.id?(h.type=!0,h.msg="请输入员工号",!1):void(h.type=!1):(h.msg="请输入正确的手机号",h.type=!0,!1));var t})},"登录")],32)])]),i("div",null,p(m(f)),1),i("div",{onClick:t[5]||(t[5]=(...e)=>m(v)&&m(v)(...e))},"btn"),F,_])]))}}),[["__scopeId","data-v-07ee3f18"]]);export{B as default};