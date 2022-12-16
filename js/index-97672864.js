import{_ as a,d as s,r as e,e as l,o as t,f as d,w as c,u as p,g as o,c as f,n as i,t as r,v as n,h as m,T as u,i as v,j as h,k as g,l as y,m as b,q as k,b as _,s as x,x as w,y as C,z as E,p as j,a as U}from"../default/default-e0c1c96e.js";import{a as V,p as A}from"./js.cookie-dfddfb0d.js";var T=a(s({__name:"message",props:{type:{type:String,default:"success"},msg:{type:String,default:"this is default message"},timer:{type:Number,default:3e3}},setup(a){const s=a;let v=e(!0),h=()=>{v.value=!1},g=e(!1);return l((()=>{g.value=!0;let a=null;a=setTimeout((()=>{g.value=!1,clearTimeout(a),a=null}),s.timer)})),(s,e)=>(t(),d(u,{name:"message",onAfterLeave:p(h)},{default:c((()=>[p(v)?o((t(),f("p",{key:0,class:i([{error:"error"===a.type,success:"success"==a.type},"message"])},r(a.msg),3)),[[n,p(g)]]):m("v-if",!0)])),_:1},8,["onAfterLeave"]))}}),[["__scopeId","data-v-6a3ed72e"],["__file","E:/other/work/work/work/src/cart/message/message.vue"]]);const z=a=>(j("data-v-37dfd6fc"),a=a(),U(),a),I={class:""},L={class:"login-pages common-pages"},S={class:"z10"},q=z((()=>_("h1",{class:"title"},null,-1))),N={class:"form-box"},O=z((()=>_("h3",{class:"login-title"},"登录",-1))),B={class:"form-list"},D=z((()=>_("span",{class:"form-title"},"姓名",-1))),F={class:"form-list"},G=z((()=>_("span",{class:"form-title"},"手机",-1))),H={class:"form-list"},J=z((()=>_("span",{class:"form-title"},"员工号",-1))),K={class:"cloud"},M={class:"layer layer-pact"},P=E('<div class="scroll-box" data-v-37dfd6fc><h3 class="title" data-v-37dfd6fc>2023泛捷国际集团迎新活动活动规则</h3><p class="p1" data-v-37dfd6fc>2023已经悄悄到来，在这辞旧迎新之际，泛捷国际集团提前预祝大家新年快乐。 欢迎大家参与2023泛捷国际集团迎新活动，赢取丰厚奖品。</p><p class="p1" data-v-37dfd6fc>本活动是由泛捷国际集团主办的活动，具体活动规则及玩法以活动⻚面展示为准。参与本活动前，请详细阅读活动规则及相关条款，参与本活动即视为您已阅读并同意本活动规则，理解并愿意接受本活动规则及相关条款的全部内容。</p><h3 class="h1" data-v-37dfd6fc>一、迎新活动活动规则</h3><h3 class="h2" data-v-37dfd6fc>一)规则概述</h3><p class="p2" data-v-37dfd6fc>1. 活动时间:【2023】年【1】月【6】日。</p><p class="p2" data-v-37dfd6fc>2. 参与对象:泛捷国际集团全体员工。</p><p class="p2" data-v-37dfd6fc>3. 活动入口:您可通过扫【活动入口】二维码进入活动⻚面参与活动。</p><p class="p2" data-v-37dfd6fc>4. 本活动采用实名登记，非本集团员工不得参与本次活动。如经核查发现活动非本人参与，主办方有权利取消其活动资格、获奖资格等。</p><br data-v-37dfd6fc><h3 class="h2" data-v-37dfd6fc>(二)活动玩法</h3><p class="p3" data-v-37dfd6fc>1.本次活动采用双线任务制，完成【心有千千“捷”】任务即可有机会解锁抽奖机会，完成【泛捷最强大脑】并排名前5的员工将获得特殊奖品。</p><p class="p3" data-v-37dfd6fc>2.抽奖采用可视化奖池机制，各等级奖品数量有限，抽完即止。</p><br data-v-37dfd6fc><h3 class="h2" data-v-37dfd6fc>(三)奖励说明</h3><p class="p3" data-v-37dfd6fc>1. 上海地区员工请与【2023】年【1】月【12】日-【1】月【13】日【 中午12:00-13:00】前往【宝矿大厦9楼行政处】，凭活动中奖⻚面兑换奖品奖励。</p><p class="p3" data-v-37dfd6fc>2. 外地地区员工请与【2023】年【1】月【13】日【 中午12:00】前在OA系统中上传【中奖截图】，填写收件信息并成功提交后方视为领奖成功。 特别提示:请谨慎填写收件信息，仅有一次填写机会，提交后不可二次更改。</p><p class="p3" data-v-37dfd6fc>3. 奖品不支持退换货，按以上方式成功领取并签收奖品后视为领奖成功。具体快递时间根据快递区域、快递期间天气、快递期间具体安检 政策、收件人签收情况等⻓短不一，均不保证具体送达时间。</p></div>',1),Q={class:"layer-footer"},R={class:"pact-check"},W={class:"common-checkbox"},X=z((()=>_("span",{class:"label"},null,-1)));var Y=a(s({__name:"index",setup(a){g();const s=y();b();let l=e(!0),d=e(!1);const c=()=>{if(!d.value)return(a=>{let s={...a},e=document.createElement("div"),l=v(T,s);h(l,e),null!==e.firstElementChild&&document.body.appendChild(e.firstElementChild)})({type:"error",msg:"请先浏览并同意活动规则"}),!1;l.value=!1,V.set("pact","true",{expires:1})},p=k({msg:"",type:!1}),i=k({name:"",mobile:"",id:""});return V.get("token")&&s.push({path:"/"}),V.get("pact")&&(l.value=!1),(a,s)=>(t(),f("div",I,[_("div",L,[_("div",S,[q,_("div",N,[O,_("div",B,[D,o(_("input",{class:"input",type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>i.name=a),placeholder:""},null,512),[[x,i.name]])]),_("div",F,[G,o(_("input",{class:"input",type:"text",maxlength:"11","onUpdate:modelValue":s[1]||(s[1]=a=>i.mobile=a),placeholder:""},null,512),[[x,i.mobile]])]),_("div",H,[J,o(_("input",{class:"input",type:"text","onUpdate:modelValue":s[2]||(s[2]=a=>i.id=a),placeholder:""},null,512),[[x,i.id]]),o(_("p",{class:"error"},"*"+r(p.msg),513),[[n,p.type]])]),_("div",{class:"form-btn",type:"submit",onClick:s[3]||(s[3]=a=>""==i.name?(p.type=!0,p.msg="请输入姓名",!1):A(i.mobile)?""==i.id?(p.type=!0,p.msg="请输入员工号",!1):void(p.type=!1):(p.msg="请输入正确的手机号",p.type=!0,!1))},"登录")])])]),o(_("div",K,null,512),[[n,l.value]]),o(_("div",M,[P,_("footer",Q,[_("div",{class:"common-btn",onClick:c},"我知道了"),_("div",R,[_("label",W,[o(_("input",{"onUpdate:modelValue":s[4]||(s[4]=a=>d.value=a),type:"checkbox",class:"input"},null,512),[[w,d.value]]),X]),C("我已阅读了相关信息 ")])])],512),[[n,l.value]])]))}}),[["__scopeId","data-v-37dfd6fc"],["__file","E:/other/work/work/work/src/views/login/index.vue"]]);export{Y as default};
