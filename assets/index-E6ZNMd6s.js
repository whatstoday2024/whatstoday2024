import{_ as R,j as x,c as F,a as o,b as d,w as H,r as b,o as E,l as S,v as B,h as p}from"./index-bZBJiZFm.js";const n={origin:"https://api.emailjs.com",blockHeadless:!1},_=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},P=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=_(e);n.publicKey=s.publicKey,n.blockHeadless=s.blockHeadless,n.blockList=s.blockList,n.limitRate=s.limitRate,n.origin=s.origin||t};class h{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const g=async(e,t,s={})=>{const a=await fetch(n.origin+e,{method:"POST",headers:s,body:t}),i=await a.text(),l=new h(a.status,i);if(a.ok)return l;throw l},v=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},q=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=e=>e.webdriver||!e.languages||e.languages.length===0,k=()=>new h(451,"Unavailable For Headless Browser"),K=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},M=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},O=(e,t)=>e instanceof FormData?e.get(t):e[t],V=(e,t)=>{if(M(e))return!1;K(e.list,e.watchVariable);const s=O(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},j=()=>new h(403,"Forbidden"),N=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},U=(e,t,s)=>{const a=Number(s.getItem(e)||0);return t-Date.now()+a},y=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},L=(e,t,s)=>{if(!s.throttle)return!1;N(s.throttle,s.id);const a=s.id||t,i=U(a,s.throttle,e);return i>0?(y(a,i,e),!0):(e.setItem(a,Date.now().toString()),y(a,s.throttle,e),!1)},T=()=>new h(429,"Too Many Requests"),C=(e,t,s,a)=>{const i=_(a),l=i.publicKey||n.publicKey,c=i.blockHeadless||n.blockHeadless,m={...n.blockList,...i.blockList},f={...n.limitRate,...i.limitRate};return c&&w(navigator)?Promise.reject(k()):(v(l,e,t),q(s),s&&V(m,s)?Promise.reject(j()):L(localStorage,location.pathname,f)?Promise.reject(T()):g("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:l,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},D=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},J=e=>typeof e=="string"?document.querySelector(e):e,A=(e,t,s,a)=>{const i=_(a),l=i.publicKey||n.publicKey,c=i.blockHeadless||n.blockHeadless,m={...n.blockList,...i.blockList},f={...n.limitRate,...i.limitRate};if(c&&w(navigator))return Promise.reject(k());const u=J(s);v(l,e,t),D(u);const r=new FormData(u);return V(m,r)?Promise.reject(j()):L(localStorage,location.pathname,f)?Promise.reject(T()):(r.append("lib_version","4.1.0"),r.append("service_id",e),r.append("template_id",t),r.append("user_id",l),g("/api/v1.0/email/send-form",r))},I={init:P,send:C,sendForm:A},z={data(){return{issue:{type:"問題回報",name:"",email:"",content:""}}},methods:{sendEmail(){try{I.send("service_wrg9fdg","template_u74y2ir",this.issue,"cU7MJETmO9Fcn--g1").then(()=>{x.success(this.issue.type+"已送出完成!",{autoClose:1e3}),this.$router.push({name:"IssueForm"})})}catch(e){console.log({error:e})}}}},G={class:"flex-fill d-flex align-items-center"},Q={class:"container flex-fill py-4 py-lg-5"},W={class:"row justify-content-center"},X={class:"col-lg-6"},Y={class:"w-100"},Z=o("h1",{class:"h2 mb-3 text-center"},"客服信箱",-1),$={class:"form-floating my-4"},ee=o("option",{value:"問題回報"},"問題回報",-1),te=o("option",{value:"菜色許願"},"菜色許願",-1),se=[ee,te],ie=o("label",{for:"name"},"請選擇問題類型",-1),oe={class:"form-floating mb-4"},ae=o("label",{for:"name"},"請輸入姓名",-1),re={class:"form-floating mb-4"},ne=o("label",{for:"email"},"請輸入電子信箱",-1),le={class:"form-floating mb-4"},ce=o("label",{for:"content"},"請輸入問題內容",-1),de=o("button",{type:"submit",class:"btn btn-brand-blue btn-lg rounded-pill mb-4"},"送出",-1);function me(e,t,s,a,i,l){const c=b("ErrorMessage"),m=b("VField"),f=b("VForm");return E(),F("div",G,[o("div",Q,[o("div",W,[o("div",X,[o("div",Y,[d(f,{ref:"form",class:"card rounded-4 p-4 p-lg-5",onSubmit:l.sendEmail},{default:H(({errors:u})=>[Z,o("div",$,[S(o("select",{id:"type",name:"問題類型",class:"form-select","aria-label":"請選擇問題類型","onUpdate:modelValue":t[0]||(t[0]=r=>i.issue.type=r)},se,512),[[B,i.issue.type]]),d(c,{name:"問題類型",class:"invalid-feedback"}),ie]),o("div",oe,[d(m,{type:"text",id:"name",placeholder:"請輸入姓名",name:"姓名",class:p(["form-control",{"is-invalid":u.姓名}]),rules:"required",modelValue:i.issue.name,"onUpdate:modelValue":t[1]||(t[1]=r=>i.issue.name=r)},null,8,["class","modelValue"]),d(c,{name:"姓名",class:"invalid-feedback"}),ae]),o("div",re,[d(m,{type:"email",id:"email",placeholder:"請輸入電子信箱",name:"信箱",class:p(["form-control",{"is-invalid":u.信箱}]),rules:"email|required",modelValue:i.issue.email,"onUpdate:modelValue":t[2]||(t[2]=r=>i.issue.email=r)},null,8,["class","modelValue"]),d(c,{name:"信箱",class:"invalid-feedback"}),ne]),o("div",le,[d(m,{as:"textarea",id:"content",style:{height:"200px"},placeholder:"請輸入問題內容",name:"問題內容",class:p(["form-control",{"is-invalid":u.問題內容}]),rules:"required",modelValue:i.issue.content,"onUpdate:modelValue":t[3]||(t[3]=r=>i.issue.content=r)},null,8,["class","modelValue"]),d(c,{name:"問題內容",class:"invalid-feedback"}),ce]),de]),_:1},8,["onSubmit"])])])])])])}const fe=R(z,[["render",me]]);export{fe as default};
