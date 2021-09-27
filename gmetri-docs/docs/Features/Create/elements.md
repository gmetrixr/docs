---
title: Build XR Experiences on GMetri Platform
description: Understand concepts related to Elements on the GMetri XR platform.
hide_title: true
sidebar_label: Introduction
---


# Elements

Elements are the basic building blocks added to a scene. Examples of elements are `Cube`,`Text` `Polygon`, `Product Card` and many more.

Elements belong to the following categories:

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

## Elements Button

![Editor elements](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/elements.JPG#boxShadow/)

Find the `+` button in the editor that opens up an array of elements to be added to a scene.

## Element Properties

Every element has certain set of properties to control the appearence and behaviour of that element. For example, you can control dimensions of the cube, lock it in the 3D space and change its color. SImilarly you can change the product information inside a product card.

Some elements are 3D whilst some of them are 2D. Both are associated to a scene but the 2D elements won't appear on the 3D canvas. For example, the `Product Card` appears as a dialog or a model overlay on the 3D canvas. It is thus a 2D element.

## Events and Actions

Experience viewers can play around with the 3D canvas and the elements inside it. Every element has a few set of allowed actions that are set by the `Rules`. These actions differ from element to element. Actions are performed when a particular event occurs on an Element.