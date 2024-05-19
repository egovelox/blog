---
title: "Setup oss multiroom hi-fi"
description: "traditional post"
date: "2024-05-19"
public: true
---

This post briefly details how to setup a ( fully open-source ) multi-room hi-fi setup, relying on : 
- a Logitech Media Server ( LMS ) distributing its contents to players located in various rooms. 
- one or many SqueezeLite players, with optional capability to synchronize players in real-time, playing the same media content.

> Note that other player distributions (like Volumio, etc) may also work, though a LMS + PiCorePlayer combination seems the best, imho ( also because it's all open-source and free ). You can read this [article](http://techroadtrip.com/audio-software/volumio-vs-moode-vs-picoreplayer/) for an in-depth comparison.


## Prerequisites

- a single wifi network with
  - working DHCP and DNS
  - in a given room, a laptop hosting the LMS.
  - in each room, a Raspberry-Pi ( RPi ) device ( ideally 3B + for stable wifi ) with a Digital Analog Converter (DAC) hosting the SqueezeLite ( also known as PiCorePlayer ) player
- sound speakers attached to each RPi-DAC

## Installation

Install the [LMS](https://lyrion.org/) on your laptop ( macOS is possible ). 
Physically mount the DAC ( e.g IQAudio DAC + ) on each RPi.

Flash each RPi sd-card with latest [PiCorePlayer OS](https://docs.picoreplayer.org/downloads/) using [Raspberry Pi Imager](https://www.raspberrypi.com/software/). No need to configure the OS, it can be done in the next step.

Insert the flashed sd-card in each RPi-DAC, insert an Ethernet wire ( will be removed once wifi setup on the RPi-DAC ), and boot the RPi-DAC.


## Setup

Check on a browser that it is up and running at http://{server IP}:9000

Check on a browser that each RPi-DAC is up and running by visiting each http://{player IP}. 

In each PiCorePlayer webUI, now you can :
- setup the wifi on the RPi-DAC
- choose the corresponding DAC ( by default it booted with HeadPhones, i.e no DAC )
- check various diagnostics or restart the RPi-DAC if needed

Then, via ssh into each RPi, disable the native RPi audio :
```bash
ssh tc@{RPi-DAC IP}
# password is 'piCore' by default

mount /mnt/mmcblk0p1 && cd /mnt/mmcblk0p1

vi config.txt
# disable native audio by commenting out this line
#dtparam=audio=on

# then you can check that you have this line, i.e DAC is already configured:
dtoverlay=iqaudio-dacplus
# or add it yourself !
```

At last, remove the Ethernet cable, reboot, and the RPi-DAC, aka your PiCorePlayer, should now be ready !

Check on the LMS interface available at http://{server IP}:9000 that the server has automatically recognized each of your players.

You should be now able to listen to your media ( local media files on the server disk, as well as webradios and more with LMS plugins ) accross all your rooms, either choosing to synchronize each player with each other, or not !

<img src='./images/lms-webui.png' alt="lms webUI" title="lms webUI">
