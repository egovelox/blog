---
title: "Ansible basics"
description: "traditional post"
date: "2021-02-15"
public: false
---
## Ansible glossary 

- inventory : 
set of servers

- a task : 
an action of a given module (each task uses a module)

- a role: 
set of tasks aimed at a single goal
Ansible galaxy allows sharing roles
A role has a specific structure of dirs and files

- a playbook
binds an inventory and roles
note that playbooks can have hosts and tasks (simple usage, without roles or inventories)

## Ansible dependencies

- Distinguish Controller Node and Managed Nodes

- For CNs, Python >= 2.7 and ssh/sftp
- For MNs, Python >= 2.6 
From the configured CN, you can use this CLI command (the raw module does not require Python on the MN)
ansible my_managed_node --become -m raw -a "yum install -y python3"

## 4 ways to install Ansible

- package managers
e.g apt install ansible, will create /etc/ansible/ansible.cfg

- with python 
pip3 install ansible==2.9 
useful for multiple versions (via virtualenv)

- from source
via git clone and pip (not so common)

- with docker 
(specific usage)

## Configure SSH
On the CN, ssh-keygen -t ecdsa -b 521
On the MN, create a .ssh dir if necessary, edit authorized_keys and copy the public key or use ssh-copy-id -i my_private_key user@host
Test it with ssh -i my_private_key user@host
You can add at the beginning of the MN authorized_keys corresponding line: from="10.0.0.?,*.example.com,no-X11-forwarding"
You can configure ssh-agent on the CN : ssh-add -l (check with: eval 'ssh-agent')
On the CN also, you can have a .ssh/config (and then log with: ssh host_IP)
Host *
    User egovelox
    Port 22
    IdentityFile /home/egovelox/.ssh/id_ecdsa
    Compression yes
    LogLevel INFO
