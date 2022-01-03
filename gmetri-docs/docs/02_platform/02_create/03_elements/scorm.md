---
title: Add SCORM packages to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for running SCORM packages in GMetri XR experiences.
hide_title: true
sidebar_label: SCORM
---

# SCORM

Use this element to integrate a SCORM package with a GMetri experience.

## Properties
* **URL**: The URL to the entry file for the SCORM package. This is generally an address to the HTML file inside the SCORM package. Example: `https://example.com/scorm/index.html`

## Rules 

### When Event
* **is completed** - Use this event to perform any actions whenever the user completes the SCORM module.
* **is initialized** - Use this event to perform any actions whenever the SCORM module is loaded initially.
* **sets score** - Use this event to capture the score emitted from the SCORM module into a variable. Example rule: `When SCORM sets score, then capture variable_score should capture data`
* **is closed** - Use this event to perform any action when the SCORM module is closed.

### Then Action
* **appear** - Make the SCORM element appear
* **disappear** - Make the SCORM element disappear