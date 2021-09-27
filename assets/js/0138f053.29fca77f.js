"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[827],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return l},default:function(){return u}});var r=n(98),i=n(6862),o=(n(9496),n(9613)),a=["components"],s={title:"How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform",description:"Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.",hide_title:!0,sidebar_label:"Android"},p="Android",m={unversionedId:"features/publish/embed/using-vr-experiences-within-android-apps",id:"features/publish/embed/using-vr-experiences-within-android-apps",isDocsHomePage:!1,title:"How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform",description:"Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.",source:"@site/docs/features/publish/embed/using-vr-experiences-within-android-apps.md",sourceDirName:"features/publish/embed",slug:"/features/publish/embed/using-vr-experiences-within-android-apps",permalink:"/docs/features/publish/embed/using-vr-experiences-within-android-apps",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/features/publish/embed/using-vr-experiences-within-android-apps.md",tags:[],version:"current",frontMatter:{title:"How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform",description:"Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.",hide_title:!0,sidebar_label:"Android"},sidebar:"tutorialSidebar",previous:{title:"Website",permalink:"/docs/features/publish/embed/using-vr-experiences-from-websites"},next:{title:"React Native (Android & iOS)",permalink:"/docs/features/publish/embed/using-vr-experiences-within-reactnative-based-ios-and-android-apps"}},l=[{value:"Implementing Chrome Custom Tabs for GMetri Experiences",id:"implementing-chrome-custom-tabs-for-gmetri-experiences",children:[]},{value:"More about Chrome Custom Tabs",id:"more-about-chrome-custom-tabs",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android"},"Android"),(0,o.kt)("h2",{id:"implementing-chrome-custom-tabs-for-gmetri-experiences"},"Implementing Chrome Custom Tabs for GMetri Experiences"),(0,o.kt)("p",null,"To run GMetri experiences inside android apps, we recommend an implementation of Chrome Custom Tabs API.\nDetailed information on how to setup an android experience with Chrome Custom Tabs can be found in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gmetrixr/chrome-custom-tabs/"},"experience"),"."),(0,o.kt)("p",null,"Also checkout this ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/publish/authentication/viewer_groups/token/"},"link")," if you need authentication on GMetri experiences within your android app. "),(0,o.kt)("p",null,"In your android experience add the required dependencies for Chrome Custom Tabs. Following is an example of gradle build dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"dependencies {\n    implementation fileTree(dir: 'libs', include: ['*.jar'])\n    implementation 'com.android.support:appcompat-v7:26.1.0'\n    implementation 'com.android.support:customtabs:26.1.0'\n}\n")),(0,o.kt)("p",null,"Information on how to install dependencies for other build systems are in the links below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/multidevice/android/customtabs/"},"Chrome custom tabs"))),(0,o.kt)("p",null,"From this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gmetrixr/chrome-custom-tabs/"},"experience")," , copy 2 files: ",(0,o.kt)("inlineCode",{parentName:"p"},"ChromeCustomTabs.java")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceConnectionCallback.java")," into your android experience. These files together provide the interface for chrome custom tabs to run GMetri experiences."),(0,o.kt)("p",null,"The className ",(0,o.kt)("inlineCode",{parentName:"p"},"ChromeCustomTabs.java")," implements 2 public methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"initialize(String url, Context context)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"launch()"))),(0,o.kt)("p",null,"Arguments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"url")," - Url of the experience"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"context")," - Context of your activity (",(0,o.kt)("inlineCode",{parentName:"li"},"this"),")")),(0,o.kt)("p",null,"An example implementation of the above classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'  ChromeCustomTabsJwt chromeCustomTabs = new ChromeCustomTabsJwt();\n  chromeCustomTabs = new ChromeCustomTabs();\n  String url = "https://view.gmetri.com/v4/game/safehands_v2";\n  chromeCustomTabs.initialize(url, this);\n  chromeCustomTabs.launch();\n')),(0,o.kt)("h2",{id:"more-about-chrome-custom-tabs"},"More about Chrome Custom Tabs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To enable GMetri XR experiences within an Android app, the app needs to implement the Chrome CustomTabs API as described in this ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/multidevice/android/customtabs/"},"article"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chrome CustomTabs remove the restrictions imposed by WebViews on serving XR content. While WebViews don't share their state with the Chrome browser, ChromeCustomTabs are fully embeddable browser extensions capable of doing anything that a native Chrome browser can do. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chrome CustomTabs give apps higher control over web experience and make transitions between native and web content seamless without having to resort to a WebView."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/performance.gif",alt:"android performance",title:"android performance"})))}u.isMDXComponent=!0}}]);