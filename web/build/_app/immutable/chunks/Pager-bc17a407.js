import{S,i as D,s as M,K as v,x as A,y as G,z as H,L as K,M as R,f as j,t as z,A as w,N as g,D as J,F as Q,G as V,H as W,a as F,e as I,c as L,b,C as m,h as f,R as X,o as Y,k as p,q as h,l as k,m as N,r as y,I as T,O as x,P as C}from"./index-867ab049.js";import{I as Z}from"./Icon-a21e3018.js";function $(u){let t;const n=u[2].default,e=J(n,u,u[3],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,l){e&&e.m(s,l),t=!0},p(s,l){e&&e.p&&(!t||l&8)&&Q(e,n,s,s[3],t?W(n,s[3],l,null):V(s[3]),null)},i(s){t||(j(e,s),t=!0)},o(s){z(e,s),t=!1},d(s){e&&e.d(s)}}}function ee(u){let t,n;const e=[{name:"plus-square"},u[1],{iconNode:u[0]}];let s={$$slots:{default:[$]},$$scope:{ctx:u}};for(let l=0;l<e.length;l+=1)s=v(s,e[l]);return t=new Z({props:s}),{c(){A(t.$$.fragment)},l(l){G(t.$$.fragment,l)},m(l,o){H(t,l,o),n=!0},p(l,[o]){const a=o&3?K(e,[e[0],o&2&&R(l[1]),o&1&&{iconNode:l[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:l}),t.$set(a)},i(l){n||(j(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){w(t,l)}}}function te(u,t,n){let{$$slots:e={},$$scope:s}=t;const l=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}],["line",{x1:"12",y1:"8",x2:"12",y2:"16"}],["line",{x1:"8",y1:"12",x2:"16",y2:"12"}]];return u.$$set=o=>{n(1,t=v(v({},t),g(o))),"$$scope"in o&&n(3,s=o.$$scope)},t=g(t),[l,t,e,s]}class ne extends S{constructor(t){super(),D(this,t,te,ee,M,{})}}const me=ne;function se(u){let t,n;return{c(){t=p("button"),n=h("First"),this.h()},l(e){t=k(e,"BUTTON",{});var s=N(t);n=y(s,"First"),s.forEach(f),this.h()},h(){t.disabled=!0},m(e,s){b(e,t,s),T(t,n)},p:m,d(e){e&&f(t)}}}function le(u){let t,n,e,s;return{c(){t=p("button"),n=h("First")},l(l){t=k(l,"BUTTON",{});var o=N(t);n=y(o,"First"),o.forEach(f)},m(l,o){b(l,t,o),T(t,n),e||(s=x(t,"click",C(u[1])),e=!0)},p:m,d(l){l&&f(t),e=!1,s()}}}function oe(u){let t,n;return{c(){t=p("button"),n=h("Previous"),this.h()},l(e){t=k(e,"BUTTON",{});var s=N(t);n=y(s,"Previous"),s.forEach(f),this.h()},h(){t.disabled=!0},m(e,s){b(e,t,s),T(t,n)},p:m,d(e){e&&f(t)}}}function re(u){let t,n,e,s;return{c(){t=p("button"),n=h("Previous")},l(l){t=k(l,"BUTTON",{});var o=N(t);n=y(o,"Previous"),o.forEach(f)},m(l,o){b(l,t,o),T(t,n),e||(s=x(t,"click",C(u[2])),e=!0)},p:m,d(l){l&&f(t),e=!1,s()}}}function ue(u){let t,n;return{c(){t=p("button"),n=h("Next"),this.h()},l(e){t=k(e,"BUTTON",{});var s=N(t);n=y(s,"Next"),s.forEach(f),this.h()},h(){t.disabled=!0},m(e,s){b(e,t,s),T(t,n)},p:m,d(e){e&&f(t)}}}function ce(u){let t,n,e,s;return{c(){t=p("button"),n=h("Next")},l(l){t=k(l,"BUTTON",{});var o=N(t);n=y(o,"Next"),o.forEach(f)},m(l,o){b(l,t,o),T(t,n),e||(s=x(t,"click",C(u[3])),e=!0)},p:m,d(l){l&&f(t),e=!1,s()}}}function ae(u){let t,n;return{c(){t=p("button"),n=h("Last"),this.h()},l(e){t=k(e,"BUTTON",{});var s=N(t);n=y(s,"Last"),s.forEach(f),this.h()},h(){t.disabled=!0},m(e,s){b(e,t,s),T(t,n)},p:m,d(e){e&&f(t)}}}function fe(u){let t,n,e,s;return{c(){t=p("button"),n=h("Last")},l(l){t=k(l,"BUTTON",{});var o=N(t);n=y(o,"Last"),o.forEach(f)},m(l,o){b(l,t,o),T(t,n),e||(s=x(t,"click",C(u[4])),e=!0)},p:m,d(l){l&&f(t),e=!1,s()}}}function ie(u){let t,n,e,s;function l(r,i){return r[0].first.enabled?le:se}let o=l(u),a=o(u);function P(r,i){return r[0].previous.enabled?re:oe}let E=P(u),_=E(u);function U(r,i){return r[0].next.enabled?ce:ue}let O=U(u),c=O(u);function q(r,i){return r[0].last.enabled?fe:ae}let B=q(u),d=B(u);return{c(){a.c(),t=F(),_.c(),n=F(),c.c(),e=F(),d.c(),s=I()},l(r){a.l(r),t=L(r),_.l(r),n=L(r),c.l(r),e=L(r),d.l(r),s=I()},m(r,i){a.m(r,i),b(r,t,i),_.m(r,i),b(r,n,i),c.m(r,i),b(r,e,i),d.m(r,i),b(r,s,i)},p(r,[i]){o===(o=l(r))&&a?a.p(r,i):(a.d(1),a=o(r),a&&(a.c(),a.m(t.parentNode,t))),E===(E=P(r))&&_?_.p(r,i):(_.d(1),_=E(r),_&&(_.c(),_.m(n.parentNode,n))),O===(O=U(r))&&c?c.p(r,i):(c.d(1),c=O(r),c&&(c.c(),c.m(e.parentNode,e))),B===(B=q(r))&&d?d.p(r,i):(d.d(1),d=B(r),d&&(d.c(),d.m(s.parentNode,s)))},i:m,o:m,d(r){a.d(r),r&&f(t),_.d(r),r&&f(n),c.d(r),r&&f(e),d.d(r),r&&f(s)}}}function _e(u,t,n){let e,s=X(),{limit:l}=t,o,{count:a}=t;const P=(c,q)=>c-c%q,E=()=>{o=0,s("next",{offset:o}),n(0,e.first.enabled=!1,e),n(0,e.previous.enabled=!1,e),n(0,e.next.enabled=!0,e),n(0,e.last.enabled=!0,e)},_=()=>{o=o-l,s("next",{offset:o}),n(0,e.first.enabled=o>0,e),n(0,e.previous.enabled=o>0,e),n(0,e.next.enabled=!0,e),n(0,e.last.enabled=!0,e)},U=()=>{o=o+l,s("next",{offset:o}),n(0,e.first.enabled=!0,e),n(0,e.previous.enabled=!0,e);const c=P(a,l);n(0,e.next.enabled=c>o,e),n(0,e.last.enabled=c>o,e)},O=()=>{o=P(a,l),s("next",{offset:o}),n(0,e.first.enabled=!0,e),n(0,e.previous.enabled=!0,e),n(0,e.next.enabled=!1,e),n(0,e.last.enabled=!1,e)};return Y(()=>{o=0,console.log(a)}),u.$$set=c=>{"limit"in c&&n(5,l=c.limit),"count"in c&&n(6,a=c.count)},n(0,e={first:{enabled:!1},previous:{enabled:!1},next:{enabled:!0},last:{enabled:!0}}),[e,E,_,U,O,l,a]}class pe extends S{constructor(t){super(),D(this,t,_e,ie,M,{limit:5,count:6})}}export{pe as P,me as a};
