(this.webpackJsonpgame__2048=this.webpackJsonpgame__2048||[]).push([[0],{125:function(e,n,t){},126:function(e,n,t){},127:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(46),l=t.n(a),i=t(6),o=t(1),u=(t(51),t(0)),s=function(e){switch(e){case 2:return"#eee4da";case 4:return"#ede0c8";case 8:return"#f2b179";case 16:return"#f59563";case 32:return"#f67c5f";case 64:return" #f65e3b";case 128:return"#edcf72";case 256:return"#edcc61";case 512:return"#edc850";case 1024:return"#edc53f";case 2048:return"#edc22e";default:return"#C2B3A3"}},d=function(e){var n=e.num;return Object(u.jsx)("div",{className:"tile",style:{background:s(n),color:2===n||4===n?"#645B52":"#F7F4EF",fontSize:n>512?"35px":"45px"},children:n||""})},f=(t(53),function(e){var n=e.data,t=e.score,c=e.onClickNewGame;return Object(u.jsxs)("div",{className:"board",children:[Object(u.jsx)("div",{className:"game",children:Object(u.jsxs)("div",{className:"game-group",children:[Object(u.jsx)("h1",{className:"game-title",children:"2048"}),Object(u.jsxs)("div",{className:"game-score-container",children:[Object(u.jsxs)("div",{className:"game-score-box",children:[Object(u.jsx)("span",{className:"game-score-box--current",children:"SCORE"}),Object(u.jsx)("span",{children:t})]}),Object(u.jsx)("button",{className:"game-refresh",onClick:function(){c()},children:"Restart"})]})]})}),Object(u.jsx)("div",{className:"board-body",children:n.map((function(e,n){return Object(u.jsx)("div",{className:"board-row",children:e.map((function(e,n){return Object(u.jsx)(d,{num:e},n)}))},n)}))})]})});var j=function(e,n){var t=Object(c.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(c){return console.log(c),n}})),r=Object(o.a)(t,2),a=r[0],l=r[1];return[a,function(n){try{var t=n instanceof Function?n(a):n;l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(c){console.log(c)}}]},b=t(4),v=t.n(b),m=function(e){return e[0].map((function(n,t){return e.map((function(e){return e[t]}))}))},O=function(e){return m(e.reverse())},h=function(e){return m(e).reverse()},g=function(){return[Math.floor(4*Math.random()),Math.floor(4*Math.random())]},x=(t(125),t(126),function(e){var n=e.onClickNewGame,t=e.overlay,c=e.onClickKeepGoing;return Object(u.jsxs)("div",{className:"playing"===t?"gameoverlay__none":"win"===t?"gameoverlay":void 0,children:["win"===t&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"gameoverlay__message",children:"You Win!"}),Object(u.jsx)("button",{className:"gameoverlay__button",onClick:c,children:"Keep Going!"})]}),"gameover"===t&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"gameoverlay__message",children:"GAME OVER!"}),Object(u.jsx)("button",{className:"gameoverlay__button",onClick:n,children:"Try again!"})]})]})});var p=function(){var e=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]],n="win",t="gameover",r="playing",a=j("initial",e),l=Object(o.a)(a,2),s=l[0],d=l[1],b=j("score",0),m=Object(o.a)(b,2),p=m[0],N=m[1],y=j("gameover",!1),w=Object(o.a)(y,2),k=w[0],_=w[1],C=j("restart",!0),S=Object(o.a)(C,2),E=S[0],B=S[1],G=j("win",!1),M=Object(o.a)(G,2),J=M[0],F=M[1],A=j("history",[]),I=Object(o.a)(A,2),K=I[0],R=I[1],L=j("scorelist",[]),z=Object(o.a)(L,2),T=z[0],V=z[1],W=j("overlay",r),Y=Object(o.a)(W,2),q=Y[0],D=Y[1],H=function(){var e=v()(s);P(e),P(e),d(e),B(!1)};Object(c.useEffect)((function(){E&&H()}),[E]);var P=function(e){for(var n=g(e),t=Object(o.a)(n,2),c=t[0],r=t[1];null!==e[c][r];){var a=g(e),l=Object(o.a)(a,2);c=l[0],r=l[1]}return e[c][r]=Math.random()>.9?4:2,e},Q=function(e,n){return JSON.stringify(n)!==JSON.stringify(e)};function U(e){return[].concat.apply([],e)}var X=function(e){for(var n=e.filter(Boolean).concat([null,null,null,null]).slice(0,4),t=0;t<e.length;t++)n[t]&&n[t+1]&&n[t]===n[t+1]&&(n[t]*=2,n[t+1]=null,N(p+n[t]));return n.filter(Boolean).concat([null,null,null,null]).slice(0,4)},Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],c=v()(s);if(!J){var r=v()(s).map((function(e){return X(e)}));if(Q(c,r)){if(R([].concat(Object(i.a)(K),[c])),U(r).includes(2048))return F(!0),d(r),void D(n);P(r)}else!U(c).includes(null)&&e&&ae(r)&&(D(t),_(!0));return e&&d(r),r}D(!0)},$=function(e){for(var n=[],t=(e=e.filter(Boolean)).length-1;t>0;t--)e[t]>0&&e[t-1]===e[t]&&(e[t]*=2,e[t-1]=null,N(p+e[t]));return n=(n=[null,null,null,null].concat(e.filter(Boolean))).slice(n.length-4)},ee=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],c=s;if(!J){var r=v()(s).map((function(e){return $(e)}));if(Q(c,r)){if(R([].concat(Object(i.a)(K),[c])),U(r).includes(2048))return F(!0),d(r),void D(n);P(r)}else!U(c).includes(null)&&e&&ae(r)&&(D(t),_(!0));return e&&d(r),r}D(!0)},ne=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],c=v()(s);if(!J){var r=v()(s);if(r=h(O(r).map((function(e){return $(e)}))),Q(c,r)){if(R([].concat(Object(i.a)(K),[c])),U(r).includes(2048))return F(!0),d(r),void D(n);P(r)}else!U(c).includes(null)&&e&&ae(r)&&(D(t),_(!0));return e&&d(r),r}D(!0)},te=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],c=v()(s);if(!J){var r=v()(s);if(r=h(O(r).map((function(e){return X(e)}))),Q(c,r)){if(R([].concat(Object(i.a)(K),[c])),U(r).includes(2048))return F(!0),d(r),void D(n);P(r)}else!U(c).includes(null)&&e&&ae(r)&&(D(t),_(!0));return e&&d(r),r}D(!0)},ce=function(e){switch(e.keyCode){case 38:ne();break;case 40:te();break;case 37:Z();break;case 39:ee();break;default:return}};Object(c.useEffect)((function(){return window.addEventListener("keydown",ce),function(){window.removeEventListener("keydown",ce)}}));var re=function(){V([].concat(Object(i.a)(T),[p])),R([]),_(!1),D(r),B(!0),N(0),d(e)},ae=function(e){return![Q(e,ne(!1)),Q(e,te(!1)),Q(e,ee(!1)),Q(e,Z(!1))].includes(!0)};return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"App",children:J||k?Object(u.jsx)(x,{onClickNewGame:re,overlay:q,onClickKeepGoing:function(){D(r),d(s),F(!1)}}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{data:s,score:p,onClickNewGame:re,initBoard:H}),Object(u.jsx)("div",{className:"app__contents"})]})})})};l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))},51:function(e,n,t){},53:function(e,n,t){}},[[127,1,2]]]);
//# sourceMappingURL=main.7df2fd6f.chunk.js.map