---
title: "javascript under the hood"
description: "traditional-post"
date: "2021-03-21"
public: false
---

## The preset phase (involving the global execution context)

Althoug javascript (js) is being interpreted by the JS-engine, it not happens directly : before execution, there is a creation phase, where the **global execution context** is created,then set up (imagine the 'global execution context' as a wrapper around the code you wrote), and eventually executed (your code is running inside it, line by line).
1. the global object is set up, inside the global execution context.
2. the 'this' object is created
3. the reference to the 'outer environment', if there is one, is also created)

4. Last but not least, during this creation phase, you have what is called **hoisting** : a memory-space is set up for the functions and the variables that are going to be used when it starts executing the code.

#### functions
That is why, since functions are entirely defined before execution, they can be called even before their declaration in your source code.



#### variables
As for the variables written in whatever **lexical environment**, there are also set up, and seen inside the execution context, but before execution, they will only contain the **'undefined'** value (it was set up in the execution context, but did not receive a value yet)

And that is why you get 'undefined' if you use a variable before its initialization in your source code.

Here is a weird behaviour, due to what is just said above. 
(due also to type coertion)

```javascript
function greet(name) {
    console.log('Hello ' + name)
}

greet(); // prints out 'Hello undefined'

// that is why one should add inside greet:
// name = name || '<Your name here>'
// or define greet with ES6 
// function greet(name = '<Your name here>') {...}
```
Explanation: a function has its parameters set up before execution, and will be called even if there are not provided, just like :

```javascript
console.log(a) // prints out undefined
var a;
```
Remember, undefined is different than this error :

```javascript
console.log(a) // Uncaught ReferenceError: a is not defined
``` 
## A function call (involving a new execution context, and the execution stack)

When a function gets actually called, a new execution context is created, and pushed onto the execution stack (even a function calls itself, a new execution context is created). This means
1. a this object is created
2. a reference to the 'outer environment' is also created
3. hoisting happens, memory space is set up for the functions and the variables that are going to be used when the function call gets executed.

## The variable environment (scope) and the outer environment of an execution context

As we said, each execution context, just after its creation, sets up the variables it will use. We can name this the **variable environment** of the execution context (also named the scope)

As we said also, each execution context sets up a reference to an 'outer environment'. What is this other environment ? It is the variable environment where the execution context can find all the variables that have not been set up inside its own variable environment.

Here is a question about the 'outer environment'. What is the value printed by the following code ?
```javascript
function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();

// prints out... '1'!
```

The function b is declared, lexically (i.e physically written), in the global variable environment (global scope). 

When it gets called, its execution context contains a reference to the 'outer environment', that is the global variable environment.
Of course, would the function b have been declared **inside the function a**, '2' would have been printed out.
Remember : the reference to the 'outer environment' is set up by the execution context, and it references the **lexical environment**.

Btw if you don't want to think 'lexically', another way to think about this scope chain or outer reference to environments, is: 
Who created me ?
In fact, the outer reference is always to the execution context in which the function was created.



## Acknowledgments
The source of this memo is a udemy video course: Tony Alicea, Javascript Understanding the Weird Parts. Mainly Chapter 2: Execution Contexts and Lexical Environments