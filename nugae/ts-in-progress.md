---
title: "ts in progress"
description: "traditional post"
date: "2021-03-25"
public: false
---

## TS Generics

```typescript
class Queue<T> {
  private data : T[] = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}
type Disc  = {
    name: string;
    date: Date;
} 

const queue = new Queue<Disc>();

queue.push({
    name: "Barry",
    date: new Date
});

queue.push({
    name: "Barry",
    date: new Date()
});


function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}



const g = (tab: string[]) => tab.length
const f = (n : number) => `Length is ${n}`


function compose<A>(a: A): <B, C>(g: (a: A) => B, f: (b: B) => C) => void {
    return function(g, f) {
        f(g(a))
    }
}

compose(["1", "2", "3"])(g, f)
```


```typescript
"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const queue = new Queue();
queue.push({
    name: "Barry",
    date: new Date
});
queue.push({
    name: "Barry",
    date: new Date()
});
function reverse(items) {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
const g = (tab) => tab.length;
const f = (n) => `Length is ${n}`;
function compose(a) {
    return function (g, f) {
        f(g(a));
