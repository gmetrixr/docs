---
title: Add Audio
sidebar_label: Audio
description: View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for adding audio recorded from microphone in GMetri XR experiences.
hide_title: true
---

# Audio

Audio/Sound can be added to an experience using two elements:

1. **Audio**: Use this to upload an existing audio file.
2. **Audio TTS**: Use this to use text to generate audio, by converting Text To Speech (TTS).

## Properties

### Playback Properties

* **Volume**: This sets the initial volume of the audio. You can later change this using rules.
* **Muted**: Check this to mute the audio. You can later unmute this using rules.
* **Loop**: Check this if you want the audio to keep looping

### Speech Properties (Only for Audio TTS)

* **Language**
* **Voice**
* **Speed**
* **Pitch**

##  Rules

* **Events**: `When audio` `ends`
* **Actions**: `Then audio should` 
   * `play/resume`/`play/seek to (n) sec`/
   * `pause`/`toggle play/pause`/
   * `mute`/`unmute`/`set volume to (n)`

## Example

<iframe width={"100%"} height={"380px"}  src="https://www.youtube.com/embed/A2tYT2jo50E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
