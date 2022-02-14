"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[8287],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2122:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7813),a=r(7044),o=(r(9496),r(9613)),l=["components"],i={title:"How to Enable Optional Analytics for Tracking - GMetri XR Platform",description:"Enable Optional Analytics Features: User Variables, Viewer Information, Rule Funnel, Rule log, Leader Board - GMetri XR Platform Analytics Features",hide_title:!0,sidebar_label:"Optional Analytics"},s="Optional Analytics",c={unversionedId:"platform/track/optional_analytics",id:"platform/track/optional_analytics",title:"How to Enable Optional Analytics for Tracking - GMetri XR Platform",description:"Enable Optional Analytics Features: User Variables, Viewer Information, Rule Funnel, Rule log, Leader Board - GMetri XR Platform Analytics Features",source:"@site/docs/02_platform/04_track/optional_analytics.md",sourceDirName:"02_platform/04_track",slug:"/platform/track/optional_analytics",permalink:"/docs/platform/track/optional_analytics",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/04_track/optional_analytics.md",tags:[],version:"current",frontMatter:{title:"How to Enable Optional Analytics for Tracking - GMetri XR Platform",description:"Enable Optional Analytics Features: User Variables, Viewer Information, Rule Funnel, Rule log, Leader Board - GMetri XR Platform Analytics Features",hide_title:!0,sidebar_label:"Optional Analytics"},sidebar:"tutorialSidebar",previous:{title:"Feature Set",permalink:"/docs/platform/track/analytics_feature_set"},next:{title:"Views and Viewers",permalink:"/docs/platform/track/views"}},p=[{value:"Lead Generation",id:"lead-generation",children:[],level:2},{value:"Rule Funnel",id:"rule-funnel",children:[],level:2},{value:"Rules log",id:"rules-log",children:[],level:2},{value:"Leader Board",id:"leader-board",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optional-analytics"},"Optional Analytics"),(0,o.kt)("p",null,"Many analytics features are enabled by default but there are a certain optional ones that you can turn on manually. "),(0,o.kt)("p",null,"Following three set of features require specific actions to enable their tracking. To know more on how to enable them, click below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#optional-analytics"},"Optional Analytics"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#lead-generation"},"Lead Generation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rule-funnel"},"Rule Funnel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules-log"},"Rules log")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#leader-board"},"Leader Board"))))),(0,o.kt)("h2",{id:"lead-generation"},"Lead Generation"),(0,o.kt)("p",null,"Lead generation allows you to collect information fron the viewer. The viewer is prompted to fill a form before the experience begins.\nOne may add upto 3 form fields. These form fields can cater to the follow rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Email"),(0,o.kt)("li",{parentName:"ol"},"Password"),(0,o.kt)("li",{parentName:"ol"},"Max Text Length (specify)"),(0,o.kt)("li",{parentName:"ol"},"Custom regex"),(0,o.kt)("li",{parentName:"ol"},"Phone number")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/lead_generation.JPG#boxShadow/",alt:"Lead Generation"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIER LIMITS")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Free accounts support lead generation for only 100 users."),(0,o.kt)("p",{parentName:"div"},"Want more? ",(0,o.kt)("a",{parentName:"p",href:"https://gmetri.com/pricing"},"Upgrade"),"!"))),(0,o.kt)("h2",{id:"rule-funnel"},"Rule Funnel"),(0,o.kt)("p",null,"In your editor, "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the rules page, by clicking on the rules button of the editor.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/connections_tracking_1.png.jpg#boxShadow/",alt:"Rules Tracking"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On every rule, you will find two checkboxes - ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable, Track"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/connections_tracking_2.png.jpg#boxShadow/",alt:"Rules Tracking"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To track rule logs, check both of these boxes.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_cf.png.jpg#boxShadow/",alt:"Analytics Viewer Information"})),(0,o.kt)("h2",{id:"rules-log"},"Rules log"),(0,o.kt)("p",null,"In your editor, "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the rules page, by clicking on the rules button of the editor.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/connections_tracking_1.png.jpg#boxShadow/",alt:"Rules Tracking"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On every rule, you will find two checkboxes - ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable, Track"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/connections_tracking_2.png.jpg#boxShadow/",alt:"Rules Tracking"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To track rule logs, check both of these boxes.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_cl.png.jpg#boxShadow/",alt:"Analytics Viewer Information"})),(0,o.kt)("h2",{id:"leader-board"},"Leader Board"),(0,o.kt)("p",null,"This section will show up the score counted by the ",(0,o.kt)("a",{parentName:"p",href:"../create/elements/Score"},"Score")," element in your experience. "),(0,o.kt)("p",null,"Leaderboard is enabled when you have score element in your experience."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_leaderboard_detailed.png.jpg#boxShadow/",alt:"Analytics Viewer Information"})),(0,o.kt)("p",null,"GMetri platform provides rich analytics for the experiences you create on the platform. The platform analyses various aspects of user interactions with your deployed experiences to give you a better idea of how customers use your experiences. Based on these numbers, you can deduce various things that will help you make incremental changes to the experiences. This will help you serve your customers better."))}m.isMDXComponent=!0}}]);