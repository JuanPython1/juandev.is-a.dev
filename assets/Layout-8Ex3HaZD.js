import{j as e,r as o,u as g,L as k,O as b}from"./index-DRgm1hoD.js";function j(){return e.jsx("div",{className:"w-full flex justify-center h-56 mt-20 font_juan_footer",children:e.jsx("p",{children:"©2025 SrJuan.dev - Developer Web & Mobile. All rights reserved."})})}/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...r)=>r.filter((a,s,n)=>!!a&&n.indexOf(a)===s).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=o.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:l="",children:t,iconNode:c,...i},h)=>o.createElement("svg",{ref:h,...y,width:a,height:a,stroke:r,strokeWidth:n?Number(s)*24/Number(a):s,className:x("lucide",l),...i},[...c.map(([f,p])=>o.createElement(f,p)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(r,a)=>{const s=o.forwardRef(({className:n,...l},t)=>o.createElement(w,{ref:t,iconNode:a,className:x(`lucide-${v(r)}`,n),...l}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=u("BookUser",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=u("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=u("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);function M(){return e.jsx("button",{"aria-label":"change language",className:"relative group",children:e.jsx("span",{className:"absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 mb-6 hidden group-hover:block bg-zinc-700 text-[#ffebcd] font_tooltip text-xs rounded py-1 px-2 transition-all opacity-0 group-hover:opacity-100 group-hover:mb-8 hover: w-28 animate-tooltip",children:"Coming Soon..."})})}const m="theme";function A(){const[r,a]=o.useState(!1),[s,n]=o.useState(!1);o.useEffect(()=>{const t=localStorage.getItem(m)||"light",c=window.matchMedia("(prefers-color-scheme: dark)").matches,i=t==="dark"||t==="auto"&&c;document.documentElement.classList.toggle("dark",i),a(i)},[]);const l=()=>{n(!0),setTimeout(()=>n(!1),1e3);const t=r?"light":"dark";localStorage.setItem(m,t),document.documentElement.classList.toggle("dark",t==="dark"),a(t==="dark")};return e.jsx("button",{"aria-label":"toggle theme",onClick:l})}const d=[{to:"/",alt:"Home",label:"Sr. Juan",icon:e.jsx(L,{})},{to:"/about",alt:"About",label:"About",icon:e.jsx(N,{})},{to:"/contact",alt:"Contact",label:"Contact",icon:e.jsx(E,{})}];function S(){var n,l;const r=g(),[a,s]=o.useState(0);return o.useEffect(()=>{const t=d.findIndex(c=>c.to===r.pathname);s(t)},[r]),e.jsxs("nav",{className:"flex flex-col gap-3 fixed bottom-[5%] left-1/2 transform -translate-x-1/2  transition-colors duration-500 justify-center rounded-md p-3 items-center text-lg h-auto bg-[#242424] dark:bg-[#c04b4b] shadow-md z-10 ",children:[e.jsx("div",{className:"absolute left-[6%] top-[11%] transition-all duration-300 ease-in-out bg-zinc-700 dark:bg-red-300 rounded-lg z-10",style:{width:"49px",height:"49px",transform:`translateX(${a===-1?0:a*63}px)`}}),e.jsx("div",{className:"relative flex flex-row items-center space-x-4 font_juan ",children:d.map(({to:t,alt:c,icon:i})=>e.jsx(k,{to:t,"aria-label":c,className:`flex flex-row p-3 relative z-10  rounded-lg dark:hover:text-red-500 hover:text-red-300 hover:underline ${r.pathname===t?"text-red-300 dark:text-red-500 underline ":"text-[#ffebcd] "}`,children:i},t))}),e.jsxs("div",{className:"flex flex-row items-center justify-center space-x-3",children:[e.jsx(M,{}),e.jsx("div",{className:"flex items-center justify-center w-[60px]",children:e.jsx("h3",{className:"text-2xl font_juan_name",children:(n=d[a])!=null&&n.label?(l=d[a])==null?void 0:l.label:"???"})}),e.jsx(A,{})]})]})}function T(){return e.jsx("div",{className:"flex h-screen"})}function I(){return e.jsxs("div",{className:"flex flex-col min-h-screen bg-[#242424] dark:bg-[#c04b4b] transition-colors duration-500",children:[e.jsx("header",{children:e.jsx(S,{})}),e.jsx(o.Suspense,{fallback:e.jsx(T,{}),children:e.jsx(b,{})}),e.jsx("footer",{className:"mt-auto",children:e.jsx(j,{})})]})}export{I as default};
