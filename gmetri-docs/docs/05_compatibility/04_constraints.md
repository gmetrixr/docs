---
sidebar_label: 'Constraints' #Name in sidebar
sidebar_position: 4 # float position is supported
---

# Constraints

There are certain limitation you should keep in mind while building a GMetri experience.

### 2D elements won't work in VR mode

If you are building primarily for a headset, then avoid using 2D HTML eleemnts like Actionbar, Quiz etc.

### Max Pano resolution should be capped at 4K for low-end devices

This also includes the Oculus Go. Go through [asset recommendations](./asset-recommendations) to get an idea of recommended asset resolution and size.
This needs to be verified while uploading the assets. You can find the size and resolution of assets on the right pane of the File Manager.

<Card heading={"Asset Recommendations"} link={"/docs/compatibility/asset-recommendations"} />

### Depth comes into play with VR mode

Placement of graphics is very important here. Things look very different in 2D and 3D.

### Graphic memory is limited on any device

Graphice memory gets used by Videos and Images. Anything you see on the screen is first expanded a bitmap image (a simple pixel by pixel representation of an image using 0's and 1's) onto the system's graphic memory - be it your laptop, phone, headset or any other device.

Lets say you have a videos of resolution 1000px x 1000px running parallely, for every single frame you end up using 1000x1000 x (4 bytes per pixel) = 4MB of video memory. 

:::note
On most modern phones and laptops, the available graphic memory varies from 256 MB to 4 GB. However, Chrome limits the amount of graphic memory available to a single tab to a small fraction of this - 128 MB to 256 MB.
:::

This is important, as its very easy to balloon up your graphic memory usage, and end up in a hanged state.
For example, if you run 3 4K (4096x2048) vidoes, you are effectively using 3x4096x2048 x (4 bytes per pixel) = 48MB of memory for every single frame!

So, try to limit the number of high resolution images and videos you add to a scene.
