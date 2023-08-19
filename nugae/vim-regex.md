---
title: "Vim search and replace"
description: "traditional post"
date: "2023-08-19"
public: true
---

Vim allows proficient search and replace with the ``:%s`` command.


## Select until nth occurence of a pattern

Non-greedy behaviour: use ``.{-}`` instead of the more common regex operator ``.*?``.

Here as an example, select all until the second occurence of a ``,`` character,
and replace it with the same (``&``) but adding the word ``test`` :

```bash
:%s/\(.\{-},\)\{2\}/&test/
```



