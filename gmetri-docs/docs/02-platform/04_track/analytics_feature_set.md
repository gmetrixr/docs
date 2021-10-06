---
title: GMetri Tracking Analytics Feature Set
description: Total Unique Users, Views, Average Session Duration, Browsers, Platforms, User Variables, Viewer Information, Sessions by Location, Rule Funnel, Rule log, Leader Board - GMetri Analytics Features
hide_title: true
sidebar_label: Feature Set
---

# Feature Set

![Analytics Views, Viewers and Avg. Session Duration](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_views_viewers_duration.png.jpg#boxShadow/)
## Viewers

This is a count of unique logins that occurred to view your experience. 

:::caution NOTE
For public deployments, every experience load counts as a new viewer.
:::

## Views
This is a count of the number of times your experience was loaded. The views section will also show you a `time` vs `views count` graph.

:::info TIER LIMITS
Free accounts support only 50,000 lifetime views acorss experiences.

Want more? [Upgrade](https://gmetri.com/pricing)!
:::

## Average Session Duration

This measure gives you an idea of how long a user session lasts on an average. 

`Average user session duration is the sum of the duration of all user sessions divided by total number of user sessions.`

## Browsers
This gives you the count of views per browser for your experience. The browser section will also show you a pie chart made with view count per browser. 

![Analytics Browser count](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_browsers.png.jpg#boxShadow/)

## Platforms
This gives you the count of views per platform for your experience. The platform section will also show you a pie chart made with view count per platform. 

![Analytics Browser count](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_platform.png.jpg#boxShadow/)

## Viewer Information

![Viewer Information](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_viewer_information.png.jpg#boxShadow/)

This section shows all information related to every viewer that viewed your experience. This contains information on:

- Viewer Unique Identifier
- Name (blank for public views)
- Email (blank for public views)
- Score (If Score element is present in the experience) 
- Browser
- Deice Identifier
- Language
- Device Resolution
- CPU Class
- Platform
- Webgl vendor
- Latitude, Longitude
- Locality
- Admin Area Level 1
- Admin Area level 2
- Country
- Postal Code
- Start Timestamp
- End Timestamp


## Sessions by Location
This section shows you geo-location information of your viewers on `Google Maps`.

![Analytics Viewer Information](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_location.png.jpg#boxShadow/)

:::info TIER LIMITS

Free accounts do not support this feature.

Want this feature? [Upgrade](https://gmetri.com/pricing)!
:::

## Rule Funnel
This section shows you a frequency chart of how many times a rule in your experience was clicked. Using this information you can gain insights into how your viewers navigate through your experience.

![Analytics Viewer Information](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_cf.png.jpg#boxShadow/)

## Rule log
This section shows information on the rule and viewers that triggered it. This gives you a fine grained log of how exactly a viewer interacted with your experience.

![Analytics Viewer Information](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_cl.png.jpg#boxShadow/)

## Leader Board

### Leader board analytics page

- The Leader board on the analytics page shows a peek at the leaderboard page through a mini chart.

This section will show up the score counted by the [Score](../create/elements/Score) element in your experience. 

![Analytics Viewer Information](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_leaderboard_mini.png.jpg#boxShadow/)


### Leader board on a separate page
When you click on the `more` button, you'll be taken to a leader board page. This page provides you with further customizations on what information you want to show on the leader board via URL parameters.

![Analytics Viewer Information](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/leaderboard_page.png.jpg#boxShadow/)

#### Fixed Parameter

- Notice that the leaderboard's page URL already has a `page_token` parameter. This is used for authentication and should not be removed.

#### Optional Parameters

- The following parameters can be optionally passed in the leader board URL:
<table>
  <tr>
    <th> Parameter </th>
    <th> Default Values </th>
    <th> Function </th>
    <th> Table Header </th>
  </tr>

  <tr>
    <td> <code>rows=&lt;num></code> </td>
    <td> <code>50</code> </td>
    <td> Controls the number of rows shown in the leaderboard. </td>
    <td> - </td>
  </tr>

  <tr>
    <td> <code>show_rank=true&#x7c;false</code> </td>
    <td> <code>true</code> </td>
    <td> Controls if the viewer rank is shown in leader board. </td>
    <td> Rank </td>
  </tr>

  <tr>
    <td> <code>show_identifier=true&#x7c;false</code> </td>
    <td> <code>false</code> </td>
    <td> Controls if the viewer identifier is shown in the leaderboard. </td>
    <td> Identifier </td>
  </tr>

  <tr>
    <td> <code>show_name=true&#x7c;false</code> </td>
    <td> <code>true</code> </td>
    <td> Controls if the viewer name is shown in the leaderboard. </td>
    <td> Name </td>
  </tr>

  <tr>
    <td> <code>show_variables=&lt;header1&#x7c;var_name_1>, &lt;header2&#x7c;var_name_2>....</code> </td>
    <td> - </td>
    <td> Exposes any custom user variables. Here, <code>header</code> is any placeholder for the variable. The variable name to be shown is provided after the pipe <code>&#x7c;</code>. </td>
    <td> As provided within the parameter (<code>header1</code>, <code>header2</code> etc.) </td>
  </tr>

  <tr>
    <td> <code>show_score=true&#x7c;false</code> </td>
    <td> <code>true</code> </td>
    <td> Controls if the viewer score is shown in leader board. </td>
    <td> Score </td>
  </tr>

  <tr>
    <td>
      <code>keep=
      variable1_name&#x7c;
      include_value_1:
      include_value_2:
      include_value_3,
      variable2_name&#x7c;
      include_value_1:
      include_value_2:
      include_value_3
      </code>
    </td>
    <td>-</td>
    <td> 
      Use a variable to filter the leaderboard.
      A variable associated with the viewer is used as a table filter. `keep`will keep entries in leaderboard for only the specified variable values.
      One can allow inclusion of multiple variable values as well as filter using multiple variable.
      Variable values are separated by a colon ':', variables are separated by a ',' and variable are separated from their values by '|'.</td>
    <td>-</td>
  </tr>
</table>

:::caution
This page is accessible to anyone who has the link to the page.
:::

# Filter

You can choose to filter analytics by time. Find the dropdown menu for this on analytics page.

![Analytics Filter](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/analytics_filter.png.jpg#boxShadow/)

## Filter Options

You can choose to filter with the following duration filters:

- Today
- Last 7 days
- Last 30 days
- Last 60 days
- Last 90 days
- Custom Range

