(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{6316:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/DeviceInfo",function(){return a(7602)}])},1675:function(e,t,a){"use strict";var n=a(8492);t.Z={Add_New_Device:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Add_New_Device?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},Update_Media_Properties:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Update_Media_Properties?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},Delete_Device:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Delete_Device?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},Get_Video_list:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Get_Video_list?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},Fetch_Video_list:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Fetch_Video_list?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},Fetch_Image_list:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Fetch_Image_list?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},Get_Image_list:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Get_Image_list?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),o=await a.json();return o},Delete_From_Bucket:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/Delete_From_Bucket?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),o=await a.json();return o},Verify_Device:async e=>{let t=await fetch("http://".concat(n.Z,":5000/api/Signage/NativeTV/VerifyDevice"),{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),a=await t.json();return a},Purchased_Devices:async()=>{let e=localStorage.getItem("token"),t=await fetch("http://".concat(n.Z,":5000/api/Signage/NativeTV/PurchasedDevices?secret_token=")+e,{method:"get"}),a=await t.json();return a},Invoices:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/NativeTV/fetchUserInvoices?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),o=await a.json();return o}}},4307:function(e,t,a){"use strict";var n=a(8492);t.Z={createOrder:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/NativeTV/createOrder?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)},createOrderForOwnedDevices:async e=>{let t=localStorage.getItem("token"),a=await fetch("http://".concat(n.Z,":5000/api/Signage/NativeTV/createOrderForOwnedDevices?secret_token=")+t,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return 200!==a.status?a.json().then(e=>e):a.json().then(e=>e)}}},7119:function(e,t,a){"use strict";a.d(t,{Y:function(){return o},e:function(){return s}});var n=a(8492);let o=e=>{let{order:t,user:a,key:o}=e,s=localStorage.getItem("token"),r={key:o,amount:t.amount,currency:"INR",name:"Signage Verse",description:"Test Transaction",image:"https://rishabh-arch.github.io/website-assets/Signage/TV/icon.png",order_id:t.id,callback_url:"http://".concat(n.Z,":5000/api/Signage/NativeTV/PaymentVerification?secret_token=")+s,prefill:{name:a.first_name,email:a.email,contact:a.contact},notes:{address:"Razorpay Corporate Office"},theme:{color:"#ffc107"}};new Razorpay(r).open()},s=e=>{let{order:t,user:a,key:o}=e,s=localStorage.getItem("token"),r={key:o,amount:t.amount,currency:"INR",name:"Signage Verse",description:"Test Transaction",image:"https://rishabh-arch.github.io/website-assets/Signage/TV/icon.png",order_id:t.id,callback_url:"http://".concat(n.Z,":5000/api/Signage/NativeTV/PaymentVerificationForOwnedDevices?secret_token=")+s,prefill:{name:a.first_name,email:a.email,contact:a.contact},notes:{address:"Razorpay Corporate Office"},theme:{color:"#ffc107"}};new Razorpay(r).open()}},3945:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var n=a(5893),o=a(7294),s=a(8193),r=a(9534),i=a(5766),c=a.n(i),l=a(4266),d=a(7070),h=a(1675),g=a(7826),_=a(1163),u=a(5005),p=a(2920),m=a(8375);function f(e){let{props:t}=e;function a(e){let t=Math.round((new Date(e)-new Date)/864e5);return t<0?0:t}let i=(0,_.useRouter)(),f=(0,o.useContext)(g.V),{isAuthenticated:v,user:j}=f,[D,y]=(0,o.useState)(""),[x,b]=(0,o.useState)(!1),N=()=>{v&&h.Z.Delete_Device({email:j.email,DeviceID:t[0].DeviceID}).then(e=>{console.log(e.msgError),e.msgError?p.Am.error("Oops! Got an Error",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):(b(!0),i.push("/admin/AddDevice"))}).catch(e=>{console.log(e)})},[S,w]=(0,o.useState)(!1),[k,C]=(0,o.useState)(!1),I=()=>w(!0),O=(0,n.jsxs)(d.Z,{className:c().popover,id:"popover-basic",children:[(0,n.jsx)(d.Z.Header,{as:"h3",children:"More Options"}),(0,n.jsxs)(d.Z.Body,{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)(s.kA6,{onClick:()=>C(!0),className:c().infoLogo}),(0,n.jsx)("div",{children:"Info"})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.YK6,{onClick:I,className:S?c().deleteLogo_null:c().deleteLogo}),(0,n.jsx)("div",{children:"Delete"})]})]})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{className:c().Alert,show:S,variant:"danger",children:[(0,n.jsx)(m.Z.Heading,{children:"Do You Really Want to Delete?"}),(0,n.jsx)("p",{children:"This is a warning that you are about to delete this device. This action cannot be undone."}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,n.jsx)(u.Z,{className:"m-2",onClick:()=>w(!1),variant:"warning",children:"No"}),(0,n.jsx)(u.Z,{className:"m-2",onClick:N,variant:"danger",children:"Yes"})]})]}),(0,n.jsxs)(m.Z,{className:c().infoAlert,show:k,variant:"danger",children:[(0,n.jsx)(m.Z.Heading,{style:{color:"white"},children:"Device Details"}),(0,n.jsx)("p",{className:c().InfoAlertDetails,children:Object.entries(t[0].DeviceInfo).map((e,t)=>"object"==typeof e[1]||null===e[1]||void 0===e[1]||""===e[1]||"array"==typeof e[1]?null:(0,n.jsxs)("div",{className:c().detailsDiv,children:[(0,n.jsxs)("strong",{children:[e[0],": "]}),e[1]]},t))}),(0,n.jsx)("hr",{}),(0,n.jsx)("div",{className:"d-flex justify-content-end ".concat(c().InfoAlertBackButton),children:(0,n.jsx)(u.Z,{className:"m-2",onClick:()=>C(!1),variant:"warning",children:"BACK"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"●"}),(0,n.jsxs)("td",{children:[t[0].MediaInfo.DeviceName,(0,n.jsx)("br",{}),t[0].DeviceID]}),(0,n.jsx)("td",{className:7>a(t[0].endDate)?"text-danger fs-4 fw-bold":30>a(t[0].endDate)?"text-warning fs-4 fw-bold":"text-success fs-4 fw-bold",children:a(t[0].endDate)}),(0,n.jsx)("td",{children:(e=>{let t=new Date(e),a=t.toLocaleString("en-us",{month:"long",year:"numeric",day:"numeric"});return a})(t[0].endDate)}),(0,n.jsx)("td",{children:(0,n.jsxs)(l.Z.Select,{disabled:""!==t[1],className:c().select,"aria-label":"Default select example",onChange:e=>{t[4](Math.random()),void 0!==t[2].find(e=>e.DeviceID===t[0].DeviceID)?t[3](a=>(a.find(e=>e.DeviceID===t[0].DeviceID).Month=e.target.value,a)):t[3](a=>[...a,{DeviceID:t[0].DeviceID,Month:e.target.value}]),y(e.target.value)},style:{width:"10.5rem"},value:""!==t[1]?t[1]:D,children:[(0,n.jsxs)("option",{value:"",children:[""!==t[1]?t[1]:"Select"," Month"]}),Array.from({length:12}).map((e,t)=>(0,n.jsxs)("option",{value:t+1,children:[t+1," Month"]},t))]})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{trigger:"click",placement:"left",overlay:O,children:(0,n.jsxs)(u.Z,{className:c().moreButton,children:[" ",(0,n.jsx)(s.fXH,{})]})})})]})]})}},2787:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(5893);a(7294);var o=a(5249),s=a.n(o);function r(){return(0,n.jsx)("div",{className:s().Nav,children:(0,n.jsx)("div",{className:s().title,children:(0,n.jsxs)("h3",{children:["Welcome to ",(0,n.jsx)("span",{children:"Digital Signage"})]})})})}},7602:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var n=a(5893),o=a(7294),s=a(3945);a(2787);var r=a(5766),i=a.n(r),c=a(1675),l=a(4307),d=a(7826),h=a(5147),g=a(5005),_=a(4266),u=a(2920),p=a(7119),m=a(5249),f=a.n(m);function v(){let e=(0,o.useContext)(d.V),{isAuthenticated:t,user:a}=e,[r,m]=(0,o.useState)({}),[v,j]=(0,o.useState)(!1),[D,y]=(0,o.useState)(""),[x,b]=(0,o.useState)([]),[N,S]=(0,o.useState)(0),[w,k]=(0,o.useState)(0),[C,I]=(0,o.useState)(!1);(0,o.useEffect)(()=>{console.log(a),c.Z.Get_Video_list({email:a.email}).then(e=>{e.msgError?console.log("error"):(m(e.data),j(!0))}).catch(e=>{console.log(e)})},[a]);let O=()=>{let e=[];if(""!==D)r.forEach(t=>{e.push({DeviceID:t.DeviceID,Month:D})});else{let t=x.filter(function(e){return""!=e.Month});e=t}""===e||e===[]||null==e||0===e.length?u.Am.error("Please Fill all the Details",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}):(console.log(e),l.Z.createOrderForOwnedDevices({paymentData:e}).then(e=>{e.msgError?(I(!1),u.Am.error(e.message.msgBody,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})):((0,p.e)(e.data),I(!1),u.Am.success("Successfully Added!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}))}).catch(e=>{I(!1),u.Am.error("SomeThing Went Wrong!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}))};return(0,o.useEffect)(()=>{var e=x.filter(function(e){return""!=e.Month});e.length>0&&""==D?S(500*function(e){for(var t=0,a=0;a<e.length;a++)t+=Number(e[a].Month);return t}(e)):""!==D&&S(500*r.length*D)},[D,x,r.length,w]),(0,n.jsxs)("main",{className:i().Dashboard_Container,children:[(0,n.jsx)("div",{className:f().Nav,children:(0,n.jsx)("div",{className:f().title,children:(0,n.jsxs)("h3",{children:["Extend ",(0,n.jsx)("span",{children:"Device"})," Date"]})})}),(0,n.jsx)("div",{className:i().grid,children:(0,n.jsxs)("div",{className:i().row_Full_Analytics,children:[(0,n.jsx)("div",{className:i().Analytics_Container,children:(0,n.jsx)("div",{className:i().analytic,children:(0,n.jsxs)(h.Z,{className:i().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"#"}),(0,n.jsx)("th",{children:"Device"}),(0,n.jsx)("th",{children:"Days Left"}),(0,n.jsx)("th",{children:"Payment Date"}),(0,n.jsxs)("th",{children:["Pay For Month",(0,n.jsxs)(_.Z.Select,{className:i().select,"aria-label":"Default select example",defaultValue:"",onChange:e=>y(e.target.value),style:{width:"10.5rem"},children:[(0,n.jsx)("option",{value:"",children:"For Every Device"}),Array.from({length:12}).map((e,t)=>(0,n.jsxs)("option",{value:t+1,children:[t+1," Month"]},t))]})]}),(0,n.jsx)("th",{children:"More"})]})}),(0,n.jsx)("tbody",{children:v?r.length>0?r.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.Z,{props:[e,D,x,b,k]},t)})):(0,n.jsx)("h1",{className:"".concat(i().EmptyContainer),children:"Device List is Empty"}):null})]})})}),(0,n.jsxs)("div",{className:i().PurchaseButton,children:[(0,n.jsxs)("p",{className:i().TotalPrice,children:["Total Price: ₹ ",N]}),(0,n.jsx)(g.Z,{onClick:O,variant:"warning",children:"Extend"})," "]})]})})]})}},5766:function(e){e.exports={Analytics_Container:"Dashboard_Analytics_Container__Fcm5u",analytic:"Dashboard_analytic__khWyU",table:"Dashboard_table__FM29q","Analytics-Container":"Dashboard_Analytics-Container__gHxGU",logo:"Dashboard_logo__VvFiH",Dashboard_Container:"Dashboard_Dashboard_Container__oYI5u",grid:"Dashboard_grid__rTkGS",row__one:"Dashboard_row__one__B8jcr",row_Full_Analytics:"Dashboard_row_Full_Analytics__DBxHs",row__two:"Dashboard_row__two__EkjG6",deleteLogo:"Dashboard_deleteLogo__S6Y3V",deleteLogo_null:"Dashboard_deleteLogo_null__JI7tg",statusOnline:"Dashboard_statusOnline__12wVh",statusOffline:"Dashboard_statusOffline__zQJJO",Alert:"Dashboard_Alert__J2vj9",slideUp:"Dashboard_slideUp__vo4PV",infoAlert:"Dashboard_infoAlert__dmCOr",InfoAlertDetails:"Dashboard_InfoAlertDetails__rmXqj",InfoAlertBackButton:"Dashboard_InfoAlertBackButton__dAUbl",detailsDiv:"Dashboard_detailsDiv__F4ccE",infoLogo:"Dashboard_infoLogo__AJETo",PurchaseButton:"Dashboard_PurchaseButton__CmDNB",TotalPrice:"Dashboard_TotalPrice__2Q3gy",popover:"Dashboard_popover__yZLgb",moreButton:"Dashboard_moreButton__vPcHo",EmptyContainer:"Dashboard_EmptyContainer__qHk64"}},5249:function(e){e.exports={Nav:"Navbar_Nav__U4jLv",title:"Navbar_title__vNChJ",search:"Navbar_search__q_Gca"}},5147:function(e,t,a){"use strict";var n=a(4184),o=a.n(n),s=a(7294),r=a(6792),i=a(5893);let c=s.forwardRef(({bsPrefix:e,className:t,striped:a,bordered:n,borderless:s,hover:c,size:l,variant:d,responsive:h,...g},_)=>{let u=(0,r.vE)(e,"table"),p=o()(t,u,d&&`${u}-${d}`,l&&`${u}-${l}`,a&&`${u}-${"string"==typeof a?`striped-${a}`:"striped"}`,n&&`${u}-bordered`,s&&`${u}-borderless`,c&&`${u}-hover`),m=(0,i.jsx)("table",{...g,className:p,ref:_});if(h){let f=`${u}-responsive`;return"string"==typeof h&&(f=`${f}-${h}`),(0,i.jsx)("div",{className:f,children:m})}return m});t.Z=c}},function(e){e.O(0,[617,266,620,946,361,774,888,179],function(){return e(e.s=6316)}),_N_E=e.O()}]);