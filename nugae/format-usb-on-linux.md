---
title: "formatting usb key on linux OS"
description: "traditional post"
date: "2020-02-09"
public: true
---

As soon as you plugged your USB device, you can monitor using dmesg:

```bash
sudo dmesg | tail

```
You can also use the following command to know the entry in /dev filesystem:
```bash
sudo lsblk

```

If you want to know if it has been automatically mounted or not,
you can use the ```mount``` command too, but notice that the last column of ```lsblk``` indicates **the mountpoint**

### Format the device
