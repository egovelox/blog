---
title: "Puppet server/agent conf"
description: "devops post"
date: "2021-01-20"
public: true
---


## Prerequisits
You should register the dnsnames of your machines in your registrar, 

or use a mapping of your IP inside /etc/hosts.

Throughout this example, I use :
- pupmaster.egovelox.com for the server,
- pupagent.egovelox.com for my first agent.

## Install on ubuntu 18.04
You can find debian-based packages on [https://apt.puppetlabs.com](https://apt.puppetlabs.com)

```bash
# in your homedir, 
# replace the right pkg and version, for agent or server

wget https://apt.puppetlabs.com/puppet7-release-bionic.deb
sudo dpkg -i puppet7-release-bionic.deb
sudo apt update

```
Now you can find and install the latest versions with : 
```bash
apt-cache search ^puppet

```

After your apt-installs, modify your PATH and add to it:
```bash
#inside .bashrc or your shell conf
export PATH=$PATH:"/opt/puppetlabs/bin/"
```

check if puppet is not running on the server nore on the agent,

and if it is, stop it.
```bash
# on server
systemctl status puppetserver
systemctl status puppet

# on agent
systemctl status puppet

```

Now let us configure the agent puppet.conf file

```bash
#/etc/puppetlabs/puppet/puppet.conf

[main]
server = pupmaster.egovelox.com
certname = pupagent.egovelox.com

```
Configure the server puppet.conf file

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
## Setup the SSL certificates

Start puppetserver **on the server** :
```bash
systemctl start puppetserver

```
and simply run : 
```bash
# use -h if needed

puppetserver ca setup

```
Now the server is ready, let's **switch to the agent** and start it:
```bash
systemctl start puppet

```
Then try to run :
```bash
puppet agent --test

...
...
Could not fetch certificate from CA server; you might still need to sign this agent certificate
```

**Back on the server**, we should see the pending certificate : 
```bash
puppetserver ca list

```
Now you can sign it with the following command : 
```bash
puppetserver ca sign --certname pupagent.egovelox.com

```
Back **on the agent** , check again : 
```bash
puppet agent --test

```
and you should be done for the basic install.

## Next steps
You might be interested with the following **puppet docs** to get familiar with this tool : 

- Important directories and files
[https://puppet.com/docs/puppet/7.3/dirs_important_directories.html
](https://puppet.com/docs/puppet/7.3/dirs_important_directories.html)

- Beginner's guide to writing modules
[https://puppet.com/docs/puppet/7.3/bgtm.html](https://puppet.com/docs/puppet/7.3/bgtm.html
)
- Catalog of modules 
[https://forge.puppet.com/](https://forge.puppet.com/)

- Publishing modules on the Puppet Forge
[https://docs.huihoo.com/puppet/puppet/3/reference/modules_publishing.html](https://docs.huihoo.com/puppet/puppet/3/reference/modules_publishing.html)






