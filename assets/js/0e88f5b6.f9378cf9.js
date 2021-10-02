"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[781],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3941:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(98),i=r(6862),o=(r(9496),r(9613)),l=["components"],a={title:"Insert 3D Models to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.",hide_title:!0,sidebar_label:"AR Viewer"},s="AR Viewer",p={unversionedId:"platform/create/elements/AR Viewer",id:"platform/create/elements/AR Viewer",isDocsHomePage:!1,title:"Insert 3D Models to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.",source:"@site/docs/02-platform/02_create/elements/AR Viewer.md",sourceDirName:"02-platform/02_create/elements",slug:"/platform/create/elements/AR Viewer",permalink:"/docs/platform/create/elements/AR Viewer",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02-platform/02_create/elements/AR Viewer.md",tags:[],version:"current",frontMatter:{title:"Insert 3D Models to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.",hide_title:!0,sidebar_label:"AR Viewer"},sidebar:"tutorialSidebar",previous:{title:"3D Model",permalink:"/docs/platform/create/elements/3D Model"},next:{title:"Action Bar",permalink:"/docs/platform/create/elements/Action Bar"}},c=[{value:"Description",id:"description",children:[{value:"Interactions",id:"interactions",children:[]},{value:"Use this element if you need to",id:"use-this-element-if-you-need-to",children:[]}]},{value:"Looks 3D Model",id:"looks-3d-model",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Rules",id:"rules",children:[{value:"Then Actions",id:"then-actions",children:[]}]},{value:"Compatibility",id:"compatibility",children:[]}],d={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ar-viewer"},"AR Viewer"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The AR Viewer element can be used to show interactive 3D models in your surroundings in AR. This is mobile only feature, for devices that don't support AR, we fallback to showing a 3D model viewer instead."),(0,o.kt)("p",null,"The AR Viewer element is supported on all android devices supporting ARCore and all apple mobile devices running iOS 12+."),(0,o.kt)("p",null,"After entering AR mode, move your device to start tracking a surface to place the 3D model. "),(0,o.kt)("h3",{id:"interactions"},"Interactions"),(0,o.kt)("p",null,"After placing 3D model:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use two fingers (pinch-to-zoom) to adjust size"),(0,o.kt)("li",{parentName:"ul"},"Click and drag the base of the model to move around"),(0,o.kt)("li",{parentName:"ul"},"On Android: Click and drag the model to rotate"),(0,o.kt)("li",{parentName:"ul"},"On iOS: Use two fingers rotate to rotate the 3D model in place. ")),(0,o.kt)("p",null,"3D models can be uploaded using the built-in file manager."),(0,o.kt)("h3",{id:"use-this-element-if-you-need-to"},"Use this element if you need to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Show 3D Models in AR")),(0,o.kt)("h2",{id:"looks-3d-model"},"Looks ",(0,o.kt)("img",{parentName:"h2",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/ar.svg#iconBold/",alt:"3D Model"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90,w_300/gb-web/portal-docs/assets/img/screenshots/ar_element_looks.jpg#boxShadow/",alt:"3D Model Element"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/ar-properties.png.jpg#boxShadow/",alt:"AR Viewer Element Properties"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{parentName:"td",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/upload_26.svg#icon/",alt:"Upload"})," ",(0,o.kt)("br",null)," Upload"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Click on the Upload button to open the GMetri file manager and select an asset to use. ",(0,o.kt)("br",null)," Supported File types: ",(0,o.kt)("inlineCode",{parentName:"td"},".glb"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".gltf"))))),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("h3",{id:"then-actions"},"Then Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"appear")),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"This element supports all devices listed here: ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ar/discover/supported-devices/"},"Supported devices")),(0,o.kt)("p",null,"This element supports 3D models with file specifications listed here: ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ar/develop/java/scene-viewer#file_requirements_for_models/"},"File requirements for models")))}u.isMDXComponent=!0}}]);