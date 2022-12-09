---
title: "user switching (su, sudo)"
description: "traditional post"
date: "2020-04-02"
public: false
---
su means ``switch user`` : by default, you switch to root.

tldr;
su - username
PRO: a login shell, a username env


related files
/etc/passwd, /etc/shadow and /etc/group
/etc/sudoers

related commands: id, 

sudo su
/root/.bashrc
change $PATH : NO
$HOME = /root (/var/root on MacOSx)


sudo -i
/root/.login, /root/.profile, /root/.bashrc 
change $PATH : NO
$HOME = /root (/var/root on MacOSx)

SU
- starts a sub-session inside the existing session on the terminal.
- defaults (i.e no params) to running an interactive shell as root.  
- When user is specified, additional arguments can be supplied, in which case they are passed to the shell.
- -c, --command=command Pass command to the shell with the -c option.
su - username (= su -l username)
- option is shortcut : -l or --login 
(will init a login shell)
change $PATH :  YES unless you add -p
-s option to specify the shell (if default is not set as desired)
su -ls /bin/bash 
su -ls /bin/bash -c date


