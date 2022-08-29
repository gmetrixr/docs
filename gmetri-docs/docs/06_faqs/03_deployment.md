---
sidebar_label: 'Deployment FAQs' #Name in sidebar
sidebar_position: 3 # float position is supported
#TODO: Authentication article needs rewrite
---
import Card from "/src/components/Card"

<head>
  <link rel="canonical" href="https://docs.gmetri.com/metaverse/publishing-and-analytics/publishing-faqs" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/metaverse/publishing-and-analytics/publishing-faqs
:::

# Deployment FAQs

## What hardware & software can GMetri experiences be viewed in?

GMetri XR experiences run on: 

- All headsets - HTC Vive, Oculus Go/Rift, Google Card  
- All Laptops/Desktop on chrome  
- All Mobile Phones  
  - Android  
  - Apple (Needs Chrome to be installed)  

## Headsets
On Headsets, experiences can be run in their inbuilt browsers and simply typing in the deployment URL.  

Google cardboard headsets essentially use Mobile Phones to power the VR Experience, so check the Mobile Phone section below.
## Laptops/Desktops
On Laptops/Desktop, experiences can be run on Chrome by accessing the deployment URL.  
## Mobile Phones
On Mobile Phones (both Android and iOS based), experiences can be run on Chrome by accessing the deployment URL.  

In case you need to embed the experience within an App or a website, follow the guides below:  

<Card heading={"Website Embed"}    link={"/docs/features/publish/embed/website-embed"} />
<Card heading={"Android Embed"}  link={"/docs/features/publish/embed/android-embed"} /> 
<Card heading={"React Embed"}    link={"/docs/features/publish/embed/react-native-embed"} />  

##  How to handle authentication?  

In many cases, we may want to authenticate and control access to published GMetri content. There are a couple of ways to achieve this.

### You Handle the Authentication 

- Embed the experience on your App/Website/etc. and keep the access to this page authenticated.
- You can enable a text field at the beginning of the experience, asking users to input their unique identifier (Example. Employee ID for internal training) so you can reference that back to the analytics, if required.
- This method will incur no additional charges from GMetri. (Analytics charges, of course, are extra, and optional.)

### We Handle the Authentication  

- You can create as many GMetri view-only accounts for an experience as required.
Example: A GMetri view-only account can be provided to each trainee for a VR training module.
- In this case, the authentication prompt will require credentials that have to be defined by the user during the first login.
 - This is a chargeable feature, and the pricing depends on the number of view-only accounts created.

## What are the kind of insights I can get using Custom Dashboards?
The GMetri platforms can store the following data points for any viewer of the immersive experiences:

  - **What** the user looks at / interacts with - including coordinates of the user(s)  
  
  - **When**: The amount of time spent on the whole experience, per scene or looking at a single element  
  
  - **How** the user interacts with his/her surroundings - including what buttons were clicked/ what actions were performed on which element(s)/scene(s), and tracking user score in quizzes.   


  
The above-captured metrics can be combined in various ways to get may insights through Custom Dashboard. These insights may include:  

  - **User Performace/Leaderboard** - by combining the total score of the user with the time spent by the user in the experience, one can estimate how well the user may perform in a real-world scenario.
  - **Creating domain-specific dashboards** focusing on a few aspects of the training to gain further insights. Eg: measuring how one handles corrective situations in client interactions, or measuring how well versed a user is with technical processes, compliance, safety, soft-skills, etc.
  - **Dashboard to focus on user time spent**, to create a feedback loop to detect and fix problems in the immersive environment itself - for example, if a user doesn't spend enough time at a particular section vs. other sections, it could have something to do with the design of the scene or the storyboarding. This information can then feed into the correction of the scene/storyboard itself, and to and any improvements may be measured over time.  
  

## How to cast the Oculus GO?

Oculus [recently announced](https://www.oculus.com/blog/october-platform-updates-casting-comes-to-oculus-go-avatar-updates-and-more/) that they are enabling casting options for the Go.

This came as great news to creators globally so you are not disconnected from the users when wearing the headset.

Here's how you can set this up:
- [Oculus Support Guide](https://support.oculus.com/articles/headsets-and-accessories/oculus-go-and-gear-vr/index-go-gear-vr#faq_1053142614872870/)
- [Cast your Oculus Go to a phone](https://www.androidcentral.com/how-cast-your-oculus-go)  


There are a few legacy methods that you can still fall back on, you can find them [here](https://pixvana.com/sharing-your-oculus-go-screen-on-your-laptop/).


## How can I send someone directly to a particular scene when they click the experience link?

The way to go directly to a scene is to add the scene_id at the end of the deployment URL like this:

_`https://view.gmetri.com/v5/gmetri/demo_deployment`_**?scene_id=1639550027086**

To find out the **scene_id** of any scene, open that scene in preview mode, and look for scene_id in the URL

![Scene Id from URL](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/scene_id_in_url.png)
