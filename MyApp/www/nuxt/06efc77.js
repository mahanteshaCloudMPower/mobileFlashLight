(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,e,n){var content=n(114);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("1a6b5c64",content,!0,{sourceMap:!1})},114:function(t,e,n){var o=n(5),r=n(115),c=n(116),l=n(117),f=n(118),d=n(119);e=o(!1);var v=r(c),m=r(l),h=r(f),x=r(d);e.push([t.i,'@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url('+v+");src:url("+m+') format("woff2"),url('+h+') format("woff"),url('+x+') format("truetype")}.material-icons{font-family:"Material Icons";font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}',""]),t.exports=e},116:function(t,e,n){t.exports=n.p+"fonts/MaterialIcons-Regular.54d1542.eot"},117:function(t,e,n){t.exports=n.p+"fonts/MaterialIcons-Regular.658dde7.woff2"},118:function(t,e,n){t.exports=n.p+"fonts/MaterialIcons-Regular.85cba3c.woff"},119:function(t,e,n){t.exports=n.p+"fonts/MaterialIcons-Regular.3d1b93b.ttf"},122:function(t,e,n){"use strict";n(59)},123:function(t,e,n){(e=n(5)(!1)).push([t.i,".bg_color{background:#f0f8ff}",""]),t.exports=e},134:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"strict",(function(){return c}));const o=()=>({sidebar:!1,appState:!1,userId:""}),r={toggleSidebar(t){t.sidebar=!t.sidebar},setAppState(t,data){t.appState=data},setUserId(t,data){t.userId=data}},c=!1},135:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));const o=()=>({loginCred:{userName:"",password:""},loginTime:{timestamp:0,timeZone:""},userInfo:{},loginInfoSent:{}}),r={setLoginCred(t,data){t.loginCred=data},setUserInfo(t,data){t.userInfo=data},setLoginInfoSent(t,data){t.loginInfoSent=data},clearLoginStorage(t){for(const e in t)t[e]=""}}},20:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},head(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},created:function(){console.error("error obj",this.error)},data:()=>({pageNotFound:"404 Not Found",otherError:"An error occurred"})},r=(n(87),n(11)),c=n(17),l=n.n(c),f=n(181),d=n(172),v=n(47),m=n(45),h=n(173),x=n(174),_=n(175),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[e("v-flex",{attrs:{xs12:"",md8:"",lg6:""}},[e("v-card",{attrs:{outlined:""}},[e("v-card-text",[e("v-alert",{attrs:{type:"info",value:!0}},[this._v("Something went wrong....")]),this._v(" "),e("NuxtLink",{attrs:{to:"/"}},[this._v("Home page")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"152ef4ba",null);e.a=component.exports;l()(component,{VAlert:f.a,VApp:d.a,VCard:v.a,VCardText:m.a,VContainer:h.a,VFlex:x.a,VLayout:_.a})},43:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));const o={"app-version":"1",updatedOn:""};let r=function(){return o}},54:function(t,e,n){var content=n(88);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("84438abe",content,!0,{sourceMap:!1})},59:function(t,e,n){var content=n(123);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("56b15182",content,!0,{sourceMap:!1})},75:function(t,e,n){"use strict";var o={data:()=>({timeout:5e3,top:!0,right:!0,snackbar:!1,color:"",msg:""})},r=n(11),c=n(17),l=n.n(c),f=n(28),d=n(176),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{ref:"notificationRef",attrs:{timeout:t.timeout,bottom:!0,color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n  "+t._s(t.msg)+"\n  "),n("v-btn",{attrs:{text:"",color:"white"},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("close")])],1)}),[],!1,null,null,null),v=component.exports;l()(component,{VBtn:f.a,VSnackbar:d.a});var m={components:{notificationComponent:v},data:()=>({title:"nuxt boilerplate"})},h=(n(122),n(172)),x=n(180),_=n(177),w=n(173),y=n(178),k=n(179),I=n(72),V=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.$store.state.appstate?n("v-app-bar",{attrs:{app:"",fixed:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon"),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer")],1):t._e(),t._v(" "),n("v-main",{staticClass:"bg_color"},[n("v-container",[n("nuxt",{ref:"curPage"}),t._v(" "),n("notification-component",{ref:"notificationRef"})],1)],1)],1)}),[],!1,null,null,null);e.a=V.exports;l()(V,{VApp:h.a,VAppBar:x.a,VAppBarNavIcon:_.a,VContainer:w.a,VMain:y.a,VSpacer:k.a,VToolbarTitle:I.a})},81:function(t,e,n){n(82),t.exports=n(83)},84:function(t,e,n){"use strict";n.r(e),e.default=function({store:t,redirect:e,error:n}){if(!t.state.appState)return e("/")}},87:function(t,e,n){"use strict";n(54)},88:function(t,e,n){(e=n(5)(!1)).push([t.i,"h1[data-v-152ef4ba]{font-size:20px}",""]),t.exports=e}},[[81,7,1,8]]]);