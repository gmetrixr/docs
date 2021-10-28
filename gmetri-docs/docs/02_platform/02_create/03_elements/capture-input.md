---
title: Add a Text Capture Overlay to Build XR Experiences
sidebar_label: Capture Input
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding a Text Capture Overlay in GMetri XR experiences.
hide_title: true
---

# Capture Input

Accept user inputs using Capture Input, and work with them using rules.

![Capture Text Element](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Capture_Text_Element.png.jpg#boxShadow/)

### Compatibility

| Fullscreen/Embed Mode | VR/Headset Mode    |
| :------:              | :--------:         |
| :white_check_mark:    | :heavy_minus_sign: |

## Properties

* **Mode**: "Text Box" / "Text Area" / "Dropdown"

### Text Properties (Visible only if Mode is Text Box or Text Area)

* **Min Length**, **Max Length**
* **Regex Check**: An optional regex that the user's input will be validated against.
* **Regex Error Msg**: Optional error message to show in case regex validation fail.

### Dropdown Properties (Visible only if Mode is Dropdown)

* **Options**: A coma separated list of items to show in the dropdown.

##  Rules

* **Events**: `When audio` `inputs value`/`is closed`
* **Actions**: `Then audio should` `appear`

:::note
To save the value in a variable, use rule:

`When audio` `inputs value`, `Then my_variable should` `capture value`/`append captured value`

This will save the inputted value in `my_variable`
:::

## Example

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/PGCz2HYKUFk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
