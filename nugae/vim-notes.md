---
title: "vim notes"
description: "traditional post"
date: "2020-10-13"
public: false
---

## Default <Leader> key
In vim, the default leader key is '\'

## Switch between (vim) tabs
gt 
gT

## Delete a word
diw (innerword)
This can be extended, using visual mode: viwd 

## Install a plugin without a plugin-manager

Since v8, vim can manage packages.

To install a plugin that will automatically load when vim starts :
1. Go into .vim folder and create a tree for your plugin
mkdir -p nerdtree/start/
cd nerdtree/start
2. git clone http://...
3. read the f* manual, e.g for nerdtree, :NERDTree to start

## Enable key repeat inside VSCode (bash commands for MacOS)
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false         # For VS Code
$ defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false # For VS Code Insider
$ defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false    # For VS Codium
$ defaults delete -g ApplePressAndHoldEnabled                                      # If necessary, reset global default

## Configure focus to sidebar + toggle
In the keybindings.json file of VSCode, add the following :
[
    { // Unbind unconditional default
        "key": "cmd+0",
        "command": "-workbench.action.focusSideBar"
      },
      { // to ←
        "key": "cmd+0",
        "when": "!sideBarFocus",
        "command": "workbench.action.focusSideBar"
      },
      { // from →
        "key": "cmd+0",
        "when": "sideBarFocus",
        "command": "workbench.action.focusActiveEditorGroup"
      },
    
]