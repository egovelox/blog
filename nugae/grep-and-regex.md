---
title: "Grep and Regex"
description: "traditional post"
date: "2023-09-30"
public: true
---


Grep for files
```bash
grep [OPTIONS] PATTERN [FILE1 FILE2 FILE3 ...]
```

Grep for files in directories
```bash
grep -r [OPTIONS] PATTERN [DIR1 DIR2 DIR3 ...]
```


## Regex flavors  

Two options in grep can change the regex flavor.


### ``grep -G``

This is Basic Regex, and this is the default.

You get basic reserved characters :
```text

. [] ^ $ * \

```

You get other reserved characters, but only if you prefix them with ``\``
```text

? + ()  {} |

```

Example: matching lines beginning with 'FC S' :
```bash
grep '^FC S' clubs.txt

## outputs :
## FC Shalke 04

grep '^FC.\?S' clubs.txt

## outputs :
## FC Shalke 04
```


### ``grep -E`` 

This is Extended Regex.

You get basic reserved characters (see above) but also extended reserved characters - no need to prefix them with ``\`` !
```text

? + ()  {} |

```

Note that ``grep -E`` is the equivalent of ``egrep``

Example: matching lines beginning with 'FC S' :
```bash

grep -E '^FC.?S' clubs.txt

```


### ``grep -F`` 

This is fixed string mode : you can give a search pattern where none of the characters have any special interpretation.

Example: matching lines containing a '.' :
```bash

grep -F '.' clubs.txt

## . is not regex a reserved char here
## outputs :
## Aston Villa F.C.

```

## Work file ``clubs.txt``

```txt
Arsenal FC
Aston Villa F.C.
Barnsley FC
Birmingham City FC
AFC Bournemouth
Bradford City AFC
Brentford FC
Brighton & Hove Albion FC
Burnley FC
Chelsea FC
Hull City AFC
Leeds United FC
Manchester City FC
Manchester United FC
Newcastle United FC
Tottenham Hotspur FC
Wolverhampton Wanderers FC
West Ham United FC
FC Bayern Munich
Eintrach Frankfurt eV
Hamburger SV
FC Shalke 04
Hertha Berlin SC
Hannover 96
RB Leipzig
FC Union Berlin
SC Fortuna Köln
Athletic Club
Girona FC
Real Madrid CF
Villareal CF
Real Club Celta de Vigo
FC Barcelona
Club Athletico de Madrid
Real Sociedad
```
