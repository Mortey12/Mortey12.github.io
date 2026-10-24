var Pg=Object.defineProperty;var mh=n=>{throw TypeError(n)};var Cg=(n,e,t)=>e in n?Pg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Et=(n,e,t)=>Cg(n,typeof e!="symbol"?e+"":e,t),hl=(n,e,t)=>e.has(n)||mh("Cannot "+t);var R=(n,e,t)=>(hl(n,e,"read from private field"),t?t.call(n):e.get(n)),G=(n,e,t)=>e.has(n)?mh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),$=(n,e,t,r)=>(hl(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),ee=(n,e,t)=>(hl(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Hd=!1;var Wd=Array.isArray,kg=Array.prototype.indexOf,zo=Array.prototype.includes,wa=Array.from,Kd=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Vg=Object.getOwnPropertyDescriptors,Dg=Object.prototype,Ng=Array.prototype,Gd=Object.getPrototypeOf,gh=Object.isExtensible;const Qd=()=>{};function PA(n){return typeof(n==null?void 0:n.then)=="function"}function Og(n){for(var e=0;e<n.length;e++)n[e]()}function Yd(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}function CA(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const ot=2,Es=4,Ia=8,Jd=1<<24,Zt=16,Wt=32,On=64,Nl=128,Eu=256,tn=512,Be=1024,Me=2048,$t=4096,pt=8192,mt=16384,Ns=32768,$o=1<<25,xr=65536,Ho=1<<17,Mg=1<<18,Os=1<<19,Lg=1<<20,dn=1<<25,Wo=1<<21,as=1<<22,er=1<<23,Nr=Symbol("$state"),Xd=Symbol("component"),xg=Symbol("legacy props"),Fg=Symbol(""),bo=Symbol("attributes"),Ol=Symbol("class"),Ml=Symbol("style"),ri=Symbol("text"),Po=Symbol("form reset"),ji=new class extends Error{constructor(){super(...arguments);Et(this,"name","StaleReactionError");Et(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var qd;const Ug=!!((qd=globalThis.document)!=null&&qd.contentType)&&globalThis.document.contentType.includes("xml"),Bg=1,jg=2,Zd=4,qg=8,zg=16,$g=1,Hg=4,Wg=8,Kg=16,Gg=1,Qg=2,Ue=Symbol("uninitialized"),Yg="http://www.w3.org/1999/xhtml";function Jg(){console.warn("https://svelte.dev/e/derived_inert")}function VA(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ef(n){return n===this.v}function Zg(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function tf(n){return!Zg(n,this.v)}function e_(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function t_(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function n_(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function r_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function s_(n){throw new Error("https://svelte.dev/e/effect_orphan")}function i_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function o_(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function a_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function l_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function u_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function c_(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let h_=!1,gt=null;function Ts(n){gt=n}function Tu(n,e=!1,t){gt={p:gt,i:!1,c:null,e:null,s:n,x:null,r:oe,l:null}}function wu(n){var e=gt,t=e.e;if(t!==null){e.e=null;for(var r of t)wf(r)}return e.i=!0,gt=e.p,Iu(n)}function Iu(n={}){return Kd(n,Xd,{value:!0}),n}function nf(){return!0}let wr=[];function rf(){var n=wr;wr=[],Og(n)}function kn(n){if(wr.length===0&&!mi){var e=wr;queueMicrotask(()=>{e===wr&&rf()})}wr.push(n)}function d_(){for(;wr.length>0;)rf()}const f_=-7169;function Ne(n,e){n.f=n.f&f_|e}function Au(n){n.f&tn||n.deps===null?Ne(n,Be):Ne(n,$t)}function sf(n,e,t){n.f&Me?e.add(n):n.f&$t&&t.add(n),Ne(n,Be)}let _h=!1;function p_(){_h||(_h=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[Po])==null||e.call(t)})},{capture:!0}))}function Ms(n){var e=te,t=oe;Kt(null),yn(null);try{return n()}finally{Kt(e),yn(t)}}function DA(n,e,t,r=t){n.addEventListener(e,()=>Ms(t));const s=n[Po];s?n[Po]=()=>{s(),r(!0)}:n[Po]=()=>r(!0),p_()}function m_(n,e,t,r){const s=Ri;var i=n.filter(w=>!w.settled),a=e.map(s);if(t.length===0&&i.length===0){r(a);return}var l=oe,c=g_(),h=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(w=>w.promise)):null;function f(w){if(!(l.f&mt)){c();try{r([...a,...w])}catch(P){cn(P,l)}Ko()}}var m=of();if(t.length===0){h.then(()=>f([])).finally(m);return}function y(){Promise.all(t.map(w=>__(w))).then(f).catch(w=>cn(w,l)).finally(m)}h?h.then(()=>{c(),y(),Ko()}):y()}function g_(){var n=oe,e=te,t=gt,r=H;return function(i=!0){yn(n),Kt(e),Ts(t),i&&!(n.f&mt)&&(r==null||r.activate(),r==null||r.apply())}}function Ko(n=!0){yn(null),Kt(null),Ts(null),n&&(H==null||H.deactivate())}function of(){var n=oe,e=n.b,t=H,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Ri(n){var e=ot|Me;return oe!==null&&(oe.f|=Os),{ctx:gt,deps:null,effects:null,equals:ef,f:e,fn:n,reactions:null,rv:0,v:Ue,wv:0,parent:oe,ac:null}}const si=Symbol("obsolete");function __(n,e,t){let r=oe;r===null&&e_();var s=void 0,i=Ur(Ue),a=!te,l=new Set;return O_(()=>{var w,P;var c=oe,h=Yd();s=h.promise;try{Promise.resolve(n()).then(h.resolve,V=>{V!==ji&&h.reject(V)}).finally(Ko)}catch(V){h.reject(V),Ko()}var f=H;if(a){if(c.f&Ns)var m=of();if((w=r.b)!=null&&w.is_rendered())(P=f.async_deriveds.get(c))==null||P.reject(si);else for(const V of l.values())V.reject(si);l.add(h),f.async_deriveds.set(c,h)}const y=(V,A=void 0)=>{m==null||m(),l.delete(h),A!==si&&(f.activate(),A?(i.f|=er,ws(i,A)):(i.f&er&&(i.f^=er),ws(i,V)),f.deactivate())};h.promise.then(y,V=>y(null,V||"unknown"))}),Tf(()=>{for(const c of l)c.reject(si)}),new Promise(c=>{function h(f){function m(){f===s?c(i):h(s)}f.then(m,m)}h(s)})}function xe(n){const e=Ri(n);return Cf(e),e}function af(n){const e=Ri(n);return e.equals=tf,e}function v_(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)It(e[t])}}function Ru(n){var e,t=oe,r=n.parent;if(!Mn&&r!==null&&n.v!==Ue&&r.f&(mt|pt))return Jg(),n.v;yn(r);try{v_(n),e=Nf(n)}finally{yn(t)}return e}function lf(n){var e=Ru(n);if(!n.equals(e)&&(n.wv=Vf(),(!(H!=null&&H.is_fork)||n.deps===null)&&(H!==null?(H.capture(n,e,!0),pi==null||pi.capture(n,e,!0)):n.v=e,n.deps===null))){Ne(n,Be);return}Mn||(Qe!==null?(Pu()||H!=null&&H.is_fork)&&Qe.set(n,e):Au(n))}function y_(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&Ms(()=>{t.ac.abort(ji),t.ac=null}),t.fn!==null&&(t.teardown=Qd),Si(t,0),Cu(t))}function uf(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&Is(e)}let dl=null,Zr=null,H=null,pi=null,Qe=null,Ll=null,mi=!1,fl=!1,gi=null,Co=null;var vh=0;let E_=1;var ds,Yn,Pr,fs,ps,ms,bn,gs,bt,Mi,Pn,Jt,an,_s,Cr,ce,xl,Fl,ii,Ul,cf,hf,ts,T_,oi;const _a=class _a{constructor(){G(this,ce);Et(this,"id",E_++);G(this,ds,!1);Et(this,"linked",!0);G(this,Yn,null);G(this,Pr,null);Et(this,"async_deriveds",new Map);Et(this,"current",new Map);Et(this,"previous",new Map);G(this,fs,new Set);G(this,ps,new Set);G(this,ms,0);G(this,bn,new Map);G(this,gs,null);G(this,bt,[]);G(this,Mi,[]);G(this,Pn,new Set);G(this,Jt,new Set);G(this,an,new Map);G(this,_s,new Set);Et(this,"is_fork",!1);G(this,Cr,!1);Zr===null?dl=Zr=this:($(Zr,Pr,this),$(this,Yn,Zr)),Zr=this}skip_effect(e){R(this,an).has(e)||R(this,an).set(e,{d:[],m:[]}),R(this,_s).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=R(this,an).get(e);if(r){R(this,an).delete(e);for(var s of r.d)Ne(s,Me),t(s);for(s of r.m)Ne(s,$t),t(s)}R(this,_s).add(e)}capture(e,t,r=!1){e.v!==Ue&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&er||(this.current.set(e,[t,r]),Qe==null||Qe.set(e,t)),this.is_fork||(e.v=t)}activate(){H=this}deactivate(){H=null,Qe=null}flush(){try{fl=!0,H=this,ee(this,ce,ii).call(this)}finally{vh=0,Ll=null,gi=null,Co=null,fl=!1,H=null,Qe=null,pn.clear()}}discard(){var e;for(const t of R(this,ps))t(this);R(this,ps).clear();for(const t of this.async_deriveds.values())t.reject(si);ee(this,ce,oi).call(this),(e=R(this,gs))==null||e.resolve()}register_created_effect(e){R(this,Mi).push(e)}increment(e,t){if($(this,ms,R(this,ms)+1),e){let r=R(this,bn).get(t)??0;R(this,bn).set(t,r+1)}}decrement(e,t){if($(this,ms,R(this,ms)-1),e){let r=R(this,bn).get(t)??0;r===1?R(this,bn).delete(t):R(this,bn).set(t,r-1)}R(this,Cr)||($(this,Cr,!0),kn(()=>{$(this,Cr,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const r of e)R(this,Pn).add(r);for(const r of t)R(this,Jt).add(r);e.clear(),t.clear()}oncommit(e){R(this,fs).add(e)}ondiscard(e){R(this,ps).add(e)}settled(){return(R(this,gs)??$(this,gs,Yd())).promise}static ensure(){if(H===null){const e=H=new _a;!fl&&!mi&&kn(()=>{R(e,ds)||e.flush()})}return H}apply(){{Qe=null;return}}schedule(e){var t;if(Ll=e,(t=e.b)!=null&&t.is_pending&&e.f&(Es|Ia|Jd)&&!(e.f&Ns)){e.b.defer_effect(e);return}R(this,bt).push(e)}};ds=new WeakMap,Yn=new WeakMap,Pr=new WeakMap,fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,bn=new WeakMap,gs=new WeakMap,bt=new WeakMap,Mi=new WeakMap,Pn=new WeakMap,Jt=new WeakMap,an=new WeakMap,_s=new WeakMap,Cr=new WeakMap,ce=new WeakSet,xl=function(){if(this.is_fork)return!0;for(const r of R(this,bn).keys()){for(var e=r,t=!1;e.parent!==null;){if(R(this,an).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Fl=function(){var e=[];for(const i of R(this,bt))if(!(i.f&mt||!(i.f&(Me|$t)))){for(var t=i,r=!1;t.parent!==null;){t=t.parent;var s=t.f;if(s&(On|Wt)){if(!(s&Be)){r=!0;break}t.f^=Be}}r||e.push(t)}return $(this,bt,[]),e},ii=function(){var l,c,h,f;$(this,ds,!0);for(const m of R(this,Pn))R(this,Jt).delete(m),Ne(m,Me),this.schedule(m);for(const m of R(this,Jt))Ne(m,$t),this.schedule(m);this.apply();for(var e=gi=[],t=[],r=Co=[];R(this,bt).length>0;){vh++>1e3&&(ee(this,ce,oi).call(this),I_());for(const m of ee(this,ce,Fl).call(this))try{ee(this,ce,Ul).call(this,m,e,t)}catch(y){throw pf(m),ee(this,ce,xl).call(this)||this.discard(),y}}if(H=null,r.length>0){var s=_a.ensure();for(const m of r)s.schedule(m)}if(gi=null,Co=null,ee(this,ce,xl).call(this)){ee(this,ce,ts).call(this,t),ee(this,ce,ts).call(this,e);for(const[m,y]of R(this,an))ff(m,y);r.length>0&&ee(l=H,ce,ii).call(l);return}const i=ee(this,ce,cf).call(this);if(i){ee(this,ce,ts).call(this,t),ee(this,ce,ts).call(this,e),ee(c=i,ce,hf).call(c,this);return}R(this,Pn).clear(),R(this,Jt).clear();for(const m of R(this,fs))m(this);R(this,fs).clear(),pi=this,yh(t),yh(e),pi=null,(h=R(this,gs))==null||h.resolve();var a=H;if(R(this,ms)===0&&(R(this,bt).length===0||a!==null)&&ee(this,ce,oi).call(this),R(this,bt).length>0)if(a!==null){for(const m of R(this,bt))R(a,bt).push(m);$(this,bt,[])}else a=this;a!==null&&(pn.clear(),ee(f=a,ce,ii).call(f))},Ul=function(e,t,r){e.f^=Be;for(var s=e.first;s!==null;){var i=s.f,a=(i&(Wt|On))!==0,l=a&&(i&Be)!==0,c=l||(i&pt)!==0||R(this,an).has(s);if(!c&&s.fn!==null){a?s.f^=Be:i&Es?t.push(s):zi(s)&&(i&Zt&&R(this,Jt).add(s),Is(s));var h=s.first;if(h!==null){s=h;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},cf=function(){for(var e=R(this,Yn);e!==null;){if(!e.is_fork){for(const[t,[,r]]of this.current)if(e.current.has(t)&&!r)return e}e=R(e,Yn)}return null},hf=function(e){var r;for(const[s,i]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,i);for(const[s,i]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(R(e,Pn),R(e,Jt));const t=s=>{var i=s.reactions;if(i!==null&&!(s.f&ot&&!(s.f&(Me|$t))))for(const c of i){var a=c.f;if(a&ot)t(c);else{var l=c;a&(as|Zt)&&!this.async_deriveds.has(l)&&(R(this,Jt).delete(l),Ne(l,Me),this.schedule(l))}}};for(const s of this.current.keys())t(s);this.oncommit(()=>e.discard()),ee(r=e,ce,oi).call(r),H=this,ee(this,ce,ii).call(this)},ts=function(e){for(var t=0;t<e.length;t+=1)sf(e[t],R(this,Pn),R(this,Jt))},T_=function(){var m,y;for(let w=dl;w!==null;w=R(w,Pr)){var e=w.id<this.id,t=[];for(const[P,[V,A]]of this.current){if(w.current.has(P)){var r=w.current.get(P)[0];if(e&&V!==r)w.current.set(P,[V,A]);else continue}t.push(P)}if(e)for(const[P,V]of this.async_deriveds){const A=w.async_deriveds.get(P);A&&V.promise.then(A.resolve).catch(A.reject)}var s=[...w.current.keys()].filter(P=>!w.current.get(P)[1]);if(!(!R(w,ds)||s.length===0)){var i=s.filter(P=>!this.current.has(P));if(i.length===0)e&&w.discard();else if(t.length>0){if(e)for(const P of R(this,_s))w.unskip_effect(P,V=>{var A;V.f&(Zt|as)?w.schedule(V):ee(A=w,ce,ts).call(A,[V])});w.activate();var a=new Set,l=new Map;for(var c of t)df(c,i,a,l);l=new Map;var h=[...w.current].filter(([P,V])=>{const A=this.current.get(P);return A?A[0]!==V[0]||A[1]!==V[1]:!0}).map(([P])=>P);if(h.length>0)for(const P of R(this,Mi))!(P.f&(mt|pt|Ho))&&Su(P,h,l)&&(P.f&(as|Zt)?(Ne(P,Me),w.schedule(P)):R(w,Pn).add(P));if(R(w,bt).length>0&&!R(w,Cr)){w.apply();for(var f of ee(m=w,ce,Fl).call(m))ee(y=w,ce,Ul).call(y,f,[],[])}w.deactivate()}}}},oi=function(){if(this.linked){var e=R(this,Yn),t=R(this,Pr);e===null?dl=t:$(e,Pr,t),t===null?Zr=e:$(t,Yn,e),this.linked=!1}};let Fr=_a;function w_(n){var e=mi;mi=!0;try{for(var t;;){if(d_(),H===null)return t;H.flush()}}finally{mi=e}}function I_(){try{i_()}catch(n){cn(n,Ll)}}let Yt=null;function yh(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if(!(r.f&(mt|pt))&&zi(r)&&(Yt=new Set,Is(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Sf(r),(Yt==null?void 0:Yt.size)>0)){pn.clear();for(const s of Yt){if(s.f&(mt|pt))continue;const i=[s];let a=s.parent;for(;a!==null;)Yt.has(a)&&(Yt.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];c.f&(mt|pt)||Is(c)}}Yt.clear()}}Yt=null}}function df(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;i&ot?df(s,e,t,r):i&(as|Zt)&&!(i&Me)&&Su(s,e,r)&&(Ne(s,Me),bu(s))}}function Su(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(zo.call(e,s))return!0;if(s.f&ot&&Su(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function bu(n){H.schedule(n)}function ff(n,e){if(!(n.f&Wt&&n.f&Be)){n.f&Me?e.d.push(n):n.f&$t&&e.m.push(n),Ne(n,Be);for(var t=n.first;t!==null;)ff(t,e),t=t.next}}function pf(n){Ne(n,Be);for(var e=n.first;e!==null;)pf(e),e=e.next}let Go=new Set;const pn=new Map;let mf=!1;function Ur(n,e){var t={f:0,v:n,reactions:null,equals:ef,rv:0,wv:0};return t}function qt(n,e){const t=Ur(n);return Cf(t),t}function A_(n,e=!1,t=!0){const r=Ur(n);return e||(r.equals=tf),r}function Dt(n,e,t=!1){te!==null&&(!en||te.f&Ho)&&nf()&&te.f&(ot|Zt|as|Ho)&&(mn===null||!mn.has(n))&&u_();let r=t?Ir(e):e;return ws(n,r,Co)}var Tr=null,Bl=0;function ws(n,e,t=null){if(!n.equals(e)){Mn?pn.set(n,e):pn.has(n)||pn.set(n,n.v);var r=Fr.ensure();if(r.capture(n,e),n.f&ot){const s=n;n.f&Me&&Ru(s),Qe===null&&Au(s)}n.wv=Vf(),Tr=null,Bl=0,gf(n,Me,t),Tr=null,oe!==null&&oe.f&Be&&!(oe.f&(Wt|On))&&(Ut===null?x_([n]):Ut.push(n)),!r.is_fork&&Go.size>0&&!mf&&R_()}return e}function R_(){mf=!1;for(const n of Go){n.f&Be&&Ne(n,$t);let e;try{e=zi(n)}catch{e=!0}e&&Is(n)}Go.clear()}function _i(n){Dt(n,n.v+1)}function gf(n,e,t){var r=n.reactions;if(r!==null){var s=r.length;if(Bl+=s,Bl>1e5&&Tr===null&&(Tr=new Set),Tr!==null){if(Tr.has(n))return;Tr.add(n)}for(var i=0;i<s;i++){var a=r[i],l=a.f,c=(l&Me)===0;if(c&&Ne(a,e),l&Ho)Go.add(a);else if(l&ot){var h=a;Qe==null||Qe.delete(h),gf(h,$t,t)}else if(c){var f=a;l&Zt&&Yt!==null&&Yt.add(f),t!==null?t.push(f):bu(f)}}}}function Ir(n){if(typeof n!="object"||n===null||Nr in n||Xd in n)return n;const e=Gd(n);if(e!==Dg&&e!==Ng)return n;var t=new Map,r=Wd(n),s=qt(0),i=Mr,a=l=>{if(Mr===i)return l();var c=te,h=Mr;Kt(null),Ih(i);var f=l();return Kt(c),Ih(h),f};return r&&t.set("length",qt(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&a_();var f=t.get(c);return f===void 0?a(()=>{var m=qt(h.value);return t.set(c,m),m}):Dt(f,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const f=a(()=>qt(Ue));t.set(c,f),_i(s)}}else Dt(h,Ue),_i(s);return!0},get(l,c,h){var w;if(c===Nr)return n;var f=t.get(c),m=c in l;if(f===void 0&&(!m||(w=os(l,c))!=null&&w.writable)&&(f=a(()=>{var P=Ir(m?l[c]:Ue),V=qt(P);return V}),t.set(c,f)),f!==void 0){var y=C(f);return y===Ue?void 0:y}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var y;(y=this.has)==null||y.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),f=t.get(c);if(f!==void 0){var m=C(f);if(m===Ue)return;if(h&&"value"in h)h.value=m;else return{enumerable:!0,configurable:!0,value:m,writable:!0}}return h},has(l,c){var y;if(c===Nr)return!0;var h=t.get(c),f=h!==void 0&&h.v!==Ue||Reflect.has(l,c);if(h!==void 0||oe!==null&&(!f||(y=os(l,c))!=null&&y.writable)){h===void 0&&(h=a(()=>{var w=f?Ir(l[c]):Ue,P=qt(w);return P}),t.set(c,h));var m=C(h);if(m===Ue)return!1}return f},set(l,c,h,f){var L;var m=t.get(c),y=c in l;if(r&&c==="length")for(var w=h;w<m.v;w+=1){var P=t.get(w+"");P!==void 0?Dt(P,Ue):w in l&&(P=a(()=>qt(Ue)),t.set(w+"",P))}if(m===void 0)(!y||(L=os(l,c))!=null&&L.writable)&&(m=a(()=>qt(void 0)),Dt(m,Ir(h)),t.set(c,m));else{y=m.v!==Ue;var V=a(()=>Ir(h));Dt(m,V)}var A=Reflect.getOwnPropertyDescriptor(l,c);if(A!=null&&A.set&&A.set.call(f,h),!y){if(r&&typeof c=="string"){var O=t.get("length"),B=Number(c);Number.isInteger(B)&&B>=O.v&&Dt(O,B+1)}_i(s)}return!0},ownKeys(l){C(s);var c=Reflect.ownKeys(l).filter(m=>{var y=t.get(m);return y===void 0||y.v!==Ue});for(var[h,f]of t)f.v!==Ue&&!(h in l)&&c.push(h);return c},setPrototypeOf(){l_()}})}function Eh(n){try{if(n!==null&&typeof n=="object"&&Nr in n)return n[Nr]}catch{}return n}function NA(n,e){return Object.is(Eh(n),Eh(e))}var Th,_f,vf,yf;function S_(){if(Th===void 0){Th=window,_f=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;vf=os(e,"firstChild").get,yf=os(e,"nextSibling").get,gh(n)&&(n[Ol]=void 0,n[bo]=null,n[Ml]=void 0,n.__e=void 0),gh(t)&&(t[ri]=void 0)}}function tr(n=""){return document.createTextNode(n)}function Br(n){return vf.call(n)}function qi(n){return yf.call(n)}function Ae(n,e){return Br(n)}function Zs(n,e=!1){{var t=Br(n);return t instanceof Comment&&t.data===""?qi(t):t}}function ge(n,e=!1){return Br(n)}function le(n,e=1,t=!1){let r=n;for(;e--;)r=qi(r);return r}function b_(n){n.textContent=""}function Ef(){return!1}function P_(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function C_(n){var e=oe;if(e===null)return te.f|=er,n;if(!(e.f&Ns)&&!(e.f&Es))throw n;cn(n,e)}function cn(n,e){if(!(e!==null&&e.f&mt)){for(;e!==null;){if(e.f&Nl&&!(e.f&(mt|$o))){if(!(e.f&Ns))throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function k_(n){oe===null&&(te===null&&s_(),r_()),Mn&&n_()}function V_(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Bn(n,e){var t=oe;t!==null&&t.f&pt&&(n|=pt);var r={ctx:gt,deps:null,nodes:null,f:n|Me|tn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};H==null||H.register_created_effect(r);var s=r;if(n&Es)gi!==null?gi.push(r):Fr.ensure().schedule(r);else if(e!==null){try{Is(r)}catch(a){throw It(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&Os)&&(s=s.first,n&Zt&&n&xr&&s!==null&&(s.f|=xr))}if(s!==null&&(s.parent=t,t!==null&&V_(s,t),te!==null&&te.f&ot&&!(n&On))){var i=te;(i.effects??(i.effects=[])).push(s)}return r}function Pu(){return te!==null&&!en}function Tf(n){const e=Bn(Ia,null);return Ne(e,Be),e.teardown=n,e}function D_(n){k_();var e=oe.f,t=!te&&(e&Wt)!==0&&gt!==null&&!gt.i;if(t){var r=gt;(r.e??(r.e=[])).push(n)}else return wf(n)}function wf(n){return Bn(Es|Lg,n)}function N_(n){Fr.ensure();const e=Bn(On|Os,n);return(t={})=>new Promise(r=>{t.outro?Or(e,()=>{It(e),r(void 0)}):(It(e),r(void 0))})}function If(n){return Bn(Es,n)}function O_(n){return Bn(as|Os,n)}function Af(n,e=0){return Bn(Ia|e,n)}function ke(n,e=[],t=[],r=[]){m_(r,e,t,s=>{Bn(Ia,()=>{n(...s.map(C))})})}function Aa(n,e=0){var t=Bn(Zt|e,n);return t}function zt(n){return Bn(Wt|Os,n)}function Rf(n){var e=n.teardown;if(e!==null){const t=Mn,r=te;wh(!0),Kt(null);try{e.call(null)}catch(s){cn(s,n.parent)}finally{wh(t),Kt(r)}}}function Cu(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&Ms(()=>{s.abort(ji)});var r=t.next;t.f&On?t.parent=null:It(t,e),t=r}}function M_(n){for(var e=n.first;e!==null;){var t=e.next;e.f&Wt||It(e),e=t}}function It(n,e=!0){var t=!1;(e||n.f&Mg)&&n.nodes!==null&&n.nodes.end!==null&&(L_(n.nodes.start,n.nodes.end),t=!0),n.f|=$o,Cu(n,e&&!t),Si(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();Rf(n),n.f^=$o,n.f|=mt;var s=n.parent;s!==null&&s.first!==null&&Sf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function L_(n,e){for(;n!==null;){var t=n===e?null:qi(n);n.remove(),n=t}}function Sf(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Or(n,e,t=!0){var r=[];n.f|=Eu,bf(n,r,!0);var s=()=>{t&&It(n),e&&e()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function bf(n,e,t){if(!(n.f&pt)){n.f^=pt;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var s=n.first;s!==null;){var i=s.next;if(!(s.f&On)){var a=(s.f&xr)!==0||(s.f&Wt)!==0&&(n.f&Zt)!==0;bf(s,e,a?t:!1)}s=i}}}function Qo(n){n.f&=~Eu,Pf(n,!0)}function Pf(n,e){if(!(n.f&Eu)&&n.f&pt){n.f^=pt,n.f&Be||(Ne(n,Me),Fr.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&xr)!==0||(t.f&Wt)!==0;Pf(t,s?e:!1),t=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||e)&&a.in()}}function ku(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var s=t===r?null:qi(t);e.append(t),t=s}}let ko=!1,Mn=!1;function wh(n){Mn=n}let te=null,en=!1;function Kt(n){te=n}let oe=null;function yn(n){oe=n}let mn=null;function Cf(n){te!==null&&(te.f&Wo||te.f&ot)&&(mn??(mn=new Set)).add(n)}let Tt=null,Vt=0,Ut=null;function x_(n){Ut=n}let kf=1,Ar=0,Mr=Ar;function Ih(n){Mr=n}function Vf(){return++kf}function zi(n){var e=n.f;if(e&Me)return!0;if(e&$t){for(var t=n.deps,r=t.length,s=0;s<r;s++){var i=t[s];if(zi(i)&&lf(i),i.wv>n.wv)return!0}e&tn&&Qe===null&&Ne(n,Be)}return!1}function Df(n,e,t=!0){var r=n.reactions;if(r!==null&&!(mn!==null&&mn.has(n)))for(var s=0;s<r.length;s++){var i=r[s];i.f&ot?Df(i,e,!1):e===i&&(t?Ne(i,Me):i.f&Be&&Ne(i,$t),bu(i))}}function Nf(n){var e=Tt,t=Vt,r=Ut,s=te,i=mn,a=gt,l=en,c=Mr,h=n.f;Tt=null,Vt=0,Ut=null,te=h&(Wt|On)?null:n,mn=null,Ts(n.ctx),en=!1,Mr=++Ar,n.ac!==null&&(Ms(()=>{n.ac.abort(ji)}),n.ac=null);try{n.f|=Wo;var f=n.fn,m=f();n.f|=Ns;var y=Ah(n);if(nf()&&Ut!==null&&!en&&y!==null&&!(n.f&(ot|$t|Me)))for(var w=0;w<Ut.length;w++)Df(Ut[w],n);if(s!==null&&s!==n){if(Ar++,s.deps!==null)for(let P=0;P<t;P+=1)s.deps[P].rv=Ar;if(e!==null)for(const P of e)P.rv=Ar;Ut!==null&&(r===null?r=Ut:r.push(...Ut))}return n.f&er&&(n.f^=er),m}catch(P){return Ah(n),C_(P)}finally{n.f^=Wo,Tt=e,Vt=t,Ut=r,te=s,mn=i,Ts(a),en=l,Mr=c}}function Ah(n){var s;var e=n.deps,t=H==null?void 0:H.is_fork;if(Tt!==null){var r;if(t||Si(n,Vt),e!==null&&Vt>0)for(e.length=Vt+Tt.length,r=0;r<Tt.length;r++)e[Vt+r]=Tt[r];else n.deps=e=Tt;if(Pu()&&n.f&tn)for(r=Vt;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(n)}else!t&&e!==null&&Vt<e.length&&(Si(n,Vt),e.length=Vt);return e}function F_(n,e){let t=e.reactions;if(t!==null){var r=kg.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}if(t===null&&e.f&ot&&(Tt===null||!zo.call(Tt,e))){var i=e;i.f&tn&&(i.f^=tn),i.v!==Ue&&Au(i),i.ac!==null&&Ms(()=>{i.ac.abort(ji),i.ac=null,Ne(i,Me)}),y_(i),Si(i,0)}}function Si(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)F_(n,t[r])}function Is(n){var e=n.f;if(!(e&mt)){Ne(n,Be);var t=oe,r=ko;oe=n,ko=(e&(Wt|On))===0;try{e&(Zt|Jd)?M_(n):Cu(n),Rf(n);var s=Nf(n);n.teardown=typeof s=="function"?s:null,n.wv=kf;var i;Hd&&h_&&n.f&Me&&n.deps}finally{ko=r,oe=t}}}async function OA(){await Promise.resolve(),w_()}function C(n){var e=n.f,t=(e&ot)!==0;if(te!==null&&!en){var r=oe!==null&&(oe.f&mt)!==0;if(!r&&(mn===null||!mn.has(n))){var s=te.deps;if(te.f&Wo)n.rv<Ar&&(n.rv=Ar,Tt===null&&s!==null&&s[Vt]===n?Vt++:Tt===null?Tt=[n]:Tt.push(n));else{te.deps??(te.deps=[]),zo.call(te.deps,n)||te.deps.push(n);var i=n.reactions;i===null?n.reactions=[te]:zo.call(i,te)||i.push(te)}}}if(Mn&&pn.has(n))return pn.get(n);if(t){var a=n;if(Mn){var l=a.v;return(!(a.f&Be)&&a.reactions!==null||Mf(a))&&(l=Ru(a)),pn.set(a,l),l}var c=(a.f&tn)===0&&!en&&te!==null&&(ko||(te.f&tn)!==0),h=(a.f&Ns)===0;zi(a)&&(c&&(a.f|=tn),lf(a)),c&&!h&&(uf(a),Of(a))}if(Qe!=null&&Qe.has(n))return Qe.get(n);if(n.f&er)throw n.v;return n.v}function Of(n){if(n.f|=tn,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&ot&&!(e.f&tn)&&(uf(e),Of(e))}function Mf(n){if(n.v===Ue)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(pn.has(e)||e.f&ot&&Mf(e))return!0;return!1}function Ra(n){var e=en;try{return en=!0,n()}finally{en=e}}const U_=["touchstart","touchmove"];function B_(n){return U_.includes(n)}const Rr=Symbol("events"),Lf=new Set,jl=new Set;function j_(n,e,t,r={}){function s(i){if(r.capture||ql.call(e,i),!i.cancelBubble)return Ms(()=>t==null?void 0:t.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(s.__removed=!1,kn(()=>{s.__removed||e.addEventListener(n,s,r)})):e.addEventListener(n,s,r),s}function MA(n,e,t,r,s){var i={capture:r,passive:s},a=j_(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Tf(()=>{a.__removed=!0,e.removeEventListener(n,a,i)})}function LA(n,e,t){(e[Rr]??(e[Rr]={}))[n]=t}function xA(n){for(var e=0;e<n.length;e++)Lf.add(n[e]);for(var t of jl)t(n)}let pl=null,ml=!1;function ql(n){var V,A;var e=this,t=e.ownerDocument,r=n.type,s=((V=n.composedPath)==null?void 0:V.call(n))||[],i=s[0]||n.target;pl=n,ml||(ml=!0,setTimeout(()=>{ml=!1,pl=null}));var a=0,l=pl===n&&n[Rr];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){n[Rr]=e;return}var h=s.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(i=s[a]||n.target,i!==e){Kd(n,"currentTarget",{configurable:!0,get(){return i||t}});var f=te,m=oe;Kt(null),yn(null);try{for(var y,w=[];i!==null&&i!==e;){try{var P=(A=i[Rr])==null?void 0:A[r];P!=null&&(!i.disabled||n.target===i)&&P.call(i,n)}catch(O){y?w.push(O):y=O}if(n.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(y){for(let O of w)queueMicrotask(()=>{throw O});throw y}}finally{n[Rr]=e,delete n.currentTarget,Kt(f),yn(m)}}}var zd;const gl=((zd=globalThis==null?void 0:globalThis.window)==null?void 0:zd.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function q_(n){return(gl==null?void 0:gl.createHTML(n))??n}function xf(n){var e=P_("template");return e.innerHTML=q_(n.replaceAll("<!>","<!---->")),e.content}function Yo(n,e){var t=oe;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function we(n,e){var t=(e&Gg)!==0,r=(e&Qg)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=xf(i?n:"<!>"+n),t||(s=Br(s)));var a=r||_f?document.importNode(s,!0):s.cloneNode(!0);if(t){var l=Br(a),c=a.lastChild;Yo(l,c)}else Yo(a,a);return a}}function z_(n,e,t="svg"){var r=!n.startsWith("<!>"),s=`<${t}>${r?n:"<!>"+n}</${t}>`,i;return()=>{if(!i){var a=xf(s),l=Br(a);i=Br(l)}var c=i.cloneNode(!0);return Yo(c,c),c}}function $_(n,e){return z_(n,e,"svg")}function _l(){var n=document.createDocumentFragment(),e=document.createComment(""),t=tr();return n.append(e,t),Yo(e,t),n}function fe(n,e){n!==null&&n.before(e)}function H_(n){let e=0,t=Ur(0),r;return()=>{Pu()&&(C(t),Af(()=>(e===0&&(r=Ra(()=>n(()=>_i(t)))),e+=1,()=>{kn(()=>{e-=1,e===0&&(r==null||r(),r=void 0,_i(t))})})))}}var W_=xr|Os;function K_(n,e,t,r){new G_(n,e,t,r)}var Bt,yu,jt,kr,dt,Pt,ft,Ct,ln,Vr,Jn,vs,Li,xi,Cn,va,Re,Q_,Y_,zl,J_,$l,ai,Vo,Hl,Wl;class G_{constructor(e,t,r,s){G(this,Re);Et(this,"parent");Et(this,"is_pending",!1);Et(this,"transform_error");G(this,Bt);G(this,yu,null);G(this,jt);G(this,kr);G(this,dt);G(this,Pt,null);G(this,ft,null);G(this,Ct,null);G(this,ln,null);G(this,Vr,0);G(this,Jn,0);G(this,vs,!1);G(this,Li,new Set);G(this,xi,new Set);G(this,Cn,null);G(this,va,H_(()=>($(this,Cn,Ur(R(this,Vr))),()=>{$(this,Cn,null)})));var i;$(this,Bt,e),$(this,jt,t),$(this,kr,a=>{var l=oe;l.b=this,l.f|=Nl,r(a)}),this.parent=oe.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),$(this,dt,Aa(()=>{ee(this,Re,$l).call(this)},W_))}defer_effect(e){sf(e,R(this,Li),R(this,xi))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!R(this,jt).pending}update_pending_count(e,t){ee(this,Re,Hl).call(this,e,t),$(this,Vr,R(this,Vr)+e),!(!R(this,Cn)||R(this,vs))&&($(this,vs,!0),kn(()=>{$(this,vs,!1),R(this,Cn)&&ws(R(this,Cn),R(this,Vr))}))}get_effect_pending(){return R(this,va).call(this),C(R(this,Cn))}error(e){if(!R(this,jt).onerror&&!R(this,jt).failed)throw e;H!=null&&H.is_fork?(R(this,Pt)&&H.skip_effect(R(this,Pt)),R(this,ft)&&H.skip_effect(R(this,ft)),R(this,Ct)&&H.skip_effect(R(this,Ct)),H.oncommit(()=>{ee(this,Re,Wl).call(this,e)})):ee(this,Re,Wl).call(this,e)}}Bt=new WeakMap,yu=new WeakMap,jt=new WeakMap,kr=new WeakMap,dt=new WeakMap,Pt=new WeakMap,ft=new WeakMap,Ct=new WeakMap,ln=new WeakMap,Vr=new WeakMap,Jn=new WeakMap,vs=new WeakMap,Li=new WeakMap,xi=new WeakMap,Cn=new WeakMap,va=new WeakMap,Re=new WeakSet,Q_=function(){try{$(this,Pt,zt(()=>R(this,kr).call(this,R(this,Bt))))}catch(e){this.error(e)}},Y_=function(e){const t=R(this,jt).failed,{reset:r,invoke_onerror:s}=ee(this,Re,zl).call(this,e);kn(s),t&&$(this,Ct,zt(()=>{t(R(this,Bt),()=>e,()=>r)}))},zl=function(e){var t=!1,r=!1;const s=()=>{if(t){Xg();return}t=!0,r&&c_(),R(this,Ct)!==null&&Or(R(this,Ct),()=>{$(this,Ct,null)}),ee(this,Re,Vo).call(this,()=>{ee(this,Re,$l).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=R(this,jt)).onerror)==null||l.call(a,e,s),r=!1}catch(c){cn(c,R(this,dt)&&R(this,dt).parent)}}}},J_=function(){const e=R(this,jt).pending;e&&(this.is_pending=!0,$(this,ft,zt(()=>e(R(this,Bt)))),kn(()=>{var t=$(this,ln,document.createDocumentFragment()),r=tr(),s=!1;if(t.append(r),$(this,Pt,ee(this,Re,Vo).call(this,()=>{try{return zt(()=>R(this,kr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){cn(a,R(this,dt).parent)}return null}})),R(this,Pt)===null){$(this,ln,null),s&&ee(this,Re,ai).call(this,H);return}R(this,Jn)===0&&(R(this,Bt).before(t),$(this,ln,null),Or(R(this,ft),()=>{$(this,ft,null)}),ee(this,Re,ai).call(this,H))}))},$l=function(){try{if(this.is_pending=this.has_pending_snippet(),$(this,Jn,0),$(this,Vr,0),$(this,Pt,zt(()=>{R(this,kr).call(this,R(this,Bt))})),R(this,Jn)>0){var e=$(this,ln,document.createDocumentFragment());ku(R(this,Pt),e);const t=R(this,jt).pending;$(this,ft,zt(()=>t(R(this,Bt))))}else ee(this,Re,ai).call(this,H)}catch(t){this.error(t)}},ai=function(e){this.is_pending=!1,e.transfer_effects(R(this,Li),R(this,xi))},Vo=function(e){var t=oe,r=te,s=gt;yn(R(this,dt)),Kt(R(this,dt)),Ts(R(this,dt).ctx);try{return Fr.ensure(),e()}finally{yn(t),Kt(r),Ts(s)}},Hl=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&ee(r=this.parent,Re,Hl).call(r,e,t);return}$(this,Jn,R(this,Jn)+e),R(this,Jn)===0&&(ee(this,Re,ai).call(this,t),R(this,ft)&&Or(R(this,ft),()=>{$(this,ft,null)}),R(this,ln)&&(R(this,Bt).before(R(this,ln)),$(this,ln,null)))},Wl=function(e){R(this,Pt)&&(It(R(this,Pt)),$(this,Pt,null)),R(this,ft)&&(It(R(this,ft)),$(this,ft,null)),R(this,Ct)&&(It(R(this,Ct)),$(this,Ct,null));let t=R(this,jt).failed;const r=s=>{const{reset:i,invoke_onerror:a}=ee(this,Re,zl).call(this,s);a(),t&&$(this,Ct,ee(this,Re,Vo).call(this,()=>{try{return zt(()=>{var l=oe;l.b=this,l.f|=Nl,t(R(this,Bt),()=>s,()=>i)})}catch(l){return cn(l,R(this,dt).parent),null}}))};kn(()=>{var s;try{s=this.transform_error(e)}catch(i){cn(i,R(this,dt)&&R(this,dt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>cn(i,R(this,dt)&&R(this,dt).parent)):r(s)})};function de(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[ri]??(n[ri]=n.nodeValue))&&(n[ri]=t,n.nodeValue=`${t}`)}function FA(n,e){return X_(n,e)}const Eo=new Map;function X_(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:a=!0,transformError:l}){S_();var c=void 0,h=N_(()=>{var f=t??e.appendChild(tr());K_(f,{pending:()=>{}},w=>{Tu({});var P=gt;i&&(P.c=i),s&&(r.$$events=s),c=n(w,r)||Iu(),wu()},l);var m=new Set,y=w=>{for(var P=0;P<w.length;P++){var V=w[P];if(!m.has(V)){m.add(V);var A=B_(V);for(const L of[e,document]){var O=Eo.get(L);O===void 0&&(O=new Map,Eo.set(L,O));var B=O.get(V);B===void 0?(L.addEventListener(V,ql,{passive:A}),O.set(V,1)):O.set(V,B+1)}}}};return y(wa(Lf)),jl.add(y),()=>{var A;for(var w of m)for(const O of[e,document]){var P=Eo.get(O),V=P.get(w);--V==0?(O.removeEventListener(w,ql),P.delete(w),P.size===0&&Eo.delete(O)):P.set(w,V)}jl.delete(y),f!==t&&((A=f.parentNode)==null||A.removeChild(f))}});return Z_.set(c,h),c}let Z_=new WeakMap;var Xt,un,kt,Dr,Fi,Ui,ya;class Ff{constructor(e,t=!0){Et(this,"anchor");G(this,Xt,new Map);G(this,un,new Map);G(this,kt,new Map);G(this,Dr,new Set);G(this,Fi,!0);G(this,Ui,e=>{if(R(this,Xt).has(e)){var t=R(this,Xt).get(e),r=R(this,un).get(t);if(r)Qo(r),R(this,Dr).delete(t);else{var s=R(this,kt).get(t);s&&(Qo(s.effect),R(this,un).set(t,s.effect),R(this,kt).delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of R(this,Xt)){if(R(this,Xt).delete(i),i===e)break;const l=R(this,kt).get(a);l&&(It(l.effect),R(this,kt).delete(a))}for(const[i,a]of R(this,un)){if(i===t||R(this,Dr).has(i))continue;const l=()=>{if(Array.from(R(this,Xt).values()).includes(i)){var h=document.createDocumentFragment();ku(a,h),h.append(tr()),R(this,kt).set(i,{effect:a,fragment:h})}else It(a);R(this,Dr).delete(i),R(this,un).delete(i)};R(this,Fi)||!r?(R(this,Dr).add(i),Or(a,l,!1)):l()}}});G(this,ya,e=>{R(this,Xt).delete(e);const t=Array.from(R(this,Xt).values());for(const[r,s]of R(this,kt))t.includes(r)||(It(s.effect),R(this,kt).delete(r))});this.anchor=e,$(this,Fi,t)}ensure(e,t){var r=H,s=Ef();if(t&&!R(this,un).has(e)&&!R(this,kt).has(e))if(s){var i=document.createDocumentFragment(),a=tr();i.append(a),R(this,kt).set(e,{effect:zt(()=>t(a)),fragment:i})}else R(this,un).set(e,zt(()=>t(this.anchor)));if(R(this,Xt).set(r,e),s){for(const[l,c]of R(this,un))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of R(this,kt))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(R(this,Ui)),r.ondiscard(R(this,ya))}else R(this,Ui).call(this,r)}}Xt=new WeakMap,un=new WeakMap,kt=new WeakMap,Dr=new WeakMap,Fi=new WeakMap,Ui=new WeakMap,ya=new WeakMap;function Ft(n,e,t=!1){var r=new Ff(n),s=t?xr:0;function i(a,l){r.ensure(a,l)}Aa(()=>{var a=!1;e((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}function Do(n,e){return e}function ev(n,e,t){for(var r=[],s=e.length,i,a=e.length,l=0;l<s;l++){let m=e[l];Or(m,()=>{if(i){if(i.pending.delete(m),i.done.add(m),i.pending.size===0){var y=n.outrogroups;Kl(n,wa(i.done)),y.delete(i),y.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,f=h.parentNode;b_(f),f.append(h),n.items.clear()}Kl(n,e,!c)}else i={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(i)}function Kl(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var s=0;s<e.length;s++){var i=e[s];if(r!=null&&r.has(i)){i.f|=dn;const a=document.createDocumentFragment();ku(i,a)}else It(e[s],t)}}var Rh;function li(n,e,t,r,s,i=null){var a=n,l=new Map,c=(e&Zd)!==0;if(c){var h=n;a=h.appendChild(tr())}var f=null,m=af(()=>{var L=t();return Wd(L)?L:L==null?[]:wa(L)}),y,w=new Map,P=!0;function V(L){B.effect.f&mt||(B.pending.delete(L),B.fallback=f,tv(B,y,a,e,r),f!==null&&(y.length===0?f.f&dn?(f.f^=dn,ui(f,null,a)):Qo(f):Or(f,()=>{f=null})))}function A(L){B.pending.delete(L)}var O=Aa(()=>{y=C(m);for(var L=y.length,q=new Set,Z=H,re=Ef(),E=0;E<L;E+=1){var g=y[E],_=r(g,E),T=P?null:l.get(_);T?(T.v&&ws(T.v,g),T.i&&ws(T.i,E),re&&Z.unskip_effect(T.e)):(T=nv(l,P?a:Rh??(Rh=tr()),g,_,E,s,e,t),P||(T.e.f|=dn),l.set(_,T)),q.add(_)}if(L===0&&i&&!f&&(P?f=zt(()=>i(a)):(f=zt(()=>i(Rh??(Rh=tr()))),f.f|=dn)),L>q.size&&t_(),!P)if(w.set(Z,q),re){for(const[I,b]of l)q.has(I)||Z.skip_effect(b.e);Z.oncommit(V),Z.ondiscard(A)}else V(Z);C(m)}),B={effect:O,items:l,pending:w,outrogroups:null,fallback:f};P=!1}function ei(n){for(;n!==null&&!(n.f&Wt);)n=n.next;return n}function tv(n,e,t,r,s){var T,I,b,v,vt,rn,Gr,sn,U;var i=(r&qg)!==0,a=e.length,l=n.items,c=ei(n.effect.first),h,f=null,m,y=[],w=[],P,V,A,O;if(i)for(O=0;O<a;O+=1)P=e[O],V=s(P,O),A=l.get(V).e,A.f&dn||((I=(T=A.nodes)==null?void 0:T.a)==null||I.measure(),(m??(m=new Set)).add(A));for(O=0;O<a;O+=1){if(P=e[O],V=s(P,O),A=l.get(V).e,n.outrogroups!==null)for(const F of n.outrogroups)F.pending.delete(A),F.done.delete(A);if(A.f&pt&&(Qo(A),i&&((v=(b=A.nodes)==null?void 0:b.a)==null||v.unfix(),(m??(m=new Set)).delete(A))),A.f&dn)if(A.f^=dn,A===c)ui(A,null,t);else{var B=f?f.next:c;A===n.effect.last&&(n.effect.last=A.prev),A.prev&&(A.prev.next=A.next),A.next&&(A.next.prev=A.prev),Hn(n,f,A),Hn(n,A,B),ui(A,B,t),f=A,y=[],w=[],c=ei(f.next);continue}if(A!==c){if(h!==void 0&&h.has(A)){if(y.length<w.length){var L=w[0],q;f=L.prev;var Z=y[0],re=y[y.length-1];for(q=0;q<y.length;q+=1)ui(y[q],L,t);for(q=0;q<w.length;q+=1)h.delete(w[q]);Hn(n,Z.prev,re.next),Hn(n,f,Z),Hn(n,re,L),c=L,f=re,O-=1,y=[],w=[]}else h.delete(A),ui(A,c,t),Hn(n,A.prev,A.next),Hn(n,A,f===null?n.effect.first:f.next),Hn(n,f,A),f=A;continue}for(y=[],w=[];c!==null&&c!==A;)(h??(h=new Set)).add(c),w.push(c),c=ei(c.next);if(c===null)continue}A.f&dn||y.push(A),f=A,c=ei(A.next)}if(n.outrogroups!==null){for(const F of n.outrogroups)F.pending.size===0&&(Kl(n,wa(F.done)),(vt=n.outrogroups)==null||vt.delete(F));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var E=[];if(h!==void 0)for(A of h)A.f&pt||E.push(A);for(;c!==null;)!(c.f&pt)&&c!==n.fallback&&E.push(c),c=ei(c.next);var g=E.length;if(g>0){var _=r&Zd&&a===0?t:null;if(i){for(O=0;O<g;O+=1)(Gr=(rn=E[O].nodes)==null?void 0:rn.a)==null||Gr.measure();for(O=0;O<g;O+=1)(U=(sn=E[O].nodes)==null?void 0:sn.a)==null||U.fix()}ev(n,E,_)}}i&&kn(()=>{var F,J;if(m!==void 0)for(A of m)(J=(F=A.nodes)==null?void 0:F.a)==null||J.apply()})}function nv(n,e,t,r,s,i,a,l){var c=a&Bg?a&zg?Ur(t):A_(t,!1,!1):null,h=a&jg?Ur(s):null;return{v:c,i:h,e:zt(()=>(i(e,c??t,h??s,l),()=>{n.delete(r)}))}}function ui(n,e,t){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&!(e.f&dn)?e.nodes.start:t;r!==null;){var a=qi(r);if(i.before(r),r===s)return;r=a}}function Hn(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function rv(n,e,...t){var r=new Ff(n);Aa(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...t)))},xr)}const Sh=[...` 	
\r\f \v\uFEFF`];function sv(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var s of Object.keys(t))if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||Sh.includes(r[a-1]))&&(l===r.length||Sh.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function iv(n,e){return n==null?null:String(n)}function es(n,e,t,r,s,i){var a=n[Ol];if(a!==t||a===void 0){var l=sv(t,r,i);l==null?n.removeAttribute("class"):n.className=l,n[Ol]=t}else if(i&&s!==i)for(var c in i){var h=!!i[c];(s==null||h!==!!s[c])&&n.classList.toggle(c,h)}return i}function Jo(n,e,t,r){var s=n[Ml];if(s!==e){var i=iv(e);i==null?n.removeAttribute("style"):n.style.cssText=i,n[Ml]=e}return r}const ov=Symbol("is custom element"),av=Symbol("is html"),lv=Ug?"progress":"PROGRESS";function UA(n,e){var t=Vu(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==lv)||(n.value=e??"")}function BA(n,e){var t=Vu(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function ns(n,e,t,r){var s=Vu(n);s[e]!==(s[e]=t)&&(e==="loading"&&(n[Fg]=t),t==null?n.removeAttribute(e):typeof t!="string"&&uv(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Vu(n){return n[bo]??(n[bo]={[ov]:n.nodeName.includes("-"),[av]:n.namespaceURI===Yg})}var bh=new Map;function uv(n){var e=n.getAttribute("is")||n.nodeName,t=bh.get(e);if(t)return t;bh.set(e,t=new Set);for(var r,s=n,i=Element.prototype;i!==s;){r=Vg(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);s=Gd(s)}return t}var Xn,ys,Bi,Ea,Uf;const Ta=class Ta{constructor(e){G(this,Ea);G(this,Xn,new WeakMap);G(this,ys);G(this,Bi);$(this,Bi,e)}observe(e,t){var r=R(this,Xn).get(e)||new Set;return r.add(t),R(this,Xn).set(e,r),ee(this,Ea,Uf).call(this).observe(e,R(this,Bi)),()=>{var s=R(this,Xn).get(e);s.delete(t),s.size===0&&(R(this,Xn).delete(e),R(this,ys).unobserve(e))}}};Xn=new WeakMap,ys=new WeakMap,Bi=new WeakMap,Ea=new WeakSet,Uf=function(){return R(this,ys)??$(this,ys,new ResizeObserver(e=>{for(var t of e){Ta.entries.set(t.target,t);for(var r of R(this,Xn).get(t.target)||[])r(t)}}))},Et(Ta,"entries",new WeakMap);let Gl=Ta;var cv=new Gl({box:"border-box"});function Ph(n,e,t){var r=cv.observe(n,()=>t(n[e]));If(()=>(Ra(()=>t(n[e])),r))}function vl(n,e){return n===e||(n==null?void 0:n[Nr])===e}function hv(n=Iu(),e,t,r){var s=gt.r,i=oe;return If(()=>{var a,l;return Af(()=>{a=l,l=[],Ra(()=>{vl(t(...l),n)||(e(n,...l),a&&vl(t(...a),n)&&e(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&$o;)c=c.parent;const h=()=>{l&&vl(t(...l),n)&&e(null,...l)},f=c.teardown;c.teardown=()=>{h(),f==null||f()}}}),n}let To=!1;function dv(n){var e=To;try{return To=!1,[n(),To]}finally{To=e}}function ti(n,e,t,r){var q;var s=!0,i=(t&Wg)!==0,a=(t&Kg)!==0,l=r,c=!0,h=void 0,f=()=>a&&s?(h??(h=Ri(r)),C(h)):(c&&(c=!1,l=a?Ra(r):r),l);let m;if(i){var y=Nr in n||xg in n;m=((q=os(n,e))==null?void 0:q.set)??(y&&e in n?Z=>n[e]=Z:void 0)}var w,P=!1;i?[w,P]=dv(()=>n[e]):w=n[e],w===void 0&&r!==void 0&&(w=f(),m&&(o_(),m(w)));var V;if(V=()=>{var Z=n[e];return Z===void 0?f():(c=!0,Z)},!(t&Hg))return V;if(m){var A=n.$$legacy;return function(Z,re){return arguments.length>0?((!re||A||P)&&m(re?V():Z),Z):V()}}var O=!1,B=(t&$g?Ri:af)(()=>(O=!1,V()));i&&C(B);var L=oe;return function(Z,re){if(arguments.length>0){const E=re?C(B):i?Ir(Z):Z;return Dt(B,E),O=!0,l!==void 0&&(l=E),Z}return Mn&&O||L.f&mt?B.v:C(B)}}const fv="5";var $d;typeof window<"u"&&(($d=window.__svelte??(window.__svelte={})).v??($d.v=new Set)).add(fv);var Ch={};/**
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
 */const Bf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},jf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(y=64)),r.push(t[f],t[m],t[y],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new mv;const y=i<<2|l>>4;if(r.push(y),h!==64){const w=l<<4&240|h>>2;if(r.push(w),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gv=function(n){const e=Bf(n);return jf.encodeByteArray(e,!0)},Xo=function(n){return gv(n).replace(/\./g,"")},qf=function(n){try{return jf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _v(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vv=()=>_v().__FIREBASE_DEFAULTS__,yv=()=>{if(typeof process>"u"||typeof Ch>"u")return;const n=Ch.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ev=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qf(n[1]);return e&&JSON.parse(e)},Sa=()=>{try{return vv()||yv()||Ev()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zf=n=>{var e,t;return(t=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Tv=n=>{const e=zf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},$f=()=>{var n;return(n=Sa())===null||n===void 0?void 0:n.config},Hf=n=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class wv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Iv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xo(JSON.stringify(t)),Xo(JSON.stringify(a)),""].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Av(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function Rv(){var n;const e=(n=Sa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Pv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cv(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kv(){return!Rv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vv(){try{return typeof indexedDB=="object"}catch{return!1}}function Dv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Nv="FirebaseError";class jn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Nv,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ov(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new jn(s,l,r)}}function Ov(n,e){return n.replace(Mv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mv=/\{\$([^}]+)}/g;function Lv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(kh(i)&&kh(a)){if(!Zo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function kh(n){return n!==null&&typeof n=="object"}/**
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
 */function Hi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xv(n,e){const t=new Fv(n,e);return t.subscribe.bind(t)}class Fv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Uv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yl(){}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}class jr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Er="[DEFAULT]";/**
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
 */class Bv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new wv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qv(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jv(n){return n===Er?void 0:n}function qv(n){return n.instantiationMode==="EAGER"}/**
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
 */class zv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const $v={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Hv=se.INFO,Wv={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Kv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Wv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Du{constructor(e){this.name=e,this._logLevel=Hv,this._logHandler=Kv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$v[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Gv=(n,e)=>e.some(t=>n instanceof t);let Vh,Dh;function Qv(){return Vh||(Vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,Ql=new WeakMap,Kf=new WeakMap,El=new WeakMap,Nu=new WeakMap;function Jv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(nr(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wf.set(t,n)}).catch(()=>{}),Nu.set(e,n),e}function Xv(n){if(Ql.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ql.set(n,e)}let Yl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ql.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zv(n){Yl=n(Yl)}function ey(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Tl(this),e,...t);return Kf.set(r,e.sort?e.sort():[e]),nr(r)}:Yv().includes(n)?function(...e){return n.apply(Tl(this),e),nr(Wf.get(this))}:function(...e){return nr(n.apply(Tl(this),e))}}function ty(n){return typeof n=="function"?ey(n):(n instanceof IDBTransaction&&Xv(n),Gv(n,Qv())?new Proxy(n,Yl):n)}function nr(n){if(n instanceof IDBRequest)return Jv(n);if(El.has(n))return El.get(n);const e=ty(n);return e!==n&&(El.set(n,e),Nu.set(e,n)),e}const Tl=n=>Nu.get(n);function ny(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=nr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(nr(a.result),c.oldVersion,c.newVersion,nr(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const ry=["get","getKey","getAll","getAllKeys","count"],sy=["put","add","delete","clear"],wl=new Map;function Nh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=sy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ry.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return wl.set(e,i),i}Zv(n=>({...n,get:(e,t,r)=>Nh(e,t)||n.get(e,t,r),has:(e,t)=>!!Nh(e,t)||n.has(e,t)}));/**
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
 */class iy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function oy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jl="@firebase/app",Oh="0.10.13";/**
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
 */const Ln=new Du("@firebase/app"),ay="@firebase/app-compat",ly="@firebase/analytics-compat",uy="@firebase/analytics",cy="@firebase/app-check-compat",hy="@firebase/app-check",dy="@firebase/auth",fy="@firebase/auth-compat",py="@firebase/database",my="@firebase/data-connect",gy="@firebase/database-compat",_y="@firebase/functions",vy="@firebase/functions-compat",yy="@firebase/installations",Ey="@firebase/installations-compat",Ty="@firebase/messaging",wy="@firebase/messaging-compat",Iy="@firebase/performance",Ay="@firebase/performance-compat",Ry="@firebase/remote-config",Sy="@firebase/remote-config-compat",by="@firebase/storage",Py="@firebase/storage-compat",Cy="@firebase/firestore",ky="@firebase/vertexai-preview",Vy="@firebase/firestore-compat",Dy="firebase",Ny="10.14.1";/**
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
 */const Xl="[DEFAULT]",Oy={[Jl]:"fire-core",[ay]:"fire-core-compat",[uy]:"fire-analytics",[ly]:"fire-analytics-compat",[hy]:"fire-app-check",[cy]:"fire-app-check-compat",[dy]:"fire-auth",[fy]:"fire-auth-compat",[py]:"fire-rtdb",[my]:"fire-data-connect",[gy]:"fire-rtdb-compat",[_y]:"fire-fn",[vy]:"fire-fn-compat",[yy]:"fire-iid",[Ey]:"fire-iid-compat",[Ty]:"fire-fcm",[wy]:"fire-fcm-compat",[Iy]:"fire-perf",[Ay]:"fire-perf-compat",[Ry]:"fire-rc",[Sy]:"fire-rc-compat",[by]:"fire-gcs",[Py]:"fire-gcs-compat",[Cy]:"fire-fst",[Vy]:"fire-fst-compat",[ky]:"fire-vertex","fire-js":"fire-js",[Dy]:"fire-js-all"};/**
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
 */const ea=new Map,My=new Map,Zl=new Map;function Mh(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function As(n){const e=n.name;if(Zl.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Zl.set(e,n);for(const t of ea.values())Mh(t,n);for(const t of My.values())Mh(t,n);return!0}function Ou(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n.settings!==void 0}/**
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
 */const Ly={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new $i("app","Firebase",Ly);/**
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
 */class xy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=Ny;function Gf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(t||(t=$f()),!t)throw rr.create("no-options");const i=ea.get(s);if(i){if(Zo(t,i.options)&&Zo(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const a=new zv(s);for(const c of Zl.values())a.addComponent(c);const l=new xy(t,r,a);return ea.set(s,l),l}function Qf(n=Xl){const e=ea.get(n);if(!e&&n===Xl&&$f())return Gf();if(!e)throw rr.create("no-app",{appName:n});return e}function sr(n,e,t){var r;let s=(r=Oy[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}As(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fy="firebase-heartbeat-database",Uy=1,bi="firebase-heartbeat-store";let Il=null;function Yf(){return Il||(Il=ny(Fy,Uy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bi)}catch(t){console.warn(t)}}}}).catch(n=>{throw rr.create("idb-open",{originalErrorMessage:n.message})})),Il}async function By(n){try{const t=(await Yf()).transaction(bi),r=await t.objectStore(bi).get(Jf(n));return await t.done,r}catch(e){if(e instanceof jn)Ln.warn(e.message);else{const t=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function Lh(n,e){try{const r=(await Yf()).transaction(bi,"readwrite");await r.objectStore(bi).put(e,Jf(n)),await r.done}catch(t){if(t instanceof jn)Ln.warn(t.message);else{const r=rr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function Jf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jy=1024,qy=30*24*60*60*1e3;class zy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=qy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xh(),{heartbeatsToSend:r,unsentEntries:s}=$y(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ln.warn(t),""}}}function xh(){return new Date().toISOString().substring(0,10)}function $y(n,e=jy){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Fh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Fh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Hy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vv()?Dv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await By(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fh(n){return Xo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Wy(n){As(new jr("platform-logger",e=>new iy(e),"PRIVATE")),As(new jr("heartbeat",e=>new zy(e),"PRIVATE")),sr(Jl,Oh,n),sr(Jl,Oh,"esm2017"),sr("fire-js","")}Wy("");function Mu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ky=Xf,Zf=new $i("auth","Firebase",Xf());/**
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
 */const ta=new Du("@firebase/auth");function Gy(n,...e){ta.logLevel<=se.WARN&&ta.warn(`Auth (${Ls}): ${n}`,...e)}function No(n,...e){ta.logLevel<=se.ERROR&&ta.error(`Auth (${Ls}): ${n}`,...e)}/**
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
 */function En(n,...e){throw xu(n,...e)}function nn(n,...e){return xu(n,...e)}function Lu(n,e,t){const r=Object.assign(Object.assign({},Ky()),{[e]:t});return new $i("auth","Firebase",r).create(e,{appName:n.name})}function ir(n){return Lu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ep(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(n,"argument-error"),Lu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zf.create(n,...e)}function W(n,e,...t){if(!n)throw xu(e,...t)}function Vn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw No(e),new Error(e)}function xn(n,e){n||Vn(e)}/**
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
 */function eu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qy(){return Uh()==="http:"||Uh()==="https:"}function Uh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Yy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qy()||bv()||"connection"in navigator)?navigator.onLine:!0}function Jy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=Av()||Pv()}get(){return Yy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fu(n,e){xn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zy=new Wi(3e4,6e4);function Uu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xs(n,e,t,r,s={}){return np(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Hi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Sv()||(h.referrerPolicy="no-referrer"),tp.fetch()(rp(n,n.config.apiHost,t,l),h)})}async function np(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xy),e);try{const s=new tE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw wo(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw wo(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw wo(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lu(n,f,h);En(n,f)}}catch(s){if(s instanceof jn)throw s;En(n,"network-request-failed",{message:String(s)})}}async function eE(n,e,t,r,s={}){const i=await xs(n,e,t,r,s);return"mfaPendingCredential"in i&&En(n,"multi-factor-auth-required",{_serverResponse:i}),i}function rp(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Fu(n.config,s):`${n.config.apiScheme}://${s}`}class tE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),Zy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nn(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function nE(n,e){return xs(n,"POST","/v1/accounts:delete",e)}async function sp(n,e){return xs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rE(n,e=!1){const t=ze(n),r=await t.getIdToken(e),s=Bu(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vi(Al(s.auth_time)),issuedAtTime:vi(Al(s.iat)),expirationTime:vi(Al(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(n){return Number(n)*1e3}function Bu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=qf(t);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bh(n){const e=Bu(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&sE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class iE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Pi(n,sp(t,{idToken:r}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ip(i.providerUserInfo):[],l=aE(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function oE(n){const e=ze(n);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ip(n){return n.map(e=>{var{providerId:t}=e,r=Mu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lE(n,e){const t=await np(n,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=rp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",tp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uE(n,e){return xs(n,"POST","/v2/accounts:revokeToken",Uu(n,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Bh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await lE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new ls;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function Wn(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rE(this,e)}reload(){return oE(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Pi(this,nE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(l=t.tenantId)!==null&&l!==void 0?l:void 0,A=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:q,isAnonymous:Z,providerData:re,stsTokenManager:E}=t;W(L&&E,e,"internal-error");const g=ls.fromJSON(this.name,E);W(typeof L=="string",e,"internal-error"),Wn(m,e.name),Wn(y,e.name),W(typeof q=="boolean",e,"internal-error"),W(typeof Z=="boolean",e,"internal-error"),Wn(w,e.name),Wn(P,e.name),Wn(V,e.name),Wn(A,e.name),Wn(O,e.name),Wn(B,e.name);const _=new Dn({uid:L,auth:e,email:y,emailVerified:q,displayName:m,isAnonymous:Z,photoURL:P,phoneNumber:w,tenantId:V,stsTokenManager:g,createdAt:O,lastLoginAt:B});return re&&Array.isArray(re)&&(_.providerData=re.map(T=>Object.assign({},T))),A&&(_._redirectEventId=A),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new ls;s.updateFromServerResponse(t);const i=new Dn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ip(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ls;l.updateFromIdToken(r);const c=new Dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const jh=new Map;function Nn(n){xn(n instanceof Function,"Expected a class definition");let e=jh.get(n);return e?(xn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jh.set(n,e),e)}/**
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
 */class op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}op.type="NONE";const qh=op;/**
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
 */function Oo(n,e,t){return`firebase:${n}:${e}:${t}`}class us{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new us(Nn(qh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Nn(qh);const a=Oo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const m=Dn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new us(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new us(i,e,r))}}/**
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
 */function zh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dp(e))return"Blackberry";if(fp(e))return"Webos";if(lp(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(hp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ap(n=at()){return/firefox\//i.test(n)}function lp(n=at()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(n=at()){return/crios\//i.test(n)}function cp(n=at()){return/iemobile/i.test(n)}function hp(n=at()){return/android/i.test(n)}function dp(n=at()){return/blackberry/i.test(n)}function fp(n=at()){return/webos/i.test(n)}function ju(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cE(n=at()){var e;return ju(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hE(){return Cv()&&document.documentMode===10}function pp(n=at()){return ju(n)||hp(n)||fp(n)||dp(n)||/windows phone/i.test(n)||cp(n)}/**
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
 */function mp(n,e=[]){let t;switch(n){case"Browser":t=zh(at());break;case"Worker":t=`${zh(at())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ls}/${r}`}/**
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
 */class dE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function fE(n,e={}){return xs(n,"GET","/v2/passwordPolicy",Uu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const pE=6;class mE{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:pE,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $h(this),this.idTokenSubscription=new $h(this),this.beforeStateQueue=new dE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sp(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(ir(this));const t=e?ze(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fE(this),t=new mE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await uE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nn(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Gy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ki(n){return ze(n)}class $h{constructor(e){this.auth=e,this.observer=null,this.addObserver=xv(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _E(n){qu=n}function vE(n){return qu.loadJS(n)}function yE(){return qu.gapiScript}function EE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function TE(n,e){const t=Ou(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Zo(i,e??{}))return s;En(s,"already-initialized")}return t.initialize({options:e})}function wE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IE(n,e,t){const r=Ki(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gp(e),{host:a,port:l}=AE(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),RE()}function gp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function AE(n){const e=gp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Hh(a)}}}function Hh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function RE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _p{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,t){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
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
 */async function cs(n,e){return eE(n,"POST","/v1/accounts:signInWithIdp",Uu(n,e))}/**
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
 */const SE="http://localhost";class qr extends _p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Mu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new qr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cs(e,t)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hi(t)}return e}}/**
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
 */class ba{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends ba{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Gi{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class hn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hn.credential(t,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class Gn extends Gi{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Gi{constructor(){super("twitter.com")}static credential(e,t){return qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qn.credential(t,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),a=Wh(r);return new Rs({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Wh(r);return new Rs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Wh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ra extends jn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ra(e,t,r,s)}}function vp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(n,i,e,r):i})}async function bE(n,e,t=!1){const r=await Pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rs._forOperation(n,"link",r)}/**
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
 */async function PE(n,e,t=!1){const{auth:r}=n;if(fn(r.app))return Promise.reject(ir(r));const s="reauthenticate";try{const i=await Pi(n,vp(r,s,e,n),t);W(i.idToken,r,"internal-error");const a=Bu(i.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),Rs._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
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
 */async function CE(n,e,t=!1){if(fn(n.app))return Promise.reject(ir(n));const r="signIn",s=await vp(n,r,e),i=await Rs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function kE(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function VE(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function jA(n,e,t,r){return ze(n).onAuthStateChanged(e,t,r)}function DE(n){return ze(n).signOut()}const sa="__sak";/**
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
 */class yp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NE=1e3,OE=10;class Ep extends yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);hE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},NE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ep.type="LOCAL";const ME=Ep;/**
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
 */class Tp extends yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tp.type="SESSION";const wp=Tp;/**
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
 */function LE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await LE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function zu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=zu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function gn(){return window}function FE(n){gn().location.href=n}/**
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
 */function Ip(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function UE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jE(){return Ip()?self:null}/**
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
 */const Ap="firebaseLocalStorageDb",qE=1,ia="firebaseLocalStorage",Rp="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ca(n,e){return n.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function zE(){const n=indexedDB.deleteDatabase(Ap);return new Qi(n).toPromise()}function nu(){const n=indexedDB.open(Ap,qE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ia,{keyPath:Rp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await zE(),e(await nu()))})})}async function Kh(n,e,t){const r=Ca(n,!0).put({[Rp]:e,value:t});return new Qi(r).toPromise()}async function $E(n,e){const t=Ca(n,!1).get(e),r=await new Qi(t).toPromise();return r===void 0?null:r.value}function Gh(n,e){const t=Ca(n,!0).delete(e);return new Qi(t).toPromise()}const HE=800,WE=3;class Sp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>WE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(jE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await UE(),!this.activeServiceWorker)return;this.sender=new xE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await Kh(e,sa,"1"),await Gh(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$E(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sp.type="LOCAL";const KE=Sp;new Wi(3e4,6e4);/**
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
 */function $u(n,e){return e?Nn(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hu extends _p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GE(n){return CE(n.auth,new Hu(n),n.bypassAuthState)}function QE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),PE(t,new Hu(n),n.bypassAuthState)}async function YE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),bE(t,new Hu(n),n.bypassAuthState)}/**
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
 */class bp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GE;case"linkViaPopup":case"linkViaRedirect":return YE;case"reauthViaPopup":case"reauthViaRedirect":return QE;default:En(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JE=new Wi(2e3,1e4);async function XE(n,e,t){if(fn(n.app))return Promise.reject(nn(n,"operation-not-supported-in-this-environment"));const r=Ki(n);ep(n,e,ba);const s=$u(r,t);return new Sr(r,"signInViaPopup",e,s).executeNotNull()}class Sr extends bp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=zu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JE.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const ZE="pendingRedirect",Mo=new Map;class eT extends bp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await tT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tT(n,e){const t=Cp(e),r=Pp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function nT(n,e){return Pp(n)._set(Cp(e),"true")}function rT(n,e){Mo.set(n._key(),e)}function Pp(n){return Nn(n._redirectPersistence)}function Cp(n){return Oo(ZE,n.config.apiKey,n.name)}/**
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
 */function sT(n,e,t){return iT(n,e,t)}async function iT(n,e,t){if(fn(n.app))return Promise.reject(ir(n));const r=Ki(n);ep(n,e,ba),await r._initializationPromise;const s=$u(r,t);return await nT(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function oT(n,e,t=!1){if(fn(n.app))return Promise.reject(ir(n));const r=Ki(n),s=$u(r,e),a=await new eT(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const aT=10*60*1e3;class lT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qh(e))}saveEventToCache(e){this.cachedEventUids.add(Qh(e)),this.lastProcessedEventTime=Date.now()}}function Qh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kp(n);default:return!1}}/**
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
 */async function cT(n,e={}){return xs(n,"GET","/v1/projects",e)}/**
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
 */const hT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dT=/^https?/;async function fT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cT(n);for(const t of e)try{if(pT(t))return}catch{}En(n,"unauthorized-domain")}function pT(n){const e=eu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!dT.test(t))return!1;if(hT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mT=new Wi(3e4,6e4);function Yh(){const n=gn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gT(n){return new Promise((e,t)=>{var r,s,i;function a(){Yh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yh(),t(nn(n,"network-request-failed"))},timeout:mT.get()})}if(!((s=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gn().gapi)===null||i===void 0)&&i.load)a();else{const l=EE("iframefcb");return gn()[l]=()=>{gapi.load?a():t(nn(n,"network-request-failed"))},vE(`${yE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function _T(n){return Lo=Lo||gT(n),Lo}/**
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
 */const vT=new Wi(5e3,15e3),yT="__/auth/iframe",ET="emulator/auth/iframe",TT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IT(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fu(e,ET):`https://${n.config.authDomain}/${yT}`,r={apiKey:e.apiKey,appName:n.name,v:Ls},s=wT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Hi(r).slice(1)}`}async function AT(n){const e=await _T(n),t=gn().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:IT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nn(n,"network-request-failed"),l=gn().setTimeout(()=>{i(a)},vT.get());function c(){gn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const RT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ST=500,bT=600,PT="_blank",CT="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kT(n,e,t,r=ST,s=bT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},RT),{width:r.toString(),height:s.toString(),top:i,left:a}),h=at().toLowerCase();t&&(l=up(h)?PT:t),ap(h)&&(e=e||CT,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[w,P])=>`${y}${w}=${P},`,"");if(cE(h)&&l!=="_self")return VT(e||"",l),new Jh(null);const m=window.open(e||"",l,f);W(m,n,"popup-blocked");try{m.focus()}catch{}return new Jh(m)}function VT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const DT="__/auth/handler",NT="emulator/auth/handler",OT=encodeURIComponent("fac");async function Xh(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ls,eventId:s};if(e instanceof ba){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Lv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Gi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${OT}=${encodeURIComponent(c)}`:"";return`${MT(n)}?${Hi(l).slice(1)}${h}`}function MT({config:n}){return n.emulator?Fu(n,NT):`https://${n.authDomain}/${DT}`}/**
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
 */const Rl="webStorageSupport";class LT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wp,this._completeRedirectFn=oT,this._overrideRedirectResult=rT}async _openPopup(e,t,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Xh(e,t,r,eu(),s);return kT(e,a,zu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Xh(e,t,r,eu(),s);return FE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AT(e),r=new lT(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rl,{type:Rl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rl];a!==void 0&&t(!!a),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pp()||lp()||ju()}}const xT=LT;var Zh="@firebase/auth",ed="1.7.9";/**
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
 */class FT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BT(n){As(new jr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mp(n)},h=new gE(r,s,i,c);return wE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),As(new jr("auth-internal",e=>{const t=Ki(e.getProvider("auth").getImmediate());return(r=>new FT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(Zh,ed,UT(n)),sr(Zh,ed,"esm2017")}/**
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
 */const jT=5*60,qT=Hf("authIdTokenMaxAge")||jT;let td=null;const zT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qT)return;const s=t==null?void 0:t.token;td!==s&&(td=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $T(n=Qf()){const e=Ou(n,"auth");if(e.isInitialized())return e.getImmediate();const t=TE(n,{popupRedirectResolver:xT,persistence:[KE,ME,wp]}),r=Hf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=zT(i.toString());VE(t,a,()=>a(t.currentUser)),kE(t,l=>a(l))}}const s=zf("auth");return s&&IE(t,`http://${s}`),t}function HT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_E({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",HT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BT("Browser");var WT="firebase",KT="10.14.1";/**
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
 */sr(WT,KT,"app");var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,Vp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(T,I,b){for(var v=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)v[vt-2]=arguments[vt];return g.prototype[I].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)T[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],I=E.g[2];var b=E.g[3],v=g+(b^_&(I^b))+T[0]+3614090360&4294967295;g=_+(v<<7&4294967295|v>>>25),v=b+(I^g&(_^I))+T[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=I+(_^b&(g^_))+T[2]+606105819&4294967295,I=b+(v<<17&4294967295|v>>>15),v=_+(g^I&(b^g))+T[3]+3250441966&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(b^_&(I^b))+T[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(I^g&(_^I))+T[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=I+(_^b&(g^_))+T[6]+2821735955&4294967295,I=b+(v<<17&4294967295|v>>>15),v=_+(g^I&(b^g))+T[7]+4249261313&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(b^_&(I^b))+T[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(I^g&(_^I))+T[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=I+(_^b&(g^_))+T[10]+4294925233&4294967295,I=b+(v<<17&4294967295|v>>>15),v=_+(g^I&(b^g))+T[11]+2304563134&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(b^_&(I^b))+T[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(I^g&(_^I))+T[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=I+(_^b&(g^_))+T[14]+2792965006&4294967295,I=b+(v<<17&4294967295|v>>>15),v=_+(g^I&(b^g))+T[15]+1236535329&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(I^b&(_^I))+T[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^I&(g^_))+T[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(b^g))+T[11]+643717713&4294967295,I=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(I^b))+T[0]+3921069994&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(I^b&(_^I))+T[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^I&(g^_))+T[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(b^g))+T[15]+3634488961&4294967295,I=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(I^b))+T[4]+3889429448&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(I^b&(_^I))+T[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^I&(g^_))+T[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(b^g))+T[3]+4107603335&4294967295,I=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(I^b))+T[8]+1163531501&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(I^b&(_^I))+T[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^I&(g^_))+T[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(b^g))+T[7]+1735328473&4294967295,I=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(I^b))+T[12]+2368359562&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(_^I^b)+T[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^I)+T[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=I+(b^g^_)+T[11]+1839030562&4294967295,I=b+(v<<16&4294967295|v>>>16),v=_+(I^b^g)+T[14]+4259657740&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(_^I^b)+T[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^I)+T[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=I+(b^g^_)+T[7]+4139469664&4294967295,I=b+(v<<16&4294967295|v>>>16),v=_+(I^b^g)+T[10]+3200236656&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(_^I^b)+T[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^I)+T[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=I+(b^g^_)+T[3]+3572445317&4294967295,I=b+(v<<16&4294967295|v>>>16),v=_+(I^b^g)+T[6]+76029189&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(_^I^b)+T[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^I)+T[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=I+(b^g^_)+T[15]+530742520&4294967295,I=b+(v<<16&4294967295|v>>>16),v=_+(I^b^g)+T[2]+3299628645&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(I^(_|~b))+T[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~I))+T[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=I+(g^(b|~_))+T[14]+2878612391&4294967295,I=b+(v<<15&4294967295|v>>>17),v=_+(b^(I|~g))+T[5]+4237533241&4294967295,_=I+(v<<21&4294967295|v>>>11),v=g+(I^(_|~b))+T[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~I))+T[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=I+(g^(b|~_))+T[10]+4293915773&4294967295,I=b+(v<<15&4294967295|v>>>17),v=_+(b^(I|~g))+T[1]+2240044497&4294967295,_=I+(v<<21&4294967295|v>>>11),v=g+(I^(_|~b))+T[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~I))+T[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=I+(g^(b|~_))+T[6]+2734768916&4294967295,I=b+(v<<15&4294967295|v>>>17),v=_+(b^(I|~g))+T[13]+1309151649&4294967295,_=I+(v<<21&4294967295|v>>>11),v=g+(I^(_|~b))+T[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~I))+T[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=I+(g^(b|~_))+T[2]+718787259&4294967295,I=b+(v<<15&4294967295|v>>>17),v=_+(b^(I|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,T=this.B,I=this.h,b=0;b<g;){if(I==0)for(;b<=_;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(T[I++]=E.charCodeAt(b++),I==this.blockSize){s(this,T),I=0;break}}else for(;b<g;)if(T[I++]=E[b++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var T=0;32>T;T+=8)E[_++]=this.g[g]>>>T&255;return E};function i(E,g){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],T=!0,I=E.length-1;0<=I;I--){var b=E[I]|0;T&&b==g||(_[I]=b,T=!1)}this.g=_}var l={};function c(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return A(h(-E));for(var g=[],_=1,T=0;E>=_;T++)g[T]=E/_|0,_*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return A(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),T=m,I=0;I<E.length;I+=8){var b=Math.min(8,E.length-I),v=parseInt(E.substring(I,I+b),g);8>b?(b=h(Math.pow(g,b)),T=T.j(b).add(h(v))):(T=T.j(_),T=T.add(h(v)))}return T}var m=c(0),y=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(V(this))return-A(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var T=this.i(_);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(V(this))return"-"+A(this).toString(E);for(var g=h(Math.pow(E,6)),_=this,T="";;){var I=q(_,g).g;_=O(_,I.j(g));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,P(_))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=O(this,E),V(E)?-1:P(E)?0:1};function A(E){for(var g=E.g.length,_=[],T=0;T<g;T++)_[T]=~E.g[T];return new a(_,~E.h).add(y)}n.abs=function(){return V(this)?A(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0,I=0;I<=g;I++){var b=T+(this.i(I)&65535)+(E.i(I)&65535),v=(b>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);T=v>>>16,b&=65535,v&=65535,_[I]=v<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(E,g){return E.add(A(g))}n.j=function(E){if(P(this)||P(E))return m;if(V(this))return V(E)?A(this).j(A(E)):A(A(this).j(E));if(V(E))return A(this.j(A(E)));if(0>this.l(w)&&0>E.l(w))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<E.g.length;I++){var b=this.i(T)>>>16,v=this.i(T)&65535,vt=E.i(I)>>>16,rn=E.i(I)&65535;_[2*T+2*I]+=v*rn,B(_,2*T+2*I),_[2*T+2*I+1]+=b*rn,B(_,2*T+2*I+1),_[2*T+2*I+1]+=v*vt,B(_,2*T+2*I+1),_[2*T+2*I+2]+=b*vt,B(_,2*T+2*I+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new a(_,0)};function B(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function L(E,g){this.g=E,this.h=g}function q(E,g){if(P(g))throw Error("division by zero");if(P(E))return new L(m,m);if(V(E))return g=q(A(E),g),new L(A(g.g),A(g.h));if(V(g))return g=q(E,A(g)),new L(A(g.g),g.h);if(30<E.g.length){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=g;0>=T.l(E);)_=Z(_),T=Z(T);var I=re(_,1),b=re(T,1);for(T=re(T,2),_=re(_,2);!P(T);){var v=b.add(T);0>=v.l(E)&&(I=I.add(_),b=v),T=re(T,1),_=re(_,1)}return g=O(E,I.j(g)),new L(I,g)}for(I=m;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(_),v=b.j(g);V(v)||0<v.l(E);)_-=T,b=h(_),v=b.j(g);P(b)&&(b=y),I=I.add(b),E=O(E,v)}return new L(I,E)}n.A=function(E){return q(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function Z(E){for(var g=E.g.length+1,_=[],T=0;T<g;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function re(E,g){var _=g>>5;g%=32;for(var T=E.g.length-_,I=[],b=0;b<T;b++)I[b]=0<g?E.i(b+_)>>>g|E.i(b+_+1)<<32-g:E.i(b+_);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Lr=a}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dp,ci,Np,xo,ru,Op,Mp,Lp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Io=="object"&&Io];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function y(o,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,k){for(var M=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)M[Te-2]=arguments[Te];return u.prototype[S].apply(p,M)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function A(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,k=p.length||0;o.length=S+k;for(let M=0;M<k;M++)o[S+M]=p[M]}else o.push(p)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var Z=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function re(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function E(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let k=0;k<_.length;k++)d=_[k],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function v(){var o=F;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class vt{constructor(){this.h=this.g=null}add(u,d){const p=rn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var rn=new O(()=>new Gr,o=>o.reset());class Gr{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let sn,U=!1,F=new vt,J=()=>{const o=l.Promise.resolve(void 0);sn=()=>{o.then(ve)}};var ve=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var u=rn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}U=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Le(o,u){if(X.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Z){e:{try{q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ze[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Le.aa.h.call(this)}}P(Le,X);var Ze={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var pe="closure_listenable_"+(1e6*Math.random()|0),Ce=0;function Rt(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++Ce,this.da=this.fa=!1}function Gt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ot(o){this.src=o,this.g={},this.h=0}Ot.prototype.add=function(o,u,d,p,S){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var M=yt(o,u,p,S);return-1<M?(u=o[M],d||(u.fa=!1)):(u=new Rt(u,this.src,k,!!p,S),u.fa=d,o.push(u)),u};function Mt(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(p,S,1),k&&(Gt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function yt(o,u,d,p){for(var S=0;S<o.length;++S){var k=o[S];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==p)return S}return-1}var In="closure_lm_"+(1e6*Math.random()|0),lt={};function ut(o,u,d,p,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)ut(o,u[k],d,p,S);return null}return d=et(d),o&&o[pe]?o.K(u,d,h(p)?!!p.capture:!1,S):ct(o,u,d,!1,p,S)}function ct(o,u,d,p,S,k){if(!u)throw Error("Invalid event type");var M=h(S)?!!S.capture:!!S,Te=me(o);if(Te||(o[In]=Te=new Ot(o)),d=Te.add(u,d,p,M,k),d.proxy)return d;if(p=on(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)We||(S=M),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(Ee(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function on(){function o(d){return u.call(o.src,o.listener,d)}const u=Se;return o}function Lt(o,u,d,p,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)Lt(o,u[k],d,p,S);else p=h(p)?!!p.capture:!!p,d=et(d),o&&o[pe]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=yt(k,d,p,S),-1<d&&(Gt(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=me(o))&&(u=o.g[u.toString()],o=-1,u&&(o=yt(u,d,p,S)),(d=-1<o?u[o]:null)&&An(d))}function An(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[pe])Mt(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(Ee(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=me(u))?(Mt(d,o),d.h==0&&(d.src=null,u[In]=null)):Gt(o)}}}function Ee(o){return o in lt?lt[o]:lt[o]="on"+o}function Se(o,u){if(o.da)o=!0;else{u=new Le(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&An(o),o=d.call(p,u)}return o}function me(o){return o=o[In],o instanceof Ot?o:null}var $e="__closure_events_fn_"+(1e9*Math.random()>>>0);function et(o){return typeof o=="function"?o:(o[$e]||(o[$e]=function(u){return o.handleEvent(u)}),o[$e])}function he(){ye.call(this),this.i=new Ot(this),this.M=this,this.F=null}P(he,ye),he.prototype[pe]=!0,he.prototype.removeEventListener=function(o,u,d,p){Lt(this,o,u,d,p)};function Ie(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new X(u,o);else if(u instanceof X)u.target=u.target||o;else{var S=u;u=new X(p,o),T(u,S)}if(S=!0,d)for(var k=d.length-1;0<=k;k--){var M=u.g=d[k];S=xt(M,p,!0,u)&&S}if(M=u.g=o,S=xt(M,p,!0,u)&&S,S=xt(M,p,!1,u)&&S,d)for(k=0;k<d.length;k++)M=u.g=d[k],S=xt(M,p,!1,u)&&S}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Gt(d[p]);delete o.g[u],o.h--}}this.F=null},he.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},he.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function xt(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var M=u[k];if(M&&!M.da&&M.capture==d){var Te=M.listener,Ke=M.ha||M.src;M.fa&&Mt(o.i,M),S=Te.call(Ke,p)!==!1&&S}}return S&&!p.defaultPrevented}function fr(o,u,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function ro(o){o.g=fr(()=>{o.g=null,o.i&&(o.i=!1,ro(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ga extends ye{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ro(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(o){ye.call(this),this.h=o,this.g={}}P(pr,ye);var wc=[];function Ic(o){re(o.g,function(u,d){this.g.hasOwnProperty(d)&&An(u)},o),o.g={}}pr.prototype.N=function(){pr.aa.N.call(this),Ic(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qa=l.JSON.stringify,rg=l.JSON.parse,sg=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ya(){}Ya.prototype.h=null;function Ac(o){return o.h||(o.h=o.i())}function Rc(){}var js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ja(){X.call(this,"d")}P(Ja,X);function Xa(){X.call(this,"c")}P(Xa,X);var mr={},Sc=null;function so(){return Sc=Sc||new he}mr.La="serverreachability";function bc(o){X.call(this,mr.La,o)}P(bc,X);function qs(o){const u=so();Ie(u,new bc(u))}mr.STAT_EVENT="statevent";function Pc(o,u){X.call(this,mr.STAT_EVENT,o),this.stat=u}P(Pc,X);function ht(o){const u=so();Ie(u,new Pc(u,o))}mr.Ma="timingevent";function Cc(o,u){X.call(this,mr.Ma,o),this.size=u}P(Cc,X);function zs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function ig(o,u,d,p,S,k){o.info(function(){if(o.g)if(k)for(var M="",Te=k.split("&"),Ke=0;Ke<Te.length;Ke++){var ae=Te[Ke].split("=");if(1<ae.length){var tt=ae[0];ae=ae[1];var nt=tt.split("_");M=2<=nt.length&&nt[1]=="type"?M+(tt+"="+ae+"&"):M+(tt+"=redacted&")}}else M=null;else M=k;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+M})}function og(o,u,d,p,S,k,M){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+k+" "+M})}function Qr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+lg(o,d)+(p?" "+p:"")})}function ag(o,u){o.info(function(){return"TIMEOUT: "+u})}$s.prototype.info=function(){};function lg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var M=1;M<S.length;M++)S[M]=""}}}}return Qa(d)}catch{return u}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Za;function oo(){}P(oo,Ya),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},Za=new oo;function qn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var Dc={},el={};function tl(o,u,d){o.L=1,o.v=co(Rn(u)),o.m=d,o.P=!0,Nc(o,null)}function Nc(o,u){o.F=Date.now(),ao(o),o.A=Rn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Kc(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Vc,o.g=hh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ga(y(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(wc[0]=S.toString()),S=wc);for(var k=0;k<S.length;k++){var M=ut(d,S[k],p||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),qs(),ig(o.i,o.u,o.A,o.l,o.R,o.m)}qn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Sn(o)==3?u.j():this.Y(o)},qn.prototype.Y=function(o){try{if(o==this.g)e:{const nt=Sn(this.g);var u=this.g.Ba();const Xr=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||nt!=4||u==7||(u==8||0>=Xr?qs(3):qs(2)),nl(this);var d=this.g.Z();this.X=d;t:if(Oc(this)){var p=eh(this.g);o="";var S=p.length,k=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Hs(this);var M="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(k&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,og(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Ke=this.g;if((Te=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Te)){var ae=Te;break t}}ae=null}if(d=ae)Qr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,d);else{this.o=!1,this.s=3,ht(12),gr(this),Hs(this);break e}}if(this.P){d=!0;let Qt;for(;!this.J&&this.C<M.length;)if(Qt=ug(this,M),Qt==el){nt==4&&(this.s=4,ht(14),d=!1),Qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Dc){this.s=4,ht(15),Qr(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else Qr(this.i,this.l,Qt,null),rl(this,Qt);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||M.length!=0||this.h.h||(this.s=1,ht(16),d=!1),this.o=this.o&&d,!d)Qr(this.i,this.l,M,"[Invalid Chunked Response]"),gr(this),Hs(this);else if(0<M.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),ul(tt),tt.M=!0,ht(11))}}else Qr(this.i,this.l,M,null),rl(this,M);nt==4&&gr(this),this.o&&!this.J&&(nt==4?ah(this.j,this):(this.o=!1,ao(this)))}else Sg(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),gr(this),Hs(this)}}}catch{}finally{}};function Oc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ug(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?el:(d=Number(u.substring(d,p)),isNaN(d)?Dc:(p+=1,p+d>u.length?el:(u=u.slice(p,p+d),o.C=p+d,u)))}qn.prototype.cancel=function(){this.J=!0,gr(this)};function ao(o){o.S=Date.now()+o.I,Mc(o,o.I)}function Mc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zs(y(o.ba,o),u)}function nl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}qn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ag(this.i,this.A),this.L!=2&&(qs(),ht(17)),gr(this),this.s=2,Hs(this)):Mc(this,this.S-o)};function Hs(o){o.j.G==0||o.J||ah(o.j,o)}function gr(o){nl(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ic(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function rl(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||sl(d.h,o))){if(!o.K&&sl(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)_o(d),mo(d);else break e;ll(d),ht(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=zs(y(d.Za,d),6e3));if(1>=Fc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vr(d,11)}else if((o.K||d.g==o)&&_o(d),!B(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let ae=S[u];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const tt=ae[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ae[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const Xr=ae[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(p=1.5*Xr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Qt=o.g;if(Qt){const yo=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var k=p.h;k.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(il(k,k.h),k.h=null))}if(p.D){const cl=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(p.ya=cl,be(p.I,p.D,cl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var M=o;if(p.qa=ch(p,p.J?p.ia:null,p.W),M.K){Uc(p.h,M);var Te=M,Ke=p.L;Ke&&(Te.I=Ke),Te.B&&(nl(Te),ao(Te)),p.g=M}else ih(p);0<d.i.length&&go(d)}else ae[0]!="stop"&&ae[0]!="close"||vr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?vr(d,7):al(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}qs(4)}catch{}}var cg=class{constructor(o,u){this.g=o,this.map=u}};function Lc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fc(o){return o.h?1:o.g?o.g.size:0}function sl(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function il(o,u){o.g?o.g.add(u):o.h=u}function Uc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Lc.prototype.cancel=function(){if(this.i=Bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function hg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function dg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function jc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=dg(o),p=hg(o),S=p.length,k=0;k<S;k++)u.call(void 0,p[k],d&&d[k],o)}var qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fg(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var k=o[d].substring(0,p);S=o[d].substring(p+1)}else k=o[d];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function _r(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof _r){this.h=o.h,lo(this,o.j),this.o=o.o,this.g=o.g,uo(this,o.s),this.l=o.l;var u=o.i,d=new Gs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),zc(this,d),this.m=o.m}else o&&(u=String(o).match(qc))?(this.h=!1,lo(this,u[1]||"",!0),this.o=Ws(u[2]||""),this.g=Ws(u[3]||"",!0),uo(this,u[4]),this.l=Ws(u[5]||"",!0),zc(this,u[6]||"",!0),this.m=Ws(u[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}_r.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ks(u,$c,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ks(u,$c,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ks(d,d.charAt(0)=="/"?gg:mg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ks(d,vg)),o.join("")};function Rn(o){return new _r(o)}function lo(o,u,d){o.j=d?Ws(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function uo(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function zc(o,u,d){u instanceof Gs?(o.i=u,yg(o.i,o.h)):(d||(u=Ks(u,_g)),o.i=new Gs(u,o.h))}function be(o,u,d){o.i.set(u,d)}function co(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ws(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ks(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,pg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function pg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $c=/[#\/\?@]/g,mg=/[#\?:]/g,gg=/[#\?]/g,_g=/[#\?@]/g,vg=/#/g;function Gs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function zn(o){o.g||(o.g=new Map,o.h=0,o.i&&fg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Gs.prototype,n.add=function(o,u){zn(this),this.i=null,o=Yr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Hc(o,u){zn(o),u=Yr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Wc(o,u){return zn(o),u=Yr(o,u),o.g.has(u)}n.forEach=function(o,u){zn(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},n.na=function(){zn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let k=0;k<S.length;k++)d.push(u[p])}return d},n.V=function(o){zn(this);let u=[];if(typeof o=="string")Wc(this,o)&&(u=u.concat(this.g.get(Yr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return zn(this),this.i=null,o=Yr(this,o),Wc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Kc(o,u,d){Hc(o,u),0<d.length&&(o.i=null,o.g.set(Yr(o,u),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const k=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var S=k;M[p]!==""&&(S+="="+encodeURIComponent(String(M[p]))),o.push(S)}}return this.i=o.join("&")};function Yr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function yg(o,u){u&&!o.j&&(zn(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(Hc(this,p),Kc(this,S,d))},o)),o.j=u}function Eg(o,u){const d=new $s;if(l.Image){const p=new Image;p.onload=w($n,d,"TestLoadImage: loaded",!0,u,p),p.onerror=w($n,d,"TestLoadImage: error",!1,u,p),p.onabort=w($n,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=w($n,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Tg(o,u){const d=new $s,p=new AbortController,S=setTimeout(()=>{p.abort(),$n(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(S),k.ok?$n(d,"TestPingServer: ok",!0,u):$n(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),$n(d,"TestPingServer: error",!1,u)})}function $n(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function wg(){this.g=new sg}function Ig(o,u,d){const p=d||"";try{jc(o,function(S,k){let M=S;h(S)&&(M=Qa(S)),u.push(p+k+"="+encodeURIComponent(M))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function ho(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ho,Ya),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(o){return function(){return o}}({});function fo(o,u){he.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(fo,he),n=fo.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ys(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Qs(this):Ys(this),this.readyState==3&&Gc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Qs(this))},n.Qa=function(o){this.g&&(this.response=o,Qs(this))},n.ga=function(){this.g&&Qs(this)};function Qs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ys(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ys(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qc(o){let u="";return re(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ol(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Qc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):be(o,u,d))}function De(o){he.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(De,he);var Ag=/^https?$/i,Rg=["POST","PUT"];n=De.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Za.g(),this.v=this.o?Ac(this.o):Ac(Za),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Yc(this,k);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())d.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Rg,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,M]of d)this.g.setRequestHeader(k,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zc(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Yc(this,k)}};function Yc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Jc(o),po(o)}function Jc(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ie(this,"complete"),Ie(this,"abort"),po(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),De.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xc(this):this.bb())},n.bb=function(){Xc(this)};function Xc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Sn(o)!=4||o.Z()!=2)){if(o.u&&Sn(o)==4)fr(o.Ea,0,o);else if(Ie(o,"readystatechange"),Sn(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=M===0){var S=String(o.D).match(qc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Ag.test(S?S.toLowerCase():"")}d=p}if(d)Ie(o,"complete"),Ie(o,"success");else{o.m=6;try{var k=2<Sn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",Jc(o)}}finally{po(o)}}}}function po(o,u){if(o.g){Zc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ie(o,"ready");try{d.onreadystatechange=p}catch{}}}function Zc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Sn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),rg(u)}};function eh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sg(o){const u={};o=(o.g&&2<=Sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(B(o[p]))continue;var d=I(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[S]||[];u[S]=k,k.push(d)}E(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function th(o){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,o),this.cb=Js("retryDelaySeedMs",1e4,o),this.Wa=Js("forwardChannelMaxRetries",2,o),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Lc(o&&o.concurrentRequestLimit),this.Da=new wg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=th.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){ht(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ch(this,null,this.W),go(this)};function al(o){if(nh(o),o.G==3){var u=o.U++,d=Rn(o.I);if(be(d,"SID",o.K),be(d,"RID",u),be(d,"TYPE","terminate"),Xs(o,d),u=new qn(o,o.j,u),u.L=2,u.v=co(Rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=hh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ao(u)}uh(o)}function mo(o){o.g&&(ul(o),o.g.cancel(),o.g=null)}function nh(o){mo(o),o.u&&(l.clearTimeout(o.u),o.u=null),_o(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function go(o){if(!xc(o.h)&&!o.s){o.s=!0;var u=o.Ga;sn||J(),U||(sn(),U=!0),F.add(u,o),o.B=0}}function bg(o,u){return Fc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zs(y(o.Ga,o,u),lh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new qn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=g(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=sh(this,S,u),d=Rn(this.I),be(d,"RID",o),be(d,"CVER",22),this.D&&be(d,"X-HTTP-Session-Id",this.D),Xs(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Qc(k)))+"&"+u:this.m&&ol(d,this.m,k)),il(this.h,S),this.Ua&&be(d,"TYPE","init"),this.P?(be(d,"$req",u),be(d,"SID","null"),S.T=!0,tl(S,d,null)):tl(S,d,u),this.G=2}}else this.G==3&&(o?rh(this,o):this.i.length==0||xc(this.h)||rh(this))};function rh(o,u){var d;u?d=u.l:d=o.U++;const p=Rn(o.I);be(p,"SID",o.K),be(p,"RID",d),be(p,"AID",o.T),Xs(o,p),o.m&&o.o&&ol(p,o.m,o.o),d=new qn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=sh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),il(o.h,d),tl(d,p,u)}function Xs(o,u){o.H&&re(o.H,function(d,p){be(u,p,d)}),o.l&&jc({},function(d,p){be(u,p,d)})}function sh(o,u,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let k=-1;for(;;){const M=["count="+d];k==-1?0<d?(k=S[0].g,M.push("ofs="+k)):k=0:M.push("ofs="+k);let Te=!0;for(let Ke=0;Ke<d;Ke++){let ae=S[Ke].g;const tt=S[Ke].map;if(ae-=k,0>ae)k=Math.max(0,S[Ke].g-100),Te=!1;else try{Ig(tt,M,"req"+ae+"_")}catch{p&&p(tt)}}if(Te){p=M.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function ih(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;sn||J(),U||(sn(),U=!0),F.add(u,o),o.v=0}}function ll(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zs(y(o.Fa,o),lh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zs(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),mo(this),oh(this))};function ul(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function oh(o){o.g=new qn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Rn(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),Xs(o,u),o.m&&o.o&&ol(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=co(Rn(u)),d.m=null,d.P=!0,Nc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,mo(this),ll(this),ht(19))};function _o(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ah(o,u){var d=null;if(o.g==u){_o(o),ul(o),o.g=null;var p=2}else if(sl(o.h,u))d=u.D,Uc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=so(),Ie(p,new Cc(p,d)),go(o)}else ih(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&bg(o,u)||p==2&&ll(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:vr(o,5);break;case 4:vr(o,10);break;case 3:vr(o,6);break;default:vr(o,2)}}}function lh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function vr(o,u){if(o.j.info("Error code "+u),u==2){var d=y(o.fb,o),p=o.Xa;const S=!p;p=new _r(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||lo(p,"https"),co(p),S?Eg(p.toString(),d):Tg(p.toString(),d)}else ht(2);o.G=0,o.l&&o.l.sa(u),uh(o),nh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function uh(o){if(o.G=0,o.ka=[],o.l){const u=Bc(o.h);(u.length!=0||o.i.length!=0)&&(A(o.ka,u),A(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function ch(o,u,d){var p=d instanceof _r?Rn(d):new _r(d);if(p.g!="")u&&(p.g=u+"."+p.g),uo(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new _r(null);p&&lo(k,p),u&&(k.g=u),S&&uo(k,S),d&&(k.l=d),p=k}return d=o.D,u=o.ya,d&&u&&be(p,d,u),be(p,"VER",o.la),Xs(o,p),p}function hh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new De(new ho({eb:d})):new De(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function dh(){}n=dh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vo(){}vo.prototype.g=function(o,u){return new St(o,u)};function St(o,u){he.call(this),this.g=new th(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Jr(this)}P(St,he),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){al(this.g)},St.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Qa(o),o=d);u.i.push(new cg(u.Ya++,o)),u.G==3&&go(u)},St.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,St.aa.N.call(this)};function fh(o){Ja.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(fh,Ja);function ph(){Xa.call(this),this.status=1}P(ph,Xa);function Jr(o){this.g=o}P(Jr,dh),Jr.prototype.ua=function(){Ie(this.g,"a")},Jr.prototype.ta=function(o){Ie(this.g,new fh(o))},Jr.prototype.sa=function(o){Ie(this.g,new ph)},Jr.prototype.ra=function(){Ie(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Lp=function(){return new vo},Mp=function(){return so()},Op=mr,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,xo=io,kc.COMPLETE="complete",Np=kc,Rc.EventType=js,js.OPEN="a",js.CLOSE="b",js.ERROR="c",js.MESSAGE="d",he.prototype.listen=he.prototype.K,ci=Rc,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,Dp=De}).apply(typeof Io<"u"?Io:typeof self<"u"?self:typeof window<"u"?window:{});const rd="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Fs="10.14.0";/**
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
 */const zr=new Du("@firebase/firestore");function ni(){return zr.logLevel}function x(n,...e){if(zr.logLevel<=se.DEBUG){const t=e.map(Wu);zr.debug(`Firestore (${Fs}): ${n}`,...t)}}function Fn(n,...e){if(zr.logLevel<=se.ERROR){const t=e.map(Wu);zr.error(`Firestore (${Fs}): ${n}`,...t)}}function Ss(n,...e){if(zr.logLevel<=se.WARN){const t=e.map(Wu);zr.warn(`Firestore (${Fs}): ${n}`,...t)}}function Wu(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: `+n;throw Fn(e),new Error(e)}function _e(n,e){n||K()}function Y(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class xp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class QT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YT{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_e(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new xp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new st(e)}}class JT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new JT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ew{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){_e(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(_e(typeof t.token=="string"),this.R=t.token,new ZT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Fp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function bs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class qe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new qe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new qe(0,0))}static max(){return new Q(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ci{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Pe extends Ci{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Pe(t)}static emptyPath(){return new Pe([])}}const nw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Ci{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return nw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new j(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new j(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Pe.fromString(e))}static fromName(e){return new z(Pe.fromString(e).popFirst(5))}static empty(){return new z(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Pe(e.slice()))}}function rw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new qe(t+1,0):new qe(t,r));return new lr(s,z.empty(),e)}function sw(n){return new lr(n.readTime,n.key,-1)}class lr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new lr(Q.min(),z.empty(),-1)}static max(){return new lr(Q.max(),z.empty(),-1)}}function iw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const ow="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==ow)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function lw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ji(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ku{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ku.oe=-1;function ka(n){return n==null}function oa(n){return n===0&&1/n==-1/0}function uw(n){return typeof n=="number"&&Number.isInteger(n)&&!oa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function sd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Up(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ao(this.root,e,this.comparator,!0)}}class Ao{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new id(this.data.getIterator())}getIteratorFrom(e){return new id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new Je(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Bp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bp("Invalid base64 string: "+i):i}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const cw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(n){if(_e(!!n),typeof n=="string"){let e=0;const t=cw.exec(n);if(_e(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(n.seconds),nanos:Oe(n.nanos)}}function Oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $r(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
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
 */function Gu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Qu(n){const e=n.mapValue.fields.__previous_value__;return Gu(e)?Qu(e):e}function ki(n){const e=ur(n.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class hw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Vi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ro={mapValue:{}};function Hr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gu(n)?4:fw(n)?9007199254740991:dw(n)?10:11:K()}function Tn(n,e){if(n===e)return!0;const t=Hr(n);if(t!==Hr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ki(n).isEqual(ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ur(s.timestampValue),l=ur(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Oe(s.doubleValue),l=Oe(i.doubleValue);return a===l?oa(a)===oa(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return bs(n.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(sd(a)!==sd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Tn(a[c],l[c])))return!1;return!0}(n,e);default:return K()}}function Di(n,e){return(n.values||[]).find(t=>Tn(t,e))!==void 0}function Ps(n,e){if(n===e)return 0;const t=Hr(n),r=Hr(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Oe(i.integerValue||i.doubleValue),c=Oe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return od(n.timestampValue,e.timestampValue);case 4:return od(ki(n),ki(e));case 5:return ue(n.stringValue,e.stringValue);case 6:return function(i,a){const l=$r(i),c=$r(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ue(l[h],c[h]);if(f!==0)return f}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ue(Oe(i.latitude),Oe(a.latitude));return l!==0?l:ue(Oe(i.longitude),Oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ad(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const m=i.fields||{},y=a.fields||{},w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(c=y.value)===null||c===void 0?void 0:c.arrayValue,V=ue(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:ad(w,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ro.mapValue&&a===Ro.mapValue)return 0;if(i===Ro.mapValue)return 1;if(a===Ro.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const y=ue(c[m],f[m]);if(y!==0)return y;const w=Ps(l[c[m]],h[f[m]]);if(w!==0)return w}return ue(c.length,f.length)}(n.mapValue,e.mapValue);default:throw K()}}function od(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=ur(n),r=ur(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function ad(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ps(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function Cs(n){return su(n)}function su(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ur(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $r(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=su(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${su(t.fields[a])}`;return s+"}"}(n.mapValue):K()}function iu(n){return!!n&&"integerValue"in n}function Yu(n){return!!n&&"arrayValue"in n}function ld(n){return!!n&&"nullValue"in n}function ud(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fo(n){return!!n&&"mapValue"in n}function dw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=yi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=yi(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Wr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(yi(this.value))}}function jp(n){const e=[];return Wr(n.fields,(t,r)=>{const s=new Ye([t]);if(Fo(r)){const i=jp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Nt(e)}/**
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
 */class it{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new it(e,0,Q.min(),Q.min(),Q.min(),wt.empty(),0)}static newFoundDocument(e,t,r,s){return new it(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new it(e,2,t,Q.min(),Q.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new it(e,3,t,Q.min(),Q.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,t){this.position=e,this.inclusive=t}}function cd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=Ps(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class la{constructor(e,t="asc"){this.field=e,this.dir=t}}function pw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class qp{}class je extends qp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gw(e,t,r):t==="array-contains"?new yw(e,r):t==="in"?new Ew(e,r):t==="not-in"?new Tw(e,r):t==="array-contains-any"?new ww(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _w(e,r):new vw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ps(t,this.value)):t!==null&&Hr(this.value)===Hr(t)&&this.matchesComparison(Ps(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends qp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new wn(e,t)}matches(e){return zp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zp(n){return n.op==="and"}function $p(n){return mw(n)&&zp(n)}function mw(n){for(const e of n.filters)if(e instanceof wn)return!1;return!0}function ou(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+Cs(n.value);if($p(n))return n.filters.map(e=>ou(e)).join(",");{const e=n.filters.map(t=>ou(t)).join(",");return`${n.op}(${e})`}}function Hp(n,e){return n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(n,e):n instanceof wn?function(r,s){return s instanceof wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Hp(a,s.filters[l]),!0):!1}(n,e):void K()}function Wp(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${Cs(t.value)}`}(n):n instanceof wn?function(t){return t.op.toString()+" {"+t.getFilters().map(Wp).join(" ,")+"}"}(n):"Filter"}class gw extends je{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class _w extends je{constructor(e,t){super(e,"in",t),this.keys=Kp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vw extends je{constructor(e,t){super(e,"not-in",t),this.keys=Kp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class yw extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yu(t)&&Di(t.arrayValue,this.value)}}class Ew extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Di(this.value.arrayValue,t)}}class Tw extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Di(this.value.arrayValue,t)}}class ww extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Di(this.value.arrayValue,r))}}/**
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
 */class Iw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function dd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Iw(n,e,t,r,s,i,a)}function Ju(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ou(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ka(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=t}return e.ue}function Xu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hd(n.startAt,e.startAt)&&hd(n.endAt,e.endAt)}function au(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Va{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Aw(n,e,t,r,s,i,a,l){return new Va(n,e,t,r,s,i,a,l)}function Da(n){return new Va(n)}function fd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rw(n){return n.collectionGroup!==null}function Ei(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Je(Ye.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new la(i,r))}),t.has(Ye.keyField().canonicalString())||e.ce.push(new la(Ye.keyField(),r))}return e.ce}function _n(n){const e=Y(n);return e.le||(e.le=Sw(e,Ei(n))),e.le}function Sw(n,e){if(n.limitType==="F")return dd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new la(s.field,i)});const t=n.endAt?new aa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new aa(n.startAt.position,n.startAt.inclusive):null;return dd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function lu(n,e,t){return new Va(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Na(n,e){return Xu(_n(n),_n(e))&&n.limitType===e.limitType}function Gp(n){return`${Ju(_n(n))}|lt:${n.limitType}`}function rs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Wp(s)).join(", ")}]`),ka(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Cs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(_n(n))}; limitType=${n.limitType})`}function Oa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=cd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ei(r),s)||r.endAt&&!function(a,l,c){const h=cd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ei(r),s))}(n,e)}function bw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qp(n){return(e,t)=>{let r=!1;for(const s of Ei(n)){const i=Pw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Pw(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Ps(c,h):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Up(this.inner)}size(){return this.innerSize}}/**
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
 */const Cw=new Ve(z.comparator);function Un(){return Cw}const Yp=new Ve(z.comparator);function hi(...n){let e=Yp;for(const t of n)e=e.insert(t.key,t);return e}function Jp(n){let e=Yp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function br(){return Ti()}function Xp(){return Ti()}function Ti(){return new Us(n=>n.toString(),(n,e)=>n.isEqual(e))}const kw=new Ve(z.comparator),Vw=new Je(z.comparator);function ne(...n){let e=Vw;for(const t of n)e=e.add(t);return e}const Dw=new Je(ue);function Nw(){return Dw}/**
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
 */function Zu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function Zp(n){return{integerValue:""+n}}function Ow(n,e){return uw(e)?Zp(e):Zu(n,e)}/**
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
 */class Ma{constructor(){this._=void 0}}function Mw(n,e,t){return n instanceof ua?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gu(i)&&(i=Qu(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Ni?tm(n,e):n instanceof Oi?nm(n,e):function(s,i){const a=em(s,i),l=pd(a)+pd(s.Pe);return iu(a)&&iu(s.Pe)?Zp(l):Zu(s.serializer,l)}(n,e)}function Lw(n,e,t){return n instanceof Ni?tm(n,e):n instanceof Oi?nm(n,e):t}function em(n,e){return n instanceof ca?function(r){return iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ua extends Ma{}class Ni extends Ma{constructor(e){super(),this.elements=e}}function tm(n,e){const t=rm(e);for(const r of n.elements)t.some(s=>Tn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Oi extends Ma{constructor(e){super(),this.elements=e}}function nm(n,e){let t=rm(e);for(const r of n.elements)t=t.filter(s=>!Tn(s,r));return{arrayValue:{values:t}}}class ca extends Ma{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function pd(n){return Oe(n.integerValue||n.doubleValue)}function rm(n){return Yu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ni&&s instanceof Ni||r instanceof Oi&&s instanceof Oi?bs(r.elements,s.elements,Tn):r instanceof ca&&s instanceof ca?Tn(r.Pe,s.Pe):r instanceof ua&&s instanceof ua}(n.transform,e.transform)}class Fw{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class La{}function sm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xa(n.key,At.none()):new Xi(n.key,n.data,At.none());{const t=n.data,r=wt.empty();let s=new Je(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dr(n.key,r,new Nt(s.toArray()),At.none())}}function Uw(n,e,t){n instanceof Xi?function(s,i,a){const l=s.value.clone(),c=gd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof dr?function(s,i,a){if(!Uo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=gd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(im(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function wi(n,e,t,r){return n instanceof Xi?function(i,a,l,c){if(!Uo(i.precondition,a))return l;const h=i.value.clone(),f=_d(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof dr?function(i,a,l,c){if(!Uo(i.precondition,a))return l;const h=_d(i.fieldTransforms,c,a),f=a.data;return f.setAll(im(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Uo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Bw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=em(r.transform,s||null);i!=null&&(t===null&&(t=wt.empty()),t.set(r.field,i))}return t||null}function md(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,a)=>xw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xi extends La{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends La{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function gd(n,e,t){const r=new Map;_e(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Lw(a,l,t[s]))}return r}function _d(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Mw(i,a,e))}return r}class xa extends La{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jw extends La{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Uw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=wi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=wi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=sm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(t,r)=>md(t,r))&&bs(this.baseMutations,e.baseMutations,(t,r)=>md(t,r))}}class ec{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){_e(e.mutations.length===r.length);let s=function(){return kw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ec(e,t,r,s)}}/**
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
 */class zw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class $w{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Fe,ie;function Hw(n){switch(n){default:return K();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function om(n){if(n===void 0)return Fn("GRPC error has no .code"),D.UNKNOWN;switch(n){case Fe.OK:return D.OK;case Fe.CANCELLED:return D.CANCELLED;case Fe.UNKNOWN:return D.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return D.INTERNAL;case Fe.UNAVAILABLE:return D.UNAVAILABLE;case Fe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Fe.NOT_FOUND:return D.NOT_FOUND;case Fe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Fe.ABORTED:return D.ABORTED;case Fe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Fe.DATA_LOSS:return D.DATA_LOSS;default:return K()}}(ie=Fe||(Fe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ww(){return new TextEncoder}/**
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
 */const Kw=new Lr([4294967295,4294967295],0);function vd(n){const e=Ww().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function yd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([t,r],0),new Lr([s,i],0)]}class tc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new di(`Invalid padding: ${t}`);if(r<0)throw new di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new di(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new di(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Lr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Lr.fromNumber(r)));return s.compare(Kw)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=vd(e),[r,s]=yd(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new tc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=vd(e),[r,s]=yd(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fa(Q.min(),s,new Ve(ue),Un(),ne())}}class Zi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zi(r,t,ne(),ne(),ne())}}/**
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
 */class Bo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class am{constructor(e,t){this.targetId=e,this.me=t}}class lm{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ed{constructor(){this.fe=0,this.ge=wd(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Zi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=wd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Td(),this.Qe=new Ve(ue)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(au(i))if(r===0){const a=new z(i.path);this.Ue(t,a,it.newNoDocument(a,Q.min()))}else _e(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=$r(r).toUint8Array()}catch(c){if(c instanceof Bp)return Ss("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new tc(a,s,i)}catch(c){return Ss(c instanceof di?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&au(l.target)){const c=new z(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,it.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Fa(e,t,this.Qe,this.ke,r);return this.ke=Un(),this.qe=Td(),this.Qe=new Ve(ue),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ed,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Je(ue),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ed),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Td(){return new Ve(z.comparator)}function wd(){return new Ve(z.comparator)}const Qw={asc:"ASCENDING",desc:"DESCENDING"},Yw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jw={and:"AND",or:"OR"};class Xw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uu(n,e){return n.useProto3Json||ka(e)?e:{value:e}}function ha(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Zw(n,e){return ha(n,e.toTimestamp())}function vn(n){return _e(!!n),Q.fromTimestamp(function(t){const r=ur(t);return new qe(r.seconds,r.nanos)}(n))}function nc(n,e){return cu(n,e).canonicalString()}function cu(n,e){const t=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cm(n){const e=Pe.fromString(n);return _e(mm(e)),e}function hu(n,e){return nc(n.databaseId,e.path)}function Sl(n,e){const t=cm(e);if(t.get(1)!==n.databaseId.projectId)throw new j(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(dm(t))}function hm(n,e){return nc(n.databaseId,e)}function eI(n){const e=cm(n);return e.length===4?Pe.emptyPath():dm(e)}function du(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dm(n){return _e(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Id(n,e,t){return{name:hu(n,e),fields:t.value.mapValue.fields}}function tI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(_e(f===void 0||typeof f=="string"),Xe.fromBase64String(f||"")):(_e(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?D.UNKNOWN:om(h.code);return new j(f,h.message||"")}(a);t=new lm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sl(n,r.document.name),i=vn(r.document.updateTime),a=r.document.createTime?vn(r.document.createTime):Q.min(),l=new wt({mapValue:{fields:r.document.fields}}),c=it.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Bo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sl(n,r.document),i=r.readTime?vn(r.readTime):Q.min(),a=it.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Bo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sl(n,r.document),i=r.removedTargetIds||[];t=new Bo([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new $w(s,i),l=r.targetId;t=new am(l,a)}}return t}function nI(n,e){let t;if(e instanceof Xi)t={update:Id(n,e.key,e.value)};else if(e instanceof xa)t={delete:hu(n,e.key)};else if(e instanceof dr)t={update:Id(n,e.key,e.data),updateMask:hI(e.fieldMask)};else{if(!(e instanceof jw))return K();t={verify:hu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ua)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ni)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ca)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(n,e.precondition)),t}function rI(n,e){return n&&n.length>0?(_e(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?vn(s.updateTime):vn(i);return a.isEqual(Q.min())&&(a=vn(i)),new Fw(a,s.transformResults||[])}(t,e))):[]}function sI(n,e){return{documents:[hm(n,e.path)]}}function iI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hm(n,s);const i=function(h){if(h.length!==0)return pm(wn.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:ss(y.field),direction:lI(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=uu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function oI(n){let e=eI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){_e(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const y=fm(m);return y instanceof wn&&$p(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(y=>function(P){return new la(is(P.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,ka(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(m){const y=!!m.before,w=m.values||[];return new aa(w,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,w=m.values||[];return new aa(w,y)}(t.endAt)),Aw(e,s,a,i,l,"F",c,h)}function aI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=is(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=is(t.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return je.create(is(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return wn.create(t.compositeFilter.filters.map(r=>fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function lI(n){return Qw[n]}function uI(n){return Yw[n]}function cI(n){return Jw[n]}function ss(n){return{fieldPath:n.canonicalString()}}function is(n){return Ye.fromServerFormat(n.fieldPath)}function pm(n){return n instanceof je?function(t){if(t.op==="=="){if(ud(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NAN"}};if(ld(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ud(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NOT_NAN"}};if(ld(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(t.field),op:uI(t.op),value:t.value}}}(n):n instanceof wn?function(t){const r=t.getFilters().map(s=>pm(s));return r.length===1?r[0]:{compositeFilter:{op:cI(t.op),filters:r}}}(n):K()}function hI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Zn{constructor(e,t,r,s,i=Q.min(),a=Q.min(),l=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dI{constructor(e){this.ct=e}}function fI(n){const e=oI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lu(e,e.limit,"L"):e}/**
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
 */class pI{constructor(){this.un=new mI}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(lr.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class mI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Je(Pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Pe.comparator)).toArray()}}/**
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
 */class ks{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ks(0)}static kn(){return new ks(-1)}}/**
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
 */class gI{constructor(){this.changes=new Us(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _I{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&wi(r.mutation,s,Nt.empty(),qe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=br();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=hi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=br();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Un();const a=Ti(),l=function(){return Ti()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof dr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),wi(f.mutation,h,f.mutation.getFieldMask(),qe.now())):a.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return l.set(h,new _I(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ti();let s=new Ve((a,l)=>a-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Nt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(s.get(l.batchId)||ne()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=Xp();f.forEach(y=>{if(!i.has(y)){const w=sm(t.get(y),r.get(y));w!==null&&m.set(y,w),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(br());let l=-1,c=i;return a.next(h=>N.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ne())).next(f=>({batchId:l,changes:Jp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=hi();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const h=function(m,y){return new Va(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let l=hi();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&wi(f.mutation,h,Nt.empty(),qe.now()),Oa(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class yI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:vn(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:fI(s.bundledQuery),readTime:vn(s.readTime)}}(t)),N.resolve()}}/**
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
 */class EI{constructor(){this.overlays=new Ve(z.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=br();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=br(),i=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ve((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return N.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zw(t,r));let i=this.Ir.get(t);i===void 0&&(i=ne(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class TI{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class rc{constructor(){this.Tr=new Je(He.Er),this.dr=new Je(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new He(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new He(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new z(new Pe([])),r=new He(t,e),s=new He(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new z(new Pe([])),r=new He(t,e),s=new He(t,e+1);let i=ne();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new He(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return z.comparator(e.key,t.key)||ue(e.wr,t.wr)}static Ar(e,t){return ue(e.wr,t.wr)||z.comparator(e.key,t.key)}}/**
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
 */class wI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Je(He.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qw(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new He(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new He(t,0),s=new He(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Je(ue);return t.forEach(s=>{const i=new He(s,0),a=new He(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const a=new He(new z(i),0);let l=new Je(ue);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),N.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){_e(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,s=>{const i=new He(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new He(t,0),s=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class II{constructor(e){this.Mr=e,this.docs=function(){return new Ve(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():it.newInvalidDocument(t))}getEntries(e,t){let r=Un();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Un();const a=t.path,l=new z(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||iw(sw(f),r)<=0||(s.has(f.key)||Oa(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new AI(this)}getSize(e){return N.resolve(this.size)}}class AI extends gI{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class RI{constructor(e){this.persistence=e,this.Nr=new Us(t=>Ju(t),Xu),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new rc,this.targetCount=0,this.kr=ks.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ks(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class SI{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ku(0),this.Kr=!1,this.Kr=!0,this.$r=new TI,this.referenceDelegate=e(this),this.Ur=new RI(this),this.indexManager=new pI,this.remoteDocumentCache=function(s){return new II(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new dI(t),this.Gr=new yI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new EI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new wI(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new bI(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class bI extends aw{constructor(e){super(),this.currentSequenceNumber=e}}class sc{constructor(e){this.persistence=e,this.Jr=new rc,this.Yr=null}static Zr(e){return new sc(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const s=z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ic{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ic(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class PI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kv()?8:lw(at())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new PI;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ni()<=se.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",rs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(ni()<=se.DEBUG&&x("QueryEngine","Query:",rs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ni()<=se.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",rs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(t))):N.resolve())}Yi(e,t){if(fd(t))return N.resolve(null);let r=_n(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=lu(t,null,"F"),r=_n(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,lu(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return fd(t)||s.isEqual(Q.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?N.resolve(null):(ni()<=se.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(t)),this.rs(e,a,t,rw(s,-1)).next(l=>l))})}ts(e,t){let r=new Je(Qp(e));return t.forEach((s,i)=>{Oa(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ni()<=se.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",rs(t)),this.Ji.getDocumentsMatchingQuery(e,t,lr.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class kI{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Ve(ue),this._s=new Us(i=>Ju(i),Xu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function VI(n,e,t,r){return new kI(n,e,t,r)}async function gm(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ne();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function DI(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,y=m.keys();let w=N.resolve();return y.forEach(P=>{w=w.next(()=>f.getEntry(c,P)).next(V=>{const A=h.docVersions.get(P);_e(A!==null),V.version.compareTo(A)<0&&(m.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function _m(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function NI(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;l.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,m)));let w=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(Xe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(m,w),function(V,A,O){return V.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(y,w,f)&&l.push(t.Ur.updateTargetData(i,w))});let c=Un(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(OI(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function OI(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Un();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):x("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function MI(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LI(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Zn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function fu(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ji(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ad(n,e,t){const r=Y(n);let s=Q.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=Y(c),y=m._s.get(f);return y!==void 0?N.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,a,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:ne())).next(l=>(xI(r,bw(e),l),{documents:l,Ts:i})))}function xI(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Rd{constructor(){this.activeTargetIds=Nw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FI{constructor(){this.so=new Rd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UI{_o(e){}shutdown(){}}/**
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
 */class Sd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let So=null;function bl(){return So===null?So=function(){return 268435456+Math.round(2147483648*Math.random())}():So++,"0x"+So.toString(16)}/**
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
 */const BI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const rt="WebChannelConnection";class qI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=bl(),c=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(f=>(x("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Ss("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=BI[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=bl();return new Promise((a,l)=>{const c=new Dp;c.setWithCredentials(!0),c.listenOnce(Np.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xo.NO_ERROR:const f=c.getResponseJson();x(rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case xo.TIMEOUT:x(rt,`RPC '${e}' ${i} timed out`),l(new j(D.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const m=c.getStatus();if(x(rt,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const w=y==null?void 0:y.error;if(w&&w.status&&w.message){const P=function(A){const O=A.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN}(w.status);l(new j(P,w.message))}else l(new j(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new j(D.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{x(rt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);x(rt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=bl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Lp(),l=Mp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");x(rt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);let y=!1,w=!1;const P=new jI({Io:A=>{w?x(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(y||(x(rt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),x(rt,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},To:()=>m.close()}),V=(A,O,B)=>{A.listen(O,L=>{try{B(L)}catch(q){setTimeout(()=>{throw q},0)}})};return V(m,ci.EventType.OPEN,()=>{w||(x(rt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),V(m,ci.EventType.CLOSE,()=>{w||(w=!0,x(rt,`RPC '${e}' stream ${s} transport closed`),P.So())}),V(m,ci.EventType.ERROR,A=>{w||(w=!0,Ss(rt,`RPC '${e}' stream ${s} transport errored:`,A),P.So(new j(D.UNAVAILABLE,"The operation could not be completed")))}),V(m,ci.EventType.MESSAGE,A=>{var O;if(!w){const B=A.data[0];_e(!!B);const L=B,q=L.error||((O=L[0])===null||O===void 0?void 0:O.error);if(q){x(rt,`RPC '${e}' stream ${s} received error:`,q);const Z=q.status;let re=function(_){const T=Fe[_];if(T!==void 0)return om(T)}(Z),E=q.message;re===void 0&&(re=D.INTERNAL,E="Unknown error status: "+Z+" with message "+q.message),w=!0,P.So(new j(re,E)),m.close()}else x(rt,`RPC '${e}' stream ${s} received:`,B),P.bo(B)}}),V(l,Op.STAT_EVENT,A=>{A.stat===ru.PROXY?x(rt,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===ru.NOPROXY&&x(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Pl(){return typeof document<"u"?document:null}/**
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
 */function Ua(n){return new Xw(n,!0)}/**
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
 */class vm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ym{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Fn(t.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zI extends ym{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=tI(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?vn(a.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=du(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=au(c)?{documents:sI(i,c)}:{query:iI(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=um(i,a.resumeToken);const h=uu(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=ha(i,a.snapshotVersion.toTimestamp());const h=uu(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=aI(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=du(this.serializer),t.removeTarget=e,this.a_(t)}}class $I extends ym{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=rI(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=du(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>nI(this.serializer,r))};this.a_(t)}}/**
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
 */class HI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,cu(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,cu(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class WI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fn(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class KI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Kr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Y(c);h.L_.add(4),await eo(h),h.q_.set("Unknown"),h.L_.delete(4),await Ba(h)}(this))})}),this.q_=new WI(r,s)}}async function Ba(n){if(Kr(n))for(const e of n.B_)await e(!0)}async function eo(n){for(const e of n.B_)await e(!1)}function Em(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),uc(t)?lc(t):Bs(t).r_()&&ac(t,e))}function oc(n,e){const t=Y(n),r=Bs(t);t.N_.delete(e),r.r_()&&Tm(t,e),t.N_.size===0&&(r.r_()?r.o_():Kr(t)&&t.q_.set("Unknown"))}function ac(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bs(n).A_(e)}function Tm(n,e){n.Q_.xe(e),Bs(n).R_(e)}function lc(n){n.Q_=new Gw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Bs(n).start(),n.q_.v_()}function uc(n){return Kr(n)&&!Bs(n).n_()&&n.N_.size>0}function Kr(n){return Y(n).L_.size===0}function wm(n){n.Q_=void 0}async function GI(n){n.q_.set("Online")}async function QI(n){n.N_.forEach((e,t)=>{ac(n,e)})}async function YI(n,e){wm(n),uc(n)?(n.q_.M_(e),lc(n)):n.q_.set("Unknown")}async function JI(n,e,t){if(n.q_.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(n,r)}else if(e instanceof Bo?n.Q_.Ke(e):e instanceof am?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await _m(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Tm(i,c);const m=new Zn(f.target,c,h,f.sequenceNumber);ac(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await da(n,r)}}async function da(n,e,t){if(!Ji(e))throw e;n.L_.add(1),await eo(n),n.q_.set("Offline"),t||(t=()=>_m(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ba(n)})}function Im(n,e){return e().catch(t=>da(n,t,e))}async function ja(n){const e=Y(n),t=cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;XI(e);)try{const s=await MI(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ZI(e,s)}catch(s){await da(e,s)}Am(e)&&Rm(e)}function XI(n){return Kr(n)&&n.O_.length<10}function ZI(n,e){n.O_.push(e);const t=cr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Am(n){return Kr(n)&&!cr(n).n_()&&n.O_.length>0}function Rm(n){cr(n).start()}async function e0(n){cr(n).p_()}async function t0(n){const e=cr(n);for(const t of n.O_)e.m_(t.mutations)}async function n0(n,e,t){const r=n.O_.shift(),s=ec.from(r,e,t);await Im(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ja(n)}async function r0(n,e){e&&cr(n).V_&&await async function(r,s){if(function(a){return Hw(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();cr(r).s_(),await Im(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ja(r)}}(n,e),Am(n)&&Rm(n)}async function bd(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Kr(t);t.L_.add(3),await eo(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ba(t)}async function s0(n,e){const t=Y(n);e?(t.L_.delete(2),await Ba(t)):e||(t.L_.add(2),await eo(t),t.q_.set("Unknown"))}function Bs(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new zI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:GI.bind(null,n),Ro:QI.bind(null,n),mo:YI.bind(null,n),d_:JI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),uc(n)?lc(n):n.q_.set("Unknown")):(await n.K_.stop(),wm(n))})),n.K_}function cr(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new $I(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:e0.bind(null,n),mo:r0.bind(null,n),f_:t0.bind(null,n),g_:n0.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ja(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class cc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new cc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hc(n,e){if(Fn("AsyncQueue",`${e}: ${n}`),Ji(n))return new j(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class hs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=hi(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Pd{constructor(){this.W_=new Ve(z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Vs{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Vs(e,t,hs.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class i0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class o0{constructor(){this.queries=Cd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=Cd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new j(D.ABORTED,"Firestore shutting down"))}}function Cd(){return new Us(n=>Gp(n),Na)}async function Sm(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new i0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=hc(a,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&dc(t)}async function bm(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function a0(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&dc(t)}function l0(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function dc(n){n.Y_.forEach(e=>{e.next()})}var pu,kd;(kd=pu||(pu={})).ea="default",kd.Cache="cache";class Pm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==pu.Cache}}/**
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
 */class Cm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class u0{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Qp(e),this.Ra=new hs(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Pd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),w=Oa(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),V=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let A=!1;y&&w?y.data.isEqual(w.data)?P!==V&&(r.track({type:3,doc:w}),A=!0):this.ga(y,w)||(r.track({type:2,doc:w}),A=!0,(c&&this.Aa(w,c)>0||h&&this.Aa(w,h)<0)&&(l=!0)):!y&&w?(r.track({type:0,doc:w}),A=!0):y&&!w&&(r.track({type:1,doc:y}),A=!0,(c||h)&&(l=!0)),A&&(w?(a=a.add(w),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(w,P){const V=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return V(w)-V(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new Vs(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new km(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Cm(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Vs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class c0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class h0{constructor(e){this.key=e,this.va=!1}}class d0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Us(l=>Gp(l),Na),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(z.comparator),this.Na=new Map,this.La=new rc,this.Ba={},this.ka=new Map,this.qa=ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function f0(n,e,t=!0){const r=Lm(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Vm(r,e,t,!0),s}async function p0(n,e){const t=Lm(n);await Vm(t,e,!0,!1)}async function Vm(n,e,t,r){const s=await LI(n.localStore,_n(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await m0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Em(n.remoteStore,s),l}async function m0(n,e,t,r,s){n.Ka=(m,y,w)=>async function(V,A,O,B){let L=A.view.ma(O);L.ns&&(L=await Ad(V.localStore,A.query,!1).then(({documents:E})=>A.view.ma(E,L)));const q=B&&B.targetChanges.get(A.targetId),Z=B&&B.targetMismatches.get(A.targetId)!=null,re=A.view.applyChanges(L,V.isPrimaryClient,q,Z);return Dd(V,A.targetId,re.wa),re.snapshot}(n,m,y,w);const i=await Ad(n.localStore,e,!0),a=new u0(e,i.Ts),l=a.ma(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Dd(n,t,h.wa);const f=new c0(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function g0(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Na(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&oc(r.remoteStore,s.targetId),mu(r,s.targetId)}).catch(Yi)):(mu(r,s.targetId),await fu(r.localStore,s.targetId,!0))}async function _0(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),oc(t.remoteStore,r.targetId))}async function v0(n,e,t){const r=R0(n);try{const s=await function(a,l){const c=Y(a),h=qe.now(),f=l.reduce((w,P)=>w.add(P.key),ne());let m,y;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Un(),V=ne();return c.cs.getEntries(w,f).next(A=>{P=A,P.forEach((O,B)=>{B.isValidDocument()||(V=V.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(A=>{m=A;const O=[];for(const B of l){const L=Bw(B,m.get(B.key).overlayedDocument);L!=null&&O.push(new dr(B.key,L,jp(L.value.mapValue),At.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,O,l)}).next(A=>{y=A;const O=A.applyToLocalDocumentSet(m,V);return c.documentOverlayCache.saveOverlays(w,A.batchId,O)})}).then(()=>({batchId:y.batchId,changes:Jp(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Ve(ue)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await to(r,s.changes),await ja(r.remoteStore)}catch(s){const i=hc(s,"Failed to persist write");t.reject(i)}}async function Dm(n,e){const t=Y(n);try{const r=await NI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?_e(a.va):s.removedDocuments.size>0&&(_e(a.va),a.va=!1))}),await to(t,r,e)}catch(r){await Yi(r)}}function Vd(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Y(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&dc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y0(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Ve(z.comparator);a=a.insert(i,it.newNoDocument(i,Q.min()));const l=ne().add(i),c=new Fa(Q.min(),new Map,new Ve(ue),a,l);await Dm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),fc(r)}else await fu(r.localStore,e,!1).then(()=>mu(r,e,t)).catch(Yi)}async function E0(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await DI(t.localStore,e);Om(t,r,null),Nm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await to(t,s)}catch(s){await Yi(s)}}async function T0(n,e,t){const r=Y(n);try{const s=await function(a,l){const c=Y(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(_e(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Om(r,e,t),Nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await to(r,s)}catch(s){await Yi(s)}}function Nm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Om(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function mu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Mm(n,r)})}function Mm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(oc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),fc(n))}function Dd(n,e,t){for(const r of t)r instanceof Cm?(n.La.addReference(r.key,e),w0(n,r)):r instanceof km?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Mm(n,r.key)):K()}function w0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),fc(n))}function fc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new z(Pe.fromString(e)),r=n.qa.next();n.Na.set(r,new h0(t)),n.Oa=n.Oa.insert(t,r),Em(n.remoteStore,new Zn(_n(Da(t.path)),r,"TargetPurposeLimboResolution",Ku.oe))}}async function to(n,e,t){const r=Y(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ic.Wi(c.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=Y(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,y=>N.forEach(y.$i,w=>f.persistence.referenceDelegate.addReference(m,y.targetId,w)).next(()=>N.forEach(y.Ui,w=>f.persistence.referenceDelegate.removeReference(m,y.targetId,w)))))}catch(m){if(!Ji(m))throw m;x("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const w=f.os.get(y),P=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,V)}}}(r.localStore,i))}async function I0(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await gm(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new j(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(t,r.hs)}}function A0(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Lm(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y0.bind(null,e),e.Ca.d_=a0.bind(null,e.eventManager),e.Ca.$a=l0.bind(null,e.eventManager),e}function R0(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T0.bind(null,e),e}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ua(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return VI(this.persistence,new CI,e.initialUser,this.serializer)}Ga(e){return new SI(sc.Zr,this.serializer)}Wa(e){return new FI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class gu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I0.bind(null,this.syncEngine),await s0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new o0}()}createDatastore(e){const t=Ua(e.databaseInfo.databaseId),r=function(i){return new qI(i)}(e.databaseInfo);return function(i,a,l,c){return new HI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new KI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Vd(this.syncEngine,t,0),function(){return Sd.D()?new Sd:new UI}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const m=new d0(s,i,a,l,c,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);x("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await eo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gu.provider={build:()=>new gu};/**
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
 */class xm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class S0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=Fp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=hc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cl(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await b0(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>bd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>bd(e.remoteStore,s)),n._onlineComponents=e}async function b0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ss("Error using user provided cache. Falling back to memory cache: "+t),await Cl(n,new fa)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Cl(n,new fa);return n._offlineComponents}async function Fm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Nd(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Nd(n,new gu))),n._onlineComponents}function P0(n){return Fm(n).then(e=>e.syncEngine)}async function _u(n){const e=await Fm(n),t=e.eventManager;return t.onListen=f0.bind(null,e.syncEngine),t.onUnlisten=g0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=p0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_0.bind(null,e.syncEngine),t}function C0(n,e,t={}){const r=new or;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new xm({next:y=>{f.Za(),a.enqueueAndForget(()=>bm(i,m));const w=y.docs.has(l);!w&&y.fromCache?h.reject(new j(D.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&y.fromCache&&c&&c.source==="server"?h.reject(new j(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Pm(Da(l.path),f,{includeMetadataChanges:!0,_a:!0});return Sm(i,m)}(await _u(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Um(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Od=new Map;/**
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
 */function Bm(n,e,t){if(!t)throw new j(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function k0(n,e,t,r){if(e===!0&&r===!0)throw new j(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Md(n){if(!z.isDocumentKey(n))throw new j(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ld(n){if(z.isDocumentKey(n))throw new j(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function Ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pc(n);throw new j(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class xd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}k0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Um((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GT;switch(r.type){case"firstParty":return new XT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Od.get(t);r&&(x("ComponentProvider","Removing Datastore"),Od.delete(t),r.terminate())}(this),Promise.resolve()}}function V0(n,e,t,r={}){var s;const i=(n=Ht(n,qa))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=st.MOCK_USER;else{l=Iv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new j(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new st(h)}n._authCredentials=new QT(new xp(l,c))}}/**
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
 */class za{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new za(this.firestore,e,this._query)}}class _t{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class ar extends za{constructor(e,t,r){super(e,t,Da(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new z(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function D0(n,e,...t){if(n=ze(n),Bm("collection","path",e),n instanceof qa){const r=Pe.fromString(e,...t);return Ld(r),new ar(n,null,r)}{if(!(n instanceof _t||n instanceof ar))throw new j(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Ld(r),new ar(n.firestore,null,r)}}function pa(n,e,...t){if(n=ze(n),arguments.length===1&&(e=Fp.newId()),Bm("doc","path",e),n instanceof qa){const r=Pe.fromString(e,...t);return Md(r),new _t(n,null,new z(r))}{if(!(n instanceof _t||n instanceof ar))throw new j(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Md(r),new _t(n.firestore,n instanceof ar?n.converter:null,new z(r))}}/**
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
 */class Fd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vm(this,"async_queue_retry"),this.Vu=()=>{const r=Pl();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Pl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Pl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ji(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=cc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Ud(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class hr extends qa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Fd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fd(e),this._firestoreClient=void 0,await e}}}function N0(n,e){const t=typeof n=="object"?n:Qf(),r=typeof n=="string"?n:"(default)",s=Ou(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tv("firestore");i&&V0(s,...i)}return s}function $a(n){if(n._terminated)throw new j(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||O0(n),n._firestoreClient}function O0(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new hw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Um(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new S0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ds(Xe.fromBase64String(e))}catch(t){throw new j(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ds(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class no{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mc{constructor(e){this._methodName=e}}/**
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
 */class gc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _c{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const M0=/^__.*__$/;class L0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xi(e,this.data,t,this.fieldTransforms)}}class jm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new dr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class vc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ma(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(qm(this.Cu)&&M0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class x0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ua(e)}Qu(e,t,r,s=!1){return new vc({Cu:e,methodName:t,qu:r,path:Ye.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yc(n){const e=n._freezeSettings(),t=Ua(n._databaseId);return new x0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zm(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ec("Data must be an object, but it was:",a,r);const l=Wm(r,a);let c,h;if(i.merge)c=new Nt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=vu(e,m,t);if(!a.contains(y))throw new j(D.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Gm(f,y)||f.push(y)}c=new Nt(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new L0(new wt(l),c,h)}class Ha extends mc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}function $m(n,e,t,r){const s=n.Qu(1,e,t);Ec("Data must be an object, but it was:",s,r);const i=[],a=wt.empty();Wr(r,(c,h)=>{const f=Tc(e,c,t);h=ze(h);const m=s.Nu(f);if(h instanceof Ha)i.push(f);else{const y=Wa(h,m);y!=null&&(i.push(f),a.set(f,y))}});const l=new Nt(i);return new jm(a,l,s.fieldTransforms)}function Hm(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[vu(e,r,t)],c=[s];if(i.length%2!=0)throw new j(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(vu(e,i[y])),c.push(i[y+1]);const h=[],f=wt.empty();for(let y=l.length-1;y>=0;--y)if(!Gm(h,l[y])){const w=l[y];let P=c[y];P=ze(P);const V=a.Nu(w);if(P instanceof Ha)h.push(w);else{const A=Wa(P,V);A!=null&&(h.push(w),f.set(w,A))}}const m=new Nt(h);return new jm(f,m,a.fieldTransforms)}function Wa(n,e){if(Km(n=ze(n)))return Ec("Unsupported field value:",e,n),Wm(n,e);if(n instanceof mc)return function(r,s){if(!qm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Wa(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ow(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof gc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ds)return{bytesValue:um(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _c)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Zu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pc(r)}`)}(n,e)}function Wm(n,e){const t={};return Up(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(n,(r,s)=>{const i=Wa(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Km(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof qe||n instanceof gc||n instanceof Ds||n instanceof _t||n instanceof mc||n instanceof _c)}function Ec(n,e,t){if(!Km(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=pc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function vu(n,e,t){if((e=ze(e))instanceof no)return e._internalPath;if(typeof e=="string")return Tc(n,e);throw ma("Field path arguments must be of type string or ",n,!1,void 0,t)}const F0=new RegExp("[~\\*/\\[\\]]");function Tc(n,e,t){if(e.search(F0)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new no(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ma(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new j(D.INVALID_ARGUMENT,l+n+c)}function Gm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Qm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ym("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class U0 extends Qm{data(){return super.data()}}function Ym(n,e){return typeof e=="string"?Tc(n,e):e instanceof no?e._internalPath:e._delegate._internalPath}/**
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
 */function B0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class j0{convertValue(e,t="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Oe(a.doubleValue));return new _c(i)}convertGeoPoint(e){return new gc(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Qu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const t=ur(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);_e(mm(r));const s=new Vi(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Jm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class fi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xm extends Qm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class jo extends Xm{data(e={}){return super.data(e)}}class q0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new jo(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:z0(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function z0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function Zm(n){n=Ht(n,_t);const e=Ht(n.firestore,hr);return C0($a(e),n._key).then(t=>tg(e,n,t))}class eg extends j0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ds(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function HA(n,e,t){n=Ht(n,_t);const r=Ht(n.firestore,hr),s=Jm(n.converter,e,t);return Ka(r,[zm(yc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,At.none())])}function WA(n,e,t,...r){n=Ht(n,_t);const s=Ht(n.firestore,hr),i=yc(s);let a;return a=typeof(e=ze(e))=="string"||e instanceof no?Hm(i,"updateDoc",n._key,e,t,r):$m(i,"updateDoc",n._key,e),Ka(s,[a.toMutation(n._key,At.exists(!0))])}function KA(n){return Ka(Ht(n.firestore,hr),[new xa(n._key,At.none())])}function kl(n,...e){var t,r,s;n=ze(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ud(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ud(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,h,f;if(n instanceof _t)h=Ht(n.firestore,hr),f=Da(n._key.path),c={next:m=>{e[a]&&e[a](tg(h,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Ht(n,za);h=Ht(m.firestore,hr),f=m._query;const y=new eg(h);c={next:w=>{e[a]&&e[a](new q0(h,y,m,w))},error:e[a+1],complete:e[a+2]},B0(n._query)}return function(y,w,P,V){const A=new xm(V),O=new Pm(w,A,P);return y.asyncQueue.enqueueAndForget(async()=>Sm(await _u(y),O)),()=>{A.Za(),y.asyncQueue.enqueueAndForget(async()=>bm(await _u(y),O))}}($a(h),f,l,c)}function Ka(n,e){return function(r,s){const i=new or;return r.asyncQueue.enqueueAndForget(async()=>v0(await P0(r),s,i)),i.promise}($a(n),e)}function tg(n,e,t){const r=t.docs.get(e._key),s=new eg(n);return new Xm(n,s,e._key,r,new fi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class $0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=yc(e)}set(e,t,r){this._verifyNotCommitted();const s=Vl(e,this._firestore),i=Jm(s.converter,t,r),a=zm(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,At.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Vl(e,this._firestore);let a;return a=typeof(t=ze(t))=="string"||t instanceof no?Hm(this._dataReader,"WriteBatch.update",i._key,t,r,s):$m(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,At.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Vl(e,this._firestore);return this._mutations=this._mutations.concat(new xa(t._key,At.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vl(n,e){if((n=ze(n)).firestore!==e)throw new j(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function GA(n){return $a(n=Ht(n,hr)),new $0(n,e=>Ka(n,e))}(function(e,t=!0){(function(s){Fs=s})(Ls),As(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new hr(new YT(r.getProvider("auth-internal")),new ew(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),sr(rd,"4.7.3",e),sr(rd,"4.7.3","esm2017")})();const H0={apiKey:"AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI",authDomain:"quiz-samarbeid.firebaseapp.com",projectId:"quiz-samarbeid",storageBucket:"quiz-samarbeid.firebasestorage.app",messagingSenderId:"968266660672",appId:"1:968266660672:web:e86724467bb2b398edd8a5"},ng=Gf(H0),ga=$T(ng);ga.languageCode="no";const Ii=N0(ng);async function QA(){try{await XE(ga,new hn)}catch(n){if(n.code==="auth/popup-blocked")await sT(ga,new hn);else throw n}}const YA=()=>DE(ga);async function JA(n){if(!n||!n.email)return!1;try{return(await Zm(pa(Ii,"etneTilgang",n.email.toLowerCase()))).exists()}catch{return!1}}const XA=n=>({"permission-denied":"du har ikkje lov til dette",unavailable:"ingen kontakt med tenaren","auth/popup-closed-by-user":"innlogginga vart avbroten"})[n&&n.code]||n&&n.message||"ukjend feil",qo=new Map;function W0(n){return n?(qo.has(n)||qo.set(n,Zm(pa(Ii,"etneBilete",n)).then(e=>e.exists()?e.data().data:null).catch(()=>null)),qo.get(n)):Promise.resolve(null)}const ZA=(n,e)=>qo.set(n,Promise.resolve(e)),K0=n=>{const e=parseFloat(String(n??"").replace(",","."));return isNaN(e)?0:e},Dl=n=>(Math.round((Number(n)||0)*10)/10).toLocaleString("nb-NO"),eR=(n="")=>n+Date.now().toString(36)+Math.random().toString(36).slice(2,6),Bd={tittel:"Julequiz",undertittel:"Etnequizen",premietekst:"",pausetekst:"Pause",kategoriar:[],plan:[]};function G0(n){const e=new Map;let t=0;return((n==null?void 0:n.kategoriar)||[]).forEach(r=>e.set(r.id,{...r,nr:r.utanNummer?null:++t})),e}function Q0(n){const e=(n==null?void 0:n.plan)||[],t={},r={};return e.forEach(s=>{s.type==="sporsmal"&&s.nummerert!==!1&&(t[s.kat]=(t[s.kat]||0)+1)}),e.map(s=>s.type!=="sporsmal"||s.nummerert===!1?{...s}:(r[s.kat]=(r[s.kat]||0)+1,{...s,qNr:r[s.kat],qTot:t[s.kat]}))}function jd(n,e,t){const r=((n==null?void 0:n.kategoriar)||[]).find(l=>l.id===t);if(r&&r.fasitliste&&r.fasitliste.length)return r.fasitliste;const s=e.filter(l=>l.type==="sporsmal"&&l.kat===t),i=s.filter(l=>l.nummerert!==!1);if(i.length)return i.map(l=>l.svar||"");const a=s.map(l=>l.svar||"").filter(Boolean);return a.length===1?a[0].split(/\s+·\s+/):a}function Y0(n,e){const t=n.poeng||{};return((e==null?void 0:e.kategoriar)||[]).reduce((r,s)=>r+K0(t[s.id])*(n.joker===s.id?2:1),0)}function J0(n,e){const t=(n||[]).filter(r=>(r.namn||"").trim()).map(r=>({...r,sum:Y0(r,e)}));return t.sort((r,s)=>s.sum-r.sum||r.bord-s.bord),t.forEach(r=>{r.rank=t.filter(s=>s.sum>r.sum).length+1}),t}function tR(n){const e=[0];let t=0;for(;t<n;){const r=n-t;t+=r>10?Math.min(5,r-10):1,e.push(t)}return e}function nR(n,e){const t=e.get(n.kat);switch(n.type){case"tittel":return"Tittel: "+(n.tittel||"");case"pause":return"Pause"+(n.tittel?": "+n.tittel:"");case"poengtavle":return"Poengtavle";case"kategori":return t?t.nr?`Kategori ${t.nr} · ${t.namn}`:t.namn:"Kategori (vel)";case"fasit":return"Fasit · "+(Array.isArray(n.kat)?n.kat:[n.kat]).map(r=>{const s=e.get(r);return s?s.nr||s.namn:"?"}).join(" og ");case"sporsmal":return(n.qNr?`${(t==null?void 0:t.nr)??""}.${n.qNr} `:"")+(n.tekst||"(tomt spørsmål)");default:return n.type}}const yr=Ir({quiz:null,state:{steg:0,modus:"plan",avslort:0,sist:0},lag:[],klar:!1,feil:""});let Ai=[];function rR(){X0(),Ai.push(kl(pa(Ii,"etne","quiz"),n=>{yr.quiz=n.exists()?{...Bd,...n.data()}:{...Bd},yr.klar=!0},n=>yr.feil=n.message)),Ai.push(kl(pa(Ii,"etne","state"),n=>{yr.state={steg:0,modus:"plan",avslort:0,sist:0,...n.exists()?n.data():{}}},n=>yr.feil=n.message)),Ai.push(kl(D0(Ii,"etneLag"),n=>{yr.lag=n.docs.map(e=>({id:e.id,...e.data()}))},n=>yr.feil=n.message))}function X0(){Ai.forEach(n=>n()),Ai=[]}var Z0=$_('<g class="bulb"><rect y="33" width="8" height="8" rx="2" fill="#3B4A3F"></rect><ellipse cy="51" rx="9" ry="13"></ellipse><ellipse cy="46" rx="2.5" ry="4" fill="#fff" opacity=".55"></ellipse></g>'),eA=we('<div class="stage-boks svelte-l02h"><div class="stage"><div class="snow"></div><div class="snow s2"></div> <svg class="lights" viewBox="0 0 1600 74" aria-hidden="true"><path fill="none" stroke="#2C3B31" stroke-width="3"></path><!></svg> <svg class="kvist" style="right:-20px;bottom:-24px" width="260" height="200" viewBox="0 0 260 200" aria-hidden="true"><g fill="#24533F"><path d="M260 200 C200 150 150 130 60 120 C130 110 190 120 260 160Z"></path><path d="M260 200 C220 120 200 80 150 20 C210 60 240 110 260 150Z"></path></g><g fill="#C8323A"><circle cx="150" cy="140" r="14"></circle><circle cx="174" cy="150" r="14"></circle><circle cx="160" cy="164" r="14"></circle></g><g fill="#fff" opacity=".35"><circle cx="146" cy="135" r="4"></circle><circle cx="170" cy="145" r="4"></circle><circle cx="156" cy="159" r="4"></circle></g></svg> <!></div></div>');function sR(n,e){Tu(e,!0);let t=qt(void 0),r=qt(1600),s=qt(900);const i=xe(()=>Math.min(C(r)/1600,C(s)/900)||.01),a=["#C8323A","#E8B84A","#F7F1E3","#3FA06E"],l=Array.from({length:20},(V,A)=>({x:A*80+40,c:a[A%4],d:(A*.37%3.2).toFixed(2)})),c="M0 18"+Array.from({length:21},(V,A)=>` Q ${A*80-40} 46 ${A*80} 18`).join("");var h=eA(),f=Ae(h),m=le(Ae(f),3),y=Ae(m),w=le(y);li(w,17,()=>l,Do,(V,A)=>{var O=Z0(),B=Ae(O),L=le(B),q=le(L);ke(()=>{Jo(O,`animation-delay:${C(A).d??""}s`),ns(B,"x",C(A).x-4),ns(L,"cx",C(A).x),ns(L,"fill",C(A).c),ns(q,"cx",C(A).x-3)}),fe(V,O)});var P=le(m,4);rv(P,()=>e.children??Qd),hv(h,V=>Dt(t,V),()=>C(t)),ke(()=>{Jo(f,`transform: translate(${(C(r)-1600*C(i))/2}px, ${(C(s)-900*C(i))/2}px) scale(${C(i)??""})`),ns(y,"d",c)}),Ph(h,"clientWidth",V=>Dt(r,V)),Ph(h,"clientHeight",V=>Dt(s,V)),fe(n,h),wu()}var tA=we('<div class="slide s-mid s-tittel"><span class="over"> </span><h1 class="stor"> </h1><span class="under"> </span></div>'),nA=we('<div class="slide s-mid"><h1 class="stor" style="font-size:120px">Poengtavle</h1><span class="under">Ingen lag med poeng enno</span></div>'),rA=we('<div><span class="r"> </span><span class="n"> </span><span class="p"> </span></div>'),sA=we('<div class="t-rad skjult"><span class="r"> </span><span class="n"> </span><span class="p"></span></div>'),iA=we('<div class="vinnar"><span class="o"> </span><span class="lag"> </span><span class="p"> </span></div>'),oA=we('<div class="slide" style="gap:20px"><div class="top"><h1 class="stor" style="font-size:60px"> </h1><span class="meta"> </span></div> <div></div></div> <!>',1),aA=we('<div class="slide s-mid s-tittel"><h1 class="stor"> </h1><span class="under">Køyreplanen er tom</span></div>'),lA=we('<span class="under" style="white-space:pre-line"> </span>'),uA=we('<div class="slide s-mid s-tittel"><span class="over"> </span><h1 class="stor"> </h1><!></div>'),cA=we('<span class="pill"> </span>'),hA=we('<span class="pill gull">Ekstra</span>'),dA=we('<span class="under"> </span>'),fA=we('<div class="slide s-mid s-kat"><!> <h1 class="stor"> </h1> <!></div>'),pA=we('<span class="pill"> </span><span class="katnamn"> </span>',1),mA=we('<span class="pill gull"> </span>'),gA=we("<i></i>"),_A=we('<div class="meta"> <span class="dots"></span></div>'),vA=we('<div class="q-num"> </div>'),yA=we("<div></div>"),EA=we('<img class="q-bilete" alt=""/>'),TA=we('<div class="q-bilete tom"></div>'),wA=we('<div class="slide"><div class="top"><div style="display:flex;align-items:center;gap:16px"><!></div> <!></div> <div><!> <p> </p> <!></div> <div class="foot"><span class="merke"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"></path></svg> </span><span> </span></div></div>'),IA=we("<li><b></b><span> </span></li>"),AA=we("<section><h2> </h2> <ol></ol></section>"),RA=we('<div class="slide"><div class="top"><div style="display:flex;align-items:center;gap:16px"><span class="pill gull">Fasit</span><span class="katnamn"> </span></div> <span class="meta">Byt ark med nabobordet og rett</span></div> <div class="f-grid"></div></div>'),SA=we('<div class="slide-host svelte-1lf38ho"><!></div>');function iR(n,e){Tu(e,!0);let t=ti(e,"steg",3,0),r=ti(e,"modus",3,"plan"),s=ti(e,"lag",19,()=>[]),i=ti(e,"avslort",3,0),a=ti(e,"sist",3,0);const l=xe(()=>Q0(e.quiz)),c=xe(()=>G0(e.quiz)),h=xe(()=>C(l)[t()]),f=xe(()=>{var U;return r()==="poengtavle"||r()==="avsloring"||r()==="plan"&&((U=C(h))==null?void 0:U.type)==="poengtavle"}),m=xe(()=>r()==="avsloring"),y=xe(()=>C(f)?J0(s(),e.quiz):[]);let w=qt(null);D_(()=>{var F;const U=(F=C(h))==null?void 0:F.bilete;Dt(w,null),U&&W0(U).then(J=>{var ve;((ve=C(h))==null?void 0:ve.bilete)===U&&Dt(w,J,!0)})});const P=xe(()=>{var U;return(U=C(h))!=null&&U.kat&&!Array.isArray(C(h).kat)?C(c).get(C(h).kat):null}),V=xe(()=>{var U,F;return(((U=C(h))==null?void 0:U.tekst)||"").length>210?"svaert":(((F=C(h))==null?void 0:F.tekst)||"").length>130?"lang":""}),A=xe(()=>{var F,J;if(((F=C(h))==null?void 0:F.type)!=="kategori")return"";const U=C(l).filter(ve=>ve.type==="sporsmal"&&ve.kat===C(h).kat&&ve.nummerert!==!1).length;return[U?`${U} spørsmål`:"",(J=C(P))!=null&&J.maks?`opptil ${Dl(C(P).maks)} poeng`:""].filter(Boolean).join(" · ")}),O=xe(()=>{var J,ve;if(((J=C(h))==null?void 0:J.type)!=="fasit")return[];const U=(((ve=e.quiz)==null?void 0:ve.kategoriar)||[]).map(ye=>ye.id),F=ye=>{const X=U.indexOf(ye);return X<0?999:X};return[...Array.isArray(C(h).kat)?C(h).kat:[C(h).kat]].filter(Boolean).sort((ye,X)=>F(ye)-F(X))}),B=xe(()=>{const U=C(O).map(F=>C(c).get(F)).filter(Boolean);return U.length>1&&U.every(F=>F.nr)?"Kategori "+U.map(F=>F.nr).sort((F,J)=>F-J).join(" og "):U.map(F=>F.namn).join(" og ")||"Fasit"}),L=xe(()=>{const U=[0,70,34,21][Math.min(C(O).length,3)]||21;return C(O).some(F=>jd(e.quiz,C(l),F).reduce((J,ve)=>J+Math.max(1,Math.ceil((ve||"").length/U)),0)>11)}),q=xe(()=>C(y).length),Z=xe(()=>C(q)<=12?2:C(q)<=30?3:C(q)<=40?4:5),re=xe(()=>Math.max(1,Math.ceil(C(q)/C(Z)))),E=xe(()=>C(m)?Math.min(i(),C(q)):C(q)),g=xe(()=>{var J;if(!C(m))return"Poengtavle";if(C(E)===0)return"Sluttresultat";if(C(E)>=C(q))return"Vinnaren!";const U=C(y)[C(q)-C(E)].rank,F=(J=C(y)[C(q)-Math.max(a(),0)-1])==null?void 0:J.rank;return C(E)-a()>1&&F!==U?`Plass ${U} til ${F}`:`Plass ${U}`});var _=SA(),T=Ae(_);{var I=U=>{var F=tA(),J=Ae(F),ve=ge(J,!0),ye=le(J),X=ge(ye,!0),We=le(ye),Le=ge(We,!0);ke(()=>{de(ve,e.quiz.undertittel||"Etnequizen"),de(X,e.quiz.pausetekst||"Pause"),de(Le,e.quiz.tittel)}),fe(U,F)},b=U=>{var F=_l(),J=Zs(F);{var ve=X=>{var We=nA();fe(X,We)},ye=X=>{var We=oA(),Le=Zs(We),Ze=Ae(Le),pe=Ae(Ze),Ce=ge(pe,!0),Rt=le(pe),Gt=ge(Rt),Ot=le(Ze,2);let Mt;li(Ot,23,()=>C(y),lt=>lt.id,(lt,ut,ct)=>{const on=xe(()=>C(q)-C(ct));var Lt=_l(),An=Zs(Lt);{var Ee=me=>{var $e=rA();let et;var he=Ae($e),Ie=ge(he),xt=le(he),fr=ge(xt,!0),ro=le(xt),Ga=ge(ro,!0);ke(pr=>{et=es($e,1,"t-rad",null,et,{ny:C(m)&&C(on)>a(),topp:C(ut).rank<=3}),de(Ie,`${C(ut).rank??""}.`),de(fr,C(ut).namn),de(Ga,pr)},[()=>Dl(C(ut).sum)]),fe(me,$e)},Se=me=>{var $e=sA(),et=Ae($e),he=ge(et),Ie=le(et),xt=ge(Ie,!0);ke(()=>{de(he,`${C(ct)+1}.`),de(xt,C(ct)<3?"Topp 3":C(ct)<10?"Topp 10":"?")}),fe(me,$e)};Ft(An,me=>{C(on)<=C(E)?me(Ee):me(Se,-1)})}fe(lt,Lt)});var yt=le(Le,2);{var In=lt=>{var ut=iA(),ct=Ae(ut),on=ge(ct),Lt=le(ct),An=ge(Lt,!0),Ee=le(Lt),Se=ge(Ee);ke((me,$e,et)=>{de(on,`${me??""} ${(e.quiz.tittel||"quizen")??""}`),de(An,$e),de(Se,`${et??""} poeng`)},[()=>C(y).filter(me=>me.rank===1).length>1?"Delt vinnar av":"Vinnar av",()=>C(y).filter(me=>me.rank===1).map(me=>me.namn).join(" og "),()=>Dl(C(y)[0].sum)]),fe(lt,ut)};Ft(yt,lt=>{C(m)&&C(E)>=C(q)&&lt(In)})}ke(()=>{de(Ce,C(g)),de(Gt,`${C(m)&&C(E)<C(q)?`${C(q)-C(E)} plassar att`:`${C(q)} lag`}${e.quiz.premietekst?" · "+e.quiz.premietekst:""}`),Mt=es(Ot,1,"t-grid",null,Mt,{tett:C(Z)>=4}),Jo(Ot,`grid-template-columns:repeat(${C(Z)??""},minmax(0,1fr));grid-template-rows:repeat(${C(re)??""},minmax(0,1fr))`)}),fe(X,We)};Ft(J,X=>{C(q)?X(ye,-1):X(ve)})}fe(U,F)},v=U=>{var F=aA(),J=Ae(F),ve=ge(J,!0);ke(()=>de(ve,e.quiz.tittel||"Etnequizen")),fe(U,F)},vt=U=>{var F=uA(),J=Ae(F),ve=ge(J,!0),ye=le(J),X=ge(ye,!0),We=le(ye);{var Le=Ze=>{var pe=lA(),Ce=ge(pe,!0);ke(()=>de(Ce,C(h).tekst)),fe(Ze,pe)};Ft(We,Ze=>{C(h).tekst&&Ze(Le)})}ke(()=>{de(ve,C(h).undertittel||e.quiz.undertittel||"Etnequizen"),de(X,C(h).tittel||(C(h).type==="pause"?"Pause":e.quiz.tittel))}),fe(U,F)},rn=U=>{var F=fA(),J=Ae(F);{var ve=pe=>{var Ce=cA(),Rt=ge(Ce);ke(()=>de(Rt,`Kategori ${C(P).nr??""}`)),fe(pe,Ce)},ye=pe=>{var Ce=hA();fe(pe,Ce)};Ft(J,pe=>{var Ce;(Ce=C(P))!=null&&Ce.nr?pe(ve):pe(ye,-1)})}var X=le(J,2),We=ge(X,!0),Le=le(X,2);{var Ze=pe=>{var Ce=dA(),Rt=ge(Ce,!0);ke(()=>de(Rt,C(A))),fe(pe,Ce)};Ft(Le,pe=>{C(A)&&pe(Ze)})}ke(()=>{var pe;return de(We,((pe=C(P))==null?void 0:pe.namn)??"?")}),fe(U,F)},Gr=U=>{var F=wA(),J=Ae(F),ve=Ae(J),ye=Ae(ve);{var X=Ee=>{var Se=pA(),me=Zs(Se),$e=ge(me),et=le(me),he=ge(et,!0);ke(()=>{de($e,`Kategori ${C(P).nr??""}`),de(he,C(P).namn)}),fe(Ee,Se)},We=Ee=>{var Se=mA(),me=ge(Se,!0);ke(()=>de(me,C(P).namn)),fe(Ee,Se)};Ft(ye,Ee=>{var Se;(Se=C(P))!=null&&Se.nr?Ee(X):C(P)&&Ee(We,1)})}var Le=le(ve,2);{var Ze=Ee=>{var Se=_A(),me=Ae(Se),$e=le(me);li($e,21,()=>Array(C(h).qTot),Do,(et,he,Ie)=>{var xt=gA();let fr;ke(()=>fr=es(xt,1,"",null,fr,{on:Ie<C(h).qNr})),fe(et,xt)}),ke(()=>de(me,`Spørsmål ${C(h).qNr??""} av ${C(h).qTot??""}`)),fe(Ee,Se)};Ft(Le,Ee=>{C(h).qNr&&Ee(Ze)})}var pe=le(J,2);let Ce;var Rt=Ae(pe);{var Gt=Ee=>{var Se=vA(),me=ge(Se,!0);ke(()=>de(me,C(h).qNr)),fe(Ee,Se)},Ot=Ee=>{var Se=yA();fe(Ee,Se)};Ft(Rt,Ee=>{C(h).qNr?Ee(Gt):Ee(Ot,-1)})}var Mt=le(Rt,2),yt=ge(Mt,!0),In=le(Mt,2);{var lt=Ee=>{var Se=_l(),me=Zs(Se);{var $e=he=>{var Ie=EA();ke(()=>ns(Ie,"src",C(w))),fe(he,Ie)},et=he=>{var Ie=TA();fe(he,Ie)};Ft(me,he=>{C(w)?he($e):he(et,-1)})}fe(Ee,Se)};Ft(In,Ee=>{C(h).bilete&&Ee(lt)})}var ut=le(pe,2),ct=Ae(ut),on=le(Ae(ct)),Lt=le(ct),An=ge(Lt,!0);ke(()=>{Ce=es(pe,1,"q-body",null,Ce,{"med-bilete":!!C(h).bilete}),es(Mt,1,`q-tekst ${C(V)??""}`,"svelte-1lf38ho"),de(yt,C(h).tekst),de(on,`${(e.quiz.undertittel||"Etnequizen")??""} · ${e.quiz.tittel??""}`),de(An,e.quiz.premietekst||"")}),fe(U,F)},sn=U=>{var F=RA(),J=Ae(F),ve=Ae(J),ye=le(Ae(ve)),X=ge(ye,!0),We=le(J,2);li(We,21,()=>C(O),Do,(Le,Ze)=>{const pe=xe(()=>jd(e.quiz,C(l),C(Ze)));var Ce=AA();let Rt;var Gt=Ae(Ce),Ot=ge(Gt,!0),Mt=le(Gt,2);li(Mt,21,()=>C(pe),Do,(yt,In,lt)=>{var ut=IA(),ct=Ae(ut);ct.textContent=lt+1;var on=le(ct),Lt=ge(on,!0);ke(()=>de(Lt,C(In))),fe(yt,ut)}),ke(yt=>{Rt=es(Ce,1,"f-kort",null,Rt,{tett:C(L)}),de(Ot,yt)},[()=>{var yt;return((yt=C(c).get(C(Ze)))==null?void 0:yt.namn)??C(Ze)}]),fe(Le,Ce)}),ke(Le=>{de(X,C(B)),Jo(We,`grid-template-columns:repeat(${Le??""},minmax(0,1fr))`)},[()=>Math.min(C(O).length,3)]),fe(U,F)};Ft(T,U=>{r()==="pause"?U(I):C(f)?U(b,1):C(h)?C(h).type==="tittel"||C(h).type==="pause"?U(vt,3):C(h).type==="kategori"?U(rn,4):C(h).type==="sporsmal"?U(Gr,5):C(h).type==="fasit"&&U(sn,6):U(v,2)})}fe(n,_),wu()}export{Th as $,XA as A,Ff as B,yr as C,xA as D,Tu as E,D_ as F,C as G,MA as H,le as I,Ae as J,li as K,hv as L,Ft as M,iR as N,ke as O,nR as P,de as Q,ns as R,sR as S,LA as T,Ue as U,fe as V,wu as W,xe as X,qt as Y,Do as Z,ge as _,PA as a,_l as a0,Zs as a1,we as a2,tR as a3,Q0 as a4,G0 as a5,J0 as a6,es as a7,Dt as a8,jd as a9,GA as aa,K0 as ab,Dl as ac,UA as ad,Y0 as ae,KA as af,WA as ag,CA as ah,BA as ai,eR as aj,ZA as ak,W0 as al,jA as am,X0 as an,JA as ao,rR as ap,ga as aq,YA as ar,QA as as,FA as at,Aa as b,ws as c,H as d,Fr as e,mi as f,Gd as g,w_ as h,Wd as i,g_ as j,VA as k,NA as l,DA as m,If as n,Dg as o,OA as p,kn as q,Ra as r,Ur as s,Tf as t,Ko as u,Af as v,Ir as w,HA as x,pa as y,Ii as z};
