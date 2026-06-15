# Practice Questions

## Qn 1.

Write a arrow function that returns the square of a number n.

## Qn 2.

Write a function that prints "Hello World" 5 times at intervals of 2s each.

## Qn 3.

Write an arrow function named `arrayAverage` that accepts an array of numbers and returns the average of those numbers.

## Qn 4.

Write an arrow function named `isEven()` that takes a single number as argument and returns if it is even or not.

## Qn 5.

What is the output of the following code:

```js
const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// --- Ans: ---
// Output: undefined
// Reason: object.logMessage is passed as a function reference only,
// so 'this' inside logMessage refers to the global object (window),
// not the 'object'. Since window.message is undefined, it prints undefined.
```

## Qn 6.

What is the output of the following code: 

```js
let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    }
};

object.method(callback, 1, 2);

// --- Ans: ---
// Output: 4
// Reason: callback() is called as a regular function, not as a method of object.
// In regular function calls, 'this' refers to the global object (window).
// Global 'length' is 4, so it prints 4, not 5.
```
