---
title: 3D Modelling Guidelines for GLTF Format
description: Models exported from 3D software like Autodesk 3Ds Max, Autodesk Maya or Blender to gltf/glb v2 format. Find 3D Modelling Guidelines on GMetri Documentation.
hide_title: true
sidebar_label:  3D Model
---

# 3D Model

All 3D Models for use in the Editor have to be in the GLTF format. 

Models could be exported from 3D software like Autodesk 3Ds Max, Autodesk Maya or Blender, using inbuilt exporters or by online conversion.

Here are the GMetri guidelines to directly export your models to the gltf/glb v2 format:

- from [3ds Max](./export-GLTF-from-3ds-max.md/)
- from [Blender](./export-GLTF-from-blender.md/)


For the model to be efficient, the poly count should be kept as low as possible - ideally less than 1000 polys, but a maximum of 3000 polys. All the textures exported will have to go through a compression pass using online compressor tinypng.com or similar.

The model should be scaled to real life sizes and the origin point should be at the center of the model before exporting. 

For further details regarding GLTF format, refer [here](./export-GLTF-from-blender.md/).