(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{50:function(e,t,r){"use strict";var n=r(1),i=r(0),a=r(4),c=r.n(a),s=r(18),A=r.p+"static/media/gotham-bold.73ce573b.woff2";r(52);t.a=({children:e,level:t=1,as:r,align:a="auto",weight:o="medium",className:l,...d})=>{const u=Math.min(Math.max(t,0),4),m=r||`h${Math.max(u,1)}`;return Object(n.jsxs)(i.Fragment,{children:["bold"===o&&Object(n.jsxs)(s.a,{children:[Object(n.jsx)("link",{rel:"preload",href:A,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${A}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(m,{className:c()(l,"heading",`heading--align-${a}`,`heading--level-${u}`,`heading--weight-${o}`),...d,children:e})]})}},51:function(e,t,r){"use strict";var n=r(1),i=r(4),a=r.n(i);r(54);t.a=({children:e,size:t="m",as:r="p",align:i="auto",weight:c="auto",secondary:s,className:A,...o})=>Object(n.jsx)(r,{className:a()(A,"text",`text--align-${i}`,`text--size-${t}`,`text--weight-${c}`,{"text--secondary":s}),...o,children:e})},52:function(e,t,r){},53:function(e,t,r){"use strict";var n=r(1),i=r(0),a=r(4),c=r.n(a);r(60);const s=Object(i.forwardRef)((({as:e="div",children:t,className:r,...i},a)=>Object(n.jsx)(e,{className:c()("section",r),ref:a,...i,children:t})));t.a=s},54:function(e,t,r){},55:function(e,t,r){"use strict";var n=r(1),i=r(0),a=r(4),c=r.n(a),s=r(7),A=r(57),o=r(20),l=r(23);r(59);const d=["\u0916","\u0915","\u091e","\u091d","\u091c","\u091b","\u091a","\u0919","\u0917","\u0918","\u091f","\u0920","\u0921","\u0922","\u0923","\u0924","\u0925","\u0926","\u0927","\u0928","\u092a","\u092b","\u092c","\u092d","\u092e","\u0935","\u0939","\u0936","\u0937","\u0938","\u090a","\u092f","\u0930","\u0932","\u0933","\u0906","\u0907","\u0908","\u0909","\u090f","\u0910","\u0913","\u0914","\u0905","\u090b","\u0960","\u090c","\u0961"],u="glyph",m="value";const p=({text:e,start:t=!0,delay:r=0,className:a,...p})=>{const b=Object(i.useRef)([{type:u,value:""}]),j=Object(i.useRef)(),h=Object(s.h)();return Object(i.useEffect)((()=>{const n=j.current,i=e.split("");let a;const c=()=>{const e=b.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},s=Object(A.e)(0,(e=>{b.current=function(e,t,r){return e.map(((e,n)=>{if(n<r)return{type:m,value:e};if(r%1<.5){const e=Math.floor(Math.random()*d.length);return{type:u,value:d[e]}}return{type:u,value:t[n].value}}))}(i,b.current,e),c()}));return!t||a||h||l.a||(a=Object(A.a)(Object(A.b)(r),Object(A.c)({from:0,to:i.length,stiffness:8,damping:5})).start(s)),h&&(b.current=i.map(((e,t)=>({type:m,value:i[t]}))),c()),()=>{a&&a.stop()}}),[h,t,r,e]),Object(n.jsxs)("span",{className:c()("decoder-text",a),...p,children:[Object(n.jsx)(o.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:j})]})};t.a=Object(i.memo)(p)},58:function(e,t,r){"use strict";var n=r(1),i=r(12),a=r(4),c=r.n(a),s=r(13);r(66);const A=["txt","png","jpg"];t.a=({rel:e,target:t,children:r,secondary:a,className:o,href:l,as:d,...u})=>{const m=A.includes(null===l||void 0===l?void 0:l.split(".").pop()),p=(null===l||void 0===l?void 0:l.includes("://"))||"#"===(null===l||void 0===l?void 0:l[0])||m,b=e||(p?"noreferrer noopener":void 0),j=t||(p?"_blank":void 0),h=d||(p?"a":i.b);return Object(n.jsx)(h,{className:c()("link",o,{"link--secondary":a}),rel:b,href:p?l:void 0,to:p?void 0:l,target:j,onMouseUp:s.a,...u,children:r})}},59:function(e,t,r){},60:function(e,t,r){},61:function(e,t,r){"use strict";var n=r(1),i=r(58);r(67);t.a=()=>Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Piyush Gautam.`}),Object(n.jsx)(i.a,{secondary:!0,className:"footer__link",href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})},62:function(e,t,r){"use strict";var n=r(1),i=r(4),a=r.n(i),c=r(2);r(68);const s=({lineWidth:e,lineHeight:t,notchWidth:r,notchHeight:i,collapseDelay:s,collapsed:A,className:o,style:l})=>Object(n.jsxs)("div",{className:a()("divider",o),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":r,"--notchHeight":i,"--collapseDelay":Object(c.c)(s),...l},children:[Object(n.jsx)("div",{className:a()("divider__line",{"divider__line--collapsed":A})}),Object(n.jsx)("div",{className:a()("divider__notch",{"divider__notch--collapsed":A}),style:{"--collapseDelay":Object(c.c)(s+160)}})]});s.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=s},63:function(e,t,r){"use strict";async function n({src:e,srcSet:t,sizes:r}){return new Promise(((n,i)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const i=new Image;e&&(i.src=e),t&&(i.srcset=t),r&&(i.sizes=r);const a=()=>{i.removeEventListener("load",a);const e=i.currentSrc;n(e)};i.addEventListener("load",a)}catch(a){i(`Error loading ${t}: ${a}`)}}))}async function i(e){const t=e.split(", ").map((e=>{const[t,r]=e.split(" ");return{src:t,image:function(e=1,t=1){const r=document.createElement("canvas"),n=r.getContext("2d");r.width=e,r.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const i=r.toDataURL("image/png","");return r.remove(),i}(Number(r.replace("w",""))),width:r}})),r=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),i=await n({srcSet:r});return t.find((e=>e.image===i)).src}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}))},64:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return c}));const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)i(e.material);else for(const t of e.material)i(t)}))},i=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},a=e=>{e.dispose(),e.forceContextLoss(),e=null},c=e=>{for(const t of e)t.parent.remove(t)}},65:function(e,t,r){"use strict";t.a="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRkJBRkI2MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRkJBRkI1MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5NjZGQjZDNjFBREQ4NkEyMUY4QUI3NURCM0MzNjdDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iOTY2RkI2QzYxQUREODZBMjFGOEFCNzVEQjNDMzY3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDVxr67OZnHvkZ5HaVkZ2Ykk/Q/m/uQdwupbgmZzVugRb2sdnF4cQooHQF5aTcPhmlhmlLgsRbV/j7CD7jKshBOOiWfcpILijfAD0HNPnt1/dmEzT6lYG2o/wBbf09uncW04PR5azpdxa4z5dLdN3bi/ZpJqidQQAfVwSR/j/gPZTJvF1CSynoi3K6uraJnPwA9GhhmifbxdCFUxNxZfpY+xzPRlPQlc6IyT6dB9WbgwGNwkglkp2qn1rpbTqv/AIj6/X2F7uyTT4oI1dRxuVzLc3bRqp0jz6B7HmPJZOSoiiVUa5BAFrar/kj2TBWqQD0qtN4j2yMrKfy6YNy5OGjr1jsWkR7WVRf/AHgn3R7Z5u0Do0nnTdbImI9pHRv6X7P+60lvr4H03t/Q29yFN/Z46E9x/ZHohe/P4z/FpPD5ftvK2m2rT+r/AG309hxq511p0R2f0VH8SnidPGL/AIt/DYPB/ndPNtWq3+w9k7afFOnh0Eb36P61tf8AZ16k7Z/hn95Kf+9Or7fyjyf1tf8Ax9i3lv8Ad31Q+v8A7Pz6XTeP+7T+7+NMdf/Z"},66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){"use strict";var n=r(1),i=r(0),a=r(4),c=r.n(a),s=r(7),A=r(19),o=r(11),l=r(49),d=r(17),u=r(23),m=r(8),p=r(2),b=r(63),j=r(24),h=r(20);r(70);const v=({onLoad:e,loaded:t,inViewport:r,srcSet:a,placeholder:j,delay:v,src:f,alt:g,play:x=!0,reveal:w,...O})=>{const E=Object(s.h)(),[y,B]=Object(i.useState)(!0),[Q,D]=Object(i.useState)(!E),[I,R]=Object(i.useState)(!1),[M,_]=Object(i.useState)(!1),[N,U]=Object(i.useState)(!1),[k,C]=Object(i.useState)(),[S,T]=Object(i.useState)(),F=Object(i.useRef)(),z=Object(i.useRef)(),P=null===f||void 0===f?void 0:f.endsWith(".mp4"),L=f||(null===a||void 0===a?void 0:a.split(" ")[0]),W=!u.a&&r;Object(i.useEffect)((()=>{const e=()=>{B(!1)},t=F.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(i.useEffect)((()=>{P&&a?(async()=>{const e=await Object(b.b)(a);T(e)})():P&&T(f)}),[P,f,a]),Object(i.useEffect)((()=>{const{width:e,height:t}=F.current;e&&t&&C({width:e,height:t})}),[]),Object(i.useEffect)((()=>{z.current&&S&&(x&&r?!r||E||u.a||(D(!0),z.current.play()):(D(!1),z.current.pause()))}),[r,x,E,S]);const G=e=>{e.preventDefault(),z.current.paused?(D(!0),z.current.play()):(D(!1),z.current.pause())},Y=()=>{R(!0),U(!0)};return Object(n.jsxs)("div",{className:c()("image__element-wrapper",{"image__element-wrapper--reveal":w,"image__element-wrapper--in-viewport":r}),onMouseOver:P?()=>{R(!0),_(!0)}:void 0,onMouseOut:P?()=>_(!1):void 0,style:{"--delay":Object(p.c)(v+1e3)},children:[P&&Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:c()("image__element",{"image__element--loaded":t}),autoPlay:!E,role:"img",onLoadStart:e,src:S,"aria-label":g,ref:z,...O}),Object(n.jsx)(l.a,{in:M||N,onExit:d.b,onExited:()=>R(!1),timeout:{enter:0,exit:Object(p.b)(m.b.base.durationS)},children:e=>Object(n.jsx)(h.a,{visible:I,children:Object(n.jsxs)(A.a,{className:c()("image__button",`image__button--${e}`),onFocus:Y,onBlur:()=>U(!1),onClick:G,children:[Object(n.jsx)(o.a,{icon:Q?"pause":"play"}),Q?"Pause":"Play"]})})})]}),!P&&Object(n.jsx)("img",{className:c()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:W?L:void 0,srcSet:W?a:void 0,width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,alt:g,...O}),y&&Object(n.jsx)("img",{"aria-hidden":!0,className:c()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(p.c)(v)},ref:F,src:j,onLoad:e=>{const{width:t,height:r}=e.target;C({width:t,height:r})},width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:r,delay:a=0,raised:A,src:o,...l})=>{const[d,u]=Object(i.useState)(!1),{themeId:m}=Object(j.c)(),b=Object(i.useRef)(),h=Object(s.d)(b,!(null===o||void 0===o?void 0:o.endsWith(".mp4"))),f=Object(i.useCallback)((()=>{u(!0)}),[]);return Object(n.jsx)("div",{className:c()("image",e,`image--${m}`,{"image--in-viewport":h,"image--reveal":r,"image--raised":A}),style:{...t,"--delay":Object(p.c)(a)},ref:b,children:Object(n.jsx)(v,{delay:a,onLoad:f,loaded:d,inViewport:h,reveal:r,src:o,...l})})}},70:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n=r(1),i=(r(73),r.p+"static/media/gamestack-list-large.7bacf7ae.jpg"),a=r.p+"static/media/gamestack-list.34bca0bb.jpg",c=r.p+"static/media/gamestack-login-large.ad8df949.jpg",s=r.p+"static/media/gamestack-login.c131f4a8.jpg",A=r.p+"static/media/iphone-11.dfa3acae.glb",o=r.p+"static/media/macbook-pro.29527f3f.glb",l=r.p+"static/media/slice-app-large.1a2bb54b.png",d=r.p+"static/media/slice-app.79c2a8db.png",u=r.p+"static/media/spr-lesson-builder-dark-large.8bf711e4.jpg",m=r(65),p=r.p+"static/media/spr-lesson-builder-dark.727e9912.jpg",b=r(61),j=r(7),h=r(0),v=r(4),f=r.n(v),g=r(49),x=r(48),w=r(55),O=r(17),E=r(23),y=r(2);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Q=h.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"});function D({title:e,titleId:t,...r},n){return h.createElement("svg",B({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15",ref:n,"aria-labelledby":t},r),e?h.createElement("title",{id:t},e):null,Q)}const I=h.forwardRef(D);r.p;var R=r(8),M=r(50),_=r(53),N=r(24),U=r(20);r(74);const k=Object(h.lazy)((()=>r.e(11).then(r.bind(null,95))));var C=function({id:e,sectionRef:t,disciplines:r,scrollIndicatorHidden:i,...a}){const c=Object(N.c)(),[s,A]=Object(h.useState)(0),o=Object(j.l)(),l=Object(j.i)(c),d=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),u=r.filter(((e,t)=>t===s)),m=`${e}-title`;return Object(j.e)((()=>{const e=(s+1)%r.length;A(e)}),5e3,c.themeId),Object(h.useEffect)((()=>{l&&l.themeId!==c.themeId&&A(0)}),[c.themeId,l]),Object(n.jsx)(_.a,{className:"intro",as:"section",ref:t,id:e,"aria-labelledby":m,tabIndex:-1,...a,children:Object(n.jsx)(g.a,{appear:!E.a,in:!E.a,timeout:3e3,onEnter:O.b,children:e=>Object(n.jsxs)(h.Fragment,{children:[!E.a&&Object(n.jsx)(h.Suspense,{fallback:null,children:Object(n.jsx)(k,{})}),Object(n.jsxs)("header",{className:"intro__text",children:[Object(n.jsx)("h1",{className:f()("intro__name",`intro__name--${e}`),id:m,children:Object(n.jsx)(w.a,{text:"Piyush Gautam",start:!E.a,delay:300})}),Object(n.jsxs)(M.a,{level:0,as:"h2",className:"intro__title",children:[Object(n.jsx)(U.a,{className:"intro__title-label",children:`Developer + ${d}`}),Object(n.jsxs)("span",{"aria-hidden":!0,className:f()("intro__title-row",{"intro__title-row--hidden":E.a}),children:[Object(n.jsx)("span",{className:f()("intro__title-word",`intro__title-word--${e}`),style:{"--delay":R.b.base.durationXS},children:"Developer"}),Object(n.jsx)("span",{className:f()("intro__title-line",`intro__title-line--${e}`)})]}),Object(n.jsx)(x.a,{className:f()("intro__title-row",{"intro__title-row--hidden":E.a}),component:"span",children:u.map((e=>Object(n.jsx)(g.a,{appear:!0,timeout:{enter:3e3,exit:2e3},onEnter:O.b,children:t=>Object(n.jsx)("span",{"aria-hidden":!0,className:f()("intro__title-word","intro__title-word--plus",`intro__title-word--${t}`),style:{"--delay":R.b.base.durationL},children:e})},e)))})]})]}),o.width>y.a.tablet&&Object(n.jsx)("div",{className:f()("intro__scroll-indicator",`intro__scroll-indicator--${e}`,{"intro__scroll-indicator--hidden":i}),status:e}),o.width<=y.a.tablet&&Object(n.jsx)("div",{className:f()("intro__mobile-scroll-indicator",`intro__mobile-scroll-indicator--${e}`,{"intro__mobile-scroll-indicator--hidden":i}),children:Object(n.jsx)(I,{"aria-hidden":!0})})]})},c.themeId)})},S=r(58),T=r(19),F=r(62),z=r(69),P=r.p+"static/media/profile.7d94b795.jpg",L=r.p+"static/media/profile-large.f30fb31c.jpg",W=r(51);r(75);const G=({status:e,titleId:t})=>Object(n.jsxs)(h.Fragment,{children:[Object(n.jsx)(M.a,{className:f()("profile__title",`profile__title--${e}`),level:3,id:t,children:Object(n.jsx)(w.a,{text:"Hi there",start:"exited"!==e,delay:500})}),Object(n.jsxs)(W.a,{className:f()("profile__description",`profile__description--${e}`),size:"l",children:["I\u2019m Piyush, currently I live in Bengaluru working as a computer vision engineer at"," ",Object(n.jsx)(S.a,{href:"https://www.flamapp.com",children:"Flam"}),". My works include Augmented reality, computer vision , and virtual reality. Being comfortable with code allows me to rapidly prototype and validate experiences. If you're interested in the tools and software I use check out my ",Object(n.jsx)(S.a,{href:"/uses",children:"uses page"}),"."]}),Object(n.jsxs)(W.a,{className:f()("profile__description",`profile__description--${e}`),size:"l",children:["In my spare time I like to play Dota 2, watch netflix, and"," ","make blogs. I\u2019m always up for hearing about new projects, so feel free to drop me a line."]})]});var Y=({id:e,visible:t,sectionRef:r})=>{const i=`${e}-title`;return Object(n.jsx)(_.a,{className:"profile",as:"section",id:e,ref:r,"aria-labelledby":i,tabIndex:-1,children:Object(n.jsx)(g.a,{in:t,timeout:0,onEnter:O.b,children:e=>Object(n.jsxs)("div",{className:"profile__content",children:[Object(n.jsxs)("div",{className:"profile__column",children:[Object(n.jsx)(G,{status:e,titleId:i}),Object(n.jsx)(T.a,{secondary:!0,className:f()("profile__button",`profile__button--${e}`),href:"/contact",icon:"send",children:"Send me a message"})]}),Object(n.jsxs)("div",{className:"profile__column",children:[Object(n.jsxs)("div",{className:"profile__tag","aria-hidden":!0,children:[Object(n.jsx)(F.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(n.jsx)("div",{className:f()("profile__tag-text",`profile__tag-text--${e}`),children:"About Me"})]}),Object(n.jsx)("div",{className:"profile__image-wrapper",children:Object(n.jsx)(z.a,{reveal:!0,delay:100,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAAOAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAACm+aiJ0VCWX//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAAQVBQYxUmL/2gAIAQEAAT8Aqbqe0iWUzTe0XpIjYMhLmYz3P//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMTIf/aAAgBAgEBPwB0yHw3MWc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERP/2gAIAQMBAT8AikSqzIxP/9k=",srcSet:`${P} 480w, ${L} 960w`,sizes:`(max-width: ${y.a.mobile}px) 100vw, 480px`,alt:"ME"})})]})]})})})},H=r(56),J={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","\tvec4 sum = vec4( 0.0 );","\tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;","\tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;","\tgl_FragColor = sum;","}"].join("\n")},Z={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","\tvec4 sum = vec4( 0.0 );","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;","\tgl_FragColor = sum;","}"].join("\n")},V=r(71),X=r(57),K=r(63),$=r(64);const q="spring-up",ee="laptop-open";var te={phone:{url:A,width:374,height:512,position:{x:0,y:0,z:0},animation:q},laptop:{url:o,width:1280,height:800,position:{x:0,y:0,z:0},animation:ee}};r(76);const re="Frame",ne="Screen";var ie=({models:e,show:t=!0,showDelay:r=0,cameraPosition:i={x:0,y:0,z:8},enableControls:a,style:c,className:s,alt:A,...o})=>{const[l,d]=Object(h.useState)(),[u,m]=Object(h.useState)(!1),p=Object(h.useRef)(),b=Object(h.useRef)(),v=Object(h.useRef)(),g=Object(h.useRef)(),x=Object(h.useRef)(),w=Object(h.useRef)(),O=Object(h.useRef)(),E=Object(h.useRef)(),B=Object(h.useRef)(),Q=Object(h.useRef)(),D=Object(h.useRef)(),I=Object(h.useRef)(),R=Object(h.useRef)(),M=Object(h.useRef)(),_=Object(h.useRef)(),N=Object(h.useRef)(),U=Object(h.useRef)(),k=Object(h.useRef)(),C=Object(h.useRef)(),S=Object(j.d)(p,!1,{threshold:.4}),T=Object(j.h)();Object(h.useEffect)((()=>{const{clientWidth:t,clientHeight:n}=p.current;E.current=new H.Ob({canvas:b.current,alpha:!0,antialias:!1,powerPreference:"high-performance"}),E.current.setPixelRatio(2),E.current.setSize(t,n),E.current.outputEncoding=H.Pb,E.current.physicallyCorrectLights=!0,v.current=new H.fb(36,t/n,.1,100),v.current.position.set(i.x,i.y,i.z),O.current=new H.sb,g.current=new H.Db,x.current=new V.a,w.current=new H.u;const a=new H.b(16777215,1.2),c=new H.o(16777215,1.1),s=new H.o(16777215,.8);s.position.set(-6,2,2),c.position.set(.5,0,.866),U.current=[a,c,s],U.current.forEach((e=>O.current.add(e))),B.current=new H.u,O.current.add(B.current),B.current.position.set(0,0,-.8),B.current.rotateX(Math.PI/2);const A=512;Q.current=new H.Nb(A,A),Q.current.texture.generateMipmaps=!1,D.current=new H.Nb(A,A),D.current.texture.generateMipmaps=!1;const o=new H.gb(8,8).rotateX(Math.PI/2),l=new H.S({map:Q.current.texture,opacity:.8,transparent:!0});N.current=new H.R(o,l),N.current.scale.y=-1,B.current.add(N.current),k.current=new H.R(o),k.current.visible=!1,B.current.add(k.current);const u=new H.S({color:16777215,opacity:0,transparent:!0});C.current=new H.R(o,u),C.current.rotateX(Math.PI),C.current.position.y-=1e-5,B.current.add(C.current),I.current=new H.db(-4,4,4,-4,0,1.5),I.current.rotation.x=Math.PI/2,B.current.add(I.current),R.current=new H.T,R.current.userData.darkness={value:3},R.current.onBeforeCompile=e=>{e.uniforms.darkness=R.current.userData.darkness,e.fragmentShader=`\n        uniform float darkness;\n        ${e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}\n      `},R.current.depthTest=!1,R.current.depthWrite=!1,M.current=new H.tb(J),M.current.depthTest=!1,_.current=new H.tb(Z),_.current.depthTest=!1;const m=async(e,t)=>{e.encoding=H.Pb,e.minFilter=H.H,e.magFilter=H.H,e.flipY=!1,e.anisotropy=E.current.capabilities.getMaxAnisotropy(),e.generateMipmaps=!1,await E.current.initTexture(e),t.material.color=new H.l(16777215),t.material.transparent=!1,t.material.map=e},j=e.map((async(e,t)=>{const{texture:n,position:i,url:a}=e;let c;const[s,A]=await Promise.all([await x.current.loadAsync(a),await g.current.loadAsync(n.placeholder)]);s.scene.traverse((async e=>{e.material&&(e.material.color=new H.l(2039845),e.material.color.convertSRGBToLinear()),e.name===ne&&(m(A,e),c=async()=>{const t=await Object(K.a)(n),r=await g.current.loadAsync(t);await m(r,e)})})),w.current.add(s.scene);return{...function({model:e,gltf:t,reduceMotion:r,renderFrame:n,index:i,showDelay:a}){const c=new H.Kb(e.position.x,e.position.y,e.position.z);if(r)return void t.scene.position.set(...c.toArray());if(e.animation===q){const e=new H.Kb(c.x,c.y-1,c.z),r=c;t.scene.position.set(...e.toArray());const s=Object(X.e)(t.scene.position,(({x:e,y:r,z:i})=>{t.scene.position.set(e,r,i),n()}));return{animation:Object(X.a)(Object(X.b)(300*i+.6*a),Object(X.c)({from:e,to:r,stiffness:60,damping:16,restSpeed:.001})),modelValue:s}}if(e.animation===ee){const e=t.scene.children.find((e=>e.name===re)),r=new H.Kb(H.P.degToRad(90),0,0),s=new H.Kb(0,0,0);t.scene.position.set(...c.toArray()),e.rotation.set(...r.toArray());const A=Object(X.e)(e.rotation,(({x:t,y:r,z:i})=>{e.rotation.set(t,r,i),n()}));return{animation:Object(X.a)(Object(X.b)(300*i+a+200),Object(X.c)({from:r,to:s,stiffness:50,damping:14,restSpeed:.001})),modelValue:A}}}({model:e,gltf:s,position:i,reduceMotion:T,renderFrame:z,index:t,showDelay:r}),loadFullResTexture:c}}));return d(j),()=>{Object($.c)(U.current),Object($.b)(O.current),Object($.a)(E.current)}}),[]);const F=Object(h.useCallback)((e=>{k.current.visible=!0,k.current.material=M.current,k.current.material.uniforms.tDiffuse.value=Q.current.texture,M.current.uniforms.h.value=e*(1/256),E.current.setRenderTarget(D.current),E.current.render(k.current,I.current),k.current.material=_.current,k.current.material.uniforms.tDiffuse.value=D.current.texture,_.current.uniforms.v.value=e*(1/256),E.current.setRenderTarget(Q.current),E.current.render(k.current,I.current),k.current.visible=!1}),[]),z=Object(h.useCallback)((()=>{const e=O.current.background;O.current.background=null,O.current.overrideMaterial=R.current,E.current.setRenderTarget(Q.current),E.current.render(O.current,I.current),O.current.overrideMaterial=null,F(5),F(2),E.current.setRenderTarget(null),O.current.background=e,E.current.render(O.current,v.current)}),[F]);return Object(h.useEffect)((()=>{let e=[];if(!l)return;O.current.add(w.current);return t&&(async()=>{const t=await Promise.all(l);m(!0);const r=t.map((async t=>{if(t.animation){const r=t.animation.start(t.modelValue);e.push(r)}T&&z(),await t.loadFullResTexture(),T&&z()}));await Promise.all(r)})(),()=>{for(const t of e)t.stop()}}),[l,T,z,t]),Object(h.useEffect)((()=>{let e,t;const r=r=>{const{rotation:n}=w.current,{innerWidth:i,innerHeight:a}=window,c=(r.clientX-i/2)/i,s=(r.clientY-a/2)/a;t||(t=Object(X.e)({x:n.x,y:n.y},(({x:e,y:t})=>{n.set(e,t,n.z),z()}))),e=Object(X.c)({from:t.get(),to:{x:s/2,y:c/2},stiffness:40,damping:40,velocity:t.getVelocity(),restSpeed:1e-5,mass:1.4}).start(t)};return S&&!T&&window.addEventListener("mousemove",r),()=>{var t;window.removeEventListener("mousemove",r),null===(t=e)||void 0===t||t.stop()}}),[S,T,z]),Object(h.useEffect)((()=>{const e=()=>{if(!p.current)return;const{clientWidth:e,clientHeight:t}=p.current;E.current.setSize(e,t),v.current.aspect=e/t,v.current.updateProjectionMatrix(),z()};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[z]),Object(n.jsx)("div",{className:f()("model",{"model--loaded":u},s),style:{"--delay":Object(y.c)(r),...c},ref:p,role:"img","aria-label":A,...o,children:Object(n.jsx)("canvas",{className:"model__canvas",ref:b})})};r(77);var ae=({id:e,visible:t,sectionRef:r,index:i,title:a,description:c,model:s,buttonText:A,buttonLink:o,alternate:l,...d})=>{const{width:u}=Object(j.l)(),m=`${e}-title`,p=u<=y.a.tablet,b=i<10?`0${i}`:i,v=`(max-width: ${y.a.tablet}px) 30vw, 20vw`,x=`(max-width: ${y.a.tablet}px) 80vw, 40vw`,w=e=>Object(n.jsxs)("div",{className:"project-summary__details",children:[Object(n.jsxs)("div",{"aria-hidden":!0,className:"project-summary__index",children:[Object(n.jsx)(F.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(n.jsx)("span",{className:f()("project-summary__index-number",`project-summary__index-number--${e}`),children:b})]}),Object(n.jsx)(M.a,{level:3,as:"h2",className:f()("project-summary__title",`project-summary__title--${e}`),id:m,children:a}),Object(n.jsx)(W.a,{className:f()("project-summary__description",`project-summary__description--${e}`),children:c}),Object(n.jsx)("div",{className:f()("project-summary__button",`project-summary__button--${e}`),children:Object(n.jsx)(T.a,{iconHoverShift:!0,href:o,iconEnd:"arrowRight",children:A})})]}),E=e=>Object(n.jsxs)("div",{className:"project-summary__preview",children:["laptop"===s.type&&Object(n.jsx)(h.Fragment,{children:Object(n.jsx)(ie,{className:f()("project-summary__model","project-summary__model--laptop"),alt:s.alt,cameraPosition:{x:0,y:0,z:8},showDelay:800,show:Object(O.a)(e),models:[{...te.laptop,texture:{...s.textures[0],sizes:x}}]})}),"phone"===s.type&&Object(n.jsx)(h.Fragment,{children:Object(n.jsx)(ie,{className:f()("project-summary__model","project-summary__model--phone"),alt:s.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:500,show:Object(O.a)(e),models:[{...te.phone,position:{x:-.6,y:1.1,z:0},texture:{...s.textures[0],sizes:v}},{...te.phone,position:{x:.6,y:-.5,z:.3},texture:{...s.textures[1],sizes:v}}]})})]});return Object(n.jsx)(_.a,{className:f()("project-summary",{"project-summary--alternate":l,"project-summary--first":"01"===i}),as:"section","aria-labelledby":m,ref:r,id:e,tabIndex:-1,...d,children:Object(n.jsx)("div",{className:"project-summary__content",children:Object(n.jsx)(g.a,{in:t,timeout:0,onEnter:O.b,children:e=>Object(n.jsxs)(h.Fragment,{children:[!l&&!p&&Object(n.jsxs)(h.Fragment,{children:[w(e),E(e)]}),(l||p)&&Object(n.jsxs)(h.Fragment,{children:[E(e),w(e)]})]})})})})},ce=r(18),se=r(3);const Ae=["Designer","Gamer","Researcher","Enthusiast","IITian"];t.default=()=>{const{status:e}=Object(j.j)(),{hash:t,state:r}=Object(se.e)(),v=Object(h.useRef)(!0),[f,g]=Object(h.useState)([]),[x,w]=Object(h.useState)(!1),O=Object(h.useRef)(),E=Object(h.useRef)(),y=Object(h.useRef)(),B=Object(h.useRef)(),Q=Object(h.useRef)(),D=Object(j.h)();return Object(h.useEffect)((()=>{const e=[O,E,y,B,Q],t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const r=e.target;if(t.unobserve(r),f.includes(r))return;g((e=>[...e,r]))}}))}),{rootMargin:"0px 0px -10% 0px"}),r=new IntersectionObserver((([e])=>{w(!e.isIntersecting)}),{rootMargin:"-100% 0px 0px 0px"});return e.forEach((e=>{t.observe(e.current)})),r.observe(O.current),()=>{t.disconnect(),r.disconnect()}}),[f]),Object(h.useEffect)((()=>{const r="entered"===e,n="scrollBehavior"in document.documentElement.style;let i,a;const c=(e,t)=>{clearTimeout(a);const r=[O,E,Q],c=e.replace("#",""),s=r.filter((e=>e.current.id===c))[0];if(!s)return;const A=t&&!D?"smooth":"instant",o=s.current.offsetTop;i=new IntersectionObserver(((e,t)=>{const[r]=e;r.isIntersecting&&(a=setTimeout((()=>{s.current.focus()}),D?0:400),t.unobserve(r.target))}),{rootMargin:"-20% 0px -20% 0px"}),i.observe(s.current),n?window.scroll({top:o,left:0,behavior:A}):window.scrollTo(0,o)};return t&&v.current&&r?(c(t,!1),v.current=!1):!t&&v.current&&r?(window.scrollTo(0,0),v.current=!1):r&&c(t,!0),()=>{clearTimeout(a),i&&i.disconnect()}}),[t,r,D,e]),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)(ce.a,{children:[Object(n.jsx)("title",{children:"Piyush Gautam | Software Engineer"}),Object(n.jsx)("meta",{name:"description",content:"Portfolio of Piyush Gautam \u2013 a designer and software developer & machine learning, ai and web development."}),Object(n.jsx)("link",{rel:"prefetch",href:A,as:"fetch",crossorigin:""}),Object(n.jsx)("link",{rel:"prefetch",href:o,as:"fetch",crossorigin:""})]}),Object(n.jsx)(C,{id:"intro",sectionRef:O,disciplines:Ae,scrollIndicatorHidden:x}),Object(n.jsx)(ae,{id:"project-1",sectionRef:B,visible:f.includes(B.current),index:1,title:"Revolutionizing XR with RShifts",description:"RShifts is an interactive smartphone XR solution using cutting edge computer vision techniques to provide state of the art XR experiences on the go.",buttonText:"View Details",buttonLink:"/projects/smart-sparrow",model:{type:"laptop",alt:"Creating XR the new reality",textures:[{src:d,srcSet:`${d} 980w, ${l} 1376w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k="}]}}),Object(n.jsx)(ae,{id:"project-2",sectionRef:E,visible:f.includes(E.current),index:2,title:"Creating the future of Ar with Flam",description:"Working as a computer vision engineer, developed a Cloud image target recognition arcitecture with a three member team",buttonText:"View Website",buttonLink:"https://www.flamapp.com/",model:{type:"laptop",alt:"Cloud Recog Archi",textures:[{src:p,srcSet:`${p} 800w, ${u} 1440w`,placeholder:m.a}]}}),Object(n.jsx)(ae,{id:"project-3",alternate:!0,sectionRef:y,visible:f.includes(y.current),index:3,title:"Creating games for fun",description:"Was a member of computer graphics society in IIT Kharagpur and created games for fun",buttonText:"View Website",buttonLink:"https://cgliitkgp.github.io/",model:{type:"phone",alt:"cgl play store",textures:[{src:s,srcSet:`${s} 254w, ${c} 508w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k="},{src:a,srcSet:`${a} 254w, ${i} 508w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k="}]}}),Object(n.jsx)(Y,{sectionRef:Q,visible:f.includes(Q.current),id:"details"}),Object(n.jsx)(b.a,{})]})}}}]);