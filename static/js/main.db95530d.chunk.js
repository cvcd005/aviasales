(this.webpackJsonpavia=this.webpackJsonpavia||[]).push([[0],{36:function(t,e,n){t.exports=n.p+"static/media/Logo.d2a4807b.png"},41:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgBjY7NDYJAEIVn9qwRO1grUDvQEqxAznrRCtQKiAfwaKzAWAEl2MJ2oJE1iIF9LkH8iST4bjP53g/TH5JbOHzTe2TmIGrhTSw5voYEGhCLFtfCyEIiSICWatpcCelrVwba+4F93XvBxG4O539BbLpMmHWC6Ci9k1MkRwP7szOMgyTtq0ljVwbxE1iwrbSnYkNrCNhGKCTZUM3b6rOZ33tLU65q+MtQ7L64TDzGPR1Z+EwVegAaYFmyhe9bkAAAAABJRU5ErkJggg=="},44:function(t,e,n){t.exports=n(79)},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(35),i=n.n(c),o=n(14),l=n(7),s=n(8),u=n(5),p=n.n(u),f=n(21),g=n(17),m=n(9),h=n(10),d=n(15),b=n(11),x=n(16),v=n(22),E=n.n(v),A=n(82),F=n(2),j=n(3),k=n(81),w=n(36),O=n.n(w);function C(){var t=Object(F.a)(["\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin: 50px auto 50px auto;\n"]);return C=function(){return t},t}function T(){var t=Object(F.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 577px) {\n    & {\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: normal;\n    }\n  }\n"]);return T=function(){return t},t}function y(){var t=Object(F.a)(["\n  margin: 0 auto;\n  max-width: 755px;\n  min-width: 384px;\n"]);return y=function(){return t},t}var S=Object(j.a)(k.a)(y()),U=j.a.div(T()),z=j.a.img(C()),I=function(t){var e=t.children;return r.a.createElement(S,null,r.a.createElement(z,{src:O.a,alt:"logo aviasales"}),r.a.createElement(U,null,e))},B=n(41),M=n.n(B);function R(){var t=Object(F.a)(["\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 20px;\n  &::before {\n    content: '';\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: ",";\n    border-radius: 2px;\n    background: ",";\n  }\n"]);return R=function(){return t},t}function D(){var t=Object(F.a)(["\n  display: none;\n"]);return D=function(){return t},t}function J(){var t=Object(F.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n"]);return J=function(){return t},t}function Y(){var t=Object(F.a)(["\n  height: 252px;\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px 0 20px 20px;\n  margin-bottom: 20px;\n  @media screen and (min-width: 577px) {\n    & {\n      margin-bottom: 0;\n    }\n  }\n"]);return Y=function(){return t},t}var H=Object(j.a)(A.a)(Y()),L=j.a.h2(J()),N=j.a.input.attrs((function(t){return{type:"checkbox",id:t.id}}))(D()),G=j.a.label.attrs((function(t){return{htmlFor:t.htmlFor}}))(R(),(function(t){return t.active?"#2196F3":"#9ABBCE"}),(function(t){return t.active?"url(".concat(M.a,") center no-repeat"):"none"})),Q=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(r)))).onClick=function(t){return function(e){e.preventDefault(),(0,n.props.changeTransferFlag)(t)}},n}return Object(x.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props.transferFlag;return r.a.createElement(H,{xs:22,sm:8},r.a.createElement(L,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a "),r.a.createElement(G,{htmlFor:"all",active:t.all,onClick:this.onClick("all")},r.a.createElement(N,{id:"all"}),"\u0412\u0441\u0435"),r.a.createElement(G,{htmlFor:"zero",active:t[0],onClick:this.onClick(0)},r.a.createElement(N,{id:"zero"}),"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(G,{htmlFor:"one",active:t[1],onClick:this.onClick(1)},r.a.createElement(N,{id:"one"}),"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"),r.a.createElement(G,{htmlFor:"two",active:t[2],onClick:this.onClick(2)},r.a.createElement(N,{id:"two"}),"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"),r.a.createElement(G,{htmlFor:"three",active:t[3],onClick:this.onClick(3)},r.a.createElement(N,{id:"three",className:"pupsik"}),"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"))}}]),e}(r.a.Component);function V(){var t=Object(F.a)(["\n  width: 50%;\n  height: 50px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #dfe5ec;\n  background-color: ",";\n  color: ",";\n"]);return V=function(){return t},t}var q=j.a.button(V(),(function(t){return t.active?"#2196F3":"#FFFFFF"}),(function(t){return t.active?"#FFFFFF":"#4A4A4A"})),K=function(t){var e=t.changeSortFlag,n=t.sortFlag;return r.a.createElement("div",null,r.a.createElement(q,{active:"cheapest"===n,onClick:function(){return e()}},"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"),r.a.createElement(q,{active:"fastest"===n,onClick:function(){return e()}},"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"))};function W(){var t=Object(F.a)(["\n  margin-top: 10px;\n"]);return W=function(){return t},t}function X(){var t=Object(F.a)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  color: #4a4a4a;\n"]);return X=function(){return t},t}function P(){var t=Object(F.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #a0b0b9;\n"]);return P=function(){return t},t}function Z(){var t=Object(F.a)(["\n  width: 110px;\n  height: 36px;\n"]);return Z=function(){return t},t}function $(){var t=Object(F.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  color: #2196f3;\n"]);return $=function(){return t},t}function _(){var t=Object(F.a)(["\n  width: 100%;\n  height: 184px;\n  margin-top: 20px;\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 20px 0 20px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return _=function(){return t},t}var tt=Object(j.a)(k.a)(_()),et=j.a.span($()),nt=j.a.img(Z()),at=j.a.span(P()),rt=j.a.span(X()),ct=Object(j.a)(k.a)(W()),it=function(t,e){var n=new Date(t),a=new Date(n.getTime()+6e4*e),r=Math.floor(e/60),c=e%60,i=function(t){return t<10?"0".concat(t):t};return["".concat(i(n.getUTCHours())," : ").concat(i(n.getUTCMinutes())," - ").concat(i(a.getUTCHours())," : ").concat(i(a.getUTCMinutes())),"".concat(i(r),"\u0447 : ").concat(i(c),"\u043c")]},ot=function(t){var e=t.obj,n=e.price,a=e.carrier,c=Object(o.a)(e.segments,2),i=c[0],l=c[1],s=it(i.date,i.duration),u=it(l.date,l.duration);return r.a.createElement(tt,null,r.a.createElement(ct,null,r.a.createElement(A.a,{span:16},r.a.createElement(et,null,"".concat(n," \u0420"))),r.a.createElement(A.a,{span:8},r.a.createElement(nt,{src:"http://pics.avs.io/99/36/".concat(a,".png")}))),r.a.createElement(ct,null,r.a.createElement(A.a,{span:8},r.a.createElement(at,null,"".concat(i.origin," - ").concat(i.destination))),r.a.createElement(A.a,{span:8},r.a.createElement(at,null,"\u0432 \u043f\u0443\u0442\u0438")),r.a.createElement(A.a,{span:8},r.a.createElement(at,null,0===i.stops.length?"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":i.stops.length>1?"".concat(i.stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"):"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430")),r.a.createElement(A.a,{span:8},r.a.createElement(rt,null,s[0])),r.a.createElement(A.a,{span:8},r.a.createElement(rt,null,s[1])),r.a.createElement(A.a,{span:8},r.a.createElement(rt,null,i.stops.join(",")))),r.a.createElement(ct,null,r.a.createElement(A.a,{span:8},r.a.createElement(at,null,"".concat(l.origin," - ").concat(l.destination))),r.a.createElement(A.a,{span:8},r.a.createElement(at,null,"\u0432 \u043f\u0443\u0442\u0438")),r.a.createElement(A.a,{span:8},r.a.createElement(at,null,0===l.stops.length?"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":l.stops.length>1?"".concat(l.stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"):"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430")),r.a.createElement(A.a,{span:8},r.a.createElement(rt,null,u[0])),r.a.createElement(A.a,{span:8},r.a.createElement(rt,null,u[1])),r.a.createElement(A.a,{span:8},r.a.createElement(rt,null,l.stops.join(",")))))},lt=function(t){var e=t.list.map((function(t){return r.a.createElement(ot,{obj:t})}));return r.a.createElement("div",null,e)},st=(n(77),n(78),function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(d.a)(this,Object(b.a)(e).call(this,t))).getId=Object(g.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://front-test.beta.aviasales.ru/search");case 2:e=t.sent,n.setState(Object(f.a)({},e.data),(function(){return n.getTickets()}));case 4:case"end":return t.stop()}}),t)}))),n.getTickets=Object(g.a)(p.a.mark((function t(){var e,a,r,c,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.searchId,t.next=3,E.a.get("https://front-test.beta.aviasales.ru/tickets",{params:{searchId:e}}).catch((function(){return n.getTickets()}));case 3:if(a=t.sent){t.next=6;break}return t.abrupt("return");case 6:r=a.data,c=r.stop,i=r.tickets,c?n.setState((function(t){var e=t.stateTickets;return{stateTickets:[].concat(Object(s.a)(e),Object(s.a)(i)),isUpdate:!1}})):n.setState((function(t){var e=t.stateTickets;return{stateTickets:[].concat(Object(s.a)(e),Object(s.a)(i))}}),(function(){return n.getTickets()}));case 8:case"end":return t.stop()}}),t)}))),n.changeTransferFlag=function(t){"all"===t?n.setState((function(t){return t.transferFlag.all?{transferFlag:{0:!0,1:!1,2:!1,3:!1,all:!1}}:{transferFlag:{0:!0,1:!0,2:!0,3:!0,all:!0}}})):n.setState((function(e){var n,a=e.transferFlag;return{transferFlag:Object(f.a)({},a,(n={},Object(l.a)(n,t,!a[t]),Object(l.a)(n,"all",!1),n))}}))},n.transferFilter=function(t){var e=n.state.transferFlag;if(e.all)return t;for(var a=[],r=0;r<4;r++)e[r]&&a.push(r);var c=function(t){return a.includes(t)};return t.filter((function(t){var e=Object(o.a)(t.segments,2),n=e[0],a=e[1];return c(n.stops.length)&&c(a.stops.length)}))},n.sortFilter=function(t){if("cheapest"===n.state.sortFlag)return t.sort((function(t,e){return t.price<e.price?-1:t.price>e.price?1:0}));var e=function(t){return t.segments[0].duration+t.segments[1].duration};return t.sort((function(t,n){var a=e(t),r=e(n);return a>r?1:a<r?-1:0}))},n.changeSortFlag=function(){n.setState((function(t){return"cheapest"===t.sortFlag?{sortFlag:"fastest"}:{sortFlag:"cheapest"}}))},n.state={stateTickets:[],sortFlag:"fastest",transferFlag:{0:!0,1:!1,2:!1,3:!1,all:!1}},n}return Object(x.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(g.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.getId();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.stateTickets,n=t.transferFlag,a=t.sortFlag,c=this.sortFilter(this.transferFilter(e)).slice(0,5);return console.log(c),r.a.createElement(I,null,r.a.createElement(Q,{changeTransferFlag:this.changeTransferFlag,transferFlag:n}),r.a.createElement(A.a,{xs:22,sm:15},r.a.createElement(K,{changeSortFlag:this.changeSortFlag,sortFlag:a}),r.a.createElement(lt,{list:c})))}}]),e}(r.a.Component));i.a.render(r.a.createElement(st,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.db95530d.chunk.js.map