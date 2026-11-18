# Practice Questions

## Qn 1.

What is the value of age after this code runs?

```js
let age = 23;
age + 2; // After 2 years
```

### Ans: `23`

## Qn 2.

What is the value of avg after the code runs?

```js
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
```

### Ans: `90`

## Qn 3.

What is the value of each variable in each line of code?

```js
let num = 5;
let newNum = num++;
newNum = ++num;
```

### Ans:

- 1st line `num = 5`
- 2nd line `newNum = 5`, `num = 6`
- 3rd line `newNum = 7`, `num = 7`

## Qn 4.

Find the errors in the following code?

a.
```js
let 1age = 5;
let 2age = 10;
```

b.
```js
let marks = 75;
let isPass = True;
```

c.
```js
let isPass = 'true';
```

### Ans:

a.
```js
let age1 = 5;
let age2 = 10;
```

b.
```js
let marks = 75;
let isPass = true;
```

c.
```js
let isPass = 'true';  // This is a STRING, not a boolean
// Correct way: let isPass = true;
```

## Qn 5.

Declare your name as a string and find its length.

### Ans:

```js
let name = "Jomon Joy";

name.length; // 9
```

## Qn 6.

Declare your first name as a string and find its first character.

### Ans:

```js
let firstName = "Jomon";

firstName[0]; // J
```

## Qn 7.

Declare your first name as a string and find its last character.

### Ans:

```js
let firstName = "Jomon";

firstName[4]; // n

firstName[firstName.length-1]; // n
```

## Qn 8.

What is result of the following code:

```js
"ABCDEFG"+123
```

### Ans:

```js
'ABCDEFG123'
```

## Qn 9.

What are the lengths of an empty string and a string with a single space?

### Ans:

```js
let empty = "";
empty.length; // 0

let space = " ";
space.length; // 1
```
