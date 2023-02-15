(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{945:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return n(9180)}])},1800:function(e,t,n){"use strict";n.d(t,{V:function(){return a},l:function(){return s}});let s=e=>{let{first_name:t,contact:n,pwd:s,email:a}=e,l={};return t&&""!==t?t.length>30?l.first_name="name is too long!":t.length<5&&(l.first_name="name is too short!"):l.first_name="cannot be blank!",r(n)&&""!==r(n)||(l.contact="Check Your Phone Number!"),i(s)&&""!==i(s)||(l.pwd="Password Must contain Alphabets and Numbers!"),o(a)&&""!==o(a)||(l.email="Enter Validated Email"),l},a=e=>{let{pwd:t,email:n}=e,s={};return i(t)&&""!==i(t)||(s.pwd="Password Must contain 8 letters (Alphabets and Numbers)!"),o(n)&&""!==o(n)||(s.email="Enter Validated Email"),s},r=e=>{if(void 0!==e)return!!RegExp(/^[0-9\b]+$/).test(e)&&10==e.length},o=e=>{if(void 0!==e)return!!RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(e)},i=e=>{if(void 0!==e)return!!RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/).test(e)}},9180:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var s=n(5893);n(9008);var a=n(1502),r=n.n(a);n(7814);var o=n(682),i=n(4266),l=n(5005),c=n(1664),d=n.n(c),u=n(4119),m=n(1555),p=n(1573),h=n(7826),f=n(1800),g=n(7294),x=n(1163),b=n(2920),j=n(6968),N=n(8126),v=n(9012),w=n(723);function Z(){let e=(0,g.useRef)(!1),t=(0,g.useContext)(h.V),{isAuthenticated:n}=t,[a,c]=(0,g.useState)(!1),Z=(0,x.useRouter)(),[_,y]=(0,g.useState)(!1),[C,E]=(0,g.useState)({}),[P,k]=(0,g.useState)(""),[S,$]=(0,g.useState)({first_name:"",email:"",pwd:"",contact:""}),A=e=>{let{name:t,value:n}=e.target;$({...S,[t]:n}),C[t]&&E({...C,[t]:null})},R=(0,g.useRef)(null);(0,g.useEffect)(()=>()=>{clearTimeout(R)},[]);let I=()=>{$({username:"",password:"",role:""})},O=async n=>{n.currentTarget,n.preventDefault(),n.stopPropagation();let s=(0,f.l)(S);Object.keys(s).length>0&&(E(s),y(!0)),p.Z.login(S).then(n=>{let{isAuthenticated:s,user:a,token:r}=n;s?(c(!0),t.setUser(a),t.setIsAuthenticated(s),localStorage.setItem("token",r),e.current.disabled=!0,I(),b.Am.success("Successfully Login!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),Z.push("/admin/Dashboard")):(c(!1),setInterval(()=>{try{e.current.disabled=!1}catch(t){clearInterval()}},2e3),b.Am.error("Check your email and password",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}))})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{}),(0,s.jsx)("main",{className:r().main,children:(0,s.jsxs)("div",{className:"".concat(r().body_wrap),children:[(0,s.jsx)(N.Z,{}),(0,s.jsx)("div",{className:r().container,children:(0,s.jsxs)("div",{className:r().Signup,children:[(0,s.jsxs)(o.Z,{className:"".concat(r().formContainer," d-flex justify-content-center"),children:[(0,s.jsx)("p",{className:"".concat(r().primary_color," h2"),children:"SIGN UP"}),(0,s.jsxs)(i.Z,{noValidate:!0,validated:_,children:[(0,s.jsxs)(i.Z.Group,{className:"d-flex flex-column justify-content-center",controlId:"formName",children:[(0,s.jsxs)(u.Z,{label:"Phone Number",children:[(0,s.jsx)(i.Z.Control,{className:r().SignupInputs,type:"tel",name:"contact",onChange:A,required:!0,pattern:"^[0-9]{10}$"}),(0,s.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Enter Valid Phone Number"})]}),(0,s.jsxs)(u.Z,{className:"mt-2",label:"Password",children:[(0,s.jsx)(i.Z.Control,{className:r().SignupInputs,name:"pwd",type:"password",onChange:A,as:"input",pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{10,}$",required:!0}),(0,s.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please Enter Valid Password"})]})]}),(0,s.jsxs)(m.Z,{md:!0,className:r().FormButtons,children:[(0,s.jsx)(l.Z,{className:"".concat(r().button," ").concat(r().button_primary," ").concat(r().SignupButton),onClick:O,children:"Login"}),(0,s.jsx)(d(),{href:"/Signup",className:"".concat(r().button," ").concat(r().button_primary," ").concat(r().SignupButton),ref:e,children:"Register"})]}),(0,s.jsx)(d(),{href:"/ForgotPassword",children:"Forgot Password?"})]}),a?(0,s.jsx)(j.Z,{animation:"border",variant:"warning"}):null]}),(0,s.jsx)("div",{className:"animje-element",children:(0,s.jsx)("img",{width:400,height:400,className:r().img,src:"/svgs/fingerprint.svg",alt:""})})]})}),(0,s.jsx)(w.Z,{})]})})]})}},682:function(e,t,n){"use strict";var s=n(4184),a=n.n(s),r=n(7294),o=n(6792),i=n(5893);let l=r.forwardRef(({bsPrefix:e,fluid:t,as:n="div",className:s,...r},l)=>{let c=(0,o.vE)(e,"container"),d="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:l,...r,className:a()(s,t?`${c}${d}`:c)})});l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},6968:function(e,t,n){"use strict";var s=n(4184),a=n.n(s),r=n(7294),o=n(6792),i=n(5893);let l=r.forwardRef(({bsPrefix:e,variant:t,animation:n="border",size:s,as:r="div",className:l,...c},d)=>{e=(0,o.vE)(e,"spinner");let u=`${e}-${n}`;return(0,i.jsx)(r,{ref:d,...c,className:a()(l,u,s&&`${u}-${s}`,t&&`text-${t}`)})});l.displayName="Spinner",t.Z=l}},function(e){e.O(0,[976,266,596,154,774,888,179],function(){return e(e.s=945)}),_N_E=e.O()}]);