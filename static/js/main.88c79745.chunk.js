(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(20),s=n.n(l),r=(n(30),n(0)),o=function(){return Object(r.jsx)("nav",{class:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(r.jsxs)("div",{class:"container-fluid",children:[Object(r.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(r.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{class:"navbar-nav",children:[Object(r.jsx)("a",{className:"nav-link",href:"/myreact",children:"Home"}),Object(r.jsx)("a",{className:"nav-link",href:"/employee",children:"Employee"}),Object(r.jsx)("a",{className:"nav-link",href:"/add",children:"Add Employee"}),Object(r.jsx)("a",{className:"nav-link",href:"/edit",children:"Edit Employee"}),Object(r.jsx)("a",{className:"nav-link",href:"/delete",children:"Delete Employee"}),Object(r.jsx)("a",{className:"nav-link disabled",href:"/",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})},i=(n(6),n(21)),d=n(22),j=n(25),b=n(24),u=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{class:"btn btn-secondary btn-lg",onClick:this.addCounter,children:"Hello World!"}),Object(r.jsxs)("p",{children:[" Count = ",this.state.count," "]})]})}}]),n}(a.a.Component);var h=function(){return Object(r.jsx)("h1",{id:"Header",children:" \u2764\ufe0f Hello MAMIDI \u2764\ufe0f"})},m=n(3),O=n(23),x=n.n(O).a.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}),p=function(){return x.get("/hello")},f=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){p().then((function(e){a(e.data)})).catch((function(e){console.log("erroragik")}))})),n},g=function(){return Object(r.jsx)("div",{className:"Home",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:"https://i.imgur.com/hOxMhcF.png",className:"App-logo",alt:"logo"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("p",{children:f()}),Object(r.jsx)(h,{}),Object(r.jsxs)("figure",{class:"text-center",children:[Object(r.jsx)("blockquote",{class:"blockquote",children:Object(r.jsxs)("p",{children:["Anong ",Object(r.jsx)("b",{children:Object(r.jsx)("i",{children:"PAK"})})," ang mataas tumalon? Edi ",Object(r.jsx)("b",{children:Object(r.jsx)("i",{children:"TIPAKLONG!"})})]})}),Object(r.jsx)("figcaption",{class:"blockquote-footer",children:'Manny "Unipak" Pacquiao'})]})]}),Object(r.jsx)(u,{}),Object(r.jsx)("a",{className:"App-link",href:"https://www.lazada.com.ph/unipak-121004675/",target:"_blank",rel:"noopener noreferrer",children:"Buy Uni-Pak Sardines"})]})})},v=n(9),y=n(2),N=function(){return Object(r.jsx)("div",{id:"notfound",children:Object(r.jsxs)("figure",{class:"text-center",children:[Object(r.jsx)("blockquote",{class:"blockquote",id:"notfoundtext",children:"\ud83d\udc94404"}),Object(r.jsx)("figcaption",{class:"blockquote-footer",children:"Di ko pa rin mahanap kung saan ako nagkulang."})]})})},k=function(){return x.get("/employees")},E=function(e){return x.post("/employees",e)},A=function(e){return x.put("/employees",e)},C=function(e){return x.get("/employees/".concat(e))},S=function(e){return x.delete("/employees/".concat(e))},w=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){l()}));var l=function(){k().then((function(e){a(e.data)})).catch((function(){console.log("error agik")}))};return Object(r.jsx)("div",{className:"all",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{id:"Header",children:"List of Employees"}),Object(r.jsx)("div",{children:Object(r.jsxs)("table",{className:"table table-hover table-bordered table-light table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"table-dark",id:"tableHeads",children:[Object(r.jsx)("td",{children:"Name"}),Object(r.jsx)("td",{children:"Location"}),Object(r.jsx)("td",{children:"Department"}),Object(r.jsx)("td",{children:"Actions"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){return Object(r.jsxs)("tr",{className:"contents",children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.department}),Object(r.jsx)("td",{children:e.location}),Object(r.jsx)("td",{id:"tdbut",children:Object(r.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-center ",id:"buttonEmp",children:[Object(r.jsx)(v.b,{className:"btn btn-success",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(t){return n=e.employeeId,void S(n).then((function(e){console.log("Successfully deleted huhu."),l()})).catch((function(e){console.error("Error lods!",e)}));var n},children:"Delete"})]})})]},e.employeeId)}))})]})})]})})},I=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(""),s=Object(m.a)(l,2),o=s[0],i=s[1],d=Object(c.useState)(""),j=Object(m.a)(d,2),b=j[0],u=j[1],h=Object(y.f)(),O=Object(y.g)().employeeId;Object(c.useEffect)((function(){O&&C(O).then((function(e){a(e.data.name),i(e.data.location),u(e.data.department)})).catch((function(e){console.log("Something went wrong.")}))}),[]);return Object(r.jsx)("div",{id:"AddNew",children:Object(r.jsxs)("div",{className:"container mb-2",children:[Object(r.jsx)("h3",{id:"addHeader",children:"Add New Employee"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"addName",className:"form-label",children:"Name"}),Object(r.jsx)("input",{type:"text",placeholder:"Enter name of Employee",value:n,className:"form-control",id:"addName","aria-describedby":"nameHelp",onChange:function(e){return a(e.target.value)}})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"addLocation",className:"form-label",children:"Location"}),Object(r.jsx)("input",{type:"text",value:o,placeholder:"Enter location of Employee",className:"form-control",id:"addLocation",onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"addDepartment",className:"form-label",children:"Department"}),Object(r.jsx)("input",{type:"text",placeholder:"Enter department of Employee",value:b,className:"form-control",id:"addDepartment",onChange:function(e){return u(e.target.value)}})]}),Object(r.jsx)("a",{type:"Submit",className:"btn btn-primary",onClick:function(e){return function(e){if(e.preventDefault(),O){var t={employeeId:O,name:n,location:o,department:b};console.log(t),A(t).then((function(e){console.log("Updated"+e.data,e.data),h("/employee")})).catch((function(e){console.log("Something went wrong!")}))}else E({name:n,location:o,department:b}).then((function(e){console.log("Added!"+O,e.data),h("/employee")})).catch((function(e){console.log("Something went wrong!")}))}(e)},children:"Submit"})]})]})})},D=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{children:Object(r.jsxs)(y.c,{children:[Object(r.jsx)(y.a,{exact:!0,path:"/myreact",element:Object(r.jsx)(g,{})}),Object(r.jsx)(y.a,{exact:!0,path:"/employee",element:Object(r.jsx)(w,{})}),Object(r.jsx)(y.a,{exact:!0,path:"/add",element:Object(r.jsx)(I,{})}),Object(r.jsx)(y.a,{exact:!0,path:"/edit/:employeeId",element:Object(r.jsx)(I,{})}),Object(r.jsx)(y.a,{exact:!0,path:"*",element:Object(r.jsx)(N,{})})]})})})};var H=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(D,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),l(e),s(e)}))};n(50);s.a.render(Object(r.jsx)(H,{}),document.getElementById("root")),L()},6:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.88c79745.chunk.js.map