import{S as T,i as q,s as B,w as x,a as k,k as v,x as P,c as b,l as g,m as $,h as f,n as _,y as E,b as y,G as d,f as S,t as w,z as A,T as C,q as F,r as H,B as I}from"../../../chunks/index-e404b464.js";import"../../../chunks/stores-2ef8cc2f.js";import{M as L}from"../../../chunks/Menu-4dd25b32.js";import{b as z}from"../../../chunks/paths-b4419565.js";import{P as G}from"../../../chunks/Preload-a8e68caf.js";function D(u,t,s){const a=u.slice();return a[1]=t[s].name,a[2]=t[s].route,a[4]=s,a}function M(u){let t,s,a,h=u[1]+"",l,c;return{c(){t=v("li"),s=v("a"),a=v("span"),l=F(h),c=k(),this.h()},l(m){t=g(m,"LI",{class:!0});var n=$(t);s=g(n,"A",{href:!0,class:!0});var o=$(s);a=g(o,"SPAN",{class:!0});var e=$(a);l=H(e,h),e.forEach(f),o.forEach(f),c=b(n),n.forEach(f),this.h()},h(){_(a,"class","svelte-16251kd"),_(s,"href",z+"/"+u[2]),_(s,"class","svelte-16251kd"),_(t,"class","svelte-16251kd")},m(m,n){y(m,t,n),d(t,s),d(s,a),d(a,l),d(t,c)},p:I,d(m){m&&f(t)}}}function N(u){let t,s,a,h,l,c,m;t=new G({}),a=new L({});let n=u[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=M(D(u,n,e));return{c(){x(t.$$.fragment),s=k(),x(a.$$.fragment),h=k(),l=v("div"),c=v("ul");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){P(t.$$.fragment,e),s=b(e),P(a.$$.fragment,e),h=b(e),l=g(e,"DIV",{class:!0});var i=$(l);c=g(i,"UL",{class:!0});var r=$(c);for(let p=0;p<o.length;p+=1)o[p].l(r);r.forEach(f),i.forEach(f),this.h()},h(){_(c,"class","svelte-16251kd"),_(l,"class","svelte-16251kd")},m(e,i){E(t,e,i),y(e,s,i),E(a,e,i),y(e,h,i),y(e,l,i),d(l,c);for(let r=0;r<o.length;r+=1)o[r].m(c,null);m=!0},p(e,[i]){if(i&1){n=e[0];let r;for(r=0;r<n.length;r+=1){const p=D(e,n,r);o[r]?o[r].p(p,i):(o[r]=M(p),o[r].c(),o[r].m(c,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},i(e){m||(S(t.$$.fragment,e),S(a.$$.fragment,e),m=!0)},o(e){w(t.$$.fragment,e),w(a.$$.fragment,e),m=!1},d(e){A(t,e),e&&f(s),A(a,e),e&&f(h),e&&f(l),C(o,e)}}}function R(u){return[[{name:"Stoic Haikus",route:"poetry/stoic-haikus"},{name:"Back!",route:"poetry/back!"},{name:"A Door For Change",route:"poetry/a-door-for-change"},{name:"The Matchbox",route:"poetry/the-matchbox"},{name:"To Dance",route:"poetry/to-dance"},{name:"Reconciliation",route:"poetry/reconciliation"},{name:"Peach Picking",route:"poetry/peach-picking"},{name:"Forgive",route:"poetry/forgive"},{name:"Home",route:"poetry/home"}]]}class O extends T{constructor(t){super(),q(this,t,R,N,B,{})}}export{O as default};
