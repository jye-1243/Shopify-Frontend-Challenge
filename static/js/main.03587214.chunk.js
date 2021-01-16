(this["webpackJsonpshopify-frontend-challenge"]=this["webpackJsonpshopify-frontend-challenge"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(7),o=n.n(a),l=(n(14),n(2)),r=(n(15),n(17));var j=function(e){return Object(c.jsxs)("div",{className:"nominee",children:[Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsxs)("h2",{children:[" ",e.title," "]}),Object(c.jsxs)("h3",{children:[" ",e.year," "]})]}),Object(c.jsx)("button",{className:"remove-btn",disabled:e.disabled,onClick:function(){e.onClick(e.id)},children:"Remove"})]})};var d=function(e){for(var t=[],n=0;n<e.nominees.length;n++){var s=e.nominees[n];t.push(Object(c.jsx)(j,{id:s.id,title:s.Title,year:s.Year,onClick:e.onClick},n))}return Object(c.jsx)("div",{className:"nominee-list",children:t})};var b=function(e){var t=e.movie.imdbID,n=e.movie.Title,i=e.movie.Year;function a(){e.onClick(t,n,i)}var o=Object(s.useState)(!1),r=Object(l.a)(o,2),j=r[0],d=r[1],b=Object(s.useState)([]),h=Object(l.a)(b,2),m=h[0],u=h[1];return Object(s.useEffect)((function(){j&&fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat("677802be")).then((function(e){return e.json()})).then((function(e){"False"===e.Response?console.log(e.Error):u(e)})).catch((function(e){var t=e.message;console.log(t)}))}),[j]),j?Object(c.jsxs)("div",{className:"search-item",children:[Object(c.jsxs)("div",{className:"min-search",children:[Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsxs)("h2",{children:[" ",n," "]}),Object(c.jsxs)("h3",{children:[" ",i," "]})]}),Object(c.jsx)("button",{className:"nominate-btn",disabled:e.disabled,onClick:a,children:"Nominate"})]}),Object(c.jsxs)("div",{className:"added-info",children:[Object(c.jsxs)("div",{className:"movie-more-info",children:[Object(c.jsxs)("p",{children:[" Genres: ",m.Genre," "]}),Object(c.jsxs)("p",{children:[" Director: ",m.Director," "]}),Object(c.jsxs)("p",{children:[" Actors: ",m.Actors," "]}),Object(c.jsxs)("p",{children:[" Plot: ",m.Plot," "]})]}),Object(c.jsx)("div",{className:"poster-div",children:Object(c.jsx)("img",{className:"poster",src:m.Poster,alt:"Movie Poster not Found"})})]}),Object(c.jsx)("button",{className:"expand-btn",onClick:function(){return d(!1)},children:"See Less"})]}):Object(c.jsxs)("div",{className:"search-item",children:[Object(c.jsxs)("div",{className:"min-search",children:[Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsxs)("h2",{children:[" ",n," "]}),Object(c.jsxs)("h3",{children:[" ",i," "]})]}),Object(c.jsx)("button",{className:"nominate-btn",disabled:e.disabled,onClick:a,children:"Nominate"})]}),Object(c.jsx)("button",{className:"expand-btn",onClick:function(){d(!0)},children:"See More"})]})};var h=function(e){for(var t=[],n=0;n<e.data.length;n++){for(var s=!1,i=e.data[n],a=0;a<e.nomList.length;a++)if(i.imdbID===e.nomList[a].id){s=!0;break}t.push(Object(c.jsx)(b,{movie:i,disabled:s,onClick:e.onClick},n))}return Object(c.jsx)("div",{className:"movies-list",children:t})};var m=function(){var e=Object(r.a)(["cookies"]),t=Object(l.a)(e,3),n=t[0],i=t[1],a=t[2],o=Object(s.useState)(""),j=Object(l.a)(o,2),b=j[0],m=j[1],u=Object(s.useState)(""),O=Object(l.a)(u,2),v=O[0],x=O[1],f=Object(s.useState)([]),p=Object(l.a)(f,2),N=p[0],g=p[1],k=Object(s.useState)(n.noms?n.noms:[]),S=Object(l.a)(k,2),C=S[0],E=S[1],y=Object(s.useState)(n.count?parseInt(n.count):0),w=Object(l.a)(y,2),I=w[0],F=w[1],P=Object(s.useState)(null),T=Object(l.a)(P,2),A=T[0],L=T[1],M=Object(s.useState)(""),R=Object(l.a)(M,2),D=R[0],Y=R[1];return Object(s.useEffect)((function(){g([]),fetch("https://www.omdbapi.com/?s=".concat(v,"&apikey=").concat("677802be")).then((function(e){return e.json()})).then((function(e){"False"===e.Response?(console.log(e.Error),Y(v?"No movies found with a title containing: '"+v+"'":"No movie title has been searched.")):(g(e.Search),Y(""))})).catch((function(e){var t=e.message;console.log(t)}))}),[v]),Object(s.useEffect)((function(){L(5===I?Object(c.jsx)("div",{className:"banner",children:Object(c.jsx)("h2",{children:" Congratulations!  You've nominated 5 movies for the Shoppies! "})}):null),i("count",I,{path:"/"})}),[I]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:" SHOPPIES NOMINATIONS "})}),Object(c.jsxs)("div",{className:"App-body",children:[Object(c.jsxs)("div",{className:"main-bar",children:[Object(c.jsxs)("div",{className:"search-panel",children:[Object(c.jsx)("h2",{children:" Find Your Movie: "}),Object(c.jsx)("input",{className:"search-bar",type:"text",value:b,placeholder:"Movie Title",onChange:function(e){return m(e.target.value)},onKeyUp:function(e){"Enter"===e.code&&x(b)}},"search-bar"),Object(c.jsx)("button",{className:"main-btn",onClick:function(){return x(b)},children:"Search"})]}),Object(c.jsxs)("div",{className:"cookies-bar",children:[Object(c.jsx)("button",{className:"main-btn",onClick:function(){i("noms",[],{path:"/"}),i("count",0,{path:"/"}),F(0),E([])},children:"Reset Selection"}),Object(c.jsx)("button",{className:"main-btn",onClick:function(){a("noms"),a("count"),F(0),E([])},children:"Remove Cookies"})]})]}),A,Object(c.jsxs)("div",{className:"movie-panel",children:[Object(c.jsxs)("div",{className:"result-panel",children:[Object(c.jsx)("h2",{className:"movie-header",children:" SEARCH RESULTS "}),Object(c.jsxs)("p",{children:[" ",D," "]}),Object(c.jsx)(h,{data:N,nomList:C,onClick:function(e,t,n){if(I<5){for(var c=[],s=0;s<C.length;s++)c.push(C[s]);c.push({id:e,Title:t,Year:n}),F(I+1),E(c),i("noms",c,{path:"/"})}}})]}),Object(c.jsxs)("div",{className:"nominated-panel",children:[Object(c.jsx)("h2",{className:"movie-header",id:"nominee-header",children:" NOMINEES "}),Object(c.jsx)(d,{nominees:C,onClick:function(e){for(var t=0,n=0;n<C.length;n++)e===C[n].id&&(t=n);for(var c=[],s=0;s<C.length;s++)s!==t&&c.push(C[s]);E(c),i("noms",c,{path:"/"}),F(I-1)}})]})]})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},O=n(18);o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)(m,{})})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.03587214.chunk.js.map