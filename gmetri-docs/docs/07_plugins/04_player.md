---
sidebar_label: Player
sidebar_position: 4
hide_table_of_contents: false
---

# Player

GMetri Player is a **full-fledged Metaverse application** that can run experiences created with Plugin API.
We have bundled a simple javascript file and an even simpler interface to get you started. 

The latest javascript file is hosted [here](https://s.vrgmetri.com/gm-gb-test/gmetri-player/local/web/player.bundle.js). **We recommend you to not self-host this file to receive latest updates from us.**

There are 2 simple steps to get GMetri Player running on your website. 
1. Drop the below script in the `<head>` section of your web-page
```html
<script type="application/javascript" src="https://s.vrgmetri.com/gm-gb-test/gmetri-player/local/web/player.bundle.js"></script>
```
2. Initialize the Player API by passing the JSON and options
```typescript
// usage
const player = gmetri.player.load({
  json: {},
  options: {
    htmlAnchor: document.body,
    onSceneChange: () => {},
    onRuleTriggered: () => {},
    onViewerStateChange: () => {},
  }
}).play();
```

## Player JSON
The Player API accepts a recursive tree structure (codename `rJson`). 

This JSON structure can be easily created using our [open source library](https://github.com/gmetrixr/rjson) on GitHub. Feel free to fork it!

To get started on understanding JSON structure, look at the sample jsons added in the github repo [here](https://github.com/gmetrixr/rjson/blob/main/test/r/jsons)
`rJson` library also exports all the helper functions that you can use to create `rJson` structures. Have a look at the usage [here](https://github.com/gmetrixr/rjson/blob/main/test/r/1.factory.spec.ts)

We also have a codesandbox ready that showcases the absolute power of creating **Metaverse Apps** using the GMetri Plugin API

<iframe src="https://codesandbox.io/embed/priceless-panna-r27u8?fontsize=14&hidenavigation=1&theme=dark&view=preview" width="100%" height="400px"
title="priceless-panna-r27u8"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

## Player Options
```typescript
type PlayerOptions = {
  htmlAnchor?: HTMLElement,
  onSceneChange?: () => Promise<void>,
  onRuleTriggered?: () => Promise<void>,
  onViewerStateChange?: () => Promise<void>,
};
```

1. **htmlAnchor** - Reference to the HTML element you want the player to attach to 
2. **onSceneChange** - Optional callback, fired whenever a scene is changed inside the experience
3. **onRuleTriggered** - Optional callback, fired whenever a rule is triggered
4. **onViewerStateChange** - Optional callback, fired whenever the variables state changes. Documentation on variables can be found [here](/docs/platform/create/variables)