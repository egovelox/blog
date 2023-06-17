---
title: "Intro to Perl"
description: "traditional post"
date: "2023-06-17"
public: true
---

## Install on MacOs

Install ``perl`` with ``brew install perl``

```bash
$ command -v perl

/opt/homebrew/bin/perl

```

## Perl command line

[https://www.perl.com/pub/2004/08/09/commandline.html](https://www.perl.com/pub/2004/08/09/commandline.html)

Let's print ``file.txt`` with perl :

```bash
perl -p -e '' file.txt
```

### The -p option

The ``-p`` option implicitly runs a loop that prints the content of ``_$`` each time around the loop.

```
  LINE:
    while (<>) {
      # your code goes here
    } continue {
      print or die "-p destination: $!\n";
    }
```
This above uses the (little-used) ``continue`` block on a ``while`` loop to ensure that the print statement is always called.

So let's give an example using this option : 
print the number of the line before each line

```bash
perl -p -e '$_ = "$. - $_"' file.txt
```

### In-place editing

Let's use a search and replace regex to edit a file :

```bash
perl -pe 's/\bPHP\b/Perl/g' < file.txt > edited_file.txt
```

Same, but overwriting ``file.txt`` :

```bash
perl -i -pe 's/\bPHP\b/Perl/g' file.txt
```

Same, but with a backup in ``file.txt.bak`` :

```bash
perl -i.bak -pe 's/\bPHP\b/Perl/g' file.txt
```

### Where perl comes handy inside vim

``vim`` can be tremendously slow when running a command like :

```
:%s/\n//g
```

To achieve the same, inside ``vim`` with ``perl`` :

First go to the top of the file with ``gg``.

Then ``!G`` and then write

```bash
perl -p -e 's/\n//g'
```

``vim`` will replace the entire buffer with the output of the perl script.

See this link :

[https://unix.stackexchange.com/questions/664365/vim-search-and-replace-to-correct-broken-line-breaks](https://unix.stackexchange.com/questions/664365/vim-search-and-replace-to-correct-broken-line-breaks)
