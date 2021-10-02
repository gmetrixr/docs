"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[7884],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7649:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(98),o=r(6862),i=(r(9496),r(9613)),a=["components"],c={title:"Build XR Experiences on GMetri Platform",description:"Link GMetri XR experiences to an e-commerce platform",hide_title:!0,sidebar_label:"E-Commerce Plugin"},l=void 0,s={unversionedId:"platform/create/ecom",id:"platform/create/ecom",isDocsHomePage:!1,title:"Build XR Experiences on GMetri Platform",description:"Link GMetri XR experiences to an e-commerce platform",source:"@site/docs/02-platform/02_create/ecom.md",sourceDirName:"02-platform/02_create",slug:"/platform/create/ecom",permalink:"/docs/platform/create/ecom",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02-platform/02_create/ecom.md",tags:[],version:"current",frontMatter:{title:"Build XR Experiences on GMetri Platform",description:"Link GMetri XR experiences to an e-commerce platform",hide_title:!0,sidebar_label:"E-Commerce Plugin"},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/docs/platform/create/build"},next:{title:"Introduction",permalink:"/docs/platform/create/elements"}},p=[{value:"GMetri E-Commerce Plugin",id:"gmetri-e-commerce-plugin",children:[{value:"Requirements",id:"requirements",children:[]}]}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gmetri-e-commerce-plugin"},"GMetri E-Commerce Plugin"),(0,i.kt)("p",null,"GMetri allows creation of 360\xb0 shopping environments that can be linked with any e-commerce platform. This is done by creating plugins that bridge the communication between the e-commerce platform and GMetri."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/z5/ecom_product.png#boxShadow",alt:"Ecommerce Product"})),(0,i.kt)("p",null,"GMetri has an e-commerce plugin that allows linking elements in any 360\xb0 scene to your SKUs. When the user then clicks on these elements, he is present with a Product Card like the above."),(0,i.kt)("p",null,"The values in this product card (like product description, photos) can be populated using the e-commerce plugin that would query your APIs to get all details and manage the user\u2019s session."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/z5/ecom_cart_notification.png#boxShadow",alt:"Ecommerce Cart Notification"})),(0,i.kt)("p",null,"We also show a cart on the top left corner that can start a checkout session on your e-commerce platform."),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To create an ecommerce plugin, we need 3 things"),(0,i.kt)("h4",{id:"user-identification-mechanism"},"User Identification Mechanism"),(0,i.kt)("p",null,"When the user first visits the 360\xb0 store, how should we identify the user?\nThis could be done via a query parameter, but needs to be pre decided and fixed before the plugin is created. Any additional parameters that are needed for any further API calls can also be forwarded using this method. "),(0,i.kt)("p",null,"Eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://view.gmetri.com/v5/org-name/store?uid=<<user_identifier>>")),(0,i.kt)("h4",{id:"api-details"},"API Details"),(0,i.kt)("p",null,"a. ",(0,i.kt)("strong",{parentName:"p"},"Listing all products:")," This is needed when we link elements on the scene with the SKU and variants on the e-commerce platform. There may be additional qualifiers like \u201ccategory\u201d or \u201cregion\u201d that can be used as an input to this API, to filter the products that get sent."),(0,i.kt)("p",null,"b. ",(0,i.kt)("strong",{parentName:"p"},"Getting details of one product:")," This would be an API (or multiple APIs) that take the SKU id of the product as input and give all details of the product (including price) as the output. This is used to populate the product card. This would also include any APIs that are needed to get the stock/availability of products."),(0,i.kt)("p",null,"c. ",(0,i.kt)("strong",{parentName:"p"},"Starting Cart Session and Cart APIs:")," GMetri has the ability to maintain the cart session on its end in the UI itself. This can be communicated to the e-commerce platform when the actual checkout is started. However, if we need to sync cart items at realtime, we can do that using cart APIs that allow GMetri to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add items to cart"),(0,i.kt)("li",{parentName:"ol"},"Remove items/change quantity from cart"),(0,i.kt)("li",{parentName:"ol"},"List cart/get Cart Length - this is used to specify the number label on the cart icon")),(0,i.kt)("p",null,"d. ",(0,i.kt)("strong",{parentName:"p"},"APIs to be called before redireciton to checkout:")," In case there are APIs that can be called to pass the user\u2019s cart\u2019s state to the e-commerce platform, please let us know those too."),(0,i.kt)("p",null,"e. ",(0,i.kt)("strong",{parentName:"p"},"Staging environment details if present:")," Also the differences between staging and production environment."),(0,i.kt)("h4",{id:"checkout-redirection-mechanism"},"Checkout Redirection Mechanism"),(0,i.kt)("p",null,"For the actual checkout, GMetri will redirect the user to the usual checkout journey of the e-commerce platform. Details of this handoff need to be communicated here.\nFor websites, this would usually be the checkout or cart URL.\nFor Apps (both Android / iOS) this would be a deep-link, which takes you to the cart page of the  app.\nThe experience link should append the following optional params:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?platform=web")," for website"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?platform=msite")," for mobile website (if needed)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?platform=android")," for android app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?platform=ios")," for iOS app")),(0,i.kt)("p",null,"The checkout URL can be different for each of these platforms."))}m.isMDXComponent=!0}}]);