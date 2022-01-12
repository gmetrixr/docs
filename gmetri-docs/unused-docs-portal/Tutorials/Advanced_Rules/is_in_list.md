---
title: How to use the "is in list" action on string and number variables.
description: Made using the GMetri XR platform, this tutorial shows how to use is in list connection.
hide_title: true
sidebar_label: Is In List
---

# How to use the "is in list" event on string or number variable in a GMetri experience.

## Description

This tutorial explains how to use the `is in list` event on the variables that you create in your GMetri [experience](../../../Features/Create/experiences/). This event is triggered when your variable value is present in the list you specify.

## Creating a variable and an element

After you have created your experience, create a variable.

1. In your experience, click on the project settings icon in the bottom right.

2. Go to the variables tab.

3. Create a new variable of the type `string` or `number`, and set it's value as per your choice.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/variable_creation.png#boxShadow)

4. Click on the `Add Element` icon and add an Emoji.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/add-embed-scorm.png#boxShadow)

5. Make the Emoji hidden by clicking on `hidden` icon as shown below.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/hidden_emoji.png#boxShadow)

## Creating the rule

1. Click on the Rules icon at the bottom of the page.

2. Create a new rule on the variable you just created.

3. Select the event as `is in list` from the drop down.

4. Enter your comma seperated list in the textbox.

5. Set the action to make the Emoji appear as shown below.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/is_in_list_connection.png#boxShadow)

6. Click on the `Player` icon at the bottom right corner. If your variable is in the list you specified, the emoji will appear after the scene loads.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/emoji_appears.png.jpg#boxShadow)