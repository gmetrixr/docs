---
title: Insert 3D Models to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.
hide_title: true
sidebar_label: AR Viewer
---

# AR Viewer

AR Viewer can show interactive 3D models in your surroundings. This is a mobile only feature.

![3D Model Element](https://r.vrgmetri.com/image/q_90,w_300/gb-web/portal-docs/assets/img/screenshots/ar_element_looks.jpg#boxShadow/)

:::note
For devices that don't support AR, we fallback to showing a 3D model on a plain background (instead of your surroundings)
:::

After entering AR mode, move your device to start tracking a surface to place the 3D model. 

### Compatibility

* Mobile Devices: All [Android devices supporting ARCore](https://developers.google.com/ar/discover/supported-devices/) and all Apple devices running iOS 12+.
* Non-mobile devices: Fallback to showing a 3D Model on a plain background.

[File requirements for 3D models](https://developers.google.com/ar/develop/java/scene-viewer#file_requirements_for_models/)

### Interactions

After placing 3D model:
* **To adjust size**: Use two fingers (pinch-to-zoom)
* **To move**: Click and drag the base of the model
* **To rotate**: Touch and drag on Android, use two fingers to rotate on iOS.

##  Rules

* **Actions**: `Then AR Viewer should` `appear`
