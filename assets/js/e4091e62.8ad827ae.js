"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[7724],{9613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5393:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(7813),r=a(7044),i=(a(9496),a(9613)),o=["components"],l={title:"How to Access Analytics - Tracking Features - GMetri XR Platform",description:"Access Analytics - Unique users, Average session duration, Browsers, Platforms wih Analytics Dashboard for Deployments - Tutorials on GMetri Documentation",hide_title:!0,sidebar_label:"Accessing Analytics"},s="Accessing Analytics",c={unversionedId:"platform/track/access_analytics",id:"platform/track/access_analytics",title:"How to Access Analytics - Tracking Features - GMetri XR Platform",description:"Access Analytics - Unique users, Average session duration, Browsers, Platforms wih Analytics Dashboard for Deployments - Tutorials on GMetri Documentation",source:"@site/docs/02_platform/04_track/access_analytics.md",sourceDirName:"02_platform/04_track",slug:"/platform/track/access_analytics",permalink:"/docs/platform/track/access_analytics",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/04_track/access_analytics.md",tags:[],version:"current",frontMatter:{title:"How to Access Analytics - Tracking Features - GMetri XR Platform",description:"Access Analytics - Unique users, Average session duration, Browsers, Platforms wih Analytics Dashboard for Deployments - Tutorials on GMetri Documentation",hide_title:!0,sidebar_label:"Accessing Analytics"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/platform/track/intro"},next:{title:"Feature Set",permalink:"/docs/platform/track/analytics_feature_set"}},p={},d=[{value:"Analytics Page",id:"analytics-page",level:3},{value:"Forward analytics to an external endpoint",id:"forward-analytics-to-an-external-endpoint",level:3},{value:"What will we send?",id:"what-will-we-send",level:4}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"accessing-analytics"},"Accessing Analytics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Head over to the Publish tab on the left bar of the editor."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Analytics")," inside the deployment section on the top right of the deployment card. ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/deployment.JPG#boxShadow",alt:"Deployment"})),(0,i.kt)("h3",{id:"analytics-page"},"Analytics Page"),(0,i.kt)("p",null,"Once you are on the analytics page, you shall find various sections on the page, that will show you a detailed analysis of your deployment. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_page_1.png.jpg#boxShadow/",alt:"Analytics Page"})),(0,i.kt)("h3",{id:"forward-analytics-to-an-external-endpoint"},"Forward analytics to an external endpoint"),(0,i.kt)("p",null,"You can configure live viewer state information to be forwarded to an external API. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To do so, head over to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," page by clicking on your avatar on the top right of the page."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," page, scroll down to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Advanced")," section and expand it."),(0,i.kt)("li",{parentName:"ul"},"Clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"ENABLE VIEWER STATE FORWARDING")," will reveal the following.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_100/gb-web/portal-docs/assets/img/screenshots/viewer_state_forwarding.png.jpg#boxShadow/",alt:"Viewer State Forwarding"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An API secret will be created for your organization. This can be used to validate source identity by you."),(0,i.kt)("li",{parentName:"ul"},"Enter an API endpoint for us to send requests to.")),(0,i.kt)("h4",{id:"what-will-we-send"},"What will we send?"),(0,i.kt)("p",null,"Every time there is an update to any viewer state (variables) in the organization (for all projects), the updated viewer state will be sent to the external endpoint. One possible use of this is to keep a database at your end updated with the progress of viewers across your experiences."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Type of request: ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST"))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Header:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorization"),": JWT token created using shared API secret and ",(0,i.kt)("inlineCode",{parentName:"li"},"identifier"))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Body:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"organization_slug")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The slug of your organization")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"deployment_slug")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The slug of the deployment that the viewer visited")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"<var_name>"),(0,i.kt)("td",{parentName:"tr",align:"left"},"<var_value>")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"<var_name_1>"),(0,i.kt)("td",{parentName:"tr",align:"left"},"<var_value_1>")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"<var_name_2>"),(0,i.kt)("td",{parentName:"tr",align:"left"},"<var_value_2>")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"..."),(0,i.kt)("td",{parentName:"tr",align:"left"},"There might be more variables depending on viewer information.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deployment_slug")," is the link of the deployment specified in the publish page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"organization_slug")," is the last part of the URL you see on your portal page (abcxyz in ",(0,i.kt)("a",{parentName:"li",href:"https://portal.gmetri.com/abcxyz"},"https://portal.gmetri.com/abcxyz"),") when you login to the portal.")))))}u.isMDXComponent=!0}}]);