---
title: How to Embed VR Experience in React Native iOS Android App - GMetri XR Platform
description: Embed VR Experience in React Native iOS Android App  after publishing the experience - Tutorials on GMetri Documentation.
hide_title: true
sidebar_label: React Native (Android & iOS)
---

# React Native (Android & iOS)

There are various ways of embedding GMetri experiences within a React Native iOS/Android app.

- We recommend using [this](https://github.com/droibit/react-native-custom-tabs/) library.

- Above  library has the following behaviour:

    - Android:
        - If Chrome is installed, open the URL in Chrome. 
        - You can customize look & feel. 
        - If Chrome is not installed, open in other browser.
    
    - iOS:
        - If Chrome is installed, open the URL in it. 
        - If it is not installed, open in Safari.