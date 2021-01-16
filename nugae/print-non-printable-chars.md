---
title: "print non-printable ASCII chars"
description: "traditional post"
date: "2020-04-02"
public: true
---
Just use commands producing dumps :

use either od,
```bash
echo -n "$IFS" | od -t x1
0000000 20 09 0a
0000003
```

or simply xxd
```bash
echo -n "$IFS" | xxd -u -c1
00000000: 20
00000001: 09 . 
00000002: 0A .
```