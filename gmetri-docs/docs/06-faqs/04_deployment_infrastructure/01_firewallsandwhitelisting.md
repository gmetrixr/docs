---
sidebar_label: 'Firewalls and Whitelisting' #Name in sidebar
sidebar_position: 1 # float position is supported
---

# Firewalls and Whitelisting

###  I have a network firewall in my organization. Which domain names are to be whitelisted to run GMetri experience?
The following is the list of domain names that should be whitelisted.  

WhilteList for Viewing Experiences  

Simple Short List

- Essential: `*.gmetri.com, *.vrgmetri.com`
- Also Recommended: `*.trackjs.com, *.googleapis.com, developers.google.com`

## Expanded Long List
(ONLY in case you can't use the above short list because of wildcards)
- Essential:
  * `gmetri.com`
  * `portal.gmetri.com, editor.gmetri.com, docs.gmetri.com`
  * `view.gmetri.com, preview.gmetri.com, offline.gmetri.com`
  * `api.gmetri.com, teaxrapi.gmetri.com, z5api.gmetri.com, sms-api.gmetri.com, z5-viewer-socket.gmetri.com, z5-editor-socket.gmetri.com`
  * `z5api.in.gmetri.com, sms-api.in.gmetri.com`
  * `s.vrgmetri.com, u.vrgmetri.com, d.vrgmetri.com`
- (Recommended) Help/support: `*.trackjs.com`
- (Recommended) Location based features (Geo-Lock, Map Analytics): `*.googleapis.com, developers.google.com`

### I have a network firewall in my organization. Which domain names are to be whitelisted for editting GMetri experience?

You need to whitelist all URLs needed for viewing experience. Apart from that, you need the following.

### Additional WhiteList for Editing Experiences

Here is a feature-wise breakup of URLs the editor needs access to:
> Even if these URL's aren't whitelisted, the only thing that gets affected are those specific features only - the rest of the editor should continue to function normally.

* Help/support: `calendly.com, *.typeform.com`
* Subscription management: `*.chargebee.com, *.amazonaws.com`
* Integrations/Flickr: `*.flickr.com, *.staticflickr.com`
* Integrations/Google Poly: `*.googleapis.com, *.googleusercontent.com`
* Integrations/Sketchfab: `*.sketchfab.com`
* Maps (Location based analytics): `*.googleapis.com, developers.google.com, *.google.com, *.gstatic.com`

### Additional white-listing in case staging/testing environment is needed

Staging/Testing Environment: `*.gmetri.io`


## My experience isn't running and I think it's a network/access issue. What should I do?

First, try opening the following links in your browser and make a note of everything that doesn't open:

1. [Test 1 - Image](https://s.vrgmetri.com/gb-web/common/images/control-panel/vr_v2.png) - you should see a VR headset logo
2. [Test 2 - Experience](https://view.gmetri.com/v4/game/safehands) - you should see a VR experience

Contact us at support@gmetri.com with the results of the above test
