---
title: How to Embed VR on Website with iFrame - Experience Deployment - GMetri XR Platform
description: Experiences created on the GMetri platform can be easily embedded within websites using the embed code generated after publishing the experience - Tutorials on GMetri Documentation
hide_title: true
sidebar_label: Website Embed
---

# Website Embed

Experiences created on the GMetri platform can be easily embedded within websites using the embed code generated after publishing the experience.

- Ensure that the "Public" option for your published experience is turned on.
- For **linking**, you can simply copy and insert the deployment URL in your website.
- For **embedding**, you can copy the link for the deployment and embed it within an iframe in your website.
- Add the required permissions to the iframe element as shown in the example below (replace src with your deployment link):

```html
<div className="embed_iframe_container gmetri-embed-gmetri-test_don_jan" 
     style="width: 560px; height: 315px; position: relative; overflow: hidden;">
      
</div>
<script type="text/javascript" src="..." async>
</script>
```
Example code to show a GMETRI Experience as a fullscreen iframe:
In index.html:

```html
<html style="margin: 0; height: 100%; overflow: hidden">
<head>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 
    <title>
    GMETRI | experience-name
    </title>
</head>
  <body>
    <div className= "embed_iframe_container gmetri-embed-gmetri-project-name" 
         style="position: absolute; left: 0; right: 0; top: 0; bottom: 0"></div>
      <script type='text/javascript' src="..." async></script>
  </body>
</html>
```
