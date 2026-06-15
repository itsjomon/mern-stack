## this Keyword

`this` keyword refers to an object that is executing the current piece of code.

## try & catch

The try and catch statements allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block

```js
try {
    console.log(a);
} catch {
    console.log("Caught an error... a is not defined");
}


try {
    console.log(a);
} catch (err) {
    console.log(err); // ReferenceError: a is not defined
    console.log("Error name:", err.name); // ReferenceError
    console.log("Error message:", err.message); // a is not defined
}
```

## Arrow Functions

```js
// const func = (arg1, arg2 ..) => {function definition};

const sum = (a, b) => {
    console.log(a+b);
};
```

### Implicit return

```js
// const func = (arg1, arg2 ..) => (value);

const mul = (a, b) => (a * b);
```

## Set Timeout

`setTimeout` is a function that delays the execution of a specific callback function by a specified time (in milliseconds), while allowing the rest of the code to run without waiting.

`clearTimeout` is a function that cancels a `setTimeout` before it executes, using the ID returned by `setTimeout`.

```js
// setTimeout(function, timeout)

let timeoutId = setTimeout(() => {
    console.log("Hello World!");
}, 4000);

// Cancel before execution
clearTimeout(timeoutId);
```

## Set Interval

`setInterval` is a function that repeatedly executes a callback function at a fixed time interval (in milliseconds). It returns a unique ID that can be used with `clearInterval()` to stop the execution.

```js
// setInterval(function, interval)

let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);

// Stop when needed
clearInterval(id);
```