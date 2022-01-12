---
title: Add a Pano Video to Build XR Experiences
sidebar_label: Pano Video
description: Pano Video Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding a Pano Video in GMetri XR experiences.
hide_title: true
---

# Pano Video

## Description

Add a Pano Video

## Usage

- 360 space
- Pano overlay

## Looks ![Pano Video](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/panovideo.svg#icon/)

![Pano Video Element](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Pano_Video_Element.png.jpg#boxShadow/)

## Properties

![Pano Video Element Properties](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Pano_Video_Element_properties.png.jpg#boxShadow/)

|                                                                    Property                                                                     | Description                                                                                                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         ![Upload](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/upload.svg#icon/)<br/> Upload         | Click on the Upload button to open the GMetri file manager and select an asset to use. <br/> Supported File type: `.png`, `.jpg`, `.jpeg`                           |
| ![Rotation Offset](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/RotationOffset.svg#icon/)<br/> Scale | Scale can be used to enlarge or shrink the element uniformly                                                                                                       |
|       ![Opacity](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/opacity.svg#icon/)<br/> Opacity        | Opacity can be used to control the transparency of the element. 1.00 is Opaque and 0.00 is Invisible. An element with 0.00 opacity will still remain interactive. |
|      ![Near/Far](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/layers.svg#icon/)<br/> Animation       | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis.                                              |
|         ![Loop](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/loop.svg#icon/)<br/> Animation          | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis.                                              |
|         ![Mute](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/mute.svg#icon/)<br/> Animation          | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis.                                              |
|       ![Hidden](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/hidden_26.svg#icon/)<br/> Hidden        | Hiding the element makes the element invisible and disables all interaction with it as well.                                                                       |

##  Rules

###  When Event

- ends

###  Then Actions

- appear
- disappear
- toggle show/hide

## Compatibility

| Android (Google Chrome) | iOS (Google Chrome) | Oculus Go | PC (Google Chrome) |
| :---------------------: | :-----------------: | :-------: | :----------------: |
|           Yes           |         Yes         |    Yes    |        Yes         |

<!--* **Compatible with VR Headsets?**: Yes, Full Compatibility-->

:::caution NOTE for iOS
Videos will not auto-play on scene-load unless "Click to start" feature is enabled. This is because of an iOS restriction. You can enable "Click to start" from Publish (⚡) > Preferences. For more details head over [here](../../Publish#properties-tab).
:::

## Tutorial

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/PVkfu1pSoro" frameBorder="0" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
