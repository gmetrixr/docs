"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[6178],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=n(7813),o=n(7044),i=(n(9496),n(9613)),s=["components"],a={title:"Setting up 3D Scenes - GMetri XR Platform",description:"Made using the GMetri XR platform, this demonstrates how to add and setup 3D scenes for your XR experiences.",hide_title:!0,sidebar_label:"3D Scenes"},l="3D Scenes and Collisions",c={unversionedId:"features/05_3d_scene/index",id:"features/05_3d_scene/index",title:"Setting up 3D Scenes - GMetri XR Platform",description:"Made using the GMetri XR platform, this demonstrates how to add and setup 3D scenes for your XR experiences.",source:"@site/docs/03_features/05_3d_scene/index.md",sourceDirName:"03_features/05_3d_scene",slug:"/features/05_3d_scene/",permalink:"/docs/features/05_3d_scene/",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/03_features/05_3d_scene/index.md",tags:[],version:"current",frontMatter:{title:"Setting up 3D Scenes - GMetri XR Platform",description:"Made using the GMetri XR platform, this demonstrates how to add and setup 3D scenes for your XR experiences.",hide_title:!0,sidebar_label:"3D Scenes"},sidebar:"tutorialSidebar",previous:{title:"Green Screen Color Selection",permalink:"/docs/features/greenscreen/green_screen_color_selection"},next:{title:"GMetri experience as a SCORM package",permalink:"/docs/features/scorm/gmetri-experience-as-a-scrom-package"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"3D Scenes",id:"3d-scenes",level:3},{value:"Scene Bounds",id:"scene-bounds",level:3},{value:"Scene Bounds visibility can be controlled from viewport properties",id:"scene-bounds-visibility-can-be-controlled-from-viewport-properties",level:4},{value:"Collider Box Element",id:"collider-box-element",level:3},{value:"3D Scene setup with collisions",id:"3d-scene-setup-with-collisions",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Final Experience",id:"final-experience",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3d-scenes-and-collisions"},"3D Scenes and Collisions"),(0,i.kt)("p",null,"This section will demonstrate how to setup 3D Scenes and Collision using Collider Box elements. "),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"There are a few key concepts to understand before we can get in detail on setting up 3D scenes with collisions"),(0,i.kt)("h3",{id:"3d-scenes"},"3D Scenes"),(0,i.kt)("p",null,"3D Scenes allow viewers/players to roam freely within a space using ",(0,i.kt)("strong",{parentName:"p"},"WASD")," and ",(0,i.kt)("strong",{parentName:"p"},"Arrow keys ","[\u2190 \u2192 \u2191 \u2193]"),". This could be seen similar to you walking around inside a room, visiting and interacting with different parts of a room.\nIn addition to movement, viewers will also be able to jump using the ",(0,i.kt)("strong",{parentName:"p"},"SPACE")," key on desktop devices."),(0,i.kt)("h3",{id:"scene-bounds"},"Scene Bounds"),(0,i.kt)("p",null,"These define the confined boundaries of a 3D scene and are usually configured to restrict movement of viewers to specific regions within a space. In most cases these should match the limits of the environment."),(0,i.kt)("p",null,"In the editor, scene bounds are visible as a grid and can be toggled from the ",(0,i.kt)("strong",{parentName:"p"},"Viewport Properties"),".\nIn view, scene bounds are invisible."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_scene/3D_scene_bounds.png#boxShadow",alt:null})),(0,i.kt)("h4",{id:"scene-bounds-visibility-can-be-controlled-from-viewport-properties"},"Scene Bounds visibility can be controlled from viewport properties"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true",muted:"true",autoplay:!0,width:"480px"},(0,i.kt)("source",{src:"https://gb-web.s3.ap-south-1.amazonaws.com/portal-docs/assets/img/screenshots/3D_scene/3D_scene_viewport_properties_2.mp4",type:"video/mp4"})),(0,i.kt)("h3",{id:"collider-box-element"},"Collider Box Element"),(0,i.kt)("p",null,"A Collider Box is an invisible box that objects will rest on top of. Without colliders, viewers will fall through floors and go through walls and benches.\nIn the editor, a collider box element is represented as a cube. Position and dimensions of this collider box can be adjusted from the properties panel. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_scene/3D_scene_collider_box.png#boxShadow",alt:null})),(0,i.kt)("p",null,"In view, the collider box elements are represented as invisible cubes with which the players will collide and not walk through."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can add as many Collider Box elements as you wish, but we recommend lesser than 50 per scene to ensure smooth working on low-end desktop and mobile devices"))),(0,i.kt)("h2",{id:"3d-scene-setup-with-collisions"},"3D Scene setup with collisions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the editor, add a new 3D scene by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Element > Scene > 3D Scene"),". This also inserts a few default elements that are helpful in scene setup. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pano")," - A background for the entire scene")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Environment")," - A 3D model that will serve as the space for our scene. This can be replaced by selecting another 3D model from the file manager and adjusting positioning and scale to match life-size scale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Zone")," - A spawn zone from where all the player will enter this scene. This can be moved around the scene to enable players entering the room from different locations. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lights")," - A default light setup to make the scene look good."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_scene/3D_scene_default_elements.png#boxShadow",alt:null}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the editor, add a new ",(0,i.kt)("strong",{parentName:"p"},"Collider Box")," element. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Align the element with one of the walls in the middle and adjust the scale.",(0,i.kt)("video",{controls:"true",allowfullscreen:"true",muted:"true",autoplay:!0,width:"480px"},(0,i.kt)("source",{src:"https://gb-web.s3.ap-south-1.amazonaws.com/portal-docs/assets/img/screenshots/3D_scene/3D_scene_align_collider_wall_2.mp4",type:"video/mp4"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Scene Properties, adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"Scene Bounds")," to confine player movement within a space. This is by automatically configured for the default environment that comes with every new 3D scene.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"Collisions")," are enabled from scene properties.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Preview the scene or simply publish the experience to see your changes."))),(0,i.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,i.kt)("p",null,"Here's the full video tutorial"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true",muted:"true",autoplay:!0,width:"480px"},(0,i.kt)("source",{src:"https://gb-web.s3.ap-south-1.amazonaws.com/portal-docs/assets/img/screenshots/3D_scene/3D_scene_setup_trimmer_1.5.mp4",type:"video/mp4"})),(0,i.kt)("h2",{id:"final-experience"},"Final Experience"),(0,i.kt)("p",null,"Here's the final experience that we created in above steps"),(0,i.kt)("iframe",{width:"90%",height:"405px",src:"https://jkbhaa.gmetri.com/demo?embed=true",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; microphone; camera; display-capture;",allowfullscreen:"true"}))}m.isMDXComponent=!0}}]);