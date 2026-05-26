## console.log()

To write (log) something on the console

```js
console.log("Hello World");

console.log(12345);

console.log(2 + 2);

console.log("Hello", "World", 123);
```

## Linking JS File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello JavaScript!!</h1>
    <script src="app.js"></script> <!-- Linking JS File -->
</body>
</html>
```

## Template Literals

Used to add embedded expressions in a string.

```js
let a = 5;
let b = 10;
console.log(`Price is ${a + b} rupees`);
// console.log("Price is", a + b, "rupees");
```

## Operators in JS

- Arithmetic (+, -, *, /, %, **)
- Unary (++, --)
- Assignment (=, +=, -=, *=, /=, %=, etc)
- Comparison
- Logical

### Comparison Operator

Comparison Operators used to compare 2 values

- `>`
- `>=`
- `<`
- `<=`
- `==`
- `!=`
- `==`, `!=` compares value, not type
- `===`, `!==` compares value & type

### Logical Operators

Logical operators are used to combine boolean expressions.

- `&&` Logical AND
- `||` Logical OR
- `!` Logical NOT

```js
true && true // true
true && false // false
false && true // false
false && false // false

true || true // true
true || false // true
false || true // true
false || false // false

!true // false
!false // true
```

## truthy and falsy

Everything in JS is true or false (in boolean context).

This doesn't mean their value itself is true or false, but they are treated as true or false if taken in boolean context.

### Falsy values

false, 0, -0, 0n (bigint value), ""(empty string), null, undefined, NaN

### Truthy values

Everything else

## Conditional Statements

- if
- if-else
- else-if
- switch
- Ternary Operator (? :)

### if Statement

```js
if (some condition) {
    // Do SOMETHING
}
```

### if-else Statement

```js
if (condition1) {
    // Do SOMETHING
} else {
    // Do SOMETHING ELSE
}

```

### else-if Statement

```js
if (condition1) {
    // Do SOMETHING
} else if (condition2) {
    // Do SOMETHING ELSE
}
```

### Nested if-else Statement

Nesting is writing if-else inside if-else statements. It can have many levels

```js
if (condition1) {
    if (condition2) {
        // Do SOMETHING
    } else {
        // Do SOMETHING ELSE
    }
} else {
    // Do SOMETHING ELSE
}
```

### switch Statement

Used when we have some fixed values that we need to compare to.

```js
let color = "yellow";

switch (color) {
    case "red" :
        console.log ("Stop");
        break;
    case "yellow" :
        console.log ("Slow Down");
        break;
    case "green" :
        console.log ("Go");
        break;
    default :
        console.log ("Broken Light");
}
```

## Alerts & Prompts

- Alerts displays an alert message on the page.

    ```js
    alert("Something is wrong!");
    ```

- prompt displays a dialog box that asks user for some input.

    ```js
    prompt("Please enter name")
    ```
