"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[5365],{9613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6323:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9496);function i(e){var t=e.heading,n=e.link,i=e.onClick,r=void 0===i?function(){}:i;return a.createElement("a",{href:n||"javascript:void(0)",onClick:r,className:"tutorial_card"},a.createElement("div",{className:"tutorial_card__wrapper"},a.createElement("div",{className:"tutorial_card__heading"},t)))}},5830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(7813),i=n(7044),r=(n(9496),n(9613)),o=(n(6323),["components"]),s={sidebar_label:"Experience Optimization",sidebar_position:7},l="Creating Experiences Optimized for the Web",p={unversionedId:"guidelines/creating-optimized-experience",id:"guidelines/creating-optimized-experience",title:"Creating Experiences Optimized for the Web",description:"Tips and tricks to create an experience that runs smoothly on any device",source:"@site/docs/04_guidelines/08_creating-optimized-experience.md",sourceDirName:"04_guidelines",slug:"/guidelines/creating-optimized-experience",permalink:"/docs/guidelines/creating-optimized-experience",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/04_guidelines/08_creating-optimized-experience.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Experience Optimization",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"XR Experience Storyboard",permalink:"/docs/guidelines/xr-expirence-storyboard"},next:{title:"Platform Compatibility Matrix",permalink:"/docs/compatibility/platform-compatibility-matrix"}},m=[{value:"Things to think about when building for the Web",id:"things-to-think-about-when-building-for-the-web",children:[{value:"Network Usage",id:"network-usage",children:[],level:3},{value:"Memory Usage",id:"memory-usage",children:[],level:3},{value:"CPU/GPU Usage",id:"cpugpu-usage",children:[],level:3}],level:2},{value:"Hardware Capability Limitation",id:"hardware-capability-limitation",children:[{value:"Video",id:"video",children:[],level:3},{value:"Audio",id:"audio",children:[],level:3}],level:2},{value:"Videos: Tips",id:"videos-tips",children:[{value:"Keep vides hidden until needed the scene",id:"keep-vides-hidden-until-needed-the-scene",children:[],level:3}],level:2},{value:"Images: Tips",id:"images-tips",children:[],level:2},{value:"Transparent pixels use the same amount of memory as non-transparent ones",id:"transparent-pixels-use-the-same-amount-of-memory-as-non-transparent-ones",children:[{value:"Avoid decorational transparent images",id:"avoid-decorational-transparent-images",children:[],level:3},{value:"Use only minimum possible resolution of the image that\u2019s being used in the viewport",id:"use-only-minimum-possible-resolution-of-the-image-thats-being-used-in-the-viewport",children:[],level:3}],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-experiences-optimized-for-the-web"},"Creating Experiences Optimized for the Web"),(0,r.kt)("p",null,"Tips and tricks to create an experience that runs smoothly on any device"),(0,r.kt)("h2",{id:"things-to-think-about-when-building-for-the-web"},"Things to think about when building for the Web"),(0,r.kt)("h3",{id:"network-usage"},"Network Usage"),(0,r.kt)("p",null,"Dependent on asset size. A 26Kb is better than a 100Kb image."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try keeping asset file size small. Use as much compression as possible to reduce the image size, as long as the quality doesn\u2019t get affected.")),(0,r.kt)("h3",{id:"memory-usage"},"Memory Usage"),(0,r.kt)("p",null,"Affected by image resolution: pixels used by an image, calculated by  (x*y)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Don't use image/videos of a resolution higher than needed. A 50px ",(0,r.kt)("em",{parentName:"li"}," 50px image is better than a 100px ")," 100px image")),(0,r.kt)("h3",{id:"cpugpu-usage"},"CPU/GPU Usage"),(0,r.kt)("p",null,"  Devices have a limited amount of processing capability. Videos consume a lot more CPU/GPU than images, 3D models. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bigger the video/3D model, more is the CPU and Memory consumption."),(0,r.kt)("li",{parentName:"ul"},"Prefer images to videos: Try offloading as many effects as possible to images, instead of videos. Running too many (> 3) parallel videos in the same scene may not be supported by a lot of devices. You can use animations provided with images/pano images to try to produce a similar effect")),(0,r.kt)("h2",{id:"hardware-capability-limitation"},"Hardware Capability Limitation"),(0,r.kt)("p",null,"All devices have inherent limitation on the number of audio/video streams they can run in parallel."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.gmetri.com/docs/compatibility/platform-compatibility-matrix#media-codec-compatibility"},"https://support.gmetri.com/docs/compatibility/platform-compatibility-matrix#media-codec-compatibility")),(0,r.kt)("h3",{id:"video"},"Video"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"center"},"No of 1K videos"),(0,r.kt)("th",{parentName:"tr",align:"center"},"No of ~4K Videos (3840x1920)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Desktop/Laptop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Androids Phones"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS Phones"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")))),(0,r.kt)("h3",{id:"audio"},"Audio"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"center"},"No of audio elements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Desktop/Laptop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Androids Phones"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS Phones"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7")))),(0,r.kt)("h2",{id:"videos-tips"},"Videos: Tips"),(0,r.kt)("h3",{id:"keep-vides-hidden-until-needed-the-scene"},"Keep vides hidden until needed the scene"),(0,r.kt)("p",null,"A non-hidden video get decoded by CPU/GPU and blocks its bandwidth. Hidden videos don't consume any CPU/GPU. So keep them hidden until needed, and hide them again if not needed anymore."),(0,r.kt)("h2",{id:"images-tips"},"Images: Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transparent pixels use the same amount of memory as non-transparent ones"),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t use more pixels than being used in the viewport (the user\u2019s monitor).\nEg: If you use an Image that\u2019s 5meters ",(0,r.kt)("em",{parentName:"li"}," 5meters in 3D, and but placed 20 meters from the camera, its actual usage on the viewport is going to be only 100px ")," 100px. In that case, use a 100px * 100px as the base image")),(0,r.kt)("h2",{id:"transparent-pixels-use-the-same-amount-of-memory-as-non-transparent-ones"},"Transparent pixels use the same amount of memory as non-transparent ones"),(0,r.kt)("p",null,"Avoid using transparency for image placement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bad Example:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/bo_10/gb-web/portal-docs/assets/img/screenshots/01_C__R.png",alt:"bad example"})),(0,r.kt)("p",null,"Dimensions: 960px x 831px. So it uses 797760 bytes = 0.79 MB in memory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Good Example")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/01_C__R1.png",alt:"good example"})),(0,r.kt)("p",null,"Dimensions: 235px x 235px. So it uses 55225 bytes = 0.05 MB in memory. 16x better than the bad example"),(0,r.kt)("h3",{id:"avoid-decorational-transparent-images"},"Avoid decorational transparent images"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bad Example")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_965,h_742,q_90/gb-web/portal-docs/assets/img/screenshots/decorationaltranparent%20.png",alt:"transparent"}),"\nAlthough it's only 3Kb in size, its resolution is 960px * 608px, and so ends up using 0.5MB RAM!"),(0,r.kt)("h3",{id:"use-only-minimum-possible-resolution-of-the-image-thats-being-used-in-the-viewport"},"Use only minimum possible resolution of the image that\u2019s being used in the viewport"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bad Example")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_820,h_189,q_90/gb-web/portal-docs/assets/img/screenshots/45_26_False1b.png",alt:"false"})),(0,r.kt)("p",null,"Dimensions: 820px * 189px. i.e. it uses 154980 bytes (0.15MB) in memory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Good Example")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1600,h_1000,q_90/gb-web/portal-docs/assets/img/screenshots/decoration%20goodexample.jpg",alt:"good example"})),(0,r.kt)("p",null,"As you can see from the usage, the actual usage takes only about 300px ",(0,r.kt)("em",{parentName:"p"}," 75px. So instead of using a 820px ")," 189px image for it, use a 300px * 75px image. This would reduce the memory consumption by 7 times!"))}u.isMDXComponent=!0}}]);