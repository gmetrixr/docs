---
title: Add Voice Recognition to Build XR Experiences
sidebar_label: Voice
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for Adding Voice Recognition in GMetri XR experiences.
hide_title: true
---

# Voice

## Description ![Voice](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/voice.svg#icon/) 

Add Voice Recognition

## Properties

![Voice Element Properties](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Voice_Element_properties.png.jpg#boxShadow/)

| Property | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phrases  | List of Phrases and their Aliases that the element should try and match. An alias is a phrase that should be recognised as the same phrase as it's parent phrase; Each phrase may have multiple aliases. For example, the phrase 'Hello' may have aliases like 'Hi', 'Hey', 'Good Morning', etc. For any of these Aliases, the rule associated with the Phrase 'Hello' will be executed. |

##  Rules

###  When Event

- matches phrase
- matches no phrase

###  Then Actions

- start listening

## Compatibility

| Android (Google Chrome) | iOS (Google Chrome) | Oculus Go | PC (Google Chrome) |
| :---------------------: | :-----------------: | :-------: | :----------------: |
|           Yes           |         Yes         |    Yes    |        Yes         |
