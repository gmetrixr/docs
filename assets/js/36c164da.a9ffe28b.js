"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[3895],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(98),a=n(6862),o=(n(9496),n(9613)),i=["components"],l={description:"Understand concepts related to Elements on the GMetri XR platform.",hide_title:!0,sidebar_label:"Introduction",sidebar_position:1},s="Elements",c={unversionedId:"platform/create/elements/intro",id:"platform/create/elements/intro",isDocsHomePage:!1,title:"Elements",description:"Understand concepts related to Elements on the GMetri XR platform.",source:"@site/docs/02_platform/02_create/03_elements/01_intro.md",sourceDirName:"02_platform/02_create/03_elements",slug:"/platform/create/elements/intro",permalink:"/docs/platform/create/elements/intro",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/02_create/03_elements/01_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Understand concepts related to Elements on the GMetri XR platform.",hide_title:!0,sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Keyboard Shortcuts",permalink:"/docs/platform/create/experience/keyboard_shortcuts"},next:{title:"3D Model",permalink:"/docs/platform/create/elements/3d-model"}},p=[{value:"Adding Elements",id:"adding-elements",children:[]},{value:"Element Properties",id:"element-properties",children:[]},{value:"Events and Actions",id:"events-and-actions",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"elements"},"Elements"),(0,o.kt)("p",null,"Elements are the basic building blocks added to a scene. Examples of elements are ",(0,o.kt)("inlineCode",{parentName:"p"},"Cube"),",",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Polygon"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Product Card")," and many more."),(0,o.kt)("p",null,"Elements belong to the following categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scene"),(0,o.kt)("li",{parentName:"ul"},"Panorama"),(0,o.kt)("li",{parentName:"ul"},"Standard"),(0,o.kt)("li",{parentName:"ul"},"Audio"),(0,o.kt)("li",{parentName:"ul"},"3D"),(0,o.kt)("li",{parentName:"ul"},"Spatial"),(0,o.kt)("li",{parentName:"ul"},"Gamification"),(0,o.kt)("li",{parentName:"ul"},"User Input"),(0,o.kt)("li",{parentName:"ul"},"User Interface"),(0,o.kt)("li",{parentName:"ul"},"Connect")),(0,o.kt)("h2",{id:"adding-elements"},"Adding Elements"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/elements.JPG#boxShadow/",alt:"Editor Adding Elements"})),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," button in the editor that opens up an array of elements to be added to a scene."),(0,o.kt)("h2",{id:"element-properties"},"Element Properties"),(0,o.kt)("p",null,"Every element has certain set of properties to control the appearence and behaviour of that element. For example, you can control dimensions of the cube, lock it in the 3D space and change its color. SImilarly you can change the product information inside a product card."),(0,o.kt)("p",null,"Some elements are 3D whilst some of them are 2D. Both are associated to a scene but the 2D elements won't appear on the 3D canvas. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product Card")," appears as a dialog or a model overlay on the 3D canvas. It is thus a 2D element."),(0,o.kt)("h2",{id:"events-and-actions"},"Events and Actions"),(0,o.kt)("p",null,"Experience viewers can play around with the 3D canvas and the elements inside it. Every element has a few set of allowed actions that are set by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Rules"),". These actions differ from element to element. Actions are performed when a particular event occurs on an Element."))}d.isMDXComponent=!0}}]);