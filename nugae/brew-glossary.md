---
title: "Brew glossary"
description: "traditional post"
date: "2022-12-04"
public: true
---

Homebrew is a program to install ``packages``, i.e collection of software-files installed together at the same time.

```bash
brew install git
```

When you install a package with brew, it will it breeds the packages for you from an online repository called a ``tap``.

The ``formula`` is a script defining the package's dependencies and how to install it. Some formulas contain ``bottles``, i.e precompiled software binaries.

To keep things clean, all files installed from a formula are stored in one directory called a ``keg``. And all kegs are sorted together in a directory called the ``Cellar``.  

``Casks`` are like formulas, but they install **MacOS apps** into your ``Applications`` folder instead of the ``Cellar``.

```bash
brew install --cask firefox
```

Helpful commands :

```bash
brew list

brew info git

brew cat git
```

Other useful commands : 

```bash
brew uninstall git

brew upgrade git

brew switch git 2.5.0

brew list --versions git
```

https://brew.sh/

