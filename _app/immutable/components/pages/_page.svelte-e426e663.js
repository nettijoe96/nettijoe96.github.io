import{S as hl,i as pl,s as dl,I as vl,e as Ce,b as D,J as bt,f as je,t as Et,d as _l,h as a,K as ul,L as ml,w as gl,a as v,x as bl,c as _,y as El,M as kl,z as yl,g as Il,B as C,k as n,q as g,l as r,m as c,r as b,n as t,N as kt,O as sl,G as e,P as al,Q as wl}from"../../chunks/index-a31e140d.js";import{M as Al}from"../../chunks/Menu-ce2dfe6f.js";function Ll(h,s){async function i(){let o=s?document.querySelector(s).innerText:h.innerText;try{await navigator.clipboard.writeText(o),h.dispatchEvent(new CustomEvent("copysuccess",{bubbles:!0,detail:h.innerText}))}catch(l){h.dispatchEvent(new CustomEvent("copyerror",{bubbles:!0,detail:l}))}}return h.addEventListener("click",i),{destroy(){h.removeEventListener("click",i)}}}function nl(h,s,i){const o=h.slice();return o[13]=s[i].name,o[14]=s[i].link,o[16]=i,o}function rl(h){let s,i,o,l;s=new Al({});let u={ctx:h,current:null,token:null,hasCatch:!1,pending:Nl,then:Sl,catch:Pl,value:12};return ml(jl("me1.png"),u),{c(){gl(s.$$.fragment),i=v(),o=Ce(),u.block.c()},l(f){bl(s.$$.fragment,f),i=_(f),o=Ce(),u.block.l(f)},m(f,d){El(s,f,d),D(f,i,d),D(f,o,d),u.block.m(f,u.anchor=d),u.mount=()=>o.parentNode,u.anchor=o,l=!0},p(f,d){h=f,kl(u,h,d)},i(f){l||(je(s.$$.fragment,f),l=!0)},o(f){Et(s.$$.fragment,f),l=!1},d(f){yl(s,f),f&&a(i),f&&a(o),u.block.d(f),u.token=null,u=null}}}function Pl(h){return{c:C,l:C,m:C,p:C,d:C}}function Sl(h){let s,i,o,l,u,f,d,L,k,P,q,G,N,S,Ee,Ge,se,H,J,ke,Me,qe,ae,z,V,ye,De,He,ne,re,Je,ze,ce,W,B,Ie,Ve,We,ie,F,K,we,Be,Fe,oe,R,x,O,wt,Ke,Re,fe,U,Q,Ae,xe,Oe,ue,X,Y,Le,Ue,Qe,he,Z,$,ee,At,Xe,Ye,pe,de,Ze,$e,Ne,ve,_e,et,tt,T,Pe,lt,te,st,at,nt,j,Se,rt,le,ct,it,Te,ot,Lt,I=!h[1]&&cl(),me=h[6],y=[];for(let m=0;m<me.length;m+=1)y[m]=il(nl(h,me,m));let w=h[4]&&ol(),A=h[3]&&fl();return{c(){s=n("div"),I&&I.c(),i=v(),o=n("div"),l=n("ul"),u=n("li"),f=n("h1"),d=g("About"),L=v(),k=n("li"),P=n("p"),q=g("My name is Joe Netti and I am backend software engineer. I am passionate about improving social media, privacy, governance, identity, and financial access with technology. I love music, poetry, biking and board games."),G=v(),N=n("li"),S=n("h1"),Ee=g("Info"),Ge=v(),se=n("li"),H=n("a"),J=n("span"),ke=n("i"),Me=g(`
                                Resume`),qe=v(),ae=n("li"),z=n("a"),V=n("span"),ye=n("i"),De=g(`
                                Github`),He=v(),ne=n("li"),re=n("h1"),Je=g("Tech Stack"),ze=v(),ce=n("li"),W=n("a"),B=n("span"),Ie=n("i"),Ve=g(`
                                Golang`),We=v(),ie=n("li"),F=n("a"),K=n("span"),we=n("i"),Be=g(`
                                Python`),Fe=v(),oe=n("li"),R=n("a"),x=n("span"),O=n("img"),Ke=g(`
                                Scala`),Re=v(),fe=n("li"),U=n("a"),Q=n("span"),Ae=n("i"),xe=g(`
                                Docker`),Oe=v(),ue=n("li"),X=n("a"),Y=n("span"),Le=n("i"),Ue=g(`
                                Kubernetes`),Qe=v(),he=n("li"),Z=n("a"),$=n("span"),ee=n("img"),Xe=g(`
                                Svelte/Sveltekit`),Ye=v(),pe=n("li"),de=n("h1"),Ze=g("Code"),$e=v();for(let m=0;m<y.length;m+=1)y[m].c();Ne=v(),ve=n("li"),_e=n("h1"),et=g("Crypto"),tt=v(),T=n("li"),Pe=n("i"),lt=v(),te=n("p"),st=g(yt),at=v(),w&&w.c(),nt=v(),j=n("li"),Se=n("i"),rt=v(),le=n("p"),ct=g(It),it=v(),A&&A.c(),this.h()},l(m){s=r(m,"DIV",{class:!0});var M=c(s);I&&I.l(M),i=_(M),o=r(M,"DIV",{class:!0});var E=c(o);l=r(E,"UL",{class:!0});var p=c(l);u=r(p,"LI",{class:!0});var Pt=c(u);f=r(Pt,"H1",{class:!0});var St=c(f);d=b(St,"About"),St.forEach(a),Pt.forEach(a),L=_(p),k=r(p,"LI",{class:!0});var Nt=c(k);P=r(Nt,"P",{class:!0});var Tt=c(P);q=b(Tt,"My name is Joe Netti and I am backend software engineer. I am passionate about improving social media, privacy, governance, identity, and financial access with technology. I love music, poetry, biking and board games."),Tt.forEach(a),Nt.forEach(a),G=_(p),N=r(p,"LI",{class:!0});var jt=c(N);S=r(jt,"H1",{class:!0});var Ct=c(S);Ee=b(Ct,"Info"),Ct.forEach(a),jt.forEach(a),Ge=_(p),se=r(p,"LI",{class:!0});var Gt=c(se);H=r(Gt,"A",{href:!0,class:!0});var Mt=c(H);J=r(Mt,"SPAN",{class:!0});var ft=c(J);ke=r(ft,"I",{class:!0}),c(ke).forEach(a),Me=b(ft,`
                                Resume`),ft.forEach(a),Mt.forEach(a),Gt.forEach(a),qe=_(p),ae=r(p,"LI",{class:!0});var qt=c(ae);z=r(qt,"A",{href:!0,class:!0});var Dt=c(z);V=r(Dt,"SPAN",{class:!0});var ut=c(V);ye=r(ut,"I",{class:!0}),c(ye).forEach(a),De=b(ut,`
                                Github`),ut.forEach(a),Dt.forEach(a),qt.forEach(a),He=_(p),ne=r(p,"LI",{class:!0});var Ht=c(ne);re=r(Ht,"H1",{class:!0});var Jt=c(re);Je=b(Jt,"Tech Stack"),Jt.forEach(a),Ht.forEach(a),ze=_(p),ce=r(p,"LI",{class:!0});var zt=c(ce);W=r(zt,"A",{href:!0,class:!0});var Vt=c(W);B=r(Vt,"SPAN",{class:!0});var ht=c(B);Ie=r(ht,"I",{class:!0}),c(Ie).forEach(a),Ve=b(ht,`
                                Golang`),ht.forEach(a),Vt.forEach(a),zt.forEach(a),We=_(p),ie=r(p,"LI",{class:!0});var Wt=c(ie);F=r(Wt,"A",{href:!0,class:!0});var Bt=c(F);K=r(Bt,"SPAN",{class:!0});var pt=c(K);we=r(pt,"I",{class:!0}),c(we).forEach(a),Be=b(pt,`
                                Python`),pt.forEach(a),Bt.forEach(a),Wt.forEach(a),Fe=_(p),oe=r(p,"LI",{class:!0});var Ft=c(oe);R=r(Ft,"A",{href:!0,class:!0});var Kt=c(R);x=r(Kt,"SPAN",{class:!0});var dt=c(x);O=r(dt,"IMG",{class:!0,src:!0,alt:!0}),Ke=b(dt,`
                                Scala`),dt.forEach(a),Kt.forEach(a),Ft.forEach(a),Re=_(p),fe=r(p,"LI",{class:!0});var Rt=c(fe);U=r(Rt,"A",{href:!0,class:!0});var xt=c(U);Q=r(xt,"SPAN",{class:!0});var vt=c(Q);Ae=r(vt,"I",{class:!0}),c(Ae).forEach(a),xe=b(vt,`
                                Docker`),vt.forEach(a),xt.forEach(a),Rt.forEach(a),Oe=_(p),ue=r(p,"LI",{class:!0});var Ot=c(ue);X=r(Ot,"A",{href:!0,class:!0});var Ut=c(X);Y=r(Ut,"SPAN",{class:!0});var _t=c(Y);Le=r(_t,"I",{class:!0}),c(Le).forEach(a),Ue=b(_t,`
                                Kubernetes`),_t.forEach(a),Ut.forEach(a),Ot.forEach(a),Qe=_(p),he=r(p,"LI",{class:!0});var Qt=c(he);Z=r(Qt,"A",{href:!0,class:!0});var Xt=c(Z);$=r(Xt,"SPAN",{class:!0});var mt=c($);ee=r(mt,"IMG",{class:!0,src:!0,alt:!0}),Xe=b(mt,`
                                Svelte/Sveltekit`),mt.forEach(a),Xt.forEach(a),Qt.forEach(a),Ye=_(p),pe=r(p,"LI",{class:!0});var Yt=c(pe);de=r(Yt,"H1",{class:!0});var Zt=c(de);Ze=b(Zt,"Code"),Zt.forEach(a),Yt.forEach(a),$e=_(p);for(let gt=0;gt<y.length;gt+=1)y[gt].l(p);Ne=_(p),ve=r(p,"LI",{class:!0});var $t=c(ve);_e=r($t,"H1",{class:!0});var el=c(_e);et=b(el,"Crypto"),el.forEach(a),$t.forEach(a),tt=_(p),T=r(p,"LI",{class:!0});var ge=c(T);Pe=r(ge,"I",{class:!0}),c(Pe).forEach(a),lt=_(ge),te=r(ge,"P",{class:!0});var tl=c(te);st=b(tl,yt),tl.forEach(a),at=_(ge),w&&w.l(ge),ge.forEach(a),nt=_(p),j=r(p,"LI",{class:!0});var be=c(j);Se=r(be,"I",{class:!0}),c(Se).forEach(a),rt=_(be),le=r(be,"P",{class:!0});var ll=c(le);ct=b(ll,It),ll.forEach(a),it=_(be),A&&A.l(be),be.forEach(a),p.forEach(a),E.forEach(a),M.forEach(a),this.h()},h(){t(f,"class","svelte-9p6nn3"),t(u,"class","item svelte-9p6nn3"),t(P,"class","bio svelte-9p6nn3"),t(k,"class","item svelte-9p6nn3"),t(S,"class","svelte-9p6nn3"),t(N,"class","item svelte-9p6nn3"),t(ke,"class","fa-solid fa-file-lines svelte-9p6nn3"),t(J,"class","svelte-9p6nn3"),t(H,"href","/resume"),t(H,"class","svelte-9p6nn3"),t(se,"class","item svelte-9p6nn3"),t(ye,"class","fa-brands fa-github svelte-9p6nn3"),t(V,"class","svelte-9p6nn3"),t(z,"href","https://github.com/nettijoe96"),t(z,"class","svelte-9p6nn3"),t(ae,"class","item svelte-9p6nn3"),t(re,"class","svelte-9p6nn3"),t(ne,"class","item svelte-9p6nn3"),t(Ie,"class","fa-brands fa-golang svelte-9p6nn3"),t(B,"class","svelte-9p6nn3"),t(W,"href","https://go.dev/doc/effective_go"),t(W,"class","svelte-9p6nn3"),t(ce,"class","item svelte-9p6nn3"),t(we,"class","fa-brands fa-python svelte-9p6nn3"),t(K,"class","svelte-9p6nn3"),t(F,"href","https://docs.python.org/3.12/library/index.html"),t(F,"class","svelte-9p6nn3"),t(ie,"class","item svelte-9p6nn3"),t(O,"class","scala svelte-9p6nn3"),kt(O.src,wt="scala.png")||t(O,"src",wt),t(O,"alt","scala icon"),t(x,"class","svelte-9p6nn3"),t(R,"href","https://docs.python.org/3.12/library/index.html"),t(R,"class","svelte-9p6nn3"),t(oe,"class","item svelte-9p6nn3"),t(Ae,"class","fa-brands fa-docker svelte-9p6nn3"),t(Q,"class","svelte-9p6nn3"),t(U,"href","https://docs.docker.com/reference/"),t(U,"class","svelte-9p6nn3"),t(fe,"class","item svelte-9p6nn3"),t(Le,"class","fa-solid fa-dharmachakra svelte-9p6nn3"),t(Y,"class","svelte-9p6nn3"),t(X,"href","https://docs.docker.com/reference/"),t(X,"class","svelte-9p6nn3"),t(ue,"class","item svelte-9p6nn3"),t(ee,"class","svelte svelte-9p6nn3"),kt(ee.src,At="svelte_red.jpg")||t(ee,"src",At),t(ee,"alt","svelte icon"),t($,"class","svelte-9p6nn3"),t(Z,"href","https://svelte.dev/tutorial/basics"),t(Z,"class","svelte-9p6nn3"),t(he,"class","item svelte-9p6nn3"),t(de,"class","svelte-9p6nn3"),t(pe,"class","item svelte-9p6nn3"),t(_e,"class","svelte-9p6nn3"),t(ve,"class","item svelte-9p6nn3"),t(Pe,"class","fa-brands fa-ethereum svelte-9p6nn3"),t(te,"class","addr svelte-9p6nn3"),t(T,"class","item svelte-9p6nn3"),t(Se,"class","fa-brands fa-bitcoin svelte-9p6nn3"),t(le,"class","addr svelte-9p6nn3"),t(j,"class","item svelte-9p6nn3"),t(l,"class","svelte-9p6nn3"),t(o,"class","svelte-9p6nn3"),t(s,"class",Te=sl(h[5])+" svelte-9p6nn3")},m(m,M){D(m,s,M),I&&I.m(s,null),e(s,i),e(s,o),e(o,l),e(l,u),e(u,f),e(f,d),e(l,L),e(l,k),e(k,P),e(P,q),e(l,G),e(l,N),e(N,S),e(S,Ee),e(l,Ge),e(l,se),e(se,H),e(H,J),e(J,ke),e(J,Me),e(l,qe),e(l,ae),e(ae,z),e(z,V),e(V,ye),e(V,De),e(l,He),e(l,ne),e(ne,re),e(re,Je),e(l,ze),e(l,ce),e(ce,W),e(W,B),e(B,Ie),e(B,Ve),e(l,We),e(l,ie),e(ie,F),e(F,K),e(K,we),e(K,Be),e(l,Fe),e(l,oe),e(oe,R),e(R,x),e(x,O),e(x,Ke),e(l,Re),e(l,fe),e(fe,U),e(U,Q),e(Q,Ae),e(Q,xe),e(l,Oe),e(l,ue),e(ue,X),e(X,Y),e(Y,Le),e(Y,Ue),e(l,Qe),e(l,he),e(he,Z),e(Z,$),e($,ee),e($,Xe),e(l,Ye),e(l,pe),e(pe,de),e(de,Ze),e(l,$e);for(let E=0;E<y.length;E+=1)y[E].m(l,null);e(l,Ne),e(l,ve),e(ve,_e),e(_e,et),e(l,tt),e(l,T),e(T,Pe),e(T,lt),e(T,te),e(te,st),e(T,at),w&&w.m(T,null),e(l,nt),e(l,j),e(j,Se),e(j,rt),e(j,le),e(le,ct),e(j,it),A&&A.m(j,null),ot||(Lt=[al(h[9].call(null,te)),al(h[9].call(null,le))],ot=!0)},p(m,M){if(m[1]?I&&(I.d(1),I=null):I||(I=cl(),I.c(),I.m(s,i)),M&64){me=m[6];let E;for(E=0;E<me.length;E+=1){const p=nl(m,me,E);y[E]?y[E].p(p,M):(y[E]=il(p),y[E].c(),y[E].m(l,Ne))}for(;E<y.length;E+=1)y[E].d(1);y.length=me.length}m[4]?w||(w=ol(),w.c(),w.m(T,null)):w&&(w.d(1),w=null),m[3]?A||(A=fl(),A.c(),A.m(j,null)):A&&(A.d(1),A=null),M&32&&Te!==(Te=sl(m[5])+" svelte-9p6nn3")&&t(s,"class",Te)},d(m){m&&a(s),I&&I.d(),wl(y,m),w&&w.d(),A&&A.d(),ot=!1,ul(Lt)}}}function cl(h){let s,i,o,l,u,f,d,L;return{c(){s=n("figure"),i=n("div"),o=n("div"),l=n("img"),f=v(),d=n("figcaption"),L=g("Joe in front of a brick wall"),this.h()},l(k){s=r(k,"FIGURE",{class:!0});var P=c(s);i=r(P,"DIV",{class:!0});var q=c(i);o=r(q,"DIV",{class:!0});var G=c(o);l=r(G,"IMG",{class:!0,src:!0,alt:!0}),f=_(G),d=r(G,"FIGCAPTION",{class:!0});var N=c(d);L=b(N,"Joe in front of a brick wall"),N.forEach(a),G.forEach(a),q.forEach(a),P.forEach(a),this.h()},h(){t(l,"class","joe svelte-9p6nn3"),kt(l.src,u="me1.png")||t(l,"src",u),t(l,"alt","Joe"),t(d,"class","svelte-9p6nn3"),t(o,"class","card_image svelte-9p6nn3"),t(i,"class","card svelte-9p6nn3"),t(s,"class","svelte-9p6nn3")},m(k,P){D(k,s,P),e(s,i),e(i,o),e(o,l),e(o,f),e(o,d),e(d,L)},d(k){k&&a(s)}}}function il(h){let s,i,o,l=h[13]+"",u;return{c(){s=n("li"),i=n("a"),o=n("span"),u=g(l),this.h()},l(f){s=r(f,"LI",{class:!0});var d=c(s);i=r(d,"A",{href:!0,class:!0});var L=c(i);o=r(L,"SPAN",{class:!0});var k=c(o);u=b(k,l),k.forEach(a),L.forEach(a),d.forEach(a),this.h()},h(){t(o,"class","svelte-9p6nn3"),t(i,"href",h[14]),t(i,"class","svelte-9p6nn3"),t(s,"class","item svelte-9p6nn3")},m(f,d){D(f,s,d),e(s,i),e(i,o),e(o,u)},p:C,d(f){f&&a(s)}}}function ol(h){let s,i;return{c(){s=n("p"),i=g("✓"),this.h()},l(o){s=r(o,"P",{class:!0});var l=c(s);i=b(l,"✓"),l.forEach(a),this.h()},h(){t(s,"class","copied svelte-9p6nn3")},m(o,l){D(o,s,l),e(s,i)},d(o){o&&a(s)}}}function fl(h){let s,i;return{c(){s=n("p"),i=g("✓"),this.h()},l(o){s=r(o,"P",{class:!0});var l=c(s);i=b(l,"✓"),l.forEach(a),this.h()},h(){t(s,"class","copied svelte-9p6nn3")},m(o,l){D(o,s,l),e(s,i)},d(o){o&&a(s)}}}function Nl(h){return{c:C,l:C,m:C,p:C,d:C}}function Tl(h){let s,i,o,l;vl(h[10]);let u=h[0]!=0&&rl(h);return{c(){u&&u.c(),s=Ce()},l(f){u&&u.l(f),s=Ce()},m(f,d){u&&u.m(f,d),D(f,s,d),i=!0,o||(l=[bt(window,"copysuccess",h[7]),bt(window,"copyerror",h[8]),bt(window,"resize",h[10])],o=!0)},p(f,[d]){f[0]!=0?u?(u.p(f,d),d&1&&je(u,1)):(u=rl(f),u.c(),je(u,1),u.m(s.parentNode,s)):u&&(Il(),Et(u,1,1,()=>{u=null}),_l())},i(f){i||(je(u),i=!0)},o(f){Et(u),i=!1},d(f){u&&u.d(f),f&&a(s),o=!1,ul(l)}}}let yt="0xF0cbDbf65380D0f7784a1E2723D13E2D6760264f",It="bc1qd542h6rgvvzqneq6tyq400wyfkf0d7af6whzhs";function jl(h){return new Promise(function(s){let i=new Image;i.onload=s,i.src=h})}function Cl(h,s,i){let o,l,u,f,d=[{name:"go bloom filter package",link:"https://github.com/nettijoe96/bloom"},{name:"sveltekit static website",link:"https://github.com/nettijoe96/nettijoe96.github.io"},{name:"lightning network simulation",link:"https://github.com/rustyrussell/million-channels-project"},{name:"JWT c-lightning plugin",link:"https://github.com/nettijoe96/jwt-factory"},{name:"graphql c-lightning plugin",link:"https://github.com/nettijoe96/c-lightning-graphql"},{name:"indexed merkle tree",link:"https://github.com/nettijoe96/BM-BGP/tree/master/indexedMerkleTree"}],L=0,k=0;function P(S){S.detail==yt?i(4,o=!0):S.detail==It&&i(3,l=!0)}function q(S){`${S.detail}`}function G(S,Ee){Ll(S,Ee)}function N(){i(0,L=window.innerWidth),i(2,k=window.innerHeight)}return h.$$.update=()=>{h.$$.dirty&1&&i(1,u=L<=500),h.$$.dirty&2&&i(5,f=u?"div-mobile":"div-web")},i(4,o=!1),i(3,l=!1),[L,u,k,l,o,f,d,P,q,G,N]}class ql extends hl{constructor(s){super(),pl(this,s,Cl,Tl,dl,{})}}export{ql as default};
