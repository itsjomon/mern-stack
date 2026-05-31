# Loops

Loops are used to iterate a piece of code by repeatedly running a block until a condition is met.

## for loop

Loop that runs a set number of times with initialization, condition, and update steps.

```js
for (initialisation; condition; updation){
    // code
}
```

## Nested for loop

Loop inside another loop. Used for 2D arrays or patterns.

```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        // code
    }
}
```

## Infinite Loops

An infinite loop is a loop that never ends because its exit condition is never met or it lacks an exit condition altogether. This causes the loop to run indefinitely, which can freeze or crash programs if not controlled.

```js
// Example
for (let i = 1; i >= 0; i++) {
}

for (let i = 1; i <= 5; i--) {
}

for (let i = 1; ; i++) {
}
```

## while loop

Runs while condition is true. Use when iterations are unknown.

```js
while (condition) {
    // code
}
```

## break Keyword

Stops the loop immediately and exits it.

```js
break;
```

## Loops with arrays

Iterate through array elements using index.

```js
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

## Nested loops with nested arrays

Loop through 2D arrays (arrays inside arrays).

```js
for (let i = 0; i < outerArray.length; i++) {
    for (let j = 0; j < outerArray[i].length; j++) {
        console.log(outerArray[i][j]);
    }
}
```

## for...of loop

A `for...of` loop operates on the values sourced from an **iterable** (like arrays, strings, maps, sets, etc.) one by one in sequential order.

```js
for (let item of array) {
    // code
}
```

## Nested for...of loop

For 2D arrays (arrays inside arrays).

```js
for (let outer of twoDArray) {
    for (let inner of outer) {
        // code
    }
}
```
