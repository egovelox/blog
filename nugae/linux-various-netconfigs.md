---
title: "Footer en HTML"
description: "traditional post"
date: "2020-01-16"
public: false
---



### on all systemd Linuxes
chances are you'll get info about you rnetwork conf using
systemctl --type=service
(add if necessary | grep -i network)

### On CentOS
A directory where you have to write scripts: /etc/sysconfig/network-scripts
Name of your script: ifcg-eth0
A static address must have:
BOOTPROTO=none
IPADDR=192.168.your.adress
PREFIX=24
GATEWAY=192.168.your.gw


About NM (arch)
NetworkManager is a program for providing detection and configuration for systems to automatically connect to networks. NetworkManager's functionality can be useful for both wireless and wired networks. For wireless networks, NetworkManager prefers known wireless networks and has the ability to switch to the most reliable network. NetworkManager-aware applications can switch from online and offline mode. NetworkManager also prefers wired connections over wireless ones, has support for modem connections and certain types of VPN. NetworkManager was originally developed by Red Hat and now is hosted by the GNOME project. 
Tool-suite: nm-applet, nmcli
NetworkManager can be installed with the package networkmanager, which contains a daemon, a command line interface (nmcli) and a curses‐based interface (nmtui).  


Changes, on CentOS 8
dnf install NetworkManager if necessary
but not yum install network-scripts, they say is deprecated (do not use ifup ifdown scripts anymore)

NMCLI Usage
$ nmcli device 
OR
$ nmcli device status

$ nmcli connection show -a

Network interface-specific configuration files are located in the /etc/sysconfig/network-scripts/ directory. You can edit any of these files, for example, to set a static IP address for your CentOS/RHEL 8 server.
Then 
$ nmcli connection reload
OR
$ systemctl restart NetworkManager


## A Bridge ?

The idea is you can put tap0 and eth0, for example, into a bridge br0 - then broadcast traffic traverses across this bridge. (Broadcast traffic coming in from tap0 will be forwarded to eth0 and vice versa whereas in a routed, standard situation it would not.)

broadcast traffic
In a network, broadcast traffic is a message that is sent out to every node on the network or a portion of the network (LAN segment). See broadcast


## La commande ip
iproute2 est une collection d'utilitaires pour la gestion des protocoles TCP, UDP IP et la gestion du réseau sous Linux, supportant l'IPv4 et l'IPv6. 

## systemd-networkd (conflicts with NetworkManager.service)
networkctl list
The idea is to configure files in /etc/systemd/network/ 
