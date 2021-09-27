"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[4385],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(98),i=n(6862),r=(n(9496),n(9613)),o=["components"],l={hide_title:!0,sidebar_label:"SSO"},s="SSO",p={unversionedId:"features/publish/authentication/viewer_groups/sso",id:"features/publish/authentication/viewer_groups/sso",isDocsHomePage:!1,title:"SSO",description:"This option allows you select either Google, Microsoft (Azure) or SAML based login for viewers.",source:"@site/docs/features/publish/authentication/viewer_groups/sso.md",sourceDirName:"features/publish/authentication/viewer_groups",slug:"/features/publish/authentication/viewer_groups/sso",permalink:"/docs/features/publish/authentication/viewer_groups/sso",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/features/publish/authentication/viewer_groups/sso.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"SSO"},sidebar:"tutorialSidebar",previous:{title:"Password With Expiry",permalink:"/docs/features/publish/authentication/viewer_groups/password_with_expiry"},next:{title:"Token",permalink:"/docs/features/publish/authentication/viewer_groups/token"}},u=[{value:"Google and Microsoft Azure based SSO",id:"google-and-microsoft-azure-based-sso",children:[]},{value:"SAML based SSO",id:"saml-based-sso",children:[{value:"Identity Provider Setup",id:"identity-provider-setup",children:[]},{value:"Deployment Setup",id:"deployment-setup",children:[]},{value:"Viewer",id:"viewer",children:[]},{value:"SAML configuration",id:"saml-configuration",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sso"},"SSO"),(0,r.kt)("p",null,"This option allows you select either ",(0,r.kt)("inlineCode",{parentName:"p"},"Google"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft (Azure)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SAML")," based login for viewers."),(0,r.kt)("h2",{id:"google-and-microsoft-azure-based-sso"},"Google and Microsoft Azure based SSO"),(0,r.kt)("p",null,"When you use this, you have three options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Public - all people with valid (google or azure based on your selection) accounts are allowed to access your deployment.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Filter By domain - all people with valid google or azure based accounts on the domain that you have set are allowed to access your deployment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Filter By viewer list - all accounts google or azure based accounts in your viewer list are allowed to access your deployment."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/viewer_groups_enterprise.png.jpg#boxShadow/",alt:"viewer group enterprise"})),(0,r.kt)("h2",{id:"saml-based-sso"},"SAML based SSO"),(0,r.kt)("p",null,"This is a viewer group authentication mechanisms support for the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html"},"Security Assertion Markup Language"),"."),(0,r.kt)("h3",{id:"identity-provider-setup"},"Identity Provider Setup"),(0,r.kt)("p",null,"Any SAML identity provider (IdP) can be configured to be used for authentication of a viewer."),(0,r.kt)("p",null,"To enable this, head over to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewer Group")," page, then:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select SSO as your ",(0,r.kt)("inlineCode",{parentName:"li"},"Login Method"),"."),(0,r.kt)("li",{parentName:"ol"},"Now select ",(0,r.kt)("inlineCode",{parentName:"li"},"SAML")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Provider")," drop-down menu."),(0,r.kt)("li",{parentName:"ol"},"After this, you will be asked to provide your SAML IdP configuration.")),(0,r.kt)("p",null,"You should see the config as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_80/gb-web/portal-docs/assets/img/screenshots/viewer_group_saml.png",alt:"SAML viewer group"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Enter your IdP's ",(0,r.kt)("inlineCode",{parentName:"li"},"entityId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SSO redicrection URL")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"X.509 signing certificate"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Save")," button to finally save your configuration."),(0,r.kt)("li",{parentName:"ol"},"To register GMetri as a service provider (SP) with your IdP, you will need the configuration details. You can get these details by clicking the ",(0,r.kt)("inlineCode",{parentName:"li"},"Download GMetri's SAML Metadata")," button.")),(0,r.kt)("p",null,"You can find sample metadata configuration ",(0,r.kt)("a",{parentName:"p",href:"https://samltest.id/download/"},"here")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLtest's IdP")," section. This will give you an idea of what you need to paste in the boxes for the SAML config."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NOTE on pasting X.509 certificate")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please paste certificate ",(0,r.kt)("em",{parentName:"p"},"without")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"----BEGIN CERTIFICATE----")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"----END CERTIFICATE----")," part."))),(0,r.kt)("h3",{id:"deployment-setup"},"Deployment Setup"),(0,r.kt)("p",null,"Once you create a SAML viewer group, head to your deployment and set this viewer group as the authentication mechanism for that deployment."),(0,r.kt)("h3",{id:"viewer"},"Viewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once you open a viewer link for deployment with a SAML SSO based viewer group, you will see a pop-up with the IdP's login page."),(0,r.kt)("li",{parentName:"ul"},"Post-IdP login process, you will be redirected back to ",(0,r.kt)("inlineCode",{parentName:"li"},"view.gmetri.com"),"."),(0,r.kt)("li",{parentName:"ul"},"We use your ",(0,r.kt)("inlineCode",{parentName:"li"},"email address")," sent to us by the ",(0,r.kt)("inlineCode",{parentName:"li"},"IdP")," as the primary identifier for the viewer session.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_80/gb-web/portal-docs/assets/img/screenshots/viewer_group_saml_viewer.png",alt:"SAML viewer IdP login"})),(0,r.kt)("h3",{id:"saml-configuration"},"SAML configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name Identifier format: ",(0,r.kt)("inlineCode",{parentName:"li"},"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified")),(0,r.kt)("li",{parentName:"ul"},"In IdP ",(0,r.kt)("inlineCode",{parentName:"li"},"SAMLResponse")," we look for the following attributes:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Friendly name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"NAMEFORMAT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Email"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"email"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"mail")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"urn:oasis:names:tc:SAML:2.0:attrname-format:uri"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"displayname")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"urn:oid:2.16.840.1.113730.3.1.241")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"urn:oasis:names:tc:SAML:2.0:attrname-format:uri"))))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"SAML authentication will not be successful unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"IdP")," returns your ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," in its SAML response."))))}m.isMDXComponent=!0}}]);