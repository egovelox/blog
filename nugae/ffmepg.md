---
title: "Using ffmepg to merge audio & video"
description: "traditional post"
date: "2023-05-29"
public: true
---



``ffmpeg`` is a great tool from [Fabrice Bellard](https://bellard.org/) described as the Open Source Multimedia System.

You can install it with ``brew install ffmpeg`` and use its command-line for many things.


- merging a mute video file with its corresponding audio file. 

This can be useful, as you get sometimes two separate files when downloading multimedia content, especially from streaming platforms, using ``youtube-dl`` [command-line](https://github.com/ytdl-org/youtube-dl).

```bash
ffmpeg -i video.mp4 -i audio.mp4 -c copy output.mkv
```
