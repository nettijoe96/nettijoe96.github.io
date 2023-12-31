import{S as r,i as m,s as i,k as h,q as u,Q as g,l as p,m as f,r as k,h as n,G as d,B as o}from"./index-9a21a118.js";function S(l){let t,e;return{c(){t=h("script"),e=u(`if (document) {
            let mode = localStorage.theme || "light";
			if (mode === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
				localStorage.theme = "dark";
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.theme = "light";
			}
        }`)},l(c){const a=g("svelte-15uh473",document.head);t=p(a,"SCRIPT",{});var s=f(t);e=k(s,`if (document) {
            let mode = localStorage.theme || "light";
			if (mode === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
				localStorage.theme = "dark";
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.theme = "light";
			}
        }`),s.forEach(n),a.forEach(n)},m(c,a){d(document.head,t),d(t,e)},p:o,i:o,o,d(c){n(t)}}}class E extends r{constructor(t){super(),m(this,t,null,S,i,{})}}export{E as P};
