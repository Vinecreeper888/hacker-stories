(this["webpackJsonphacker-stories"]=this["webpackJsonphacker-stories"]||[]).push([[0],{25:function(e,t,n){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9",container:"App_container__1MQN3",headlinePrimary:"App_headlinePrimary__2zaGM",item:"App_item__1HZ5q",button:"App_button__13pio",buttonSmall:"App_buttonSmall__3uZ30",buttonLarge:"App_buttonLarge__3E6-f",searchForm:"App_searchForm__2JdYJ",label:"App_label__v_mMj",input:"App_input__2NxBo"}},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(22),i=n.n(o),l=n(10),s=n.n(l),u=n(23),p=n(6),b=n(5),d=n(3),j=n(24),f=n.n(j),h=n(4),O=(n(51),n(7));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var x=c.createElement("g",null,c.createElement("path",{d:"M113.636,272.638c-2.689,0-5.267-1.067-7.168-2.97L2.967,166.123c-3.956-3.957-3.956-10.371-0.001-14.329l54.673-54.703 c1.9-1.9,4.479-2.97,7.167-2.97c2.689,0,5.268,1.068,7.169,2.969l41.661,41.676L225.023,27.332c1.9-1.901,4.48-2.97,7.168-2.97l0,0 c2.688,0,5.268,1.068,7.167,2.97l54.675,54.701c3.956,3.957,3.956,10.372,0,14.328L120.803,269.668 C118.903,271.57,116.325,272.638,113.636,272.638z M24.463,158.958l89.173,89.209l158.9-158.97l-40.346-40.364L120.803,160.264 c-1.9,1.902-4.478,2.971-7.167,2.971c-2.688,0-5.267-1.068-7.168-2.97l-41.66-41.674L24.463,158.958z"})),v=c.createElement("g",null),y=c.createElement("g",null),_=c.createElement("g",null),E=c.createElement("g",null),S=c.createElement("g",null),I=c.createElement("g",null),w=c.createElement("g",null),k=c.createElement("g",null),A=c.createElement("g",null),C=c.createElement("g",null),T=c.createElement("g",null),R=c.createElement("g",null),L=c.createElement("g",null),F=c.createElement("g",null),N=c.createElement("g",null);function M(e,t){var n=e.title,r=e.titleId,a=m(e,["title","titleId"]);return c.createElement("svg",g({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 297 297",style:{enableBackground:"new 0 0 297 297"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,x,v,y,_,E,S,I,w,k,A,C,T,R,L,F,N)}var H=c.forwardRef(M),B=(n.p,{NONE:function(e){return e},TITLE:function(e){return Object(O.sortBy)(e,"title")},AUTHOR:function(e){return Object(O.sortBy)(e,"author")},COMMENT:function(e){return Object(O.sortBy)(e,"num_comments").reverse()},POINT:function(e){return Object(O.sortBy)(e,"points").reverse()}}),P=function(e){var t=e.item,n=e.onRemoveItem;return Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)("span",{style:{width:"40%"},children:Object(r.jsx)("a",{href:t.url,children:t.title})}),Object(r.jsx)("span",{style:{width:"30%"},children:t.author}),Object(r.jsx)("span",{style:{width:"10%"},children:t.num_comments}),Object(r.jsx)("span",{style:{width:"10%"},children:t.points}),Object(r.jsx)("span",{style:{width:"10%"},children:Object(r.jsxs)("button",{type:"button",onClick:function(){return n(t)},className:"buttonContainer",children:[Object(r.jsx)(H,{className:"checkColorChange"}),"Dismiss"]})})]})},z=function(e){var t=e.list,n=e.onRemoveItem,c=a.a.useState({sortKey:"NONE",isReverse:!1}),o=Object(p.a)(c,2),i=o[0],l=o[1],s=function(e){var t=i.sortKey===e&&!i.isReverse;l({sortKey:e,isReverse:t}),l({sortKey:e,isReverse:t})},u=B[i.sortKey],b=i.isReverse?u(t).reverse():u(t);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)("span",{style:{width:"40%"},children:Object(r.jsx)("button",{type:"button",onClick:function(){return s("TITLE")},children:"Title"})}),Object(r.jsx)("span",{style:{width:"30%"},children:Object(r.jsx)("button",{type:"button",onClick:function(){return s("AUTHOR")},children:"Author"})}),Object(r.jsx)("span",{style:{width:"10%"},children:Object(r.jsx)("button",{type:"button",onClick:function(){return s("COMMENT")},children:"Comments"})}),Object(r.jsx)("span",{style:{width:"10%"},children:Object(r.jsx)("button",{type:"button",onClick:function(){return s("POINT")},children:"Points"})}),Object(r.jsx)("span",{style:{width:"10%"},children:"Actions"})]}),Object(r.jsx)("br",{}),b.map((function(e){return Object(r.jsx)(P,{item:e,onRemoveItem:n},e.objectID)}))]})},U=n(25),D=n.n(U);function K(){var e=Object(d.a)(["\n  border: none;\n  border-bottom: 1px solid #171212;\n  background-color: transparent;\n\n  font-size: 24px;\n"]);return K=function(){return e},e}function J(){var e=Object(d.a)(["\n  border-top: 1px solid #171212;\n  border-left: 1px solid #171212;\n  padding-left: 5px;\n  font-size: 24px;\n"]);return J=function(){return e},e}var Y=h.a.label(J()),Z=h.a.input(K()),q=function(e){var t=e.id,n=e.value,c=e.type,o=void 0===c?"text":c,i=e.onInputChange,l=e.isFocused,s=e.children,u=a.a.useRef(null);return a.a.useEffect((function(){l&&u.current&&u.current.focus()}),[l]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Y,{htmlFor:t,children:s}),"\xa0",Object(r.jsx)(Z,{ref:u,id:t,type:o,value:n,autoFocus:l,onChange:i,className:D.a.input})]})};function V(){var e=Object(d.a)(["\n  padding: 10px;\n"]);return V=function(){return e},e}function G(){var e=Object(d.a)(["\n  background: transparent;\n  border: 1px solid #171212;\n  padding: 5px;\n  cursor: pointer;\n  transition: all 0.1s ease-in;\n\n  &:hover {\n    background: #171212;\n    color: #ffffff;\n  }\n"]);return G=function(){return e},e}function Q(){var e=Object(d.a)(["\n  padding: 10px 0 20px 0;\n  display: flex;\n  align-items: baseline;\n"]);return Q=function(){return e},e}var W=h.a.form(Q()),X=h.a.button(G()),$=Object(h.a)(X)(V()),ee=function(e){var t=e.searchTerm,n=e.onSearchInput,c=e.onSearchSubmit;return Object(r.jsxs)(W,{onSubmit:c,children:[Object(r.jsx)(q,{id:"search",value:t,isFocused:!0,onInputChange:n,children:Object(r.jsx)("strong",{children:"Search: "})}),Object(r.jsx)($,{type:"submit",disabled:!t,children:"Submit"})]})};function te(){var e=Object(d.a)(["\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 2px;\n"]);return te=function(){return e},e}function ne(){var e=Object(d.a)(["\n  height: 100vw;\n  padding: 20px;\n  \n  background: #83a4d4;\n  background: linear-gradient(to left, #b6fbff, #83a4d4);\n  color: #171212;\n"]);return ne=function(){return e},e}var re="query=",ce=h.a.div(ne()),ae=h.a.h1(te()),oe=function(e,t){switch(t.type){case"STORIES_FETCH_INIT":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isError:!1});case"STORIES_FETCH_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!1,data:0===t.payload.page?t.payload.list:e.data.concat(t.payload.list),page:t.payload.page});case"STORIES_FETCH_FAILURE":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!0});case"REMOVE_STORY":return Object(b.a)(Object(b.a)({},e),{},{data:e.data.filter((function(e){return t.payload.objectID!==e.objectID}))});default:throw new Error}},ie=function(e){return e.substring(e.lastIndexOf("?")+1,e.lastIndexOf("&")).replace(re,"")},le=function(e,t){return"".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat(re).concat(e,"&").concat("page=").concat(t)},se=function(e){var t=e.lastSearches,n=e.onLastSearch;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){return Object(r.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e},e)}))})},ue=function(){var e=function(e,t){var n=a.a.useState(localStorage.getItem(e)||t),r=Object(p.a)(n,2),c=r[0],o=r[1];return a.a.useEffect((function(){localStorage.setItem(e,c)}),[c,e]),[c,o]}("search",""),t=Object(p.a)(e,2),n=t[0],c=t[1],o=a.a.useState([le(n,0)]),i=Object(p.a)(o,2),l=i[0],b=i[1],d=a.a.useReducer(oe,{data:[],page:0,isLoading:!1,isError:!1}),j=Object(p.a)(d,2),h=j[0],O=j[1],g=function(e){c(e,0)},m=function(e,t){var n=le(e,t);b(l.concat(n))},x=a.a.useCallback(Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O({type:"STORIES_FETCH_INIT"}),e.prev=1,t=l[l.length-1],e.next=5,f.a.get(t);case 5:n=e.sent,O({type:"STORIES_FETCH_SUCCESS",payload:{list:n.data.hits,page:n.data.page}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O({type:"STORIES_FETCH_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[l]);a.a.useEffect((function(){x()}),[x]);a.a.useEffect((function(){localStorage.setItem("search",n)}),[n]);var v=function(e){return e.reduce((function(e,t,n){var r=ie(t);return 0===n?e.concat(r):r===e[e.length-1]?e:e.concat(r)}),[]).slice(-6).slice(0,-1).map((function(e){return ie(e)}))}(l);return Object(r.jsxs)(ce,{children:[Object(r.jsx)(ae,{children:"My Hacker Stories"}),Object(r.jsx)(ee,{searchTerm:n,onSearchInput:function(e){c(e.target.value)},onSearchSubmit:function(e){m(n,0),e.preventDefault()}}),Object(r.jsx)("br",{}),Object(r.jsx)(se,{lastSearches:v,onLastSearch:g}),v.map((function(e,t){return Object(r.jsx)("button",{type:"button",onClick:function(){return g(e)},children:e},e+t)})),Object(r.jsx)(z,{list:h.data,onRemoveItem:function(e){O({type:"REMOVE_STORY",payload:e})}}),h.isError&&Object(r.jsx)("p",{children:"Something went wrong ..."}),h.isLoading?Object(r.jsx)("p",{children:"Loading..."}):Object(r.jsx)("button",{type:"button",onClick:function(){var e=l[l.length-1],t=ie(e);m(t,h.page+1)},children:"More"})]})};i.a.render(Object(r.jsx)(ue,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5ed99e65.chunk.js.map