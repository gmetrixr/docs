---
title: Add videos to Build XR Experiences
sidebar_label: Video
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding a 2D Video in GMetri XR experiences.
hide_title: true
#TODO: Add green screen effect link
---

# Video

## Description

The Video element can be used to add a video inside your experience.

You can add a video in a loop and also mute a video if required.

## Use this element if you need to

- Do a video playback inside your XR experience.
- Do animations inside your XR experience.
- Add a green screen effect to your XR experience.

## Looks ![Video](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/video_flat.svg#icon/) 

![Video Element](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/video_element.png.jpg#boxShadow/)

## Properties

![Video Element Properties](https://r.vrgmetri.com/image/q_95/gb-web/portal-docs/assets/img/screenshots/video_properties.png.jpg#boxShadow/)

|                                                                                                                 Property                                                                                                                 | Description                                                                                                                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                     ![Upload](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/upload.svg#icon/)<br/> Upload                                                      | Click on the Upload button to open the GMetri file manager and select an asset to use. <br/> Supported File type: `.mp4`                                            |
|                                                  ![Scale](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/z_transform.svg#icon/)<br/> Transform                                                  | The Transform section in the Properties tab can be used to manually set the position, rotation and scale of the element in the X, Y and Z coordinates              |
| ![Width and Height](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/H.svg#icon/)<br/> Width and Height | Width and Height define the aspect ratio of the Element frame.                                                                                                     |
|                                                     ![Scale](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/scale_26.svg#icon/)<br/> Scale                                                      | Scale can be used to enlarge or shrink the element uniformly                                                                                                       |
|                                                    ![Opacity](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/opacity.svg#icon/)<br/> Opacity                                                    | Opacity can be used to control the transparency of the element. 1.00 is Opaque and 0.00 is Invisible. An element with 0.00 opacity will still remain interactive. |
|                                                    ![Hidden](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/hidden_26.svg#icon/)<br/> Hidden                                                    | Hiding the element makes the element invisible and disables all interaction with it as well.                                                                       |
|                                                      ![Loop](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/loop.svg#icon/)<br/> Loop                                                    | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis.                                              |
|                                                      ![Mute](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/mute.svg#icon/)<br/> Mute                                                     | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis.                                              |
|                                                     ![Volume](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/volume.svg#icon/)<br/> Volume                                                      | Volume can be used to set the elements audible volume.                                                                                                             |
|                                               ![Animation](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/animation_26.svg#icon/)<br/> Animation                                                | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis.                                              |

##  Rules

###  When Event

- is clicked
- is hovered
- is pressed (controller only)
- is released (controller only)

###  Then Actions

- appear
- disappear
- toggle show/hide
- play/resume
- play/seek to
- pause
- toggle play/pause

## Compatibility

| Android (Google Chrome) | iOS (Google Chrome) | Oculus Go | PC (Google Chrome) |
| :---------------------: | :-----------------: | :-------: | :----------------: |
|           Yes           |         Yes         |    Yes    |        Yes         |

<!--* **Compatible with VR Headsets?**: Yes, Full Compatibility-->

:::caution NOTE for iOS
Videos will not auto-play on scene-load unless "Click to start" feature is enabled. This is because of an iOS restriction. You can enable "Click to start" from Publish (⚡) > Preferences. For more details head over [here](../../Publish/#properties-tab).
:::

## Tutorial

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/vGlNNX33s74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
