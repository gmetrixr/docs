---
title: Variables
hide_title: true
sidebar_label: Variables
---
# Variables

Variables are used in the experience to control the various activities of elements and scenes through rules. But these variables are local and cannot be used for different experiences of the same organization.

![Experience settings variables](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/custom_variables.JPG#boxShadow/)

### Adding Variables in an experience
- In the experience settings, head over to the variables tab.
- Choose the variables you want to add.
- Add the variable by clicking on `Add Variable` Button in the variables tab.

Variables can also be tracked by enabling the "track" option for each variable. The information about this can then be viewed in analytics.

## Global Variables

Global Variables remain same for the entire organization's different experiences. 

### Defining Global Variables
- Head over to the Organization Settings from your avatar dropdown menu.
- Click on `Define Global Variables` in the Variables tab.

![define global variables](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/defineglobalvars.png#boxShadow/)

- Add the global variables by clicking on `Add Variable` button.

### Adding Global Variables in the experience

- Choose the variables you want to add.
- Click on `Add Global Variables` button in the Variables Tab.

### Using Global Variables in an experience
- Add Global Variables to your experience by referring to [Adding Global Variables](#adding-global-variables-in-the-experience/).
- Add a TextBox by clicking on the `+` icon.
- Put the Global Variable you want to use in the text in double curly brackets: {{GLOBAL_VAR}}.

![gvars](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/gvars.png#boxShadow/)

- Add a Rule: Change the value of {{GLOBAL_VAR}} to (let say "Global variables") after clicking on any element.

![gvars rule](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/gvars_connection.png#boxShadow/)

- Deploy the experience using authentication as non-public.

### To check persistance of Global Variables
After performing the above steps, do the steps as follows:

- Create a new experience and add the Global Variable (GLOBAL_VAR) to that Experience.
- Add a TextBox by clicking on the `+` icon.
- Put the Global Variable you want to use in the text in double curly brackets: {{GLOBAL_VAR}}.

After deploying the experience, it will be noticed that the GLOBAL_VAR contains the new value ("Global Variables") and not the value with which the GLOBAL_VAR was initialized.

## Auto-generated Variables
Some variables are generated automatically when you create an experience. You may choose to retain or remove some of these variables. These variables are immutable and cannot be changed in value.

![Experience settings variables](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/auto_variables.JPG#boxShadow/)

### Types of auto-generated variables
1. `v_identifier_var` - A unique ID to identify each viewer who views the experience. This is generated to track the behaviour of the viewer throughout the experience. This can be viewed in the [analytics page](../Track/analytics_feature_set/#viewer-information).<br />
Tracking is be enabled on this variable to show results in analytics page. It can be turned off if required. <br />

2. `v_platform` - This variable holds the platform information for a device. Possible values are 
    * `d` -> Desktop
    * `m` -> Mobile

3. `viewer_info_col1`, `viewer_info_col2`, `viewer_info_col3` - These variables are for lead generation. This allows you to collect viewer information before the experience starts using a form. To enable this: 
    - Go to the `Lead Generation` tab under `Publish` (lightening symbol) section in on the left bar while building the experience.
    - CLick on `Add Form Filed` button on the `Capture Viewer Info` section. 
    - You can now add up to 3 fields for this form. The variables can follow various rules as follows:
  
      1. Email
      2. Password
      3. Max Text Length (specify)
      4. Custom regex
      5. Phone number 
   
    ![Lead Generation](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/lead_generation.JPG#boxShadow/)
    
    The infomation stored inside these three variables are available for each individual viewer.

4. `score` - This score variable can be added to the experience by adding a [score](./Elements/Score/) element.There can be **only one** score variable in an experience and the score is always a number. 

5. `lang` - The lang variable can be added to the experience by enabling the `Show Language Screen` option in the settings section. To add languages, go to the `Languages` tab inside Splash Screen. This variable will hold the value of the language selected by the viewer.
6. `media_upload_uri` - This variable can be added to the experince by adding a Media Upload element. This element holds the full url of the image uploaded by the viewer. The information held by this variable can be seen under Views section in the analytics page.

7. `browser_var` - This variable holds the information on the browser that a viewer uses. For a list of support browsers
please check the [platform compatibility matrix](/docs/compatibility/platform-compatibility-matrix/). Following values will be populated in the `browser_var` when the viewer views an experience:

 `browser_var`     | Browser           | Device                                            |
:------------------|:------------------|:--------------------------------------------------|
 safari            | Safari <i className="fa fa-safari" aria-label="true"></i>           | Laptop/PC <i className="fa fa-laptop" aria-label="true"></i>|
 msafari     | Safari <i className="fa fa-safari" aria-label="true"></i>          | iPhone <i className="fa fa-mobile" aria-label="true"></i>|
 chrome            | Chrome <i className="fa fa-chrome" aria-label="true"></i>            | Laptop/PC <i className="fa fa-laptop" aria-label="true"></i>|
 mchrome     | Chrome <i className="fa fa-chrome" aria-label="true"></i>          | Android <i className="fa fa-mobile" aria-label="true"></i>|
 ioschrome     | Chrome <i className="fa fa-chrome" aria-label="true"></i>        | iPhone <i className="fa fa-mobile" aria-label="true"></i>|
 fb          | Facebook          | Android/iPhone <i className="fa fa-mobile" aria-label="true"></i>|
 samsung  | Samsung Internet  | Mobile <i className="fa fa-mobile" aria-label="true"></i>|
 ie                | Internet Explorer | Laptop/PC <i className="fa fa-laptop" aria-label="true"></i>|

All autogenerated variables are generated per viewer when a viewer views an experience.

:::info TIER LIMITS

Capturing user info is a lead generation feature.
Free accounts support lead generation from only 100 users.

Want more? [Upgrade](https://gmetri.com/pricing)!
:::

## User Variables

A user creating an experience can also make their own variables. These can be used while creating [Rules](./build/#rules) between elements or scenes. 

These variables can be added in various parts of a scene, such as a string value which changes after a certain action, or a score box. User variables can also be used for logic functions which are hidden on the outside, for example to change an element after a variable reaches a certain value.

### Using Variables in an experience
- Add a TextBox by clicking on the `+` icon.
- Put the variable you want to use in the text in double curly brackets: {{VAR}}.

![variables](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/vars.png#boxShadow/)

- Add a Rule: Change the value of VAR to (let say "Gmetri") after clicking on any element.

![Rule](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Connection.png#boxShadow/)