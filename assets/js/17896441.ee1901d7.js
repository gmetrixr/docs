"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[7918],{8012:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(9496),l=a(1626),i=a(7813),r=a(6952),s=a(3724);var o=function(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(s.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))};var c=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,(0,i.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,(0,i.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))},d=a(7021),m=a(2349),u=a(1476);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,i=e.versionMetadata,r=(0,d.Z)().siteConfig.title,s=(0,m.useActivePlugin)({failfast:!0}).pluginId,o=(0,u.J)(s).savePreferredVersionName,c=(0,m.useDocVersionSuggestions)(s),v=c.latestDocSuggestion,p=c.latestVersionSuggestion,E=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return o(p.name)}})))}function E(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(4367);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(7044),_="iconEdit_yoNP",C=["className"];var T=function(e){var t=e.className,a=(0,L.Z)(e,C);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(T,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y="tag_Z960",w="tagRegular_i2ol",A="tagWithCount_Ktea";var M=function(e){var t,a=e.permalink,i=e.name,r=e.count;return n.createElement(s.Z,{href:a,className:(0,l.Z)(y,(t={},t[w]=!r,t[A]=r,t))},i,r&&n.createElement("span",null,r))},H="tags_p0Am",x="tag_Yh_v";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(H,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:x},n.createElement(M,{name:t,permalink:a}))}))))}var D="lastUpdated_tChN";function S(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function V(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",D)},(a||i)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function O(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||s);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(S,{tags:o}),d&&n.createElement(V,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var I=a(4834),F="tocCollapsible_b03x",P="tocCollapsibleButton_kOOX",R="tocCollapsibleContent_Zrs5",z="tocCollapsibleExpanded_DX3e",W=a(1093);function X(e){var t,a=e.toc,i=e.className,s=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(F,(t={},t[z]=!d,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",P),onClick:m},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:R,collapsed:d},n.createElement(W.Z,{toc:a,minHeadingLevel:s,maxHeadingLevel:o})))}var q=a(3899),J="docItemContainer_NJQc",Q="docItemCol_cTXg",j="tocMobile_GmwT";function G(e){var t,a=e.content,i=a.metadata,r=a.frontMatter,s=r.image,o=r.keywords,d=r.hide_title,m=r.hide_table_of_contents,v=r.toc_min_heading_level,g=r.toc_max_heading_level,h=i.description,p=i.title,N=!d&&void 0===a.contentTitle,k=(0,u.iP)(),Z=!m&&a.toc&&a.toc.length>0,L=Z&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:p,description:h,keywords:o,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[Q]=!m,t))},n.createElement(E,null),n.createElement("div",{className:J},n.createElement("article",null,n.createElement(b,null),Z&&n.createElement(X,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:g,className:(0,l.Z)(u.kM.docs.docTocMobile,j)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(q.Z,{as:"h1"},p)),n.createElement(a,null)),n.createElement(O,e)),n.createElement(c,{previous:i.previous,next:i.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(I.Z,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:g,className:u.kM.docs.docTocDesktop}))))}},3899:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7813),l=a(7044),i=a(9496),r=a(1626),s=a(6952),o=a(1476),c="anchorWithStickyNavbar_LQtj",d="anchorWithHideOnScrollNavbar_pHHM",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(a,(0,n.Z)({},v,{className:(0,r.Z)("anchor",(t={},t[d]=g,t[c]=!g,t)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(a,v)}function g(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?i.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):i.createElement(v,(0,n.Z)({as:t},a))}},4834:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7813),l=a(7044),i=a(9496),r=a(1626),s=a(1093),o="tableOfContents_fIBx",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},1093:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7813),l=a(7044),i=a(9496),r=a(1476),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,l.Z)(e,s),E=(0,r.LU)(),b=null!=g?g:E.tableOfContents.minHeadingLevel,f=null!=h?h:E.tableOfContents.maxHeadingLevel,N=(0,r.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,r.Si)(k),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},p))}}}]);