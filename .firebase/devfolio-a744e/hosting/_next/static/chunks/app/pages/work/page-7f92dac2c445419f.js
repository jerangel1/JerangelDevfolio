(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2898:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:c=2,absoluteStrokeWidth:o,className:l="",children:u,...d},h)=>(0,n.createElement)("svg",{ref:h,...a,width:i,height:i,stroke:r,strokeWidth:o?24*Number(c)/Number(i):c,className:["lucide",`lucide-${s(e)}`,l].join(" "),...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(u)?u:[u]]));return r.displayName=`${e}`,r}},3067:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(2898).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},3622:function(e,t,r){Promise.resolve().then(r.bind(r,2204))},8153:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(7437),a=r(3067),s=r(1396),i=r.n(s),c=r(2265);let o=()=>{let e=(0,c.useRef)(null),[t,r]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{if(!e.current)return;let t=new IntersectionObserver(e=>{let[t]=e;return r(t.isIntersecting)});return t.observe(e.current),()=>t.disconnect()},[]),(0,n.jsx)("header",{ref:e,children:(0,n.jsx)("div",{className:"fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ".concat(t?"bg-zinc-900/0 border-transparent":"bg-zinc-900/500  border-zinc-800 "),children:(0,n.jsxs)("div",{className:"container flex flex-row-reverse items-center justify-between p-6 mx-auto",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-8",children:[(0,n.jsx)(i(),{href:"/pages/about",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"About"}),(0,n.jsx)(i(),{href:"/pages/work",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Works"}),(0,n.jsx)(i(),{href:"/pages/skills",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Skills"}),(0,n.jsx)(i(),{href:"/pages/contact",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Contact"})]}),(0,n.jsx)(i(),{href:"/",className:"duration-200 text-zinc-300 hover:text-zinc-100",children:(0,n.jsx)(a.Z,{className:"w-8 h-8 "})})]})})})}},2606:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),a=r(2265);function s(e){let{className:t="",quantity:r=30,staticity:s=50,ease:i=50,refresh:c=!1}=e,o=(0,a.useRef)(null),l=(0,a.useRef)(null),u=(0,a.useRef)(null),d=(0,a.useRef)([]),h=function(){let[e,t]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e}(),m=(0,a.useRef)({x:0,y:0}),x=(0,a.useRef)({w:0,h:0}),f=window.devicePixelRatio;(0,a.useEffect)(()=>(o.current&&(u.current=o.current.getContext("2d")),p(),k(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]),(0,a.useEffect)(()=>{g()},[h.x,h.y]),(0,a.useEffect)(()=>{p()},[c]);let p=()=>{v(),j()},g=()=>{if(o.current){let e=o.current.getBoundingClientRect(),{w:t,h:r}=x.current,n=h.x-e.left-t/2,a=h.y-e.top-r/2;n<t/2&&n>-t/2&&a<r/2&&a>-r/2&&(m.current.x=n,m.current.y=a)}},v=()=>{l.current&&o.current&&u.current&&(d.current.length=0,x.current.w=l.current.offsetWidth,x.current.h=l.current.offsetHeight,o.current.width=x.current.w*f,o.current.height=x.current.h*f,o.current.style.width="".concat(x.current.w,"px"),o.current.style.height="".concat(x.current.h,"px"),u.current.scale(f,f))},w=()=>{let e=Math.floor(Math.random()*x.current.w);return{x:e,y:Math.floor(Math.random()*x.current.h),translateX:0,translateY:0,size:Math.floor(2*Math.random())+.1,alpha:0,targetAlpha:parseFloat((.6*Math.random()+.1).toFixed(1)),dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},b=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(u.current){let{x:r,y:n,translateX:a,translateY:s,size:i,alpha:c}=e;u.current.translate(a,s),u.current.beginPath(),u.current.arc(r,n,i,0,2*Math.PI),u.current.fillStyle="rgba(255, 255, 255, ".concat(c,")"),u.current.fill(),u.current.setTransform(f,0,0,f,0,0),t||d.current.push(e)}},y=()=>{u.current&&u.current.clearRect(0,0,x.current.w,x.current.h)},j=()=>{y();for(let e=0;e<r;e++)b(w())},N=(e,t,r,n,a)=>{let s=(e-t)*(a-n)/(r-t)+n;return s>0?s:0},k=()=>{y(),d.current.forEach((e,t)=>{let r=parseFloat(N([e.x+e.translateX-e.size,x.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,x.current.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),0,20,0,1).toFixed(2));r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(m.current.x/(s/e.magnetism)-e.translateX)/i,e.translateY+=(m.current.y/(s/e.magnetism)-e.translateY)/i,e.x<-e.size||e.x>x.current.w+e.size||e.y<-e.size||e.y>x.current.h+e.size?(d.current.splice(t,1),b(w())):b({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(k)};return(0,n.jsx)("div",{className:t,ref:l,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:o})})}},2204:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),a=r(8153);let s=()=>(0,n.jsx)("div",{className:"px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32",children:(0,n.jsxs)("div",{className:"max-w-2xl mx-auto lg:mx-0",children:[(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("iframe",{src:"https://lottie.host/embed/3945cf96-0368-4bf5-b18e-fde844ca8201/kwqjXGwoDk.json"})}),(0,n.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl",children:"From Travel Guru ✈ to Tech Ninja \uD83E\uDD77"}),(0,n.jsx)("p",{className:"mt-4 text-xl text-zinc-400 mb-5",children:"In this section, I showcase my professional journey, spanning three distinct landscapes: tourism, logistics, and web development."})]})});var i=r(2606);r(2265);var c=e=>{let{experience:t}=e;return(0,n.jsx)("div",{className:"container fluid 1/2 text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-10 p-0",children:(0,n.jsxs)("div",{className:"flex items-start",children:[(0,n.jsx)("div",{className:"w-1 h-1 md:w-2 md:h-2"}),(0,n.jsxs)("div",{className:"text-left",children:[(0,n.jsx)("div",{className:"text-xs text-gray-400 mb-1",children:t.date}),(0,n.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold",children:t.company}),(0,n.jsx)("h3",{className:"text-gray-500",children:t.position}),(0,n.jsx)("p",{className:"text-gray-400",children:t.content})]})]})]})})};let o=[{id:1,position:"Sales and marketing manager",date:"2013-2017",url:"https://www.instagram.com/turismundovalencia/?hl=es",company:"Travel Agency Turismundo C.A",content:"Entusiastic professional with more than 5 years of experience in the tourism sector with a proven record of success in achieving sales goals, developing marketing strategies, and improving customer satisfaction."},{id:2,position:"Director",date:"2018-2023",company:"Pravenca C.A",url:"https://pravenca1.wixsite.com/website-1",content:"Executive Director with a proven track record of success in growing and transforming businesses. Led the development and implementation of strategic plans that resulted in a 25% annual increase in sales. Proactively managed the company's performance, taking corrective action to ensure efficiency and quality. Represented the company to clients, suppliers, and partners, building strong relationships."},{id:3,position:"Frontend Developer",date:"2020-2022",url:"https://jerangel1.github.io/Portfolio/",company:"Freelance",content:"Skilled Web Developer with a proven track record of success in creating high-quality, user-friendly websites and web applications."},{id:4,position:"Full Stack Developer",date:"2023",url:"https://koa.agency/",company:"Koa Agency",content:"I worked on the development of two websites for an integrative education and psychotherapeutic accompaniment course on the essence of motherhood. I was responsible for editing the pages URLs to improve SEO, restructuring the content according to Adobe XD mockups, and delivering the project on time"},{id:5,position:"Available",date:"2024",url:"https://github.com/jerangel1",company:"Ready for the next Project!",content:"Let's talk about your idea and make it happen"}];function l(){return(0,n.jsxs)("div",{className:"flex flex-col gap-8 mt-15",children:[(0,n.jsx)(i.default,{className:"absolute inset-0 -z-10 animate-fade-in",quantity:1e3}),(0,n.jsx)(a.W,{}),(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:"w-full h-px bg-zinc-800 "}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-35",children:[(0,n.jsx)("div",{className:"Timeline-Works w-full md:w-1/3 mx-auto",children:(0,n.jsx)("ol",{className:"relative border-s border-gray-200 ml-3",children:o.map(e=>(0,n.jsx)("li",{className:"mb-8 md:mb-14 ms-0 md:ms-8",children:(0,n.jsx)(c,{experience:e},e.id)},e.id))})}),(0,n.jsx)("div",{className:"flex justify-center items-center mb-10",children:(0,n.jsx)("iframe",{src:"https://lottie.host/embed/f9e047cf-d7a4-41d3-b2bb-c17c60251be8/k8yHVOqLaC.json"})})]})]})}}},function(e){e.O(0,[176,971,938,744],function(){return e(e.s=3622)}),_N_E=e.O()}]);