"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[633],{8730:function(e,r,s){s(2791);var a=s(9434),n=s(1087),o=s(8872),t=s(7186),i=s(3804),l=s(184);r.Z=function(){var e=(0,a.v9)(t.uo),r=(0,a.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsx)(n.OL,{to:i.Z.home,children:" home"}),(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{}),(0,l.jsx)("button",{onClick:function(){r((0,o.TX)())},children:"LOG OUT"}),(0,l.jsxs)("h4",{children:["authStatus : ","".concat(e," ")]})]})}},3633:function(e,r,s){s.r(r),s.d(r,{default:function(){return f}});var a=s(2791),n=s(1087),o=s(3804),t=s(6591),i=s(5705),l=s(1973),u=s(8872),c=s(9434),d=s(8730),m=s(184),h=function(){var e=(0,c.I0)(),r=(0,i.TA)({initialValues:{email:"",password:""},validationSchema:l.b,onSubmit:function(r){var s=r.email,a=r.password;e((0,u.pH)({email:s,password:a}))}}),s=r.errors,a=r.touched;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{}),(0,m.jsxs)("form",{action:"",className:t.Z.form,onSubmit:r.handleSubmit,children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("br",{}),"email",(0,m.jsx)("p",{className:t.Z.p,children:s.email&&a.email?s.email:null}),(0,m.jsx)("input",{name:"email",type:"email",onChange:r.handleChange,value:r.values.email})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("br",{}),"password",(0,m.jsx)("p",{className:t.Z.p,children:s.password&&a.password?s.password:null}),(0,m.jsx)("input",{name:"password",type:"password",onChange:r.handleChange,value:r.values.password})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{type:"submit",children:"login"})," ",(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(n.OL,{to:o.Z.register,children:(0,m.jsx)("button",{children:"register"})})]})]})},p=s(7186),x=s(5206),j=s(8363),f=function(){var e=(0,c.I0)(),r=(0,c.v9)(p.Hn);return(0,a.useEffect)((function(){"Request failed with status code 403"===r&&(x.Am.warning("Invalid Email or Password",(0,j.K)()),e((0,p.mo)()))}),[r,e]),(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{}),(0,m.jsx)(x.Ix,{})]})}},8363:function(e,r,s){s.d(r,{K:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return{position:"top-right",autoClose:e,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"}}},1973:function(e,r,s){s.d(r,{I:function(){return n},b:function(){return o}});var a=s(2797),n=a.Ry().shape({email:a.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","must be a valid email").required(),password:a.Z_().min(6,"Too Short!").max(12,"TPassword must be 6-12 characters").required(),confirmPassword:a.Z_().oneOf([a.iH("password"),null],"Passwords must match").required(),username:a.Z_().min(1,"Too Short!").max(12,"Too Long!(be at least 12 letters)").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","only letters!").required("Required")}),o=a.Ry().shape({email:a.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","must be a valid email").required(),password:a.Z_().min(6,"Too Short!").max(12,"TPassword must be 6-12 characters").required()})},6591:function(e,r){r.Z={form:"reg_form__3CA5e",p:"reg_p__-sHRM"}}}]);
//# sourceMappingURL=633.52e7c509.chunk.js.map