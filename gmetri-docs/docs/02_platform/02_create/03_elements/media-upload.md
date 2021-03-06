---
title: Add Media Upload Element to Build XR Experiences
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding media upload element in GMetri XR experiences.
hide_title: true
sidebar_label: Media Upload
---

# Media Upload

Media upload element allows users to upload files or take selfies while viewing a GMetri experience. This can be particularly helpful when the experience requires a viewer's input. 
The links to uploaded files are added to the autogenerated variables and can be tracked on the deployment analytics page.

## Properties

### View
* **Heading**: A heading that will be shown to the viewer.
* **Description**: A brief description shown to the viewer. This can contain customized instructions on what information the viewer is supposed to provide.

### Allowed sources
* **Device Storage**: A viewer can upload a file from their device storage. 
* **Device Camera**: A user can take a photo using their device camera.
  :::caution Required permissions
  Viewers will be prompted for a permission request to grant access to device camera.
  :::

### Allowed file types
Supported file types for uploads
* **Image**
* **Video**
* **Audio**
* **Zip**
* **PDF**
