---
title: Insert 3D Models to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.
hide_title: true
sidebar_label: AR Viewer
---

# AR Viewer

## Description

The AR Viewer element can be used to show interactive 3D models in your surroundings in AR. This is mobile only feature, for devices that don't support AR, we fallback to showing a 3D model viewer instead.

The AR Viewer element is supported on all android devices supporting ARCore and all apple mobile devices running iOS 12+.

After entering AR mode, move your device to start tracking a surface to place the 3D model. 

### Interactions
After placing 3D model:
* Use two fingers (pinch-to-zoom) to adjust size
* Click and drag the base of the model to move around
* On Android: Click and drag the model to rotate
* On iOS: Use two fingers rotate to rotate the 3D model in place. 

3D models can be uploaded using the built-in file manager.

### Use this element if you need to

- Show 3D Models in AR

## Looks ![3D Model](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/ar.svg#iconBold/)

![3D Model Element](https://r.vrgmetri.com/image/q_90,w_300/gb-web/portal-docs/assets/img/screenshots/ar_element_looks.jpg#boxShadow/)

## Properties

![AR Viewer Element Properties](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/ar-properties.png.jpg#boxShadow/)

|                                                                    Property                                                                     | Description                                                                                                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Upload](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/upload_26.svg#icon/) <br/> Upload | Click on the Upload button to open the GMetri file manager and select an asset to use. <br/> Supported File types: `.glb`, `.gltf` |

##  Rules

###  Then Actions
- appear

## Compatibility
This element supports all devices listed here: [Supported devices](https://developers.google.com/ar/discover/supported-devices/)

This element supports 3D models with file specifications listed here: [File requirements for models](https://developers.google.com/ar/develop/java/scene-viewer#file_requirements_for_models/)