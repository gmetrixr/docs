"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[5881],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,b=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:o,a[1]=m;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return d}});var r=n(7813),o=n(7044),i=(n(9496),n(9613)),a=["components"],m={title:"How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform",description:"Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.",hide_title:!0,sidebar_label:"Android Embed"},s=void 0,l={unversionedId:"platform/publish/embed/android-embed",id:"platform/publish/embed/android-embed",title:"How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform",description:"Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.",source:"@site/docs/02_platform/03_publish/embed/03-android-embed.md",sourceDirName:"02_platform/03_publish/embed",slug:"/platform/publish/embed/android-embed",permalink:"/docs/platform/publish/embed/android-embed",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/03_publish/embed/03-android-embed.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform",description:"Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.",hide_title:!0,sidebar_label:"Android Embed"},sidebar:"tutorialSidebar",previous:{title:"Website Embed",permalink:"/docs/platform/publish/embed/website-embed"},next:{title:"React Native (Android & iOS) Embed",permalink:"/docs/platform/publish/embed/react-native-embed"}},p={},d=[{value:"Implementing Chrome Custom Tabs for GMetri Experiences",id:"implementing-chrome-custom-tabs-for-gmetri-experiences",level:2},{value:"More about Chrome Custom Tabs",id:"more-about-chrome-custom-tabs",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.gmetri.com/metaverse/publishing-and-analytics/advanced-publishing-options/embed/android-embed"})),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DOCUMENTATION MOVED")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Go to the new version of this page at ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gmetri.com/metaverse/publishing-and-analytics/advanced-publishing-options/embed/android-embed"},"https://docs.gmetri.com/metaverse/publishing-and-analytics/advanced-publishing-options/embed/android-embed")))),(0,i.kt)("h1",{id:"android-embed"},"Android Embed"),(0,i.kt)("h2",{id:"implementing-chrome-custom-tabs-for-gmetri-experiences"},"Implementing Chrome Custom Tabs for GMetri Experiences"),(0,i.kt)("p",null,"To run GMetri experiences inside android apps, we recommend an implementation of Chrome Custom Tabs API.\nDetailed information on how to setup an android experience with Chrome Custom Tabs can be found in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gmetrixr/chrome-custom-tabs/"},"experience"),"."),(0,i.kt)("p",null,"Also checkout this ",(0,i.kt)("a",{parentName:"p",href:"/docs/platform/publish/authentication/viewer_groups/token/"},"link")," if you need authentication on GMetri experiences within your android app. "),(0,i.kt)("p",null,"In your android experience add the required dependencies for Chrome Custom Tabs. Following is an example of gradle build dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"dependencies {\n    implementation fileTree(dir: 'libs', include: ['*.jar'])\n    implementation 'com.android.support:appcompat-v7:26.1.0'\n    implementation 'com.android.support:customtabs:26.1.0'\n}\n")),(0,i.kt)("p",null,"Information on how to install dependencies for other build systems are in the links below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/multidevice/android/customtabs/"},"Chrome custom tabs"))),(0,i.kt)("p",null,"From this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gmetrixr/chrome-custom-tabs/"},"experience")," , copy 2 files: ",(0,i.kt)("inlineCode",{parentName:"p"},"ChromeCustomTabs.java")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceConnectionCallback.java")," into your android experience. These files together provide the interface for chrome custom tabs to run GMetri experiences."),(0,i.kt)("p",null,"The className ",(0,i.kt)("inlineCode",{parentName:"p"},"ChromeCustomTabs.java")," implements 2 public methods:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"initialize(String url, Context context)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"launch()"))),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"url")," - Url of the experience"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"context")," - Context of your activity (",(0,i.kt)("inlineCode",{parentName:"li"},"this"),")")),(0,i.kt)("p",null,"An example implementation of the above classes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  ChromeCustomTabsJwt chromeCustomTabs = new ChromeCustomTabsJwt();\n  chromeCustomTabs = new ChromeCustomTabs();\n  String url = "https://view.gmetri.com/v4/game/safehands_v2";\n  chromeCustomTabs.initialize(url, this);\n  chromeCustomTabs.launch();\n')),(0,i.kt)("h2",{id:"more-about-chrome-custom-tabs"},"More about Chrome Custom Tabs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To enable GMetri XR experiences within an Android app, the app needs to implement the Chrome CustomTabs API as described in this ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/multidevice/android/customtabs/"},"article"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chrome CustomTabs remove the restrictions imposed by WebViews on serving XR content. While WebViews don't share their state with the Chrome browser, ChromeCustomTabs are fully embeddable browser extensions capable of doing anything that a native Chrome browser can do. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chrome CustomTabs give apps higher control over web experience and make transitions between native and web content seamless without having to resort to a WebView."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/performance.gif",alt:"android performance",title:"android performance"})))}u.isMDXComponent=!0}}]);