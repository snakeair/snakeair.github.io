import{u as e}from"../default/default-41f4bb54.js";import{a as o}from"./js.cookie-d59fc71c.js";import{$ as s}from"./index-afbf3d4c.js";function t(){const t=e();return{isLoginFn:()=>{let e=o.get("userId");e&&""!=e||t.push({path:"/"})},getLoginInfoFn:()=>{s("/api/user/selectUserInfo",{}).then((e=>{}))}}}export{t as i};