---
title: "#1 Modern C : getting started"
description: "traditional-post"
date: "2023-05-21"
public: true
---



### A basic program

```c
// getting-started.c
#include <stdlib.h>
#include <stdio.h>

int main(void) {
  double A[5] = {
    [0] = 9.0,
    [1] = 2.9,
    [4] = 3.E+25,
    [3] = .00007,
  };

  for (size_t i = 0; i < 5; ++i) {
    printf(
      "element %zu is %g, \tits square is %g\n",
      i,
      A[i],
      A[i] * A[i]
    );
  }
}
```



### Compile

- ``-Wall`` warns us about anything that is unusual
- ``-lm`` adds some standard mathematical functions if neccessary
- ``-o`` stores the **compiler output** in a file named `getting-started`

```bash
gcc -std=c17 -Wall -lm -o getting-started getting-started.c
```



### Execute

```bash
./getting-started
```

This basic program prints :

```bash
element 0 is 9,         its square is 81
element 1 is 2.9,       its square is 8.41
element 2 is 0,         its square is 0
element 3 is 7e-05,     its square is 4.9e-09
element 4 is 3e+25,     its square is 9e+50
```


### Acknowledgments
The source of this memo is from the 'Modern C' book, by Jens Gustedt, Manning 2020.
