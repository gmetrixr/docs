---
sidebar_label: 'Creating Web Optimized Experiences' #Name in sidebar
sidebar_position: 7 # float position is supported
---
import Card from "/src/components/Card"

# Creating Web Optimized Experiences

Tips and tricks to create an experience that runs smoothly on any device

## Things to think about when building for the Web

### Network Usage

Dependent on asset size. A 26Kb is better than a 100Kb image.
- Try keeping asset file size small. Use as much compression as possible to reduce the image size, as long as the quality doesn’t get affected.

### Memory Usage

Affected by image resolution: pixels used by an image, calculated by  (x*y)

- Don't use image/videos of a resolution higher than needed. A 50px * 50px image is better than a 100px * 100px image
  
### CPU/GPU Usage

  Devices have a limited amount of processing capability. Videos consume a lot more CPU/GPU than images, 3D models. 

  - Bigger the video/3D model, more is the CPU and Memory consumption.
  - Prefer images to videos: Try offloading as many effects as possible to images, instead of videos. Running too many (> 3) parallel videos in the same scene may not be supported by a lot of devices. You can use animations provided with images/pano images to try to produce a similar effect

## Hardware Capability Limitation
All devices have inherent limitation on the number of audio/video streams they can run in parallel.

https://support.gmetri.com/docs/compatibility/platform-compatibility-matrix#media-codec-compatibility


### Video

|Platform                 | No of 1K videos      | No of ~4K Videos (3840x1920) |
|---------                | :-----:              | :-----:                      |
| Desktop/Laptop          | 4                    | 4                            |
| Androids Phones         | 4                    | 4                            |
| iOS Phones              | 4                    | 4                            |

### Audio

|Platform                 | No of audio elements |
|---------                | :-----:              | 
| Desktop/Laptop          | 7                    | 
| Androids Phones         | 7                    |                  
| iOS Phones              | 7                    |  


## Videos: Tips

### Keep vides hidden until needed the scene
A non-hidden video get decoded by CPU/GPU and blocks its bandwidth. Hidden videos don't consume any CPU/GPU. So keep them hidden until needed, and hide them again if not needed anymore.

## Images: Tips

- Transparent pixels use the same amount of memory as non-transparent ones
- Don’t use more pixels than being used in the viewport (the user’s monitor). 
Eg: If you use an Image that’s 5meters * 5meters in 3D, and but placed 20 meters from the camera, its actual usage on the viewport is going to be only 100px * 100px. In that case, use a 100px * 100px as the base image

## Transparent pixels use the same amount of memory as non-transparent ones
Avoid using transparency for image placement.

**Bad Example:**

![bad example](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/01_C__R.png)

image
Dimensions are 960px x 831px. So it uses 797760 bytes = 0.79 MB in memory

**Good Example**
![good example](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/01_C__R1.png)

images
Dimensions: 235px * 235px. So it uses 55225 bytes = 0.05 MB in memory. 16x better than the bad example

### Avoid decorational transparent images

**Bad Example**
![transparent](https://s.vrgmetri.com/image/w_965,h_742,q_90/gb-web/portal-docs/assets/img/screenshots/decorationaltranparent%20.png)
Although it's only 3Kb in size, its resolution is 960px * 608px, and so ends up using 0.5MB RAM!

### Use only minimum possible resolution of the image that’s being used in the viewport
**Bad Example**
![false](https://s.vrgmetri.com/image/w_820,h_189,q_90/gb-web/portal-docs/assets/img/screenshots/45_26_False1b.png)


Dimensions: 820px * 189px. i.e. it uses 154980 bytes (0.15MB) in memory

**Good Example**
![good example](https://s.vrgmetri.com/image/w_1600,h_1000,q_90/gb-web/portal-docs/assets/img/screenshots/decoration%20goodexample.jpg)



As you can see from the usage, the actual usage takes only about 300px * 75px. So instead of using a 820px * 189px image for it, use a 300px * 75px image. This would reduce the memory consumption by 7 times!