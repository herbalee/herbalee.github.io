(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{61:function(e,a,t){e.exports=t(96)},66:function(e,a,t){},69:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=(t(66),t(10)),o=t(11),m=t(13),i=t(12),u=t(38),d=t(52),h=t.n(d),p=(t(69),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description),t=(this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Foodin'")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"FAQs")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("h3",null,a),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},t))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),E=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelvdatae columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2019 dextIn"),r.a.createElement("li",null,"Design by ",r.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),g=t(128),f=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,l=this.props.data.address.city,s=this.props.data.address.state,c=this.props.data.address.zip,o=this.props.data.phone,m=this.props.data.email,i=this.props.data.resumedownload;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:a,alt:"dextIn",style:{height:"300%",width:"300%"}})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Us"),r.a.createElement(g.a,{variant:"h5",align:"left",color:"textPrimary",paragraph:!0},t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns address"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement(g.a,{variant:"h5",align:"left",paragraph:!0},r.a.createElement("span",null,e),r.a.createElement("br",null)),r.a.createElement("a",{href:"https://www.google.com/maps/place/A-26,+Pushpanjali+Enclave,+Pitam+Pura,+Delhi,+110034,+India/@28.6953781,77.1091473,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03faf6f076bd:0xa29b6ce97e05a5ef!8m2!3d28.6953734!4d77.1113413",className:"button"},r.a.createElement("span",null,n,r.a.createElement("br",null),l," ",s,", ",c),r.a.createElement("br",null)),r.a.createElement("a",{href:"https://www.google.com/maps/place/Vihan+Motor/@29.4499169,77.7246827,17z/data=!3m1!4b1!4m5!3m4!1s0x390c1b20a0ea00eb:0x288732dcd9a0662e!8m2!3d29.4499122!4d77.7268767",className:"button"},r.a.createElement("span",null,"276, Phase 1, Surendra Nagar",r.a.createElement("br",null),"Jansath road, Muzaffarnagar, 251001"),r.a.createElement("br",null)),r.a.createElement(g.a,{variant:"h5",align:"left",paragraph:!0},r.a.createElement("span",null,o),r.a.createElement("br",null),r.a.createElement("span",null,m))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:i,className:"button",download:"Foodin"},r.a.createElement("i",{className:"fa fa-download"}),"Download Brochure")))))))}}]),t}(n.Component),b=t(134),v=t(135),N=t(137),y=t(136),w=t(131),x=t(133),k=t(130),j=t(132),C=Object(k.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function S(){var e=C();return r.a.createElement("section",{id:"resume"},r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(j.a,{maxWidth:"sm"},r.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Foodin'"),r.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"A specialized cooking system which can sustain all the benefits of conventionally cooked home food with less effort, time and hassles."),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(x.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(x.a,{item:!0},r.a.createElement(b.a,{variant:"contained",color:"primary"},r.a.createElement("a",{href:"infographicFoodin.pdf",download:"Foodin"},"Download Brochure"))),r.a.createElement(x.a,{item:!0},r.a.createElement(b.a,{variant:"outlined",color:"primary"},r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"FAQs"))))))),r.a.createElement(j.a,{className:e.cardGrid},r.a.createElement(x.a,{container:!0,spacing:1},r.a.createElement(x.a,{container:!0,item:!0,xs:12,spacing:3},r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(v.a,{className:e.card},r.a.createElement(y.a,{className:e.cardMedia,image:"images/chooseRecipe.jpg",title:"Choose Recipe"}),r.a.createElement(N.a,{className:e.cardContent},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Choose Recipe"),r.a.createElement(g.a,null,"Use our app to choose which recipe you would like to follow.")))),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(v.a,{className:e.card},r.a.createElement(y.a,{className:e.cardMedia,image:"images/ingredients.jpg",title:"Load Ingredients"}),r.a.createElement(N.a,{className:e.cardContent},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Load Ingredients"),r.a.createElement(g.a,null,"Load ingredients shown on the app into their respective containers.")))),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(v.a,{className:e.card},r.a.createElement(y.a,{className:e.cardMedia,image:"images/startButton.jpg",title:"Press Start"}),r.a.createElement(N.a,{className:e.cardContent},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Press Start"),r.a.createElement(g.a,null,"Foodin' will start preparing your dish as soon as you press the start button!"))))))))))}var O=t(54),F=t(55),D=t.n(F),B=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.setState({sendingMessage:!0}),n.sendMessage()},n.handleFormToggle=function(){n.setState((function(e){return{showForm:!e.showForm}}))},n.handleReturnButton=function(){n.setState({showForm:!1,messageSent:!1,messageError:!1})},n.sendMessage=function(){var e=new FormData;e.append("entry.839337160",n.state.message),e.append("entry.979315351",n.state.email),D.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/5/d/e/1FAIpQLSd30RQDISVmDA5pzooQ26HzX6wfyylhXKLZrkJtR2u06EkAlA/formResponse",e).then((function(){n.setState({messageSent:!0,sendingMessage:!1,message:"",email:""})})).catch((function(){n.setState({messageError:!0,sendingMessage:!1})}))},n.returnButton=function(){return r.a.createElement("button",{id:"return-button",style:{margin:"auto",display:"block"},className:"btn btn-default btn-xs",onClick:n.handleReturnButton},"Return")},n.state={message:"",email:"",showForm:!1,sendingMessage:!1,messageSent:!1,messageError:!1},n}return Object(o.a)(t,[{key:"render",value:function(){return this.state.sendingMessage?r.a.createElement("div",null,r.a.createElement("h4",{align:"center"},"Sending...")):this.state.messageSent?r.a.createElement("section",{id:"contact"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"success-message"},r.a.createElement("h4",{align:"center"},"Sent! We will respond asap")),this.returnButton())):this.state.messageError?r.a.createElement("section",{id:"contact"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error-message"},r.a.createElement("h4",{align:"center"},"Sorry, your message was not sent. Contact us at: foodin.dexterUs@gmail.com")),this.returnButton())):!1===this.state.showForm?r.a.createElement("section",{id:"contact"},r.a.createElement("button",{id:"contact-button",className:"btn btn-sm",style:{margin:"auto",display:"block"},onClick:this.handleFormToggle},"Contact")):r.a.createElement("section",{id:"contact"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"email",className:"col-sm-2 col-form-label"},"Email:"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("input",{type:"email",name:"email",id:"email",className:"form-control",value:this.state.email,onChange:this.handleChange,required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"message",className:"col-sm-2 col-form-label"},"Message:"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("textarea",{id:"message",name:"message",className:"form-control",required:!0,value:this.state.message,onChange:this.handleChange,rows:"6"}))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",id:"cancel-button",className:"btn btn-default btn-sm btn-action",style:{margin:"auto",display:"block"},onClick:this.handleFormToggle},"Cancel"),r.a.createElement("button",{type:"submit",style:{margin:"auto",display:"block"},className:"btn btn-sm btn-default btn-action"},"Submit"))))))}}]),t}(n.Component),I=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return r.a.createElement("li",{key:e.user},r.a.createElement("blockquote",null,r.a.createElement("p",null,e.text),r.a.createElement("cite",null,e.user)))}));return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component),M=t(139),A=t(140),P=t(138),R=t(29),T=t.n(R),z=Object(k.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},expandedPanel:{backgroundColor:e.palette.primary.main}}}));function Q(){var e=z();return r.a.createElement("section",{id:"portfolio"},r.a.createElement(g.a,{component:"h1",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0},"FAQs"),r.a.createElement("div",{className:e.root},r.a.createElement(M.a,null,r.a.createElement(A.a,{expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",classes:{expanded:e.expandedPanel}},r.a.createElement(g.a,{variant:"h4"},"What all dishes can the product cook?")),r.a.createElement(P.a,null,r.a.createElement(g.a,{variant:"h5"},"Foodin' can cook almost all types of curries."))),r.a.createElement(M.a,null,r.a.createElement(A.a,{expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{expanded:e.expandedPanel}},r.a.createElement(g.a,{variant:"h4"},"Is the product food safe?")),r.a.createElement(P.a,null,r.a.createElement(g.a,{variant:"h5"},"All the materials used in foodin' are food safe."))),r.a.createElement(M.a,null,r.a.createElement(A.a,{expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{expanded:e.expandedPanel}},r.a.createElement(g.a,{variant:"h4"},"Where can I buy the product?")),r.a.createElement(P.a,null,r.a.createElement(g.a,{variant:"h5"},"You can book the product on our website or via email. You can also reach out to us at our office or call us."))),r.a.createElement(M.a,null,r.a.createElement(A.a,{expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{expanded:e.expandedPanel}},r.a.createElement(g.a,{variant:"h4"},"How big is foodin'?")),r.a.createElement(P.a,null,r.a.createElement(g.a,{variant:"h5"},"It is the size of your microwave and can easily fit on the kitchen counter.")))))}var W=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(S,{data:this.state.resumeData.resume}),r.a.createElement(Q,{data:this.state.resumeData.portfolio}),r.a.createElement(I,{data:this.state.resumeData.testimonials}),r.a.createElement(B,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component);s.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.9cd93cbf.chunk.js.map