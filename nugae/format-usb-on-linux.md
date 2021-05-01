---
title: "make FAT32 disk on linux OS"
description: "traditional post"
date: "2020-02-09"
public: true
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
you can use the ```mount``` command too, but notice that the last column of ```lsblk``` indicates **the mountpoint**. For more details on filesystems, add a -f flag ```lsblk -f```

### Delete and renew partitions

After you located the drive, and made sure it is not mounted, we can use the ```fdisk``` utility.

```bash
sudo fdisk /dev/sdg
Command (m for help): p
 
Disk /dev/sdg: 3874 MB, 3874488320 bytes
42 heads, 8 sectors/track, 22521 cylinders, total 7567360 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0006301d
 
   Device Boot      Start         End      Blocks   Id  System
/dev/sdg1            2048     7567359     3782656    b  W95 FAT32
```

Now partition 1 can be deleted :

```bash
Command (m for help): d
Selected partition 1
Partition 1 is deleted
 
Command (m for help): p
 
Disk /dev/sdg: 3874 MB, 3874488320 bytes
42 heads, 8 sectors/track, 22521 cylinders, total 7567360 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0006301d
 
   Device Boot      Start         End      Blocks   Id  System
```

Next step, create a new primary partition

```bash
Command (m for help): n
Partition type:
   p   primary (0 primary, 0 extended, 4 free)
   e   extended
Select (default p): 
Using default response p
Partition number (1-4, default 1): 
Using default value 1
First sector (2048-7567359, default 2048): 
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-7567359, default 7567359): 
Using default value 7567359
Partition 1 of type Linux and of size 3,6 GiB is set
 
Command (m for help): p
 
Disk /dev/sdg: 3874 MB, 3874488320 bytes
42 heads, 8 sectors/track, 22521 cylinders, total 7567360 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0006301d
 
   Device Boot      Start         End      Blocks   Id  System
/dev/sdg1            2048     7567359     3782656   83  Linux
```

By default, partition type will have id 83 (Linux) and should be changed to FAT32. Type **t** command and set partition id as **b**. All partition codes can be listed with **L** command.

```bash
Command (m for help): t
Selected partition 1
Hex code (type L to list codes): b
Changed system type of partition 1 to b (W95 FAT32)
 
Command (m for help): p
 
Disk /dev/sdg: 3874 MB, 3874488320 bytes
42 heads, 8 sectors/track, 22521 cylinders, total 7567360 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0006301d
 
   Device Boot      Start         End      Blocks   Id  System
/dev/sdg1            2048     7567359     3782656    b  W95 FAT32
```

Then you can set the partition as active, to make it bootable. Type in **a** command and choose first partition number

```bash
Command (m for help): a
Partition number (1-4): 1
 
Command (m for help): p
 
Disk /dev/sdg: 3874 MB, 3874488320 bytes
42 heads, 8 sectors/track, 22521 cylinders, total 7567360 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0006301d
 
   Device Boot      Start         End      Blocks   Id  System
/dev/sdg1   *        2048     7567359     3782656    b  W95 FAT32
```

You can now write changes to disk and exit.

```bash
Command (m for help): w
The partition table has been altered!
```

### Format the USB storage device as FAT32

Now a FAT-32 file-system can be created on the drive. Note that you might have to install some dependencies: ```sudo pacman -S dosfstools```

```bash
mkfs -t vfat -n MY_DRIVE_NAME /dev/sdg1
```

Now you're good to go : using the **fdisk** utility, list your devices partitions.

```bash
sudo fdisk -l
``` 
Eject and reinsert your drive, it should be empty and mounted

```bash
df -HT
Filesystem     Type      Size  Used Avail Use% Mounted on
rootfs         rootfs     30G  5,6G   23G  20% /
devtmpfs       devtmpfs  1,8G     0  1,8G   0% /dev
tmpfs          tmpfs     1,8G  868K  1,8G   1% /dev/shm
tmpfs          tmpfs     1,8G  1,3M  1,8G   1% /run
/dev/sda1      ext2       30G  5,6G   23G  20% /
tmpfs          tmpfs     1,8G     0  1,8G   0% /sys/fs/cgroup
tmpfs          tmpfs     1,8G     0  1,8G   0% /media
/dev/sdb5      ext4      204G   41G  153G  22% /home
/dev/sdb1      ext4       20G  9,1G  9,7G  49% /var
/dev/sdb3      ext4      4,0G  137M  3,7G   4% /tmp
/dev/sdg1      vfat      3,7G  4,0K  3,7G   1% /run/media/dbunic/DF85-CAF4
```

### Mount am external usb drive with ownership and permissions

This can be useful too :

```bash
sudo mount -o umask=0022,gid=1001,uid=1001 /dev/sdc1 $HOME/mnt
```

Source: adapted from https://www.redips.net/linux/create-fat32-usb-drive