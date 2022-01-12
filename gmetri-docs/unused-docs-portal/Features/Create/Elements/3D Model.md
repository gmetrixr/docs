---
title: Insert 3D Models to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for inserting 3D Models in GMetri XR experiences.
hide_title: true
sidebar_label: 3D Model
---

# 3D Model

## Description

The 3D Model element can be used to insert 3D models within a scene.

You can detect when the viewer clicks on a 3D Model by using the `is clicked` event, and perform more actions whenever this happens. You can also show/hide or animate the 3D Model through rules.

You can also add three kinds of inbuilt-animations to these 3D Models:
1. Bounce
2. Rotate
3. Fade

3D models can be uploaded using the built-in file manager or imported from SketchFab or Google Poly.

### Use this element if you need to

- Add 3D Models to your scene
- Show any kind of 3D Model animation
- Add 3D hotspots that auto-rotate in place 

## Looks ![3D Model](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/3d_object.svg#iconBold/)

![3D Model Element](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_Model_Element.png.jpg#boxShadow/)

## Properties

![3D Model Element Properties](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_Model_Element_properties.png.jpg#boxShadow/)

|                                                                    Property                                                                     | Description                                                                                                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Upload](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/upload_26.svg#icon/) <br/> Upload | Click on the Upload button to open the GMetri file manager and select an asset to use. <br/> Supported File types: `.glb`, `.gltf` |
| ![Transform](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/z_transform.svg#icon/) <br/> Transform   | The Transform section in the Properties tab can be used to manually set the position, rotation and scale of the element in the X, Y and Z coordinates              |
| ![Scale](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/scale_26.svg#icon/) <br/> Scale | Scale can be used to enlarge or shrink the element uniformly |
| ![Wireframe](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/hidden_26.svg#icon/) <br/> Wireframe   | Wireframe toggle determines whether the element wireframe i.e. edges of the mesh polygon, should be displayed instead of the solid element                            |
| ![Auto Rotate](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/hidden_26.svg#icon/) <br/> Auto Rotate | Auto Rotate toggle when on makes the element rotate about it's center at a uniform rate                                                                            |
|  ![Hidden](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/hidden_26.svg#icon/) <br/> Hidden        | Hiding the element makes the element invisible and disables all interaction with it as well.                                                                       |
| ![Autoplay](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/autoplay.svg#icon/) <br/> Opacity | Opacity can be used to control the transparency of the element. 1.00 is Opaque and 0.00 is Invisible. An element with 0.00 opacity will still remain interactive. |
| ![Animation](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/animation_26.svg#icon/) Animation   | There are 3 types of default animations - Bounce, Rotate, Fade. These can be used to give an element visual emphasis. |

##  Rules

###  When Events

- is clicked
- is hovered
- is pressed
- is released

###  Then Actions

- appear
- disappear
- toggle show/hide
- start animation
- start all animations
- stop animation
- stop all animations

## Compatibility

| Android (Google Chrome) | iOS (Google Chrome) | Oculus Go | PC (Google Chrome) |
| :---------------------: | :-----------------: | :-------: | :----------------: |
|           Yes           |         Yes         |    Yes    |        Yes         |

<!--* **Compatible with VR Headsets?**: Yes, Full Compatibility-->

# Tutorial

<iframe width={"100%"} height={"380px"}  src={"https://www.youtube.com/embed/kpfVuvJ8Z3M"} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
