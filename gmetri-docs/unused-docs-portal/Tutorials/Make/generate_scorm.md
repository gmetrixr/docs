---
title: How to create a SCORM package with a GMetri experience
description: Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.
hide_title: true
sidebar_label: Generate SCORM Package
---

# Generating a SCORM package with a GMetri experience

## Description

After creating an [experience](../../Features/Create/experiences/) on the GMetri platform, you have an option to generate a SCORM package which can be imported in various Learning Management Systems.

## Generate a SCORM package from your experience

After you have created your experience, you must have a live deployment for it. For more information on this, see [deployments](../../Features/Publish/).

1. In your experience, go to the deployments section.

2. From `Sharing Options`, select `others`.
    
3. Select the version of the SCORM to which the deployment is to be exported from the dropdown. Click on the `Download SCORM` button. The .zip file which contains your GMetri experience will begin to download.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/generate_scorm.png.jpg#boxShadow)

4. This file can then be imported in any Learning Management System, and once imported, it will display your GMetri experience.

## SCORM Actions

You may wish to import the generated SCORM package in your own custom Learning Management System (LMS). In such cases, GMetri allows you to add certain rules to your GMetri [experience](../../Features/Create/experiences/) so that your generated SCORM package can communicate with the LMS. On execution of these actions, the LMS will be be updated with the required data.

The following are the list of SCORM actions that can be addeed to your GMetri experience:

1. Set SCORM Min Score: This action can be used to inform the LMS of the minimum score on your GMetri experience.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-min-score.png.jpg#boxShadow)

2. Set SCORM Max Score: This action can be used to inform the LMS of the maximum score on your GMetri experience.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-max-score.png.jpg#boxShadow)

3. Set SCORM Score: This action can be used to inform the LMS of the current score of the viewer.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-score.png.jpg#boxShadow)

4. Set SCORM Status as Passed: This action can be used to inform the LMS that the viewer has met the criteria of succesfully passing the learning module.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-passed.png.jpg#boxShadow)

5. Set SCORM Status as Failed: This action can be used to inform the LMS that the viewer has failed the learning module.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-failed.png.jpg#boxShadow)
