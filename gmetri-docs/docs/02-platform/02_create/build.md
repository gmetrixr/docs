---
id: build
title: Build XR Experiences on GMetri Platform
description: Understand Concepts, Components, Editor, Scene, Elements, Rules, Mode, Axis and Snap, Zoom, Shortcuts and Quick Actions, Right Bar, Elements Button, Rules to build XR experiences
hide_title: true
sidebar_label: Build
---

# Build

## Concepts 

### Editor
![Editor](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/editor.PNG#boxShadow)

- Editor encompasses several tools necessary for building XR experiences from scratch. 
- Editor can be used with no prior experience in the XR field and does not require any programming knowledge. 
- It gives you a set of drag and drop tools to create XR experiences.

### Scene

What opens up when you go to the editor is the [**Scene**](./scene/). An experience can consist of multiple Scenes. Interactions added to a Scene enable us to jump from one Scene to another.

**Properties:**

- Name
- Yaw: Sets the direction the scene will start with, in yaw (horizontal direction)
- Pitch: Sets the direction the scene will start with, in pitch (vertical direction)
- Rotation Reset: Resets the scene rotation to the Scene Yaw and Pitch Correction values every time the scene is changed to this current scene 
- Gyro Lock: Locks the gyroscope of your device, ensuring your content remains on screen no matter how you turn your mobile device

### Elements

Elements are the basic building blocks added to a scene. Elements belong to four main categories:

- Scene
- Panorama
- Standard
- Audio
- 3D
- Spatial
- Gamification
- User Input
- User Interface
- Connect

Detailed information of all available Elements is available in the [**Elements**](./elements/) section.

**Common Properties:**

Element have properties that vary according to the type of element. Here we list the properties common to all elements.

- Name
- Transforms:
    - Translate
    - Scale
    - Rotate
- Opacity
- Color
- Animation:
    - Bounce
    - Rotate
    - Fade

### Rules
![rules](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/connection.JPG#boxShadow/)

Rules follow a `WHEN an EVENT is triggered THEN an ACTION is performed` model. Thus rules are applied to elements or a scene to perform certain action based on event triggers.

**Properties:**

- Name
- Enable
- Track (for analytics)

- **Events:**

    - is clicked
    - is hovered
    - is pressed (controller only)
    - is released (controller only)

- **Actions:**

    - appear
    - disappear
    - toggle show/hide
    - play/resume
    - play/seek to
    - pause
    - toggle play/pause
    
- after (duration after event trigger that the action should be performed)

Some events and actions are element specific and can be found on the Element's documentation page.

## Components

### Mode, Axis and Snap
![Editor top left menu](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/editor_top_left.png.jpg#boxShadow/)

**Mode:**

- Drag
- Translate
- Rotate

**Axis:**

- World
- Local

**Snap:**

- On/Off

### Zoom, Shortcuts and Quick Actions

![Editor bottom left menu](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/editor_bottom_left.png.jpg#boxShadow/)


**Zoom:**

- Zoom in
- Zoom out
- Zoom reset

**Quick actions:**

- Undo
- Redo

**Shortcuts**

- List of keyboard shortcuts

### Right Bar

![Right bar element props](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/editor_right_bar_element_props.png.jpg#boxShadow/)
![Editor right bar scene structure](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/editor_right_bar_scene_structure.png.jpg#boxShadow/)

Right bar consists of all the element and scene related settings.


### Left Bar

![Left bar element props](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/editor_left_bar.JPG#boxShadow/)


You can access the following features from the Left bar:
(top - bottom)

1. Add Elements
2. Add Rules
3. [File Manager](./file_manager/)
4. Experience Settings
5. Publish Experience