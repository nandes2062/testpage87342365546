/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,e,n){t.exports=n.p+"img/Secundario_white.2fa3f88.svg"},330:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4be556fa",content,!0,{sourceMap:!1})},339:function(t,e,n){t.exports=n.p+"img/Secundario.1d3b8b1.svg"},340:function(t,e,n){t.exports=n.p+"img/Principal.8f1991f.svg"},341:function(t,e,n){(function(e,n){var o;o=function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}for(var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){(function(){var e,o,r,l,c,h;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=n&&n.hrtime?(t.exports=function(){return(e()-c)/1e6},o=n.hrtime,l=(e=function(){var hr;return 1e9*(hr=o())[0]+hr[1]})(),h=1e9*n.uptime(),c=l-h):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(o)})),l="undefined"==typeof window?o:window,c=["moz","webkit"],h="AnimationFrame",d=l["request"+h],f=l["cancel"+h]||l["cancelRequest"+h],i=0;!d&&i<c.length;i++)d=l[c[i]+"Request"+h],f=l[c[i]+"Cancel"+h]||l[c[i]+"CancelRequest"+h];if(!d||!f){var m=0,v=0,w=[];d=function(t){if(0===w.length){var e=r(),n=Math.max(0,16.666666666666668-(e-m));m=n+e,setTimeout((function(){var t=w.slice(0);w.length=0;for(var i=0;i<t.length;i++)if(!t[i].cancelled)try{t[i].callback(m)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return w.push({handle:++v,callback:t,cancelled:!1}),v},f=function(t){for(var i=0;i<w.length;i++)w[i].handle===t&&(w[i].cancelled=!0)}}var x=function(t){return d.call(l,t)};x.cancel=function(){f.apply(l,arguments)},x.polyfill=function(object){object||(object=l),object.requestAnimationFrame=d,object.cancelAnimationFrame=f};var C={pinned:"headroom--pinned",unpinned:"headroom--unpinned",unfixed:"headroom--unfixed",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"},script={name:"vueHeadroom",data:function(){return{isTop:!1,isNotTop:!1,isBottom:!1,isNotBottom:!1,isPinned:!1,isUnpinned:!1,currentScrollY:0,lastScrollY:void 0,state:"unfixed",translate:0,height:"",animation:!0,isSupport3d:!1}},props:{scroller:{type:Function,default:function(){return window}},disabled:{type:Boolean,default:!1},upTolerance:{type:Number,default:5},downTolerance:{type:Number,default:0},speed:{type:Number,default:250},easing:{type:String,default:"ease-in-out"},zIndex:{type:Number,default:9999},offset:{type:Number,default:0},classes:{type:Object,default:function(){return C}},footroom:{type:Boolean,default:!1}},watch:{disabled:function(t){t?this.scroller().removeEventListener("scroll",this._handleScroll):this.scroller().addEventListener("scroll",this._handleScroll)}},mounted:function(){this.isSupport3d=function(){for(var div=document.createElement("div"),t=!1,e=["perspectiveProperty","WebkitPerspective"],i=e.length-1;i>=0;i--)t=t||void 0!==div.style[e[i]];if(t){var n=document.createElement("style");n.textContent="#modernizr{width:0;height:0} @media (transform-3d),(-webkit-transform-3d){#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",document.getElementsByTagName("head")[0].appendChild(n),div.id="modernizr",document.body.appendChild(div),t=7===div.offsetWidth&&18===div.offsetHeight,n.parentNode.removeChild(n),div.parentNode.removeChild(div)}return t}(),this._setHeightOffset(),this.disabled||this.scroller().addEventListener("scroll",this._handleScroll),this._handleScroll()},updated:function(){this.$nextTick((function(){this._setHeightOffset()}))},beforeDestroy:function(){this.scroller().removeEventListener("scroll",this._handleScroll)},computed:{style:function(){var t={position:this.disabled||"unfixed"===this.state?"relative":"fixed",top:"0",left:"0",right:"0","z-index":this.zIndex};return this.footroom&&(t=Object.assign({},t,{top:"unset",bottom:"0"})),this.$isServer||(t.transform=this.isSupport3d&&!this.$isServer?"translate3d(0, ".concat(this.translate,", 0)"):"translateY(".concat(this.translate,")"),this.animation&&(t.transition="all ".concat(this.speed,"ms ").concat(this.easing))),t},clsOpts:function(){return Object.assign({},C,this.classes)},cls:function(){var e,n=this.clsOpts;return this.disabled?{}:(t(e={},n.top,this.isTop),t(e,n.notTop,this.isNotTop),t(e,n.bottom,this.isBottom),t(e,n.notBottom,this.isNotBottom),t(e,n.pinned,this.isPinned),t(e,n.unpinned,this.isUnpinned),t(e,n.initial,!0),e)}},methods:{_getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},_getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},_getDocumentHeight:function(){var body=document.body,t=document.documentElement;return Math.max(body.scrollHeight,t.scrollHeight,body.offsetHeight,t.offsetHeight,body.clientHeight,t.clientHeight)},_getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},_getScrollerPhysicalHeight:function(){var t=this.scroller();return t===window||t===document.body?this._getViewportHeight():this._getElementPhysicalHeight(t)},_getScrollerHeight:function(){var t=this.scroller();return t===window||t===document.body?this._getDocumentHeight():this._getElementHeight(t)},_isOutOfBound:function(t){var e=t<0,n=this._getScrollerPhysicalHeight(),o=this._getScrollerHeight();return e||t+n>o},_handleScroll:function(){x(this.update)},_setHeightOffset:function(){this.height=this.$slots.default?this.$slots.default[0].elm&&this.$slots.default[0].elm.offsetHeight:""},_getScrollY:function(){return void 0!==this.scroller().pageYOffset?this.scroller().pageYOffset:void 0!==this.scroller().scrollTop?this.scroller().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},update:function(){if(this.currentScrollY=this._getScrollY(),!this._isOutOfBound(this.currentScrollY)){this.currentScrollY<=this.offset?this.top():this.notTop(),this.currentScrollY+this._getViewportHeight()>=this._getScrollerHeight()?this.bottom():this.notBottom();var t,e,n,o,r=(e=(t=this).currentScrollY>=t.lastScrollY?"down":"up",n=Math.abs(t.currentScrollY-t.lastScrollY),o=void 0===t.lastScrollY,t.currentScrollY>t.height+t.offset&&"unfixed"===t.state&&o?"pin":t.currentScrollY<=t.offset&&"unfixed"!==t.state?"unfix":t.currentScrollY<=t.height&&"down"===e&&"unfixed"===t.state?"none":t.currentScrollY>t.height+t.offset&&"down"===e&&"unfixed"===t.state&&!o?"unpin-snap":"down"===e&&["pinned","unfixed"].indexOf(t.state)>=0&&t.currentScrollY>t.height+t.offset&&n>t.downTolerance?"unpin":"up"===e&&n>t.upTolerance&&["pinned","unfixed"].indexOf(t.state)<0||"up"===e&&t.currentScrollY<=t.height&&["pinned","unfixed"].indexOf(t.state)<0?"pin":"none");"pin"===r?this.pin():"unpin-snap"===r?this.unpinSnap():"unpin"===r?this.unpin():"unfix"===r&&this.unfix(),this.lastScrollY=this.currentScrollY}},top:function(){this.isTop=!0,this.isNotTop=!1,this.$emit("top")},notTop:function(){this.isTop=!1,this.isNotTop=!0,this.$emit("not-top")},bottom:function(){this.isBottom=!0,this.isNotBottom=!1,this.$emit("bottom")},notBottom:function(){this.isNotBottom=!0,this.isBottom=!1,this.$emit("not-bottom")},pin:function(){var t=this;this.isPinned=!0,this.isUnpinned=!1,this.animation=!0,this.$emit("pin"),this.translate=0,this.$nextTick((function(){t.state="pinned"}))},unpin:function(){var t=this;this.isUnpinned=!0,this.isPinned=!1,this.animation=!0,this.$emit("unpin"),this.translate=this.footroom?"100%":"-100%",this.$nextTick((function(){t.state="unpinned"}))},unpinSnap:function(){var t=this;this.isUnpinned=!0,this.isPinned=!1,this.animation=!1,this.$emit("unpin"),this.translate=this.footroom?"100%":"-100%",this.$nextTick((function(){t.state="unpinned"}))},unfix:function(){var t=this;this.translate=0,this.animation=!1,this.$emit("unfix"),this.$nextTick((function(){t.state="unfixed"}))}}},_=function(template,style,script,t,e,n,o,r,l,c){"boolean"!=typeof o&&(l=r,r=o,o=!1);var h,d="function"==typeof script?script.options:script;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=h):style&&(h=o?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),h)if(d.functional){var f=d.render;d.render=function(t,e){return h.call(e),f(t,e)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,h):[h]}return script},y=_({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{height:t.height+"px"}},[n("div",{class:t.cls,style:t.style},[t._t("default")],2)])},staticRenderFns:[]},void 0,script,void 0,!1,void 0,void 0,void 0),S=function t(e){t.installed||e.component(y.name,y)};return"undefined"!=typeof window&&window.Vue&&S(window.Vue),{headroom:y,install:S}},t.exports=o()}).call(this,n(35),n(148))},342:function(t,e,n){"use strict";n(330)},343:function(t,e,n){var o=n(54)((function(i){return i[1]}));o.push([t.i,".nuxt-link-exact-active{--tw-text-opacity:1;color:rgb(113 63 18 / var(--tw-text-opacity))}.headroom--not-top header{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.headroom--not-top .logo--white{display:none}.headroom--top header nav{--tw-text-opacity:1;color:rgb(68 64 60 / var(--tw-text-opacity))}@media (min-width: 1024px){.headroom--top header nav{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}}.headroom--top header{background-color:transparent;background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:#44403c;--tw-gradient-to:rgb(68 64 60 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.headroom--top .logo{display:none}",""]),o.locals={},t.exports=o},355:function(t,e,n){"use strict";n.r(e);var o={components:{headroom:n(341).headroom},data:function(){return{showMenu:!1}}},r=(n(342),n(69)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("headroom",[e("header",{staticClass:"relative shadow-sm top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"},[e("div",{staticClass:"relative hidden lg:flex justify-between items-center pt-2 pb-1 text-sm opacity-70",staticStyle:{"border-color":"rgba(255, 255, 255, 0.25)"}},[e("div",[e("ul",{staticClass:"flex justify-end"},[e("li",[e("a",{staticClass:"hover:text-yellow-800",attrs:{href:"https://www.facebook.com/Carvajal-Servicios-Integrales-100167166179844",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592\tc0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20\tc0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"}})])])]),t._v(" "),e("li",{staticClass:"ml-6"},[e("a",{staticClass:"hover:text-yellow-800",attrs:{href:"https://twitter.com/CarvajalServSI",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809\tc0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793\tc0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05\tc0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032\tc1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028\tc1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22\tc0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"}})])])]),t._v(" "),e("li",{staticClass:"ml-6"},[e("a",{staticClass:"hover:text-yellow-800",attrs:{href:"https://www.instagram.com/carvajalserviciosintegrales/",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"}}),t._v(" "),e("circle",{attrs:{cx:"11.994",cy:"11.979",r:"3.003"}})])])]),t._v(" "),e("li",{staticClass:"ml-6"},[e("a",{staticClass:"hover:text-yellow-800",attrs:{href:"https://www.tiktok.com/@sicarvajal?lang=es",target:"_blank"}},[e("svg",{staticClass:"p-0.5",attrs:{width:"24",height:"24","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"tiktok",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"}})])])]),t._v(" "),e("li",{staticClass:"ml-6"},[e("a",{staticClass:"hover:text-yellow-800",attrs:{href:"https://t.me/Carvajal_Sercicios_Integrales",target:"_blank"}},[e("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[e("path",{attrs:{fill:"currentColor",d:"M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"}})])])])])]),t._v(" "),e("div",[e("ul",{staticClass:"flex"},[e("li",[e("a",{staticClass:"flex items-center hover:text-yellow-800",attrs:{href:"mailto:info@carvajalservicios.com"}},[e("svg",{staticClass:"w-6 h-6 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"}})]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("info@carvajalservicios.com")])])]),t._v(" "),e("li",{staticClass:"ml-6"},[e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"flex items-center hover:text-yellow-800",attrs:{href:"http://wa.me/59169862753",target:"_blank",rel:"noopener noreferrer"}},[e("svg",{staticClass:"w-6 h-6 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"}})]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("+591 69862753")])])])])])])]),t._v(" "),e("div",{staticClass:"flex flex-wrap items-center lg:justify-center justify-between py-1.5"},[e("div",{staticClass:"w-1/2 lg:w-auto lg:hidden"},[e("a",{staticClass:"font-bold text-2xl nuxt-link-exact-active nuxt-link-active",attrs:{href:"/","aria-current":"page"}},[e("img",{staticClass:"h-14 logo",attrs:{src:n(339),alt:"Carvajal - Servicios integrales"}}),t._v(" "),e("img",{staticClass:"h-14 logo--white",attrs:{src:n(329),alt:"Carvajal - Servicios integrales"}})])]),t._v(" "),e("label",{staticClass:"pointer-cursor lg:hidden block",attrs:{for:"menu-toggle"}},[e("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[e("title",[t._v("menu")]),t._v(" "),e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])]),t._v(" "),e("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"menu-toggle"}}),t._v(" "),e("div",{staticClass:"hidden lg:block w-full lg:w-auto",attrs:{id:"menu"}},[e("nav",{staticClass:"w-full bg-white lg:bg-transparent px-6 py-4 mt-4 text-center lg:p-0 lg:mt-0"},[e("ul",{staticClass:"lg:flex items-center"},[e("li",{staticClass:"lg:ml-4"},[e("a",{staticClass:"py-2 inline-block lg: hover:text-yellow-800 lg:px-4 font-semibold",attrs:{href:"#"}},[t._v("\n                Inicio\n              ")])]),t._v(" "),e("li",{staticClass:"lg:ml-4"},[e("a",{staticClass:"py-2 inline-block lg: hover:text-yellow-800 lg:px-4 font-semibold",attrs:{href:"/#acercade"}},[t._v("\n                Acerca de\n              ")])]),t._v(" "),e("li",{staticClass:"lg:ml-4"},[e("div",{staticClass:"lg:w-auto lg:block hidden px-5"},[e("a",{staticClass:"font-bold text-2xl nuxt-link-exact-active nuxt-link-active",attrs:{href:"#","aria-current":"page"}},[e("img",{staticClass:"h-14 logo transform scale-[1.5] origin-bottom",attrs:{src:n(340),alt:"Carvajal - Servicios integrales"}}),t._v(" "),e("img",{staticClass:"h-14 logo--white transform scale-[2] origin-top",attrs:{src:n(222),alt:"Carvajal - Servicios integrales"}})])])]),t._v(" "),e("li",{staticClass:"lg:ml-4"},[e("a",{staticClass:"py-2 inline-block lg: hover:text-yellow-800 lg:px-4 font-semibold",attrs:{href:"#servicios"}},[t._v("\n                Servicios\n              ")])]),t._v(" "),e("li",{staticClass:"lg:ml-4"},[e("a",{staticClass:"py-2 inline-block lg: hover:text-yellow-800 lg:px-4 font-semibold",attrs:{href:"#contactenos"}},[t._v("\n                Contáctenos\n              ")])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(355).default})}}]);