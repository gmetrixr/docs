---
#todo : temporary links given line 47 
sidebar_label: 'Content FAQs' #Name in sidebar
sidebar_position: 3 # float position is supported
---
import Card from "../../src/components/Card"

# Content FAQS
## Can I use 4K 360 videos?
Yes, but with a few limitations. 

4K (3840x2160) videos can be used in the experiences meant for viewing on a PC or Oculus Go. These are currently incompatible with mobile phones.  

We recommend you downsize your 360 videos to 2K (2048x1024) to make your content compatible everywhere, unless meant exclusively for PC / Oculus Go.


## How to clean up the tripod?
Tripods, Monopods or Drones often leave ghost marks at the bottom of your 360 footage.

![tripod](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/tripod.png.jpg#boxShadow "tripod")

Removing tripods can often be tedious, and the simplest way is probably just to cover it up!

Use your logo, or any other image and add it at the bottom in the editor to make your problem disappear. This saves additional work, and is a great way to push in some branding.

However, if you really want to clean up the tripod from your footage completely, here's how you could do that.

Here is a quick tutorial on how to remove the tripod using Adobe Photoshop, Premiere Pro or After Effects:

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/6CyOhAIhb6c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Mettle Sky Box is now a part of the Adobe Suite (>Adobe CC 2018). You can use the same features from the tutorial using the now inbuilt features of After Effects, like this:


![effects](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/effects.JPG#boxShadow "effects")

Use the "Immersive Video>VR Converter" effect in place of "Mettle Skybox Converter"  

Use "Window>VR Comp Editor" instead of "Skybox Composer"  

![editor menu](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/vrCompEditorMenu.jpg#boxShadow "editor menu")

![editor](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/vrCompEditor.JPG#boxShadow "editor")


## How to create an XR Experience Storyboard?
See:

<Card heading={"XR Experience Storyboard"} link={".gmetri/features"} />

## How to add a QR Code Scanner in an experience?
QR codes are widely used these days to give quick access to a lot of things. In the GMetri Platform, you can scan a QR code to open a web-page link within the experience as an overlay and go back to the experience seamlessly.

It is now very simple to leverage QR code technology in your VR experience using the GMetri Platform. This is how you do it:

Add a QR Code Reader element in a scene.

![add qr](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/qrbutton.png.jpg#boxShadow "add qr")


Now to activate it, add a rule saying when an element is clicked then the QR Code Reader should appear.  


![activate qr](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/qractivate.png.jpg#boxShadow "activate qr")


And you are done! Here is what it looks like when you open the QR Code Reader from within the experience and after you scan the code.  


![qr example](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/qrexample.png.jpg#boxShadow "qr example")


## How to run GMetri Experiences offline?
GMetri experiences cannot be run offline currently.  

If you are looking for this feature, please contact us.

## How to compress images?
<Card heading={"Media Compression"}   link={".gmetri/features"} />

## How to compress videos?
<Card heading={"Media Compression"}    link={".gmetri/features"} />

## How to import content from a GoPro Fusion?
Footage from your GoPro Fusion camera can be stitched and color corrected using GoPro Fusion Studio.  

Download the latest version here.  

Perform simple color corrections, camera rotation fixes and clip videos all from this software to import into the GMETRI editor.  

Here's a tutorial on the GoPro Fusion Studio:
<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/RTv2HjghdIM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In what hardware & software can GMetri experiences be viewed in?

GMetri XR experiences run on: 

- All headsets - HTC Vive, Oculus Go/Rift, Google Card  
- All Laptops/Desktop on chrome  
- All Mobile Phones  
  - Android  
  - Apple (Needs Chrome to be installed)  

## Headsets
On Headsets, experiences can be run in their inbuilt browsers and simply typing in the deployment URL.  

Google cardboard headsets essentially use Mobile Phones to power the VR Experience, so check the Mobile Phone section below.
## Laptops/Desktops
On Laptops/Desktop, experiences can be run on Chrome by accessing the deployment URL.  
## Mobile Phones
On Mobile Phones (both Android and iOS based), experiences can be run on Chrome by accessing the deployment URL.  

In case you need to embed the experience within an App or a website, follow the guides below:  

<Card heading={"Android App Embed - Chrome Custom Tab"}  link={".gmetri/features"} /> 
<Card heading={"Using React Native in iOS and Android App"}    link={".gmetri/features"} />  
<Card heading={"Website Embed"}    link={".gmetri/features"} />

## Is GMetri WCAG AAA compliant?
According to the [WCAG guideline page](https://www.w3.org/WAI/standards-guidelines/wcag/#for/),

WCAG is primarily intended for:
* Web content developers (page authors, site designers, etc.)
* Web authoring tool developers
* Web accessibility evaluation tool developers
* Others who want or need a standard for web accessibility, including for mobile accessibility

GMetri Platform is **WCAG AAA** compliant. AAA refers to the highest level of success criteria. 

To understand different levels of conformance, head [here](https://www.w3.org/TR/WCAG20/#conformance/).

## Why do my panoramic photos look less than stellar?

The GMetri platform does not downgrade any images uploaded in any way. If there is any quality variance, it may be due to the camera settings or the export/compression settings. Here are a few things you can try to make sure you get the best quality out of your camera:
First, try to zoom out using the editor's zooming feature. If that didn't work,

- Ensure your Camera Firmware is up to date 
- Your Fusion Studio app also needs to be updated
- Clean the camera lens before taking pictures to avoid smudges 
- While exporting from Fusion Studio, you can also adjust the colour settings to make the image look better
- If you are compressing your images, there will be a drop in quality. Find the best compression to quality ratio that works for you by trying them out for yourself. GMetri Suggested Compression for JPEG - [squoosh](https://squoosh.app/) and for PNG - [tinypng](https://tinypng.com/)


## How to set up the camera view at the beginning of the scene?

We can set up the camera view at the beginning of each scene, by accessing the scene properties. You can do this by selecting the scene in the Structure tab and then open up the Properties tab. The scene has the following properties:

- **Scene Yaw Correction** - Which will set the direction the scene will start with, in yaw (horizontal direction)
- **Scene Pitch Correction** -  Which will set the direction the scene will start with, in pitch (vertical direction)
- **Scene Reset Rotation** - Which will reset the scene rotation to the Scene Yaw and Pitch Correction values every time the scene is changed to this current scene 
- **Scene Gyro Lock** - Which will lock the gyroscope of your device, ensuring your content remains on screen no matter how you turn your mobile device

For example, if you want the scene to start every time looking 70° to the right, set Scene Yaw Correction to 70° (or -70° for turning left) and switch on Scene Reset Rotation. 

## How to snap 360 images from Google Street View?

<a className={"md-link"} href={"https://e4youth.org/blog/2019/02/05/snapping-360-images-from-google-street-view/"}> Snapping 360 Images from Google Street View</a> - is a great article that shows how to hack your way into Google Street View to snap 360 images of your surrounding.