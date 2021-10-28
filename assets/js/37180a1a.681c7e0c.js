"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[5588],{9613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3252:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(98),i=r(6862),o=(r(9496),r(9613)),a=["components"],l={title:"Add Audio",sidebar_label:"Audio",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding audio recorded from microphone in GMetri XR experiences.",hide_title:!0},p="Audio",u={unversionedId:"platform/create/elements/audio",id:"platform/create/elements/audio",isDocsHomePage:!1,title:"Add Audio",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding audio recorded from microphone in GMetri XR experiences.",source:"@site/docs/02_platform/02_create/03_elements/audio.md",sourceDirName:"02_platform/02_create/03_elements",slug:"/platform/create/elements/audio",permalink:"/docs/platform/create/elements/audio",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/02_create/03_elements/audio.md",tags:[],version:"current",frontMatter:{title:"Add Audio",sidebar_label:"Audio",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding audio recorded from microphone in GMetri XR experiences.",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"AR Viewer",permalink:"/docs/platform/create/elements/ar-viewer"},next:{title:"Capture Input",permalink:"/docs/platform/create/elements/capture-input"}},s=[{value:"Properties",id:"properties",children:[{value:"Playback Properties",id:"playback-properties",children:[]},{value:"Speech Properties (Only for Audio TTS)",id:"speech-properties-only-for-audio-tts",children:[]}]},{value:"Rules",id:"rules",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"audio"},"Audio"),(0,o.kt)("p",null,"Audio/Sound can be added to an experience using two elements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Audio"),": Use this to upload an existing audio file."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Audio TTS"),": Use this to use text to generate audio, by converting Text To Speech (TTS).")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"playback-properties"},"Playback Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Volume"),": This sets the initial volume of the audio. You can later change this using rules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Muted"),": Check this to mute the audio. You can later unmute this using rules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Loop"),": Check this if you want the audio to keep looping")),(0,o.kt)("h3",{id:"speech-properties-only-for-audio-tts"},"Speech Properties (Only for Audio TTS)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Voice")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Speed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pitch"))),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Events"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"When audio")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ends")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Actions"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Then audio should")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"play/resume"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"play/seek to (n) sec"),"/"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pause"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"toggle play/pause"),"/"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mute"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"unmute"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"set volume to (n)"))))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("iframe",{width:"100%",height:"380px",src:"https://www.youtube.com/embed/A2tYT2jo50E",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);