import{S as ks,i as Is,s as ys,I as ws,e as Ve,b as B,J as Sl,f as He,t as Nl,d as As,h as a,K as Es,L as Ls,w as Ps,a as b,x as Ss,c as _,y as Ns,M as Gs,z as Ts,g as Cs,B as q,k as c,q as g,l as r,m as i,r as E,n as s,N as ze,O as fs,G as e,P as us,Q as Ds}from"../../chunks/index-a31e140d.js";import{M as Ms}from"../../chunks/Menu-ce2dfe6f.js";function js(u,t){async function o(){let n=t?document.querySelector(t).innerText:u.innerText;try{await navigator.clipboard.writeText(n),u.dispatchEvent(new CustomEvent("copysuccess",{bubbles:!0,detail:u.innerText}))}catch(l){u.dispatchEvent(new CustomEvent("copyerror",{bubbles:!0,detail:l}))}}return u.addEventListener("click",o),{destroy(){u.removeEventListener("click",o)}}}function ds(u,t,o){const n=u.slice();return n[13]=t[o].name,n[14]=t[o].link,n[16]=o,n}function vs(u){let t,o,n,l;t=new Ms({});let h={ctx:u,current:null,token:null,hasCatch:!1,pending:Hs,then:Js,catch:qs,value:12};return Ls(zs("me1.png"),h),{c(){Ps(t.$$.fragment),o=b(),n=Ve(),h.block.c()},l(f){Ss(t.$$.fragment,f),o=_(f),n=Ve(),h.block.l(f)},m(f,v){Ns(t,f,v),B(f,o,v),B(f,n,v),h.block.m(f,h.anchor=v),h.mount=()=>n.parentNode,h.anchor=n,l=!0},p(f,v){u=f,Gs(h,u,v)},i(f){l||(He(t.$$.fragment,f),l=!0)},o(f){Nl(t.$$.fragment,f),l=!1},d(f){Ts(t,f),f&&a(o),f&&a(n),h.block.d(f),h.token=null,h=null}}}function qs(u){return{c:q,l:q,m:q,p:q,d:q}}function Js(u){let t,o,n,l,h,f,v,m,k,I,A,T,C,w,D,Fe,Re,$,K,O,Ie,We,Be,ee,U,x,ye,Ke,Oe,le,se,Ue,xe,te,H,we,Qe,ae,Xe,Ye,ce,V,Q,Cl,Ze,re,$e,el,ie,z,Ae,ll,ne,sl,tl,oe,F,Le,al,he,cl,rl,fe,R,Pe,il,ue,nl,ol,de,W,X,Dl,hl,ve,fl,ul,be,_e,dl,vl,Ge,pe,me,bl,_l,M,Se,pl,Y,ml,gl,El,j,Ne,kl,Z,Il,yl,Te,wl,Ml,P=!u[1]&&bs(),S=u[1]&&_s(),ge=u[6],L=[];for(let p=0;p<ge.length;p+=1)L[p]=ps(ds(u,ge,p));let N=u[4]&&ms(),G=u[3]&&gs();return{c(){t=c("div"),P&&P.c(),o=b(),n=c("div"),l=c("ul"),S&&S.c(),h=b(),f=c("li"),v=c("h1"),m=g("About"),k=b(),I=c("li"),A=c("p"),T=g("My name is Joe Netti and I am backend software engineer. I am passionate about improving social media, privacy, governance, identity, and financial access with technology. I love music, poetry, biking and board games."),C=b(),w=c("li"),D=c("h1"),Fe=g("Info"),Re=b(),$=c("li"),K=c("a"),O=c("span"),Ie=c("i"),We=g(`
                                Resume`),Be=b(),ee=c("li"),U=c("a"),x=c("span"),ye=c("i"),Ke=g(`
                                Github`),Oe=b(),le=c("li"),se=c("h1"),Ue=g("Tech Stack"),xe=b(),te=c("li"),H=c("a"),we=c("i"),Qe=b(),ae=c("span"),Xe=g("Golang"),Ye=b(),ce=c("li"),V=c("a"),Q=c("img"),Ze=b(),re=c("span"),$e=g("Svelte/Sveltekit"),el=b(),ie=c("li"),z=c("a"),Ae=c("i"),ll=b(),ne=c("span"),sl=g("Docker"),tl=b(),oe=c("li"),F=c("a"),Le=c("i"),al=b(),he=c("span"),cl=g("Kubernetes"),rl=b(),fe=c("li"),R=c("a"),Pe=c("i"),il=b(),ue=c("span"),nl=g("Python"),ol=b(),de=c("li"),W=c("a"),X=c("img"),hl=b(),ve=c("span"),fl=g("Scala"),ul=b(),be=c("li"),_e=c("h1"),dl=g("Code"),vl=b();for(let p=0;p<L.length;p+=1)L[p].c();Ge=b(),pe=c("li"),me=c("h1"),bl=g("Crypto"),_l=b(),M=c("li"),Se=c("i"),pl=b(),Y=c("p"),ml=g(Gl),gl=b(),N&&N.c(),El=b(),j=c("li"),Ne=c("i"),kl=b(),Z=c("p"),Il=g(Tl),yl=b(),G&&G.c(),this.h()},l(p){t=r(p,"DIV",{class:!0});var J=i(t);P&&P.l(J),o=_(J),n=r(J,"DIV",{class:!0});var y=i(n);l=r(y,"UL",{class:!0});var d=i(l);S&&S.l(d),h=_(d),f=r(d,"LI",{class:!0});var jl=i(f);v=r(jl,"H1",{class:!0});var ql=i(v);m=E(ql,"About"),ql.forEach(a),jl.forEach(a),k=_(d),I=r(d,"LI",{class:!0});var Jl=i(I);A=r(Jl,"P",{class:!0});var Hl=i(A);T=E(Hl,"My name is Joe Netti and I am backend software engineer. I am passionate about improving social media, privacy, governance, identity, and financial access with technology. I love music, poetry, biking and board games."),Hl.forEach(a),Jl.forEach(a),C=_(d),w=r(d,"LI",{class:!0});var Vl=i(w);D=r(Vl,"H1",{class:!0});var zl=i(D);Fe=E(zl,"Info"),zl.forEach(a),Vl.forEach(a),Re=_(d),$=r(d,"LI",{class:!0});var Fl=i($);K=r(Fl,"A",{href:!0,class:!0});var Rl=i(K);O=r(Rl,"SPAN",{class:!0});var Al=i(O);Ie=r(Al,"I",{class:!0}),i(Ie).forEach(a),We=E(Al,`
                                Resume`),Al.forEach(a),Rl.forEach(a),Fl.forEach(a),Be=_(d),ee=r(d,"LI",{class:!0});var Wl=i(ee);U=r(Wl,"A",{href:!0,class:!0});var Bl=i(U);x=r(Bl,"SPAN",{class:!0});var Ll=i(x);ye=r(Ll,"I",{class:!0}),i(ye).forEach(a),Ke=E(Ll,`
                                Github`),Ll.forEach(a),Bl.forEach(a),Wl.forEach(a),Oe=_(d),le=r(d,"LI",{class:!0});var Kl=i(le);se=r(Kl,"H1",{class:!0});var Ol=i(se);Ue=E(Ol,"Tech Stack"),Ol.forEach(a),Kl.forEach(a),xe=_(d),te=r(d,"LI",{class:!0});var Ul=i(te);H=r(Ul,"A",{href:!0,class:!0});var Ce=i(H);we=r(Ce,"I",{class:!0}),i(we).forEach(a),Qe=_(Ce),ae=r(Ce,"SPAN",{class:!0});var xl=i(ae);Xe=E(xl,"Golang"),xl.forEach(a),Ce.forEach(a),Ul.forEach(a),Ye=_(d),ce=r(d,"LI",{class:!0});var Ql=i(ce);V=r(Ql,"A",{href:!0,class:!0});var De=i(V);Q=r(De,"IMG",{class:!0,src:!0,alt:!0}),Ze=_(De),re=r(De,"SPAN",{class:!0});var Xl=i(re);$e=E(Xl,"Svelte/Sveltekit"),Xl.forEach(a),De.forEach(a),Ql.forEach(a),el=_(d),ie=r(d,"LI",{class:!0});var Yl=i(ie);z=r(Yl,"A",{href:!0,class:!0});var Me=i(z);Ae=r(Me,"I",{class:!0}),i(Ae).forEach(a),ll=_(Me),ne=r(Me,"SPAN",{class:!0});var Zl=i(ne);sl=E(Zl,"Docker"),Zl.forEach(a),Me.forEach(a),Yl.forEach(a),tl=_(d),oe=r(d,"LI",{class:!0});var $l=i(oe);F=r($l,"A",{href:!0,class:!0});var je=i(F);Le=r(je,"I",{class:!0}),i(Le).forEach(a),al=_(je),he=r(je,"SPAN",{class:!0});var es=i(he);cl=E(es,"Kubernetes"),es.forEach(a),je.forEach(a),$l.forEach(a),rl=_(d),fe=r(d,"LI",{class:!0});var ls=i(fe);R=r(ls,"A",{href:!0,class:!0});var qe=i(R);Pe=r(qe,"I",{class:!0}),i(Pe).forEach(a),il=_(qe),ue=r(qe,"SPAN",{class:!0});var ss=i(ue);nl=E(ss,"Python"),ss.forEach(a),qe.forEach(a),ls.forEach(a),ol=_(d),de=r(d,"LI",{class:!0});var ts=i(de);W=r(ts,"A",{href:!0,class:!0});var Je=i(W);X=r(Je,"IMG",{class:!0,src:!0,alt:!0}),hl=_(Je),ve=r(Je,"SPAN",{class:!0});var as=i(ve);fl=E(as,"Scala"),as.forEach(a),Je.forEach(a),ts.forEach(a),ul=_(d),be=r(d,"LI",{class:!0});var cs=i(be);_e=r(cs,"H1",{class:!0});var rs=i(_e);dl=E(rs,"Code"),rs.forEach(a),cs.forEach(a),vl=_(d);for(let Pl=0;Pl<L.length;Pl+=1)L[Pl].l(d);Ge=_(d),pe=r(d,"LI",{class:!0});var is=i(pe);me=r(is,"H1",{class:!0});var ns=i(me);bl=E(ns,"Crypto"),ns.forEach(a),is.forEach(a),_l=_(d),M=r(d,"LI",{class:!0});var Ee=i(M);Se=r(Ee,"I",{class:!0}),i(Se).forEach(a),pl=_(Ee),Y=r(Ee,"P",{class:!0});var os=i(Y);ml=E(os,Gl),os.forEach(a),gl=_(Ee),N&&N.l(Ee),Ee.forEach(a),El=_(d),j=r(d,"LI",{class:!0});var ke=i(j);Ne=r(ke,"I",{class:!0}),i(Ne).forEach(a),kl=_(ke),Z=r(ke,"P",{class:!0});var hs=i(Z);Il=E(hs,Tl),hs.forEach(a),yl=_(ke),G&&G.l(ke),ke.forEach(a),d.forEach(a),y.forEach(a),J.forEach(a),this.h()},h(){s(v,"class","svelte-sblcha"),s(f,"class","item svelte-sblcha"),s(A,"class","bio svelte-sblcha"),s(I,"class","item svelte-sblcha"),s(D,"class","svelte-sblcha"),s(w,"class","item svelte-sblcha"),s(Ie,"class","fa-solid fa-file-lines svelte-sblcha"),s(O,"class","svelte-sblcha"),s(K,"href","/resume"),s(K,"class","svelte-sblcha"),s($,"class","item svelte-sblcha"),s(ye,"class","fa-brands fa-github svelte-sblcha"),s(x,"class","svelte-sblcha"),s(U,"href","https://github.com/nettijoe96"),s(U,"class","svelte-sblcha"),s(ee,"class","item svelte-sblcha"),s(se,"class","svelte-sblcha"),s(le,"class","item svelte-sblcha"),s(we,"class","fa-brands fa-golang svelte-sblcha"),s(ae,"class","svelte-sblcha"),s(H,"href","https://go.dev/doc/effective_go"),s(H,"class","svelte-sblcha"),s(te,"class","item svelte-sblcha"),s(Q,"class","svelte svelte-sblcha"),ze(Q.src,Cl="svelte_red.jpg")||s(Q,"src",Cl),s(Q,"alt","svelte icon"),s(re,"class","svelte-sblcha"),s(V,"href","https://svelte.dev/tutorial/basics"),s(V,"class","svelte-sblcha"),s(ce,"class","item svelte-sblcha"),s(Ae,"class","fa-brands fa-docker svelte-sblcha"),s(ne,"class","svelte-sblcha"),s(z,"href","https://docs.docker.com/reference/"),s(z,"class","svelte-sblcha"),s(ie,"class","item svelte-sblcha"),s(Le,"class","fa-solid fa-dharmachakra svelte-sblcha"),s(he,"class","svelte-sblcha"),s(F,"href","https://docs.docker.com/reference/"),s(F,"class","svelte-sblcha"),s(oe,"class","item svelte-sblcha"),s(Pe,"class","fa-brands fa-python svelte-sblcha"),s(ue,"class","svelte-sblcha"),s(R,"href","https://docs.python.org/3.12/library/index.html"),s(R,"class","svelte-sblcha"),s(fe,"class","item svelte-sblcha"),s(X,"class","scala svelte-sblcha"),ze(X.src,Dl="scala.png")||s(X,"src",Dl),s(X,"alt","scala icon"),s(ve,"class","svelte-sblcha"),s(W,"href","https://docs.python.org/3.12/library/index.html"),s(W,"class","svelte-sblcha"),s(de,"class","item svelte-sblcha"),s(_e,"class","svelte-sblcha"),s(be,"class","item svelte-sblcha"),s(me,"class","svelte-sblcha"),s(pe,"class","item svelte-sblcha"),s(Se,"class","fa-brands fa-ethereum svelte-sblcha"),s(Y,"class","addr svelte-sblcha"),s(M,"class","item svelte-sblcha"),s(Ne,"class","fa-brands fa-bitcoin svelte-sblcha"),s(Z,"class","addr svelte-sblcha"),s(j,"class","item svelte-sblcha"),s(l,"class","svelte-sblcha"),s(n,"class","svelte-sblcha"),s(t,"class",Te=fs(u[5])+" svelte-sblcha")},m(p,J){B(p,t,J),P&&P.m(t,null),e(t,o),e(t,n),e(n,l),S&&S.m(l,null),e(l,h),e(l,f),e(f,v),e(v,m),e(l,k),e(l,I),e(I,A),e(A,T),e(l,C),e(l,w),e(w,D),e(D,Fe),e(l,Re),e(l,$),e($,K),e(K,O),e(O,Ie),e(O,We),e(l,Be),e(l,ee),e(ee,U),e(U,x),e(x,ye),e(x,Ke),e(l,Oe),e(l,le),e(le,se),e(se,Ue),e(l,xe),e(l,te),e(te,H),e(H,we),e(H,Qe),e(H,ae),e(ae,Xe),e(l,Ye),e(l,ce),e(ce,V),e(V,Q),e(V,Ze),e(V,re),e(re,$e),e(l,el),e(l,ie),e(ie,z),e(z,Ae),e(z,ll),e(z,ne),e(ne,sl),e(l,tl),e(l,oe),e(oe,F),e(F,Le),e(F,al),e(F,he),e(he,cl),e(l,rl),e(l,fe),e(fe,R),e(R,Pe),e(R,il),e(R,ue),e(ue,nl),e(l,ol),e(l,de),e(de,W),e(W,X),e(W,hl),e(W,ve),e(ve,fl),e(l,ul),e(l,be),e(be,_e),e(_e,dl),e(l,vl);for(let y=0;y<L.length;y+=1)L[y].m(l,null);e(l,Ge),e(l,pe),e(pe,me),e(me,bl),e(l,_l),e(l,M),e(M,Se),e(M,pl),e(M,Y),e(Y,ml),e(M,gl),N&&N.m(M,null),e(l,El),e(l,j),e(j,Ne),e(j,kl),e(j,Z),e(Z,Il),e(j,yl),G&&G.m(j,null),wl||(Ml=[us(u[9].call(null,Y)),us(u[9].call(null,Z))],wl=!0)},p(p,J){if(p[1]?P&&(P.d(1),P=null):P||(P=bs(),P.c(),P.m(t,o)),p[1]?S||(S=_s(),S.c(),S.m(l,h)):S&&(S.d(1),S=null),J&64){ge=p[6];let y;for(y=0;y<ge.length;y+=1){const d=ds(p,ge,y);L[y]?L[y].p(d,J):(L[y]=ps(d),L[y].c(),L[y].m(l,Ge))}for(;y<L.length;y+=1)L[y].d(1);L.length=ge.length}p[4]?N||(N=ms(),N.c(),N.m(M,null)):N&&(N.d(1),N=null),p[3]?G||(G=gs(),G.c(),G.m(j,null)):G&&(G.d(1),G=null),J&32&&Te!==(Te=fs(p[5])+" svelte-sblcha")&&s(t,"class",Te)},d(p){p&&a(t),P&&P.d(),S&&S.d(),Ds(L,p),N&&N.d(),G&&G.d(),wl=!1,Es(Ml)}}}function bs(u){let t,o,n,l,h,f,v,m;return{c(){t=c("figure"),o=c("div"),n=c("div"),l=c("img"),f=b(),v=c("figcaption"),m=g("Joe in front of a brick wall"),this.h()},l(k){t=r(k,"FIGURE",{class:!0});var I=i(t);o=r(I,"DIV",{class:!0});var A=i(o);n=r(A,"DIV",{class:!0});var T=i(n);l=r(T,"IMG",{class:!0,src:!0,alt:!0}),f=_(T),v=r(T,"FIGCAPTION",{class:!0});var C=i(v);m=E(C,"Joe in front of a brick wall"),C.forEach(a),T.forEach(a),A.forEach(a),I.forEach(a),this.h()},h(){s(l,"class","joe svelte-sblcha"),ze(l.src,h="me1.png")||s(l,"src",h),s(l,"alt","Joe"),s(v,"class","svelte-sblcha"),s(n,"class","card-image-web svelte-sblcha"),s(o,"class","card-web svelte-sblcha"),s(t,"class","svelte-sblcha")},m(k,I){B(k,t,I),e(t,o),e(o,n),e(n,l),e(n,f),e(n,v),e(v,m)},d(k){k&&a(t)}}}function _s(u){let t,o,n,l,h,f,v,m,k;return{c(){t=c("li"),o=c("figure"),n=c("div"),l=c("div"),h=c("img"),v=b(),m=c("figcaption"),k=g("Joe in front of a brick wall"),this.h()},l(I){t=r(I,"LI",{class:!0});var A=i(t);o=r(A,"FIGURE",{});var T=i(o);n=r(T,"DIV",{class:!0});var C=i(n);l=r(C,"DIV",{class:!0});var w=i(l);h=r(w,"IMG",{class:!0,src:!0,alt:!0}),v=_(w),m=r(w,"FIGCAPTION",{class:!0});var D=i(m);k=E(D,"Joe in front of a brick wall"),D.forEach(a),w.forEach(a),C.forEach(a),T.forEach(a),A.forEach(a),this.h()},h(){s(h,"class","joe svelte-sblcha"),ze(h.src,f="me1.png")||s(h,"src",f),s(h,"alt","Joe"),s(m,"class","svelte-sblcha"),s(l,"class","card-image-mobile svelte-sblcha"),s(n,"class","card-mobile svelte-sblcha"),s(t,"class","item svelte-sblcha")},m(I,A){B(I,t,A),e(t,o),e(o,n),e(n,l),e(l,h),e(l,v),e(l,m),e(m,k)},d(I){I&&a(t)}}}function ps(u){let t,o,n,l=u[13]+"",h;return{c(){t=c("li"),o=c("a"),n=c("span"),h=g(l),this.h()},l(f){t=r(f,"LI",{class:!0});var v=i(t);o=r(v,"A",{href:!0,class:!0});var m=i(o);n=r(m,"SPAN",{class:!0});var k=i(n);h=E(k,l),k.forEach(a),m.forEach(a),v.forEach(a),this.h()},h(){s(n,"class","svelte-sblcha"),s(o,"href",u[14]),s(o,"class","svelte-sblcha"),s(t,"class","item svelte-sblcha")},m(f,v){B(f,t,v),e(t,o),e(o,n),e(n,h)},p:q,d(f){f&&a(t)}}}function ms(u){let t,o;return{c(){t=c("p"),o=g("✓"),this.h()},l(n){t=r(n,"P",{class:!0});var l=i(t);o=E(l,"✓"),l.forEach(a),this.h()},h(){s(t,"class","copied svelte-sblcha")},m(n,l){B(n,t,l),e(t,o)},d(n){n&&a(t)}}}function gs(u){let t,o;return{c(){t=c("p"),o=g("✓"),this.h()},l(n){t=r(n,"P",{class:!0});var l=i(t);o=E(l,"✓"),l.forEach(a),this.h()},h(){s(t,"class","copied svelte-sblcha")},m(n,l){B(n,t,l),e(t,o)},d(n){n&&a(t)}}}function Hs(u){return{c:q,l:q,m:q,p:q,d:q}}function Vs(u){let t,o,n,l;ws(u[10]);let h=u[0]!=0&&vs(u);return{c(){h&&h.c(),t=Ve()},l(f){h&&h.l(f),t=Ve()},m(f,v){h&&h.m(f,v),B(f,t,v),o=!0,n||(l=[Sl(window,"copysuccess",u[7]),Sl(window,"copyerror",u[8]),Sl(window,"resize",u[10])],n=!0)},p(f,[v]){f[0]!=0?h?(h.p(f,v),v&1&&He(h,1)):(h=vs(f),h.c(),He(h,1),h.m(t.parentNode,t)):h&&(Cs(),Nl(h,1,1,()=>{h=null}),As())},i(f){o||(He(h),o=!0)},o(f){Nl(h),o=!1},d(f){h&&h.d(f),f&&a(t),n=!1,Es(l)}}}let Gl="0xF0cbDbf65380D0f7784a1E2723D13E2D6760264f",Tl="bc1qd542h6rgvvzqneq6tyq400wyfkf0d7af6whzhs";function zs(u){return new Promise(function(t){let o=new Image;o.onload=t,o.src=u})}function Fs(u,t,o){let n,l,h,f,v=[{name:"sveltekit static website",link:"https://github.com/nettijoe96/nettijoe96.github.io"},{name:"lightning network simulation",link:"https://github.com/rustyrussell/million-channels-project"},{name:"JWT c-lightning plugin",link:"https://github.com/nettijoe96/jwt-factory"},{name:"graphql c-lightning plugin",link:"https://github.com/nettijoe96/c-lightning-graphql"},{name:"indexed merkle tree",link:"https://github.com/nettijoe96/BM-BGP/tree/master/indexedMerkleTree"}],m=0,k=0;function I(w){w.detail==Gl?o(4,n=!0):w.detail==Tl&&o(3,l=!0)}function A(w){`${w.detail}`}function T(w,D){js(w,D)}function C(){o(0,m=window.innerWidth),o(2,k=window.innerHeight)}return u.$$.update=()=>{u.$$.dirty&1&&o(1,h=m<=500),u.$$.dirty&2&&o(5,f=h?"div-mobile":"div-web")},o(4,n=!1),o(3,l=!1),[m,h,k,l,n,f,v,I,A,T,C]}class Bs extends ks{constructor(t){super(),Is(this,t,Fs,Vs,ys,{})}}export{Bs as default};