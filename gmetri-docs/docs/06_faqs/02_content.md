---
#todo : temporary links given line 47 
sidebar_label: 'Content FAQs' #Name in sidebar
sidebar_position: 3 # float position is supported
---
import Card from "/src/components/Card"

<head>
  <link rel="canonical" href="https://docs.gmetri.com/guidelines-compatibility/guidelines/asset-guidelines/asset-faqs" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/guidelines-compatibility/guidelines/asset-guidelines/asset-faqs
:::


# Content FAQS

## Can I use 4K 360 videos?
Yes, but with a few limitations. 

4K (3840x2160) videos can be used in the experiences meant for viewing on a PC or Oculus Go. These are currently incompatible with mobile phones.  

We recommend you downsize your 360 videos to 2K (2048x1024) to make your content compatible everywhere, unless meant exclusively for PC / Oculus Go.

## How to clean up the tripod?
Tripods, Monopods or Drones often leave ghost marks at the bottom of your 360 footage.

![tripod](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/tripod.png.jpg#boxShadow "tripod")

Removing tripods can often be tedious, and the simplest way is probably just to cover it up!

Use your logo, or any other image and add it at the bottom in the editor to make your problem disappear. This saves additional work, and is a great way to push in some branding.

However, if you really want to clean up the tripod from your footage completely, here's how you could do that.

Here is a quick tutorial on how to remove the tripod using Adobe Photoshop, Premiere Pro or After Effects:

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/6CyOhAIhb6c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Mettle Sky Box is now a part of the Adobe Suite (>Adobe CC 2018). You can use the same features from the tutorial using the now inbuilt features of After Effects, like this:


![effects](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/effects.JPG#boxShadow "effects")

Use the "Immersive Video>VR Converter" effect in place of "Mettle Skybox Converter"  

Use "Window>VR Comp Editor" instead of "Skybox Composer"  

![editor menu](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/vrCompEditorMenu.jpg#boxShadow "editor menu")

![editor](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/vrCompEditor.JPG#boxShadow "editor")


## How to create an XR Experience Storyboard?

<Card heading={"XR Experience Storyboard"} link={"/docs/gudelines/xr-expirence-storyboard"} />

## How can I add a QR Code Scanner in an experience?

QR codes are widely used these days to give quick access to a lot of things. In the GMetri Platform, you can scan a QR code to open a web-page link within the experience as an overlay and go back to the experience seamlessly.

It is now very simple to leverage QR code technology in your VR experience using the GMetri Platform. This is how you do it:

Add a QR Code Reader element in a scene.

![add qr](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/qrbutton.png.jpg#boxShadow "add qr")


Now to activate it, add a rule saying when an element is clicked then the QR Code Reader should appear.  


![activate qr](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/qractivate.png.jpg#boxShadow "activate qr")


And you are done! Here is what it looks like when you open the QR Code Reader from within the experience and after you scan the code.  


![qr example](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/qrexample.png.jpg#boxShadow "qr example")


## How can I run GMetri Experiences offline?

GMetri experiences cannot be run offline currently.  

If you are looking for this feature, please contact us.

## How to compress images?
<Card heading={"Image Compression"}   link={"/docs/gudelines/media-compression#image-compression"} />

## How to compress videos?
<Card heading={"Video Compression"}    link={"/docs/gudelines/media-compression#video-compression"} />

## How can I import content from GoPro Fusion?

Footage from your GoPro Fusion camera can be stitched and color corrected using GoPro Fusion Studio.  

Download the latest version here.  

Perform simple color corrections, camera rotation fixes and clip videos all from this software to import into the GMETRI editor.  

Here's a tutorial on the GoPro Fusion Studio:
<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/RTv2HjghdIM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why do my panoramic photos look less than stellar?

The GMetri platform does not downgrade any images uploaded in any way. If there is any quality variance, it may be due to the camera settings or the export/compression settings. Here are a few things you can try to make sure you get the best quality out of your camera:
First, try to zoom out using the editor's zooming feature. If that didn't work,

- Ensure your Camera Firmware is up to date 
- Your Fusion Studio app also needs to be updated
- Clean the camera lens before taking pictures to avoid smudges 
- While exporting from Fusion Studio, you can also adjust the colour settings to make the image look better
- If you are compressing your images, there will be a drop in quality. Find the best compression to quality ratio that works for you by trying them out for yourself. GMetri Suggested Compression for JPEG - [squoosh](https://squoosh.app/) and for PNG - [tinypng](https://tinypng.com/)

## How to set up the camera view at the beginning of the scene?

We can set up the camera view at the beginning of each scene, by accessing the scene properties. You can do this by selecting the scene in the Structure tab and then open up the Properties tab. A scene has the following properties:

- **Initial Yaw** - This determines the initial yaw (horizontal angle) the camera looks when the scene starts
- **Reset Rotation** - Setting this true ensures the camera always follows the "Initial Yaw" setting when entering a new scene, ignoring the direction it was loking at in the previous scene.

For example, if you want the scene to start every time looking 70° to the right, set Initial Yaw to 70° (or -70° for turning left) and switch Reset Rotation "on".

## How to snap 360 images from Google Street View?

<a className={"md-link"} href={"https://e4youth.org/blog/2019/02/05/snapping-360-images-from-google-street-view/"}> Snapping 360 Images from Google Street View</a> - is a great article that shows how to hack your way into Google Street View to snap 360 images of your surrounding.
