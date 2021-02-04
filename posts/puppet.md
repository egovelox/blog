---
title: "Puppet server/agent conf"
description: "devops post"
date: "2021-01-20"
public: true
---


## Prerequisits
You should register the dnsnames of your machines in your registrar, or use
a mapping of your IP inside /etc/hosts

## Install on ubuntu 18.04
You can find packages on https://apt.puppetlabs.com
```bash
# in your homedir, 
# replace the right pkg for agent or server

wget https://apt.puppetlabs.com/puppet7-release-bionic.deb
sudo dpkg -i puppet7-release-bionic.deb
sudo apt update

```

Check puppet is not running on the server nore on the agent.

```bash
# on server
systemctl status puppetserver
systemctl status puppet

# on agent
systemctl status puppet

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

Start puppetserver on the server :
```bash
systemctl start puppetserver
```
then puppet, on the agent :
```bash
systemctl start puppet
```







