"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[6168],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(r),m=i,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||n;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8376:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=r(7813),i=r(7044),n=(r(9496),r(9613)),o=["components"],c={title:"How to add a chatbot - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.",hide_title:!0,sidebar_label:"Chatbot Integration",sidebar_position:4},l=void 0,s={unversionedId:"features/chatbot",id:"features/chatbot",title:"How to add a chatbot - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.",source:"@site/docs/03_features/05_chatbot.md",sourceDirName:"03_features",slug:"/features/chatbot",permalink:"/docs/features/chatbot",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/03_features/05_chatbot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to add a chatbot - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.",hide_title:!0,sidebar_label:"Chatbot Integration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Embed a SCORM package in a GMetri experience",permalink:"/docs/features/scorm/embed-a-scorm-package-in-a-gmetri-experience"},next:{title:"QR Code Scanner",permalink:"/docs/features/qr_code"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Get The Embed Code For The Chatbot",id:"get-the-embed-code-for-the-chatbot",level:2},{value:"Add The Embed Code in the editor",id:"add-the-embed-code-in-the-editor",level:2},{value:"Test",id:"test",level:2}],h={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.gmetri.com/metaverse/integrations/adding-a-chatbot"})),(0,n.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DOCUMENTATION MOVED")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Go to the new version of this page at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gmetri.com/metaverse/integrations/adding-a-chatbot"},"https://docs.gmetri.com/metaverse/integrations/adding-a-chatbot")))),(0,n.kt)("h1",{id:"chatbot"},"Chatbot"),(0,n.kt)("iframe",{src:"https://view.gmetri.com/v5/gmetri/example_chatbot",width:"100%",height:"400px"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"A chatbot allows you to interact with users. GMetri platform allows experience creators to add third-party chat bots to the XR experiences."),(0,n.kt)("p",null,"This simple experience demonstrates chatbot integration on GMetri."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This sample experience is available to all ",(0,n.kt)("a",{parentName:"li",href:"https://view.gmetri.com/v4/gmetri/example_chatbot"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"We use ",(0,n.kt)("a",{parentName:"li",href:"https://landbot.io/"},"Landbot.io")," as the external service for the chatbot in this tutorial, but you can use any chatbot of your choice.")),(0,n.kt)("h2",{id:"get-the-embed-code-for-the-chatbot"},"Get The Embed Code For The Chatbot"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/landbot_embed.png.jpg#boxShadow",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy the code provided by the chatbot service.")),(0,n.kt)("h2",{id:"add-the-embed-code-in-the-editor"},"Add The Embed Code in the editor"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/custom_script.png.jpg#boxShadow",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Head over to the editor."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"gear icon")," in the bottom of the Right Bar."),(0,n.kt)("li",{parentName:"ol"},"Paste the embed code in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Custom Script")," text area.")),(0,n.kt)("h2",{id:"test"},"Test"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"That's it! It's now time to test our chatbot right in the experience. You can do that by clicking the green ",(0,n.kt)("inlineCode",{parentName:"li"},"Play")," button in Right bar."),(0,n.kt)("li",{parentName:"ul"},"A QR Code will appear. You can view the experience either on your mobile by scanning the QR code, or by opening the experience in a new tab.")),(0,n.kt)("iframe",{src:"https://view.gmetri.com/v4/gmetri/example_chatbot",width:"100%",height:"400px"}))}m.isMDXComponent=!0}}]);