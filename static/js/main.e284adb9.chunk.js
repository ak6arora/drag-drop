(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(11),c=n.n(i),o=n(5),d=n(16),u=n(4),l="card",m={border:"1px dashed gray",padding:"0.5rem 1rem",margin:"0 .5rem 1rem 0",backgroundColor:"white",cursor:"move"},s=function(e){var t=e.id,n=e.text,i=e.index,c=e.moveCard,s=Object(a.useRef)(null),g=Object(u.d)({accept:l,hover:function(e,t){if(s.current){var n=e.index,a=i;if(n!==a){var r=s.current.getBoundingClientRect(),o=(r.bottom-r.top)/2,d=t.getClientOffset().y-r.top;n<a&&d<o||n>a&&d>o||(c(n,a),e.index=a)}}}}),p=Object(o.a)(g,2)[1],b=Object(u.c)({item:{type:l,id:t,index:i},collect:function(e){return{isDragging:e.isDragging()}}}),f=Object(o.a)(b,2),v=f[0].isDragging?0:1;return(0,f[1])(p(s)),r.a.createElement("div",{ref:s,style:Object(d.a)({},m,{opacity:v})},n)},g=n(14),p=n.n(g),b=(n(26),function(){var e=Object(a.useState)([{id:1,text:"Java"},{id:2,text:"C++"},{id:3,text:"ASP.NET"},{id:4,text:"Javascript"},{id:5,text:"Python"},{id:6,text:"Node.js"}]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useCallback)(function(e,t){var a=n[e];i(p()(n,{$splice:[[e,1],[t,0,a]]}))},[n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},n.map(function(e,t){return function(e,t){return r.a.createElement(s,{key:e.id,index:t,id:e.id,text:e.text,moveCard:c})}(e,t)})))}),f=(n(27),n(15));var v=document.getElementById("root");c.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.b,{backend:f.a},r.a.createElement(b,null)))},null),v)}},[[17,1,2]]]);
//# sourceMappingURL=main.e284adb9.chunk.js.map