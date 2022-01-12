---
title: SCORM FAQs - How to use GMetri SCORM packages
description: Using SCORM, Types of SCORM packages, Remote SCORM Packages - SCORM FAQs - GMetri Documentation
hide_title: true
sidebar_label: SCORM FAQs
---

# SCORM FAQs

## How do I make use of the GMetri SCORM?
To use the GMetri SCORM package follow the steps [here](../../Tutorials/Make/generate_scorm) to generate a SCORM package from your GMetri [experience](../../Features/Create/experiences/). This package then can be imported into any LMS software of your choice.

## How does GMetri’s exported SCORM package differ from traditional SCORM packages?

Traditionally, SCORM packages contain all the resources and assets that they require in the zip file locally. However, GMetri employs remote SCORM packages. What this means is that all the resources required for the SCORM package are stored on the GMetri servers. The SCORM package which is generated is merely an interface that lets you connect to the [deployment](../../Features/Publish/) of a GMetri [experience](../../Features/Create/experiences/) and acts as a wrapper that enables the LMS software to connect to the deployment of a GMetri experience. Thus, to make use of a GMetri experience as a SCORM package, you can simply export your deployment as a SCORM package, and any change made in the deployment will reflect in the package without having to export it again.

## What version is the generated GMetri SCORM?
We allow our experience to be exported as SCORM 1.2 or SCORM 2004 3rd Edition.

## I imported the GMetri generated SCORM zip file in my LMS, but the module isn't loading. I get a "Cookie blocked" error
GMetri experiences don't use any cookies, but do use window session storage. 

Chrome has a setting "Block third-party cookies and site data" which has an unfortunate effect of blocking session storage access for sites running in an iframe. This is because when you run GMetri content in an iframe, GMetri is "third-party".

**To resolve this, follow the steps given [here](https://stackoverflow.com/a/26671889/1233476).**
