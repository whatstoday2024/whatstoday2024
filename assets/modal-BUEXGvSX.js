import{E as x,C as gt}from"./index-CzXxoeaI.js";var pt={exports:{}},z={exports:{}},j={exports:{}};/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var it;function _t(){return it||(it=1,function(D,O){(function(s,r){D.exports=r()})(x,function(){const s=new Map;return{set(d,n,e){s.has(d)||s.set(d,new Map);const i=s.get(d);if(!i.has(n)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(n,e)},get(d,n){return s.has(d)&&s.get(d).get(n)||null},remove(d,n){if(!s.has(d))return;const e=s.get(d);e.delete(n),e.size===0&&s.delete(d)}}})}(j)),j.exports}var H={exports:{}},Y={exports:{}};/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function F(){return st||(st=1,function(D,O){(function(s,r){r(O)})(x,function(s){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(a,o)=>`#${CSS.escape(o)}`)),t),i=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},l=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:o}=window.getComputedStyle(t);const A=Number.parseFloat(a),T=Number.parseFloat(o);return!A&&!T?0:(a=a.split(",")[0],o=o.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(o))*1e3)},b=t=>{t.dispatchEvent(new Event(n))},g=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),f=t=>g(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,p=t=>{if(!g(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return a;if(o!==t){const A=t.closest("summary");if(A&&A.parentNode!==o||A===null)return!1}return a},w=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",C=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?C(t.parentNode):null},M=()=>{},y=t=>{t.offsetHeight},k=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],q=t=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of L)a()}),L.push(t)):t()},P=()=>document.documentElement.dir==="rtl",c=t=>{q(()=>{const a=k();if(a){const o=t.NAME,A=a.fn[o];a.fn[o]=t.jQueryInterface,a.fn[o].Constructor=t,a.fn[o].noConflict=()=>(a.fn[o]=A,t.jQueryInterface)}})},u=(t,a=[],o=t)=>typeof t=="function"?t(...a):o,m=(t,a,o=!0)=>{if(!o){u(t);return}const T=l(a)+5;let N=!1;const v=({target:$})=>{$===a&&(N=!0,a.removeEventListener(n,v),u(t))};a.addEventListener(n,v),setTimeout(()=>{N||b(a)},T)},_=(t,a,o,A)=>{const T=t.length;let N=t.indexOf(a);return N===-1?!o&&A?t[T-1]:t[0]:(N+=o?1:-1,A&&(N=(N+T)%T),t[Math.max(0,Math.min(N,T-1))])};s.defineJQueryPlugin=c,s.execute=u,s.executeAfterTransition=m,s.findShadowRoot=C,s.getElement=f,s.getNextActiveElement=_,s.getTransitionDurationFromElement=l,s.getUID=h,s.getjQuery=k,s.isDisabled=w,s.isElement=g,s.isRTL=P,s.isVisible=p,s.noop=M,s.onDOMContentLoaded=q,s.parseSelector=e,s.reflow=y,s.toType=i,s.triggerTransitionEnd=b,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(Y,Y.exports)),Y.exports}/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function B(){return rt||(rt=1,function(D,O){(function(s,r){D.exports=r(F())})(x,function(s){const r=/[^.]*(?=\..*)\.|.*/,d=/\..*/,n=/::\d+$/,e={};let i=1;const h={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b(c,u){return u&&`${u}::${i++}`||c.uidEvent||i++}function g(c){const u=b(c);return c.uidEvent=u,e[u]=e[u]||{},e[u]}function f(c,u){return function m(_){return P(_,{delegateTarget:c}),m.oneOff&&q.off(c,_.type,u),u.apply(c,[_])}}function p(c,u,m){return function _(t){const a=c.querySelectorAll(u);for(let{target:o}=t;o&&o!==this;o=o.parentNode)for(const A of a)if(A===o)return P(t,{delegateTarget:o}),_.oneOff&&q.off(c,t.type,u,m),m.apply(o,[t])}}function w(c,u,m=null){return Object.values(c).find(_=>_.callable===u&&_.delegationSelector===m)}function C(c,u,m){const _=typeof u=="string",t=_?m:u||m;let a=L(c);return l.has(a)||(a=c),[_,t,a]}function M(c,u,m,_,t){if(typeof u!="string"||!c)return;let[a,o,A]=C(u,m,_);u in h&&(o=(Q=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return Q.call(this,E)})(o));const T=g(c),N=T[A]||(T[A]={}),v=w(N,o,a?m:null);if(v){v.oneOff=v.oneOff&&t;return}const $=b(o,u.replace(r,"")),I=a?p(c,m,o):f(c,o);I.delegationSelector=a?m:null,I.callable=o,I.oneOff=t,I.uidEvent=$,N[$]=I,c.addEventListener(A,I,a)}function y(c,u,m,_,t){const a=w(u[m],_,t);a&&(c.removeEventListener(m,a,!!t),delete u[m][a.uidEvent])}function k(c,u,m,_){const t=u[m]||{};for(const[a,o]of Object.entries(t))a.includes(_)&&y(c,u,m,o.callable,o.delegationSelector)}function L(c){return c=c.replace(d,""),h[c]||c}const q={on(c,u,m,_){M(c,u,m,_,!1)},one(c,u,m,_){M(c,u,m,_,!0)},off(c,u,m,_){if(typeof u!="string"||!c)return;const[t,a,o]=C(u,m,_),A=o!==u,T=g(c),N=T[o]||{},v=u.startsWith(".");if(typeof a<"u"){if(!Object.keys(N).length)return;y(c,T,o,a,t?m:null);return}if(v)for(const $ of Object.keys(T))k(c,T,$,u.slice(1));for(const[$,I]of Object.entries(N)){const V=$.replace(n,"");(!A||u.includes(V))&&y(c,T,o,I.callable,I.delegationSelector)}},trigger(c,u,m){if(typeof u!="string"||!c)return null;const _=s.getjQuery(),t=L(u),a=u!==t;let o=null,A=!0,T=!0,N=!1;a&&_&&(o=_.Event(u,m),_(c).trigger(o),A=!o.isPropagationStopped(),T=!o.isImmediatePropagationStopped(),N=o.isDefaultPrevented());const v=P(new Event(u,{bubbles:A,cancelable:!0}),m);return N&&v.preventDefault(),T&&c.dispatchEvent(v),v.defaultPrevented&&o&&o.preventDefault(),v}};function P(c,u={}){for(const[m,_]of Object.entries(u))try{c[m]=_}catch{Object.defineProperty(c,m,{configurable:!0,get(){return _}})}return c}return q})}(H)),H.exports}var G={exports:{}},J={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function mt(){return ot||(ot=1,function(D,O){(function(s,r){D.exports=r()})(x,function(){function s(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function r(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,i){n.setAttribute(`data-bs-${r(e)}`,i)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${r(e)}`)},getDataAttributes(n){if(!n)return{};const e={},i=Object.keys(n.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of i){let l=h.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1,l.length),e[l]=s(n.dataset[h])}return e},getDataAttribute(n,e){return s(n.getAttribute(`data-bs-${r(e)}`))}}})}(J)),J.exports}/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var at;function nt(){return at||(at=1,function(D,O){(function(s,r){D.exports=r(mt(),F())})(x,function(s,r){class d{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,i){const h=r.isElement(i)?s.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...r.isElement(i)?s.getDataAttributes(i):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,i=this.constructor.DefaultType){for(const[h,l]of Object.entries(i)){const b=e[h],g=r.isElement(b)?"element":r.toType(b);if(!new RegExp(l).test(g))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${g}" but expected type "${l}".`)}}}return d})}(G)),G.exports}/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function Et(){return ut||(ut=1,function(D,O){(function(s,r){D.exports=r(_t(),B(),nt(),F())})(x,function(s,r,d,n){const e="5.3.3";class i extends d{constructor(l,b){super(),l=n.getElement(l),l&&(this._element=l,this._config=this._getConfig(b),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),r.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,b,g=!0){n.executeAfterTransition(l,b,g)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return s.get(n.getElement(l),this.DATA_KEY)}static getOrCreateInstance(l,b={}){return this.getInstance(l)||new this(l,typeof b=="object"?b:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}return i})}(z)),z.exports}var X={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function U(){return ct||(ct=1,function(D,O){(function(s,r){D.exports=r(F())})(x,function(s){const r=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let i=n.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&i!=="#"?i.trim():null}return e?e.split(",").map(i=>s.parseSelector(i)).join(","):null},d={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(i=>i.matches(e))},parents(n,e){const i=[];let h=n.parentNode.closest(e);for(;h;)i.push(h),h=h.parentNode.closest(e);return i},prev(n,e){let i=n.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(n,e){let i=n.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(i=>!s.isDisabled(i)&&s.isVisible(i))},getSelectorFromElement(n){const e=r(n);return e&&d.findOne(e)?e:null},getElementFromSelector(n){const e=r(n);return e?d.findOne(e):null},getMultipleElementsFromSelector(n){const e=r(n);return e?d.find(e):[]}};return d})}(X)),X.exports}var Z={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function bt(){return lt||(lt=1,function(D,O){(function(s,r){D.exports=r(B(),nt(),F())})(x,function(s,r,d){const n="backdrop",e="fade",i="show",h=`mousedown.bs.${n}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},b={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class g extends r{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return b}static get NAME(){return n}show(p){if(!this._config.isVisible){d.execute(p);return}this._append();const w=this._getElement();this._config.isAnimated&&d.reflow(w),w.classList.add(i),this._emulateAnimation(()=>{d.execute(p)})}hide(p){if(!this._config.isVisible){d.execute(p);return}this._getElement().classList.remove(i),this._emulateAnimation(()=>{this.dispose(),d.execute(p)})}dispose(){this._isAppended&&(s.off(this._element,h),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(e),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=d.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),s.on(p,h,()=>{d.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){d.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return g})}(Z)),Z.exports}var W={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function At(){return dt||(dt=1,function(D,O){(function(s,r){r(O,B(),U(),F())})(x,function(s,r,d,n){const e=(i,h="hide")=>{const l=`click.dismiss${i.EVENT_KEY}`,b=i.NAME;r.on(document,l,`[data-bs-dismiss="${b}"]`,function(g){if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),n.isDisabled(this))return;const f=d.getElementFromSelector(this)||this.closest(`.${b}`);i.getOrCreateInstance(f)[h]()})};s.enableDismissTrigger=e,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(W,W.exports)),W.exports}var tt={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ft;function yt(){return ft||(ft=1,function(D,O){(function(s,r){D.exports=r(B(),U(),nt())})(x,function(s,r,d){const n="focustrap",i=".bs.focustrap",h=`focusin${i}`,l=`keydown.tab${i}`,b="Tab",g="forward",f="backward",p={autofocus:!0,trapElement:null},w={autofocus:"boolean",trapElement:"element"};class C extends d{constructor(y){super(),this._config=this._getConfig(y),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return p}static get DefaultType(){return w}static get NAME(){return n}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),s.off(document,i),s.on(document,h,y=>this._handleFocusin(y)),s.on(document,l,y=>this._handleKeydown(y)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,s.off(document,i))}_handleFocusin(y){const{trapElement:k}=this._config;if(y.target===document||y.target===k||k.contains(y.target))return;const L=r.focusableChildren(k);L.length===0?k.focus():this._lastTabNavDirection===f?L[L.length-1].focus():L[0].focus()}_handleKeydown(y){y.key===b&&(this._lastTabNavDirection=y.shiftKey?f:g)}}return C})}(tt)),tt.exports}var et={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function Tt(){return ht||(ht=1,function(D,O){(function(s,r){D.exports=r(mt(),U(),F())})(x,function(s,r,d){const n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",e=".sticky-top",i="padding-right",h="margin-right";class l{constructor(){this._element=document.body}getWidth(){const g=document.documentElement.clientWidth;return Math.abs(window.innerWidth-g)}hide(){const g=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,i,f=>f+g),this._setElementAttributes(n,i,f=>f+g),this._setElementAttributes(e,h,f=>f-g)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,i),this._resetElementAttributes(n,i),this._resetElementAttributes(e,h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(g,f,p){const w=this.getWidth(),C=M=>{if(M!==this._element&&window.innerWidth>M.clientWidth+w)return;this._saveInitialAttribute(M,f);const y=window.getComputedStyle(M).getPropertyValue(f);M.style.setProperty(f,`${p(Number.parseFloat(y))}px`)};this._applyManipulationCallback(g,C)}_saveInitialAttribute(g,f){const p=g.style.getPropertyValue(f);p&&s.setDataAttribute(g,f,p)}_resetElementAttributes(g,f){const p=w=>{const C=s.getDataAttribute(w,f);if(C===null){w.style.removeProperty(f);return}s.removeDataAttribute(w,f),w.style.setProperty(f,C)};this._applyManipulationCallback(g,p)}_applyManipulationCallback(g,f){if(d.isElement(g)){f(g);return}for(const p of r.find(g,this._element))f(p)}}return l})}(et)),et.exports}/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(D,O){(function(s,r){D.exports=r(Et(),B(),U(),bt(),At(),yt(),F(),Tt())})(x,function(s,r,d,n,e,i,h,l){const b="modal",f=".bs.modal",p=".data-api",w="Escape",C=`hide${f}`,M=`hidePrevented${f}`,y=`hidden${f}`,k=`show${f}`,L=`shown${f}`,q=`resize${f}`,P=`click.dismiss${f}`,c=`mousedown.dismiss${f}`,u=`keydown.dismiss${f}`,m=`click${f}${p}`,_="modal-open",t="fade",a="show",o="modal-static",A=".modal.show",T=".modal-dialog",N=".modal-body",v='[data-bs-toggle="modal"]',$={backdrop:!0,focus:!0,keyboard:!0},I={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class V extends s{constructor(E,S){super(E,S),this._dialog=d.findOne(T,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new l,this._addEventListeners()}static get Default(){return $}static get DefaultType(){return I}static get NAME(){return b}toggle(E){return this._isShown?this.hide():this.show(E)}show(E){this._isShown||this._isTransitioning||r.trigger(this._element,k,{relatedTarget:E}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_),this._adjustDialog(),this._backdrop.show(()=>this._showElement(E)))}hide(){!this._isShown||this._isTransitioning||r.trigger(this._element,C).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(a),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){r.off(window,f),r.off(this._dialog,f),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new n({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new i({trapElement:this._element})}_showElement(E){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const S=d.findOne(N,this._dialog);S&&(S.scrollTop=0),h.reflow(this._element),this._element.classList.add(a);const R=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,r.trigger(this._element,L,{relatedTarget:E})};this._queueCallback(R,this._dialog,this._isAnimated())}_addEventListeners(){r.on(this._element,u,E=>{if(E.key===w){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),r.on(window,q,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),r.on(this._element,c,E=>{r.one(this._element,P,S=>{if(!(this._element!==E.target||this._element!==S.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(_),this._resetAdjustments(),this._scrollBar.reset(),r.trigger(this._element,y)})}_isAnimated(){return this._element.classList.contains(t)}_triggerBackdropTransition(){if(r.trigger(this._element,M).defaultPrevented)return;const S=this._element.scrollHeight>document.documentElement.clientHeight,R=this._element.style.overflowY;R==="hidden"||this._element.classList.contains(o)||(S||(this._element.style.overflowY="hidden"),this._element.classList.add(o),this._queueCallback(()=>{this._element.classList.remove(o),this._queueCallback(()=>{this._element.style.overflowY=R},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const E=this._element.scrollHeight>document.documentElement.clientHeight,S=this._scrollBar.getWidth(),R=S>0;if(R&&!E){const K=h.isRTL()?"paddingLeft":"paddingRight";this._element.style[K]=`${S}px`}if(!R&&E){const K=h.isRTL()?"paddingRight":"paddingLeft";this._element.style[K]=`${S}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(E,S){return this.each(function(){const R=V.getOrCreateInstance(this,E);if(typeof E=="string"){if(typeof R[E]>"u")throw new TypeError(`No method named "${E}"`);R[E](S)}})}}return r.on(document,m,v,function(Q){const E=d.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Q.preventDefault(),r.one(E,k,K=>{K.defaultPrevented||r.one(E,y,()=>{h.isVisible(this)&&this.focus()})});const S=d.findOne(A);S&&V.getInstance(S).hide(),V.getOrCreateInstance(E).toggle(this)}),e.enableDismissTrigger(V),h.defineJQueryPlugin(V),V})})(pt);var Dt=pt.exports;const wt=gt(Dt);export{wt as M};
