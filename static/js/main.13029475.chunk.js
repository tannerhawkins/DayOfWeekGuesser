(this["webpackJsonpdate-guesser"]=this["webpackJsonpdate-guesser"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c,r,a,s,i,o,d,j,u,b=n(0),l=n.n(b),O=n(6),y=n.n(O),h=(n(24),n(2)),f=n(4),x=(n(25),n(3)),g=n(15),p=n(16),m=(n(37),n(1));var w=x.a.h1(c||(c=Object(h.a)(["\n  width: 50%;\n  text-align: center;\n"]))),S=x.a.div(r||(r=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),v=x.a.h3(a||(a=Object(h.a)(["\n"]))),P=x.a.h1(s||(s=Object(h.a)([""]))),T=x.a.div(i||(i=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 40px;\n"]))),D=Object(x.a)(g.AwesomeButton)(o||(o=Object(h.a)(["\n  width: 100px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n"]))),F=x.a.div(d||(d=Object(h.a)(["\n  display: flex;\n  width: 40%;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=x.a.h3(j||(j=Object(h.a)(['\n  color: "green";\n']))),C=x.a.h3(u||(u=Object(h.a)(['\n  color: "red";\n']))),B=function(){var e=new Date(1500,0,1),t=new Date,n=Object(b.useState)(e),c=Object(f.a)(n,2),r=c[0],a=(c[1],Object(b.useState)(t)),s=Object(f.a)(a,2),i=s[0],o=(s[1],Object(b.useState)(t)),d=Object(f.a)(o,2),j=d[0],u=d[1],l=Object(b.useState)(),O=Object(f.a)(l,2),y=O[0],h=O[1],x=Object(b.useState)(),g=Object(f.a)(x,2),B=g[0],M=g[1],k=Object(b.useState)(0),W=Object(f.a)(k,2),A=W[0],E=W[1],G=Object(b.useState)(0),J=Object(f.a)(G,2),L=J[0],N=J[1],U=function(){var e,t;u((e=r,t=i,new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))))};Object(b.useEffect)(U,[]);var Y=function(e){j.getDay()===e?(h(!0),E(A+1)):(h(!1),N(L+1)),M(function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return"invalid"}}(j.getDay())),U()};return Object(m.jsxs)(S,{className:"App",children:[Object(m.jsx)(w,{children:"Day of Week Guessing Game"}),Object(m.jsx)(P,{children:"".concat(new Intl.DateTimeFormat("en-US",{month:"long"}).format(j)," ").concat(j.getDate()," ").concat(j.getFullYear())}),Object(m.jsxs)(T,{children:[Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(0)},children:"Sunday"}),Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(1)},children:"Monday"}),Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(2)},children:"Tuesday"}),Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(3)},children:"Wednesday"}),Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(4)},children:"Thursday"}),Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(5)},children:"Friday"}),Object(m.jsx)(D,{type:"secondary",onPress:function(){return Y(6)},children:"Saturday"})]}),Object(m.jsxs)(F,{children:[Object(m.jsxs)(I,{children:["Correct: ",A]}),Object(m.jsx)(v,{style:{color:y?"#17fc03":"red"},children:void 0===y?"":y?"Correct! It was a ".concat(B,"."):"Incorrect. It was a ".concat(B,".")}),Object(m.jsxs)(C,{children:["Incorrect: ",L]})]}),Object(m.jsx)(p.ProgressBar,{percent:50})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};y.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),M()}},[[41,1,2]]]);
//# sourceMappingURL=main.13029475.chunk.js.map