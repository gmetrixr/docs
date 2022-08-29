---
sidebar_label : 'GMetri experience as a SCORM package'
sidebar_position: 1
---


<head>
  <link rel="canonical" href="https://docs.gmetri.com/metaverse/integrations/scorm/gmetri-experience-as-scorm-package" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/metaverse/integrations/scorm/gmetri-experience-as-scorm-package
:::

# GMetri experience as a SCORM package


All GMetri experiences can be exported as web SCORM packages and imported into any LMS. We support SCORM 1.2 and SCORM 2004 package versions.

## Exporting a SCORM package for your experience

After you are done creating your experience, follow the steps below to generate a SCORM package for your content.


1. Make the deployment live.
2. Select `SCORM` from the `Authentication` dropdown as shown below
3. Navigate to `Others` section in the Sharing options
4. Select either SCORM 1.2 or SCORM 2004 versions for export and click `Download SCORM` button to start downloading the file
5. This file can then be imported into any LMS having SCORM support

![select scorm](https://s.vrgmetri.com/image/w_1950,h_950,q_90/gb-web/portal-docs/assets/img/screenshots/select-scorm.png)

![download scorm](https://s.vrgmetri.com/image/w_1950,h_950,q_90/gb-web/portal-docs/assets/img/screenshots/download-scorm.png)


## SCORM Actions

To support communication between LMS and a GMetri experience, we allow defining certain rules that can be triggered conditionally.

The following is an exhaustive list of SCORM actions that we support.


1. **Set SCORM min score:** This can is used to notify the LMS about the minimum score possible to get in the experience. This should usually be fired right at the beginning of the experience and is generally set to 0.
2. **Set SCORM max score:** This can is used to notify the LMS about the minimum score possible to get in the experience. This should usually be fired right at the beginning of the experience and is generally set to 100.
3. **Set SCORM score:** This can be used to notify the LMS about the current score of the user. Usually, LMSes show scoring after completion of the course but make sure to keep calling this action as and when the score inside the experience changes.
4. **Set SCORM status as passed:** This can be used to notify the LMS when the user has met the criteria of successfully passing the module.
5. **Set SCORM status as failed:** This can be used to notify the LMS when the user has failed the module.
6. **Set SCORM status as complete:** This can be used to notify the LMS when the module is complete. Call this action when the full experience has been completed by the user. This enables the LMS to track and show user attempts and show the final calculated score.


![min scorm](https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-min-score.png)
 

 ![max scorm](https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-max-score.png)

 ![set scorm](https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-score.png)

 ![passed scorm](https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-passed.png)

 ![failed scorm](https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-failed.png)

![complete scorm](https://s.vrgmetri.com/image/w_1200,h_163,q_90/gb-web/portal-docs/assets/img/screenshots/set-scorm-complete.png)

## Adding SCORM actions to your GMetri Experiences
1. **Set SCORM min score** and **Set SCORM max score** actions should be added right at the beginning of the experience. Add rules to set scorm **min score = 0** and set scorm **max score = 100**. 
2. **Set SCORM score** should be called at the end of the experience when you want to relay the **score value** to the LMS. 
3. **Set SCORM passed/failed/complete** should be called at the end of the experience when you want to relay this information to the LMS. `Please note that certain LMS's don't track scores unless a rule for set SCORM complete is fired.`

## Integration with LMS
To test that information is correctly shared between GMetri and LMS, we suggest you to first import the test SCORM package which covers all the scenarios specified in the previous sections. 

If the integration works perfectly, after importing the test package, you should be able to see the **user's unique ID**, be able to **score the user** and **mark the course as completed** right within the experience.


* [SCORM Package 1.2](https://gb-web.s3.ap-south-1.amazonaws.com/SCORM/test/lms_demo_scorm_1.2_2022-03-03T09_46_18.135Z.zip)
* [SCORM Package 2004 v3](https://gb-web.s3.ap-south-1.amazonaws.com/SCORM/test/lms_demo_scorm_2004_2022-03-03T09_46_34.263Z.zip)

## Data Share
There are 2 types of data that needs to be shared between the LMS and the GMetri system. We categorize these as inbound and outbound data. 
* Inbound - This is the data that is required for day-to-day functioning of GMetri experiences
  * Learner ID - User's learner ID as stored in the LMS [cmi.core.student_id (SCORM 1.2) / cmi.learner_id (SCORM 2004 V3)]
  * Progress - User's progress through the course as stored in the LMS [cmi.progress_measure (SCORM 2004 V3)]
  * Suspend Data - Additional information stored in the LMS for course to run [cmi.suspend_data (SCORM 2004 V3 & SCORM 1.2)]
  * Score - Score stored in the LMS [cmi.core.score.raw (SCORM 1.2) / cmi.score.raw (SCORM 2004 V3) ]
* Outbound - This is the data sent out by GMetri system that should be stored inside the LMS. This includes functions like scoring, course completion etc
  * Progress - User's progress through the course calclated in the GMetri system. (SCORM 2004 V3)]
  * Suspend Data - Additional information stored in the LMS for course to run [cmi.suspend_data (SCORM 2004 V3 & SCORM 1.2)]
  * Score - Score calculated in the GMetri system [cmi.core.score.raw (SCORM 1.2) / cmi.score.raw (SCORM 2004 V3) ]
