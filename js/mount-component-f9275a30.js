import{av as o,b as t,L as e,Z as n}from"../default/default-dc4c2df8.js";function s(){const o=t({show:!1}),s=t=>{o.show=t},a=t=>{n(o,t,{transitionAppear:!0}),s(!0)},u=()=>s(!1);return e({open:a,close:u,toggle:s}),{open:a,close:u,state:o,toggle:s}}function a(t){const e=o(t),n=document.createElement("div");return document.body.appendChild(n),{instance:e.mount(n),unmount(){e.unmount(),document.body.removeChild(n)}}}export{a as m,s as u};