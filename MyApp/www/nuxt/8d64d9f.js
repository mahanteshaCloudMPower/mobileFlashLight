(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,o){"use strict";o.r(t);var c={data:()=>({}),created(){},methods:{loadCamera(){const e=this.backCamera?{video:{facingMode:"environment"}}:{video:!0};"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices&&(console.log("test start"),navigator.mediaDevices.getUserMedia(e).then(e=>{console.log("stream",e);const t=document.querySelector("video");console.log("videoPlayer",t),t.srcObject=e,console.log("videoPlayer",t.srcObject),t.play(),console.log("videosPlayer",t.play())}))},offCamere(){var e=document.querySelector("video");if(console.log("videoElem",e),e.srcObject){console.log("videoElem.srcObject",e.srcObject);const t=e.srcObject;console.log("strem",t);const o=t.getTracks();console.log("track",o),o.forEach((function(track){track.stop()})),e.srcObject=null}}}},r=o(11),n=o(16),l=o.n(n),d=o(28),v=o(47),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("v-card",{staticClass:"ma-5 mt-16 pa-6"},[o("video",{attrs:{id:"video",width:"720",height:"540",autoplay:"",muted:""},domProps:{muted:!0}}),e._v(" "),o("switch",{attrs:{id:"switch",width:"720",height:"540",autoplay:"",muted:""}}),e._v(" "),o("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:e.loadCamera}},[e._v("\n      Turn off Light\n    ")]),e._v(" "),o("button",{staticClass:"switch"},[e._v("On / Off")]),e._v(" "),o("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:e.offCamere}},[e._v(" flash off ")])],1)],1)}),[],!1,null,"2a9897da",null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a})}}]);