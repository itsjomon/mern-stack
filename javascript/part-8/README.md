## Array Methods

- forEach
- map
- filter
- some
- every
- reduce

### forEach

Executes a function for each element.

```js
arr.forEach(callback);
```

### map

Creates a new array by applying a function to each element.

```js
let newArr = arr.map(callback);
```

### filter

Creates a new array with elements that pass a test.

```js
let newArr = arr.filter(callback);
```

### some

Returns true if at least one element passes the test.

```js
arr.some(callback);
```

### every

Returns true if all elements pass the test.

```js
arr.every(callback);
```

### reduce

Reduces the array to a single value

```js
arr.reduce((accumulator, current) => accumulator + current);
```

## Default parameters

Sets default values for function parameters.

```js
function func(a, b = 2) { }
```

## Spread (...)

Expands an iterable (array, string, etc.) into individual elements.

```js
console.log(...arr);
```

## Rest (...)

Bundles multiple arguments into an array.

```js
function sum(...args) { }
```

## Destructuring

Unpacks values from arrays or objects into variables.

```js
let [first, second] = [1, 2];
let { name } = { name: "John" };
```
