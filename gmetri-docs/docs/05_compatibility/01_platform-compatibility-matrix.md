---
title: Platform Compatibility Matrix for XR Experience Creation
description: Experience Creation Support, Viewer Support for Headset, Laptops, Android, Phone, iOS Phone, Feature Compatibility with Full Screen / VR mode, Media Codec Compatibility, Video Audio Formats.
sidebar_position: 1 # float position is supported
sidebar_label: Platform Compatibility Matrix
---

# Platform Compatibility Matrix

<!-- See list of icons here: https://fontawesome.com/v4.7.0/icons/ -->
Information on platform and browser support for experience creation, viewer, elements and media codec.


## Viewer Support - Mobiles, Headset, Laptops

The following are the platforms and browsers supported for viewing experiences:

### Android Phone

| Browser (Mode)                         | Chrome | Edge |
|---------                               | :-----:      | :-----:      |
| Video ~4K (3840x1920)   **max**        | :white_check_mark:   | :white_check_mark:   |
| Phone VR Mode                          | :white_check_mark:   | :heavy_minus_sign:   |
| Orientation/Tilt based movement        | :white_check_mark:   | :white_check_mark:   |
| All Other Features                     | :white_check_mark:   | :white_check_mark:   |

###### **Minimum supported Chrome version is v81**

### iOS Phone

| Browser                                | Safari | Chrome |
|---------                               | :---:            | :---:        |
| Video ~4K (3840x1920)      **max**     | :white_check_mark:   | :white_check_mark:   |
| Phone VR Mode                          | :heavy_minus_sign:   | :heavy_minus_sign:     |
| Orientation/Tilt based movement        | :white_check_mark:   | :heavy_minus_sign:   |
| All Other Features                     | :white_check_mark:   | :white_check_mark:   |

###### **Minimum supported iOS version is v13.3.1**

### Laptops/Desktops (Full Screen)

| OS                                              | Win/Lin  | Windows | Apple | Apple |
|:---                                             | :---:    | :---:   | :---: | :---: |
| Browser                                         | Chrome   | Edge    | Safari | Chrome |
| Video 4K (3840x2160) **max**                    | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| All Other Features                              | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### Headsets

| Browser                                 | Oculus Go           | Oculus Quest, Quest 2 | HTC Vive |
|:---                                     | :---:               | :---:                 | :---:    |
| Video ~4K (3840x1920)   **max**         | :white_check_mark:  | :white_check_mark:    | :white_check_mark:   |
| All Other Features                      | :white_check_mark:  | :white_check_mark:    | :white_check_mark:   |


## Editor Support - Laptops/Desktops

The following are the platforms and browsers supported for creating and editing experiences:

| OS                                              | Windows/Apple/Linux  | Windows | Apple |
|:---                                             | :---:                | :---:   | :---: |
| Browser                                         | Chrome               | Edge    |  Safari |
| Supported?                                      | :white_check_mark:   |  :white_check_mark: | :white_check_mark: |

### Media Codec Compatibility

#### Video Formats

| Browser                               | Chrome        | Safari       | 
|:---                                   | :---:         | :---:        |
| MP4 (H.264 with AAC Encoded Audio)    | :white_check_mark:    | :white_check_mark:   |
| MP4 (H.264 with MP3 Encoded Audio)    | :white_check_mark:    | :heavy_minus_sign:     |

#### Audio Formats

| Browser                               | Chrome        | Safari       | 
|:---                                   | :---:         | :---:        |
| MP3                                   | :white_check_mark:    | :white_check_mark:   |

### Feature Compatibility in different modes

| Feature         | Full Screen Mode | Embed Mode         | VR Mode           | Android app[^2] | 
|:---             | :---:            | :---:              | :---:             | :---:       |
| [AR Viewer](/docs/platform/create/elements/ar-viewer/)          | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [ActionBar](/docs/platform/create/elements/actionbar/)          | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [Capture Input](/docs/platform/create/elements/capture-input/)    | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [EmbedHtml](/docs/platform/create/elements/embedhtml/)          | :white_check_mark: | :wavy_dash: [^1]   | :heavy_minus_sign: | :white_check_mark: |
| [Pop-up](/docs/platform/create/elements/popup/)                 | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [Product Card](/docs/platform/create/elements/product-card/)    | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [Quiz](/docs/platform/create/elements/quiz/)                    | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [Share](/docs/platform/create/elements/share/)                  | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| [Wayfinder](/docs/platform/create/elements/wayfinder/)          | :white_check_mark: | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |


### Legend

- :white_check_mark: Supported
- :wavy_dash: Partially Supported
- :heavy_minus_sign: Not Supported

[^1]: Depends on the embed. Certain embeds/websites tend to work within other iFrames due to an [X-Frame](https://developer.mozilla.org/en-US/Web/HTTP/Headers/X-Frame-Options) restriction.
[^2]: Full support for [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation.
