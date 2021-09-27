---
title: How to Enable VR on Android App - Chrome Custom Tabs API - GMetri XR Platform
description: Enable GMetri XR experiences within an Android app, by implementing Chrome CustomTabs API after publishing the experience - Tutorials on GMetri Documentation.
hide_title: true
sidebar_label: Android
---

# Android

## Implementing Chrome Custom Tabs for GMetri Experiences

To run GMetri experiences inside android apps, we recommend an implementation of Chrome Custom Tabs API. 
Detailed information on how to setup an android experience with Chrome Custom Tabs can be found in this [experience](https://github.com/gmetrixr/chrome-custom-tabs/).

Also checkout this [link](../Authentication/viewer_groups/token.md/) if you need authentication on GMetri experiences within your android app. 


In your android experience add the required dependencies for Chrome Custom Tabs. Following is an example of gradle build dependencies:
```java
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation 'com.android.support:appcompat-v7:26.1.0'
    implementation 'com.android.support:customtabs:26.1.0'
}
``` 
  
Information on how to install dependencies for other build systems are in the links below:

1. [Chrome custom tabs](https://developer.chrome.com/multidevice/android/customtabs/)

From this [experience](https://github.com/gmetrixr/chrome-custom-tabs/) , copy 2 files: `ChromeCustomTabs.java` and `ServiceConnectionCallback.java` into your android experience. These files together provide the interface for chrome custom tabs to run GMetri experiences.

The className `ChromeCustomTabs.java` implements 2 public methods:

  1. `initialize(String url, Context context)`
  2. `launch()`

Arguments:

  1. **url** - Url of the experience
  1. **context** - Context of your activity (`this`)
  
An example implementation of the above classes:
```java
  ChromeCustomTabsJwt chromeCustomTabs = new ChromeCustomTabsJwt();
  chromeCustomTabs = new ChromeCustomTabs();
  String url = "https://view.gmetri.com/v4/game/safehands_v2";
  chromeCustomTabs.initialize(url, this);
  chromeCustomTabs.launch();
```

## More about Chrome Custom Tabs

- To enable GMetri XR experiences within an Android app, the app needs to implement the Chrome CustomTabs API as described in this [article](https://developer.chrome.com/multidevice/android/customtabs/). 

- Chrome CustomTabs remove the restrictions imposed by WebViews on serving XR content. While WebViews don't share their state with the Chrome browser, ChromeCustomTabs are fully embeddable browser extensions capable of doing anything that a native Chrome browser can do. 

- Chrome CustomTabs give apps higher control over web experience and make transitions between native and web content seamless without having to resort to a WebView.

![android performance](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/performance.gif "android performance")
