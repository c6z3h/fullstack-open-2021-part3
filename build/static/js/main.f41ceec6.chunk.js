(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),r=t(16),a=t.n(r),i=t(3),u=t(0),s=function(e){var n=e.persons,t=e.deletePerson;return console.log("persons",n),Object(u.jsx)("div",{children:Object(u.jsxs)("li",{className:"note",children:[n.name," ",n.number,Object(u.jsx)("button",{onClick:t,children:"delete"})]},n.id)})},d=function(e){var n=e.onChange,t=e.value;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{onChange:n,value:t})]})},l=function(e){var n=e.addPerson,t=e.data;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name ",Object(u.jsx)("input",{value:t.newName,onChange:t.handleNameChange}),Object(u.jsx)("br",{}),"number: ",Object(u.jsx)("input",{value:t.newNumber,onChange:t.handleNumberChange})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.message;return""===n?null:Object(u.jsx)("div",{className:"notif",children:n})},b=t(4),h=t.n(b),f="/api/persons",m=function(){return h.a.get(f).then((function(e){return e.data}))},O=m,x=function(e){return h.a.post(f,e).then((function(e){return e.data}))},p=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){h.a.delete("".concat(f,"/").concat(e));return m()},g=(t(40),function(){return Object(u.jsx)("div",{style:{color:"blue",background:"gray",fontStyle:"italic",fontSize:25},children:Object(u.jsxs)("em",{children:["Phonebook by ",Object(u.jsx)("a",{href:"https://github.com/c6z3h",children:"c6z3h"})]})})}),w=function(){Object(c.useEffect)((function(){O().then((function(e){console.log("this is allPersons: ".concat(e)),o(e)}))}),[]);var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),b=a[0],h=a[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),w=m[0],C=m[1],N=Object(c.useState)(""),k=Object(i.a)(N,2),y=k[0],S=k[1],P=Object(c.useState)(""),L=Object(i.a)(P,2),z=L[0],M=L[1],T=y?t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):t,A={newName:b,newNumber:w,handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return C(e.target.value)}},D=function(e){var n=t.filter((function(n){return n.id===e}));console.log(n),window.confirm("Delete ".concat(n[0].name," ?"))&&v(e).then((function(e){o(e)}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{message:z}),Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(d,{onChange:function(e){return S(e.target.value)},value:y}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(l,{addPerson:function(e){e.preventDefault();var n={name:b,number:w},c=t.map((function(e){return e.name.toLowerCase()}));if(console.log("personsArray",c),console.log("${newName}","".concat(b)),c.includes("".concat(b).toLowerCase())){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var r=t.filter((function(e){return e.name==="".concat(b)}));console.log("updateMan is",r[0]),console.log("updateMan.id is",r[0].id),p(r[0].id,n).catch((function(e){M("Information of '".concat(b,"' has already been removed from server")),setTimeout((function(){M("")}),5e3),o(t.filter((function(e){return e.id!==r[0].id})))})).then((function(e){o(t.map((function(n){return n.id!==r[0].id?n:e})))}))}M("Updated ".concat(b)),setTimeout((function(){M("")}),5e3)}else x(n).then((function(e){o(t.concat(e)),M("Added ".concat(b)),setTimeout((function(){M("")}),5e3)}));h(""),C("")},data:A}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("div",{children:T.map((function(e){return Object(u.jsx)(s,{persons:e,deletePerson:function(){return D(e.id)}})}))}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(g,{})]})};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f41ceec6.chunk.js.map