---
sidebar_label: 'Asset Recommendations' #Name in sidebar
sidebar_position: 3 # float position is supported
---
import Card from "/src/components/Card"

# Asset Recommendations

These are the recommended quality settings and file sizes of various asset types, for an experience to work smoothly.

## 3D Models

* Supported file formats: **glb, gltf, gltf2**

## Videos

| Device                  | Recommended Max Resolution | Recommended Max File Size |
|:------                  |:-----:                     |:-----:                    |
|Desktop                  | 4096x2028                  | 10MB                      |
|Flagship mobile devices  | 4096x2048                  | 10MB                      |
|Low-end mobile devices   | 2048x1024                  | 5MB                       |

Supported file format: **mp4 (H.264 with AAC Encoded Audio)**

## Images

| Device                  | Recommended Max Resolution | Recommended Max File Size |
|:------                  |:-----:                     |:-----:                    |
|Desktop                  | 8192x4096                  | 5MB                       |
|Flagship mobile devices  | 8192x4096                  | 5MB                       |
|Low-end mobile devices   | 4096x2048                  | 2MB                       |

Supported file formats: **jpg & png**

You may use online compression sites like tinypng to compress png and squoosh to compress jpg images, for a lossless compression.

<Card heading={"Media Compression"}  link={"/docs/gudelines/media-compression"} /> 

### Equirectangular Images

The editor uses Equirectangular Panoramic Images for the background elements.  

Equirectangular images should have an **aspect-ratio of 2:1**


## Audio

* Recommended file size: **2MB**
* Supported file format: **mp3**
