"use strict";(self["webpackChunktemplate_vue_platform"]=self["webpackChunktemplate_vue_platform"]||[]).push([[321],{2738:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ae}});var r=o(3396);const a={class:"w-full h-screen overflow-hidden block"},s={class:"w-full h-full flex overflow-hidden"},n={class:"w-full h-full overflow-hidden"},l={class:"main-container w-full h-[calc(100vh-50px)] overflow-y-auto"};function i(e,t,o,i,d,u){const c=(0,r.up)("ToolbarLayout"),m=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("main",a,[(0,r.Wm)(c),(0,r._)("div",s,[(0,r._)("div",n,[(0,r._)("div",l,[(0,r.Wm)(m)])])])])}var d=o(7139),u=o(870),c=o(3289),m=o(9166),f=o(1138),p=o(3766),v=o(1107),h=o(9888);const b=(0,p.U)({text:String,...(0,m.l)(),...(0,f.Q)()},"VToolbarTitle"),g=(0,v.ev)()({name:"VToolbarTitle",props:b(),setup(e,t){let{slots:o}=t;return(0,h.L)((()=>{const t=!!(o.default||o.text||e.text);return(0,r.Wm)(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[t&&(0,r.Wm)("div",{class:"v-toolbar-title__placeholder"},[o.text?o.text():e.text,o.default?.()])]})})),{}}});var y=o(8952),_=o(836),w=o(8694),x=o(2718),W=o(2370),k=o(6107),I=o(2465),C=o(1629),A=o(4231),S=o(5935),V=o(4870),T=o(131);const H=[null,"prominent","default","comfortable","compact"],L=(0,p.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>H.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,x.m)(),...(0,m.l)(),...(0,I.c)(),...(0,A.I)(),...(0,f.Q)({tag:"header"}),...(0,S.x$)()},"VToolbar"),$=(0,v.ev)()({name:"VToolbar",props:L(),setup(e,t){let{slots:o}=t;const{backgroundColorClasses:a,backgroundColorStyles:s}=(0,W.Y5)((0,V.Vh)(e,"color")),{borderClasses:n}=(0,x.P)(e),{elevationClasses:l}=(0,I.Y)(e),{roundedClasses:i}=(0,A.b)(e),{themeClasses:d}=(0,S.ER)(e),{rtlClasses:u}=(0,C.Vw)(),c=(0,V.XI)(!(!e.extended&&!o.extension?.())),m=(0,r.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),f=(0,r.Fl)((()=>c.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,k.AF)({VBtn:{variant:"text"}}),(0,h.L)((()=>{const t=!(!e.title&&!o.title),p=!(!o.image&&!e.image),v=o.extension?.();return c.value=!(!e.extended&&!v),(0,r.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,n.value,l.value,i.value,d.value,u.value,e.class],style:[s.value,e.style]},{default:()=>[p&&(0,r.Wm)("div",{key:"image",class:"v-toolbar__image"},[o.image?(0,r.Wm)(_.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):(0,r.Wm)(w.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,r.Wm)(_.z,{defaults:{VTabs:{height:(0,T.kb)(m.value)}}},{default:()=>[(0,r.Wm)("div",{class:"v-toolbar__content",style:{height:(0,T.kb)(m.value)}},[o.prepend&&(0,r.Wm)("div",{class:"v-toolbar__prepend"},[o.prepend?.()]),t&&(0,r.Wm)(g,{key:"title",text:e.title},{text:o.title}),o.default?.(),o.append&&(0,r.Wm)("div",{class:"v-toolbar__append"},[o.append?.()])])]}),(0,r.Wm)(_.z,{defaults:{VTabs:{height:(0,T.kb)(f.value)}}},{default:()=>[(0,r.Wm)(y.Fx,null,{default:()=>[c.value&&(0,r.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,T.kb)(f.value)}},[v])]})]})]})})),{contentHeight:m,extensionHeight:f}}}),B=e=>((0,r.dD)("data-v-97d5a8ba"),e=e(),(0,r.Cn)(),e),U={class:"w-full flex justify-between items-center px-10"},Z={class:"font-bold"},D=["src"],P={class:"flex gap-4 items-center list-none"},N=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Inicio ",-1))),z=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Productos ",-1))),E=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Contactanos ",-1))),F=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Inicio ",-1))),Y=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Ordenes ",-1))),j=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Contactanos ",-1))),q={class:"flex gap-4 items-center list-none"},R={class:"relative py-2"},M={key:0,class:"absolute top-0 right-0"},O={class:"flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"},J={class:"flex gap-2 items-center"},Q=["src"],G={class:"text-sm"},X=B((()=>(0,r._)("br",null,null,-1))),K={class:"text-xs"},ee=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Login ",-1))),te=B((()=>(0,r._)("li",{class:"border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"}," Registro ",-1)));function oe(e,t,o,a,s,n){const l=(0,r.up)("router-link"),i=(0,r.up)("MenuAsPopoverVue");return(0,r.wg)(),(0,r.j4)($,{color:"brown-darken-1",dark:"",fixed:"",app:""},{default:(0,r.w5)((()=>[(0,r._)("div",U,[(0,r._)("div",Z,[(0,r._)("img",{src:s.logoInkacueros,alt:"",class:"w-[5rem]"},null,8,D)]),(0,r._)("div",P,[n.statusAdmin?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(l,{to:"/",class:"item-nav",href:"/"},{default:(0,r.w5)((()=>[F])),_:1}),(0,r.Wm)(l,{to:"/orders",class:"item-nav",href:"/orders"},{default:(0,r.w5)((()=>[Y])),_:1}),(0,r.Wm)(l,{to:"/contacts",class:"item-nav",href:"/contacts"},{default:(0,r.w5)((()=>[j])),_:1})],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(l,{to:"/",class:"item-nav",href:"/"},{default:(0,r.w5)((()=>[N])),_:1}),(0,r.Wm)(l,{to:"/products",class:"item-nav",href:"/products"},{default:(0,r.w5)((()=>[z])),_:1}),(0,r.Wm)(l,{to:"/contacts",class:"item-nav",href:"/contacts"},{default:(0,r.w5)((()=>[E])),_:1})],64))]),(0,r._)("div",q,[n.statusAdmin?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:0,to:"/trolley",class:"item-nav",href:"/trolley"},{default:(0,r.w5)((()=>[(0,r._)("div",R,[(0,r.Wm)(u.T,{icon:""},{default:(0,r.w5)((()=>[(0,r.Wm)(c.t,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-cart")])),_:1})])),_:1}),n.cartItemCount>0?((0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("p",O,(0,d.zw)(n.cartItemCount),1)])):(0,r.kq)("",!0)])])),_:1})),n.statusAuthenticated?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r._)("div",J,[(0,r._)("img",{src:s.avatarImage,alt:"",class:"w-10 h-10"},null,8,Q),(0,r._)("span",G,[(0,r.Uk)("Hola, "+(0,d.zw)(n.usernameValue)+" ",1),X,(0,r._)("span",K,(0,d.zw)(n.roleUser),1)])]),(0,r.Wm)(i,{username:n.usernameValue,rol:n.roleUser,avatarPath:s.avatarImage},null,8,["username","rol","avatarPath"])],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:2},[(0,r.Wm)(l,{to:"/login",class:"item-nav",href:"/login"},{default:(0,r.w5)((()=>[ee])),_:1}),(0,r.Wm)(l,{to:"/register",class:"item-nav",href:"/register"},{default:(0,r.w5)((()=>[te])),_:1})],64))])])])),_:1})}var re=o(4239),ae=o(1250),se=o.p+"img/iconuser_hombre.66103c98.png",ne=o(5039),le=o(4075),ie=o(2329),de=o(8777),ue=o(4193);const ce={class:"text-center"},me=(0,r._)("div",{class:"cursor-pointer transition hover:text-blue-300 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm"},[(0,r._)("i",{class:"fa-solid fa-user"}),(0,r._)("span",null," Cambiar contraseña")],-1),fe=(0,r._)("span",null," Cerrar sesión",-1),pe=(0,r._)("i",{class:"fa-solid fa-right-from-bracket"},null,-1),ve=[fe,pe];function he(e,t,o,a,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",ce,[(0,r.Wm)(ue.T,{modelValue:e.menu,"onUpdate:modelValue":t[1]||(t[1]=t=>e.menu=t),"close-on-content-click":!1,location:"end","onClick:outside":a.rotateIcon},{activator:(0,r.w5)((({props:e})=>[(0,r.Wm)(u.T,(0,r.dG)({icon:"mdi-chevron-down",size:"small",variant:"text"},e,{class:{rotated:a.isRotated},onClick:a.rotateIcon}),null,16,["class","onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)(ne._,{"min-width":"200"},{default:(0,r.w5)((()=>[(0,r.Wm)(ie.i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(de.l,{"prepend-avatar":o.avatarPath,title:o.username,subtitle:o.rol},{append:(0,r.w5)((()=>[])),_:1},8,["prepend-avatar","title","subtitle"])])),_:1}),(0,r.Wm)(le.J),(0,r.Wm)(ie.i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(de.l,{class:"px-5"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{to:"/change",class:"item-nav",href:"/change"},{default:(0,r.w5)((()=>[me])),_:1})])),_:1})])),_:1}),(0,r.Wm)(le.J),(0,r.Wm)(ie.i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(de.l,{class:"px-3"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"py-2 px-5 bg-red-400 hover:bg-red-500 cursor-pointer transition ease-in duration-100 flex justify-between rounded-lg items-center text-white text-sm",onClick:t[0]||(t[0]=(...e)=>a.logout&&a.logout(...e))},ve)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])])}o(560);var be=o(2483),ge={props:{username:String,rol:String,avatarPath:String},data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),setup(){const e=(0,be.tv)(),t=(0,V.iH)(!1),o=()=>{t.value=!t.value},r=()=>{re.Z.commit("setTrolley",[]),re.Z.commit("setIsAuthenticated",!1),re.Z.commit("setEmail",""),re.Z.commit("setRole",""),re.Z.commit("setUsername",""),e.push("/")};return{logout:r,rotateIcon:o,isRotated:t}}},ye=o(89);const _e=(0,ye.Z)(ge,[["render",he]]);var we=_e,xe={components:{MenuAsPopoverVue:we},computed:{cartItemCount(){return this.$store.state.trolley.length},statusAuthenticated(){return this.$store.state.isAuthenticated},statusAdmin(){return"ADMIN"==this.$store.state.role},roleUser(){return"ADMIN"==this.$store.state.role?"Administrador":"Usuario"},usernameValue(){return this.$store.state.username}},data(){return{logoInkacueros:ae,avatarImage:se}},setup(){const e=(0,V.iH)(re.Z.state.isAuthenticated);return{isAuthenticated:e}}};const We=(0,ye.Z)(xe,[["render",oe],["__scopeId","data-v-97d5a8ba"]]);var ke=We,Ie={components:{ToolbarLayout:ke}};const Ce=(0,ye.Z)(Ie,[["render",i]]);var Ae=Ce},1250:function(e,t,o){e.exports=o.p+"img/logoInkakueros.7892916f.png"},8952:function(e,t,o){o.d(t,{Fx:function(){return p},Zq:function(){return v},Z5:function(){return m},cu:function(){return f}});var r=o(9242),a=o(3396),s=o(3766),n=o(1107);const l=(0,s.U)({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function i(e,t,o){return(0,n.ev)()({name:e,props:l({mode:o,origin:t}),setup(t,o){let{slots:s}=o;const n={onBeforeEnter(e){t.origin&&(e.style.transformOrigin=t.origin)},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:o,offsetWidth:r,offsetHeight:a}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${o}px`,e.style.width=`${r}px`,e.style.height=`${a}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:o,left:r,width:a,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=o||"",e.style.left=r||"",e.style.width=a||"",e.style.height=s||""}}};return()=>{const o=t.group?r.W3:r.uT;return(0,a.h)(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},s.default)}}})}function d(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,n.ev)()({name:e,props:{mode:{type:String,default:o},disabled:Boolean},setup(o,s){let{slots:n}=s;return()=>(0,a.h)(r.uT,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:t},n.default)}})}var u=o(7139);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=t?"width":"height",r=(0,u._A)(`offset-${o}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[o]:e.style[o]}},onEnter(t){const a=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[r]}px`;t.style[o]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[o]=s}))},onAfterEnter:s,onEnterCancelled:s,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[o]:e.style[o]},e.style.overflow="hidden",e.style[o]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[o]="0"))},onAfterLeave:a,onLeaveCancelled:a};function a(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[o];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[o]=t),delete e._initialStyle}}i("fab-transition","center center","out-in"),i("dialog-bottom-transition"),i("dialog-top-transition");const m=i("fade-transition"),f=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition"),i("slide-x-reverse-transition"),i("slide-y-transition")),p=(i("slide-y-reverse-transition"),d("expand-transition",c())),v=d("expand-x-transition",c("",!0))}}]);
//# sourceMappingURL=321.ff30cd48.js.map