"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[1689],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1633:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var a=r(7813),n=r(7044),o=(r(9496),r(9613)),s=["components"],i={sidebar_label:"GMetri experience as a SCORM package",sidebar_position:1},c="GMetri experience as a SCORM package",l={unversionedId:"features/scorm/gmetri-experience-as-a-scrom-package",id:"features/scorm/gmetri-experience-as-a-scrom-package",title:"GMetri experience as a SCORM package",description:"All GMetri experiences can be exported as web SCORM packages and imported into any LMS. We support SCORM 1.2 and SCORM 2004 package versions.",source:"@site/docs/03_features/04_scorm/01_gmetri-experience-as-a-scrom-package.md",sourceDirName:"03_features/04_scorm",slug:"/features/scorm/gmetri-experience-as-a-scrom-package",permalink:"/docs/features/scorm/gmetri-experience-as-a-scrom-package",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/03_features/04_scorm/01_gmetri-experience-as-a-scrom-package.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"GMetri experience as a SCORM package",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3D Scenes",permalink:"/docs/features/05_3d_scene/"},next:{title:"Embed a SCORM package in a GMetri experience",permalink:"/docs/features/scorm/embed-a-scorm-package-in-a-gmetri-experience"}},p={},m=[{value:"Exporting a SCORM package for your experience",id:"exporting-a-scorm-package-for-your-experience",level:2},{value:"SCORM Actions",id:"scorm-actions",level:2},{value:"Adding SCORM actions to your GMetri Experiences",id:"adding-scorm-actions-to-your-gmetri-experiences",level:2},{value:"Integration with LMS",id:"integration-with-lms",level:2},{value:"Data Share",id:"data-share",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gmetri-experience-as-a-scorm-package"},"GMetri experience as a SCORM package"),(0,o.kt)("p",null,"All GMetri experiences can be exported as web SCORM packages and imported into any LMS. We support SCORM 1.2 and SCORM 2004 package versions."),(0,o.kt)("h2",{id:"exporting-a-scorm-package-for-your-experience"},"Exporting a SCORM package for your experience"),(0,o.kt)("p",null,"After you are done creating your experience, follow the steps below to generate a SCORM package for your content."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make the deployment live."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"SCORM")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authentication")," dropdown as shown below"),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Others")," section in the Sharing options"),(0,o.kt)("li",{parentName:"ol"},"Select either SCORM 1.2 or SCORM 2004 versions for export and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Download SCORM")," button to start downloading the file"),(0,o.kt)("li",{parentName:"ol"},"This file can then be imported into any LMS having SCORM support")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1950,h_950,q_90/gb-web/portal-docs/assets/img/screenshots/select-scorm.png",alt:"select scorm"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1950,h_950,q_90/gb-web/portal-docs/assets/img/screenshots/download-scorm.png",alt:"download scorm"})),(0,o.kt)("h2",{id:"scorm-actions"},"SCORM Actions"),(0,o.kt)("p",null,"To support communication between LMS and a GMetri experience, we allow defining certain rules that can be triggered conditionally."),(0,o.kt)("p",null,"The following is an exhaustive list of SCORM actions that we support."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM min score:")," This can is used to notify the LMS about the minimum score possible to get in the experience. This should usually be fired right at the beginning of the experience and is generally set to 0."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM max score:")," This can is used to notify the LMS about the minimum score possible to get in the experience. This should usually be fired right at the beginning of the experience and is generally set to 100."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM score:")," This can be used to notify the LMS about the current score of the user. Usually, LMSes show scoring after completion of the course but make sure to keep calling this action as and when the score inside the experience changes."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM status as passed:")," This can be used to notify the LMS when the user has met the criteria of successfully passing the module."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM status as failed:")," This can be used to notify the LMS when the user has failed the module."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM status as complete:")," This can be used to notify the LMS when the module is complete. Call this action when the full experience has been completed by the user. This enables the LMS to track and show user attempts and show the final calculated score.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-min-score.png",alt:"min scorm"})),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-max-score.png",alt:"max scorm"})),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-score.png",alt:"set scorm"})),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-passed.png",alt:"passed scorm"})),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-failed.png",alt:"failed scorm"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-complete.png",alt:"complete scorm"})),(0,o.kt)("h2",{id:"adding-scorm-actions-to-your-gmetri-experiences"},"Adding SCORM actions to your GMetri Experiences"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM min score")," and ",(0,o.kt)("strong",{parentName:"li"},"Set SCORM max score")," actions should be added right at the beginning of the experience. Add rules to set scorm ",(0,o.kt)("strong",{parentName:"li"},"min score = 0")," and set scorm ",(0,o.kt)("strong",{parentName:"li"},"max score = 100"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM score")," should be called at the end of the experience when you want to relay the ",(0,o.kt)("strong",{parentName:"li"},"score value")," to the LMS. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Set SCORM passed/failed/complete")," should be called at the end of the experience when you want to relay this information to the LMS. ",(0,o.kt)("inlineCode",{parentName:"li"},"Please note that certain LMS's don't track scores unless a rule for set SCORM complete is fired."))),(0,o.kt)("h2",{id:"integration-with-lms"},"Integration with LMS"),(0,o.kt)("p",null,"To test that information is correctly shared between GMetri and LMS, we suggest you to first import the test SCORM package which covers all the scenarios specified in the previous sections. "),(0,o.kt)("p",null,"If the integration works perfectly, after importing the test package, you should be able to see the ",(0,o.kt)("strong",{parentName:"p"},"user's unique ID"),", be able to ",(0,o.kt)("strong",{parentName:"p"},"score the user")," and ",(0,o.kt)("strong",{parentName:"p"},"mark the course as completed")," right within the experience."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gb-web.s3.ap-south-1.amazonaws.com/SCORM/test/lms_demo_scorm_1.2_2022-03-03T09_46_18.135Z.zip"},"SCORM Package 1.2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gb-web.s3.ap-south-1.amazonaws.com/SCORM/test/lms_demo_scorm_2004_2022-03-03T09_46_34.263Z.zip"},"SCORM Package 2004 v3"))),(0,o.kt)("h2",{id:"data-share"},"Data Share"),(0,o.kt)("p",null,"There are 2 types of data that needs to be shared between the LMS and the GMetri system. We categorize these as inbound and outbound data. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inbound - This is the data that is required for day-to-day functioning of GMetri experiences",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learner ID - User's learner ID as stored in the LMS ","[cmi.core.student_id (SCORM 1.2) / cmi.learner_id (SCORM 2004 V3)]"),(0,o.kt)("li",{parentName:"ul"},"Progress - User's progress through the course as stored in the LMS ","[cmi.progress_measure (SCORM 2004 V3)]"),(0,o.kt)("li",{parentName:"ul"},"Suspend Data - Additional information stored in the LMS for course to run ","[cmi.suspend_data (SCORM 2004 V3 & SCORM 1.2)]"),(0,o.kt)("li",{parentName:"ul"},"Score - Score stored in the LMS ","[cmi.core.score.raw (SCORM 1.2) / cmi.score.raw (SCORM 2004 V3) ]"))),(0,o.kt)("li",{parentName:"ul"},"Outbound - This is the data sent out by GMetri system that should be stored inside the LMS. This includes functions like scoring, course completion etc",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Progress - User's progress through the course calclated in the GMetri system. (SCORM 2004 V3)]"),(0,o.kt)("li",{parentName:"ul"},"Suspend Data - Additional information stored in the LMS for course to run ","[cmi.suspend_data (SCORM 2004 V3 & SCORM 1.2)]"),(0,o.kt)("li",{parentName:"ul"},"Score - Score calculated in the GMetri system ","[cmi.core.score.raw (SCORM 1.2) / cmi.score.raw (SCORM 2004 V3) ]")))))}d.isMDXComponent=!0}}]);