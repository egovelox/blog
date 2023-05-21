---
title: "Basic shell tests"
description: "traditional post"
date: "2022-12-05"
public: true
---

Memorize how to perform various tests in shell scripting : 

The following conditionnal pattern is ``POSIX`` compliant :
```bash
if [ condition ]; then
  do something
else 
  do other thing
fi
```

Test if a command does not exists : -x means ``executable``.
```bash
if ! [ -x  $(command -v git)]; then
  echo "Warning: git command is not found"
fi
```

Test if a file (remember, a unix file can be anything) exists : -e means ``existing``.
```bash
if ! [ -e  filename ] then
  echo "Warning: filename is not found"
fi
```

To be more precise, use ``-d`` or ``-f`` (``directory``, regular ``file``)



Note: In a fish shell script, syntax would be much simpler :

```bash
if test -d $HOME/DEV/rust
  set -l FOO bar
	set -gx FIZ buzz
else
	set -gx BAR foo
end
```




Source : [https://linuxconfig.org/bash-scripting-cheat-sheet](https://linuxconfig.org/bash-scripting-cheat-sheet)

