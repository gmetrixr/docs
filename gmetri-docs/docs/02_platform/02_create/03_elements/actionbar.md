---
title: Add Action Bar to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding action bar in GMetri XR experiences.
hide_title: true
sidebar_label: Action Bar
---

# Action Bar

Actionbars are collapsible panels with actionable buttons (called items).

![Action Bar Element](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Action_Bar_Element.jpeg#boxShadow/)

### Compatibility

| Fullscreen/Embed Mode | VR/Headset Mode    |
| :------:              | :--------:         |
| :white_check_mark:    | :heavy_minus_sign: |

## Properties

* **Position**: Top/Right/Bottom/Left.
:::warning
One position on the screen can only display one action bar a time
:::
* **Label**: A small optional heading that will displayed near the actionbar.
* **Collapsible**: Check this if you want to show a collpse notch on the actiobar.
:::note
Collapsing the actionbar isn't the same as hiding the actionbar. A collapsed actionbar can pulled up again by the user using the notch. A hidden actiobar can't. 
:::
* **Color**
* **Opacity**

##  Rules

* **Events**: `When actionbar item (n)` `has been clicked`/`is clicked`
* **Actions**: `Then actionbar should` `appear`/`disappear`/`toggle show/hide`

## Example

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/8nHcIJ7EtQY" frameBorder="0" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>