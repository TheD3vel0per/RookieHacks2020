(this.webpackJsonprookiehacks2020=this.webpackJsonprookiehacks2020||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(20),l=t.n(i),s=(t(74),t(6)),r=t(17),o=t(10),m=t.n(o),d=t(23),p=t(12),u=t(16),h=t(14),f=t(13),E=t(111),g=t(117),b=t(54),v=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={projects:b},e.sort_cards=function(a){var t=a.target.value,n=e.state.projects.concat();switch(t){case"prog-abs":n.sort((function(e,a){return e.finance.donationGoals-e.finance.donatedSoFar-(a.finance.donationGoals-a.finance.donatedSoFar)}));break;case"prog-rel":n.sort((function(e,a){return a.finance.donatedSoFar/a.finance.donationGoals-e.finance.donatedSoFar/e.finance.donationGoals}));break;case"fnd-goal":n.sort((function(e,a){return a.finance.donationGoals-e.finance.donationGoals}));break;case"tot-fnds":n.sort((function(e,a){return a.finance.donatedSoFar-e.finance.donationGoals}));default:console.log("Selected invalid algorithm!!")}e.setState({projects:n}),console.log(n)},e}return Object(u.a)(t,[{key:"load",value:function(){var e=this;console.log("homepage load!"),fetch("/api/projects").then(function(){var a=Object(d.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,e.setState({projects:n});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){}))}},{key:"handleButtonClick",value:function(){this.render()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onLoad:this.load},c.a.createElement(E.a,{fluid:!0},c.a.createElement("div",null,c.a.createElement("select",{id:"sort_alg_selecter",style:{marginRight:"2em"},onChange:this.sort_cards},c.a.createElement("option",{selected:!0,disabled:!0},"Select Sorting Method"),c.a.createElement("option",{value:"prog-rel"},"  Progress (%)             "),c.a.createElement("option",{value:"prog-abs"},"  Progress ($ From Goal)   "),c.a.createElement("option",{value:"fnd-goal"},"  Fundraising Goal         "),c.a.createElement("option",{value:"tot-fnds"},"  Total Funds Raised       "),c.a.createElement("option",{disabled:!0},"Project Age"),c.a.createElement("option",{disabled:!0},"Remaining Project Time"))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},this.state.projects.map((function(e){return c.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-2"},c.a.createElement(g.a,{className:"border-info"},c.a.createElement(g.a.Img,{variant:"top",src:"/images/people-in-water.jpg",alt:"Generic placeholder in case pic fails to load"}),c.a.createElement(g.a.Body,null,c.a.createElement(g.a.Title,null,e.title),c.a.createElement(g.a.Text,null,e.shortDescription),c.a.createElement(r.b,{to:"/project/"+e._id,className:"button"},"Go somewhere"))))}))))))}}]),t}(c.a.Component),N=t(28),w=t(57),y=t(47),x=t(40),_=t(112),k=t(113),S=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).state={index:0,recommended:[],project:{_id:"",title:"",shortDescription:"",longDescription:"",image:"",companyName:"",companyUrl:"",finance:{donatedSoFar:"",donationGoals:""},tags:[]}},n.handleSelect=function(e,a){n.setState({index:e})},n.loadProject=function(){console.log(n.props);var e=n.props.match.params.id;fetch("/api/project/".concat(e)).then(function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:t=e.sent,n.setState({project:t}),n.loadRecommended(t.tags);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){n.setState({project:{id:"100",title:"COVID Masks",shortDescription:"Project to fund 3D printing of masks",longDescription:" Every since the dawn of time, man has worn masks to keep safe from rude people who cough everywhere and protest lockdown. In our project.... GIVE US MONEY!!!!!  Congue eu consequat ac felis donec et odio. Ac auctor augue mauris augue neque gravida in. Consequat semper viverra nam libero justo laoreet. Proin fermentum leo vel orci. Mattis rhoncus urna neque viverra justo nec ultrices. Nibh tellus molestie nunc non blandit massa enim. Libero nunc consequat interdum varius sit amet. Quam adipiscing vitae proin sagittis nisl rhoncus. Euismod lacinia at quis risus sed vulputate. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sed id semper risus in. Eget dolor morbi non arcu risus quis varius. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",image:"",companyName:"Masks R Us",companyUrl:"https://loremipsum.io/",finance:{donatedSoFar:"10",donationGoals:"100"},tags:["keywords"]}})}))},n.loadRecommended=function(e){fetch("/api/projects/recommended",{headers:{"Content-Type":"application/json"},body:JSON.stringify({tags:e})}).then(function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:t=e.sent,n.setState({recommended:t});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch(console.log)},n.load=function(){n.loadProject()},n.render=function(){var e,a,t=100*n.state.project.finance.donatedSoFar/n.state.project.finance.donationGoals;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"text-center p-5",id:"wrapper",onLoad:n.load},c.a.createElement(g.a,{style:{width:"100%"}},c.a.createElement(g.a.Img,{variant:"top",src:"/images/people-in-water.jpg",alt:"Generic placeholder in case pic fails to load",style:{maxHeight:"500px",objectFit:"cover"}}),c.a.createElement(g.a.Body,null,c.a.createElement(g.a.Title,{id:"title",style:(e={textShadow:"0px 1px 3px #454545"},Object(N.a)(e,"textShadow","0px 3px 7px #454545"),Object(N.a)(e,"textShadow","0px 5px 10px #e0e0e0"),Object(N.a)(e,"fontSize","3em"),e)},n.state.project.title," "),c.a.createElement(g.a.Subtitle,{style:(a={fontSize:"1.2em",textShadow:"0px 1px 3px #454545"},Object(N.a)(a,"textShadow","0px 3px 7px #454545"),Object(N.a)(a,"textShadow","0px 5px 10px #e0e0e0"),Object(N.a)(a,"marginBottom",45),a)},n.state.project.shortDescription),c.a.createElement("div",{className:"container"},c.a.createElement(y.a,{style:{marginBottom:25}},c.a.createElement(y.a,{animated:!0,striped:!0,variant:"success",now:t,key:1})),c.a.createElement(r.b,{to:"/donate",variant:"outline-success",className:"button m-1"},"Donate")),c.a.createElement("p",null),c.a.createElement("p",null),c.a.createElement(g.a.Text,null,n.state.project.longDescription),c.a.createElement("p",null),c.a.createElement(w.a,{href:n.state.project.companyUrl,target:"_blank",className:"m-3",variant:"outline-dark"}," Company Website "),c.a.createElement(_.a,{url:window.location.href,size:32}),c.a.createElement(k.a,{size:32}),c.a.createElement("div",null))),c.a.createElement(E.a,null,c.a.createElement(x.a,{activeIndex:n.state.index,onSelect:n.handleSelect},n.state.recommended.map((function(e){return c.a.createElement(x.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"/images/people-in-water.jpg",alt:"First slide"}),c.a.createElement(x.a.Caption,null,c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.shortDescription)))}))))))},console.log(e),n}return t}(c.a.Component),D=t(61),j=t(62),O=(t(80),t(44)),C=t(60),F=t.n(C),q=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={email:"",password:""},e.validateForm=function(){return e.state.length>0&&e.state.password.length>0},e.handleSubmit=function(){var a=Object(d.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),(n=new Request("/api/auth")).json({email:e.state.email,password:e.state.password}),fetch("/api/auth",n).then(function(){var e=Object(d.a)(m.a.mark((function e(a){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:void 0!=(t=e.sent).token?(localStorage.setItem("token",t.token),n=JSON.parse(atob(t.token.split(".")[1])),localStorage.setItem("_id",n._id),localStorage.setItem("name",n.name),localStorage.setItem("email",n.email)):alert("Login failed!");case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){alert("Login failed!")}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleSubmitDummy=function(e){console.log("DEBUG: Using dummy tokens..."),localStorage.setItem("_id","DUMMY_ID12345"),localStorage.setItem("name","John Doe"),localStorage.setItem("email","john@doe.nut")},e.LoadingIndicator=function(e){return Object(O.usePromiseTracker)().promiseInProgress&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Hey some async call in progress ! "),c.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(F.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"})))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return localStorage.getItem("name")?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"Login"},c.a.createElement("form",{onSubmit:this.handleSubmitDummy},c.a.createElement(D.a,{controlId:"email",bsSize:"large"},c.a.createElement("label",null,"Email"),c.a.createElement(j.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}})),c.a.createElement(D.a,{controlId:"password",bsSize:"large"},c.a.createElement("label",null,"Password"),c.a.createElement(j.a,{value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},type:"password"})),c.a.createElement(w.a,{block:!0,bsSize:"large",disabled:!this.validateForm,type:"submit"},"Login")))}}]),t}(c.a.Component),T=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("section",{id:"team",className:"pb-5"},c.a.createElement("div",{className:"container"},c.a.createElement("h5",{className:"section-title h1"},"OUR TEAM"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{className:"image-flip"},c.a.createElement("div",{className:"mainflip flip-0"},c.a.createElement("div",{className:"frontside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{className:" img-fluid",src:"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png",alt:"card image"})),c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button."),c.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},c.a.createElement("i",{className:"fa fa-plus"}))))),c.a.createElement("div",{className:"backside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center mt-4"},c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-skype"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-google"})))))))))),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{className:"image-flip",ontouchstart:"this.classList.toggle('hover');"},c.a.createElement("div",{className:"mainflip"},c.a.createElement("div",{className:"frontside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{className:" img-fluid",src:"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png",alt:"card image"})),c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button."),c.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},c.a.createElement("i",{className:"fa fa-plus"}))))),c.a.createElement("div",{className:"backside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center mt-4"},c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-skype"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-google"})))))))))),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{className:"image-flip",ontouchstart:"this.classList.toggle('hover');"},c.a.createElement("div",{className:"mainflip"},c.a.createElement("div",{className:"frontside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{className:" img-fluid",src:"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png",alt:"card image"})),c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button."),c.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},c.a.createElement("i",{className:"fa fa-plus"}))))),c.a.createElement("div",{className:"backside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center mt-4"},c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-skype"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-google"})))))))))),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{className:"image-flip",ontouchstart:"this.classList.toggle('hover');"},c.a.createElement("div",{className:"mainflip"},c.a.createElement("div",{className:"frontside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{className:" img-fluid",src:"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg",alt:"card image"})),c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button."),c.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},c.a.createElement("i",{className:"fa fa-plus"}))))),c.a.createElement("div",{className:"backside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center mt-4"},c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-skype"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-google"})))))))))),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{className:"image-flip",ontouchstart:"this.classList.toggle('hover');"},c.a.createElement("div",{className:"mainflip"},c.a.createElement("div",{className:"frontside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{className:" img-fluid",src:"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png",alt:"card image"})),c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button."),c.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},c.a.createElement("i",{className:"fa fa-plus"}))))),c.a.createElement("div",{className:"backside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center mt-4"},c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-skype"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-google"})))))))))),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{className:"image-flip",ontouchstart:"this.classList.toggle('hover');"},c.a.createElement("div",{className:"mainflip"},c.a.createElement("div",{className:"frontside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{className:" img-fluid",src:"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg",alt:"card image"})),c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button."),c.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},c.a.createElement("i",{className:"fa fa-plus"}))))),c.a.createElement("div",{className:"backside"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center mt-4"},c.a.createElement("h4",{className:"card-title"},"Sunlimetech"),c.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-skype"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:"https://www.fiverr.com/share/qb8D02"},c.a.createElement("i",{className:"fa fa-google"}))))))))))))))}}]),t}(c.a.Component),I=t(114),G=t(63),L=t(118),A=t(64),B=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={validated:!1},e}return Object(u.a)(t,[{key:"hideRadio",value:function(e){document.getElementById("amount").style.visibility="hidden"}},{key:"showRadio",value:function(e){document.getElementById("amount").style.visibility="visible"}},{key:"handleSubmit",value:function(e){!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation()):alert("Thank you for donating! "),this.setState({validated:!0})}},{key:"render",value:function(){return this.state.validated?c.a.createElement(s.a,{to:"/"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit},c.a.createElement(E.a,null,c.a.createElement(I.a.Row,null,c.a.createElement(G.a,{style:{marginTop:"20%",marginBottom:"5%",textAlign:"center"}},c.a.createElement("h2",{style:{color:"#141114",fontWeight:"bold",fontSize:"4em",textShadow:"4px 4px 5px gray"}},"Donate Now"))),c.a.createElement("p",null),c.a.createElement(L.a,{type:"radio",name:"options",defaultValue:1},c.a.createElement(A.a,{variant:"outline-dark",id:"1",value:1,onChange:this.hideRadio},"$5"),c.a.createElement(A.a,{variant:"outline-dark",id:"2",value:2,onChange:this.hideRadio},"$10"),c.a.createElement(A.a,{variant:"outline-dark",id:"3",value:3,onChange:this.hideRadio},"$20"),c.a.createElement(A.a,{variant:"outline-dark",id:"4",value:4,onChange:this.hideRadio},"$50"),c.a.createElement(A.a,{variant:"outline-dark",id:"5",value:5,onChange:this.hideRadio},"$100"),c.a.createElement(A.a,{variant:"outline-dark",id:"6",value:6,onClick:this.showRadio},"Other")),c.a.createElement(I.a.Row,null,c.a.createElement(I.a.Group,{as:G.a,md:"12",controlId:"validationCustom03",style:{marginBottom:30}},c.a.createElement(I.a.Control,{id:"amount",style:{marginBottom:"5%",marginTop:"5%",visibility:"hidden"},type:"number",placeholder:"CAD $"}))),c.a.createElement(I.a.Group,null,c.a.createElement(I.a.Check,{required:!0,label:"Agree to Terms of Use",feedback:"You must agree before submitting."})),c.a.createElement(w.a,{variant:"success",size:"lg",type:"number submit"}," Donate "))))}}]),t}(c.a.Component),R=t(31),U=t.n(R),P="AIzaSyAixXVA1zMyB8fb4O_PY5oZQw3N_ONAetQ",z=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={coords:{longitude:0,latitude:0},location:{country:"",postal_code:"",locality:"",sublocality:""}},e.load=function(){navigator.geolocation.getCurrentPosition((function(a){console.log("Latitude is :",a.coords.latitude),console.log("Longitude is :",a.coords.longitude);var t={country:"",postal_code:"",locality:"",sublocality:""};U.a.fromLatLng("".concat(e.state.coords.latitude),"".concat(e.state.coords.longitude),P).then((function(n){var c=n.results[0].formatted_address;console.log(c);for(var i=0;i<n.results[0].address_components.length;++i)for(var l=0;l<n.results[0].address_components[i].types.length;++l)"country"==n.results[0].address_components[i].types[l]?t.country=n.results[0].address_components[i].long_name:"postal_code"==n.results[0].address_components[i].types[l]?t.postal_code=n.results[0].address_components[i].long_name:"locality"==n.results[0].address_components[i].types[l]?t.locality=n.results[0].address_components[i].long_name:"sublocality"==n.results[0].address_components[i].types[l]&&(t.sublocality=n.results[0].address_components[i].long_name);e.setState({coords:a.coords,location:t})})).catch((function(e){console.error(e)}))}))},e}return Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{onLoad:this.load},c.a.createElement("h4",null,"Using geolocation JavaScript API in React"),c.a.createElement("p",null,"Longitude: ",this.state.coords.longitude),c.a.createElement("p",null,"Latitude:  ",this.state.coords.latitude," "),c.a.createElement("p",null,"Country:   ",this.state.location.country," "),c.a.createElement("p",null,"loaclity:  ",this.state.location.locality," "))}}]),t}(c.a.Component);var M=function(){return c.a.createElement(c.a.Fragment,null)},$=t(116),J=t(115);t(104),t(105),t(106);var V=function(){var e=Object(s.g)(),a=function(){localStorage.removeItem("_id"),localStorage.removeItem("name"),localStorage.removeItem("email"),e.push("/")},t=function(e){var a=localStorage.getItem("name");return!!a&&c.a.createElement($.a.Text,{style:{color:"#ffffff",marginRight:"1em"}},"Hello, ",a,"!")},n=function(e){return localStorage.getItem("name")?c.a.createElement(w.a,{variant:"outline-danger",type:"submit",onClick:a},"Logout"):c.a.createElement(r.b,{to:"/login"},c.a.createElement(w.a,{variant:"outline-success"},"Login"))};return c.a.createElement("div",{className:"App"},c.a.createElement(r.a,null,c.a.createElement("div",{style:{paddingBottom:"10px"}},c.a.createElement($.a,{bg:"dark",expand:"lg"},c.a.createElement($.a.Brand,{href:"#home"},c.a.createElement(r.b,{to:"/",style:{color:"white",underline:"none"}},"CoviDonate")),c.a.createElement($.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement($.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(J.a,null,c.a.createElement(r.b,{to:"/map"},"Map")),c.a.createElement(J.a,{className:"ml-auto"},c.a.createElement(t,null),c.a.createElement(I.a,null,c.a.createElement(n,null)))))),c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/project/:id",component:S}),c.a.createElement(s.b,{path:"/about-us",component:T}),c.a.createElement(s.b,{path:"/donate",component:B}),c.a.createElement(s.b,{path:"/map",component:z}),c.a.createElement(s.b,{path:"/city",component:M}),c.a.createElement(s.b,{path:"/login",component:q}),c.a.createElement(s.b,{path:"/",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));U.a.setApiKey("AIzaSyD3wcZvoR5pytYB-LNnPb0XhBO_CMi0wBE"),U.a.setLanguage("en"),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e){e.exports=JSON.parse('[{"_id":"5ed177e4859e1259c9ebdb04","title":"A","shortDescription":"A_Short_Description","longDescription":"A_long_Description","image":"","companyName":"A_Company_Name","companyUrl":"","finance":{"donatedSoFar":5,"donationGoals":5000},"tags":["keywords"]},{"id":"2","title":"B","shortDescription":"B_Short_Description","longDescription":"B_Long_Descripton","image":"","companyName":"","companyUrl":"","finance":{"donatedSoFar":100,"donationGoals":1000},"tags":["keywords"]},{"id":"3","title":"C","shortDescription":"C_Short_Description","longDescription":"C_long_Description","image":"","companyName":"C_Company_Name","companyUrl":"","finance":{"donatedSoFar":1,"donationGoals":10},"tags":["keywords"]},{"id":"4","title":"D","shortDescription":"D_Short_Description","longDescription":"D_long_Description","image":"","companyName":"D_Company_Name","companyUrl":"","finance":{"donatedSoFar":108,"donationGoals":1000},"tags":["keywords"]},{"id":"5","title":"E","shortDescription":"E_Short_Description","longDescription":"E_long_Description","image":"","companyName":"E_Company_Name","companyUrl":"","finance":{"donatedSoFar":2000,"donationGoals":50000},"tags":["keywords"]},{"id":"6","title":"F","shortDescription":"F_Short_Description","longDescription":"F_long_Description","image":"","companyName":"F_Company_Name","companyUrl":"","finance":{"donatedSoFar":600,"donationGoals":9000},"tags":["keywords"]},{"id":"7","title":"G","shortDescription":"F_Short_Description","longDescription":"F_long_Description","image":"","companyName":"F_Company_Name","companyUrl":"","finance":{"donatedSoFar":300,"donationGoals":3000},"tags":["keywords"]},{"id":"8","title":"H","shortDescription":"F_Short_Description","longDescription":"F_long_Description","image":"","companyName":"F_Company_Name","companyUrl":"","finance":{"donatedSoFar":405,"donationGoals":6000},"tags":["keywords"]},{"id":"9","title":"I","shortDescription":"F_Short_Description","longDescription":"F_long_Description","image":"","companyName":"F_Company_Name","companyUrl":"","finance":{"donatedSoFar":700,"donationGoals":7000},"tags":["keywords"]}]')},69:function(e,a,t){e.exports=t(107)},74:function(e,a,t){},80:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.f33659b4.chunk.js.map