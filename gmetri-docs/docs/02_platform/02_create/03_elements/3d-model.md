---
title: Insert 3D Models to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.
hide_title: true
sidebar_label: 3D Model
---
import Card from "/src/components/Card"

# 3D Model

GMetri supports `.glb` and `.gltf[2]` formats for displaying 3D Models on the web.

![3D Model Element](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/elements/3d-model.jpg)

3D Models can be uploaded using the File Manager or imported from SketchFab or Google Poly.

<Card heading={"Uploading 3D Models"} link={"../experience/file_manager#uploading-3d-models"} />

## Properties

* **TRANSFORM**: 3D Placement (Tranform, Rotate, Scale)
* **Scale**
* **Opacity**
* **Wireframe**: Toggle wireframe mode

#### Animation Related

* **Auto Animation**: Autostart the animation baked into the 3D Model
* **Auto Rotate**: Autorotate the 3D Model in place
* **Hover Animation**: In case you want this element to react to the pointer hovering over it, check this.
:::note
**Hover Animation** is effective only when there is `is clicked` or `has been clicked` event rule set for this element
:::

##  Rules

* **Events**: `When 3D Element` `has been clicked`/`is clicked`/`is hovered for (n) seconds`/`is pressed (controller only)`/`is released (controller only)`
* **Actions**: `Then 3D Element should` 
   * `appear`/`disappear`/`toggle show/hide`/
   * `start animation (selected, loop on/off)`/`stop animation (selected, loop on/off)`/
   * `start all animations`/`stop all animations`

## Example

<iframe width={"100%"} height={"380px"}  src={"https://www.youtube.com/embed/kpfVuvJ8Z3M"} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
