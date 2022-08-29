---
title: Storing and Managing assets on the GMetri XR Platform
description: File management and storage on GMetri XR Platform, Usage in GMetri XR Experiences.
hide_title: true
sidebar_label: File Manager
---

<head>
  <link rel="canonical" href="https://docs.gmetri.com/metaverse/build/file-manager" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/metaverse/build/file-manager
:::

# File Manager

All assets used in GMetri experiences are managed using the Fila Manager.

You can access the File Manager insider the editor by clicking on the **folder icon** on the left bar. 

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen2.png.jpg#boxShadow)

## Uploading assets

To upload assets, **drag and drop** any number of file or folders to the file manager screen. 

* Doing this will open up the uploader modal and add all the files and folders for uploading.

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen5.png.jpg#boxShadow)

* Click on the upload button on the bottom right to start the upload process. A progress bar at the bottom tells you the upload status.

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen4.png.jpg#boxShadow)
 
## Selecting files using File Manager

* Select the element that you want to change the file for, and click on properties tab. Then select the `File Select` icon.

![File Manager](https://s.vrgmetri.com/image/h_400,q_90/gb-web/portal-docs/assets/img/screenshots/file_manager_selection_mode.png#boxShadow#boxShadow) 

* This opens the File Manager in `Selection Mode`. You can 
**Selection Mode** can be enabled by clicking on the upload icon in the element properties on the rightbar:

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen6.jpg#boxShadow) 
 
:::warning
You will not be able to select a file if you open the file manager from the left bar, as this opens the **"Browsing mode"** and not the **"Selection mode"**
:::

### Uploading 3D Models

Steps for uploading `glb` and `gltf` (zip) models:

1. **GLB** - This is usually a single file hat contains information for all images, textures and animations used in the 3D model. 
This file can be uploaded like any other asset such as image, audio or video.
2. **GLTF** - This is usually a combination of a few files. A sample gltf 3D model would contain at least 1 `.gltf` file, 1 or more `.bin` files and 1 or more `image` files.
To upload and use a GLTF 3D model, simply **zip** up all the files keeping the folder structure intact, drag and drop on the file manager screen and click the upload button. 
This zip file will be available for use in a few moments after we are done processing the file.    
