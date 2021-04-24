---
title: "usb drive operations on linux OS"
description: "traditional post"
date: "2020-02-09"
public: false
---

As soon as you plugged your USB device, you can monitor using dmesg:

```bash
sudo dmesg | tail

```
You can also use the following command to know the entry in ```/dev``` filesystem (here sdc):
```bash
sudo lsblk

NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 119.2G  0 disk
├─sda1   8:1    0    40G  0 part /
├─sda2   8:2    0    70G  0 part /home
└─sda3   8:3    0   9.2G  0 part [SWAP]
sdb      8:16   0 298.1G  0 disk
└─sdb1   8:17   0 298.1G  0 part /home/userX/hd
sdc      8:32   1  14.4G  0 disk
├─sdc1   8:33   1   621M  0 part
├─sdc2   8:34   1    61M  0 part
└─sdc3   8:35   1   300K  0 part

```

If you want to know if it has been automatically mounted or not,
you can use the ```mount``` command too, but notice that the last column of ```lsblk``` indicates **the mountpoint**

### Format the USB storage device - IN PROGRESS

Using the fdisk utility, first list your devices partitions.

```bash
sudo fdisk -l
``` 


### Mount am external usb drive with right user permissions

```bash
sudo mount -o umask=0022,gid=1001,uid=1001 /dev/sdc1 $HOME/mnt
```

