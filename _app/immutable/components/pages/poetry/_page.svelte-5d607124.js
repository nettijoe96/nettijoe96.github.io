import{S as b,i as A,s as E,w as S,a as x,k as _,x as w,c as $,l as v,m as d,h as m,n as p,y as P,b as g,G as f,f as B,t as D,z as M,N as T,q,r as C,B as F}from"../../../chunks/index-d69f3999.js";import{M as H}from"../../../chunks/Menu-16eecde3.js";import{b as I}from"../../../chunks/paths-b4419565.js";function y(i,t,n){const s=i.slice();return s[1]=t[n].name,s[2]=t[n].route,s[4]=n,s}function k(i){let t,n,s,l=i[1]+"",u,c;return{c(){t=_("li"),n=_("a"),s=_("span"),u=q(l),c=x(),this.h()},l(a){t=v(a,"LI",{class:!0});var e=d(t);n=v(e,"A",{href:!0,class:!0});var r=d(n);s=v(r,"SPAN",{class:!0});var o=d(s);u=C(o,l),o.forEach(m),r.forEach(m),c=$(e),e.forEach(m),this.h()},h(){p(s,"class","svelte-7k16x1"),p(n,"href",I+"/"+i[2]),p(n,"class","svelte-7k16x1"),p(t,"class","svelte-7k16x1")},m(a,e){g(a,t,e),f(t,n),f(n,s),f(s,u),f(t,c)},p:F,d(a){a&&m(t)}}}function L(i){let t,n,s,l,u;t=new H({});let c=i[0],a=[];for(let e=0;e<c.length;e+=1)a[e]=k(y(i,c,e));return{c(){S(t.$$.fragment),n=x(),s=_("div"),l=_("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){w(t.$$.fragment,e),n=$(e),s=v(e,"DIV",{class:!0});var r=d(s);l=v(r,"UL",{class:!0});var o=d(l);for(let h=0;h<a.length;h+=1)a[h].l(o);o.forEach(m),r.forEach(m),this.h()},h(){p(l,"class","svelte-7k16x1"),p(s,"class","svelte-7k16x1")},m(e,r){P(t,e,r),g(e,n,r),g(e,s,r),f(s,l);for(let o=0;o<a.length;o+=1)a[o].m(l,null);u=!0},p(e,[r]){if(r&1){c=e[0];let o;for(o=0;o<c.length;o+=1){const h=y(e,c,o);a[o]?a[o].p(h,r):(a[o]=k(h),a[o].c(),a[o].m(l,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=c.length}},i(e){u||(B(t.$$.fragment,e),u=!0)},o(e){D(t.$$.fragment,e),u=!1},d(e){M(t,e),e&&m(n),e&&m(s),T(a,e)}}}function N(i){return[[{name:"A Boy Sits Upon A Tower",route:"poetry/a-boy-sits-upon-a-tower"},{name:"A Door For Change",route:"poetry/a-door-for-change"},{name:"Back!",route:"poetry/back!"},{name:"Forgive",route:"poetry/forgive"},{name:"Home",route:"poetry/home"},{name:"Peach Picking",route:"poetry/peach-picking"},{name:"Reconciliation",route:"poetry/reconciliation"},{name:"Stoic Haikus",route:"poetry/stoic-haikus"},{name:"The Matchbox",route:"poetry/the-matchbox"},{name:"To Dance",route:"poetry/to-dance"}]]}class R extends b{constructor(t){super(),A(this,t,N,L,E,{})}}export{R as default};
