!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=document.querySelector("#content"),a=document.createElement("div");a.id="menu-items";const i=document.createElement("div");i.className="menu-div";const o=document.createElement("img");o.src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg",o.alt="Pastry Image";const r=document.createElement("h2");r.textContent="Pastries",i.appendChild(o),i.appendChild(r);const d=document.createElement("div");d.className="menu-div";const u=document.createElement("img");u.src="https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286_960_720.jpg",u.alt="Bread Image";const s=document.createElement("h2");s.textContent="Breads",d.appendChild(u),d.appendChild(s);const l=document.createElement("div");l.className="menu-div";const m=document.createElement("img");m.src="https://cdn.pixabay.com/photo/2016/11/05/20/17/donut-1801316_960_720.jpg",m.alt="Donut Image";const p=document.createElement("h2");p.textContent="Donuts",l.appendChild(m),l.appendChild(p),a.appendChild(i),a.appendChild(d),a.appendChild(l);const h=document.querySelector("#content"),f=document.createElement("img");f.src="https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",f.alt="Homepage Image",f.className="home-img";const v=document.createElement("div");function g(){h.innerHTML="",h.appendChild(f),h.appendChild(v)}v.id="description",v.innerHTML="<h2>About Us</h2><p>Nunc quis libero eget sem ultricies hendrerit. Nulla augue felis, gravida ac ullamcorper eu, pellentesque eget nisi. Cras consequat odio non enim suscipit mattis. Praesent ornare diam sed ipsum feugiat, ac eleifend tortor imperdiet. Maecenas quis consequat arcu, ac egestas orci. Mauris ac odio fermentum, gravida est condimentum, venenatis augue. Aliquam pulvinar porttitor dignissim. Donec at eros ut nisl rutrum ullamcorper eget in mauris. In ac sagittis mauris. Suspendisse malesuada eros vitae orci maximus efficitur. Aliquam et pellentesque massa, ut pellentesque mi.</p>";const y=document.querySelector("#content"),b=document.createElement("div");b.id="contacts-container";const E=document.createElement("div"),C=document.createElement("div"),q=document.createElement("div"),M=document.createElement("div");E.className="contact-div",C.className="contact-div",q.className="contact-div",M.className="contact-div",E.innerHTML="<h2>Facebook</h2>",C.innerHTML="<h2>Instagram</h2>",q.innerHTML="<h2>Email</h2>",M.innerHTML="<h2>Phone</h2>",b.appendChild(E),b.appendChild(C),b.appendChild(q),b.appendChild(M),g();const x=document.querySelector("#home"),S=document.querySelector("#menu"),_=document.querySelector("#contact");x.addEventListener("click",g),_.addEventListener("click",(function(){y.innerHTML="",y.appendChild(b)})),S.addEventListener("click",(function(){c.innerHTML="",c.appendChild(a)}))}]);