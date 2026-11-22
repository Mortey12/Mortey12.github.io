var pA=Object.defineProperty;var Km=De=>{throw TypeError(De)};var mA=(De,Se,He)=>Se in De?pA(De,Se,{enumerable:!0,configurable:!0,writable:!0,value:He}):De[Se]=He;var Ut=(De,Se,He)=>mA(De,typeof Se!="symbol"?Se+"":Se,He),zc=(De,Se,He)=>Se.has(De)||Km("Cannot "+He);var P=(De,Se,He)=>(zc(De,Se,"read from private field"),He?He.call(De):Se.get(De)),ie=(De,Se,He)=>Se.has(De)?Km("Cannot add the same private member more than once"):Se instanceof WeakSet?Se.add(De):Se.set(De,He),ne=(De,Se,He,Sr)=>(zc(De,Se,"write to private field"),Sr?Sr.call(De,He):Se.set(De,He),He),le=(De,Se,He)=>(zc(De,Se,"access private method"),He);(function(){"use strict";var ym,$s,vr,Gr,qs,zs,Hs,qn,Ws,Ot,oo,zn,en,In,Ks,Qr,_e,Hc,Wc,Mo,Kc,Gm,Qm,ui,gA,Lo,Em,Ht,Vc,Wt,Yr,yt,Mt,Et,Lt,An,Jr,yr,Gs,ao,lo,Hn,Ya,ke,_A,vA,Gc,yA,Qc,xo,Tl,Yc,Jc,tn,bn,xt,Xr,uo,co,Ja,wm;var Se=Array.isArray,He=Array.prototype.indexOf,Sr=Array.prototype.includes,Fo=Array.from,Xc=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,Zc=Object.getOwnPropertyDescriptors,eh=Object.prototype,Ym=Array.prototype,Uo=Object.getPrototypeOf,th=Object.isExtensible;const Jm=()=>{};function Xm(n){return n()}function Il(n){for(var e=0;e<n.length;e++)n[e]()}function nh(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}const ct=2,ls=4,hi=8,rh=1<<24,Yt=16,Bt=32,Cn=64,Al=128,bl=256,Jt=512,We=1024,$e=2048,jt=4096,vt=8192,It=16384,us=32768,Bo=1<<25,cs=65536,jo=1<<17,Zm=1<<18,hs=1<<19,sh=1<<20,ln=1<<25,$o=1<<21,fs=1<<22,Jn=1<<23,ds=Symbol("$state"),ih=Symbol("component"),eg=Symbol(""),qo=Symbol("attributes"),Rl=Symbol("class"),Sl=Symbol("style"),fi=Symbol("text"),zo=Symbol("form reset"),di=new class extends Error{constructor(){super(...arguments);Ut(this,"name","StaleReactionError");Ut(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},tg=!!((ym=globalThis.document)!=null&&ym.contentType)&&globalThis.document.contentType.includes("xml"),ng=1,rg=2,oh=4,sg=8,ig=16,og=1,ag=2,Ke=Symbol("uninitialized"),lg="http://www.w3.org/1999/xhtml";function ug(){console.warn("https://svelte.dev/e/derived_inert")}function cg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ah(n){return n===this.v}function hg(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function lh(n){return!hg(n,this.v)}function fg(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function dg(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pg(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function mg(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gg(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _g(n){throw new Error("https://svelte.dev/e/effect_orphan")}function vg(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function yg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Eg(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Tg(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let pi=!1,EA=!1;function Ig(){pi=!0}const Ag=[];function bg(n,e=!1,t=!1){return Ho(n,new Map,"",Ag,null,t)}function Ho(n,e,t,r,s=null,i=!1){if(typeof n=="object"&&n!==null){var a=e.get(n);if(a!==void 0)return a;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(Se(n)){var l=Array(n.length);e.set(n,l),s!==null&&e.set(s,l);for(var c=0;c<n.length;c+=1){var h=n[c];c in n&&(l[c]=Ho(h,e,t,r,null,i))}return l}if(Uo(n)===eh){l={},e.set(n,l),s!==null&&e.set(s,l);for(var d of Object.keys(n))l[d]=Ho(n[d],e,t,r,null,i);return l}if(n instanceof Date)return n.getTime(),structuredClone(n);if(typeof n.toJSON=="function"&&!i)return Ho(n.toJSON(),e,t,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let Ve=null;function ps(n){Ve=n}function kl(n,e=!1,t){Ve={p:Ve,i:!1,c:null,e:null,s:n,x:null,r:me,l:pi&&!e?{s:null,u:null,$:[]}:null}}function Pl(n){var e=Ve,t=e.e;if(t!==null){e.e=null;for(var r of t)Ph(r)}return e.i=!0,Ve=e.p,Cl(n)}function Cl(n={}){return Xc(n,ih,{value:!0}),n}function mi(){return!pi||Ve!==null&&Ve.l===null}let kr=[];function uh(){var n=kr;kr=[],Il(n)}function Dn(n){if(kr.length===0&&!vi){var e=kr;queueMicrotask(()=>{e===kr&&uh()})}kr.push(n)}function Rg(){for(;kr.length>0;)uh()}const Sg=-7169;function Le(n,e){n.f=n.f&Sg|e}function Dl(n){n.f&Jt||n.deps===null?Le(n,We):Le(n,jt)}function ch(n,e,t){n.f&$e?e.add(n):n.f&jt&&t.add(n),Le(n,We)}let hh=!1;function kg(){hh||(hh=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[zo])==null||e.call(t)})},{capture:!0}))}function ms(n){var e=ae,t=me;qt(null),fn(null);try{return n()}finally{qt(e),fn(t)}}function Pg(n,e,t,r=t){n.addEventListener(e,()=>ms(t));const s=n[zo];s?n[zo]=()=>{s(),r(!0)}:n[zo]=()=>r(!0),kg()}function Cg(n,e,t,r){const s=mi()?Ko:dh;var i=n.filter(T=>!T.settled),a=e.map(s);if(t.length===0&&i.length===0){r(a);return}var l=me,c=Dg(),h=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(T=>T.promise)):null;function d(T){if(!(l.f&It)){c();try{r([...a,...T])}catch(A){cn(A,l)}Wo()}}var m=fh();if(t.length===0){h.then(()=>d([])).finally(m);return}function w(){Promise.all(t.map(T=>Vg(T))).then(d).catch(T=>cn(T,l)).finally(m)}h?h.then(()=>{c(),w(),Wo()}):w()}function Dg(){var n=me,e=ae,t=Ve,r=Q;return function(i=!0){fn(n),qt(e),ps(t),i&&!(n.f&It)&&(r==null||r.activate(),r==null||r.apply())}}function Wo(n=!0){fn(null),qt(null),ps(null),n&&(Q==null||Q.deactivate())}function fh(){var n=me,e=n.b,t=Q,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Ko(n){var e=ct|$e;return me!==null&&(me.f|=hs),{ctx:Ve,deps:null,effects:null,equals:ah,f:e,fn:n,reactions:null,rv:0,v:Ke,wv:0,parent:me,ac:null}}const gi=Symbol("obsolete");function Vg(n,e,t){let r=me;r===null&&dg();var s=void 0,i=Xn(Ke),a=!ae,l=new Set;return Gg(()=>{var T,A;var c=me,h=nh();s=h.promise;try{Promise.resolve(n()).then(h.resolve,N=>{N!==di&&h.reject(N)}).finally(Wo)}catch(N){h.reject(N),Wo()}var d=Q;if(a){if(c.f&us)var m=fh();if((T=r.b)!=null&&T.is_rendered())(A=d.async_deriveds.get(c))==null||A.reject(gi);else for(const N of l.values())N.reject(gi);l.add(h),d.async_deriveds.set(c,h)}const w=(N,C=void 0)=>{m==null||m(),l.delete(h),C!==gi&&(d.activate(),C?(i.f|=Jn,_s(i,C)):(i.f&Jn&&(i.f^=Jn),_s(i,N)),d.deactivate())};h.promise.then(w,N=>w(null,N||"unknown"))}),kh(()=>{for(const c of l)c.reject(gi)}),new Promise(c=>{function h(d){function m(){d===s?c(i):h(s)}d.then(m,m)}h(s)})}function ht(n){const e=Ko(n);return Mh(e),e}function dh(n){const e=Ko(n);return e.equals=lh,e}function Ng(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)At(e[t])}}function Vl(n){var e,t=me,r=n.parent;if(!er&&r!==null&&n.v!==Ke&&r.f&(It|vt))return ug(),n.v;fn(r);try{Ng(n),e=Bh(n)}finally{fn(t)}return e}function ph(n){var e=Vl(n);if(!n.equals(e)&&(n.wv=Fh(),(!(Q!=null&&Q.is_fork)||n.deps===null)&&(Q!==null?(Q.capture(n,e,!0),_i==null||_i.capture(n,e,!0)):n.v=e,n.deps===null))){Le(n,We);return}er||(nt!==null?(Bl()||Q!=null&&Q.is_fork)&&nt.set(n,e):Dl(n))}function Og(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&ms(()=>{t.ac.abort(di),t.ac=null}),t.fn!==null&&(t.teardown=Jm),bi(t,0),ql(t))}function mh(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&vs(e)}let Nl=null,gs=null,Q=null,_i=null,nt=null,Ol=null,vi=!1,Ml=!1,yi=null,Go=null;var gh=0,wA=new Set;let Mg=1;const Qa=class Qa{constructor(){ie(this,_e);Ut(this,"id",Mg++);ie(this,$s,!1);Ut(this,"linked",!0);ie(this,vr,null);ie(this,Gr,null);Ut(this,"async_deriveds",new Map);Ut(this,"current",new Map);Ut(this,"previous",new Map);ie(this,qs,new Set);ie(this,zs,new Set);ie(this,Hs,0);ie(this,qn,new Map);ie(this,Ws,null);ie(this,Ot,[]);ie(this,oo,[]);ie(this,zn,new Set);ie(this,en,new Set);ie(this,In,new Map);ie(this,Ks,new Set);Ut(this,"is_fork",!1);ie(this,Qr,!1);gs===null?Nl=gs=this:(ne(gs,Gr,this),ne(this,vr,gs)),gs=this}skip_effect(e){P(this,In).has(e)||P(this,In).set(e,{d:[],m:[]}),P(this,Ks).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=P(this,In).get(e);if(r){P(this,In).delete(e);for(var s of r.d)Le(s,$e),t(s);for(s of r.m)Le(s,jt),t(s)}P(this,Ks).add(e)}capture(e,t,r=!1){e.v!==Ke&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&Jn||(this.current.set(e,[t,r]),nt==null||nt.set(e,t)),this.is_fork||(e.v=t)}activate(){Q=this}deactivate(){Q=null,nt=null}flush(){try{Ml=!0,Q=this,le(this,_e,Mo).call(this)}finally{gh=0,Ol=null,yi=null,Go=null,Ml=!1,Q=null,nt=null,un.clear()}}discard(){var e;for(const t of P(this,zs))t(this);P(this,zs).clear();for(const t of this.async_deriveds.values())t.reject(gi);le(this,_e,Lo).call(this),(e=P(this,Ws))==null||e.resolve()}register_created_effect(e){P(this,oo).push(e)}increment(e,t){if(ne(this,Hs,P(this,Hs)+1),e){let r=P(this,qn).get(t)??0;P(this,qn).set(t,r+1)}}decrement(e,t){if(ne(this,Hs,P(this,Hs)-1),e){let r=P(this,qn).get(t)??0;r===1?P(this,qn).delete(t):P(this,qn).set(t,r-1)}P(this,Qr)||(ne(this,Qr,!0),Dn(()=>{ne(this,Qr,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const r of e)P(this,zn).add(r);for(const r of t)P(this,en).add(r);e.clear(),t.clear()}oncommit(e){P(this,qs).add(e)}ondiscard(e){P(this,zs).add(e)}settled(){return(P(this,Ws)??ne(this,Ws,nh())).promise}static ensure(){if(Q===null){const e=Q=new Qa;!Ml&&!vi&&Dn(()=>{P(e,$s)||e.flush()})}return Q}apply(){{nt=null;return}}schedule(e){var t;if(Ol=e,(t=e.b)!=null&&t.is_pending&&e.f&(ls|hi|rh)&&!(e.f&us)){e.b.defer_effect(e);return}P(this,Ot).push(e)}};$s=new WeakMap,vr=new WeakMap,Gr=new WeakMap,qs=new WeakMap,zs=new WeakMap,Hs=new WeakMap,qn=new WeakMap,Ws=new WeakMap,Ot=new WeakMap,oo=new WeakMap,zn=new WeakMap,en=new WeakMap,In=new WeakMap,Ks=new WeakMap,Qr=new WeakMap,_e=new WeakSet,Hc=function(){if(this.is_fork)return!0;for(const r of P(this,qn).keys()){for(var e=r,t=!1;e.parent!==null;){if(P(this,In).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Wc=function(){var e=[];for(const i of P(this,Ot))if(!(i.f&It||!(i.f&($e|jt)))){for(var t=i,r=!1;t.parent!==null;){t=t.parent;var s=t.f;if(s&(Cn|Bt)){if(!(s&We)){r=!0;break}t.f^=We}}r||e.push(t)}return ne(this,Ot,[]),e},Mo=function(){var l,c,h,d;ne(this,$s,!0);for(const m of P(this,zn))P(this,en).delete(m),Le(m,$e),this.schedule(m);for(const m of P(this,en))Le(m,jt),this.schedule(m);this.apply();for(var e=yi=[],t=[],r=Go=[];P(this,Ot).length>0;){gh++>1e3&&(le(this,_e,Lo).call(this),xg());for(const m of le(this,_e,Wc).call(this))try{le(this,_e,Kc).call(this,m,e,t)}catch(w){throw Eh(m),le(this,_e,Hc).call(this)||this.discard(),w}}if(Q=null,r.length>0){var s=Qa.ensure();for(const m of r)s.schedule(m)}if(yi=null,Go=null,le(this,_e,Hc).call(this)){le(this,_e,ui).call(this,t),le(this,_e,ui).call(this,e);for(const[m,w]of P(this,In))yh(m,w);r.length>0&&le(l=Q,_e,Mo).call(l);return}const i=le(this,_e,Gm).call(this);if(i){le(this,_e,ui).call(this,t),le(this,_e,ui).call(this,e),le(c=i,_e,Qm).call(c,this);return}P(this,zn).clear(),P(this,en).clear();for(const m of P(this,qs))m(this);P(this,qs).clear(),_i=this,_h(t),_h(e),_i=null,(h=P(this,Ws))==null||h.resolve();var a=Q;if(P(this,Hs)===0&&(P(this,Ot).length===0||a!==null)&&le(this,_e,Lo).call(this),P(this,Ot).length>0)if(a!==null){for(const m of P(this,Ot))P(a,Ot).push(m);ne(this,Ot,[])}else a=this;a!==null&&(un.clear(),le(d=a,_e,Mo).call(d))},Kc=function(e,t,r){e.f^=We;for(var s=e.first;s!==null;){var i=s.f,a=(i&(Bt|Cn))!==0,l=a&&(i&We)!==0,c=l||(i&vt)!==0||P(this,In).has(s);if(!c&&s.fn!==null){a?s.f^=We:i&ls?t.push(s):Ai(s)&&(i&Yt&&P(this,en).add(s),vs(s));var h=s.first;if(h!==null){s=h;continue}}for(;s!==null;){var d=s.next;if(d!==null){s=d;break}s=s.parent}}},Gm=function(){for(var e=P(this,vr);e!==null;){if(!e.is_fork){for(const[t,[,r]]of this.current)if(e.current.has(t)&&!r)return e}e=P(e,vr)}return null},Qm=function(e){var r;for(const[s,i]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,i);for(const[s,i]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(P(e,zn),P(e,en));const t=s=>{var i=s.reactions;if(i!==null&&!(s.f&ct&&!(s.f&($e|jt))))for(const c of i){var a=c.f;if(a&ct)t(c);else{var l=c;a&(fs|Yt)&&!this.async_deriveds.has(l)&&(P(this,en).delete(l),Le(l,$e),this.schedule(l))}}};for(const s of this.current.keys())t(s);this.oncommit(()=>e.discard()),le(r=e,_e,Lo).call(r),Q=this,le(this,_e,Mo).call(this)},ui=function(e){for(var t=0;t<e.length;t+=1)ch(e[t],P(this,zn),P(this,en))},gA=function(){var m,w;for(let T=Nl;T!==null;T=P(T,Gr)){var e=T.id<this.id,t=[];for(const[A,[N,C]]of this.current){if(T.current.has(A)){var r=T.current.get(A)[0];if(e&&N!==r)T.current.set(A,[N,C]);else continue}t.push(A)}if(e)for(const[A,N]of this.async_deriveds){const C=T.async_deriveds.get(A);C&&N.promise.then(C.resolve).catch(C.reject)}var s=[...T.current.keys()].filter(A=>!T.current.get(A)[1]);if(!(!P(T,$s)||s.length===0)){var i=s.filter(A=>!this.current.has(A));if(i.length===0)e&&T.discard();else if(t.length>0){if(e)for(const A of P(this,Ks))T.unskip_effect(A,N=>{var C;N.f&(Yt|fs)?T.schedule(N):le(C=T,_e,ui).call(C,[N])});T.activate();var a=new Set,l=new Map;for(var c of t)vh(c,i,a,l);l=new Map;var h=[...T.current].filter(([A,N])=>{const C=this.current.get(A);return C?C[0]!==N[0]||C[1]!==N[1]:!0}).map(([A])=>A);if(h.length>0)for(const A of P(this,oo))!(A.f&(It|vt|jo))&&Ll(A,h,l)&&(A.f&(fs|Yt)?(Le(A,$e),T.schedule(A)):P(T,zn).add(A));if(P(T,Ot).length>0&&!P(T,Qr)){T.apply();for(var d of le(m=T,_e,Wc).call(m))le(w=T,_e,Kc).call(w,d,[],[])}T.deactivate()}}}},Lo=function(){if(this.linked){var e=P(this,vr),t=P(this,Gr);e===null?Nl=t:ne(e,Gr,t),t===null?gs=e:ne(t,vr,e),this.linked=!1}};let Pr=Qa;function Lg(n){var e=vi;vi=!0;try{for(var t;;){if(Rg(),Q===null)return t;Q.flush()}}finally{vi=e}}function xg(){try{vg()}catch(n){cn(n,Ol)}}let Xt=null;function _h(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if(!(r.f&(It|vt))&&Ai(r)&&(Xt=new Set,vs(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Dh(r),(Xt==null?void 0:Xt.size)>0)){un.clear();for(const s of Xt){if(s.f&(It|vt))continue;const i=[s];let a=s.parent;for(;a!==null;)Xt.has(a)&&(Xt.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];c.f&(It|vt)||vs(c)}}Xt.clear()}}Xt=null}}function vh(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;i&ct?vh(s,e,t,r):i&(fs|Yt)&&!(i&$e)&&Ll(s,e,r)&&(Le(s,$e),xl(s))}}function Ll(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(Sr.call(e,s))return!0;if(s.f&ct&&Ll(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function xl(n){Q.schedule(n)}function yh(n,e){if(!(n.f&Bt&&n.f&We)){n.f&$e?e.d.push(n):n.f&jt&&e.m.push(n),Le(n,We);for(var t=n.first;t!==null;)yh(t,e),t=t.next}}function Eh(n){Le(n,We);for(var e=n.first;e!==null;)Eh(e),e=e.next}let Qo=new Set;const un=new Map;let wh=!1;function Xn(n,e){var t={f:0,v:n,reactions:null,equals:ah,rv:0,wv:0};return t}function qe(n,e){const t=Xn(n);return Mh(t),t}function Fg(n,e=!1,t=!0){var s;const r=Xn(n);return e||(r.equals=lh),pi&&t&&Ve!==null&&Ve.l!==null&&((s=Ve.l).s??(s.s=[])).push(r),r}function re(n,e,t=!1){ae!==null&&(!Zt||ae.f&jo)&&mi()&&ae.f&(ct|Yt|fs|jo)&&(dn===null||!dn.has(n))&&wg();let r=t?Vn(e):e;return _s(n,r,Go)}var Cr=null,Fl=0;function _s(n,e,t=null){if(!n.equals(e)){er?un.set(n,e):un.has(n)||un.set(n,n.v);var r=Pr.ensure();if(r.capture(n,e),n.f&ct){const s=n;n.f&$e&&Vl(s),nt===null&&Dl(s)}n.wv=Fh(),Cr=null,Fl=0,Th(n,$e,t),Cr=null,mi()&&me!==null&&me.f&We&&!(me.f&(Bt|Cn))&&(zt===null?Jg([n]):zt.push(n)),!r.is_fork&&Qo.size>0&&!wh&&Ug()}return e}function Ug(){wh=!1;for(const n of Qo){n.f&We&&Le(n,jt);let e;try{e=Ai(n)}catch{e=!0}e&&vs(n)}Qo.clear()}function Ei(n){re(n,n.v+1)}function Th(n,e,t){var r=n.reactions;if(r!==null){var s=mi(),i=r.length;if(Fl+=i,Fl>1e5&&Cr===null&&(Cr=new Set),Cr!==null){if(Cr.has(n))return;Cr.add(n)}for(var a=0;a<i;a++){var l=r[a],c=l.f;if(!(!s&&l===me)){var h=(c&$e)===0;if(h&&Le(l,e),c&jo)Qo.add(l);else if(c&ct){var d=l;nt==null||nt.delete(d),Th(d,jt,t)}else if(h){var m=l;c&Yt&&Xt!==null&&Xt.add(m),t!==null?t.push(m):xl(m)}}}}}function Vn(n){if(typeof n!="object"||n===null||ds in n||ih in n)return n;const e=Uo(n);if(e!==eh&&e!==Ym)return n;var t=new Map,r=Se(n),s=qe(0),i=Or,a=l=>{if(Or===i)return l();var c=ae,h=Or;qt(null),xh(i);var d=l();return qt(c),xh(h),d};return r&&t.set("length",qe(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&yg();var d=t.get(c);return d===void 0?a(()=>{var m=qe(h.value);return t.set(c,m),m}):re(d,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const d=a(()=>qe(Ke));t.set(c,d),Ei(s)}}else re(h,Ke),Ei(s);return!0},get(l,c,h){var T;if(c===ds)return n;var d=t.get(c),m=c in l;if(d===void 0&&(!m||(T=ci(l,c))!=null&&T.writable)&&(d=a(()=>{var A=Vn(m?l[c]:Ke),N=qe(A);return N}),t.set(c,d)),d!==void 0){var w=E(d);return w===Ke?void 0:w}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var w;(w=this.has)==null||w.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),d=t.get(c);if(d!==void 0){var m=E(d);if(m===Ke)return;if(h&&"value"in h)h.value=m;else return{enumerable:!0,configurable:!0,value:m,writable:!0}}return h},has(l,c){var w;if(c===ds)return!0;var h=t.get(c),d=h!==void 0&&h.v!==Ke||Reflect.has(l,c);if(h!==void 0||me!==null&&(!d||(w=ci(l,c))!=null&&w.writable)){h===void 0&&(h=a(()=>{var T=d?Vn(l[c]):Ke,A=qe(T);return A}),t.set(c,h));var m=E(h);if(m===Ke)return!1}return d},set(l,c,h,d){var z;var m=t.get(c),w=c in l;if(r&&c==="length")for(var T=h;T<m.v;T+=1){var A=t.get(T+"");A!==void 0?re(A,Ke):T in l&&(A=a(()=>qe(Ke)),t.set(T+"",A))}if(m===void 0)(!w||(z=ci(l,c))!=null&&z.writable)&&(m=a(()=>qe(void 0)),re(m,Vn(h)),t.set(c,m));else{w=m.v!==Ke;var N=a(()=>Vn(h));re(m,N)}var C=Reflect.getOwnPropertyDescriptor(l,c);if(C!=null&&C.set&&C.set.call(d,h),!w){if(r&&typeof c=="string"){var U=t.get("length"),G=Number(c);Number.isInteger(G)&&G>=U.v&&re(U,G+1)}Ei(s)}return!0},ownKeys(l){E(s);var c=Reflect.ownKeys(l).filter(m=>{var w=t.get(m);return w===void 0||w.v!==Ke});for(var[h,d]of t)d.v!==Ke&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Eg()}})}var Ul,Ih,Ah,bh;function Bg(){if(Ul===void 0){Ul=window,Ih=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Ah=ci(e,"firstChild").get,bh=ci(e,"nextSibling").get,th(n)&&(n[Rl]=void 0,n[qo]=null,n[Sl]=void 0,n.__e=void 0),th(t)&&(t[fi]=void 0)}}function Zn(n=""){return document.createTextNode(n)}function wi(n){return Ah.call(n)}function Ti(n){return bh.call(n)}function se(n,e){return wi(n)}function Dr(n,e=!1){{var t=wi(n);return t instanceof Comment&&t.data===""?Ti(t):t}}function Ne(n,e=!1){return wi(n)}function H(n,e=1,t=!1){let r=n;for(;e--;)r=Ti(r);return r}function jg(n){n.textContent=""}function Rh(){return!1}function $g(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function qg(n){var e=me;if(e===null)return ae.f|=Jn,n;if(!(e.f&us)&&!(e.f&ls))throw n;cn(n,e)}function cn(n,e){if(!(e!==null&&e.f&It)){for(;e!==null;){if(e.f&Al&&!(e.f&(It|Bo))){if(!(e.f&us))throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function Sh(n){me===null&&(ae===null&&_g(),gg()),er&&mg()}function zg(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function hn(n,e){var t=me;t!==null&&t.f&vt&&(n|=vt);var r={ctx:Ve,deps:null,nodes:null,f:n|$e|Jt,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Q==null||Q.register_created_effect(r);var s=r;if(n&ls)yi!==null?yi.push(r):Pr.ensure().schedule(r);else if(e!==null){try{vs(r)}catch(a){throw At(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&hs)&&(s=s.first,n&Yt&&n&cs&&s!==null&&(s.f|=cs))}if(s!==null&&(s.parent=t,t!==null&&zg(s,t),ae!==null&&ae.f&ct&&!(n&Cn))){var i=ae;(i.effects??(i.effects=[])).push(s)}return r}function Bl(){return ae!==null&&!Zt}function kh(n){const e=hn(hi,null);return Le(e,We),e.teardown=n,e}function Ii(n){Sh();var e=me.f,t=!ae&&(e&Bt)!==0&&Ve!==null&&!Ve.i;if(t){var r=Ve;(r.e??(r.e=[])).push(n)}else return Ph(n)}function Ph(n){return hn(ls|sh,n)}function Hg(n){return Sh(),hn(hi|sh,n)}function Wg(n){Pr.ensure();const e=hn(Cn|hs,n);return(t={})=>new Promise(r=>{t.outro?Vr(e,()=>{At(e),r(void 0)}):(At(e),r(void 0))})}function Kg(n){return hn(ls,n)}function Gg(n){return hn(fs|hs,n)}function jl(n,e=0){return hn(hi|e,n)}function Be(n,e=[],t=[],r=[]){Cg(r,e,t,s=>{hn(hi,()=>{n(...s.map(E))})})}function $l(n,e=0){var t=hn(Yt|e,n);return t}function $t(n){return hn(Bt|hs,n)}function Ch(n){var e=n.teardown;if(e!==null){const t=er,r=ae;Oh(!0),qt(null);try{e.call(null)}catch(s){cn(s,n.parent)}finally{Oh(t),qt(r)}}}function ql(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&ms(()=>{s.abort(di)});var r=t.next;t.f&Cn?t.parent=null:At(t,e),t=r}}function Qg(n){for(var e=n.first;e!==null;){var t=e.next;e.f&Bt||At(e),e=t}}function At(n,e=!0){var t=!1;(e||n.f&Zm)&&n.nodes!==null&&n.nodes.end!==null&&(Yg(n.nodes.start,n.nodes.end),t=!0),n.f|=Bo,ql(n,e&&!t),bi(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();Ch(n),n.f^=Bo,n.f|=It;var s=n.parent;s!==null&&s.first!==null&&Dh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Yg(n,e){for(;n!==null;){var t=n===e?null:Ti(n);n.remove(),n=t}}function Dh(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Vr(n,e,t=!0){var r=[];n.f|=bl,Vh(n,r,!0);var s=()=>{t&&At(n),e&&e()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function Vh(n,e,t){if(!(n.f&vt)){n.f^=vt;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var s=n.first;s!==null;){var i=s.next;if(!(s.f&Cn)){var a=(s.f&cs)!==0||(s.f&Bt)!==0&&(n.f&Yt)!==0;Vh(s,e,a?t:!1)}s=i}}}function Yo(n){n.f&=~bl,Nh(n,!0)}function Nh(n,e){if(!(n.f&bl)&&n.f&vt){n.f^=vt,n.f&We||(Le(n,$e),Pr.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&cs)!==0||(t.f&Bt)!==0;Nh(t,s?e:!1),t=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||e)&&a.in()}}function zl(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var s=t===r?null:Ti(t);e.append(t),t=s}}let Jo=!1,er=!1;function Oh(n){er=n}let ae=null,Zt=!1;function qt(n){ae=n}let me=null;function fn(n){me=n}let dn=null;function Mh(n){ae!==null&&(ae.f&$o||ae.f&ct)&&(dn??(dn=new Set)).add(n)}let bt=null,Ct=0,zt=null;function Jg(n){zt=n}let Lh=1,Nr=0,Or=Nr;function xh(n){Or=n}function Fh(){return++Lh}function Ai(n){var e=n.f;if(e&$e)return!0;if(e&jt){for(var t=n.deps,r=t.length,s=0;s<r;s++){var i=t[s];if(Ai(i)&&ph(i),i.wv>n.wv)return!0}e&Jt&&nt===null&&Le(n,We)}return!1}function Uh(n,e,t=!0){var r=n.reactions;if(r!==null&&!(dn!==null&&dn.has(n)))for(var s=0;s<r.length;s++){var i=r[s];i.f&ct?Uh(i,e,!1):e===i&&(t?Le(i,$e):i.f&We&&Le(i,jt),xl(i))}}function Bh(n){var e=bt,t=Ct,r=zt,s=ae,i=dn,a=Ve,l=Zt,c=Or,h=n.f;bt=null,Ct=0,zt=null,ae=h&(Bt|Cn)?null:n,dn=null,ps(n.ctx),Zt=!1,Or=++Nr,n.ac!==null&&(ms(()=>{n.ac.abort(di)}),n.ac=null);try{n.f|=$o;var d=n.fn,m=d();n.f|=us;var w=jh(n);if(mi()&&zt!==null&&!Zt&&w!==null&&!(n.f&(ct|jt|$e)))for(var T=0;T<zt.length;T++)Uh(zt[T],n);if(s!==null&&s!==n){if(Nr++,s.deps!==null)for(let A=0;A<t;A+=1)s.deps[A].rv=Nr;if(e!==null)for(const A of e)A.rv=Nr;zt!==null&&(r===null?r=zt:r.push(...zt))}return n.f&Jn&&(n.f^=Jn),m}catch(A){return jh(n),qg(A)}finally{n.f^=$o,bt=e,Ct=t,zt=r,ae=s,dn=i,ps(a),Zt=l,Or=c}}function jh(n){var s;var e=n.deps,t=Q==null?void 0:Q.is_fork;if(bt!==null){var r;if(t||bi(n,Ct),e!==null&&Ct>0)for(e.length=Ct+bt.length,r=0;r<bt.length;r++)e[Ct+r]=bt[r];else n.deps=e=bt;if(Bl()&&n.f&Jt)for(r=Ct;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(n)}else!t&&e!==null&&Ct<e.length&&(bi(n,Ct),e.length=Ct);return e}function Xg(n,e){let t=e.reactions;if(t!==null){var r=He.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}if(t===null&&e.f&ct&&(bt===null||!Sr.call(bt,e))){var i=e;i.f&Jt&&(i.f^=Jt),i.v!==Ke&&Dl(i),i.ac!==null&&ms(()=>{i.ac.abort(di),i.ac=null,Le(i,$e)}),Og(i),bi(i,0)}}function bi(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)Xg(n,t[r])}function vs(n){var e=n.f;if(!(e&It)){Le(n,We);var t=me,r=Jo;me=n,Jo=(e&(Bt|Cn))===0;try{e&(Yt|rh)?Qg(n):ql(n),Ch(n);var s=Bh(n);n.teardown=typeof s=="function"?s:null,n.wv=Lh;var i}finally{Jo=r,me=t}}}async function Zg(){await Promise.resolve(),Lg()}function E(n){var e=n.f,t=(e&ct)!==0;if(ae!==null&&!Zt){var r=me!==null&&(me.f&It)!==0;if(!r&&(dn===null||!dn.has(n))){var s=ae.deps;if(ae.f&$o)n.rv<Nr&&(n.rv=Nr,bt===null&&s!==null&&s[Ct]===n?Ct++:bt===null?bt=[n]:bt.push(n));else{ae.deps??(ae.deps=[]),Sr.call(ae.deps,n)||ae.deps.push(n);var i=n.reactions;i===null?n.reactions=[ae]:Sr.call(i,ae)||i.push(ae)}}}if(er&&un.has(n))return un.get(n);if(t){var a=n;if(er){var l=a.v;return(!(a.f&We)&&a.reactions!==null||qh(a))&&(l=Vl(a)),un.set(a,l),l}var c=(a.f&Jt)===0&&!Zt&&ae!==null&&(Jo||(ae.f&Jt)!==0),h=(a.f&us)===0;Ai(a)&&(c&&(a.f|=Jt),ph(a)),c&&!h&&(mh(a),$h(a))}if(nt!=null&&nt.has(n))return nt.get(n);if(n.f&Jn)throw n.v;return n.v}function $h(n){if(n.f|=Jt,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&ct&&!(e.f&Jt)&&(mh(e),$h(e))}function qh(n){if(n.v===Ke)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(un.has(e)||e.f&ct&&qh(e))return!0;return!1}function Ri(n){var e=Zt;try{return Zt=!0,n()}finally{Zt=e}}function e_(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(ds in n)Hl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&ds in t&&Hl(t)}}}function Hl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{Hl(n[r],e)}catch{}const t=Uo(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Zc(t);for(let s in r){const i=r[s].get;if(i)try{i.call(n)}catch{}}}}}const t_=["touchstart","touchmove"];function n_(n){return t_.includes(n)}const Mr=Symbol("events"),zh=new Set,Wl=new Set;function r_(n,e,t,r={}){function s(i){if(r.capture||Ql.call(e,i),!i.cancelBubble)return ms(()=>t==null?void 0:t.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(s.__removed=!1,Dn(()=>{s.__removed||e.addEventListener(n,s,r)})):e.addEventListener(n,s,r),s}function s_(n,e,t,r,s){var i={capture:r,passive:s},a=r_(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&kh(()=>{a.__removed=!0,e.removeEventListener(n,a,i)})}function rt(n,e,t){(e[Mr]??(e[Mr]={}))[n]=t}function i_(n){for(var e=0;e<n.length;e++)zh.add(n[e]);for(var t of Wl)t(n)}let Kl=null,Gl=!1;function Ql(n){var N,C;var e=this,t=e.ownerDocument,r=n.type,s=((N=n.composedPath)==null?void 0:N.call(n))||[],i=s[0]||n.target;Kl=n,Gl||(Gl=!0,setTimeout(()=>{Gl=!1,Kl=null}));var a=0,l=Kl===n&&n[Mr];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){n[Mr]=e;return}var h=s.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(i=s[a]||n.target,i!==e){Xc(n,"currentTarget",{configurable:!0,get(){return i||t}});var d=ae,m=me;qt(null),fn(null);try{for(var w,T=[];i!==null&&i!==e;){try{var A=(C=i[Mr])==null?void 0:C[r];A!=null&&(!i.disabled||n.target===i)&&A.call(i,n)}catch(U){w?T.push(U):w=U}if(n.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(w){for(let U of T)queueMicrotask(()=>{throw U});throw w}}finally{n[Mr]=e,delete n.currentTarget,qt(d),fn(m)}}}const Yl=((Em=globalThis==null?void 0:globalThis.window)==null?void 0:Em.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function o_(n){return(Yl==null?void 0:Yl.createHTML(n))??n}function a_(n){var e=$g("template");return e.innerHTML=o_(n.replaceAll("<!>","<!---->")),e.content}function Jl(n,e){var t=me;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function we(n,e){var t=(e&og)!==0,r=(e&ag)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=a_(i?n:"<!>"+n),t||(s=wi(s)));var a=r||Ih?document.importNode(s,!0):s.cloneNode(!0);if(t){var l=wi(a),c=a.lastChild;Jl(l,c)}else Jl(a,a);return a}}function Xl(n=""){{var e=Zn(n+"");return Jl(e,e),e}}function fe(n,e){n!==null&&n.before(e)}function l_(n){let e=0,t=Xn(0),r;return()=>{Bl()&&(E(t),jl(()=>(e===0&&(r=Ri(()=>n(()=>Ei(t)))),e+=1,()=>{Dn(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Ei(t))})})))}}var u_=cs|hs;function c_(n,e,t,r){new h_(n,e,t,r)}class h_{constructor(e,t,r,s){ie(this,ke);Ut(this,"parent");Ut(this,"is_pending",!1);Ut(this,"transform_error");ie(this,Ht);ie(this,Vc,null);ie(this,Wt);ie(this,Yr);ie(this,yt);ie(this,Mt,null);ie(this,Et,null);ie(this,Lt,null);ie(this,An,null);ie(this,Jr,0);ie(this,yr,0);ie(this,Gs,!1);ie(this,ao,new Set);ie(this,lo,new Set);ie(this,Hn,null);ie(this,Ya,l_(()=>(ne(this,Hn,Xn(P(this,Jr))),()=>{ne(this,Hn,null)})));var i;ne(this,Ht,e),ne(this,Wt,t),ne(this,Yr,a=>{var l=me;l.b=this,l.f|=Al,r(a)}),this.parent=me.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),ne(this,yt,$l(()=>{le(this,ke,Qc).call(this)},u_))}defer_effect(e){ch(e,P(this,ao),P(this,lo))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!P(this,Wt).pending}update_pending_count(e,t){le(this,ke,Yc).call(this,e,t),ne(this,Jr,P(this,Jr)+e),!(!P(this,Hn)||P(this,Gs))&&(ne(this,Gs,!0),Dn(()=>{ne(this,Gs,!1),P(this,Hn)&&_s(P(this,Hn),P(this,Jr))}))}get_effect_pending(){return P(this,Ya).call(this),E(P(this,Hn))}error(e){if(!P(this,Wt).onerror&&!P(this,Wt).failed)throw e;Q!=null&&Q.is_fork?(P(this,Mt)&&Q.skip_effect(P(this,Mt)),P(this,Et)&&Q.skip_effect(P(this,Et)),P(this,Lt)&&Q.skip_effect(P(this,Lt)),Q.oncommit(()=>{le(this,ke,Jc).call(this,e)})):le(this,ke,Jc).call(this,e)}}Ht=new WeakMap,Vc=new WeakMap,Wt=new WeakMap,Yr=new WeakMap,yt=new WeakMap,Mt=new WeakMap,Et=new WeakMap,Lt=new WeakMap,An=new WeakMap,Jr=new WeakMap,yr=new WeakMap,Gs=new WeakMap,ao=new WeakMap,lo=new WeakMap,Hn=new WeakMap,Ya=new WeakMap,ke=new WeakSet,_A=function(){try{ne(this,Mt,$t(()=>P(this,Yr).call(this,P(this,Ht))))}catch(e){this.error(e)}},vA=function(e){const t=P(this,Wt).failed,{reset:r,invoke_onerror:s}=le(this,ke,Gc).call(this,e);Dn(s),t&&ne(this,Lt,$t(()=>{t(P(this,Ht),()=>e,()=>r)}))},Gc=function(e){var t=!1,r=!1;const s=()=>{if(t){cg();return}t=!0,r&&Tg(),P(this,Lt)!==null&&Vr(P(this,Lt),()=>{ne(this,Lt,null)}),le(this,ke,Tl).call(this,()=>{le(this,ke,Qc).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=P(this,Wt)).onerror)==null||l.call(a,e,s),r=!1}catch(c){cn(c,P(this,yt)&&P(this,yt).parent)}}}},yA=function(){const e=P(this,Wt).pending;e&&(this.is_pending=!0,ne(this,Et,$t(()=>e(P(this,Ht)))),Dn(()=>{var t=ne(this,An,document.createDocumentFragment()),r=Zn(),s=!1;if(t.append(r),ne(this,Mt,le(this,ke,Tl).call(this,()=>{try{return $t(()=>P(this,Yr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){cn(a,P(this,yt).parent)}return null}})),P(this,Mt)===null){ne(this,An,null),s&&le(this,ke,xo).call(this,Q);return}P(this,yr)===0&&(P(this,Ht).before(t),ne(this,An,null),Vr(P(this,Et),()=>{ne(this,Et,null)}),le(this,ke,xo).call(this,Q))}))},Qc=function(){try{if(this.is_pending=this.has_pending_snippet(),ne(this,yr,0),ne(this,Jr,0),ne(this,Mt,$t(()=>{P(this,Yr).call(this,P(this,Ht))})),P(this,yr)>0){var e=ne(this,An,document.createDocumentFragment());zl(P(this,Mt),e);const t=P(this,Wt).pending;ne(this,Et,$t(()=>t(P(this,Ht))))}else le(this,ke,xo).call(this,Q)}catch(t){this.error(t)}},xo=function(e){this.is_pending=!1,e.transfer_effects(P(this,ao),P(this,lo))},Tl=function(e){var t=me,r=ae,s=Ve;fn(P(this,yt)),qt(P(this,yt)),ps(P(this,yt).ctx);try{return Pr.ensure(),e()}finally{fn(t),qt(r),ps(s)}},Yc=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&le(r=this.parent,ke,Yc).call(r,e,t);return}ne(this,yr,P(this,yr)+e),P(this,yr)===0&&(le(this,ke,xo).call(this,t),P(this,Et)&&Vr(P(this,Et),()=>{ne(this,Et,null)}),P(this,An)&&(P(this,Ht).before(P(this,An)),ne(this,An,null)))},Jc=function(e){P(this,Mt)&&(At(P(this,Mt)),ne(this,Mt,null)),P(this,Et)&&(At(P(this,Et)),ne(this,Et,null)),P(this,Lt)&&(At(P(this,Lt)),ne(this,Lt,null));let t=P(this,Wt).failed;const r=s=>{const{reset:i,invoke_onerror:a}=le(this,ke,Gc).call(this,s);a(),t&&ne(this,Lt,le(this,ke,Tl).call(this,()=>{try{return $t(()=>{var l=me;l.b=this,l.f|=Al,t(P(this,Ht),()=>s,()=>i)})}catch(l){return cn(l,P(this,yt).parent),null}}))};Dn(()=>{var s;try{s=this.transform_error(e)}catch(i){cn(i,P(this,yt)&&P(this,yt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>cn(i,P(this,yt)&&P(this,yt).parent)):r(s)})};function Te(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[fi]??(n[fi]=n.nodeValue))&&(n[fi]=t,n.nodeValue=`${t}`)}function f_(n,e){return d_(n,e)}const Xo=new Map;function d_(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:a=!0,transformError:l}){Bg();var c=void 0,h=Wg(()=>{var d=t??e.appendChild(Zn());c_(d,{pending:()=>{}},T=>{kl({});var A=Ve;i&&(A.c=i),s&&(r.$$events=s),c=n(T,r)||Cl(),Pl()},l);var m=new Set,w=T=>{for(var A=0;A<T.length;A++){var N=T[A];if(!m.has(N)){m.add(N);var C=n_(N);for(const z of[e,document]){var U=Xo.get(z);U===void 0&&(U=new Map,Xo.set(z,U));var G=U.get(N);G===void 0?(z.addEventListener(N,Ql,{passive:C}),U.set(N,1)):U.set(N,G+1)}}}};return w(Fo(zh)),Wl.add(w),()=>{var C;for(var T of m)for(const U of[e,document]){var A=Xo.get(U),N=A.get(T);--N==0?(U.removeEventListener(T,Ql),A.delete(T),A.size===0&&Xo.delete(U)):A.set(T,N)}Wl.delete(w),d!==t&&((C=d.parentNode)==null||C.removeChild(d))}});return p_.set(c,h),c}let p_=new WeakMap;class m_{constructor(e,t=!0){Ut(this,"anchor");ie(this,tn,new Map);ie(this,bn,new Map);ie(this,xt,new Map);ie(this,Xr,new Set);ie(this,uo,!0);ie(this,co,e=>{if(P(this,tn).has(e)){var t=P(this,tn).get(e),r=P(this,bn).get(t);if(r)Yo(r),P(this,Xr).delete(t);else{var s=P(this,xt).get(t);s&&(Yo(s.effect),P(this,bn).set(t,s.effect),P(this,xt).delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of P(this,tn)){if(P(this,tn).delete(i),i===e)break;const l=P(this,xt).get(a);l&&(At(l.effect),P(this,xt).delete(a))}for(const[i,a]of P(this,bn)){if(i===t||P(this,Xr).has(i))continue;const l=()=>{if(Array.from(P(this,tn).values()).includes(i)){var h=document.createDocumentFragment();zl(a,h),h.append(Zn()),P(this,xt).set(i,{effect:a,fragment:h})}else At(a);P(this,Xr).delete(i),P(this,bn).delete(i)};P(this,uo)||!r?(P(this,Xr).add(i),Vr(a,l,!1)):l()}}});ie(this,Ja,e=>{P(this,tn).delete(e);const t=Array.from(P(this,tn).values());for(const[r,s]of P(this,xt))t.includes(r)||(At(s.effect),P(this,xt).delete(r))});this.anchor=e,ne(this,uo,t)}ensure(e,t){var r=Q,s=Rh();if(t&&!P(this,bn).has(e)&&!P(this,xt).has(e))if(s){var i=document.createDocumentFragment(),a=Zn();i.append(a),P(this,xt).set(e,{effect:$t(()=>t(a)),fragment:i})}else P(this,bn).set(e,$t(()=>t(this.anchor)));if(P(this,tn).set(r,e),s){for(const[l,c]of P(this,bn))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of P(this,xt))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(P(this,co)),r.ondiscard(P(this,Ja))}else P(this,co).call(this,r)}}tn=new WeakMap,bn=new WeakMap,xt=new WeakMap,Xr=new WeakMap,uo=new WeakMap,co=new WeakMap,Ja=new WeakMap;function Rt(n,e,t=!1){var r=new m_(n),s=t?cs:0;function i(a,l){r.ensure(a,l)}$l(()=>{var a=!1;e((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}function Nn(n,e){return e}function g_(n,e,t){for(var r=[],s=e.length,i,a=e.length,l=0;l<s;l++){let m=e[l];Vr(m,()=>{if(i){if(i.pending.delete(m),i.done.add(m),i.pending.size===0){var w=n.outrogroups;Zl(n,Fo(i.done)),w.delete(i),w.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,d=h.parentNode;jg(d),d.append(h),n.items.clear()}Zl(n,e,!c)}else i={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(i)}function Zl(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var s=0;s<e.length;s++){var i=e[s];if(r!=null&&r.has(i)){i.f|=ln;const a=document.createDocumentFragment();zl(i,a)}else At(e[s],t)}}var Hh;function pn(n,e,t,r,s,i=null){var a=n,l=new Map,c=(e&oh)!==0;if(c){var h=n;a=h.appendChild(Zn())}var d=null,m=dh(()=>{var z=t();return Se(z)?z:z==null?[]:Fo(z)}),w,T=new Map,A=!0;function N(z){G.effect.f&It||(G.pending.delete(z),G.fallback=d,__(G,w,a,e,r),d!==null&&(w.length===0?d.f&ln?(d.f^=ln,ki(d,null,a)):Yo(d):Vr(d,()=>{d=null})))}function C(z){G.pending.delete(z)}var U=$l(()=>{w=E(m);for(var z=w.length,te=new Set,Pe=Q,Ie=Rh(),I=0;I<z;I+=1){var g=w[I],_=r(g,I),v=A?null:l.get(_);v?(v.v&&_s(v.v,g),v.i&&_s(v.i,I),Ie&&Pe.unskip_effect(v.e)):(v=v_(l,A?a:Hh??(Hh=Zn()),g,_,I,s,e,t),A||(v.e.f|=ln),l.set(_,v)),te.add(_)}if(z===0&&i&&!d&&(A?d=$t(()=>i(a)):(d=$t(()=>i(Hh??(Hh=Zn()))),d.f|=ln)),z>te.size&&pg(),!A)if(T.set(Pe,te),Ie){for(const[b,S]of l)te.has(b)||Pe.skip_effect(S.e);Pe.oncommit(N),Pe.ondiscard(C)}else N(Pe);E(m)}),G={effect:U,items:l,pending:T,outrogroups:null,fallback:d};A=!1}function Si(n){for(;n!==null&&!(n.f&Bt);)n=n.next;return n}function __(n,e,t,r,s){var v,b,S,y,lt,Kt,Wn,Rn,Gt;var i=(r&sg)!==0,a=e.length,l=n.items,c=Si(n.effect.first),h,d=null,m,w=[],T=[],A,N,C,U;if(i)for(U=0;U<a;U+=1)A=e[U],N=s(A,U),C=l.get(N).e,C.f&ln||((b=(v=C.nodes)==null?void 0:v.a)==null||b.measure(),(m??(m=new Set)).add(C));for(U=0;U<a;U+=1){if(A=e[U],N=s(A,U),C=l.get(N).e,n.outrogroups!==null)for(const wt of n.outrogroups)wt.pending.delete(C),wt.done.delete(C);if(C.f&vt&&(Yo(C),i&&((y=(S=C.nodes)==null?void 0:S.a)==null||y.unfix(),(m??(m=new Set)).delete(C))),C.f&ln)if(C.f^=ln,C===c)ki(C,null,t);else{var G=d?d.next:c;C===n.effect.last&&(n.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),tr(n,d,C),tr(n,C,G),ki(C,G,t),d=C,w=[],T=[],c=Si(d.next);continue}if(C!==c){if(h!==void 0&&h.has(C)){if(w.length<T.length){var z=T[0],te;d=z.prev;var Pe=w[0],Ie=w[w.length-1];for(te=0;te<w.length;te+=1)ki(w[te],z,t);for(te=0;te<T.length;te+=1)h.delete(T[te]);tr(n,Pe.prev,Ie.next),tr(n,d,Pe),tr(n,Ie,z),c=z,d=Ie,U-=1,w=[],T=[]}else h.delete(C),ki(C,c,t),tr(n,C.prev,C.next),tr(n,C,d===null?n.effect.first:d.next),tr(n,d,C),d=C;continue}for(w=[],T=[];c!==null&&c!==C;)(h??(h=new Set)).add(c),T.push(c),c=Si(c.next);if(c===null)continue}C.f&ln||w.push(C),d=C,c=Si(C.next)}if(n.outrogroups!==null){for(const wt of n.outrogroups)wt.pending.size===0&&(Zl(n,Fo(wt.done)),(lt=n.outrogroups)==null||lt.delete(wt));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var I=[];if(h!==void 0)for(C of h)C.f&vt||I.push(C);for(;c!==null;)!(c.f&vt)&&c!==n.fallback&&I.push(c),c=Si(c.next);var g=I.length;if(g>0){var _=r&oh&&a===0?t:null;if(i){for(U=0;U<g;U+=1)(Wn=(Kt=I[U].nodes)==null?void 0:Kt.a)==null||Wn.measure();for(U=0;U<g;U+=1)(Gt=(Rn=I[U].nodes)==null?void 0:Rn.a)==null||Gt.fix()}g_(n,I,_)}}i&&Dn(()=>{var wt,nn;if(m!==void 0)for(C of m)(nn=(wt=C.nodes)==null?void 0:wt.a)==null||nn.apply()})}function v_(n,e,t,r,s,i,a,l){var c=a&ng?a&ig?Xn(t):Fg(t,!1,!1):null,h=a&rg?Xn(s):null;return{v:c,i:h,e:$t(()=>(i(e,c??t,h??s,l),()=>{n.delete(r)}))}}function ki(n,e,t){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&!(e.f&ln)?e.nodes.start:t;r!==null;){var a=Ti(r);if(i.before(r),r===s)return;r=a}}function tr(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Wh=[...` 	
\r\f \v\uFEFF`];function y_(n,e,t){var r=n==null?"":""+n;if(t){for(var s of Object.keys(t))if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||Wh.includes(r[a-1]))&&(l===r.length||Wh.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function E_(n,e){return n==null?null:String(n)}function Zo(n,e,t,r,s,i){var a=n[Rl];if(a!==t||a===void 0){var l=y_(t,r,i);l==null?n.removeAttribute("class"):n.className=l,n[Rl]=t}else if(i&&s!==i)for(var c in i){var h=!!i[c];(s==null||h!==!!s[c])&&n.classList.toggle(c,h)}return i}function eu(n,e,t,r){var s=n[Sl];if(s!==e){var i=E_(e);i==null?n.removeAttribute("style"):n.style.cssText=i,n[Sl]=e}return r}const w_=Symbol("is custom element"),T_=Symbol("is html"),I_=tg?"progress":"PROGRESS";function tu(n,e){var t=Kh(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==I_)||(n.value=e??"")}function mn(n,e,t,r){var s=Kh(n);s[e]!==(s[e]=t)&&(e==="loading"&&(n[eg]=t),t==null?n.removeAttribute(e):typeof t!="string"&&A_(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Kh(n){return n[qo]??(n[qo]={[w_]:n.nodeName.includes("-"),[T_]:n.namespaceURI===lg})}var Gh=new Map;function A_(n){var e=n.getAttribute("is")||n.nodeName,t=Gh.get(e);if(t)return t;Gh.set(e,t=new Set);for(var r,s=n,i=Element.prototype;i!==s;){r=Zc(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);s=Uo(s)}return t}function b_(n,e,t=e){var r=new WeakSet;Pg(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=nu(n)?ru(i):i,t(i),Q!==null&&r.add(Q),await Zg(),i!==(i=e())){var a=n.selectionStart,l=n.selectionEnd,c=n.value.length;if(n.value=i??"",l!==null){var h=n.value.length;a===l&&l===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),Ri(e)==null&&n.value&&(t(nu(n)?ru(n.value):n.value),Q!==null&&r.add(Q)),jl(()=>{var s=e();if(n===document.activeElement){var i=Q;if(r.has(i))return}nu(n)&&s===ru(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function nu(n){var e=n.type;return e==="number"||e==="range"}function ru(n){return n===""?null:+n}function su(n,e){return n===e||(n==null?void 0:n[ds])===e}function R_(n=Cl(),e,t,r){var s=Ve.r,i=me;return Kg(()=>{var a,l;return jl(()=>{a=l,l=[],Ri(()=>{su(t(...l),n)||(e(n,...l),a&&su(t(...a),n)&&e(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&Bo;)c=c.parent;const h=()=>{l&&su(t(...l),n)&&e(null,...l)},d=c.teardown;c.teardown=()=>{h(),d==null||d()}}}),n}function S_(n=!1){const e=Ve,t=e.l.u;if(!t)return;let r=()=>e_(e.s);if(n){let s=0,i={};const a=Ko(()=>{let l=!1;const c=e.s;for(const h in c)c[h]!==i[h]&&(i[h]=c[h],l=!0);return l&&s++,s});r=()=>E(a)}t.b.length&&Hg(()=>{Qh(e,r),Il(t.b)}),Ii(()=>{const s=Ri(()=>t.m.map(Xm));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&Ii(()=>{Qh(e,r),Il(t.a)})}function Qh(n,e){if(n.l.s)for(const t of n.l.s)E(t);e()}function k_(n){var e=Xn(0);return function(){return arguments.length===1?(re(e,E(e)+1),arguments[0]):(E(e),n())}}function P_(n,e,t,r){var s=r,i=!0,a=()=>(i&&(i=!1,s=r),s),l;l=n[e],l===void 0&&r!==void 0&&(l=a());var c;return c=()=>{var h=n[e];return h===void 0?a():(i=!0,h)},c}function C_(n){Ve===null&&fg(),pi&&Ve.l!==null?D_(Ve).m.push(n):Ii(()=>{const e=Ri(n);if(typeof e=="function")return e})}function D_(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const V_="5";typeof window<"u"&&((wm=window.__svelte??(window.__svelte={})).v??(wm.v=new Set)).add(V_),Ig();var Yh={};/**
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
 */const Jh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},N_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(w=64)),r.push(t[d],t[m],t[w],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):N_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new O_;const w=i<<2|l>>4;if(r.push(w),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const A=h<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class O_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M_=function(n){const e=Jh(n);return Xh.encodeByteArray(e,!0)},ea=function(n){return M_(n).replace(/\./g,"")},Zh=function(n){try{return Xh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function L_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const x_=()=>L_().__FIREBASE_DEFAULTS__,F_=()=>{if(typeof process>"u"||typeof Yh>"u")return;const n=Yh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},U_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zh(n[1]);return e&&JSON.parse(e)},ta=()=>{try{return x_()||F_()||U_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ef=n=>{var e,t;return(t=(e=ta())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},B_=n=>{const e=ef(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tf=()=>{var n;return(n=ta())===null||n===void 0?void 0:n.config},nf=n=>{var e;return(e=ta())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class j_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ea(JSON.stringify(t)),ea(JSON.stringify(a)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function z_(){var n;const e=(n=ta())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function K_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G_(){const n=ft();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Q_(){return!z_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const X_="FirebaseError";class On extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=X_,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Z_(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new On(s,l,r)}}function Z_(n,e){return n.replace(ev,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ev=/\{\$([^}]+)}/g;function tv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function na(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(rf(i)&&rf(a)){if(!na(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rf(n){return n!==null&&typeof n=="object"}/**
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
 */function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nv(n,e){const t=new rv(n,e);return t.subscribe.bind(t)}class rv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=iu),s.error===void 0&&(s.error=iu),s.complete===void 0&&(s.complete=iu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function iu(){}/**
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
 */function St(n){return n&&n._delegate?n._delegate:n}class Lr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class iv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new j_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(av(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ov(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ov(n){return n===xr?void 0:n}function av(n){return n.instantiationMode==="EAGER"}/**
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
 */class lv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const uv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},cv=he.INFO,hv={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},fv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=hv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ou{constructor(e){this.name=e,this._logLevel=cv,this._logHandler=fv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const dv=(n,e)=>e.some(t=>n instanceof t);let sf,of;function pv(){return sf||(sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mv(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const af=new WeakMap,au=new WeakMap,lf=new WeakMap,lu=new WeakMap,uu=new WeakMap;function gv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(nr(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&af.set(t,n)}).catch(()=>{}),uu.set(e,n),e}function _v(n){if(au.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});au.set(n,e)}let cu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return au.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vv(n){cu=n(cu)}function yv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hu(this),e,...t);return lf.set(r,e.sort?e.sort():[e]),nr(r)}:mv().includes(n)?function(...e){return n.apply(hu(this),e),nr(af.get(this))}:function(...e){return nr(n.apply(hu(this),e))}}function Ev(n){return typeof n=="function"?yv(n):(n instanceof IDBTransaction&&_v(n),dv(n,pv())?new Proxy(n,cu):n)}function nr(n){if(n instanceof IDBRequest)return gv(n);if(lu.has(n))return lu.get(n);const e=Ev(n);return e!==n&&(lu.set(n,e),uu.set(e,n)),e}const hu=n=>uu.get(n);function wv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=nr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(nr(a.result),c.oldVersion,c.newVersion,nr(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Tv=["get","getKey","getAll","getAllKeys","count"],Iv=["put","add","delete","clear"],fu=new Map;function uf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Iv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tv.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return fu.set(e,i),i}vv(n=>({...n,get:(e,t,r)=>uf(e,t)||n.get(e,t,r),has:(e,t)=>!!uf(e,t)||n.has(e,t)}));/**
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
 */class Av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const du="@firebase/app",cf="0.10.13";/**
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
 */const Mn=new ou("@firebase/app"),Rv="@firebase/app-compat",Sv="@firebase/analytics-compat",kv="@firebase/analytics",Pv="@firebase/app-check-compat",Cv="@firebase/app-check",Dv="@firebase/auth",Vv="@firebase/auth-compat",Nv="@firebase/database",Ov="@firebase/data-connect",Mv="@firebase/database-compat",Lv="@firebase/functions",xv="@firebase/functions-compat",Fv="@firebase/installations",Uv="@firebase/installations-compat",Bv="@firebase/messaging",jv="@firebase/messaging-compat",$v="@firebase/performance",qv="@firebase/performance-compat",zv="@firebase/remote-config",Hv="@firebase/remote-config-compat",Wv="@firebase/storage",Kv="@firebase/storage-compat",Gv="@firebase/firestore",Qv="@firebase/vertexai-preview",Yv="@firebase/firestore-compat",Jv="firebase",Xv="10.14.1";/**
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
 */const pu="[DEFAULT]",Zv={[du]:"fire-core",[Rv]:"fire-core-compat",[kv]:"fire-analytics",[Sv]:"fire-analytics-compat",[Cv]:"fire-app-check",[Pv]:"fire-app-check-compat",[Dv]:"fire-auth",[Vv]:"fire-auth-compat",[Nv]:"fire-rtdb",[Ov]:"fire-data-connect",[Mv]:"fire-rtdb-compat",[Lv]:"fire-fn",[xv]:"fire-fn-compat",[Fv]:"fire-iid",[Uv]:"fire-iid-compat",[Bv]:"fire-fcm",[jv]:"fire-fcm-compat",[$v]:"fire-perf",[qv]:"fire-perf-compat",[zv]:"fire-rc",[Hv]:"fire-rc-compat",[Wv]:"fire-gcs",[Kv]:"fire-gcs-compat",[Gv]:"fire-fst",[Yv]:"fire-fst-compat",[Qv]:"fire-vertex","fire-js":"fire-js",[Jv]:"fire-js-all"};/**
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
 */const ra=new Map,ey=new Map,mu=new Map;function hf(n,e){try{n.container.addComponent(e)}catch(t){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ys(n){const e=n.name;if(mu.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;mu.set(e,n);for(const t of ra.values())hf(t,n);for(const t of ey.values())hf(t,n);return!0}function gu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rr(n){return n.settings!==void 0}/**
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
 */const ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Pi("app","Firebase",ty);/**
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
 */class ny{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=Xv;function ff(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(t||(t=tf()),!t)throw sr.create("no-options");const i=ra.get(s);if(i){if(na(t,i.options)&&na(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const a=new lv(s);for(const c of mu.values())a.addComponent(c);const l=new ny(t,r,a);return ra.set(s,l),l}function df(n=pu){const e=ra.get(n);if(!e&&n===pu&&tf())return ff();if(!e)throw sr.create("no-app",{appName:n});return e}function ir(n,e,t){var r;let s=(r=Zv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}ys(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ry="firebase-heartbeat-database",sy=1,Di="firebase-heartbeat-store";let _u=null;function pf(){return _u||(_u=wv(ry,sy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Di)}catch(t){console.warn(t)}}}}).catch(n=>{throw sr.create("idb-open",{originalErrorMessage:n.message})})),_u}async function iy(n){try{const t=(await pf()).transaction(Di),r=await t.objectStore(Di).get(gf(n));return await t.done,r}catch(e){if(e instanceof On)Mn.warn(e.message);else{const t=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(t.message)}}}async function mf(n,e){try{const r=(await pf()).transaction(Di,"readwrite");await r.objectStore(Di).put(e,gf(n)),await r.done}catch(t){if(t instanceof On)Mn.warn(t.message);else{const r=sr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(r.message)}}}function gf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oy=1024,ay=30*24*60*60*1e3;class ly{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_f();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ay}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_f(),{heartbeatsToSend:r,unsentEntries:s}=uy(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Mn.warn(t),""}}}function _f(){return new Date().toISOString().substring(0,10)}function uy(n,e=oy){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),vf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return mf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return mf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vf(n){return ea(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function hy(n){ys(new Lr("platform-logger",e=>new Av(e),"PRIVATE")),ys(new Lr("heartbeat",e=>new ly(e),"PRIVATE")),ir(du,cf,n),ir(du,cf,"esm2017"),ir("fire-js","")}hy("");var fy="firebase",dy="10.14.1";/**
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
 */ir(fy,dy,"app");function vu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}typeof SuppressedError=="function"&&SuppressedError;function yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const py=yf,Ef=new Pi("auth","Firebase",yf());/**
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
 */const sa=new ou("@firebase/auth");function my(n,...e){sa.logLevel<=he.WARN&&sa.warn(`Auth (${Es}): ${n}`,...e)}function ia(n,...e){sa.logLevel<=he.ERROR&&sa.error(`Auth (${Es}): ${n}`,...e)}/**
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
 */function Ln(n,...e){throw yu(n,...e)}function gn(n,...e){return yu(n,...e)}function wf(n,e,t){const r=Object.assign(Object.assign({},py()),{[e]:t});return new Pi("auth","Firebase",r).create(e,{appName:n.name})}function Fr(n){return wf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ef.create(n,...e)}function J(n,e,...t){if(!n)throw yu(e,...t)}function xn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ia(e),new Error(e)}function Fn(n,e){n||xn(e)}/**
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
 */function Eu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gy(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function _y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gy()||W_()||"connection"in navigator)?navigator.onLine:!0}function vy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fn(t>e,"Short delay should be less than long delay!"),this.isMobile=q_()||K_()}get(){return _y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wu(n,e){Fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class If{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ey=new Vi(3e4,6e4);function Tu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ws(n,e,t,r,s={}){return Af(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ci(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return H_()||(h.referrerPolicy="no-referrer"),If.fetch()(bf(n,n.config.apiHost,t,l),h)})}async function Af(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yy),e);try{const s=new Ty(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oa(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oa(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw oa(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wf(n,d,h);Ln(n,d)}}catch(s){if(s instanceof On)throw s;Ln(n,"network-request-failed",{message:String(s)})}}async function wy(n,e,t,r,s={}){const i=await ws(n,e,t,r,s);return"mfaPendingCredential"in i&&Ln(n,"multi-factor-auth-required",{_serverResponse:i}),i}function bf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?wu(n.config,s):`${n.config.apiScheme}://${s}`}class Ty{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),Ey.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oa(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=gn(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Iy(n,e){return ws(n,"POST","/v1/accounts:delete",e)}async function Rf(n,e){return ws(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ay(n,e=!1){const t=St(n),r=await t.getIdToken(e),s=Au(r);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ni(Iu(s.auth_time)),issuedAtTime:Ni(Iu(s.iat)),expirationTime:Ni(Iu(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Iu(n){return Number(n)*1e3}function Au(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zh(t);return s?JSON.parse(s):(ia("Failed to decode base64 JWT payload"),null)}catch(s){return ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sf(n){const e=Au(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof On&&by(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function by({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function aa(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Oi(n,Rf(t,{idToken:r}));J(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kf(i.providerUserInfo):[],l=ky(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Sy(n){const e=St(n);await aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ky(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kf(n){return n.map(e=>{var{providerId:t}=e,r=vu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Py(n,e){const t=await Af(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=bf(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",If.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cy(n,e){return ws(n,"POST","/v2/accounts:revokeToken",Tu(n,e))}/**
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
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Sf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Py(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ts;return r&&(J(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function or(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ay(this,e)}reload(){return Sy(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await Oi(this,Iy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,G=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:z,emailVerified:te,isAnonymous:Pe,providerData:Ie,stsTokenManager:I}=t;J(z&&I,e,"internal-error");const g=Ts.fromJSON(this.name,I);J(typeof z=="string",e,"internal-error"),or(m,e.name),or(w,e.name),J(typeof te=="boolean",e,"internal-error"),J(typeof Pe=="boolean",e,"internal-error"),or(T,e.name),or(A,e.name),or(N,e.name),or(C,e.name),or(U,e.name),or(G,e.name);const _=new Un({uid:z,auth:e,email:w,emailVerified:te,displayName:m,isAnonymous:Pe,photoURL:A,phoneNumber:T,tenantId:N,stsTokenManager:g,createdAt:U,lastLoginAt:G});return Ie&&Array.isArray(Ie)&&(_.providerData=Ie.map(v=>Object.assign({},v))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ts;s.updateFromServerResponse(t);const i=new Un({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await aa(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ts;l.updateFromIdToken(r);const c=new Un({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Pf=new Map;function Bn(n){Fn(n instanceof Function,"Expected a class definition");let e=Pf.get(n);return e?(Fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pf.set(n,e),e)}/**
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
 */class Cf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cf.type="NONE";const Df=Cf;/**
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
 */function la(n,e,t){return`firebase:${n}:${e}:${t}`}class Is{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=la(this.userKey,s.apiKey,i),this.fullPersistenceKey=la("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Is(Bn(Df),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Bn(Df);const a=la(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const m=Un._fromJSON(e,d);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Is(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Is(i,e,r))}}/**
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
 */function Vf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ff(e))return"Blackberry";if(Uf(e))return"Webos";if(Of(e))return"Safari";if((e.includes("chrome/")||Mf(e))&&!e.includes("edge/"))return"Chrome";if(xf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nf(n=ft()){return/firefox\//i.test(n)}function Of(n=ft()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mf(n=ft()){return/crios\//i.test(n)}function Lf(n=ft()){return/iemobile/i.test(n)}function xf(n=ft()){return/android/i.test(n)}function Ff(n=ft()){return/blackberry/i.test(n)}function Uf(n=ft()){return/webos/i.test(n)}function Ru(n=ft()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Dy(n=ft()){var e;return Ru(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vy(){return G_()&&document.documentMode===10}function Bf(n=ft()){return Ru(n)||xf(n)||Uf(n)||Ff(n)||/windows phone/i.test(n)||Lf(n)}/**
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
 */function jf(n,e=[]){let t;switch(n){case"Browser":t=Vf(ft());break;case"Worker":t=`${Vf(ft())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${r}`}/**
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
 */class Ny{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Oy(n,e={}){return ws(n,"GET","/v2/passwordPolicy",Tu(n,e))}/**
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
 */const My=6;class Ly{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:My,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class xy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new Ny(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ef,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rf(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rr(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await aa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(Fr(this));const t=e?St(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oy(this),t=new Ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bn(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Bn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&my(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Su(n){return St(n)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=nv(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fy(n){ku=n}function Uy(n){return ku.loadJS(n)}function By(){return ku.gapiScript}function jy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function $y(n,e){const t=gu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(na(i,e??{}))return s;Ln(s,"already-initialized")}return t.initialize({options:e})}function qy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Bn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zy(n,e,t){const r=Su(n);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qf(e),{host:a,port:l}=Hy(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Wy()}function qf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hy(n){const e=qf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:zf(a)}}}function zf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,t){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
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
 */async function As(n,e){return wy(n,"POST","/v1/accounts:signInWithIdp",Tu(n,e))}/**
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
 */const Ky="http://localhost";class Ur extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=vu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ur(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return As(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,As(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,As(e,t)}buildRequest(){const e={requestUri:Ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}/**
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
 */class Wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends Wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Mi{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com",ar.PROVIDER_ID="facebook.com";/**
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
 */class lr extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ur._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return lr.credential(t,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com",lr.PROVIDER_ID="google.com";/**
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
 */class ur extends Mi{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com",ur.PROVIDER_ID="github.com";/**
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
 */class cr extends Mi{constructor(){super("twitter.com")}static credential(e,t){return Ur._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return cr.credential(t,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com",cr.PROVIDER_ID="twitter.com";/**
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
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Un._fromIdTokenResponse(e,r,s),a=Kf(r);return new bs({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kf(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ua extends On{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ua(e,t,r,s)}}function Gf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(n,i,e,r):i})}async function Gy(n,e,t=!1){const r=await Oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bs._forOperation(n,"link",r)}/**
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
 */async function Qy(n,e,t=!1){const{auth:r}=n;if(rr(r.app))return Promise.reject(Fr(r));const s="reauthenticate";try{const i=await Oi(n,Gf(r,s,e,n),t);J(i.idToken,r,"internal-error");const a=Au(i.idToken);J(a,r,"internal-error");const{sub:l}=a;return J(n.uid===l,r,"user-mismatch"),bs._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),i}}/**
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
 */async function Yy(n,e,t=!1){if(rr(n.app))return Promise.reject(Fr(n));const r="signIn",s=await Gf(n,r,e),i=await bs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Jy(n,e,t,r){return St(n).onIdTokenChanged(e,t,r)}function Xy(n,e,t){return St(n).beforeAuthStateChanged(e,t)}const ca="__sak";/**
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
 */class Qf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zy=1e3,eE=10;class Yf extends Qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Vy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yf.type="LOCAL";const tE=Yf;/**
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
 */class Jf extends Qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jf.type="SESSION";const Xf=Jf;/**
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
 */function nE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ha(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await nE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ha.receivers=[];/**
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
 */function Pu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Pu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function _n(){return window}function sE(n){_n().location.href=n}/**
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
 */function Zf(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function iE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aE(){return Zf()?self:null}/**
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
 */const ed="firebaseLocalStorageDb",lE=1,fa="firebaseLocalStorage",td="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function da(n,e){return n.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function uE(){const n=indexedDB.deleteDatabase(ed);return new Li(n).toPromise()}function Cu(){const n=indexedDB.open(ed,lE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fa,{keyPath:td})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await uE(),e(await Cu()))})})}async function nd(n,e,t){const r=da(n,!0).put({[td]:e,value:t});return new Li(r).toPromise()}async function cE(n,e){const t=da(n,!1).get(e),r=await new Li(t).toPromise();return r===void 0?null:r.value}function rd(n,e){const t=da(n,!0).delete(e);return new Li(t).toPromise()}const hE=800,fE=3;class sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ha._getInstance(aE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iE(),!this.activeServiceWorker)return;this.sender=new rE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cu();return await nd(e,ca,"1"),await rd(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=da(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sd.type="LOCAL";const dE=sd;new Vi(3e4,6e4);/**
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
 */function pE(n,e){return e?Bn(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Du extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,t){return As(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mE(n){return Yy(n.auth,new Du(n),n.bypassAuthState)}function gE(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),Qy(t,new Du(n),n.bypassAuthState)}async function _E(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),Gy(t,new Du(n),n.bypassAuthState)}/**
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
 */class id{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mE;case"linkViaPopup":case"linkViaRedirect":return _E;case"reauthViaPopup":case"reauthViaRedirect":return gE;default:Ln(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vE=new Vi(2e3,1e4);class Rs extends id{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vE.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const yE="pendingRedirect",pa=new Map;class EE extends id{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const r=await wE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wE(n,e){const t=AE(e),r=IE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function TE(n,e){pa.set(n._key(),e)}function IE(n){return Bn(n._redirectPersistence)}function AE(n){return la(yE,n.config.apiKey,n.name)}async function bE(n,e,t=!1){if(rr(n.app))return Promise.reject(Fr(n));const r=Su(n),s=pE(r,e),a=await new EE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const RE=10*60*1e3;class SE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ad(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RE&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ad({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ad(n);default:return!1}}/**
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
 */async function PE(n,e={}){return ws(n,"GET","/v1/projects",e)}/**
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
 */const CE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DE=/^https?/;async function VE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await PE(n);for(const t of e)try{if(NE(t))return}catch{}Ln(n,"unauthorized-domain")}function NE(n){const e=Eu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!DE.test(t))return!1;if(CE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OE=new Vi(3e4,6e4);function ld(){const n=_n().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ME(n){return new Promise((e,t)=>{var r,s,i;function a(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),t(gn(n,"network-request-failed"))},timeout:OE.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)a();else{const l=jy("iframefcb");return _n()[l]=()=>{gapi.load?a():t(gn(n,"network-request-failed"))},Uy(`${By()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ma=null,e})}let ma=null;function LE(n){return ma=ma||ME(n),ma}/**
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
 */const xE=new Vi(5e3,15e3),FE="__/auth/iframe",UE="emulator/auth/iframe",BE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $E(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wu(e,UE):`https://${n.config.authDomain}/${FE}`,r={apiKey:e.apiKey,appName:n.name,v:Es},s=jE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ci(r).slice(1)}`}async function qE(n){const e=await LE(n),t=_n().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:$E(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=gn(n,"network-request-failed"),l=_n().setTimeout(()=>{i(a)},xE.get());function c(){_n().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const zE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HE=500,WE=600,KE="_blank",GE="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QE(n,e,t,r=HE,s=WE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},zE),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ft().toLowerCase();t&&(l=Mf(h)?KE:t),Nf(h)&&(e=e||GE,c.scrollbars="yes");const d=Object.entries(c).reduce((w,[T,A])=>`${w}${T}=${A},`,"");if(Dy(h)&&l!=="_self")return YE(e||"",l),new ud(null);const m=window.open(e||"",l,d);J(m,n,"popup-blocked");try{m.focus()}catch{}return new ud(m)}function YE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const JE="__/auth/handler",XE="emulator/auth/handler",ZE=encodeURIComponent("fac");async function cd(n,e,t,r,s,i){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Es,eventId:s};if(e instanceof Wf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",tv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof Mi){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${ZE}=${encodeURIComponent(c)}`:"";return`${ew(n)}?${Ci(l).slice(1)}${h}`}function ew({config:n}){return n.emulator?wu(n,XE):`https://${n.authDomain}/${JE}`}/**
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
 */const Vu="webStorageSupport";class tw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xf,this._completeRedirectFn=bE,this._overrideRedirectResult=TE}async _openPopup(e,t,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cd(e,t,r,Eu(),s);return QE(e,a,Pu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await cd(e,t,r,Eu(),s);return sE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qE(e),r=new SE(e);return t.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vu,{type:Vu},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vu];a!==void 0&&t(!!a),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bf()||Of()||Ru()}}const nw=tw;var hd="@firebase/auth",fd="1.7.9";/**
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
 */class rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iw(n){ys(new Lr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jf(n)},h=new xy(r,s,i,c);return qy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ys(new Lr("auth-internal",e=>{const t=Su(e.getProvider("auth").getImmediate());return(r=>new rw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(hd,fd,sw(n)),ir(hd,fd,"esm2017")}/**
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
 */const ow=5*60,aw=nf("authIdTokenMaxAge")||ow;let dd=null;const lw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>aw)return;const s=t==null?void 0:t.token;dd!==s&&(dd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uw(n=df()){const e=gu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$y(n,{popupRedirectResolver:nw,persistence:[dE,tE,Xf]}),r=nf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=lw(i.toString());Xy(t,a,()=>a(t.currentUser)),Jy(t,l=>a(l))}}const s=ef("auth");return s&&zy(t,`http://${s}`),t}function cw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Fy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",cw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),iw("Browser");var pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,md;(function(){var n;/** @license

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/function e(I,g){function _(){}_.prototype=g.prototype,I.D=g.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(v,b,S){for(var y=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)y[lt-2]=arguments[lt];return g.prototype[b].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,_){_||(_=0);var v=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)v[b]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(b=0;16>b;++b)v[b]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=I.g[0],_=I.g[1],b=I.g[2];var S=I.g[3],y=g+(S^_&(b^S))+v[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=S+(b^g&(_^b))+v[1]+3905402710&4294967295,S=g+(y<<12&4294967295|y>>>20),y=b+(_^S&(g^_))+v[2]+606105819&4294967295,b=S+(y<<17&4294967295|y>>>15),y=_+(g^b&(S^g))+v[3]+3250441966&4294967295,_=b+(y<<22&4294967295|y>>>10),y=g+(S^_&(b^S))+v[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(b^g&(_^b))+v[5]+1200080426&4294967295,S=g+(y<<12&4294967295|y>>>20),y=b+(_^S&(g^_))+v[6]+2821735955&4294967295,b=S+(y<<17&4294967295|y>>>15),y=_+(g^b&(S^g))+v[7]+4249261313&4294967295,_=b+(y<<22&4294967295|y>>>10),y=g+(S^_&(b^S))+v[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(b^g&(_^b))+v[9]+2336552879&4294967295,S=g+(y<<12&4294967295|y>>>20),y=b+(_^S&(g^_))+v[10]+4294925233&4294967295,b=S+(y<<17&4294967295|y>>>15),y=_+(g^b&(S^g))+v[11]+2304563134&4294967295,_=b+(y<<22&4294967295|y>>>10),y=g+(S^_&(b^S))+v[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(b^g&(_^b))+v[13]+4254626195&4294967295,S=g+(y<<12&4294967295|y>>>20),y=b+(_^S&(g^_))+v[14]+2792965006&4294967295,b=S+(y<<17&4294967295|y>>>15),y=_+(g^b&(S^g))+v[15]+1236535329&4294967295,_=b+(y<<22&4294967295|y>>>10),y=g+(b^S&(_^b))+v[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^b&(g^_))+v[6]+3225465664&4294967295,S=g+(y<<9&4294967295|y>>>23),y=b+(g^_&(S^g))+v[11]+643717713&4294967295,b=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(b^S))+v[0]+3921069994&4294967295,_=b+(y<<20&4294967295|y>>>12),y=g+(b^S&(_^b))+v[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^b&(g^_))+v[10]+38016083&4294967295,S=g+(y<<9&4294967295|y>>>23),y=b+(g^_&(S^g))+v[15]+3634488961&4294967295,b=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(b^S))+v[4]+3889429448&4294967295,_=b+(y<<20&4294967295|y>>>12),y=g+(b^S&(_^b))+v[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^b&(g^_))+v[14]+3275163606&4294967295,S=g+(y<<9&4294967295|y>>>23),y=b+(g^_&(S^g))+v[3]+4107603335&4294967295,b=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(b^S))+v[8]+1163531501&4294967295,_=b+(y<<20&4294967295|y>>>12),y=g+(b^S&(_^b))+v[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^b&(g^_))+v[2]+4243563512&4294967295,S=g+(y<<9&4294967295|y>>>23),y=b+(g^_&(S^g))+v[7]+1735328473&4294967295,b=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(b^S))+v[12]+2368359562&4294967295,_=b+(y<<20&4294967295|y>>>12),y=g+(_^b^S)+v[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^b)+v[8]+2272392833&4294967295,S=g+(y<<11&4294967295|y>>>21),y=b+(S^g^_)+v[11]+1839030562&4294967295,b=S+(y<<16&4294967295|y>>>16),y=_+(b^S^g)+v[14]+4259657740&4294967295,_=b+(y<<23&4294967295|y>>>9),y=g+(_^b^S)+v[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^b)+v[4]+1272893353&4294967295,S=g+(y<<11&4294967295|y>>>21),y=b+(S^g^_)+v[7]+4139469664&4294967295,b=S+(y<<16&4294967295|y>>>16),y=_+(b^S^g)+v[10]+3200236656&4294967295,_=b+(y<<23&4294967295|y>>>9),y=g+(_^b^S)+v[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^b)+v[0]+3936430074&4294967295,S=g+(y<<11&4294967295|y>>>21),y=b+(S^g^_)+v[3]+3572445317&4294967295,b=S+(y<<16&4294967295|y>>>16),y=_+(b^S^g)+v[6]+76029189&4294967295,_=b+(y<<23&4294967295|y>>>9),y=g+(_^b^S)+v[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^b)+v[12]+3873151461&4294967295,S=g+(y<<11&4294967295|y>>>21),y=b+(S^g^_)+v[15]+530742520&4294967295,b=S+(y<<16&4294967295|y>>>16),y=_+(b^S^g)+v[2]+3299628645&4294967295,_=b+(y<<23&4294967295|y>>>9),y=g+(b^(_|~S))+v[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~b))+v[7]+1126891415&4294967295,S=g+(y<<10&4294967295|y>>>22),y=b+(g^(S|~_))+v[14]+2878612391&4294967295,b=S+(y<<15&4294967295|y>>>17),y=_+(S^(b|~g))+v[5]+4237533241&4294967295,_=b+(y<<21&4294967295|y>>>11),y=g+(b^(_|~S))+v[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~b))+v[3]+2399980690&4294967295,S=g+(y<<10&4294967295|y>>>22),y=b+(g^(S|~_))+v[10]+4293915773&4294967295,b=S+(y<<15&4294967295|y>>>17),y=_+(S^(b|~g))+v[1]+2240044497&4294967295,_=b+(y<<21&4294967295|y>>>11),y=g+(b^(_|~S))+v[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~b))+v[15]+4264355552&4294967295,S=g+(y<<10&4294967295|y>>>22),y=b+(g^(S|~_))+v[6]+2734768916&4294967295,b=S+(y<<15&4294967295|y>>>17),y=_+(S^(b|~g))+v[13]+1309151649&4294967295,_=b+(y<<21&4294967295|y>>>11),y=g+(b^(_|~S))+v[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~b))+v[11]+3174756917&4294967295,S=g+(y<<10&4294967295|y>>>22),y=b+(g^(S|~_))+v[2]+718787259&4294967295,b=S+(y<<15&4294967295|y>>>17),y=_+(S^(b|~g))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(b+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var _=g-this.blockSize,v=this.B,b=this.h,S=0;S<g;){if(b==0)for(;S<=_;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<g;)if(v[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,v),b=0;break}}else for(;S<g;)if(v[b++]=I[S++],b==this.blockSize){s(this,v),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var _=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=_&255,_/=256;for(this.u(I),I=Array(16),g=_=0;4>g;++g)for(var v=0;32>v;v+=8)I[_++]=this.g[g]>>>v&255;return I};function i(I,g){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=g(I)}function a(I,g){this.h=g;for(var _=[],v=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;v&&S==g||(_[b]=S,v=!1)}this.g=_}var l={};function c(I){return-128<=I&&128>I?i(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return C(h(-I));for(var g=[],_=1,v=0;I>=_;v++)g[v]=I/_|0,_*=4294967296;return new a(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(d(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),v=m,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),y=parseInt(I.substring(b,b+S),g);8>S?(S=h(Math.pow(g,S)),v=v.j(S).add(h(y))):(v=v.j(_),v=v.add(h(y)))}return v}var m=c(0),w=c(1),T=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();for(var I=0,g=1,_=0;_<this.g.length;_++){var v=this.i(_);I+=(0<=v?v:4294967296+v)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(N(this))return"-"+C(this).toString(I);for(var g=h(Math.pow(I,6)),_=this,v="";;){var b=te(_,g).g;_=U(_,b.j(g));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=b,A(_))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=U(this,I),N(I)?-1:A(I)?0:1};function C(I){for(var g=I.g.length,_=[],v=0;v<g;v++)_[v]=~I.g[v];return new a(_,~I.h).add(w)}n.abs=function(){return N(this)?C(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],v=0,b=0;b<=g;b++){var S=v+(this.i(b)&65535)+(I.i(b)&65535),y=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);v=y>>>16,S&=65535,y&=65535,_[b]=y<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(I,g){return I.add(C(g))}n.j=function(I){if(A(this)||A(I))return m;if(N(this))return N(I)?C(this).j(C(I)):C(C(this).j(I));if(N(I))return C(this.j(C(I)));if(0>this.l(T)&&0>I.l(T))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,_=[],v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var b=0;b<I.g.length;b++){var S=this.i(v)>>>16,y=this.i(v)&65535,lt=I.i(b)>>>16,Kt=I.i(b)&65535;_[2*v+2*b]+=y*Kt,G(_,2*v+2*b),_[2*v+2*b+1]+=S*Kt,G(_,2*v+2*b+1),_[2*v+2*b+1]+=y*lt,G(_,2*v+2*b+1),_[2*v+2*b+2]+=S*lt,G(_,2*v+2*b+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new a(_,0)};function G(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function z(I,g){this.g=I,this.h=g}function te(I,g){if(A(g))throw Error("division by zero");if(A(I))return new z(m,m);if(N(I))return g=te(C(I),g),new z(C(g.g),C(g.h));if(N(g))return g=te(I,C(g)),new z(C(g.g),g.h);if(30<I.g.length){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=g;0>=v.l(I);)_=Pe(_),v=Pe(v);var b=Ie(_,1),S=Ie(v,1);for(v=Ie(v,2),_=Ie(_,2);!A(v);){var y=S.add(v);0>=y.l(I)&&(b=b.add(_),S=y),v=Ie(v,1),_=Ie(_,1)}return g=U(I,b.j(g)),new z(b,g)}for(b=m;0<=I.l(g);){for(_=Math.max(1,Math.floor(I.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=h(_),y=S.j(g);N(y)||0<y.l(I);)_-=v,S=h(_),y=S.j(g);A(S)&&(S=w),b=b.add(S),I=U(I,y)}return new z(b,I)}n.A=function(I){return te(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)&I.i(v);return new a(_,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)|I.i(v);return new a(_,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)^I.i(v);return new a(_,this.h^I.h)};function Pe(I){for(var g=I.g.length+1,_=[],v=0;v<g;v++)_[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(_,I.h)}function Ie(I,g){var _=g>>5;g%=32;for(var v=I.g.length-_,b=[],S=0;S<v;S++)b[S]=0<g?I.i(S+_)>>>g|I.i(S+_+1)<<32-g:I.i(S+_);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,md=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Br=a}).apply(typeof pd<"u"?pd:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gd,xi,_d,_a,Nu,vd,yd,Ed;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var k=o[p];if(!(k in f))break e;f=f[k]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,k={next:function(){if(!p&&f<o.length){var D=f++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function m(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function w(o,u,f){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,w.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,k,D){for(var F=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)F[Re-2]=arguments[Re];return u.prototype[k].apply(p,F)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function C(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const k=o.length||0,D=p.length||0;o.length=k+D;for(let F=0;F<D;F++)o[k+F]=p[F]}else o.push(p)}}class U{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function te(o){return te[" "](o),o}te[" "]=function(){};var Pe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function Ie(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function g(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let f,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(f in p)o[f]=p[f];for(let D=0;D<_.length;D++)f=_[D],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function y(){var o=wt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,f){const p=Kt.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Kt=new U(()=>new Wn,o=>o.reset());class Wn{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Rn,Gt=!1,wt=new lt,nn=()=>{const o=l.Promise.resolve(void 0);Rn=()=>{o.then(ho)}};var ho=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(f){S(f)}var u=Kt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Gt=!1};function rn(){this.s=this.s,this.C=this.C}rn.prototype.s=!1,rn.prototype.ma=function(){this.s||(this.s=!0,this.N())},rn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var fo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Er(o,u){if(Ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Pe){e:{try{te(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Xa[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Er.aa.h.call(this)}}A(Er,Ye);var Xa={2:"touch",3:"pen",4:"mouse"};Er.prototype.h=function(){Er.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),Nc=0;function po(o,u,f,p,k){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=k,this.key=++Nc,this.da=this.fa=!1}function Qs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ys(o){this.src=o,this.g={},this.h=0}Ys.prototype.add=function(o,u,f,p,k){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var F=go(o,u,p,k);return-1<F?(u=o[F],f||(u.fa=!1)):(u=new po(u,this.src,D,!!p,k),u.fa=f,o.push(u)),u};function mo(o,u){var f=u.type;if(f in o.g){var p=o.g[f],k=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=k)&&Array.prototype.splice.call(p,k,1),D&&(Qs(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function go(o,u,f,p){for(var k=0;k<o.length;++k){var D=o[k];if(!D.da&&D.listener==u&&D.capture==!!f&&D.ha==p)return k}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),Xs={};function _o(o,u,f,p,k){if(Array.isArray(u)){for(var D=0;D<u.length;D++)_o(o,u[D],f,p,k);return null}return f=nl(f),o&&o[wr]?o.K(u,f,h(p)?!!p.capture:!1,k):Za(o,u,f,!1,p,k)}function Za(o,u,f,p,k,D){if(!u)throw Error("Invalid event type");var F=h(k)?!!k.capture:!!k,Re=Eo(o);if(Re||(o[Js]=Re=new Ys(o)),f=Re.add(u,f,p,F,D),f.proxy)return f;if(p=Oc(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)fo||(k=F),k===void 0&&(k=!1),o.addEventListener(u.toString(),p,k);else if(o.attachEvent)o.attachEvent(el(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Oc(){function o(f){return u.call(o.src,o.listener,f)}const u=tl;return o}function vo(o,u,f,p,k){if(Array.isArray(u))for(var D=0;D<u.length;D++)vo(o,u[D],f,p,k);else p=h(p)?!!p.capture:!!p,f=nl(f),o&&o[wr]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],f=go(D,f,p,k),-1<f&&(Qs(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=Eo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=go(u,f,p,k)),(f=-1<o?u[o]:null)&&yo(f))}function yo(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[wr])mo(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(el(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=Eo(u))?(mo(f,o),f.h==0&&(f.src=null,u[Js]=null)):Qs(o)}}}function el(o){return o in Xs?Xs[o]:Xs[o]="on"+o}function tl(o,u){if(o.da)o=!0;else{u=new Er(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&yo(o),o=f.call(p,u)}return o}function Eo(o){return o=o[Js],o instanceof Ys?o:null}var wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function nl(o){return typeof o=="function"?o:(o[wo]||(o[wo]=function(u){return o.handleEvent(u)}),o[wo])}function Xe(){rn.call(this),this.i=new Ys(this),this.M=this,this.F=null}A(Xe,rn),Xe.prototype[wr]=!0,Xe.prototype.removeEventListener=function(o,u,f,p){vo(this,o,u,f,p)};function Ze(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ye(u,o);else if(u instanceof Ye)u.target=u.target||o;else{var k=u;u=new Ye(p,o),v(u,k)}if(k=!0,f)for(var D=f.length-1;0<=D;D--){var F=u.g=f[D];k=Zr(F,p,!0,u)&&k}if(F=u.g=o,k=Zr(F,p,!0,u)&&k,k=Zr(F,p,!1,u)&&k,f)for(D=0;D<f.length;D++)F=u.g=f[D],k=Zr(F,p,!1,u)&&k}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Qs(f[p]);delete o.g[u],o.h--}}this.F=null},Xe.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},Xe.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function Zr(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,D=0;D<u.length;++D){var F=u[D];if(F&&!F.da&&F.capture==f){var Re=F.listener,ut=F.ha||F.src;F.fa&&mo(o.i,F),k=Re.call(ut,p)!==!1&&k}}return k&&!p.defaultPrevented}function rl(o,u,f){if(typeof o=="function")f&&(o=w(o,f));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function To(o){o.g=rl(()=>{o.g=null,o.i&&(o.i=!1,To(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class sl extends rn{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(o){rn.call(this),this.h=o,this.g={}}A(es,rn);var il=[];function ol(o){Ie(o.g,function(u,f){this.g.hasOwnProperty(f)&&yo(u)},o),o.g={}}es.prototype.N=function(){es.aa.N.call(this),ol(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=l.JSON.stringify,Mc=l.JSON.parse,al=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Zs(){}Zs.prototype.h=null;function ll(o){return o.h||(o.h=o.i())}function ul(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ei(){Ye.call(this,"d")}A(ei,Ye);function Ao(){Ye.call(this,"c")}A(Ao,Ye);var Sn={},cl=null;function ti(){return cl=cl||new Xe}Sn.La="serverreachability";function hl(o){Ye.call(this,Sn.La,o)}A(hl,Ye);function Tr(o){const u=ti();Ze(u,new hl(u))}Sn.STAT_EVENT="statevent";function fl(o,u){Ye.call(this,Sn.STAT_EVENT,o),this.stat=u}A(fl,Ye);function et(o){const u=ti();Ze(u,new fl(u,o))}Sn.Ma="timingevent";function bo(o,u){Ye.call(this,Sn.Ma,o),this.size=u}A(bo,Ye);function Ir(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function dl(o,u,f,p,k,D){o.info(function(){if(o.g)if(D)for(var F="",Re=D.split("&"),ut=0;ut<Re.length;ut++){var Ee=Re[ut].split("=");if(1<Ee.length){var gt=Ee[0];Ee=Ee[1];var _t=gt.split("_");F=2<=_t.length&&_t[1]=="type"?F+(gt+"="+Ee+"&"):F+(gt+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+u+`
`+f+`
`+F})}function Lc(o,u,f,p,k,D,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+u+`
`+f+`
`+D+" "+F})}function Ar(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fc(o,f)+(p?" "+p:"")})}function xc(o,u){o.info(function(){return"TIMEOUT: "+u})}ns.prototype.info=function(){};function Fc(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return Io(f)}catch{return u}}var rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},So;function ni(){}A(ni,Zs),ni.prototype.g=function(){return new XMLHttpRequest},ni.prototype.i=function(){return{}},So=new ni;function kn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new R}function R(){this.i=null,this.g="",this.h=!1}var V={},M={};function B(o,u,f){o.L=1,o.v=ii(Tt(u)),o.m=f,o.P=!0,x(o,null)}function x(o,u){o.F=Date.now(),W(o),o.A=Tt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),bm(f.i,"t",p),o.C=0,f=o.j.J,o.h=new R,o.g=qm(o.j,f?u:null,!o.m),0<o.O&&(o.M=new sl(w(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(il[0]=k.toString()),k=il);for(var D=0;D<k.length;D++){var F=_o(f,k[D],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Tr(),dl(o.i,o.u,o.A,o.l,o.R,o.m)}kn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Yn(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)e:{const _t=Yn(this.g);var u=this.g.Ba();const li=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Vm(this.g)))){this.J||_t!=4||u==7||(u==8||0>=li?Tr(3):Tr(2)),ce(this);var f=this.g.Z();this.X=f;t:if(j(this)){var p=Vm(this.g);o="";var k=p.length,D=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),be(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==k-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,Lc(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,ut=this.g;if((Re=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Re)){var Ee=Re;break t}}Ee=null}if(f=Ee)Ar(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fe(this,f);else{this.o=!1,this.s=3,et(12),ve(this),be(this);break e}}if(this.P){f=!0;let an;for(;!this.J&&this.C<F.length;)if(an=q(this,F),an==M){_t==4&&(this.s=4,et(14),f=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(an==V){this.s=4,et(15),Ar(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else Ar(this.i,this.l,an,null),Fe(this,an);if(j(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||F.length!=0||this.h.h||(this.s=1,et(16),f=!1),this.o=this.o&&f,!f)Ar(this.i,this.l,F,"[Invalid Chunked Response]"),ve(this),be(this);else if(0<F.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),$c(gt),gt.M=!0,et(11))}}else Ar(this.i,this.l,F,null),Fe(this,F);_t==4&&ve(this),this.o&&!this.J&&(_t==4?Um(this.j,this):(this.o=!1,W(this)))}else fA(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),ve(this),be(this)}}}catch{}finally{}};function j(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function q(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?M:(f=Number(u.substring(f,p)),isNaN(f)?V:(p+=1,p+f>u.length?M:(u=u.slice(p,p+f),o.C=p+f,u)))}kn.prototype.cancel=function(){this.J=!0,ve(this)};function W(o){o.S=Date.now()+o.I,oe(o,o.I)}function oe(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ir(w(o.ba,o),u)}function ce(o){o.B&&(l.clearTimeout(o.B),o.B=null)}kn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xc(this.i,this.A),this.L!=2&&(Tr(),et(17)),ve(this),this.s=2,be(this)):oe(this,this.S-o)};function be(o){o.j.G==0||o.J||Um(o.j,o)}function ve(o){ce(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ol(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fe(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ss(f.h,o))){if(!o.K&&ss(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)yl(f),_l(f);else break e;jc(f),et(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ir(w(f.Za,f),6e3));if(1>=sn(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else as(f,11)}else if((o.K||f.g==o)&&yl(f),!G(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let Ee=k[u];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const gt=Ee[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const _t=Ee[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const li=Ee[5];li!=null&&typeof li=="number"&&0<li&&(p=1.5*li,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const an=o.g;if(an){const wl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wl){var D=p.h;D.g||wl.indexOf("spdy")==-1&&wl.indexOf("quic")==-1&&wl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(on(D,D.h),D.h=null))}if(p.D){const qc=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;qc&&(p.ya=qc,pe(p.I,p.D,qc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var F=o;if(p.qa=$m(p,p.J?p.ia:null,p.W),F.K){ri(p.h,F);var Re=F,ut=p.L;ut&&(Re.I=ut),Re.B&&(ce(Re),W(Re)),p.g=F}else xm(p);0<f.i.length&&vl(f)}else Ee[0]!="stop"&&Ee[0]!="close"||as(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?as(f,7):Bc(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}Tr(4)}catch{}}var Ce=class{constructor(o,u){this.g=o,this.map=u}};function ye(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Me(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function sn(o){return o.h?1:o.g?o.g.size:0}function ss(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function on(o,u){o.g?o.g.add(u):o.h=u}function ri(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ye.prototype.cancel=function(){if(this.i=is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function is(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function Kn(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function si(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function tt(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=si(o),p=Kn(o),k=p.length,D=0;D<k;D++)u.call(void 0,p[D],f&&f[D],o)}var Qt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gn(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),k=null;if(0<=p){var D=o[f].substring(0,p);k=o[f].substring(p+1)}else D=o[f];u(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Pt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pt){this.h=o.h,Pn(this,o.j),this.o=o.o,this.g=o.g,Qn(this,o.s),this.l=o.l;var u=o.i,f=new Co;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),os(this,f),this.m=o.m}else o&&(u=String(o).match(Qt))?(this.h=!1,Pn(this,u[1]||"",!0),this.o=ko(u[2]||""),this.g=ko(u[3]||"",!0),Qn(this,u[4]),this.l=ko(u[5]||"",!0),os(this,u[6]||"",!0),this.m=ko(u[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}Pt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Po(u,Tm,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Po(u,Tm,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Po(f,f.charAt(0)=="/"?nA:tA,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Po(f,sA)),o.join("")};function Tt(o){return new Pt(o)}function Pn(o,u,f){o.j=f?ko(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Qn(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function os(o,u,f){u instanceof Co?(o.i=u,iA(o.i,o.h)):(f||(u=Po(u,rA)),o.i=new Co(u,o.h))}function pe(o,u,f){o.i.set(u,f)}function ii(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ko(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Po(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,eA),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function eA(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Tm=/[#\/\?@]/g,tA=/[#\?:]/g,nA=/[#\?]/g,rA=/[#\?@]/g,sA=/#/g;function Co(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function br(o){o.g||(o.g=new Map,o.h=0,o.i&&Gn(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Co.prototype,n.add=function(o,u){br(this),this.i=null,o=oi(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Im(o,u){br(o),u=oi(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Am(o,u){return br(o),u=oi(o,u),o.g.has(u)}n.forEach=function(o,u){br(this),this.g.forEach(function(f,p){f.forEach(function(k){o.call(u,k,p,this)},this)},this)},n.na=function(){br(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const k=o[p];for(let D=0;D<k.length;D++)f.push(u[p])}return f},n.V=function(o){br(this);let u=[];if(typeof o=="string")Am(this,o)&&(u=u.concat(this.g.get(oi(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return br(this),this.i=null,o=oi(this,o),Am(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function bm(o,u,f){Im(o,u),0<f.length&&(o.i=null,o.g.set(oi(o,u),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const D=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var k=D;F[p]!==""&&(k+="="+encodeURIComponent(String(F[p]))),o.push(k)}}return this.i=o.join("&")};function oi(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function iA(o,u){u&&!o.j&&(br(o),o.i=null,o.g.forEach(function(f,p){var k=p.toLowerCase();p!=k&&(Im(this,p),bm(this,k,f))},o)),o.j=u}function oA(o,u){const f=new ns;if(l.Image){const p=new Image;p.onload=T(Rr,f,"TestLoadImage: loaded",!0,u,p),p.onerror=T(Rr,f,"TestLoadImage: error",!1,u,p),p.onabort=T(Rr,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=T(Rr,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function aA(o,u){const f=new ns,p=new AbortController,k=setTimeout(()=>{p.abort(),Rr(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(k),D.ok?Rr(f,"TestPingServer: ok",!0,u):Rr(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Rr(f,"TestPingServer: error",!1,u)})}function Rr(o,u,f,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(f)}catch{}}function lA(){this.g=new al}function uA(o,u,f){const p=f||"";try{tt(o,function(k,D){let F=k;h(k)&&(F=Io(k)),u.push(p+D+"="+encodeURIComponent(F))})}catch(k){throw u.push(p+"type="+encodeURIComponent("_badmap")),k}}function pl(o){this.l=o.Ub||null,this.j=o.eb||!1}A(pl,Zs),pl.prototype.g=function(){return new ml(this.l,this.j)},pl.prototype.i=function(o){return function(){return o}}({});function ml(o,u){Xe.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ml,Xe),n=ml.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Vo(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Do(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vo(this)),this.g&&(this.readyState=3,Vo(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rm(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rm(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Do(this):Vo(this),this.readyState==3&&Rm(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Do(this))},n.Qa=function(o){this.g&&(this.response=o,Do(this))},n.ga=function(){this.g&&Do(this)};function Do(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vo(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Vo(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Sm(o){let u="";return Ie(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Uc(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Sm(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):pe(o,u,f))}function Ue(o){Xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ue,Xe);var cA=/^https?$/i,hA=["POST","PUT"];n=Ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():So.g(),this.v=this.o?ll(this.o):ll(So),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){km(this,D);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)f.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())f.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(hA,u,void 0))||p||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of f)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dm(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){km(this,D)}};function km(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Pm(o),gl(o)}function Pm(o){o.A||(o.A=!0,Ze(o,"complete"),Ze(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ze(this,"complete"),Ze(this,"abort"),gl(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gl(this,!0)),Ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Cm(this):this.bb())},n.bb=function(){Cm(this)};function Cm(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yn(o)!=4||o.Z()!=2)){if(o.u&&Yn(o)==4)rl(o.Ea,0,o);else if(Ze(o,"readystatechange"),Yn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=F===0){var k=String(o.D).match(Qt)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),p=!cA.test(k?k.toLowerCase():"")}f=p}if(f)Ze(o,"complete"),Ze(o,"success");else{o.m=6;try{var D=2<Yn(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Pm(o)}}finally{gl(o)}}}}function gl(o,u){if(o.g){Dm(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ze(o,"ready");try{f.onreadystatechange=p}catch{}}}function Dm(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Yn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Mc(u)}};function Vm(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fA(o){const u={};o=(o.g&&2<=Yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(G(o[p]))continue;var f=b(o[p]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=u[k]||[];u[k]=D,D.push(f)}I(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function No(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Nm(o){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=No("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=No("baseRetryDelayMs",5e3,o),this.cb=No("retryDelaySeedMs",1e4,o),this.Wa=No("forwardChannelMaxRetries",2,o),this.wa=No("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(o&&o.concurrentRequestLimit),this.Da=new lA,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Nm.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,p){et(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=$m(this,null,this.W),vl(this)};function Bc(o){if(Om(o),o.G==3){var u=o.U++,f=Tt(o.I);if(pe(f,"SID",o.K),pe(f,"RID",u),pe(f,"TYPE","terminate"),Oo(o,f),u=new kn(o,o.j,u),u.L=2,u.v=ii(Tt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=qm(u.j,null),u.g.ea(u.v)),u.F=Date.now(),W(u)}jm(o)}function _l(o){o.g&&($c(o),o.g.cancel(),o.g=null)}function Om(o){_l(o),o.u&&(l.clearTimeout(o.u),o.u=null),yl(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function vl(o){if(!Me(o.h)&&!o.s){o.s=!0;var u=o.Ga;Rn||nn(),Gt||(Rn(),Gt=!0),wt.add(u,o),o.B=0}}function dA(o,u){return sn(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ir(w(o.Ga,o,u),Bm(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new kn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=g(D),v(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Lm(this,k,u),f=Tt(this.I),pe(f,"RID",o),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),Oo(this,f),D&&(this.O?u="headers="+encodeURIComponent(String(Sm(D)))+"&"+u:this.m&&Uc(f,this.m,D)),on(this.h,k),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",u),pe(f,"SID","null"),k.T=!0,B(k,f,null)):B(k,f,u),this.G=2}}else this.G==3&&(o?Mm(this,o):this.i.length==0||Me(this.h)||Mm(this))};function Mm(o,u){var f;u?f=u.l:f=o.U++;const p=Tt(o.I);pe(p,"SID",o.K),pe(p,"RID",f),pe(p,"AID",o.T),Oo(o,p),o.m&&o.o&&Uc(p,o.m,o.o),f=new kn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Lm(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),on(o.h,f),B(f,p,u)}function Oo(o,u){o.H&&Ie(o.H,function(f,p){pe(u,p,f)}),o.l&&tt({},function(f,p){pe(u,p,f)})}function Lm(o,u,f){f=Math.min(o.i.length,f);var p=o.l?w(o.l.Na,o.l,o):null;e:{var k=o.i;let D=-1;for(;;){const F=["count="+f];D==-1?0<f?(D=k[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let Re=!0;for(let ut=0;ut<f;ut++){let Ee=k[ut].g;const gt=k[ut].map;if(Ee-=D,0>Ee)D=Math.max(0,k[ut].g-100),Re=!1;else try{uA(gt,F,"req"+Ee+"_")}catch{p&&p(gt)}}if(Re){p=F.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function xm(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Rn||nn(),Gt||(Rn(),Gt=!0),wt.add(u,o),o.v=0}}function jc(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ir(w(o.Fa,o),Bm(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Fm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ir(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),_l(this),Fm(this))};function $c(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Fm(o){o.g=new kn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Tt(o.qa);pe(u,"RID","rpc"),pe(u,"SID",o.K),pe(u,"AID",o.T),pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(u,"TO",o.ja),pe(u,"TYPE","xmlhttp"),Oo(o,u),o.m&&o.o&&Uc(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ii(Tt(u)),f.m=null,f.P=!0,x(f,o)}n.Za=function(){this.C!=null&&(this.C=null,_l(this),jc(this),et(19))};function yl(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Um(o,u){var f=null;if(o.g==u){yl(o),$c(o),o.g=null;var p=2}else if(ss(o.h,u))f=u.D,ri(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;p=ti(),Ze(p,new bo(p,f)),vl(o)}else xm(o);else if(k=u.s,k==3||k==0&&0<u.X||!(p==1&&dA(o,u)||p==2&&jc(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),k){case 1:as(o,5);break;case 4:as(o,10);break;case 3:as(o,6);break;default:as(o,2)}}}function Bm(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function as(o,u){if(o.j.info("Error code "+u),u==2){var f=w(o.fb,o),p=o.Xa;const k=!p;p=new Pt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pn(p,"https"),ii(p),k?oA(p.toString(),f):aA(p.toString(),f)}else et(2);o.G=0,o.l&&o.l.sa(u),jm(o),Om(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function jm(o){if(o.G=0,o.ka=[],o.l){const u=is(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function $m(o,u,f){var p=f instanceof Pt?Tt(f):new Pt(f);if(p.g!="")u&&(p.g=u+"."+p.g),Qn(p,p.s);else{var k=l.location;p=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var D=new Pt(null);p&&Pn(D,p),u&&(D.g=u),k&&Qn(D,k),f&&(D.l=f),p=D}return f=o.D,u=o.ya,f&&u&&pe(p,f,u),pe(p,"VER",o.la),Oo(o,p),p}function qm(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ue(new pl({eb:f})):new Ue(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zm(){}n=zm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function El(){}El.prototype.g=function(o,u){return new Ft(o,u)};function Ft(o,u){Xe.call(this),this.g=new Nm(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!G(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new ai(this)}A(Ft,Xe),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Bc(this.g)},Ft.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Io(o),o=f);u.i.push(new Ce(u.Ya++,o)),u.G==3&&vl(u)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Bc(this.g),delete this.g,Ft.aa.N.call(this)};function Hm(o){ei.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}A(Hm,ei);function Wm(){Ao.call(this),this.status=1}A(Wm,Ao);function ai(o){this.g=o}A(ai,zm),ai.prototype.ua=function(){Ze(this.g,"a")},ai.prototype.ta=function(o){Ze(this.g,new Hm(o))},ai.prototype.sa=function(o){Ze(this.g,new Wm)},ai.prototype.ra=function(){Ze(this.g,"b")},El.prototype.createWebChannel=El.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Ed=function(){return new El},yd=function(){return ti()},vd=Sn,Nu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,_a=rs,Ro.COMPLETE="complete",_d=Ro,ul.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,xi=ul,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,gd=Ue}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Ss="10.14.0";/**
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
 */const jr=new ou("@firebase/firestore");function Fi(){return jr.logLevel}function $(n,...e){if(jr.logLevel<=he.DEBUG){const t=e.map(Ou);jr.debug(`Firestore (${Ss}): ${n}`,...t)}}function jn(n,...e){if(jr.logLevel<=he.ERROR){const t=e.map(Ou);jr.error(`Firestore (${Ss}): ${n}`,...t)}}function ks(n,...e){if(jr.logLevel<=he.WARN){const t=e.map(Ou);jr.warn(`Firestore (${Ss}): ${n}`,...t)}}function Ou(n){if(typeof n=="string")return n;try{/**
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
 */function X(n="Unexpected state"){const e=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+n;throw jn(e),new Error(e)}function Ae(n,e){n||X()}function Z(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends On{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $r{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Td{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dt.UNAUTHENTICATED))}shutdown(){}}class fw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dw{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ae(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $r,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $r)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Td(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new dt(e)}}class pw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _w{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ae(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ae(typeof t.token=="string"),this.R=t.token,new gw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Id{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(n,e){return n<e?-1:n>e?1:0}function Ps(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ge(0,0))}static max(){return new ee(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ui{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(),r===void 0?r=e.length-t:r>e.length-t&&X(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class xe extends Ui{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const yw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ui{construct(e,t,r){return new st(e,t,r)}static isValidIdentifier(e){return yw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(xe.fromString(e))}static fromName(e){return new Y(xe.fromString(e).popFirst(5))}static empty(){return new Y(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new xe(e.slice()))}}function Ew(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ge(t+1,0):new Ge(t,r));return new hr(s,Y.empty(),e)}function ww(n){return new hr(n.readTime,n.key,-1)}class hr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hr(ee.min(),Y.empty(),-1)}static max(){return new hr(ee.max(),Y.empty(),-1)}}function Tw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ge(n.largestBatchId,e.largestBatchId))}/**
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
 */const Iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Aw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bi(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Iw)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function bw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ji(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Mu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mu.oe=-1;function va(n){return n==null}function ya(n){return n===0&&1/n==-1/0}function Rw(n){return typeof n=="number"&&Number.isInteger(n)&&!ya(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||it.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new it(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1,it.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,t,r,s,i){return this}insert(e,t,r){return new it(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rd(this.data.getIterator())}getIteratorFrom(e){return new Rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ot(this.comparator);return t.data=e,t}}class Rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new ot(st.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Sd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sd("Invalid base64 string: "+i):i}}(e);return new at(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Sw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(n){if(Ae(!!n),typeof n=="string"){let e=0;const t=Sw.exec(n);if(Ae(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(n.seconds),nanos:je(n.nanos)}}function je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zr(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
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
 */function Lu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xu(n){const e=n.mapValue.fields.__previous_value__;return Lu(e)?xu(e):e}function $i(n){const e=fr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class kw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class qi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wa={mapValue:{}};function Hr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lu(n)?4:Cw(n)?9007199254740991:Pw(n)?10:11:X()}function vn(n,e){if(n===e)return!0;const t=Hr(n);if(t!==Hr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $i(n).isEqual($i(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=fr(s.timestampValue),l=fr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return zr(s.bytesValue).isEqual(zr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=je(s.doubleValue),l=je(i.doubleValue);return a===l?ya(a)===ya(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Ps(n.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ad(a)!==Ad(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!vn(a[c],l[c])))return!1;return!0}(n,e);default:return X()}}function zi(n,e){return(n.values||[]).find(t=>vn(t,e))!==void 0}function Cs(n,e){if(n===e)return 0;const t=Hr(n),r=Hr(e);if(t!==r)return ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=je(i.integerValue||i.doubleValue),c=je(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return kd(n.timestampValue,e.timestampValue);case 4:return kd($i(n),$i(e));case 5:return ge(n.stringValue,e.stringValue);case 6:return function(i,a){const l=zr(i),c=zr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ge(l[h],c[h]);if(d!==0)return d}return ge(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ge(je(i.latitude),je(a.latitude));return l!==0?l:ge(je(i.longitude),je(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Pd(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const m=i.fields||{},w=a.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(c=w.value)===null||c===void 0?void 0:c.arrayValue,N=ge(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Pd(T,A)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===wa.mapValue&&a===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(a===wa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const w=ge(c[m],d[m]);if(w!==0)return w;const T=Cs(l[c[m]],h[d[m]]);if(T!==0)return T}return ge(c.length,d.length)}(n.mapValue,e.mapValue);default:throw X()}}function kd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ge(n,e);const t=fr(n),r=fr(e),s=ge(t.seconds,r.seconds);return s!==0?s:ge(t.nanos,r.nanos)}function Pd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Cs(t[s],r[s]);if(i)return i}return ge(t.length,r.length)}function Ds(n){return Fu(n)}function Fu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=fr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return zr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Fu(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Fu(t.fields[a])}`;return s+"}"}(n.mapValue):X()}function Uu(n){return!!n&&"integerValue"in n}function Bu(n){return!!n&&"arrayValue"in n}function Cd(n){return!!n&&"nullValue"in n}function Dd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ta(n){return!!n&&"mapValue"in n}function Pw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Hi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Hi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Cw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(t)}setAll(e){let t=st.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Hi(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){qr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Hi(this.value))}}function Vd(n){const e=[];return qr(n.fields,(t,r)=>{const s=new st([t]);if(Ta(r)){const i=Vd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Dt(e)}/**
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
 */class pt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,ee.min(),ee.min(),ee.min(),kt.empty(),0)}static newFoundDocument(e,t,r,s){return new pt(e,1,t,ee.min(),r,s,0)}static newNoDocument(e,t){return new pt(e,2,t,ee.min(),ee.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new pt(e,3,t,ee.min(),ee.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ia{constructor(e,t){this.position=e,this.inclusive=t}}function Nd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=Cs(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Od(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Aa{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Md{}class Qe extends Md{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Nw(e,t,r):t==="array-contains"?new Lw(e,r):t==="in"?new xw(e,r):t==="not-in"?new Fw(e,r):t==="array-contains-any"?new Uw(e,r):new Qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ow(e,r):new Mw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Cs(t,this.value)):t!==null&&Hr(this.value)===Hr(t)&&this.matchesComparison(Cs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Md{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new yn(e,t)}matches(e){return Ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ld(n){return n.op==="and"}function xd(n){return Vw(n)&&Ld(n)}function Vw(n){for(const e of n.filters)if(e instanceof yn)return!1;return!0}function ju(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+Ds(n.value);if(xd(n))return n.filters.map(e=>ju(e)).join(",");{const e=n.filters.map(t=>ju(t)).join(",");return`${n.op}(${e})`}}function Fd(n,e){return n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(n,e):n instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Fd(a,s.filters[l]),!0):!1}(n,e):void X()}function Ud(n){return n instanceof Qe?function(t){return`${t.field.canonicalString()} ${t.op} ${Ds(t.value)}`}(n):n instanceof yn?function(t){return t.op.toString()+" {"+t.getFilters().map(Ud).join(" ,")+"}"}(n):"Filter"}class Nw extends Qe{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ow extends Qe{constructor(e,t){super(e,"in",t),this.keys=Bd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Mw extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=Bd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Lw extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bu(t)&&zi(t.arrayValue,this.value)}}class xw extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zi(this.value.arrayValue,t)}}class Fw extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zi(this.value.arrayValue,t)}}class Uw extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
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
 */class Bw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function jd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Bw(n,e,t,r,s,i,a)}function $u(n){const e=Z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ju(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ue=t}return e.ue}function qu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Dw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Fd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Od(n.startAt,e.startAt)&&Od(n.endAt,e.endAt)}function zu(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ba{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jw(n,e,t,r,s,i,a,l){return new ba(n,e,t,r,s,i,a,l)}function Hu(n){return new ba(n)}function $d(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $w(n){return n.collectionGroup!==null}function Wi(n){const e=Z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ot(st.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Aa(i,r))}),t.has(st.keyField().canonicalString())||e.ce.push(new Aa(st.keyField(),r))}return e.ce}function En(n){const e=Z(n);return e.le||(e.le=qw(e,Wi(n))),e.le}function qw(n,e){if(n.limitType==="F")return jd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Aa(s.field,i)});const t=n.endAt?new Ia(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ia(n.startAt.position,n.startAt.inclusive):null;return jd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wu(n,e,t){return new ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ra(n,e){return qu(En(n),En(e))&&n.limitType===e.limitType}function qd(n){return`${$u(En(n))}|lt:${n.limitType}`}function Vs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ud(s)).join(", ")}]`),va(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ds(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ds(s)).join(",")),`Target(${r})`}(En(n))}; limitType=${n.limitType})`}function Sa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Nd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Wi(r),s)||r.endAt&&!function(a,l,c){const h=Nd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Wi(r),s))}(n,e)}function zw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zd(n){return(e,t)=>{let r=!1;for(const s of Wi(n)){const i=Hw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Hw(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Cs(c,h):X()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return bd(this.inner)}size(){return this.innerSize}}/**
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
 */const Ww=new Oe(Y.comparator);function $n(){return Ww}const Hd=new Oe(Y.comparator);function Ki(...n){let e=Hd;for(const t of n)e=e.insert(t.key,t);return e}function Wd(n){let e=Hd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wr(){return Gi()}function Kd(){return Gi()}function Gi(){return new Ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const Kw=new Oe(Y.comparator),Gw=new ot(Y.comparator);function ue(...n){let e=Gw;for(const t of n)e=e.add(t);return e}const Qw=new ot(ge);function Yw(){return Qw}/**
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
 */function Ku(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function Gd(n){return{integerValue:""+n}}function Jw(n,e){return Rw(e)?Gd(e):Ku(n,e)}/**
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
 */class ka{constructor(){this._=void 0}}function Xw(n,e,t){return n instanceof Pa?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lu(i)&&(i=xu(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Qi?Yd(n,e):n instanceof Yi?Jd(n,e):function(s,i){const a=Qd(s,i),l=Xd(a)+Xd(s.Pe);return Uu(a)&&Uu(s.Pe)?Gd(l):Ku(s.serializer,l)}(n,e)}function Zw(n,e,t){return n instanceof Qi?Yd(n,e):n instanceof Yi?Jd(n,e):t}function Qd(n,e){return n instanceof Ca?function(r){return Uu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pa extends ka{}class Qi extends ka{constructor(e){super(),this.elements=e}}function Yd(n,e){const t=Zd(e);for(const r of n.elements)t.some(s=>vn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Yi extends ka{constructor(e){super(),this.elements=e}}function Jd(n,e){let t=Zd(e);for(const r of n.elements)t=t.filter(s=>!vn(s,r));return{arrayValue:{values:t}}}class Ca extends ka{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Xd(n){return je(n.integerValue||n.doubleValue)}function Zd(n){return Bu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function eT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Qi&&s instanceof Qi||r instanceof Yi&&s instanceof Yi?Ps(r.elements,s.elements,vn):r instanceof Ca&&s instanceof Ca?vn(r.Pe,s.Pe):r instanceof Pa&&s instanceof Pa}(n.transform,e.transform)}class tT{constructor(e,t){this.version=e,this.transformResults=t}}class wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Va{}function ep(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ip(n.key,wn.none()):new Xi(n.key,n.data,wn.none());{const t=n.data,r=kt.empty();let s=new ot(st.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dr(n.key,r,new Dt(s.toArray()),wn.none())}}function nT(n,e,t){n instanceof Xi?function(s,i,a){const l=s.value.clone(),c=rp(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof dr?function(s,i,a){if(!Da(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=rp(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(np(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ji(n,e,t,r){return n instanceof Xi?function(i,a,l,c){if(!Da(i.precondition,a))return l;const h=i.value.clone(),d=sp(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof dr?function(i,a,l,c){if(!Da(i.precondition,a))return l;const h=sp(i.fieldTransforms,c,a),d=a.data;return d.setAll(np(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Da(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function rT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Qd(r.transform,s||null);i!=null&&(t===null&&(t=kt.empty()),t.set(r.field,i))}return t||null}function tp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,(i,a)=>eT(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xi extends Va{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends Va{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function np(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rp(n,e,t){const r=new Map;Ae(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Zw(a,l,t[s]))}return r}function sp(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Xw(i,a,e))}return r}class ip extends Va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sT extends Va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ji(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ji(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Kd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=ep(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ue())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(t,r)=>tp(t,r))&&Ps(this.baseMutations,e.baseMutations,(t,r)=>tp(t,r))}}class Gu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ae(e.mutations.length===r.length);let s=function(){return Kw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Gu(e,t,r,s)}}/**
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
 */class oT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ze,de;function lT(n){switch(n){default:return X();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function op(n){if(n===void 0)return jn("GRPC error has no .code"),L.UNKNOWN;switch(n){case ze.OK:return L.OK;case ze.CANCELLED:return L.CANCELLED;case ze.UNKNOWN:return L.UNKNOWN;case ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ze.INTERNAL:return L.INTERNAL;case ze.UNAVAILABLE:return L.UNAVAILABLE;case ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ze.NOT_FOUND:return L.NOT_FOUND;case ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ze.ABORTED:return L.ABORTED;case ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ze.DATA_LOSS:return L.DATA_LOSS;default:return X()}}(de=ze||(ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uT(){return new TextEncoder}/**
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
 */const cT=new Br([4294967295,4294967295],0);function ap(n){const e=uT().encode(n),t=new md;return t.update(e),new Uint8Array(t.digest())}function lp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([t,r],0),new Br([s,i],0)]}class Qu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zi(`Invalid padding: ${t}`);if(r<0)throw new Zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Br.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Br.fromNumber(r)));return s.compare(cT)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ap(e),[r,s]=lp(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Qu(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=ap(e),[r,s]=lp(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Na{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Na(ee.min(),s,new Oe(ge),$n(),ue())}}class eo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new eo(r,t,ue(),ue(),ue())}}/**
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
 */class Oa{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class up{constructor(e,t){this.targetId=e,this.me=t}}class cp{constructor(e,t,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class hp{constructor(){this.fe=0,this.ge=dp(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),t=ue(),r=ue();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X()}}),new eo(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=dp()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hT{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=fp(),this.Qe=new Oe(ge)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(zu(i))if(r===0){const a=new Y(i.path);this.Ue(t,a,pt.newNoDocument(a,ee.min()))}else Ae(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=zr(r).toUint8Array()}catch(c){if(c instanceof Sd)return ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Qu(a,s,i)}catch(c){return ks(c instanceof Zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&zu(l.target)){const c=new Y(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,pt.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ue();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Na(e,t,this.Qe,this.ke,r);return this.ke=$n(),this.qe=fp(),this.Qe=new Oe(ge),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hp,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ot(ge),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hp),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fp(){return new Oe(Y.comparator)}function dp(){return new Oe(Y.comparator)}const fT={asc:"ASCENDING",desc:"DESCENDING"},dT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pT={and:"AND",or:"OR"};class mT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yu(n,e){return n.useProto3Json||va(e)?e:{value:e}}function Ma(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gT(n,e){return Ma(n,e.toTimestamp())}function Tn(n){return Ae(!!n),ee.fromTimestamp(function(t){const r=fr(t);return new Ge(r.seconds,r.nanos)}(n))}function Ju(n,e){return Xu(n,e).canonicalString()}function Xu(n,e){const t=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mp(n){const e=xe.fromString(n);return Ae(wp(e)),e}function Zu(n,e){return Ju(n.databaseId,e.path)}function ec(n,e){const t=mp(e);if(t.get(1)!==n.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(_p(t))}function gp(n,e){return Ju(n.databaseId,e)}function _T(n){const e=mp(n);return e.length===4?xe.emptyPath():_p(e)}function tc(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _p(n){return Ae(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vp(n,e,t){return{name:Zu(n,e),fields:t.value.mapValue.fields}}function vT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ae(d===void 0||typeof d=="string"),at.fromBase64String(d||"")):(Ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),at.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?L.UNKNOWN:op(h.code);return new K(d,h.message||"")}(a);t=new cp(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ec(n,r.document.name),i=Tn(r.document.updateTime),a=r.document.createTime?Tn(r.document.createTime):ee.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Oa(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ec(n,r.document),i=r.readTime?Tn(r.readTime):ee.min(),a=pt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Oa([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ec(n,r.document),i=r.removedTargetIds||[];t=new Oa([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new aT(s,i),l=r.targetId;t=new up(l,a)}}return t}function yT(n,e){let t;if(e instanceof Xi)t={update:vp(n,e.key,e.value)};else if(e instanceof ip)t={delete:Zu(n,e.key)};else if(e instanceof dr)t={update:vp(n,e.key,e.data),updateMask:kT(e.fieldMask)};else{if(!(e instanceof sT))return X();t={verify:Zu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Pa)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ca)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(n,e.precondition)),t}function ET(n,e){return n&&n.length>0?(Ae(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Tn(s.updateTime):Tn(i);return a.isEqual(ee.min())&&(a=Tn(i)),new tT(a,s.transformResults||[])}(t,e))):[]}function wT(n,e){return{documents:[gp(n,e.path)]}}function TT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gp(n,s);const i=function(h){if(h.length!==0)return Ep(yn.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(w){return{field:Os(w.field),direction:bT(w.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Yu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function IT(n){let e=_T(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ae(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const w=yp(m);return w instanceof yn&&xd(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(w=>function(A){return new Aa(Ms(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(m){let w;return w=typeof m=="object"?m.value:m,va(w)?null:w}(t.limit));let c=null;t.startAt&&(c=function(m){const w=!!m.before,T=m.values||[];return new Ia(T,w)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const w=!m.before,T=m.values||[];return new Ia(T,w)}(t.endAt)),jw(e,s,a,i,l,"F",c,h)}function AT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ms(t.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ms(t.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ms(t.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ms(t.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(t){return Qe.create(Ms(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return yn.create(t.compositeFilter.filters.map(r=>yp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(t.compositeFilter.op))}(n):X()}function bT(n){return fT[n]}function RT(n){return dT[n]}function ST(n){return pT[n]}function Os(n){return{fieldPath:n.canonicalString()}}function Ms(n){return st.fromServerFormat(n.fieldPath)}function Ep(n){return n instanceof Qe?function(t){if(t.op==="=="){if(Dd(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NAN"}};if(Cd(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dd(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NOT_NAN"}};if(Cd(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(t.field),op:RT(t.op),value:t.value}}}(n):n instanceof yn?function(t){const r=t.getFilters().map(s=>Ep(s));return r.length===1?r[0]:{compositeFilter:{op:ST(t.op),filters:r}}}(n):X()}function kT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class pr{constructor(e,t,r,s,i=ee.min(),a=ee.min(),l=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PT{constructor(e){this.ct=e}}function CT(n){const e=IT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wu(e,e.limit,"L"):e}/**
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
 */class DT{constructor(){this.un=new VT}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(hr.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class VT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ot(xe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(xe.comparator)).toArray()}}/**
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
 */class Ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ls(0)}static kn(){return new Ls(-1)}}/**
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
 */class NT{constructor(){this.changes=new Ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class MT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ji(r.mutation,s,Dt.empty(),Ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ue()){const s=Wr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ki();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Wr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ue()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=$n();const a=Gi(),l=function(){return Gi()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof dr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ji(d.mutation,h,d.mutation.getFieldMask(),Ge.now())):a.set(h.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var m;return l.set(h,new OT(d,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Gi();let s=new Oe((a,l)=>a-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Dt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const m=(s.get(l.batchId)||ue()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,m=Kd();d.forEach(w=>{if(!i.has(w)){const T=ep(t.get(w),r.get(w));T!==null&&m.set(w,T),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$w(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(Wr());let l=-1,c=i;return a.next(h=>O.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(w=>{c=c.insert(d,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ue())).next(d=>({batchId:l,changes:Wd(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let s=Ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ki();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,c=>{const h=function(m,w){return new ba(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((m,w)=>{a=a.insert(m,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,pt.newInvalidDocument(d)))});let l=Ki();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Ji(d.mutation,h,Dt.empty(),Ge.now()),Sa(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class LT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:CT(s.bundledQuery),readTime:Tn(s.readTime)}}(t)),O.resolve()}}/**
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
 */class xT{constructor(){this.overlays=new Oe(Y.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wr();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=Wr(),i=t.length+1,a=new Y(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Wr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return O.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new oT(t,r));let i=this.Ir.get(t);i===void 0&&(i=ue(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class FT{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class nc{constructor(){this.Tr=new ot(Je.Er),this.dr=new ot(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Je(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Je(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Y(new xe([])),r=new Je(t,e),s=new Je(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Y(new xe([])),r=new Je(t,e),s=new Je(t,e+1);let i=ue();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Je(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Y.comparator(e.key,t.key)||ge(e.wr,t.wr)}static Ar(e,t){return ge(e.wr,t.wr)||Y.comparator(e.key,t.key)}}/**
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
 */class UT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ot(Je.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new iT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Je(t,0),s=new Je(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ot(ge);return t.forEach(s=>{const i=new Je(s,0),a=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new Je(new Y(i),0);let l=new ot(ge);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ae(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,s=>{const i=new Je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Je(t,0),s=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class BT{constructor(e){this.Mr=e,this.docs=function(){return new Oe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(t))}getEntries(e,t){let r=$n();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=$n();const a=t.path,l=new Y(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Tw(ww(d),r)<=0||(s.has(d.key)||Sa(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new jT(this)}getSize(e){return O.resolve(this.size)}}class jT extends NT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class $T{constructor(e){this.persistence=e,this.Nr=new Ns(t=>$u(t),qu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nc,this.targetCount=0,this.kr=Ls.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ls(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class qT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Mu(0),this.Kr=!1,this.Kr=!0,this.$r=new FT,this.referenceDelegate=e(this),this.Ur=new $T(this),this.indexManager=new DT,this.remoteDocumentCache=function(s){return new BT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new PT(t),this.Gr=new LT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new UT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new zT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class zT extends Aw{constructor(e){super(),this.currentSequenceNumber=e}}class rc{constructor(e){this.persistence=e,this.Jr=new nc,this.Yr=null}static Zr(e){return new rc(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class sc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ue(),s=ue();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sc(e,t.fromCache,r,s)}}/**
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
 */class HT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Q_()?8:bw(ft())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new HT;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Fi()<=he.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Vs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Fi()<=he.DEBUG&&$("QueryEngine","Query:",Vs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Fi()<=he.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Vs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(t))):O.resolve())}Yi(e,t){if($d(t))return O.resolve(null);let r=En(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Wu(t,null,"F"),r=En(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ue(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,Wu(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return $d(t)||s.isEqual(ee.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?O.resolve(null):(Fi()<=he.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vs(t)),this.rs(e,a,t,Ew(s,-1)).next(l=>l))})}ts(e,t){let r=new ot(zd(e));return t.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Fi()<=he.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Vs(t)),this.Ji.getDocumentsMatchingQuery(e,t,hr.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class KT{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Oe(ge),this._s=new Ns(i=>$u(i),qu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function GT(n,e,t,r){return new KT(n,e,t,r)}async function Tp(n,e){const t=Z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ue();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function QT(n,e){const t=Z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const m=h.batch,w=m.keys();let T=O.resolve();return w.forEach(A=>{T=T.next(()=>d.getEntry(c,A)).next(N=>{const C=h.docVersions.get(A);Ae(C!==null),N.version.compareTo(C)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ue();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ip(n){const e=Z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function YT(n,e){const t=Z(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((d,m)=>{const w=s.get(m);if(!w)return;l.push(t.Ur.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,d.addedDocuments,m)));let T=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(at.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(m,T),function(N,C,U){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(w,T,d)&&l.push(t.Ur.updateTargetData(i,T))});let c=$n(),h=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(JT(i,a,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(ee.min())){const d=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return O.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function JT(n,e,t){let r=ue(),s=ue();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=$n();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function XT(n,e){const t=Z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZT(n,e){const t=Z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new pr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ic(n,e,t){const r=Z(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ji(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ap(n,e,t){const r=Z(n);let s=ee.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const m=Z(c),w=m._s.get(d);return w!==void 0?O.resolve(m.os.get(w)):m.Ur.getTargetData(h,d)}(r,a,En(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:ee.min(),t?i:ue())).next(l=>(eI(r,zw(e),l),{documents:l,Ts:i})))}function eI(n,e,t){let r=n.us.get(e)||ee.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class bp{constructor(){this.activeTargetIds=Yw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tI{constructor(){this.so=new bp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let La=null;function oc(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
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
 */const mt="WebChannelConnection";class iI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=oc(),c=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(d=>($("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw ks("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ss}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=rI[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=oc();return new Promise((a,l)=>{const c=new gd;c.setWithCredentials(!0),c.listenOnce(_d.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _a.NO_ERROR:const d=c.getResponseJson();$(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case _a.TIMEOUT:$(mt,`RPC '${e}' ${i} timed out`),l(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case _a.HTTP_ERROR:const m=c.getStatus();if($(mt,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const T=w==null?void 0:w.error;if(T&&T.status&&T.message){const A=function(C){const U=C.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(U)>=0?U:L.UNKNOWN}(T.status);l(new K(A,T.message))}else l(new K(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(L.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$(mt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);$(mt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=oc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ed(),l=yd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");$(mt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let w=!1,T=!1;const A=new sI({Io:C=>{T?$(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(w||($(mt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),w=!0),$(mt,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},To:()=>m.close()}),N=(C,U,G)=>{C.listen(U,z=>{try{G(z)}catch(te){setTimeout(()=>{throw te},0)}})};return N(m,xi.EventType.OPEN,()=>{T||($(mt,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),N(m,xi.EventType.CLOSE,()=>{T||(T=!0,$(mt,`RPC '${e}' stream ${s} transport closed`),A.So())}),N(m,xi.EventType.ERROR,C=>{T||(T=!0,ks(mt,`RPC '${e}' stream ${s} transport errored:`,C),A.So(new K(L.UNAVAILABLE,"The operation could not be completed")))}),N(m,xi.EventType.MESSAGE,C=>{var U;if(!T){const G=C.data[0];Ae(!!G);const z=G,te=z.error||((U=z[0])===null||U===void 0?void 0:U.error);if(te){$(mt,`RPC '${e}' stream ${s} received error:`,te);const Pe=te.status;let Ie=function(_){const v=ze[_];if(v!==void 0)return op(v)}(Pe),I=te.message;Ie===void 0&&(Ie=L.INTERNAL,I="Unknown error status: "+Pe+" with message "+te.message),T=!0,A.So(new K(Ie,I)),m.close()}else $(mt,`RPC '${e}' stream ${s} received:`,G),A.bo(G)}}),N(l,vd.STAT_EVENT,C=>{C.stat===Nu.PROXY?$(mt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Nu.NOPROXY&&$(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function ac(){return typeof document<"u"?document:null}/**
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
 */function xa(n){return new mT(n,!0)}/**
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
 */class Sp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kp{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(jn(t.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new K(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oI extends kp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=vT(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?Tn(a.readTime):ee.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=tc(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=zu(c)?{documents:wT(i,c)}:{query:TT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=pp(i,a.resumeToken);const h=Yu(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ee.min())>0){l.readTime=Ma(i,a.snapshotVersion.toTimestamp());const h=Yu(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=AT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=tc(this.serializer),t.removeTarget=e,this.a_(t)}}class aI extends kp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ET(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=tc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yT(this.serializer,r))};this.a_(t)}}/**
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
 */class lI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Xu(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(L.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Xu(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(L.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class cI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Kr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Z(c);h.L_.add(4),await to(h),h.q_.set("Unknown"),h.L_.delete(4),await Fa(h)}(this))})}),this.q_=new uI(r,s)}}async function Fa(n){if(Kr(n))for(const e of n.B_)await e(!0)}async function to(n){for(const e of n.B_)await e(!1)}function Pp(n,e){const t=Z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),hc(t)?cc(t):xs(t).r_()&&uc(t,e))}function lc(n,e){const t=Z(n),r=xs(t);t.N_.delete(e),r.r_()&&Cp(t,e),t.N_.size===0&&(r.r_()?r.o_():Kr(t)&&t.q_.set("Unknown"))}function uc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xs(n).A_(e)}function Cp(n,e){n.Q_.xe(e),xs(n).R_(e)}function cc(n){n.Q_=new hT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),xs(n).start(),n.q_.v_()}function hc(n){return Kr(n)&&!xs(n).n_()&&n.N_.size>0}function Kr(n){return Z(n).L_.size===0}function Dp(n){n.Q_=void 0}async function hI(n){n.q_.set("Online")}async function fI(n){n.N_.forEach((e,t)=>{uc(n,e)})}async function dI(n,e){Dp(n),hc(n)?(n.q_.M_(e),cc(n)):n.q_.set("Unknown")}async function pI(n,e,t){if(n.q_.set("Online"),e instanceof cp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ua(n,r)}else if(e instanceof Oa?n.Q_.Ke(e):e instanceof up?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ee.min()))try{const r=await Ip(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),Cp(i,c);const m=new pr(d.target,c,h,d.sequenceNumber);uc(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ua(n,r)}}async function Ua(n,e,t){if(!ji(e))throw e;n.L_.add(1),await to(n),n.q_.set("Offline"),t||(t=()=>Ip(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Fa(n)})}function Vp(n,e){return e().catch(t=>Ua(n,t,e))}async function Ba(n){const e=Z(n),t=mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mI(e);)try{const s=await XT(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,gI(e,s)}catch(s){await Ua(e,s)}Np(e)&&Op(e)}function mI(n){return Kr(n)&&n.O_.length<10}function gI(n,e){n.O_.push(e);const t=mr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Np(n){return Kr(n)&&!mr(n).n_()&&n.O_.length>0}function Op(n){mr(n).start()}async function _I(n){mr(n).p_()}async function vI(n){const e=mr(n);for(const t of n.O_)e.m_(t.mutations)}async function yI(n,e,t){const r=n.O_.shift(),s=Gu.from(r,e,t);await Vp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ba(n)}async function EI(n,e){e&&mr(n).V_&&await async function(r,s){if(function(a){return lT(a)&&a!==L.ABORTED}(s.code)){const i=r.O_.shift();mr(r).s_(),await Vp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ba(r)}}(n,e),Np(n)&&Op(n)}async function Mp(n,e){const t=Z(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Kr(t);t.L_.add(3),await to(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Fa(t)}async function wI(n,e){const t=Z(n);e?(t.L_.delete(2),await Fa(t)):e||(t.L_.add(2),await to(t),t.q_.set("Unknown"))}function xs(n){return n.K_||(n.K_=function(t,r,s){const i=Z(t);return i.w_(),new oI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:hI.bind(null,n),Ro:fI.bind(null,n),mo:dI.bind(null,n),d_:pI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),hc(n)?cc(n):n.q_.set("Unknown")):(await n.K_.stop(),Dp(n))})),n.K_}function mr(n){return n.U_||(n.U_=function(t,r,s){const i=Z(t);return i.w_(),new aI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_I.bind(null,n),mo:EI.bind(null,n),f_:vI.bind(null,n),g_:yI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ba(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class fc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new fc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dc(n,e){if(jn("AsyncQueue",`${e}: ${n}`),ji(n))return new K(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Fs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Ki(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Lp{constructor(){this.W_=new Oe(Y.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Us{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Us(e,t,Fs.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class TI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class II{constructor(){this.queries=xp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Z(t),i=s.queries;s.queries=xp(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new K(L.ABORTED,"Firestore shutting down"))}}function xp(){return new Ns(n=>qd(n),Ra)}async function AI(n,e){const t=Z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new TI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=dc(a,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&pc(t)}async function bI(n,e){const t=Z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function RI(n,e){const t=Z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&pc(t)}function SI(n,e,t){const r=Z(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function pc(n){n.Y_.forEach(e=>{e.next()})}var mc,Fp;(Fp=mc||(mc={})).ea="default",Fp.Cache="cache";class kI{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==mc.Cache}}/**
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
 */class Up{constructor(e){this.key=e}}class Bp{constructor(e){this.key=e}}class PI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=zd(e),this.Ra=new Fs(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Lp,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const w=s.get(d),T=Sa(this.query,m)?m:null,A=!!w&&this.mutatedKeys.has(w.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;w&&T?w.data.isEqual(T.data)?A!==N&&(r.track({type:3,doc:T}),C=!0):this.ga(w,T)||(r.track({type:2,doc:T}),C=!0,(c&&this.Aa(T,c)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!w&&T?(r.track({type:0,doc:T}),C=!0):w&&!T&&(r.track({type:1,doc:w}),C=!0,(c||h)&&(l=!0)),C&&(T?(a=a.add(T),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((d,m)=>function(T,A){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return N(T)-N(A)}(d.type,m.type)||this.Aa(d.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new Us(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Lp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Bp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Up(r))}),t}ba(e){this.Ta=e.Ts,this.da=ue();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Us.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class DI{constructor(e){this.key=e,this.va=!1}}class VI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ns(l=>qd(l),Ra),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(Y.comparator),this.Na=new Map,this.La=new nc,this.Ba={},this.ka=new Map,this.qa=Ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function NI(n,e,t=!0){const r=Gp(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await jp(r,e,t,!0),s}async function OI(n,e){const t=Gp(n);await jp(t,e,!0,!1)}async function jp(n,e,t,r){const s=await ZT(n.localStore,En(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await MI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pp(n.remoteStore,s),l}async function MI(n,e,t,r,s){n.Ka=(m,w,T)=>async function(N,C,U,G){let z=C.view.ma(U);z.ns&&(z=await Ap(N.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,z)));const te=G&&G.targetChanges.get(C.targetId),Pe=G&&G.targetMismatches.get(C.targetId)!=null,Ie=C.view.applyChanges(z,N.isPrimaryClient,te,Pe);return Kp(N,C.targetId,Ie.wa),Ie.snapshot}(n,m,w,T);const i=await Ap(n.localStore,e,!0),a=new PI(e,i.Ts),l=a.ma(i.documents),c=eo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Kp(n,t,h.wa);const d=new CI(e,t,a);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function LI(n,e,t){const r=Z(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Ra(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ic(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&lc(r.remoteStore,s.targetId),gc(r,s.targetId)}).catch(Bi)):(gc(r,s.targetId),await ic(r.localStore,s.targetId,!0))}async function xI(n,e){const t=Z(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),lc(t.remoteStore,r.targetId))}async function FI(n,e,t){const r=HI(n);try{const s=await function(a,l){const c=Z(a),h=Ge.now(),d=l.reduce((T,A)=>T.add(A.key),ue());let m,w;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let A=$n(),N=ue();return c.cs.getEntries(T,d).next(C=>{A=C,A.forEach((U,G)=>{G.isValidDocument()||(N=N.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,A)).next(C=>{m=C;const U=[];for(const G of l){const z=rT(G,m.get(G.key).overlayedDocument);z!=null&&U.push(new dr(G.key,z,Vd(z.value.mapValue),wn.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,U,l)}).next(C=>{w=C;const U=C.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(T,C.batchId,U)})}).then(()=>({batchId:w.batchId,changes:Wd(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Oe(ge)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await no(r,s.changes),await Ba(r.remoteStore)}catch(s){const i=dc(s,"Failed to persist write");t.reject(i)}}async function $p(n,e){const t=Z(n);try{const r=await YT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Ae(a.va):s.removedDocuments.size>0&&(Ae(a.va),a.va=!1))}),await no(t,r,e)}catch(r){await Bi(r)}}function qp(n,e,t){const r=Z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Z(a);c.onlineState=l;let h=!1;c.queries.forEach((d,m)=>{for(const w of m.j_)w.Z_(l)&&(h=!0)}),h&&pc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UI(n,e,t){const r=Z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Oe(Y.comparator);a=a.insert(i,pt.newNoDocument(i,ee.min()));const l=ue().add(i),c=new Na(ee.min(),new Map,new Oe(ge),a,l);await $p(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),_c(r)}else await ic(r.localStore,e,!1).then(()=>gc(r,e,t)).catch(Bi)}async function BI(n,e){const t=Z(n),r=e.batch.batchId;try{const s=await QT(t.localStore,e);Hp(t,r,null),zp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await no(t,s)}catch(s){await Bi(s)}}async function jI(n,e,t){const r=Z(n);try{const s=await function(a,l){const c=Z(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ae(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Hp(r,e,t),zp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await no(r,s)}catch(s){await Bi(s)}}function zp(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Hp(n,e,t){const r=Z(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function gc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Wp(n,r)})}function Wp(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(lc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),_c(n))}function Kp(n,e,t){for(const r of t)r instanceof Up?(n.La.addReference(r.key,e),$I(n,r)):r instanceof Bp?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Wp(n,r.key)):X()}function $I(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),_c(n))}function _c(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Y(xe.fromString(e)),r=n.qa.next();n.Na.set(r,new DI(t)),n.Oa=n.Oa.insert(t,r),Pp(n.remoteStore,new pr(En(Hu(t.path)),r,"TargetPurposeLimboResolution",Mu.oe))}}async function no(n,e,t){const r=Z(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=sc.Wi(c.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const d=Z(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,w=>O.forEach(w.$i,T=>d.persistence.referenceDelegate.addReference(m,w.targetId,T)).next(()=>O.forEach(w.Ui,T=>d.persistence.referenceDelegate.removeReference(m,w.targetId,T)))))}catch(m){if(!ji(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const w=m.targetId;if(!m.fromCache){const T=d.os.get(w),A=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(w,N)}}}(r.localStore,i))}async function qI(n,e){const t=Z(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Tp(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new K(L.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(t,r.hs)}}function zI(n,e){const t=Z(n),r=t.Na.get(e);if(r&&r.va)return ue().add(r.key);{let s=ue();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Gp(n){const e=Z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$p.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UI.bind(null,e),e.Ca.d_=RI.bind(null,e.eventManager),e.Ca.$a=SI.bind(null,e.eventManager),e}function HI(n){const e=Z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jI.bind(null,e),e}class ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return GT(this.persistence,new WT,e.initialUser,this.serializer)}Ga(e){return new qT(rc.Zr,this.serializer)}Wa(e){return new tI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ja.provider={build:()=>new ja};class vc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qI.bind(null,this.syncEngine),await wI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new II}()}createDatastore(e){const t=xa(e.databaseInfo.databaseId),r=function(i){return new iI(i)}(e.databaseInfo);return function(i,a,l,c){return new lI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new cI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>qp(this.syncEngine,t,0),function(){return Rp.D()?new Rp:new nI}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,d){const m=new VI(s,i,a,l,c,h);return d&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Z(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await to(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vc.provider={build:()=>new vc};/**
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
 */class WI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class KI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Id.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=dc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GI(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Mp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Mp(e.remoteStore,s)),n._onlineComponents=e}async function GI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ks("Error using user provided cache. Falling back to memory cache: "+t),await yc(n,new ja)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await yc(n,new ja);return n._offlineComponents}async function Yp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Qp(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Qp(n,new vc))),n._onlineComponents}function QI(n){return Yp(n).then(e=>e.syncEngine)}async function Jp(n){const e=await Yp(n),t=e.eventManager;return t.onListen=NI.bind(null,e.syncEngine),t.onUnlisten=LI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xI.bind(null,e.syncEngine),t}/**
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
 */function Xp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zp=new Map;/**
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
 */function YI(n,e,t){if(!t)throw new K(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function JI(n,e,t,r){if(e===!0&&r===!0)throw new K(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function em(n){if(!Y.isDocumentKey(n))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function gr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ec(n);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class tm{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hw;switch(r.type){case"firstParty":return new mw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zp.get(t);r&&($("ComponentProvider","Removing Datastore"),Zp.delete(t),r.terminate())}(this),Promise.resolve()}}function XI(n,e,t,r={}){var s;const i=(n=gr(n,wc))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=dt.MOCK_USER;else{l=$_(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new dt(h)}n._authCredentials=new fw(new Td(l,c))}}/**
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
 */class $a{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $a(this.firestore,e,this._query)}}class Vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ro(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class ro extends $a{constructor(e,t,r){super(e,t,Hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new Y(e))}withConverter(e){return new ro(this.firestore,e,this._path)}}function Tc(n,e,...t){if(n=St(n),arguments.length===1&&(e=Id.newId()),YI("doc","path",e),n instanceof wc){const r=xe.fromString(e,...t);return em(r),new Vt(n,null,new Y(r))}{if(!(n instanceof Vt||n instanceof ro))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return em(r),new Vt(n.firestore,n instanceof ro?n.converter:null,new Y(r))}}/**
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
 */class nm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sp(this,"async_queue_retry"),this.Vu=()=>{const r=ac();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ac();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new $r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ji(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=fc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function rm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class so extends wc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new nm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nm(e),this._firestoreClient=void 0,await e}}}function ZI(n,e){const t=typeof n=="object"?n:df(),r=typeof n=="string"?n:"(default)",s=gu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=B_("firestore");i&&XI(s,...i)}return s}function sm(n){if(n._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||e0(n),n._firestoreClient}function e0(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,d){return new kw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Xp(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new KI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bs(at.fromBase64String(e))}catch(t){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ic{constructor(e){this._methodName=e}}/**
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
 */class Ac{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class bc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const t0=/^__.*__$/;class n0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xi(e,this.data,t,this.fieldTransforms)}}class im{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new dr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function om(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Rc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(om(this.Cu)&&t0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class r0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||xa(e)}Qu(e,t,r,s=!1){return new Rc({Cu:e,methodName:t,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function am(n){const e=n._freezeSettings(),t=xa(n._databaseId);return new r0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function s0(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Sc("Data must be an object, but it was:",a,r);const l=lm(r,a);let c,h;if(i.merge)c=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const w=kc(e,m,t);if(!a.contains(w))throw new K(L.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);cm(d,w)||d.push(w)}c=new Dt(d),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new n0(new kt(l),c,h)}class za extends Ic{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof za}}function i0(n,e,t,r){const s=n.Qu(1,e,t);Sc("Data must be an object, but it was:",s,r);const i=[],a=kt.empty();qr(r,(c,h)=>{const d=Pc(e,c,t);h=St(h);const m=s.Nu(d);if(h instanceof za)i.push(d);else{const w=Ha(h,m);w!=null&&(i.push(d),a.set(d,w))}});const l=new Dt(i);return new im(a,l,s.fieldTransforms)}function o0(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[kc(e,r,t)],c=[s];if(i.length%2!=0)throw new K(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(kc(e,i[w])),c.push(i[w+1]);const h=[],d=kt.empty();for(let w=l.length-1;w>=0;--w)if(!cm(h,l[w])){const T=l[w];let A=c[w];A=St(A);const N=a.Nu(T);if(A instanceof za)h.push(T);else{const C=Ha(A,N);C!=null&&(h.push(T),d.set(T,C))}}const m=new Dt(h);return new im(d,m,a.fieldTransforms)}function Ha(n,e){if(um(n=St(n)))return Sc("Unsupported field value:",e,n),lm(n,e);if(n instanceof Ic)return function(r,s){if(!om(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Ha(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Ma(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ma(s.serializer,i)}}if(r instanceof Ac)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bs)return{bytesValue:pp(s.serializer,r._byteString)};if(r instanceof Vt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ku(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ec(r)}`)}(n,e)}function lm(n,e){const t={};return bd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(n,(r,s)=>{const i=Ha(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function um(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof Ac||n instanceof Bs||n instanceof Vt||n instanceof Ic||n instanceof bc)}function Sc(n,e,t){if(!um(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ec(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function kc(n,e,t){if((e=St(e))instanceof qa)return e._internalPath;if(typeof e=="string")return Pc(n,e);throw Wa("Field path arguments must be of type string or ",n,!1,void 0,t)}const a0=new RegExp("[~\\*/\\[\\]]");function Pc(n,e,t){if(e.search(a0)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qa(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wa(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(L.INVALID_ARGUMENT,l+n+c)}function cm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class hm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class l0 extends hm{data(){return super.data()}}function fm(n,e){return typeof e=="string"?Pc(n,e):e instanceof qa?e._internalPath:e._delegate._internalPath}/**
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
 */function u0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class c0{convertValue(e,t="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return qr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>je(a.doubleValue));return new bc(i)}convertGeoPoint(e){return new Ac(je(e.latitude),je(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($i(e));default:return null}}convertTimestamp(e){const t=fr(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Ae(wp(r));const s=new qi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function h0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class io{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dm extends hm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(fm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ka extends dm{data(e={}){return super.data(e)}}class f0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new io(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ka(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ka(s._firestore,s._userDataWriter,l.doc.key,l.doc,new io(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ka(s._firestore,s._userDataWriter,l.doc.key,l.doc,new io(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:d0(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function d0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class pm extends c0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,t)}}function p0(n,e,t){n=gr(n,Vt);const r=gr(n.firestore,so),s=h0(n.converter,e,t);return mm(r,[s0(am(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,wn.none())])}function m0(n,e,t,...r){n=gr(n,Vt);const s=gr(n.firestore,so),i=am(s);let a;return a=typeof(e=St(e))=="string"||e instanceof qa?o0(i,"updateDoc",n._key,e,t,r):i0(i,"updateDoc",n._key,e),mm(s,[a.toMutation(n._key,wn.exists(!0))])}function g0(n,...e){var t,r,s;n=St(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||rm(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(rm(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,h,d;if(n instanceof Vt)h=gr(n.firestore,so),d=Hu(n._key.path),c={next:m=>{e[a]&&e[a](_0(h,n,m))},error:e[a+1],complete:e[a+2]};else{const m=gr(n,$a);h=gr(m.firestore,so),d=m._query;const w=new pm(h);c={next:T=>{e[a]&&e[a](new f0(h,w,m,T))},error:e[a+1],complete:e[a+2]},u0(n._query)}return function(w,T,A,N){const C=new WI(N),U=new kI(T,C,A);return w.asyncQueue.enqueueAndForget(async()=>AI(await Jp(w),U)),()=>{C.Za(),w.asyncQueue.enqueueAndForget(async()=>bI(await Jp(w),U))}}(sm(h),d,l,c)}function mm(n,e){return function(r,s){const i=new $r;return r.asyncQueue.enqueueAndForget(async()=>FI(await QI(r),s,i)),i.promise}(sm(n),e)}function _0(n,e,t){const r=t.docs.get(e._key),s=new pm(n);return new dm(n,s,e._key,r,new io(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Ss=s})(Es),ys(new Lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new so(new dw(r.getProvider("auth-internal")),new _w(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ir(wd,"4.7.3",e),ir(wd,"4.7.3","esm2017")})();const gm=ff({apiKey:"AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI",authDomain:"quiz-samarbeid.firebaseapp.com",projectId:"quiz-samarbeid",storageBucket:"quiz-samarbeid.firebasestorage.app",messagingSenderId:"968266660672",appId:"1:968266660672:web:e86724467bb2b398edd8a5"}),_m=uw(gm);_m.languageCode="no";const Cc=ZI(gm),Dc=n=>({"permission-denied":"du har ikkje lov til dette",unavailable:"ingen kontakt med tenaren","auth/popup-closed-by-user":"innlogginga vart avbroten"})[n&&n.code]||n&&n.message||"ukjend feil",_r=n=>{const e=parseFloat(String(n??"").replace(",","."));return isNaN(e)?0:e};function v0(n){const e=(n==null?void 0:n.plan)||[],t={},r={};return e.forEach(s=>{s.type==="sporsmal"&&s.nummerert!==!1&&(t[s.kat]=(t[s.kat]||0)+1)}),e.map(s=>s.type!=="sporsmal"||s.nummerert===!1?{...s}:(r[s.kat]=(r[s.kat]||0)+1,{...s,qNr:r[s.kat],qTot:t[s.kat]}))}function y0(n,e){const t=n.poeng||{};return((e==null?void 0:e.kategoriar)||[]).filter(r=>!r.hurtig).reduce((r,s)=>r+_r(t[s.id])*(n.joker===s.id?2:1),0)}function E0(n,e){const t=(n||[]).filter(r=>(r.namn||"").trim()).map(r=>({...r,sum:y0(r,e)}));return t.sort((r,s)=>s.sum-r.sum||r.bord-s.bord),t.forEach(r=>{r.rank=t.filter(s=>s.sum>r.sum).length+1}),t}const Nt=Vn({quiz:null,state:{...{steg:0,modus:"plan",avslort:0,sist:0,opningar:{}}},lag:[],klar:!1,feil:"",no:{},noKlar:!1,svar:[],mobilar:[],kodar:{}}),vm=Vn({quiz:null,ventar:!1,melding:"",feil:!1});function Ga(n,e=!1){vm.melding=n,vm.feil=e}var w0=we('<span class="ant svelte-kp1wi9"> </span>'),T0=we('<button class="btn svelte-kp1wi9" type="button"> <!></button>'),I0=we('<span class="dempa">Ingen kategoriar enno. Lag dei under «Oppsett».</span>'),A0=we('<span class="joker svelte-kp1wi9">Joker: tel dobbelt</span>'),b0=we('<div class="rad valt svelte-kp1wi9"><strong class="svelte-kp1wi9"> </strong><span class="dempa"> <!></span> <!> <span style="flex:1"></span><button class="lenke svelte-kp1wi9" type="button">Bytt lag</button></div>'),R0=we('<small class="svelte-kp1wi9"> </small>'),S0=we('<button type="button"> <!></button>'),k0=we('<span class="dempa"> </span>'),P0=we('<input class="inp sok svelte-kp1wi9" placeholder="Skriv lagnamn …" aria-label="Søk etter lag" autocomplete="off" spellcheck="false"/> <div class="rad forslag svelte-kp1wi9"></div>',1),C0=we('<span></span> <input class="inp" inputmode="decimal"/> <input class="inp" inputmode="decimal"/>',1),D0=we('<div class="cfgboks svelte-kp1wi9"><p class="dempa" style="margin:0 0 8px">Poeng per spørsmål i denne runda. Det gjeld for begge som rettar. Halv er alltid halvparten av full.</p> <div class="cfg svelte-kp1wi9"><span></span><b class="svelte-kp1wi9">Full</b><b class="svelte-kp1wi9">Annet</b> <!></div></div>'),V0=we('<span class="svar svelte-kp1wi9"> </span>'),N0=we('<div><div class="lbl svelte-kp1wi9"><b class="svelte-kp1wi9"></b><!></div> <button type="button" class="o full svelte-kp1wi9"><small class="svelte-kp1wi9">Full</small><b class="svelte-kp1wi9"> </b></button> <button type="button" class="o annet svelte-kp1wi9"><small class="svelte-kp1wi9">Annet</small><b class="svelte-kp1wi9"> </b></button> <button type="button" class="o halv svelte-kp1wi9"><small class="svelte-kp1wi9">Halv</small><b class="svelte-kp1wi9"> </b></button> <input inputmode="decimal" placeholder="Anna"/></div>'),O0=we('<div class="spm svelte-kp1wi9"></div> <p class="dempa tastar svelte-kp1wi9"><kbd class="svelte-kp1wi9">1</kbd> full · <kbd class="svelte-kp1wi9">2</kbd> annet · <kbd class="svelte-kp1wi9">3</kbd> halv · <kbd class="svelte-kp1wi9">0</kbd> feil · går vidare av seg sjølv · <kbd class="svelte-kp1wi9">Enter</kbd> lagre · <kbd class="svelte-kp1wi9">Esc</kbd> nytt lag</p>',1),M0=we('<p class="dempa" style="margin:6px 0 0">Vel eit lag for å rette.</p>'),L0=we('<li class="svelte-kp1wi9"><span> </span><span class="n svelte-kp1wi9"> </span><b> </b></li>'),x0=we('<li class="dempa svelte-kp1wi9">Ingen poeng enno.</li>'),F0=we('<span></span> <span class="stolpe svelte-kp1wi9"><i class="f svelte-kp1wi9"></i><i class="a svelte-kp1wi9"></i><i class="h svelte-kp1wi9"></i></span> <b class="svelte-kp1wi9"> </b>',1),U0=we('<div class="stat svelte-kp1wi9"></div> <p class="dempa lg svelte-kp1wi9"><span><i class="f svelte-kp1wi9"></i>Full</span><span><i class="a svelte-kp1wi9"></i>Annet</span><span><i class="h svelte-kp1wi9"></i>Halv</span><span>Tom = feil</span></p>',1),B0=we('<p class="dempa" style="margin:6px 0 0">Ingen retta lag i denne runda enno.</p>'),j0=we('<li class="svelte-kp1wi9"><span> </span><span class="dempa"> </span></li>'),$0=we('<li class="dempa svelte-kp1wi9">Treng minst 3 retta lag i ei runde.</li>'),q0=we('<div class="toast svelte-kp1wi9" role="status"> </div>'),z0=we('<th class="t svelte-kp1wi9"> </th>'),H0=we('<span class="jm svelte-kp1wi9">★</span>'),W0=we("<td> <!></td>"),K0=we('<tr><td class="svelte-kp1wi9"> </td><td class="nm2 svelte-kp1wi9"> </td><td class="t sm svelte-kp1wi9"> </td><!></tr>'),G0=we('<tr><td class="dempa svelte-kp1wi9">Ingen lag med namn enno.</td></tr>'),Q0=we('<div class="dekk svelte-kp1wi9" role="dialog" aria-modal="true" aria-label="Resultatliste"><div class="inner"><div class="rad" style="justify-content:space-between;margin:12px 0"><h2>Resultatliste</h2> <div class="rad"><button class="btn" type="button">Last ned CSV</button><button class="btn primary" type="button">Lukk</button></div></div> <div class="kort tabell svelte-kp1wi9"><table class="svelte-kp1wi9"><thead><tr><th class="svelte-kp1wi9">Plass</th><th class="svelte-kp1wi9">Lag</th><th class="t svelte-kp1wi9">Sum</th><!></tr></thead><tbody></tbody></table></div> <p class="dempa">★ = joker (dobbel poeng). Same tal som på poengtavla. CSV-fila passar i Excel.</p></div></div>'),Y0=we('<section class="rett svelte-kp1wi9"><div class="venstre svelte-kp1wi9"><div class="kort"><h3>Runde</h3> <div class="rad runder svelte-kp1wi9" role="group" aria-label="Vel runde"><!> <!></div></div> <div class="kort"><h3>Lag</h3> <!></div> <div class="kort"><div class="rad" style="justify-content:space-between"><h3> </h3> <button class="btn liten" type="button">Sett poeng</button></div> <!> <!></div></div> <div class="hogre svelte-kp1wi9"><div class="kort"><div class="rad" style="justify-content:space-between"><h3>Resultat</h3><button class="btn primary liten" type="button">Resultatliste</button></div> <ol class="topp5 svelte-kp1wi9"></ol></div> <div class="kort"><h3> </h3> <!> <h3 style="margin-top:14px">Vanskelegaste spørsmål</h3> <ul class="hard svelte-kp1wi9"></ul></div></div></section> <div class="bar svelte-kp1wi9"><div class="inner rad" style="flex-wrap:nowrap"><div class="sumboks svelte-kp1wi9"><div class="sumtal svelte-kp1wi9"> <small class="svelte-kp1wi9"> <!></small></div> <div class="dempa nm svelte-kp1wi9"> </div></div> <button class="btn primary lagre svelte-kp1wi9" type="button">Lagre</button></div></div> <!> <!>',1);function J0(n,e){kl(e,!0);let t=P_(e,"demo",3,!1);const r=R=>(Math.round((Number(R)||0)*100)/100).toLocaleString("nb-NO"),s=R=>String(R||"").toLowerCase().replace(/æ/g,"ae").replace(/ø/g,"o").replace(/å/g,"a").normalize("NFD").replace(/[̀-ͯ]/g,""),i=()=>{var R;return t()?"deg@demo":(((R=_m.currentUser)==null?void 0:R.email)||"").toLowerCase()},a=R=>(R||"").split("@")[0],l=ht(()=>{var R;return(((R=Nt.quiz)==null?void 0:R.kategoriar)||[]).filter(V=>!V.hurtig)}),c=ht(()=>v0(Nt.quiz));let h=qe(""),d=qe(""),m=qe(""),w=qe(0),T=qe(0),A=qe(Vn([])),N=qe(!1),C=qe(!1),U=qe(""),G=qe(Vn({})),z=qe(void 0);Ii(()=>{E(l).length&&!E(l).some(R=>R.id===E(h))&&re(h,E(l)[0].id,!0)});const te=ht(()=>E(l).find(R=>R.id===E(h)));function Pe(R){const V=E(c).filter(M=>M.type==="sporsmal"&&M.kat===R&&M.nummerert!==!1);return V.length?V.map(M=>({tekst:M.tekst||"",svar:M.svar||""})):Array.from({length:6},()=>({tekst:"",svar:""}))}function Ie(R,V){const M=E(G)[R==null?void 0:R.id]||[],B=R!=null&&R.maks?_r(R.maks)/V:1;return Array.from({length:V},(x,j)=>M[j]?{full:_r(M[j].full),annet:_r(M[j].annet)}:{full:B,annet:B*.75})}const I=ht(()=>Pe(E(h))),g=ht(()=>Ie(E(te),E(I).length)),_=ht(()=>Nt.lag.filter(R=>(R.namn||"").trim())),v=ht(()=>Nt.lag.find(R=>R.id===E(d)));C_(()=>t()?void 0:g0(Tc(Cc,"etne","rett"),R=>{re(G,R.exists()?R.data().cfg||{}:{},!0)},R=>Ga("Poenginnstillingar: "+Dc(R),!0)));function b(R,V=E(A)[R],M=E(g)[R]){return!V||!M?0:V.m==="full"?M.full:V.m==="annet"?M.annet:V.m==="halv"?M.full/2:V.m==="eigen"?_r(V.c):0}const S=ht(()=>E(A).reduce((R,V,M)=>R+b(M),0)),y=ht(()=>E(g).reduce((R,V)=>R+V.full,0)),lt=ht(()=>{var M;const R=s(E(m).trim()),V=[];for(const B of E(_)){const x=s(B.namn),j=!!((M=B.rett)!=null&&M[E(h)]);let q=0;if(!R)q=1;else{const W=x.indexOf(R);if(W===0)q=120;else if(W>0)q=(x[W-1]===" "?100:80)-W;else if(R.split(/\s+/).length>1&&R.split(/\s+/).every(oe=>x.includes(oe)))q=60;else{let oe=0,ce=0,be=-1;for(let ve=0;ve<x.length&&oe<R.length;ve++)x[ve]===R[oe]&&(be>=0&&(ce+=ve-be-1),be=ve,oe++);oe===R.length&&(q=Math.max(5,40-ce))}}q>0&&V.push({l:B,s:q,ferdig:j})}return V.sort((B,x)=>B.ferdig-x.ferdig||x.s-B.s||B.l.bord-x.l.bord).slice(0,E(m).trim()?8:16)});function Kt(R){var B,x,j;re(d,R,!0),re(m,""),re(T,0);const V=Nt.lag.find(q=>q.id===R),M=(x=(B=V==null?void 0:V.rett)==null?void 0:B[E(h)])==null?void 0:x.marks;re(A,Array.from({length:E(I).length},(q,W)=>M!=null&&M[W]?{m:M[W].m||"",c:M[W].c||""}:{m:"",c:""}),!0),(j=E(z))==null||j.blur()}function Wn(R=!0){var V;re(d,""),re(A,[],!0),re(T,0),re(m,""),re(w,0),R&&((V=E(z))==null||V.focus())}function Rn(R){if(re(h,R,!0),E(d)){const V=E(d);queueMicrotask(()=>Kt(V))}}function Gt(R,V){E(A)[R].m=E(A)[R].m===V?"":V,E(A)[R].c="",re(T,Math.min(E(A).length-1,R+(E(A)[R].m?1:0)),!0)}function wt(R,V){E(A)[R].c=V,E(A)[R].m=V.trim()?"eigen":"",re(T,R,!0)}let nn=qe(!1);async function ho(){if(!E(v)||E(nn))return;re(nn,!0);const R=E(A).map((M,B)=>b(B)),V={marks:bg(E(A)),vals:R,by:i(),at:Date.now()};if(t()){E(v).poeng={...E(v).poeng||{},[E(h)]:R.reduce((M,B)=>M+B,0)},E(v).rett={...E(v).rett||{},[E(h)]:V},fo(`Lagra · ${E(v).namn} · ${E(te).namn} · ${r(E(S))}`),Wn(),re(nn,!1);return}try{await m0(Tc(Cc,"etneLag",E(v).id),{["poeng."+E(h)]:R.reduce((M,B)=>M+B,0),["rett."+E(h)]:V}),Ga(`Lagra ${E(v).namn} · ${E(te).namn} · ${r(E(S))}`),fo(`Lagra · ${E(v).namn} · ${E(te).namn} · ${r(E(S))}`),Wn()}catch(M){Ga("Ikkje lagra: "+Dc(M),!0)}re(nn,!1)}async function rn(R,V,M){const B=E(g).map(x=>({...x}));if(B[R][V]=_r(M),t()){re(G,{...E(G),[E(h)]:B},!0);return}try{await p0(Tc(Cc,"etne","rett"),{cfg:{[E(h)]:B}},{merge:!0})}catch(x){Ga("Ikkje lagra: "+Dc(x),!0)}}let Ye;function fo(R){re(U,R,!0),clearTimeout(Ye),Ye=setTimeout(()=>re(U,""),2600)}const Er=new Map;let Xa=!1;Ii(()=>{var R,V;if(Nt.lag.length){for(const M of Nt.lag)for(const[B,x]of Object.entries(M.rett||{})){const j=M.id+"|"+B;Xa&&Er.get(j)!==x.at&&x.by&&x.by!==i()&&fo(`${a(x.by)} retta ${M.namn||"bord "+M.bord} · ${((R=E(l).find(q=>q.id===B))==null?void 0:R.namn)||""} · ${r((V=x.vals)==null?void 0:V.reduce((q,W)=>q+W,0))}`),Er.set(j,x.at)}Xa=!0}});const wr=ht(()=>{const R=Nt.lag.map(V=>{var M;return(M=V.rett)==null?void 0:M[E(h)]}).filter(V=>V==null?void 0:V.vals);return{n:R.length,rader:E(I).map((V,M)=>{let B=0,x=0,j=0,q=0;R.forEach(oe=>{var be,ve;const ce=(ve=(be=oe.marks)==null?void 0:be[M])==null?void 0:ve.m;q+=oe.vals[M]||0,ce==="full"?B++:ce==="annet"||ce==="eigen"?x++:ce==="halv"&&j++});const W=R.length||1;return{f:B/W*100,a:x/W*100,h:j/W*100,pst:E(g)[M].full?Math.round(q/W/E(g)[M].full*100):0}})}}),Nc=ht(()=>{const R=[];for(const V of E(l)){const M=Pe(V.id),B=Ie(V,M.length),x=Nt.lag.map(j=>{var q;return(q=j.rett)==null?void 0:q[V.id]}).filter(j=>j==null?void 0:j.vals);x.length<3||M.forEach((j,q)=>{if(!B[q].full)return;const W=x.reduce((oe,ce)=>oe+(ce.vals[q]||0),0);R.push({namn:`${V.namn} · spm ${q+1}`,p:W/x.length/B[q].full,n:x.length})})}return R.sort((V,M)=>V.p-M.p).slice(0,5)}),po=ht(()=>E0(Nt.lag,Nt.quiz));function Qs(){const R=x=>'"'+String(x??"").replace(/"/g,'""')+'"',V=x=>String(x).replace(".",","),M=[["Plassering","Lagnamn","Total score",...E(l).map(x=>x.namn)].map(R).join(";")];E(po).forEach(x=>M.push([x.rank,R(x.namn),V(x.sum),...E(l).map(j=>{var W;const q=(W=x.poeng)==null?void 0:W[j.id];return q===void 0||q===""?"":V(_r(q)*(x.joker===j.id?2:1))})].map((j,q)=>q===1?j:R(j)).join(";")));const B=document.createElement("a");B.href=URL.createObjectURL(new Blob(["\uFEFF"+M.join(`\r
`)],{type:"text/csv;charset=utf-8"})),B.download="etnequiz-resultat.csv",B.click(),setTimeout(()=>URL.revokeObjectURL(B.href),1e3)}function Ys(R){var B;if(E(C)){R.key==="Escape"&&re(C,!1);return}const V=R.target.tagName==="INPUT"||R.target.tagName==="SELECT"||R.target.tagName==="TEXTAREA";if(R.key==="Escape"){Wn();return}if(V||R.ctrlKey||R.metaKey||R.altKey){R.key==="Enter"&&R.ctrlKey&&ho();return}if(!E(v)){R.key.length===1&&/\S/.test(R.key)&&((B=E(z))==null||B.focus());return}const M={1:"full",2:"annet",3:"halv"};M[R.key]?(R.preventDefault(),E(A)[E(T)].m=M[R.key],E(A)[E(T)].c="",re(T,Math.min(E(A).length-1,E(T)+1),!0)):R.key==="0"?(R.preventDefault(),E(A)[E(T)].m="",E(A)[E(T)].c="",re(T,Math.min(E(A).length-1,E(T)+1),!0)):R.key==="ArrowDown"?(R.preventDefault(),re(T,Math.min(E(A).length-1,E(T)+1),!0)):R.key==="ArrowUp"?(R.preventDefault(),re(T,Math.max(0,E(T)-1),!0)):R.key==="Enter"&&R.target.tagName!=="BUTTON"&&(R.preventDefault(),ho())}function mo(R){if(R.key==="ArrowDown")R.preventDefault(),re(w,Math.min(E(lt).length-1,E(w)+1),!0);else if(R.key==="ArrowUp")R.preventDefault(),re(w,Math.max(0,E(w)-1),!0);else if(R.key==="Enter"){R.preventDefault();const V=E(lt)[E(w)]||E(lt)[0];V&&Kt(V.l.id)}}const go=(R,V)=>{var M,B,x;return((M=R.poeng)==null?void 0:M[V])!==void 0&&((B=R.poeng)==null?void 0:B[V])!==""&&!((x=R.rett)!=null&&x[V])};var Js=Y0();s_("keydown",Ul,Ys);var Xs=Dr(Js),_o=se(Xs),Za=se(_o),Oc=H(se(Za),2),vo=se(Oc);pn(vo,17,()=>E(l),Nn,(R,V)=>{const M=ht(()=>Nt.lag.filter(W=>{var oe;return(oe=W.rett)==null?void 0:oe[E(V).id]}).length);var B=T0(),x=se(B),j=H(x);{var q=W=>{var oe=w0(),ce=Ne(oe,!0);Be(()=>Te(ce,E(M))),fe(W,oe)};Rt(j,W=>{E(M)&&W(q)})}Be(()=>{mn(B,"aria-pressed",E(V).id===E(h)),Te(x,E(V).namn)}),rt("click",B,()=>Rn(E(V).id)),fe(R,B)});var yo=H(vo,2);{var el=R=>{var V=I0();fe(R,V)};Rt(yo,R=>{E(l).length||R(el)})}var tl=H(Za,2),Eo=H(se(tl),2);{var wo=R=>{var V=b0(),M=se(V),B=Ne(M,!0),x=H(M),j=se(x),q=H(j);{var W=Ce=>{var ye=Xl();Be(Me=>Te(ye,`· retta frå før av ${Me??""}, du endrar`),[()=>a(E(v).rett[E(h)].by)]),fe(Ce,ye)},oe=Ce=>{var ye=Xl();Be(Me=>Te(ye,`· har ${Me??""} p frå før (skrive inn for hand)`),[()=>r(E(v).poeng[E(h)])]),fe(Ce,ye)},ce=ht(()=>go(E(v),E(h)));Rt(q,Ce=>{var ye;(ye=E(v).rett)!=null&&ye[E(h)]?Ce(W):E(ce)&&Ce(oe,1)})}var be=H(x,2);{var ve=Ce=>{var ye=A0();fe(Ce,ye)};Rt(be,Ce=>{E(v).joker===E(h)&&Ce(ve)})}var Fe=H(be,3);Be(()=>{Te(B,E(v).namn),Te(j,`bord ${E(v).bord??""}`)}),rt("click",Fe,()=>Wn()),fe(R,V)},nl=R=>{var V=P0(),M=Dr(V);R_(M,x=>re(z,x),()=>E(z));var B=H(M,2);pn(B,23,()=>E(lt),x=>x.l.id,(x,j,q)=>{var W=S0();let oe;var ce=se(W),be=H(ce);{var ve=Fe=>{var Ce=R0(),ye=Ne(Ce,!0);Be(Me=>Te(ye,Me),[()=>a(E(j).l.rett[E(h)].by)]),fe(Fe,Ce)};Rt(be,Fe=>{E(j).ferdig&&Fe(ve)})}Be(Fe=>{oe=Zo(W,1,"chip svelte-kp1wi9",null,oe,{topp:Fe,ferdig:E(j).ferdig}),Te(ce,E(j).l.namn)},[()=>E(m).trim()&&E(q)===E(w)]),rt("click",W,()=>Kt(E(j).l.id)),fe(x,W)},x=>{var j=k0(),q=Ne(j,!0);Be(()=>Te(q,E(_).length?"Ingen lag passar.":"Ingen lag med namn enno. Lag bord og gje dei namn under «Lag og poeng».")),fe(x,j)}),rt("input",M,()=>re(w,0)),rt("keydown",M,mo),b_(M,()=>E(m),x=>re(m,x)),fe(R,V)};Rt(Eo,R=>{E(v)?R(wo):R(nl,-1)})}var Xe=H(tl,2),Ze=se(Xe),Zr=se(Ze),rl=Ne(Zr),To=H(Zr,2),sl=H(Ze,2);{var es=R=>{var V=D0(),M=H(se(V),2),B=H(se(M),4);pn(B,17,()=>E(I),Nn,(x,j,q)=>{var W=C0(),oe=Dr(W);oe.textContent=`Spm ${q+1}`;var ce=H(oe,2);mn(ce,"aria-label",`Full poeng spørsmål ${q+1}`);var be=H(ce,2);mn(be,"aria-label",`Annet-poeng spørsmål ${q+1}`),Be((ve,Fe)=>{tu(ce,ve),tu(be,Fe)},[()=>r(E(g)[q].full),()=>r(E(g)[q].annet)]),rt("change",ce,ve=>rn(q,"full",ve.target.value)),rt("change",be,ve=>rn(q,"annet",ve.target.value)),fe(x,W)}),fe(R,V)};Rt(sl,R=>{E(N)&&R(es)})}var il=H(sl,2);{var ol=R=>{var V=O0(),M=Dr(V);pn(M,21,()=>E(I),Nn,(B,x,j)=>{var q=N0();let W;var oe=se(q),ce=se(oe);ce.textContent=`Spm ${j+1}`;var be=H(ce);{var ve=tt=>{var Qt=V0(),Gn=Ne(Qt,!0);Be(()=>Te(Gn,E(x).svar)),fe(tt,Qt)};Rt(be,tt=>{E(x).svar&&tt(ve)})}var Fe=H(oe,2),Ce=H(se(Fe)),ye=Ne(Ce,!0),Me=H(Fe,2),sn=H(se(Me)),ss=Ne(sn,!0),on=H(Me,2),ri=H(se(on)),is=Ne(ri,!0),Kn=H(on,2);let si;mn(Kn,"aria-label",`Eigen poengsum spørsmål ${j+1}`),Be((tt,Qt,Gn)=>{var Pt,Tt,Pn,Qn,os;W=Zo(q,1,"q svelte-kp1wi9",null,W,{aktiv:j===E(T)}),mn(Fe,"aria-pressed",((Pt=E(A)[j])==null?void 0:Pt.m)==="full"),Te(ye,tt),mn(Me,"aria-pressed",((Tt=E(A)[j])==null?void 0:Tt.m)==="annet"),Te(ss,Qt),mn(on,"aria-pressed",((Pn=E(A)[j])==null?void 0:Pn.m)==="halv"),Te(is,Gn),si=Zo(Kn,1,"inp eigen svelte-kp1wi9",null,si,{paa:((Qn=E(A)[j])==null?void 0:Qn.m)==="eigen"}),tu(Kn,((os=E(A)[j])==null?void 0:os.m)==="eigen"?E(A)[j].c:"")},[()=>r(E(g)[j].full),()=>r(E(g)[j].annet),()=>r(E(g)[j].full/2)]),rt("click",Fe,()=>Gt(j,"full")),rt("click",Me,()=>Gt(j,"annet")),rt("click",on,()=>Gt(j,"halv")),rt("input",Kn,tt=>wt(j,tt.target.value)),rt("keydown",Kn,tt=>{tt.key==="Enter"&&(tt.preventDefault(),tt.stopPropagation(),re(T,Math.min(E(A).length-1,j+1),!0))}),fe(B,q)}),fe(R,V)},Io=R=>{var V=M0();fe(R,V)};Rt(il,R=>{E(v)?R(ol):R(Io,-1)})}var Mc=H(_o,2),al=se(Mc),Zs=se(al),ll=H(se(Zs)),ul=H(Zs,2);pn(ul,21,()=>E(po).slice(0,5),Nn,(R,V)=>{var M=L0(),B=se(M),x=Ne(B),j=H(B),q=Ne(j,!0),W=H(j),oe=Ne(W,!0);Be(ce=>{Te(x,`${E(V).rank??""}.`),Te(q,E(V).namn),Te(oe,ce)},[()=>r(E(V).sum)]),fe(R,M)},R=>{var V=x0();fe(R,V)});var ts=H(al,2),ei=se(ts),Ao=Ne(ei),Sn=H(ei,2);{var cl=R=>{var V=U0(),M=Dr(V);pn(M,21,()=>E(wr).rader,Nn,(B,x,j)=>{var q=F0(),W=Dr(q);W.textContent=`Spm ${j+1}`;var oe=H(W,2),ce=se(oe),be=H(ce),ve=H(be),Fe=H(oe,2),Ce=Ne(Fe);Be((ye,Me,sn)=>{mn(oe,"title",`${ye??""} % full, ${Me??""} % annet, ${sn??""} % halv`),eu(ce,`width:${E(x).f??""}%`),eu(be,`width:${E(x).a??""}%`),eu(ve,`width:${E(x).h??""}%`),Te(Ce,`${E(x).pst??""} %`)},[()=>r(E(x).f),()=>r(E(x).a),()=>r(E(x).h)]),fe(B,q)}),fe(R,V)},ti=R=>{var V=B0();fe(R,V)};Rt(Sn,R=>{E(wr).n?R(cl):R(ti,-1)})}var hl=H(Sn,4);pn(hl,21,()=>E(Nc),Nn,(R,V)=>{var M=j0(),B=se(M),x=Ne(B,!0),j=H(B),q=Ne(j);Be(W=>{Te(x,E(V).namn),Te(q,`${W??""} % · ${E(V).n??""} lag`)},[()=>Math.round(E(V).p*100)]),fe(R,M)},R=>{var V=$0();fe(R,V)});var Tr=H(Xs,2),fl=se(Tr),et=se(fl),bo=se(et),Ir=se(bo),ns=H(Ir),dl=se(ns),Lc=H(dl);{var Ar=R=>{var V=Xl();Be(M=>Te(V,`· joker ×2 = ${M??""}`),[()=>r(E(S)*2)]),fe(R,V)};Rt(Lc,R=>{var V;((V=E(v))==null?void 0:V.joker)===E(h)&&R(Ar)})}var xc=H(bo,2),Fc=Ne(xc,!0),rs=H(et,2),Ro=H(Tr,2);{var So=R=>{var V=q0(),M=Ne(V,!0);Be(()=>Te(M,E(U))),fe(R,V)};Rt(Ro,R=>{E(U)&&R(So)})}var ni=H(Ro,2);{var kn=R=>{var V=Q0(),M=se(V),B=se(M),x=H(se(B),2),j=se(x),q=H(j),W=H(B,2),oe=se(W),ce=se(oe),be=se(ce),ve=H(se(be),3);pn(ve,17,()=>E(l),Nn,(Ce,ye)=>{var Me=z0(),sn=Ne(Me,!0);Be(()=>Te(sn,E(ye).namn)),fe(Ce,Me)});var Fe=H(ce);pn(Fe,21,()=>E(po),Nn,(Ce,ye)=>{var Me=K0(),sn=se(Me),ss=Ne(sn),on=H(sn),ri=Ne(on,!0),is=H(on),Kn=Ne(is,!0),si=H(is);pn(si,17,()=>E(l),Nn,(tt,Qt)=>{const Gn=ht(()=>{var pe;return(pe=E(ye).poeng)==null?void 0:pe[E(Qt).id]});var Pt=W0();let Tt;var Pn=se(Pt),Qn=H(Pn);{var os=pe=>{var ii=H0();fe(pe,ii)};Rt(Qn,pe=>{E(ye).joker===E(Qt).id&&pe(os)})}Be(pe=>{Tt=Zo(Pt,1,"t svelte-kp1wi9",null,Tt,{j:E(ye).joker===E(Qt).id}),Te(Pn,pe)},[()=>E(Gn)===void 0||E(Gn)===""?"–":r(_r(E(Gn))*(E(ye).joker===E(Qt).id?2:1))]),fe(tt,Pt)}),Be(tt=>{Te(ss,`${E(ye).rank??""}.`),Te(ri,E(ye).namn),Te(Kn,tt)},[()=>r(E(ye).sum)]),fe(Ce,Me)},Ce=>{var ye=G0(),Me=Ne(ye);Be(()=>mn(Me,"colspan",3+E(l).length)),fe(Ce,ye)}),rt("click",j,Qs),rt("click",q,()=>re(C,!1)),fe(R,V)};Rt(ni,R=>{E(C)&&R(kn)})}Be((R,V)=>{var M,B;Te(rl,`Spørsmål${E(te)?" · "+E(te).namn:""}`),mn(To,"aria-pressed",E(N)),Te(Ao,`Statistikk · ${(((M=E(te))==null?void 0:M.namn)||"")??""} · ${E(wr).n??""} lag`),Te(Ir,`${R??""} `),Te(dl,`/ ${V??""}`),Te(Fc,E(v)?E(v).namn+" · "+(((B=E(te))==null?void 0:B.namn)||""):"Vel lag"),rs.disabled=!E(v)||E(nn)},[()=>r(E(S)),()=>r(E(y))]),rt("click",To,()=>re(N,!E(N))),rt("click",ll,()=>re(C,!0)),rt("click",rs,ho),fe(n,Js),Pl()}i_(["click","input","keydown","change"]);var js=k_(()=>Nt),X0=we('<header class="band svelte-1hwhcgc"><div class="inner topp svelte-1hwhcgc"><div class="merke svelte-1hwhcgc"><svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"></path></svg> <div><span class="namn svelte-1hwhcgc">Etnequizen</span><span class="under svelte-1hwhcgc">Førehandsvising av rettinga</span></div></div> <nav class="meny svelte-1hwhcgc" aria-label="Meny"><a href="/etnequiz/" class="svelte-1hwhcgc">Quizmaster-panelet</a> <a href="/etnequiz/skjerm.html" class="svelte-1hwhcgc">Storskjermen</a> <a href="./" aria-current="page" class="svelte-1hwhcgc">Prøv rettinga</a></nav></div></header> <main class="inner" style="padding-block:16px 48px"><p class="info svelte-1hwhcgc">Dette er ei førehandsvising med 10 eksempellag og fem rundar. Ingenting blir lagra, og alt forsvinn når du lastar sida på nytt. Første runde er alt retta for seks lag, så du ser statistikken.</p> <!></main>',1);function Z0(n,e){kl(e,!1);const t=[["r1","Allmennkunnskap",["Oslo","1814","Sju","Merkur","Ibsen","Rom"]],["r2","Geografi",["Nilen","Canberra","Galdhøpiggen","Stillehavet","Etne","Island"]],["r3","Musikk",["a-ha","ABBA","Grieg","Queen","Kygo","Beatles"]],["r4","Sport",["Bjørndalen","Haaland","1994","Wimbledon","Lillehammer","Ski"]],["r5","Rebus",["Juletre","Snømann","Pepperkake","Nisse","Reinsdyr","Grøt"]]],r=["Hølen IL","Bromance Memorosa","De siste dagers hellige","Skinnbamsen","Oppstandelse","Team Hjortepølsa","Nederlaget","De Uvitende Optimistene","Lisa gikk til skolen","Kåre & Petrusa"],s=["full","annet","halv",""],i=r.map((h,d)=>{const m={id:String(d+1),bord:d+1,namn:h,joker:d%4===1?"r2":"",poeng:{},rett:{}};if(d<6){const w=Array.from({length:6},(A,N)=>({m:s[(d*3+N*5+(N===4?2:0))%(N<2?2:4)],c:""})),T=w.map(A=>A.m==="full"?1:A.m==="annet"?.75:A.m==="halv"?.5:0);m.poeng.r1=T.reduce((A,N)=>A+N,0),m.rett.r1={marks:w,vals:T,by:["fredrik@demo","morten@demo"][d%2],at:1}}return m});js(js().quiz={tittel:"Førehandsvising",undertittel:"Etnequizen",kategoriar:t.map(([h,d])=>({id:h,namn:d,maks:6})),plan:t.flatMap(([h,,d])=>[{type:"kategori",kat:h},...d.map((m,w)=>({type:"sporsmal",kat:h,tekst:`Spørsmål ${w+1}`,svar:m}))])}),js(js().lag=i),js(js().klar=!0),S_();var a=X0(),l=H(Dr(a),2),c=H(se(l),2);J0(c,{demo:!0}),fe(n,a),Pl()}f_(Z0,{target:document.getElementById("app")})})();
