import{_ as s,f as a,q as l,g as e,o,c,a as i,n as t,p as n,e as u,d as p}from"../default/default-e00d7cc5.js";const d=s=>(n("data-v-b97744fa"),s=s(),u(),s),h={class:"common-pages que-index"},r=d((()=>i("div",{class:"common-logo"},null,-1))),v={class:"show-main"},f=d((()=>i("h3",{class:"show-title"},"泛捷福尔摩斯",-1))),m=d((()=>i("div",{class:"info"},[i("p",null,"谁才是泛捷最聪明的人？"),i("p",{class:"mb10"},"快和小伙伴一起破解谜题赢取终极大奖"),i("p",null,"*总共三题，每回答正确一题将解锁下一题 前5位解出所有谜题的小伙伴将获得终极"),i("p",null,"大奖：电动牙刷套装")],-1))),w={class:"question-list"},k=[d((()=>i("p",{class:"title"},[p("第一题的标题"),i("em",{class:"iconfont icon-dui3"})],-1)))],q=[d((()=>i("p",{class:"title"},[p("第二题的标题"),i("em",{class:"iconfont icon-dui3"})],-1))),d((()=>i("p",{class:"other"},"回答完成第一题后开启",-1)))],_=[d((()=>i("p",{class:"title"},[p("第三题的标题"),i("em",{class:"iconfont icon-dui3"})],-1))),d((()=>i("p",{class:"other"},"回答完成第二题后开启",-1)))];var b=s(a({__name:"index",setup(s){const a=l();let n=e(2);const u=s=>{switch(s){case 1:1==n.value&&a.push({path:"/question/one"});break;case 2:2==n.value&&a.push({path:"/question/two"});break;case 3:3==n.value&&a.push({path:"/question/three"})}};return(s,a)=>(o(),c("div",h,[r,i("section",v,[f,m,i("ul",w,[i("li",{class:t(["li",[1==n.value?"show":"end"]]),onClick:a[0]||(a[0]=s=>u(1))},k,2),i("li",{class:t(["li",{show:2==n.value,end:n.value>3}]),onClick:a[1]||(a[1]=s=>u(2))},q,2),i("li",{class:t(["li",{show:3==n.value,end:n.value>3}]),onClick:a[2]||(a[2]=s=>u(3))},_,2)])])]))}}),[["__scopeId","data-v-b97744fa"],["__file","E:/other/work/work/work/src/views/question/index.vue"]]);export{b as default};
