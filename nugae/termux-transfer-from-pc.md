---
title: "Transfer file to android from PC via termux"
description: "traditional post"
date: "2022-02-08"
public: public
---

How to transfer a file from a PC computer to your android via termux: 

In termux
```bash
    sshd
    # Set a temporary passwd or connection won't be allowed
    passwd
```

From your PC
```bash
    # no user needed, since termux is mono-user
    scp -P 8022 ./Documents/my_file 192.168.2.209:/sdcard/Download/
    # N.B this sdcard in the path is the primary storage
    # The permission to storage must be allowed inside termux settings
```

In termux again
```bash
    pkill sshd
```

You're all done !