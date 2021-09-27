---
title: Add Elements to the Scene on GMetri XR Platform
description: Scene Description, Usage, Properties, Rules, When Events, Then Actions to add elements to the Scene to create XR Experiences.
hide_title: true
sidebar_label: Scene
---

# Scene

## Description 

On clicking on `Create/Build Experience`, an editor opens up. The large empty area with black background is the Scene. This is where 3D elements can be placed. Scene is a scratchpad for creations in XR on GMetri Platform. Once Elements are added to the Scene, they can be rotated around, dragged and translated in three dimensions inside the Scene. An experience can have multiple Scenes. GMetri Platform provides the functionality to go back and forth between Scenes via its rules (see below).

## Usage

A Scene is where you place all your 2D and 3D Elements.

## Properties

| Property          |Description |
| :----------------:|:-----------|
| Name              | Name of the Scene |
| ![Yaw](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/yaw.svg#icon) <br/> Yaw               | Set the direction the scene will start with, in yaw (horizontal direction/) |
| ![Pitch](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/pitch.svg#icon/) <br/> Pitch             | set the direction the scene will start with, in pitch (vertical direction |
| ![Reset rotation](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/reset.svg#icon/) <br/> Rotation Reset    | reset the scene rotation to the Scene Yaw and Pitch Correction values every time the scene is changed to this current scene |
| ![Gyro Lock](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/Lock.svg#icon/) <br/> Gyro Lock         | Lock the gyroscope of your device, ensuring your content remains on screen no matter how you turn your mobile device |

## Rules

### When Events

- preloads - fires an action when the scene is selected or set to appear next, but before it can appear/load on the screen. This is mostly used to set/reset variable values.
- loads - fires an action only after a scene has loaded fully on the screen.

### Then Actions

- reset session
- end experience
- make API calls
- open URL
- reset all variables
- copy to clipboard
- change to scene
- take a screenshot
- point to [an element] - the scene automatically scrolls all the way to this element, centering it on the screen