"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{530:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(5151),a=n(7437),i=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:i,...l}=e;return(0,a.jsx)("img",{width:n,height:r,ref:t,alt:i,...l})});i.displayName="NativeImage";var l=n(4346),s=n(2265),o=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,u=n(9636),d=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:d,srcSet:c,align:f,fit:b,loading:m,ignoreFallback:v,crossOrigin:h,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:g,...x}=e,N=void 0!==n||void 0!==r,y=null!=m||v||!N,E=o(function(e){let{loading:t,src:n,srcSet:r,onLoad:a,onError:i,crossOrigin:o,sizes:u,ignoreFallback:d}=e,[c,f]=(0,s.useState)("pending");(0,s.useEffect)(()=>{f(n?"loading":"pending")},[n]);let b=(0,s.useRef)(),m=(0,s.useCallback)(()=>{if(!n)return;v();let e=new Image;e.src=n,o&&(e.crossOrigin=o),r&&(e.srcset=r),u&&(e.sizes=u),t&&(e.loading=t),e.onload=e=>{v(),f("loaded"),null==a||a(e)},e.onerror=e=>{v(),f("failed"),null==i||i(e)},b.current=e},[n,o,r,u,a,i,t]),v=()=>{b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return(0,l.G)(()=>{if(!d)return"loading"===c&&m(),()=>{v()}},[c,m,d]),d?"loaded":c}({...e,crossOrigin:h,ignoreFallback:y}),p),C={ref:t,objectFit:b,objectPosition:f,...y?x:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(x,["onError","onLoad"])};return E?r||(0,a.jsx)(u.m.img,{as:i,className:"chakra-image__placeholder",src:n,...C}):(0,a.jsx)(u.m.img,{as:i,src:d,srcSet:c,crossOrigin:h,loading:m,referrerPolicy:g,className:"chakra-image",...C})});d.displayName="Image"},191:function(e,t,n){n.d(t,{x:function(){return d}});var r=n(5151),a=n(5308),i=n(9506),l=n(9636),s=n(9372),o=n(6389),u=n(7437),d=(0,r.G)(function(e,t){let n=(0,a.mq)("Text",e),{className:r,align:d,decoration:c,casing:f,...b}=(0,i.Lr)(e),m=(0,o.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(l.m.p,{ref:t,className:(0,s.cx)("chakra-text",e.className),...m,...b,__css:n})});d.displayName="Text"},230:function(e,t,n){n.d(t,{r:function(){return l}});var r=n(5151),a=n(9636),i=n(7437),l=(0,r.G)(function(e,t){let{templateAreas:n,gap:r,rowGap:l,columnGap:s,column:o,row:u,autoFlow:d,autoRows:c,templateRows:f,autoColumns:b,templateColumns:m,...v}=e;return(0,i.jsx)(a.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:l,gridColumnGap:s,gridAutoColumns:b,gridColumn:o,gridRow:u,gridAutoFlow:d,gridAutoRows:c,gridTemplateRows:f,gridTemplateColumns:m},...v})});l.displayName="Grid"},5500:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(5151),a=n(5308),i=n(9506),l=n(9636),s=n(9372),o=n(7437),u=(0,r.G)(function(e,t){let n=(0,a.mq)("Link",e),{className:r,isExternal:u,...d}=(0,i.Lr)(e);return(0,o.jsx)(l.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,s.cx)("chakra-link",r),...d,__css:n})});u.displayName="Link"},4340:function(e,t,n){n.d(t,{xu:function(){return l}});var r=n(9636),a=n(5151),i=n(7437),l=(0,r.m)("div");l.displayName="Box";var s=(0,a.G)(function(e,t){let{size:n,centerContent:r=!0,...a}=e;return(0,i.jsx)(l,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});s.displayName="Square",(0,a.G)(function(e,t){let{size:n,...r}=e;return(0,i.jsx)(s,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},9236:function(e,t,n){n.d(t,{P:function(){return u}});var r=n(5151),a=n(9636),i=n(6389),l=n(9372);Object.freeze(["base","sm","md","lg","xl","2xl"]);var s=n(7437);function o(e){var t;return t=e=>"auto"===e?"auto":"span ".concat(e,"/span ").concat(e),Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,l.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}var u=(0,r.G)(function(e,t){let{area:n,colSpan:r,colStart:l,colEnd:u,rowEnd:d,rowSpan:c,rowStart:f,...b}=e,m=(0,i.o)({gridArea:n,gridColumn:o(r),gridRow:o(c),gridColumnStart:l,gridColumnEnd:u,gridRowStart:f,gridRowEnd:d});return(0,s.jsx)(a.m.div,{ref:t,__css:m,...b})});u.displayName="GridItem"},6389:function(e,t,n){n.d(t,{o:function(){return r}});function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}},4142:function(e,t,n){n.d(t,{n:function(){return u}});var r=n(1238),a=n(3177),i=n(9372),l=n(5151),s=n(9636),o=n(7437),u=(0,l.G)(function(e,t){let n=(0,a.bt)(e),l=(0,r.s)();return(0,o.jsx)(s.m.div,{...n,width:"100%",ref:t,className:(0,i.cx)("chakra-tabs__tab-panels",e.className),__css:l.tabpanels})});u.displayName="TabPanels"},753:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(1238),a=n(3177),i=n(9372),l=n(5151),s=n(9636),o=n(7437),u=(0,l.G)(function(e,t){let n=(0,a.hp)({...e,ref:t}),l={display:"flex",...(0,r.s)().tablist};return(0,o.jsx)(s.m.div,{...n,className:(0,i.cx)("chakra-tabs__tablist",e.className),__css:l})});u.displayName="TabList"},1238:function(e,t,n){n.d(t,{m:function(){return m},s:function(){return b}});var r=n(3177),a=n(2730),i=n(5151),l=n(5308),s=n(9506),o=n(9636),u=n(9372),d=n(2265),c=n(7437),[f,b]=(0,a.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),m=(0,i.G)(function(e,t){let n=(0,l.jC)("Tabs",e),{children:a,className:i,...b}=(0,s.Lr)(e),{htmlProps:m,descendants:v,...h}=(0,r.YE)(b),p=(0,d.useMemo)(()=>h,[h]),{isFitted:g,...x}=m,N={position:"relative",...n.root};return(0,c.jsx)(r.mE,{value:v,children:(0,c.jsx)(r.X,{value:p,children:(0,c.jsx)(f,{value:n,children:(0,c.jsx)(o.m.div,{className:(0,u.cx)("chakra-tabs",i),ref:t,...x,__css:N,children:a})})})})});m.displayName="Tabs"},6863:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(1238),a=n(3177),i=n(9372),l=n(5151),s=n(9636),o=n(7437),u=(0,l.G)(function(e,t){let n=(0,r.s)(),l=(0,a.xD)({...e,ref:t}),u={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...n.tab};return(0,o.jsx)(s.m.button,{...l,className:(0,i.cx)("chakra-tabs__tab",e.className),__css:u})});u.displayName="Tab"},924:function(e,t,n){n.d(t,{x:function(){return u}});var r=n(1238),a=n(3177),i=n(9372),l=n(5151),s=n(9636),o=n(7437),u=(0,l.G)(function(e,t){let n=(0,a.WE)({...e,ref:t}),l=(0,r.s)();return(0,o.jsx)(s.m.div,{outline:"0",...n,className:(0,i.cx)("chakra-tabs__tab-panel",e.className),__css:l.tabpanel})});u.displayName="TabPanel"},3177:function(e,t,n){n.d(t,{mE:function(){return y},X:function(){return I},xD:function(){return w},hp:function(){return O},WE:function(){return A},bt:function(){return j},YE:function(){return _}});var r=n(2265),a=n(9372);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}}(t,e)})}}function l(e){let{tagName:t,isContentEditable:n}=e.target;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==n}var s=Object.defineProperty,o=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);function d(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var c=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function f(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function b(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var m="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,v=e=>e,h=class{constructor(){var e=this;u(this,"descendants",new Map),u(this,"register",e=>{if(null!=e)return c(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),u(this,"unregister",e=>{this.descendants.delete(e);let t=d(Array.from(this.descendants.keys()));this.assignIndex(t)}),u(this,"destroy",()=>{this.descendants.clear()}),u(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),u(this,"count",()=>this.descendants.size),u(this,"enabledCount",()=>this.enabledValues().length),u(this,"values",()=>Array.from(this.descendants.values()).sort((e,t)=>e.index-t.index)),u(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),u(this,"item",e=>{if(0!==this.count())return this.values()[e]}),u(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),u(this,"first",()=>this.item(0)),u(this,"firstEnabled",()=>this.enabledItem(0)),u(this,"last",()=>this.item(this.descendants.size-1)),u(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),u(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),u(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),u(this,"next",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=f(t,e.count(),n);return e.item(r)}),u(this,"nextEnabled",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=e.item(t);if(!r)return;let a=f(e.enabledIndexOf(r.node),e.enabledCount(),n);return e.enabledItem(a)}),u(this,"prev",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=b(t,e.count()-1,n);return e.item(r)}),u(this,"prevEnabled",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=e.item(t);if(!r)return;let a=b(e.enabledIndexOf(r.node),e.enabledCount()-1,n);return e.enabledItem(a)}),u(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=d(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(n)})}},p=n(2730),[g,x]=(0,p.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),N=n(7132),[y,E,C,k]=[v(g),()=>v(x()),()=>(function(){let e=(0,r.useRef)(new h);return m(()=>()=>e.current.destroy()),e.current})(),e=>(function(e){let t=x(),[n,a]=(0,r.useState)(-1),l=(0,r.useRef)(null);m(()=>()=>{l.current&&t.unregister(l.current)},[]),m(()=>{if(!l.current)return;let e=Number(l.current.dataset.index);n==e||Number.isNaN(e)||a(e)});let s=e?v(t.register(e)):v(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(l.current),register:i(s,l)}})(e)];function _(e){var t;let{defaultIndex:n,onChange:a,index:i,isManual:l,isLazy:s,lazyBehavior:o="unmount",orientation:u="horizontal",direction:d="ltr",...c}=e,[f,b]=(0,r.useState)(null!=n?n:0),[m,v]=function(e){let{value:t,defaultValue:n,onChange:a,shouldUpdate:i=(e,t)=>e!==t}=e,l=(0,N.W)(a),s=(0,N.W)(i),[o,u]=(0,r.useState)(n),d=void 0!==t,c=d?t:o,f=(0,N.W)(e=>{let t="function"==typeof e?e(c):e;s(c,t)&&(d||u(t),l(t))},[d,l,c,s]);return[c,f]}({defaultValue:null!=n?n:0,value:i,onChange:a});(0,r.useEffect)(()=>{null!=i&&b(i)},[i]);let h=C(),p=(0,r.useId)(),g=null!=(t=e.id)?t:p;return{id:"tabs-".concat(g),selectedIndex:m,focusedIndex:f,setSelectedIndex:v,setFocusedIndex:b,isManual:l,isLazy:s,lazyBehavior:o,orientation:u,descendants:h,direction:d,htmlProps:c}}var[I,T]=(0,p.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function O(e){let{focusedIndex:t,orientation:n,direction:i}=T(),l=E(),s=(0,r.useCallback)(e=>{let r=()=>{var e;let n=l.nextEnabled(t);n&&(null==(e=n.node)||e.focus())},a=()=>{var e;let n=l.prevEnabled(t);n&&(null==(e=n.node)||e.focus())},s="horizontal"===n,o="vertical"===n,u={["ltr"===i?"ArrowLeft":"ArrowRight"]:()=>s&&a(),["ltr"===i?"ArrowRight":"ArrowLeft"]:()=>s&&r(),ArrowDown:()=>o&&r(),ArrowUp:()=>o&&a(),Home:()=>{var e;let t=l.firstEnabled();t&&(null==(e=t.node)||e.focus())},End:()=>{var e;let t=l.lastEnabled();t&&(null==(e=t.node)||e.focus())}}[e.key];u&&(e.preventDefault(),u(e))},[l,t,n,i]);return{...e,role:"tablist","aria-orientation":n,onKeyDown:(0,a.v0)(e.onKeyDown,s)}}function w(e){let{isDisabled:t=!1,isFocusable:n=!1,...s}=e,{setSelectedIndex:o,isManual:u,id:d,setFocusedIndex:c,selectedIndex:f}=T(),{index:b,register:m}=k({disabled:t&&!n}),v=b===f;return{...function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:t,isDisabled:n,isFocusable:s,clickOnEnter:o=!0,clickOnSpace:u=!0,onMouseDown:d,onMouseUp:c,onClick:f,onKeyDown:b,onKeyUp:m,tabIndex:v,onMouseOver:h,onMouseLeave:p,...g}=e,[x,N]=(0,r.useState)(!0),[y,E]=(0,r.useState)(!1),C=function(){let e=(0,r.useRef)(new Map),t=e.current,n=(0,r.useCallback)((t,n,r,a)=>{e.current.set(r,{type:n,el:t,options:a}),t.addEventListener(n,r,a)},[]),a=(0,r.useCallback)((t,n,r,a)=>{t.removeEventListener(n,r,a),e.current.delete(r)},[]);return(0,r.useEffect)(()=>()=>{t.forEach((e,t)=>{a(e.el,e.type,t,e.options)})},[a,t]),{add:n,remove:a}}(),k=x?v:v||0,_=n&&!s,I=(0,r.useCallback)(e=>{if(n){e.stopPropagation(),e.preventDefault();return}e.currentTarget.focus(),null==f||f(e)},[n,f]),T=(0,r.useCallback)(e=>{y&&l(e)&&(e.preventDefault(),e.stopPropagation(),E(!1),C.remove(document,"keyup",T,!1))},[y,C]),O=(0,r.useCallback)(e=>{if(null==b||b(e),n||e.defaultPrevented||e.metaKey||!l(e.nativeEvent)||x)return;let t=o&&"Enter"===e.key;u&&" "===e.key&&(e.preventDefault(),E(!0)),t&&(e.preventDefault(),e.currentTarget.click()),C.add(document,"keyup",T,!1)},[n,x,b,o,u,C,T]),w=(0,r.useCallback)(e=>{null==m||m(e),!n&&!e.defaultPrevented&&!e.metaKey&&l(e.nativeEvent)&&!x&&u&&" "===e.key&&(e.preventDefault(),E(!1),e.currentTarget.click())},[u,x,n,m]),D=(0,r.useCallback)(e=>{0===e.button&&(E(!1),C.remove(document,"mouseup",D,!1))},[C]),S=(0,r.useCallback)(e=>{if(0===e.button){if(n){e.stopPropagation(),e.preventDefault();return}x||E(!0),e.currentTarget.focus({preventScroll:!0}),C.add(document,"mouseup",D,!1),null==d||d(e)}},[n,x,d,C,D]),j=(0,r.useCallback)(e=>{0===e.button&&(x||E(!1),null==c||c(e))},[c,x]),A=(0,r.useCallback)(e=>{if(n){e.preventDefault();return}null==h||h(e)},[n,h]),P=(0,r.useCallback)(e=>{y&&(e.preventDefault(),E(!1)),null==p||p(e)},[y,p]),G=i(t,e=>{e&&"BUTTON"!==e.tagName&&N(!1)});return x?{...g,ref:G,type:"button","aria-disabled":_?void 0:n,disabled:_,onClick:I,onMouseDown:d,onMouseUp:c,onKeyUp:m,onKeyDown:b,onMouseOver:h,onMouseLeave:p}:{...g,ref:G,role:"button","data-active":(0,a.PB)(y),"aria-disabled":n?"true":void 0,tabIndex:_?void 0:k,onClick:I,onMouseDown:S,onMouseUp:j,onKeyUp:w,onKeyDown:O,onMouseOver:A,onMouseLeave:P}}({...s,ref:i(m,e.ref),isDisabled:t,isFocusable:n,onClick:(0,a.v0)(e.onClick,()=>{o(b)})}),id:P(d,b),role:"tab",tabIndex:v?0:-1,type:"button","aria-selected":v,"aria-controls":G(d,b),onFocus:t?void 0:(0,a.v0)(e.onFocus,()=>{c(b);let e=t&&n;u||e||o(b)})}}var[D,S]=(0,p.k)({});function j(e){var t;let{id:n,selectedIndex:a}=T(),i=(t=e.children,r.Children.toArray(t).filter(e=>(0,r.isValidElement)(e))).map((e,t)=>(0,r.createElement)(D,{key:t,value:{isSelected:t===a,id:G(n,t),tabId:P(n,t),selectedIndex:a}},e));return{...e,children:i}}function A(e){let{children:t,...n}=e,{isLazy:a,lazyBehavior:i}=T(),{isSelected:l,id:s,tabId:o}=S(),u=(0,r.useRef)(!1);l&&(u.current=!0);let d=function(e){let{wasSelected:t,enabled:n,isSelected:r,mode:a="unmount"}=e;return!n||!!r||"keepMounted"===a&&!!t}({wasSelected:u.current,isSelected:l,enabled:a,mode:i});return{tabIndex:0,...n,children:d?t:null,role:"tabpanel","aria-labelledby":o,hidden:!l,id:s}}function P(e,t){return"".concat(e,"--tab-").concat(t)}function G(e,t){return"".concat(e,"--tabpanel-").concat(t)}}}]);