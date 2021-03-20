---
title: "node install tips"
description: "traditional post"
date: "2021-03-20"
public: false
---

### Change the npm global packages directory

If you don't, npm will install these global packages in /usr/lib/node_modules.
Then you'll get an EACESS error.
So choose to install them in your $HOME:

```bash

mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo "export PATH=$PATH:~/.npm-global/bin' > ~/.bashrc

```

Now test it!

```bash
npm i --global yarn
yarn
```