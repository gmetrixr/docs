---
title: Setting up 3D Scenes - GMetri XR Platform
description: Made using the GMetri XR platform, this demonstrates how to add and setup 3D scenes for your XR experiences.
hide_title: true
sidebar_label: 3D Scenes
---


<head>
  <link rel="canonical" href="https://docs.gmetri.com/metaverse/build/building-blocks/scenes/3d-scenes" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/metaverse/build/building-blocks/scenes/3d-scenes
:::

# 3D Scenes and Collisions
This section will demonstrate how to setup 3D Scenes and Collision using Collider Box elements. 

## Prerequisites
There are a few key concepts to understand before we can get in detail on setting up 3D scenes with collisions

### 3D Scenes 
3D Scenes allow viewers/players to roam freely within a space using **WASD** and **Arrow keys [← → ↑ ↓]**. This could be seen similar to you walking around inside a room, visiting and interacting with different parts of a room. 
In addition to movement, viewers will also be able to jump using the **SPACE** key on desktop devices.

### Scene Bounds
These define the confined boundaries of a 3D scene and are usually configured to restrict movement of viewers to specific regions within a space. In most cases these should match the limits of the environment.

In the editor, scene bounds are visible as a grid and can be toggled from the **Viewport Properties**. 
In view, scene bounds are invisible.

![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_scene/3D_scene_bounds.png#boxShadow)

#### Scene Bounds visibility can be controlled from viewport properties

<video controls="true" allowfullscreen="true" muted="true" width="100%">
  <source src="https://gb-web.s3.ap-south-1.amazonaws.com/portal-docs/assets/img/screenshots/3D_scene/3D_scene_viewport_properties_2_converted.m4v" type="video/mp4" />
</video>

### Collider Box Element
A Collider Box is an invisible box that objects will rest on top of. Without colliders, viewers will fall through floors and go through walls and benches.
In the editor, a collider box element is represented as a cube. Position and dimensions of this collider box can be adjusted from the properties panel. 

![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_scene/3D_scene_collider_box.png#boxShadow)

In view, the collider box elements are represented as invisible cubes with which the players will collide and not walk through.

:::info
You can add as many Collider Box elements as you wish, but we recommend lesser than 50 per scene to ensure smooth working on low-end desktop and mobile devices
:::

## 3D Scene setup with collisions 
1. From the editor, add a new 3D scene by going to `Add Element > Scene > 3D Scene`. This also inserts a few default elements that are helpful in scene setup. 
    * **Pano** - A background for the entire scene
    * **Environment** - A 3D model that will serve as the space for our scene. This can be replaced by selecting another 3D model from the file manager and adjusting positioning and scale to match life-size scale
    * **Zone** - A spawn zone from where all the player will enter this scene. This can be moved around the scene to enable players entering the room from different locations. 
    * **Lights** - A default light setup to make the scene look good.
    
      ![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3D_scene/3D_scene_default_elements.png#boxShadow)

2. From the editor, add a new **Collider Box** element. 
   * Align the element with one of the walls in the middle and adjust the scale.

<video controls="true" allowfullscreen="true" muted="true" autoplay width="100%">
  <source src="https://gb-web.s3.ap-south-1.amazonaws.com/portal-docs/assets/img/screenshots/3D_scene/3D_scene_align_collider_wall_2_converted.m4v" type="video/mp4" />
</video>
3. From the Scene Properties, adjust the `Scene Bounds` to confine player movement within a space. This is by automatically configured for the default environment that comes with every new 3D scene.
4. Ensure that `Collisions` are enabled from scene properties.
5. Preview the scene or simply publish the experience to see your changes.

## Video Tutorial
Here's the full video tutorial

<video controls="true" allowfullscreen="true" muted="true" width="100%">
  <source src="https://gb-web.s3.ap-south-1.amazonaws.com/portal-docs/assets/img/screenshots/3D_scene/3D_scene_setup_trimmer_1.5_converted.m4v" type="video/mp4" />
</video>


## Final Experience
Here's the final experience that we created in above steps

<iframe width="100%" height="405px"src="https://jkbhaa.gmetri.com/demo?embed=true"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; microphone; camera; display-capture;" allowfullscreen="true" >
</iframe>

