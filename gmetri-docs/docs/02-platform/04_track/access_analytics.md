---
title: How to Access Analytics - Tracking Features - GMetri XR Platform
description: Access Analytics - Unique users, Average session duration, Browsers, Platforms wih Analytics Dashboard for Deployments - Tutorials on GMetri Documentation
hide_title: true
sidebar_label: Accessing Analytics
---

# Accessing Analytics

- Head over to the Publish tab on the left bar of the editor.
- Click on `Analytics` inside the deployment section on the top right of the deployment card. 

![Deployment](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/deployment.JPG#boxShadow)
### Analytics Page

Once you are on the analytics page, you shall find various sections on the page, that will show you a detailed analysis of your deployment. 

![Analytics Page](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_page_1.png.jpg#boxShadow/)

### Forward analytics to an external endpoint

You can configure live viewer state information to be forwarded to an external API. 
- To do so, head over to the `Settings` page by clicking on your avatar on the top right of the page.
- On `Settings` page, scroll down to the `Advanced` section and expand it.
- Clicking on the `ENABLE VIEWER STATE FORWARDING` will reveal the following.

![Viewer State Forwarding](https://r.vrgmetri.com/image/q_100/gb-web/portal-docs/assets/img/screenshots/viewer_state_forwarding.png.jpg#boxShadow/)

- An API secret will be created for your organization. This can be used to validate source identity by you.
- Enter an API endpoint for us to send requests to.

#### What will we send?

Every time there is an update to any viewer state (variables) in the organization (for all projects), the updated viewer state will be sent to the external endpoint. One possible use of this is to keep a database at your end updated with the progress of viewers across your experiences.

1. Type of request: 

- `POST`

2. Header:

- `authorization`: JWT token created using shared API secret and `identifier`

3. Body:

| Property              | Value                                              |
|:----------------------|:---------------------------------------------------|
| **organization_slug** | The slug of your organization                      |
| **deployment_slug**   | The slug of the deployment that the viewer visited |
| <var_name>            | <var_value>                                        | 
| <var_name_1>          | <var_value_1>                                      | 
| <var_name_2>          | <var_value_2>                                      |
| ...                   | There might be more variables depending on viewer information.|

:::note
- **deployment_slug** is the link of the deployment specified in the publish page.
- **organization_slug** is the last part of the URL you see on your portal page (abcxyz in https://portal.gmetri.com/abcxyz) when you login to the portal.