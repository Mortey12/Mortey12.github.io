var mA=Object.defineProperty;var Gm=De=>{throw TypeError(De)};var gA=(De,ke,He)=>ke in De?mA(De,ke,{enumerable:!0,configurable:!0,writable:!0,value:He}):De[ke]=He;var Bt=(De,ke,He)=>gA(De,typeof ke!="symbol"?ke+"":ke,He),zc=(De,ke,He)=>ke.has(De)||Gm("Cannot "+He);var P=(De,ke,He)=>(zc(De,ke,"read from private field"),He?He.call(De):ke.get(De)),ie=(De,ke,He)=>ke.has(De)?Gm("Cannot add the same private member more than once"):ke instanceof WeakSet?ke.add(De):ke.set(De,He),ne=(De,ke,He,kr)=>(zc(De,ke,"write to private field"),kr?kr.call(De,He):ke.set(De,He),He),ue=(De,ke,He)=>(zc(De,ke,"access private method"),He);(function(){"use strict";var Em,qs,yr,Qr,zs,Hs,Ws,zn,Ks,Ot,uo,Hn,nn,Tn,Gs,Jr,_e,Hc,Wc,Lo,Kc,Qm,Jm,hi,_A,xo,wm,Wt,Dc,Kt,Yr,Et,Mt,wt,Lt,In,Xr,Er,Qs,co,ho,Wn,Za,Pe,vA,yA,Gc,EA,Qc,Fo,Al,Jc,Yc,rn,An,xt,Zr,fo,po,el,Tm;var ke=Array.isArray,He=Array.prototype.indexOf,kr=Array.prototype.includes,Uo=Array.from,Xc=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,Zc=Object.getOwnPropertyDescriptors,eh=Object.prototype,Ym=Array.prototype,Bo=Object.getPrototypeOf,th=Object.isExtensible;const Xm=()=>{};function Zm(n){return n()}function bl(n){for(var e=0;e<n.length;e++)n[e]()}function nh(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}const ct=2,us=4,di=8,rh=1<<24,Yt=16,jt=32,Dn=64,Rl=128,Sl=256,Xt=512,We=1024,je=2048,$t=4096,yt=8192,At=16384,cs=32768,jo=1<<25,hs=65536,$o=1<<17,eg=1<<18,fs=1<<19,sh=1<<20,ln=1<<25,qo=1<<21,ds=1<<22,Xn=1<<23,ps=Symbol("$state"),ih=Symbol("component"),tg=Symbol(""),zo=Symbol("attributes"),kl=Symbol("class"),Pl=Symbol("style"),pi=Symbol("text"),Ho=Symbol("form reset"),mi=new class extends Error{constructor(){super(...arguments);Bt(this,"name","StaleReactionError");Bt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},ng=!!((Em=globalThis.document)!=null&&Em.contentType)&&globalThis.document.contentType.includes("xml"),rg=1,sg=2,oh=4,ig=8,og=16,ag=1,lg=2,Ke=Symbol("uninitialized"),ug="http://www.w3.org/1999/xhtml";function cg(){console.warn("https://svelte.dev/e/derived_inert")}function hg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ah(n){return n===this.v}function fg(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function lh(n){return!fg(n,this.v)}function dg(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function pg(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function mg(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function gg(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _g(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vg(n){throw new Error("https://svelte.dev/e/effect_orphan")}function yg(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Eg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function wg(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ig(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let gi=!1,wA=!1;function Ag(){gi=!0}const bg=[];function Rg(n,e=!1,t=!1){return Wo(n,new Map,"",bg,null,t)}function Wo(n,e,t,r,s=null,i=!1){if(typeof n=="object"&&n!==null){var a=e.get(n);if(a!==void 0)return a;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(ke(n)){var l=Array(n.length);e.set(n,l),s!==null&&e.set(s,l);for(var c=0;c<n.length;c+=1){var h=n[c];c in n&&(l[c]=Wo(h,e,t,r,null,i))}return l}if(Bo(n)===eh){l={},e.set(n,l),s!==null&&e.set(s,l);for(var d of Object.keys(n))l[d]=Wo(n[d],e,t,r,null,i);return l}if(n instanceof Date)return n.getTime(),structuredClone(n);if(typeof n.toJSON=="function"&&!i)return Wo(n.toJSON(),e,t,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let Ve=null;function ms(n){Ve=n}function Cl(n,e=!1,t){Ve={p:Ve,i:!1,c:null,e:null,s:n,x:null,r:de,l:gi&&!e?{s:null,u:null,$:[]}:null}}function Dl(n){var e=Ve,t=e.e;if(t!==null){e.e=null;for(var r of t)Ph(r)}return e.i=!0,Ve=e.p,Vl(n)}function Vl(n={}){return Xc(n,ih,{value:!0}),n}function _i(){return!gi||Ve!==null&&Ve.l===null}let Pr=[];function uh(){var n=Pr;Pr=[],bl(n)}function Vn(n){if(Pr.length===0&&!Ei){var e=Pr;queueMicrotask(()=>{e===Pr&&uh()})}Pr.push(n)}function Sg(){for(;Pr.length>0;)uh()}const kg=-7169;function Le(n,e){n.f=n.f&kg|e}function Nl(n){n.f&Xt||n.deps===null?Le(n,We):Le(n,$t)}function ch(n,e,t){n.f&je?e.add(n):n.f&$t&&t.add(n),Le(n,We)}let hh=!1;function Pg(){hh||(hh=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[Ho])==null||e.call(t)})},{capture:!0}))}function gs(n){var e=le,t=de;zt(null),fn(null);try{return n()}finally{zt(e),fn(t)}}function Cg(n,e,t,r=t){n.addEventListener(e,()=>gs(t));const s=n[Ho];s?n[Ho]=()=>{s(),r(!0)}:n[Ho]=()=>r(!0),Pg()}function Dg(n,e,t,r){const s=_i()?Go:dh;var i=n.filter(T=>!T.settled),a=e.map(s);if(t.length===0&&i.length===0){r(a);return}var l=de,c=Vg(),h=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(T=>T.promise)):null;function d(T){if(!(l.f&At)){c();try{r([...a,...T])}catch(b){cn(b,l)}Ko()}}var m=fh();if(t.length===0){h.then(()=>d([])).finally(m);return}function w(){Promise.all(t.map(T=>Ng(T))).then(d).catch(T=>cn(T,l)).finally(m)}h?h.then(()=>{c(),w(),Ko()}):w()}function Vg(){var n=de,e=le,t=Ve,r=G;return function(i=!0){fn(n),zt(e),ms(t),i&&!(n.f&At)&&(r==null||r.activate(),r==null||r.apply())}}function Ko(n=!0){fn(null),zt(null),ms(null),n&&(G==null||G.deactivate())}function fh(){var n=de,e=n.b,t=G,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Go(n){var e=ct|je;return de!==null&&(de.f|=fs),{ctx:Ve,deps:null,effects:null,equals:ah,f:e,fn:n,reactions:null,rv:0,v:Ke,wv:0,parent:de,ac:null}}const vi=Symbol("obsolete");function Ng(n,e,t){let r=de;r===null&&pg();var s=void 0,i=Zn(Ke),a=!le,l=new Set;return Qg(()=>{var T,b;var c=de,h=nh();s=h.promise;try{Promise.resolve(n()).then(h.resolve,N=>{N!==mi&&h.reject(N)}).finally(Ko)}catch(N){h.reject(N),Ko()}var d=G;if(a){if(c.f&cs)var m=fh();if((T=r.b)!=null&&T.is_rendered())(b=d.async_deriveds.get(c))==null||b.reject(vi);else for(const N of l.values())N.reject(vi);l.add(h),d.async_deriveds.set(c,h)}const w=(N,C=void 0)=>{m==null||m(),l.delete(h),C!==vi&&(d.activate(),C?(i.f|=Xn,vs(i,C)):(i.f&Xn&&(i.f^=Xn),vs(i,N)),d.deactivate())};h.promise.then(w,N=>w(null,N||"unknown"))}),kh(()=>{for(const c of l)c.reject(vi)}),new Promise(c=>{function h(d){function m(){d===s?c(i):h(s)}d.then(m,m)}h(s)})}function ht(n){const e=Go(n);return Mh(e),e}function dh(n){const e=Go(n);return e.equals=lh,e}function Og(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)bt(e[t])}}function Ol(n){var e,t=de,r=n.parent;if(!tr&&r!==null&&n.v!==Ke&&r.f&(At|yt))return cg(),n.v;fn(r);try{Og(n),e=Bh(n)}finally{fn(t)}return e}function ph(n){var e=Ol(n);if(!n.equals(e)&&(n.wv=Fh(),(!(G!=null&&G.is_fork)||n.deps===null)&&(G!==null?(G.capture(n,e,!0),yi==null||yi.capture(n,e,!0)):n.v=e,n.deps===null))){Le(n,We);return}tr||(tt!==null?($l()||G!=null&&G.is_fork)&&tt.set(n,e):Nl(n))}function Mg(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&gs(()=>{t.ac.abort(mi),t.ac=null}),t.fn!==null&&(t.teardown=Xm),Si(t,0),Hl(t))}function mh(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&ys(e)}let Ml=null,_s=null,G=null,yi=null,tt=null,Ll=null,Ei=!1,xl=!1,wi=null,Qo=null;var gh=0,TA=new Set;let Lg=1;const Xa=class Xa{constructor(){ie(this,_e);Bt(this,"id",Lg++);ie(this,qs,!1);Bt(this,"linked",!0);ie(this,yr,null);ie(this,Qr,null);Bt(this,"async_deriveds",new Map);Bt(this,"current",new Map);Bt(this,"previous",new Map);ie(this,zs,new Set);ie(this,Hs,new Set);ie(this,Ws,0);ie(this,zn,new Map);ie(this,Ks,null);ie(this,Ot,[]);ie(this,uo,[]);ie(this,Hn,new Set);ie(this,nn,new Set);ie(this,Tn,new Map);ie(this,Gs,new Set);Bt(this,"is_fork",!1);ie(this,Jr,!1);_s===null?Ml=_s=this:(ne(_s,Qr,this),ne(this,yr,_s)),_s=this}skip_effect(e){P(this,Tn).has(e)||P(this,Tn).set(e,{d:[],m:[]}),P(this,Gs).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=P(this,Tn).get(e);if(r){P(this,Tn).delete(e);for(var s of r.d)Le(s,je),t(s);for(s of r.m)Le(s,$t),t(s)}P(this,Gs).add(e)}capture(e,t,r=!1){e.v!==Ke&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&Xn||(this.current.set(e,[t,r]),tt==null||tt.set(e,t)),this.is_fork||(e.v=t)}activate(){G=this}deactivate(){G=null,tt=null}flush(){try{xl=!0,G=this,ue(this,_e,Lo).call(this)}finally{gh=0,Ll=null,wi=null,Qo=null,xl=!1,G=null,tt=null,un.clear()}}discard(){var e;for(const t of P(this,Hs))t(this);P(this,Hs).clear();for(const t of this.async_deriveds.values())t.reject(vi);ue(this,_e,xo).call(this),(e=P(this,Ks))==null||e.resolve()}register_created_effect(e){P(this,uo).push(e)}increment(e,t){if(ne(this,Ws,P(this,Ws)+1),e){let r=P(this,zn).get(t)??0;P(this,zn).set(t,r+1)}}decrement(e,t){if(ne(this,Ws,P(this,Ws)-1),e){let r=P(this,zn).get(t)??0;r===1?P(this,zn).delete(t):P(this,zn).set(t,r-1)}P(this,Jr)||(ne(this,Jr,!0),Vn(()=>{ne(this,Jr,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const r of e)P(this,Hn).add(r);for(const r of t)P(this,nn).add(r);e.clear(),t.clear()}oncommit(e){P(this,zs).add(e)}ondiscard(e){P(this,Hs).add(e)}settled(){return(P(this,Ks)??ne(this,Ks,nh())).promise}static ensure(){if(G===null){const e=G=new Xa;!xl&&!Ei&&Vn(()=>{P(e,qs)||e.flush()})}return G}apply(){{tt=null;return}}schedule(e){var t;if(Ll=e,(t=e.b)!=null&&t.is_pending&&e.f&(us|di|rh)&&!(e.f&cs)){e.b.defer_effect(e);return}P(this,Ot).push(e)}};qs=new WeakMap,yr=new WeakMap,Qr=new WeakMap,zs=new WeakMap,Hs=new WeakMap,Ws=new WeakMap,zn=new WeakMap,Ks=new WeakMap,Ot=new WeakMap,uo=new WeakMap,Hn=new WeakMap,nn=new WeakMap,Tn=new WeakMap,Gs=new WeakMap,Jr=new WeakMap,_e=new WeakSet,Hc=function(){if(this.is_fork)return!0;for(const r of P(this,zn).keys()){for(var e=r,t=!1;e.parent!==null;){if(P(this,Tn).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Wc=function(){var e=[];for(const i of P(this,Ot))if(!(i.f&At||!(i.f&(je|$t)))){for(var t=i,r=!1;t.parent!==null;){t=t.parent;var s=t.f;if(s&(Dn|jt)){if(!(s&We)){r=!0;break}t.f^=We}}r||e.push(t)}return ne(this,Ot,[]),e},Lo=function(){var l,c,h,d;ne(this,qs,!0);for(const m of P(this,Hn))P(this,nn).delete(m),Le(m,je),this.schedule(m);for(const m of P(this,nn))Le(m,$t),this.schedule(m);this.apply();for(var e=wi=[],t=[],r=Qo=[];P(this,Ot).length>0;){gh++>1e3&&(ue(this,_e,xo).call(this),Fg());for(const m of ue(this,_e,Wc).call(this))try{ue(this,_e,Kc).call(this,m,e,t)}catch(w){throw Eh(m),ue(this,_e,Hc).call(this)||this.discard(),w}}if(G=null,r.length>0){var s=Xa.ensure();for(const m of r)s.schedule(m)}if(wi=null,Qo=null,ue(this,_e,Hc).call(this)){ue(this,_e,hi).call(this,t),ue(this,_e,hi).call(this,e);for(const[m,w]of P(this,Tn))yh(m,w);r.length>0&&ue(l=G,_e,Lo).call(l);return}const i=ue(this,_e,Qm).call(this);if(i){ue(this,_e,hi).call(this,t),ue(this,_e,hi).call(this,e),ue(c=i,_e,Jm).call(c,this);return}P(this,Hn).clear(),P(this,nn).clear();for(const m of P(this,zs))m(this);P(this,zs).clear(),yi=this,_h(t),_h(e),yi=null,(h=P(this,Ks))==null||h.resolve();var a=G;if(P(this,Ws)===0&&(P(this,Ot).length===0||a!==null)&&ue(this,_e,xo).call(this),P(this,Ot).length>0)if(a!==null){for(const m of P(this,Ot))P(a,Ot).push(m);ne(this,Ot,[])}else a=this;a!==null&&(un.clear(),ue(d=a,_e,Lo).call(d))},Kc=function(e,t,r){e.f^=We;for(var s=e.first;s!==null;){var i=s.f,a=(i&(jt|Dn))!==0,l=a&&(i&We)!==0,c=l||(i&yt)!==0||P(this,Tn).has(s);if(!c&&s.fn!==null){a?s.f^=We:i&us?t.push(s):Ri(s)&&(i&Yt&&P(this,nn).add(s),ys(s));var h=s.first;if(h!==null){s=h;continue}}for(;s!==null;){var d=s.next;if(d!==null){s=d;break}s=s.parent}}},Qm=function(){for(var e=P(this,yr);e!==null;){if(!e.is_fork){for(const[t,[,r]]of this.current)if(e.current.has(t)&&!r)return e}e=P(e,yr)}return null},Jm=function(e){var r;for(const[s,i]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,i);for(const[s,i]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(P(e,Hn),P(e,nn));const t=s=>{var i=s.reactions;if(i!==null&&!(s.f&ct&&!(s.f&(je|$t))))for(const c of i){var a=c.f;if(a&ct)t(c);else{var l=c;a&(ds|Yt)&&!this.async_deriveds.has(l)&&(P(this,nn).delete(l),Le(l,je),this.schedule(l))}}};for(const s of this.current.keys())t(s);this.oncommit(()=>e.discard()),ue(r=e,_e,xo).call(r),G=this,ue(this,_e,Lo).call(this)},hi=function(e){for(var t=0;t<e.length;t+=1)ch(e[t],P(this,Hn),P(this,nn))},_A=function(){var m,w;for(let T=Ml;T!==null;T=P(T,Qr)){var e=T.id<this.id,t=[];for(const[b,[N,C]]of this.current){if(T.current.has(b)){var r=T.current.get(b)[0];if(e&&N!==r)T.current.set(b,[N,C]);else continue}t.push(b)}if(e)for(const[b,N]of this.async_deriveds){const C=T.async_deriveds.get(b);C&&N.promise.then(C.resolve).catch(C.reject)}var s=[...T.current.keys()].filter(b=>!T.current.get(b)[1]);if(!(!P(T,qs)||s.length===0)){var i=s.filter(b=>!this.current.has(b));if(i.length===0)e&&T.discard();else if(t.length>0){if(e)for(const b of P(this,Gs))T.unskip_effect(b,N=>{var C;N.f&(Yt|ds)?T.schedule(N):ue(C=T,_e,hi).call(C,[N])});T.activate();var a=new Set,l=new Map;for(var c of t)vh(c,i,a,l);l=new Map;var h=[...T.current].filter(([b,N])=>{const C=this.current.get(b);return C?C[0]!==N[0]||C[1]!==N[1]:!0}).map(([b])=>b);if(h.length>0)for(const b of P(this,uo))!(b.f&(At|yt|$o))&&Fl(b,h,l)&&(b.f&(ds|Yt)?(Le(b,je),T.schedule(b)):P(T,Hn).add(b));if(P(T,Ot).length>0&&!P(T,Jr)){T.apply();for(var d of ue(m=T,_e,Wc).call(m))ue(w=T,_e,Kc).call(w,d,[],[])}T.deactivate()}}}},xo=function(){if(this.linked){var e=P(this,yr),t=P(this,Qr);e===null?Ml=t:ne(e,Qr,t),t===null?_s=e:ne(t,yr,e),this.linked=!1}};let Cr=Xa;function xg(n){var e=Ei;Ei=!0;try{for(var t;;){if(Sg(),G===null)return t;G.flush()}}finally{Ei=e}}function Fg(){try{yg()}catch(n){cn(n,Ll)}}let Zt=null;function _h(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if(!(r.f&(At|yt))&&Ri(r)&&(Zt=new Set,ys(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Dh(r),(Zt==null?void 0:Zt.size)>0)){un.clear();for(const s of Zt){if(s.f&(At|yt))continue;const i=[s];let a=s.parent;for(;a!==null;)Zt.has(a)&&(Zt.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];c.f&(At|yt)||ys(c)}}Zt.clear()}}Zt=null}}function vh(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;i&ct?vh(s,e,t,r):i&(ds|Yt)&&!(i&je)&&Fl(s,e,r)&&(Le(s,je),Ul(s))}}function Fl(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(kr.call(e,s))return!0;if(s.f&ct&&Fl(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function Ul(n){G.schedule(n)}function yh(n,e){if(!(n.f&jt&&n.f&We)){n.f&je?e.d.push(n):n.f&$t&&e.m.push(n),Le(n,We);for(var t=n.first;t!==null;)yh(t,e),t=t.next}}function Eh(n){Le(n,We);for(var e=n.first;e!==null;)Eh(e),e=e.next}let Jo=new Set;const un=new Map;let wh=!1;function Zn(n,e){var t={f:0,v:n,reactions:null,equals:ah,rv:0,wv:0};return t}function $e(n,e){const t=Zn(n);return Mh(t),t}function Ug(n,e=!1,t=!0){var s;const r=Zn(n);return e||(r.equals=lh),gi&&t&&Ve!==null&&Ve.l!==null&&((s=Ve.l).s??(s.s=[])).push(r),r}function re(n,e,t=!1){le!==null&&(!en||le.f&$o)&&_i()&&le.f&(ct|Yt|ds|$o)&&(dn===null||!dn.has(n))&&Tg();let r=t?Nn(e):e;return vs(n,r,Qo)}var Dr=null,Bl=0;function vs(n,e,t=null){if(!n.equals(e)){tr?un.set(n,e):un.has(n)||un.set(n,n.v);var r=Cr.ensure();if(r.capture(n,e),n.f&ct){const s=n;n.f&je&&Ol(s),tt===null&&Nl(s)}n.wv=Fh(),Dr=null,Bl=0,Th(n,je,t),Dr=null,_i()&&de!==null&&de.f&We&&!(de.f&(jt|Dn))&&(Ht===null?Xg([n]):Ht.push(n)),!r.is_fork&&Jo.size>0&&!wh&&Bg()}return e}function Bg(){wh=!1;for(const n of Jo){n.f&We&&Le(n,$t);let e;try{e=Ri(n)}catch{e=!0}e&&ys(n)}Jo.clear()}function Ti(n){re(n,n.v+1)}function Th(n,e,t){var r=n.reactions;if(r!==null){var s=_i(),i=r.length;if(Bl+=i,Bl>1e5&&Dr===null&&(Dr=new Set),Dr!==null){if(Dr.has(n))return;Dr.add(n)}for(var a=0;a<i;a++){var l=r[a],c=l.f;if(!(!s&&l===de)){var h=(c&je)===0;if(h&&Le(l,e),c&$o)Jo.add(l);else if(c&ct){var d=l;tt==null||tt.delete(d),Th(d,$t,t)}else if(h){var m=l;c&Yt&&Zt!==null&&Zt.add(m),t!==null?t.push(m):Ul(m)}}}}}function Nn(n){if(typeof n!="object"||n===null||ps in n||ih in n)return n;const e=Bo(n);if(e!==eh&&e!==Ym)return n;var t=new Map,r=ke(n),s=$e(0),i=Mr,a=l=>{if(Mr===i)return l();var c=le,h=Mr;zt(null),xh(i);var d=l();return zt(c),xh(h),d};return r&&t.set("length",$e(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Eg();var d=t.get(c);return d===void 0?a(()=>{var m=$e(h.value);return t.set(c,m),m}):re(d,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const d=a(()=>$e(Ke));t.set(c,d),Ti(s)}}else re(h,Ke),Ti(s);return!0},get(l,c,h){var T;if(c===ps)return n;var d=t.get(c),m=c in l;if(d===void 0&&(!m||(T=fi(l,c))!=null&&T.writable)&&(d=a(()=>{var b=Nn(m?l[c]:Ke),N=$e(b);return N}),t.set(c,d)),d!==void 0){var w=v(d);return w===Ke?void 0:w}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var w;(w=this.has)==null||w.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),d=t.get(c);if(d!==void 0){var m=v(d);if(m===Ke)return;if(h&&"value"in h)h.value=m;else return{enumerable:!0,configurable:!0,value:m,writable:!0}}return h},has(l,c){var w;if(c===ps)return!0;var h=t.get(c),d=h!==void 0&&h.v!==Ke||Reflect.has(l,c);if(h!==void 0||de!==null&&(!d||(w=fi(l,c))!=null&&w.writable)){h===void 0&&(h=a(()=>{var T=d?Nn(l[c]):Ke,b=$e(T);return b}),t.set(c,h));var m=v(h);if(m===Ke)return!1}return d},set(l,c,h,d){var z;var m=t.get(c),w=c in l;if(r&&c==="length")for(var T=h;T<m.v;T+=1){var b=t.get(T+"");b!==void 0?re(b,Ke):T in l&&(b=a(()=>$e(Ke)),t.set(T+"",b))}if(m===void 0)(!w||(z=fi(l,c))!=null&&z.writable)&&(m=a(()=>$e(void 0)),re(m,Nn(h)),t.set(c,m));else{w=m.v!==Ke;var N=a(()=>Nn(h));re(m,N)}var C=Reflect.getOwnPropertyDescriptor(l,c);if(C!=null&&C.set&&C.set.call(d,h),!w){if(r&&typeof c=="string"){var U=t.get("length"),K=Number(c);Number.isInteger(K)&&K>=U.v&&re(U,K+1)}Ti(s)}return!0},ownKeys(l){v(s);var c=Reflect.ownKeys(l).filter(m=>{var w=t.get(m);return w===void 0||w.v!==Ke});for(var[h,d]of t)d.v!==Ke&&!(h in l)&&c.push(h);return c},setPrototypeOf(){wg()}})}var jl,Ih,Ah,bh;function jg(){if(jl===void 0){jl=window,Ih=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Ah=fi(e,"firstChild").get,bh=fi(e,"nextSibling").get,th(n)&&(n[kl]=void 0,n[zo]=null,n[Pl]=void 0,n.__e=void 0),th(t)&&(t[pi]=void 0)}}function er(n=""){return document.createTextNode(n)}function Ii(n){return Ah.call(n)}function Ai(n){return bh.call(n)}function se(n,e){return Ii(n)}function Vr(n,e=!1){{var t=Ii(n);return t instanceof Comment&&t.data===""?Ai(t):t}}function Ne(n,e=!1){return Ii(n)}function H(n,e=1,t=!1){let r=n;for(;e--;)r=Ai(r);return r}function $g(n){n.textContent=""}function Rh(){return!1}function qg(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function zg(n){var e=de;if(e===null)return le.f|=Xn,n;if(!(e.f&cs)&&!(e.f&us))throw n;cn(n,e)}function cn(n,e){if(!(e!==null&&e.f&At)){for(;e!==null;){if(e.f&Rl&&!(e.f&(At|jo))){if(!(e.f&cs))throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function Sh(n){de===null&&(le===null&&vg(),_g()),tr&&gg()}function Hg(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function hn(n,e){var t=de;t!==null&&t.f&yt&&(n|=yt);var r={ctx:Ve,deps:null,nodes:null,f:n|je|Xt,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};G==null||G.register_created_effect(r);var s=r;if(n&us)wi!==null?wi.push(r):Cr.ensure().schedule(r);else if(e!==null){try{ys(r)}catch(a){throw bt(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&fs)&&(s=s.first,n&Yt&&n&hs&&s!==null&&(s.f|=hs))}if(s!==null&&(s.parent=t,t!==null&&Hg(s,t),le!==null&&le.f&ct&&!(n&Dn))){var i=le;(i.effects??(i.effects=[])).push(s)}return r}function $l(){return le!==null&&!en}function kh(n){const e=hn(di,null);return Le(e,We),e.teardown=n,e}function bi(n){Sh();var e=de.f,t=!le&&(e&jt)!==0&&Ve!==null&&!Ve.i;if(t){var r=Ve;(r.e??(r.e=[])).push(n)}else return Ph(n)}function Ph(n){return hn(us|sh,n)}function Wg(n){return Sh(),hn(di|sh,n)}function Kg(n){Cr.ensure();const e=hn(Dn|fs,n);return(t={})=>new Promise(r=>{t.outro?Nr(e,()=>{bt(e),r(void 0)}):(bt(e),r(void 0))})}function Gg(n){return hn(us,n)}function Qg(n){return hn(ds|fs,n)}function ql(n,e=0){return hn(di|e,n)}function Ue(n,e=[],t=[],r=[]){Dg(r,e,t,s=>{hn(di,()=>{n(...s.map(v))})})}function zl(n,e=0){var t=hn(Yt|e,n);return t}function qt(n){return hn(jt|fs,n)}function Ch(n){var e=n.teardown;if(e!==null){const t=tr,r=le;Oh(!0),zt(null);try{e.call(null)}catch(s){cn(s,n.parent)}finally{Oh(t),zt(r)}}}function Hl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&gs(()=>{s.abort(mi)});var r=t.next;t.f&Dn?t.parent=null:bt(t,e),t=r}}function Jg(n){for(var e=n.first;e!==null;){var t=e.next;e.f&jt||bt(e),e=t}}function bt(n,e=!0){var t=!1;(e||n.f&eg)&&n.nodes!==null&&n.nodes.end!==null&&(Yg(n.nodes.start,n.nodes.end),t=!0),n.f|=jo,Hl(n,e&&!t),Si(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();Ch(n),n.f^=jo,n.f|=At;var s=n.parent;s!==null&&s.first!==null&&Dh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Yg(n,e){for(;n!==null;){var t=n===e?null:Ai(n);n.remove(),n=t}}function Dh(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Nr(n,e,t=!0){var r=[];n.f|=Sl,Vh(n,r,!0);var s=()=>{t&&bt(n),e&&e()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function Vh(n,e,t){if(!(n.f&yt)){n.f^=yt;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var s=n.first;s!==null;){var i=s.next;if(!(s.f&Dn)){var a=(s.f&hs)!==0||(s.f&jt)!==0&&(n.f&Yt)!==0;Vh(s,e,a?t:!1)}s=i}}}function Yo(n){n.f&=~Sl,Nh(n,!0)}function Nh(n,e){if(!(n.f&Sl)&&n.f&yt){n.f^=yt,n.f&We||(Le(n,je),Cr.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&hs)!==0||(t.f&jt)!==0;Nh(t,s?e:!1),t=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||e)&&a.in()}}function Wl(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var s=t===r?null:Ai(t);e.append(t),t=s}}let Xo=!1,tr=!1;function Oh(n){tr=n}let le=null,en=!1;function zt(n){le=n}let de=null;function fn(n){de=n}let dn=null;function Mh(n){le!==null&&(le.f&qo||le.f&ct)&&(dn??(dn=new Set)).add(n)}let Rt=null,Ct=0,Ht=null;function Xg(n){Ht=n}let Lh=1,Or=0,Mr=Or;function xh(n){Mr=n}function Fh(){return++Lh}function Ri(n){var e=n.f;if(e&je)return!0;if(e&$t){for(var t=n.deps,r=t.length,s=0;s<r;s++){var i=t[s];if(Ri(i)&&ph(i),i.wv>n.wv)return!0}e&Xt&&tt===null&&Le(n,We)}return!1}function Uh(n,e,t=!0){var r=n.reactions;if(r!==null&&!(dn!==null&&dn.has(n)))for(var s=0;s<r.length;s++){var i=r[s];i.f&ct?Uh(i,e,!1):e===i&&(t?Le(i,je):i.f&We&&Le(i,$t),Ul(i))}}function Bh(n){var e=Rt,t=Ct,r=Ht,s=le,i=dn,a=Ve,l=en,c=Mr,h=n.f;Rt=null,Ct=0,Ht=null,le=h&(jt|Dn)?null:n,dn=null,ms(n.ctx),en=!1,Mr=++Or,n.ac!==null&&(gs(()=>{n.ac.abort(mi)}),n.ac=null);try{n.f|=qo;var d=n.fn,m=d();n.f|=cs;var w=jh(n);if(_i()&&Ht!==null&&!en&&w!==null&&!(n.f&(ct|$t|je)))for(var T=0;T<Ht.length;T++)Uh(Ht[T],n);if(s!==null&&s!==n){if(Or++,s.deps!==null)for(let b=0;b<t;b+=1)s.deps[b].rv=Or;if(e!==null)for(const b of e)b.rv=Or;Ht!==null&&(r===null?r=Ht:r.push(...Ht))}return n.f&Xn&&(n.f^=Xn),m}catch(b){return jh(n),zg(b)}finally{n.f^=qo,Rt=e,Ct=t,Ht=r,le=s,dn=i,ms(a),en=l,Mr=c}}function jh(n){var s;var e=n.deps,t=G==null?void 0:G.is_fork;if(Rt!==null){var r;if(t||Si(n,Ct),e!==null&&Ct>0)for(e.length=Ct+Rt.length,r=0;r<Rt.length;r++)e[Ct+r]=Rt[r];else n.deps=e=Rt;if($l()&&n.f&Xt)for(r=Ct;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(n)}else!t&&e!==null&&Ct<e.length&&(Si(n,Ct),e.length=Ct);return e}function Zg(n,e){let t=e.reactions;if(t!==null){var r=He.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}if(t===null&&e.f&ct&&(Rt===null||!kr.call(Rt,e))){var i=e;i.f&Xt&&(i.f^=Xt),i.v!==Ke&&Nl(i),i.ac!==null&&gs(()=>{i.ac.abort(mi),i.ac=null,Le(i,je)}),Mg(i),Si(i,0)}}function Si(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)Zg(n,t[r])}function ys(n){var e=n.f;if(!(e&At)){Le(n,We);var t=de,r=Xo;de=n,Xo=(e&(jt|Dn))===0;try{e&(Yt|rh)?Jg(n):Hl(n),Ch(n);var s=Bh(n);n.teardown=typeof s=="function"?s:null,n.wv=Lh;var i}finally{Xo=r,de=t}}}async function e_(){await Promise.resolve(),xg()}function v(n){var e=n.f,t=(e&ct)!==0;if(le!==null&&!en){var r=de!==null&&(de.f&At)!==0;if(!r&&(dn===null||!dn.has(n))){var s=le.deps;if(le.f&qo)n.rv<Or&&(n.rv=Or,Rt===null&&s!==null&&s[Ct]===n?Ct++:Rt===null?Rt=[n]:Rt.push(n));else{le.deps??(le.deps=[]),kr.call(le.deps,n)||le.deps.push(n);var i=n.reactions;i===null?n.reactions=[le]:kr.call(i,le)||i.push(le)}}}if(tr&&un.has(n))return un.get(n);if(t){var a=n;if(tr){var l=a.v;return(!(a.f&We)&&a.reactions!==null||qh(a))&&(l=Ol(a)),un.set(a,l),l}var c=(a.f&Xt)===0&&!en&&le!==null&&(Xo||(le.f&Xt)!==0),h=(a.f&cs)===0;Ri(a)&&(c&&(a.f|=Xt),ph(a)),c&&!h&&(mh(a),$h(a))}if(tt!=null&&tt.has(n))return tt.get(n);if(n.f&Xn)throw n.v;return n.v}function $h(n){if(n.f|=Xt,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&ct&&!(e.f&Xt)&&(mh(e),$h(e))}function qh(n){if(n.v===Ke)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(un.has(e)||e.f&ct&&qh(e))return!0;return!1}function ki(n){var e=en;try{return en=!0,n()}finally{en=e}}function t_(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(ps in n)Kl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&ps in t&&Kl(t)}}}function Kl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{Kl(n[r],e)}catch{}const t=Bo(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Zc(t);for(let s in r){const i=r[s].get;if(i)try{i.call(n)}catch{}}}}}const n_=["touchstart","touchmove"];function r_(n){return n_.includes(n)}const Lr=Symbol("events"),zh=new Set,Gl=new Set;function s_(n,e,t,r={}){function s(i){if(r.capture||Yl.call(e,i),!i.cancelBubble)return gs(()=>t==null?void 0:t.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(s.__removed=!1,Vn(()=>{s.__removed||e.addEventListener(n,s,r)})):e.addEventListener(n,s,r),s}function i_(n,e,t,r,s){var i={capture:r,passive:s},a=s_(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&kh(()=>{a.__removed=!0,e.removeEventListener(n,a,i)})}function Ye(n,e,t){(e[Lr]??(e[Lr]={}))[n]=t}function o_(n){for(var e=0;e<n.length;e++)zh.add(n[e]);for(var t of Gl)t(n)}let Ql=null,Jl=!1;function Yl(n){var N,C;var e=this,t=e.ownerDocument,r=n.type,s=((N=n.composedPath)==null?void 0:N.call(n))||[],i=s[0]||n.target;Ql=n,Jl||(Jl=!0,setTimeout(()=>{Jl=!1,Ql=null}));var a=0,l=Ql===n&&n[Lr];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){n[Lr]=e;return}var h=s.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(i=s[a]||n.target,i!==e){Xc(n,"currentTarget",{configurable:!0,get(){return i||t}});var d=le,m=de;zt(null),fn(null);try{for(var w,T=[];i!==null&&i!==e;){try{var b=(C=i[Lr])==null?void 0:C[r];b!=null&&(!i.disabled||n.target===i)&&b.call(i,n)}catch(U){w?T.push(U):w=U}if(n.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(w){for(let U of T)queueMicrotask(()=>{throw U});throw w}}finally{n[Lr]=e,delete n.currentTarget,zt(d),fn(m)}}}const Xl=((wm=globalThis==null?void 0:globalThis.window)==null?void 0:wm.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function a_(n){return(Xl==null?void 0:Xl.createHTML(n))??n}function l_(n){var e=qg("template");return e.innerHTML=a_(n.replaceAll("<!>","<!---->")),e.content}function Zl(n,e){var t=de;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function Te(n,e){var t=(e&ag)!==0,r=(e&lg)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=l_(i?n:"<!>"+n),t||(s=Ii(s)));var a=r||Ih?document.importNode(s,!0):s.cloneNode(!0);if(t){var l=Ii(a),c=a.lastChild;Zl(l,c)}else Zl(a,a);return a}}function eu(n=""){{var e=er(n+"");return Zl(e,e),e}}function pe(n,e){n!==null&&n.before(e)}function u_(n){let e=0,t=Zn(0),r;return()=>{$l()&&(v(t),ql(()=>(e===0&&(r=ki(()=>n(()=>Ti(t)))),e+=1,()=>{Vn(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Ti(t))})})))}}var c_=hs|fs;function h_(n,e,t,r){new f_(n,e,t,r)}class f_{constructor(e,t,r,s){ie(this,Pe);Bt(this,"parent");Bt(this,"is_pending",!1);Bt(this,"transform_error");ie(this,Wt);ie(this,Dc,null);ie(this,Kt);ie(this,Yr);ie(this,Et);ie(this,Mt,null);ie(this,wt,null);ie(this,Lt,null);ie(this,In,null);ie(this,Xr,0);ie(this,Er,0);ie(this,Qs,!1);ie(this,co,new Set);ie(this,ho,new Set);ie(this,Wn,null);ie(this,Za,u_(()=>(ne(this,Wn,Zn(P(this,Xr))),()=>{ne(this,Wn,null)})));var i;ne(this,Wt,e),ne(this,Kt,t),ne(this,Yr,a=>{var l=de;l.b=this,l.f|=Rl,r(a)}),this.parent=de.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),ne(this,Et,zl(()=>{ue(this,Pe,Qc).call(this)},c_))}defer_effect(e){ch(e,P(this,co),P(this,ho))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!P(this,Kt).pending}update_pending_count(e,t){ue(this,Pe,Jc).call(this,e,t),ne(this,Xr,P(this,Xr)+e),!(!P(this,Wn)||P(this,Qs))&&(ne(this,Qs,!0),Vn(()=>{ne(this,Qs,!1),P(this,Wn)&&vs(P(this,Wn),P(this,Xr))}))}get_effect_pending(){return P(this,Za).call(this),v(P(this,Wn))}error(e){if(!P(this,Kt).onerror&&!P(this,Kt).failed)throw e;G!=null&&G.is_fork?(P(this,Mt)&&G.skip_effect(P(this,Mt)),P(this,wt)&&G.skip_effect(P(this,wt)),P(this,Lt)&&G.skip_effect(P(this,Lt)),G.oncommit(()=>{ue(this,Pe,Yc).call(this,e)})):ue(this,Pe,Yc).call(this,e)}}Wt=new WeakMap,Dc=new WeakMap,Kt=new WeakMap,Yr=new WeakMap,Et=new WeakMap,Mt=new WeakMap,wt=new WeakMap,Lt=new WeakMap,In=new WeakMap,Xr=new WeakMap,Er=new WeakMap,Qs=new WeakMap,co=new WeakMap,ho=new WeakMap,Wn=new WeakMap,Za=new WeakMap,Pe=new WeakSet,vA=function(){try{ne(this,Mt,qt(()=>P(this,Yr).call(this,P(this,Wt))))}catch(e){this.error(e)}},yA=function(e){const t=P(this,Kt).failed,{reset:r,invoke_onerror:s}=ue(this,Pe,Gc).call(this,e);Vn(s),t&&ne(this,Lt,qt(()=>{t(P(this,Wt),()=>e,()=>r)}))},Gc=function(e){var t=!1,r=!1;const s=()=>{if(t){hg();return}t=!0,r&&Ig(),P(this,Lt)!==null&&Nr(P(this,Lt),()=>{ne(this,Lt,null)}),ue(this,Pe,Al).call(this,()=>{ue(this,Pe,Qc).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=P(this,Kt)).onerror)==null||l.call(a,e,s),r=!1}catch(c){cn(c,P(this,Et)&&P(this,Et).parent)}}}},EA=function(){const e=P(this,Kt).pending;e&&(this.is_pending=!0,ne(this,wt,qt(()=>e(P(this,Wt)))),Vn(()=>{var t=ne(this,In,document.createDocumentFragment()),r=er(),s=!1;if(t.append(r),ne(this,Mt,ue(this,Pe,Al).call(this,()=>{try{return qt(()=>P(this,Yr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){cn(a,P(this,Et).parent)}return null}})),P(this,Mt)===null){ne(this,In,null),s&&ue(this,Pe,Fo).call(this,G);return}P(this,Er)===0&&(P(this,Wt).before(t),ne(this,In,null),Nr(P(this,wt),()=>{ne(this,wt,null)}),ue(this,Pe,Fo).call(this,G))}))},Qc=function(){try{if(this.is_pending=this.has_pending_snippet(),ne(this,Er,0),ne(this,Xr,0),ne(this,Mt,qt(()=>{P(this,Yr).call(this,P(this,Wt))})),P(this,Er)>0){var e=ne(this,In,document.createDocumentFragment());Wl(P(this,Mt),e);const t=P(this,Kt).pending;ne(this,wt,qt(()=>t(P(this,Wt))))}else ue(this,Pe,Fo).call(this,G)}catch(t){this.error(t)}},Fo=function(e){this.is_pending=!1,e.transfer_effects(P(this,co),P(this,ho))},Al=function(e){var t=de,r=le,s=Ve;fn(P(this,Et)),zt(P(this,Et)),ms(P(this,Et).ctx);try{return Cr.ensure(),e()}finally{fn(t),zt(r),ms(s)}},Jc=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&ue(r=this.parent,Pe,Jc).call(r,e,t);return}ne(this,Er,P(this,Er)+e),P(this,Er)===0&&(ue(this,Pe,Fo).call(this,t),P(this,wt)&&Nr(P(this,wt),()=>{ne(this,wt,null)}),P(this,In)&&(P(this,Wt).before(P(this,In)),ne(this,In,null)))},Yc=function(e){P(this,Mt)&&(bt(P(this,Mt)),ne(this,Mt,null)),P(this,wt)&&(bt(P(this,wt)),ne(this,wt,null)),P(this,Lt)&&(bt(P(this,Lt)),ne(this,Lt,null));let t=P(this,Kt).failed;const r=s=>{const{reset:i,invoke_onerror:a}=ue(this,Pe,Gc).call(this,s);a(),t&&ne(this,Lt,ue(this,Pe,Al).call(this,()=>{try{return qt(()=>{var l=de;l.b=this,l.f|=Rl,t(P(this,Wt),()=>s,()=>i)})}catch(l){return cn(l,P(this,Et).parent),null}}))};Vn(()=>{var s;try{s=this.transform_error(e)}catch(i){cn(i,P(this,Et)&&P(this,Et).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>cn(i,P(this,Et)&&P(this,Et).parent)):r(s)})};function me(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[pi]??(n[pi]=n.nodeValue))&&(n[pi]=t,n.nodeValue=`${t}`)}function d_(n,e){return p_(n,e)}const Zo=new Map;function p_(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:a=!0,transformError:l}){jg();var c=void 0,h=Kg(()=>{var d=t??e.appendChild(er());h_(d,{pending:()=>{}},T=>{Cl({});var b=Ve;i&&(b.c=i),s&&(r.$$events=s),c=n(T,r)||Vl(),Dl()},l);var m=new Set,w=T=>{for(var b=0;b<T.length;b++){var N=T[b];if(!m.has(N)){m.add(N);var C=r_(N);for(const z of[e,document]){var U=Zo.get(z);U===void 0&&(U=new Map,Zo.set(z,U));var K=U.get(N);K===void 0?(z.addEventListener(N,Yl,{passive:C}),U.set(N,1)):U.set(N,K+1)}}}};return w(Uo(zh)),Gl.add(w),()=>{var C;for(var T of m)for(const U of[e,document]){var b=Zo.get(U),N=b.get(T);--N==0?(U.removeEventListener(T,Yl),b.delete(T),b.size===0&&Zo.delete(U)):b.set(T,N)}Gl.delete(w),d!==t&&((C=d.parentNode)==null||C.removeChild(d))}});return m_.set(c,h),c}let m_=new WeakMap;class g_{constructor(e,t=!0){Bt(this,"anchor");ie(this,rn,new Map);ie(this,An,new Map);ie(this,xt,new Map);ie(this,Zr,new Set);ie(this,fo,!0);ie(this,po,e=>{if(P(this,rn).has(e)){var t=P(this,rn).get(e),r=P(this,An).get(t);if(r)Yo(r),P(this,Zr).delete(t);else{var s=P(this,xt).get(t);s&&(Yo(s.effect),P(this,An).set(t,s.effect),P(this,xt).delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of P(this,rn)){if(P(this,rn).delete(i),i===e)break;const l=P(this,xt).get(a);l&&(bt(l.effect),P(this,xt).delete(a))}for(const[i,a]of P(this,An)){if(i===t||P(this,Zr).has(i))continue;const l=()=>{if(Array.from(P(this,rn).values()).includes(i)){var h=document.createDocumentFragment();Wl(a,h),h.append(er()),P(this,xt).set(i,{effect:a,fragment:h})}else bt(a);P(this,Zr).delete(i),P(this,An).delete(i)};P(this,fo)||!r?(P(this,Zr).add(i),Nr(a,l,!1)):l()}}});ie(this,el,e=>{P(this,rn).delete(e);const t=Array.from(P(this,rn).values());for(const[r,s]of P(this,xt))t.includes(r)||(bt(s.effect),P(this,xt).delete(r))});this.anchor=e,ne(this,fo,t)}ensure(e,t){var r=G,s=Rh();if(t&&!P(this,An).has(e)&&!P(this,xt).has(e))if(s){var i=document.createDocumentFragment(),a=er();i.append(a),P(this,xt).set(e,{effect:qt(()=>t(a)),fragment:i})}else P(this,An).set(e,qt(()=>t(this.anchor)));if(P(this,rn).set(r,e),s){for(const[l,c]of P(this,An))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of P(this,xt))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(P(this,po)),r.ondiscard(P(this,el))}else P(this,po).call(this,r)}}rn=new WeakMap,An=new WeakMap,xt=new WeakMap,Zr=new WeakMap,fo=new WeakMap,po=new WeakMap,el=new WeakMap;function Dt(n,e,t=!1){var r=new g_(n),s=t?hs:0;function i(a,l){r.ensure(a,l)}zl(()=>{var a=!1;e((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}function On(n,e){return e}function __(n,e,t){for(var r=[],s=e.length,i,a=e.length,l=0;l<s;l++){let m=e[l];Nr(m,()=>{if(i){if(i.pending.delete(m),i.done.add(m),i.pending.size===0){var w=n.outrogroups;tu(n,Uo(i.done)),w.delete(i),w.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,d=h.parentNode;$g(d),d.append(h),n.items.clear()}tu(n,e,!c)}else i={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(i)}function tu(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var s=0;s<e.length;s++){var i=e[s];if(r!=null&&r.has(i)){i.f|=ln;const a=document.createDocumentFragment();Wl(i,a)}else bt(e[s],t)}}var Hh;function pn(n,e,t,r,s,i=null){var a=n,l=new Map,c=(e&oh)!==0;if(c){var h=n;a=h.appendChild(er())}var d=null,m=dh(()=>{var z=t();return ke(z)?z:z==null?[]:Uo(z)}),w,T=new Map,b=!0;function N(z){K.effect.f&At||(K.pending.delete(z),K.fallback=d,v_(K,w,a,e,r),d!==null&&(w.length===0?d.f&ln?(d.f^=ln,Ci(d,null,a)):Yo(d):Nr(d,()=>{d=null})))}function C(z){K.pending.delete(z)}var U=zl(()=>{w=v(m);for(var z=w.length,te=new Set,Ce=G,we=Rh(),I=0;I<z;I+=1){var g=w[I],y=r(g,I),_=b?null:l.get(y);_?(_.v&&vs(_.v,g),_.i&&vs(_.i,I),we&&Ce.unskip_effect(_.e)):(_=y_(l,b?a:Hh??(Hh=er()),g,y,I,s,e,t),b||(_.e.f|=ln),l.set(y,_)),te.add(y)}if(z===0&&i&&!d&&(b?d=qt(()=>i(a)):(d=qt(()=>i(Hh??(Hh=er()))),d.f|=ln)),z>te.size&&mg(),!b)if(T.set(Ce,te),we){for(const[R,S]of l)te.has(R)||Ce.skip_effect(S.e);Ce.oncommit(N),Ce.ondiscard(C)}else N(Ce);v(m)}),K={effect:U,items:l,pending:T,outrogroups:null,fallback:d};b=!1}function Pi(n){for(;n!==null&&!(n.f&jt);)n=n.next;return n}function v_(n,e,t,r,s){var _,R,S,E,ot,Gt,Kn,bn,Qt;var i=(r&ig)!==0,a=e.length,l=n.items,c=Pi(n.effect.first),h,d=null,m,w=[],T=[],b,N,C,U;if(i)for(U=0;U<a;U+=1)b=e[U],N=s(b,U),C=l.get(N).e,C.f&ln||((R=(_=C.nodes)==null?void 0:_.a)==null||R.measure(),(m??(m=new Set)).add(C));for(U=0;U<a;U+=1){if(b=e[U],N=s(b,U),C=l.get(N).e,n.outrogroups!==null)for(const Tt of n.outrogroups)Tt.pending.delete(C),Tt.done.delete(C);if(C.f&yt&&(Yo(C),i&&((E=(S=C.nodes)==null?void 0:S.a)==null||E.unfix(),(m??(m=new Set)).delete(C))),C.f&ln)if(C.f^=ln,C===c)Ci(C,null,t);else{var K=d?d.next:c;C===n.effect.last&&(n.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),nr(n,d,C),nr(n,C,K),Ci(C,K,t),d=C,w=[],T=[],c=Pi(d.next);continue}if(C!==c){if(h!==void 0&&h.has(C)){if(w.length<T.length){var z=T[0],te;d=z.prev;var Ce=w[0],we=w[w.length-1];for(te=0;te<w.length;te+=1)Ci(w[te],z,t);for(te=0;te<T.length;te+=1)h.delete(T[te]);nr(n,Ce.prev,we.next),nr(n,d,Ce),nr(n,we,z),c=z,d=we,U-=1,w=[],T=[]}else h.delete(C),Ci(C,c,t),nr(n,C.prev,C.next),nr(n,C,d===null?n.effect.first:d.next),nr(n,d,C),d=C;continue}for(w=[],T=[];c!==null&&c!==C;)(h??(h=new Set)).add(c),T.push(c),c=Pi(c.next);if(c===null)continue}C.f&ln||w.push(C),d=C,c=Pi(C.next)}if(n.outrogroups!==null){for(const Tt of n.outrogroups)Tt.pending.size===0&&(tu(n,Uo(Tt.done)),(ot=n.outrogroups)==null||ot.delete(Tt));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var I=[];if(h!==void 0)for(C of h)C.f&yt||I.push(C);for(;c!==null;)!(c.f&yt)&&c!==n.fallback&&I.push(c),c=Pi(c.next);var g=I.length;if(g>0){var y=r&oh&&a===0?t:null;if(i){for(U=0;U<g;U+=1)(Kn=(Gt=I[U].nodes)==null?void 0:Gt.a)==null||Kn.measure();for(U=0;U<g;U+=1)(Qt=(bn=I[U].nodes)==null?void 0:bn.a)==null||Qt.fix()}__(n,I,y)}}i&&Vn(()=>{var Tt,sn;if(m!==void 0)for(C of m)(sn=(Tt=C.nodes)==null?void 0:Tt.a)==null||sn.apply()})}function y_(n,e,t,r,s,i,a,l){var c=a&rg?a&og?Zn(t):Ug(t,!1,!1):null,h=a&sg?Zn(s):null;return{v:c,i:h,e:qt(()=>(i(e,c??t,h??s,l),()=>{n.delete(r)}))}}function Ci(n,e,t){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&!(e.f&ln)?e.nodes.start:t;r!==null;){var a=Ai(r);if(i.before(r),r===s)return;r=a}}function nr(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Wh=[...` 	
\r\f \v\uFEFF`];function E_(n,e,t){var r=n==null?"":""+n;if(t){for(var s of Object.keys(t))if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||Wh.includes(r[a-1]))&&(l===r.length||Wh.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function w_(n,e){return n==null?null:String(n)}function ea(n,e,t,r,s,i){var a=n[kl];if(a!==t||a===void 0){var l=E_(t,r,i);l==null?n.removeAttribute("class"):n.className=l,n[kl]=t}else if(i&&s!==i)for(var c in i){var h=!!i[c];(s==null||h!==!!s[c])&&n.classList.toggle(c,h)}return i}function nu(n,e,t,r){var s=n[Pl];if(s!==e){var i=w_(e);i==null?n.removeAttribute("style"):n.style.cssText=i,n[Pl]=e}return r}const T_=Symbol("is custom element"),I_=Symbol("is html"),A_=ng?"progress":"PROGRESS";function ru(n,e){var t=Kh(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==A_)||(n.value=e??"")}function tn(n,e,t,r){var s=Kh(n);s[e]!==(s[e]=t)&&(e==="loading"&&(n[tg]=t),t==null?n.removeAttribute(e):typeof t!="string"&&b_(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Kh(n){return n[zo]??(n[zo]={[T_]:n.nodeName.includes("-"),[I_]:n.namespaceURI===ug})}var Gh=new Map;function b_(n){var e=n.getAttribute("is")||n.nodeName,t=Gh.get(e);if(t)return t;Gh.set(e,t=new Set);for(var r,s=n,i=Element.prototype;i!==s;){r=Zc(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);s=Bo(s)}return t}function R_(n,e,t=e){var r=new WeakSet;Cg(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=su(n)?iu(i):i,t(i),G!==null&&r.add(G),await e_(),i!==(i=e())){var a=n.selectionStart,l=n.selectionEnd,c=n.value.length;if(n.value=i??"",l!==null){var h=n.value.length;a===l&&l===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),ki(e)==null&&n.value&&(t(su(n)?iu(n.value):n.value),G!==null&&r.add(G)),ql(()=>{var s=e();if(n===document.activeElement){var i=G;if(r.has(i))return}su(n)&&s===iu(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function su(n){var e=n.type;return e==="number"||e==="range"}function iu(n){return n===""?null:+n}function ou(n,e){return n===e||(n==null?void 0:n[ps])===e}function S_(n=Vl(),e,t,r){var s=Ve.r,i=de;return Gg(()=>{var a,l;return ql(()=>{a=l,l=[],ki(()=>{ou(t(...l),n)||(e(n,...l),a&&ou(t(...a),n)&&e(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&jo;)c=c.parent;const h=()=>{l&&ou(t(...l),n)&&e(null,...l)},d=c.teardown;c.teardown=()=>{h(),d==null||d()}}}),n}function k_(n=!1){const e=Ve,t=e.l.u;if(!t)return;let r=()=>t_(e.s);if(n){let s=0,i={};const a=Go(()=>{let l=!1;const c=e.s;for(const h in c)c[h]!==i[h]&&(i[h]=c[h],l=!0);return l&&s++,s});r=()=>v(a)}t.b.length&&Wg(()=>{Qh(e,r),bl(t.b)}),bi(()=>{const s=ki(()=>t.m.map(Zm));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&bi(()=>{Qh(e,r),bl(t.a)})}function Qh(n,e){if(n.l.s)for(const t of n.l.s)v(t);e()}function P_(n){var e=Zn(0);return function(){return arguments.length===1?(re(e,v(e)+1),arguments[0]):(v(e),n())}}function C_(n,e,t,r){var s=r,i=!0,a=()=>(i&&(i=!1,s=r),s),l;l=n[e],l===void 0&&r!==void 0&&(l=a());var c;return c=()=>{var h=n[e];return h===void 0?a():(i=!0,h)},c}function D_(n){Ve===null&&dg(),gi&&Ve.l!==null?V_(Ve).m.push(n):bi(()=>{const e=ki(n);if(typeof e=="function")return e})}function V_(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const N_="5";typeof window<"u"&&((Tm=window.__svelte??(window.__svelte={})).v??(Tm.v=new Set)).add(N_),Ag();var Jh={};/**
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
 */const Yh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},O_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(w=64)),r.push(t[d],t[m],t[w],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):O_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new M_;const w=i<<2|l>>4;if(r.push(w),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class M_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L_=function(n){const e=Yh(n);return Xh.encodeByteArray(e,!0)},ta=function(n){return L_(n).replace(/\./g,"")},Zh=function(n){try{return Xh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function x_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F_=()=>x_().__FIREBASE_DEFAULTS__,U_=()=>{if(typeof process>"u"||typeof Jh>"u")return;const n=Jh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},B_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zh(n[1]);return e&&JSON.parse(e)},na=()=>{try{return F_()||U_()||B_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ef=n=>{var e,t;return(t=(e=na())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},j_=n=>{const e=ef(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tf=()=>{var n;return(n=na())===null||n===void 0?void 0:n.config},nf=n=>{var e;return(e=na())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class $_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function q_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ta(JSON.stringify(t)),ta(JSON.stringify(a)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function z_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function H_(){var n;const e=(n=na())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function G_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q_(){const n=ft();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function J_(){return!H_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function X_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Z_="FirebaseError";class Mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Z_,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ev(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Mn(s,l,r)}}function ev(n,e){return n.replace(tv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tv=/\{\$([^}]+)}/g;function nv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ra(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(rf(i)&&rf(a)){if(!ra(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rf(n){return n!==null&&typeof n=="object"}/**
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
 */function Vi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rv(n,e){const t=new sv(n,e);return t.subscribe.bind(t)}class sv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");iv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=au),s.error===void 0&&(s.error=au),s.complete===void 0&&(s.complete=au);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function au(){}/**
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
 */function St(n){return n&&n._delegate?n._delegate:n}class xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class ov{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lv(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:av(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function av(n){return n===Fr?void 0:n}function lv(n){return n.instantiationMode==="EAGER"}/**
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
 */class uv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ov(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const cv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},hv=he.INFO,fv={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},dv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=fv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lu{constructor(e){this.name=e,this._logLevel=hv,this._logHandler=dv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const pv=(n,e)=>e.some(t=>n instanceof t);let sf,of;function mv(){return sf||(sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gv(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const af=new WeakMap,uu=new WeakMap,lf=new WeakMap,cu=new WeakMap,hu=new WeakMap;function _v(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(rr(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&af.set(t,n)}).catch(()=>{}),hu.set(e,n),e}function vv(n){if(uu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});uu.set(n,e)}let fu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yv(n){fu=n(fu)}function Ev(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(du(this),e,...t);return lf.set(r,e.sort?e.sort():[e]),rr(r)}:gv().includes(n)?function(...e){return n.apply(du(this),e),rr(af.get(this))}:function(...e){return rr(n.apply(du(this),e))}}function wv(n){return typeof n=="function"?Ev(n):(n instanceof IDBTransaction&&vv(n),pv(n,mv())?new Proxy(n,fu):n)}function rr(n){if(n instanceof IDBRequest)return _v(n);if(cu.has(n))return cu.get(n);const e=wv(n);return e!==n&&(cu.set(n,e),hu.set(e,n)),e}const du=n=>hu.get(n);function Tv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=rr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(rr(a.result),c.oldVersion,c.newVersion,rr(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Iv=["get","getKey","getAll","getAllKeys","count"],Av=["put","add","delete","clear"],pu=new Map;function uf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pu.get(e))return pu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Av.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Iv.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return pu.set(e,i),i}yv(n=>({...n,get:(e,t,r)=>uf(e,t)||n.get(e,t,r),has:(e,t)=>!!uf(e,t)||n.has(e,t)}));/**
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
 */class bv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Rv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",cf="0.10.13";/**
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
 */const Ln=new lu("@firebase/app"),Sv="@firebase/app-compat",kv="@firebase/analytics-compat",Pv="@firebase/analytics",Cv="@firebase/app-check-compat",Dv="@firebase/app-check",Vv="@firebase/auth",Nv="@firebase/auth-compat",Ov="@firebase/database",Mv="@firebase/data-connect",Lv="@firebase/database-compat",xv="@firebase/functions",Fv="@firebase/functions-compat",Uv="@firebase/installations",Bv="@firebase/installations-compat",jv="@firebase/messaging",$v="@firebase/messaging-compat",qv="@firebase/performance",zv="@firebase/performance-compat",Hv="@firebase/remote-config",Wv="@firebase/remote-config-compat",Kv="@firebase/storage",Gv="@firebase/storage-compat",Qv="@firebase/firestore",Jv="@firebase/vertexai-preview",Yv="@firebase/firestore-compat",Xv="firebase",Zv="10.14.1";/**
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
 */const gu="[DEFAULT]",ey={[mu]:"fire-core",[Sv]:"fire-core-compat",[Pv]:"fire-analytics",[kv]:"fire-analytics-compat",[Dv]:"fire-app-check",[Cv]:"fire-app-check-compat",[Vv]:"fire-auth",[Nv]:"fire-auth-compat",[Ov]:"fire-rtdb",[Mv]:"fire-data-connect",[Lv]:"fire-rtdb-compat",[xv]:"fire-fn",[Fv]:"fire-fn-compat",[Uv]:"fire-iid",[Bv]:"fire-iid-compat",[jv]:"fire-fcm",[$v]:"fire-fcm-compat",[qv]:"fire-perf",[zv]:"fire-perf-compat",[Hv]:"fire-rc",[Wv]:"fire-rc-compat",[Kv]:"fire-gcs",[Gv]:"fire-gcs-compat",[Qv]:"fire-fst",[Yv]:"fire-fst-compat",[Jv]:"fire-vertex","fire-js":"fire-js",[Xv]:"fire-js-all"};/**
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
 */const sa=new Map,ty=new Map,_u=new Map;function hf(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Es(n){const e=n.name;if(_u.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;_u.set(e,n);for(const t of sa.values())hf(t,n);for(const t of ty.values())hf(t,n);return!0}function vu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sr(n){return n.settings!==void 0}/**
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
 */const ny={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Di("app","Firebase",ny);/**
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
 */class ry{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=Zv;function ff(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(t||(t=tf()),!t)throw ir.create("no-options");const i=sa.get(s);if(i){if(ra(t,i.options)&&ra(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const a=new uv(s);for(const c of _u.values())a.addComponent(c);const l=new ry(t,r,a);return sa.set(s,l),l}function df(n=gu){const e=sa.get(n);if(!e&&n===gu&&tf())return ff();if(!e)throw ir.create("no-app",{appName:n});return e}function or(n,e,t){var r;let s=(r=ey[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Es(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sy="firebase-heartbeat-database",iy=1,Ni="firebase-heartbeat-store";let yu=null;function pf(){return yu||(yu=Tv(sy,iy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw ir.create("idb-open",{originalErrorMessage:n.message})})),yu}async function oy(n){try{const t=(await pf()).transaction(Ni),r=await t.objectStore(Ni).get(gf(n));return await t.done,r}catch(e){if(e instanceof Mn)Ln.warn(e.message);else{const t=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function mf(n,e){try{const r=(await pf()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,gf(n)),await r.done}catch(t){if(t instanceof Mn)Ln.warn(t.message);else{const r=ir.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function gf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ay=1024,ly=30*24*60*60*1e3;class uy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_f();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ly}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_f(),{heartbeatsToSend:r,unsentEntries:s}=cy(this._heartbeatsCache.heartbeats),i=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ln.warn(t),""}}}function _f(){return new Date().toISOString().substring(0,10)}function cy(n,e=ay){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),vf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?X_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return mf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return mf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vf(n){return ta(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function fy(n){Es(new xr("platform-logger",e=>new bv(e),"PRIVATE")),Es(new xr("heartbeat",e=>new uy(e),"PRIVATE")),or(mu,cf,n),or(mu,cf,"esm2017"),or("fire-js","")}fy("");var dy="firebase",py="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(dy,py,"app");function Eu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}typeof SuppressedError=="function"&&SuppressedError;function yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const my=yf,Ef=new Di("auth","Firebase",yf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new lu("@firebase/auth");function gy(n,...e){ia.logLevel<=he.WARN&&ia.warn(`Auth (${ws}): ${n}`,...e)}function oa(n,...e){ia.logLevel<=he.ERROR&&ia.error(`Auth (${ws}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,...e){throw wu(n,...e)}function mn(n,...e){return wu(n,...e)}function wf(n,e,t){const r=Object.assign(Object.assign({},my()),{[e]:t});return new Di("auth","Firebase",r).create(e,{appName:n.name})}function Ur(n){return wf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ef.create(n,...e)}function Y(n,e,...t){if(!n)throw wu(e,...t)}function Fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oa(e),new Error(e)}function Un(n,e){n||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _y(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||K_()||"connection"in navigator)?navigator.onLine:!0}function yy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Un(t>e,"Short delay should be less than long delay!"),this.isMobile=z_()||G_()}get(){return vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n,e){Un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new Oi(3e4,6e4);function Au(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ts(n,e,t,r,s={}){return Af(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Vi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return W_()||(h.referrerPolicy="no-referrer"),If.fetch()(bf(n,n.config.apiHost,t,l),h)})}async function Af(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ey),e);try{const s=new Iy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw aa(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw aa(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw aa(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wf(n,d,h);xn(n,d)}}catch(s){if(s instanceof Mn)throw s;xn(n,"network-request-failed",{message:String(s)})}}async function Ty(n,e,t,r,s={}){const i=await Ts(n,e,t,r,s);return"mfaPendingCredential"in i&&xn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function bf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Iu(n.config,s):`${n.config.apiScheme}://${s}`}class Iy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=mn(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(n,e){return Ts(n,"POST","/v1/accounts:delete",e)}async function Rf(n,e){return Ts(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function by(n,e=!1){const t=St(n),r=await t.getIdToken(e),s=Ru(r);Y(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi(bu(s.auth_time)),issuedAtTime:Mi(bu(s.iat)),expirationTime:Mi(bu(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bu(n){return Number(n)*1e3}function Ru(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zh(t);return s?JSON.parse(s):(oa("Failed to decode base64 JWT payload"),null)}catch(s){return oa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sf(n){const e=Ru(n);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mn&&Ry(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ry({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Li(n,Rf(t,{idToken:r}));Y(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kf(i.providerUserInfo):[],l=Py(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function ky(n){const e=St(n);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Py(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kf(n){return n.map(e=>{var{providerId:t}=e,r=Eu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(n,e){const t=await Af(n,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=bf(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",If.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Dy(n,e){return Ts(n,"POST","/v2/accounts:revokeToken",Au(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const t=Sf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Cy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Is;return r&&(Y(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n,e){Y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Li(this,this.stsTokenManager.getToken(this.auth,e));return Y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return by(this,e)}reload(){return ky(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sr(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await Li(this,Ay(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,K=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:z,emailVerified:te,isAnonymous:Ce,providerData:we,stsTokenManager:I}=t;Y(z&&I,e,"internal-error");const g=Is.fromJSON(this.name,I);Y(typeof z=="string",e,"internal-error"),ar(m,e.name),ar(w,e.name),Y(typeof te=="boolean",e,"internal-error"),Y(typeof Ce=="boolean",e,"internal-error"),ar(T,e.name),ar(b,e.name),ar(N,e.name),ar(C,e.name),ar(U,e.name),ar(K,e.name);const y=new Bn({uid:z,auth:e,email:w,emailVerified:te,displayName:m,isAnonymous:Ce,photoURL:b,phoneNumber:T,tenantId:N,stsTokenManager:g,createdAt:U,lastLoginAt:K});return we&&Array.isArray(we)&&(y.providerData=we.map(_=>Object.assign({},_))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Is;s.updateFromServerResponse(t);const i=new Bn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await la(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Is;l.updateFromIdToken(r);const c=new Bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function jn(n){Un(n instanceof Function,"Expected a class definition");let e=Pf.get(n);return e?(Un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pf.set(n,e),e)}/**
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
 */function ua(n,e,t){return`firebase:${n}:${e}:${t}`}class As{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ua(this.userKey,s.apiKey,i),this.fullPersistenceKey=ua("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new As(jn(Df),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||jn(Df);const a=ua(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const m=Bn._fromJSON(e,d);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new As(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new As(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ff(e))return"Blackberry";if(Uf(e))return"Webos";if(Of(e))return"Safari";if((e.includes("chrome/")||Mf(e))&&!e.includes("edge/"))return"Chrome";if(xf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nf(n=ft()){return/firefox\//i.test(n)}function Of(n=ft()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mf(n=ft()){return/crios\//i.test(n)}function Lf(n=ft()){return/iemobile/i.test(n)}function xf(n=ft()){return/android/i.test(n)}function Ff(n=ft()){return/blackberry/i.test(n)}function Uf(n=ft()){return/webos/i.test(n)}function ku(n=ft()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vy(n=ft()){var e;return ku(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ny(){return Q_()&&document.documentMode===10}function Bf(n=ft()){return ku(n)||xf(n)||Uf(n)||Ff(n)||/windows phone/i.test(n)||Lf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n,e=[]){let t;switch(n){case"Browser":t=Vf(ft());break;case"Worker":t=`${Vf(ft())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ws}/${r}`}/**
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
 */class Oy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function My(n,e={}){return Ts(n,"GET","/v2/passwordPolicy",Au(n,e))}/**
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
 */const Ly=6;class xy{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Ly,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new Oy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ef,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rf(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(sr(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sr(this.app))return Promise.reject(Ur(this));const t=e?St(e):null;return t&&Y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sr(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sr(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await My(this),t=new xy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jn(e)||this._popupRedirectResolver;Y(t,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Pu(n){return St(n)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=rv(t=>this.observer=t)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uy(n){Cu=n}function By(n){return Cu.loadJS(n)}function jy(){return Cu.gapiScript}function $y(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n,e){const t=vu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ra(i,e??{}))return s;xn(s,"already-initialized")}return t.initialize({options:e})}function zy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(jn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hy(n,e,t){const r=Pu(n);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qf(e),{host:a,port:l}=Wy(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ky()}function qf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wy(n){const e=qf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:zf(a)}}}function zf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ky(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,t){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(n,e){return Ty(n,"POST","/v1/accounts:signInWithIdp",Au(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="http://localhost";class Br extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Eu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Br(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return bs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bs(e,t)}buildRequest(){const e={requestUri:Gy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xi extends Wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends xi{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com",lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Br._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ur.credential(t,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com",ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends xi{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com",cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends xi{constructor(){super("twitter.com")}static credential(e,t){return Br._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return hr.credential(t,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com",hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Bn._fromIdTokenResponse(e,r,s),a=Kf(r);return new Rs({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kf(r);return new Rs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Mn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ca(e,t,r,s)}}function Gf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(n,i,e,r):i})}async function Qy(n,e,t=!1){const r=await Li(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rs._forOperation(n,"link",r)}/**
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
 */async function Jy(n,e,t=!1){const{auth:r}=n;if(sr(r.app))return Promise.reject(Ur(r));const s="reauthenticate";try{const i=await Li(n,Gf(r,s,e,n),t);Y(i.idToken,r,"internal-error");const a=Ru(i.idToken);Y(a,r,"internal-error");const{sub:l}=a;return Y(n.uid===l,r,"user-mismatch"),Rs._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e,t=!1){if(sr(n.app))return Promise.reject(Ur(n));const r="signIn",s=await Gf(n,r,e),i=await Rs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Xy(n,e,t,r){return St(n).onIdTokenChanged(e,t,r)}function Zy(n,e,t){return St(n).beforeAuthStateChanged(e,t)}const ha="__sak";/**
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
 */class Qf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=1e3,tE=10;class Jf extends Qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ny()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jf.type="LOCAL";const nE=Jf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yf.type="SESSION";const Xf=Yf;/**
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
 */function rE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await rE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Du("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function iE(n){gn().location.href=n}/**
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
 */function Zf(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function oE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lE(){return Zf()?self:null}/**
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
 */const ed="firebaseLocalStorageDb",uE=1,da="firebaseLocalStorage",td="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pa(n,e){return n.transaction([da],e?"readwrite":"readonly").objectStore(da)}function cE(){const n=indexedDB.deleteDatabase(ed);return new Fi(n).toPromise()}function Vu(){const n=indexedDB.open(ed,uE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(da,{keyPath:td})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(da)?e(r):(r.close(),await cE(),e(await Vu()))})})}async function nd(n,e,t){const r=pa(n,!0).put({[td]:e,value:t});return new Fi(r).toPromise()}async function hE(n,e){const t=pa(n,!1).get(e),r=await new Fi(t).toPromise();return r===void 0?null:r.value}function rd(n,e){const t=pa(n,!0).delete(e);return new Fi(t).toPromise()}const fE=800,dE=3;class sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(lE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oE(),!this.activeServiceWorker)return;this.sender=new sE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await nd(e,ha,"1"),await rd(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sd.type="LOCAL";const pE=sd;new Oi(3e4,6e4);/**
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
 */function mE(n,e){return e?jn(e):(Y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nu extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gE(n){return Yy(n.auth,new Nu(n),n.bypassAuthState)}function _E(n){const{auth:e,user:t}=n;return Y(t,e,"internal-error"),Jy(t,new Nu(n),n.bypassAuthState)}async function vE(n){const{auth:e,user:t}=n;return Y(t,e,"internal-error"),Qy(t,new Nu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gE;case"linkViaPopup":case"linkViaRedirect":return vE;case"reauthViaPopup":case"reauthViaRedirect":return _E;default:xn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new Oi(2e3,1e4);class Ss extends id{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yE.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="pendingRedirect",ma=new Map;class wE extends id{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await TE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TE(n,e){const t=bE(e),r=AE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function IE(n,e){ma.set(n._key(),e)}function AE(n){return jn(n._redirectPersistence)}function bE(n){return ua(EE,n.config.apiKey,n.name)}async function RE(n,e,t=!1){if(sr(n.app))return Promise.reject(Ur(n));const r=Pu(n),s=mE(r,e),a=await new wE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=10*60*1e3;class kE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ad(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SE&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ad({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ad(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(n,e={}){return Ts(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VE=/^https?/;async function NE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await CE(n);for(const t of e)try{if(OE(t))return}catch{}xn(n,"unauthorized-domain")}function OE(n){const e=Tu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!VE.test(t))return!1;if(DE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ME=new Oi(3e4,6e4);function ld(){const n=gn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function LE(n){return new Promise((e,t)=>{var r,s,i;function a(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),t(mn(n,"network-request-failed"))},timeout:ME.get()})}if(!((s=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gn().gapi)===null||i===void 0)&&i.load)a();else{const l=$y("iframefcb");return gn()[l]=()=>{gapi.load?a():t(mn(n,"network-request-failed"))},By(`${jy()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ga=null,e})}let ga=null;function xE(n){return ga=ga||LE(n),ga}/**
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
 */const FE=new Oi(5e3,15e3),UE="__/auth/iframe",BE="emulator/auth/iframe",jE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(n){const e=n.config;Y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Iu(e,BE):`https://${n.config.authDomain}/${UE}`,r={apiKey:e.apiKey,appName:n.name,v:ws},s=$E.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Vi(r).slice(1)}`}async function zE(n){const e=await xE(n),t=gn().gapi;return Y(t,n,"internal-error"),e.open({where:document.body,url:qE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=mn(n,"network-request-failed"),l=gn().setTimeout(()=>{i(a)},FE.get());function c(){gn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const HE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WE=500,KE=600,GE="_blank",QE="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JE(n,e,t,r=WE,s=KE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},HE),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ft().toLowerCase();t&&(l=Mf(h)?GE:t),Nf(h)&&(e=e||QE,c.scrollbars="yes");const d=Object.entries(c).reduce((w,[T,b])=>`${w}${T}=${b},`,"");if(Vy(h)&&l!=="_self")return YE(e||"",l),new ud(null);const m=window.open(e||"",l,d);Y(m,n,"popup-blocked");try{m.focus()}catch{}return new ud(m)}function YE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const XE="__/auth/handler",ZE="emulator/auth/handler",ew=encodeURIComponent("fac");async function cd(n,e,t,r,s,i){Y(n.config.authDomain,n,"auth-domain-config-required"),Y(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ws,eventId:s};if(e instanceof Wf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",nv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof xi){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${ew}=${encodeURIComponent(c)}`:"";return`${tw(n)}?${Vi(l).slice(1)}${h}`}function tw({config:n}){return n.emulator?Iu(n,ZE):`https://${n.authDomain}/${XE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="webStorageSupport";class nw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xf,this._completeRedirectFn=RE,this._overrideRedirectResult=IE}async _openPopup(e,t,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cd(e,t,r,Tu(),s);return JE(e,a,Du())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await cd(e,t,r,Tu(),s);return iE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zE(e),r=new kE(e);return t.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ou,{type:Ou},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ou];a!==void 0&&t(!!a),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=NE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bf()||Of()||ku()}}const rw=nw;var hd="@firebase/auth",fd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ow(n){Es(new xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;Y(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jf(n)},h=new Fy(r,s,i,c);return zy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Es(new xr("auth-internal",e=>{const t=Pu(e.getProvider("auth").getImmediate());return(r=>new sw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(hd,fd,iw(n)),or(hd,fd,"esm2017")}/**
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
 */const aw=5*60,lw=nf("authIdTokenMaxAge")||aw;let dd=null;const uw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lw)return;const s=t==null?void 0:t.token;dd!==s&&(dd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cw(n=df()){const e=vu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qy(n,{popupRedirectResolver:rw,persistence:[pE,nE,Xf]}),r=nf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=uw(i.toString());Zy(t,a,()=>a(t.currentUser)),Xy(t,l=>a(l))}}const s=ef("auth");return s&&Hy(t,`http://${s}`),t}function hw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Uy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",hw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),ow("Browser");var pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,md;(function(){var n;/** @license

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/function e(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(_,R,S){for(var E=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)E[ot-2]=arguments[ot];return g.prototype[R].apply(_,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);var _=Array(16);if(typeof g=="string")for(var R=0;16>R;++R)_[R]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(R=0;16>R;++R)_[R]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],R=I.g[2];var S=I.g[3],E=g+(S^y&(R^S))+_[0]+3614090360&4294967295;g=y+(E<<7&4294967295|E>>>25),E=S+(R^g&(y^R))+_[1]+3905402710&4294967295,S=g+(E<<12&4294967295|E>>>20),E=R+(y^S&(g^y))+_[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=y+(g^R&(S^g))+_[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=g+(S^y&(R^S))+_[4]+4118548399&4294967295,g=y+(E<<7&4294967295|E>>>25),E=S+(R^g&(y^R))+_[5]+1200080426&4294967295,S=g+(E<<12&4294967295|E>>>20),E=R+(y^S&(g^y))+_[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=y+(g^R&(S^g))+_[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=g+(S^y&(R^S))+_[8]+1770035416&4294967295,g=y+(E<<7&4294967295|E>>>25),E=S+(R^g&(y^R))+_[9]+2336552879&4294967295,S=g+(E<<12&4294967295|E>>>20),E=R+(y^S&(g^y))+_[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=y+(g^R&(S^g))+_[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=g+(S^y&(R^S))+_[12]+1804603682&4294967295,g=y+(E<<7&4294967295|E>>>25),E=S+(R^g&(y^R))+_[13]+4254626195&4294967295,S=g+(E<<12&4294967295|E>>>20),E=R+(y^S&(g^y))+_[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=y+(g^R&(S^g))+_[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=g+(R^S&(y^R))+_[1]+4129170786&4294967295,g=y+(E<<5&4294967295|E>>>27),E=S+(y^R&(g^y))+_[6]+3225465664&4294967295,S=g+(E<<9&4294967295|E>>>23),E=R+(g^y&(S^g))+_[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=y+(S^g&(R^S))+_[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=g+(R^S&(y^R))+_[5]+3593408605&4294967295,g=y+(E<<5&4294967295|E>>>27),E=S+(y^R&(g^y))+_[10]+38016083&4294967295,S=g+(E<<9&4294967295|E>>>23),E=R+(g^y&(S^g))+_[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=y+(S^g&(R^S))+_[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=g+(R^S&(y^R))+_[9]+568446438&4294967295,g=y+(E<<5&4294967295|E>>>27),E=S+(y^R&(g^y))+_[14]+3275163606&4294967295,S=g+(E<<9&4294967295|E>>>23),E=R+(g^y&(S^g))+_[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=y+(S^g&(R^S))+_[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=g+(R^S&(y^R))+_[13]+2850285829&4294967295,g=y+(E<<5&4294967295|E>>>27),E=S+(y^R&(g^y))+_[2]+4243563512&4294967295,S=g+(E<<9&4294967295|E>>>23),E=R+(g^y&(S^g))+_[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=y+(S^g&(R^S))+_[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=g+(y^R^S)+_[5]+4294588738&4294967295,g=y+(E<<4&4294967295|E>>>28),E=S+(g^y^R)+_[8]+2272392833&4294967295,S=g+(E<<11&4294967295|E>>>21),E=R+(S^g^y)+_[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=y+(R^S^g)+_[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=g+(y^R^S)+_[1]+2763975236&4294967295,g=y+(E<<4&4294967295|E>>>28),E=S+(g^y^R)+_[4]+1272893353&4294967295,S=g+(E<<11&4294967295|E>>>21),E=R+(S^g^y)+_[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=y+(R^S^g)+_[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=g+(y^R^S)+_[13]+681279174&4294967295,g=y+(E<<4&4294967295|E>>>28),E=S+(g^y^R)+_[0]+3936430074&4294967295,S=g+(E<<11&4294967295|E>>>21),E=R+(S^g^y)+_[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=y+(R^S^g)+_[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=g+(y^R^S)+_[9]+3654602809&4294967295,g=y+(E<<4&4294967295|E>>>28),E=S+(g^y^R)+_[12]+3873151461&4294967295,S=g+(E<<11&4294967295|E>>>21),E=R+(S^g^y)+_[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=y+(R^S^g)+_[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=g+(R^(y|~S))+_[0]+4096336452&4294967295,g=y+(E<<6&4294967295|E>>>26),E=S+(y^(g|~R))+_[7]+1126891415&4294967295,S=g+(E<<10&4294967295|E>>>22),E=R+(g^(S|~y))+_[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=y+(S^(R|~g))+_[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=g+(R^(y|~S))+_[12]+1700485571&4294967295,g=y+(E<<6&4294967295|E>>>26),E=S+(y^(g|~R))+_[3]+2399980690&4294967295,S=g+(E<<10&4294967295|E>>>22),E=R+(g^(S|~y))+_[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=y+(S^(R|~g))+_[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=g+(R^(y|~S))+_[8]+1873313359&4294967295,g=y+(E<<6&4294967295|E>>>26),E=S+(y^(g|~R))+_[15]+4264355552&4294967295,S=g+(E<<10&4294967295|E>>>22),E=R+(g^(S|~y))+_[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=y+(S^(R|~g))+_[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=g+(R^(y|~S))+_[4]+4149444226&4294967295,g=y+(E<<6&4294967295|E>>>26),E=S+(y^(g|~R))+_[11]+3174756917&4294967295,S=g+(E<<10&4294967295|E>>>22),E=R+(g^(S|~y))+_[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=y+(S^(R|~g))+_[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,_=this.B,R=this.h,S=0;S<g;){if(R==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<g;)if(_[R++]=I.charCodeAt(S++),R==this.blockSize){s(this,_),R=0;break}}else for(;S<g;)if(_[R++]=I[S++],R==this.blockSize){s(this,_),R=0;break}}this.h=R,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var _=0;32>_;_+=8)I[y++]=this.g[g]>>>_&255;return I};function i(I,g){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;for(var y=[],_=!0,R=I.length-1;0<=R;R--){var S=I[R]|0;_&&S==g||(y[R]=S,_=!1)}this.g=y}var l={};function c(I){return-128<=I&&128>I?i(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return C(h(-I));for(var g=[],y=1,_=0;I>=y;_++)g[_]=I/y|0,y*=4294967296;return new a(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(d(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),_=m,R=0;R<I.length;R+=8){var S=Math.min(8,I.length-R),E=parseInt(I.substring(R,R+S),g);8>S?(S=h(Math.pow(g,S)),_=_.j(S).add(h(E))):(_=_.j(y),_=_.add(h(E)))}return _}var m=c(0),w=c(1),T=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var _=this.i(y);I+=(0<=_?_:4294967296+_)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(N(this))return"-"+C(this).toString(I);for(var g=h(Math.pow(I,6)),y=this,_="";;){var R=te(y,g).g;y=U(y,R.j(g));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=R,b(y))return S+_;for(;6>S.length;)S="0"+S;_=S+_}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=U(this,I),N(I)?-1:b(I)?0:1};function C(I){for(var g=I.g.length,y=[],_=0;_<g;_++)y[_]=~I.g[_];return new a(y,~I.h).add(w)}n.abs=function(){return N(this)?C(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],_=0,R=0;R<=g;R++){var S=_+(this.i(R)&65535)+(I.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);_=E>>>16,S&=65535,E&=65535,y[R]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function U(I,g){return I.add(C(g))}n.j=function(I){if(b(this)||b(I))return m;if(N(this))return N(I)?C(this).j(C(I)):C(C(this).j(I));if(N(I))return C(this.j(C(I)));if(0>this.l(T)&&0>I.l(T))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],_=0;_<2*g;_++)y[_]=0;for(_=0;_<this.g.length;_++)for(var R=0;R<I.g.length;R++){var S=this.i(_)>>>16,E=this.i(_)&65535,ot=I.i(R)>>>16,Gt=I.i(R)&65535;y[2*_+2*R]+=E*Gt,K(y,2*_+2*R),y[2*_+2*R+1]+=S*Gt,K(y,2*_+2*R+1),y[2*_+2*R+1]+=E*ot,K(y,2*_+2*R+1),y[2*_+2*R+2]+=S*ot,K(y,2*_+2*R+2)}for(_=0;_<g;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=g;_<2*g;_++)y[_]=0;return new a(y,0)};function K(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function z(I,g){this.g=I,this.h=g}function te(I,g){if(b(g))throw Error("division by zero");if(b(I))return new z(m,m);if(N(I))return g=te(C(I),g),new z(C(g.g),C(g.h));if(N(g))return g=te(I,C(g)),new z(C(g.g),g.h);if(30<I.g.length){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=w,_=g;0>=_.l(I);)y=Ce(y),_=Ce(_);var R=we(y,1),S=we(_,1);for(_=we(_,2),y=we(y,2);!b(_);){var E=S.add(_);0>=E.l(I)&&(R=R.add(y),S=E),_=we(_,1),y=we(y,1)}return g=U(I,R.j(g)),new z(R,g)}for(R=m;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),_=Math.ceil(Math.log(y)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),S=h(y),E=S.j(g);N(E)||0<E.l(I);)y-=_,S=h(y),E=S.j(g);b(S)&&(S=w),R=R.add(S),I=U(I,E)}return new z(R,I)}n.A=function(I){return te(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],_=0;_<g;_++)y[_]=this.i(_)&I.i(_);return new a(y,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],_=0;_<g;_++)y[_]=this.i(_)|I.i(_);return new a(y,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],_=0;_<g;_++)y[_]=this.i(_)^I.i(_);return new a(y,this.h^I.h)};function Ce(I){for(var g=I.g.length+1,y=[],_=0;_<g;_++)y[_]=I.i(_)<<1|I.i(_-1)>>>31;return new a(y,I.h)}function we(I,g){var y=g>>5;g%=32;for(var _=I.g.length-y,R=[],S=0;S<_;S++)R[S]=0<g?I.i(S+y)>>>g|I.i(S+y+1)<<32-g:I.i(S+y);return new a(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,md=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,jr=a}).apply(typeof pd<"u"?pd:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gd,Ui,_d,va,Mu,vd,yd,Ed;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var k=o[p];if(!(k in f))break e;f=f[k]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,k={next:function(){if(!p&&f<o.length){var D=f++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function m(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function w(o,u,f){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,w.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function b(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,k,D){for(var F=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)F[Se-2]=arguments[Se];return u.prototype[k].apply(p,F)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function C(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const k=o.length||0,D=p.length||0;o.length=k+D;for(let F=0;F<D;F++)o[k+F]=p[F]}else o.push(p)}}class U{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function te(o){return te[" "](o),o}te[" "]=function(){};var Ce=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function we(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function g(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,u){let f,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(f in p)o[f]=p[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function R(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Tt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,f){const p=Gt.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Gt=new U(()=>new Kn,o=>o.reset());class Kn{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let bn,Qt=!1,Tt=new ot,sn=()=>{const o=l.Promise.resolve(void 0);bn=()=>{o.then(mo)}};var mo=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Gt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Qt=!1};function Rn(){this.s=this.s,this.C=this.C}Rn.prototype.s=!1,Rn.prototype.ma=function(){this.s||(this.s=!0,this.N())},Rn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var tl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Gn(o,u){if(Je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Ce){e:{try{te(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nl[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gn.aa.h.call(this)}}b(Gn,Je);var nl={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),go=0;function Vc(o,u,f,p,k){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=k,this.key=++go,this.da=this.fa=!1}function wr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Js(o){this.src=o,this.g={},this.h=0}Js.prototype.add=function(o,u,f,p,k){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var F=vo(o,u,p,k);return-1<F?(u=o[F],f||(u.fa=!1)):(u=new Vc(u,this.src,D,!!p,k),u.fa=f,o.push(u)),u};function _o(o,u){var f=u.type;if(f in o.g){var p=o.g[f],k=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=k)&&Array.prototype.splice.call(p,k,1),D&&(wr(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function vo(o,u,f,p){for(var k=0;k<o.length;++k){var D=o[k];if(!D.da&&D.listener==u&&D.capture==!!f&&D.ha==p)return k}return-1}var yo="closure_lm_"+(1e6*Math.random()|0),Ys={};function Eo(o,u,f,p,k){if(Array.isArray(u)){for(var D=0;D<u.length;D++)Eo(o,u[D],f,p,k);return null}return f=al(f),o&&o[es]?o.K(u,f,h(p)?!!p.capture:!1,k):rl(o,u,f,!1,p,k)}function rl(o,u,f,p,k,D){if(!u)throw Error("Invalid event type");var F=h(k)?!!k.capture:!!k,Se=Zs(o);if(Se||(o[yo]=Se=new Js(o)),f=Se.add(u,f,p,F,D),f.proxy)return f;if(p=sl(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)tl||(k=F),k===void 0&&(k=!1),o.addEventListener(u.toString(),p,k);else if(o.attachEvent)o.attachEvent(ol(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function sl(){function o(f){return u.call(o.src,o.listener,f)}const u=Nc;return o}function il(o,u,f,p,k){if(Array.isArray(u))for(var D=0;D<u.length;D++)il(o,u[D],f,p,k);else p=h(p)?!!p.capture:!!p,f=al(f),o&&o[es]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],f=vo(D,f,p,k),-1<f&&(wr(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=Zs(o))&&(u=o.g[u.toString()],o=-1,u&&(o=vo(u,f,p,k)),(f=-1<o?u[o]:null)&&Xs(f))}function Xs(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[es])_o(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(ol(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=Zs(u))?(_o(f,o),f.h==0&&(f.src=null,u[yo]=null)):wr(o)}}}function ol(o){return o in Ys?Ys[o]:Ys[o]="on"+o}function Nc(o,u){if(o.da)o=!0;else{u=new Gn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&Xs(o),o=f.call(p,u)}return o}function Zs(o){return o=o[yo],o instanceof Js?o:null}var wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(o){return typeof o=="function"?o:(o[wo]||(o[wo]=function(u){return o.handleEvent(u)}),o[wo])}function Ze(){Rn.call(this),this.i=new Js(this),this.M=this,this.F=null}b(Ze,Rn),Ze.prototype[es]=!0,Ze.prototype.removeEventListener=function(o,u,f,p){il(this,o,u,f,p)};function at(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Je(u,o);else if(u instanceof Je)u.target=u.target||o;else{var k=u;u=new Je(p,o),_(u,k)}if(k=!0,f)for(var D=f.length-1;0<=D;D--){var F=u.g=f[D];k=ts(F,p,!0,u)&&k}if(F=u.g=o,k=ts(F,p,!0,u)&&k,k=ts(F,p,!1,u)&&k,f)for(D=0;D<f.length;D++)F=u.g=f[D],k=ts(F,p,!1,u)&&k}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)wr(f[p]);delete o.g[u],o.h--}}this.F=null},Ze.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},Ze.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function ts(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,D=0;D<u.length;++D){var F=u[D];if(F&&!F.da&&F.capture==f){var Se=F.listener,ut=F.ha||F.src;F.fa&&_o(o.i,F),k=Se.call(ut,p)!==!1&&k}}return k&&!p.defaultPrevented}function To(o,u,f){if(typeof o=="function")f&&(o=w(o,f));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function ll(o){o.g=To(()=>{o.g=null,o.i&&(o.i=!1,ll(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ul extends Rn{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ll(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tr(o){Rn.call(this),this.h=o,this.g={}}b(Tr,Rn);var cl=[];function hl(o){we(o.g,function(u,f){this.g.hasOwnProperty(f)&&Xs(u)},o),o.g={}}Tr.prototype.N=function(){Tr.aa.N.call(this),hl(this)},Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=l.JSON.stringify,Oc=l.JSON.parse,Mc=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ei(){}ei.prototype.h=null;function Ao(o){return o.h||(o.h=o.i())}function fl(){}var ns={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bo(){Je.call(this,"d")}b(bo,Je);function ti(){Je.call(this,"c")}b(ti,Je);var Qn={},Ro=null;function ni(){return Ro=Ro||new Ze}Qn.La="serverreachability";function dl(o){Je.call(this,Qn.La,o)}b(dl,Je);function rs(o){const u=ni();at(u,new dl(u))}Qn.STAT_EVENT="statevent";function So(o,u){Je.call(this,Qn.STAT_EVENT,o),this.stat=u}b(So,Je);function lt(o){const u=ni();at(u,new So(u,o))}Qn.Ma="timingevent";function ko(o,u){Je.call(this,Qn.Ma,o),this.size=u}b(ko,Je);function Ir(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function Lc(o,u,f,p,k,D){o.info(function(){if(o.g)if(D)for(var F="",Se=D.split("&"),ut=0;ut<Se.length;ut++){var Ee=Se[ut].split("=");if(1<Ee.length){var _t=Ee[0];Ee=Ee[1];var vt=_t.split("_");F=2<=vt.length&&vt[1]=="type"?F+(_t+"="+Ee+"&"):F+(_t+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+u+`
`+f+`
`+F})}function pl(o,u,f,p,k,D,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+u+`
`+f+`
`+D+" "+F})}function br(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fc(o,f)+(p?" "+p:"")})}function xc(o,u){o.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function Fc(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return Io(f)}catch{return u}}var ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Po={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},si;function ii(){}b(ii,ei),ii.prototype.g=function(){return new XMLHttpRequest},ii.prototype.i=function(){return{}},si=new ii;function Sn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new Tr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ml}function ml(){this.i=null,this.g="",this.h=!1}var A={},V={};function L(o,u,f){o.L=1,o.v=Ft(gt(u)),o.m=f,o.P=!0,B(o,null)}function B(o,u){o.F=Date.now(),$(o),o.A=gt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Rm(f.i,"t",p),o.C=0,f=o.j.J,o.h=new ml,o.g=zm(o.j,f?u:null,!o.m),0<o.O&&(o.M=new ul(w(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(cl[0]=k.toString()),k=cl);for(var D=0;D<k.length;D++){var F=Eo(f,k[D],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),rs(),Lc(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Yn(o)==3?u.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const vt=Yn(this.g);var u=this.g.Ba();const ci=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Nm(this.g)))){this.J||vt!=4||u==7||(u==8||0>=ci?rs(3):rs(2)),oe(this);var f=this.g.Z();this.X=f;t:if(x(this)){var p=Nm(this.g);o="";var k=p.length,D=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),ae(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==k-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,pl(this.i,this.u,this.A,this.l,this.R,vt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,ut=this.g;if((Se=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Se)){var Ee=Se;break t}}Ee=null}if(f=Ee)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,be(this,f);else{this.o=!1,this.s=3,lt(12),ve(this),ae(this);break e}}if(this.P){f=!0;let an;for(;!this.J&&this.C<F.length;)if(an=j(this,F),an==V){vt==4&&(this.s=4,lt(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(an==A){this.s=4,lt(15),br(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,an,null),be(this,an);if(x(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||F.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,F,"[Invalid Chunked Response]"),ve(this),ae(this);else if(0<F.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),$c(_t),_t.M=!0,lt(11))}}else br(this.i,this.l,F,null),be(this,F);vt==4&&ve(this),this.o&&!this.J&&(vt==4?Bm(this.j,this):(this.o=!1,$(this)))}else dA(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),ve(this),ae(this)}}}catch{}finally{}};function x(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function j(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?V:(f=Number(u.substring(f,p)),isNaN(f)?A:(p+=1,p+f>u.length?V:(u=u.slice(p,p+f),o.C=p+f,u)))}Sn.prototype.cancel=function(){this.J=!0,ve(this)};function $(o){o.S=Date.now()+o.I,J(o,o.I)}function J(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ir(w(o.ba,o),u)}function oe(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xc(this.i,this.A),this.L!=2&&(rs(),lt(17)),ve(this),this.s=2,ae(this)):J(this,this.S-o)};function ae(o){o.j.G==0||o.J||Bm(o.j,o)}function ve(o){oe(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,hl(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function be(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Jt(f.h,o))){if(!o.K&&Jt(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)wl(f),yl(f);else break e;jc(f),lt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ir(w(f.Za,f),6e3));if(1>=Me(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ls(f,11)}else if((o.K||f.g==o)&&wl(f),!K(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let Ee=k[u];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const _t=Ee[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const vt=Ee[4];vt!=null&&(f.Aa=vt,f.j.info("SVER="+f.Aa));const ci=Ee[5];ci!=null&&typeof ci=="number"&&0<ci&&(p=1.5*ci,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const an=o.g;if(an){const Il=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Il){var D=p.h;D.g||Il.indexOf("spdy")==-1&&Il.indexOf("quic")==-1&&Il.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ss(D,D.h),D.h=null))}if(p.D){const qc=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;qc&&(p.ya=qc,Ie(p.I,p.D,qc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var F=o;if(p.qa=qm(p,p.J?p.ia:null,p.W),F.K){kn(p.h,F);var Se=F,ut=p.L;ut&&(Se.I=ut),Se.B&&(oe(Se),$(Se)),p.g=F}else Fm(p);0<f.i.length&&El(f)}else Ee[0]!="stop"&&Ee[0]!="close"||ls(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?ls(f,7):Bc(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}rs(4)}catch{}}var ze=class{constructor(o,u){this.g=o,this.map=u}};function Re(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ye(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Me(o){return o.h?1:o.g?o.g.size:0}function Jt(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ss(o,u){o.g?o.g.add(u):o.h=u}function kn(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Re.prototype.cancel=function(){if(this.i=oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function oi(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function ai(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function Jn(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function is(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Jn(o),p=ai(o),k=p.length,D=0;D<k;D++)u.call(void 0,p[D],f&&f[D],o)}var et=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function on(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),k=null;if(0<=p){var D=o[f].substring(0,p);k=o[f].substring(p+1)}else D=o[f];u(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function It(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof It){this.h=o.h,Pn(this,o.j),this.o=o.o,this.g=o.g,Cn(this,o.s),this.l=o.l;var u=o.i,f=new Do;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),os(this,f),this.m=o.m}else o&&(u=String(o).match(et))?(this.h=!1,Pn(this,u[1]||"",!0),this.o=as(u[2]||""),this.g=as(u[3]||"",!0),Cn(this,u[4]),this.l=as(u[5]||"",!0),os(this,u[6]||"",!0),this.m=as(u[7]||"")):(this.h=!1,this.i=new Do(null,this.h))}It.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Co(u,Im,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Co(u,Im,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Co(f,f.charAt(0)=="/"?rA:nA,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Co(f,iA)),o.join("")};function gt(o){return new It(o)}function Pn(o,u,f){o.j=f?as(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Cn(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function os(o,u,f){u instanceof Do?(o.i=u,oA(o.i,o.h)):(f||(u=Co(u,sA)),o.i=new Do(u,o.h))}function Ie(o,u,f){o.i.set(u,f)}function Ft(o){return Ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function as(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Co(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,tA),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function tA(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Im=/[#\/\?@]/g,nA=/[#\?:]/g,rA=/[#\?]/g,sA=/[#\?@]/g,iA=/#/g;function Do(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Rr(o){o.g||(o.g=new Map,o.h=0,o.i&&on(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Do.prototype,n.add=function(o,u){Rr(this),this.i=null,o=li(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Am(o,u){Rr(o),u=li(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function bm(o,u){return Rr(o),u=li(o,u),o.g.has(u)}n.forEach=function(o,u){Rr(this),this.g.forEach(function(f,p){f.forEach(function(k){o.call(u,k,p,this)},this)},this)},n.na=function(){Rr(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const k=o[p];for(let D=0;D<k.length;D++)f.push(u[p])}return f},n.V=function(o){Rr(this);let u=[];if(typeof o=="string")bm(this,o)&&(u=u.concat(this.g.get(li(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Rr(this),this.i=null,o=li(this,o),bm(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Rm(o,u,f){Am(o,u),0<f.length&&(o.i=null,o.g.set(li(o,u),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const D=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var k=D;F[p]!==""&&(k+="="+encodeURIComponent(String(F[p]))),o.push(k)}}return this.i=o.join("&")};function li(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function oA(o,u){u&&!o.j&&(Rr(o),o.i=null,o.g.forEach(function(f,p){var k=p.toLowerCase();p!=k&&(Am(this,p),Rm(this,k,f))},o)),o.j=u}function aA(o,u){const f=new Ar;if(l.Image){const p=new Image;p.onload=T(Sr,f,"TestLoadImage: loaded",!0,u,p),p.onerror=T(Sr,f,"TestLoadImage: error",!1,u,p),p.onabort=T(Sr,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=T(Sr,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function lA(o,u){const f=new Ar,p=new AbortController,k=setTimeout(()=>{p.abort(),Sr(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(k),D.ok?Sr(f,"TestPingServer: ok",!0,u):Sr(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Sr(f,"TestPingServer: error",!1,u)})}function Sr(o,u,f,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(f)}catch{}}function uA(){this.g=new Mc}function cA(o,u,f){const p=f||"";try{is(o,function(k,D){let F=k;h(k)&&(F=Io(k)),u.push(p+D+"="+encodeURIComponent(F))})}catch(k){throw u.push(p+"type="+encodeURIComponent("_badmap")),k}}function gl(o){this.l=o.Ub||null,this.j=o.eb||!1}b(gl,ei),gl.prototype.g=function(){return new _l(this.l,this.j)},gl.prototype.i=function(o){return function(){return o}}({});function _l(o,u){Ze.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(_l,Ze),n=_l.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,No(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,No(this)),this.g&&(this.readyState=3,No(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sm(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sm(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vo(this):No(this),this.readyState==3&&Sm(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Vo(this))},n.Qa=function(o){this.g&&(this.response=o,Vo(this))},n.ga=function(){this.g&&Vo(this)};function Vo(o){o.readyState=4,o.l=null,o.j=null,o.v=null,No(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function No(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function km(o){let u="";return we(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Uc(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=km(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ie(o,u,f))}function Fe(o){Ze.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Fe,Ze);var hA=/^https?$/i,fA=["POST","PUT"];n=Fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():si.g(),this.v=this.o?Ao(this.o):Ao(si),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){Pm(this,D);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)f.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())f.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fA,u,void 0))||p||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of f)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vm(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){Pm(this,D)}};function Pm(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Cm(o),vl(o)}function Cm(o){o.A||(o.A=!0,at(o,"complete"),at(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,at(this,"complete"),at(this,"abort"),vl(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vl(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Dm(this):this.bb())},n.bb=function(){Dm(this)};function Dm(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yn(o)!=4||o.Z()!=2)){if(o.u&&Yn(o)==4)To(o.Ea,0,o);else if(at(o,"readystatechange"),Yn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=F===0){var k=String(o.D).match(et)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),p=!hA.test(k?k.toLowerCase():"")}f=p}if(f)at(o,"complete"),at(o,"success");else{o.m=6;try{var D=2<Yn(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Cm(o)}}finally{vl(o)}}}}function vl(o,u){if(o.g){Vm(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||at(o,"ready");try{f.onreadystatechange=p}catch{}}}function Vm(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Yn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Oc(u)}};function Nm(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function dA(o){const u={};o=(o.g&&2<=Yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(K(o[p]))continue;var f=R(o[p]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=u[k]||[];u[k]=D,D.push(f)}I(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oo(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Om(o){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oo("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oo("baseRetryDelayMs",5e3,o),this.cb=Oo("retryDelaySeedMs",1e4,o),this.Wa=Oo("forwardChannelMaxRetries",2,o),this.wa=Oo("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Re(o&&o.concurrentRequestLimit),this.Da=new uA,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Om.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,p){lt(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=qm(this,null,this.W),El(this)};function Bc(o){if(Mm(o),o.G==3){var u=o.U++,f=gt(o.I);if(Ie(f,"SID",o.K),Ie(f,"RID",u),Ie(f,"TYPE","terminate"),Mo(o,f),u=new Sn(o,o.j,u),u.L=2,u.v=Ft(gt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=zm(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$(u)}$m(o)}function yl(o){o.g&&($c(o),o.g.cancel(),o.g=null)}function Mm(o){yl(o),o.u&&(l.clearTimeout(o.u),o.u=null),wl(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function El(o){if(!ye(o.h)&&!o.s){o.s=!0;var u=o.Ga;bn||sn(),Qt||(bn(),Qt=!0),Tt.add(u,o),o.B=0}}function pA(o,u){return Me(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ir(w(o.Ga,o,u),jm(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Sn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=g(D),_(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=xm(this,k,u),f=gt(this.I),Ie(f,"RID",o),Ie(f,"CVER",22),this.D&&Ie(f,"X-HTTP-Session-Id",this.D),Mo(this,f),D&&(this.O?u="headers="+encodeURIComponent(String(km(D)))+"&"+u:this.m&&Uc(f,this.m,D)),ss(this.h,k),this.Ua&&Ie(f,"TYPE","init"),this.P?(Ie(f,"$req",u),Ie(f,"SID","null"),k.T=!0,L(k,f,null)):L(k,f,u),this.G=2}}else this.G==3&&(o?Lm(this,o):this.i.length==0||ye(this.h)||Lm(this))};function Lm(o,u){var f;u?f=u.l:f=o.U++;const p=gt(o.I);Ie(p,"SID",o.K),Ie(p,"RID",f),Ie(p,"AID",o.T),Mo(o,p),o.m&&o.o&&Uc(p,o.m,o.o),f=new Sn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=xm(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ss(o.h,f),L(f,p,u)}function Mo(o,u){o.H&&we(o.H,function(f,p){Ie(u,p,f)}),o.l&&is({},function(f,p){Ie(u,p,f)})}function xm(o,u,f){f=Math.min(o.i.length,f);var p=o.l?w(o.l.Na,o.l,o):null;e:{var k=o.i;let D=-1;for(;;){const F=["count="+f];D==-1?0<f?(D=k[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let Se=!0;for(let ut=0;ut<f;ut++){let Ee=k[ut].g;const _t=k[ut].map;if(Ee-=D,0>Ee)D=Math.max(0,k[ut].g-100),Se=!1;else try{cA(_t,F,"req"+Ee+"_")}catch{p&&p(_t)}}if(Se){p=F.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Fm(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;bn||sn(),Qt||(bn(),Qt=!0),Tt.add(u,o),o.v=0}}function jc(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ir(w(o.Fa,o),jm(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Um(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ir(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),yl(this),Um(this))};function $c(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Um(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=gt(o.qa);Ie(u,"RID","rpc"),Ie(u,"SID",o.K),Ie(u,"AID",o.T),Ie(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ie(u,"TO",o.ja),Ie(u,"TYPE","xmlhttp"),Mo(o,u),o.m&&o.o&&Uc(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ft(gt(u)),f.m=null,f.P=!0,B(f,o)}n.Za=function(){this.C!=null&&(this.C=null,yl(this),jc(this),lt(19))};function wl(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Bm(o,u){var f=null;if(o.g==u){wl(o),$c(o),o.g=null;var p=2}else if(Jt(o.h,u))f=u.D,kn(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;p=ni(),at(p,new ko(p,f)),El(o)}else Fm(o);else if(k=u.s,k==3||k==0&&0<u.X||!(p==1&&pA(o,u)||p==2&&jc(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),k){case 1:ls(o,5);break;case 4:ls(o,10);break;case 3:ls(o,6);break;default:ls(o,2)}}}function jm(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ls(o,u){if(o.j.info("Error code "+u),u==2){var f=w(o.fb,o),p=o.Xa;const k=!p;p=new It(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pn(p,"https"),Ft(p),k?aA(p.toString(),f):lA(p.toString(),f)}else lt(2);o.G=0,o.l&&o.l.sa(u),$m(o),Mm(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function $m(o){if(o.G=0,o.ka=[],o.l){const u=oi(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function qm(o,u,f){var p=f instanceof It?gt(f):new It(f);if(p.g!="")u&&(p.g=u+"."+p.g),Cn(p,p.s);else{var k=l.location;p=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var D=new It(null);p&&Pn(D,p),u&&(D.g=u),k&&Cn(D,k),f&&(D.l=f),p=D}return f=o.D,u=o.ya,f&&u&&Ie(p,f,u),Ie(p,"VER",o.la),Mo(o,p),p}function zm(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Fe(new gl({eb:f})):new Fe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hm(){}n=Hm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tl(){}Tl.prototype.g=function(o,u){return new Ut(o,u)};function Ut(o,u){Ze.call(this),this.g=new Om(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new ui(this)}b(Ut,Ze),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Bc(this.g)},Ut.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Io(o),o=f);u.i.push(new ze(u.Ya++,o)),u.G==3&&El(u)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Bc(this.g),delete this.g,Ut.aa.N.call(this)};function Wm(o){bo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}b(Wm,bo);function Km(){ti.call(this),this.status=1}b(Km,ti);function ui(o){this.g=o}b(ui,Hm),ui.prototype.ua=function(){at(this.g,"a")},ui.prototype.ta=function(o){at(this.g,new Wm(o))},ui.prototype.sa=function(o){at(this.g,new Km)},ui.prototype.ra=function(){at(this.g,"b")},Tl.prototype.createWebChannel=Tl.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Ed=function(){return new Tl},yd=function(){return ni()},vd=Qn,Mu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,va=ri,Po.COMPLETE="complete",_d=Po,fl.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,Ui=fl,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,gd=Fe}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore";/**
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
 */let ks="10.14.0";/**
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
 */const $r=new lu("@firebase/firestore");function Bi(){return $r.logLevel}function q(n,...e){if($r.logLevel<=he.DEBUG){const t=e.map(Lu);$r.debug(`Firestore (${ks}): ${n}`,...t)}}function $n(n,...e){if($r.logLevel<=he.ERROR){const t=e.map(Lu);$r.error(`Firestore (${ks}): ${n}`,...t)}}function Ps(n,...e){if($r.logLevel<=he.WARN){const t=e.map(Lu);$r.warn(`Firestore (${ks}): ${n}`,...t)}}function Lu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function X(n="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+n;throw $n(e),new Error(e)}function Ae(n,e){n||X()}function Z(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Td{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dt.UNAUTHENTICATED))}shutdown(){}}class dw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pw{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ae(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Td(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new dt(e)}}class mw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new mw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _w{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ae(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ae(typeof t.token=="string"),this.R=t.token,new _w(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Id{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(n,e){return n<e?-1:n>e?1:0}function Cs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ji{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(),r===void 0?r=e.length-t:r>e.length-t&&X(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class xe extends ji{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const Ew=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ji{construct(e,t,r){return new nt(e,t,r)}static isValidIdentifier(e){return Ew.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(t)}static emptyPath(){return new nt([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(xe.fromString(e))}static fromName(e){return new Q(xe.fromString(e).popFirst(5))}static empty(){return new Q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new xe(e.slice()))}}function ww(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ge(t+1,0):new Ge(t,r));return new fr(s,Q.empty(),e)}function Tw(n){return new fr(n.readTime,n.key,-1)}class fr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new fr(ee.min(),Q.empty(),-1)}static max(){return new fr(ee.max(),Q.empty(),-1)}}function Iw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ge(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $i(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Aw)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Rw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xu.oe=-1;function ya(n){return n==null}function Ea(n){return n===0&&1/n==-1/0}function Sw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ea(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new rt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1,rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,t,r,s,i){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rd(this.data.getIterator())}getIteratorFrom(e){return new Rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new st(this.comparator);return t.data=e,t}}class Rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new st(nt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sd("Invalid base64 string: "+i):i}}(e);return new it(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new it(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(n){if(Ae(!!n),typeof n=="string"){let e=0;const t=kw.exec(n);if(Ae(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hr(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Uu(n){const e=n.mapValue.fields.__previous_value__;return Fu(e)?Uu(e):e}function zi(n){const e=dr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class Pw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Hi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta={mapValue:{}};function Wr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fu(n)?4:Dw(n)?9007199254740991:Cw(n)?10:11:X()}function _n(n,e){if(n===e)return!0;const t=Wr(n);if(t!==Wr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zi(n).isEqual(zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=dr(s.timestampValue),l=dr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Be(s.doubleValue),l=Be(i.doubleValue);return a===l?Ea(a)===Ea(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Cs(n.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ad(a)!==Ad(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!_n(a[c],l[c])))return!1;return!0}(n,e);default:return X()}}function Wi(n,e){return(n.values||[]).find(t=>_n(t,e))!==void 0}function Ds(n,e){if(n===e)return 0;const t=Wr(n),r=Wr(e);if(t!==r)return ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Be(i.integerValue||i.doubleValue),c=Be(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return kd(n.timestampValue,e.timestampValue);case 4:return kd(zi(n),zi(e));case 5:return ge(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Hr(i),c=Hr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ge(l[h],c[h]);if(d!==0)return d}return ge(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ge(Be(i.latitude),Be(a.latitude));return l!==0?l:ge(Be(i.longitude),Be(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Pd(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const m=i.fields||{},w=a.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,b=(c=w.value)===null||c===void 0?void 0:c.arrayValue,N=ge(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Pd(T,b)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ta.mapValue&&a===Ta.mapValue)return 0;if(i===Ta.mapValue)return 1;if(a===Ta.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const w=ge(c[m],d[m]);if(w!==0)return w;const T=Ds(l[c[m]],h[d[m]]);if(T!==0)return T}return ge(c.length,d.length)}(n.mapValue,e.mapValue);default:throw X()}}function kd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ge(n,e);const t=dr(n),r=dr(e),s=ge(t.seconds,r.seconds);return s!==0?s:ge(t.nanos,r.nanos)}function Pd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ds(t[s],r[s]);if(i)return i}return ge(t.length,r.length)}function Vs(n){return Bu(n)}function Bu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=dr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bu(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bu(t.fields[a])}`;return s+"}"}(n.mapValue):X()}function ju(n){return!!n&&"integerValue"in n}function $u(n){return!!n&&"arrayValue"in n}function Cd(n){return!!n&&"nullValue"in n}function Dd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ia(n){return!!n&&"mapValue"in n}function Cw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ki(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ki(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ki(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Dw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ia(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(t)}setAll(e){let t=nt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ki(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ia(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){zr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Ki(this.value))}}function Vd(n){const e=[];return zr(n.fields,(t,r)=>{const s=new nt([t]);if(Ia(r)){const i=Vd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Vt(e)}/**
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
 */class Aa{constructor(e,t){this.position=e,this.inclusive=t}}function Nd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=Ds(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Od(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_n(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ba{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Md{}class Qe extends Md{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ow(e,t,r):t==="array-contains"?new xw(e,r):t==="in"?new Fw(e,r):t==="not-in"?new Uw(e,r):t==="array-contains-any"?new Bw(e,r):new Qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Mw(e,r):new Lw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ds(t,this.value)):t!==null&&Wr(this.value)===Wr(t)&&this.matchesComparison(Ds(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends Md{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new vn(e,t)}matches(e){return Ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ld(n){return n.op==="and"}function xd(n){return Nw(n)&&Ld(n)}function Nw(n){for(const e of n.filters)if(e instanceof vn)return!1;return!0}function qu(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+Vs(n.value);if(xd(n))return n.filters.map(e=>qu(e)).join(",");{const e=n.filters.map(t=>qu(t)).join(",");return`${n.op}(${e})`}}function Fd(n,e){return n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(n,e):n instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Fd(a,s.filters[l]),!0):!1}(n,e):void X()}function Ud(n){return n instanceof Qe?function(t){return`${t.field.canonicalString()} ${t.op} ${Vs(t.value)}`}(n):n instanceof vn?function(t){return t.op.toString()+" {"+t.getFilters().map(Ud).join(" ,")+"}"}(n):"Filter"}class Ow extends Qe{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mw extends Qe{constructor(e,t){super(e,"in",t),this.keys=Bd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lw extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=Bd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class xw extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $u(t)&&Wi(t.arrayValue,this.value)}}class Fw extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wi(this.value.arrayValue,t)}}class Uw extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Wi(this.value.arrayValue,t)}}class Bw extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$u(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wi(this.value.arrayValue,r))}}/**
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
 */class jw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function jd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new jw(n,e,t,r,s,i,a)}function zu(n){const e=Z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ya(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=t}return e.ue}function Hu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Vw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Fd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Od(n.startAt,e.startAt)&&Od(n.endAt,e.endAt)}function Wu(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ra{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $w(n,e,t,r,s,i,a,l){return new Ra(n,e,t,r,s,i,a,l)}function Ku(n){return new Ra(n)}function $d(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qw(n){return n.collectionGroup!==null}function Gi(n){const e=Z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(nt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ba(i,r))}),t.has(nt.keyField().canonicalString())||e.ce.push(new ba(nt.keyField(),r))}return e.ce}function yn(n){const e=Z(n);return e.le||(e.le=zw(e,Gi(n))),e.le}function zw(n,e){if(n.limitType==="F")return jd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ba(s.field,i)});const t=n.endAt?new Aa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Aa(n.startAt.position,n.startAt.inclusive):null;return jd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Gu(n,e,t){return new Ra(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sa(n,e){return Hu(yn(n),yn(e))&&n.limitType===e.limitType}function qd(n){return`${zu(yn(n))}|lt:${n.limitType}`}function Ns(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ud(s)).join(", ")}]`),ya(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Vs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}(yn(n))}; limitType=${n.limitType})`}function ka(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Gi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Nd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Gi(r),s)||r.endAt&&!function(a,l,c){const h=Nd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Gi(r),s))}(n,e)}function Hw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zd(n){return(e,t)=>{let r=!1;for(const s of Gi(n)){const i=Ww(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ww(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Ds(c,h):X()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return bd(this.inner)}size(){return this.innerSize}}/**
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
 */const Kw=new Oe(Q.comparator);function qn(){return Kw}const Hd=new Oe(Q.comparator);function Qi(...n){let e=Hd;for(const t of n)e=e.insert(t.key,t);return e}function Wd(n){let e=Hd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Kr(){return Ji()}function Kd(){return Ji()}function Ji(){return new Os(n=>n.toString(),(n,e)=>n.isEqual(e))}const Gw=new Oe(Q.comparator),Qw=new st(Q.comparator);function ce(...n){let e=Qw;for(const t of n)e=e.add(t);return e}const Jw=new st(ge);function Yw(){return Jw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function Gd(n){return{integerValue:""+n}}function Xw(n,e){return Sw(e)?Gd(e):Qu(n,e)}/**
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
 */class Pa{constructor(){this._=void 0}}function Zw(n,e,t){return n instanceof Ca?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fu(i)&&(i=Uu(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Yi?Jd(n,e):n instanceof Xi?Yd(n,e):function(s,i){const a=Qd(s,i),l=Xd(a)+Xd(s.Pe);return ju(a)&&ju(s.Pe)?Gd(l):Qu(s.serializer,l)}(n,e)}function eT(n,e,t){return n instanceof Yi?Jd(n,e):n instanceof Xi?Yd(n,e):t}function Qd(n,e){return n instanceof Da?function(r){return ju(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ca extends Pa{}class Yi extends Pa{constructor(e){super(),this.elements=e}}function Jd(n,e){const t=Zd(e);for(const r of n.elements)t.some(s=>_n(s,r))||t.push(r);return{arrayValue:{values:t}}}class Xi extends Pa{constructor(e){super(),this.elements=e}}function Yd(n,e){let t=Zd(e);for(const r of n.elements)t=t.filter(s=>!_n(s,r));return{arrayValue:{values:t}}}class Da extends Pa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Xd(n){return Be(n.integerValue||n.doubleValue)}function Zd(n){return $u(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function tT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Yi&&s instanceof Yi||r instanceof Xi&&s instanceof Xi?Cs(r.elements,s.elements,_n):r instanceof Da&&s instanceof Da?_n(r.Pe,s.Pe):r instanceof Ca&&s instanceof Ca}(n.transform,e.transform)}class nT{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Na{}function ep(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ip(n.key,En.none()):new eo(n.key,n.data,En.none());{const t=n.data,r=kt.empty();let s=new st(nt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new pr(n.key,r,new Vt(s.toArray()),En.none())}}function rT(n,e,t){n instanceof eo?function(s,i,a){const l=s.value.clone(),c=rp(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof pr?function(s,i,a){if(!Va(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=rp(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(np(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Zi(n,e,t,r){return n instanceof eo?function(i,a,l,c){if(!Va(i.precondition,a))return l;const h=i.value.clone(),d=sp(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof pr?function(i,a,l,c){if(!Va(i.precondition,a))return l;const h=sp(i.fieldTransforms,c,a),d=a.data;return d.setAll(np(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Va(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function sT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Qd(r.transform,s||null);i!=null&&(t===null&&(t=kt.empty()),t.set(r.field,i))}return t||null}function tp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cs(r,s,(i,a)=>tT(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class eo extends Na{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pr extends Na{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function np(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rp(n,e,t){const r=new Map;Ae(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,eT(a,l,t[s]))}return r}function sp(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Zw(i,a,e))}return r}class ip extends Na{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iT extends Na{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Kd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=ep(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(t,r)=>tp(t,r))&&Cs(this.baseMutations,e.baseMutations,(t,r)=>tp(t,r))}}class Ju{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ae(e.mutations.length===r.length);let s=function(){return Gw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ju(e,t,r,s)}}/**
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
 */class aT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var qe,fe;function uT(n){switch(n){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function op(n){if(n===void 0)return $n("GRPC error has no .code"),M.UNKNOWN;switch(n){case qe.OK:return M.OK;case qe.CANCELLED:return M.CANCELLED;case qe.UNKNOWN:return M.UNKNOWN;case qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case qe.INTERNAL:return M.INTERNAL;case qe.UNAVAILABLE:return M.UNAVAILABLE;case qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case qe.NOT_FOUND:return M.NOT_FOUND;case qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case qe.ABORTED:return M.ABORTED;case qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case qe.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(fe=qe||(qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cT(){return new TextEncoder}/**
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
 */const hT=new jr([4294967295,4294967295],0);function ap(n){const e=cT().encode(n),t=new md;return t.update(e),new Uint8Array(t.digest())}function lp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([t,r],0),new jr([s,i],0)]}class Yu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new to(`Invalid padding: ${t}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new to(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=jr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(jr.fromNumber(r)));return s.compare(hT)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ap(e),[r,s]=lp(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Yu(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=ap(e),[r,s]=lp(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Oa(ee.min(),s,new Oe(ge),qn(),ce())}}class no{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new no(r,t,ce(),ce(),ce())}}/**
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
 */class Ma{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class up{constructor(e,t){this.targetId=e,this.me=t}}class cp{constructor(e,t,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class hp{constructor(){this.fe=0,this.ge=dp(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),t=ce(),r=ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X()}}),new no(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=dp()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fT{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=fp(),this.Qe=new Oe(ge)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Wu(i))if(r===0){const a=new Q(i.path);this.Ue(t,a,pt.newNoDocument(a,ee.min()))}else Ae(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Hr(r).toUint8Array()}catch(c){if(c instanceof Sd)return Ps("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Yu(a,s,i)}catch(c){return Ps(c instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Wu(l.target)){const c=new Q(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,pt.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ce();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Oa(e,t,this.Qe,this.ke,r);return this.ke=qn(),this.qe=fp(),this.Qe=new Oe(ge),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hp,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new st(ge),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hp),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fp(){return new Oe(Q.comparator)}function dp(){return new Oe(Q.comparator)}const dT={asc:"ASCENDING",desc:"DESCENDING"},pT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mT={and:"AND",or:"OR"};class gT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xu(n,e){return n.useProto3Json||ya(e)?e:{value:e}}function La(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _T(n,e){return La(n,e.toTimestamp())}function wn(n){return Ae(!!n),ee.fromTimestamp(function(t){const r=dr(t);return new Ge(r.seconds,r.nanos)}(n))}function Zu(n,e){return ec(n,e).canonicalString()}function ec(n,e){const t=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mp(n){const e=xe.fromString(n);return Ae(wp(e)),e}function tc(n,e){return Zu(n.databaseId,e.path)}function nc(n,e){const t=mp(e);if(t.get(1)!==n.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(_p(t))}function gp(n,e){return Zu(n.databaseId,e)}function vT(n){const e=mp(n);return e.length===4?xe.emptyPath():_p(e)}function rc(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _p(n){return Ae(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vp(n,e,t){return{name:tc(n,e),fields:t.value.mapValue.fields}}function yT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ae(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(Ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?M.UNKNOWN:op(h.code);return new W(d,h.message||"")}(a);t=new cp(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nc(n,r.document.name),i=wn(r.document.updateTime),a=r.document.createTime?wn(r.document.createTime):ee.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Ma(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nc(n,r.document),i=r.readTime?wn(r.readTime):ee.min(),a=pt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ma([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nc(n,r.document),i=r.removedTargetIds||[];t=new Ma([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new lT(s,i),l=r.targetId;t=new up(l,a)}}return t}function ET(n,e){let t;if(e instanceof eo)t={update:vp(n,e.key,e.value)};else if(e instanceof ip)t={delete:tc(n,e.key)};else if(e instanceof pr)t={update:vp(n,e.key,e.data),updateMask:PT(e.fieldMask)};else{if(!(e instanceof iT))return X();t={verify:tc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ca)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Da)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_T(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(n,e.precondition)),t}function wT(n,e){return n&&n.length>0?(Ae(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?wn(s.updateTime):wn(i);return a.isEqual(ee.min())&&(a=wn(i)),new nT(a,s.transformResults||[])}(t,e))):[]}function TT(n,e){return{documents:[gp(n,e.path)]}}function IT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gp(n,s);const i=function(h){if(h.length!==0)return Ep(vn.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(w){return{field:Ms(w.field),direction:RT(w.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Xu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function AT(n){let e=vT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ae(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const w=yp(m);return w instanceof vn&&xd(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(w=>function(b){return new ba(Ls(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(m){let w;return w=typeof m=="object"?m.value:m,ya(w)?null:w}(t.limit));let c=null;t.startAt&&(c=function(m){const w=!!m.before,T=m.values||[];return new Aa(T,w)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const w=!m.before,T=m.values||[];return new Aa(T,w)}(t.endAt)),$w(e,s,a,i,l,"F",c,h)}function bT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ls(t.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ls(t.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ls(t.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ls(t.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(t){return Qe.create(Ls(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vn.create(t.compositeFilter.filters.map(r=>yp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(t.compositeFilter.op))}(n):X()}function RT(n){return dT[n]}function ST(n){return pT[n]}function kT(n){return mT[n]}function Ms(n){return{fieldPath:n.canonicalString()}}function Ls(n){return nt.fromServerFormat(n.fieldPath)}function Ep(n){return n instanceof Qe?function(t){if(t.op==="=="){if(Dd(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NAN"}};if(Cd(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dd(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NOT_NAN"}};if(Cd(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(t.field),op:ST(t.op),value:t.value}}}(n):n instanceof vn?function(t){const r=t.getFilters().map(s=>Ep(s));return r.length===1?r[0]:{compositeFilter:{op:kT(t.op),filters:r}}}(n):X()}function PT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class mr{constructor(e,t,r,s,i=ee.min(),a=ee.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CT{constructor(e){this.ct=e}}function DT(n){const e=AT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gu(e,e.limit,"L"):e}/**
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
 */class VT{constructor(){this.un=new NT}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(fr.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class NT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new st(xe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(xe.comparator)).toArray()}}/**
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
 */class xs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xs(0)}static kn(){return new xs(-1)}}/**
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
 */class OT{constructor(){this.changes=new Os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class LT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Zi(r.mutation,s,Vt.empty(),Ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const s=Kr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Qi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Kr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=qn();const a=Ji(),l=function(){return Ji()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof pr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Zi(d.mutation,h,d.mutation.getFieldMask(),Ge.now())):a.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var m;return l.set(h,new MT(d,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ji();let s=new Oe((a,l)=>a-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Vt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const m=(s.get(l.batchId)||ce()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,m=Kd();d.forEach(w=>{if(!i.has(w)){const T=ep(t.get(w),r.get(w));T!==null&&m.set(w,T),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(Kr());let l=-1,c=i;return a.next(h=>O.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(w=>{c=c.insert(d,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ce())).next(d=>({batchId:l,changes:Wd(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Qi();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,c=>{const h=function(m,w){return new Ra(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((m,w)=>{a=a.insert(m,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,pt.newInvalidDocument(d)))});let l=Qi();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Zi(d.mutation,h,Vt.empty(),Ge.now()),ka(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:DT(s.bundledQuery),readTime:wn(s.readTime)}}(t)),O.resolve()}}/**
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
 */class FT{constructor(){this.overlays=new Oe(Q.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Kr();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=Kr(),i=t.length+1,a=new Q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Kr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Kr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return O.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new aT(t,r));let i=this.Ir.get(t);i===void 0&&(i=ce(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class UT{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class sc{constructor(){this.Tr=new st(Xe.Er),this.dr=new st(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Xe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Q(new xe([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Q(new xe([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=ce();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Q.comparator(e.key,t.key)||ge(e.wr,t.wr)}static Ar(e,t){return ge(e.wr,t.wr)||Q.comparator(e.key,t.key)}}/**
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
 */class BT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new st(Xe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new oT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new st(ge);return t.forEach(s=>{const i=new Xe(s,0),a=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new Xe(new Q(i),0);let l=new st(ge);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ae(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Xe(t,0),s=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jT{constructor(e){this.Mr=e,this.docs=function(){return new Oe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(t))}getEntries(e,t){let r=qn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=qn();const a=t.path,l=new Q(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Iw(Tw(d),r)<=0||(s.has(d.key)||ka(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $T(this)}getSize(e){return O.resolve(this.size)}}class $T extends OT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class qT{constructor(e){this.persistence=e,this.Nr=new Os(t=>zu(t),Hu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new sc,this.targetCount=0,this.kr=xs.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new xs(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class zT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new xu(0),this.Kr=!1,this.Kr=!0,this.$r=new UT,this.referenceDelegate=e(this),this.Ur=new qT(this),this.indexManager=new VT,this.remoteDocumentCache=function(s){return new jT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new CT(t),this.Gr=new xT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new FT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new BT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new HT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class HT extends bw{constructor(e){super(),this.currentSequenceNumber=e}}class ic{constructor(e){this.persistence=e,this.Jr=new sc,this.Yr=null}static Zr(e){return new ic(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class oc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new oc(e,t.fromCache,r,s)}}/**
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
 */class WT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return J_()?8:Rw(ft())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WT;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Bi()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ns(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Bi()<=he.DEBUG&&q("QueryEngine","Query:",Ns(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Bi()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ns(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(t))):O.resolve())}Yi(e,t){if($d(t))return O.resolve(null);let r=yn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Gu(t,null,"F"),r=yn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ce(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,Gu(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return $d(t)||s.isEqual(ee.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?O.resolve(null):(Bi()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ns(t)),this.rs(e,a,t,ww(s,-1)).next(l=>l))})}ts(e,t){let r=new st(zd(e));return t.forEach((s,i)=>{ka(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Bi()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ns(t)),this.Ji.getDocumentsMatchingQuery(e,t,fr.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Oe(ge),this._s=new Os(i=>zu(i),Hu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function QT(n,e,t,r){return new GT(n,e,t,r)}async function Tp(n,e){const t=Z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ce();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function JT(n,e){const t=Z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const m=h.batch,w=m.keys();let T=O.resolve();return w.forEach(b=>{T=T.next(()=>d.getEntry(c,b)).next(N=>{const C=h.docVersions.get(b);Ae(C!==null),N.version.compareTo(C)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ip(n){const e=Z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function YT(n,e){const t=Z(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((d,m)=>{const w=s.get(m);if(!w)return;l.push(t.Ur.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,d.addedDocuments,m)));let T=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(it.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(m,T),function(N,C,U){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(w,T,d)&&l.push(t.Ur.updateTargetData(i,T))});let c=qn(),h=ce();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(XT(i,a,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(ee.min())){const d=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return O.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function XT(n,e,t){let r=ce(),s=ce();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=qn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function ZT(n,e){const t=Z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eI(n,e){const t=Z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new mr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ac(n,e,t){const r=Z(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qi(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ap(n,e,t){const r=Z(n);let s=ee.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const m=Z(c),w=m._s.get(d);return w!==void 0?O.resolve(m.os.get(w)):m.Ur.getTargetData(h,d)}(r,a,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:ee.min(),t?i:ce())).next(l=>(tI(r,Hw(e),l),{documents:l,Ts:i})))}function tI(n,e,t){let r=n.us.get(e)||ee.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class bp{constructor(){this.activeTargetIds=Yw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nI{constructor(){this.so=new bp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rI{_o(e){}shutdown(){}}/**
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
 */class Rp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xa=null;function lc(){return xa===null?xa=function(){return 268435456+Math.round(2147483648*Math.random())}():xa++,"0x"+xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class oI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=lc(),c=this.xo(t,r.toUriEncodedString());q("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(d=>(q("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw Ps("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=sI[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=lc();return new Promise((a,l)=>{const c=new gd;c.setWithCredentials(!0),c.listenOnce(_d.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case va.NO_ERROR:const d=c.getResponseJson();q(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case va.TIMEOUT:q(mt,`RPC '${e}' ${i} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const m=c.getStatus();if(q(mt,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const T=w==null?void 0:w.error;if(T&&T.status&&T.message){const b=function(C){const U=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(U)>=0?U:M.UNKNOWN}(T.status);l(new W(b,T.message))}else l(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{q(mt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);q(mt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=lc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ed(),l=yd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");q(mt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let w=!1,T=!1;const b=new iI({Io:C=>{T?q(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(w||(q(mt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),w=!0),q(mt,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},To:()=>m.close()}),N=(C,U,K)=>{C.listen(U,z=>{try{K(z)}catch(te){setTimeout(()=>{throw te},0)}})};return N(m,Ui.EventType.OPEN,()=>{T||(q(mt,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),N(m,Ui.EventType.CLOSE,()=>{T||(T=!0,q(mt,`RPC '${e}' stream ${s} transport closed`),b.So())}),N(m,Ui.EventType.ERROR,C=>{T||(T=!0,Ps(mt,`RPC '${e}' stream ${s} transport errored:`,C),b.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,Ui.EventType.MESSAGE,C=>{var U;if(!T){const K=C.data[0];Ae(!!K);const z=K,te=z.error||((U=z[0])===null||U===void 0?void 0:U.error);if(te){q(mt,`RPC '${e}' stream ${s} received error:`,te);const Ce=te.status;let we=function(y){const _=qe[y];if(_!==void 0)return op(_)}(Ce),I=te.message;we===void 0&&(we=M.INTERNAL,I="Unknown error status: "+Ce+" with message "+te.message),T=!0,b.So(new W(we,I)),m.close()}else q(mt,`RPC '${e}' stream ${s} received:`,K),b.bo(K)}}),N(l,vd.STAT_EVENT,C=>{C.stat===Mu.PROXY?q(mt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Mu.NOPROXY&&q(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){return new gT(n,!0)}/**
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
 */class Sp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kp{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?($n(t.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aI extends kp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=yT(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?wn(a.readTime):ee.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=rc(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Wu(c)?{documents:TT(i,c)}:{query:IT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=pp(i,a.resumeToken);const h=Xu(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ee.min())>0){l.readTime=La(i,a.snapshotVersion.toTimestamp());const h=Xu(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=bT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=rc(this.serializer),t.removeTarget=e,this.a_(t)}}class lI extends kp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=wT(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=rc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ET(this.serializer,r))};this.a_(t)}}/**
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
 */class uI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ec(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(M.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ec(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($n(t),this.D_=!1):q("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class hI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Gr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Z(c);h.L_.add(4),await ro(h),h.q_.set("Unknown"),h.L_.delete(4),await Ua(h)}(this))})}),this.q_=new cI(r,s)}}async function Ua(n){if(Gr(n))for(const e of n.B_)await e(!0)}async function ro(n){for(const e of n.B_)await e(!1)}function Pp(n,e){const t=Z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),dc(t)?fc(t):Fs(t).r_()&&hc(t,e))}function cc(n,e){const t=Z(n),r=Fs(t);t.N_.delete(e),r.r_()&&Cp(t,e),t.N_.size===0&&(r.r_()?r.o_():Gr(t)&&t.q_.set("Unknown"))}function hc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fs(n).A_(e)}function Cp(n,e){n.Q_.xe(e),Fs(n).R_(e)}function fc(n){n.Q_=new fT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Fs(n).start(),n.q_.v_()}function dc(n){return Gr(n)&&!Fs(n).n_()&&n.N_.size>0}function Gr(n){return Z(n).L_.size===0}function Dp(n){n.Q_=void 0}async function fI(n){n.q_.set("Online")}async function dI(n){n.N_.forEach((e,t)=>{hc(n,e)})}async function pI(n,e){Dp(n),dc(n)?(n.q_.M_(e),fc(n)):n.q_.set("Unknown")}async function mI(n,e,t){if(n.q_.set("Online"),e instanceof cp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ba(n,r)}else if(e instanceof Ma?n.Q_.Ke(e):e instanceof up?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ee.min()))try{const r=await Ip(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),Cp(i,c);const m=new mr(d.target,c,h,d.sequenceNumber);hc(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Ba(n,r)}}async function Ba(n,e,t){if(!qi(e))throw e;n.L_.add(1),await ro(n),n.q_.set("Offline"),t||(t=()=>Ip(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ua(n)})}function Vp(n,e){return e().catch(t=>Ba(n,t,e))}async function ja(n){const e=Z(n),t=gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;gI(e);)try{const s=await ZT(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,_I(e,s)}catch(s){await Ba(e,s)}Np(e)&&Op(e)}function gI(n){return Gr(n)&&n.O_.length<10}function _I(n,e){n.O_.push(e);const t=gr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Np(n){return Gr(n)&&!gr(n).n_()&&n.O_.length>0}function Op(n){gr(n).start()}async function vI(n){gr(n).p_()}async function yI(n){const e=gr(n);for(const t of n.O_)e.m_(t.mutations)}async function EI(n,e,t){const r=n.O_.shift(),s=Ju.from(r,e,t);await Vp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ja(n)}async function wI(n,e){e&&gr(n).V_&&await async function(r,s){if(function(a){return uT(a)&&a!==M.ABORTED}(s.code)){const i=r.O_.shift();gr(r).s_(),await Vp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ja(r)}}(n,e),Np(n)&&Op(n)}async function Mp(n,e){const t=Z(n);t.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Gr(t);t.L_.add(3),await ro(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ua(t)}async function TI(n,e){const t=Z(n);e?(t.L_.delete(2),await Ua(t)):e||(t.L_.add(2),await ro(t),t.q_.set("Unknown"))}function Fs(n){return n.K_||(n.K_=function(t,r,s){const i=Z(t);return i.w_(),new aI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:fI.bind(null,n),Ro:dI.bind(null,n),mo:pI.bind(null,n),d_:mI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),dc(n)?fc(n):n.q_.set("Unknown")):(await n.K_.stop(),Dp(n))})),n.K_}function gr(n){return n.U_||(n.U_=function(t,r,s){const i=Z(t);return i.w_(),new lI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vI.bind(null,n),mo:wI.bind(null,n),f_:yI.bind(null,n),g_:EI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ja(n)):(await n.U_.stop(),n.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class pc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new pc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mc(n,e){if($n("AsyncQueue",`${e}: ${n}`),qi(n))return new W(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Us{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Qi(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Lp{constructor(){this.W_=new Oe(Q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Bs{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Bs(e,t,Us.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class II{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class AI{constructor(){this.queries=xp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Z(t),i=s.queries;s.queries=xp(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function xp(){return new Os(n=>qd(n),Sa)}async function bI(n,e){const t=Z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new II,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=mc(a,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&gc(t)}async function RI(n,e){const t=Z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function SI(n,e){const t=Z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&gc(t)}function kI(n,e,t){const r=Z(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function gc(n){n.Y_.forEach(e=>{e.next()})}var _c,Fp;(Fp=_c||(_c={})).ea="default",Fp.Cache="cache";class PI{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_c.Cache}}/**
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
 */class Up{constructor(e){this.key=e}}class Bp{constructor(e){this.key=e}}class CI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=zd(e),this.Ra=new Us(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Lp,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const w=s.get(d),T=ka(this.query,m)?m:null,b=!!w&&this.mutatedKeys.has(w.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;w&&T?w.data.isEqual(T.data)?b!==N&&(r.track({type:3,doc:T}),C=!0):this.ga(w,T)||(r.track({type:2,doc:T}),C=!0,(c&&this.Aa(T,c)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!w&&T?(r.track({type:0,doc:T}),C=!0):w&&!T&&(r.track({type:1,doc:w}),C=!0,(c||h)&&(l=!0)),C&&(T?(a=a.add(T),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((d,m)=>function(T,b){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return N(T)-N(b)}(d.type,m.type)||this.Aa(d.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new Bs(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Lp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Bp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Up(r))}),t}ba(e){this.Ta=e.Ts,this.da=ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Bs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class DI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class VI{constructor(e){this.key=e,this.va=!1}}class NI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Os(l=>qd(l),Sa),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(Q.comparator),this.Na=new Map,this.La=new sc,this.Ba={},this.ka=new Map,this.qa=xs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OI(n,e,t=!0){const r=Gp(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await jp(r,e,t,!0),s}async function MI(n,e){const t=Gp(n);await jp(t,e,!0,!1)}async function jp(n,e,t,r){const s=await eI(n.localStore,yn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await LI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pp(n.remoteStore,s),l}async function LI(n,e,t,r,s){n.Ka=(m,w,T)=>async function(N,C,U,K){let z=C.view.ma(U);z.ns&&(z=await Ap(N.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,z)));const te=K&&K.targetChanges.get(C.targetId),Ce=K&&K.targetMismatches.get(C.targetId)!=null,we=C.view.applyChanges(z,N.isPrimaryClient,te,Ce);return Kp(N,C.targetId,we.wa),we.snapshot}(n,m,w,T);const i=await Ap(n.localStore,e,!0),a=new CI(e,i.Ts),l=a.ma(i.documents),c=no.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Kp(n,t,h.wa);const d=new DI(e,t,a);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function xI(n,e,t){const r=Z(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Sa(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ac(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&cc(r.remoteStore,s.targetId),vc(r,s.targetId)}).catch($i)):(vc(r,s.targetId),await ac(r.localStore,s.targetId,!0))}async function FI(n,e){const t=Z(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),cc(t.remoteStore,r.targetId))}async function UI(n,e,t){const r=WI(n);try{const s=await function(a,l){const c=Z(a),h=Ge.now(),d=l.reduce((T,b)=>T.add(b.key),ce());let m,w;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let b=qn(),N=ce();return c.cs.getEntries(T,d).next(C=>{b=C,b.forEach((U,K)=>{K.isValidDocument()||(N=N.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,b)).next(C=>{m=C;const U=[];for(const K of l){const z=sT(K,m.get(K.key).overlayedDocument);z!=null&&U.push(new pr(K.key,z,Vd(z.value.mapValue),En.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,U,l)}).next(C=>{w=C;const U=C.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(T,C.batchId,U)})}).then(()=>({batchId:w.batchId,changes:Wd(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Oe(ge)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await so(r,s.changes),await ja(r.remoteStore)}catch(s){const i=mc(s,"Failed to persist write");t.reject(i)}}async function $p(n,e){const t=Z(n);try{const r=await YT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Ae(a.va):s.removedDocuments.size>0&&(Ae(a.va),a.va=!1))}),await so(t,r,e)}catch(r){await $i(r)}}function qp(n,e,t){const r=Z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Z(a);c.onlineState=l;let h=!1;c.queries.forEach((d,m)=>{for(const w of m.j_)w.Z_(l)&&(h=!0)}),h&&gc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BI(n,e,t){const r=Z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Oe(Q.comparator);a=a.insert(i,pt.newNoDocument(i,ee.min()));const l=ce().add(i),c=new Oa(ee.min(),new Map,new Oe(ge),a,l);await $p(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),yc(r)}else await ac(r.localStore,e,!1).then(()=>vc(r,e,t)).catch($i)}async function jI(n,e){const t=Z(n),r=e.batch.batchId;try{const s=await JT(t.localStore,e);Hp(t,r,null),zp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await so(t,s)}catch(s){await $i(s)}}async function $I(n,e,t){const r=Z(n);try{const s=await function(a,l){const c=Z(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ae(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Hp(r,e,t),zp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await so(r,s)}catch(s){await $i(s)}}function zp(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Hp(n,e,t){const r=Z(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function vc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Wp(n,r)})}function Wp(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(cc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),yc(n))}function Kp(n,e,t){for(const r of t)r instanceof Up?(n.La.addReference(r.key,e),qI(n,r)):r instanceof Bp?(q("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Wp(n,r.key)):X()}function qI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(q("SyncEngine","New document in limbo: "+t),n.xa.add(r),yc(n))}function yc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Q(xe.fromString(e)),r=n.qa.next();n.Na.set(r,new VI(t)),n.Oa=n.Oa.insert(t,r),Pp(n.remoteStore,new mr(yn(Ku(t.path)),r,"TargetPurposeLimboResolution",xu.oe))}}async function so(n,e,t){const r=Z(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=oc.Wi(c.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const d=Z(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,w=>O.forEach(w.$i,T=>d.persistence.referenceDelegate.addReference(m,w.targetId,T)).next(()=>O.forEach(w.Ui,T=>d.persistence.referenceDelegate.removeReference(m,w.targetId,T)))))}catch(m){if(!qi(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const w=m.targetId;if(!m.fromCache){const T=d.os.get(w),b=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(b);d.os=d.os.insert(w,N)}}}(r.localStore,i))}async function zI(n,e){const t=Z(n);if(!t.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Tp(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new W(M.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await so(t,r.hs)}}function HI(n,e){const t=Z(n),r=t.Na.get(e);if(r&&r.va)return ce().add(r.key);{let s=ce();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Gp(n){const e=Z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$p.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BI.bind(null,e),e.Ca.d_=SI.bind(null,e.eventManager),e.Ca.$a=kI.bind(null,e.eventManager),e}function WI(n){const e=Z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$I.bind(null,e),e}class $a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return QT(this.persistence,new KT,e.initialUser,this.serializer)}Ga(e){return new zT(ic.Zr,this.serializer)}Wa(e){return new nI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$a.provider={build:()=>new $a};class Ec{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zI.bind(null,this.syncEngine),await TI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AI}()}createDatastore(e){const t=Fa(e.databaseInfo.databaseId),r=function(i){return new oI(i)}(e.databaseInfo);return function(i,a,l,c){return new uI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new hI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>qp(this.syncEngine,t,0),function(){return Rp.D()?new Rp:new rI}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,d){const m=new NI(s,i,a,l,c,h);return d&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Z(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ro(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ec.provider={build:()=>new Ec};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class GI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Id.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=mc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wc(n,e){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QI(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Mp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Mp(e.remoteStore,s)),n._onlineComponents=e}async function QI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await wc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ps("Error using user provided cache. Falling back to memory cache: "+t),await wc(n,new $a)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await wc(n,new $a);return n._offlineComponents}async function Jp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Qp(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Qp(n,new Ec))),n._onlineComponents}function JI(n){return Jp(n).then(e=>e.syncEngine)}async function Yp(n){const e=await Jp(n),t=e.eventManager;return t.onListen=OI.bind(null,e.syncEngine),t.onUnlisten=xI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FI.bind(null,e.syncEngine),t}/**
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
 */function YI(n,e,t){if(!t)throw new W(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function XI(n,e,t,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function em(n){if(!Q.isDocumentKey(n))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function _r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Tc(n);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ic{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fw;switch(r.type){case"firstParty":return new gw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zp.get(t);r&&(q("ComponentProvider","Removing Datastore"),Zp.delete(t),r.terminate())}(this),Promise.resolve()}}function ZI(n,e,t,r={}){var s;const i=(n=_r(n,Ic))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=dt.MOCK_USER;else{l=q_(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new dt(h)}n._authCredentials=new dw(new Td(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qa(this.firestore,e,this._query)}}class Nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new io(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class io extends qa{constructor(e,t,r){super(e,t,Ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Q(e))}withConverter(e){return new io(this.firestore,e,this._path)}}function za(n,e,...t){if(n=St(n),arguments.length===1&&(e=Id.newId()),YI("doc","path",e),n instanceof Ic){const r=xe.fromString(e,...t);return em(r),new Nt(n,null,new Q(r))}{if(!(n instanceof Nt||n instanceof io))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return em(r),new Nt(n.firestore,n instanceof io?n.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sp(this,"async_queue_retry"),this.Vu=()=>{const r=uc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new qr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qi(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=pc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function rm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class oo extends Ic{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new nm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nm(e),this._firestoreClient=void 0,await e}}}function e0(n,e){const t=typeof n=="object"?n:df(),r=typeof n=="string"?n:"(default)",s=vu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=j_("firestore");i&&ZI(s,...i)}return s}function sm(n){if(n._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||t0(n),n._firestoreClient}function t0(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,d){return new Pw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Xp(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new GI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(it.fromBase64String(e))}catch(t){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new js(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this._methodName=e}}/**
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
 */class bc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class Rc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const n0=/^__.*__$/;class r0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new eo(e,this.data,t,this.fieldTransforms)}}class im{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new pr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function om(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Sc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ga(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(om(this.Cu)&&n0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class s0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fa(e)}Qu(e,t,r,s=!1){return new Sc({Cu:e,methodName:t,qu:r,path:nt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function am(n){const e=n._freezeSettings(),t=Fa(n._databaseId);return new s0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function i0(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);kc("Data must be an object, but it was:",a,r);const l=lm(r,a);let c,h;if(i.merge)c=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const w=Pc(e,m,t);if(!a.contains(w))throw new W(M.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);cm(d,w)||d.push(w)}c=new Vt(d),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new r0(new kt(l),c,h)}class Wa extends Ac{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}function o0(n,e,t,r){const s=n.Qu(1,e,t);kc("Data must be an object, but it was:",s,r);const i=[],a=kt.empty();zr(r,(c,h)=>{const d=Cc(e,c,t);h=St(h);const m=s.Nu(d);if(h instanceof Wa)i.push(d);else{const w=Ka(h,m);w!=null&&(i.push(d),a.set(d,w))}});const l=new Vt(i);return new im(a,l,s.fieldTransforms)}function a0(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[Pc(e,r,t)],c=[s];if(i.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(Pc(e,i[w])),c.push(i[w+1]);const h=[],d=kt.empty();for(let w=l.length-1;w>=0;--w)if(!cm(h,l[w])){const T=l[w];let b=c[w];b=St(b);const N=a.Nu(T);if(b instanceof Wa)h.push(T);else{const C=Ka(b,N);C!=null&&(h.push(T),d.set(T,C))}}const m=new Vt(h);return new im(d,m,a.fieldTransforms)}function Ka(n,e){if(um(n=St(n)))return kc("Unsupported field value:",e,n),lm(n,e);if(n instanceof Ac)return function(r,s){if(!om(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Ka(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:La(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:La(s.serializer,i)}}if(r instanceof bc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:pp(s.serializer,r._byteString)};if(r instanceof Nt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Qu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Tc(r)}`)}(n,e)}function lm(n,e){const t={};return bd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(n,(r,s)=>{const i=Ka(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function um(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof bc||n instanceof js||n instanceof Nt||n instanceof Ac||n instanceof Rc)}function kc(n,e,t){if(!um(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Tc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Pc(n,e,t){if((e=St(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return Cc(n,e);throw Ga("Field path arguments must be of type string or ",n,!1,void 0,t)}const l0=new RegExp("[~\\*/\\[\\]]");function Cc(n,e,t){if(e.search(l0)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ha(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ga(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new W(M.INVALID_ARGUMENT,l+n+c)}function cm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class u0 extends hm{data(){return super.data()}}function fm(n,e){return typeof e=="string"?Cc(n,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class h0{convertValue(e,t="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Be(a.doubleValue));return new Rc(i)}convertGeoPoint(e){return new bc(Be(e.latitude),Be(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Uu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zi(e));default:return null}}convertTimestamp(e){const t=dr(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Ae(wp(r));const s=new Hi(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dm extends hm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(fm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Qa extends dm{data(e={}){return super.data(e)}}class d0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qa(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ao(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ao(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:p0(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function p0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class pm extends h0{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,t)}}function m0(n,e,t){n=_r(n,Nt);const r=_r(n.firestore,oo),s=f0(n.converter,e,t);return gm(r,[i0(am(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,En.none())])}function mm(n,e,t,...r){n=_r(n,Nt);const s=_r(n.firestore,oo),i=am(s);let a;return a=typeof(e=St(e))=="string"||e instanceof Ha?a0(i,"updateDoc",n._key,e,t,r):o0(i,"updateDoc",n._key,e),gm(s,[a.toMutation(n._key,En.exists(!0))])}function g0(n,...e){var t,r,s;n=St(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||rm(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(rm(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,h,d;if(n instanceof Nt)h=_r(n.firestore,oo),d=Ku(n._key.path),c={next:m=>{e[a]&&e[a](_0(h,n,m))},error:e[a+1],complete:e[a+2]};else{const m=_r(n,qa);h=_r(m.firestore,oo),d=m._query;const w=new pm(h);c={next:T=>{e[a]&&e[a](new d0(h,w,m,T))},error:e[a+1],complete:e[a+2]},c0(n._query)}return function(w,T,b,N){const C=new KI(N),U=new PI(T,C,b);return w.asyncQueue.enqueueAndForget(async()=>bI(await Yp(w),U)),()=>{C.Za(),w.asyncQueue.enqueueAndForget(async()=>RI(await Yp(w),U))}}(sm(h),d,l,c)}function gm(n,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>UI(await JI(r),s,i)),i.promise}(sm(n),e)}function _0(n,e,t){const r=t.docs.get(e._key),s=new pm(n);return new dm(n,s,e._key,r,new ao(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ks=s})(ws),Es(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new oo(new pw(r.getProvider("auth-internal")),new vw(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hi(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),or(wd,"4.7.3",e),or(wd,"4.7.3","esm2017")})();const _m=ff({apiKey:"AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI",authDomain:"quiz-samarbeid.firebaseapp.com",projectId:"quiz-samarbeid",storageBucket:"quiz-samarbeid.firebasestorage.app",messagingSenderId:"968266660672",appId:"1:968266660672:web:e86724467bb2b398edd8a5"}),vm=cw(_m);vm.languageCode="no";const Ja=e0(_m),Ya=n=>({"permission-denied":"du har ikkje lov til dette",unavailable:"ingen kontakt med tenaren","auth/popup-closed-by-user":"innlogginga vart avbroten"})[n&&n.code]||n&&n.message||"ukjend feil",vr=n=>{const e=parseFloat(String(n??"").replace(",","."));return isNaN(e)?0:e};function v0(n){const e=(n==null?void 0:n.plan)||[],t={},r={};return e.forEach(s=>{s.type==="sporsmal"&&s.nummerert!==!1&&(t[s.kat]=(t[s.kat]||0)+1)}),e.map(s=>s.type!=="sporsmal"||s.nummerert===!1?{...s}:(r[s.kat]=(r[s.kat]||0)+1,{...s,qNr:r[s.kat],qTot:t[s.kat]}))}function y0(n,e,t){const r=((n==null?void 0:n.kategoriar)||[]).find(l=>l.id===t);if(r&&r.fasitliste&&r.fasitliste.length)return r.fasitliste;const s=e.filter(l=>l.type==="sporsmal"&&l.kat===t),i=s.filter(l=>l.nummerert!==!1);if(i.length)return i.map(l=>l.svar||"");const a=s.map(l=>l.svar||"").filter(Boolean);return a.length===1?a[0].split(/\s+·\s+/):a}function E0(n,e){const t=n.poeng||{};return((e==null?void 0:e.kategoriar)||[]).reduce((r,s)=>r+vr(t[s.id])*(n.joker===s.id?2:1),0)}function w0(n,e){const t=(n||[]).filter(r=>(r.namn||"").trim()).map(r=>({...r,sum:E0(r,e)}));return t.sort((r,s)=>s.sum-r.sum||r.bord-s.bord),t.forEach(r=>{r.rank=t.filter(s=>s.sum>r.sum).length+1}),t}function T0(n,e,t){var a;const r=((n==null?void 0:n.kategoriar)||[]).find(l=>l.id===t);if((a=r==null?void 0:r.fasitliste)!=null&&a.length)return r.fasitliste.map(l=>({tekst:"",svar:l}));const s=e.filter(l=>l.type==="sporsmal"&&l.kat===t&&l.nummerert!==!1);if(s.length)return s.map(l=>({tekst:l.tekst||"",svar:l.svar||""}));const i=y0(n,e,t);return i.length?i.map(l=>({tekst:"",svar:l})):Array.from({length:6},()=>({tekst:"",svar:""}))}const Pt=Nn({quiz:null,state:{...{steg:0,modus:"plan",avslort:0,sist:0}},lag:[],klar:!1,feil:"",no:{},kodar:{}}),ym=Nn({quiz:null,ventar:!1,melding:"",feil:!1});function lo(n,e=!1){ym.melding=n,ym.feil=e}var I0=Te('<span class="ant svelte-kp1wi9"> </span>'),A0=Te('<button class="btn svelte-kp1wi9" type="button"> <!></button>'),b0=Te('<span class="dempa">Ingen kategoriar enno. Lag dei under «Oppsett».</span>'),R0=Te('<div class="rad valt svelte-kp1wi9"><strong class="svelte-kp1wi9"> </strong><span class="dempa"> <!></span> <button class="jokerknapp svelte-kp1wi9" type="button" title="Jokeren står på svararket"> </button> <span style="flex:1"></span><button class="lenke svelte-kp1wi9" type="button">Bytt lag</button></div>'),S0=Te('<small class="svelte-kp1wi9"> </small>'),k0=Te('<button type="button"> <!></button>'),P0=Te('<span class="dempa"> </span>'),C0=Te('<input class="inp sok svelte-kp1wi9" placeholder="Skriv lagnamn …" aria-label="Søk etter lag" autocomplete="off" spellcheck="false"/> <div class="rad forslag svelte-kp1wi9"></div>',1),D0=Te('<span></span> <input class="inp" inputmode="decimal"/> <input class="inp" inputmode="decimal"/>',1),V0=Te('<div class="cfgboks svelte-kp1wi9"><p class="dempa" style="margin:0 0 8px">Poeng per spørsmål i denne runda. Det gjeld for begge som rettar. Halv er alltid halvparten av full.</p> <div class="cfg svelte-kp1wi9"><span></span><b class="svelte-kp1wi9">Full</b><b class="svelte-kp1wi9">Annet</b> <!></div></div>'),N0=Te('<span class="svar svelte-kp1wi9"> </span>'),O0=Te('<div><div class="lbl svelte-kp1wi9"><b class="svelte-kp1wi9"></b><!></div> <button type="button" class="o full svelte-kp1wi9"><small class="svelte-kp1wi9">Full</small><b class="svelte-kp1wi9"> </b></button> <button type="button" class="o annet svelte-kp1wi9"><small class="svelte-kp1wi9">Annet</small><b class="svelte-kp1wi9"> </b></button> <button type="button" class="o halv svelte-kp1wi9"><small class="svelte-kp1wi9">Halv</small><b class="svelte-kp1wi9"> </b></button> <input inputmode="decimal" placeholder="Anna"/></div>'),M0=Te('<div class="spm svelte-kp1wi9"></div> <p class="dempa tastar svelte-kp1wi9"><kbd class="svelte-kp1wi9">1</kbd> full · <kbd class="svelte-kp1wi9">2</kbd> annet · <kbd class="svelte-kp1wi9">3</kbd> halv · <kbd class="svelte-kp1wi9">0</kbd> feil · går vidare av seg sjølv · <kbd class="svelte-kp1wi9">Enter</kbd> lagre · <kbd class="svelte-kp1wi9">Esc</kbd> nytt lag</p>',1),L0=Te('<p class="dempa" style="margin:6px 0 0">Vel eit lag for å rette.</p>'),x0=Te('<li class="svelte-kp1wi9"><span> </span><span class="n svelte-kp1wi9"> </span><b> </b></li>'),F0=Te('<li class="dempa svelte-kp1wi9">Ingen poeng enno.</li>'),U0=Te('<span></span> <span class="stolpe svelte-kp1wi9"><i class="f svelte-kp1wi9"></i><i class="a svelte-kp1wi9"></i><i class="h svelte-kp1wi9"></i></span> <b class="svelte-kp1wi9"> </b>',1),B0=Te('<div class="stat svelte-kp1wi9"></div> <p class="dempa lg svelte-kp1wi9"><span><i class="f svelte-kp1wi9"></i>Full</span><span><i class="a svelte-kp1wi9"></i>Annet</span><span><i class="h svelte-kp1wi9"></i>Halv</span><span>Tom = feil</span></p>',1),j0=Te('<p class="dempa" style="margin:6px 0 0">Ingen retta lag i denne runda enno.</p>'),$0=Te('<li class="svelte-kp1wi9"><span> </span><span class="dempa"> </span></li>'),q0=Te('<li class="dempa svelte-kp1wi9">Treng minst 3 retta lag i ei runde.</li>'),z0=Te('<div class="toast svelte-kp1wi9" role="status"> </div>'),H0=Te('<th class="t svelte-kp1wi9"> </th>'),W0=Te('<span class="jm svelte-kp1wi9">★</span>'),K0=Te("<td> <!></td>"),G0=Te('<tr><td class="svelte-kp1wi9"> </td><td class="nm2 svelte-kp1wi9"> </td><td class="t sm svelte-kp1wi9"> </td><!></tr>'),Q0=Te('<tr><td class="dempa svelte-kp1wi9">Ingen lag med namn enno.</td></tr>'),J0=Te('<div class="dekk svelte-kp1wi9" role="dialog" aria-modal="true" aria-label="Resultatliste"><div class="inner"><div class="rad" style="justify-content:space-between;margin:12px 0"><h2>Resultatliste</h2> <div class="rad"><button class="btn" type="button">Last ned CSV</button><button class="btn primary" type="button">Lukk</button></div></div> <div class="kort tabell svelte-kp1wi9"><table class="svelte-kp1wi9"><thead><tr><th class="svelte-kp1wi9">Plass</th><th class="svelte-kp1wi9">Lag</th><th class="t svelte-kp1wi9">Sum</th><!></tr></thead><tbody></tbody></table></div> <p class="dempa">★ = joker (dobbel poeng). Same tal som på poengtavla. CSV-fila passar i Excel.</p></div></div>'),Y0=Te('<section class="rett svelte-kp1wi9"><div class="venstre svelte-kp1wi9"><div class="kort"><h3>Runde</h3> <div class="rad runder svelte-kp1wi9" role="group" aria-label="Vel runde"><!> <!></div></div> <div class="kort"><h3>Lag</h3> <!></div> <div class="kort"><div class="rad" style="justify-content:space-between"><h3> </h3> <button class="btn liten" type="button">Sett poeng</button></div> <!> <!></div></div> <div class="hogre svelte-kp1wi9"><div class="kort"><div class="rad" style="justify-content:space-between"><h3>Resultat</h3><button class="btn primary liten" type="button">Resultatliste</button></div> <ol class="topp5 svelte-kp1wi9"></ol></div> <div class="kort"><h3> </h3> <!> <h3 style="margin-top:14px">Vanskelegaste spørsmål</h3> <ul class="hard svelte-kp1wi9"></ul></div></div></section> <div class="bar svelte-kp1wi9"><div class="inner rad" style="flex-wrap:nowrap"><div class="sumboks svelte-kp1wi9"><div class="sumtal svelte-kp1wi9"> <small class="svelte-kp1wi9"> <!></small></div> <div class="dempa nm svelte-kp1wi9"> </div></div> <button class="btn primary lagre svelte-kp1wi9" type="button">Lagre</button></div></div> <!> <!>',1);function X0(n,e){Cl(e,!0);let t=C_(e,"demo",3,!1);const r=A=>(Math.round((Number(A)||0)*100)/100).toLocaleString("nb-NO"),s=A=>String(A||"").toLowerCase().replace(/æ/g,"ae").replace(/ø/g,"o").replace(/å/g,"a").normalize("NFD").replace(/[̀-ͯ]/g,""),i=()=>{var A;return t()?"deg@demo":(((A=vm.currentUser)==null?void 0:A.email)||"").toLowerCase()},a=A=>(A||"").split("@")[0],l=ht(()=>{var A;return((A=Pt.quiz)==null?void 0:A.kategoriar)||[]}),c=ht(()=>v0(Pt.quiz));let h=$e(""),d=$e(""),m=$e(""),w=$e(0),T=$e(0),b=$e(Nn([])),N=$e(!1),C=$e(!1),U=$e(""),K=$e(Nn({})),z=$e(void 0);bi(()=>{v(l).length&&!v(l).some(A=>A.id===v(h))&&re(h,v(l)[0].id,!0)});const te=ht(()=>v(l).find(A=>A.id===v(h))),Ce=A=>T0(Pt.quiz,v(c),A);function we(A,V){const L=v(K)[A==null?void 0:A.id]||[],B=A!=null&&A.maks?vr(A.maks)/V:1;return Array.from({length:V},(x,j)=>L[j]?{full:vr(L[j].full),annet:vr(L[j].annet)}:{full:B,annet:B*.75})}const I=ht(()=>Ce(v(h))),g=ht(()=>we(v(te),v(I).length)),y=ht(()=>Pt.lag.filter(A=>(A.namn||"").trim())),_=ht(()=>Pt.lag.find(A=>A.id===v(d)));D_(()=>t()?void 0:g0(za(Ja,"etne","rett"),A=>{re(K,A.exists()?A.data().cfg||{}:{},!0)},A=>lo("Poenginnstillingar: "+Ya(A),!0)));function R(A,V=v(b)[A],L=v(g)[A]){return!V||!L?0:V.m==="full"?L.full:V.m==="annet"?L.annet:V.m==="halv"?L.full/2:V.m==="eigen"?vr(V.c):0}const S=ht(()=>v(b).reduce((A,V,L)=>A+R(L),0)),E=ht(()=>v(g).reduce((A,V)=>A+V.full,0)),ot=ht(()=>{var L;const A=s(v(m).trim()),V=[];for(const B of v(y)){const x=s(B.namn),j=!!((L=B.rett)!=null&&L[v(h)]);let $=0;if(!A)$=1;else{const J=x.indexOf(A);if(J===0)$=120;else if(J>0)$=(x[J-1]===" "?100:80)-J;else if(A.split(/\s+/).length>1&&A.split(/\s+/).every(oe=>x.includes(oe)))$=60;else{let oe=0,ae=0,ve=-1;for(let be=0;be<x.length&&oe<A.length;be++)x[be]===A[oe]&&(ve>=0&&(ae+=be-ve-1),ve=be,oe++);oe===A.length&&($=Math.max(5,40-ae))}}$>0&&V.push({l:B,s:$,ferdig:j})}return V.sort((B,x)=>B.ferdig-x.ferdig||x.s-B.s||B.l.bord-x.l.bord).slice(0,v(m).trim()?8:16)});function Gt(A){var B,x,j;re(d,A,!0),re(m,""),re(T,0);const V=Pt.lag.find($=>$.id===A),L=(x=(B=V==null?void 0:V.rett)==null?void 0:B[v(h)])==null?void 0:x.marks;re(b,Array.from({length:v(I).length},($,J)=>L!=null&&L[J]?{m:L[J].m||"",c:L[J].c||""}:{m:"",c:""}),!0),(j=v(z))==null||j.blur()}function Kn(A=!0){var V;re(d,""),re(b,[],!0),re(T,0),re(m,""),re(w,0),A&&((V=v(z))==null||V.focus())}function bn(A){if(re(h,A,!0),v(d)){const V=v(d);queueMicrotask(()=>Gt(V))}}function Qt(A,V){v(b)[A].m=v(b)[A].m===V?"":V,v(b)[A].c="",re(T,Math.min(v(b).length-1,A+(v(b)[A].m?1:0)),!0)}function Tt(A,V){v(b)[A].c=V,v(b)[A].m=V.trim()?"eigen":"",re(T,A,!0)}let sn=$e(!1);async function mo(){if(!v(_)||v(sn))return;re(sn,!0);const A=v(b).map((L,B)=>R(B)),V={marks:Rg(v(b)),vals:A,by:i(),at:Date.now()};if(t()){v(_).poeng={...v(_).poeng||{},[v(h)]:A.reduce((L,B)=>L+B,0)},v(_).rett={...v(_).rett||{},[v(h)]:V},Gn(`Lagra · ${v(_).namn} · ${v(te).namn} · ${r(v(S))}`),Kn(),re(sn,!1);return}try{await mm(za(Ja,"etneLag",v(_).id),{["poeng."+v(h)]:A.reduce((L,B)=>L+B,0),["rett."+v(h)]:V}),lo(`Lagra ${v(_).namn} · ${v(te).namn} · ${r(v(S))}`),Gn(`Lagra · ${v(_).namn} · ${v(te).namn} · ${r(v(S))}`),Kn()}catch(L){lo("Ikkje lagra: "+Ya(L),!0)}re(sn,!1)}async function Rn(){if(!v(_))return;const A=v(_).joker===v(h)?"":v(h);if(t()){v(_).joker=A;return}try{await mm(za(Ja,"etneLag",v(_).id),{joker:A})}catch(V){lo("Ikkje lagra: "+Ya(V),!0)}}async function Je(A,V,L){const B=v(g).map(x=>({...x}));if(B[A][V]=vr(L),t()){re(K,{...v(K),[v(h)]:B},!0);return}try{await m0(za(Ja,"etne","rett"),{cfg:{[v(h)]:B}},{merge:!0})}catch(x){lo("Ikkje lagra: "+Ya(x),!0)}}let tl;function Gn(A){re(U,A,!0),clearTimeout(tl),tl=setTimeout(()=>re(U,""),2600)}const nl=new Map;let es=!1;bi(()=>{var A,V;if(Pt.lag.length){for(const L of Pt.lag)for(const[B,x]of Object.entries(L.rett||{})){const j=L.id+"|"+B;es&&nl.get(j)!==x.at&&x.by&&x.by!==i()&&Gn(`${a(x.by)} retta ${L.namn||"bord "+L.bord} · ${((A=v(l).find($=>$.id===B))==null?void 0:A.namn)||""} · ${r((V=x.vals)==null?void 0:V.reduce(($,J)=>$+J,0))}`),nl.set(j,x.at)}es=!0}});const go=ht(()=>{const A=Pt.lag.map(V=>{var L;return(L=V.rett)==null?void 0:L[v(h)]}).filter(V=>V==null?void 0:V.vals);return{n:A.length,rader:v(I).map((V,L)=>{let B=0,x=0,j=0,$=0;A.forEach(oe=>{var ve,be;const ae=(be=(ve=oe.marks)==null?void 0:ve[L])==null?void 0:be.m;$+=oe.vals[L]||0,ae==="full"?B++:ae==="annet"||ae==="eigen"?x++:ae==="halv"&&j++});const J=A.length||1;return{f:B/J*100,a:x/J*100,h:j/J*100,pst:v(g)[L].full?Math.round($/J/v(g)[L].full*100):0}})}}),Vc=ht(()=>{const A=[];for(const V of v(l)){const L=Ce(V.id),B=we(V,L.length),x=Pt.lag.map(j=>{var $;return($=j.rett)==null?void 0:$[V.id]}).filter(j=>j==null?void 0:j.vals);x.length<3||L.forEach((j,$)=>{if(!B[$].full)return;const J=x.reduce((oe,ae)=>oe+(ae.vals[$]||0),0);A.push({namn:`${V.namn} · spm ${$+1}`,p:J/x.length/B[$].full,n:x.length})})}return A.sort((V,L)=>V.p-L.p).slice(0,5)}),wr=ht(()=>w0(Pt.lag,Pt.quiz));function Js(){const A=x=>'"'+String(x??"").replace(/"/g,'""')+'"',V=x=>String(x).replace(".",","),L=[["Plassering","Lagnamn","Total score",...v(l).map(x=>x.namn)].map(A).join(";")];v(wr).forEach(x=>L.push([x.rank,A(x.namn),V(x.sum),...v(l).map(j=>{var J;const $=(J=x.poeng)==null?void 0:J[j.id];return $===void 0||$===""?"":V(vr($)*(x.joker===j.id?2:1))})].map((j,$)=>$===1?j:A(j)).join(";")));const B=document.createElement("a");B.href=URL.createObjectURL(new Blob(["\uFEFF"+L.join(`\r
`)],{type:"text/csv;charset=utf-8"})),B.download="etnequiz-resultat.csv",B.click(),setTimeout(()=>URL.revokeObjectURL(B.href),1e3)}function _o(A){var B;if(v(C)){A.key==="Escape"&&re(C,!1);return}const V=A.target.tagName==="INPUT"||A.target.tagName==="SELECT"||A.target.tagName==="TEXTAREA";if(A.key==="Escape"){Kn();return}if(V||A.ctrlKey||A.metaKey||A.altKey){A.key==="Enter"&&A.ctrlKey&&mo();return}if(!v(_)){A.key.length===1&&/\S/.test(A.key)&&((B=v(z))==null||B.focus());return}const L={1:"full",2:"annet",3:"halv"};L[A.key]?(A.preventDefault(),v(b)[v(T)].m=L[A.key],v(b)[v(T)].c="",re(T,Math.min(v(b).length-1,v(T)+1),!0)):A.key==="0"?(A.preventDefault(),v(b)[v(T)].m="",v(b)[v(T)].c="",re(T,Math.min(v(b).length-1,v(T)+1),!0)):A.key==="ArrowDown"?(A.preventDefault(),re(T,Math.min(v(b).length-1,v(T)+1),!0)):A.key==="ArrowUp"?(A.preventDefault(),re(T,Math.max(0,v(T)-1),!0)):A.key==="Enter"&&A.target.tagName!=="BUTTON"&&(A.preventDefault(),mo())}function vo(A){if(A.key==="ArrowDown")A.preventDefault(),re(w,Math.min(v(ot).length-1,v(w)+1),!0);else if(A.key==="ArrowUp")A.preventDefault(),re(w,Math.max(0,v(w)-1),!0);else if(A.key==="Enter"){A.preventDefault();const V=v(ot)[v(w)]||v(ot)[0];V&&Gt(V.l.id)}}const yo=(A,V)=>{var L,B,x;return((L=A.poeng)==null?void 0:L[V])!==void 0&&((B=A.poeng)==null?void 0:B[V])!==""&&!((x=A.rett)!=null&&x[V])};var Ys=Y0();i_("keydown",jl,_o);var Eo=Vr(Ys),rl=se(Eo),sl=se(rl),il=H(se(sl),2),Xs=se(il);pn(Xs,17,()=>v(l),On,(A,V)=>{const L=ht(()=>Pt.lag.filter(J=>{var oe;return(oe=J.rett)==null?void 0:oe[v(V).id]}).length);var B=A0(),x=se(B),j=H(x);{var $=J=>{var oe=I0(),ae=Ne(oe,!0);Ue(()=>me(ae,v(L))),pe(J,oe)};Dt(j,J=>{v(L)&&J($)})}Ue(()=>{tn(B,"aria-pressed",v(V).id===v(h)),me(x,v(V).namn)}),Ye("click",B,()=>bn(v(V).id)),pe(A,B)});var ol=H(Xs,2);{var Nc=A=>{var V=b0();pe(A,V)};Dt(ol,A=>{v(l).length||A(Nc)})}var Zs=H(sl,2),wo=H(se(Zs),2);{var al=A=>{var V=R0(),L=se(V),B=Ne(L,!0),x=H(L),j=se(x),$=H(j);{var J=Re=>{var ye=eu();Ue(Me=>me(ye,`· retta frå før av ${Me??""}, du endrar`),[()=>a(v(_).rett[v(h)].by)]),pe(Re,ye)},oe=Re=>{var ye=eu();Ue(Me=>me(ye,`· har ${Me??""} p frå før (skrive inn for hand)`),[()=>r(v(_).poeng[v(h)])]),pe(Re,ye)},ae=ht(()=>yo(v(_),v(h)));Dt($,Re=>{var ye;(ye=v(_).rett)!=null&&ye[v(h)]?Re(J):v(ae)&&Re(oe,1)})}var ve=H(x,2),be=Ne(ve,!0),ze=H(ve,3);Ue(Re=>{me(B,v(_).namn),me(j,`bord ${v(_).bord??""}`),tn(ve,"aria-pressed",v(_).joker===v(h)),me(be,Re)},[()=>{var Re;return v(_).joker===v(h)?"★ Joker her (dobbel)":v(_).joker?"Joker i "+(((Re=v(l).find(ye=>ye.id===v(_).joker))==null?void 0:Re.namn)||"anna runde"):"Joker her?"}]),Ye("click",ve,Rn),Ye("click",ze,()=>Kn()),pe(A,V)},Ze=A=>{var V=C0(),L=Vr(V);S_(L,x=>re(z,x),()=>v(z));var B=H(L,2);pn(B,23,()=>v(ot),x=>x.l.id,(x,j,$)=>{var J=k0();let oe;var ae=se(J),ve=H(ae);{var be=ze=>{var Re=S0(),ye=Ne(Re,!0);Ue(Me=>me(ye,Me),[()=>a(v(j).l.rett[v(h)].by)]),pe(ze,Re)};Dt(ve,ze=>{v(j).ferdig&&ze(be)})}Ue(ze=>{oe=ea(J,1,"chip svelte-kp1wi9",null,oe,{topp:ze,ferdig:v(j).ferdig}),me(ae,v(j).l.namn)},[()=>v(m).trim()&&v($)===v(w)]),Ye("click",J,()=>Gt(v(j).l.id)),pe(x,J)},x=>{var j=P0(),$=Ne(j,!0);Ue(()=>me($,v(y).length?"Ingen lag passar.":"Ingen lag med namn enno. Lag bord og gje dei namn under «Lag og poeng».")),pe(x,j)}),Ye("input",L,()=>re(w,0)),Ye("keydown",L,vo),R_(L,()=>v(m),x=>re(m,x)),pe(A,V)};Dt(wo,A=>{v(_)?A(al):A(Ze,-1)})}var at=H(Zs,2),ts=se(at),To=se(ts),ll=Ne(To),ul=H(To,2),Tr=H(ts,2);{var cl=A=>{var V=V0(),L=H(se(V),2),B=H(se(L),4);pn(B,17,()=>v(I),On,(x,j,$)=>{var J=D0(),oe=Vr(J);oe.textContent=`Spm ${$+1}`;var ae=H(oe,2);tn(ae,"aria-label",`Full poeng spørsmål ${$+1}`);var ve=H(ae,2);tn(ve,"aria-label",`Annet-poeng spørsmål ${$+1}`),Ue((be,ze)=>{ru(ae,be),ru(ve,ze)},[()=>r(v(g)[$].full),()=>r(v(g)[$].annet)]),Ye("change",ae,be=>Je($,"full",be.target.value)),Ye("change",ve,be=>Je($,"annet",be.target.value)),pe(x,J)}),pe(A,V)};Dt(Tr,A=>{v(N)&&A(cl)})}var hl=H(Tr,2);{var Io=A=>{var V=M0(),L=Vr(V);pn(L,21,()=>v(I),On,(B,x,j)=>{var $=O0();let J;var oe=se($),ae=se(oe);ae.textContent=`Spm ${j+1}`;var ve=H(ae);{var be=et=>{var on=N0(),It=Ne(on,!0);Ue(()=>me(It,v(x).svar)),pe(et,on)};Dt(ve,et=>{v(x).svar&&et(be)})}var ze=H(oe,2),Re=H(se(ze)),ye=Ne(Re,!0),Me=H(ze,2),Jt=H(se(Me)),ss=Ne(Jt,!0),kn=H(Me,2),oi=H(se(kn)),ai=Ne(oi,!0),Jn=H(kn,2);let is;tn(Jn,"aria-label",`Eigen poengsum spørsmål ${j+1}`),Ue((et,on,It)=>{var gt,Pn,Cn,os,Ie;J=ea($,1,"q svelte-kp1wi9",null,J,{aktiv:j===v(T)}),tn(ze,"aria-pressed",((gt=v(b)[j])==null?void 0:gt.m)==="full"),me(ye,et),tn(Me,"aria-pressed",((Pn=v(b)[j])==null?void 0:Pn.m)==="annet"),me(ss,on),tn(kn,"aria-pressed",((Cn=v(b)[j])==null?void 0:Cn.m)==="halv"),me(ai,It),is=ea(Jn,1,"inp eigen svelte-kp1wi9",null,is,{paa:((os=v(b)[j])==null?void 0:os.m)==="eigen"}),ru(Jn,((Ie=v(b)[j])==null?void 0:Ie.m)==="eigen"?v(b)[j].c:"")},[()=>r(v(g)[j].full),()=>r(v(g)[j].annet),()=>r(v(g)[j].full/2)]),Ye("click",ze,()=>Qt(j,"full")),Ye("click",Me,()=>Qt(j,"annet")),Ye("click",kn,()=>Qt(j,"halv")),Ye("input",Jn,et=>Tt(j,et.target.value)),Ye("keydown",Jn,et=>{et.key==="Enter"&&(et.preventDefault(),et.stopPropagation(),re(T,Math.min(v(b).length-1,j+1),!0))}),pe(B,$)}),pe(A,V)},Oc=A=>{var V=L0();pe(A,V)};Dt(hl,A=>{v(_)?A(Io):A(Oc,-1)})}var Mc=H(rl,2),ei=se(Mc),Ao=se(ei),fl=H(se(Ao)),ns=H(Ao,2);pn(ns,21,()=>v(wr).slice(0,5),On,(A,V)=>{var L=x0(),B=se(L),x=Ne(B),j=H(B),$=Ne(j,!0),J=H(j),oe=Ne(J,!0);Ue(ae=>{me(x,`${v(V).rank??""}.`),me($,v(V).namn),me(oe,ae)},[()=>r(v(V).sum)]),pe(A,L)},A=>{var V=F0();pe(A,V)});var bo=H(ei,2),ti=se(bo),Qn=Ne(ti),Ro=H(ti,2);{var ni=A=>{var V=B0(),L=Vr(V);pn(L,21,()=>v(go).rader,On,(B,x,j)=>{var $=U0(),J=Vr($);J.textContent=`Spm ${j+1}`;var oe=H(J,2),ae=se(oe),ve=H(ae),be=H(ve),ze=H(oe,2),Re=Ne(ze);Ue((ye,Me,Jt)=>{tn(oe,"title",`${ye??""} % full, ${Me??""} % annet, ${Jt??""} % halv`),nu(ae,`width:${v(x).f??""}%`),nu(ve,`width:${v(x).a??""}%`),nu(be,`width:${v(x).h??""}%`),me(Re,`${v(x).pst??""} %`)},[()=>r(v(x).f),()=>r(v(x).a),()=>r(v(x).h)]),pe(B,$)}),pe(A,V)},dl=A=>{var V=j0();pe(A,V)};Dt(Ro,A=>{v(go).n?A(ni):A(dl,-1)})}var rs=H(Ro,4);pn(rs,21,()=>v(Vc),On,(A,V)=>{var L=$0(),B=se(L),x=Ne(B,!0),j=H(B),$=Ne(j);Ue(J=>{me(x,v(V).namn),me($,`${J??""} % · ${v(V).n??""} lag`)},[()=>Math.round(v(V).p*100)]),pe(A,L)},A=>{var V=q0();pe(A,V)});var So=H(Eo,2),lt=se(So),ko=se(lt),Ir=se(ko),Ar=se(Ir),Lc=H(Ar),pl=se(Lc),br=H(pl);{var xc=A=>{var V=eu();Ue(L=>me(V,`· joker ×2 = ${L??""}`),[()=>r(v(S)*2)]),pe(A,V)};Dt(br,A=>{var V;((V=v(_))==null?void 0:V.joker)===v(h)&&A(xc)})}var Fc=H(Ir,2),ri=Ne(Fc,!0),Po=H(ko,2),si=H(So,2);{var ii=A=>{var V=z0(),L=Ne(V,!0);Ue(()=>me(L,v(U))),pe(A,V)};Dt(si,A=>{v(U)&&A(ii)})}var Sn=H(si,2);{var ml=A=>{var V=J0(),L=se(V),B=se(L),x=H(se(B),2),j=se(x),$=H(j),J=H(B,2),oe=se(J),ae=se(oe),ve=se(ae),be=H(se(ve),3);pn(be,17,()=>v(l),On,(Re,ye)=>{var Me=H0(),Jt=Ne(Me,!0);Ue(()=>me(Jt,v(ye).namn)),pe(Re,Me)});var ze=H(ae);pn(ze,21,()=>v(wr),On,(Re,ye)=>{var Me=G0(),Jt=se(Me),ss=Ne(Jt),kn=H(Jt),oi=Ne(kn,!0),ai=H(kn),Jn=Ne(ai,!0),is=H(ai);pn(is,17,()=>v(l),On,(et,on)=>{const It=ht(()=>{var Ft;return(Ft=v(ye).poeng)==null?void 0:Ft[v(on).id]});var gt=K0();let Pn;var Cn=se(gt),os=H(Cn);{var Ie=Ft=>{var as=W0();pe(Ft,as)};Dt(os,Ft=>{v(ye).joker===v(on).id&&Ft(Ie)})}Ue(Ft=>{Pn=ea(gt,1,"t svelte-kp1wi9",null,Pn,{j:v(ye).joker===v(on).id}),me(Cn,Ft)},[()=>v(It)===void 0||v(It)===""?"–":r(vr(v(It))*(v(ye).joker===v(on).id?2:1))]),pe(et,gt)}),Ue(et=>{me(ss,`${v(ye).rank??""}.`),me(oi,v(ye).namn),me(Jn,et)},[()=>r(v(ye).sum)]),pe(Re,Me)},Re=>{var ye=Q0(),Me=Ne(ye);Ue(()=>tn(Me,"colspan",3+v(l).length)),pe(Re,ye)}),Ye("click",j,Js),Ye("click",$,()=>re(C,!1)),pe(A,V)};Dt(Sn,A=>{v(C)&&A(ml)})}Ue((A,V)=>{var L,B;me(ll,`Spørsmål${v(te)?" · "+v(te).namn:""}`),tn(ul,"aria-pressed",v(N)),me(Qn,`Statistikk · ${(((L=v(te))==null?void 0:L.namn)||"")??""} · ${v(go).n??""} lag`),me(Ar,`${A??""} `),me(pl,`/ ${V??""}`),me(ri,v(_)?v(_).namn+" · "+(((B=v(te))==null?void 0:B.namn)||""):"Vel lag"),Po.disabled=!v(_)||v(sn)},[()=>r(v(S)),()=>r(v(E))]),Ye("click",ul,()=>re(N,!v(N))),Ye("click",fl,()=>re(C,!0)),Ye("click",Po,mo),pe(n,Ys),Dl()}o_(["click","input","keydown","change"]);var $s=P_(()=>Pt),Z0=Te('<header class="band svelte-1hwhcgc"><div class="inner topp svelte-1hwhcgc"><div class="merke svelte-1hwhcgc"><svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"></path></svg> <div><span class="namn svelte-1hwhcgc">Etnequizen</span><span class="under svelte-1hwhcgc">Førehandsvising av rettinga</span></div></div> <nav class="meny svelte-1hwhcgc" aria-label="Meny"><a href="/etnequiz/" class="svelte-1hwhcgc">Quizmaster-panelet</a> <a href="/etnequiz/skjerm.html" class="svelte-1hwhcgc">Storskjermen</a> <a href="./" aria-current="page" class="svelte-1hwhcgc">Prøv rettinga</a></nav></div></header> <main class="inner" style="padding-block:16px 48px"><p class="info svelte-1hwhcgc">Dette er ei førehandsvising med 10 eksempellag og fem rundar. Ingenting blir lagra, og alt forsvinn når du lastar sida på nytt. Første runde er alt retta for seks lag, så du ser statistikken.</p> <!></main>',1);function eA(n,e){Cl(e,!1);const t=[["r1","Allmennkunnskap",["Oslo","1814","Sju","Merkur","Ibsen","Rom"]],["r2","Geografi",["Nilen","Canberra","Galdhøpiggen","Stillehavet","Etne","Island"]],["r3","Musikk",["a-ha","ABBA","Grieg","Queen","Kygo","Beatles"]],["r4","Sport",["Bjørndalen","Haaland","1994","Wimbledon","Lillehammer","Ski"]],["r5","Rebus",["Juletre","Snømann","Pepperkake","Nisse","Reinsdyr","Grøt"]]],r=["Hølen IL","Bromance Memorosa","De siste dagers hellige","Skinnbamsen","Oppstandelse","Team Hjortepølsa","Nederlaget","De Uvitende Optimistene","Lisa gikk til skolen","Kåre & Petrusa"],s=["full","annet","halv",""],i=r.map((h,d)=>{const m={id:String(d+1),bord:d+1,namn:h,joker:d%4===1?"r2":"",poeng:{},rett:{}};if(d<6){const w=Array.from({length:6},(b,N)=>({m:s[(d*3+N*5+(N===4?2:0))%(N<2?2:4)],c:""})),T=w.map(b=>b.m==="full"?1:b.m==="annet"?.75:b.m==="halv"?.5:0);m.poeng.r1=T.reduce((b,N)=>b+N,0),m.rett.r1={marks:w,vals:T,by:["fredrik@demo","morten@demo"][d%2],at:1}}return m});$s($s().quiz={tittel:"Førehandsvising",undertittel:"Etnequizen",kategoriar:t.map(([h,d])=>({id:h,namn:d,maks:6})),plan:t.flatMap(([h,,d])=>[{type:"kategori",kat:h},...d.map((m,w)=>({type:"sporsmal",kat:h,tekst:`Spørsmål ${w+1}`,svar:m}))])}),$s($s().lag=i),$s($s().klar=!0),k_();var a=Z0(),l=H(Vr(a),2),c=H(se(l),2);X0(c,{demo:!0}),pe(n,a),Dl()}d_(eA,{target:document.getElementById("app")})})();
