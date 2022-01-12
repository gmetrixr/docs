"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[6358],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(98),o=n(6862),i=(n(9496),n(9613)),a=["components"],s={sidebar_label:"Constraints",sidebar_position:4},c="Constraints",l={unversionedId:"compatibility/constraints",id:"compatibility/constraints",isDocsHomePage:!1,title:"Constraints",description:"There are certain limitation you should keep in mind while building a GMetri experience.",source:"@site/docs/05_compatibility/04_constraints.md",sourceDirName:"05_compatibility",slug:"/compatibility/constraints",permalink:"/docs/compatibility/constraints",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/05_compatibility/04_constraints.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Constraints",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Asset Recommendations",permalink:"/docs/compatibility/asset-recommendations"},next:{title:"General FAQs",permalink:"/docs/faqs/general"}},d=[{value:"2D elements won&#39;t work in VR mode",id:"2d-elements-wont-work-in-vr-mode",children:[]},{value:"Max Pano resolution should be capped at 4K for low-end devices",id:"max-pano-resolution-should-be-capped-at-4k-for-low-end-devices",children:[]},{value:"Depth comes into play with VR mode",id:"depth-comes-into-play-with-vr-mode",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"There are certain limitation you should keep in mind while building a GMetri experience."),(0,i.kt)("h3",{id:"2d-elements-wont-work-in-vr-mode"},"2D elements won't work in VR mode"),(0,i.kt)("p",null,"If you are building primarily for a headset, then avoid using 2D HTML eleemnts like Actionbar, Quiz etc."),(0,i.kt)("h3",{id:"max-pano-resolution-should-be-capped-at-4k-for-low-end-devices"},"Max Pano resolution should be capped at 4K for low-end devices"),(0,i.kt)("p",null,"This also includes the Oculus Go. Go through ",(0,i.kt)("a",{parentName:"p",href:"./asset-recommendations"},"asset recommendations")," to get an idea of recommended asset resolution and size.\nThis needs to be verified while uploading the assets. You can find the size and resolution of assets on the right pane of the File Manager."),(0,i.kt)("h3",{id:"depth-comes-into-play-with-vr-mode"},"Depth comes into play with VR mode"),(0,i.kt)("p",null,"Placement of graphics is very important here. Things look very different in 2D and 3D."))}p.isMDXComponent=!0}}]);