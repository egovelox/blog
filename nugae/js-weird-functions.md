---
title: "js weird functions"
description: "traditional post"
date: "2021-03-25"
public: false
---

This post puts a focus on JS functions.

1. First-class functions: 
This concept means, everything you can do with other types, you can do with functions. Assign them to variables, pass them around, create them on the fly.

2. The function object
It resides in memory, like all objects.
You can attach properties and method to functions, just like to an object: so you can attach Primitive, Object, Function
Moreover, functions have two special properties : a Name (is optional, can be anonymous), and CODE (is invokable).

Think of a function as an object, whose CODE just happens to be one of the properties of that object.

```javascript
function greet() {
    console.log('hi');
}

// attach a prop to a function
greet.language = "english";

console.log(greet); // in JS, you just get the text of the function - not really useful in this case !
console.log(greet.language); // print 'english'

greet(); // invoke the CODE property : console.log('hi');

```

3. Function statements and function expressions

An expression : a unit of code that results in a value. It does not have to save to a variable.

```javascript
var a;
a = 3; // This is an expression. The = operator returns 3. You'll see 3 after typing this line in the browser dev tools.
1 + 2; // idem, the expression evaluates, i.e runs and returns 3.
```

A statement is different, as it does not return a value when it is run through during execution. 
It can be either if-statement, or variable-declaration-statement, or initialization-statement, or function-statement, etc.

```javascript
// function statement
function greet() {
    console.log('hi');
}

// innitialization-statement, with function expression
var greet = function greet() {
    console.log('hi');
}
// of course you should better write : 
var anonymousGreet = function () {
    console.log('hi');
}

// caveat : function expressions are not hoisted like normal functions. Lexical order matters here.
```

Another example, involving function expression : create a function object on the fly.

```javascript
function log(a) {
    console.log(a);
}

// create a string on the fly
log('hi');

// create an object on the fly
log({greeting: 'hi'});

// create a function on the fly (a function IS an object)
log(function() {
    console.log('hi');
});
```

4. Objects, functions and 'this'

When an invocation of a function occurs, there is the creation of an execution context.
i.e 
1. variable environment is created
2. outer environment is created (remember, referencing the lexical environment)
3. a variable **this** is created, pointing to a certain object.

The 'this' variable will be pointing at a different object - a different thing - **depending on how the function is invoked**.

5. 'arguments' and SPREAD

The concept of arguments in general : the parameters you pass to a function invokation.

```javascript
function greet(firtname, lastname, language) {
    console.log(firstname)
    console.log(lastname)
    console.log(language)
}

// remember JS allows these calls :
greet(); // prints 3 undefined
greet('John'); // prints John and 2 undefined
greet('John', 'Doe'); // prints John, Doe, and undefined
greet('John', 'Doe', 'es'); // does the job

// now ES6 allows default parameters:
function greet_es6(firstname = '', lastname = '', language = 'en') {
    ...
}
// before ES6 this pattern was used
function greet_es5(firsname, lastname, language) {
    firstname = firstname || ''; // firstname (on the right) will coerce to false if not passed as argument;
    lastname = lastname || '';
    language = language || 'en';

    ...
}

```

When an invocation of a function occurs, there is the creation of an execution context.
During this phase, the variable **'arguments'** is created also, pointing to an array-like structure, containing the arguments you passed to the function invokation.

```javascript
function greet(firstname, lastname, language) {
    if (arguments.length === 0) {
        console.log('Missing arguments');
        return;
    }

    ...
}
go(to)
```

ES6 introduces the spread operator, which can be useful in function parameters declarations :

```javascript
function greet(firstname, lastname, language, ...other) {
   // other is an array of extra arguments 
   console.log('extra arguments', ...other)
}
```

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
