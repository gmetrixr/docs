---
title: Storing and Managing assets on the GMetri XR Platform
description: File management and storage on GMetri XR Platform, Usage in GMetri XR Experiences.
hide_title: true
sidebar_label: File Manager
---

# File Manager


## Common types of assets
An asset is any external file that you use while building an experience. 
An asset might come from the following files: 
1. **Audio file** - any MP3 file 
2. **Image file** - any JPG, PNG, JPEG file 
3. **Video file** - any MP4 file. For supported codecs visit [this page](/Guidelines/compatibility-matrix#media-codec-compatibility)
4. **3D Model** - any gltf zip or glb file. More on [uploading gltf files](/Features/Create/file_manager/#uploading-3d-models) 

## Basic Usage
You can access the File Manager insider the editor by clicking on the **folder icon** on the left bar. 
This will open up a screen where you can store and manage assets that you would use in an experience on the platform. 

Different sections on the screen:
1. **Controls** - This section is on top of the screen which houses the controls for uploading, searching, creating new folders, rename files/folders etc.
2. **Content** - This section covers the most part of screen where you can see the files and folders uploaded. 
3. **Preview** - This section is on the right side of the screen where meta-data for a file can be seen.    

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen1.png.jpg#boxShadow)

There are 2 modes of usage. 
1. **Browsing mode** - Use this mode to upload files/folders, create/move/copy files/folders around.
2. **Selection mode** - In addition to all features from browsing mode, use this mode to select an asset for use. For example, use it in an Image element in the editor. 
A **Select** button appears on the preview section when a supported asset can be selected for the element.
 

**Selection Mode** can be enabled by clicking on the upload icon in the element properties on the rightbar:

![File Manager](https://s.vrgmetri.com/image/h_400,q_90/gb-web/portal-docs/assets/img/screenshots/file_manager_selection_mode.png#boxShadow#boxShadow) 

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen6.jpg#boxShadow) 
 
:::info NOTE
You will not be able to select a file if you open the file manager from the left bar, as this opens the **"Browsing mode"** and not the **"Selection mode"**
:::

## Supported Operations
There a numerous operation of files and folders that are supported on file manager. These can be accessed using the **Controls** section on the top of the screen. 
A subset of operations can also be accessed by doing a **right mouse click** on any file or folder. This opens an inline controls context menu listing the supported operations. 

Following are the operations supported:
1. **New folder** - Use this to create a new folder in the current directory
2. **Rename** - Use this to rename file or folder
3. **Cut** - Select single or multiple files/folders to copy them
4. **Copy** - Select single or multiple files/folders to copy them
5. **Paste** - Use this to paste files/folder. 
6. **Delete** - Use this to delete single or multiple files or folders
7. **Upload** - Use this to open the uploader modal. More on this [here](/Features/Create/file_manager/#uploading-assets)

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen2.png.jpg#boxShadow)


## Uploading assets
To upload assets, just **drag and drop** any number of file or folders to the file manager screen. Doing this will open up the uploader modal and add all the files and folders for uploading. 
Simply click on the upload button on the bottom right to start the upload process. A progress bar at the bottom tells you the upload status.
You can also click on the **Upload** button on the **Controls** section to open the uploader model. After all assets have been uploaded, the uploader modal will auto close taking you back to the file manager screen. 

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen4.png.jpg#boxShadow)

![File Manager](https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen5.png.jpg#boxShadow)


## Uploading 3D Models
Uploading 3D models on the file manager are very easy. GMetri supports 2 formats for 3D models:
1. **GLB** - This is usually a single file hat contains information for all images, textures and animations used in the 3D model. 
This file can be uploaded like any other asset such as image, audio or video.
2. **GLTF** - This is usually a combination of a few files. A sample gltf 3D model would contain at least 1 `.gltf` file, 1 or more `.bin` files and 1 or more `image` files.
To upload and use a GLTF 3D model, simply **zip** up all the files keeping the folder structure intact, drag and drop on the file manager screen and click the upload button. 
This zip file will be available for use in a few moments after we are done processing the file.    
