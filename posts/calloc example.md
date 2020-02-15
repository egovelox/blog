---
title: "calloc example"
description: "traditional post"
date: "2020-02-15"
public: true
---

When you need to allocate an array during runtime.

```c
int main()
{
    double *array;
    int i;

/*
 * Allocation of 3 * 8 bytes, for 3 double numbers. c
 * calloc() returns an address of type void*
*/
    array = (double*) calloc(3, sizeof(double));

    printf("array address: %p\n", array);

    array[0] = 1.1;
    array[1] = 2.21;
    array[2] = 5.654234;

    for(i=0; i<3; i++)
    {
        printf("array[%d] : %lf\n", i, array[i]);
    }

    return 0;
}
```

Result after execution : 

```bash
egovelox$ ./callocExample
array address: 0x7fd64ac01820
array[0] : 1.100000
array[1] : 2.210000
array[2] : 5.654234
```