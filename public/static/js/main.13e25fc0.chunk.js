(this["webpackJsonppet-log-client"]=this["webpackJsonppet-log-client"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},116:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(35),r=a.n(i),s=(a(108),a(7)),l=a(13),o=a(15),u=(a(109),"/"),b="/signup",j="/login",d="/profile",m="/recipes",p="/recipes/add",h="/services",O="/calendar",x="/logs",f="/500",g=[d,"/profile/:petName","/photos",m,"/recipes/:recipeTitle",p,h,O,x],v="pet-log",_=v[0].toUpperCase()+v.slice(1).toLowerCase(),N=a.p+"static/media/logo.a7ac1d95.png",k=a(195),S=a(91),y=a(191),C=a(88),w=a.n(C),M=a(1),I=function(e){var t=e.user,a=e.handleLogout,n=Object(l.f)().pathname,i=c.a.useState(null),r=Object(s.a)(i,2),p=r[0],f=r[1],v=Boolean(p),C=function(){f(null)};return g.includes(n)?Object(M.jsxs)("nav",{className:"navbar__container",children:[Object(M.jsxs)("div",{children:[Object(M.jsx)(k.a,{"aria-label":"more",id:"long-button","aria-controls":"long-menu","aria-expanded":v?"true":void 0,"aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},children:Object(M.jsx)(w.a,{sx:{color:"white"}})}),Object(M.jsxs)(S.a,{id:"basic-menu",anchorEl:p,open:v,onClose:C,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(M.jsx)(o.b,{to:u,className:"navbar__link",children:Object(M.jsx)(y.a,{onClick:C,sx:{fontSize:"0.9rem"},children:"Homepage"})}),Object(M.jsx)(o.b,{to:m,className:"navbar__link",children:Object(M.jsx)(y.a,{onClick:C,sx:{fontSize:"0.9rem"},children:"Recipes"})}),Object(M.jsx)(o.b,{to:h,className:"navbar__link",children:Object(M.jsx)(y.a,{onClick:C,sx:{fontSize:"0.9rem"},children:"Services"})}),t&&Object(M.jsxs)(M.Fragment,{children:[" ",Object(M.jsx)(o.b,{to:x,className:"navbar__link",children:Object(M.jsx)(y.a,{onClick:C,sx:{fontSize:"0.9rem"},children:"Logs"})}),Object(M.jsx)(o.b,{to:O,className:"navbar__link",children:Object(M.jsx)(y.a,{onClick:C,sx:{fontSize:"0.9rem"},children:"Calendar"})}),Object(M.jsx)("hr",{}),Object(M.jsx)(y.a,{onClick:a,sx:{fontSize:"0.9rem"},children:"Logout"})]})]})]}),Object(M.jsx)(o.b,{to:u,className:"navbar__link-logo",children:Object(M.jsx)("img",{src:N,alt:_,className:"navbar__logo"})}),Object(M.jsx)("div",{className:"nav__authLinks",children:t?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(o.b,{to:d,children:Object(M.jsx)("img",{src:t.profilePic,alt:t.firstName,className:"navbar__profile-pic"})})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(o.b,{to:b,className:"authLink",children:"Signup"}),Object(M.jsx)(o.b,{to:j,className:"authLink",children:"Log In"})]})})]}):null},P=(a(116),a.p+"static/media/pets1.1dcc5c18.jpeg");var z=function(){return Object(M.jsxs)("div",{style:{background:"linear-gradient(0deg, rgba(247, 99, 51, 0.4), rgba(247, 99, 51, 0.4)), url(".concat(P,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:"public__container",children:[Object(M.jsxs)(o.b,{to:j,className:"homepage__link_login",children:[" ",Object(M.jsx)("button",{type:"button",className:"btn btn-orange homepage__login-btn",children:"Login"})]}),Object(M.jsx)("img",{src:N,alt:_,className:"homepage__logo"}),Object(M.jsxs)("div",{className:"homepage__description",children:[Object(M.jsx)("h1",{className:"homepage__description__title",children:"Pet Log"}),Object(M.jsx)("h3",{className:"homepage__description__slogan",children:"your pet's diary"})]}),Object(M.jsxs)(o.b,{to:b,children:[" ",Object(M.jsx)("button",{type:"button",className:"btn btn-light homepage__signup-btn",children:"Sign Up"})]}),Object(M.jsx)("div",{className:"homepage__card",children:Object(M.jsx)(o.b,{to:m,children:"Recipes"})}),Object(M.jsx)("div",{className:"homepage__card",children:Object(M.jsx)(o.b,{to:h,children:"Services"})})]})},L=a(4),T=a(23),R=a(40),U=a.n(R),E=U.a.create({baseURL:"".concat("https://pet-log-app.herokuapp.com","/auth"),withCredentials:!0});var F=function(e){var t=e.setUser,a=Object(n.useState)({email:"inesherminio@gmail.com",password:"MacZazu21"}),c=Object(s.a)(a,2),i=c[0],r=c[1],j=i.email,d=i.password,m=Object(n.useState)(null),p=Object(s.a)(m,2),h=p[0],O=p[1],x=Object(l.g)();function f(e){var t=e.target,a=t.name,n=t.value;return r(Object(T.a)(Object(T.a)({},i),{},Object(L.a)({},a,n)))}return Object(M.jsxs)("div",{style:{background:"linear-gradient(0deg, rgba(247, 99, 51, 0.4), rgba(247, 99, 51, 0.4)), url(".concat(P,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh"},className:"public__container login__container",children:[Object(M.jsx)(o.b,{to:"/",className:"auth__link",children:Object(M.jsx)("img",{src:N,alt:_,className:"auth__logo"})}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return E.post("/login",e)}({email:j,password:d}).then((function(e){t(e.data.user,!0),x(u)})).catch((function(e){return O(e.response.data.errorMessage)}))},className:"auth__form",children:[Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{id:"input-email",type:"email",name:"email",value:j,onChange:f,required:!0,className:"form-control form-public",placeholder:"Email"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{id:"input-password",type:"password",name:"password",placeholder:"Password",value:d,className:"form-control form-public",onChange:f,required:!0})}),h&&Object(M.jsx)("div",{className:"error-block",children:Object(M.jsx)("p",{className:"auth__error",children:Object(M.jsx)("span",{children:h})})}),Object(M.jsx)("button",{className:"button__submit btn-orange btn auth__submit-btn",type:"submit",children:"Submit"})]}),Object(M.jsx)(o.b,{to:b,className:"login__signup-link",children:Object(M.jsx)("p",{className:"login__signup-redirect",children:"Create account"})})]})},D=U.a.create({baseURL:"".concat("https://pet-log-app.herokuapp.com"),withCredentials:!0});function H(e){return D.post("/upload",e)}a(135);var A=function(){return Object(M.jsx)("div",{className:"wrapper",children:Object(M.jsxs)("div",{className:"spinner",children:[Object(M.jsx)("div",{className:"bounce1"}),Object(M.jsx)("div",{className:"bounce2"}),Object(M.jsx)("div",{className:"bounce3"})]})})},B=a.p+"static/media/avatar.c8b4a340.png";var q=function(e){var t=e.setUser,a=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",profilePic:""}),c=Object(s.a)(a,2),i=c[0],r=c[1],b=i.firstName,j=i.lastName,d=i.email,m=i.password,p=i.profilePic,h=Object(n.useState)(null),O=Object(s.a)(h,2),x=O[0],f=O[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),k=v[0],S=v[1],y=Object(l.g)();function C(e){var t=e.target,a=t.name,n=t.value;return r(Object(T.a)(Object(T.a)({},i),{},Object(L.a)({},a,n)))}return Object(M.jsxs)("div",{style:{background:"linear-gradient(0deg, rgba(247, 99, 51, 0.4), rgba(247, 99, 51, 0.4)), url(".concat(P,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh"},className:"public__container",children:[Object(M.jsx)(o.b,{to:u,className:"auth__link",children:Object(M.jsx)("img",{src:N,alt:_,className:"auth__logo"})}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return E.post("/signup",e)}({firstName:b,lastName:j,email:d,password:m,profilePic:p||B}).then((function(e){t(e.data.user,!0),y(u)})).catch((function(e){return f(e.response.data.errorMessage)}))},className:"auth__form",children:[Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{id:"input-first-name",type:"text",name:"firstName",placeholder:"First Name",value:b,onChange:C,className:"form-control form-public"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{id:"input-last-name",type:"text",name:"lastName",placeholder:"Last Name",value:j,onChange:C,className:"form-control form-public"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{id:"input-email",type:"text",name:"email",placeholder:"Email",value:d,onChange:C,className:"form-control form-public"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{id:"input-password",type:"password",name:"password",placeholder:"Password",value:m,onChange:C,className:"form-control form-public"})}),Object(M.jsx)("input",{id:"input-profile-pic",type:"file",name:"profilePic",onChange:function(e){S(!0);var t=new FormData;console.log(e.target.files),t.append("fileUrl",e.target.files[0]),H(t).then((function(e){r(Object(T.a)(Object(T.a)({},i),{},{profilePic:e.data.filePath})),S(!1)}))},className:"form-control form-public form-control-sm"}),x&&Object(M.jsx)("div",{className:"error-block",children:Object(M.jsx)("p",{className:"auth__error",children:Object(M.jsx)("span",{children:x})})}),Object(M.jsx)("button",{className:"button__submit btn-orange btn auth__submit-btn",type:"submit",disabled:k,children:"Submit"}),k&&Object(M.jsx)(A,{})]})]})},J=a(189),W=a(89),K=a.n(W),V=a(192),Z=a(188),G=[{root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none",backgroundColor:"rgba(247, 99, 51, 0.2)"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none",backgroundColor:"rgba(247, 99, 51, 0.2)"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none",backgroundColor:"rgba(247, 99, 51, 0.2)"},"& .MuiOutlinedInput-input":{color:"black",fontSize:"0.9rem"},"&:hover .MuiOutlinedInput-input":{color:"black",fontSize:"0.9rem"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"black",fontSize:"0.9rem"},"& .MuiInputLabel-outlined":{color:"black",fontSize:"0.9rem"},"&:hover .MuiInputLabel-outlined":{color:"black",fontSize:"0.9rem"},"& .MuiInputLabel-outlined.Mui-focused":{color:"black",fontSize:"0.9rem"}}},{root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none",backgroundColor:"rgba(255, 255, 255, 0.2)"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none",backgroundColor:"rgba(255, 255, 255, 0.2)"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none",backgroundColor:"rgba(255, 255, 255, 0.2)"},"& .MuiOutlinedInput-input":{color:"white",fontSize:"0.9rem"},"&:hover .MuiOutlinedInput-input":{color:"white",fontSize:"0.9rem"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"white",fontSize:"0.9rem"},"& .MuiInputLabel-outlined":{color:"white",fontSize:"0.9rem"},"&:hover .MuiInputLabel-outlined":{color:"white",fontSize:"0.9rem"},"& .MuiInputLabel-outlined.Mui-focused":{color:"white",fontSize:"0.9rem"}}}],Q=U.a.create({baseURL:"".concat("https://pet-log-app.herokuapp.com","/recipes")});function X(){return Q.get("/")}var Y=a(193),$=(a(136),Object(Z.a)({root:{color:"#f76333"}}));var ee=function(e){var t=e.eachRecipe,a=t.title,n=t.image,c=t.creator,i=c.firstName,r=c.lastName,s=t.rating,l=t.reviews,o=$();return Object(M.jsxs)("div",{className:"card",style:{width:"16rem"},children:[Object(M.jsx)("img",{src:n,alt:a,className:"card-img-top"}),Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsxs)("p",{className:"card-text",children:[i," ",r]}),Object(M.jsx)("h4",{className:"card-title",children:a}),Object(M.jsxs)("div",{className:"card-rating",children:[Object(M.jsx)(Y.a,{className:o.root,defaultValue:s,readOnly:!0,size:"small"}),Object(M.jsx)("span",{className:"card-text card-reviews",children:l.length})]})]})]})};var te=function(e){var t=e.user,a=Object(Z.a)(t?G[1]:G[0])(),c=Object(n.useState)(null),i=Object(s.a)(c,2),r=i[0],u=i[1],b=Object(n.useState)(!0),j=Object(s.a)(b,2),d=j[0],m=j[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),x=O[0],g=O[1];function v(e){m(!0),"all"===e&&X().then((function(e){u(e.data),m(!1)})).catch((function(e){return Object(M.jsx)(l.a,{to:f})})),"fav"===e&&Q.get("/favorite").then((function(e){u(e.data),m(!1)})).catch((function(e){return Object(M.jsx)(l.a,{to:f})}))}return Object(n.useEffect)((function(){X().then((function(e){u(e.data),m(!1)})).catch((function(e){return Object(M.jsx)(l.a,{to:f})}))}),[]),Object(M.jsxs)("div",{className:"recipes__container",children:[Object(M.jsx)(J.a,{id:"outlined",className:a.root,value:x,onChange:function(e){var t=e.target.value;g(t)},onKeyDown:function(e){var t,a=e.target.value;"Enter"===e.key&&(m(!0),(t=a,Q.get("/search?q=".concat(t))).then((function(e){u(e.data),m(!1),g("")})).catch((function(e){return Object(M.jsx)(l.a,{to:f})})))},multiline:!0,style:{width:t?"80%":"90%",marginTop:"4vh"},maxRows:4,InputProps:{startAdornment:Object(M.jsx)(V.a,{position:"start",children:Object(M.jsx)(K.a,{sx:{color:t&&"white"}})})}}),Object(M.jsxs)("div",{className:"recipes__btn-filter-container",children:[Object(M.jsx)("button",{type:"button",onClick:function(){return v("all")},className:t?"btn btn-light btn-filter-recipes":"btn btn-orange btn-filter-recipes",children:"See All"}),t&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("button",{type:"button",onClick:function(){return v("fav")},className:t?"btn btn-light btn-filter-recipes":"btn btn-orange btn-filter-recipes",children:"See Favorite"}),Object(M.jsx)(o.b,{to:p,children:Object(M.jsx)("button",{type:"button",className:"btn btn-light btn-filter-recipes",children:"Add new"})})]})]}),Object(M.jsxs)("div",{className:"recipes__cards",children:[d&&Object(M.jsx)("h4",{children:"Loading..."}),!d&&r.map((function(e){return Object(M.jsx)("div",{children:Object(M.jsx)(ee,{eachRecipe:e})},e._id)}))]})]})},ae=a(90),ne=a.n(ae),ce=[{value:"false",label:"Public"},{value:"true",label:"Private"}];var ie=function(){var e=Object(n.useState)({title:"",statusPrivate:!1,tags:[],image:"",difficulty:"",totalTime:0,prepTime:0,ingredients:"",preparation:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],i=a.title,r=a.statusPrivate,o=a.tags,u=a.image,b=a.difficulty,j=a.totalTime,d=a.prepTime,p=a.ingredients,h=a.preparation,O=Object(n.useState)(null),x=Object(s.a)(O,2),g=x[0],v=(x[1],Object(n.useState)(!1)),_=Object(s.a)(v,2),N=_[0],S=_[1],C=Object(l.g)(),w=Object(Z.a)(G[1])();function I(e){var t=e.target,n=t.name,i=t.value;return c(Object(T.a)(Object(T.a)({},a),{},Object(L.a)({},n,i)))}return Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{className:"add-recipe__title",children:"Create and Share a New Recipe"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return Q.post("/create",e)}({title:i,statusPrivate:r,tags:o,image:u,difficulty:b,totalTime:j,prepTime:d,ingredients:p,preparation:h}).then((function(e){C(m)})).catch((function(e){return Object(M.jsx)(l.a,{to:f})}))},className:"add-recipe__form",children:[Object(M.jsx)(J.a,{type:"text",name:"title",value:i,label:"Title",onChange:I,className:w.root,variant:"outlined",fullWidth:!0,style:{marginBottom:"2vh"}}),Object(M.jsx)("div",{children:Object(M.jsx)(J.a,{select:!0,name:"statusPrivate",value:ce,onChange:I,className:w.root,fullWidth:!0,style:{marginBottom:"2vh"},children:ce.map((function(e){return Object(M.jsx)(y.a,{value:e.value,children:e.label},e.value)}))})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsxs)("select",{class:"form-select",name:"statusPrivate",onChange:I,children:[Object(M.jsx)("option",{selected:!0,value:"false",children:"Public"}),Object(M.jsx)("option",{value:"true",children:"Private"})]})}),Object(M.jsxs)("div",{class:"mb-3",children:[Object(M.jsx)("input",{type:"text",name:"tags",placeholder:"Tags",value:o,onChange:I,className:"form-control add-form"}),Object(M.jsx)(k.a,{children:Object(M.jsx)(ne.a,{})})]}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsxs)("select",{class:"form-select",name:"difficulty",onChange:I,children:[Object(M.jsx)("option",{selected:!0,value:"Easy",children:"Easy"}),Object(M.jsx)("option",{value:"Medium",children:"Medium"}),Object(M.jsx)("option",{value:"Hard",children:"Hard"})]})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{type:"number",name:"totalTime",placeholder:"Total Time",value:j,onChange:I,className:"form-control add-form"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("input",{type:"number",name:"prepTime",placeholder:"Preparation Time",value:d,onChange:I,className:"form-control add-form"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("textarea",{class:"form-control",name:"ingredients",placeholder:"Ingredients",value:p,onChange:I,rows:"3"})}),Object(M.jsx)("div",{class:"mb-3",children:Object(M.jsx)("textarea",{class:"form-control",name:"preparation",placeholder:"Preparation",value:h,onChange:I,rows:"3"})}),Object(M.jsx)("input",{type:"file",name:"image",onChange:function(e){S(!0);var t=new FormData;t.append("fileUrl",e.target.files[0]),H(t).then((function(e){c(Object(T.a)(Object(T.a)({},a),{},{image:e.data.filePath})),S(!1)}))},className:"form-control add-form form-control-sm"}),g&&Object(M.jsx)("div",{className:"error-block",children:Object(M.jsx)("p",{className:"auth__error",children:Object(M.jsx)("span",{children:g})})}),Object(M.jsx)("button",{className:"button__submit btn-orange btn auth__submit-btn",type:"submit",disabled:N,children:"Submit"}),N&&Object(M.jsx)(A,{})]})]})};var re=function(){var e=Object(l.g)(),t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),d=o[0],h=o[1],O=Object(n.useState)(!1),x=Object(s.a)(O,2);function f(e,t){h(t),i(e)}function g(){null===c&&E.get("/loggedin").then((function(e){h(!0),i(e.data.user)})).catch((function(e){return h(!0)}))}return x[0],x[1],Object(n.useEffect)((function(){g()}),[]),Object(M.jsxs)("div",{className:"App",style:{backgroundColor:c?"#ed5d30":"white"},children:[Object(M.jsx)(I,{handleLogout:function(){E.post("/logout").then((function(){f(null,!1),e(u)})).catch((function(e){return console.log(e)}))},user:c,setUser:f}),Object(M.jsxs)(l.d,{children:[Object(M.jsx)(l.b,{exact:!0,path:u,element:Object(M.jsx)(z,{})}),Object(M.jsx)(l.b,{exact:!0,path:b,element:Object(M.jsx)(q,{setUser:f})}),Object(M.jsx)(l.b,{exact:!0,path:j,element:Object(M.jsx)(F,{setUser:f})}),Object(M.jsx)(l.b,{exact:!0,path:m,element:Object(M.jsx)(te,{user:c})}),Object(M.jsx)(l.b,{exact:!0,path:p,element:d?Object(M.jsx)(ie,{user:c}):Object(M.jsx)(l.a,{to:j})})]})]})};a(137);r.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(o.a,{children:Object(M.jsx)(re,{})})}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.13e25fc0.chunk.js.map