(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{6246:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/Dashboard",function(){return a(7651)}])},2787:function(t,e,a){"use strict";a.d(e,{Z:function(){return i}});var s=a(5893);a(7294);var n=a(5249),r=a.n(n);function i(){return(0,s.jsx)("div",{className:r().Nav,children:(0,s.jsx)("div",{className:r().title,children:(0,s.jsxs)("h3",{children:["Welcome to ",(0,s.jsx)("span",{children:"Digital Signage"})]})})})}},7651:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return B}});var s=a(5893),n=a(7294),r=a(3750),i=a(155),o=a(7516),l=a(6893),c=a(1417),_=a.n(c);function d(t){let{props:e}=t;return(0,s.jsxs)("div",{className:_().Analytics_Container,children:[(0,s.jsxs)("div",{className:_().analytic,children:[(0,s.jsxs)("div",{className:_().content,children:[(0,s.jsx)("h5",{children:"Devices"}),(0,s.jsx)("h2",{children:e.TotalDevices})]}),(0,s.jsx)("div",{className:_().logo,children:(0,s.jsx)(r.z_3,{})})]}),(0,s.jsxs)("div",{className:_().analytic,children:[(0,s.jsx)("div",{className:_().logo,children:(0,s.jsx)(i.xID,{})}),(0,s.jsxs)("div",{className:_().content,children:[(0,s.jsx)("h5",{children:"Status"}),(0,s.jsx)("h2",{style:{color:"green"},children:e.Status})]})]}),(0,s.jsxs)("div",{className:_().analytic,children:[(0,s.jsx)("div",{className:_().logo,children:(0,s.jsx)(o.p$$,{})}),(0,s.jsxs)("div",{className:_().content,children:[(0,s.jsx)("h5",{children:"New clients"}),(0,s.jsx)("h2",{children:"321"})]})]}),(0,s.jsxs)("div",{className:_().analytic,children:[(0,s.jsxs)("div",{className:_().content,children:[(0,s.jsx)("h5",{children:"Activity"}),(0,s.jsx)("h2",{children:"$540.50"})]}),(0,s.jsx)("div",{className:_().logo,children:(0,s.jsx)(l.bAx,{})})]})]})}var h=a(1649),u=a(8193),f=a(5434),x=a(5471),p=a.n(x),m=a(1664),g=a.n(m);function j(){let t=[{icon:(0,s.jsx)(u.ow5,{}),text:"Add Device ?",Link:"/help"},{icon:(0,s.jsx)(f.sVn,{}),text:"Play Youtube Videos ?",Link:"/help"},{icon:(0,s.jsx)(h.kFd,{}),text:"Check Supported Formats ?",Link:"/help"}];return(0,s.jsxs)("div",{className:p().Section,children:[(0,s.jsx)("div",{className:p().title,children:(0,s.jsx)("h2",{children:"How To"})}),(0,s.jsx)("div",{className:p().faqs,children:t.map((t,e)=>(0,s.jsxs)(g(),{href:"/admin/Help",className:p().faq,children:[(0,s.jsxs)("div",{className:p().info,children:[t.icon,(0,s.jsx)("h4",{children:t.text})]}),(0,s.jsx)(h.hjJ,{})]},e))})]})}var v=a(2787),b=a(3854),y=a(1652),N=a.n(y);function k(t){let{user_info:e}=t;return console.log("user_info",e),(0,s.jsxs)("div",{className:N().Section,children:[(0,s.jsx)("div",{className:N().image,children:(0,s.jsx)(b.mhe,{size:150})}),(0,s.jsxs)("div",{className:N().title,children:[(0,s.jsxs)("h2",{children:["Hi, ",e[0].first_name]}),(0,s.jsxs)("h5",{children:[(0,s.jsx)(b.Zuw,{})," ",e[0].email]})]})]})}a(5675);var D=a(1476),A=a.n(D),C=function(t,e){return(C=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)};function w(t){var e,a,s,r,i,o,l,c=t.className,_=t.counterClockwise,d=t.dashRatio,h=t.pathRadius,u=t.strokeWidth,f=t.style;return(0,n.createElement)("path",{className:c,style:Object.assign({},f,(a=(e={pathRadius:h,dashRatio:d,counterClockwise:_}).counterClockwise,r=(1-e.dashRatio)*(s=2*Math.PI*e.pathRadius),{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(a?-r:r)+"px"})),d:"\n      M 50,50\n      m 0,-"+(o=(i={pathRadius:h,counterClockwise:_}).pathRadius)+"\n      a "+o+","+o+" "+(l=i.counterClockwise?1:0)+" 1 1 0,"+2*o+"\n      a "+o+","+o+" "+l+" 1 1 0,-"+2*o+"\n    ",strokeWidth:u,fillOpacity:0})}var P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return!function(t,e){function a(){this.constructor=t}C(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,a=t.minValue,s=t.maxValue;return(Math.min(Math.max(e,a),s)-a)/(s-a)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,a=t.className,s=t.classes,r=t.counterClockwise,i=t.styles,o=t.strokeWidth,l=t.text,c=this.getPathRadius(),_=this.getPathRatio();return(0,n.createElement)("svg",{className:s.root+" "+a,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:s.background,style:i.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(w,{className:s.trail,counterClockwise:r,dashRatio:e,pathRadius:c,strokeWidth:o,style:i.trail}),(0,n.createElement)(w,{className:s.path,counterClockwise:r,dashRatio:_*e,pathRadius:c,strokeWidth:o,style:i.path}),l?(0,n.createElement)("text",{className:s.text,style:i.text,x:50,y:50},l):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(n.Component);function S(t){return Object.keys(t).forEach(function(e){null==t[e]&&delete t[e]}),t}function O(t){var e,a,n,r,i,o,l,c,_,d,h,u;let{props:f}=t,{storageFilled:x,storageLimit:p}=f,m=x/p*100;return console.log("storage",f),(0,s.jsxs)("div",{className:A().Section,children:[(0,s.jsx)("div",{className:A().title,children:(0,s.jsx)("h2",{children:"Storage"})}),(0,s.jsx)("div",{className:A().transactions,children:(0,s.jsx)(P,{value:m,text:"".concat(m,"%"),styles:(a=(e={strokeLinecap:"butt",textSize:"16px",pathTransitionDuration:.5,pathColor:"rgb(255, ".concat((p-x)/100*255,", 0)"),textColor:"#fff",trailColor:"#000",backgroundColor:"#3e98c7"}).rotation,n=e.strokeLinecap,r=e.textColor,i=e.textSize,o=e.pathColor,l=e.pathTransition,c=e.pathTransitionDuration,_=e.trailColor,d=e.backgroundColor,{root:{},path:S({stroke:o,strokeLinecap:n,transform:h=null==a?void 0:"rotate("+a+"turn)",transformOrigin:u=null==a?void 0:"center center",transition:l,transitionDuration:null==c?void 0:c+"s"}),trail:S({stroke:_,strokeLinecap:n,transform:h,transformOrigin:u}),text:S({fill:r,fontSize:i}),background:S({fill:d})})})}),(0,s.jsxs)("div",{className:A().view__all,children:[(0,s.jsxs)("span",{children:["Limit: ",p," MB,"," "]})," ",(0,s.jsxs)("span",{children:[" "," Used: ",x," MB"]})]})]})}a(5677);var E=a(5766),L=a.n(E),T=a(7826),R=a(1573);function B(){let t=(0,n.useContext)(T.V),{isAuthenticated:e,user:a}=t,[r,i]=(0,n.useState)({}),[o,l]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{R.Z.Get_User_info({email:a.email}).then(t=>{t.msgError?console.log("error"):(i(t.data),l(!0))}).catch(t=>{console.log(t)})},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("main",{className:L().Dashboard_Container,children:[(0,s.jsx)(v.Z,{}),o?(0,s.jsxs)("div",{className:L().grid,children:[(0,s.jsxs)("div",{className:L().row__one,children:[(0,s.jsx)(k,{user_info:r}),(0,s.jsx)(j,{})]}),(0,s.jsxs)("div",{className:L().row__two,children:[(0,s.jsx)(d,{props:{TotalDevices:r[0].TotalDevices,Status:"Paid"}}),(0,s.jsx)(O,{props:r[0].storage})]})]}):null]})})}a(9008)},1417:function(t){t.exports={Analytics_Container:"Analytics_Analytics_Container__KTbPs",analytic:"Analytics_analytic__YVe1E","Analytics-Container":"Analytics_Analytics-Container__S_O7w",logo:"Analytics_logo__QryqA",deleteLogo:"Analytics_deleteLogo__G7HXV",deleteLogo_null:"Analytics_deleteLogo_null__a_WCO",statusOnline:"Analytics_statusOnline__6ibGr",statusOffline:"Analytics_statusOffline__Pdfh_",Alert:"Analytics_Alert__zIfpM",slideUp:"Analytics_slideUp___tRLg",infoAlert:"Analytics_infoAlert__N45qW",InfoAlertDetails:"Analytics_InfoAlertDetails__IyXjO",detailsDiv:"Analytics_detailsDiv__7EoQY",infoLogo:"Analytics_infoLogo__p3ES4"}},5471:function(t){t.exports={Section:"FAQ_Section__ngb1g",title:"FAQ_title__QNlgI",faqs:"FAQ_faqs__gSc03",faq:"FAQ_faq__Fn2aU",info:"FAQ_info__oX_h1"}},1652:function(t){t.exports={Section:"Profile_Section__4fdff",image:"Profile_image__C8oUj",title:"Profile_title__dd2Pj",info:"Profile_info__7BKih",container:"Profile_container__Mm4D9"}},1476:function(t){t.exports={Section:"Transfers_Section__iQi21",title:"Transfers_title__cIGE6",transactions:"Transfers_transactions__RFM17",transaction:"Transfers_transaction__1hxjX",transaction__title:"Transfers_transaction__title__GcjKf",transaction__title__image:"Transfers_transaction__title__image__9d_3u",transaction__amount:"Transfers_transaction__amount__vDfPz",view:"Transfers_view__3IcPv"}},5766:function(t){t.exports={Analytics_Container:"Dashboard_Analytics_Container__Fcm5u",analytic:"Dashboard_analytic__khWyU",table:"Dashboard_table__FM29q","Analytics-Container":"Dashboard_Analytics-Container__gHxGU",logo:"Dashboard_logo__VvFiH",Dashboard_Container:"Dashboard_Dashboard_Container__oYI5u",grid:"Dashboard_grid__rTkGS",row__one:"Dashboard_row__one__B8jcr",row_Full_Analytics:"Dashboard_row_Full_Analytics__DBxHs",row__two:"Dashboard_row__two__EkjG6",deleteLogo:"Dashboard_deleteLogo__S6Y3V",deleteLogo_null:"Dashboard_deleteLogo_null__JI7tg",statusOnline:"Dashboard_statusOnline__12wVh",statusOffline:"Dashboard_statusOffline__zQJJO",Alert:"Dashboard_Alert__J2vj9",slideUp:"Dashboard_slideUp__vo4PV",infoAlert:"Dashboard_infoAlert__dmCOr",InfoAlertDetails:"Dashboard_InfoAlertDetails__rmXqj",InfoAlertBackButton:"Dashboard_InfoAlertBackButton__dAUbl",detailsDiv:"Dashboard_detailsDiv__F4ccE",infoLogo:"Dashboard_infoLogo__AJETo",PurchaseButton:"Dashboard_PurchaseButton__CmDNB",TotalPrice:"Dashboard_TotalPrice__2Q3gy",popover:"Dashboard_popover__yZLgb",moreButton:"Dashboard_moreButton__vPcHo",EmptyContainer:"Dashboard_EmptyContainer__qHk64"}},5249:function(t){t.exports={Nav:"Navbar_Nav__U4jLv",title:"Navbar_title__vNChJ",search:"Navbar_search__q_Gca"}},5677:function(){}},function(t){t.O(0,[617,866,260,556,13,874,675,774,888,179],function(){return t(t.s=6246)}),_N_E=t.O()}]);