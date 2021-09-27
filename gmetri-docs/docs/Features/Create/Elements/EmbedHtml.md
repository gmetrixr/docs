---
title: Insert a Html inside the Popup to Build XR Experiences
sidebar_label: EmbedHtml
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials to Insert a QR Code Reader in GMetri XR experiences.
hide_title: true
---

# EmbedHtml

## Description

The EmbedHtml element can render any custom HTML content in a popup. The visibility of this popup can be controlled via rules.

### Use this element if you need to

* Show a youtube/vimeo video inside your experience.
* Embed another service like twitter on-demand (for example on clicking a twitter logo in the experience).
* Render custom html content like a showing a wikipedia page on clicking an object in the experience.
* Stream a live video from youtube/zoom. For further information on this, please see its [tutorial](../../../../Tutorials/Make/embed_livestream/).

## Looks ![EmbedHtml](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/Embed.svg#icon/) 

![QR Matcher Element](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Embed_view.png#boxShadow/)

## Properties

![QR Matcher Element Properties](https://r.vrgmetri.com/image/q_90,w_250/gb-web/portal-docs/assets/img/screenshots/Embed_properties.png.jpg#boxShadow/)

##  Rules

###  Then Actions

- appear

## Usage

The EmbedHtml component accepts raw HTML and displays it on screen as a 2D overlay on top of the 3D world. No additional styling is applied on top of your HTML so that you have full control of your 
HTML component. Things might not look properly aligned unless you define the dimensions of your HTML components (width, height). 

For example, one of the popular use-case for EmbedHtml is the addition of iframes to open your website from within the experience. To do so, it would be benefitial to use the following template.

```html
<iframe 
    width="100%" 
    style="height:100vh" 
    src="https://gmetri.com" 
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

Similarly if you add a div or any other HTML component, make sure that you define the dimensions for that component as well.
