(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(42)},32:function(e,n,t){},38:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t.n(a),c=t(19),o=t.n(c),l=(t(32),t(20)),i=t(21),s=t(26),u=t(22),h=t(25),d=t(10),f=t(13),b=(t(38),"INCREMENT_ALFA"),m="INCREMENT_BRAVO",E=function(){return{type:"INCREMENT_CHARLIE"}},p=function(){return{type:"INCREMENT_DELTA"}},v=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(d.a)(Object(d.a)(t))),t}return Object(h.a)(n,e),Object(i.a)(n,[{key:"handleClick",value:function(){console.log("handle increment alfa"),setTimeout(function(){return console.log("handle increment alfa after 0")},0),this.props.incrementAlfa(),console.log("handle increment bravo"),setTimeout(function(){return console.log("handle increment bravo after 0")},0),this.props.incrementBravo(),console.log("all increments handled"),setTimeout(function(){return console.log("all increments handled after 0")},0)}},{key:"render",value:function(){var e=this.props.bucket;return r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:this.handleClick},"BIG RED BUTTON"),r.a.createElement("div",null,r.a.createElement("p",null,"Just open up the console and then click the big red button. Code is in the usual spot at ",r.a.createElement("a",{href:"https://github.com/thomasoniii/synchronous-sagas"},"github.")),r.a.createElement("ul",null,r.a.createElement("li",null,"Alfa : ",e.alfa),r.a.createElement("li",null,"Bravo : ",e.bravo),r.a.createElement("li",null,"Charlie : ",e.charlie),r.a.createElement("li",null,"Delta : ",e.delta))))}}]),n}(a.Component),O=Object(f.b)(function(e){return{bucket:e.bucket}},{incrementAlfa:function(){return{type:b}},incrementBravo:function(){return{type:m}},incrementCharlie:E,incrementDelta:p})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(6),g=t(24),j=t(11),k={alfa:0,bravo:0,charlie:0,delta:0},N=Object(w.c)({bucket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;switch((arguments.length>1?arguments[1]:void 0).type){case b:return console.log("increments alfa"),Object(j.a)({},e,{alfa:e.alfa+1});case m:return console.log("increments bravo"),Object(j.a)({},e,{bravo:e.bravo+1});case"INCREMENT_CHARLIE":return console.log("increments charlie"),Object(j.a)({},e,{charlie:e.charlie+1});case"INCREMENT_DELTA":return console.log("increments delta"),Object(j.a)({},e,{delta:e.delta+1});default:return e}}}),_=t(4),C=t.n(_),T=t(5),I=C.a.mark(A),R=C.a.mark(y),x=C.a.mark(D);function A(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.d)(b,y),Object(T.d)(m,D)]);case 2:case"end":return e.stop()}},I,this)}function y(e){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.c)();case 2:return n=e.sent,console.log("state in acknowledge alfa is : ",n),e.next=6,Object(T.b)(E());case 6:case"end":return e.stop()}},R,this)}function D(e){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.c)();case 2:return n=e.sent,console.log("state in acknowledge bravo is : ",n),e.next=6,Object(T.b)(p());case 6:case"end":return e.stop()}},x,this)}var B=C.a.mark(L);function L(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([A()]);case 2:case"end":return e.stop()}},B,this)}t.d(n,"store",function(){return S});var M=Object(g.a)(),S=Object(w.a)(M)(w.e)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());M.run(L),o.a.render(r.a.createElement(f.a,{store:S},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.5218c098.chunk.js.map