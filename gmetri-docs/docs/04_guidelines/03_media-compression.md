---
sidebar_label: 'Media Compression' #Name in sidebar
sidebar_position: 2 # float position is supported
---

<head>
  <link rel="canonical" href="https://docs.gmetri.com/guidelines-compatibility/guidelines/experience-optimizations" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/guidelines-compatibility/guidelines/experience-optimizations
:::

# Media Compression

## Image Compression

Compressed assets help your experiences load smoother and faster. It is good hygiene to compress your image assets before uploading them.

We recommend https://tinypng.com/ which compresses `.png`/`.jpeg` files with little to no loss in image quality.

A few other online resources:

- https://compressor.io/compress
- https://squoosh.app/

## Video Compression

Videos need to be compressed before uploading them. The larger the file size, the longer it will take to load your experiences.  

After exporting your equirectangular videos, you may need to compress/resize your videos.

**We recommend** you use the open source tool **[Handbrake](https://handbrake.fr/downloads.php/)** to do this. Here's how:

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/qv2JnZcf7BA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<br/><br/>

**Alternatively, you can compress/resize content on the Adobe Suite**

If you are using Adobe Premiere Pro or Adobe After Effects, directly compress and export the video from Adobe Media Encoder.

Here's a tutorial for this:

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/4b-jHxjdEWE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<br/><br/>

You could also use **[FFmpeg](https://ffmpeg.org/)** for this.