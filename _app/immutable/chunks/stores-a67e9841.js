import{S as d,i as m,s as i,k as h,q as u,Q as g,l as f,m as p,r as k,h as n,G as r,B as s}from"./index-b4c795e2.js";import{w as S}from"./index-92efdde0.js";function w(e){let t,a;return{c(){t=h("script"),a=u(`if (document) {
            let mode = localStorage.theme || "light";
			if (mode === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
				localStorage.theme = "dark";
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.theme = "light";
			}
        }`)},l(l){const o=g("svelte-15uh473",document.head);t=f(o,"SCRIPT",{});var c=p(t);a=k(c,`if (document) {
            let mode = localStorage.theme || "light";
			if (mode === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
				localStorage.theme = "dark";
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.theme = "light";
			}
        }`),c.forEach(n),o.forEach(n)},m(l,o){r(document.head,t),r(t,a)},p:s,i:s,o:s,d(l){n(t)}}}class b extends d{constructor(t){super(),m(this,t,null,w,i,{})}}const _="light",E=window.localStorage.getItem("theme")??_,v=S(E);v.subscribe(e=>{window.localStorage.setItem("theme",e)});export{b as P,v as t};
