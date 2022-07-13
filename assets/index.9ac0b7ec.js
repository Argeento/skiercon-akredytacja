const bf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};bf();function ai(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const wf="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Ef=ai(wf),kf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",If=ai(kf);function wc(t){return!!t||t===""}function ss(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Se(r)?xf(r):ss(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Se(t))return t;if(xe(t))return t}}const Sf=/;(?![^(]*\))/g,Tf=/:(.+)/;function xf(t){const e={};return t.split(Sf).forEach(n=>{if(n){const r=n.split(Tf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function at(t){let e="";if(Se(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=at(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Cf(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Se(e)&&(t.class=at(e)),n&&(t.style=ss(n)),t}function Rf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nn(t[r],e[r]);return n}function nn(t,e){if(t===e)return!0;let n=Va(t),r=Va(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Vr(t),r=Vr(e),n||r)return t===e;if(n=W(t),r=W(e),n||r)return n&&r?Rf(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!nn(t[o],e[o]))return!1}}return String(t)===String(e)}function li(t,e){return t.findIndex(n=>nn(n,e))}const Oe=t=>Se(t)?t:t==null?"":W(t)||xe(t)&&(t.toString===kc||!X(t.toString))?JSON.stringify(t,Ec,2):String(t),Ec=(t,e)=>e&&e.__v_isRef?Ec(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Cn(e)?{[`Set(${e.size})`]:[...e.values()]}:xe(e)&&!W(e)&&!Ic(e)?String(e):e,he={},jn=[],dt=()=>{},Pf=()=>!1,Of=/^on[^a-z]/,is=t=>Of.test(t),Bo=t=>t.startsWith("onUpdate:"),Te=Object.assign,Uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Af=Object.prototype.hasOwnProperty,ce=(t,e)=>Af.call(t,e),W=Array.isArray,Hn=t=>os(t)==="[object Map]",Cn=t=>os(t)==="[object Set]",Va=t=>os(t)==="[object Date]",X=t=>typeof t=="function",Se=t=>typeof t=="string",Vr=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Vo=t=>xe(t)&&X(t.then)&&X(t.catch),kc=Object.prototype.toString,os=t=>kc.call(t),Nf=t=>os(t).slice(8,-1),Ic=t=>os(t)==="[object Object]",zo=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ir=ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mf=/-(\w)/g,tt=ci(t=>t.replace(Mf,(e,n)=>n?n.toUpperCase():"")),Df=/\B([A-Z])/g,yt=ci(t=>t.replace(Df,"-$1").toLowerCase()),as=ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sr=ci(t=>t?`on${as(t)}`:""),Xn=(t,e)=>!Object.is(t,e),Wn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let za;const Lf=()=>za||(za=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Je;class jo{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Je&&(this.parent=Je,this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Je;try{return Je=this,e()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Ff(t){return new jo(t)}function Sc(t,e=Je){e&&e.active&&e.effects.push(t)}function $f(){return Je}function Bf(t){Je&&Je.cleanups.push(t)}const Ho=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tc=t=>(t.w&sn)>0,xc=t=>(t.n&sn)>0,Uf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},Vf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Tc(s)&&!xc(s)?s.delete(t):e[n++]=s,s.w&=~sn,s.n&=~sn}e.length=n}},so=new WeakMap;let yr=0,sn=1;const io=30;let ct;const _n=Symbol(""),oo=Symbol("");class ls{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sc(this,r)}run(){if(!this.active)return this.fn();let e=ct,n=Zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,Zt=!0,sn=1<<++yr,yr<=io?Uf(this):ja(this),this.fn()}finally{yr<=io&&Vf(this),sn=1<<--yr,ct=this.parent,Zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function zf(t,e){t.effect&&(t=t.effect.fn);const n=new ls(t);e&&(Te(n,e),e.scope&&Sc(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function jf(t){t.effect.stop()}let Zt=!0;const Cc=[];function Rn(){Cc.push(Zt),Zt=!1}function Pn(){const t=Cc.pop();Zt=t===void 0?!0:t}function nt(t,e,n){if(Zt&&ct){let r=so.get(t);r||so.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ho()),Rc(s)}}function Rc(t,e){let n=!1;yr<=io?xc(t)||(t.n|=sn,n=!Tc(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Nt(t,e,n,r,s,i){const o=so.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?zo(n)&&a.push(o.get("length")):(a.push(o.get(_n)),Hn(t)&&a.push(o.get(oo)));break;case"delete":W(t)||(a.push(o.get(_n)),Hn(t)&&a.push(o.get(oo)));break;case"set":Hn(t)&&a.push(o.get(_n));break}if(a.length===1)a[0]&&ao(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);ao(Ho(l))}}function ao(t,e){const n=W(t)?t:[...t];for(const r of n)r.computed&&Ha(r);for(const r of n)r.computed||Ha(r)}function Ha(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hf=ai("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr)),Wf=ui(),Kf=ui(!1,!0),qf=ui(!0),Gf=ui(!0,!0),Wa=Jf();function Jf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let i=0,o=this.length;i<o;i++)nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rn();const r=oe(this)[e].apply(this,n);return Pn(),r}}),t}function ui(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Fc:Lc:e?Dc:Mc).get(r))return r;const o=W(r);if(!t&&o&&ce(Wa,s))return Reflect.get(Wa,s,i);const a=Reflect.get(r,s,i);return(Vr(s)?Pc.has(s):Hf(s))||(t||nt(r,"get",s),e)?a:Pe(a)?o&&zo(s)?a:a.value:xe(a)?t?Ko(a):ur(a):a}}const Yf=Oc(),Xf=Oc(!0);function Oc(t=!1){return function(n,r,s,i){let o=n[r];if(Zn(o)&&Pe(o)&&!Pe(s))return!1;if(!t&&!Zn(s)&&(Us(s)||(s=oe(s),o=oe(o)),!W(n)&&Pe(o)&&!Pe(s)))return o.value=s,!0;const a=W(n)&&zo(r)?Number(r)<n.length:ce(n,r),l=Reflect.set(n,r,s,i);return n===oe(i)&&(a?Xn(s,o)&&Nt(n,"set",r,s):Nt(n,"add",r,s)),l}}function Zf(t,e){const n=ce(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Nt(t,"delete",e,void 0),r}function Qf(t,e){const n=Reflect.has(t,e);return(!Vr(e)||!Pc.has(e))&&nt(t,"has",e),n}function eh(t){return nt(t,"iterate",W(t)?"length":_n),Reflect.ownKeys(t)}const Ac={get:Wf,set:Yf,deleteProperty:Zf,has:Qf,ownKeys:eh},Nc={get:qf,set(t,e){return!0},deleteProperty(t,e){return!0}},th=Te({},Ac,{get:Kf,set:Xf}),nh=Te({},Nc,{get:Gf}),Wo=t=>t,di=t=>Reflect.getPrototypeOf(t);function bs(t,e,n=!1,r=!1){t=t.__v_raw;const s=oe(t),i=oe(e);n||(e!==i&&nt(s,"get",e),nt(s,"get",i));const{has:o}=di(s),a=r?Wo:n?Jo:zr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ws(t,e=!1){const n=this.__v_raw,r=oe(n),s=oe(t);return e||(t!==s&&nt(r,"has",t),nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Es(t,e=!1){return t=t.__v_raw,!e&&nt(oe(t),"iterate",_n),Reflect.get(t,"size",t)}function Ka(t){t=oe(t);const e=oe(this);return di(e).has.call(e,t)||(e.add(t),Nt(e,"add",t,t)),this}function qa(t,e){e=oe(e);const n=oe(this),{has:r,get:s}=di(n);let i=r.call(n,t);i||(t=oe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Xn(e,o)&&Nt(n,"set",t,e):Nt(n,"add",t,e),this}function Ga(t){const e=oe(this),{has:n,get:r}=di(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Nt(e,"delete",t,void 0),i}function Ja(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Nt(t,"clear",void 0,void 0),n}function ks(t,e){return function(r,s){const i=this,o=i.__v_raw,a=oe(o),l=e?Wo:t?Jo:zr;return!t&&nt(a,"iterate",_n),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function Is(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=Hn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Wo:e?Jo:zr;return!e&&nt(i,"iterate",l?oo:_n),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:this}}function rh(){const t={get(i){return bs(this,i)},get size(){return Es(this)},has:ws,add:Ka,set:qa,delete:Ga,clear:Ja,forEach:ks(!1,!1)},e={get(i){return bs(this,i,!1,!0)},get size(){return Es(this)},has:ws,add:Ka,set:qa,delete:Ga,clear:Ja,forEach:ks(!1,!0)},n={get(i){return bs(this,i,!0)},get size(){return Es(this,!0)},has(i){return ws.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:ks(!0,!1)},r={get(i){return bs(this,i,!0,!0)},get size(){return Es(this,!0)},has(i){return ws.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Is(i,!1,!1),n[i]=Is(i,!0,!1),e[i]=Is(i,!1,!0),r[i]=Is(i,!0,!0)}),[t,n,e,r]}const[sh,ih,oh,ah]=rh();function fi(t,e){const n=e?t?ah:oh:t?ih:sh;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const lh={get:fi(!1,!1)},ch={get:fi(!1,!0)},uh={get:fi(!0,!1)},dh={get:fi(!0,!0)},Mc=new WeakMap,Dc=new WeakMap,Lc=new WeakMap,Fc=new WeakMap;function fh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hh(t){return t.__v_skip||!Object.isExtensible(t)?0:fh(Nf(t))}function ur(t){return Zn(t)?t:hi(t,!1,Ac,lh,Mc)}function $c(t){return hi(t,!1,th,ch,Dc)}function Ko(t){return hi(t,!0,Nc,uh,Lc)}function ph(t){return hi(t,!0,nh,dh,Fc)}function hi(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=hh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function yn(t){return Zn(t)?yn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function Us(t){return!!(t&&t.__v_isShallow)}function qo(t){return yn(t)||Zn(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Go(t){return Bs(t,"__v_skip",!0),t}const zr=t=>xe(t)?ur(t):t,Jo=t=>xe(t)?Ko(t):t;function Yo(t){Zt&&ct&&(t=oe(t),Rc(t.dep||(t.dep=Ho())))}function pi(t,e){t=oe(t),t.dep&&ao(t.dep)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Ze(t){return Uc(t,!1)}function Bc(t){return Uc(t,!0)}function Uc(t,e){return Pe(t)?t:new mh(t,e)}class mh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:zr(e)}get value(){return Yo(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),Xn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:zr(e),pi(this))}}function gh(t){pi(t)}function U(t){return Pe(t)?t.value:t}const vh={get:(t,e,n)=>U(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xo(t){return yn(t)?t:new Proxy(t,vh)}class _h{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Yo(this),()=>pi(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function yh(t){return new _h(t)}function bh(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Vc(t,n);return e}class wh{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Vc(t,e,n){const r=t[e];return Pe(r)?r:new wh(t,e,n)}class Eh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ls(e,()=>{this._dirty||(this._dirty=!0,pi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=oe(this);return Yo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kh(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=dt):(r=t.get,s=t.set),new Eh(r,s,i||!s,n)}const Tr=[];function zc(t,...e){Rn();const n=Tr.length?Tr[Tr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=Ih();if(r)bt(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${Au(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...Sh(s)),console.warn(...i)}Pn()}function Ih(){let t=Tr[Tr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Sh(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...Th(n))}),e}function Th({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${Au(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...xh(t.props),i]:[s+i]}function xh(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...jc(r,t[r]))}),n.length>3&&e.push(" ..."),e}function jc(t,e,n){return Se(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Pe(e)?(e=jc(t,oe(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):X(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=oe(e),n?e:[`${t}=`,e])}function bt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){On(i,e,n)}return s}function Qe(t,e,n,r){if(X(t)){const i=bt(t,e,n,r);return i&&Vo(i)&&i.catch(o=>{On(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Qe(t[i],e,n,r));return s}function On(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){bt(l,null,10,[t,o,a]);return}}Ch(t,n,s,r)}function Ch(t,e,n,r=!0){console.error(t)}let Vs=!1,lo=!1;const Xe=[];let Tt=0;const xr=[];let br=null,$n=0;const Cr=[];let Ht=null,Bn=0;const Hc=Promise.resolve();let Zo=null,co=null;function mi(t){const e=Zo||Hc;return t?e.then(this?t.bind(this):t):e}function Rh(t){let e=Tt+1,n=Xe.length;for(;e<n;){const r=e+n>>>1;jr(Xe[r])<t?e=r+1:n=r}return e}function Qo(t){(!Xe.length||!Xe.includes(t,Vs&&t.allowRecurse?Tt+1:Tt))&&t!==co&&(t.id==null?Xe.push(t):Xe.splice(Rh(t.id),0,t),Wc())}function Wc(){!Vs&&!lo&&(lo=!0,Zo=Hc.then(qc))}function Ph(t){const e=Xe.indexOf(t);e>Tt&&Xe.splice(e,1)}function Kc(t,e,n,r){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Wc()}function Oh(t){Kc(t,br,xr,$n)}function ea(t){Kc(t,Ht,Cr,Bn)}function gi(t,e=null){if(xr.length){for(co=e,br=[...new Set(xr)],xr.length=0,$n=0;$n<br.length;$n++)br[$n]();br=null,$n=0,co=null,gi(t,e)}}function zs(t){if(gi(),Cr.length){const e=[...new Set(Cr)];if(Cr.length=0,Ht){Ht.push(...e);return}for(Ht=e,Ht.sort((n,r)=>jr(n)-jr(r)),Bn=0;Bn<Ht.length;Bn++)Ht[Bn]();Ht=null,Bn=0}}const jr=t=>t.id==null?1/0:t.id;function qc(t){lo=!1,Vs=!0,gi(t),Xe.sort((n,r)=>jr(n)-jr(r));const e=dt;try{for(Tt=0;Tt<Xe.length;Tt++){const n=Xe[Tt];n&&n.active!==!1&&bt(n,null,14)}}finally{Tt=0,Xe.length=0,zs(),Vs=!1,Zo=null,(Xe.length||xr.length||Cr.length)&&qc(t)}}let Un,Ss=[];function Gc(t,e){var n,r;Un=t,Un?(Un.enabled=!0,Ss.forEach(({event:s,args:i})=>Un.emit(s,...i)),Ss=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Gc(i,e)}),setTimeout(()=>{Un||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ss=[])},3e3)):Ss=[]}function Ah(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||he;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[d]||he;p&&(s=n.map(v=>v.trim())),f&&(s=n.map(rn))}let a,l=r[a=Sr(e)]||r[a=Sr(tt(e))];!l&&i&&(l=r[a=Sr(yt(e))]),l&&Qe(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qe(u,t,6,s)}}function Jc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const l=u=>{const d=Jc(u,e,!0);d&&(a=!0,Te(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(r.set(t,null),null):(W(i)?i.forEach(l=>o[l]=null):Te(o,i),r.set(t,o),o)}function vi(t,e){return!t||!is(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,yt(e))||ce(t,e))}let Fe=null,_i=null;function Hr(t){const e=Fe;return Fe=t,_i=t&&t.type.__scopeId||null,e}function yi(t){_i=t}function bi(){_i=null}const Nh=t=>Qn;function Qn(t,e=Fe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vo(-1);const i=Hr(e),o=t(...s);return Hr(i),r._d&&vo(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ns(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:d,renderCache:f,data:p,setupState:v,ctx:w,inheritAttrs:A}=t;let R,_;const g=Hr(t);try{if(n.shapeFlag&4){const S=s||r;R=Ye(d.call(S,S,f,i,v,p,w)),_=l}else{const S=e;R=Ye(S.length>1?S(i,{attrs:l,slots:a,emit:u}):S(i,null)),_=e.props?l:Dh(l)}}catch(S){Ar.length=0,On(S,t,1),R=re($e)}let E=R;if(_&&A!==!1){const S=Object.keys(_),{shapeFlag:O}=E;S.length&&O&7&&(o&&S.some(Bo)&&(_=Lh(_,o)),E=kt(E,_))}return n.dirs&&(E=kt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),R=E,Hr(g),R}function Mh(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(on(r)){if(r.type!==$e||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Dh=t=>{let e;for(const n in t)(n==="class"||n==="style"||is(n))&&((e||(e={}))[n]=t[n]);return e},Lh=(t,e)=>{const n={};for(const r in t)(!Bo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ya(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(o[p]!==r[p]&&!vi(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ya(r,o,u):!0:!!o;return!1}function Ya(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!vi(n,i))return!0}return!1}function ta({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yc=t=>t.__isSuspense,$h={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){t==null?Uh(e,n,r,s,i,o,a,l,u):Vh(t,e,n,r,s,o,a,l,u)},hydrate:zh,create:na,normalize:jh},Bh=$h;function Wr(t,e){const n=t.props&&t.props[e];X(n)&&n()}function Uh(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:d}}=l,f=d("div"),p=t.suspense=na(t,s,r,e,f,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(Wr(t,"onPending"),Wr(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Kn(p,t.ssFallback)):p.resolve()}function Vh(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:d}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,v=e.ssFallback,{activeBranch:w,pendingBranch:A,isInFallback:R,isHydrating:_}=f;if(A)f.pendingBranch=p,vt(p,A)?(l(A,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():R&&(l(w,v,n,r,s,null,i,o,a),Kn(f,v))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=A):u(A,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=d("div"),R?(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(w,v,n,r,s,null,i,o,a),Kn(f,v))):w&&vt(p,w)?(l(w,p,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(w&&vt(p,w))l(w,p,n,r,s,f,i,o,a),Kn(f,p);else if(Wr(e,"onPending"),f.pendingBranch=p,f.pendingId++,l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:g,pendingId:E}=f;g>0?setTimeout(()=>{f.pendingId===E&&f.fallback(v)},g):g===0&&f.fallback(v)}}function na(t,e,n,r,s,i,o,a,l,u,d=!1){const{p:f,m:p,um:v,n:w,o:{parentNode:A,remove:R}}=u,_=rn(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:S,activeBranch:O,pendingBranch:L,pendingId:$,effects:C,parentComponent:B,container:z}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const ee=O&&L.transition&&L.transition.mode==="out-in";ee&&(O.transition.afterLeave=()=>{$===g.pendingId&&p(L,z,V,0)});let{anchor:V}=g;O&&(V=w(O),v(O,B,g,!0)),ee||p(L,z,V,0)}Kn(g,L),g.pendingBranch=null,g.isInFallback=!1;let G=g.parent,F=!1;for(;G;){if(G.pendingBranch){G.effects.push(...C),F=!0;break}G=G.parent}F||ea(C),g.effects=[],Wr(S,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:S,activeBranch:O,parentComponent:L,container:$,isSVG:C}=g;Wr(S,"onFallback");const B=w(O),z=()=>{!g.isInFallback||(f(null,E,$,B,L,null,C,a,l),Kn(g,E))},G=E.transition&&E.transition.mode==="out-in";G&&(O.transition.afterLeave=z),g.isInFallback=!0,v(O,L,null,!0),G||z()},move(E,S,O){g.activeBranch&&p(g.activeBranch,E,S,O),g.container=E},next(){return g.activeBranch&&w(g.activeBranch)},registerDep(E,S){const O=!!g.pendingBranch;O&&g.deps++;const L=E.vnode.el;E.asyncDep.catch($=>{On($,E,0)}).then($=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:C}=E;_o(E,$,!1),L&&(C.el=L);const B=!L&&E.subTree.el;S(E,C,A(L||E.subTree.el),L?null:w(E.subTree),g,o,l),B&&R(B),ta(E,C.el),O&&--g.deps===0&&g.resolve()})},unmount(E,S){g.isUnmounted=!0,g.activeBranch&&v(g.activeBranch,n,E,S),g.pendingBranch&&v(g.pendingBranch,n,E,S)}};return g}function zh(t,e,n,r,s,i,o,a,l){const u=e.suspense=na(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),d=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),d}function jh(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Xa(r?n.default:n),t.ssFallback=r?Xa(n.fallback):re($e)}function Xa(t){let e;if(X(t)){const n=In&&t._c;n&&(t._d=!1,ue()),t=t(),n&&(t._d=!0,e=qe,Eu())}return W(t)&&(t=Mh(t)),t=Ye(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Xc(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):ea(t)}function Kn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,ta(r,s))}function Rr(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function et(t,e,n=!1){const r=Re||Fe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r.proxy):e}}function Hh(t,e){return cs(t,null,e)}function Zc(t,e){return cs(t,null,{flush:"post"})}function Wh(t,e){return cs(t,null,{flush:"sync"})}const Za={};function qn(t,e,n){return cs(t,e,n)}function cs(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=he){const a=Re;let l,u=!1,d=!1;if(Pe(t)?(l=()=>t.value,u=Us(t)):yn(t)?(l=()=>t,r=!0):W(t)?(d=!0,u=t.some(_=>yn(_)||Us(_)),l=()=>t.map(_=>{if(Pe(_))return _.value;if(yn(_))return vn(_);if(X(_))return bt(_,a,2)})):X(t)?e?l=()=>bt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Qe(t,a,3,[p])}:l=dt,e&&r){const _=l;l=()=>vn(_())}let f,p=_=>{f=R.onStop=()=>{bt(_,a,4)}};if(nr)return p=dt,e?n&&Qe(e,a,3,[l(),d?[]:void 0,p]):l(),dt;let v=d?[]:Za;const w=()=>{if(!!R.active)if(e){const _=R.run();(r||u||(d?_.some((g,E)=>Xn(g,v[E])):Xn(_,v)))&&(f&&f(),Qe(e,a,3,[_,v===Za?void 0:v,p]),v=_)}else R.run()};w.allowRecurse=!!e;let A;s==="sync"?A=w:s==="post"?A=()=>Me(w,a&&a.suspense):A=()=>Oh(w);const R=new ls(l,A);return e?n?w():v=R.run():s==="post"?Me(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Uo(a.scope.effects,R)}}function Kh(t,e,n){const r=this.proxy,s=Se(t)?t.includes(".")?Qc(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=Re;an(this);const a=cs(s,i.bind(r),n);return o?an(o):Qt(),a}function Qc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vn(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))vn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)vn(t[n],e);else if(Cn(t)||Hn(t))t.forEach(n=>{vn(n,e)});else if(Ic(t))for(const n in t)vn(t[n],e);return t}function ra(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return An(()=>{t.isMounted=!0}),Ii(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],qh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},setup(t,{slots:e}){const n=cn(),r=ra();let s;return()=>{const i=e.default&&wi(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const A of i)if(A.type!==$e){o=A;break}}const a=oe(t),{mode:l}=a;if(r.isLeaving)return Bi(o);const u=Qa(o);if(!u)return Bi(o);const d=er(u,a,r,n);kn(u,d);const f=n.subTree,p=f&&Qa(f);let v=!1;const{getTransitionKey:w}=u.type;if(w){const A=w();s===void 0?s=A:A!==s&&(s=A,v=!0)}if(p&&p.type!==$e&&(!vt(u,p)||v)){const A=er(p,a,r,n);if(kn(p,A),l==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update()},Bi(o);l==="in-out"&&u.type!==$e&&(A.delayLeave=(R,_,g)=>{const E=eu(r,p);E[String(p.key)]=p,R._leaveCb=()=>{_(),R._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=g})}return o}}},sa=qh;function eu(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function er(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:v,onLeaveCancelled:w,onBeforeAppear:A,onAppear:R,onAfterAppear:_,onAppearCancelled:g}=e,E=String(t.key),S=eu(n,t),O=(C,B)=>{C&&Qe(C,r,9,B)},L=(C,B)=>{const z=B[1];O(C,B),W(C)?C.every(G=>G.length<=1)&&z():C.length<=1&&z()},$={mode:i,persisted:o,beforeEnter(C){let B=a;if(!n.isMounted)if(s)B=A||a;else return;C._leaveCb&&C._leaveCb(!0);const z=S[E];z&&vt(t,z)&&z.el._leaveCb&&z.el._leaveCb(),O(B,[C])},enter(C){let B=l,z=u,G=d;if(!n.isMounted)if(s)B=R||l,z=_||u,G=g||d;else return;let F=!1;const ee=C._enterCb=V=>{F||(F=!0,V?O(G,[C]):O(z,[C]),$.delayedLeave&&$.delayedLeave(),C._enterCb=void 0)};B?L(B,[C,ee]):ee()},leave(C,B){const z=String(t.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return B();O(f,[C]);let G=!1;const F=C._leaveCb=ee=>{G||(G=!0,B(),ee?O(w,[C]):O(v,[C]),C._leaveCb=void 0,S[z]===t&&delete S[z])};S[z]=t,p?L(p,[C,F]):F()},clone(C){return er(C,e,n,r)}};return $}function Bi(t){if(us(t))return t=kt(t),t.children=null,t}function Qa(t){return us(t)?t.children?t.children[0]:void 0:t}function kn(t,e){t.shapeFlag&6&&t.component?kn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wi(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ie?(o.patchFlag&128&&s++,r=r.concat(wi(o.children,e,a))):(e||o.type!==$e)&&r.push(a!=null?kt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ue(t){return X(t)?{setup:t,name:t.name}:t}const bn=t=>!!t.type.__asyncLoader;function Gh(t){X(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,u,d=0;const f=()=>(d++,l=null,p()),p=()=>{let v;return l||(v=l=e().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),a)return new Promise((A,R)=>{a(w,()=>A(f()),()=>R(w),d+1)});throw w}).then(w=>v!==l&&l?l:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),u=w,w)))};return Ue({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return u},setup(){const v=Re;if(u)return()=>Ui(u,v);const w=g=>{l=null,On(g,v,13,!r)};if(o&&v.suspense||nr)return p().then(g=>()=>Ui(g,v)).catch(g=>(w(g),()=>r?re(r,{error:g}):null));const A=Ze(!1),R=Ze(),_=Ze(!!s);return s&&setTimeout(()=>{_.value=!1},s),i!=null&&setTimeout(()=>{if(!A.value&&!R.value){const g=new Error(`Async component timed out after ${i}ms.`);w(g),R.value=g}},i),p().then(()=>{A.value=!0,v.parent&&us(v.parent.vnode)&&Qo(v.parent.update)}).catch(g=>{w(g),R.value=g}),()=>{if(A.value&&u)return Ui(u,v);if(R.value&&r)return re(r,{error:R.value});if(n&&!_.value)return re(n)}}})}function Ui(t,{vnode:{ref:e,props:n,children:r,shapeFlag:s},parent:i}){const o=re(t,n,r);return o.ref=e,o}const us=t=>t.type.__isKeepAlive,Jh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=cn(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:f}}}=r,p=f("div");r.activate=(g,E,S,O,L)=>{const $=g.component;u(g,E,S,0,a),l($.vnode,g,E,S,$,a,O,g.slotScopeIds,L),Me(()=>{$.isDeactivated=!1,$.a&&Wn($.a);const C=g.props&&g.props.onVnodeMounted;C&&Ke(C,$.parent,g)},a)},r.deactivate=g=>{const E=g.component;u(g,p,null,1,a),Me(()=>{E.da&&Wn(E.da);const S=g.props&&g.props.onVnodeUnmounted;S&&Ke(S,E.parent,g),E.isDeactivated=!0},a)};function v(g){Vi(g),d(g,n,a,!0)}function w(g){s.forEach((E,S)=>{const O=qs(E.type);O&&(!g||!g(O))&&A(S)})}function A(g){const E=s.get(g);!o||E.type!==o.type?v(E):o&&Vi(o),s.delete(g),i.delete(g)}qn(()=>[t.include,t.exclude],([g,E])=>{g&&w(S=>wr(g,S)),E&&w(S=>!wr(E,S))},{flush:"post",deep:!0});let R=null;const _=()=>{R!=null&&s.set(R,zi(n.subTree))};return An(_),ki(_),Ii(()=>{s.forEach(g=>{const{subTree:E,suspense:S}=n,O=zi(E);if(g.type===O.type){Vi(O);const L=O.component.da;L&&Me(L,S);return}v(g)})}),()=>{if(R=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!on(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let S=zi(E);const O=S.type,L=qs(bn(S)?S.type.__asyncResolved||{}:O),{include:$,exclude:C,max:B}=t;if($&&(!L||!wr($,L))||C&&L&&wr(C,L))return o=S,E;const z=S.key==null?O:S.key,G=s.get(z);return S.el&&(S=kt(S),E.shapeFlag&128&&(E.ssContent=S)),R=z,G?(S.el=G.el,S.component=G.component,S.transition&&kn(S,S.transition),S.shapeFlag|=512,i.delete(z),i.add(z)):(i.add(z),B&&i.size>parseInt(B,10)&&A(i.values().next().value)),S.shapeFlag|=256,o=S,Yc(E.type)?E:S}}},Yh=Jh;function wr(t,e){return W(t)?t.some(n=>wr(n,e)):Se(t)?t.split(",").includes(e):t.test?t.test(e):!1}function ia(t,e){tu(t,"a",e)}function oa(t,e){tu(t,"da",e)}function tu(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ei(e,r,n),n){let s=n.parent;for(;s&&s.parent;)us(s.parent.vnode)&&Xh(r,e,n,s),s=s.parent}}function Xh(t,e,n,r){const s=Ei(e,t,r,!0);ds(()=>{Uo(r[e],s)},n)}function Vi(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function zi(t){return t.shapeFlag&128?t.ssContent:t}function Ei(t,e,n=Re,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rn(),an(n);const a=Qe(e,n,t,o);return Qt(),Pn(),a});return r?s.unshift(i):s.push(i),i}}const Lt=t=>(e,n=Re)=>(!nr||t==="sp")&&Ei(t,e,n),nu=Lt("bm"),An=Lt("m"),ru=Lt("bu"),ki=Lt("u"),Ii=Lt("bum"),ds=Lt("um"),su=Lt("sp"),iu=Lt("rtg"),ou=Lt("rtc");function au(t,e=Re){Ei("ec",t,e)}function Pr(t,e){const n=Fe;if(n===null)return t;const r=Ti(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,u=he]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&vn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u})}return t}function gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Rn(),Qe(l,n,8,[t.el,a,t,e]),Pn())}}const aa="components",Zh="directives";function Ne(t,e){return la(aa,t,!0,e)||t}const lu=Symbol();function Qh(t){return Se(t)?la(aa,t,!1)||t:t||lu}function ep(t){return la(Zh,t)}function la(t,e,n=!0,r=!1){const s=Fe||Re;if(s){const i=s.type;if(t===aa){const a=qs(i,!1);if(a&&(a===e||a===tt(e)||a===as(tt(e))))return i}const o=el(s[t]||i[t],e)||el(s.appContext[t],e);return!o&&r?i:o}}function el(t,e){return t&&(t[e]||t[tt(e)]||t[as(tt(e))])}function cu(t,e,n,r){let s;const i=n&&n[r];if(W(t)||Se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function tp(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(W(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.fn)}return t}function np(t,e,n={},r,s){if(Fe.isCE||Fe.parent&&bn(Fe.parent)&&Fe.parent.isCE)return re("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),ue();const o=i&&uu(i(n)),a=dr(Ie,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function uu(t){return t.some(e=>on(e)?!(e.type===$e||e.type===Ie&&!uu(e.children)):!0)?t:null}function rp(t){const e={};for(const n in t)e[Sr(n)]=t[n];return e}const uo=t=>t?Cu(t)?Ti(t)||t.proxy:uo(t.parent):null,js=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uo(t.parent),$root:t=>uo(t.root),$emit:t=>t.emit,$options:t=>fu(t),$forceUpdate:t=>t.f||(t.f=()=>Qo(t.update)),$nextTick:t=>t.n||(t.n=mi.bind(t.proxy)),$watch:t=>Kh.bind(t)}),fo={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==he&&ce(r,e))return o[e]=1,r[e];if(s!==he&&ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ce(u,e))return o[e]=3,i[e];if(n!==he&&ce(n,e))return o[e]=4,n[e];ho&&(o[e]=0)}}const d=js[e];let f,p;if(d)return e==="$attrs"&&nt(t,"get",e),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==he&&ce(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ce(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==he&&ce(s,e)?(s[e]=n,!0):r!==he&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ce(t,o)||e!==he&&ce(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(js,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},sp=Te({},fo,{get(t,e){if(e!==Symbol.unscopables)return fo.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Ef(e)}});let ho=!0;function ip(t){const e=fu(t),n=t.proxy,r=t.ctx;ho=!1,e.beforeCreate&&tl(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:v,updated:w,activated:A,deactivated:R,beforeDestroy:_,beforeUnmount:g,destroyed:E,unmounted:S,render:O,renderTracked:L,renderTriggered:$,errorCaptured:C,serverPrefetch:B,expose:z,inheritAttrs:G,components:F,directives:ee,filters:V}=e;if(u&&op(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const pe=o[ge];X(pe)&&(r[ge]=pe.bind(n))}if(s){const ge=s.call(n,n);xe(ge)&&(t.data=ur(ge))}if(ho=!0,i)for(const ge in i){const pe=i[ge],Ve=X(pe)?pe.bind(n,n):X(pe.get)?pe.get.bind(n,n):dt,Ft=!X(pe)&&X(pe.set)?pe.set.bind(n):dt,rt=He({get:Ve,set:Ft});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>rt.value,set:st=>rt.value=st})}if(a)for(const ge in a)du(a[ge],r,n,ge);if(l){const ge=X(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(pe=>{Rr(pe,ge[pe])})}d&&tl(d,t,"c");function ae(ge,pe){W(pe)?pe.forEach(Ve=>ge(Ve.bind(n))):pe&&ge(pe.bind(n))}if(ae(nu,f),ae(An,p),ae(ru,v),ae(ki,w),ae(ia,A),ae(oa,R),ae(au,C),ae(ou,L),ae(iu,$),ae(Ii,g),ae(ds,S),ae(su,B),W(z))if(z.length){const ge=t.exposed||(t.exposed={});z.forEach(pe=>{Object.defineProperty(ge,pe,{get:()=>n[pe],set:Ve=>n[pe]=Ve})})}else t.exposed||(t.exposed={});O&&t.render===dt&&(t.render=O),G!=null&&(t.inheritAttrs=G),F&&(t.components=F),ee&&(t.directives=ee)}function op(t,e,n=dt,r=!1){W(t)&&(t=po(t));for(const s in t){const i=t[s];let o;xe(i)?"default"in i?o=et(i.from||s,i.default,!0):o=et(i.from||s):o=et(i),Pe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function tl(t,e,n){Qe(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function du(t,e,n,r){const s=r.includes(".")?Qc(n,r):()=>n[r];if(Se(t)){const i=e[t];X(i)&&qn(s,i)}else if(X(t))qn(s,t.bind(n));else if(xe(t))if(W(t))t.forEach(i=>du(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&qn(s,i,t)}}function fu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Hs(l,u,o,!0)),Hs(l,e,o)),i.set(e,l),l}function Hs(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Hs(t,i,n,!0),s&&s.forEach(o=>Hs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ap[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ap={data:nl,props:pn,emits:pn,methods:pn,computed:pn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:pn,directives:pn,watch:cp,provide:nl,inject:lp};function nl(t,e){return e?t?function(){return Te(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function lp(t,e){return pn(po(t),po(e))}function po(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?Te(Te(Object.create(null),t),e):e}function cp(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const r in e)n[r]=ze(t[r],e[r]);return n}function up(t,e,n,r=!1){const s={},i={};Bs(i,Si,1),t.propsDefaults=Object.create(null),hu(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$c(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dp(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(vi(t.emitsOptions,p))continue;const v=e[p];if(l)if(ce(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const w=tt(p);s[w]=mo(l,a,w,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{hu(t,e,s,i)&&(u=!0);let d;for(const f in a)(!e||!ce(e,f)&&((d=yt(f))===f||!ce(e,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=mo(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ce(e,f)&&!0)&&(delete i[f],u=!0)}u&&Nt(t,"set","$attrs")}function hu(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ir(l))continue;const u=e[l];let d;s&&ce(s,d=tt(l))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:vi(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=oe(n),u=a||he;for(let d=0;d<i.length;d++){const f=i[d];n[f]=mo(s,l,f,u[f],t,!ce(u,f))}}return o}function mo(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&X(l)){const{propsDefaults:u}=s;n in u?r=u[n]:(an(s),r=u[n]=l.call(null,e),Qt())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===yt(n))&&(r=!0))}return r}function pu(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!X(t)){const d=f=>{l=!0;const[p,v]=pu(f,e,!0);Te(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return r.set(t,jn),jn;if(W(i))for(let d=0;d<i.length;d++){const f=tt(i[d]);rl(f)&&(o[f]=he)}else if(i)for(const d in i){const f=tt(d);if(rl(f)){const p=i[d],v=o[f]=W(p)||X(p)?{type:p}:p;if(v){const w=ol(Boolean,v.type),A=ol(String,v.type);v[0]=w>-1,v[1]=A<0||w<A,(w>-1||ce(v,"default"))&&a.push(f)}}}const u=[o,a];return r.set(t,u),u}function rl(t){return t[0]!=="$"}function sl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function il(t,e){return sl(t)===sl(e)}function ol(t,e){return W(e)?e.findIndex(n=>il(n,t)):X(e)&&il(e,t)?0:-1}const mu=t=>t[0]==="_"||t==="$stable",ca=t=>W(t)?t.map(Ye):[Ye(t)],fp=(t,e,n)=>{if(e._n)return e;const r=Qn((...s)=>ca(e(...s)),n);return r._c=!1,r},gu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(mu(s))continue;const i=t[s];if(X(i))e[s]=fp(s,i,r);else if(i!=null){const o=ca(i);e[s]=()=>o}}},vu=(t,e)=>{const n=ca(e);t.slots.default=()=>n},hp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Bs(e,"_",n)):gu(e,t.slots={})}else t.slots={},e&&vu(t,e);Bs(t.slots,Si,1)},pp=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=he;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(s,e),!n&&a===1&&delete s._):(i=!e.$stable,gu(e,s)),o=e}else e&&(vu(t,e),o={default:1});if(i)for(const a in s)!mu(a)&&!(a in o)&&delete s[a]};function _u(){return{app:null,config:{isNativeTag:Pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mp=0;function gp(t,e){return function(r,s=null){X(r)||(r=Object.assign({},r)),s!=null&&!xe(s)&&(s=null);const i=_u(),o=new Set;let a=!1;const l=i.app={_uid:mp++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Lu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&X(u.install)?(o.add(u),u.install(l,...d)):X(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,f){if(!a){const p=re(r,s);return p.appContext=i,d&&e?e(p,u):t(p,u,f),a=!0,l._container=u,u.__vue_app__=l,Ti(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function Ws(t,e,n,r,s=!1){if(W(t)){t.forEach((p,v)=>Ws(p,e&&(W(e)?e[v]:e),n,r,s));return}if(bn(r)&&!s)return;const i=r.shapeFlag&4?Ti(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,d=a.refs===he?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Se(u)?(d[u]=null,ce(f,u)&&(f[u]=null)):Pe(u)&&(u.value=null)),X(l))bt(l,a,12,[o,d]);else{const p=Se(l),v=Pe(l);if(p||v){const w=()=>{if(t.f){const A=p?d[l]:l.value;s?W(A)&&Uo(A,i):W(A)?A.includes(i)||A.push(i):p?(d[l]=[i],ce(f,l)&&(f[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else p?(d[l]=o,ce(f,l)&&(f[l]=o)):v&&(l.value=o,t.k&&(d[t.k]=o))};o?(w.id=-1,Me(w,n)):w()}}}let Bt=!1;const Ts=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",xs=t=>t.nodeType===8;function vp(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,d=(_,g)=>{if(!g.hasChildNodes()){n(null,_,g),zs(),g._vnode=_;return}Bt=!1,f(g.firstChild,_,null,null,null),zs(),g._vnode=_,Bt&&console.error("Hydration completed but contains mismatches.")},f=(_,g,E,S,O,L=!1)=>{const $=xs(_)&&_.data==="[",C=()=>A(_,g,E,S,O,$),{type:B,ref:z,shapeFlag:G,patchFlag:F}=g,ee=_.nodeType;g.el=_,F===-2&&(L=!1,g.dynamicChildren=null);let V=null;switch(B){case tr:ee!==3?g.children===""?(l(g.el=s(""),o(_),_),V=_):V=C():(_.data!==g.children&&(Bt=!0,_.data=g.children),V=i(_));break;case $e:ee!==8||$?V=C():V=i(_);break;case wn:if(ee!==1&&ee!==3)V=C();else{V=_;const Ce=!g.children.length;for(let ae=0;ae<g.staticCount;ae++)Ce&&(g.children+=V.nodeType===1?V.outerHTML:V.data),ae===g.staticCount-1&&(g.anchor=V),V=i(V);return V}break;case Ie:$?V=w(_,g,E,S,O,L):V=C();break;default:if(G&1)ee!==1||g.type.toLowerCase()!==_.tagName.toLowerCase()?V=C():V=p(_,g,E,S,O,L);else if(G&6){g.slotScopeIds=O;const Ce=o(_);if(e(g,Ce,null,E,S,Ts(Ce),L),V=$?R(_):i(_),V&&xs(V)&&V.data==="teleport end"&&(V=i(V)),bn(g)){let ae;$?(ae=re(Ie),ae.anchor=V?V.previousSibling:Ce.lastChild):ae=_.nodeType===3?se(""):re("div"),ae.el=_,g.component.subTree=ae}}else G&64?ee!==8?V=C():V=g.type.hydrate(_,g,E,S,O,L,t,v):G&128&&(V=g.type.hydrate(_,g,E,S,Ts(o(_)),O,L,t,f))}return z!=null&&Ws(z,null,S,g),V},p=(_,g,E,S,O,L)=>{L=L||!!g.dynamicChildren;const{type:$,props:C,patchFlag:B,shapeFlag:z,dirs:G}=g,F=$==="input"&&G||$==="option";if(F||B!==-1){if(G&&gt(g,null,E,"created"),C)if(F||!L||B&48)for(const V in C)(F&&V.endsWith("value")||is(V)&&!Ir(V))&&r(_,V,null,C[V],!1,void 0,E);else C.onClick&&r(_,"onClick",null,C.onClick,!1,void 0,E);let ee;if((ee=C&&C.onVnodeBeforeMount)&&Ke(ee,E,g),G&&gt(g,null,E,"beforeMount"),((ee=C&&C.onVnodeMounted)||G)&&Xc(()=>{ee&&Ke(ee,E,g),G&&gt(g,null,E,"mounted")},S),z&16&&!(C&&(C.innerHTML||C.textContent))){let V=v(_.firstChild,g,_,E,S,O,L);for(;V;){Bt=!0;const Ce=V;V=V.nextSibling,a(Ce)}}else z&8&&_.textContent!==g.children&&(Bt=!0,_.textContent=g.children)}return _.nextSibling},v=(_,g,E,S,O,L,$)=>{$=$||!!g.dynamicChildren;const C=g.children,B=C.length;for(let z=0;z<B;z++){const G=$?C[z]:C[z]=Ye(C[z]);if(_)_=f(_,G,S,O,L,$);else{if(G.type===tr&&!G.children)continue;Bt=!0,n(null,G,E,null,S,O,Ts(E),L)}}return _},w=(_,g,E,S,O,L)=>{const{slotScopeIds:$}=g;$&&(O=O?O.concat($):$);const C=o(_),B=v(i(_),g,C,E,S,O,L);return B&&xs(B)&&B.data==="]"?i(g.anchor=B):(Bt=!0,l(g.anchor=u("]"),C,B),B)},A=(_,g,E,S,O,L)=>{if(Bt=!0,g.el=null,L){const B=R(_);for(;;){const z=i(_);if(z&&z!==B)a(z);else break}}const $=i(_),C=o(_);return a(_),n(null,g,C,$,E,S,Ts(C),O),$},R=_=>{let g=0;for(;_;)if(_=i(_),_&&xs(_)&&(_.data==="["&&g++,_.data==="]")){if(g===0)return i(_);g--}return _};return[d,f]}const Me=Xc;function yu(t){return wu(t)}function bu(t){return wu(t,vp)}function wu(t,e){const n=Lf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:v=dt,cloneNode:w,insertStaticContent:A}=t,R=(c,h,m,b=null,k=null,y=null,D=!1,T=null,P=!!h.dynamicChildren)=>{if(c===h)return;c&&!vt(c,h)&&(b=q(c),We(c,k,y,!0),c=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:x,ref:J,shapeFlag:H}=h;switch(x){case tr:_(c,h,m,b);break;case $e:g(c,h,m,b);break;case wn:c==null&&E(h,m,b,D);break;case Ie:ee(c,h,m,b,k,y,D,T,P);break;default:H&1?L(c,h,m,b,k,y,D,T,P):H&6?V(c,h,m,b,k,y,D,T,P):(H&64||H&128)&&x.process(c,h,m,b,k,y,D,T,P,ve)}J!=null&&k&&Ws(J,c&&c.ref,y,h||c,!h)},_=(c,h,m,b)=>{if(c==null)r(h.el=a(h.children),m,b);else{const k=h.el=c.el;h.children!==c.children&&u(k,h.children)}},g=(c,h,m,b)=>{c==null?r(h.el=l(h.children||""),m,b):h.el=c.el},E=(c,h,m,b)=>{[c.el,c.anchor]=A(c.children,h,m,b,c.el,c.anchor)},S=({el:c,anchor:h},m,b)=>{let k;for(;c&&c!==h;)k=p(c),r(c,m,b),c=k;r(h,m,b)},O=({el:c,anchor:h})=>{let m;for(;c&&c!==h;)m=p(c),s(c),c=m;s(h)},L=(c,h,m,b,k,y,D,T,P)=>{D=D||h.type==="svg",c==null?$(h,m,b,k,y,D,T,P):z(c,h,k,y,D,T,P)},$=(c,h,m,b,k,y,D,T)=>{let P,x;const{type:J,props:H,shapeFlag:Y,transition:Q,patchFlag:de,dirs:ye}=c;if(c.el&&w!==void 0&&de===-1)P=c.el=w(c.el);else{if(P=c.el=o(c.type,y,H&&H.is,H),Y&8?d(P,c.children):Y&16&&B(c.children,P,null,b,k,y&&J!=="foreignObject",D,T),ye&&gt(c,null,b,"created"),H){for(const ke in H)ke!=="value"&&!Ir(ke)&&i(P,ke,null,H[ke],y,c.children,b,k,N);"value"in H&&i(P,"value",null,H.value),(x=H.onVnodeBeforeMount)&&Ke(x,b,c)}C(P,c,c.scopeId,D,b)}ye&&gt(c,null,b,"beforeMount");const be=(!k||k&&!k.pendingBranch)&&Q&&!Q.persisted;be&&Q.beforeEnter(P),r(P,h,m),((x=H&&H.onVnodeMounted)||be||ye)&&Me(()=>{x&&Ke(x,b,c),be&&Q.enter(P),ye&&gt(c,null,b,"mounted")},k)},C=(c,h,m,b,k)=>{if(m&&v(c,m),b)for(let y=0;y<b.length;y++)v(c,b[y]);if(k){let y=k.subTree;if(h===y){const D=k.vnode;C(c,D,D.scopeId,D.slotScopeIds,k.parent)}}},B=(c,h,m,b,k,y,D,T,P=0)=>{for(let x=P;x<c.length;x++){const J=c[x]=T?Kt(c[x]):Ye(c[x]);R(null,J,h,m,b,k,y,D,T)}},z=(c,h,m,b,k,y,D)=>{const T=h.el=c.el;let{patchFlag:P,dynamicChildren:x,dirs:J}=h;P|=c.patchFlag&16;const H=c.props||he,Y=h.props||he;let Q;m&&fn(m,!1),(Q=Y.onVnodeBeforeUpdate)&&Ke(Q,m,h,c),J&&gt(h,c,m,"beforeUpdate"),m&&fn(m,!0);const de=k&&h.type!=="foreignObject";if(x?G(c.dynamicChildren,x,T,m,b,de,y):D||Ve(c,h,T,null,m,b,de,y,!1),P>0){if(P&16)F(T,h,H,Y,m,b,k);else if(P&2&&H.class!==Y.class&&i(T,"class",null,Y.class,k),P&4&&i(T,"style",H.style,Y.style,k),P&8){const ye=h.dynamicProps;for(let be=0;be<ye.length;be++){const ke=ye[be],lt=H[ke],Mn=Y[ke];(Mn!==lt||ke==="value")&&i(T,ke,lt,Mn,k,c.children,m,b,N)}}P&1&&c.children!==h.children&&d(T,h.children)}else!D&&x==null&&F(T,h,H,Y,m,b,k);((Q=Y.onVnodeUpdated)||J)&&Me(()=>{Q&&Ke(Q,m,h,c),J&&gt(h,c,m,"updated")},b)},G=(c,h,m,b,k,y,D)=>{for(let T=0;T<h.length;T++){const P=c[T],x=h[T],J=P.el&&(P.type===Ie||!vt(P,x)||P.shapeFlag&70)?f(P.el):m;R(P,x,J,null,b,k,y,D,!0)}},F=(c,h,m,b,k,y,D)=>{if(m!==b){for(const T in b){if(Ir(T))continue;const P=b[T],x=m[T];P!==x&&T!=="value"&&i(c,T,x,P,D,h.children,k,y,N)}if(m!==he)for(const T in m)!Ir(T)&&!(T in b)&&i(c,T,m[T],null,D,h.children,k,y,N);"value"in b&&i(c,"value",m.value,b.value)}},ee=(c,h,m,b,k,y,D,T,P)=>{const x=h.el=c?c.el:a(""),J=h.anchor=c?c.anchor:a("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:Q}=h;Q&&(T=T?T.concat(Q):Q),c==null?(r(x,m,b),r(J,m,b),B(h.children,m,J,k,y,D,T,P)):H>0&&H&64&&Y&&c.dynamicChildren?(G(c.dynamicChildren,Y,m,k,y,D,T),(h.key!=null||k&&h===k.subTree)&&ua(c,h,!0)):Ve(c,h,m,J,k,y,D,T,P)},V=(c,h,m,b,k,y,D,T,P)=>{h.slotScopeIds=T,c==null?h.shapeFlag&512?k.ctx.activate(h,m,b,D,P):Ce(h,m,b,k,y,D,P):ae(c,h,P)},Ce=(c,h,m,b,k,y,D)=>{const T=c.component=xu(c,b,k);if(us(c)&&(T.ctx.renderer=ve),Ru(T),T.asyncDep){if(k&&k.registerDep(T,ge),!c.el){const P=T.subTree=re($e);g(null,P,h,m)}return}ge(T,c,h,m,k,y,D)},ae=(c,h,m)=>{const b=h.component=c.component;if(Fh(c,h,m))if(b.asyncDep&&!b.asyncResolved){pe(b,h,m);return}else b.next=h,Ph(b.update),b.update();else h.el=c.el,b.vnode=h},ge=(c,h,m,b,k,y,D)=>{const T=()=>{if(c.isMounted){let{next:J,bu:H,u:Y,parent:Q,vnode:de}=c,ye=J,be;fn(c,!1),J?(J.el=de.el,pe(c,J,D)):J=de,H&&Wn(H),(be=J.props&&J.props.onVnodeBeforeUpdate)&&Ke(be,Q,J,de),fn(c,!0);const ke=Ns(c),lt=c.subTree;c.subTree=ke,R(lt,ke,f(lt.el),q(lt),c,k,y),J.el=ke.el,ye===null&&ta(c,ke.el),Y&&Me(Y,k),(be=J.props&&J.props.onVnodeUpdated)&&Me(()=>Ke(be,Q,J,de),k)}else{let J;const{el:H,props:Y}=h,{bm:Q,m:de,parent:ye}=c,be=bn(h);if(fn(c,!1),Q&&Wn(Q),!be&&(J=Y&&Y.onVnodeBeforeMount)&&Ke(J,ye,h),fn(c,!0),H&&te){const ke=()=>{c.subTree=Ns(c),te(H,c.subTree,c,k,null)};be?h.type.__asyncLoader().then(()=>!c.isUnmounted&&ke()):ke()}else{const ke=c.subTree=Ns(c);R(null,ke,m,b,c,k,y),h.el=ke.el}if(de&&Me(de,k),!be&&(J=Y&&Y.onVnodeMounted)){const ke=h;Me(()=>Ke(J,ye,ke),k)}(h.shapeFlag&256||ye&&bn(ye.vnode)&&ye.vnode.shapeFlag&256)&&c.a&&Me(c.a,k),c.isMounted=!0,h=m=b=null}},P=c.effect=new ls(T,()=>Qo(x),c.scope),x=c.update=()=>P.run();x.id=c.uid,fn(c,!0),x()},pe=(c,h,m)=>{h.component=c;const b=c.vnode.props;c.vnode=h,c.next=null,dp(c,h.props,b,m),pp(c,h.children,m),Rn(),gi(void 0,c.update),Pn()},Ve=(c,h,m,b,k,y,D,T,P=!1)=>{const x=c&&c.children,J=c?c.shapeFlag:0,H=h.children,{patchFlag:Y,shapeFlag:Q}=h;if(Y>0){if(Y&128){rt(x,H,m,b,k,y,D,T,P);return}else if(Y&256){Ft(x,H,m,b,k,y,D,T,P);return}}Q&8?(J&16&&N(x,k,y),H!==x&&d(m,H)):J&16?Q&16?rt(x,H,m,b,k,y,D,T,P):N(x,k,y,!0):(J&8&&d(m,""),Q&16&&B(H,m,b,k,y,D,T,P))},Ft=(c,h,m,b,k,y,D,T,P)=>{c=c||jn,h=h||jn;const x=c.length,J=h.length,H=Math.min(x,J);let Y;for(Y=0;Y<H;Y++){const Q=h[Y]=P?Kt(h[Y]):Ye(h[Y]);R(c[Y],Q,m,null,k,y,D,T,P)}x>J?N(c,k,y,!0,!1,H):B(h,m,b,k,y,D,T,P,H)},rt=(c,h,m,b,k,y,D,T,P)=>{let x=0;const J=h.length;let H=c.length-1,Y=J-1;for(;x<=H&&x<=Y;){const Q=c[x],de=h[x]=P?Kt(h[x]):Ye(h[x]);if(vt(Q,de))R(Q,de,m,null,k,y,D,T,P);else break;x++}for(;x<=H&&x<=Y;){const Q=c[H],de=h[Y]=P?Kt(h[Y]):Ye(h[Y]);if(vt(Q,de))R(Q,de,m,null,k,y,D,T,P);else break;H--,Y--}if(x>H){if(x<=Y){const Q=Y+1,de=Q<J?h[Q].el:b;for(;x<=Y;)R(null,h[x]=P?Kt(h[x]):Ye(h[x]),m,de,k,y,D,T,P),x++}}else if(x>Y)for(;x<=H;)We(c[x],k,y,!0),x++;else{const Q=x,de=x,ye=new Map;for(x=de;x<=Y;x++){const Ge=h[x]=P?Kt(h[x]):Ye(h[x]);Ge.key!=null&&ye.set(Ge.key,x)}let be,ke=0;const lt=Y-de+1;let Mn=!1,$a=0;const mr=new Array(lt);for(x=0;x<lt;x++)mr[x]=0;for(x=Q;x<=H;x++){const Ge=c[x];if(ke>=lt){We(Ge,k,y,!0);continue}let pt;if(Ge.key!=null)pt=ye.get(Ge.key);else for(be=de;be<=Y;be++)if(mr[be-de]===0&&vt(Ge,h[be])){pt=be;break}pt===void 0?We(Ge,k,y,!0):(mr[pt-de]=x+1,pt>=$a?$a=pt:Mn=!0,R(Ge,h[pt],m,null,k,y,D,T,P),ke++)}const Ba=Mn?_p(mr):jn;for(be=Ba.length-1,x=lt-1;x>=0;x--){const Ge=de+x,pt=h[Ge],Ua=Ge+1<J?h[Ge+1].el:b;mr[x]===0?R(null,pt,m,Ua,k,y,D,T,P):Mn&&(be<0||x!==Ba[be]?st(pt,m,Ua,2):be--)}}},st=(c,h,m,b,k=null)=>{const{el:y,type:D,transition:T,children:P,shapeFlag:x}=c;if(x&6){st(c.component.subTree,h,m,b);return}if(x&128){c.suspense.move(h,m,b);return}if(x&64){D.move(c,h,m,ve);return}if(D===Ie){r(y,h,m);for(let H=0;H<P.length;H++)st(P[H],h,m,b);r(c.anchor,h,m);return}if(D===wn){S(c,h,m);return}if(b!==2&&x&1&&T)if(b===0)T.beforeEnter(y),r(y,h,m),Me(()=>T.enter(y),k);else{const{leave:H,delayLeave:Y,afterLeave:Q}=T,de=()=>r(y,h,m),ye=()=>{H(y,()=>{de(),Q&&Q()})};Y?Y(y,de,ye):ye()}else r(y,h,m)},We=(c,h,m,b=!1,k=!1)=>{const{type:y,props:D,ref:T,children:P,dynamicChildren:x,shapeFlag:J,patchFlag:H,dirs:Y}=c;if(T!=null&&Ws(T,null,m,c,!0),J&256){h.ctx.deactivate(c);return}const Q=J&1&&Y,de=!bn(c);let ye;if(de&&(ye=D&&D.onVnodeBeforeUnmount)&&Ke(ye,h,c),J&6)j(c.component,m,b);else{if(J&128){c.suspense.unmount(m,b);return}Q&&gt(c,null,h,"beforeUnmount"),J&64?c.type.remove(c,h,m,k,ve,b):x&&(y!==Ie||H>0&&H&64)?N(x,h,m,!1,!0):(y===Ie&&H&384||!k&&J&16)&&N(P,h,m),b&&dn(c)}(de&&(ye=D&&D.onVnodeUnmounted)||Q)&&Me(()=>{ye&&Ke(ye,h,c),Q&&gt(c,null,h,"unmounted")},m)},dn=c=>{const{type:h,el:m,anchor:b,transition:k}=c;if(h===Ie){I(m,b);return}if(h===wn){O(c);return}const y=()=>{s(m),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(c.shapeFlag&1&&k&&!k.persisted){const{leave:D,delayLeave:T}=k,P=()=>D(m,y);T?T(c.el,y,P):P()}else y()},I=(c,h)=>{let m;for(;c!==h;)m=p(c),s(c),c=m;s(h)},j=(c,h,m)=>{const{bum:b,scope:k,update:y,subTree:D,um:T}=c;b&&Wn(b),k.stop(),y&&(y.active=!1,We(D,c,h,m)),T&&Me(T,h),Me(()=>{c.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},N=(c,h,m,b=!1,k=!1,y=0)=>{for(let D=y;D<c.length;D++)We(c[D],h,m,b,k)},q=c=>c.shapeFlag&6?q(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),fe=(c,h,m)=>{c==null?h._vnode&&We(h._vnode,null,null,!0):R(h._vnode||null,c,h,null,null,null,m),zs(),h._vnode=c},ve={p:R,um:We,m:st,r:dn,mt:Ce,mc:B,pc:Ve,pbc:G,n:q,o:t};let ne,te;return e&&([ne,te]=e(ve)),{render:fe,hydrate:ne,createApp:gp(fe,ne)}}function fn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ua(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Kt(s[i]),a.el=o.el),n||ua(o,a))}}function _p(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yp=t=>t.__isTeleport,Or=t=>t&&(t.disabled||t.disabled===""),al=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,go=(t,e)=>{const n=t&&t.to;return Se(n)?e?e(n):null:n},bp={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:d,pc:f,pbc:p,o:{insert:v,querySelector:w,createText:A,createComment:R}}=u,_=Or(e.props);let{shapeFlag:g,children:E,dynamicChildren:S}=e;if(t==null){const O=e.el=A(""),L=e.anchor=A("");v(O,n,r),v(L,n,r);const $=e.target=go(e.props,w),C=e.targetAnchor=A("");$&&(v(C,$),o=o||al($));const B=(z,G)=>{g&16&&d(E,z,G,s,i,o,a,l)};_?B(n,L):$&&B($,C)}else{e.el=t.el;const O=e.anchor=t.anchor,L=e.target=t.target,$=e.targetAnchor=t.targetAnchor,C=Or(t.props),B=C?n:L,z=C?O:$;if(o=o||al(L),S?(p(t.dynamicChildren,S,B,s,i,o,a),ua(t,e,!0)):l||f(t,e,B,z,s,i,o,a,!1),_)C||Cs(e,n,O,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const G=e.target=go(e.props,w);G&&Cs(e,G,null,u,0)}else C&&Cs(e,L,$,u,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:d,target:f,props:p}=t;if(f&&i(d),(o||!Or(p))&&(i(u),a&16))for(let v=0;v<l.length;v++){const w=l[v];s(w,e,n,!0,!!w.dynamicChildren)}},move:Cs,hydrate:wp};function Cs(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:d}=t,f=i===2;if(f&&r(o,e,n),(!f||Or(d))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);f&&r(a,e,n)}function wp(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const d=e.target=go(e.props,l);if(d){const f=d._lpa||d.firstChild;if(e.shapeFlag&16)if(Or(e.props))e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=f;else{e.anchor=o(t);let p=f;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){e.targetAnchor=p,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(f,e,d,n,r,s,i)}}return e.anchor&&o(e.anchor)}const Ep=bp,Ie=Symbol(void 0),tr=Symbol(void 0),$e=Symbol(void 0),wn=Symbol(void 0),Ar=[];let qe=null;function ue(t=!1){Ar.push(qe=t?null:[])}function Eu(){Ar.pop(),qe=Ar[Ar.length-1]||null}let In=1;function vo(t){In+=t}function ku(t){return t.dynamicChildren=In>0?qe||jn:null,Eu(),In>0&&qe&&qe.push(t),t}function _e(t,e,n,r,s,i){return ku(M(t,e,n,r,s,i,!0))}function dr(t,e,n,r,s){return ku(re(t,e,n,r,s,!0))}function on(t){return t?t.__v_isVNode===!0:!1}function vt(t,e){return t.type===e.type&&t.key===e.key}function kp(t){}const Si="__vInternal",Iu=({key:t})=>t!=null?t:null,Ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||Pe(t)||X(t)?{i:Fe,r:t,k:e,f:!!n}:t:null;function M(t,e=null,n=null,r=0,s=null,i=t===Ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Iu(e),ref:e&&Ms(e),scopeId:_i,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(fa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),In>0&&!o&&qe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qe.push(l),l}const re=Ip;function Ip(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lu)&&(t=$e),on(t)){const a=kt(t,e,!0);return n&&fa(a,n),In>0&&!i&&qe&&(a.shapeFlag&6?qe[qe.indexOf(t)]=a:qe.push(a)),a.patchFlag|=-2,a}if(Np(t)&&(t=t.__vccOpts),e){e=Su(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=at(a)),xe(l)&&(qo(l)&&!W(l)&&(l=Te({},l)),e.style=ss(l))}const o=Se(t)?1:Yc(t)?128:yp(t)?64:xe(t)?4:X(t)?2:0;return M(t,e,n,r,s,o,i,!0)}function Su(t){return t?qo(t)||Si in t?Te({},t):t:null}function kt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Tu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Iu(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Ms(e)):[s,Ms(e)]:Ms(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kt(t.ssContent),ssFallback:t.ssFallback&&kt(t.ssFallback),el:t.el,anchor:t.anchor}}function se(t=" ",e=0){return re(tr,null,t,e)}function da(t,e){const n=re(wn,null,t);return n.staticCount=e,n}function je(t="",e=!1){return e?(ue(),dr($e,null,t)):re($e,null,t)}function Ye(t){return t==null||typeof t=="boolean"?re($e):W(t)?re(Ie,null,t.slice()):typeof t=="object"?Kt(t):re(tr,null,String(t))}function Kt(t){return t.el===null||t.memo?t:kt(t)}function fa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Si in e)?e._ctx=Fe:s===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),r&64?(n=16,e=[se(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=at([e.class,r.class]));else if(s==="style")e.style=ss([e.style,r.style]);else if(is(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ke(t,e,n,r=null){Qe(t,e,7,[n,r])}const Sp=_u();let Tp=0;function xu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Sp,i={uid:Tp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pu(r,s),emitsOptions:Jc(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ah.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const cn=()=>Re||Fe,an=t=>{Re=t,t.scope.on()},Qt=()=>{Re&&Re.scope.off(),Re=null};function Cu(t){return t.vnode.shapeFlag&4}let nr=!1;function Ru(t,e=!1){nr=e;const{props:n,children:r}=t.vnode,s=Cu(t);up(t,n,s,e),hp(t,r);const i=s?xp(t,e):void 0;return nr=!1,i}function xp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Go(new Proxy(t.ctx,fo));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ou(t):null;an(t),Rn();const i=bt(r,t,0,[t.props,s]);if(Pn(),Qt(),Vo(i)){if(i.then(Qt,Qt),e)return i.then(o=>{_o(t,o,e)}).catch(o=>{On(o,t,0)});t.asyncDep=i}else _o(t,i,e)}else Pu(t,e)}function _o(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Xo(e)),Pu(t,n)}let Ks,yo;function Cp(t){Ks=t,yo=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,sp))}}const Rp=()=>!Ks;function Pu(t,e,n){const r=t.type;if(!t.render){if(!e&&Ks&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Te(Te({isCustomElement:i,delimiters:a},o),l);r.render=Ks(s,u)}}t.render=r.render||dt,yo&&yo(t)}an(t),Rn(),ip(t),Pn(),Qt()}function Pp(t){return new Proxy(t.attrs,{get(e,n){return nt(t,"get","$attrs"),e[n]}})}function Ou(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Pp(t))},slots:t.slots,emit:t.emit,expose:e}}function Ti(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xo(Go(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)}}))}const Op=/(?:^|[-_])(\w)/g,Ap=t=>t.replace(Op,e=>e.toUpperCase()).replace(/[-_]/g,"");function qs(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Au(t,e,n=!1){let r=qs(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?Ap(r):n?"App":"Anonymous"}function Np(t){return X(t)&&"__vccOpts"in t}const He=(t,e)=>kh(t,e,nr);function Mp(){return null}function Dp(){return null}function Lp(t){}function Fp(t,e){return null}function $p(){return Nu().slots}function Bp(){return Nu().attrs}function Nu(){const t=cn();return t.setupContext||(t.setupContext=Ou(t))}function Up(t,e){const n=W(t)?t.reduce((r,s)=>(r[s]={},r),{}):t;for(const r in e){const s=n[r];s?W(s)||X(s)?n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(n[r]={default:e[r]})}return n}function Vp(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function zp(t){const e=cn();let n=t();return Qt(),Vo(n)&&(n=n.catch(r=>{throw an(e),r})),[n,()=>an(e)]}function xi(t,e,n){const r=arguments.length;return r===2?xe(e)&&!W(e)?on(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&on(n)&&(n=[n]),re(t,e,n))}const Mu=Symbol(""),jp=()=>{{const t=et(Mu);return t||zc("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Hp(){}function Wp(t,e,n,r){const s=n[r];if(s&&Du(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function Du(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(Xn(n[r],e[r]))return!1;return In>0&&qe&&qe.push(t),!0}const Lu="3.2.37",Kp={createComponentInstance:xu,setupComponent:Ru,renderComponentRoot:Ns,setCurrentRenderingInstance:Hr,isVNode:on,normalizeVNode:Ye},qp=Kp,Gp=null,Jp=null,Yp="http://www.w3.org/2000/svg",gn=typeof document!="undefined"?document:null,ll=gn&&gn.createElement("template"),Xp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?gn.createElementNS(Yp,t):gn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ll.innerHTML=r?`<svg>${t}</svg>`:t;const a=ll.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Zp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Qp(t,e,n){const r=t.style,s=Se(n);if(n&&!s){for(const i in n)bo(r,i,n[i]);if(e&&!Se(e))for(const i in e)n[i]==null&&bo(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const cl=/\s*!important$/;function bo(t,e,n){if(W(n))n.forEach(r=>bo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=em(t,e);cl.test(n)?t.setProperty(yt(r),n.replace(cl,""),"important"):t[r]=n}}const ul=["Webkit","Moz","ms"],ji={};function em(t,e){const n=ji[e];if(n)return n;let r=tt(e);if(r!=="filter"&&r in t)return ji[e]=r;r=as(r);for(let s=0;s<ul.length;s++){const i=ul[s]+r;if(i in t)return ji[e]=i}return e}const dl="http://www.w3.org/1999/xlink";function tm(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dl,e.slice(6,e.length)):t.setAttributeNS(dl,e,n);else{const i=If(e);n==null||i&&!wc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nm(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Fu,rm]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let wo=0;const sm=Promise.resolve(),im=()=>{wo=0},om=()=>wo||(sm.then(im),wo=Fu());function xt(t,e,n,r){t.addEventListener(e,n,r)}function am(t,e,n,r){t.removeEventListener(e,n,r)}function lm(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=cm(e);if(r){const u=i[e]=um(r,s);xt(t,a,u,l)}else o&&(am(t,a,o,l),i[e]=void 0)}}const fl=/(?:Once|Passive|Capture)$/;function cm(t){let e;if(fl.test(t)){e={};let n;for(;n=t.match(fl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[yt(t.slice(2)),e]}function um(t,e){const n=r=>{const s=r.timeStamp||Fu();(rm||s>=n.attached-1)&&Qe(dm(r,n.value),e,5,[r])};return n.value=t,n.attached=om(),n}function dm(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hl=/^on[a-z]/,fm=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Zp(t,r,s):e==="style"?Qp(t,n,r):is(e)?Bo(e)||lm(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hm(t,e,r,s))?nm(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tm(t,e,r,s))};function hm(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&hl.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hl.test(e)&&Se(n)?!1:e in t}function $u(t,e){const n=Ue(t);class r extends Ci{constructor(i){super(n,i,e)}}return r.def=n,r}const pm=t=>$u(t,ed),mm=typeof HTMLElement!="undefined"?HTMLElement:class{};class Ci extends mm{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,mi(()=>{this._connected||(ko(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=r=>{const{props:s,styles:i}=r,o=!W(s),a=s?o?Object.keys(s):s:[];let l;if(o)for(const u in this._props){const d=s[u];(d===Number||d&&d.type===Number)&&(this._props[u]=rn(this._props[u]),(l||(l=Object.create(null)))[u]=!0)}this._numberProps=l;for(const u of Object.keys(this))u[0]!=="_"&&this._setProp(u,this[u],!0,!1);for(const u of a.map(tt))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(d){this._setProp(u,d)}});this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=rn(n)),this._setProp(tt(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(yt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(yt(e),n+""):n||this.removeAttribute(yt(e))))}_update(){ko(this._createVNode(),this.shadowRoot)}_createVNode(){const e=re(this._def,Te({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(s,...i)=>{this.dispatchEvent(new CustomEvent(s,{detail:i}))};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof Ci){n.parent=r._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function gm(t="$style"){{const e=cn();if(!e)return he;const n=e.type.__cssModules;if(!n)return he;const r=n[t];return r||he}}function vm(t){const e=cn();if(!e)return;const n=()=>Eo(e.subTree,t(e.proxy));Zc(n),An(()=>{const r=new MutationObserver(n);r.observe(e.subTree.el.parentNode,{childList:!0}),ds(()=>r.disconnect())})}function Eo(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Eo(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)pl(t.el,e);else if(t.type===Ie)t.children.forEach(n=>Eo(n,e));else if(t.type===wn){let{el:n,anchor:r}=t;for(;n&&(pl(n,e),n!==r);)n=n.nextSibling}}function pl(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const Ut="transition",gr="animation",ha=(t,{slots:e})=>xi(sa,Uu(t),e);ha.displayName="Transition";const Bu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_m=ha.props=Te({},sa.props,Bu),hn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},ml=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Uu(t){const e={};for(const F in t)F in Bu||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,w=ym(s),A=w&&w[0],R=w&&w[1],{onBeforeEnter:_,onEnter:g,onEnterCancelled:E,onLeave:S,onLeaveCancelled:O,onBeforeAppear:L=_,onAppear:$=g,onAppearCancelled:C=E}=e,B=(F,ee,V)=>{Wt(F,ee?d:a),Wt(F,ee?u:o),V&&V()},z=(F,ee)=>{F._isLeaving=!1,Wt(F,f),Wt(F,v),Wt(F,p),ee&&ee()},G=F=>(ee,V)=>{const Ce=F?$:g,ae=()=>B(ee,F,V);hn(Ce,[ee,ae]),gl(()=>{Wt(ee,F?l:i),St(ee,F?d:a),ml(Ce)||vl(ee,r,A,ae)})};return Te(e,{onBeforeEnter(F){hn(_,[F]),St(F,i),St(F,o)},onBeforeAppear(F){hn(L,[F]),St(F,l),St(F,u)},onEnter:G(!1),onAppear:G(!0),onLeave(F,ee){F._isLeaving=!0;const V=()=>z(F,ee);St(F,f),zu(),St(F,p),gl(()=>{!F._isLeaving||(Wt(F,f),St(F,v),ml(S)||vl(F,r,R,V))}),hn(S,[F,V])},onEnterCancelled(F){B(F,!1),hn(E,[F])},onAppearCancelled(F){B(F,!0),hn(C,[F])},onLeaveCancelled(F){z(F),hn(O,[F])}})}function ym(t){if(t==null)return null;if(xe(t))return[Hi(t.enter),Hi(t.leave)];{const e=Hi(t);return[e,e]}}function Hi(t){return rn(t)}function St(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Wt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function gl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bm=0;function vl(t,e,n,r){const s=t._endId=++bm,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Vu(t,e);if(!o)return r();const u=o+"end";let d=0;const f=()=>{t.removeEventListener(u,p),i()},p=v=>{v.target===t&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},a+1),t.addEventListener(u,p)}function Vu(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(Ut+"Delay"),i=r(Ut+"Duration"),o=_l(s,i),a=r(gr+"Delay"),l=r(gr+"Duration"),u=_l(a,l);let d=null,f=0,p=0;e===Ut?o>0&&(d=Ut,f=o,p=i.length):e===gr?u>0&&(d=gr,f=u,p=l.length):(f=Math.max(o,u),d=f>0?o>u?Ut:gr:null,p=d?d===Ut?i.length:l.length:0);const v=d===Ut&&/\b(transform|all)(,|$)/.test(n[Ut+"Property"]);return{type:d,timeout:f,propCount:p,hasTransform:v}}function _l(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yl(n)+yl(t[r])))}function yl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zu(){return document.body.offsetHeight}const ju=new WeakMap,Hu=new WeakMap,wm={name:"TransitionGroup",props:Te({},_m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=cn(),r=ra();let s,i;return ki(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Tm(s[0].el,n.vnode.el,o))return;s.forEach(km),s.forEach(Im);const a=s.filter(Sm);zu(),a.forEach(l=>{const u=l.el,d=u.style;St(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Wt(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=oe(t),a=Uu(o);let l=o.tag||Ie;s=i,i=e.default?wi(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&kn(d,er(d,a,r,n))}if(s)for(let u=0;u<s.length;u++){const d=s[u];kn(d,er(d,a,r,n)),ju.set(d,d.el.getBoundingClientRect())}return re(l,null,i)}}},Em=wm;function km(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Im(t){Hu.set(t,t.el.getBoundingClientRect())}function Sm(t){const e=ju.get(t),n=Hu.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Tm(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Vu(r);return s.removeChild(r),i}const ln=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Wn(e,n):e};function xm(t){t.target.composing=!0}function bl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ln(s);const i=r||s.props&&s.props.type==="number";xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=rn(a)),t._assign(a)}),n&&xt(t,"change",()=>{t.value=t.value.trim()}),e||(xt(t,"compositionstart",xm),xt(t,"compositionend",bl),xt(t,"change",bl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ln(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&rn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},pa={deep:!0,created(t,e,n){t._assign=ln(n),xt(t,"change",()=>{const r=t._modelValue,s=rr(t),i=t.checked,o=t._assign;if(W(r)){const a=li(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Cn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Ku(t,i))})},mounted:wl,beforeUpdate(t,e,n){t._assign=ln(n),wl(t,e,n)}};function wl(t,{value:e,oldValue:n},r){t._modelValue=e,W(e)?t.checked=li(e,r.props.value)>-1:Cn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=nn(e,Ku(t,!0)))}const Gn={created(t,{value:e},n){t.checked=nn(e,n.props.value),t._assign=ln(n),xt(t,"change",()=>{t._assign(rr(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=ln(r),e!==n&&(t.checked=nn(e,r.props.value))}},Wu={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Cn(e);xt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?rn(rr(o)):rr(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=ln(r)},mounted(t,{value:e}){El(t,e)},beforeUpdate(t,e,n){t._assign=ln(n)},updated(t,{value:e}){El(t,e)}};function El(t,e){const n=t.multiple;if(!(n&&!W(e)&&!Cn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=rr(i);if(n)W(e)?i.selected=li(e,o)>-1:i.selected=e.has(o);else if(nn(rr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function rr(t){return"_value"in t?t._value:t.value}function Ku(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qu={created(t,e,n){Rs(t,e,n,null,"created")},mounted(t,e,n){Rs(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Rs(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Rs(t,e,n,r,"updated")}};function Gu(t,e){switch(t){case"SELECT":return Wu;case"TEXTAREA":return Kr;default:switch(e){case"checkbox":return pa;case"radio":return Gn;default:return Kr}}}function Rs(t,e,n,r,s){const o=Gu(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function Cm(){Kr.getSSRProps=({value:t})=>({value:t}),Gn.getSSRProps=({value:t},e)=>{if(e.props&&nn(e.props.value,t))return{checked:!0}},pa.getSSRProps=({value:t},e)=>{if(W(t)){if(e.props&&li(t,e.props.value)>-1)return{checked:!0}}else if(Cn(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},qu.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Gu(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Rm=["ctrl","shift","alt","meta"],Pm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rm.some(n=>t[`${n}Key`]&&!e.includes(n))},Ju=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Pm[e[s]];if(i&&i(n,e))return}return t(n,...r)},Om={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Am=(t,e)=>n=>{if(!("key"in n))return;const r=yt(n.key);if(e.some(s=>s===r||Om[s]===r))return t(n)},Yu={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):vr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),vr(t,!0),r.enter(t)):r.leave(t,()=>{vr(t,!1)}):vr(t,e))},beforeUnmount(t,{value:e}){vr(t,e)}};function vr(t,e){t.style.display=e?t._vod:"none"}function Nm(){Yu.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Xu=Te({patchProp:fm},Xp);let Nr,kl=!1;function Zu(){return Nr||(Nr=yu(Xu))}function Qu(){return Nr=kl?Nr:bu(Xu),kl=!0,Nr}const ko=(...t)=>{Zu().render(...t)},ed=(...t)=>{Qu().hydrate(...t)},td=(...t)=>{const e=Zu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nd(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Mm=(...t)=>{const e=Qu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nd(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function nd(t){return Se(t)?document.querySelector(t):t}let Il=!1;const Dm=()=>{Il||(Il=!0,Cm(),Nm())},Lm=()=>{};var Fm=Object.freeze(Object.defineProperty({__proto__:null,compile:Lm,EffectScope:jo,ReactiveEffect:ls,customRef:yh,effect:zf,effectScope:Ff,getCurrentScope:$f,isProxy:qo,isReactive:yn,isReadonly:Zn,isRef:Pe,isShallow:Us,markRaw:Go,onScopeDispose:Bf,proxyRefs:Xo,reactive:ur,readonly:Ko,ref:Ze,shallowReactive:$c,shallowReadonly:ph,shallowRef:Bc,stop:jf,toRaw:oe,toRef:Vc,toRefs:bh,triggerRef:gh,unref:U,camelize:tt,capitalize:as,normalizeClass:at,normalizeProps:Cf,normalizeStyle:ss,toDisplayString:Oe,toHandlerKey:Sr,BaseTransition:sa,Comment:$e,Fragment:Ie,KeepAlive:Yh,Static:wn,Suspense:Bh,Teleport:Ep,Text:tr,callWithAsyncErrorHandling:Qe,callWithErrorHandling:bt,cloneVNode:kt,compatUtils:Jp,computed:He,createBlock:dr,createCommentVNode:je,createElementBlock:_e,createElementVNode:M,createHydrationRenderer:bu,createPropsRestProxy:Vp,createRenderer:yu,createSlots:tp,createStaticVNode:da,createTextVNode:se,createVNode:re,defineAsyncComponent:Gh,defineComponent:Ue,defineEmits:Dp,defineExpose:Lp,defineProps:Mp,get devtools(){return Un},getCurrentInstance:cn,getTransitionRawChildren:wi,guardReactiveProps:Su,h:xi,handleError:On,initCustomFormatter:Hp,inject:et,isMemoSame:Du,isRuntimeOnly:Rp,isVNode:on,mergeDefaults:Up,mergeProps:Tu,nextTick:mi,onActivated:ia,onBeforeMount:nu,onBeforeUnmount:Ii,onBeforeUpdate:ru,onDeactivated:oa,onErrorCaptured:au,onMounted:An,onRenderTracked:ou,onRenderTriggered:iu,onServerPrefetch:su,onUnmounted:ds,onUpdated:ki,openBlock:ue,popScopeId:bi,provide:Rr,pushScopeId:yi,queuePostFlushCb:ea,registerRuntimeCompiler:Cp,renderList:cu,renderSlot:np,resolveComponent:Ne,resolveDirective:ep,resolveDynamicComponent:Qh,resolveFilter:Gp,resolveTransitionHooks:er,setBlockTracking:vo,setDevtoolsHook:Gc,setTransitionHooks:kn,ssrContextKey:Mu,ssrUtils:qp,toHandlers:rp,transformVNodeArgs:kp,useAttrs:Bp,useSSRContext:jp,useSlots:$p,useTransitionState:ra,version:Lu,warn:zc,watch:qn,watchEffect:Hh,watchPostEffect:Zc,watchSyncEffect:Wh,withAsyncContext:zp,withCtx:Qn,withDefaults:Fp,withDirectives:Pr,withMemo:Wp,withScopeId:Nh,Transition:ha,TransitionGroup:Em,VueElement:Ci,createApp:td,createSSRApp:Mm,defineCustomElement:$u,defineSSRCustomElement:pm,hydrate:ed,initDirectivesForSSR:Dm,render:ko,useCssModule:gm,useCssVars:vm,vModelCheckbox:pa,vModelDynamic:qu,vModelRadio:Gn,vModelSelect:Wu,vModelText:Kr,vShow:Yu,withKeys:Am,withModifiers:Ju},Symbol.toStringTag,{value:"Module"}));var fr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const $m={};function Bm(t,e){const n=Ne("RouterView");return ue(),dr(n)}var Um=fr($m,[["render",Bm]]);/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vn=typeof window!="undefined";function Vm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Wi(t,e){const n={};for(const r in e){const s=e[r];n[r]=ft(s)?s.map(t):t(s)}return n}const Mr=()=>{},ft=Array.isArray,zm=/\/$/,jm=t=>t.replace(zm,"");function Ki(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qm(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Hm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sr(e.matched[r],n.matched[s])&&rd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Km(t[n],e[n]))return!1;return!0}function Km(t,e){return ft(t)?Tl(t,e):ft(e)?Tl(e,t):t===e}function Tl(t,e){return ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var qr;(function(t){t.pop="pop",t.push="push"})(qr||(qr={}));var Dr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dr||(Dr={}));function Gm(t){if(!t)if(Vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jm(t)}const Jm=/^[^#]+#/;function Ym(t,e){return t.replace(Jm,"#")+e}function Xm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ri=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zm(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Xm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xl(t,e){return(history.state?history.state.position-e:-1)+t}const Io=new Map;function Qm(t,e){Io.set(t,e)}function eg(t){const e=Io.get(t);return Io.delete(t),e}let tg=()=>location.protocol+"//"+location.host;function sd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sl(l,"")}return Sl(n,t)+r+s}function ng(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const v=sd(t,location),w=n.value,A=e.value;let R=0;if(p){if(n.value=v,e.value=p,o&&o===w){o=null;return}R=A?p.position-A.position:0}else r(v);s.forEach(_=>{_(n.value,w,{delta:R,type:qr.pop,direction:R?R>0?Dr.forward:Dr.back:Dr.unknown})})};function l(){o=n.value}function u(p){s.push(p);const v=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(v),v}function d(){const{history:p}=window;!p.state||p.replaceState(we({},p.state,{scroll:Ri()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:u,destroy:f}}function Cl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ri():null}}function rg(t){const{history:e,location:n}=window,r={value:sd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:tg()+t+l;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](p)}}function o(l,u){const d=we({},e.state,Cl(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function a(l,u){const d=we({},s.value,e.state,{forward:l,scroll:Ri()});i(d.current,d,!0);const f=we({},Cl(r.value,l,null),{position:d.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function sg(t){t=Gm(t);const e=rg(t),n=ng(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:Ym.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ig(t){return typeof t=="string"||t&&typeof t=="object"}function id(t){return typeof t=="string"||typeof t=="symbol"}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},od=Symbol("");var Rl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rl||(Rl={}));function ir(t,e){return we(new Error,{type:t,[od]:!0},e)}function zt(t,e){return t instanceof Error&&od in t&&(e==null||!!(t.type&e))}const Pl="[^/]+?",og={sensitive:!1,strict:!1,start:!0,end:!0},ag=/[.+*?^${}()[\]/\\]/g;function lg(t,e){const n=we({},og,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let v=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(ag,"\\$&"),v+=40;else if(p.type===1){const{value:w,repeatable:A,optional:R,regexp:_}=p;i.push({name:w,repeatable:A,optional:R});const g=_||Pl;if(g!==Pl){v+=10;try{new RegExp(`(${g})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${w}" (${g}): `+S.message)}}let E=A?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(E=R&&u.length<2?`(?:/${E})`:"/"+E),R&&(E+="?"),s+=E,v+=20,R&&(v+=-8),A&&(v+=-20),g===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const d=u.match(o),f={};if(!d)return null;for(let p=1;p<d.length;p++){const v=d[p]||"",w=i[p-1];f[w.name]=v&&w.repeatable?v.split("/"):v}return f}function l(u){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const v of p)if(v.type===0)d+=v.value;else if(v.type===1){const{value:w,repeatable:A,optional:R}=v,_=w in u?u[w]:"";if(ft(_)&&!A)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const g=ft(_)?_.join("/"):_;if(!g)if(R)p.length<2&&t.length>1&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);d+=g}}return d}return{re:o,score:r,keys:i,parse:a,stringify:l}}function cg(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ol(r))return 1;if(Ol(s))return-1}return s.length-r.length}function Ol(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dg={type:0,value:""},fg=/[a-zA-Z0-9_]/;function hg(t){if(!t)return[[]];if(t==="/")return[[dg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",d="";function f(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:fg.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function pg(t,e,n){const r=lg(hg(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mg(t,e){const n=[],r=new Map;e=Nl({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,f,p){const v=!p,w=vg(d);w.aliasOf=p&&p.record;const A=Nl(e,d),R=[w];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of E)R.push(we({},w,{components:p?p.record.components:w.components,path:S,aliasOf:p?p.record:w}))}let _,g;for(const E of R){const{path:S}=E;if(f&&S[0]!=="/"){const O=f.record.path,L=O[O.length-1]==="/"?"":"/";E.path=f.record.path+(S&&L+S)}if(_=pg(E,f,A),p?p.alias.push(_):(g=g||_,g!==_&&g.alias.push(_),v&&d.name&&!Al(_)&&o(d.name)),w.children){const O=w.children;for(let L=0;L<O.length;L++)i(O[L],_,p&&p.children[L])}p=p||_,l(_)}return g?()=>{o(g)}:Mr}function o(d){if(id(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){let f=0;for(;f<n.length&&ug(d,n[f])>=0&&(d.record.path!==n[f].record.path||!ad(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!Al(d)&&r.set(d.record.name,d)}function u(d,f){let p,v={},w,A;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw ir(1,{location:d});A=p.record.name,v=we(gg(f.params,p.keys.filter(g=>!g.optional).map(g=>g.name)),d.params),w=p.stringify(v)}else if("path"in d)w=d.path,p=n.find(g=>g.re.test(w)),p&&(v=p.parse(w),A=p.record.name);else{if(p=f.name?r.get(f.name):n.find(g=>g.re.test(f.path)),!p)throw ir(1,{location:d,currentLocation:f});A=p.record.name,v=we({},f.params,d.params),w=p.stringify(v)}const R=[];let _=p;for(;_;)R.unshift(_.record),_=_.parent;return{name:A,path:w,params:v,matched:R,meta:yg(R)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_g(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _g(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Al(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yg(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Nl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ad(t,e){return e.children.some(n=>n===t||ad(t,n))}const ld=/#/g,bg=/&/g,wg=/\//g,Eg=/=/g,kg=/\?/g,cd=/\+/g,Ig=/%5B/g,Sg=/%5D/g,ud=/%5E/g,Tg=/%60/g,dd=/%7B/g,xg=/%7C/g,fd=/%7D/g,Cg=/%20/g;function ma(t){return encodeURI(""+t).replace(xg,"|").replace(Ig,"[").replace(Sg,"]")}function Rg(t){return ma(t).replace(dd,"{").replace(fd,"}").replace(ud,"^")}function So(t){return ma(t).replace(cd,"%2B").replace(Cg,"+").replace(ld,"%23").replace(bg,"%26").replace(Tg,"`").replace(dd,"{").replace(fd,"}").replace(ud,"^")}function Pg(t){return So(t).replace(Eg,"%3D")}function Og(t){return ma(t).replace(ld,"%23").replace(kg,"%3F")}function Ag(t){return t==null?"":Og(t).replace(wg,"%2F")}function Gs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ng(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cd," "),o=i.indexOf("="),a=Gs(o<0?i:i.slice(0,o)),l=o<0?null:Gs(i.slice(o+1));if(a in e){let u=e[a];ft(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Ml(t){let e="";for(let n in t){const r=t[n];if(n=Pg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ft(r)?r.map(i=>i&&So(i)):[r&&So(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hd=Symbol(""),Dl=Symbol(""),Pi=Symbol(""),ga=Symbol(""),To=Symbol("");function _r(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dg(t,e,n){const r=()=>{t[e].delete(n)};ds(r),oa(r),ia(()=>{t[e].add(n)}),t[e].add(n)}function Lg(t){const e=et(hd,{}).value;!e||Dg(e,"leaveGuards",t)}function qt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ir(4,{from:n,to:e})):f instanceof Error?a(f):ig(f)?a(ir(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},u=t.call(r&&r.instances[s],e,n,l);let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(f=>a(f))})}function qi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Fg(a)){const u=(a.__vccOpts||a)[e];u&&s.push(qt(u,n,r,i,o))}else{let l=a();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=Vm(u)?u.default:u;i.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&qt(p,n,r,i,o)()}))}}return s}function Fg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ll(t){const e=et(Pi),n=et(ga),r=He(()=>e.resolve(U(t.to))),s=He(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(sr.bind(null,d));if(p>-1)return p;const v=Fl(l[u-2]);return u>1&&Fl(d)===v&&f[f.length-1].path!==v?f.findIndex(sr.bind(null,l[u-2])):p}),i=He(()=>s.value>-1&&Vg(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&rd(n.params,r.value.params));function a(l={}){return Ug(l)?e[U(t.replace)?"replace":"push"](U(t.to)).catch(Mr):Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const $g=Ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ll,setup(t,{slots:e}){const n=ur(Ll(t)),{options:r}=et(Pi),s=He(()=>({[$l(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$l(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Bg=$g;function Ug(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Vg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $l=(t,e,n)=>t!=null?t:e!=null?e:n,zg=Ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=et(To),s=He(()=>t.route||r.value),i=et(Dl,0),o=He(()=>{let u=U(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),a=He(()=>s.value.matched[o.value]);Rr(Dl,He(()=>o.value+1)),Rr(hd,a),Rr(To,s);const l=Ze();return qn(()=>[l.value,a.value,t.name],([u,d,f],[p,v,w])=>{d&&(d.instances[f]=u,v&&v!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!sr(d,v)||!p)&&(d.enterCallbacks[f]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=a.value,f=d&&d.components[t.name],p=t.name;if(!f)return Bl(n.default,{Component:f,route:u});const v=d.props[t.name],w=v?v===!0?u.params:typeof v=="function"?v(u):v:null,R=xi(f,we({},w,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[p]=null)},ref:l}));return Bl(n.default,{Component:R,route:u})||R}}});function Bl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jg=zg;function Hg(t){const e=mg(t.routes,t),n=t.parseQuery||Ng,r=t.stringifyQuery||Ml,s=t.history,i=_r(),o=_r(),a=_r(),l=Bc(Vt);let u=Vt;Vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Wi.bind(null,I=>""+I),f=Wi.bind(null,Ag),p=Wi.bind(null,Gs);function v(I,j){let N,q;return id(I)?(N=e.getRecordMatcher(I),q=j):q=I,e.addRoute(q,N)}function w(I){const j=e.getRecordMatcher(I);j&&e.removeRoute(j)}function A(){return e.getRoutes().map(I=>I.record)}function R(I){return!!e.getRecordMatcher(I)}function _(I,j){if(j=we({},j||l.value),typeof I=="string"){const te=Ki(n,I,j.path),c=e.resolve({path:te.path},j),h=s.createHref(te.fullPath);return we(te,c,{params:p(c.params),hash:Gs(te.hash),redirectedFrom:void 0,href:h})}let N;if("path"in I)N=we({},I,{path:Ki(n,I.path,j.path).path});else{const te=we({},I.params);for(const c in te)te[c]==null&&delete te[c];N=we({},I,{params:f(I.params)}),j.params=f(j.params)}const q=e.resolve(N,j),fe=I.hash||"";q.params=d(p(q.params));const ve=Hm(r,we({},I,{hash:Rg(fe),path:q.path})),ne=s.createHref(ve);return we({fullPath:ve,hash:fe,query:r===Ml?Mg(I.query):I.query||{}},q,{redirectedFrom:void 0,href:ne})}function g(I){return typeof I=="string"?Ki(n,I,l.value.path):we({},I)}function E(I,j){if(u!==I)return ir(8,{from:j,to:I})}function S(I){return $(I)}function O(I){return S(we(g(I),{replace:!0}))}function L(I){const j=I.matched[I.matched.length-1];if(j&&j.redirect){const{redirect:N}=j;let q=typeof N=="function"?N(I):N;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=g(q):{path:q},q.params={}),we({query:I.query,hash:I.hash,params:"path"in q?{}:I.params},q)}}function $(I,j){const N=u=_(I),q=l.value,fe=I.state,ve=I.force,ne=I.replace===!0,te=L(N);if(te)return $(we(g(te),{state:fe,force:ve,replace:ne}),j||N);const c=N;c.redirectedFrom=j;let h;return!ve&&Wm(r,q,N)&&(h=ir(16,{to:c,from:q}),Ft(q,q,!0,!1)),(h?Promise.resolve(h):B(c,q)).catch(m=>zt(m)?zt(m,2)?m:Ve(m):ge(m,c,q)).then(m=>{if(m){if(zt(m,2))return $(we(g(m.to),{state:fe,force:ve,replace:ne}),j||c)}else m=G(c,q,!0,ne,fe);return z(c,q,m),m})}function C(I,j){const N=E(I,j);return N?Promise.reject(N):Promise.resolve()}function B(I,j){let N;const[q,fe,ve]=Wg(I,j);N=qi(q.reverse(),"beforeRouteLeave",I,j);for(const te of q)te.leaveGuards.forEach(c=>{N.push(qt(c,I,j))});const ne=C.bind(null,I,j);return N.push(ne),Dn(N).then(()=>{N=[];for(const te of i.list())N.push(qt(te,I,j));return N.push(ne),Dn(N)}).then(()=>{N=qi(fe,"beforeRouteUpdate",I,j);for(const te of fe)te.updateGuards.forEach(c=>{N.push(qt(c,I,j))});return N.push(ne),Dn(N)}).then(()=>{N=[];for(const te of I.matched)if(te.beforeEnter&&!j.matched.includes(te))if(ft(te.beforeEnter))for(const c of te.beforeEnter)N.push(qt(c,I,j));else N.push(qt(te.beforeEnter,I,j));return N.push(ne),Dn(N)}).then(()=>(I.matched.forEach(te=>te.enterCallbacks={}),N=qi(ve,"beforeRouteEnter",I,j),N.push(ne),Dn(N))).then(()=>{N=[];for(const te of o.list())N.push(qt(te,I,j));return N.push(ne),Dn(N)}).catch(te=>zt(te,8)?te:Promise.reject(te))}function z(I,j,N){for(const q of a.list())q(I,j,N)}function G(I,j,N,q,fe){const ve=E(I,j);if(ve)return ve;const ne=j===Vt,te=Vn?history.state:{};N&&(q||ne?s.replace(I.fullPath,we({scroll:ne&&te&&te.scroll},fe)):s.push(I.fullPath,fe)),l.value=I,Ft(I,j,N,ne),Ve()}let F;function ee(){F||(F=s.listen((I,j,N)=>{if(!dn.listening)return;const q=_(I),fe=L(q);if(fe){$(we(fe,{replace:!0}),q).catch(Mr);return}u=q;const ve=l.value;Vn&&Qm(xl(ve.fullPath,N.delta),Ri()),B(q,ve).catch(ne=>zt(ne,12)?ne:zt(ne,2)?($(ne.to,q).then(te=>{zt(te,20)&&!N.delta&&N.type===qr.pop&&s.go(-1,!1)}).catch(Mr),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ge(ne,q,ve))).then(ne=>{ne=ne||G(q,ve,!1),ne&&(N.delta?s.go(-N.delta,!1):N.type===qr.pop&&zt(ne,20)&&s.go(-1,!1)),z(q,ve,ne)}).catch(Mr)}))}let V=_r(),Ce=_r(),ae;function ge(I,j,N){Ve(I);const q=Ce.list();return q.length?q.forEach(fe=>fe(I,j,N)):console.error(I),Promise.reject(I)}function pe(){return ae&&l.value!==Vt?Promise.resolve():new Promise((I,j)=>{V.add([I,j])})}function Ve(I){return ae||(ae=!I,ee(),V.list().forEach(([j,N])=>I?N(I):j()),V.reset()),I}function Ft(I,j,N,q){const{scrollBehavior:fe}=t;if(!Vn||!fe)return Promise.resolve();const ve=!N&&eg(xl(I.fullPath,0))||(q||!N)&&history.state&&history.state.scroll||null;return mi().then(()=>fe(I,j,ve)).then(ne=>ne&&Zm(ne)).catch(ne=>ge(ne,I,j))}const rt=I=>s.go(I);let st;const We=new Set,dn={currentRoute:l,listening:!0,addRoute:v,removeRoute:w,hasRoute:R,getRoutes:A,resolve:_,options:t,push:S,replace:O,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:pe,install(I){const j=this;I.component("RouterLink",Bg),I.component("RouterView",jg),I.config.globalProperties.$router=j,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>U(l)}),Vn&&!st&&l.value===Vt&&(st=!0,S(s.location).catch(fe=>{}));const N={};for(const fe in Vt)N[fe]=He(()=>l.value[fe]);I.provide(Pi,j),I.provide(ga,ur(N)),I.provide(To,l);const q=I.unmount;We.add(I),I.unmount=function(){We.delete(I),We.size<1&&(u=Vt,F&&F(),F=null,l.value=Vt,st=!1,ae=!1),q()}}};return dn}function Dn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Wg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>sr(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>sr(u,l))||s.push(l))}return[n,r,s]}function pd(){return et(Pi)}function md(){return et(ga)}const K=Ze(vd());function gd(){K.value=vd()}function vd(){return{numberOfIds:1,sleep:"nope"}}const xo=Ze(!1);const Kg=t=>(yi("data-v-0427af6b"),t=t(),bi(),t),qg={class:"text-center mt-5 mb-3"},Gg=se(" SkierCon akredytacja "),Jg=Kg(()=>M("div",null,"Start",-1)),Yg={class:"flex flex-wrap justify-center wrap"},Xg=["src"],Zg={class:"px-4 py-2 text-md"},Qg=Ue({__name:"Home",setup(t){const e=[{name:"Uczestnik",img:"/img/uczestnik-front.png",link:"/uczestnik/1"},{name:"Tw\xF3rca programu",img:"/img/program-front.png",link:"/tworca-programu/1"},{name:"Organizator, Szop, Lis, Dzik",img:"/img/szop-front.png",link:"/wolontariusz/1"},{name:"Go\u015B\u0107",img:"/img/gosc-front.png",link:"/gosc/1"},{name:"Media",img:"/img/media-front.png",link:"/media/1"},{name:"Wystawca",img:"/img/wystawca-front.png",link:"/wystawca/1"}];return(n,r)=>{const s=Ne("RouterLink"),i=Ne("router-link");return ue(),_e(Ie,null,[M("div",qg,[re(s,{class:"text-xl skierfont",to:"/"},{default:Qn(()=>[Gg]),_:1}),Jg]),M("div",Yg,[(ue(),_e(Ie,null,cu(e,o=>re(i,{key:o.name,class:"person block m-3 shadow hover:shadow-xl transition-all",to:o.link},{default:Qn(()=>[M("img",{class:"person__img",src:"/skiercon-akredytacja"+o.img,alt:"",width:"300",height:"173"},null,8,Xg),M("div",Zg,Oe(o.name),1)]),_:2},1032,["to"])),64))])],64)}}});var ev=fr(Qg,[["__scopeId","data-v-0427af6b"]]);const tv={class:"container"},nv={class:"text-center mt-5 mb-7"},rv=se(" SkierCon akredytacja "),Ln=Ue({__name:"Start",setup(t){const e=md();return K.value.personType=e.meta.person,K.value.ticketStartTime=new Date,Lg(()=>{if(K.value.personType!==void 0){const n=confirm("Czy chcesz anulowa\u0107 aktualn\u0105 akredytacj\u0119?");return n&&gd(),n}}),(n,r)=>{const s=Ne("RouterLink"),i=Ne("router-view");return ue(),_e("div",tv,[M("div",nv,[re(s,{class:"text-xl skierfont",to:"/start"},{default:Qn(()=>[rv]),_:1}),M("div",null,Oe(n.$route.name),1)]),re(i)])}}}),_d={Go\u015B\u0107:"gosc",Media:"media","Tw\xF3rca Programu":"program",Uczestnik:"uczestnik",Wolontariusz:"szop-lis-dzik",Wystawca:"wystawca"};function sv(t){return`/skiercon-akredytacja/img/${_d[t]}-back.png`}function iv(t){return`/skiercon-akredytacja/img/${_d[t]}-front.png`}function ov(t){return{Go\u015B\u0107:"Go\u015Bcia",Media:"Media","Tw\xF3rca Programu":"Tw\xF3rcy Programu",Uczestnik:"Uczestnika",Wolontariusz:"Wolontariusza",Wystawca:"Wystawcy"}[t]}const av={class:"card"},lv={class:"mb-3"},cv=se(" Zweryfikuj wiek "),uv=M("div",{class:"mb-3"},[se(" Osoba w wieku "),M("b",null,"13-18"),se(" musi posiada\u0107 "),M("b",null,"Kart\u0119 M\u0142odego Skierkonauty")],-1),dv={key:0},fv=se(" Osoba "),hv=M("b",null,"poni\u017Cej 13",-1),pv=se(" roku \u017Cycia musi by\u0107 "),mv=M("b",null,"z opiekunem",-1),gv=[fv,hv,pv,mv],vv={class:"card"},_v=M("div",{class:"mb-4"},"Przygotuj odpowiedni identyfikator:",-1),yv=["src"],Gi=Ue({__name:"Pelnoletnosc",setup(t){return(e,n)=>{const r=Ne("Counter"),s=Ne("Pagination");return ue(),_e(Ie,null,[U(K).personType==="Uczestnik"?(ue(),dr(r,{key:0,min:1,modelValue:U(K).numberOfIds,"onUpdate:modelValue":n[0]||(n[0]=i=>U(K).numberOfIds=i),label:"Liczba wej\u015Bci\xF3wek:"},null,8,["modelValue"])):je("",!0),M("div",av,[M("div",lv,[cv,M("i",null,Oe(U(ov)(U(K).personType)),1)]),uv,U(K).personType==="Uczestnik"?(ue(),_e("div",dv,gv)):je("",!0)]),M("div",vv,[_v,U(K).personType?(ue(),_e("img",{key:0,class:"badge-image shadow mb-5",src:U(iv)(U(K).personType),alt:""},null,8,yv)):je("",!0)]),re(s)],64)}}});const Nn=t=>(yi("data-v-30b46898"),t=t(),bi(),t),bv={class:"card"},wv=Nn(()=>M("div",{class:"mb-3"},"Zapytaj o nocleg",-1)),Ev={class:"mb-3"},kv=se(" Brak noclegu "),Iv=["value"],Sv=se(" Sleep Room "),Tv=se(" Pole Namiotowe "),xv={key:0,class:"card"},Cv=se(" Poinformuj "),Rv=Nn(()=>M("i",null,"Wolontariusza",-1)),Pv=se(", \u017Ce nocleg maj\u0105 w "),Ov=Nn(()=>M("b",null,"Drugiej Szkole",-1)),Av=[Cv,Rv,Pv,Ov],Nv={key:1,class:"card"},Mv=se(" Wydaj do podpisu "),Dv=Nn(()=>M("b",null,"Kart\u0119 Noclegow\u0105",-1)),Lv=se(),Fv=Nn(()=>M("br",null,null,-1)),$v=Nn(()=>M("span",{class:"text-red-600"},"Karta ma wr\xF3ci\u0107 na akredytacj\u0119!",-1)),Bv=[Mv,Dv,Lv,Fv,$v],Uv={key:2,class:"card"},Vv=se(" Na identyfikatorze w polu "),zv=Nn(()=>M("b",null,"MIEJSCE NA SLEEP ROOMIE",-1)),jv=se(' wpisz "'),Hv=se('" '),Wv={class:"badge-wrap"},Kv=["src"],qv=Ue({__name:"Nocleg",setup(t){let e="1";K.value.personType==="Wolontariusz"&&(e="SOSW"),K.value.personType==="Wystawca"&&(e="B2");const n=sv(K.value.personType),r={1:"1",B2:"B2",PN:"P",SOSW:"SOSW",nope:"X"},s=He(()=>r[K.value.sleep]);return(i,o)=>{const a=Ne("Pagination");return ue(),_e(Ie,null,[M("div",bv,[wv,M("div",Ev,[M("label",{class:at(["block cursor-pointer",U(K).sleep==="nope"&&"font-bold"])},[Pr(M("input",{type:"radio",name:"sleep",value:"nope","onUpdate:modelValue":o[0]||(o[0]=l=>U(K).sleep=l)},null,512),[[Gn,U(K).sleep]]),kv],2),M("label",{class:at(["block cursor-pointer",U(K).sleep===U(e)&&"font-bold"])},[Pr(M("input",{type:"radio",name:"sleep",value:U(e),"onUpdate:modelValue":o[1]||(o[1]=l=>U(K).sleep=l)},null,8,Iv),[[Gn,U(K).sleep]]),Sv],2),U(K).personType!=="Wystawca"?(ue(),_e("label",{key:0,class:at(["block cursor-pointer",U(K).sleep==="PN"&&"font-bold"])},[Pr(M("input",{type:"radio",name:"sleep",value:"PN","onUpdate:modelValue":o[2]||(o[2]=l=>U(K).sleep=l)},null,512),[[Gn,U(K).sleep]]),Tv],2)):je("",!0)])]),U(K).personType=="Wolontariusz"&&U(K).sleep==="SOSW"?(ue(),_e("div",xv,Av)):je("",!0),U(K).sleep&&U(K).sleep!=="nope"?(ue(),_e("div",Nv,Bv)):je("",!0),U(K).sleep?(ue(),_e("div",Uv,[M("div",null,[Vv,zv,jv,M("b",null,Oe(U(s)),1),Hv]),M("div",Wv,[M("div",{class:at(["badge-mark",{"badge-mark--program":U(K).personType==="Tw\xF3rca Programu","badge-mark--volunteer":U(K).personType==="Wolontariusz","badge-mark--small":U(K).personType==="Wolontariusz"&&U(K).sleep==="SOSW"}])},Oe(U(s)),3),M("img",{class:"badge-img",src:U(n),alt:""},null,8,Kv)])])):je("",!0),re(a,{"can-move-forward":!!U(K).sleep},null,8,["can-move-forward"])],64)}}});var Ps=fr(qv,[["__scopeId","data-v-30b46898"]]),Gv="/skiercon-akredytacja/img/szop-lis-dzik-back.png",Jv="/skiercon-akredytacja/img/gosc-back.png";const Oi=t=>(yi("data-v-214e048c"),t=t(),bi(),t),Yv={key:0,class:"card"},Xv=Oi(()=>M("div",{class:"mb-3"},"Przyjmij op\u0142at\u0119 za konwent:",-1)),Zv={class:"mb-3"},Qv={key:0},e_=se(" Dziecko poni\u017Cej 10 roku \u017Cycia (0z\u0142) - 0z\u0142 "),t_=se(" Razem do zap\u0142aty: "),n_={key:1,class:"card"},r_={class:"mb-3"},s_=se(" Przyjmij op\u0142at\u0119 za konwent "),i_={key:2},o_=da('<div class="card" data-v-214e048c> Poinformuj <i data-v-214e048c>Wolontariusza</i> o tym, \u017Ceby zg\u0142osi\u0142 si\u0119 do &quot;<b data-v-214e048c>Le\u015Bnicz\xF3wki</b>&quot; </div><div class="card" data-v-214e048c> Poinformuj <i data-v-214e048c>Wolontariusza</i>, \u017Ce przys\u0142uguj\u0105 mu <b data-v-214e048c>2 ciep\u0142e posi\u0142ki</b> odhaczane na tyle identyfikatora <div class="relative" data-v-214e048c><div class="meals-mark rounded-xl absolute border-4 border-red-400" data-v-214e048c></div><img class="badge-image" src="'+Gv+'" alt="" data-v-214e048c></div></div>',2),a_=[o_],l_={key:3},c_=da('<div class="card" data-v-214e048c>Wydaj <b data-v-214e048c>Pakiet Go\u015Bcia</b> (Kubek)</div><div class="card" data-v-214e048c><div class="mb-3" data-v-214e048c> Poinformuj <i data-v-214e048c>Go\u015Bcia</i>, \u017Ce na odwrocie identyfikatora znajduj\u0105 si\u0119 numery telefon\xF3w do\xA0Koordynator\xF3w Go\u015Bci </div><div data-v-214e048c> W kwestii noclegu lub ewentualnego rozliczenia dojazdu nale\u017Cy skontaktowa\u0107 si\u0119\xA0z\xA0odpowiednim koordynatorem </div><div class="relative" data-v-214e048c><div class="phones-mark rounded-xl absolute border-6 border-red-400" data-v-214e048c></div><img src="'+Jv+'" class="badge-image" alt="" data-v-214e048c></div></div>',2),u_=[c_],d_={key:4},f_=Oi(()=>M("div",{class:"card"},[se("Poinformuj "),M("i",null,"Wystawc\u0119"),se(", gdzie ma stoisko")],-1)),h_=Oi(()=>M("div",{class:"card"},[se(" Poinformuj "),M("i",null,"Wystawc\u0119"),se(", \u017Ce do stoiska wkr\xF3tce podejdzie "),M("i",null,"Organizator"),se(" w sprawie rozliczenia i\xA0podpisania umowy ")],-1)),p_=[f_,h_],m_=Oi(()=>M("div",{class:"card"},[M("b",null,"Wydaj identyfikator"),se(" (zapytaj, czy potrzebna jest smycz lub folia do identyfikatora) ")],-1)),g_=Ue({__name:"Platnosc",setup(t){const e=new Date().getDay()===0?20:40,n=Ze(0),r=He(()=>e*(K.value.numberOfIds-n.value));return(s,i)=>{const o=Ne("Counter"),a=Ne("Pagination");return ue(),_e(Ie,null,[U(K).personType==="Uczestnik"&&U(K).numberOfIds>1?(ue(),dr(o,{key:0,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l),min:0,max:U(K).numberOfIds-1,label:"Liczba dzieci poni\u017Cej 10 roku \u017Cycia:"},null,8,["modelValue","max"])):je("",!0),U(K).personType==="Uczestnik"?(ue(),_e(Ie,{key:1},[U(K).numberOfIds>1?(ue(),_e("div",Yv,[Xv,M("div",Zv,[M("div",null,[M("b",null,Oe(U(K).numberOfIds-n.value)+"x",1),se(" Wej\u015Bci\xF3wka normalna ("+Oe(U(e))+"z\u0142) - "+Oe(U(r))+"z\u0142 ",1)]),n.value>0?(ue(),_e("div",Qv,[M("b",null,Oe(n.value)+"x",1),e_])):je("",!0)]),M("div",null,[t_,M("b",null,Oe(U(r))+"z\u0142",1)])])):(ue(),_e("div",n_,[M("div",r_,[s_,M("b",null,Oe(U(r))+"z\u0142",1)])]))],64)):je("",!0),U(K).personType==="Wolontariusz"?(ue(),_e("div",i_,a_)):je("",!0),U(K).personType==="Go\u015B\u0107"?(ue(),_e("div",l_,u_)):je("",!0),U(K).personType==="Wystawca"?(ue(),_e("div",d_,p_)):je("",!0),m_,re(a,{"next-text":"Zako\u0144cz akredytacj\u0119",end:""})],64)}}});var Fn=fr(g_,[["__scopeId","data-v-214e048c"]]),v_=["Wojciech Bryk ","Leszek Cyfer","Jakub \u0106wiek","Zbigniew Dzik","Piotr Firek","Grzegorz Gajek","Izabela Grabda","Bruno Grigori","Klaudia Heintze","Artur Hejna","Witold Jab\u0142o\u0144ski","Kapitan Fandom","Marta K\u0142ad\u017A-Kocot","Katarzyna Ko\u0107ma",'Marcin "Ko\u0144" Ko\u0144czewski',"Wiktoria Korzeniewska","\u0141ukasz Kucharczyk","Anna Lewicka","Barbara Maj","Krzysztof M. Maj","Artur Olchowy","Krzysztof Piersa","Marcin Podlewski","Marcin Sergiusz Przyby\u0142ek","Basia Snuszka","Bart\u0142omiej Sztobryn","Anna Szumacher","Dominika Tarczo\u0144","Dominika Urba\u0144ska-Galanciak","Katarzyna Wierzbicka","Magdalena Zawadzka-So\u0142tysek"];const __={class:"card"},y_={class:"mb-3"},b_=se(" Wyszukaj "),Ji=Ue({__name:"WyszukajOsobe",setup(t){let e;K.value.personType==="Go\u015B\u0107"&&(e=v_.sort()),K.value.personType==="Tw\xF3rca Programu"&&(e=["Tw\xF3rca 1","Tw\xF3rca 2"].sort());const n={"Tw\xF3rca Programu":"Tw\xF3rc\u0119 Programu",Go\u015B\u0107:"Go\u015Bcia",Wolontariusz:"Wolontariusza"},r=Ze();return An(()=>{K.value.personName||r.value.searchEl.focus()}),(s,i)=>{const o=Ne("v-select"),a=Ne("Pagination");return ue(),_e(Ie,null,[M("div",__,[M("div",y_,[b_,M("i",null,Oe(n[U(K).personType]),1)]),re(o,{ref_key:"vselect",ref:r,label:"Tw\xF3rca programu",options:U(e),modelValue:U(K).personName,"onUpdate:modelValue":i[0]||(i[0]=l=>U(K).personName=l),class:"mb-8"},null,8,["options","modelValue"])]),re(a,{"can-move-forward":!!U(K).personName},null,8,["can-move-forward"])],64)}}}),w_={},E_=M("div",{class:"card"},[se(" Wydaj do podpisu "),M("b",null,"Umow\u0119 dla wolontariusza"),se(" w dw\xF3ch egzemplarzach "),M("br"),M("span",{class:"text-red-600"},"Jedna kopia ma wr\xF3ci\u0107 na akredytacj\u0119! ")],-1);function k_(t,e){const n=Ne("Pagination");return ue(),_e(Ie,null,[E_,re(n)],64)}var I_=fr(w_,[["render",k_]]);const S_={class:"card"},T_=M("div",{class:"mb-3"},[se("Wyszukaj "),M("i",null,"Media")],-1),x_=Ue({__name:"WyszukajMedia",setup(t){const e=["G\u0142os Skierniewic i Okolic","ITS"].sort(),n=Ze();return An(()=>{K.value.mediaName||n.value.searchEl.focus()}),(r,s)=>{const i=Ne("v-select"),o=Ne("Pagination");return ue(),_e("div",S_,[T_,re(i,{ref_key:"vselect",ref:n,options:U(e),modelValue:U(K).mediaName,"onUpdate:modelValue":s[0]||(s[0]=a=>U(K).mediaName=a)},null,8,["options","modelValue"]),re(o,{"can-move-forward":!!U(K).mediaName},null,8,["can-move-forward"])])}}}),C_={class:"card"},R_=M("div",{class:"mb-3"},[se("Wyszukaj "),M("i",null,"Wystawc\u0119")],-1),P_=Ue({__name:"WyszukajWystawce",setup(t){const e=["Skyweavers","Mama Irenka","Konopczy\u0144scy"].sort();return(n,r)=>{const s=Ne("v-select"),i=Ne("Pagination");return ue(),_e("div",C_,[R_,re(s,{label:"Media",options:U(e),modelValue:U(K).vendorName,"onUpdate:modelValue":r[0]||(r[0]=o=>U(K).vendorName=o)},null,8,["options","modelValue"]),re(i)])}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},O_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[d],n[f],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},A_=function(t){const e=yd(t);return bd.encodeByteArray(e,!0)},wd=function(t){return A_(t).replace(/\./g,"")},N_=function(t){try{return bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function L_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $_(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B_(){return typeof indexedDB=="object"}function U_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=V_,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?z_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new un(s,a,r)}}function z_(t,e){return t.replace(j_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const j_=/\{\$([^}]+)}/g;function H_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ul(i)&&Ul(o)){if(!Js(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ul(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Er(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function kr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function W_(t,e){const n=new K_(t,e);return n.subscribe.bind(n)}class K_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");q_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yi),s.error===void 0&&(s.error=Yi),s.complete===void 0&&(s.complete=Yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new M_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y_(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J_(t){return t===mn?void 0:t}function Y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Z_={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Q_=me.INFO,ey={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},ty=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ey[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=Q_,this._logHandler=ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const ny=(t,e)=>e.some(n=>t instanceof n);let Vl,zl;function ry(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sy(){return zl||(zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ed=new WeakMap,Co=new WeakMap,kd=new WeakMap,Xi=new WeakMap,_a=new WeakMap;function iy(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(en(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ed.set(n,t)}).catch(()=>{}),_a.set(e,t),e}function oy(t){if(Co.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Co.set(t,e)}let Ro={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Co.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ay(t){Ro=t(Ro)}function ly(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zi(this),e,...n);return kd.set(r,e.sort?e.sort():[e]),en(r)}:sy().includes(t)?function(...e){return t.apply(Zi(this),e),en(Ed.get(this))}:function(...e){return en(t.apply(Zi(this),e))}}function cy(t){return typeof t=="function"?ly(t):(t instanceof IDBTransaction&&oy(t),ny(t,ry())?new Proxy(t,Ro):t)}function en(t){if(t instanceof IDBRequest)return iy(t);if(Xi.has(t))return Xi.get(t);const e=cy(t);return e!==t&&(Xi.set(t,e),_a.set(e,t)),e}const Zi=t=>_a.get(t);function uy(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=en(o);return r&&o.addEventListener("upgradeneeded",l=>{r(en(o.result),l.oldVersion,l.newVersion,en(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const dy=["get","getKey","getAll","getAllKeys","count"],fy=["put","add","delete","clear"],Qi=new Map;function jl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dy.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Qi.set(e,i),i}ay(t=>({...t,get:(e,n,r)=>jl(e,n)||t.get(e,n,r),has:(e,n)=>!!jl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(py(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function py(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Po="@firebase/app",Hl="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new va("@firebase/app"),my="@firebase/app-compat",gy="@firebase/analytics-compat",vy="@firebase/analytics",_y="@firebase/app-check-compat",yy="@firebase/app-check",by="@firebase/auth",wy="@firebase/auth-compat",Ey="@firebase/database",ky="@firebase/database-compat",Iy="@firebase/functions",Sy="@firebase/functions-compat",Ty="@firebase/installations",xy="@firebase/installations-compat",Cy="@firebase/messaging",Ry="@firebase/messaging-compat",Py="@firebase/performance",Oy="@firebase/performance-compat",Ay="@firebase/remote-config",Ny="@firebase/remote-config-compat",My="@firebase/storage",Dy="@firebase/storage-compat",Ly="@firebase/firestore",Fy="@firebase/firestore-compat",$y="firebase",By="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="[DEFAULT]",Uy={[Po]:"fire-core",[my]:"fire-core-compat",[vy]:"fire-analytics",[gy]:"fire-analytics-compat",[yy]:"fire-app-check",[_y]:"fire-app-check-compat",[by]:"fire-auth",[wy]:"fire-auth-compat",[Ey]:"fire-rtdb",[ky]:"fire-rtdb-compat",[Iy]:"fire-fn",[Sy]:"fire-fn-compat",[Ty]:"fire-iid",[xy]:"fire-iid-compat",[Cy]:"fire-fcm",[Ry]:"fire-fcm-compat",[Py]:"fire-perf",[Oy]:"fire-perf-compat",[Ay]:"fire-rc",[Ny]:"fire-rc-compat",[My]:"fire-gcs",[Dy]:"fire-gcs-compat",[Ly]:"fire-fst",[Fy]:"fire-fst-compat","fire-js":"fire-js",[$y]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Map,Oo=new Map;function Vy(t,e){try{t.container.addComponent(e)}catch(n){ya.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function or(t){const e=t.name;if(Oo.has(e))return ya.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,t);for(const n of Ys.values())Vy(n,t);return!0}function ba(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Tn=new fs("app","Firebase",zy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=By;function Hy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Id,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Tn.create("bad-app-name",{appName:String(r)});const s=Ys.get(r);if(s){if(Js(t,s.options)&&Js(n,s.config))return s;throw Tn.create("duplicate-app",{appName:r})}const i=new X_(r);for(const a of Oo.values())i.addComponent(a);const o=new jy(t,n,i);return Ys.set(r,o),o}function Sd(t=Id){const e=Ys.get(t);if(!e)throw Tn.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Uy[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ya.warn(a.join(" "));return}or(new Sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="firebase-heartbeat-database",Ky=1,Gr="firebase-heartbeat-store";let eo=null;function Td(){return eo||(eo=uy(Wy,Ky,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}}).catch(t=>{throw Tn.create("storage-open",{originalErrorMessage:t.message})})),eo}async function qy(t){var e;try{return(await Td()).transaction(Gr).objectStore(Gr).get(xd(t))}catch(n){throw Tn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Wl(t,e){var n;try{const s=(await Td()).transaction(Gr,"readwrite");return await s.objectStore(Gr).put(e,xd(t)),s.done}catch(r){throw Tn.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function xd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=1024,Jy=30*24*60*60*1e3;class Yy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Jy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kl(),{heartbeatsToSend:n,unsentEntries:r}=Xy(this._heartbeatsCache.heartbeats),s=wd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Kl(){return new Date().toISOString().substring(0,10)}function Xy(t,e=Gy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ql(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ql(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B_()?U_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ql(t){return wd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){or(new Sn("platform-logger",e=>new hy(e),"PRIVATE")),or(new Sn("heartbeat",e=>new Yy(e),"PRIVATE")),tn(Po,Hl,t),tn(Po,Hl,"esm2017"),tn("fire-js","")}Qy("");function wa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Cd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eb=Cd,Rd=new fs("auth","Firebase",Cd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new va("@firebase/auth");function Ds(t,...e){Gl.logLevel<=me.ERROR&&Gl.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw Ea(t,...e)}function wt(t,...e){return Ea(t,...e)}function tb(t,e,n){const r=Object.assign(Object.assign({},eb()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function Ea(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rd.create(t,...e)}function Z(t,e,...n){if(!t)throw Ea(e,...n)}function Ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ds(e),new Error(e)}function Mt(t,e){t||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;function Rt(t){Mt(t instanceof Function,"Expected a class definition");let e=Jl.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jl.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t,e){const n=ba(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Js(i,e!=null?e:{}))return s;ht(s,"already-initialized")}return n.initialize({options:e})}function rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sb(){return Yl()==="http:"||Yl()==="https:"}function Yl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sb()||L_()||"connection"in navigator)?navigator.onLine:!0}function ob(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=D_()||F_()}get(){return ib()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new ms(3e4,6e4);function Ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,s={}){return Od(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pd.fetch()(Ad(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Od(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ab),e);try{const s=new cb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Os(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Os(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Os(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Os(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tb(t,d,u);ht(t,d)}}catch(s){if(s instanceof un)throw s;ht(t,"network-request-failed")}}async function Ni(t,e,n,r,s={}){const i=await gs(t,e,n,r,s);return"mfaPendingCredential"in i&&ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ad(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ka(t.config,s):`${t.config.apiScheme}://${s}`}class cb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),lb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Os(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function db(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fb(t,e=!1){const n=It(t),r=await n.getIdToken(e),s=Ia(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lr(to(s.auth_time)),issuedAtTime:Lr(to(s.iat)),expirationTime:Lr(to(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function to(t){return Number(t)*1e3}function Ia(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=N_(r);return i?JSON.parse(i):(Ds("Failed to decode base64 JWT payload"),null)}catch(i){return Ds("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function hb(t){const e=Ia(t);return Z(e,"internal-error"),Z(typeof e.exp!="undefined","internal-error"),Z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&pb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lr(this.lastLoginAt),this.creationTime=Lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Jr(t,db(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_b(i.providerUserInfo):[],a=vb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nd(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function gb(t){const e=It(t);await Xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _b(t){return t.map(e=>{var{providerId:n}=e,r=wa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){const n=await Od(t,{},async()=>{const r=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ad(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken!="undefined","internal-error"),Z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yr;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){Z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fb(this,e)}reload(){return gb(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jr(this,ub(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:S,isAnonymous:O,providerData:L,stsTokenManager:$}=n;Z(E&&$,e,"internal-error");const C=Yr.fromJSON(this.name,$);Z(typeof E=="string",e,"internal-error"),jt(f,e.name),jt(p,e.name),Z(typeof S=="boolean",e,"internal-error"),Z(typeof O=="boolean",e,"internal-error"),jt(v,e.name),jt(w,e.name),jt(A,e.name),jt(R,e.name),jt(_,e.name),jt(g,e.name);const B=new En({uid:E,auth:e,email:p,emailVerified:S,displayName:f,isAnonymous:O,photoURL:w,phoneNumber:v,tenantId:A,stsTokenManager:C,createdAt:_,lastLoginAt:g});return L&&Array.isArray(L)&&(B.providerData=L.map(z=>Object.assign({},z))),R&&(B._redirectEventId=R),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yr;s.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xs(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Md.type="NONE";const Xl=Md;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e,n){return`firebase:${t}:${e}:${n}`}class Jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ls("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jn(Rt(Xl),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Rt(Xl);const o=Ls(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=En._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Jn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bd(e))return"Blackberry";if(Ud(e))return"Webos";if(Sa(e))return"Safari";if((e.includes("chrome/")||Ld(e))&&!e.includes("edge/"))return"Chrome";if($d(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dd(t=Be()){return/firefox\//i.test(t)}function Sa(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ld(t=Be()){return/crios\//i.test(t)}function Fd(t=Be()){return/iemobile/i.test(t)}function $d(t=Be()){return/android/i.test(t)}function Bd(t=Be()){return/blackberry/i.test(t)}function Ud(t=Be()){return/webos/i.test(t)}function Mi(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bb(t=Be()){var e;return Mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wb(){return $_()&&document.documentMode===10}function Vd(t=Be()){return Mi(t)||$d(t)||Ud(t)||Bd(t)||/windows phone/i.test(t)||Fd(t)}function Eb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e=[]){let n;switch(t){case"Browser":n=Zl(Be());break;case"Worker":n=`${Zl(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ql(this),this.idTokenSubscription=new Ql(this),this.beforeStateQueue=new kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Xs(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ob()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?It(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ta(t){return It(t)}class Ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=W_(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,n){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}async function Sb(t,e){return gs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return Ni(t,"POST","/v1/accounts:signInWithPassword",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",Ai(t,e))}async function Cb(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends xa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Tb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xb(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cb(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e){return Ni(t,"POST","/v1/accounts:signInWithIdp",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="http://localhost";class xn extends xa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wa(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:Rb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ob(t){const e=Er(kr(t)).link,n=e?Er(kr(e)).deep_link_id:null,r=Er(kr(t)).deep_link_id;return(r?Er(kr(r)).link:null)||r||n||e||t}class Ca{constructor(e){var n,r,s,i,o,a;const l=Er(kr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Pb((s=l.mode)!==null&&s!==void 0?s:null);Z(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ob(e);try{return new Ca(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.providerId=hr.PROVIDER_ID}static credential(e,n){return Xr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ca.parseLink(n);return Z(r,"argument-error"),Xr._fromEmailAndCode(e,r.code,r.tenantId)}}hr.PROVIDER_ID="password";hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends vs{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends vs{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends vs{constructor(){super("twitter.com")}static credential(e,n){return xn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await En._fromIdTokenResponse(e,r,s),o=ec(r);return new ar({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ec(r);return new ar({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ec(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zs(e,n,r,s)}}function Hd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zs._fromErrorAndOperation(t,i,e,r):i})}async function Ab(t,e,n=!1){const r=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Jr(t,Hd(s,i,e,t),n);Z(o.idToken,s,"internal-error");const a=Ia(o.idToken);Z(a,s,"internal-error");const{sub:l}=a;return Z(t.uid===l,s,"user-mismatch"),ar._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(t,e,n=!1){const r="signIn",s=await Hd(t,r,e),i=await ar._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mb(t,e){return Wd(Ta(t),e)}function Db(t,e,n){return Mb(It(t),hr.credential(e,n))}const Qs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qs,"1"),this.storage.removeItem(Qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(){const t=Be();return Sa(t)||Mi(t)}const Fb=1e3,$b=10;class qd extends Kd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lb()&&Eb(),this.fallbackToPolling=Vd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$b):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const Bb=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Kd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gd.type="SESSION";const Jd=Gd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Di(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await Ub(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ra("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function zb(t){Et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return typeof Et().WorkerGlobalScope!="undefined"&&typeof Et().importScripts=="function"}async function jb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wb(){return Yd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="firebaseLocalStorageDb",Kb=1,ei="firebaseLocalStorage",Zd="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Li(t,e){return t.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function qb(){const t=indexedDB.deleteDatabase(Xd);return new _s(t).toPromise()}function No(){const t=indexedDB.open(Xd,Kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ei,{keyPath:Zd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await qb(),e(await No()))})})}async function tc(t,e,n){const r=Li(t,!0).put({[Zd]:e,value:n});return new _s(r).toPromise()}async function Gb(t,e){const n=Li(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function nc(t,e){const n=Li(t,!0).delete(e);return new _s(n).toPromise()}const Jb=800,Yb=3;class Qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Wb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jb(),!this.activeServiceWorker)return;this.sender=new Vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await No();return await tc(e,Qs,"1"),await nc(e,Qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Li(s,!1).getAll();return new _s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qd.type="LOCAL";const Xb=Qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zb().appendChild(r)})}function e0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e){return e?Rt(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends xa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n0(t){return Wd(t.auth,new Pa(t),t.bypassAuthState)}function r0(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Nb(n,new Pa(t),t.bypassAuthState)}async function s0(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Ab(n,new Pa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n0;case"linkViaPopup":case"linkViaRedirect":return s0;case"reauthViaPopup":case"reauthViaRedirect":return r0;default:ht(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new ms(2e3,1e4);class zn extends ef{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,i0.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="pendingRedirect",Fs=new Map;class a0 extends ef{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fs.get(this.auth._key());if(!e){try{const r=await l0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fs.set(this.auth._key(),e)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l0(t,e){const n=d0(e),r=u0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function c0(t,e){Fs.set(t._key(),e)}function u0(t){return Rt(t._redirectPersistence)}function d0(t){return Ls(o0,t.config.apiKey,t.name)}async function f0(t,e,n=!1){const r=Ta(t),s=t0(r,e),o=await new a0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=10*60*1e3;class p0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h0&&this.cachedEventUids.clear(),this.cachedEventUids.has(rc(e))}saveEventToCache(e){this.cachedEventUids.add(rc(e)),this.lastProcessedEventTime=Date.now()}}function rc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_0=/^https?/;async function y0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g0(t);for(const n of e)try{if(b0(n))return}catch{}ht(t,"unauthorized-domain")}function b0(t){const e=Ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_0.test(n))return!1;if(v0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new ms(3e4,6e4);function sc(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E0(t){return new Promise((e,n)=>{var r,s,i;function o(){sc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sc(),n(wt(t,"network-request-failed"))},timeout:w0.get()})}if(!((s=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Et().gapi)===null||i===void 0)&&i.load)o();else{const a=e0("iframefcb");return Et()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},Qb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $s=null,e})}let $s=null;function k0(t){return $s=$s||E0(t),$s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new ms(5e3,15e3),S0="__/auth/iframe",T0="emulator/auth/iframe",x0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R0(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ka(e,T0):`https://${t.config.authDomain}/${S0}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=C0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hs(r).slice(1)}`}async function P0(t){const e=await k0(t),n=Et().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:R0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=Et().setTimeout(()=>{i(o)},I0.get());function l(){Et().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A0=500,N0=600,M0="_blank",D0="http://localhost";class ic{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L0(t,e,n,r=A0,s=N0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Be().toLowerCase();n&&(a=Ld(u)?M0:n),Dd(u)&&(e=e||D0,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[v,w])=>`${p}${v}=${w},`,"");if(bb(u)&&a!=="_self")return F0(e||"",a),new ic(null);const f=window.open(e||"",a,d);Z(f,t,"popup-blocked");try{f.focus()}catch{}return new ic(f)}function F0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="__/auth/handler",B0="emulator/auth/handler";function oc(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",H_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(i||{}))o[l]=u}if(e instanceof vs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${U0(t)}?${hs(a).slice(1)}`}function U0({config:t}){return t.emulator?ka(t,B0):`https://${t.authDomain}/${$0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="webStorageSupport";class V0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jd,this._completeRedirectFn=f0,this._overrideRedirectResult=c0}async _openPopup(e,n,r,s){var i;Mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=oc(e,n,r,Ao(),s);return L0(e,o,Ra())}async _openRedirect(e,n,r,s){return await this._originValidation(e),zb(oc(e,n,r,Ao(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P0(e),r=new p0(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(no,{type:no},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[no];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vd()||Sa()||Mi()}}const z0=V0;var ac="@firebase/auth",lc="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W0(t){or(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{Z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zd(t)},d=new Ib(a,l,u);return rb(d,n),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),or(new Sn("auth-internal",e=>{const n=Ta(e.getProvider("auth").getImmediate());return(r=>new j0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(ac,lc,H0(t)),tn(ac,lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t=Sd()){const e=ba(t,"auth");return e.isInitialized()?e.getImmediate():nb(t,{popupRedirectResolver:z0,persistence:[Xb,Bb,Jd]})}W0("Browser");const q0={class:"container"},G0=["onSubmit"],J0={class:"my-3 block"},Y0=M("div",null,"Has\u0142o:",-1),X0={key:0,class:"text-red-500"},Z0=M("button",{type:"submit",class:"button border-blue-400 w-full"}," Zaloguj ",-1),Q0=Ue({__name:"Login",setup(t){const e=K0(),n=Ze(""),r=Ze(""),s={"auth/too-many-requests":"Zbyt du\u017Co pr\xF3b logowania!","auth/wrong-password":"Nieprawid\u0142owe has\u0142o!"},i=pd(),o=Ze(!1);async function a(){var l;if(!o.value){if(n.value.length===0){r.value="Has\u0142o nie mo\u017Ce by\u0107 puste!";return}o.value=!0;try{await Db(e,"akre@skiercon.pl",n.value),xo.value=!0,i.replace("/start")}catch(u){if(u instanceof un)r.value=(l=s[u.code])!=null?l:"Wyst\u0105pi\u0142 nieznany b\u0142\u0105d!",console.error(u.code);else throw u}o.value=!1}}return(l,u)=>(ue(),_e("div",q0,[M("form",{onSubmit:Ju(a,["prevent"]),class:"w-52 mx-auto my-20"},[M("label",J0,[Y0,Pr(M("input",{type:"password","onUpdate:modelValue":u[0]||(u[0]=d=>n.value=d),class:"border border-gray-400 rounded-md py-2 px-4 outline-none w-full",autofocus:""},null,512),[[Kr,n.value]]),r.value?(ue(),_e("div",X0,Oe(r.value),1)):je("",!0)]),Z0],40,G0)]))}}),nf=Hg({history:sg("/skiercon-akredytacja/"),routes:[{path:"/",name:"Login",component:Q0},{path:"/start",name:"Start",component:ev,meta:{step:0}},{path:"/uczestnik",name:"Uczestnik",component:Ln,meta:{person:"Uczestnik"},children:[{path:"1",name:"Uczestnik - Wiek",meta:{step:1},component:Gi},{path:"2",name:"Uczestnik - Nocleg",meta:{step:2},component:Ps},{path:"3",name:"Uczestnik - P\u0142atno\u015B\u0107",meta:{step:3},component:Fn}]},{path:"/tworca-programu",name:"Tw\xF3rca programu",component:Ln,meta:{person:"Tw\xF3rca Programu"},children:[{path:"1",name:"Tw\xF3rca programu - Wiek",meta:{step:1},component:Gi},{path:"2",name:"Tw\xF3rca programu - Wyszukaj osob\u0119",meta:{step:2},component:Ji},{path:"3",name:"Tw\xF3rca programu - Nocleg",meta:{step:3},component:Ps},{path:"4",name:"Tw\xF3rca programu - Zako\u0144cz akredytacj\u0119",meta:{step:4},component:Fn}]},{path:"/wolontariusz",name:"Wolontariusz",component:Ln,meta:{person:"Wolontariusz"},children:[{path:"1",name:"Wolontariusz - Wyszukaj osob\u0119",meta:{step:1},component:Ji},{path:"2",name:"Wolontariusz - Wiek",meta:{step:2},component:Gi},{path:"3",name:"Wolontariusz - Umowa",meta:{step:3},component:I_},{path:"4",name:"Wolontariusz - Nocleg",meta:{step:4},component:Ps},{path:"5",name:"Wolontariusz - Zako\u0144cz akredytacj\u0119",meta:{step:5},component:Fn}]},{path:"/gosc",name:"Go\u015B\u0107",component:Ln,meta:{person:"Go\u015B\u0107"},children:[{path:"1",name:"Go\u015B\u0107 - Wyszukaj osob\u0119",meta:{step:1},component:Ji},{path:"2",name:"Go\u015B\u0107 - Zako\u0144cz akredytacj\u0119",meta:{step:2},component:Fn}]},{path:"/media",name:"Media",component:Ln,meta:{person:"Media"},children:[{path:"1",name:"Media - Wyszukaj osob\u0119",meta:{step:1},component:x_},{path:"2",name:"Media - Zako\u0144cz akredytacj\u0119",meta:{step:2},component:Fn}]},{path:"/wystawca",name:"Wystawca",component:Ln,meta:{person:"Wystawca"},children:[{path:"1",name:"Wystawca - Nazwa stoiska",meta:{step:1},component:P_},{path:"2",name:"Wystawca - Nocleg",meta:{step:2},component:Ps},{path:"3",name:"Wystawca - Zako\u0144cz akredytacj\u0119",meta:{step:3},component:Fn}]}]});nf.beforeEach((t,e,n)=>{t.name==="Login"&&xo.value?n({name:"Start"}):t.name!=="Login"&&!xo.value?n({name:"Login"}):n()});var ew=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function tw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nw(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var rf={exports:{}},rw=nw(Fm);(function(t,e){(function(n,r){t.exports=r(rw)})(typeof self!="undefined"?self:ew,function(n){return(()=>{var r={646:a=>{a.exports=function(l){if(Array.isArray(l)){for(var u=0,d=new Array(l.length);u<l.length;u++)d[u]=l[u];return d}}},713:a=>{a.exports=function(l,u,d){return u in l?Object.defineProperty(l,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):l[u]=d,l}},860:a=>{a.exports=function(l){if(Symbol.iterator in Object(l)||Object.prototype.toString.call(l)==="[object Arguments]")return Array.from(l)}},206:a=>{a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},319:(a,l,u)=>{var d=u(646),f=u(860),p=u(206);a.exports=function(v){return d(v)||f(v)||p()}},8:a=>{function l(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a.exports=l=function(d){return typeof d}:a.exports=l=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},l(u)}a.exports=l},744:(a,l)=>{l.Z=(u,d)=>{for(const[f,p]of d)u[f]=p;return u}},748:a=>{a.exports=n}},s={};function i(a){var l=s[a];if(l!==void 0)return l.exports;var u=s[a]={exports:{}};return r[a](u,u.exports,i),u.exports}i.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return i.d(l,{a:l}),l},i.d=(a,l)=>{for(var u in l)i.o(l,u)&&!i.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},i.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),i.r=a=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{VueSelect:()=>ve,default:()=>te,mixins:()=>ne});var a=i(748),l=["dir"],u=["id","aria-expanded","aria-owns"],d={ref:"selectedOptions",class:"vs__selected-options"},f=["disabled","title","aria-label","onClick"],p={ref:"actions",class:"vs__actions"},v=["disabled"],w={class:"vs__spinner"},A=["id"],R=["id","aria-selected","onMouseover","onClick"],_={key:0,class:"vs__no-options"},g=(0,a.createTextVNode)(" Sorry, no matching options. "),E=["id"],S=i(319),O=i.n(S),L=i(8),$=i.n(L),C=i(713),B=i.n(C);const z={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(c){var h=this;this.autoscroll&&c&&this.$nextTick(function(){return h.maybeAdjustScroll()})}},methods:{maybeAdjustScroll:function(){var c,h=((c=this.$refs.dropdownMenu)===null||c===void 0?void 0:c.children[this.typeAheadPointer])||!1;if(h){var m=this.getDropdownViewport(),b=h.getBoundingClientRect(),k=b.top,y=b.bottom,D=b.height;if(k<m.top)return this.$refs.dropdownMenu.scrollTop=h.offsetTop;if(y>m.bottom)return this.$refs.dropdownMenu.scrollTop=h.offsetTop-(m.height-D)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},G={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var c=0;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},open:function(c){c&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var c=this.typeAheadPointer-1;c>=0;c--)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadDown:function(){for(var c=this.typeAheadPointer+1;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadSelect:function(){var c=this.filteredOptions[this.typeAheadPointer];c&&this.selectable(c)&&this.select(c)},typeAheadToLastSelected:function(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},F={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(c){this.mutableLoading=c}},methods:{toggleLoading:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.mutableLoading=c==null?!this.mutableLoading:c}}};var ee={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},V=[(0,a.createElementVNode)("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1)],Ce=i(744);const ae={},ge=(0,Ce.Z)(ae,[["render",function(c,h){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",ee,V)}]]);var pe={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Ve=[(0,a.createElementVNode)("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1)];const Ft={},rt={Deselect:ge,OpenIndicator:(0,Ce.Z)(Ft,[["render",function(c,h){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",pe,Ve)}]])},st={mounted:function(c,h){var m=h.instance;if(m.appendToBody){var b=m.$refs.toggle.getBoundingClientRect(),k=b.height,y=b.top,D=b.left,T=b.width,P=window.scrollX||window.pageXOffset,x=window.scrollY||window.pageYOffset;c.unbindPosition=m.calculatePosition(c,m,{width:T+"px",left:P+D+"px",top:x+y+k+"px"}),document.body.appendChild(c)}},unmounted:function(c,h){h.instance.appendToBody&&(c.unbindPosition&&typeof c.unbindPosition=="function"&&c.unbindPosition(),c.parentNode&&c.parentNode.removeChild(c))}},We=function(c){var h={};return Object.keys(c).sort().forEach(function(m){h[m]=c[m]}),JSON.stringify(h)};var dn=0;const I=function(){return++dn};function j(c,h){var m=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);h&&(b=b.filter(function(k){return Object.getOwnPropertyDescriptor(c,k).enumerable})),m.push.apply(m,b)}return m}function N(c){for(var h=1;h<arguments.length;h++){var m=arguments[h]!=null?arguments[h]:{};h%2?j(Object(m),!0).forEach(function(b){B()(c,b,m[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(m)):j(Object(m)).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(m,b))})}return c}const q={components:N({},rt),directives:{appendToBody:st},mixins:[z,G,F],emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(c){return c}},selectable:{type:Function,default:function(c){return!0}},getOptionLabel:{type:Function,default:function(c){return $()(c)==="object"?c.hasOwnProperty(this.label)?c[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(c),`.
`)+"https://vue-select.org/api/props.html#getoptionlabel"):c}},getOptionKey:{type:Function,default:function(c){if($()(c)!=="object")return c;try{return c.hasOwnProperty("id")?c.id:We(c)}catch(h){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,c,h)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(c,h,m){return(h||"").toLocaleLowerCase().indexOf(m.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(c,h){var m=this;return c.filter(function(b){var k=m.getOptionLabel(b);return typeof k=="number"&&(k=k.toString()),m.filterBy(b,k,h)})}},createOption:{type:Function,default:function(c){return $()(this.optionList[0])==="object"?B()({},this.label,c):c}},resetOnOptionsChange:{default:!1,validator:function(c){return["function","boolean"].includes($()(c))}},clearSearchOnBlur:{type:Function,default:function(c){var h=c.clearSearchOnSelect,m=c.multiple;return h&&!m}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(c,h){return c}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(c,h,m){var b=m.width,k=m.top,y=m.left;c.style.top=k,c.style.left=y,c.style.width=b}},dropdownShouldOpen:{type:Function,default:function(c){var h=c.noDrop,m=c.open,b=c.mutableLoading;return!h&&m&&!b}},uid:{type:[String,Number],default:function(){return I()}}},data:function(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues:function(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues:function(){return this.modelValue===void 0||this.isReducingValues},selectedValue:function(){var c=this.modelValue;return this.isTrackingValues&&(c=this.$data._value),c!=null?[].concat(c):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var c=this,h={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:N({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return c.isComposing=!0},compositionend:function(){return c.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(m){return c.search=m.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:h,listFooter:h,header:N({},h,{deselect:this.deselect}),footer:N({},h,{deselect:this.deselect})}},childComponents:function(){return N({},rt,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var c=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return c;var h=this.search.length?this.filter(c,this.search,this):c;if(this.taggable&&this.search.length){var m=this.createOption(this.search);this.optionExists(m)||h.unshift(m)}return h},isValueEmpty:function(){return this.selectedValue.length===0},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(c,h){var m=this;!this.taggable&&(typeof m.resetOnOptionsChange=="function"?m.resetOnOptionsChange(c,h,m.selectedValue):m.resetOnOptionsChange)&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler:function(c){this.isTrackingValues&&this.setInternalValueFromOptions(c)}},multiple:function(){this.clearSelection()},open:function(c){this.$emit(c?"open":"close")}},created:function(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions:function(c){var h=this;Array.isArray(c)?this.$data._value=c.map(function(m){return h.findOptionFromReducedValue(m)}):this.$data._value=this.findOptionFromReducedValue(c)},select:function(c){this.$emit("option:selecting",c),this.isOptionSelected(c)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(c):(this.taggable&&!this.optionExists(c)&&(this.$emit("option:created",c),this.pushTag(c)),this.multiple&&(c=this.selectedValue.concat(c)),this.updateValue(c),this.$emit("option:selected",c)),this.onAfterSelect(c)},deselect:function(c){var h=this;this.$emit("option:deselecting",c),this.updateValue(this.selectedValue.filter(function(m){return!h.optionComparator(m,c)})),this.$emit("option:deselected",c)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(c){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(c){var h=this;this.modelValue===void 0&&(this.$data._value=c),c!==null&&(c=Array.isArray(c)?c.map(function(m){return h.reduce(m)}):this.reduce(c)),this.$emit("update:modelValue",c)},toggleDropdown:function(c){var h=c.target!==this.searchEl;h&&c.preventDefault();var m=[].concat(O()(this.deselectButtons||[]),O()([this.$refs.clearButton]));this.searchEl===void 0||m.filter(Boolean).some(function(b){return b.contains(c.target)||b===c.target})?c.preventDefault():this.open&&h?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(c){var h=this;return this.selectedValue.some(function(m){return h.optionComparator(m,c)})},isOptionDeselectable:function(c){return this.isOptionSelected(c)&&this.deselectFromDropdown},optionComparator:function(c,h){return this.getOptionKey(c)===this.getOptionKey(h)},findOptionFromReducedValue:function(c){var h=this,m=[].concat(O()(this.options),O()(this.pushedTags)).filter(function(b){return JSON.stringify(h.reduce(b))===JSON.stringify(c)});return m.length===1?m[0]:m.find(function(b){return h.optionComparator(b,h.$data._value)})||c},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var c=null;this.multiple&&(c=O()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(c)}},optionExists:function(c){var h=this;return this.optionList.some(function(m){return h.optionComparator(m,c)})},normalizeOptionForSlot:function(c){return $()(c)==="object"?c:B()({},this.label,c)},pushTag:function(c){this.pushedTags.push(c)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var c=this.clearSearchOnSelect,h=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:c,multiple:h})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,this.search.length!==0||this.options.length!==0||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(c){var h=this,m=function(y){return y.preventDefault(),!h.isComposing&&h.typeAheadSelect()},b={8:function(y){return h.maybeDeleteValue()},9:function(y){return h.onTab()},27:function(y){return h.onEscape()},38:function(y){return y.preventDefault(),h.typeAheadUp()},40:function(y){return y.preventDefault(),h.typeAheadDown()}};this.selectOnKeyCodes.forEach(function(y){return b[y]=m});var k=this.mapKeydown(b,this);if(typeof k[c.keyCode]=="function")return k[c.keyCode](c)}}},fe=(0,Ce.Z)(q,[["render",function(c,h,m,b,k,y){var D=(0,a.resolveDirective)("append-to-body");return(0,a.openBlock)(),(0,a.createElementBlock)("div",{dir:m.dir,class:(0,a.normalizeClass)(["v-select",y.stateClasses])},[(0,a.renderSlot)(c.$slots,"header",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.header))),(0,a.createElementVNode)("div",{id:"vs".concat(m.uid,"__combobox"),ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":y.dropdownOpen.toString(),"aria-owns":"vs".concat(m.uid,"__listbox"),"aria-label":"Search for option",onMousedown:h[1]||(h[1]=function(T){return y.toggleDropdown(T)})},[(0,a.createElementVNode)("div",d,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(y.selectedValue,function(T,P){return(0,a.renderSlot)(c.$slots,"selected-option-container",{option:y.normalizeOptionForSlot(T),deselect:y.deselect,multiple:m.multiple,disabled:m.disabled},function(){return[((0,a.openBlock)(),(0,a.createElementBlock)("span",{key:m.getOptionKey(T),class:"vs__selected"},[(0,a.renderSlot)(c.$slots,"selected-option",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.normalizeOptionForSlot(T))),function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(m.getOptionLabel(T)),1)]}),m.multiple?((0,a.openBlock)(),(0,a.createElementBlock)("button",{key:0,ref:function(x){return k.deselectButtons[P]=x},disabled:m.disabled,type:"button",class:"vs__deselect",title:"Deselect ".concat(m.getOptionLabel(T)),"aria-label":"Deselect ".concat(m.getOptionLabel(T)),onClick:function(x){return y.deselect(T)}},[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(y.childComponents.Deselect)))],8,f)):(0,a.createCommentVNode)("",!0)]))]})}),256)),(0,a.renderSlot)(c.$slots,"search",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.search)),function(){return[(0,a.createElementVNode)("input",(0,a.mergeProps)({class:"vs__search"},y.scope.search.attributes,(0,a.toHandlers)(y.scope.search.events)),null,16)]})],512),(0,a.createElementVNode)("div",p,[(0,a.withDirectives)((0,a.createElementVNode)("button",{ref:"clearButton",disabled:m.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:h[0]||(h[0]=function(){return y.clearSelection&&y.clearSelection.apply(y,arguments)})},[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(y.childComponents.Deselect)))],8,v),[[a.vShow,y.showClearButton]]),(0,a.renderSlot)(c.$slots,"open-indicator",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.openIndicator)),function(){return[m.noDrop?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(y.childComponents.OpenIndicator),(0,a.normalizeProps)((0,a.mergeProps)({key:0},y.scope.openIndicator.attributes)),null,16))]}),(0,a.renderSlot)(c.$slots,"spinner",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.spinner)),function(){return[(0,a.withDirectives)((0,a.createElementVNode)("div",w,"Loading...",512),[[a.vShow,c.mutableLoading]])]})],512)],40,u),(0,a.createVNode)(a.Transition,{name:m.transition},{default:(0,a.withCtx)(function(){return[y.dropdownOpen?(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createElementBlock)("ul",{id:"vs".concat(m.uid,"__listbox"),ref:"dropdownMenu",key:"vs".concat(m.uid,"__listbox"),class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:h[2]||(h[2]=(0,a.withModifiers)(function(){return y.onMousedown&&y.onMousedown.apply(y,arguments)},["prevent"])),onMouseup:h[3]||(h[3]=function(){return y.onMouseUp&&y.onMouseUp.apply(y,arguments)})},[(0,a.renderSlot)(c.$slots,"list-header",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.listHeader))),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(y.filteredOptions,function(T,P){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{id:"vs".concat(m.uid,"__option-").concat(P),key:m.getOptionKey(T),role:"option",class:(0,a.normalizeClass)(["vs__dropdown-option",{"vs__dropdown-option--deselect":y.isOptionDeselectable(T)&&P===c.typeAheadPointer,"vs__dropdown-option--selected":y.isOptionSelected(T),"vs__dropdown-option--highlight":P===c.typeAheadPointer,"vs__dropdown-option--disabled":!m.selectable(T)}]),"aria-selected":P===c.typeAheadPointer||null,onMouseover:function(x){return m.selectable(T)?c.typeAheadPointer=P:null},onClick:(0,a.withModifiers)(function(x){return m.selectable(T)?y.select(T):null},["prevent","stop"])},[(0,a.renderSlot)(c.$slots,"option",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.normalizeOptionForSlot(T))),function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(m.getOptionLabel(T)),1)]})],42,R)}),128)),y.filteredOptions.length===0?((0,a.openBlock)(),(0,a.createElementBlock)("li",_,[(0,a.renderSlot)(c.$slots,"no-options",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.noOptions)),function(){return[g]})])):(0,a.createCommentVNode)("",!0),(0,a.renderSlot)(c.$slots,"list-footer",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.listFooter)))],40,A)),[[D]]):((0,a.openBlock)(),(0,a.createElementBlock)("ul",{key:1,id:"vs".concat(m.uid,"__listbox"),role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,E))]}),_:3},8,["name"]),(0,a.renderSlot)(c.$slots,"footer",(0,a.normalizeProps)((0,a.guardReactiveProps)(y.scope.footer)))],10,l)}]]),ve=fe,ne={ajax:F,pointer:G,pointerScroll:z},te=fe})(),o})()})})(rf);var sw=tw(rf.exports),iw="firebase",ow="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(iw,ow,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new va("@firebase/firestore");function ti(t,...e){if(lr.logLevel<=me.DEBUG){const n=e.map(Oa);lr.debug(`Firestore (${pr}): ${t}`,...n)}}function sf(t,...e){if(lr.logLevel<=me.ERROR){const n=e.map(Oa);lr.error(`Firestore (${pr}): ${t}`,...n)}}function aw(t,...e){if(lr.logLevel<=me.WARN){const n=e.map(Oa);lr.warn(`Firestore (${pr}): ${t}`,...n)}}function Oa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: `+t;throw sf(e),new Error(e)}function Zr(t,e){t||Ae()}function lw(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="ok",cw="cancelled",Fr="unknown",Ee="invalid-argument",uw="deadline-exceeded",dw="not-found",fw="permission-denied",Mo="unauthenticated",hw="resource-exhausted",cr="failed-precondition",pw="aborted",mw="out-of-range",gw="unimplemented",vw="internal",_w="unavailable";class ie extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class ww{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Zr(typeof e.accessToken=="string"),new yw(e.accessToken,new ot(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Ew{constructor(e,n,r){this.type="FirstParty",this.user=ot.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class kw{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Ew(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sw{constructor(e){this.u=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Zr(typeof e.token=="string"),new Iw(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(),r===void 0?r=e.length-n:r>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return es.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof es?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends es{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(Ee,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const xw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends es{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return xw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(Ee,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ie(Ee,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(Ee,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ie(Ee,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.path=e}static fromPath(e){return new _t(Le.fromString(e))}static fromName(e){return new _t(Le.fromString(e).popFirst(5))}static empty(){return new _t(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _t(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e,n){if(!n)throw new ie(Ee,`Function ${t}() cannot be called with an empty ${e}.`)}function uc(t){if(!_t.isDocumentKey(t))throw new ie(Ee,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dc(t){if(_t.isDocumentKey(t))throw new ie(Ee,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function Cw(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(Ee,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Aa(t);throw new ie(Ee,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ni(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fc,le;function hc(t){if(t===void 0)return sf("RPC_ERROR","HTTP error has no status"),Fr;switch(t){case 200:return cc;case 400:return cr;case 401:return Mo;case 403:return fw;case 404:return dw;case 409:return pw;case 416:return mw;case 429:return hw;case 499:return cw;case 500:return Fr;case 501:return gw;case 503:return _w;case 504:return uw;default:return t>=200&&t<300?cc:t>=400&&t<500?cr:t>=500&&t<600?vw:Fr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(le=fc||(fc={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";class Pw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.h=n+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,n,r,s,i){const o=this.p(e,n);ti("RestConnection","Sending: ",o,r);const a={};return this.g(a,s,i),this.v(e,o,a,r).then(l=>(ti("RestConnection","Received: ",l),l),l=>{throw aw("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}T(e,n,r,s,i,o){return this.m(e,n,r,s,i)}g(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+pr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}p(e,n){const r=Rw[e];return`${this.h}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.I=n}A(e,n){throw new Error("Not supported by FetchConnection")}async v(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.I(n,{method:"POST",headers:r,body:i})}catch(a){throw new ie(hc(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new ie(hc(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ow(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ts(t,e){return t<e?-1:t>e?1:0}function af(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(Ee,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(Ee,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(Ee,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(Ee,"Timestamp seconds out of range: "+e)}static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ts(this.nanoseconds,e.nanoseconds):ts(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Na(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new ri(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new ri(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:De.RED,this.left=s!=null?s:De.EMPTY,this.right=i!=null?i:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new De(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(t,e,n,r,s){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.comparator=e,this.data=new ri(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mc(this.data.getIterator())}getIteratorFrom(e){return new mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new si(this.comparator);return n.data=e,n}}class mc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new ns([])}unionWith(e){let n=new si(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ns(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return af(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Dt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ts(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Do(t){if(Zr(!!t),typeof t=="string"){let e=0;const n=Nw.exec(t);if(Zr(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(t.seconds),nanos:mt(t.nanos)}}function mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gc(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vc(t){const e=Do(t.mapValue.fields.__local_write_time__.timestampValue);return new Pt(e.seconds,e.nanos)}function _c(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mw(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Ae()}function Lo(t,e){if(t===e)return!0;const n=_c(t);if(n!==_c(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vc(t).isEqual(vc(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Do(r.timestampValue),o=Do(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return gc(r.bytesValue).isEqual(gc(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return mt(r.geoPointValue.latitude)===mt(s.geoPointValue.latitude)&&mt(r.geoPointValue.longitude)===mt(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return mt(r.integerValue)===mt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=mt(r.doubleValue),o=mt(s.doubleValue);return i===o?ni(i)===ni(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return af(t.arrayValue.values||[],e.arrayValue.values||[],Lo);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(pc(i)!==pc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Lo(i[a],o[a])))return!1;return!0}(t,e);default:return Ae()}}function ro(t){return!!t&&"mapValue"in t}function $r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Na(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$r(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$r(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ii{constructor(e){this.value=e}static empty(){return new ii({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=$r(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lo(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Na(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ii($r(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.$=null,this.F=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!ni(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.S){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this._=void 0}}class Fw extends Fi{}class $w extends Fi{constructor(e){super(),this.elements=e}}class Bw extends Fi{constructor(e){super(),this.elements=e}}class Uw extends Fi{constructor(e,n){super(),this.q=e,this.O=n}}class Br{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Br}static exists(e){return new Br(void 0,e)}static updateTime(e){return new Br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class $i{}class lf extends $i{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cf extends $i{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Vw extends $i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zw extends $i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class jw{constructor(e,n){this.databaseId=e,this.S=n}}function Fo(t,e){return t.S?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hw(t,e){return t.S?e.toBase64():e.toUint8Array()}function Ww(t,e){return Fo(t,e.toTimestamp())}function uf(t,e){return function(n){return new Le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function $o(t,e){return uf(t.databaseId,e.path)}function Kw(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yc(t,e,n){return{name:$o(t,e),fields:n.value.mapValue.fields}}function qw(t,e){let n;if(e instanceof lf)n={update:yc(t,e.key,e.value)};else if(e instanceof Vw)n={delete:$o(t,e.key)};else if(e instanceof cf)n={update:yc(t,e.key,e.data),updateMask:Gw(e.fieldMask)};else{if(!(e instanceof zw))return Ae();n={verify:$o(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Fw)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $w)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bw)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Uw)return{fieldPath:i.field.canonicalString(),increment:o.O};throw Ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Ww(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ae()}(t,e.precondition)),n}function Gw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return new jw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.H=r,this.q=s,this.J=!1}X(){if(this.J)throw new ie(cr,"The client has already been terminated.")}m(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.H.m(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Mo&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(Fr,s.toString())})}T(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.H.T(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Mo&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(Fr,i.toString())})}terminate(){this.J=!0}}async function Yw(t,e){const n=lw(t),r=Kw(n.q)+"/documents",s={writes:e.map(i=>qw(n.q,i))};await n.m("Commit",r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Map;function Xw(t){if(t._terminated)throw new ie(cr,"The client has already been terminated.");if(!Ur.has(t)){ti("ComponentProvider","Initializing Datastore");const i=function(l){return new Pw(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Tw(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=Ma(t._databaseId),a=function(l,u,d,f){return new Jw(l,u,d,f)}(t._authCredentials,t._appCheckCredentials,i,o);Ur.set(t,a)}var e,n,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Ur.get(t)}class bc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(Ee,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(Ee,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new ie(Ee,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bc({}),this._settingsFrozen=!1,e instanceof Qr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ie(Ee,'"projectId" not provided in firebase.initializeApp.');return new Qr(s.options.projectId)}(e))}get app(){if(!this._app)throw new ie(cr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(cr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bw;switch(n.type){case"gapi":const r=n.client;return Zr(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new kw(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ie(Ee,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ur.get(e);n&&(ti("ComponentProvider","Removing Datastore"),Ur.delete(e),n.terminate())}(this),Promise.resolve()}}function Zw(t=Sd()){return ba(t,"firestore/lite").getImmediate()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class La{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new La(this.firestore,e,this._query)}}class At extends La{constructor(e,n,r){super(e,n,new Dw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new _t(e))}withConverter(e){return new At(this.firestore,e,this._path)}}function Qw(t,e,...n){if(t=It(t),of("collection","path",e),t instanceof Da){const r=Le.fromString(e,...n);return dc(r),new At(t,null,r)}{if(!(t instanceof Ot||t instanceof At))throw new ie(Ee,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return dc(r),new At(t.firestore,null,r)}}function eE(t,e,...n){if(t=It(t),arguments.length===1&&(e=Aw.R()),of("doc","path",e),t instanceof Da){const r=Le.fromString(e,...n);return uc(r),new Ot(t,null,new _t(r))}{if(!(t instanceof Ot||t instanceof At))throw new ie(Ee,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return uc(r),new Ot(t.firestore,t instanceof At?t.converter:null,new _t(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(Ee,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(Dt.fromBase64String(e))}catch(n){throw new ie(Ee,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(Ee,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(Ee,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ts(this._lat,e._lat)||ts(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=/^__.*__$/;class nE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cf(e,this.data,this.fieldMask,n,this.fieldTransforms):new lf(e,this.data,n,this.fieldTransforms)}}function pf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class Fa{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.q=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Fa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.et({path:r,rt:!1});return s.st(e),s}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.et({path:r,rt:!1});return s.Z(),s}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return oi(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(pf(this.tt)&&tE.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class rE{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.q=r||Ma(e)}ht(e,n,r,s=!1){return new Fa({tt:e,methodName:n,at:r,path:ut.emptyPath(),rt:!1,ct:s},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function sE(t){const e=t._freezeSettings(),n=Ma(t._databaseId);return new rE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iE(t,e,n,r,s,i={}){const o=t.ht(i.merge||i.mergeFields?2:0,e,n,s);_f("Data must be an object, but it was:",o,r);const a=gf(r,o);let l,u;if(i.merge)l=new ns(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const p=oE(e,f,n);if(!o.contains(p))throw new ie(Ee,`Field '${p}' is specified in your field mask but missing from your input data.`);cE(d,p)||d.push(p)}l=new ns(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new nE(new ii(a),l,u)}function mf(t,e){if(vf(t=It(t)))return _f("Unsupported field value:",e,t),gf(t,e);if(t instanceof ff)return function(n,r){if(!pf(r.tt))throw r.ut(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ut(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=mf(o,r.ot(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=It(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Lw(r.q,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Pt.fromDate(n);return{timestampValue:Fo(r.q,s)}}if(n instanceof Pt){const s=new Pt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fo(r.q,s)}}if(n instanceof hf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rs)return{bytesValue:Hw(r.q,n._byteString)};if(n instanceof Ot){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ut(`Unsupported field value: ${Aa(n)}`)}(t,e)}function gf(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Na(t,(r,s)=>{const i=mf(s,e.nt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pt||t instanceof hf||t instanceof rs||t instanceof Ot||t instanceof ff)}function _f(t,e,n){if(!vf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Aa(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function oE(t,e,n){if((e=It(e))instanceof df)return e._internalPath;if(typeof e=="string")return lE(t,e);throw oi("Field path arguments must be of type string or ",t,!1,void 0,n)}const aE=new RegExp("[~\\*/\\[\\]]");function lE(t,e,n){if(e.search(aE)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new df(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(Ee,a+t+l)}function cE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function dE(t,e){const n=eE(t=Cw(t,At)),r=uE(t.converter,e),s=iE(sE(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Yw(Xw(t.firestore),[s.toMutation(n._key,Br.exists(!1))]).then(()=>n)}(function(t){pr=t})(`${ps}_lite`),or(new Sn("firestore/lite",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Da(n,new ww(t.getProvider("auth-internal")),new Sw(t.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),tn("firestore-lite","3.4.12",""),tn("firestore-lite","3.4.12","esm2017");let yf;function fE(){const e=Hy({authDomain:"skiercon-akredytacja.firebaseapp.com",databaseURL:"https://skiercon-akredytacja-default-rtdb.europe-west1.firebasedatabase.app",projectId:"skiercon-akredytacja",storageBucket:"skiercon-akredytacja.appspot.com",messagingSenderId:"757533505285",appId:"1:757533505285:web:7c08726c8e0e3bc2fea96c",apiKey:"AIzaSyA0SHRl9hg0zEWEp0byy8-ftv6xQg2lQF4"});yf=Zw(e)}async function hE(t){for(let e=0;e<t.numberOfIds;e++){const n=JSON.parse(JSON.stringify({type:t.personType,personName:t.personName,mediaName:t.mediaName,vendorName:t.vendorName,volunteerType:t.volunteerType,sleepType:t.sleep,accStart:t.ticketStartTime,accEnd:new Date}));console.log(n),await dE(Qw(yf,"tickets"),n)}}const pE={class:"mt-10 flex justify-center"},mE=Ue({__name:"Pagination",props:{nextText:{type:String,default:"Dalej"},prevText:{type:String,default:"Wstecz"},canMoveForward:{type:Boolean,default:!0},end:{type:Boolean,default:!1}},setup(t){const e=t,n=md(),r=pd(),s=n.meta.step;function i(){s===1?r.push("/"):r.push(`${n.matched[0].path}/${s-1}`)}async function o(){!e.canMoveForward&&!confirm("Czy na pewno chcesz pomin\u0105\u0107 ten krok?")||(e.end?(await hE(K.value),gd(),r.push("/start")):r.push(`${n.matched[0].path}/${s+1}`))}return(a,l)=>(ue(),_e("div",pE,[M("button",{class:"button mr-3",onClick:i},Oe(t.prevText),1),M("button",{class:at(["button",t.canMoveForward?"border-blue-300":"border-red-500 "]),onClick:o},Oe(t.nextText),3)]))}});const gE={class:"card select-none"},vE={class:"pl-2 text-xl"},_E={class:"px-3"},yE=Ue({__name:"Counter",props:{label:{type:String,required:!0},modelValue:{type:Number,required:!0},min:{type:Number,default:-1/0},max:{type:Number,default:1/0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t;function r(){n.modelValue<n.max&&e("update:modelValue",n.modelValue+1)}function s(){n.modelValue>n.min&&e("update:modelValue",n.modelValue-1)}return(i,o)=>(ue(),_e("div",gE,[se(Oe(t.label)+" ",1),M("span",vE,[M("button",{class:at(["counter-button",{"cursor-not-allowed":t.modelValue===t.min}]),onClick:s}," - ",2),M("span",_E,Oe(t.modelValue),1),M("button",{class:at(["counter-button",{"cursor-not-allowed":t.modelValue===t.max}]),onClick:r}," + ",2)])]))}});var bE=fr(yE,[["__scopeId","data-v-5be56702"]]);fE();const ys=td(Um);ys.use(nf);ys.component("v-select",sw);ys.component("Pagination",mE);ys.component("Counter",bE);ys.mount("#app");
