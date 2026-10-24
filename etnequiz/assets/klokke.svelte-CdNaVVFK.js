var Qm=Object.defineProperty;var Cc=n=>{throw TypeError(n)};var Ym=(n,e,t)=>e in n?Qm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Je=(n,e,t)=>Ym(n,typeof e!="symbol"?e+"":e,t),Aa=(n,e,t)=>e.has(n)||Cc("Cannot "+t);var R=(n,e,t)=>(Aa(n,e,"read from private field"),t?t.call(n):e.get(n)),W=(n,e,t)=>e.has(n)?Cc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),$=(n,e,t,r)=>(Aa(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),K=(n,e,t)=>(Aa(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const rf=!1;var sf=Array.isArray,Jm=Array.prototype.indexOf,no=Array.prototype.includes,ko=Array.from,of=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,Xm=Object.getOwnPropertyDescriptors,Zm=Object.prototype,eg=Array.prototype,af=Object.getPrototypeOf,kc=Object.isExtensible;const tg=()=>{};function vA(n){return typeof(n==null?void 0:n.then)=="function"}function ng(n){for(var e=0;e<n.length;e++)n[e]()}function uf(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}function EA(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const Me=2,kr=4,Vo=8,lf=1<<24,_t=16,ht=32,Gt=64,qa=128,ku=256,Et=512,_e=1024,pe=2048,lt=4096,je=8192,He=16384,$r=32768,$a=1<<25,Vr=65536,ro=1<<17,rg=1<<18,zr=1<<19,sg=1<<20,Pt=1<<25,so=1<<21,yr=1<<22,yn=1<<23,Ss=Symbol("$state"),cf=Symbol("component"),TA=Symbol("legacy props"),ig=Symbol(""),ji=Symbol("attributes"),za=Symbol("class"),Ha=Symbol("style"),ms=Symbol("text"),qi=Symbol("form reset"),Js=new class extends Error{constructor(){super(...arguments);Je(this,"name","StaleReactionError");Je(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ef;const og=!!((ef=globalThis.document)!=null&&ef.contentType)&&globalThis.document.contentType.includes("xml"),ag=1,ug=2,hf=4,lg=8,cg=16,IA=1,AA=4,RA=8,SA=16,hg=1,fg=2,ge=Symbol("uninitialized"),ff="http://www.w3.org/1999/xhtml",PA="http://www.w3.org/2000/svg",bA="http://www.w3.org/1998/Math/MathML";function dg(){console.warn("https://svelte.dev/e/derived_inert")}function CA(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function pg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function df(n){return n===this.v}function mg(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function pf(n){return!mg(n,this.v)}function gg(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function _g(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function yg(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vg(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Eg(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Tg(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function kA(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function wg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ig(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ag(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Rg(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Sg=!1,We=null;function Dr(n){We=n}function Pg(n,e=!1,t){We={p:We,i:!1,c:null,e:null,s:n,x:null,r:ne,l:null}}function bg(n){var e=We,t=e.e;if(t!==null){e.e=null;for(var r of t)Of(r)}return e.i=!0,We=e.p,mf(n)}function mf(n={}){return of(n,cf,{value:!0}),n}function gf(){return!0}let Un=[];function _f(){var n=Un;Un=[],ng(n)}function qt(n){if(Un.length===0&&!bs){var e=Un;queueMicrotask(()=>{e===Un&&_f()})}Un.push(n)}function Cg(){for(;Un.length>0;)_f()}const kg=-7169;function fe(n,e){n.f=n.f&kg|e}function Vu(n){n.f&Et||n.deps===null?fe(n,_e):fe(n,lt)}function yf(n,e,t){n.f&pe?e.add(n):n.f&lt&&t.add(n),fe(n,_e)}let Vc=!1;function Vg(){Vc||(Vc=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[qi])==null||e.call(t)})},{capture:!0}))}function Hr(n){var e=G,t=ne;ft(null),Nt(null);try{return n()}finally{ft(e),Nt(t)}}function VA(n,e,t,r=t){n.addEventListener(e,()=>Hr(t));const s=n[qi];s?n[qi]=()=>{s(),r(!0)}:n[qi]=()=>r(!0),Vg()}function Dg(n,e,t,r){const s=Du;var i=n.filter(w=>!w.settled),a=e.map(s);if(t.length===0&&i.length===0){r(a);return}var u=ne,c=Ng(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(w=>w.promise)):null;function d(w){if(!(u.f&He)){c();try{r([...a,...w])}catch(b){Rt(b,u)}io()}}var m=vf();if(t.length===0){f.then(()=>d([])).finally(m);return}function v(){Promise.all(t.map(w=>Og(w))).then(d).catch(w=>Rt(w,u)).finally(m)}f?f.then(()=>{c(),v(),io()}):v()}function Ng(){var n=ne,e=G,t=We,r=B;return function(i=!0){Nt(n),ft(e),Dr(t),i&&!(n.f&He)&&(r==null||r.activate(),r==null||r.apply())}}function io(n=!0){Nt(null),ft(null),Dr(null),n&&(B==null||B.deactivate())}function vf(){var n=ne,e=n.b,t=B,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Du(n){var e=Me|pe;return ne!==null&&(ne.f|=zr),{ctx:We,deps:null,effects:null,equals:df,f:e,fn:n,reactions:null,rv:0,v:ge,wv:0,parent:ne,ac:null}}const gs=Symbol("obsolete");function Og(n,e,t){let r=ne;r===null&&gg();var s=void 0,i=Zn(ge),a=!G,u=new Set;return Jg(()=>{var w,b;var c=ne,f=uf();s=f.promise;try{Promise.resolve(n()).then(f.resolve,k=>{k!==Js&&f.reject(k)}).finally(io)}catch(k){f.reject(k),io()}var d=B;if(a){if(c.f&$r)var m=vf();if((w=r.b)!=null&&w.is_rendered())(b=d.async_deriveds.get(c))==null||b.reject(gs);else for(const k of u.values())k.reject(gs);u.add(f),d.async_deriveds.set(c,f)}const v=(k,P=void 0)=>{m==null||m(),u.delete(f),P!==gs&&(d.activate(),P?(i.f|=yn,Nr(i,P)):(i.f&yn&&(i.f^=yn),Nr(i,k)),d.deactivate())};f.promise.then(v,k=>v(null,k||"unknown"))}),Nf(()=>{for(const c of u)c.reject(gs)}),new Promise(c=>{function f(d){function m(){d===s?c(i):f(s)}d.then(m,m)}f(s)})}function DA(n){const e=Du(n);return Uf(e),e}function Mg(n){const e=Du(n);return e.equals=pf,e}function Lg(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Ke(e[t])}}function Nu(n){var e,t=ne,r=n.parent;if(!Rn&&r!==null&&n.v!==ge&&r.f&(He|je))return dg(),n.v;Nt(r);try{Lg(n),e=$f(n)}finally{Nt(t)}return e}function Ef(n){var e=Nu(n);if(!n.equals(e)&&(n.wv=jf(),(!(B!=null&&B.is_fork)||n.deps===null)&&(B!==null?(B.capture(n,e,!0),Ps==null||Ps.capture(n,e,!0)):n.v=e,n.deps===null))){fe(n,_e);return}Rn||(Ae!==null?(Lu()||B!=null&&B.is_fork)&&Ae.set(n,e):Vu(n))}function xg(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&Hr(()=>{t.ac.abort(Js),t.ac=null}),t.fn!==null&&(t.teardown=tg),Ls(t,0),Fu(t))}function Tf(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&Or(e)}let Ra=null,fr=null,B=null,Ps=null,Ae=null,Wa=null,bs=!1,Sa=!1,Cs=null,$i=null;var Dc=0;let Fg=1;var Ir,mn,zn,Ar,Rr,Sr,Ut,Pr,Xe,Ws,Bt,mt,wt,br,Hn,te,Ka,Ga,_s,Qa,wf,If,dr,Ug,ys;const Po=class Po{constructor(){W(this,te);Je(this,"id",Fg++);W(this,Ir,!1);Je(this,"linked",!0);W(this,mn,null);W(this,zn,null);Je(this,"async_deriveds",new Map);Je(this,"current",new Map);Je(this,"previous",new Map);W(this,Ar,new Set);W(this,Rr,new Set);W(this,Sr,0);W(this,Ut,new Map);W(this,Pr,null);W(this,Xe,[]);W(this,Ws,[]);W(this,Bt,new Set);W(this,mt,new Set);W(this,wt,new Map);W(this,br,new Set);Je(this,"is_fork",!1);W(this,Hn,!1);fr===null?Ra=fr=this:($(fr,zn,this),$(this,mn,fr)),fr=this}skip_effect(e){R(this,wt).has(e)||R(this,wt).set(e,{d:[],m:[]}),R(this,br).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=R(this,wt).get(e);if(r){R(this,wt).delete(e);for(var s of r.d)fe(s,pe),t(s);for(s of r.m)fe(s,lt),t(s)}R(this,br).add(e)}capture(e,t,r=!1){e.v!==ge&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&yn||(this.current.set(e,[t,r]),Ae==null||Ae.set(e,t)),this.is_fork||(e.v=t)}activate(){B=this}deactivate(){B=null,Ae=null}flush(){try{Sa=!0,B=this,K(this,te,_s).call(this)}finally{Dc=0,Wa=null,Cs=null,$i=null,Sa=!1,B=null,Ae=null,bt.clear()}}discard(){var e;for(const t of R(this,Rr))t(this);R(this,Rr).clear();for(const t of this.async_deriveds.values())t.reject(gs);K(this,te,ys).call(this),(e=R(this,Pr))==null||e.resolve()}register_created_effect(e){R(this,Ws).push(e)}increment(e,t){if($(this,Sr,R(this,Sr)+1),e){let r=R(this,Ut).get(t)??0;R(this,Ut).set(t,r+1)}}decrement(e,t){if($(this,Sr,R(this,Sr)-1),e){let r=R(this,Ut).get(t)??0;r===1?R(this,Ut).delete(t):R(this,Ut).set(t,r-1)}R(this,Hn)||($(this,Hn,!0),qt(()=>{$(this,Hn,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const r of e)R(this,Bt).add(r);for(const r of t)R(this,mt).add(r);e.clear(),t.clear()}oncommit(e){R(this,Ar).add(e)}ondiscard(e){R(this,Rr).add(e)}settled(){return(R(this,Pr)??$(this,Pr,uf())).promise}static ensure(){if(B===null){const e=B=new Po;!Sa&&!bs&&qt(()=>{R(e,Ir)||e.flush()})}return B}apply(){{Ae=null;return}}schedule(e){var t;if(Wa=e,(t=e.b)!=null&&t.is_pending&&e.f&(kr|Vo|lf)&&!(e.f&$r)){e.b.defer_effect(e);return}R(this,Xe).push(e)}};Ir=new WeakMap,mn=new WeakMap,zn=new WeakMap,Ar=new WeakMap,Rr=new WeakMap,Sr=new WeakMap,Ut=new WeakMap,Pr=new WeakMap,Xe=new WeakMap,Ws=new WeakMap,Bt=new WeakMap,mt=new WeakMap,wt=new WeakMap,br=new WeakMap,Hn=new WeakMap,te=new WeakSet,Ka=function(){if(this.is_fork)return!0;for(const r of R(this,Ut).keys()){for(var e=r,t=!1;e.parent!==null;){if(R(this,wt).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Ga=function(){var e=[];for(const i of R(this,Xe))if(!(i.f&He||!(i.f&(pe|lt)))){for(var t=i,r=!1;t.parent!==null;){t=t.parent;var s=t.f;if(s&(Gt|ht)){if(!(s&_e)){r=!0;break}t.f^=_e}}r||e.push(t)}return $(this,Xe,[]),e},_s=function(){var u,c,f,d;$(this,Ir,!0);for(const m of R(this,Bt))R(this,mt).delete(m),fe(m,pe),this.schedule(m);for(const m of R(this,mt))fe(m,lt),this.schedule(m);this.apply();for(var e=Cs=[],t=[],r=$i=[];R(this,Xe).length>0;){Dc++>1e3&&(K(this,te,ys).call(this),jg());for(const m of K(this,te,Ga).call(this))try{K(this,te,Qa).call(this,m,e,t)}catch(v){throw Sf(m),K(this,te,Ka).call(this)||this.discard(),v}}if(B=null,r.length>0){var s=Po.ensure();for(const m of r)s.schedule(m)}if(Cs=null,$i=null,K(this,te,Ka).call(this)){K(this,te,dr).call(this,t),K(this,te,dr).call(this,e);for(const[m,v]of R(this,wt))Rf(m,v);r.length>0&&K(u=B,te,_s).call(u);return}const i=K(this,te,wf).call(this);if(i){K(this,te,dr).call(this,t),K(this,te,dr).call(this,e),K(c=i,te,If).call(c,this);return}R(this,Bt).clear(),R(this,mt).clear();for(const m of R(this,Ar))m(this);R(this,Ar).clear(),Ps=this,Nc(t),Nc(e),Ps=null,(f=R(this,Pr))==null||f.resolve();var a=B;if(R(this,Sr)===0&&(R(this,Xe).length===0||a!==null)&&K(this,te,ys).call(this),R(this,Xe).length>0)if(a!==null){for(const m of R(this,Xe))R(a,Xe).push(m);$(this,Xe,[])}else a=this;a!==null&&(bt.clear(),K(d=a,te,_s).call(d))},Qa=function(e,t,r){e.f^=_e;for(var s=e.first;s!==null;){var i=s.f,a=(i&(ht|Gt))!==0,u=a&&(i&_e)!==0,c=u||(i&je)!==0||R(this,wt).has(s);if(!c&&s.fn!==null){a?s.f^=_e:i&kr?t.push(s):Zs(s)&&(i&_t&&R(this,mt).add(s),Or(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var d=s.next;if(d!==null){s=d;break}s=s.parent}}},wf=function(){for(var e=R(this,mn);e!==null;){if(!e.is_fork){for(const[t,[,r]]of this.current)if(e.current.has(t)&&!r)return e}e=R(e,mn)}return null},If=function(e){var r;for(const[s,i]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,i);for(const[s,i]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(R(e,Bt),R(e,mt));const t=s=>{var i=s.reactions;if(i!==null&&!(s.f&Me&&!(s.f&(pe|lt))))for(const c of i){var a=c.f;if(a&Me)t(c);else{var u=c;a&(yr|_t)&&!this.async_deriveds.has(u)&&(R(this,mt).delete(u),fe(u,pe),this.schedule(u))}}};for(const s of this.current.keys())t(s);this.oncommit(()=>e.discard()),K(r=e,te,ys).call(r),B=this,K(this,te,_s).call(this)},dr=function(e){for(var t=0;t<e.length;t+=1)yf(e[t],R(this,Bt),R(this,mt))},Ug=function(){var m,v;for(let w=Ra;w!==null;w=R(w,zn)){var e=w.id<this.id,t=[];for(const[b,[k,P]]of this.current){if(w.current.has(b)){var r=w.current.get(b)[0];if(e&&k!==r)w.current.set(b,[k,P]);else continue}t.push(b)}if(e)for(const[b,k]of this.async_deriveds){const P=w.async_deriveds.get(b);P&&k.promise.then(P.resolve).catch(P.reject)}var s=[...w.current.keys()].filter(b=>!w.current.get(b)[1]);if(!(!R(w,Ir)||s.length===0)){var i=s.filter(b=>!this.current.has(b));if(i.length===0)e&&w.discard();else if(t.length>0){if(e)for(const b of R(this,br))w.unskip_effect(b,k=>{var P;k.f&(_t|yr)?w.schedule(k):K(P=w,te,dr).call(P,[k])});w.activate();var a=new Set,u=new Map;for(var c of t)Af(c,i,a,u);u=new Map;var f=[...w.current].filter(([b,k])=>{const P=this.current.get(b);return P?P[0]!==k[0]||P[1]!==k[1]:!0}).map(([b])=>b);if(f.length>0)for(const b of R(this,Ws))!(b.f&(He|je|ro))&&Ou(b,f,u)&&(b.f&(yr|_t)?(fe(b,pe),w.schedule(b)):R(w,Bt).add(b));if(R(w,Xe).length>0&&!R(w,Hn)){w.apply();for(var d of K(m=w,te,Ga).call(m))K(v=w,te,Qa).call(v,d,[],[])}w.deactivate()}}}},ys=function(){if(this.linked){var e=R(this,mn),t=R(this,zn);e===null?Ra=t:$(e,zn,t),t===null?fr=e:$(t,mn,e),this.linked=!1}};let Xn=Po;function Bg(n){var e=bs;bs=!0;try{for(var t;;){if(Cg(),B===null)return t;B.flush()}}finally{bs=e}}function jg(){try{Tg()}catch(n){Rt(n,Wa)}}let pt=null;function Nc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if(!(r.f&(He|je))&&Zs(r)&&(pt=new Set,Or(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Lf(r),(pt==null?void 0:pt.size)>0)){bt.clear();for(const s of pt){if(s.f&(He|je))continue;const i=[s];let a=s.parent;for(;a!==null;)pt.has(a)&&(pt.delete(a),i.push(a)),a=a.parent;for(let u=i.length-1;u>=0;u--){const c=i[u];c.f&(He|je)||Or(c)}}pt.clear()}}pt=null}}function Af(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;i&Me?Af(s,e,t,r):i&(yr|_t)&&!(i&pe)&&Ou(s,e,r)&&(fe(s,pe),Mu(s))}}function Ou(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(no.call(e,s))return!0;if(s.f&Me&&Ou(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function Mu(n){B.schedule(n)}function Rf(n,e){if(!(n.f&ht&&n.f&_e)){n.f&pe?e.d.push(n):n.f&lt&&e.m.push(n),fe(n,_e);for(var t=n.first;t!==null;)Rf(t,e),t=t.next}}function Sf(n){fe(n,_e);for(var e=n.first;e!==null;)Sf(e),e=e.next}let oo=new Set;const bt=new Map;let Pf=!1;function Zn(n,e){var t={f:0,v:n,reactions:null,equals:df,rv:0,wv:0};return t}function ln(n,e){const t=Zn(n);return Uf(t),t}function qg(n,e=!1,t=!0){const r=Zn(n);return e||(r.equals=pf),r}function Ln(n,e,t=!1){G!==null&&(!yt||G.f&ro)&&gf()&&G.f&(Me|_t|yr|ro)&&(Ct===null||!Ct.has(n))&&Ag();let r=t?_r(e):e;return Nr(n,r,$i)}var Fn=null,Ya=0;function Nr(n,e,t=null){if(!n.equals(e)){Rn?bt.set(n,e):bt.has(n)||bt.set(n,n.v);var r=Xn.ensure();if(r.capture(n,e),n.f&Me){const s=n;n.f&pe&&Nu(s),Ae===null&&Vu(s)}n.wv=jf(),Fn=null,Ya=0,bf(n,pe,t),Fn=null,ne!==null&&ne.f&_e&&!(ne.f&(ht|Gt))&&(it===null?t_([n]):it.push(n)),!r.is_fork&&oo.size>0&&!Pf&&$g()}return e}function $g(){Pf=!1;for(const n of oo){n.f&_e&&fe(n,lt);let e;try{e=Zs(n)}catch{e=!0}e&&Or(n)}oo.clear()}function ks(n){Ln(n,n.v+1)}function bf(n,e,t){var r=n.reactions;if(r!==null){var s=r.length;if(Ya+=s,Ya>1e5&&Fn===null&&(Fn=new Set),Fn!==null){if(Fn.has(n))return;Fn.add(n)}for(var i=0;i<s;i++){var a=r[i],u=a.f,c=(u&pe)===0;if(c&&fe(a,e),u&ro)oo.add(a);else if(u&Me){var f=a;Ae==null||Ae.delete(f),bf(f,lt,t)}else if(c){var d=a;u&_t&&pt!==null&&pt.add(d),t!==null?t.push(d):Mu(d)}}}}function _r(n){if(typeof n!="object"||n===null||Ss in n||cf in n)return n;const e=af(n);if(e!==Zm&&e!==eg)return n;var t=new Map,r=sf(n),s=ln(0),i=Yn,a=u=>{if(Yn===i)return u();var c=G,f=Yn;ft(null),xc(i);var d=u();return ft(c),xc(f),d};return r&&t.set("length",ln(n.length)),new Proxy(n,{defineProperty(u,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&wg();var d=t.get(c);return d===void 0?a(()=>{var m=ln(f.value);return t.set(c,m),m}):Ln(d,f.value,!0),!0},deleteProperty(u,c){var f=t.get(c);if(f===void 0){if(c in u){const d=a(()=>ln(ge));t.set(c,d),ks(s)}}else Ln(f,ge),ks(s);return!0},get(u,c,f){var w;if(c===Ss)return n;var d=t.get(c),m=c in u;if(d===void 0&&(!m||(w=Rs(u,c))!=null&&w.writable)&&(d=a(()=>{var b=_r(m?u[c]:ge),k=ln(b);return k}),t.set(c,d)),d!==void 0){var v=$t(d);return v===ge?void 0:v}return Reflect.get(u,c,f)},getOwnPropertyDescriptor(u,c){var v;(v=this.has)==null||v.call(this,u,c);var f=Reflect.getOwnPropertyDescriptor(u,c),d=t.get(c);if(d!==void 0){var m=$t(d);if(m===ge)return;if(f&&"value"in f)f.value=m;else return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(u,c){var v;if(c===Ss)return!0;var f=t.get(c),d=f!==void 0&&f.v!==ge||Reflect.has(u,c);if(f!==void 0||ne!==null&&(!d||(v=Rs(u,c))!=null&&v.writable)){f===void 0&&(f=a(()=>{var w=d?_r(u[c]):ge,b=ln(w);return b}),t.set(c,f));var m=$t(f);if(m===ge)return!1}return d},set(u,c,f,d){var x;var m=t.get(c),v=c in u;if(r&&c==="length")for(var w=f;w<m.v;w+=1){var b=t.get(w+"");b!==void 0?Ln(b,ge):w in u&&(b=a(()=>ln(ge)),t.set(w+"",b))}if(m===void 0)(!v||(x=Rs(u,c))!=null&&x.writable)&&(m=a(()=>ln(void 0)),Ln(m,_r(f)),t.set(c,m));else{v=m.v!==ge;var k=a(()=>_r(f));Ln(m,k)}var P=Reflect.getOwnPropertyDescriptor(u,c);if(P!=null&&P.set&&P.set.call(d,f),!v){if(r&&typeof c=="string"){var O=t.get("length"),U=Number(c);Number.isInteger(U)&&U>=O.v&&Ln(O,U+1)}ks(s)}return!0},ownKeys(u){$t(s);var c=Reflect.ownKeys(u).filter(m=>{var v=t.get(m);return v===void 0||v.v!==ge});for(var[f,d]of t)d.v!==ge&&!(f in u)&&c.push(f);return c},setPrototypeOf(){Ig()}})}function Oc(n){try{if(n!==null&&typeof n=="object"&&Ss in n)return n[Ss]}catch{}return n}function NA(n,e){return Object.is(Oc(n),Oc(e))}var Mc,Cf,kf,Vf;function zg(){if(Mc===void 0){Mc=window,Cf=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;kf=Rs(e,"firstChild").get,Vf=Rs(e,"nextSibling").get,kc(n)&&(n[za]=void 0,n[ji]=null,n[Ha]=void 0,n.__e=void 0),kc(t)&&(t[ms]=void 0)}}function vn(n=""){return document.createTextNode(n)}function er(n){return kf.call(n)}function Xs(n){return Vf.call(n)}function OA(n,e){return er(n)}function MA(n,e=!1){{var t=er(n);return t instanceof Comment&&t.data===""?Xs(t):t}}function LA(n,e=!1){return er(n)}function xA(n,e=1,t=!1){let r=n;for(;e--;)r=Xs(r);return r}function Hg(n){n.textContent=""}function Df(){return!1}function Wg(n,e,t){return e==null||e===ff?t?document.createElement(n,{is:t}):document.createElement(n):t?document.createElementNS(e,n,{is:t}):document.createElementNS(e,n)}function Kg(n){var e=ne;if(e===null)return G.f|=yn,n;if(!(e.f&$r)&&!(e.f&kr))throw n;Rt(n,e)}function Rt(n,e){if(!(e!==null&&e.f&He)){for(;e!==null;){if(e.f&qa&&!(e.f&(He|$a))){if(!(e.f&$r))throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function Gg(n){ne===null&&(G===null&&Eg(),vg()),Rn&&yg()}function Qg(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Zt(n,e){var t=ne;t!==null&&t.f&je&&(n|=je);var r={ctx:We,deps:null,nodes:null,f:n|pe|Et,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};B==null||B.register_created_effect(r);var s=r;if(n&kr)Cs!==null?Cs.push(r):Xn.ensure().schedule(r);else if(e!==null){try{Or(r)}catch(a){throw Ke(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&zr)&&(s=s.first,n&_t&&n&Vr&&s!==null&&(s.f|=Vr))}if(s!==null&&(s.parent=t,t!==null&&Qg(s,t),G!==null&&G.f&Me&&!(n&Gt))){var i=G;(i.effects??(i.effects=[])).push(s)}return r}function Lu(){return G!==null&&!yt}function Nf(n){const e=Zt(Vo,null);return fe(e,_e),e.teardown=n,e}function FA(n){Gg();var e=ne.f,t=!G&&(e&ht)!==0&&We!==null&&!We.i;if(t){var r=We;(r.e??(r.e=[])).push(n)}else return Of(n)}function Of(n){return Zt(kr|sg,n)}function Yg(n){Xn.ensure();const e=Zt(Gt|zr,n);return(t={})=>new Promise(r=>{t.outro?Qn(e,()=>{Ke(e),r(void 0)}):(Ke(e),r(void 0))})}function UA(n){return Zt(kr,n)}function Jg(n){return Zt(yr|zr,n)}function Xg(n,e=0){return Zt(Vo|e,n)}function BA(n,e=[],t=[],r=[]){Dg(r,e,t,s=>{Zt(Vo,()=>{n(...s.map($t))})})}function xu(n,e=0){var t=Zt(_t|e,n);return t}function ut(n){return Zt(ht|zr,n)}function Mf(n){var e=n.teardown;if(e!==null){const t=Rn,r=G;Lc(!0),ft(null);try{e.call(null)}catch(s){Rt(s,n.parent)}finally{Lc(t),ft(r)}}}function Fu(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&Hr(()=>{s.abort(Js)});var r=t.next;t.f&Gt?t.parent=null:Ke(t,e),t=r}}function Zg(n){for(var e=n.first;e!==null;){var t=e.next;e.f&ht||Ke(e),e=t}}function Ke(n,e=!0){var t=!1;(e||n.f&rg)&&n.nodes!==null&&n.nodes.end!==null&&(e_(n.nodes.start,n.nodes.end),t=!0),n.f|=$a,Fu(n,e&&!t),Ls(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();Mf(n),n.f^=$a,n.f|=He;var s=n.parent;s!==null&&s.first!==null&&Lf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function e_(n,e){for(;n!==null;){var t=n===e?null:Xs(n);n.remove(),n=t}}function Lf(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Qn(n,e,t=!0){var r=[];n.f|=ku,xf(n,r,!0);var s=()=>{t&&Ke(n),e&&e()},i=r.length;if(i>0){var a=()=>--i||s();for(var u of r)u.out(a)}else s()}function xf(n,e,t){if(!(n.f&je)){n.f^=je;var r=n.nodes&&n.nodes.t;if(r!==null)for(const u of r)(u.is_global||t)&&e.push(u);for(var s=n.first;s!==null;){var i=s.next;if(!(s.f&Gt)){var a=(s.f&Vr)!==0||(s.f&ht)!==0&&(n.f&_t)!==0;xf(s,e,a?t:!1)}s=i}}}function ao(n){n.f&=~ku,Ff(n,!0)}function Ff(n,e){if(!(n.f&ku)&&n.f&je){n.f^=je,n.f&_e||(fe(n,pe),Xn.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&Vr)!==0||(t.f&ht)!==0;Ff(t,s?e:!1),t=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||e)&&a.in()}}function Uu(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var s=t===r?null:Xs(t);e.append(t),t=s}}let zi=!1,Rn=!1;function Lc(n){Rn=n}let G=null,yt=!1;function ft(n){G=n}let ne=null;function Nt(n){ne=n}let Ct=null;function Uf(n){G!==null&&(G.f&so||G.f&Me)&&(Ct??(Ct=new Set)).add(n)}let $e=null,nt=0,it=null;function t_(n){it=n}let Bf=1,Bn=0,Yn=Bn;function xc(n){Yn=n}function jf(){return++Bf}function Zs(n){var e=n.f;if(e&pe)return!0;if(e&lt){for(var t=n.deps,r=t.length,s=0;s<r;s++){var i=t[s];if(Zs(i)&&Ef(i),i.wv>n.wv)return!0}e&Et&&Ae===null&&fe(n,_e)}return!1}function qf(n,e,t=!0){var r=n.reactions;if(r!==null&&!(Ct!==null&&Ct.has(n)))for(var s=0;s<r.length;s++){var i=r[s];i.f&Me?qf(i,e,!1):e===i&&(t?fe(i,pe):i.f&_e&&fe(i,lt),Mu(i))}}function $f(n){var e=$e,t=nt,r=it,s=G,i=Ct,a=We,u=yt,c=Yn,f=n.f;$e=null,nt=0,it=null,G=f&(ht|Gt)?null:n,Ct=null,Dr(n.ctx),yt=!1,Yn=++Bn,n.ac!==null&&(Hr(()=>{n.ac.abort(Js)}),n.ac=null);try{n.f|=so;var d=n.fn,m=d();n.f|=$r;var v=Fc(n);if(gf()&&it!==null&&!yt&&v!==null&&!(n.f&(Me|lt|pe)))for(var w=0;w<it.length;w++)qf(it[w],n);if(s!==null&&s!==n){if(Bn++,s.deps!==null)for(let b=0;b<t;b+=1)s.deps[b].rv=Bn;if(e!==null)for(const b of e)b.rv=Bn;it!==null&&(r===null?r=it:r.push(...it))}return n.f&yn&&(n.f^=yn),m}catch(b){return Fc(n),Kg(b)}finally{n.f^=so,$e=e,nt=t,it=r,G=s,Ct=i,Dr(a),yt=u,Yn=c}}function Fc(n){var s;var e=n.deps,t=B==null?void 0:B.is_fork;if($e!==null){var r;if(t||Ls(n,nt),e!==null&&nt>0)for(e.length=nt+$e.length,r=0;r<$e.length;r++)e[nt+r]=$e[r];else n.deps=e=$e;if(Lu()&&n.f&Et)for(r=nt;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(n)}else!t&&e!==null&&nt<e.length&&(Ls(n,nt),e.length=nt);return e}function n_(n,e){let t=e.reactions;if(t!==null){var r=Jm.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}if(t===null&&e.f&Me&&($e===null||!no.call($e,e))){var i=e;i.f&Et&&(i.f^=Et),i.v!==ge&&Vu(i),i.ac!==null&&Hr(()=>{i.ac.abort(Js),i.ac=null,fe(i,pe)}),xg(i),Ls(i,0)}}function Ls(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)n_(n,t[r])}function Or(n){var e=n.f;if(!(e&He)){fe(n,_e);var t=ne,r=zi;ne=n,zi=(e&(ht|Gt))===0;try{e&(_t|lf)?Zg(n):Fu(n),Mf(n);var s=$f(n);n.teardown=typeof s=="function"?s:null,n.wv=Bf;var i;rf&&Sg&&n.f&pe&&n.deps}finally{zi=r,ne=t}}}async function jA(){await Promise.resolve(),Bg()}function $t(n){var e=n.f,t=(e&Me)!==0;if(G!==null&&!yt){var r=ne!==null&&(ne.f&He)!==0;if(!r&&(Ct===null||!Ct.has(n))){var s=G.deps;if(G.f&so)n.rv<Bn&&(n.rv=Bn,$e===null&&s!==null&&s[nt]===n?nt++:$e===null?$e=[n]:$e.push(n));else{G.deps??(G.deps=[]),no.call(G.deps,n)||G.deps.push(n);var i=n.reactions;i===null?n.reactions=[G]:no.call(i,G)||i.push(G)}}}if(Rn&&bt.has(n))return bt.get(n);if(t){var a=n;if(Rn){var u=a.v;return(!(a.f&_e)&&a.reactions!==null||Hf(a))&&(u=Nu(a)),bt.set(a,u),u}var c=(a.f&Et)===0&&!yt&&G!==null&&(zi||(G.f&Et)!==0),f=(a.f&$r)===0;Zs(a)&&(c&&(a.f|=Et),Ef(a)),c&&!f&&(Tf(a),zf(a))}if(Ae!=null&&Ae.has(n))return Ae.get(n);if(n.f&yn)throw n.v;return n.v}function zf(n){if(n.f|=Et,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&Me&&!(e.f&Et)&&(Tf(e),zf(e))}function Hf(n){if(n.v===ge)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(bt.has(e)||e.f&Me&&Hf(e))return!0;return!1}function r_(n){var e=yt;try{return yt=!0,n()}finally{yt=e}}const s_=["touchstart","touchmove"];function i_(n){return s_.includes(n)}const jn=Symbol("events"),Wf=new Set,Ja=new Set;function o_(n,e,t,r={}){function s(i){if(r.capture||Xa.call(e,i),!i.cancelBubble)return Hr(()=>t==null?void 0:t.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(s.__removed=!1,qt(()=>{s.__removed||e.addEventListener(n,s,r)})):e.addEventListener(n,s,r),s}function qA(n,e,t,r,s){var i={capture:r,passive:s},a=o_(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Nf(()=>{a.__removed=!0,e.removeEventListener(n,a,i)})}function $A(n,e,t){(e[jn]??(e[jn]={}))[n]=t}function zA(n){for(var e=0;e<n.length;e++)Wf.add(n[e]);for(var t of Ja)t(n)}let Pa=null,ba=!1;function Xa(n){var k,P;var e=this,t=e.ownerDocument,r=n.type,s=((k=n.composedPath)==null?void 0:k.call(n))||[],i=s[0]||n.target;Pa=n,ba||(ba=!0,setTimeout(()=>{ba=!1,Pa=null}));var a=0,u=Pa===n&&n[jn];if(u){var c=s.indexOf(u);if(c!==-1&&(e===document||e===window)){n[jn]=e;return}var f=s.indexOf(e);if(f===-1)return;c<=f&&(a=c)}if(i=s[a]||n.target,i!==e){of(n,"currentTarget",{configurable:!0,get(){return i||t}});var d=G,m=ne;ft(null),Nt(null);try{for(var v,w=[];i!==null&&i!==e;){try{var b=(P=i[jn])==null?void 0:P[r];b!=null&&(!i.disabled||n.target===i)&&b.call(i,n)}catch(O){v?w.push(O):v=O}if(n.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(v){for(let O of w)queueMicrotask(()=>{throw O});throw v}}finally{n[jn]=e,delete n.currentTarget,ft(d),Nt(m)}}}var tf;const Ca=((tf=globalThis==null?void 0:globalThis.window)==null?void 0:tf.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function a_(n){return(Ca==null?void 0:Ca.createHTML(n))??n}function Kf(n){var e=Wg("template");return e.innerHTML=a_(n.replaceAll("<!>","<!---->")),e.content}function uo(n,e){var t=ne;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function HA(n,e){var t=(e&hg)!==0,r=(e&fg)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=Kf(i?n:"<!>"+n),t||(s=er(s)));var a=r||Cf?document.importNode(s,!0):s.cloneNode(!0);if(t){var u=er(a),c=a.lastChild;uo(u,c)}else uo(a,a);return a}}function u_(n,e,t="svg"){var r=!n.startsWith("<!>"),s=`<${t}>${r?n:"<!>"+n}</${t}>`,i;return()=>{if(!i){var a=Kf(s),u=er(a);i=er(u)}var c=i.cloneNode(!0);return uo(c,c),c}}function WA(n,e){return u_(n,e,"svg")}function KA(){var n=document.createDocumentFragment(),e=document.createComment(""),t=vn();return n.append(e,t),uo(e,t),n}function GA(n,e){n!==null&&n.before(e)}function l_(n){let e=0,t=Zn(0),r;return()=>{Lu()&&($t(t),Xg(()=>(e===0&&(r=r_(()=>n(()=>ks(t)))),e+=1,()=>{qt(()=>{e-=1,e===0&&(r==null||r(),r=void 0,ks(t))})})))}}var c_=Vr|zr;function h_(n,e,t,r){new f_(n,e,t,r)}var ot,Cu,at,Wn,Ue,Ze,Be,et,It,Kn,gn,Cr,Ks,Gs,jt,bo,oe,d_,p_,Za,m_,eu,vs,Hi,tu,nu;class f_{constructor(e,t,r,s){W(this,oe);Je(this,"parent");Je(this,"is_pending",!1);Je(this,"transform_error");W(this,ot);W(this,Cu,null);W(this,at);W(this,Wn);W(this,Ue);W(this,Ze,null);W(this,Be,null);W(this,et,null);W(this,It,null);W(this,Kn,0);W(this,gn,0);W(this,Cr,!1);W(this,Ks,new Set);W(this,Gs,new Set);W(this,jt,null);W(this,bo,l_(()=>($(this,jt,Zn(R(this,Kn))),()=>{$(this,jt,null)})));var i;$(this,ot,e),$(this,at,t),$(this,Wn,a=>{var u=ne;u.b=this,u.f|=qa,r(a)}),this.parent=ne.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),$(this,Ue,xu(()=>{K(this,oe,eu).call(this)},c_))}defer_effect(e){yf(e,R(this,Ks),R(this,Gs))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!R(this,at).pending}update_pending_count(e,t){K(this,oe,tu).call(this,e,t),$(this,Kn,R(this,Kn)+e),!(!R(this,jt)||R(this,Cr))&&($(this,Cr,!0),qt(()=>{$(this,Cr,!1),R(this,jt)&&Nr(R(this,jt),R(this,Kn))}))}get_effect_pending(){return R(this,bo).call(this),$t(R(this,jt))}error(e){if(!R(this,at).onerror&&!R(this,at).failed)throw e;B!=null&&B.is_fork?(R(this,Ze)&&B.skip_effect(R(this,Ze)),R(this,Be)&&B.skip_effect(R(this,Be)),R(this,et)&&B.skip_effect(R(this,et)),B.oncommit(()=>{K(this,oe,nu).call(this,e)})):K(this,oe,nu).call(this,e)}}ot=new WeakMap,Cu=new WeakMap,at=new WeakMap,Wn=new WeakMap,Ue=new WeakMap,Ze=new WeakMap,Be=new WeakMap,et=new WeakMap,It=new WeakMap,Kn=new WeakMap,gn=new WeakMap,Cr=new WeakMap,Ks=new WeakMap,Gs=new WeakMap,jt=new WeakMap,bo=new WeakMap,oe=new WeakSet,d_=function(){try{$(this,Ze,ut(()=>R(this,Wn).call(this,R(this,ot))))}catch(e){this.error(e)}},p_=function(e){const t=R(this,at).failed,{reset:r,invoke_onerror:s}=K(this,oe,Za).call(this,e);qt(s),t&&$(this,et,ut(()=>{t(R(this,ot),()=>e,()=>r)}))},Za=function(e){var t=!1,r=!1;const s=()=>{if(t){pg();return}t=!0,r&&Rg(),R(this,et)!==null&&Qn(R(this,et),()=>{$(this,et,null)}),K(this,oe,Hi).call(this,()=>{K(this,oe,eu).call(this)})};return{reset:s,invoke_onerror:()=>{var a,u;try{r=!0,(u=(a=R(this,at)).onerror)==null||u.call(a,e,s),r=!1}catch(c){Rt(c,R(this,Ue)&&R(this,Ue).parent)}}}},m_=function(){const e=R(this,at).pending;e&&(this.is_pending=!0,$(this,Be,ut(()=>e(R(this,ot)))),qt(()=>{var t=$(this,It,document.createDocumentFragment()),r=vn(),s=!1;if(t.append(r),$(this,Ze,K(this,oe,Hi).call(this,()=>{try{return ut(()=>R(this,Wn).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){Rt(a,R(this,Ue).parent)}return null}})),R(this,Ze)===null){$(this,It,null),s&&K(this,oe,vs).call(this,B);return}R(this,gn)===0&&(R(this,ot).before(t),$(this,It,null),Qn(R(this,Be),()=>{$(this,Be,null)}),K(this,oe,vs).call(this,B))}))},eu=function(){try{if(this.is_pending=this.has_pending_snippet(),$(this,gn,0),$(this,Kn,0),$(this,Ze,ut(()=>{R(this,Wn).call(this,R(this,ot))})),R(this,gn)>0){var e=$(this,It,document.createDocumentFragment());Uu(R(this,Ze),e);const t=R(this,at).pending;$(this,Be,ut(()=>t(R(this,ot))))}else K(this,oe,vs).call(this,B)}catch(t){this.error(t)}},vs=function(e){this.is_pending=!1,e.transfer_effects(R(this,Ks),R(this,Gs))},Hi=function(e){var t=ne,r=G,s=We;Nt(R(this,Ue)),ft(R(this,Ue)),Dr(R(this,Ue).ctx);try{return Xn.ensure(),e()}finally{Nt(t),ft(r),Dr(s)}},tu=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&K(r=this.parent,oe,tu).call(r,e,t);return}$(this,gn,R(this,gn)+e),R(this,gn)===0&&(K(this,oe,vs).call(this,t),R(this,Be)&&Qn(R(this,Be),()=>{$(this,Be,null)}),R(this,It)&&(R(this,ot).before(R(this,It)),$(this,It,null)))},nu=function(e){R(this,Ze)&&(Ke(R(this,Ze)),$(this,Ze,null)),R(this,Be)&&(Ke(R(this,Be)),$(this,Be,null)),R(this,et)&&(Ke(R(this,et)),$(this,et,null));let t=R(this,at).failed;const r=s=>{const{reset:i,invoke_onerror:a}=K(this,oe,Za).call(this,s);a(),t&&$(this,et,K(this,oe,Hi).call(this,()=>{try{return ut(()=>{var u=ne;u.b=this,u.f|=qa,t(R(this,ot),()=>s,()=>i)})}catch(u){return Rt(u,R(this,Ue).parent),null}}))};qt(()=>{var s;try{s=this.transform_error(e)}catch(i){Rt(i,R(this,Ue)&&R(this,Ue).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>Rt(i,R(this,Ue)&&R(this,Ue).parent)):r(s)})};function QA(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[ms]??(n[ms]=n.nodeValue))&&(n[ms]=t,n.nodeValue=`${t}`)}function YA(n,e){return g_(n,e)}const Ni=new Map;function g_(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:a=!0,transformError:u}){zg();var c=void 0,f=Yg(()=>{var d=t??e.appendChild(vn());h_(d,{pending:()=>{}},w=>{Pg({});var b=We;i&&(b.c=i),s&&(r.$$events=s),c=n(w,r)||mf(),bg()},u);var m=new Set,v=w=>{for(var b=0;b<w.length;b++){var k=w[b];if(!m.has(k)){m.add(k);var P=i_(k);for(const x of[e,document]){var O=Ni.get(x);O===void 0&&(O=new Map,Ni.set(x,O));var U=O.get(k);U===void 0?(x.addEventListener(k,Xa,{passive:P}),O.set(k,1)):O.set(k,U+1)}}}};return v(ko(Wf)),Ja.add(v),()=>{var P;for(var w of m)for(const O of[e,document]){var b=Ni.get(O),k=b.get(w);--k==0?(O.removeEventListener(w,Xa),b.delete(w),b.size===0&&Ni.delete(O)):b.set(w,k)}Ja.delete(v),d!==t&&((P=d.parentNode)==null||P.removeChild(d))}});return __.set(c,f),c}let __=new WeakMap;var gt,At,tt,Gn,Qs,Ys,Co;class y_{constructor(e,t=!0){Je(this,"anchor");W(this,gt,new Map);W(this,At,new Map);W(this,tt,new Map);W(this,Gn,new Set);W(this,Qs,!0);W(this,Ys,e=>{if(R(this,gt).has(e)){var t=R(this,gt).get(e),r=R(this,At).get(t);if(r)ao(r),R(this,Gn).delete(t);else{var s=R(this,tt).get(t);s&&(ao(s.effect),R(this,At).set(t,s.effect),R(this,tt).delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of R(this,gt)){if(R(this,gt).delete(i),i===e)break;const u=R(this,tt).get(a);u&&(Ke(u.effect),R(this,tt).delete(a))}for(const[i,a]of R(this,At)){if(i===t||R(this,Gn).has(i))continue;const u=()=>{if(Array.from(R(this,gt).values()).includes(i)){var f=document.createDocumentFragment();Uu(a,f),f.append(vn()),R(this,tt).set(i,{effect:a,fragment:f})}else Ke(a);R(this,Gn).delete(i),R(this,At).delete(i)};R(this,Qs)||!r?(R(this,Gn).add(i),Qn(a,u,!1)):u()}}});W(this,Co,e=>{R(this,gt).delete(e);const t=Array.from(R(this,gt).values());for(const[r,s]of R(this,tt))t.includes(r)||(Ke(s.effect),R(this,tt).delete(r))});this.anchor=e,$(this,Qs,t)}ensure(e,t){var r=B,s=Df();if(t&&!R(this,At).has(e)&&!R(this,tt).has(e))if(s){var i=document.createDocumentFragment(),a=vn();i.append(a),R(this,tt).set(e,{effect:ut(()=>t(a)),fragment:i})}else R(this,At).set(e,ut(()=>t(this.anchor)));if(R(this,gt).set(r,e),s){for(const[u,c]of R(this,At))u===e?r.unskip_effect(c):r.skip_effect(c);for(const[u,c]of R(this,tt))u===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(R(this,Ys)),r.ondiscard(R(this,Co))}else R(this,Ys).call(this,r)}}gt=new WeakMap,At=new WeakMap,tt=new WeakMap,Gn=new WeakMap,Qs=new WeakMap,Ys=new WeakMap,Co=new WeakMap;function JA(n,e,t=!1){var r=new y_(n),s=t?Vr:0;function i(a,u){r.ensure(a,u)}xu(()=>{var a=!1;e((u,c=0)=>{a=!0,i(c,u)}),a||i(-1,null)},s)}function XA(n,e){return e}function v_(n,e,t){for(var r=[],s=e.length,i,a=e.length,u=0;u<s;u++){let m=e[u];Qn(m,()=>{if(i){if(i.pending.delete(m),i.done.add(m),i.pending.size===0){var v=n.outrogroups;ru(n,ko(i.done)),v.delete(i),v.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var f=t,d=f.parentNode;Hg(d),d.append(f),n.items.clear()}ru(n,e,!c)}else i={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(i)}function ru(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const u of a)r.add(n.items.get(u).e)}for(var s=0;s<e.length;s++){var i=e[s];if(r!=null&&r.has(i)){i.f|=Pt;const a=document.createDocumentFragment();Uu(i,a)}else Ke(e[s],t)}}var Uc;function ZA(n,e,t,r,s,i=null){var a=n,u=new Map,c=(e&hf)!==0;if(c){var f=n;a=f.appendChild(vn())}var d=null,m=Mg(()=>{var x=t();return sf(x)?x:x==null?[]:ko(x)}),v,w=new Map,b=!0;function k(x){U.effect.f&He||(U.pending.delete(x),U.fallback=d,E_(U,v,a,e,r),d!==null&&(v.length===0?d.f&Pt?(d.f^=Pt,Es(d,null,a)):ao(d):Qn(d,()=>{d=null})))}function P(x){U.pending.delete(x)}var O=xu(()=>{v=$t(m);for(var x=v.length,Y=new Set,ce=B,se=Df(),T=0;T<x;T+=1){var g=v[T],_=r(g,T),E=b?null:u.get(_);E?(E.v&&Nr(E.v,g),E.i&&Nr(E.i,T),se&&ce.unskip_effect(E.e)):(E=T_(u,b?a:Uc??(Uc=vn()),g,_,T,s,e,t),b||(E.e.f|=Pt),u.set(_,E)),Y.add(_)}if(x===0&&i&&!d&&(b?d=ut(()=>i(a)):(d=ut(()=>i(Uc??(Uc=vn()))),d.f|=Pt)),x>Y.size&&_g(),!b)if(w.set(ce,Y),se){for(const[I,S]of u)Y.has(I)||ce.skip_effect(S.e);ce.oncommit(k),ce.ondiscard(P)}else k(ce);$t(m)}),U={effect:O,items:u,pending:w,outrogroups:null,fallback:d};b=!1}function ds(n){for(;n!==null&&!(n.f&ht);)n=n.next;return n}function E_(n,e,t,r,s){var E,I,S,y,st,tn,di,nn,rn;var i=(r&lg)!==0,a=e.length,u=n.items,c=ds(n.effect.first),f,d=null,m,v=[],w=[],b,k,P,O;if(i)for(O=0;O<a;O+=1)b=e[O],k=s(b,O),P=u.get(k).e,P.f&Pt||((I=(E=P.nodes)==null?void 0:E.a)==null||I.measure(),(m??(m=new Set)).add(P));for(O=0;O<a;O+=1){if(b=e[O],k=s(b,O),P=u.get(k).e,n.outrogroups!==null)for(const Qe of n.outrogroups)Qe.pending.delete(P),Qe.done.delete(P);if(P.f&je&&(ao(P),i&&((y=(S=P.nodes)==null?void 0:S.a)==null||y.unfix(),(m??(m=new Set)).delete(P))),P.f&Pt)if(P.f^=Pt,P===c)Es(P,null,t);else{var U=d?d.next:c;P===n.effect.last&&(n.effect.last=P.prev),P.prev&&(P.prev.next=P.next),P.next&&(P.next.prev=P.prev),cn(n,d,P),cn(n,P,U),Es(P,U,t),d=P,v=[],w=[],c=ds(d.next);continue}if(P!==c){if(f!==void 0&&f.has(P)){if(v.length<w.length){var x=w[0],Y;d=x.prev;var ce=v[0],se=v[v.length-1];for(Y=0;Y<v.length;Y+=1)Es(v[Y],x,t);for(Y=0;Y<w.length;Y+=1)f.delete(w[Y]);cn(n,ce.prev,se.next),cn(n,d,ce),cn(n,se,x),c=x,d=se,O-=1,v=[],w=[]}else f.delete(P),Es(P,c,t),cn(n,P.prev,P.next),cn(n,P,d===null?n.effect.first:d.next),cn(n,d,P),d=P;continue}for(v=[],w=[];c!==null&&c!==P;)(f??(f=new Set)).add(c),w.push(c),c=ds(c.next);if(c===null)continue}P.f&Pt||v.push(P),d=P,c=ds(P.next)}if(n.outrogroups!==null){for(const Qe of n.outrogroups)Qe.pending.size===0&&(ru(n,ko(Qe.done)),(st=n.outrogroups)==null||st.delete(Qe));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||f!==void 0){var T=[];if(f!==void 0)for(P of f)P.f&je||T.push(P);for(;c!==null;)!(c.f&je)&&c!==n.fallback&&T.push(c),c=ds(c.next);var g=T.length;if(g>0){var _=r&hf&&a===0?t:null;if(i){for(O=0;O<g;O+=1)(di=(tn=T[O].nodes)==null?void 0:tn.a)==null||di.measure();for(O=0;O<g;O+=1)(rn=(nn=T[O].nodes)==null?void 0:nn.a)==null||rn.fix()}v_(n,T,_)}}i&&qt(()=>{var Qe,Xr;if(m!==void 0)for(P of m)(Xr=(Qe=P.nodes)==null?void 0:Qe.a)==null||Xr.apply()})}function T_(n,e,t,r,s,i,a,u){var c=a&ag?a&cg?Zn(t):qg(t,!1,!1):null,f=a&ug?Zn(s):null;return{v:c,i:f,e:ut(()=>(i(e,c??t,f??s,u),()=>{n.delete(r)}))}}function Es(n,e,t){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&!(e.f&Pt)?e.nodes.start:t;r!==null;){var a=Xs(r);if(i.before(r),r===s)return;r=a}}function cn(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Gf(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Gf(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function w_(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Gf(n))&&(r&&(r+=" "),r+=e);return r}function e0(n){return typeof n=="object"?w_(n):n??""}const Bc=[...` 	
\r\f \v\uFEFF`];function I_(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var s of Object.keys(t))if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var u=a+i;(a===0||Bc.includes(r[a-1]))&&(u===r.length||Bc.includes(r[u]))?r=(a===0?"":r.substring(0,a))+r.substring(u+1):a=u}}return r===""?null:r}function A_(n,e){return n==null?null:String(n)}function t0(n,e,t,r,s,i){var a=n[za];if(a!==t||a===void 0){var u=I_(t,r,i);u==null?n.removeAttribute("class"):e?n.className=u:n.setAttribute("class",u),n[za]=t}else if(i&&s!==i)for(var c in i){var f=!!i[c];(s==null||f!==!!s[c])&&n.classList.toggle(c,f)}return i}function n0(n,e,t,r){var s=n[Ha];if(s!==e){var i=A_(e);i==null?n.removeAttribute("style"):n.style.cssText=i,n[Ha]=e}return r}const R_=Symbol("is custom element"),S_=Symbol("is html"),P_=og?"progress":"PROGRESS";function r0(n,e){var t=Bu(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==P_)||(n.value=e??"")}function s0(n,e){var t=Bu(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function i0(n,e,t,r){var s=Bu(n);s[e]!==(s[e]=t)&&(e==="loading"&&(n[ig]=t),t==null?n.removeAttribute(e):typeof t!="string"&&b_(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Bu(n){return n[ji]??(n[ji]={[R_]:n.nodeName.includes("-"),[S_]:n.namespaceURI===ff})}var jc=new Map;function b_(n){var e=n.getAttribute("is")||n.nodeName,t=jc.get(e);if(t)return t;jc.set(e,t=new Set);for(var r,s=n,i=Element.prototype;i!==s;){r=Xm(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);s=af(s)}return t}const C_="5";var nf;typeof window<"u"&&((nf=window.__svelte??(window.__svelte={})).v??(nf.v=new Set)).add(C_);var qc={};/**
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
 */const Qf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},k_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Yf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,c=s+2<n.length,f=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|u>>4;let v=(u&15)<<2|f>>6,w=f&63;c||(w=64,a||(v=64)),r.push(t[d],t[m],t[v],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):k_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||f==null||m==null)throw new V_;const v=i<<2|u>>4;if(r.push(v),f!==64){const w=u<<4&240|f>>2;if(r.push(w),m!==64){const b=f<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class V_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D_=function(n){const e=Qf(n);return Yf.encodeByteArray(e,!0)},lo=function(n){return D_(n).replace(/\./g,"")},Jf=function(n){try{return Yf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function N_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O_=()=>N_().__FIREBASE_DEFAULTS__,M_=()=>{if(typeof process>"u"||typeof qc>"u")return;const n=qc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},L_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jf(n[1]);return e&&JSON.parse(e)},Do=()=>{try{return O_()||M_()||L_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xf=n=>{var e,t;return(t=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},x_=n=>{const e=Xf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zf=()=>{var n;return(n=Do())===null||n===void 0?void 0:n.config},ed=n=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class F_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function U_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lo(JSON.stringify(t)),lo(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function B_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function j_(){var n;const e=(n=Do())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H_(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function W_(){return!j_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K_(){try{return typeof indexedDB=="object"}catch{return!1}}function G_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Q_="FirebaseError";class en extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Q_,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Y_(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new en(s,u,r)}}function Y_(n,e){return n.replace(J_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const J_=/\{\$([^}]+)}/g;function X_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function co(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if($c(i)&&$c(a)){if(!co(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function $c(n){return n!==null&&typeof n=="object"}/**
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
 */function ti(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Z_(n,e){const t=new ey(n,e);return t.subscribe.bind(t)}class ey{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ty(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ka),s.error===void 0&&(s.error=ka),s.complete===void 0&&(s.complete=ka);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ty(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ka(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class tr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class ny{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new F_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sy(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ry(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ry(n){return n===xn?void 0:n}function sy(n){return n.instantiationMode==="EAGER"}/**
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
 */class iy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ny(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const oy={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ay=J.INFO,uy={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},ly=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=uy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=ay,this._logHandler=ly,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const cy=(n,e)=>e.some(t=>n instanceof t);let zc,Hc;function hy(){return zc||(zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fy(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const td=new WeakMap,su=new WeakMap,nd=new WeakMap,Va=new WeakMap,qu=new WeakMap;function dy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(En(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&td.set(t,n)}).catch(()=>{}),qu.set(e,n),e}function py(n){if(su.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});su.set(n,e)}let iu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return su.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function my(n){iu=n(iu)}function gy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Da(this),e,...t);return nd.set(r,e.sort?e.sort():[e]),En(r)}:fy().includes(n)?function(...e){return n.apply(Da(this),e),En(td.get(this))}:function(...e){return En(n.apply(Da(this),e))}}function _y(n){return typeof n=="function"?gy(n):(n instanceof IDBTransaction&&py(n),cy(n,hy())?new Proxy(n,iu):n)}function En(n){if(n instanceof IDBRequest)return dy(n);if(Va.has(n))return Va.get(n);const e=_y(n);return e!==n&&(Va.set(n,e),qu.set(e,n)),e}const Da=n=>qu.get(n);function yy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),u=En(a);return r&&a.addEventListener("upgradeneeded",c=>{r(En(a.result),c.oldVersion,c.newVersion,En(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const vy=["get","getKey","getAll","getAllKeys","count"],Ey=["put","add","delete","clear"],Na=new Map;function Wc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Na.get(e))return Na.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Ey.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vy.includes(t)))return;const i=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),s&&c.done]))[0]};return Na.set(e,i),i}my(n=>({...n,get:(e,t,r)=>Wc(e,t)||n.get(e,t,r),has:(e,t)=>!!Wc(e,t)||n.has(e,t)}));/**
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
 */class Ty{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",Kc="0.10.13";/**
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
 */const Qt=new ju("@firebase/app"),Iy="@firebase/app-compat",Ay="@firebase/analytics-compat",Ry="@firebase/analytics",Sy="@firebase/app-check-compat",Py="@firebase/app-check",by="@firebase/auth",Cy="@firebase/auth-compat",ky="@firebase/database",Vy="@firebase/data-connect",Dy="@firebase/database-compat",Ny="@firebase/functions",Oy="@firebase/functions-compat",My="@firebase/installations",Ly="@firebase/installations-compat",xy="@firebase/messaging",Fy="@firebase/messaging-compat",Uy="@firebase/performance",By="@firebase/performance-compat",jy="@firebase/remote-config",qy="@firebase/remote-config-compat",$y="@firebase/storage",zy="@firebase/storage-compat",Hy="@firebase/firestore",Wy="@firebase/vertexai-preview",Ky="@firebase/firestore-compat",Gy="firebase",Qy="10.14.1";/**
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
 */const au="[DEFAULT]",Yy={[ou]:"fire-core",[Iy]:"fire-core-compat",[Ry]:"fire-analytics",[Ay]:"fire-analytics-compat",[Py]:"fire-app-check",[Sy]:"fire-app-check-compat",[by]:"fire-auth",[Cy]:"fire-auth-compat",[ky]:"fire-rtdb",[Vy]:"fire-data-connect",[Dy]:"fire-rtdb-compat",[Ny]:"fire-fn",[Oy]:"fire-fn-compat",[My]:"fire-iid",[Ly]:"fire-iid-compat",[xy]:"fire-fcm",[Fy]:"fire-fcm-compat",[Uy]:"fire-perf",[By]:"fire-perf-compat",[jy]:"fire-rc",[qy]:"fire-rc-compat",[$y]:"fire-gcs",[zy]:"fire-gcs-compat",[Hy]:"fire-fst",[Ky]:"fire-fst-compat",[Wy]:"fire-vertex","fire-js":"fire-js",[Gy]:"fire-js-all"};/**
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
 */const ho=new Map,Jy=new Map,uu=new Map;function Gc(n,e){try{n.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mr(n){const e=n.name;if(uu.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;uu.set(e,n);for(const t of ho.values())Gc(t,n);for(const t of Jy.values())Gc(t,n);return!0}function $u(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vt(n){return n.settings!==void 0}/**
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
 */const Xy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new ei("app","Firebase",Xy);/**
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
 */class Zy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=Qy;function rd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:au,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(t||(t=Zf()),!t)throw Tn.create("no-options");const i=ho.get(s);if(i){if(co(t,i.options)&&co(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const a=new iy(s);for(const c of uu.values())a.addComponent(c);const u=new Zy(t,r,a);return ho.set(s,u),u}function sd(n=au){const e=ho.get(n);if(!e&&n===au&&Zf())return rd();if(!e)throw Tn.create("no-app",{appName:n});return e}function wn(n,e,t){var r;let s=(r=Yy[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(u.join(" "));return}Mr(new tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ev="firebase-heartbeat-database",tv=1,xs="firebase-heartbeat-store";let Oa=null;function id(){return Oa||(Oa=yy(ev,tv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tn.create("idb-open",{originalErrorMessage:n.message})})),Oa}async function nv(n){try{const t=(await id()).transaction(xs),r=await t.objectStore(xs).get(od(n));return await t.done,r}catch(e){if(e instanceof en)Qt.warn(e.message);else{const t=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function Qc(n,e){try{const r=(await id()).transaction(xs,"readwrite");await r.objectStore(xs).put(e,od(n)),await r.done}catch(t){if(t instanceof en)Qt.warn(t.message);else{const r=Tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(r.message)}}}function od(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rv=1024,sv=30*24*60*60*1e3;class iv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new av(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=sv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yc(),{heartbeatsToSend:r,unsentEntries:s}=ov(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Qt.warn(t),""}}}function Yc(){return new Date().toISOString().substring(0,10)}function ov(n,e=rv){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Jc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Jc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class av{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K_()?G_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jc(n){return lo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function uv(n){Mr(new tr("platform-logger",e=>new Ty(e),"PRIVATE")),Mr(new tr("heartbeat",e=>new iv(e),"PRIVATE")),wn(ou,Kc,n),wn(ou,Kc,"esm2017"),wn("fire-js","")}uv("");function zu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ad(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lv=ad,ud=new ei("auth","Firebase",ad());/**
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
 */const fo=new ju("@firebase/auth");function cv(n,...e){fo.logLevel<=J.WARN&&fo.warn(`Auth (${Wr}): ${n}`,...e)}function Wi(n,...e){fo.logLevel<=J.ERROR&&fo.error(`Auth (${Wr}): ${n}`,...e)}/**
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
 */function Ot(n,...e){throw Wu(n,...e)}function Tt(n,...e){return Wu(n,...e)}function Hu(n,e,t){const r=Object.assign(Object.assign({},lv()),{[e]:t});return new ei("auth","Firebase",r).create(e,{appName:n.name})}function Kt(n){return Hu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(n,"argument-error"),Hu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ud.create(n,...e)}function j(n,e,...t){if(!n)throw Wu(e,...t)}function zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wi(e),new Error(e)}function Yt(n,e){n||zt(e)}/**
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
 */function lu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hv(){return Xc()==="http:"||Xc()==="https:"}function Xc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hv()||$_()||"connection"in navigator)?navigator.onLine:!0}function dv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ni{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=B_()||z_()}get(){return fv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ku(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mv=new ni(3e4,6e4);function No(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kr(n,e,t,r,s={}){return hd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=ti(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:c},i);return q_()||(f.referrerPolicy="no-referrer"),cd.fetch()(dd(n,n.config.apiHost,t,u),f)})}async function hd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pv),e);try{const s=new gv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Oi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[c,f]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Oi(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Hu(n,d,f);Ot(n,d)}}catch(s){if(s instanceof en)throw s;Ot(n,"network-request-failed",{message:String(s)})}}async function fd(n,e,t,r,s={}){const i=await Kr(n,e,t,r,s);return"mfaPendingCredential"in i&&Ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}function dd(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ku(n.config,s):`${n.config.apiScheme}://${s}`}class gv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),mv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Tt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function _v(n,e){return Kr(n,"POST","/v1/accounts:delete",e)}async function pd(n,e){return Kr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yv(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),s=Gu(r);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vs(Ma(s.auth_time)),issuedAtTime:Vs(Ma(s.iat)),expirationTime:Vs(Ma(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ma(n){return Number(n)*1e3}function Gu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jf(t);return s?JSON.parse(s):(Wi("Failed to decode base64 JWT payload"),null)}catch(s){return Wi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zc(n){const e=Gu(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof en&&vv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ev{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Fs(n,pd(t,{idToken:r}));j(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?md(i.providerUserInfo):[],u=wv(n.providerData,a),c=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(u!=null&&u.length),d=c?f:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Tv(n){const e=Ee(n);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function md(n){return n.map(e=>{var{providerId:t}=e,r=zu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Iv(n,e){const t=await hd(n,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=dd(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",cd.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Av(n,e){return Kr(n,"POST","/v2/accounts:revokeToken",No(n,e))}/**
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
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Iv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new vr;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function hn(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ev(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yv(this,e)}reload(){return Tv(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await Fs(this,_v(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,u,c,f,d;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(u=t.tenantId)!==null&&u!==void 0?u:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(f=t.createdAt)!==null&&f!==void 0?f:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:Y,isAnonymous:ce,providerData:se,stsTokenManager:T}=t;j(x&&T,e,"internal-error");const g=vr.fromJSON(this.name,T);j(typeof x=="string",e,"internal-error"),hn(m,e.name),hn(v,e.name),j(typeof Y=="boolean",e,"internal-error"),j(typeof ce=="boolean",e,"internal-error"),hn(w,e.name),hn(b,e.name),hn(k,e.name),hn(P,e.name),hn(O,e.name),hn(U,e.name);const _=new Ht({uid:x,auth:e,email:v,emailVerified:Y,displayName:m,isAnonymous:ce,photoURL:b,phoneNumber:w,tenantId:k,stsTokenManager:g,createdAt:O,lastLoginAt:U});return se&&Array.isArray(se)&&(_.providerData=se.map(E=>Object.assign({},E))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new vr;s.updateFromServerResponse(t);const i=new Ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?md(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new vr;u.updateFromIdToken(r);const c=new Ht({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,f),c}}/**
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
 */const eh=new Map;function Wt(n){Yt(n instanceof Function,"Expected a class definition");let e=eh.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,eh.set(n,e),e)}/**
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
 */class gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gd.type="NONE";const th=gd;/**
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
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class Er{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Er(Wt(th),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||Wt(th);const a=Ki(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const d=await f._get(a);if(d){const m=Ht._fromJSON(e,d);f!==i&&(u=m),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Er(i,e,r):(i=c[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Er(i,e,r))}}/**
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
 */function nh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wd(e))return"Blackberry";if(Id(e))return"Webos";if(yd(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(Td(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _d(n=Le()){return/firefox\//i.test(n)}function yd(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(n=Le()){return/crios\//i.test(n)}function Ed(n=Le()){return/iemobile/i.test(n)}function Td(n=Le()){return/android/i.test(n)}function wd(n=Le()){return/blackberry/i.test(n)}function Id(n=Le()){return/webos/i.test(n)}function Qu(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rv(n=Le()){var e;return Qu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sv(){return H_()&&document.documentMode===10}function Ad(n=Le()){return Qu(n)||Td(n)||Id(n)||wd(n)||/windows phone/i.test(n)||Ed(n)}/**
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
 */function Rd(n,e=[]){let t;switch(n){case"Browser":t=nh(Le());break;case"Worker":t=`${nh(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wr}/${r}`}/**
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
 */class Pv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const c=e(i);a(c)}catch(c){u(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bv(n,e={}){return Kr(n,"GET","/v2/passwordPolicy",No(n,e))}/**
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
 */const Cv=6;class kv{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Cv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Vv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rh(this),this.idTokenSubscription=new rh(this),this.beforeStateQueue=new Pv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pd(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Kt(this));const t=e?Ee(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bv(this),t=new kv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Av(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gr(n){return Ee(n)}class rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z_(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dv(n){Yu=n}function Nv(n){return Yu.loadJS(n)}function Ov(){return Yu.gapiScript}function Mv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Lv(n,e){const t=$u(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(co(i,e??{}))return s;Ot(s,"already-initialized")}return t.initialize({options:e})}function xv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fv(n,e,t){const r=Gr(n);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sd(e),{host:a,port:u}=Uv(e),c=u===null?"":`:${u}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Bv()}function Sd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Uv(n){const e=Sd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:sh(a)}}}function sh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Bv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Pd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,t){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function Tr(n,e){return fd(n,"POST","/v1/accounts:signInWithIdp",No(n,e))}/**
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
 */const jv="http://localhost";class nr extends Pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=zu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new nr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tr(e,t)}buildRequest(){const e={requestUri:jv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ti(t)}return e}}/**
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
 */class Oo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ri extends Oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends ri{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class St extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nr._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return St.credential(t,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class dn extends ri{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class pn extends ri{constructor(){super("twitter.com")}static credential(e,t){return nr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function qv(n,e){return fd(n,"POST","/v1/accounts:signUp",No(n,e))}/**
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
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),a=ih(r);return new Sn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ih(r);return new Sn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ih(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function o0(n){var e;if(vt(n.app))return Promise.reject(Kt(n));const t=Gr(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await qv(t,{returnSecureToken:!0}),s=await Sn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class mo extends en{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new mo(e,t,r,s)}}function bd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(n,i,e,r):i})}async function $v(n,e,t=!1){const r=await Fs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sn._forOperation(n,"link",r)}/**
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
 */async function zv(n,e,t=!1){const{auth:r}=n;if(vt(r.app))return Promise.reject(Kt(r));const s="reauthenticate";try{const i=await Fs(n,bd(r,s,e,n),t);j(i.idToken,r,"internal-error");const a=Gu(i.idToken);j(a,r,"internal-error");const{sub:u}=a;return j(n.uid===u,r,"user-mismatch"),Sn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
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
 */async function Hv(n,e,t=!1){if(vt(n.app))return Promise.reject(Kt(n));const r="signIn",s=await bd(n,r,e),i=await Sn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Wv(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function Kv(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function a0(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function Gv(n){return Ee(n).signOut()}const go="__sak";/**
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
 */class Cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qv=1e3,Yv=10;class kd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ad(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Sv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Yv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kd.type="LOCAL";const Jv=kd;/**
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
 */class Vd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vd.type="SESSION";const Dd=Vd;/**
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
 */function Xv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Mo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async f=>f(t.origin,i)),c=await Xv(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mo.receivers=[];/**
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
 */function Ju(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Zv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,c)=>{const f=Ju("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(v.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function kt(){return window}function eE(n){kt().location.href=n}/**
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
 */function Nd(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function tE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rE(){return Nd()?self:null}/**
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
 */const Od="firebaseLocalStorageDb",sE=1,_o="firebaseLocalStorage",Md="fbase_key";class si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lo(n,e){return n.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function iE(){const n=indexedDB.deleteDatabase(Od);return new si(n).toPromise()}function hu(){const n=indexedDB.open(Od,sE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_o,{keyPath:Md})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await iE(),e(await hu()))})})}async function oh(n,e,t){const r=Lo(n,!0).put({[Md]:e,value:t});return new si(r).toPromise()}async function oE(n,e){const t=Lo(n,!1).get(e),r=await new si(t).toPromise();return r===void 0?null:r.value}function ah(n,e){const t=Lo(n,!0).delete(e);return new si(t).toPromise()}const aE=800,uE=3;class Ld{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>uE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mo._getInstance(rE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tE(),!this.activeServiceWorker)return;this.sender=new Zv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hu();return await oh(e,go,"1"),await ah(e,go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>oh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>oE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ah(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lo(s,!1).getAll();return new si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ld.type="LOCAL";const lE=Ld;new ni(3e4,6e4);/**
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
 */function Xu(n,e){return e?Wt(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zu extends Pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cE(n){return Hv(n.auth,new Zu(n),n.bypassAuthState)}function hE(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),zv(t,new Zu(n),n.bypassAuthState)}async function fE(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),$v(t,new Zu(n),n.bypassAuthState)}/**
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
 */class xd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cE;case"linkViaPopup":case"linkViaRedirect":return fE;case"reauthViaPopup":case"reauthViaRedirect":return hE;default:Ot(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dE=new ni(2e3,1e4);async function pE(n,e,t){if(vt(n.app))return Promise.reject(Tt(n,"operation-not-supported-in-this-environment"));const r=Gr(n);ld(n,e,Oo);const s=Xu(r,t);return new qn(r,"signInViaPopup",e,s).executeNotNull()}class qn extends xd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dE.get())};e()}}qn.currentPopupAction=null;/**
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
 */const mE="pendingRedirect",Gi=new Map;class gE extends xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const r=await _E(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _E(n,e){const t=Ud(e),r=Fd(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function yE(n,e){return Fd(n)._set(Ud(e),"true")}function vE(n,e){Gi.set(n._key(),e)}function Fd(n){return Wt(n._redirectPersistence)}function Ud(n){return Ki(mE,n.config.apiKey,n.name)}/**
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
 */function EE(n,e,t){return TE(n,e,t)}async function TE(n,e,t){if(vt(n.app))return Promise.reject(Kt(n));const r=Gr(n);ld(n,e,Oo),await r._initializationPromise;const s=Xu(r,t);return await yE(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function wE(n,e,t=!1){if(vt(n.app))return Promise.reject(Kt(n));const r=Gr(n),s=Xu(r,e),a=await new gE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const IE=10*60*1e3;class AE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Tt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IE&&this.cachedEventUids.clear(),this.cachedEventUids.has(uh(e))}saveEventToCache(e){this.cachedEventUids.add(uh(e)),this.lastProcessedEventTime=Date.now()}}function uh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bd(n);default:return!1}}/**
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
 */async function SE(n,e={}){return Kr(n,"GET","/v1/projects",e)}/**
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
 */const PE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bE=/^https?/;async function CE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await SE(n);for(const t of e)try{if(kE(t))return}catch{}Ot(n,"unauthorized-domain")}function kE(n){const e=lu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!bE.test(t))return!1;if(PE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const VE=new ni(3e4,6e4);function lh(){const n=kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function DE(n){return new Promise((e,t)=>{var r,s,i;function a(){lh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lh(),t(Tt(n,"network-request-failed"))},timeout:VE.get()})}if(!((s=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)a();else{const u=Mv("iframefcb");return kt()[u]=()=>{gapi.load?a():t(Tt(n,"network-request-failed"))},Nv(`${Ov()}?onload=${u}`).catch(c=>t(c))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function NE(n){return Qi=Qi||DE(n),Qi}/**
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
 */const OE=new ni(5e3,15e3),ME="__/auth/iframe",LE="emulator/auth/iframe",xE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UE(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ku(e,LE):`https://${n.config.authDomain}/${ME}`,r={apiKey:e.apiKey,appName:n.name,v:Wr},s=FE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ti(r).slice(1)}`}async function BE(n){const e=await NE(n),t=kt().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:UE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Tt(n,"network-request-failed"),u=kt().setTimeout(()=>{i(a)},OE.get());function c(){kt().clearTimeout(u),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const jE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qE=500,$E=600,zE="_blank",HE="http://localhost";class ch{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WE(n,e,t,r=qE,s=$E){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},jE),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Le().toLowerCase();t&&(u=vd(f)?zE:t),_d(f)&&(e=e||HE,c.scrollbars="yes");const d=Object.entries(c).reduce((v,[w,b])=>`${v}${w}=${b},`,"");if(Rv(f)&&u!=="_self")return KE(e||"",u),new ch(null);const m=window.open(e||"",u,d);j(m,n,"popup-blocked");try{m.focus()}catch{}return new ch(m)}function KE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const GE="__/auth/handler",QE="emulator/auth/handler",YE=encodeURIComponent("fac");async function hh(n,e,t,r,s,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wr,eventId:s};if(e instanceof Oo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",X_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof ri){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const d of Object.keys(u))u[d]===void 0&&delete u[d];const c=await n._getAppCheckToken(),f=c?`#${YE}=${encodeURIComponent(c)}`:"";return`${JE(n)}?${ti(u).slice(1)}${f}`}function JE({config:n}){return n.emulator?Ku(n,QE):`https://${n.authDomain}/${GE}`}/**
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
 */const La="webStorageSupport";class XE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dd,this._completeRedirectFn=wE,this._overrideRedirectResult=vE}async _openPopup(e,t,r,s){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await hh(e,t,r,lu(),s);return WE(e,a,Ju())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await hh(e,t,r,lu(),s);return eE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await BE(e),r=new AE(e);return t.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(La,{type:La},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[La];a!==void 0&&t(!!a),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ad()||yd()||Qu()}}const ZE=XE;var fh="@firebase/auth",dh="1.7.9";/**
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
 */class eT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nT(n){Mr(new tr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rd(n)},f=new Vv(r,s,i,c);return xv(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new tr("auth-internal",e=>{const t=Gr(e.getProvider("auth").getImmediate());return(r=>new eT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(fh,dh,tT(n)),wn(fh,dh,"esm2017")}/**
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
 */const rT=5*60,sT=ed("authIdTokenMaxAge")||rT;let ph=null;const iT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sT)return;const s=t==null?void 0:t.token;ph!==s&&(ph=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function oT(n=sd()){const e=$u(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Lv(n,{popupRedirectResolver:ZE,persistence:[lE,Jv,Dd]}),r=ed("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=iT(i.toString());Kv(t,a,()=>a(t.currentUser)),Wv(t,u=>a(u))}}const s=Xf("auth");return s&&Fv(t,`http://${s}`),t}function aT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Tt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",aT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nT("Browser");var uT="firebase",lT="10.14.1";/**
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
 */wn(uT,lT,"app");var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,jd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function _(){}_.prototype=g.prototype,T.D=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,I,S){for(var y=Array(arguments.length-2),st=2;st<arguments.length;st++)y[st-2]=arguments[st];return g.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],I=T.g[2];var S=T.g[3],y=g+(S^_&(I^S))+E[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=S+(I^g&(_^I))+E[1]+3905402710&4294967295,S=g+(y<<12&4294967295|y>>>20),y=I+(_^S&(g^_))+E[2]+606105819&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(g^I&(S^g))+E[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(S^_&(I^S))+E[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(I^g&(_^I))+E[5]+1200080426&4294967295,S=g+(y<<12&4294967295|y>>>20),y=I+(_^S&(g^_))+E[6]+2821735955&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(g^I&(S^g))+E[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(S^_&(I^S))+E[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(I^g&(_^I))+E[9]+2336552879&4294967295,S=g+(y<<12&4294967295|y>>>20),y=I+(_^S&(g^_))+E[10]+4294925233&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(g^I&(S^g))+E[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(S^_&(I^S))+E[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(I^g&(_^I))+E[13]+4254626195&4294967295,S=g+(y<<12&4294967295|y>>>20),y=I+(_^S&(g^_))+E[14]+2792965006&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(g^I&(S^g))+E[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(I^S&(_^I))+E[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(g^_))+E[6]+3225465664&4294967295,S=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(S^g))+E[11]+643717713&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(I^S))+E[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^S&(_^I))+E[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(g^_))+E[10]+38016083&4294967295,S=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(S^g))+E[15]+3634488961&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(I^S))+E[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^S&(_^I))+E[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(g^_))+E[14]+3275163606&4294967295,S=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(S^g))+E[3]+4107603335&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(I^S))+E[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^S&(_^I))+E[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(g^_))+E[2]+4243563512&4294967295,S=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(S^g))+E[7]+1735328473&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(I^S))+E[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(_^I^S)+E[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^I)+E[8]+2272392833&4294967295,S=g+(y<<11&4294967295|y>>>21),y=I+(S^g^_)+E[11]+1839030562&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^g)+E[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^S)+E[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^I)+E[4]+1272893353&4294967295,S=g+(y<<11&4294967295|y>>>21),y=I+(S^g^_)+E[7]+4139469664&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^g)+E[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^S)+E[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^I)+E[0]+3936430074&4294967295,S=g+(y<<11&4294967295|y>>>21),y=I+(S^g^_)+E[3]+3572445317&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^g)+E[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^S)+E[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^I)+E[12]+3873151461&4294967295,S=g+(y<<11&4294967295|y>>>21),y=I+(S^g^_)+E[15]+530742520&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^g)+E[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(I^(_|~S))+E[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~I))+E[7]+1126891415&4294967295,S=g+(y<<10&4294967295|y>>>22),y=I+(g^(S|~_))+E[14]+2878612391&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~g))+E[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~S))+E[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~I))+E[3]+2399980690&4294967295,S=g+(y<<10&4294967295|y>>>22),y=I+(g^(S|~_))+E[10]+4293915773&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~g))+E[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~S))+E[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~I))+E[15]+4264355552&4294967295,S=g+(y<<10&4294967295|y>>>22),y=I+(g^(S|~_))+E[6]+2734768916&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~g))+E[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~S))+E[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~I))+E[11]+3174756917&4294967295,S=g+(y<<10&4294967295|y>>>22),y=I+(g^(S|~_))+E[2]+718787259&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var _=g-this.blockSize,E=this.B,I=this.h,S=0;S<g;){if(I==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<g;)if(E[I++]=T.charCodeAt(S++),I==this.blockSize){s(this,E),I=0;break}}else for(;S<g;)if(E[I++]=T[S++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var _=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=_&255,_/=256;for(this.u(T),T=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)T[_++]=this.g[g]>>>E&255;return T};function i(T,g){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function a(T,g){this.h=g;for(var _=[],E=!0,I=T.length-1;0<=I;I--){var S=T[I]|0;E&&S==g||(_[I]=S,E=!1)}this.g=_}var u={};function c(T){return-128<=T&&128>T?i(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return P(f(-T));for(var g=[],_=1,E=0;T>=_;E++)g[E]=T/_|0,_*=4294967296;return new a(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return P(d(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),E=m,I=0;I<T.length;I+=8){var S=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+S),g);8>S?(S=f(Math.pow(g,S)),E=E.j(S).add(f(y))):(E=E.j(_),E=E.add(f(y)))}return E}var m=c(0),v=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var T=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(k(this))return"-"+P(this).toString(T);for(var g=f(Math.pow(T,6)),_=this,E="";;){var I=Y(_,g).g;_=O(_,I.j(g));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=I,b(_))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=O(this,T),k(T)?-1:b(T)?0:1};function P(T){for(var g=T.g.length,_=[],E=0;E<g;E++)_[E]=~T.g[E];return new a(_,~T.h).add(v)}n.abs=function(){return k(this)?P(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0,I=0;I<=g;I++){var S=E+(this.i(I)&65535)+(T.i(I)&65535),y=(S>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=y>>>16,S&=65535,y&=65535,_[I]=y<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(T,g){return T.add(P(g))}n.j=function(T){if(b(this)||b(T))return m;if(k(this))return k(T)?P(this).j(P(T)):P(P(this).j(T));if(k(T))return P(this.j(P(T)));if(0>this.l(w)&&0>T.l(w))return f(this.m()*T.m());for(var g=this.g.length+T.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var S=this.i(E)>>>16,y=this.i(E)&65535,st=T.i(I)>>>16,tn=T.i(I)&65535;_[2*E+2*I]+=y*tn,U(_,2*E+2*I),_[2*E+2*I+1]+=S*tn,U(_,2*E+2*I+1),_[2*E+2*I+1]+=y*st,U(_,2*E+2*I+1),_[2*E+2*I+2]+=S*st,U(_,2*E+2*I+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function U(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function x(T,g){this.g=T,this.h=g}function Y(T,g){if(b(g))throw Error("division by zero");if(b(T))return new x(m,m);if(k(T))return g=Y(P(T),g),new x(P(g.g),P(g.h));if(k(g))return g=Y(T,P(g)),new x(P(g.g),g.h);if(30<T.g.length){if(k(T)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=g;0>=E.l(T);)_=ce(_),E=ce(E);var I=se(_,1),S=se(E,1);for(E=se(E,2),_=se(_,2);!b(E);){var y=S.add(E);0>=y.l(T)&&(I=I.add(_),S=y),E=se(E,1),_=se(_,1)}return g=O(T,I.j(g)),new x(I,g)}for(I=m;0<=T.l(g);){for(_=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=f(_),y=S.j(g);k(y)||0<y.l(T);)_-=E,S=f(_),y=S.j(g);b(S)&&(S=v),I=I.add(S),T=O(T,y)}return new x(I,T)}n.A=function(T){return Y(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function ce(T){for(var g=T.g.length+1,_=[],E=0;E<g;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function se(T,g){var _=g>>5;g%=32;for(var E=T.g.length-_,I=[],S=0;S<E;S++)I[S]=0<g?T.i(S+_)>>>g|T.i(S+_+1)<<32-g:T.i(S+_);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Jn=a}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qd,Ts,$d,Yi,fu,zd,Hd,Wd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,A={next:function(){if(!p&&h<o.length){var C=h++;return{value:l(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function f(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function d(o,l,h){return o.call.apply(o.bind,arguments)}function m(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function v(o,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,v.apply(null,arguments)}function w(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function b(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,A,C){for(var N=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)N[ie-2]=arguments[ie];return l.prototype[A].apply(p,N)}}function k(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const A=o.length||0,C=p.length||0;o.length=A+C;for(let N=0;N<C;N++)o[A+N]=p[N]}else o.push(p)}}class O{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function x(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var ce=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function se(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function S(o){u.setTimeout(()=>{throw o},0)}function y(){var o=Qe;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class st{constructor(){this.h=this.g=null}add(l,h){const p=tn.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var tn=new O(()=>new di,o=>o.reset());class di{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,rn=!1,Qe=new st,Xr=()=>{const o=u.Promise.resolve(void 0);nn=()=>{o.then(mm)}};var mm=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){S(h)}var l=tn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}rn=!1};function sn(){this.s=this.s,this.C=this.C}sn.prototype.s=!1,sn.prototype.ma=function(){this.s||(this.s=!0,this.N())},sn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var gm=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function Zr(o,l){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ce){e:{try{Y(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_m[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zr.aa.h.call(this)}}b(Zr,be);var _m={2:"touch",3:"pen",4:"mouse"};Zr.prototype.h=function(){Zr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),ym=0;function vm(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++ym,this.da=this.fa=!1}function mi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gi(o){this.src=o,this.g={},this.h=0}gi.prototype.add=function(o,l,h,p,A){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var N=na(o,l,p,A);return-1<N?(l=o[N],h||(l.fa=!1)):(l=new vm(l,this.src,C,!!p,A),l.fa=h,o.push(l)),l};function ta(o,l){var h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),C;(C=0<=A)&&Array.prototype.splice.call(p,A,1),C&&(mi(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function na(o,l,h,p){for(var A=0;A<o.length;++A){var C=o[A];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==p)return A}return-1}var ra="closure_lm_"+(1e6*Math.random()|0),sa={};function kl(o,l,h,p,A){if(Array.isArray(l)){for(var C=0;C<l.length;C++)kl(o,l[C],h,p,A);return null}return h=Nl(h),o&&o[pi]?o.K(l,h,f(p)?!!p.capture:!1,A):Em(o,l,h,!1,p,A)}function Em(o,l,h,p,A,C){if(!l)throw Error("Invalid event type");var N=f(A)?!!A.capture:!!A,ie=oa(o);if(ie||(o[ra]=ie=new gi(o)),h=ie.add(l,h,p,N,C),h.proxy)return h;if(p=Tm(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)gm||(A=N),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(Dl(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Tm(){function o(h){return l.call(o.src,o.listener,h)}const l=wm;return o}function Vl(o,l,h,p,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)Vl(o,l[C],h,p,A);else p=f(p)?!!p.capture:!!p,h=Nl(h),o&&o[pi]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],h=na(C,h,p,A),-1<h&&(mi(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=oa(o))&&(l=o.g[l.toString()],o=-1,l&&(o=na(l,h,p,A)),(h=-1<o?l[o]:null)&&ia(h))}function ia(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[pi])ta(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Dl(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=oa(l))?(ta(h,o),h.h==0&&(h.src=null,l[ra]=null)):mi(o)}}}function Dl(o){return o in sa?sa[o]:sa[o]="on"+o}function wm(o,l){if(o.da)o=!0;else{l=new Zr(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&ia(o),o=h.call(p,l)}return o}function oa(o){return o=o[ra],o instanceof gi?o:null}var aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nl(o){return typeof o=="function"?o:(o[aa]||(o[aa]=function(l){return o.handleEvent(l)}),o[aa])}function Ce(){sn.call(this),this.i=new gi(this),this.M=this,this.F=null}b(Ce,sn),Ce.prototype[pi]=!0,Ce.prototype.removeEventListener=function(o,l,h,p){Vl(this,o,l,h,p)};function xe(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new be(l,o);else if(l instanceof be)l.target=l.target||o;else{var A=l;l=new be(p,o),E(l,A)}if(A=!0,h)for(var C=h.length-1;0<=C;C--){var N=l.g=h[C];A=_i(N,p,!0,l)&&A}if(N=l.g=o,A=_i(N,p,!0,l)&&A,A=_i(N,p,!1,l)&&A,h)for(C=0;C<h.length;C++)N=l.g=h[C],A=_i(N,p,!1,l)&&A}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)mi(h[p]);delete o.g[l],o.h--}}this.F=null},Ce.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ce.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function _i(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,C=0;C<l.length;++C){var N=l[C];if(N&&!N.da&&N.capture==h){var ie=N.listener,we=N.ha||N.src;N.fa&&ta(o.i,N),A=ie.call(we,p)!==!1&&A}}return A&&!p.defaultPrevented}function Ol(o,l,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Ml(o){o.g=Ol(()=>{o.g=null,o.i&&(o.i=!1,Ml(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Im extends sn{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ml(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(o){sn.call(this),this.h=o,this.g={}}b(es,sn);var Ll=[];function xl(o){se(o.g,function(l,h){this.g.hasOwnProperty(h)&&ia(l)},o),o.g={}}es.prototype.N=function(){es.aa.N.call(this),xl(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ua=u.JSON.stringify,Am=u.JSON.parse,Rm=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function la(){}la.prototype.h=null;function Fl(o){return o.h||(o.h=o.i())}function Ul(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ca(){be.call(this,"d")}b(ca,be);function ha(){be.call(this,"c")}b(ha,be);var Dn={},Bl=null;function yi(){return Bl=Bl||new Ce}Dn.La="serverreachability";function jl(o){be.call(this,Dn.La,o)}b(jl,be);function ns(o){const l=yi();xe(l,new jl(l))}Dn.STAT_EVENT="statevent";function ql(o,l){be.call(this,Dn.STAT_EVENT,o),this.stat=l}b(ql,be);function Fe(o){const l=yi();xe(l,new ql(l,o))}Dn.Ma="timingevent";function $l(o,l){be.call(this,Dn.Ma,o),this.size=l}b($l,be);function rs(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function Sm(o,l,h,p,A,C){o.info(function(){if(o.g)if(C)for(var N="",ie=C.split("&"),we=0;we<ie.length;we++){var Z=ie[we].split("=");if(1<Z.length){var ke=Z[0];Z=Z[1];var Ve=ke.split("_");N=2<=Ve.length&&Ve[1]=="type"?N+(ke+"="+Z+"&"):N+(ke+"=redacted&")}}else N=null;else N=C;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+N})}function Pm(o,l,h,p,A,C,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+C+" "+N})}function ur(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Cm(o,h)+(p?" "+p:"")})}function bm(o,l){o.info(function(){return"TIMEOUT: "+l})}ss.prototype.info=function(){};function Cm(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return ua(h)}catch{return l}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fa;function Ei(){}b(Ei,la),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},fa=new Ei;function on(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var Wl={},da={};function pa(o,l,h){o.L=1,o.v=Ai(xt(l)),o.m=h,o.P=!0,Kl(o,null)}function Kl(o,l){o.F=Date.now(),Ti(o),o.A=xt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ac(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Hl,o.g=Rc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Im(v(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ll[0]=A.toString()),A=Ll);for(var C=0;C<A.length;C++){var N=kl(h,A[C],p||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ns(),Sm(o.i,o.u,o.A,o.l,o.R,o.m)}on.prototype.ca=function(o){o=o.target;const l=this.M;l&&Ft(o)==3?l.j():this.Y(o)},on.prototype.Y=function(o){try{if(o==this.g)e:{const Ve=Ft(this.g);var l=this.g.Ba();const hr=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||pc(this.g)))){this.J||Ve!=4||l==7||(l==8||0>=hr?ns(3):ns(2)),ma(this);var h=this.g.Z();this.X=h;t:if(Gl(this)){var p=pc(this.g);o="";var A=p.length,C=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),is(this);var N="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(C&&l==A-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,Pm(this.i,this.u,this.A,this.l,this.R,Ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,we=this.g;if((ie=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ie)){var Z=ie;break t}}Z=null}if(h=Z)ur(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,h);else{this.o=!1,this.s=3,Fe(12),Nn(this),is(this);break e}}if(this.P){h=!0;let dt;for(;!this.J&&this.C<N.length;)if(dt=km(this,N),dt==da){Ve==4&&(this.s=4,Fe(14),h=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Wl){this.s=4,Fe(15),ur(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else ur(this.i,this.l,dt,null),ga(this,dt);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||N.length!=0||this.h.h||(this.s=1,Fe(16),h=!1),this.o=this.o&&h,!h)ur(this.i,this.l,N,"[Invalid Chunked Response]"),Nn(this),is(this);else if(0<N.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),wa(ke),ke.M=!0,Fe(11))}}else ur(this.i,this.l,N,null),ga(this,N);Ve==4&&Nn(this),this.o&&!this.J&&(Ve==4?Tc(this.j,this):(this.o=!1,Ti(this)))}else Km(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),Nn(this),is(this)}}}catch{}finally{}};function Gl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function km(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?da:(h=Number(l.substring(h,p)),isNaN(h)?Wl:(p+=1,p+h>l.length?da:(l=l.slice(p,p+h),o.C=p+h,l)))}on.prototype.cancel=function(){this.J=!0,Nn(this)};function Ti(o){o.S=Date.now()+o.I,Ql(o,o.I)}function Ql(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rs(v(o.ba,o),l)}function ma(o){o.B&&(u.clearTimeout(o.B),o.B=null)}on.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(bm(this.i,this.A),this.L!=2&&(ns(),Fe(17)),Nn(this),this.s=2,is(this)):Ql(this,this.S-o)};function is(o){o.j.G==0||o.J||Tc(o.j,o)}function Nn(o){ma(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,xl(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ga(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||_a(h.h,o))){if(!o.K&&_a(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ki(h),bi(h);else break e;Ta(h),Fe(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=rs(v(h.Za,h),6e3));if(1>=Xl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Mn(h,11)}else if((o.K||h.g==o)&&ki(h),!U(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let Z=A[l];if(h.T=Z[0],Z=Z[1],h.G==2)if(Z[0]=="c"){h.K=Z[1],h.ia=Z[2];const ke=Z[3];ke!=null&&(h.la=ke,h.j.info("VER="+h.la));const Ve=Z[4];Ve!=null&&(h.Aa=Ve,h.j.info("SVER="+h.Aa));const hr=Z[5];hr!=null&&typeof hr=="number"&&0<hr&&(p=1.5*hr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const dt=o.g;if(dt){const Di=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var C=p.h;C.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ya(C,C.h),C.h=null))}if(p.D){const Ia=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ia&&(p.ya=Ia,ae(p.I,p.D,Ia))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=Ac(p,p.J?p.ia:null,p.W),N.K){Zl(p.h,N);var ie=N,we=p.L;we&&(ie.I=we),ie.B&&(ma(ie),Ti(ie)),p.g=N}else vc(p);0<h.i.length&&Ci(h)}else Z[0]!="stop"&&Z[0]!="close"||Mn(h,7);else h.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Mn(h,7):Ea(h):Z[0]!="noop"&&h.l&&h.l.ta(Z),h.v=0)}}ns(4)}catch{}}var Vm=class{constructor(o,l){this.g=o,this.map=l}};function Yl(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xl(o){return o.h?1:o.g?o.g.size:0}function _a(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ya(o,l){o.g?o.g.add(l):o.h=l}function Zl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Yl.prototype.cancel=function(){if(this.i=ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ec(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return k(o.i)}function Dm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function Nm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function tc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Nm(o),p=Dm(o),A=p.length,C=0;C<A;C++)l.call(void 0,p[C],h&&h[C],o)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Om(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),A=null;if(0<=p){var C=o[h].substring(0,p);A=o[h].substring(p+1)}else C=o[h];l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function On(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof On){this.h=o.h,wi(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var l=o.i,h=new us;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),rc(this,h),this.m=o.m}else o&&(l=String(o).match(nc))?(this.h=!1,wi(this,l[1]||"",!0),this.o=os(l[2]||""),this.g=os(l[3]||"",!0),Ii(this,l[4]),this.l=os(l[5]||"",!0),rc(this,l[6]||"",!0),this.m=os(l[7]||"")):(this.h=!1,this.i=new us(null,this.h))}On.prototype.toString=function(){var o=[],l=this.j;l&&o.push(as(l,sc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(as(l,sc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(as(h,h.charAt(0)=="/"?xm:Lm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",as(h,Um)),o.join("")};function xt(o){return new On(o)}function wi(o,l,h){o.j=h?os(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function rc(o,l,h){l instanceof us?(o.i=l,Bm(o.i,o.h)):(h||(l=as(l,Fm)),o.i=new us(l,o.h))}function ae(o,l,h){o.i.set(l,h)}function Ai(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function os(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function as(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Mm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Mm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var sc=/[#\/\?@]/g,Lm=/[#\?:]/g,xm=/[#\?]/g,Fm=/[#\?@]/g,Um=/#/g;function us(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&Om(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=us.prototype,n.add=function(o,l){an(this),this.i=null,o=lr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function ic(o,l){an(o),l=lr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function oc(o,l){return an(o),l=lr(o,l),o.g.has(l)}n.forEach=function(o,l){an(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)},n.na=function(){an(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const A=o[p];for(let C=0;C<A.length;C++)h.push(l[p])}return h},n.V=function(o){an(this);let l=[];if(typeof o=="string")oc(this,o)&&(l=l.concat(this.g.get(lr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return an(this),this.i=null,o=lr(this,o),oc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function ac(o,l,h){ic(o,l),0<h.length&&(o.i=null,o.g.set(lr(o,l),k(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const C=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var A=C;N[p]!==""&&(A+="="+encodeURIComponent(String(N[p]))),o.push(A)}}return this.i=o.join("&")};function lr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Bm(o,l){l&&!o.j&&(an(o),o.i=null,o.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(ic(this,p),ac(this,A,h))},o)),o.j=l}function jm(o,l){const h=new ss;if(u.Image){const p=new Image;p.onload=w(un,h,"TestLoadImage: loaded",!0,l,p),p.onerror=w(un,h,"TestLoadImage: error",!1,l,p),p.onabort=w(un,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=w(un,h,"TestLoadImage: timeout",!1,l,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function qm(o,l){const h=new ss,p=new AbortController,A=setTimeout(()=>{p.abort(),un(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(A),C.ok?un(h,"TestPingServer: ok",!0,l):un(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),un(h,"TestPingServer: error",!1,l)})}function un(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function $m(){this.g=new Rm}function zm(o,l,h){const p=h||"";try{tc(o,function(A,C){let N=A;f(A)&&(N=ua(A)),l.push(p+C+"="+encodeURIComponent(N))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function Ri(o){this.l=o.Ub||null,this.j=o.eb||!1}b(Ri,la),Ri.prototype.g=function(){return new Si(this.l,this.j)},Ri.prototype.i=function(o){return function(){return o}}({});function Si(o,l){Ce.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Si,Ce),n=Si.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,cs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ls(this):cs(this),this.readyState==3&&uc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ls(this))},n.Qa=function(o){this.g&&(this.response=o,ls(this))},n.ga=function(){this.g&&ls(this)};function ls(o){o.readyState=4,o.l=null,o.j=null,o.v=null,cs(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function lc(o){let l="";return se(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function va(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=lc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ae(o,l,h))}function he(o){Ce.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(he,Ce);var Hm=/^https?$/i,Wm=["POST","PUT"];n=he.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fa.g(),this.v=this.o?Fl(this.o):Fl(fa),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){cc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Wm,l,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,N]of h)this.g.setRequestHeader(C,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){cc(this,C)}};function cc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,hc(o),Pi(o)}function hc(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),Pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fc(this):this.bb())},n.bb=function(){fc(this)};function fc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ft(o)!=4||o.Z()!=2)){if(o.u&&Ft(o)==4)Ol(o.Ea,0,o);else if(xe(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=N===0){var A=String(o.D).match(nc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),p=!Hm.test(A?A.toLowerCase():"")}h=p}if(h)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var C=2<Ft(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",hc(o)}}finally{Pi(o)}}}}function Pi(o,l){if(o.g){dc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||xe(o,"ready");try{h.onreadystatechange=p}catch{}}}function dc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Am(l)}};function pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Km(o){const l={};o=(o.g&&2<=Ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(U(o[p]))continue;var h=I(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[A]||[];l[A]=C,C.push(h)}T(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function mc(o){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hs("baseRetryDelayMs",5e3,o),this.cb=hs("retryDelaySeedMs",1e4,o),this.Wa=hs("forwardChannelMaxRetries",2,o),this.wa=hs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yl(o&&o.concurrentRequestLimit),this.Da=new $m,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){Fe(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ac(this,null,this.W),Ci(this)};function Ea(o){if(gc(o),o.G==3){var l=o.U++,h=xt(o.I);if(ae(h,"SID",o.K),ae(h,"RID",l),ae(h,"TYPE","terminate"),fs(o,h),l=new on(o,o.j,l),l.L=2,l.v=Ai(xt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=Rc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ti(l)}Ic(o)}function bi(o){o.g&&(wa(o),o.g.cancel(),o.g=null)}function gc(o){bi(o),o.u&&(u.clearTimeout(o.u),o.u=null),ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ci(o){if(!Jl(o.h)&&!o.s){o.s=!0;var l=o.Ga;nn||Xr(),rn||(nn(),rn=!0),Qe.add(l,o),o.B=0}}function Gm(o,l){return Xl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rs(v(o.Ga,o,l),wc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new on(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=yc(this,A,l),h=xt(this.I),ae(h,"RID",o),ae(h,"CVER",22),this.D&&ae(h,"X-HTTP-Session-Id",this.D),fs(this,h),C&&(this.O?l="headers="+encodeURIComponent(String(lc(C)))+"&"+l:this.m&&va(h,this.m,C)),ya(this.h,A),this.Ua&&ae(h,"TYPE","init"),this.P?(ae(h,"$req",l),ae(h,"SID","null"),A.T=!0,pa(A,h,null)):pa(A,h,l),this.G=2}}else this.G==3&&(o?_c(this,o):this.i.length==0||Jl(this.h)||_c(this))};function _c(o,l){var h;l?h=l.l:h=o.U++;const p=xt(o.I);ae(p,"SID",o.K),ae(p,"RID",h),ae(p,"AID",o.T),fs(o,p),o.m&&o.o&&va(p,o.m,o.o),h=new on(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=yc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ya(o.h,h),pa(h,p,l)}function fs(o,l){o.H&&se(o.H,function(h,p){ae(l,p,h)}),o.l&&tc({},function(h,p){ae(l,p,h)})}function yc(o,l,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;e:{var A=o.i;let C=-1;for(;;){const N=["count="+h];C==-1?0<h?(C=A[0].g,N.push("ofs="+C)):C=0:N.push("ofs="+C);let ie=!0;for(let we=0;we<h;we++){let Z=A[we].g;const ke=A[we].map;if(Z-=C,0>Z)C=Math.max(0,A[we].g-100),ie=!1;else try{zm(ke,N,"req"+Z+"_")}catch{p&&p(ke)}}if(ie){p=N.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function vc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;nn||Xr(),rn||(nn(),rn=!0),Qe.add(l,o),o.v=0}}function Ta(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rs(v(o.Fa,o),wc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ec(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rs(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),bi(this),Ec(this))};function wa(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ec(o){o.g=new on(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=xt(o.qa);ae(l,"RID","rpc"),ae(l,"SID",o.K),ae(l,"AID",o.T),ae(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(l,"TO",o.ja),ae(l,"TYPE","xmlhttp"),fs(o,l),o.m&&o.o&&va(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ai(xt(l)),h.m=null,h.P=!0,Kl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,bi(this),Ta(this),Fe(19))};function ki(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Tc(o,l){var h=null;if(o.g==l){ki(o),wa(o),o.g=null;var p=2}else if(_a(o.h,l))h=l.D,Zl(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;p=yi(),xe(p,new $l(p,h)),Ci(o)}else vc(o);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&Gm(o,l)||p==2&&Ta(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Mn(o,5);break;case 4:Mn(o,10);break;case 3:Mn(o,6);break;default:Mn(o,2)}}}function wc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Mn(o,l){if(o.j.info("Error code "+l),l==2){var h=v(o.fb,o),p=o.Xa;const A=!p;p=new On(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||wi(p,"https"),Ai(p),A?jm(p.toString(),h):qm(p.toString(),h)}else Fe(2);o.G=0,o.l&&o.l.sa(l),Ic(o),gc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Ic(o){if(o.G=0,o.ka=[],o.l){const l=ec(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Ac(o,l,h){var p=h instanceof On?xt(h):new On(h);if(p.g!="")l&&(p.g=l+"."+p.g),Ii(p,p.s);else{var A=u.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var C=new On(null);p&&wi(C,p),l&&(C.g=l),A&&Ii(C,A),h&&(C.l=h),p=C}return h=o.D,l=o.ya,h&&l&&ae(p,h,l),ae(p,"VER",o.la),fs(o,p),p}function Rc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new he(new Ri({eb:h})):new he(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sc(){}n=Sc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vi(){}Vi.prototype.g=function(o,l){return new Ye(o,l)};function Ye(o,l){Ce.call(this),this.g=new mc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new cr(this)}b(Ye,Ce),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Ea(this.g)},Ye.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ua(o),o=h);l.i.push(new Vm(l.Ya++,o)),l.G==3&&Ci(l)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Ea(this.g),delete this.g,Ye.aa.N.call(this)};function Pc(o){ca.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}b(Pc,ca);function bc(){ha.call(this),this.status=1}b(bc,ha);function cr(o){this.g=o}b(cr,Sc),cr.prototype.ua=function(){xe(this.g,"a")},cr.prototype.ta=function(o){xe(this.g,new Pc(o))},cr.prototype.sa=function(o){xe(this.g,new bc)},cr.prototype.ra=function(){xe(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Wd=function(){return new Vi},Hd=function(){return yi()},zd=Dn,fu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,Yi=vi,zl.COMPLETE="complete",$d=zl,Ul.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Ts=Ul,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,qd=he}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});const gh="@firebase/firestore";/**
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
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
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
 */let Qr="10.14.0";/**
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
 */const rr=new ju("@firebase/firestore");function ps(){return rr.logLevel}function M(n,...e){if(rr.logLevel<=J.DEBUG){const t=e.map(el);rr.debug(`Firestore (${Qr}): ${n}`,...t)}}function Jt(n,...e){if(rr.logLevel<=J.ERROR){const t=e.map(el);rr.error(`Firestore (${Qr}): ${n}`,...t)}}function Lr(n,...e){if(rr.logLevel<=J.WARN){const t=e.map(el);rr.warn(`Firestore (${Qr}): ${n}`,...t)}}function el(n){if(typeof n=="string")return n;try{/**
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
 */function q(n="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+n;throw Jt(e),new Error(e)}function re(n,e){n||q()}function H(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Kd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class hT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fT{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new Kd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Ne(e)}}class dT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new dT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){re(this.o===void 0);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new mT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _T(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Gd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=_T(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function xr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class ve{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ve(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new ve(0,0))}static max(){return new z(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Us{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends Us{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const yT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Us{construct(e,t,r){return new Re(e,t,r)}static isValidIdentifier(e){return yT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new L(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new L(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ue.fromString(e))}static fromName(e){return new F(ue.fromString(e).popFirst(5))}static empty(){return new F(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ue(e.slice()))}}function vT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ve(t+1,0):new ve(t,r));return new Pn(s,F.empty(),e)}function ET(n){return new Pn(n.readTime,n.key,-1)}class Pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Pn(z.min(),F.empty(),-1)}static max(){return new Pn(z.max(),F.empty(),-1)}}function TT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const wT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ii(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==wT)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const f=c;t(e[f]).next(d=>{a[f]=d,++u,u===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function AT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function oi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class tl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tl.oe=-1;function xo(n){return n==null}function yo(n){return n===0&&1/n==-1/0}function RT(n){return typeof n=="number"&&Number.isInteger(n)&&!yo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function _h(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function or(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ie(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yh(this.data.getIterator())}getIteratorFrom(e){return new yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new rt([])}unionWith(e){let t=new Se(Re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yd("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const ST=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(n){if(re(!!n),typeof n=="string"){let e=0;const t=ST.exec(n);if(re(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */function nl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rl(n){const e=n.mapValue.fields.__previous_value__;return nl(e)?rl(e):e}function Bs(n){const e=bn(n.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
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
 */class PT{constructor(e,t,r,s,i,a,u,c,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=f}}class js{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof js&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xi={mapValue:{}};function ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?nl(n)?4:CT(n)?9007199254740991:bT(n)?10:11:q()}function Mt(n,e){if(n===e)return!0;const t=ir(n);if(t!==ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bs(n).isEqual(Bs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=bn(s.timestampValue),u=bn(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=de(s.doubleValue),u=de(i.doubleValue);return a===u?yo(a)===yo(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return xr(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(_h(a)!==_h(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Mt(a[c],u[c])))return!1;return!0}(n,e);default:return q()}}function qs(n,e){return(n.values||[]).find(t=>Mt(t,e))!==void 0}function Fr(n,e){if(n===e)return 0;const t=ir(n),r=ir(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const u=de(i.integerValue||i.doubleValue),c=de(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(n,e);case 3:return vh(n.timestampValue,e.timestampValue);case 4:return vh(Bs(n),Bs(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(i,a){const u=sr(i),c=sr(a);return u.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let f=0;f<u.length&&f<c.length;f++){const d=ee(u[f],c[f]);if(d!==0)return d}return ee(u.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const u=ee(de(i.latitude),de(a.latitude));return u!==0?u:ee(de(i.longitude),de(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Eh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var u,c,f,d;const m=i.fields||{},v=a.fields||{},w=(u=m.value)===null||u===void 0?void 0:u.arrayValue,b=(c=v.value)===null||c===void 0?void 0:c.arrayValue,k=ee(((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Eh(w,b)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===xi.mapValue&&a===xi.mapValue)return 0;if(i===xi.mapValue)return 1;if(a===xi.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const v=ee(c[m],d[m]);if(v!==0)return v;const w=Fr(u[c[m]],f[d[m]]);if(w!==0)return w}return ee(c.length,d.length)}(n.mapValue,e.mapValue);default:throw q()}}function vh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=bn(n),r=bn(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function Eh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fr(t[s],r[s]);if(i)return i}return ee(t.length,r.length)}function Ur(n){return du(n)}function du(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=bn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=du(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${du(t.fields[a])}`;return s+"}"}(n.mapValue):q()}function pu(n){return!!n&&"integerValue"in n}function sl(n){return!!n&&"arrayValue"in n}function Th(n){return!!n&&"nullValue"in n}function wh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ji(n){return!!n&&"mapValue"in n}function bT(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ds(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return or(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ds(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ds(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=Re.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=Ds(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ji(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){or(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Ds(this.value))}}function Jd(n){const e=[];return or(n.fields,(t,r)=>{const s=new Re([t]);if(Ji(r)){const i=Jd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new rt(e)}/**
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
 */class Oe{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Oe(e,0,z.min(),z.min(),z.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Oe(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new Oe(e,2,t,z.min(),z.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,z.min(),z.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vo{constructor(e,t){this.position=e,this.inclusive=t}}function Ih(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=Fr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ah(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Eo{constructor(e,t="asc"){this.field=e,this.dir=t}}function kT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xd{}class ye extends Xd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new DT(e,t,r):t==="array-contains"?new MT(e,r):t==="in"?new LT(e,r):t==="not-in"?new xT(e,r):t==="array-contains-any"?new FT(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new NT(e,r):new OT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fr(t,this.value)):t!==null&&ir(this.value)===ir(t)&&this.matchesComparison(Fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Xd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Lt(e,t)}matches(e){return Zd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zd(n){return n.op==="and"}function ep(n){return VT(n)&&Zd(n)}function VT(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function mu(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Ur(n.value);if(ep(n))return n.filters.map(e=>mu(e)).join(",");{const e=n.filters.map(t=>mu(t)).join(",");return`${n.op}(${e})`}}function tp(n,e){return n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,e):n instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,u)=>i&&tp(a,s.filters[u]),!0):!1}(n,e):void q()}function np(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${Ur(t.value)}`}(n):n instanceof Lt?function(t){return t.op.toString()+" {"+t.getFilters().map(np).join(" ,")+"}"}(n):"Filter"}class DT extends ye{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class NT extends ye{constructor(e,t){super(e,"in",t),this.keys=rp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class OT extends ye{constructor(e,t){super(e,"not-in",t),this.keys=rp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class MT extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sl(t)&&qs(t.arrayValue,this.value)}}class LT extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class xT extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qs(this.value.arrayValue,t)}}class FT extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
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
 */class UT{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function Rh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new UT(n,e,t,r,s,i,a)}function il(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>mu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ur(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ur(r)).join(",")),e.ue=t}return e.ue}function ol(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ah(n.startAt,e.startAt)&&Ah(n.endAt,e.endAt)}function gu(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fo{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function BT(n,e,t,r,s,i,a,u){return new Fo(n,e,t,r,s,i,a,u)}function Uo(n){return new Fo(n)}function Sh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jT(n){return n.collectionGroup!==null}function Ns(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Se(Re.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,r))}),t.has(Re.keyField().canonicalString())||e.ce.push(new Eo(Re.keyField(),r))}return e.ce}function Vt(n){const e=H(n);return e.le||(e.le=qT(e,Ns(n))),e.le}function qT(n,e){if(n.limitType==="F")return Rh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const t=n.endAt?new vo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new vo(n.startAt.position,n.startAt.inclusive):null;return Rh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _u(n,e,t){return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bo(n,e){return ol(Vt(n),Vt(e))&&n.limitType===e.limitType}function sp(n){return`${il(Vt(n))}|lt:${n.limitType}`}function pr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>np(s)).join(", ")}]`),xo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ur(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ur(s)).join(",")),`Target(${r})`}(Vt(n))}; limitType=${n.limitType})`}function jo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,c){const f=Ih(a,u,c);return a.inclusive?f<=0:f<0}(r.startAt,Ns(r),s)||r.endAt&&!function(a,u,c){const f=Ih(a,u,c);return a.inclusive?f>=0:f>0}(r.endAt,Ns(r),s))}(n,e)}function $T(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ip(n){return(e,t)=>{let r=!1;for(const s of Ns(n)){const i=zT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zT(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,a,u){const c=a.data.field(i),f=u.data.field(i);return c!==null&&f!==null?Fr(c,f):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class Yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qd(this.inner)}size(){return this.innerSize}}/**
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
 */const HT=new le(F.comparator);function Xt(){return HT}const op=new le(F.comparator);function ws(...n){let e=op;for(const t of n)e=e.insert(t.key,t);return e}function ap(n){let e=op;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $n(){return Os()}function up(){return Os()}function Os(){return new Yr(n=>n.toString(),(n,e)=>n.isEqual(e))}const WT=new le(F.comparator),KT=new Se(F.comparator);function Q(...n){let e=KT;for(const t of n)e=e.add(t);return e}const GT=new Se(ee);function QT(){return GT}/**
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
 */function al(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(e)?"-0":e}}function lp(n){return{integerValue:""+n}}function YT(n,e){return RT(e)?lp(e):al(n,e)}/**
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
 */class qo{constructor(){this._=void 0}}function JT(n,e,t){return n instanceof $s?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nl(i)&&(i=rl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof zs?hp(n,e):n instanceof Hs?fp(n,e):function(s,i){const a=cp(s,i),u=Ph(a)+Ph(s.Pe);return pu(a)&&pu(s.Pe)?lp(u):al(s.serializer,u)}(n,e)}function XT(n,e,t){return n instanceof zs?hp(n,e):n instanceof Hs?fp(n,e):t}function cp(n,e){return n instanceof To?function(r){return pu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $s extends qo{}class zs extends qo{constructor(e){super(),this.elements=e}}function hp(n,e){const t=dp(e);for(const r of n.elements)t.some(s=>Mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Hs extends qo{constructor(e){super(),this.elements=e}}function fp(n,e){let t=dp(e);for(const r of n.elements)t=t.filter(s=>!Mt(s,r));return{arrayValue:{values:t}}}class To extends qo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ph(n){return de(n.integerValue||n.doubleValue)}function dp(n){return sl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ZT{constructor(e,t){this.field=e,this.transform=t}}function ew(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof zs&&s instanceof zs||r instanceof Hs&&s instanceof Hs?xr(r.elements,s.elements,Mt):r instanceof To&&s instanceof To?Mt(r.Pe,s.Pe):r instanceof $s&&s instanceof $s}(n.transform,e.transform)}class tw{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $o{}function pp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zo(n.key,Ge.none()):new ai(n.key,n.data,Ge.none());{const t=n.data,r=ze.empty();let s=new Se(Re.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vn(n.key,r,new rt(s.toArray()),Ge.none())}}function nw(n,e,t){n instanceof ai?function(s,i,a){const u=s.value.clone(),c=Ch(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Vn?function(s,i,a){if(!Xi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Ch(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(mp(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ms(n,e,t,r){return n instanceof ai?function(i,a,u,c){if(!Xi(i.precondition,a))return u;const f=i.value.clone(),d=kh(i.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vn?function(i,a,u,c){if(!Xi(i.precondition,a))return u;const f=kh(i.fieldTransforms,c,a),d=a.data;return d.setAll(mp(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,u){return Xi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function rw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=cp(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function bh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xr(r,s,(i,a)=>ew(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends $o{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vn extends $o{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ch(n,e,t){const r=new Map;re(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,XT(a,u,t[s]))}return r}function kh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,JT(i,a,e))}return r}class zo extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sw extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ms(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ms(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=up();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const c=pp(a,u);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(t,r)=>bh(t,r))&&xr(this.baseMutations,e.baseMutations,(t,r)=>bh(t,r))}}class ul{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length);let s=function(){return WT}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ul(e,t,r,s)}}/**
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
 */class ow{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var me,X;function uw(n){switch(n){default:return q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function gp(n){if(n===void 0)return Jt("GRPC error has no .code"),V.UNKNOWN;switch(n){case me.OK:return V.OK;case me.CANCELLED:return V.CANCELLED;case me.UNKNOWN:return V.UNKNOWN;case me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case me.INTERNAL:return V.INTERNAL;case me.UNAVAILABLE:return V.UNAVAILABLE;case me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case me.NOT_FOUND:return V.NOT_FOUND;case me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case me.ABORTED:return V.ABORTED;case me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case me.DATA_LOSS:return V.DATA_LOSS;default:return q()}}(X=me||(me={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lw(){return new TextEncoder}/**
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
 */const cw=new Jn([4294967295,4294967295],0);function Vh(n){const e=lw().encode(n),t=new jd;return t.update(e),new Uint8Array(t.digest())}function Dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jn([t,r],0),new Jn([s,i],0)]}class ll{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Is(`Invalid padding: ${t}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Is(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Jn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Jn.fromNumber(r)));return s.compare(cw)===1&&(s=new Jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Vh(e),[r,s]=Dh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ll(i,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=Vh(e),[r,s]=Dh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ho{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ho(z.min(),s,new le(ee),Xt(),Q())}}class ui{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ui(r,t,Q(),Q(),Q())}}/**
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
 */class Zi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class _p{constructor(e,t){this.targetId=e,this.me=t}}class yp{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nh{constructor(){this.fe=0,this.ge=Mh(),this.pe=Pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q()}}),new ui(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Mh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xt(),this.qe=Oh(),this.Qe=new le(ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(gu(i))if(r===0){const a=new F(i.path);this.Ue(t,a,Oe.newNoDocument(a,z.min()))}else re(r===1);else{const a=this.Ye(t);if(a!==r){const u=this.Ze(e),c=u?this.Xe(u,e,a):1;if(c!==0){this.je(t);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=sr(r).toUint8Array()}catch(c){if(c instanceof Yd)return Lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new ll(a,s,i)}catch(c){return Lr(c instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const u=this.Je(a);if(u){if(i.current&&gu(u.target)){const c=new F(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,Oe.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=Q();this.qe.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const f=this.Je(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ho(e,t,this.Qe,this.ke,r);return this.ke=Xt(),this.qe=Oh(),this.Qe=new le(ee),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Se(ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Oh(){return new le(F.comparator)}function Mh(){return new le(F.comparator)}const fw={asc:"ASCENDING",desc:"DESCENDING"},dw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pw={and:"AND",or:"OR"};class mw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yu(n,e){return n.useProto3Json||xo(e)?e:{value:e}}function wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gw(n,e){return wo(n,e.toTimestamp())}function Dt(n){return re(!!n),z.fromTimestamp(function(t){const r=bn(t);return new ve(r.seconds,r.nanos)}(n))}function cl(n,e){return vu(n,e).canonicalString()}function vu(n,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ep(n){const e=ue.fromString(n);return re(Rp(e)),e}function Eu(n,e){return cl(n.databaseId,e.path)}function xa(n,e){const t=Ep(e);if(t.get(1)!==n.databaseId.projectId)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(wp(t))}function Tp(n,e){return cl(n.databaseId,e)}function _w(n){const e=Ep(n);return e.length===4?ue.emptyPath():wp(e)}function Tu(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wp(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Lh(n,e,t){return{name:Eu(n,e),fields:t.value.mapValue.fields}}function yw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(re(d===void 0||typeof d=="string"),Pe.fromBase64String(d||"")):(re(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Pe.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(f){const d=f.code===void 0?V.UNKNOWN:gp(f.code);return new L(d,f.message||"")}(a);t=new yp(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xa(n,r.document.name),i=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):z.min(),u=new ze({mapValue:{fields:r.document.fields}}),c=Oe.newFoundDocument(s,i,a,u),f=r.targetIds||[],d=r.removedTargetIds||[];t=new Zi(f,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xa(n,r.document),i=r.readTime?Dt(r.readTime):z.min(),a=Oe.newNoDocument(s,i),u=r.removedTargetIds||[];t=new Zi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xa(n,r.document),i=r.removedTargetIds||[];t=new Zi([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new aw(s,i),u=r.targetId;t=new _p(u,a)}}return t}function vw(n,e){let t;if(e instanceof ai)t={update:Lh(n,e.key,e.value)};else if(e instanceof zo)t={delete:Eu(n,e.key)};else if(e instanceof Vn)t={update:Lh(n,e.key,e.data),updateMask:bw(e.fieldMask)};else{if(!(e instanceof sw))return q();t={verify:Eu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const u=a.transform;if(u instanceof $s)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof zs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof To)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(n,e.precondition)),t}function Ew(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Dt(s.updateTime):Dt(i);return a.isEqual(z.min())&&(a=Dt(i)),new tw(a,s.transformResults||[])}(t,e))):[]}function Tw(n,e){return{documents:[Tp(n,e.path)]}}function ww(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Tp(n,s);const i=function(f){if(f.length!==0)return Ap(Lt.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(v){return{field:mr(v.field),direction:Rw(v.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=yu(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function Iw(n){let e=_w(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const v=Ip(m);return v instanceof Lt&&ep(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(v=>function(b){return new Eo(gr(b.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(v))}(t.orderBy));let u=null;t.limit&&(u=function(m){let v;return v=typeof m=="object"?m.value:m,xo(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(m){const v=!!m.before,w=m.values||[];return new vo(w,v)}(t.startAt));let f=null;return t.endAt&&(f=function(m){const v=!m.before,w=m.values||[];return new vo(w,v)}(t.endAt)),BT(e,s,a,i,u,"F",c,f)}function Aw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ip(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=gr(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gr(t.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gr(t.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=gr(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return ye.create(gr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Lt.create(t.compositeFilter.filters.map(r=>Ip(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function Rw(n){return fw[n]}function Sw(n){return dw[n]}function Pw(n){return pw[n]}function mr(n){return{fieldPath:n.canonicalString()}}function gr(n){return Re.fromServerFormat(n.fieldPath)}function Ap(n){return n instanceof ye?function(t){if(t.op==="=="){if(wh(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NAN"}};if(Th(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wh(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NOT_NAN"}};if(Th(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(t.field),op:Sw(t.op),value:t.value}}}(n):n instanceof Lt?function(t){const r=t.getFilters().map(s=>Ap(s));return r.length===1?r[0]:{compositeFilter:{op:Pw(t.op),filters:r}}}(n):q()}function bw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _n{constructor(e,t,r,s,i=z.min(),a=z.min(),u=Pe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cw{constructor(e){this.ct=e}}function kw(n){const e=Iw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_u(e,e.limit,"L"):e}/**
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
 */class Vw{constructor(){this.un=new Dw}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Pn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Dw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Se(ue.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Se(ue.comparator)).toArray()}}/**
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
 */class Br{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Br(0)}static kn(){return new Br(-1)}}/**
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
 */class Nw{constructor(){this.changes=new Yr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ow{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Mw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ms(r.mutation,s,rt.empty(),ve.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=$n();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ws();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=$n();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let i=Xt();const a=Os(),u=function(){return Os()}();return t.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Vn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Ms(d.mutation,f,d.mutation.getFieldMask(),ve.now())):a.set(f.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((f,d)=>a.set(f,d)),t.forEach((f,d)=>{var m;return u.set(f,new Ow(d,(m=a.get(f))!==null&&m!==void 0?m:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Os();let s=new le((a,u)=>a-u),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const f=t.get(c);if(f===null)return;let d=r.get(c)||rt.empty();d=u.applyToLocalView(f,d),r.set(c,d);const m=(s.get(u.batchId)||Q()).add(c);s=s.insert(u.batchId,m)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),f=c.key,d=c.value,m=up();d.forEach(v=>{if(!i.has(v)){const w=pp(t.get(v),r.get(v));w!==null&&m.set(v,w),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,m))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve($n());let u=-1,c=i;return a.next(f=>D.forEach(f,(d,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(v=>{c=c.insert(d,v)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,c,f,Q())).next(d=>({batchId:u,changes:ap(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let s=ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ws();return this.indexManager.getCollectionParents(e,i).next(u=>D.forEach(u,c=>{const f=function(m,v){return new Fo(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(d=>{d.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Oe.newInvalidDocument(d)))});let u=ws();return a.forEach((c,f)=>{const d=i.get(c);d!==void 0&&Ms(d.mutation,f,rt.empty(),ve.now()),jo(t,f)&&(u=u.insert(c,f))}),u})}}/**
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
 */class Lw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:kw(s.bundledQuery),readTime:Dt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class xw{constructor(){this.overlays=new le(F.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$n();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=$n(),i=t.length+1,a=new F(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,f=c.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new le((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=$n(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const u=$n(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>u.set(f,d)),!(u.size()>=s)););return D.resolve(u)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ow(t,r));let i=this.Ir.get(t);i===void 0&&(i=Q(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Fw{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class hl{constructor(){this.Tr=new Se(Te.Er),this.dr=new Se(Te.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Te(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Te(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new F(new ue([])),r=new Te(t,e),s=new Te(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new F(new ue([])),r=new Te(t,e),s=new Te(t,e+1);let i=Q();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Te(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return F.comparator(e.key,t.key)||ee(e.wr,t.wr)}static Ar(e,t){return ee(e.wr,t.wr)||F.comparator(e.key,t.key)}}/**
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
 */class Uw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Se(Te.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new iw(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new Te(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Te(t,0),s=new Te(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);i.push(u)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(ee);return t.forEach(s=>{const i=new Te(s,0),a=new Te(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],u=>{r=r.add(u.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new Te(new F(i),0);let u=new Se(ee);return this.br.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(c.wr)),!0)},a),D.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){re(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,s=>{const i=new Te(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Te(t,0),s=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Bw{constructor(e){this.Mr=e,this.docs=function(){return new le(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=Xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Oe.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Xt();const a=t.path,u=new F(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||TT(ET(d),r)<=0||(s.has(d.key)||jo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new jw(this)}getSize(e){return D.resolve(this.size)}}class jw extends Nw{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class qw{constructor(e){this.persistence=e,this.Nr=new Yr(t=>il(t),ol),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hl,this.targetCount=0,this.kr=Br.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Br(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class $w{constructor(e,t){this.qr={},this.overlays={},this.Qr=new tl(0),this.Kr=!1,this.Kr=!0,this.$r=new Fw,this.referenceDelegate=e(this),this.Ur=new qw(this),this.indexManager=new Vw,this.remoteDocumentCache=function(s){return new Bw(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Cw(t),this.Gr=new Lw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Uw(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new zw(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class zw extends IT{constructor(e){super(),this.currentSequenceNumber=e}}class fl{constructor(e){this.persistence=e,this.Jr=new hl,this.Yr=null}static Zr(e){return new fl(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const s=F.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class dl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dl(e,t.fromCache,r,s)}}/**
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
 */class Hw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ww{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return W_()?8:AT(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Hw;return this.Xi(e,t,a).next(u=>{if(i.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ps()<=J.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(ps()<=J.DEBUG&&M("QueryEngine","Query:",pr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ps()<=J.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):D.resolve())}Yi(e,t){if(Sh(t))return D.resolve(null);let r=Vt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=_u(t,null,"F"),r=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Q(...i);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const f=this.ts(t,u);return this.ns(t,f,a,c.readTime)?this.Yi(e,_u(t,null,"F")):this.rs(e,f,t,c)}))})))}Zi(e,t,r,s){return Sh(t)||s.isEqual(z.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?D.resolve(null):(ps()<=J.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pr(t)),this.rs(e,a,t,vT(s,-1)).next(u=>u))})}ts(e,t){let r=new Se(ip(e));return t.forEach((s,i)=>{jo(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ps()<=J.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",pr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Pn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class Kw{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new le(ee),this._s=new Yr(i=>il(i),ol),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Gw(n,e,t,r){return new Kw(n,e,t,r)}async function Sp(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],u=[];let c=Q();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of i){u.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:u}))})})}function Qw(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,f,d){const m=f.batch,v=m.keys();let w=D.resolve();return v.forEach(b=>{w=w.next(()=>d.getEntry(c,b)).next(k=>{const P=f.docVersions.get(b);re(P!==null),k.version.compareTo(P)<0&&(m.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),d.addEntry(k)))})}),w.next(()=>u.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=Q();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(c=c.add(u.batch.mutations[f].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Pp(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Yw(n,e){const t=H(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const u=[];e.targetChanges.forEach((d,m)=>{const v=s.get(m);if(!v)return;u.push(t.Ur.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,d.addedDocuments,m)));let w=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(Pe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(m,w),function(k,P,O){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(v,w,d)&&u.push(t.Ur.updateTargetData(i,w))});let c=Xt(),f=Q();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),u.push(Jw(i,a,e.documentUpdates).next(d=>{c=d.Ps,f=d.Is})),!r.isEqual(z.min())){const d=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(d)}return D.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,f)).next(()=>c)}).then(i=>(t.os=s,i))}function Jw(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Xt();return t.forEach((u,c)=>{const f=i.get(u);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Xw(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zw(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new _n(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function wu(n,e,t){const r=H(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!oi(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xh(n,e,t){const r=H(n);let s=z.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,d){const m=H(c),v=m._s.get(d);return v!==void 0?D.resolve(m.os.get(v)):m.Ur.getTargetData(f,d)}(r,a,Vt(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?i:Q())).next(u=>(eI(r,$T(e),u),{documents:u,Ts:i})))}function eI(n,e,t){let r=n.us.get(e)||z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Fh{constructor(){this.activeTargetIds=QT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tI{constructor(){this.so=new Fh,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nI{_o(e){}shutdown(){}}/**
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
 */class Uh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fi=null;function Fa(){return Fi===null?Fi=function(){return 268435456+Math.round(2147483648*Math.random())}():Fi++,"0x"+Fi.toString(16)}/**
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
 */const rI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const De="WebChannelConnection";class iI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const u=Fa(),c=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${u}:`,c,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,a),this.No(t,c,f,s).then(d=>(M("RestConnection",`Received RPC '${t}' ${u}: `,d),d),d=>{throw Lr("RestConnection",`RPC '${t}' ${u} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(t,r,s,i,a,u){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=rI[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Fa();return new Promise((a,u)=>{const c=new qd;c.setWithCredentials(!0),c.listenOnce($d.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yi.NO_ERROR:const d=c.getResponseJson();M(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Yi.TIMEOUT:M(De,`RPC '${e}' ${i} timed out`),u(new L(V.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const m=c.getStatus();if(M(De,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const w=v==null?void 0:v.error;if(w&&w.status&&w.message){const b=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(w.status);u(new L(b,w.message))}else u(new L(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new L(V.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{M(De,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);M(De,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=Fa(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Wd(),u=Hd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");M(De,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let v=!1,w=!1;const b=new sI({Io:P=>{w?M(De,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(v||(M(De,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),M(De,`RPC '${e}' stream ${s} sending:`,P),m.send(P))},To:()=>m.close()}),k=(P,O,U)=>{P.listen(O,x=>{try{U(x)}catch(Y){setTimeout(()=>{throw Y},0)}})};return k(m,Ts.EventType.OPEN,()=>{w||(M(De,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),k(m,Ts.EventType.CLOSE,()=>{w||(w=!0,M(De,`RPC '${e}' stream ${s} transport closed`),b.So())}),k(m,Ts.EventType.ERROR,P=>{w||(w=!0,Lr(De,`RPC '${e}' stream ${s} transport errored:`,P),b.So(new L(V.UNAVAILABLE,"The operation could not be completed")))}),k(m,Ts.EventType.MESSAGE,P=>{var O;if(!w){const U=P.data[0];re(!!U);const x=U,Y=x.error||((O=x[0])===null||O===void 0?void 0:O.error);if(Y){M(De,`RPC '${e}' stream ${s} received error:`,Y);const ce=Y.status;let se=function(_){const E=me[_];if(E!==void 0)return gp(E)}(ce),T=Y.message;se===void 0&&(se=V.INTERNAL,T="Unknown error status: "+ce+" with message "+Y.message),w=!0,b.So(new L(se,T)),m.close()}else M(De,`RPC '${e}' stream ${s} received:`,U),b.bo(U)}}),k(u,zd.STAT_EVENT,P=>{P.stat===fu.PROXY?M(De,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===fu.NOPROXY&&M(De,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Ua(){return typeof document<"u"?document:null}/**
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
 */function Wo(n){return new mw(n,!0)}/**
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
 */class bp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Cp{constructor(e,t,r,s,i,a,u,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Jt(t.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oI extends Cp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=yw(this.serializer,e),r=function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Dt(a.readTime):z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Tu(this.serializer),t.addTarget=function(i,a){let u;const c=a.target;if(u=gu(c)?{documents:Tw(i,c)}:{query:ww(i,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=vp(i,a.resumeToken);const f=yu(i,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=wo(i,a.snapshotVersion.toTimestamp());const f=yu(i,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,e);const r=Aw(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Tu(this.serializer),t.removeTarget=e,this.a_(t)}}class aI extends Cp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return re(!!e.streamToken),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Ew(e.writeResults,e.commitTime),r=Dt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Tu(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vw(this.serializer,r))};this.a_(t)}}/**
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
 */class uI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,vu(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,vu(t,r),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class lI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Jt(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class cI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{ar(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=H(c);f.L_.add(4),await li(f),f.q_.set("Unknown"),f.L_.delete(4),await Ko(f)}(this))})}),this.q_=new lI(r,s)}}async function Ko(n){if(ar(n))for(const e of n.B_)await e(!0)}async function li(n){for(const e of n.B_)await e(!1)}function kp(n,e){const t=H(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),_l(t)?gl(t):Jr(t).r_()&&ml(t,e))}function pl(n,e){const t=H(n),r=Jr(t);t.N_.delete(e),r.r_()&&Vp(t,e),t.N_.size===0&&(r.r_()?r.o_():ar(t)&&t.q_.set("Unknown"))}function ml(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jr(n).A_(e)}function Vp(n,e){n.Q_.xe(e),Jr(n).R_(e)}function gl(n){n.Q_=new hw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Jr(n).start(),n.q_.v_()}function _l(n){return ar(n)&&!Jr(n).n_()&&n.N_.size>0}function ar(n){return H(n).L_.size===0}function Dp(n){n.Q_=void 0}async function hI(n){n.q_.set("Online")}async function fI(n){n.N_.forEach((e,t)=>{ml(n,e)})}async function dI(n,e){Dp(n),_l(n)?(n.q_.M_(e),gl(n)):n.q_.set("Unknown")}async function pI(n,e,t){if(n.q_.set("Online"),e instanceof yp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Io(n,r)}else if(e instanceof Zi?n.Q_.Ke(e):e instanceof _p?n.Q_.He(e):n.Q_.We(e),!t.isEqual(z.min()))try{const r=await Pp(n.localStore);t.compareTo(r)>=0&&await function(i,a){const u=i.Q_.rt(a);return u.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(f);d&&i.N_.set(f,d.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,f)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(Pe.EMPTY_BYTE_STRING,d.snapshotVersion)),Vp(i,c);const m=new _n(d.target,c,f,d.sequenceNumber);ml(i,m)}),i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Io(n,r)}}async function Io(n,e,t){if(!oi(e))throw e;n.L_.add(1),await li(n),n.q_.set("Offline"),t||(t=()=>Pp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ko(n)})}function Np(n,e){return e().catch(t=>Io(n,t,e))}async function Go(n){const e=H(n),t=Cn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mI(e);)try{const s=await Xw(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,gI(e,s)}catch(s){await Io(e,s)}Op(e)&&Mp(e)}function mI(n){return ar(n)&&n.O_.length<10}function gI(n,e){n.O_.push(e);const t=Cn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Op(n){return ar(n)&&!Cn(n).n_()&&n.O_.length>0}function Mp(n){Cn(n).start()}async function _I(n){Cn(n).p_()}async function yI(n){const e=Cn(n);for(const t of n.O_)e.m_(t.mutations)}async function vI(n,e,t){const r=n.O_.shift(),s=ul.from(r,e,t);await Np(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Go(n)}async function EI(n,e){e&&Cn(n).V_&&await async function(r,s){if(function(a){return uw(a)&&a!==V.ABORTED}(s.code)){const i=r.O_.shift();Cn(r).s_(),await Np(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Go(r)}}(n,e),Op(n)&&Mp(n)}async function Bh(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=ar(t);t.L_.add(3),await li(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ko(t)}async function TI(n,e){const t=H(n);e?(t.L_.delete(2),await Ko(t)):e||(t.L_.add(2),await li(t),t.q_.set("Unknown"))}function Jr(n){return n.K_||(n.K_=function(t,r,s){const i=H(t);return i.w_(),new oI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:hI.bind(null,n),Ro:fI.bind(null,n),mo:dI.bind(null,n),d_:pI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),_l(n)?gl(n):n.q_.set("Unknown")):(await n.K_.stop(),Dp(n))})),n.K_}function Cn(n){return n.U_||(n.U_=function(t,r,s){const i=H(t);return i.w_(),new aI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_I.bind(null,n),mo:EI.bind(null,n),f_:yI.bind(null,n),g_:vI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Go(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class yl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new yl(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(n,e){if(Jt("AsyncQueue",`${e}: ${n}`),oi(n))return new L(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=ws(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class jh{constructor(){this.W_=new le(F.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class jr{constructor(e,t,r,s,i,a,u,c,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new jr(e,t,wr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class II{constructor(){this.queries=qh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=H(t),i=s.queries;s.queries=qh(),i.forEach((a,u)=>{for(const c of u.j_)c.onError(r)})})(this,new L(V.ABORTED,"Firestore shutting down"))}}function qh(){return new Yr(n=>sp(n),Bo)}async function Lp(n,e){const t=H(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new wI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=vl(a,`Initialization of query '${pr(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&El(t)}async function xp(n,e){const t=H(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function AI(n,e){const t=H(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&El(t)}function RI(n,e,t){const r=H(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function El(n){n.Y_.forEach(e=>{e.next()})}var Iu,$h;($h=Iu||(Iu={})).ea="default",$h.Cache="cache";class Fp{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Iu.Cache}}/**
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
 */class Up{constructor(e){this.key=e}}class Bp{constructor(e){this.key=e}}class SI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=ip(e),this.Ra=new wr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new jh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const v=s.get(d),w=jo(this.query,m)?m:null,b=!!v&&this.mutatedKeys.has(v.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;v&&w?v.data.isEqual(w.data)?b!==k&&(r.track({type:3,doc:w}),P=!0):this.ga(v,w)||(r.track({type:2,doc:w}),P=!0,(c&&this.Aa(w,c)>0||f&&this.Aa(w,f)<0)&&(u=!0)):!v&&w?(r.track({type:0,doc:w}),P=!0):v&&!w&&(r.track({type:1,doc:v}),P=!0,(c||f)&&(u=!0)),P&&(w?(a=a.add(w),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:u,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((d,m)=>function(w,b){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return k(w)-k(b)}(d.type,m.type)||this.Aa(d.doc,m.doc)),this.pa(r),s=s!=null&&s;const u=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,f=c!==this.Ea;return this.Ea=c,a.length!==0||f?{snapshot:new jr(this.query,e.Ra,i,a,e.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new jh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Bp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Up(r))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return jr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class bI{constructor(e){this.key=e,this.va=!1}}class CI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Yr(u=>sp(u),Bo),this.Ma=new Map,this.xa=new Set,this.Oa=new le(F.comparator),this.Na=new Map,this.La=new hl,this.Ba={},this.ka=new Map,this.qa=Br.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kI(n,e,t=!0){const r=Wp(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await jp(r,e,t,!0),s}async function VI(n,e){const t=Wp(n);await jp(t,e,!0,!1)}async function jp(n,e,t,r){const s=await Zw(n.localStore,Vt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await DI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&kp(n.remoteStore,s),u}async function DI(n,e,t,r,s){n.Ka=(m,v,w)=>async function(k,P,O,U){let x=P.view.ma(O);x.ns&&(x=await xh(k.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,x)));const Y=U&&U.targetChanges.get(P.targetId),ce=U&&U.targetMismatches.get(P.targetId)!=null,se=P.view.applyChanges(x,k.isPrimaryClient,Y,ce);return Hh(k,P.targetId,se.wa),se.snapshot}(n,m,v,w);const i=await xh(n.localStore,e,!0),a=new SI(e,i.Ts),u=a.ma(i.documents),c=ui.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,c);Hh(n,t,f.wa);const d=new PI(e,t,a);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function NI(n,e,t){const r=H(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Bo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&pl(r.remoteStore,s.targetId),Au(r,s.targetId)}).catch(ii)):(Au(r,s.targetId),await wu(r.localStore,s.targetId,!0))}async function OI(n,e){const t=H(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pl(t.remoteStore,r.targetId))}async function MI(n,e,t){const r=qI(n);try{const s=await function(a,u){const c=H(a),f=ve.now(),d=u.reduce((w,b)=>w.add(b.key),Q());let m,v;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let b=Xt(),k=Q();return c.cs.getEntries(w,d).next(P=>{b=P,b.forEach((O,U)=>{U.isValidDocument()||(k=k.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,b)).next(P=>{m=P;const O=[];for(const U of u){const x=rw(U,m.get(U.key).overlayedDocument);x!=null&&O.push(new Vn(U.key,x,Jd(x.value.mapValue),Ge.exists(!0)))}return c.mutationQueue.addMutationBatch(w,f,O,u)}).next(P=>{v=P;const O=P.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(w,P.batchId,O)})}).then(()=>({batchId:v.batchId,changes:ap(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let f=a.Ba[a.currentUser.toKey()];f||(f=new le(ee)),f=f.insert(u,c),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,t),await ci(r,s.changes),await Go(r.remoteStore)}catch(s){const i=vl(s,"Failed to persist write");t.reject(i)}}async function qp(n,e){const t=H(n);try{const r=await Yw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?re(a.va):s.removedDocuments.size>0&&(re(a.va),a.va=!1))}),await ci(t,r,e)}catch(r){await ii(r)}}function zh(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const u=a.view.Z_(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=H(a);c.onlineState=u;let f=!1;c.queries.forEach((d,m)=>{for(const v of m.j_)v.Z_(u)&&(f=!0)}),f&&El(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LI(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new le(F.comparator);a=a.insert(i,Oe.newNoDocument(i,z.min()));const u=Q().add(i),c=new Ho(z.min(),new Map,new le(ee),a,u);await qp(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Tl(r)}else await wu(r.localStore,e,!1).then(()=>Au(r,e,t)).catch(ii)}async function xI(n,e){const t=H(n),r=e.batch.batchId;try{const s=await Qw(t.localStore,e);zp(t,r,null),$p(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ci(t,s)}catch(s){await ii(s)}}async function FI(n,e,t){const r=H(n);try{const s=await function(a,u){const c=H(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,u).next(m=>(re(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(f,m))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,e);zp(r,e,t),$p(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ci(r,s)}catch(s){await ii(s)}}function $p(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function zp(n,e,t){const r=H(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Au(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Hp(n,r)})}function Hp(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(pl(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Tl(n))}function Hh(n,e,t){for(const r of t)r instanceof Up?(n.La.addReference(r.key,e),UI(n,r)):r instanceof Bp?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Hp(n,r.key)):q()}function UI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),Tl(n))}function Tl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new F(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new bI(t)),n.Oa=n.Oa.insert(t,r),kp(n.remoteStore,new _n(Vt(Uo(t.path)),r,"TargetPurposeLimboResolution",tl.oe))}}async function ci(n,e,t){const r=H(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,c)=>{a.push(r.Ka(c,e,t).then(f=>{var d;if((f||t)&&r.isPrimaryClient){const m=f?!f.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(f){s.push(f);const m=dl.Wi(c.targetId,f);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,f){const d=H(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>D.forEach(f,v=>D.forEach(v.$i,w=>d.persistence.referenceDelegate.addReference(m,v.targetId,w)).next(()=>D.forEach(v.Ui,w=>d.persistence.referenceDelegate.removeReference(m,v.targetId,w)))))}catch(m){if(!oi(m))throw m;M("LocalStore","Failed to update sequence numbers: "+m)}for(const m of f){const v=m.targetId;if(!m.fromCache){const w=d.os.get(v),b=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(b);d.os=d.os.insert(v,k)}}}(r.localStore,i))}async function BI(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Sp(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(u=>{u.forEach(c=>{c.reject(new L(V.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(t,r.hs)}}function jI(n,e){const t=H(n),r=t.Na.get(e);if(r&&r.va)return Q().add(r.key);{let s=Q();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const u=t.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function Wp(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LI.bind(null,e),e.Ca.d_=AI.bind(null,e.eventManager),e.Ca.$a=RI.bind(null,e.eventManager),e}function qI(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FI.bind(null,e),e}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Gw(this.persistence,new Ww,e.initialUser,this.serializer)}Ga(e){return new $w(fl.Zr,this.serializer)}Wa(e){return new tI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class Ru{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BI.bind(null,this.syncEngine),await TI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new II}()}createDatastore(e){const t=Wo(e.databaseInfo.databaseId),r=function(i){return new iI(i)}(e.databaseInfo);return function(i,a,u,c){return new uI(i,a,u,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,u){return new cI(r,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>zh(this.syncEngine,t,0),function(){return Uh.D()?new Uh:new nI}())}createSyncEngine(e,t){return function(s,i,a,u,c,f,d){const m=new CI(s,i,a,u,c,f);return d&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=H(s);M("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await li(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ru.provider={build:()=>new Ru};/**
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
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class $I{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=Gd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ba(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Wh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zI(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Bh(e.remoteStore,s)),n._onlineComponents=e}async function zI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ba(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await Ba(n,new Ao)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Ba(n,new Ao);return n._offlineComponents}async function Gp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Wh(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Wh(n,new Ru))),n._onlineComponents}function HI(n){return Gp(n).then(e=>e.syncEngine)}async function Su(n){const e=await Gp(n),t=e.eventManager;return t.onListen=kI.bind(null,e.syncEngine),t.onUnlisten=NI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OI.bind(null,e.syncEngine),t}function WI(n,e,t={}){const r=new In;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,f){const d=new Kp({next:v=>{d.Za(),a.enqueueAndForget(()=>xp(i,m));const w=v.docs.has(u);!w&&v.fromCache?f.reject(new L(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&v.fromCache&&c&&c.source==="server"?f.reject(new L(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(v)},error:v=>f.reject(v)}),m=new Fp(Uo(u.path),d,{includeMetadataChanges:!0,_a:!0});return Lp(i,m)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Qp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Kh=new Map;/**
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
 */function Yp(n,e,t){if(!t)throw new L(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KI(n,e,t,r){if(e===!0&&r===!0)throw new L(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gh(n){if(!F.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(F.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wl(n);throw new L(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Yh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cT;switch(r.type){case"firstParty":return new pT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Kh.get(t);r&&(M("ComponentProvider","Removing Datastore"),Kh.delete(t),r.terminate())}(this),Promise.resolve()}}function GI(n,e,t,r={}){var s;const i=(n=ct(n,Qo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Ne.MOCK_USER;else{u=U_(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new L(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ne(f)}n._authCredentials=new hT(new Kd(u,c))}}/**
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
 */class Yo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class An extends Yo{constructor(e,t,r){super(e,t,Uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new F(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function h0(n,e,...t){if(n=Ee(n),Yp("collection","path",e),n instanceof Qo){const r=ue.fromString(e,...t);return Qh(r),new An(n,null,r)}{if(!(n instanceof qe||n instanceof An))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Qh(r),new An(n.firestore,null,r)}}function Jp(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Gd.newId()),Yp("doc","path",e),n instanceof Qo){const r=ue.fromString(e,...t);return Gh(r),new qe(n,null,new F(r))}{if(!(n instanceof qe||n instanceof An))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Gh(r),new qe(n.firestore,n instanceof An?n.converter:null,new F(r))}}/**
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
 */class Jh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bp(this,"async_queue_retry"),this.Vu=()=>{const r=Ua();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ua();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new In;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!oi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Jt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=yl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Xh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class kn extends Qo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Jh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jh(e),this._firestoreClient=void 0,await e}}}function QI(n,e){const t=typeof n=="object"?n:sd(),r=typeof n=="string"?n:"(default)",s=$u(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=x_("firestore");i&&GI(s,...i)}return s}function Jo(n){if(n._terminated)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YI(n),n._firestoreClient}function YI(n){var e,t,r;const s=n._freezeSettings(),i=function(u,c,f,d){return new PT(u,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Qp(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $I(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(Pe.fromBase64String(e))}catch(t){throw new L(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qr(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xo{constructor(e){this._methodName=e}}/**
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
 */class Il{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class Al{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const JI=/^__.*__$/;class XI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class Xp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Rl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ro(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Zp(this.Cu)&&JI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ZI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wo(e)}Qu(e,t,r,s=!1){return new Rl({Cu:e,methodName:t,qu:r,path:Re.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sl(n){const e=n._freezeSettings(),t=Wo(n._databaseId);return new ZI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function em(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);bl("Data must be an object, but it was:",a,r);const u=rm(r,a);let c,f;if(i.merge)c=new rt(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const v=Pu(e,m,t);if(!a.contains(v))throw new L(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);im(d,v)||d.push(v)}c=new rt(d),f=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,f=a.fieldTransforms;return new XI(new ze(u),c,f)}class fi extends Xo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fi}}class Pl extends Xo{_toFieldTransform(e){return new ZT(e.path,new $s)}isEqual(e){return e instanceof Pl}}function tm(n,e,t,r){const s=n.Qu(1,e,t);bl("Data must be an object, but it was:",s,r);const i=[],a=ze.empty();or(r,(c,f)=>{const d=Cl(e,c,t);f=Ee(f);const m=s.Nu(d);if(f instanceof fi)i.push(d);else{const v=Zo(f,m);v!=null&&(i.push(d),a.set(d,v))}});const u=new rt(i);return new Xp(a,u,s.fieldTransforms)}function nm(n,e,t,r,s,i){const a=n.Qu(1,e,t),u=[Pu(e,r,t)],c=[s];if(i.length%2!=0)throw new L(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)u.push(Pu(e,i[v])),c.push(i[v+1]);const f=[],d=ze.empty();for(let v=u.length-1;v>=0;--v)if(!im(f,u[v])){const w=u[v];let b=c[v];b=Ee(b);const k=a.Nu(w);if(b instanceof fi)f.push(w);else{const P=Zo(b,k);P!=null&&(f.push(w),d.set(w,P))}}const m=new rt(f);return new Xp(d,m,a.fieldTransforms)}function Zo(n,e){if(sm(n=Ee(n)))return bl("Unsupported field value:",e,n),rm(n,e);if(n instanceof Xo)return function(r,s){if(!Zp(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const u of r){let c=Zo(u,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:wo(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(s.serializer,i)}}if(r instanceof Il)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:vp(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Al)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return al(u.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${wl(r)}`)}(n,e)}function rm(n,e){const t={};return Qd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(n,(r,s)=>{const i=Zo(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function sm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ve||n instanceof Il||n instanceof qr||n instanceof qe||n instanceof Xo||n instanceof Al)}function bl(n,e,t){if(!sm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=wl(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Pu(n,e,t){if((e=Ee(e))instanceof hi)return e._internalPath;if(typeof e=="string")return Cl(n,e);throw Ro("Field path arguments must be of type string or ",n,!1,void 0,t)}const eA=new RegExp("[~\\*/\\[\\]]");function Cl(n,e,t){if(e.search(eA)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hi(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ro(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new L(V.INVALID_ARGUMENT,u+n+c)}function im(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class om{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(am("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tA extends om{data(){return super.data()}}function am(n,e){return typeof e=="string"?Cl(n,e):e instanceof hi?e._internalPath:e._delegate._internalPath}/**
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
 */function nA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rA{convertValue(e,t="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return or(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>de(a.doubleValue));return new Al(i)}convertGeoPoint(e){return new Il(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=rl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const t=bn(e);return new ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);re(Rp(r));const s=new js(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||Jt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function um(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class As{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lm extends om{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(am("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class eo extends lm{data(e={}){return super.data(e)}}class sA{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new As(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new eo(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new eo(s._firestore,s._userDataWriter,u.doc.key,u.doc,new As(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new eo(s._firestore,s._userDataWriter,u.doc.key,u.doc,new As(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),d=a.indexOf(u.doc.key)),{type:iA(u.type),doc:c,oldIndex:f,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function iA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function cm(n){n=ct(n,qe);const e=ct(n.firestore,kn);return WI(Jo(e),n._key).then(t=>fm(e,n,t))}class hm extends rA{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function f0(n,e,t){n=ct(n,qe);const r=ct(n.firestore,kn),s=um(n.converter,e,t);return ea(r,[em(Sl(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function d0(n,e,t,...r){n=ct(n,qe);const s=ct(n.firestore,kn),i=Sl(s);let a;return a=typeof(e=Ee(e))=="string"||e instanceof hi?nm(i,"updateDoc",n._key,e,t,r):tm(i,"updateDoc",n._key,e),ea(s,[a.toMutation(n._key,Ge.exists(!0))])}function p0(n){return ea(ct(n.firestore,kn),[new zo(n._key,Ge.none())])}function m0(n,...e){var t,r,s;n=Ee(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Xh(e[a])||(i=e[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Xh(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,f,d;if(n instanceof qe)f=ct(n.firestore,kn),d=Uo(n._key.path),c={next:m=>{e[a]&&e[a](fm(f,n,m))},error:e[a+1],complete:e[a+2]};else{const m=ct(n,Yo);f=ct(m.firestore,kn),d=m._query;const v=new hm(f);c={next:w=>{e[a]&&e[a](new sA(f,v,m,w))},error:e[a+1],complete:e[a+2]},nA(n._query)}return function(v,w,b,k){const P=new Kp(k),O=new Fp(w,P,b);return v.asyncQueue.enqueueAndForget(async()=>Lp(await Su(v),O)),()=>{P.Za(),v.asyncQueue.enqueueAndForget(async()=>xp(await Su(v),O))}}(Jo(f),d,u,c)}function ea(n,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>MI(await HI(r),s,i)),i.promise}(Jo(n),e)}function fm(n,e,t){const r=t.docs.get(e._key),s=new hm(n);return new lm(n,s,e._key,r,new As(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class oA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Sl(e)}set(e,t,r){this._verifyNotCommitted();const s=ja(e,this._firestore),i=um(s.converter,t,r),a=em(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ge.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=ja(e,this._firestore);let a;return a=typeof(t=Ee(t))=="string"||t instanceof hi?nm(this._dataReader,"WriteBatch.update",i._key,t,r,s):tm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ja(e,this._firestore);return this._mutations=this._mutations.concat(new zo(t._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ja(n,e){if((n=Ee(n)).firestore!==e)throw new L(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function g0(){return new fi("deleteField")}function _0(){return new Pl("serverTimestamp")}/**
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
 */function y0(n){return Jo(n=ct(n,kn)),new oA(n,e=>ea(n,e))}(function(e,t=!0){(function(s){Qr=s})(Wr),Mr(new tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new kn(new fT(r.getProvider("auth-internal")),new gT(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),wn(gh,"4.7.3",e),wn(gh,"4.7.3","esm2017")})();const aA={apiKey:"AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI",authDomain:"quiz-samarbeid.firebaseapp.com",projectId:"quiz-samarbeid",storageBucket:"quiz-samarbeid.firebasestorage.app",messagingSenderId:"968266660672",appId:"1:968266660672:web:e86724467bb2b398edd8a5"},dm=rd(aA),So=oT(dm);So.languageCode="no";const pm=QI(dm);async function v0(){try{await pE(So,new St)}catch(n){if(n.code==="auth/popup-blocked")await EE(So,new St);else throw n}}const E0=()=>Gv(So);async function T0(n){if(!n||!n.email)return!1;try{return(await cm(Jp(pm,"etneTilgang",n.email.toLowerCase()))).exists()}catch{return!1}}const w0=n=>({"permission-denied":"du har ikkje lov til dette",unavailable:"ingen kontakt med tenaren","auth/popup-closed-by-user":"innlogginga vart avbroten"})[n&&n.code]||n&&n.message||"ukjend feil",to=new Map;function I0(n){return n?(to.has(n)||to.set(n,cm(Jp(pm,"etneBilete",n)).then(e=>e.exists()?e.data().data:null).catch(()=>null)),to.get(n)):Promise.resolve(null)}const A0=(n,e)=>to.set(n,Promise.resolve(e)),bu=n=>{const e=parseFloat(String(n??"").replace(",","."));return isNaN(e)?0:e},R0=n=>(Math.round((Number(n)||0)*10)/10).toLocaleString("nb-NO"),S0=(n="")=>n+Date.now().toString(36)+Math.random().toString(36).slice(2,6),P0={tittel:"Julequiz",undertittel:"Etnequizen",premietekst:"",pausetekst:"Pause",kategoriar:[],plan:[]};function b0(n){const e=new Map;let t=0,r=0;return((n==null?void 0:n.kategoriar)||[]).forEach(s=>e.set(s.id,{...s,nr:s.utanNummer||s.hurtig?null:++t,hnr:s.hurtig?++r:null})),e}function C0(n){const e=(n==null?void 0:n.plan)||[],t={},r={};return e.forEach(s=>{s.type==="sporsmal"&&s.nummerert!==!1&&(t[s.kat]=(t[s.kat]||0)+1)}),e.map(s=>s.type!=="sporsmal"||s.nummerert===!1?{...s}:(r[s.kat]=(r[s.kat]||0)+1,{...s,qNr:r[s.kat],qTot:t[s.kat]}))}function k0(n,e,t){const r=((n==null?void 0:n.kategoriar)||[]).find(u=>u.id===t);if(r&&r.fasitliste&&r.fasitliste.length)return r.fasitliste;const s=e.filter(u=>u.type==="sporsmal"&&u.kat===t),i=s.filter(u=>u.nummerert!==!1);if(i.length)return i.map(u=>u.svar||"");const a=s.map(u=>u.svar||"").filter(Boolean);return a.length===1?a[0].split(/\s+·\s+/):a}function uA(n,e){const t=n.poeng||{};return((e==null?void 0:e.kategoriar)||[]).filter(r=>!r.hurtig).reduce((r,s)=>r+bu(t[s.id])*(n.joker===s.id?2:1),0)}function V0(n,e){const t=(n||[]).filter(r=>(r.namn||"").trim()).map(r=>({...r,sum:uA(r,e)}));return t.sort((r,s)=>s.sum-r.sum||r.bord-s.bord),t.forEach(r=>{r.rank=t.filter(s=>s.sum>r.sum).length+1}),t}function D0(n){const e=[0];let t=0;for(;t<n;){const r=n-t;t+=r>10?Math.min(5,r-10):1,e.push(t)}return e}function N0(n,e){const t=e.get(n.kat);switch(n.type){case"tittel":return"Tittel: "+(n.tittel||"");case"pause":return"Pause"+(n.tittel?": "+n.tittel:"");case"poengtavle":return"Poengtavle";case"kategori":return t?t.nr?`Kategori ${t.nr} · ${t.namn}`:t.namn:"Kategori (vel)";case"hurtigresultat":return"Vinnar av "+((t==null?void 0:t.namn)||"hurtigrunda");case"fasit":return"Fasit · "+(Array.isArray(n.kat)?n.kat:[n.kat]).map(r=>{const s=e.get(r);return s?s.nr||s.namn:"?"}).join(" og ");case"sporsmal":return(t!=null&&t.hurtig?`⚡${t.hnr}.${n.qNr??""} `:n.qNr?`${(t==null?void 0:t.nr)??""}.${n.qNr} `:"")+(n.tekst||"(tomt spørsmål)");default:return n.type}}const lA=n=>n?typeof n=="number"?n:n.toMillis?n.toMillis():n.seconds!=null?n.seconds*1e3+Math.round((n.nanoseconds||0)/1e6):+new Date(n)||0:0,O0=["A","B","C","D"];function Zh(n){return String(n??"").toLowerCase().replace(/æ/g,"ae").replace(/ø/g,"o").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g,"og").replace(/[^a-z0-9]+/g," ").trim().replace(/^(the|a|an|en|ei|eit|et|der|die|das|le|la|el) /,"").replace(/ /g,"")}function cA(n,e){const t=n.length,r=e.length;if(!t)return r;if(!r)return t;const s=Array.from({length:t+1},(i,a)=>{const u=new Array(r+1).fill(0);return u[0]=a,u});for(let i=0;i<=r;i++)s[0][i]=i;for(let i=1;i<=t;i++)for(let a=1;a<=r;a++){const u=n[i-1]===e[a-1]?0:1;s[i][a]=Math.min(s[i-1][a]+1,s[i][a-1]+1,s[i-1][a-1]+u),i>1&&a>1&&n[i-1]===e[a-2]&&n[i-2]===e[a-1]&&(s[i][a]=Math.min(s[i][a],s[i-2][a-2]+1))}return s[t][r]}const hA=n=>n<=3?0:n<=6?1:n<=10?2:3;function fA(n){return[n.svar,...String(n.godta||"").split(/[,;\n]/)].map(e=>(e||"").trim()).filter(Boolean)}function dA(n,e){if(e==null||e==="")return"feil";if(n.form==="alternativ")return String(e)===String(n.rett)?"rett":"feil";const t=Zh(e);if(!t)return"feil";let r="feil";for(const s of fA(n)){const i=Zh(s);if(!i)continue;if(/^\d+$/.test(i)){if(t===i)return"rett";t.includes(i)&&(r="sjekk");continue}const a=cA(t,i),u=hA(i.length);if(a<=u)return"rett";(t.length*2>=i.length&&a<=u+(i.length<=3?1:2)||i.length>=4&&(t.includes(i)||t.length>=4&&i.includes(t)))&&(r="sjekk")}return r}const Ui={topp:10,botn:5,steg:.5,sekund:2};function pA(n){return Math.max(Ui.botn,Ui.topp-Ui.steg*Math.floor(Math.max(0,n)/(Ui.sekund*1e3)))}function mA(n,e){const t=e.map(i=>({...i,tid:lA(i.t),auto:dA(n,i.svar)})).map(i=>({...i,status:i.manuell||i.auto})).sort((i,a)=>i.tid-a.tid),r=t.filter(i=>i.status==="rett"),s=r.length?r[0].tid:0;for(const i of t)i.diff=i.status==="rett"?i.tid-s:null,i.poeng=i.status==="rett"?pA(i.tid-s):0;return t}function gA(n,e,t,r){return n.filter(s=>s.type==="sporsmal"&&s.kat===e&&s.id&&(t==null?void 0:t[s.id])).map(s=>({q:s,liste:mA(s,r.filter(i=>i.live===t[s.id]))}))}function M0(n,e,t,r,s){const i=new Map;for(const{liste:u}of gA(n,e,t,r))for(const c of u)i.set(c.bord,(i.get(c.bord)||0)+c.poeng);const a=[...i].map(([u,c])=>({bord:u,namn:s(u),p:c}));return a.sort((u,c)=>c.p-u.p||bu(u.bord)-bu(c.bord)),a.forEach(u=>{u.rank=a.filter(c=>c.p>u.p).length+1}),a}const L0=n=>(Math.round(n/100)/10).toLocaleString("nb-NO",{minimumFractionDigits:1}),_A=_r({no:Date.now()});setInterval(()=>{_A.no=Date.now()},250);const Bi=new Map;function x0(n,e){if(!(n!=null&&n.id)||!n.opna)return 0;const t=e(n.opna);return Bi.has(n.id)||Bi.set(n.id,Date.now()),(Math.abs(Bi.get(n.id)-t)<3e3?t:Bi.get(n.id))+(n.tid||20)*1e3}export{LA as $,_r as A,y_ as B,f0 as C,Jp as D,pm as E,w0 as F,C0 as G,b0 as H,V0 as I,k0 as J,gA as K,M0 as L,y0 as M,PA as N,bu as O,uA as P,zA as Q,Pg as R,xA as S,JA as T,ge as U,$t as V,OA as W,QA as X,GA as Y,bg as Z,DA as _,vA as a,P0 as a$,MA as a0,$A as a1,Ln as a2,ZA as a3,HA as a4,_A as a5,_0 as a6,ln as a7,x0 as a8,lA as a9,So as aA,E0 as aB,v0 as aC,YA as aD,o0 as aE,m0 as aF,cm as aG,n0 as aH,jA as aI,r_ as aJ,Xg as aK,Vr as aL,We as aM,mf as aN,$a as aO,Ss as aP,Rs as aQ,kA as aR,AA as aS,Rn as aT,He as aU,RA as aV,IA as aW,Du as aX,Mg as aY,SA as aZ,TA as a_,mA as aa,O0 as ab,fA as ac,R0 as ad,t0 as ae,e0 as af,i0 as ag,L0 as ah,d0 as ai,g0 as aj,FA as ak,qA as al,Mc as am,N0 as an,XA as ao,KA as ap,D0 as aq,r0 as ar,p0 as as,EA as at,S0 as au,s0 as av,A0 as aw,I0 as ax,a0 as ay,T0 as az,xu as b,h0 as b0,tg as b1,WA as b2,Nr as c,B as d,Xn as e,bs as f,af as g,Bg as h,sf as i,Ng as j,ne as k,uo as l,er as m,Wg as n,Zm as o,bA as p,qt as q,e_ as r,Zn as s,BA as t,io as u,Nf as v,CA as w,NA as x,VA as y,UA as z};
