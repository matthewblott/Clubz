import{S as M,i as Q,s as W,k as E,q as B,a as A,l as k,m as T,r as P,h as u,c as C,b as N,I as m,C as H,X as j,x as L,e as G,y as S,z as F,Y as Z,f as O,t as x,A as Y,u as I,n as q,g as tt,d as et,V as lt}from"../../../../chunks/index-a516f074.js";import{E as rt}from"../../../../chunks/edit-e1c61d1e.js";import{P as ot}from"../../../../chunks/plus-square-bc85aa77.js";function at(_){let t,r,l,a,v,h,d,g,f,e,s;return{c(){t=E("button"),r=B("First"),l=A(),a=E("button"),v=B("Previous"),h=A(),d=E("button"),g=B("Next"),f=A(),e=E("button"),s=B("Last"),this.h()},l(n){t=k(n,"BUTTON",{});var p=T(t);r=P(p,"First"),p.forEach(u),l=C(n),a=k(n,"BUTTON",{});var y=T(a);v=P(y,"Previous"),y.forEach(u),h=C(n),d=k(n,"BUTTON",{});var $=T(d);g=P($,"Next"),$.forEach(u),f=C(n),e=k(n,"BUTTON",{});var o=T(e);s=P(o,"Last"),o.forEach(u),this.h()},h(){t.disabled=!0,a.disabled=!0,d.disabled=!0,e.disabled=!0},m(n,p){N(n,t,p),m(t,r),N(n,l,p),N(n,a,p),m(a,v),N(n,h,p),N(n,d,p),m(d,g),N(n,f,p),N(n,e,p),m(e,s)},p:H,i:H,o:H,d(n){n&&u(t),n&&u(l),n&&u(a),n&&u(h),n&&u(d),n&&u(f),n&&u(e)}}}class nt extends M{constructor(t){super(),Q(this,t,null,at,W,{})}}function J(_,t,r){const l=_.slice();return l[4]=t[r].id,l[5]=t[r].name,l}function st(_){let t=_[8]+"",r;return{c(){r=B(t)},l(l){r=P(l,t)},m(l,a){N(l,r,a)},p(l,a){a&1&&t!==(t=l[8]+"")&&I(r,t)},i:H,o:H,d(l){l&&u(r)}}}function ut(_){let t,r,l,a,v,h,d,g,f,e,s,n,p,y;s=new ot({});let $=_[3].items,o=[];for(let c=0;c<$.length;c+=1)o[c]=K(J(_,$,c));const w=c=>x(o[c],1,1,()=>{o[c]=null});return{c(){t=E("table"),r=E("thead"),l=E("th"),a=B("Id"),v=A(),h=E("th"),d=B("Name"),g=A(),f=E("th"),e=E("a"),L(s.$$.fragment),n=A(),p=E("tbody");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){t=k(c,"TABLE",{role:!0});var b=T(t);r=k(b,"THEAD",{});var i=T(r);l=k(i,"TH",{scope:!0});var D=T(l);a=P(D,"Id"),D.forEach(u),v=C(i),h=k(i,"TH",{scope:!0});var z=T(h);d=P(z,"Name"),z.forEach(u),g=C(i),f=k(i,"TH",{});var R=T(f);e=k(R,"A",{href:!0});var V=T(e);S(s.$$.fragment,V),V.forEach(u),R.forEach(u),i.forEach(u),n=C(b),p=k(b,"TBODY",{});var X=T(p);for(let U=0;U<o.length;U+=1)o[U].l(X);X.forEach(u),b.forEach(u),this.h()},h(){q(l,"scope","col"),q(h,"scope","col"),q(e,"href","/clubs/new"),q(t,"role","grid")},m(c,b){N(c,t,b),m(t,r),m(r,l),m(l,a),m(r,v),m(r,h),m(h,d),m(r,g),m(r,f),m(f,e),F(s,e,null),m(t,n),m(t,p);for(let i=0;i<o.length;i+=1)o[i].m(p,null);y=!0},p(c,b){if(b&1){$=c[3].items;let i;for(i=0;i<$.length;i+=1){const D=J(c,$,i);o[i]?(o[i].p(D,b),O(o[i],1)):(o[i]=K(D),o[i].c(),O(o[i],1),o[i].m(p,null))}for(tt(),i=$.length;i<o.length;i+=1)w(i);et()}},i(c){if(!y){O(s.$$.fragment,c);for(let b=0;b<$.length;b+=1)O(o[b]);y=!0}},o(c){x(s.$$.fragment,c),o=o.filter(Boolean);for(let b=0;b<o.length;b+=1)x(o[b]);y=!1},d(c){c&&u(t),Y(s),lt(o,c)}}}function K(_){let t,r,l=_[4]+"",a,v,h,d=_[5]+"",g,f,e,s,n,p,y,$;return n=new rt({}),{c(){t=E("tr"),r=E("td"),a=B(l),v=A(),h=E("td"),g=B(d),f=A(),e=E("td"),s=E("a"),L(n.$$.fragment),y=A(),this.h()},l(o){t=k(o,"TR",{});var w=T(t);r=k(w,"TD",{scope:!0});var c=T(r);a=P(c,l),c.forEach(u),v=C(w),h=k(w,"TD",{});var b=T(h);g=P(b,d),b.forEach(u),f=C(w),e=k(w,"TD",{});var i=T(e);s=k(i,"A",{href:!0});var D=T(s);S(n.$$.fragment,D),D.forEach(u),i.forEach(u),y=C(w),w.forEach(u),this.h()},h(){q(r,"scope","row"),q(s,"href",p="/clubs/"+_[4])},m(o,w){N(o,t,w),m(t,r),m(r,a),m(t,v),m(t,h),m(h,g),m(t,f),m(t,e),m(e,s),F(n,s,null),m(t,y),$=!0},p(o,w){(!$||w&1)&&l!==(l=o[4]+"")&&I(a,l),(!$||w&1)&&d!==(d=o[5]+"")&&I(g,d),(!$||w&1&&p!==(p="/clubs/"+o[4]))&&q(s,"href",p)},i(o){$||(O(n.$$.fragment,o),$=!0)},o(o){x(n.$$.fragment,o),$=!1},d(o){o&&u(t),Y(n)}}}function ft(_){let t,r;return{c(){t=E("p"),r=B("waiting for the promise to resolve...")},l(l){t=k(l,"P",{});var a=T(t);r=P(a,"waiting for the promise to resolve..."),a.forEach(u)},m(l,a){N(l,t,a),m(t,r)},p:H,i:H,o:H,d(l){l&&u(t)}}}function it(_){let t,r,l,a,v,h,d,g;a=new nt({props:{limit:0,count:0}}),a.$on("next",_[1]);let f={ctx:_,current:null,token:null,hasCatch:!0,pending:ft,then:ut,catch:st,value:3,error:8,blocks:[,,,]};return j(d=_[0],f),{c(){t=E("h1"),r=B("Clubs"),l=A(),L(a.$$.fragment),v=A(),h=G(),f.block.c()},l(e){t=k(e,"H1",{});var s=T(t);r=P(s,"Clubs"),s.forEach(u),l=C(e),S(a.$$.fragment,e),v=C(e),h=G(),f.block.l(e)},m(e,s){N(e,t,s),m(t,r),N(e,l,s),F(a,e,s),N(e,v,s),N(e,h,s),f.block.m(e,f.anchor=s),f.mount=()=>h.parentNode,f.anchor=h,g=!0},p(e,[s]){_=e,f.ctx=_,s&1&&d!==(d=_[0])&&j(d,f)||Z(f,_,s)},i(e){g||(O(a.$$.fragment,e),O(f.block),g=!0)},o(e){x(a.$$.fragment,e);for(let s=0;s<3;s+=1){const n=f.blocks[s];x(n)}g=!1},d(e){e&&u(t),e&&u(l),Y(a,e),e&&u(v),e&&u(h),f.block.d(e),f.token=null,f=null}}}function ct(_,t,r){let l,{data:a}=t;const v=async()=>{};return _.$$set=h=>{"data"in h&&r(2,a=h.data)},_.$$.update=()=>{_.$$.dirty&4&&r(0,l=a)},[l,v,a]}class dt extends M{constructor(t){super(),Q(this,t,ct,it,W,{data:2})}}export{dt as default};
