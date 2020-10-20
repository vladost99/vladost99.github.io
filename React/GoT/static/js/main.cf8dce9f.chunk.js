(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/error.22389cf4.jpg"},29:function(e,t,a){e.exports=a(57)},34:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=a(2),s=a(3),i=a(5),u=a(4),m=a(6),h=a(61),d=a(59),f=a(60),p=(a(34),a(58)),v=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"header-title"},r.a.createElement(p.a,{to:"/"},"Game of Thrones DB")),r.a.createElement("ul",{className:"header-list"},r.a.createElement("li",null,r.a.createElement(p.a,{to:"/characters/"},"Characters")),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/houses/"},"Houses")),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/books/"},"Books"))))},E=(a(38),a(8)),b=a.n(E),g=a(12),j=function(){function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(g.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(g.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformBook));case 4:case"end":return e.stop()}},e,this)})),this.getBook=function(){var e=Object(g.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformBook(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(g.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=5&pageSize=10");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformCharacter));case 4:case"end":return e.stop()}},e,this)})),this.getCharacter=function(){var e=Object(g.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=Object(g.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformHouse));case 4:case"end":return e.stop()}},e,this)})),this.getHouse=function(){var e=Object(g.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformHouse(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)$/)[1]},this._transformCharacter=function(e){return{id:t._extractId(e),name:t.isSet(e.name),gender:t.isSet(e.gender),born:t.isSet(e.born),died:t.isSet(e.died),culture:t.isSet(e.culture)}},this._transformHouse=function(e){return{id:t._extractId(e),name:t.isSet(e.name),region:t.isSet(e.region),words:t.isSet(e.words),titles:t.isSet(e.titles),ancestralWeapons:t.isSet(e.ancestralWeapons)}},this._transformBook=function(e){return{id:t._extractId(e),name:t.isSet(e.name),numberOfPages:t.isSet(e.numberOfPages),publisher:t.isSet(e.publisher),released:t.isSet(e.released)}},this._apiBase="https://www.anapioficeandfire.com/api"}return Object(s.a)(e,[{key:"isSet",value:function(e){return e||"no data :("}}]),e}(),O=(a(42),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spin"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),y=(a(44),a(23)),k=a.n(y),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:k.a,alt:"error"}),r.a.createElement("span",null,"Something goes wrong"))},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={char:{},loading:!0,error:!1},a.onCharLoaded=function(e){a.setState({char:e,loading:!1})},a.onError=function(e){a.setState({error:!0,loading:!1})},a.updateChar=function(){var e=Math.floor(140*Math.random()+25);a.gotService.getCharacter(e).then(a.onCharLoaded).catch(a.onError)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,c=n?r.a.createElement(w,null):null,l=a?r.a.createElement(O,null):null,o=a||n?null:r.a.createElement(C,{char:t});return r.a.createElement("div",{className:"random-block rounded"},c,l,o)}}]),t}(n.Component),C=function(e){var t=e.char,a=t.name,n=t.gender,c=t.born,l=t.died,o=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,o))))},I=S,x=(a(46),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={itemList:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.getData)().then(function(t){e.setState({itemList:t})})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e){var a=e.id,n=t.props.renderItem(e);return r.a.createElement("li",{key:a,className:"list-group-item",onClick:function(){return t.props.onItemSelected(a)}},n)})}},{key:"render",value:function(){var e=this.state.itemList;if(!e)return r.a.createElement(O,null);var t=this.renderItems(e);return r.a.createElement("ul",{className:"item-list list-group"},t)}}]),t}(n.Component)),N=(a(48),function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},n),r.a.createElement("span",null,t[a]))}),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={item:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.itemId,n=t.getData;a&&n(a).then(function(t){e.setState({item:t})})}},{key:"render",value:function(){if(!this.state.item)return r.a.createElement("span",{className:"select-error"},"Please select item in the list");var e=this.state.item,t=e.name;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,t),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,function(t){return r.a.cloneElement(t,{item:e})})))}}]),t}(n.Component),B=function(e){var t=e.left,a=e.right;return r.a.createElement(d.a,null,r.a.createElement(f.a,{md:"6"},t),r.a.createElement(f.a,{md:"6"},a))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={selectedChar:null,error:!1},a.onItemSelected=function(e){a.setState({selectedChar:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(w,null);var e=r.a.createElement(x,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllCharacters,renderItem:function(e){var t=e.name,a=e.gender;return"".concat(t," (").concat(a,")")}}),t=r.a.createElement(D,{itemId:this.state.selectedChar,getData:this.gotService.getCharacter},r.a.createElement(N,{field:"gender",label:"Gender"}),r.a.createElement(N,{field:"born",label:"Born"}),r.a.createElement(N,{field:"died",label:"Died"}),r.a.createElement(N,{field:"culture",label:"Culture"}));return r.a.createElement(B,{left:e,right:t})}}]),t}(n.Component),A=a(64),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={selectedBook:null,error:!1},a.onItemSelected=function(e){a.setState({selectedBook:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(w,null):r.a.createElement(x,{onItemSelected:function(t){console.log(e.match),console.log(e.props.history),e.props.history.push(t)},getData:this.gotService.getAllBooks,renderItem:function(e){return e.name}})}}]),t}(n.Component),H=Object(A.a)(_),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={selectedHouse:null,error:!1},a.onItemSelected=function(e){a.setState({selectedHouse:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(w,null);var e=r.a.createElement(x,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllHouses,renderItem:function(e){return e.name}}),t=r.a.createElement(D,{itemId:this.state.selectedHouse,getData:this.gotService.getHouse},r.a.createElement(N,{field:"region",label:"Region"}),r.a.createElement(N,{field:"words",label:"Words"}),r.a.createElement(N,{field:"titles",label:"Titles"}),r.a.createElement(N,{field:"ancestralWeapons",label:"Ancestral Weapons"}));return r.a.createElement(B,{left:e,right:t})}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D,{itemId:this.props.bookId,getData:this.gotService.getBook},r.a.createElement(N,{field:"numberOfPages",label:"Number of pages"}),r.a.createElement(N,{field:"publisher",label:"Publisher"}),r.a.createElement(N,{field:"released",label:"Released"}))}}]),t}(n.Component),M=a(63),P=a(65),G=a(62),T=(a(51),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("h1",{style:{color:"#fff"}},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 404"))}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={showRandomChar:!0,error:!1,selectedHouse:20},a.toggleRandomChar=function(){a.setState(function(e){return{showRandomChar:!e.showRandomChar}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){console.log("error"),this.setState({error:!0})}},{key:"render",value:function(){var e=this.state.showRandomChar?r.a.createElement(I,null):null;return this.state.error?r.a.createElement(w,null):r.a.createElement(M.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(h.a,null,r.a.createElement(v,null)),r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{lg:{size:5,offset:0}},e,r.a.createElement("button",{className:"toggle-btn",onClick:this.toggleRandomChar},"Toggle random character"))),r.a.createElement(P.a,null,r.a.createElement(G.a,{path:"/",component:function(){return r.a.createElement("h1",{style:{color:"white"}},"Welcome to GOT DB")},exact:!0}),r.a.createElement(G.a,{path:"/characters",component:R}),r.a.createElement(G.a,{path:"/books",component:H,exact:!0}),r.a.createElement(G.a,{path:"/books/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(L,{bookId:t})}}),r.a.createElement(G.a,{path:"/houses",component:W}),r.a.createElement(G.a,{path:"*",component:T})))))}}]),t}(n.Component);a(53),a(55);l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.cf8dce9f.chunk.js.map