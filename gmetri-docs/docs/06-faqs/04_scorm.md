---
sidebar_label: 'SCORM FAQs' #Name in sidebar
sidebar_position: 4 # float position is supported
#TODO: Need to update links
---
import Card from "/src/components/Card"

# SCORM FAQs

## How do I make use of the GMetri SCORM?

There are two things you might want to do with SCORM:

 - Use GMetri experience as a SCORM package

 - Embed an already existing SCORM package with an GMetri experience

GMetri supports both.

<Card heading={"Gmetri Experience as a SCORM Package"}  link={"."} /> 

<Card heading={"Embed as a SCORM Package in a Gmetri Experience"}  link={"."} /> 

## How does GMetri’s exported SCORM package differ from traditional SCORM packages?
Traditionally, SCORM packages contain all the resources and assets that they require in the zip file locally. However, GMetri employs remote SCORM packages. What this means is that all the resources required for the SCORM package are stored on the GMetri servers. The SCORM package which is generated is merely an interface that lets you connect to the deployment of a GMetri experience and acts as a wrapper that enables the LMS software to connect to the deployment of a GMetri experience. Thus, to make use of a GMetri experience as a SCORM package, you can simply export your deployment as a SCORM package, and any change made in the deployment will reflect in the package without having to export it again.

## What version is the generated GMetri SCORM?
We allow our experience to be exported as SCORM 1.2 or SCORM 2004 3rd Edition.
### I imported the GMetri generated SCORM zip file in my LMS, but the module isn't loading. I get a "Cookie blocked" error
GMetri experiences don't use any cookies.
If you face this error, please contact us at techsupport@gmetri.com

