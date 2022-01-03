---
title: Add Lights to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding lights in GMetri XR experiences.
hide_title: true
sidebar_label: Lights
---

# Lights

Lights illuminate other elements in a scene. Different types of lights have different type of affect on other elements.  
There are 3 different types of lights that are available for use.

1. **Ambient** - All elements are illuminated equally
2. **Point** - This light is emitted from a single point in all directions. A common use is to replicate light emitted from a lightbulb.
3. **Directional** - This light is emitted in a specific direction towards a target element.

## Properties

* **Intensity**: Strength of the light. Applicable for all types of lights.
* **Color**: Color of the emitted light. Applicable for all types of lights.
* **Fall off**: Maximum range of the light. Applicable only for **point light**. 
* **Transform**: Position of the light in 360 space. Applicable only for **point and directional light**.
* **Target Object**: Target element for light. Applicable only for **directional light**.
