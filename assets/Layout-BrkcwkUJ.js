import{j as e,r as l,u as y,L as j,O as v}from"./index-CXDItGz2.js";import{u}from"./useTranslation-C-Y0Xlr4.js";import{I as w,c as m,M as N}from"./index-CXaidTZT.js";function L(){const{t}=u();return e.jsx("div",{className:"w-full flex justify-center h-56 mt-20 font_juan_footer",children:e.jsx("p",{children:t("footer.copyright",{year:new Date().getFullYear()})})})}/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=(...t)=>t.filter((s,a,n)=>!!s&&n.indexOf(s)===a).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=l.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:o="",children:r,iconNode:i,...d},p)=>l.createElement("svg",{ref:p,...E,width:s,height:s,stroke:t,strokeWidth:n?Number(a)*24/Number(s):a,className:g("lucide",o),...d},[...i.map(([k,b])=>l.createElement(k,b)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,s)=>{const a=l.forwardRef(({className:n,...o},r)=>l.createElement(T,{ref:r,iconNode:s,className:g(`lucide-${M(t)}`,n),...o}));return a.displayName=`${t}`,a};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=x("BookUser",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=x("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=x("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]),h=["en","es"];function K(){const{i18n:t,t:s}=u(),a=h.includes(t.resolvedLanguage)?t.resolvedLanguage:"en";return e.jsxs("div",{className:"relative group","aria-label":s("language.toggle"),children:[e.jsx(w,{className:"icon-brick-toggle",size:20}),e.jsx("div",{className:"absolute z-10 bottom-full left-1/2 -translate-x-1/2 w-10 h-3"}),e.jsxs("div",{className:"absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:flex group-focus-within:flex flex-row gap-1 bg-zinc-700 text-cream font_tooltip text-xs rounded py-1 px-2 transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 animate-tooltip",children:[e.jsx("span",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-700 rotate-45"}),h.map(n=>e.jsx("button",{type:"button","aria-pressed":n===a,onClick:o=>{t.changeLanguage(n),o.currentTarget.blur()},className:m("px-2 py-1 rounded uppercase transition-colors",n===a?"bg-red-300 text-zinc-900":"hover:bg-zinc-600"),children:n},n))]})]})}const f="theme";function S(){const[t,s]=l.useState(!1),[a,n]=l.useState(!1);l.useEffect(()=>{const r=localStorage.getItem(f)||"light",i=window.matchMedia("(prefers-color-scheme: dark)").matches,d=r==="dark"||r==="auto"&&i;document.documentElement.classList.toggle("dark",d),s(d)},[]);const o=()=>{n(!0),setTimeout(()=>n(!1),1e3);const r=t?"light":"dark";localStorage.setItem(f,r),document.documentElement.classList.toggle("dark",r==="dark"),s(r==="dark")};return e.jsx("button",{"aria-label":"toggle theme",onClick:o,children:e.jsx(N,{className:m(a&&"animate-spin","icon-brick-toggle")})})}const c=[{to:"/",altKey:"nav.home",labelKey:null,label:"Sr. Juan",icon:e.jsx(I,{})},{to:"/about",altKey:"nav.about",labelKey:"nav.about",icon:e.jsx(z,{})},{to:"/contact",altKey:"nav.contact",labelKey:"nav.contact",icon:e.jsx(A,{})}];function C(){const{t}=u(),s=y(),[a,n]=l.useState(0);return l.useEffect(()=>{const o=c.findIndex(r=>r.to===s.pathname);n(o)},[s]),e.jsxs("nav",{className:"flex flex-col gap-3 fixed bottom-[5%] left-1/2 transform -translate-x-1/2 justify-center rounded-md p-3 items-center text-lg h-auto surface-panel shadow-sm dark:shadow-zinc-700 z-10",children:[e.jsx("div",{className:"absolute left-[6%] top-[11%] transition-all duration-300 ease-in-out bg-zinc-700 dark:bg-red-300 rounded-lg z-10",style:{width:"49px",height:"49px",transform:`translateX(${a===-1?0:a*63}px)`}}),e.jsx("div",{className:"relative flex flex-row items-center space-x-4 font_juan ",children:c.map(({to:o,altKey:r,icon:i})=>e.jsx(j,{to:o,"aria-label":t(r),className:m("flex flex-row p-3 relative z-10 rounded-lg dark:hover:text-red-500 hover:text-red-300 hover:underline",s.pathname===o?"text-red-300 dark:text-red-500 underline":"text-cream"),children:i},o))}),e.jsxs("div",{className:"flex flex-row items-center justify-center space-x-3",children:[e.jsx(K,{}),e.jsx("div",{className:"flex items-center justify-center w-[60px]",children:e.jsx("h3",{className:"text-2xl font_juan_name",children:c[a]?c[a].labelKey?t(c[a].labelKey):c[a].label:"???"})}),e.jsx(S,{})]})]})}function _(){return e.jsx("div",{className:"flex h-screen"})}function U(){return e.jsxs("div",{className:"flex flex-col min-h-screen surface-panel bg-dot-grid",children:[e.jsx("header",{children:e.jsx(C,{})}),e.jsx(l.Suspense,{fallback:e.jsx(_,{}),children:e.jsx(v,{})}),e.jsx("footer",{className:"mt-auto",children:e.jsx(L,{})})]})}export{U as default};
