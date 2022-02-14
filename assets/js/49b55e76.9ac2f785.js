"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[9559],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1377:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7813),i=r(7044),o=(r(9496),r(9613)),a=["components"],l={title:"Add Voice Recognition to Build XR Experiences",sidebar_label:"Voice",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding Voice Recognition in GMetri XR experiences.",hide_title:!0},c="Voice",s={unversionedId:"platform/create/elements/voice",id:"platform/create/elements/voice",title:"Add Voice Recognition to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding Voice Recognition in GMetri XR experiences.",source:"@site/docs/02_platform/02_create/03_elements/voice.md",sourceDirName:"02_platform/02_create/03_elements",slug:"/platform/create/elements/voice",permalink:"/docs/platform/create/elements/voice",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/02_create/03_elements/voice.md",tags:[],version:"current",frontMatter:{title:"Add Voice Recognition to Build XR Experiences",sidebar_label:"Voice",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding Voice Recognition in GMetri XR experiences.",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Video",permalink:"/docs/platform/create/elements/video"},next:{title:"Wayfinder",permalink:"/docs/platform/create/elements/wayfinder"}},p=[{value:"Description Voice",id:"description-voice",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Rules",id:"rules",children:[{value:"When Event",id:"when-event",children:[],level:3},{value:"Then Actions",id:"then-actions",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"voice"},"Voice"),(0,o.kt)("h2",{id:"description-voice"},"Description ",(0,o.kt)("img",{parentName:"h2",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/voice.svg#icon/",alt:"Voice"})),(0,o.kt)("p",null,"Add Voice Recognition"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Voice_Element_properties.png.jpg#boxShadow/",alt:"Voice Element Properties"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Phrases"),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of Phrases and their Aliases that the element should try and match. An alias is a phrase that should be recognised as the same phrase as it's parent phrase; Each phrase may have multiple aliases. For example, the phrase 'Hello' may have aliases like 'Hi', 'Hey', 'Good Morning', etc. For any of these Aliases, the rule associated with the Phrase 'Hello' will be executed.")))),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("h3",{id:"when-event"},"When Event"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"matches phrase"),(0,o.kt)("li",{parentName:"ul"},"matches no phrase")),(0,o.kt)("h3",{id:"then-actions"},"Then Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"start listening")),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Android (Google Chrome)"),(0,o.kt)("th",{parentName:"tr",align:"center"},"iOS (Google Chrome)"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Oculus Go"),(0,o.kt)("th",{parentName:"tr",align:"center"},"PC (Google Chrome)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes")))))}d.isMDXComponent=!0}}]);