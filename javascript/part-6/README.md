## Functions in JS

Functions are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

E.g.,

```js
console.log();

arr.push();

arr.pop();
```

**Function Definition (telling JS)**

```js
function funcName() {
    // do something
}
```

**Function calling (Using the function)**

```js
funcName();
```

### Function with Arguments

Values we pass to the functions

```js
function funcName(arg1, arg2) {
    // do something
}
```

## return Keyword

Used to return some value from the function.

```
+-------+                                           +--------+
|       |                                           |        |
| input | ----> [ Function (does some work) ] ----> | output |
|       |                                           |        |
+-------+                                           +--------+
```

```js
function funcName(arg1, arg2) {
    // do something

    return val;
}
```

## Scope

Scope determines the accessibility of variables, objects, and functions from different parts of the code.

- Function
- Block
- Lexical

### Function Scope

Variables defined inside a function are not accessible (visible) from outside the function.

- `var` is function-scoped

### Block Scope

Variables declared inside a {} block cannot be accessed from outside the block.

- `let` & `const` ARE block-scoped

### Lexical Scope

A variable defined outside a function can be accessible inside another function defined after the variable declaration.

The opposite is NOT true.

### Hoisting

Hoisting is JavaScript's behavior where variable and function declarations are moved to the top of their scope before code runs.

| Type | Hoisted? | Can use before line? | Value before line |
|------|----------|---------------------|-------------------|
| `var` | Yes | Yes | `undefined` |
| `let` | Yes | No | `ReferenceError` |
| `const` | Yes | No | `ReferenceError` |
| `function` declaration | Yes | Yes | Full function |
| Arrow function (`var`, `let`, `const`) | Yes | No | `ReferenceError` (let/const) or `TypeError` (var) |

```js
// 1. var - Hoisted with undefined value
console.log(a);  // undefined (variable exists but has no value yet)
var a = 10;
console.log(a);  // 10 (assigned value works)

// 2. let - Hoisted but uninitialized (Temporal Dead Zone)
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// 3. const - Same as let, cannot access before line
console.log(c);  // ReferenceError: Cannot access 'c' before initialization
const c = 30;

// 4. function declaration - Hoisted completely with full body
sayHi();         // "Hello" (works perfectly before declaration)
function sayHi() {
    console.log("Hello");
}

// 5. Arrow function with const - Behaves like const variable
hello();         // ReferenceError: Cannot access 'hello' before initialization
const hello = () => console.log("Hi");

// 6. Arrow function with let - Behaves like let variable
greet();         // ReferenceError: Cannot access 'greet' before initialization
let greet = () => console.log("Hey");

// 7. Arrow function with var - Hoisted as undefined, not a function
bye();           // TypeError: bye is not a function
var bye = () => console.log("Bye");
```

## Function Expressions

Function Expression: A function that is stored as a value in a variable, allowing the function to be reassigned, passed as an argument, and defined conditionally, just like any other variable value.

```js
const variable = function(arg1, arg2) {
    // do or return something
}
```

## Higher order Functions

A function that does one or both:

- Takes one or multiple functions as arguments
- Returns a function

```js
// Higher order Functions

// 1. Takes a function as argument
function multipleGreet(fn, n) {
    for (let i = 1; i <= n; i++) {
        fn();
    }
}

let greet = () => console.log("hello");
multipleGreet(greet, 2);  // hello hello


// 2. Returns a function
function oddEvenTest(req) {
    if(req == "odd") {
        return function(n) {
            console.log(n % 2 !== 0);  // true for odd numbers
        }
    } else if (req == "even") {
        return function(n) {
            console.log(n % 2 === 0);  // true for even numbers
        }
    } else {
        console.log("wrong request");
    }
}

let testOdd = oddEvenTest("odd");
testOdd(5);   // true (5 is odd)
testOdd(4);   // false (4 is not odd)

let testEven = oddEvenTest("even");
testEven(4);  // true (4 is even)
testEven(5);  // false (5 is not even)

// Direct call
oddEvenTest("odd")(7);   // true (7 is odd)
oddEvenTest("even")(8);  // true (8 is even)
```

## Methods

Actions that can be performed on an object.

```js
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};
```

### Methods (Shorthand)

```js
const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};
```
