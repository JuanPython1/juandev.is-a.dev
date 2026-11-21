import{j as n,r as m,u as Ce,a as ze,L as Be,O as Fe,S as Pe}from"./index-DEU95uvJ.js";import{u as B}from"./useTranslation-XxIAlc9X.js";import{I as _e,c as W,M as De}from"./index-DnOCnBRH.js";function Oe(){const{t:e}=B();return n.jsx("div",{className:"w-full flex justify-center h-[14em] mt-[5em] font_juan_footer zoom-scale-root",children:n.jsx("p",{children:e("footer.copyright",{year:new Date().getFullYear()})})})}/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ye=(...e)=>e.filter((o,r,a)=>!!o&&a.indexOf(o)===r).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=m.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:u="",children:i,iconNode:d,...c},v)=>m.createElement("svg",{ref:v,...Ue,width:o,height:o,stroke:e,strokeWidth:a?Number(r)*24/Number(o):r,className:ye("lucide",u),...c},[...d.map(([M,R])=>m.createElement(M,R)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,o)=>{const r=m.forwardRef(({className:a,...u},i)=>m.createElement(qe,{ref:i,iconNode:o,className:ye(`lucide-${Xe(e)}`,a),...u}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=Z("BookUser",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=Z("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=Z("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]),he=["en","es"];function $e(){const{i18n:e,t:o}=B(),r=he.includes(e.resolvedLanguage)?e.resolvedLanguage:"en";return n.jsxs("div",{className:"relative group",role:"group","aria-label":o("language.toggle"),children:[n.jsx(_e,{className:"icon-brick-toggle",size:"1.25em","aria-hidden":"true"}),n.jsx("div",{className:"absolute z-10 bottom-full left-1/2 -translate-x-1/2 w-[2.5em] h-[0.75em]"}),n.jsxs("div",{className:"absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-[0.75em] hidden group-hover:flex group-focus-within:flex flex-row gap-[0.25em] bg-zinc-700 text-cream font_tooltip rounded-[0.25em] py-[0.25em] px-[0.5em] transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 animate-tooltip",children:[n.jsx("span",{className:"absolute -bottom-[0.25em] left-1/2 -translate-x-1/2 w-[0.5em] h-[0.5em] bg-zinc-700 rotate-45"}),he.map(a=>n.jsx("button",{type:"button","aria-pressed":a===r,onClick:u=>{e.changeLanguage(a),u.currentTarget.blur()},className:W("px-[0.5em] py-[0.25em] rounded-[0.25em] uppercase transition-colors",a===r?"bg-red-300 text-zinc-900":"hover:bg-zinc-600"),children:a},a))]})]})}const pe="theme";function Ve(){const{t:e}=B(),[o,r]=m.useState(!1),[a,u]=m.useState(!1);m.useEffect(()=>{const d=localStorage.getItem(pe)||"light",c=window.matchMedia("(prefers-color-scheme: dark)").matches,v=d==="dark"||d==="auto"&&c;document.documentElement.classList.toggle("dark",v),r(v)},[]);const i=()=>{u(!0),setTimeout(()=>u(!1),1e3);const d=o?"light":"dark";localStorage.setItem(pe,d),document.documentElement.classList.toggle("dark",d==="dark"),r(d==="dark")};return n.jsx("button",{type:"button","aria-label":e("theme.toggle"),"aria-pressed":o,title:e("theme.toggle"),onClick:i,className:"transition-transform duration-200 active:scale-90",children:n.jsx(De,{className:W(a&&"animate-spin","icon-brick-toggle")})})}const w=[{to:"/",altKey:"nav.home",labelKey:null,label:"Sr. Juan",icon:n.jsx(Ge,{size:"1.25em"})},{to:"/about",altKey:"nav.about",labelKey:"nav.about",icon:n.jsx(Ye,{size:"1.25em"})},{to:"/contact",altKey:"nav.contact",labelKey:"nav.contact",icon:n.jsx(Ke,{size:"1.25em"})}],H=2.25,He=.375,We=H+He;function Ze(){const{t:e}=B(),o=Ce(),r=ze(),a=m.useRef(null),u=m.useRef(0),i=w.findIndex(c=>c.to===o.pathname),d=m.useCallback(c=>{if(Math.abs(c.deltaX)<Math.abs(c.deltaY)*1.5)return;c.preventDefault();const v=Date.now();if(v-u.current<1e3)return;const M=c.deltaX>0?1:-1,R=w.findIndex(X=>X.to===o.pathname),F=Math.max(0,Math.min(w.length-1,R+M));F!==R&&(u.current=v,r(w[F].to))},[o.pathname,r]);return m.useEffect(()=>(window.addEventListener("wheel",d,{passive:!1}),()=>window.removeEventListener("wheel",d)),[d]),n.jsxs("nav",{ref:a,className:"flex flex-row items-center gap-[0.625em] fixed bottom-[5%] left-1/2 transform -translate-x-1/2 rounded-[0.5em] py-[0.4375em] px-[0.875em] surface-panel nav-bar z-10",style:{fontSize:"var(--zoom-scale)"},children:[n.jsxs("div",{className:"relative flex flex-row items-center gap-[0.375em]",children:[n.jsx("div",{className:"nav-indicator absolute left-0 top-0 bg-zinc-600 dark:bg-red-300 rounded-[0.375em] z-10",style:{width:`${H}em`,height:`${H}em`,opacity:i===-1?0:1,transform:`translateX(${Math.max(i,0)*We}em)`}}),w.map(({to:c,altKey:v,icon:M})=>n.jsx(Be,{to:c,"aria-label":e(v),"aria-current":o.pathname===c?"page":void 0,className:W("flex flex-row p-[0.5em] relative z-10 rounded-[0.375em] dark:hover:text-red-500 hover:text-red-300 hover:underline",o.pathname===c?"text-red-300 dark:text-red-500 underline":"text-cream"),children:M},c))]}),n.jsx("div",{className:"w-[0.0625em] h-[1.375em] bg-zinc-600 dark:bg-red-200/40"}),n.jsxs("div",{className:"flex flex-row items-center justify-center gap-[0.625em]",children:[n.jsx($e,{}),n.jsx("div",{className:"flex items-center justify-center min-w-[3.75em]",children:n.jsx("h3",{className:"nav-label font_juan_name whitespace-nowrap",children:w[i]?w[i].labelKey?e(w[i].labelKey):w[i].label:"???"},o.pathname)}),n.jsx(Ve,{})]})]})}const Je=24e5,V=Math.PI*2,ge={"top-right":{flipX:0,flipY:0,side:0},"top-left":{flipX:1,flipY:0,side:0},"bottom-right":{flipX:0,flipY:1,side:0},"bottom-left":{flipX:1,flipY:1,side:0},right:{flipX:0,flipY:0,side:1},left:{flipX:1,flipY:0,side:1}},Qe=`#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`,et=`#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uBlend;
uniform float uIntensity;
uniform float uSpread;
uniform float uDensity;
uniform float uSharpness;
uniform float uFalloff;
uniform float uGlow;
uniform float uSaturation;
uniform float uDust;
uniform float uOpacity;
uniform float uReveal;
uniform float uLight;
uniform vec3 uFrame;
uniform float uAim;
uniform vec3 uFocus;
uniform float uSway;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}

float shafts(float u, float t, float seed, float aa) {
  float sway = (0.4 * sin(t * 0.31 + seed) + 0.24 * sin(t * 0.17 + seed * 2.3)) * uSway;
  float n = 0.7 * noise(vec2(u + sway + seed, t * 0.3)) + 0.3 * noise(vec2(u * 2.4 + sway * 1.5 + seed * 1.7, t * 0.45 + 3.0));
  float width = mix(0.5, 0.1, uSharpness);
  float s = mix(smoothstep(0.5 - width, 0.5 + width, n), 0.5, aa);
  return mix(0.05, 1.0, s);
}

float motes(vec2 p, float cell, float t, float seed) {
  p += vec2(t * 0.021, -t * 0.013) + seed * 7.31;
  vec2 grid = p / cell;
  vec2 id = floor(grid);
  vec2 f = grid - id;
  float h = hash(id + seed);
  if (h > 0.5) return 0.0;
  vec2 center = 0.25 + 0.5 * vec2(hash(id + 1.7 + seed), hash(id + 3.1 + seed));
  center += 0.1 * vec2(sin(t * 0.7 + h * 31.0), cos(t * 0.6 + h * 23.0));
  float size = mix(0.035, 0.09, hash(id + 5.3 + seed));
  float edge = length(fwidth(grid)) * 0.7;
  float twinkle = 0.55 + 0.45 * sin(t * 1.9 + h * 41.0);
  return (1.0 - smoothstep(size - edge, size + edge, length(f - center))) * twinkle;
}

void main() {
  float aspect = uResolution.x / uResolution.y;
  vec2 q = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  if (uFrame.x > 0.5) q.x = -q.x;
  if (uFrame.y > 0.5) q.y = -q.y;
  vec2 source = uFrame.z > 0.5 ? vec2(aspect * 0.5 + 0.42, 0.3) : vec2(aspect * 0.5 + 0.1, 0.62);
  float heading = (uFrame.z > 0.5 ? 3.42 : -2.48) + uAim + 0.035 * sin(uTime * 0.21) * uSway;
  vec2 v = q - source;
  float r = length(v);
  float angle = mod(atan(v.y, v.x) - heading + 3.14159265, 6.28318531) - 3.14159265;
  float t = uTime;
  float u = angle * uDensity;
  float aa = smoothstep(0.12, 0.45, fwidth(u));
  float offset = uSpread * 0.22;
  float fanA = exp(-pow((angle + offset) / uSpread, 2.0) * 1.4);
  float fanB = exp(-pow((angle - offset) / (uSpread * 1.15), 2.0) * 1.4);
  float focus = 1.0 + uFocus.z * exp(-pow((angle - uFocus.x) / uFocus.y, 2.0));
  float lightA = fanA * shafts(u, t, 0.0, aa) * focus;
  float lightB = fanB * shafts(u * 0.83, t * 0.6, 17.0, aa) * focus;
  float reach = 1.0 / (1.0 + pow(r / 0.4, uFalloff));
  vec3 glowColor = mix(uColorA, uColorB, uBlend);
  vec3 light = (uColorA * lightA * (1.0 - uBlend) + uColorB * lightB * uBlend) * 2.0 * reach;
  light += glowColor * uGlow * exp(-pow(r / 0.4, 2.0));
  if (uDust > 0.0) {
    float sparkle = motes(q, 0.06, t, 0.0) + 0.7 * motes(q, 0.038, t * 0.8, 9.0);
    light += mix(glowColor, vec3(1.0), 0.6) * sparkle * (lightA + lightB) * reach * uDust * 2.5;
  }
  light *= uIntensity * (1.0 - smoothstep(uReveal * 2.6 - 0.45, uReveal * 2.6, r)) * smoothstep(0.0, 0.35, uReveal);
  float gray = dot(light, vec3(0.2126, 0.7152, 0.0722));
  light = max(mix(vec3(gray), light, uSaturation), 0.0);
  float peak = max(light.r, max(light.g, light.b));
  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  if (uLight > 0.5) {
    vec3 ink = pow(light / max(peak, 1e-4), vec3(2.0)) * 0.75;
    float alpha = clamp(pow(1.0 - exp(-peak * 2.6), 2.5) * 0.9 * uOpacity + grain, 0.0, 1.0);
    fragColor = vec4(pow(ink, vec3(1.0 / 2.2)) * alpha, alpha);
    return;
  }
  float mapped = 1.0 - exp(-peak);
  vec3 tone = light * (mapped / max(peak, 1e-4));
  tone = mix(tone, vec3(mapped), smoothstep(0.7, 1.0, mapped) * 0.55);
  vec3 shown = clamp(tone * uOpacity, 0.0, 1.0);
  float alpha = max(shown.r, max(shown.g, shown.b));
  vec3 color = clamp(shown * alpha + grain, 0.0, 1.0);
  fragColor = vec4(min(color, vec3(alpha)), alpha);
}`,p=(e,o,r)=>Math.min(r,Math.max(o,e)),tt=e=>((e+Math.PI)%V+V)%V-Math.PI,ve=e=>{const o=String(e||"").trim(),r=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(o);if(r){const u=r[1].length===3?r[1].replace(/./g,i=>i+i):r[1];return[0,2,4].map(i=>parseInt(u.slice(i,i+2),16)/255)}const a=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(o);return a?[a[1],a[2],a[3]].map(u=>p(parseFloat(u)/255,0,1)):[1,1,1]},at=(e,o)=>({source:e.side?[o*.5+.42,.3]:[o*.5+.1,.62],heading:e.side?3.42:-2.48}),xe=(e,o,r)=>{const a=e.createShader(o);return a?(e.shaderSource(a,r),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)?a:(console.error(e.getShaderInfoLog(a)),e.deleteShader(a),null)):null},ot=e=>{const o=xe(e,e.VERTEX_SHADER,Qe),r=xe(e,e.FRAGMENT_SHADER,et),a=o&&r?e.createProgram():null;if(!o||!r||!a)return o&&e.deleteShader(o),r&&e.deleteShader(r),null;if(e.attachShader(a,o),e.attachShader(a,r),e.linkProgram(a),e.deleteShader(o),e.deleteShader(r),!e.getProgramParameter(a,e.LINK_STATUS))return console.error(e.getProgramInfoLog(a)),e.deleteProgram(a),null;const u={},i=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let d=0;d<i;d++){const c=e.getActiveUniform(a,d);c&&(u[c.name]=e.getUniformLocation(a,c.name))}return{program:a,uniforms:u}},nt=({rayColor1:e="#FFC46B",rayColor2:o="#96c8ff",blend:r=.6,origin:a="top-right",speed:u=2.5,intensity:i=2,spread:d=2,density:c=5,sharpness:v=.5,tilt:M=0,falloff:R=1.6,glow:F=1,saturation:X=1,dust:we=0,followMouse:be=!0,mouseInfluence:ke=.5,intro:Se=!0,lightMode:Me=!1,opacity:je=1,maxDevicePixelRatio:Ae=2,className:J="",style:Ee})=>{const Q=m.useRef(null),ee=m.useRef(null),N=m.useRef(null),[te,Le]=m.useState(0),ae={colorA:ve(e),colorB:ve(o),blend:p(r,0,1),frame:ge[a]??ge["top-right"],speed:Math.max(0,u)*.4,intensity:Math.max(0,i)*.75,spread:p(d,.1,8)*.225,density:p(c,1,40),sharpness:p(v,0,1),tilt:p(M,-180,180)*Math.PI/180,falloff:p(R,.2,6),glow:Math.max(0,F)*1.2,saturation:Math.max(0,X),dust:p(we,0,1),followMouse:be,mouseInfluence:p(ke,0,1),intro:Se,light:Me,opacity:p(je,0,1),maxRatio:p(Ae,.5,3)},P=m.useRef(ae);return P.current=ae,m.useEffect(()=>{var b;(b=N.current)==null||b.call(N)}),m.useEffect(()=>{const b=Q.current,h=ee.current;if(!b||!h)return;const s=h.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),_=s?ot(s):null;if(!s||!_)return;const I=window.matchMedia("(prefers-reduced-motion: reduce)").matches,oe=s.createVertexArray(),k={width:1,height:1},j={x:0,y:0,inside:!1},y={value:0,velocity:0},A={angle:0,strength:0};let ne=Math.random()*100,T=P.current.intro&&!I&&te===0?0:1,E=0,D=0,U=!0,q=document.visibilityState!=="hidden",Y=!1,G=!1;const Re=()=>{const l=P.current,t=b.getBoundingClientRect(),g=Math.max(1,t.width),x=Math.max(1,t.height),L=Math.min(window.devicePixelRatio||1,l.maxRatio,Math.sqrt(Je/(g*x))),C=Math.max(1,Math.round(g*L)),z=Math.max(1,Math.round(x*L));(h.width!==C||h.height!==z)&&(h.width=C,h.height=z),k.width=g,k.height=x},K=()=>{G=!0,S()},Ne=l=>{let t=(j.x-k.width/2)/k.height,g=(k.height/2-j.y)/k.height;l.frame.flipX&&(t=-t),l.frame.flipY&&(g=-g);const{source:x,heading:L}=at(l.frame,k.width/k.height);return tt(Math.atan2(g-x[1],t-x[0])-L-l.tilt)},re=l=>{if(E=0,G&&(G=!1,Re()),Y)return;const t=P.current,g=p((l-D)/1e3||0,0,.05);D=Math.max(D,l),ne+=g*t.speed*(I?.3:1),T<1&&(T=Math.min(1,T+g/1.6));const x=t.followMouse&&j.inside&&!I,L=x?Ne(t):0,C=x?p(L,-t.spread,t.spread)*t.mouseInfluence:0,z=x?t.mouseInfluence:0,me=1-Math.exp(-g*6);x&&(A.angle+=(p(L-y.value,-t.spread*1.5,t.spread*1.5)-A.angle)*me),A.strength+=(z-A.strength)*me;const de=18,Ie=2*Math.sqrt(de);y.velocity+=((C-y.value)*de-y.velocity*Ie)*g,y.value+=y.velocity*g,s.viewport(0,0,h.width,h.height),s.useProgram(_.program),s.bindVertexArray(oe);const f=_.uniforms;s.uniform2f(f.uResolution,h.width,h.height),s.uniform1f(f.uTime,ne),s.uniform3f(f.uColorA,t.colorA[0],t.colorA[1],t.colorA[2]),s.uniform3f(f.uColorB,t.colorB[0],t.colorB[1],t.colorB[2]),s.uniform1f(f.uBlend,t.blend),s.uniform1f(f.uIntensity,t.intensity),s.uniform1f(f.uSpread,t.spread),s.uniform1f(f.uDensity,t.density),s.uniform1f(f.uSharpness,t.sharpness),s.uniform1f(f.uFalloff,t.falloff),s.uniform1f(f.uGlow,t.glow),s.uniform1f(f.uSaturation,t.saturation),s.uniform1f(f.uDust,t.dust),s.uniform1f(f.uOpacity,t.opacity),s.uniform1f(f.uReveal,1-Math.pow(1-T,3)),s.uniform1f(f.uLight,t.light?1:0),s.uniform3f(f.uFrame,t.frame.flipX,t.frame.flipY,t.frame.side),s.uniform1f(f.uAim,t.tilt+y.value),s.uniform3f(f.uFocus,A.angle,Math.max(.06,t.spread*.25),A.strength*1.4),s.uniform1f(f.uSway,I?0:1),s.drawArrays(s.TRIANGLES,0,3);const Te=Math.abs(C-y.value)>1e-4||Math.abs(y.velocity)>1e-4||Math.abs(z-A.strength)>.001;(t.speed>0&&!I||T<1||Te)&&U&&q&&(E=requestAnimationFrame(re))},S=()=>{E||Y||!U||!q||(D=performance.now(),E=requestAnimationFrame(re))};N.current=()=>{K(),S()};const se=l=>{const t=b.getBoundingClientRect();j.x=l.clientX-t.left,j.y=l.clientY-t.top,j.inside=l.clientX>=t.left&&l.clientX<=t.right&&l.clientY>=t.top&&l.clientY<=t.bottom,S()},$=()=>{j.inside=!1,S()},O=l=>{l.pointerType!=="mouse"&&$()};window.addEventListener("pointermove",se,{passive:!0}),window.addEventListener("pointerup",O,{passive:!0}),window.addEventListener("pointercancel",O,{passive:!0}),document.documentElement.addEventListener("pointerleave",$);const ie=l=>{l.preventDefault(),Y=!0,cancelAnimationFrame(E),E=0},le=()=>Le(l=>l+1);h.addEventListener("webglcontextlost",ie),h.addEventListener("webglcontextrestored",le);const ce=new ResizeObserver(()=>{K(),S()});ce.observe(b);const ue=new IntersectionObserver(l=>{U=l.some(t=>t.isIntersecting),S()});ue.observe(b);const fe=()=>{q=document.visibilityState!=="hidden",S()};return document.addEventListener("visibilitychange",fe),K(),S(),()=>{cancelAnimationFrame(E),N.current=null,ce.disconnect(),ue.disconnect(),window.removeEventListener("pointermove",se),window.removeEventListener("pointerup",O),window.removeEventListener("pointercancel",O),document.documentElement.removeEventListener("pointerleave",$),document.removeEventListener("visibilitychange",fe),h.removeEventListener("webglcontextlost",ie),h.removeEventListener("webglcontextrestored",le),s.isContextLost()||(s.deleteVertexArray(oe),s.deleteProgram(_.program))}},[te]),n.jsx("div",{ref:Q,className:`side-rays${J?` ${J}`:""}`,style:Ee,children:n.jsx("canvas",{ref:ee,className:"side-rays__canvas","aria-hidden":"true"})})},rt=nt;function st(){const{t:e}=B();return n.jsxs("div",{role:"status",className:"flex h-screen items-center justify-center zoom-scale-root",children:[n.jsx("span",{"aria-hidden":"true",className:"w-[2.5em] h-[2.5em] rounded-full border-[0.25em] border-red-300/25 border-t-red-300 motion-safe:animate-spin"}),n.jsx("span",{className:"sr-only",children:e("loading.label")})]})}function ft(){return n.jsxs("div",{className:"flex flex-col min-h-screen surface-panel bg-dot-grid",children:[n.jsx(rt,{className:"side-rays-bg",rayColor1:"#fca5a5",rayColor2:"#ffebcd",intensity:1.5,opacity:.5}),n.jsxs("div",{className:"page-content flex flex-col flex-grow min-h-screen",children:[n.jsx("header",{children:n.jsx(Ze,{})}),n.jsx(m.Suspense,{fallback:n.jsx(st,{}),children:n.jsx(Fe,{})}),n.jsx("footer",{className:"mt-auto",children:n.jsx(Oe,{})})]}),n.jsx(Pe,{})]})}export{ft as default};
