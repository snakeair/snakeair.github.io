import{a as e,n as t,$ as n}from"../default/default-0208bd60.js";function s(){const s=e();return{isLoginFn:()=>{let e=t.get("userId");e&&""!=e||s.push({path:"/"})},getLoginInfoFn:()=>{n("/api/user/selectUserInfo",{}).then((e=>{}))}}}export{s as i};
