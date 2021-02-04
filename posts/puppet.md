---
title: "Puppet server/agent conf"
description: "devops post"
date: "2021-01-20"
public: true
---

# Configure a puppet agent and server on Ubuntu 18.04.

## prerequisit
You should register the dnsnames of your machines in your registrar, or use
a mapping of your IP inside /etc/hosts

## Install 
You can find packages on https://apt.puppetlabs.com
```bash
# in your homedir, 
# replace the right pkg for agent or server

wget https://apt.puppetlabs.com/puppet7-release-bionic.deb
sudo dpkg -i puppet7-release-bionic.deb
sudo apt update

```

###### on the agent

```bash
#/etc/puppetlabs/puppet/puppet.conf

[main]
server = pupmaster.egovelox.com
certname = pupagent.egovelox.com

```
###### on the server

```bash
#/etc/puppetlabs/puppet/puppet.conf

[main]
server = pupmaster.egovelox.com
certname = pupmaster.egovelox.com

[server]
vardir = ...
logdir = ...
rundir = ...
pidfile = ...
codedir = ...
dns_alt_names = pupmaster.egovelox.com

```







