import{f as o}from"../default/default-d68f298c.js";import{a as s}from"./js.cookie-d59fc71c.js";import{$ as t}from"./axios-e512ad6e.js";function e(){const e=o();return{isLoginFn:()=>{let o=s.get("userId");o&&""!=o||e.push({path:"/"})},getLoginInfoFn:()=>{t("/api/user/selectUserInfo",{}).then((o=>{}))}}}export{e as i};
