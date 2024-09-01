import{c as Be,F as ze,C as ue,i as Ze,q as et,r as j,o as tt,a as ot,b as Y,p as rt,d as H,e as Te,f as Pe,u as fe,g as ke,h as Re,j as le,k as nt,t as it,w as He,m as ve,l as y,n as G,s as h,T as Ee,v as at,x as _e,y as L,z as p,A as Ie,B as st,D as Fe,E as P,G as ge,H as U,I as lt,J as We,K as ct,L as d,M as Q,N as dt,O as ye,P as xe,Q as ut,R as ft}from"./index-6pmZwgIe.js";function we(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function ht(e,t){const[a,i]=e.split(" ");return{row:a,col:i||a}}function pt(e,t="default",a=[]){const r=e.$slots[t];return r===void 0?a:r()}function ce(e,t=!0,a=[]){return e.forEach(i=>{if(i!==null){if(typeof i!="object"){(typeof i=="string"||typeof i=="number")&&a.push(Be(String(i)));return}if(Array.isArray(i)){ce(i,t,a);return}if(i.type===ze){if(i.children===null)return;Array.isArray(i.children)&&ce(i.children,t,a)}else{if(i.type===ue&&t)return;a.push(i)}}}),a}function Ae(e,...t){if(Array.isArray(e))e.forEach(a=>Ae(a,...t));else return e(...t)}function he(e){return e.some(t=>Ze(t)?!(t.type===ue||t.type===ze&&!he(t.children)):!0)?e:null}function Ce(e,t){const a=e&&he(e());return t(a||null)}function mt(e){return!(e&&he(e()))}function $e(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}function bt(e,t){if(e===void 0)return!1;if(t){const{context:{ids:a}}=t;return a.has(e)}return et(e)!==null}const V=typeof document<"u"&&typeof window<"u";function vt(){const e=j(!1);return tt(()=>{e.value=!0}),ot(e)}const Se=Pe("n-form-item");function gt(e,{defaultSize:t="medium",mergedSize:a,mergedDisabled:i}={}){const r=Y(Se,null);rt(Se,null);const s=H(a?()=>a(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:B}=r;if(B.value!==void 0)return B.value}return t}),f=H(i?()=>i(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),n=H(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return Te(()=>{r&&r.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:f,mergedStatusRef:n,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}function Oe(e,t,a){if(!t)return;const i=fe(),r=Y(ke,null),s=()=>{const f=a.value;t.mount({id:f===void 0?e:f+e,head:!0,anchorMetaName:le,props:{bPrefix:f?`.${f}-`:void 0},ssr:i}),r!=null&&r.preflightStyleDisabled||nt.mount({id:"n-global",head:!0,anchorMetaName:le,ssr:i})};i?s():Re(s)}function yt(e,t,a,i){var r;a||it("useThemeClass","cssVarsRef is not passed");const s=(r=Y(ke,null))===null||r===void 0?void 0:r.mergedThemeHashRef,f=j(""),n=fe();let l;const B=`__${e}`,E=()=>{let x=B;const k=t?t.value:void 0,F=s==null?void 0:s.value;F&&(x+=`-${F}`),k&&(x+=`-${k}`);const{themeOverrides:z,builtinThemeOverrides:W}=i;z&&(x+=`-${ve(JSON.stringify(z))}`),W&&(x+=`-${ve(JSON.stringify(W))}`),f.value=x,l=()=>{const R=a.value;let N="";for(const $ in R)N+=`${$}: ${R[$]};`;y(`.${x}`,N).mount({id:x,ssr:n}),l=void 0}};return He(()=>{E()}),{themeClass:f,onRender:()=>{l==null||l()}}}function Me(e,t,a){if(!t)return;const i=fe(),r=H(()=>{const{value:f}=t;if(!f)return;const n=f[e];if(n)return n}),s=()=>{He(()=>{const{value:f}=a,n=`${f}${e}Rtl`;if(bt(n,i))return;const{value:l}=r;l&&l.style.mount({id:n,head:!0,anchorMetaName:le,props:{bPrefix:f?`.${f}-`:void 0},ssr:i})})};return i?s():Re(s),r}const je=G({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const a=vt();return()=>h(Ee,{name:"icon-switch-transition",appear:a.value},t)}}),xt=G({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function a(n){e.width?n.style.maxWidth=`${n.offsetWidth}px`:n.style.maxHeight=`${n.offsetHeight}px`,n.offsetWidth}function i(n){e.width?n.style.maxWidth="0":n.style.maxHeight="0",n.offsetWidth;const{onLeave:l}=e;l&&l()}function r(n){e.width?n.style.maxWidth="":n.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function s(n){if(n.style.transition="none",e.width){const l=n.offsetWidth;n.style.maxWidth="0",n.offsetWidth,n.style.transition="",n.style.maxWidth=`${l}px`}else if(e.reverse)n.style.maxHeight=`${n.offsetHeight}px`,n.offsetHeight,n.style.transition="",n.style.maxHeight="0";else{const l=n.offsetHeight;n.style.maxHeight="0",n.offsetWidth,n.style.transition="",n.style.maxHeight=`${l}px`}n.offsetWidth}function f(n){var l;e.width?n.style.maxWidth="":e.reverse||(n.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:n,width:l,appear:B,mode:E}=e,x=n?at:Ee,k={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:B,onEnter:s,onAfterEnter:f,onBeforeLeave:a,onLeave:i,onAfterLeave:r};return n||(k.mode=E),h(x,k,t)}}}),{cubicBezierEaseInOut:wt}=_e;function de({originalTransform:e="",left:t=0,top:a=0,transition:i=`all .3s ${wt} !important`}={}){return[y("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:t,top:a,opacity:0}),y("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:a,opacity:1}),y("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:a,transition:i})]}const Ct=y([y("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),L("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[p("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[de()]),p("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[de({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),p("container",`
 animation: rotator 3s linear infinite both;
 `,[p("icon",`
 height: 1em;
 width: 1em;
 `)])])]),ae="1.6s",$t={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},St=G({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},$t),setup(e){Oe("-base-loading",Ct,Ie(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:a,stroke:i,scale:r}=this,s=t/r;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(je,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},h("g",null,h("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${s} ${s};270 ${s} ${s}`,begin:"0s",dur:ae,fill:"freeze",repeatCount:"indefinite"}),h("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:s,cy:s,r:t-a/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},h("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${s} ${s};135 ${s} ${s};450 ${s} ${s}`,begin:"0s",dur:ae,fill:"freeze",repeatCount:"indefinite"}),h("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:ae,fill:"freeze",repeatCount:"indefinite"})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),Bt=L("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),zt=G({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Oe("-base-wave",Bt,Ie(e,"clsPrefix"));const t=j(null),a=j(!1);let i=null;return Te(()=>{i!==null&&window.clearTimeout(i)}),{active:a,selfRef:t,play(){i!==null&&(window.clearTimeout(i),a.value=!1,i=null),st(()=>{var r;(r=t.value)===null||r===void 0||r.offsetHeight,a.value=!0,i=window.setTimeout(()=>{a.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:I}=_e;function Tt({duration:e=".2s",delay:t=".1s"}={}){return[y("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),y("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),y("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${I},
 max-width ${e} ${I} ${t},
 margin-left ${e} ${I} ${t},
 margin-right ${e} ${I} ${t};
 `),y("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${I} ${t},
 max-width ${e} ${I},
 margin-left ${e} ${I},
 margin-right ${e} ${I};
 `)]}const Pt=V&&"chrome"in window;V&&navigator.userAgent.includes("Firefox");const kt=V&&navigator.userAgent.includes("Safari")&&!Pt;function M(e){return Fe(e,[255,255,255,.16])}function J(e){return Fe(e,[0,0,0,.12])}const Rt=Pe("n-button-group"),Ht=y([L("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[P("color",[p("border",{borderColor:"var(--n-border-color)"}),P("disabled",[p("border",{borderColor:"var(--n-border-color-disabled)"})]),ge("disabled",[y("&:focus",[p("state-border",{borderColor:"var(--n-border-color-focus)"})]),y("&:hover",[p("state-border",{borderColor:"var(--n-border-color-hover)"})]),y("&:active",[p("state-border",{borderColor:"var(--n-border-color-pressed)"})]),P("pressed",[p("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),P("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[p("border",{border:"var(--n-border-disabled)"})]),ge("disabled",[y("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[p("state-border",{border:"var(--n-border-focus)"})]),y("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[p("state-border",{border:"var(--n-border-hover)"})]),y("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[p("state-border",{border:"var(--n-border-pressed)"})]),P("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[p("state-border",{border:"var(--n-border-pressed)"})])]),P("loading","cursor: wait;"),L("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[P("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),V&&"MozBoxSizing"in document.createElement("div").style?y("&::moz-focus-inner",{border:0}):null,p("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),p("border",{border:"var(--n-border)"}),p("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),p("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[L("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[de({top:"50%",originalTransform:"translateY(-50%)"})]),Tt()]),p("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[y("~",[p("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),P("block",`
 display: flex;
 width: 100%;
 `),P("dashed",[p("border, state-border",{borderStyle:"dashed !important"})]),P("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),y("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),y("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Et=Object.assign(Object.assign({},U.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!kt}}),_t=G({name:"Button",props:Et,setup(e){const t=j(null),a=j(null),i=j(!1),r=lt(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),s=Y(Rt,{}),{mergedSizeRef:f}=gt({},{defaultSize:"medium",mergedSize:c=>{const{size:m}=e;if(m)return m;const{size:w}=s;if(w)return w;const{mergedSize:o}=c||{};return o?o.value:"medium"}}),n=H(()=>e.focusable&&!e.disabled),l=c=>{var m;n.value||c.preventDefault(),!e.nativeFocusBehavior&&(c.preventDefault(),!e.disabled&&n.value&&((m=t.value)===null||m===void 0||m.focus({preventScroll:!0})))},B=c=>{var m;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&Ae(w,c),e.text||(m=a.value)===null||m===void 0||m.play()}},E=c=>{switch(c.key){case"Enter":if(!e.keyboard)return;i.value=!1}},x=c=>{switch(c.key){case"Enter":if(!e.keyboard||e.loading){c.preventDefault();return}i.value=!0}},k=()=>{i.value=!1},{inlineThemeDisabled:F,mergedClsPrefixRef:z,mergedRtlRef:W}=We(e),R=U("Button","-button",Ht,ct,e,z),N=Me("Button",W,z),$=H(()=>{const c=R.value,{common:{cubicBezierEaseInOut:m,cubicBezierEaseOut:w},self:o}=c,{rippleDuration:X,opacityDisabled:D,fontWeight:Z,fontWeightStrong:ee}=o,T=f.value,{dashed:te,type:A,ghost:oe,text:_,color:b,round:pe,circle:re,textColor:O,secondary:Ge,tertiary:me,quaternary:Ne,strong:Le}=e,Ve={"font-weight":Le?ee:Z};let v={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const K=A==="tertiary",be=A==="default",u=K?"default":A;if(_){const g=O||b;v={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":g||o[d("textColorText",u)],"--n-text-color-hover":g?M(g):o[d("textColorTextHover",u)],"--n-text-color-pressed":g?J(g):o[d("textColorTextPressed",u)],"--n-text-color-focus":g?M(g):o[d("textColorTextHover",u)],"--n-text-color-disabled":g||o[d("textColorTextDisabled",u)]}}else if(oe||te){const g=O||b;v={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":b||o[d("rippleColor",u)],"--n-text-color":g||o[d("textColorGhost",u)],"--n-text-color-hover":g?M(g):o[d("textColorGhostHover",u)],"--n-text-color-pressed":g?J(g):o[d("textColorGhostPressed",u)],"--n-text-color-focus":g?M(g):o[d("textColorGhostHover",u)],"--n-text-color-disabled":g||o[d("textColorGhostDisabled",u)]}}else if(Ge){const g=be?o.textColor:K?o.textColorTertiary:o[d("color",u)],C=b||g,q=A!=="default"&&A!=="tertiary";v={"--n-color":q?Q(C,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":q?Q(C,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":q?Q(C,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":q?Q(C,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":C,"--n-text-color-pressed":C,"--n-text-color-focus":C,"--n-text-color-disabled":C}}else if(me||Ne){const g=be?o.textColor:K?o.textColorTertiary:o[d("color",u)],C=b||g;me?(v["--n-color"]=o.colorTertiary,v["--n-color-hover"]=o.colorTertiaryHover,v["--n-color-pressed"]=o.colorTertiaryPressed,v["--n-color-focus"]=o.colorSecondaryHover,v["--n-color-disabled"]=o.colorTertiary):(v["--n-color"]=o.colorQuaternary,v["--n-color-hover"]=o.colorQuaternaryHover,v["--n-color-pressed"]=o.colorQuaternaryPressed,v["--n-color-focus"]=o.colorQuaternaryHover,v["--n-color-disabled"]=o.colorQuaternary),v["--n-ripple-color"]="#0000",v["--n-text-color"]=C,v["--n-text-color-hover"]=C,v["--n-text-color-pressed"]=C,v["--n-text-color-focus"]=C,v["--n-text-color-disabled"]=C}else v={"--n-color":b||o[d("color",u)],"--n-color-hover":b?M(b):o[d("colorHover",u)],"--n-color-pressed":b?J(b):o[d("colorPressed",u)],"--n-color-focus":b?M(b):o[d("colorFocus",u)],"--n-color-disabled":b||o[d("colorDisabled",u)],"--n-ripple-color":b||o[d("rippleColor",u)],"--n-text-color":O||(b?o.textColorPrimary:K?o.textColorTertiary:o[d("textColor",u)]),"--n-text-color-hover":O||(b?o.textColorHoverPrimary:o[d("textColorHover",u)]),"--n-text-color-pressed":O||(b?o.textColorPressedPrimary:o[d("textColorPressed",u)]),"--n-text-color-focus":O||(b?o.textColorFocusPrimary:o[d("textColorFocus",u)]),"--n-text-color-disabled":O||(b?o.textColorDisabledPrimary:o[d("textColorDisabled",u)])};let ne={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};_?ne={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ne={"--n-border":o[d("border",u)],"--n-border-hover":o[d("borderHover",u)],"--n-border-pressed":o[d("borderPressed",u)],"--n-border-focus":o[d("borderFocus",u)],"--n-border-disabled":o[d("borderDisabled",u)]};const{[d("height",T)]:ie,[d("fontSize",T)]:De,[d("padding",T)]:Ke,[d("paddingRound",T)]:qe,[d("iconSize",T)]:Qe,[d("borderRadius",T)]:Je,[d("iconMargin",T)]:Ye,waveOpacity:Ue}=o,Xe={"--n-width":re&&!_?ie:"initial","--n-height":_?"initial":ie,"--n-font-size":De,"--n-padding":re||_?"initial":pe?qe:Ke,"--n-icon-size":Qe,"--n-icon-margin":Ye,"--n-border-radius":_?"initial":re||pe?ie:Je};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":m,"--n-bezier-ease-out":w,"--n-ripple-duration":X,"--n-opacity-disabled":D,"--n-wave-opacity":Ue},Ve),v),ne),Xe)}),S=F?yt("button",H(()=>{let c="";const{dashed:m,type:w,ghost:o,text:X,color:D,round:Z,circle:ee,textColor:T,secondary:te,tertiary:A,quaternary:oe,strong:_}=e;m&&(c+="a"),o&&(c+="b"),X&&(c+="c"),Z&&(c+="d"),ee&&(c+="e"),te&&(c+="f"),A&&(c+="g"),oe&&(c+="h"),_&&(c+="i"),D&&(c+=`j${$e(D)}`),T&&(c+=`k${$e(T)}`);const{value:b}=f;return c+=`l${b[0]}`,c+=`m${w[0]}`,c}),$,e):void 0;return{selfElRef:t,waveElRef:a,mergedClsPrefix:z,mergedFocusable:n,mergedSize:f,showBorder:r,enterPressed:i,rtlEnabled:N,handleMousedown:l,handleKeydown:x,handleBlur:k,handleKeyup:E,handleClick:B,customColorCssVars:H(()=>{const{color:c}=e;if(!c)return null;const m=M(c);return{"--n-border-color":c,"--n-border-color-hover":m,"--n-border-color-pressed":J(c),"--n-border-color-focus":m,"--n-border-color-disabled":c}}),cssVars:F?void 0:$,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:a}=this;a==null||a();const i=Ce(this.$slots.default,r=>r&&h("span",{class:`${e}-button__content`},r));return h(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,h(xt,{width:!0},{default:()=>Ce(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&h("span",{class:`${e}-button__icon`,style:{margin:mt(this.$slots.default)?"0":""}},h(je,null,{default:()=>this.loading?h(St,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&i,this.text?null:h(zt,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),It={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function Ft(){return It}const Wt={name:"Space",self:Ft};let se;function At(){if(!V)return!0;if(se===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),se=t}return se}const Ot=Object.assign(Object.assign({},U.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Mt=G({name:"Space",props:Ot,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:a}=We(e),i=U("Space","-space",void 0,Wt,e,t),r=Me("Space",a,t);return{useGap:At(),rtlEnabled:r,mergedClsPrefix:t,margin:H(()=>{const{size:s}=e;if(Array.isArray(s))return{horizontal:s[0],vertical:s[1]};if(typeof s=="number")return{horizontal:s,vertical:s};const{self:{[d("gap",s)]:f}}=i.value,{row:n,col:l}=ht(f);return{horizontal:we(l),vertical:we(n)}})}},render(){const{vertical:e,reverse:t,align:a,inline:i,justify:r,itemClass:s,itemStyle:f,margin:n,wrap:l,mergedClsPrefix:B,rtlEnabled:E,useGap:x,wrapItem:k,internalUseGap:F}=this,z=ce(pt(this),!1);if(!z.length)return null;const W=`${n.horizontal}px`,R=`${n.horizontal/2}px`,N=`${n.vertical}px`,$=`${n.vertical/2}px`,S=z.length-1,c=r.startsWith("space-");return h("div",{role:"none",class:[`${B}-space`,E&&`${B}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(r)?`flex-${r}`:r,flexWrap:!l||e?"nowrap":"wrap",marginTop:x||e?"":`-${$}`,marginBottom:x||e?"":`-${$}`,alignItems:a,gap:x?`${n.vertical}px ${n.horizontal}px`:""}},!k&&(x||F)?z:z.map((m,w)=>m.type===ue?m:h("div",{role:"none",class:s,style:[f,{maxWidth:"100%"},x?"":e?{marginBottom:w!==S?N:""}:E?{marginLeft:c?r==="space-between"&&w===S?"":R:w!==S?W:"",marginRight:c?r==="space-between"&&w===0?"":R:"",paddingTop:$,paddingBottom:$}:{marginRight:c?r==="space-between"&&w===S?"":R:w!==S?W:"",marginLeft:c?r==="space-between"&&w===0?"":R:"",paddingTop:$,paddingBottom:$}]},m)))}}),Gt=G({__name:"index",setup(e){return(t,a)=>(ut(),dt(xe(Mt),null,{default:ye(()=>[ft(xe(_t),{type:"primary"},{default:ye(()=>[Be(" 按钮")]),_:1})]),_:1}))}});export{Gt as default};
