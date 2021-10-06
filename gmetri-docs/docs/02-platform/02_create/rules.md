---
title: Build XR Experiences on GMetri Platform
description: Understand concepts related to Rules on the GMetri XR platform.
hide_title: true
sidebar_label: Rules
---

# Rules

Rules define the actions performed based on certain event triggers. Event triggers can be in the form of clicks, scene loads and many more.
Event trigger vary from element to element and are specified in detail on every element's documentation page.

To add a rule, hea over to the rule (zig-zag connected dots) button on the top left of your editor screen/

![Editor rules](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/rules.JPG#boxShadow/)

Rules follow a `WHEN an EVENT is triggered THEN an ACTION is performed` model. Thus rules are applied to elements or a scene to perform certain action based on event triggers.

![rules](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/rule_expanded.JPG#boxShadow/)

## Add rules

To add a rule, click on the `New Rule` button.

## Enable/Disable rules

To enable or disable rules, use the `Active` checkbox on the top right of the rule.

## Tracking rules

To enable analytics tracking of a rule check the `Analytics` checkbox on the top right.

## Search rules

On larger experiences, the amount of rules can increase multi-folds. To ease the process of finding a rule, you can use the searchbox on the rules page. You can search for any keyword related to a particular rule (event, action, element names etc.)

## Color coding

To help you cluster rules together, you can color code them. To do so, click on the color box on the top left of a rule and choose a color.

## Stacking events and actions

You can stack events using `AND` or `OR` operators. This is useful when you want to perform actions based off multiple events.
For example, when event A AND B AND C occur, perform action(s). Or, when event A OR B OR C occur, perform action(s).
Hence multiple actions can be triggered based on one of more events.

An example of an event is: 

`WHEN` **Scene_A** loads `OR` **start_button** is clicked `THEN`  **increment a variable** `AND` toggle **Cube_A** to appear/dissapear.

## Rule actions

- Select
- Duplicate
- Delete