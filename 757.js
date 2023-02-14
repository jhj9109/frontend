/*! For license information please see 757.js.LICENSE.txt */
"use strict";(self.webpackChunktogetherfront=self.webpackChunktogetherfront||[]).push([[757],{3250:(e,t,n)=>{var r=n(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,n,t]),a((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},1688:(e,t,n)=>{e.exports=n(3250)},3757:(e,t,n)=>{n.d(t,{ZP:()=>Z,kY:()=>U});var r=n(7294),o=n(1688);const i=new WeakMap,a={},s=()=>{},u=s(),c=Object,l=e=>e===u,d=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),g="undefined",h=typeof window!=g,v=typeof document!=g,w=(e,t)=>{const n=i.get(e);return[()=>e.get(t)||a,r=>{const o=e.get(t);n[5](t,f(o,r),o||a)},n[6]]},p=new WeakMap;let y=0;const m=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(c(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=p.get(e),o)return o;if(o=++y+"~",p.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=m(e[i])+",";p.set(e,o)}if(n==c){o="#";const t=c.keys(e).sort();for(;!l(i=t.pop());)l(e[i])||(o+=i+":"+m(e[i])+",");p.set(e,o)}}return o};let b=!0;const[S,E]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[s,s],O={isOnline:()=>b,isVisible:()=>{const e=v&&document.visibilityState;return l(e)||"hidden"!==e}},_={initFocus:e=>(v&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{v&&document.removeEventListener("visibilitychange",e),E("focus",e)}),initReconnect:e=>{const t=()=>{b=!0,e()},n=()=>{b=!1};return S("online",t),S("offline",n),()=>{E("online",t),E("offline",n)}}},k=!r.useId,R=!h||"Deno"in window,L=R?r.useEffect:r.useLayoutEffect,T="undefined"!=typeof navigator&&navigator.connection,V=!R&&T&&(["slow-2g","2g"].includes(T.effectiveType)||T.saveData),C=e=>{if(d(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",t]};let D=0;const x=()=>++D;async function I(...e){const[t,n,r,o]=e,a=f({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let s=a.populateCache;const c=a.rollbackOnError;let g=a.optimisticData;const h=!1!==a.revalidate,v=a.throwOnError;if(d(n)){const e=n,r=[],o=t.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!o.startsWith("$inf$")&&e(t.get(o)._k)&&r.push(o)}return Promise.all(r.map(p))}return p(n);async function p(n){const[o]=C(n);if(!o)return;const[a,f]=w(t,o),[p,y,m]=i.get(t),b=p[o],S=()=>h&&(delete m[o],b&&b[0])?b[0](2).then((()=>a().data)):a().data;if(e.length<3)return S();let E,O=r;const _=x();y[o]=[_,0];const k=!l(g),R=a(),L=R.data,T=R._c,V=l(T)?L:T;if(k&&(g=d(g)?g(V):g,f({data:g,_c:V})),d(O))try{O=O(V)}catch(e){E=e}if(O&&d(O.then)){if(O=await O.catch((e=>{E=e})),_!==y[o][0]){if(E)throw E;return O}E&&k&&(e=>"function"==typeof c?c(e):!1!==c)(E)&&(s=!0,O=V,f({data:O,_c:u}))}s&&(E||(d(s)&&(O=s(O,V)),f({data:O,_c:u}))),y[o][1]=x();const D=await S();if(f({_c:u}),!E)return s?D:O;if(v)throw E}}const P=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},M=(e,t)=>{if(!i.has(e)){const n=f(_,t),r={},o=I.bind(u,e);let a=s;const c={},l=(e,t)=>{const n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);const o=c[t];if(o)for(let e=o.length;e--;)o[e](r,n)},g=()=>{if(!i.has(e)&&(i.set(e,[r,{},{},{},o,d,l]),!R)){const t=n.initFocus(setTimeout.bind(u,P.bind(u,r,0))),o=n.initReconnect(setTimeout.bind(u,P.bind(u,r,1)));a=()=>{t&&t(),o&&o(),i.delete(e)}}};return g(),[e,o,g,a]}return[e,i.get(e)[4]]},[W,F]=M(new Map),A=f({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!l(i)&&a>i||setTimeout(r,s,o)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:V?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:V?5e3:3e3,compare:(e,t)=>m(e)==m(t),isPaused:()=>!1,cache:W,mutate:F,fallback:{}},O),j=(e,t)=>{const n=f(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=f(o,a))}return n},q=(0,r.createContext)({}),J=h&&window.__SWR_DEVTOOLS_USE__,N=J?window.__SWR_DEVTOOLS_USE__:[],U=()=>f(A,(0,r.useContext)(q)),$=N.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const r=C(t)[0],[,,,o]=i.get(W),a=o[r];return a?(delete o[r],a):n(...e)}),r)));J&&(window.__SWR_DEVTOOLS_REACT__=r);const H={dedupe:!0};c.defineProperty((e=>{const{value:t}=e,n=(0,r.useContext)(q),o=d(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),a=(0,r.useMemo)((()=>o?i:j(n,i)),[o,n,i]),s=i&&i.provider,[c]=(0,r.useState)((()=>s?M(s(a.cache||W),i):u));return c&&(a.cache=c[0],a.mutate=c[1]),L((()=>{if(c)return c[2]&&c[2](),c[3]}),[]),(0,r.createElement)(q.Provider,f(e,{value:a}))}),"defaultValue",{value:A});var Y,Z=(Y=(e,t,n)=>{const{cache:a,compare:s,suspense:c,fallbackData:v,revalidateOnMount:p,refreshInterval:y,refreshWhenHidden:m,refreshWhenOffline:b,keepPreviousData:S}=n,[E,O,_]=i.get(a),[T,V]=C(e),D=(0,r.useRef)(!1),P=(0,r.useRef)(!1),M=(0,r.useRef)(T),W=(0,r.useRef)(t),F=(0,r.useRef)(n),A=()=>F.current,j=()=>A().isVisible()&&A().isOnline(),[q,J,N]=w(a,T),U=(0,r.useRef)({}).current,$=l(v)?n.fallback[T]:v,Y=(e,t)=>{let n=!0;for(const r in U){const o=r;s(t[o],e[o])||"data"===o&&l(e[o])&&s(t[o],ee)||(n=!1)}return n},Z=(0,r.useMemo)((()=>{const e=!!T&&!!t&&(l(p)?!A().isPaused()&&!c:p),n=()=>{const t=q(),n=f(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n};let r=n();return()=>{const e=n();return Y(e,r)?r:r=e}}),[a,T]),z=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>N(T,((t,n)=>{Y(t,n)||e()}))),[a,T]),Z,Z),B=!D.current,G=z.data,K=l(G)?$:G,Q=z.error,X=(0,r.useRef)(K),ee=S?l(G)?X.current:G:K,te=B&&!l(p)?p:!A().isPaused()&&(c?!l(K)&&n.revalidateIfStale:l(K)||n.revalidateIfStale),ne=!!(T&&t&&B&&te),re=l(z.isValidating)?ne:z.isValidating,oe=l(z.isLoading)?ne:z.isLoading,ie=(0,r.useCallback)((async e=>{const t=W.current;if(!T||!t||P.current||A().isPaused())return!1;let r,o,i=!0;const a=e||{},c=!_[T]||!a.dedupe,f=()=>k?!P.current&&T===M.current&&D.current:T===M.current,g={isValidating:!1,isLoading:!1},h=()=>{J(g)},v=()=>{const e=_[T];e&&e[1]===o&&delete _[T]},w={isValidating:!0};l(q().data)&&(w.isLoading=!0);try{if(c&&(J(w),n.loadingTimeout&&l(q().data)&&setTimeout((()=>{i&&f()&&A().onLoadingSlow(T,n)}),n.loadingTimeout),_[T]=[t(V),x()]),[r,o]=_[T],r=await r,c&&setTimeout(v,n.dedupingInterval),!_[T]||_[T][1]!==o)return c&&f()&&A().onDiscarded(T),!1;g.error=u;const e=O[T];if(!l(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return h(),c&&f()&&A().onDiscarded(T),!1;const a=q().data;g.data=s(a,r)?a:r,c&&f()&&A().onSuccess(r,T,n)}catch(e){v();const t=A(),{shouldRetryOnError:n}=t;t.isPaused()||(g.error=e,c&&f()&&(t.onError(e,T,t),(!0===n||d(n)&&n(e))&&j()&&t.onErrorRetry(e,T,t,ie,{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return i=!1,h(),!0}),[T,a]),ae=(0,r.useCallback)(((...e)=>I(a,M.current,...e)),[]);if(L((()=>{W.current=t,F.current=n,l(G)||(X.current=G)})),L((()=>{if(!T)return;const e=ie.bind(u,H);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(T,E,(n=>{if(0==n){const n=Date.now();A().revalidateOnFocus&&n>t&&j()&&(t=n+A().focusThrottleInterval,e())}else if(1==n)A().revalidateOnReconnect&&j()&&e();else if(2==n)return ie()}));return P.current=!1,M.current=T,D.current=!0,J({_k:V}),te&&(l(K)||R?e():(r=e,h&&typeof window.requestAnimationFrame!=g?window.requestAnimationFrame(r):setTimeout(r,1))),()=>{P.current=!0,n()};var r}),[T]),L((()=>{let e;function t(){const t=d(y)?y(K):y;t&&-1!==e&&(e=setTimeout(n,t))}function n(){q().error||!m&&!A().isVisible()||!b&&!A().isOnline()?t():ie(H).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[y,m,b,T]),(0,r.useDebugValue)(ee),c&&l(K)&&T){if(!k&&R)throw new Error("Fallback data is required when using suspense in SSR.");throw W.current=t,F.current=n,P.current=!1,l(Q)?ie(H):Q}return{mutate:ae,get data(){return U.data=!0,ee},get error(){return U.error=!0,Q},get isValidating(){return U.isValidating=!0,re},get isLoading(){return U.isLoading=!0,oe}}},function(...e){const t=U(),[n,r,o]=(e=>d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}])(e),i=j(t,o);let a=Y;const{use:s}=i,u=(s||[]).concat($);for(let e=u.length;e--;)a=u[e](a);return a(n,r||i.fetcher||null,i)})}}]);