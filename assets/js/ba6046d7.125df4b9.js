"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[7535],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7813),i=n(7044),o=(n(9496),n(9613)),a=["components"],s={hide_title:!0,sidebar_label:"Custom List"},l="Custom List",u={unversionedId:"platform/publish/authentication/viewer_groups/custom_list",id:"platform/publish/authentication/viewer_groups/custom_list",title:"Custom List",description:"Sometimes you may need a custom list that requires a login identifier other than an email (eg, phone numbers, special usernames, etc). In such cases, you can simply rename the columns to the desired name and it will show up in the login form.",source:"@site/docs/02_platform/03_publish/authentication/viewer_groups/custom_list.md",sourceDirName:"02_platform/03_publish/authentication/viewer_groups",slug:"/platform/publish/authentication/viewer_groups/custom_list",permalink:"/docs/platform/publish/authentication/viewer_groups/custom_list",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/03_publish/authentication/viewer_groups/custom_list.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Custom List"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/platform/publish/authentication/viewer_groups"},next:{title:"Password With Expiry",permalink:"/docs/platform/publish/authentication/viewer_groups/password_with_expiry"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-list"},"Custom List"),(0,o.kt)("p",null,"Sometimes you may need a custom list that requires a login identifier other than an email (eg, phone numbers, special usernames, etc). In such cases, you can simply rename the columns to the desired name and it will show up in the login form. "),(0,o.kt)("p",null,"The second column in the csv is treated as the password field (regardless of what you reaname it to). If it is present the csv, we will authenticate all your users against the provided passwords. If you wish to skip password verification, remove this column from the csv."),(0,o.kt)("p",null,"A sample CSV containing some users with their names and an ",(0,o.kt)("inlineCode",{parentName:"p"},"arbitrary password")," will look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/DAG/img9.png.jpg#boxShadow/",alt:"Sample viewerlist with passwords"})),(0,o.kt)("p",null,"A sample CSV containing some users with only their names and ",(0,o.kt)("inlineCode",{parentName:"p"},"no password")," will look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/DAG/img10.png.jpg#boxShadow/",alt:"Sample viewerlist with passwords"})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once the csv has been uploaded , you cannot see the passwords again (for security purposes), so if you wish to change the password of some or all your allowed users, upload a new csv with the updated passwords. "))))}m.isMDXComponent=!0}}]);