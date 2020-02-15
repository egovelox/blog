---
title: "calloc example"
description: "traditional post"
date: "2020-02-15"
public: true
---

When you need to allocate an array during runtime.

```c

#include <stdio.h>

int main()
{
    double *array;
    int i;
    
/* 
/*Allocation of 3 * 8 bytes, for 3 double numbers.
/*calloc() returns an address of type void* 
*/
    array = (double*) calloc(3, sizeof(double));

    printf("array address: %p\n", array);

    array[0] = 1.1;
    array[1] = 2.21;
    arrat[3] = 5.654234;

    for(i=0; i<3; i++)
    {
        printf("array[%d] : %6.lf", i, array[i]);
    }

    return 0;
}

```