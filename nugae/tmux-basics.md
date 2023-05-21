---
title: "tmux basics"
description: "traditional post"
date: "2022-12-04"
public: false
---

Install tmux via Homebrew

```bash
brew install tmux

```
Launch a tmux session with the ``tmux`` command. 
List all shortcuts with ``Ctrl-B ?``

Open a pane to the left with ``Ctrl-B %``. 
Open a pane to the bottom with ``Ctrl-B "``.
Switch between panes with ``Ctrl-B [arrow]``.

Create a new window with ``Ctrl-B c``.
Switch between windows with ``Ctrl-B [window id].
Rename a window with ``Ctrl-B ,``.

Detach the current tmux session with ``Ctrl-B d``.
List the open tmux sessions with ``tmux ls``.
Re-attach to a particular tmux session with ``tmux attach -t [session number]``.
Rename a tmux session with ``tmux rename-session -t [session number] [session name]``

Open a new tmux named-session with ``tmux new -s [session name]``
Kill a tmux session with ``tmux kill-session -t [session name]``

