---
title: "git tips"
description: "traditional post"
date: "2019-12-28"
public: false
---

Remember a few GIT tips.

## Git aliases

1. ```git logline``` as an alias to a pretty ```git log```
git config --global alias.logline "log --graph --pretty=format:'%Crosa%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

2. ```git stt``` as an alias to ```git status```
git config --global alias.stt "status"

## Git search

1. To have your search CASE-UNSENSITIVE add \c
/\cMy_seArcHed_wOrd

## Git checkout

1. You can use ```git checkout -``` to checkout to the previous state (branch or commit)