import{j as e,r as o,u as k,L as j,O as b}from"./index-DuJxklZ4.js";import{I as y,M as v,c as x}from"./index-CDOVyo4N.js";function w(){return e.jsx("div",{className:"w-full flex justify-center h-56 mt-20 font_juan_footer",children:e.jsx("p",{children:"©2025 SrJuan.dev - Developer Web & Mobile. All rights reserved."})})}/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h=(...r)=>r.filter((a,s,n)=>!!a&&n.indexOf(a)===s).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=o.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:l="",children:t,iconNode:c,...i},f)=>o.createElement("svg",{ref:f,...L,width:a,height:a,stroke:r,strokeWidth:n?Number(s)*24/Number(a):s,className:h("lucide",l),...i},[...c.map(([p,g])=>o.createElement(p,g)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(r,a)=>{const s=o.forwardRef(({className:n,...l},t)=>o.createElement(M,{ref:t,iconNode:a,className:h(`lucide-${N(r)}`,n),...l}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=u("BookUser",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=u("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=u("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);function S(){return e.jsxs("button",{"aria-label":"change language",className:"relative group",children:[e.jsx(y,{className:"icon-brick-toggle",size:20}),e.jsx("span",{className:"absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 mb-6 hidden group-hover:block bg-zinc-700 text-cream font_tooltip text-xs rounded py-1 px-2 transition-all opacity-0 group-hover:opacity-100 group-hover:mb-8 w-28 animate-tooltip",children:"Coming Soon..."})]})}const m="theme";function T(){const[r,a]=o.useState(!1),[s,n]=o.useState(!1);o.useEffect(()=>{const t=localStorage.getItem(m)||"light",c=window.matchMedia("(prefers-color-scheme: dark)").matches,i=t==="dark"||t==="auto"&&c;document.documentElement.classList.toggle("dark",i),a(i)},[]);const l=()=>{n(!0),setTimeout(()=>n(!1),1e3);const t=r?"light":"dark";localStorage.setItem(m,t),document.documentElement.classList.toggle("dark",t==="dark"),a(t==="dark")};return e.jsx("button",{"aria-label":"toggle theme",onClick:l,children:e.jsx(v,{className:x(s&&"animate-spin","icon-brick-toggle")})})}const d=[{to:"/",alt:"Home",label:"Sr. Juan",icon:e.jsx(I,{})},{to:"/about",alt:"About",label:"About",icon:e.jsx(E,{})},{to:"/contact",alt:"Contact",label:"Contact",icon:e.jsx(A,{})}];function C(){var n,l;const r=k(),[a,s]=o.useState(0);return o.useEffect(()=>{const t=d.findIndex(c=>c.to===r.pathname);s(t)},[r]),e.jsxs("nav",{className:"flex flex-col gap-3 fixed bottom-[5%] left-1/2 transform -translate-x-1/2 justify-center rounded-md p-3 items-center text-lg h-auto surface-panel shadow-sm dark:shadow-zinc-700 z-10",children:[e.jsx("div",{className:"absolute left-[6%] top-[11%] transition-all duration-300 ease-in-out bg-zinc-700 dark:bg-red-300 rounded-lg z-10",style:{width:"49px",height:"49px",transform:`translateX(${a===-1?0:a*63}px)`}}),e.jsx("div",{className:"relative flex flex-row items-center space-x-4 font_juan ",children:d.map(({to:t,alt:c,icon:i})=>e.jsx(j,{to:t,"aria-label":c,className:x("flex flex-row p-3 relative z-10 rounded-lg dark:hover:text-red-500 hover:text-red-300 hover:underline",r.pathname===t?"text-red-300 dark:text-red-500 underline":"text-cream"),children:i},t))}),e.jsxs("div",{className:"flex flex-row items-center justify-center space-x-3",children:[e.jsx(S,{}),e.jsx("div",{className:"flex items-center justify-center w-[60px]",children:e.jsx("h3",{className:"text-2xl font_juan_name",children:(n=d[a])!=null&&n.label?(l=d[a])==null?void 0:l.label:"???"})}),e.jsx(T,{})]})]})}function z(){return e.jsx("div",{className:"flex h-screen"})}function B(){return e.jsxs("div",{className:"flex flex-col min-h-screen surface-panel bg-dot-grid",children:[e.jsx("header",{children:e.jsx(C,{})}),e.jsx(o.Suspense,{fallback:e.jsx(z,{}),children:e.jsx(b,{})}),e.jsx("footer",{className:"mt-auto",children:e.jsx(w,{})})]})}export{B as default};
