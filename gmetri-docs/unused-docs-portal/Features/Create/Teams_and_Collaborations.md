---
title: Add Team Members & Collaborate with Team to create XR Experiences
description: Add or Remove Team Members for the Experience and Add Collaborators to create XR Experiences with help of Tutorials on the GMetri XR Platform - GMetri Documentation
hide_title: true
sidebar_label: Teams and Collaboration
---

# Teams and Collaborations

## Team Members

After signing up on the GMetri platform, you are assigned a default organization. You are the admin of your default organization. Admins can add team members to their organization. Team members can create experiences under that organization.

:::info TIER LIMITS
- Free accounts support 3 seats.
- Professional acounts support support 10 seats.
- Enterprise accounts support 30 seats.

Want more? [Upgrade](https://gmetri.com/pricing)!
:::

### Adding Team Members

To add a team member, head over to the settings page.

![Settings page](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/DAG/settings_navigation.png.jpg#boxShadow/)


- In the Team Members section click on `+ Invite` and then enter email address of the person you wish to add, to your organization.
- An invitation email is sent out to them.
- Once accepted, the person you invited gets added as a member of your organization.

:::caution
To prevent abuse of the system, we dont allow bulk invites of team members via the website, if you wish to add team members in bulk, contact us.
:::

### Removing Team Members

To remove a team member, head over to the Settings page and click on `remove` against a team member in the Team Members section and that team member will no longer have access to any of your organization's experiences.

## Collaborators

Use this tab to add new colaborators to the experience.

![Collaborators](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/experience_collaborator_settings.JPG#boxShadow/)

- Click on `Add Collaborators` button under Collaborators section. 
- Enter email address of a registered user who you want to collaborate with.

Members who are invited to collaborate on an experience will receive an email invitation. Once they accept the invitation, they will be allowed to access and edit the experience.

:::caution 
* Any collaborator can invite more members to collaborate on the experience. 
* Creator of the experience is **not** the owner of the experience and all collaborators including the creator have equal access to the experience.
* The **admins** of an organization are by default allowed to access and **edit** all the experiences of their organization. 
* Once members have been added as collaborators, they will have access to all features including **editing experiences**, **creating/updating/deleting deployments**, and even **deleting the experience**. **Add your collaborators carefully.**
:::

## GMetri Portal role-based user access

GMetri users have three tiers of roles:
1. Admin (The first user of any workspace is the admin of that workspace)
2. Member
3. Analytics

If a user joins an already existing organization through an invite, the inviter has the ability to decide the role of that user using the “Team Members” section.

If a user joins an already existing organization (possible only if “auto join” for that workspace was enabled and the email domain matches) using the signup page, he/she is granted the member role after joining the organization. “Auto join” is a setting you see when creating a new workspace while signing up).

### What can the different roles access?

#### Admin

An admin can do everything a member or an analytics user can do
An admin additionally:
- Can access the settings page and change workspace related settings
- Has access to edit all experiences, and can add/remove collaborators from any experience

#### Member
A member can do everything an analytics user can do.
A member can additionally:
- Create new experiences. When you create a new experience you are automatically a collaborator of that experience.
- Any collaborator of an experience can invite more collaborators (who have an admin or member role) to collaborate on that experience. A “collaborator” of an experience is someone who can edit that experience. 
- Publish projects they are a collaborator of and access analytics data for those experiences
- Access and modify “viewer groups” that can be used to restrict access and add authentication to published experiences

:::caution 
Note that members by default cannot edit all experience. Only those experiences to which they have been explicitly added as collaborators can be edited by them.
:::
#### Analytics
An analytics user can access aggregated analytics of all projects, and also access analytics of individual projects.