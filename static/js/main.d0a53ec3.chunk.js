(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),s=a(4),c=a(5),o=a(7),p=a(6),u=a(8),m=(a(30),a(46)),h=a(45),d=(a(32),a(15)),g=a.n(d),f=a(22),y=a(9),v=a(44),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).initiateCarousel=function(){var e=Object(f.a)(g.a.mark(function e(t){var n,r,i,l,s,c,o,p,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector(".carousel-slide"),r=document.querySelectorAll(".carousel-slide img"),i=document.querySelector(".carousel-counter p"),l=document.querySelector(".carousel-info h2"),s=document.querySelector(".carousel-info p span"),c=document.querySelector(".carousel-wrapper"),a.counter=0,o=c.clientWidth,n.style.transform="translateX("+-o*a.counter+"px)",p=[],e.next=12,r.forEach(function(e){p.push({id:e.getAttribute("contentid"),title:e.getAttribute("title"),rating:e.getAttribute("rating")})});case 12:return e.next=14,a.setState({carouselInfo:p});case 14:u=t,n.style.transition="transform 0.4s ease-in-out",i.innerHTML=a.counter+1+"/"+r.length,l.innerHTML=a.state.carouselInfo[a.counter].title,s.innerHTML=a.state.carouselInfo[a.counter].rating,a.setState({id:a.state.carouselInfo[a.counter].id}),a.load&&(a.interval=setInterval(function(){a.counter>=r.length-1?a.counter=0:a.counter++,n.style.transform="translateX("+-o*a.counter+"px)",i.innerHTML=a.counter+1+"/"+r.length,l.innerHTML=a.state.carouselInfo[a.counter].title,s.innerHTML=a.state.carouselInfo[a.counter].rating,a.setState({id:a.state.carouselInfo[a.counter].id})},u),a.load=!1),window.addEventListener("resize",function(){o=c.clientWidth,a.counter=0,n.style.transform="translateX("+-o*a.counter+"px)",i.innerHTML=a.counter+1+"/"+r.length,l.innerHTML=a.state.carouselInfo[a.counter].title,s.innerHTML=a.state.carouselInfo[a.counter].rating});case 22:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={id:null,type:a.props.type,category:a.props.category,heading:a.props.heading,headingSub:a.props.headingSub,carouselInfo:[]},a.load=!0,a.counter=0,a.interval=null,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1").then(function(e){return e.json()}).then(function(t){return e.props.nowPlaying(t)})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.type!==this.state.type&&fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1").then(function(e){return e.json()}).then(function(e){return a.props.nowPlaying(e)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({type:e.type,category:e.category,heading:e.heading,headingSub:e.headingSub})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.dat,a=void 0!==t?t.map(function(e){return r.a.createElement("img",{key:e.id,src:null!==e.backdrop_path?"https://image.tmdb.org/t/p/w1280"+e.backdrop_path:"",alt:e.title||e.name,title:e.title||e.name,rating:e.vote_average,contentid:e.id})}):r.a.createElement("p",null,"Loading..........");return r.a.createElement("div",{id:"carousel",className:"carousel-wrapper"},r.a.createElement(v.a,{to:"/info/"+this.state.type+"/"+this.state.id,className:"overlay-link"}),r.a.createElement("div",{className:"overlay-text"},r.a.createElement("div",{className:"carousel-info"},r.a.createElement("h1",null,this.state.heading," ",r.a.createElement("span",null,this.state.headingSub)),r.a.createElement("h2",null),r.a.createElement("p",null,"Rating - ",r.a.createElement("span",null))),r.a.createElement("div",{className:"carousel-counter"},r.a.createElement("p",null))),r.a.createElement("div",{className:"carousel-slide",onLoad:function(){return e.initiateCarousel(4e3)}},a))}}]),t}(n.Component),b=Object(y.b)(function(e){return{dat:e.playing}},function(e){return{nowPlaying:function(t){return e({type:"SET_NOW_PLAYING",data:t})}}})(E),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).rightScroll=function(){document.getElementById("popular").scrollLeft+=284},a.leftScroll=function(){document.getElementById("popular").scrollLeft+=-284},a.state={type:a.props.type,category:a.props.category},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.api_url+this.state.category+"/"+this.state.type+"/week?api_key="+this.props.api_key).then(function(e){return e.json()}).then(function(t){return e.props.popular(t)})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.type!==this.state.type&&fetch(this.props.api_url+this.state.category+"/"+this.state.type+"/week?api_key="+this.props.api_key).then(function(e){return e.json()}).then(function(e){return a.props.popular(e)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({type:e.type,category:e.category})}},{key:"render",value:function(){var e=this,t=this.props.dat,a=t.length>0&&void 0!==t?t.map(function(t){return r.a.createElement("div",{key:t.id,className:"img-wrapper"},r.a.createElement(v.a,{to:"/info/"+e.state.type+"/"+t.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:t.title})),r.a.createElement("span",{className:"mov-title"},t.title||t.name))}):r.a.createElement("p",null,"Loading..........");return r.a.createElement("div",{className:"sub-container"},r.a.createElement("h2",{className:"sub-heading"},"POPULAR / TRENDING"),r.a.createElement("hr",{className:"sub-heading-line"}),r.a.createElement("div",{className:"row"},r.a.createElement("i",{id:"explore-left",className:"fas fa-angle-left explore",onClick:this.leftScroll}),r.a.createElement("i",{id:"explore-right",className:"fas fa-angle-right explore",onClick:this.rightScroll}),r.a.createElement("div",{id:"popular",className:"explore-row"},a)))}}]),t}(n.Component),N=Object(y.b)(function(e){return{dat:e.popular}},function(e){return{popular:function(t){return e({type:"SET_POPULAR",data:t})}}})(_),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).rightScroll=function(){document.getElementById("top-rated").scrollLeft+=284},a.leftScroll=function(){document.getElementById("top-rated").scrollLeft+=-284},a.state={type:a.props.type,category:a.props.category},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1").then(function(e){return e.json()}).then(function(t){return e.props.rating(t)})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.type!==this.state.type&&fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1").then(function(e){return e.json()}).then(function(e){return a.props.rating(e)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({type:e.type,category:e.category})}},{key:"render",value:function(){var e=this,t=this.props.dat,a=t.length>0&&void 0!==t?t.map(function(t){return r.a.createElement("div",{key:t.id,className:"img-wrapper"},r.a.createElement(v.a,{to:"/info/"+e.state.type+"/"+t.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:t.title})),r.a.createElement("span",{className:"mov-title"},t.title||t.name))}):r.a.createElement("p",null,"Loading..........");return r.a.createElement("div",{className:"sub-container"},r.a.createElement("h2",{className:"sub-heading"},"TOP RATED"),r.a.createElement("hr",{className:"sub-heading-line"}),r.a.createElement("div",{className:"row"},r.a.createElement("i",{id:"explore-left",className:"fas fa-angle-left explore",onClick:this.leftScroll}),r.a.createElement("i",{id:"explore-right",className:"fas fa-angle-right explore",onClick:this.rightScroll}),r.a.createElement("div",{id:"top-rated",className:"explore-row"},a)))}}]),t}(n.Component),O=Object(y.b)(function(e){return{dat:e.rating}},function(e){return{rating:function(t){return e({type:"SET_TOP_RATED",data:t})}}})(k),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).rightScroll=function(){document.getElementById("upcoming").scrollLeft+=284},a.leftScroll=function(){document.getElementById("upcoming").scrollLeft+=-284},a.state={type:a.props.type,category:a.props.category},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1").then(function(e){return e.json()}).then(function(t){return e.props.upcoming(t)})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.type!==this.state.type&&fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1").then(function(e){return e.json()}).then(function(e){return a.props.upcoming(e)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({type:e.type,category:e.category})}},{key:"render",value:function(){var e=this,t=this.props.dat,a=t.length>0&&void 0!==t?t.map(function(t){return r.a.createElement("div",{key:t.id,className:"img-wrapper"},r.a.createElement(v.a,{to:"/info/"+e.state.type+"/"+t.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:t.title})),r.a.createElement("span",{className:"mov-title"},t.title||t.name))}):r.a.createElement("p",null,"Loading..........");return r.a.createElement("div",{className:"sub-container"},r.a.createElement("h2",{className:"sub-heading"},"UPCOMING / ON THE AIR"),r.a.createElement("hr",{className:"sub-heading-line"}),r.a.createElement("div",{className:"row"},r.a.createElement("i",{id:"explore-left",className:"fas fa-angle-left explore",onClick:this.leftScroll}),r.a.createElement("i",{id:"explore-right",className:"fas fa-angle-right explore",onClick:this.rightScroll}),r.a.createElement("div",{id:"upcoming",className:"explore-row"},a)))}}]),t}(n.Component),w=Object(y.b)(function(e){return{dat:e.upcoming}},function(e){return{upcoming:function(t){return e({type:"SET_UPCOMING",data:t})}}})(S),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){e!==a.state.display&&a.setState({display:e})},a.state={display:"movie"},a.api_url="https://api.themoviedb.org/3/",a.api_key="03100836a4b843b52bf4dab39d600f39",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="movie"===this.state.display?r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(b,{type:"movie",category:"now_playing",heading:"NOW PLAYING",headingSub:"in Theatres",api_url:this.api_url,api_key:this.api_key}),r.a.createElement("div",{className:"container"},r.a.createElement(w,{type:"movie",category:"upcoming",api_url:this.api_url,api_key:this.api_key}),r.a.createElement(N,{type:"movie",category:"trending",api_url:this.api_url,api_key:this.api_key}),r.a.createElement(O,{type:"movie",category:"top_rated",api_url:this.api_url,api_key:this.api_key}))):r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(b,{type:"tv",category:"airing_today",heading:"AIRING TODAY",headingSub:"on TV",api_url:this.api_url,api_key:this.api_key}),r.a.createElement("div",{className:"container"},r.a.createElement(w,{type:"tv",category:"on_the_air",api_url:this.api_url,api_key:this.api_key}),r.a.createElement(N,{type:"tv",category:"trending",api_url:this.api_url,api_key:this.api_key}),r.a.createElement(O,{type:"tv",category:"top_rated",api_url:this.api_url,api_key:this.api_key})));return r.a.createElement("div",{className:"home"},r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",{className:"brand-logo"},r.a.createElement("a",{href:"/"},"MOVIE SURF")),r.a.createElement("li",{className:"nav-items",onClick:function(){return e.handleClick("movie")}},"MOVIES"),r.a.createElement("li",{className:"nav-items",onClick:function(){return e.handleClick("tv")}},"TV SHOWS"))))),t,r.a.createElement("hr",null))}}]),t}(n.Component),I=(a(40),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).rightScroll=function(){document.getElementById("cast").scrollLeft+=284},a.leftScroll=function(){document.getElementById("cast").scrollLeft+=-284},a.state={data:{},castData:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/"+this.props.match.params.type+"/"+this.props.match.params.info_id+"?api_key=03100836a4b843b52bf4dab39d600f39").then(function(e){return e.json()}).then(function(t){e.setState({data:t})}),fetch("https://api.themoviedb.org/3/"+this.props.match.params.type+"/"+this.props.match.params.info_id+"/credits?api_key=03100836a4b843b52bf4dab39d600f39").then(function(e){return e.json()}).then(function(t){e.setState({castData:t.cast<=20?t.cast:t.cast.slice(0,20)})})}},{key:"render",value:function(){var e="",t="https://image.tmdb.org/t/p/w1280";void 0!==this.state.data.backdrop_path&&null!==this.state.data.backdrop_path&&(document.body.style.backgroundImage="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('"+t+this.state.data.backdrop_path+"')"),e=void 0!==this.state.data.poster_path&&null!==this.state.data.poster_path?t+this.state.data.poster_path:"https://via.placeholder.com/150";var a=null!==this.state.castData&&this.state.castData.length>0?this.state.castData.map(function(e){return r.a.createElement("div",{key:e.id,className:"img-wrapper"},r.a.createElement("img",{src:null!==e.profile_path?"https://image.tmdb.org/t/p/original"+e.profile_path:"https://via.placeholder.com/150",alt:e.name}),r.a.createElement("span",{className:"cast-name"},e.name," as ",e.character))}):r.a.createElement("p",null,"Not Available"),n=void 0!==this.state.data.genres?this.state.data.genres.map(function(e){return r.a.createElement("span",{key:e.id,className:"genre"},e.name)}):r.a.createElement("span",null);return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid1"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement("div",{className:"grid2"},r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("img",{className:"poster-img",src:e,alt:"poster"}),r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,this.state.data.title||this.state.data.name," ",r.a.createElement("span",{className:"year"},void 0!==this.state.data.release_date?"("+this.state.data.release_date.slice(0,4)+")":null)),r.a.createElement("h2",{className:"info-subheading"},"GENRE"),r.a.createElement("h3",null,n),r.a.createElement("div",{className:"inline-wraps"},r.a.createElement("div",{className:"inline-wrap-items"},r.a.createElement("h2",{className:"info-subheading"},"RATING"),r.a.createElement("h3",null,this.state.data.vote_average)),r.a.createElement("div",{className:"inline-wrap-items"},r.a.createElement("h2",{className:"info-subheading"},"STATUS"),r.a.createElement("h3",null,this.state.data.status))),r.a.createElement("div",{className:"tagline"},r.a.createElement("h2",{className:"info-subheading"},"TAGLINE"),r.a.createElement("p",null,this.state.data.tagline||"N/A"))))),r.a.createElement("div",{className:"grid3"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"subcontent-wrapper"},r.a.createElement("h2",null,"OVERVIEW"),r.a.createElement("hr",null),r.a.createElement("p",null,this.state.data.overview)),r.a.createElement("div",{className:"subcontent-wrapper"},r.a.createElement("h2",null,"CAST"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("i",{id:"explore-left",className:"fas fa-angle-left nav-arrows",onClick:this.leftScroll}),r.a.createElement("i",{id:"explore-right",className:"fas fa-angle-right nav-arrows",onClick:this.rightScroll}),r.a.createElement("div",{id:"cast",className:"cast-list"},a))))))}}]),t}(n.Component)),T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{path:"/info/:type/:info_id",component:I}),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-info"},r.a.createElement("h3",null,"Designed & developed by,"),r.a.createElement("p",null,"Varun S")),r.a.createElement("div",{className:"footer-logo"},r.a.createElement("a",{href:"https://developers.themoviedb.org/3"},r.a.createElement("img",{src:"https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",alt:"Powered by TMDb"})))),r.a.createElement("p",null,"Movie Surf \xa9 Copyright 2019"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(13),x=a(11),C={playing:[],popular:[],upcoming:[],rating:[]};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOW_PLAYING":var a=t.data.results;return Object(x.a)({},e,{playing:a});case"SET_POPULAR":var n=t.data.results;return Object(x.a)({},e,{popular:n});case"SET_UPCOMING":var r=t.data.results;return Object(x.a)({},e,{upcoming:r});case"SET_TOP_RATED":var i=t.data.results;return Object(x.a)({},e,{rating:i});default:return e}},P=Object(L.b)(A);l.a.render(r.a.createElement(y.a,{store:P},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.d0a53ec3.chunk.js.map