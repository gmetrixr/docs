---
hide_title: true
sidebar_label: Custom List
---

# Custom List

Sometimes you may need a custom list that requires a login identifier other than an email (eg, phone numbers, special usernames, etc). In such cases, you can simply rename the columns to the desired name and it will show up in the login form. 

The second column in the csv is treated as the password field (regardless of what you reaname it to). If it is present the csv, we will authenticate all your users against the provided passwords. If you wish to skip password verification, remove this column from the csv.

A sample CSV containing some users with their names and an `arbitrary password` will look like:

![Sample viewerlist with passwords](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/DAG/img9.png.jpg#boxShadow/)

A sample CSV containing some users with only their names and `no password` will look like:

![Sample viewerlist with passwords](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/DAG/img10.png.jpg#boxShadow/)


:::caution
Once the csv has been uploaded , you cannot see the passwords again (for security purposes), so if you wish to change the password of some or all your allowed users, upload a new csv with the updated passwords. 
:::