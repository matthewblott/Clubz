import{S as se,i as le,s as oe,k as f,q as k,a as l,x as T,l as i,m as x,r as A,h as o,c as m,y as w,n as O,p as me,b as te,I as t,z as I,P as fe,Z as ie,_ as ue,C as $e,f as N,t as q,A as F,$ as de}from"../../../../../chunks/index-a516f074.js";import{S as ce,T as D,c as pe,v as _e,r as ge}from"../../../../../chunks/TextField-0e13bc48.js";import{X as he}from"../../../../../chunks/x-square-498380e9.js";import{C as be}from"../../../../../chunks/club-3dac9c6a.js";import{C as ve}from"../../../../../chunks/club-8b67d0e2.js";import{g as re}from"../../../../../chunks/navigation-1c36d6bc.js";function ye(P){let s,U,d,n,u,c,X,z,p,_,H,M,L,R,a,S,V,Z,C,j,g,G,h,J,b,K,v,Q,y,B,W,ae;return c=new ce({}),_=new he({}),h=new D({props:{name:"name"}}),b=new D({props:{name:"addressLine1"}}),v=new D({props:{name:"postalTown"}}),y=new D({props:{name:"postcode"}}),{c(){s=f("h1"),U=k("Club"),d=l(),n=f("form"),u=f("button"),T(c.$$.fragment),X=k(" Save"),z=l(),p=f("button"),T(_.$$.fragment),H=k(" Cancel"),M=l(),L=f("div"),R=l(),a=f("fieldset"),S=f("label"),V=k("Id"),Z=l(),C=f("input"),j=l(),g=f("input"),G=l(),T(h.$$.fragment),J=l(),T(b.$$.fragment),K=l(),T(v.$$.fragment),Q=l(),T(y.$$.fragment),this.h()},l(e){s=i(e,"H1",{});var E=x(s);U=A(E,"Club"),E.forEach(o),d=m(e),n=i(e,"FORM",{});var $=x(n);u=i($,"BUTTON",{});var Y=x(u);w(c.$$.fragment,Y),X=A(Y," Save"),Y.forEach(o),z=m($),p=i($,"BUTTON",{});var ee=x(p);w(_.$$.fragment,ee),H=A(ee," Cancel"),ee.forEach(o),M=m($),L=i($,"DIV",{class:!0}),x(L).forEach(o),R=m($),a=i($,"FIELDSET",{});var r=x(a);S=i(r,"LABEL",{for:!0});var ne=x(S);V=A(ne,"Id"),ne.forEach(o),Z=m(r),C=i(r,"INPUT",{id:!0}),j=m(r),g=i(r,"INPUT",{type:!0,name:!0,style:!0}),G=m(r),w(h.$$.fragment,r),J=m(r),w(b.$$.fragment,r),K=m(r),w(v.$$.fragment,r),Q=m(r),w(y.$$.fragment,r),r.forEach(o),$.forEach(o),this.h()},h(){O(L,"class","filler"),O(S,"for","id"),O(C,"id","id"),C.value="[New]",C.readOnly=!0,O(g,"type","number"),O(g,"name","id"),g.value="0",me(g,"display","none")},m(e,E){te(e,s,E),t(s,U),te(e,d,E),te(e,n,E),t(n,u),I(c,u,null),t(u,X),t(n,z),t(n,p),I(_,p,null),t(p,H),t(n,M),t(n,L),t(n,R),t(n,a),t(a,S),t(S,V),t(a,Z),t(a,C),t(a,j),t(a,g),t(a,G),I(h,a,null),t(a,J),I(b,a,null),t(a,K),I(v,a,null),t(a,Q),I(y,a,null),B=!0,W||(ae=[fe(p,"click",ie(P[1])),ue(P[0].call(null,n))],W=!0)},p:$e,i(e){B||(N(c.$$.fragment,e),N(_.$$.fragment,e),N(h.$$.fragment,e),N(b.$$.fragment,e),N(v.$$.fragment,e),N(y.$$.fragment,e),B=!0)},o(e){q(c.$$.fragment,e),q(_.$$.fragment,e),q(h.$$.fragment,e),q(b.$$.fragment,e),q(v.$$.fragment,e),q(y.$$.fragment,e),B=!1},d(e){e&&o(s),e&&o(d),e&&o(n),F(c),F(_),F(h),F(b),F(v),F(y),W=!1,de(ae)}}}function xe(P){const{form:s}=pe({async onSubmit(d){delete d.id;const u=`/clubs/${await be.create(d)}`;re(u)},validate:_e(ve),extend:[ge]});return[s,()=>{re("/clubs")}]}class Ne extends se{constructor(s){super(),le(this,s,xe,ye,oe,{})}}export{Ne as default};
