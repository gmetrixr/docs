---
title: Platform Compatibility Matrix for XR Experience Creation
description: Experience Creation Support, Viewer Support for Headset, Laptops, Android, Phone, iOS Phone, Feature Compatibility with Full Screen / VR mode, Media Codec Compatibility, Video Audio Formats.
hide_title: true
sidebar_label: Platform Compatibility Matrix
---

# Platform Compatibility Matrix

<!-- See list of icons here: https://fontawesome.com/v4.7.0/icons/ -->


## Viewer Support - Mobiles <i className="fa fa-mobile" aria-label="true"></i>, Headset, Laptops <i className="fa fa-laptop" aria-label="true"></i>

The following are the platforms and browsers supported for viewing experiences:

### Android Phone

| Browser (Mode)                         | Chrome <i className="fa fa-chrome" aria-label="true"></i> | Edge <i className="fa fa-edge" aria-label="true"></i> |
|---------                               | :-----:      | :-----:      |
| Video ~4K (3840x1920)   **max**        | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |
| Phone VR Mode                          | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-ban" aria-label="true"></i>     |
| Orientation/Tilt based movement        | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |
| All Other Features                     | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |

###### **Minimum supported Chrome version is v81**

### iOS Phone

| Browser                                | Safari <i className="fa fa-safari" aria-label="true"></i> | Chrome <i className="fa fa-chrome" aria-label="true"></i> |
|---------                               | :---:            | :---:        |
| Video ~4K (3840x1920)      **max**     | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |
| Phone VR Mode                          | <i className="fa fa-ban" aria-label="true"></i>     | <i className="fa fa-ban" aria-label="true"></i>     |
| Orientation/Tilt based movement        | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-ban" aria-label="true"></i>   |
| All Other Features                     | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |

###### **Minimum supported iOS version is v13.3.1**

### Laptops/Desktops (Full Screen)

| OS                                              | Win <i className="fa fa-windows" aria-label="true"></i>/Lin <i className="fa fa-linux" aria-label="true"></i>  | Windows <i className="fa fa-windows" aria-label="true"></i> | Apple <i className="fa fa-apple" aria-label="true"></i>      | Apple <i className="fa fa-apple" aria-label="true"></i>       |
|:---                                             | :---:                            | :---:                | :---:                 | :---:                  |
| Browser                                         | Chrome <i className="fa fa-chrome" aria-label="true"></i>               | Edge <i className="fa fa-edge" aria-label="true"></i>       |  Safari <i className="fa fa-safari" aria-label="true"></i>     | Chrome <i className="fa fa-chrome" aria-label="true"></i>    |
| Video 4K (3840x2160) **max**                    | <i className="fa fa-check" aria-label="true"></i>                       | <i className="fa fa-check" aria-label="true"></i>           | <i className="fa fa-check" aria-label="true"></i>            | <i className="fa fa-check" aria-label="true"></i>             |
| All Other Features             | <i className="fa fa-check" aria-label="true"></i>                       | <i className="fa fa-check" aria-label="true"></i>           | <i className="fa fa-check" aria-label="true"></i>            | <i className="fa fa-check" aria-label="true"></i>             |

### Headsets

| Browser      | Oculus Go | Oculus Quest, Quest 2 | HTC Vive |
|:---          | :---:                    | :---:             | :---:                  |
| Video ~4K (3840x1920)   **max**         | <i className="fa fa-check" aria-label="true"></i>       | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |
| All Other Features     | <i className="fa fa-check" aria-label="true"></i>       | <i className="fa fa-check" aria-label="true"></i>   | <i className="fa fa-check" aria-label="true"></i>   |


## Editor Support - Laptops/Desktops <i className="fa fa-laptop" aria-label="true"></i>

The following are the platforms and browsers supported for creating and editing experiences:

| OS                | Win <i className="fa fa-windows" aria-label="true"></i>/Lin <i className="fa fa-linux" aria-label="true"></i> | Windows <i className="fa fa-windows" aria-label="true"></i> | Apple <i className="fa fa-apple" aria-label="true"></i>    | Apple <i className="fa fa-apple" aria-label="true"></i>    |
|:--------          | :-----:                         | :---:                | :---:               |  :---:              |
| Browser           | Chrome <i className="fa fa-chrome" aria-label="true"></i>              | Edge <i className="fa fa-edge" aria-label="true"></i>       | Chrome <i className="fa fa-chrome" aria-label="true"></i>  |  Safari <i className="fa fa-safari" aria-label="true"></i> |
| Supported?        | <i className="fa fa-check" aria-label="true"></i>                      |  <i className="fa fa-check" aria-label="true"></i>                     | <i className="fa fa-check" aria-label="true"></i>           | <i className="fa fa-check" aria-label="true"></i>          |

### Feature Compatibility in different modes

| Feature         | Full Screen Mode | Embed Mode         | VR Mode           | Android app[^3] | 
|:---             | :---:            | :---:              | :---:             | :---:       |
| [AR Viewer](../../Features/Create/Elements/AR%20Viewer/)       | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [ActionBar](../../Features/Create/Elements/Action%20Bar/)       | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [Capture Text](../../Features/Create/Elements/Capture%20Text/)  | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [EmbedHtml](../../Features/Create/Elements/EmbedHtml/)          | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-minus" aria-label="true"></i> [^2] | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [Pop-up](../../Features/Create/Elements/Pop-up/)                | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [Product Card](../../Features/Create/Elements/Product%20Card/)  | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [Quiz](../../Features/Create/Elements/Quiz/)                    | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [Share](../../Features/Create/Elements/Share/)                  | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |
| [Wayfinder](../../Features/Create/Elements/Wayfinder/)          | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> | <i className="fa fa-ban" aria-label="true"></i> | <i className="fa fa-check" aria-label="true"></i> |

### Media Codec Compatibility

#### Video Formats

| Browser                               | Chrome        | Safari       | 
|:---                                   | :---:         | :---:        |
| MP4 (H.264 with AAC Encoded Audio)    | <i className="fa fa-check" aria-label="true"></i>    | <i className="fa fa-check" aria-label="true"></i>   |
| MP4 (H.264 with MP3 Encoded Audio)    | <i className="fa fa-check" aria-label="true"></i>    | <i className="fa fa-ban" aria-label="true"></i>     |



#### Audio Formats

| Browser                               | Chrome        | Safari       | 
|:---                                   | :---:         | :---:        |
| MP3                                   | <i className="fa fa-check" aria-label="true"></i>    | <i className="fa fa-check" aria-label="true"></i>   |

##### Legend

- <i className="fa fa-check" aria-label="true"></i> Supported
- <i className="fa fa-minus" aria-label="true"></i> Partially Supported
- <i className="fa fa-ban" aria-label="true"></i> Not Supported

[^1]: Only works in low usage conditions and if Safari keeps running in the background.
[^2]: Depends on the embed. Certain embeds/websites tend to work within other iFrames due to an [X-Frame](https://developer.mozilla.org/en-US/Web/HTTP/Headers/X-Frame-Options) restriction.
[^3]: Full support for [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation.