---
title: "Basic shell tests"
description: "traditional post"
date: "2022-12-05"
public: true
---

Fundamental knowledge on how to perform various tests in shell scripting . 

The following conditionnal pattern is ``POSIX`` compliant :
```sh
if [ condition ]; then
  do something
else 
  do other thing
fi
```

Test if a command does not exists : -x means ``executable``.
```sh
if ! [ -x  $(command -v git)]; then
  echo "Warning: git command is not found"
fi
```

Test if a file (remember, a unix file can be anything) exists : -e means ``existing``.
```sh
if ! [ -e  filename ] then
  echo "Warning: filename is not found"
fi
```

To be more precise, use ``-d`` or ``-f`` (``directory``, regular ``file``)







Source : https://linuxconfig.org/bash-scripting-cheat-sheet

