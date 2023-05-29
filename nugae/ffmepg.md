---
title: "Using ffmepg to merge audio & video"
description: "traditional post"
date: "2023-05-29"
public: true
---



``ffmpeg`` is a great tool from (https://bellard.org/)[Fabrice Bellard] described as the Open Source Multimedia System.

You can install it with ``brew install ffmpeg`` and use its command-line for many things.


- merging a mute video file with its corresponding audio file. 

This can be useful, as you get sometimes two separate files when fetching video content, e.g from streaming plateform, e.g using ``youtube-dl`` command-line.

```bash
ffmpeg -i video.mp4 -i audio.mp4 -c copy output.mkv
```
