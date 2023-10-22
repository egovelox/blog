---
title: "A Python setup on MacOS"
description: "traditional post"
date: "2023-10-22"
public: true
---

A memo describing how to setup a robust ``Python`` environment on MacOS >= Ventura 13.5


## Know which version your system is using

```bash
python3 --version

python3 -m pip --version
```

At runtime :
```python
import sys
print(sys.version_info)
print(sys.version)
```

## Setup pyenv to manage your versions

```bash
brew install pyenv
```

Then basically for fish shell, add the following in ``config.fish`` :
```bash
set -g -x PYENV_ROOT $HOME/.pyenv
fish_add_path $PYENV_ROOT/bin
pyenv init - | source
```

```bash
echo $PATH
# outputs :
# /Users/myuser/.pyenv/shims ...

pyenv versions
# outputs :
# * system

# Requires a build environment to build Python new versions
  # xcode-select --install
  # brew install openssl readline sqlite3 xz zlib tcl-tk
pyenv install 3.12.0

pyenv version
# outputs :
# * system
# 3.12.0

# Use the 3.12.0 installed version globally
pyenv global 3.12.0

python3 --version
# outputs :
# Python 3.12.0

# to restore the system version globally
pyenv global system
```

Pyenv relies on the usage of so-called shims, visit [https://github.com/pyenv/pyenv](https://github.com/pyenv) for further documentation

```bash
which python3
# outputs : 
# /Users/myuser/.pyenv/shims/python3
```

## Setup your development environment

For neovim, thanks to mason plugin, you can easily provide :

```bash
# lsp server
pyright 

# tools
# python linter
ruff
# python linter and static type checker
mypy 
# python code formatter
black
```

## Start a project with venv (virtual env)

```bash
python3 -m venv myproject

cd myproject

ls
# outputs :
# bin   include    lib    pyvenv.cfg
```

Activate the ``venv``:
```bash
source bin/activate
```
Deactivate the ``venv``:
```bash
deactivate
```

### Reproducing dependencies in another venv

You can easily list your project's dependencies :
```bash
python3 -m pip list
```

To save all of your explicit package dependencies into a file (which, by convention, is named ``requirements.txt``) :
```bash
# list your dependencies
python3 -m pip list

python3 -m pip freeze > requirements.txt

cat requirements.txt
# outputs :
# numpy==1.16.2
# pytz==2018.9
```

Then imagine you'd like to have another ``venv`` that matches the ``myproject`` environment :
```bash
python3 -m venv otherproject

cd otherproject

source bin/activate
```

The ``otherproject`` will have no extra packages installed :
```bash
(otherproject)$ python3 -m pip list
# outputs :
# pip 10.0.1
# setuptools 39.0.1

# install the myproject deps :
(otherproject)$ python3 -m pip install -r ../myproject/requirements.txt

# Check !
(otherproject)$ python3 -m pip list
```
